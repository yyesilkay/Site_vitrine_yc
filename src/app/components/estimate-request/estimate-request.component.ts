import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-estimate-request',
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatInputModule, MatCheckboxModule  ],
  templateUrl: './estimate-request.component.html',
  styleUrl: './estimate-request.component.css'
})
export class EstimateRequestComponent implements OnInit, OnDestroy {
  
  private fb = inject(FormBuilder);
  private router = inject(Router);

  formValueSubscription : Subscription | null = null ;
  
  formGroup = this.fb.group({
    name: ['', Validators.required],
    prenom : ['', Validators.required],
    adresse: ['', Validators.required],
    email: ['' , [Validators.required , Validators.email]],
    telephone: ['', [Validators.required,Validators.pattern(/^[0-9]{10}$/) ]],
    departement: ['', Validators.required],
    numero_dep: [ 0, [Validators.required, Validators.min(1)]],
    siteVitrine: [false],
    siteEcommerce: [false],
    applicationMobile:[false],
    maintenance: [false],
    questions: [''],
    commentaire: ['']
  });

  ngOnInit(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(value => {
     
  });
      
  }
  ngOnDestroy(): void {
      this.formValueSubscription?.unsubscribe();
  }

  isFieldValid(title: string){
      const formControl = this.formGroup.get(title);
      return formControl?.invalid && (formControl?.dirty || formControl.touched);
  }
  
  submit(event : Event){
    event.preventDefault();

    if(this.formGroup.valid){
     /*
    console.log("Form submitted", this.formGroup.value);
    Retrieve the values after validation
    */

    }

    this.retourner();
  }

  effacer() {
    this.formGroup.reset({
      numero_dep: 1,
      siteVitrine: false,
      siteEcommerce: false,
      applicationMobile:false,
      maintenance: false,

    });
   
  }
  retourner(){
    this.router.navigate(['/home']);

  }
}
