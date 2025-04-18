import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { DevisComponent } from './components/devis/devis.component';
import { NousComponent } from './components/nous/nous.component';
import { FaqComponent } from './components/faq/faq.component';

export const routes: Routes = [{

    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    

},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'contact',
    component: ContactComponent
},{
    path: 'devis',
    component: DevisComponent
},{
    path: 'qui_nous_somme',
    component: NousComponent
},{
    path: 'faq',
    component: FaqComponent
}






];
