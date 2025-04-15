import { Component } from '@angular/core';
import { EnTeteComponent } from '../en-tete/en-tete.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [EnTeteComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
