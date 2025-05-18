import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServiceType } from './models/service-type.enum';

@Component({
  selector: 'app-estimate-request',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  templateUrl: './estimate-request.component.html',
})
export class EstimateRequestComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);

  formValueSubscription: Subscription | null = null;

  serviceTypes = [
    { key: 'showcaseSite', label: ServiceType.ShowcaseSite },
    { key: 'ecommerceSite', label: ServiceType.EcommerceSite },
    { key: 'mobileApp', label: ServiceType.MobileApp },
    { key: 'maintenance', label: ServiceType.Maintenance },
  ];

  formGroup = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    department: ['', Validators.required],

    showcaseSite: [false],
    ecommerceSite: [false],
    mobileApp: [false],
    maintenance: [false],
    details: [''],
    comment: [''],
  });

  ngOnInit(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(() => {
      // TODO: add logic to track form changes if needed
    });
  }
  ngOnDestroy(): void {
    this.formValueSubscription?.unsubscribe();
  }

  isFieldValid(title: string): boolean {
    const formControl = this.formGroup.get(title);
    return !!(
      formControl?.invalid &&
      (formControl.dirty || formControl.touched)
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      this.http
        .post('http://server.yesilconseil.fr/send-estimate', formValue, {
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            console.log(response);
            alert('Demande de devis envoyée ✅');
            this.clear();
            this.goBack();
          },
          error: (err) => {
            console.error("Erreur lors de l' envoi du devis: ", err);
            alert('Erreur ❌ : ' + err.message);
          },
        });
    } else {
      console.log('Invalid form !');
    }

    this.goBack();
  }

  clear(): void {
    this.formGroup.reset({
      showcaseSite: false,
      ecommerceSite: false,
      mobileApp: false,
      maintenance: false,
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  isValidEmail(): boolean {
    const emailControl = this.formGroup.get('email');
    return emailControl ? emailControl.valid && emailControl.touched : false;
  }
}
