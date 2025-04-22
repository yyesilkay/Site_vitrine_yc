import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/produit/product.component';
import { AboutUsComponent } from './components/AboutUs/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { EstimateRequest } from './components/estimaterequest/estimaterequest.component';


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
    path: 'product',
    component: ProductComponent
},
{
    path: 'about_us',
    component: AboutUsComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'devis',
    component: EstimateRequest
},{
    path: 'faq',
    component: FaqComponent
}







];
