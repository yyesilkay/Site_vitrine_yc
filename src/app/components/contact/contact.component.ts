import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [RouterModule, FormsModule, HttpClientModule ],
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
  this.http.post('http://localhost:3000/send-email', this.formData, { responseType: 'text' }).subscribe({
    next: (response) => {
      console.log(response); // Ajoute un log pour vérifier la réponse du serveur
      alert('Email envoyé avec succès ✅');
    },
    error: (err) => {
      console.error('Erreur lors de l\'envoi :', err); // Ajoute un log pour les erreurs
      alert('Erreur lors de l\'envoi ❌ : ' + err.message);
    }
  });
}

}
