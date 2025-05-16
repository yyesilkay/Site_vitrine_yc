import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [RouterModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formData = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
  this.http.post('', this.formData, { responseType: 'text' }).subscribe({
    next: (response) => {
      console.log(response);
      alert('Email envoyé avec succès ✅');
    },
    error: (err) => {
      console.error('Erreur lors de l\'envoi :', err); 
      alert('Erreur lors de l\'envoi ❌ : ' + err.message);
    }
  });
}

}
