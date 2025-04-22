import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProduitComponent } from './components/produit/produit.component';
import { NousComponent } from './components/nous/nous.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { DevisComponent } from './components/devis/devis.component';


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
    path: 'produits',
    component: ProduitComponent
},
{
    path: 'qui_nous_sommes',
    component: NousComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'faq',
    component: FaqComponent
},{
    path: 'devis',
    component: DevisComponent
}







];
