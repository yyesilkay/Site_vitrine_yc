import { Component } from '@angular/core';
import { EnTeteComponent } from '../en-tete/en-tete.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
