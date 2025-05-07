import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceType } from './models/service-type.enum';

@Component({
  selector: 'app-estimate-request',
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatInputModule, MatCheckboxModule  ],
  templateUrl: './estimate-request.component.html',
})
export class EstimateRequestComponent implements OnInit, OnDestroy {
  
  private fb = inject(FormBuilder);
  private router = inject(Router);

  formValueSubscription : Subscription | null = null ;
  
  serviceTypes = [
    {key : 'showcaseSite', label: ServiceType.ShowcaseSite},
    {key : 'ecommerceSite', label: ServiceType.EcommerceSite},
    {key : 'mobileApp', label: ServiceType.MobileApp},
    {key : 'maintenance', label: ServiceType.Maintenance}
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
      comment: ['']
  });

  ngOnInit(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(value => {
      // TODO: add logic to track form changes if needed

     
  });
      
  }
  ngOnDestroy(): void {
      this.formValueSubscription?.unsubscribe();
  }

  isFieldValid(title: string){
      const formControl = this.formGroup.get(title);
      return formControl?.invalid && (formControl?.dirty || formControl.touched);
  }
  
  onSubmit(event : Event){
    event.preventDefault();

    if(this.formGroup.valid){
    // TODO: add mail service to send the request
    

    }else{
      console.log("Invalid form !");
    }

    this.goBack();
  }

  clear(): void {
    this.formGroup.reset({
      showcaseSite: false,
      ecommerceSite: false,
      mobileApp: false,
      maintenance: false
    });
  }
  
  goBack(){
    this.router.navigate(['/home']);

  }
}
