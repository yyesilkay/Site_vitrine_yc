import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-devis',
  imports: [MatCheckboxModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, CommonModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent implements OnInit, OnDestroy {

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
      /*
      console.log('Formulaire modifié :', value);
      */
  });
      
  }
  ngOnDestroy(): void {
      this.formValueSubscription?.unsubscribe();
  }

  isFieldValid(titre: string){
      const formControl = this.formGroup.get(titre);
      return formControl?.invalid && (formControl?.dirty || formControl.touched);
  }
  
  submit(event : Event){
    event.preventDefault();

    if(this.formGroup.valid){
      /*
      console.log("Formulaire soumis" , this.formGroup.value);
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
    /*
    console.log("Formulaire réinitialisé.");
    */
  }
  

  retourner(){
    this.router.navigate(['/home']);

  }
  
  


 
  
}
