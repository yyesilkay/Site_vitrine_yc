import { Component } from '@angular/core';
import { EnTeteComponent } from './components/en-tete/en-tete.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,EnTeteComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
