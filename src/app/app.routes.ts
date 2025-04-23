import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductComponent } from './components/product/product.component';
import { EstimateRequestComponent } from './components/estimate-request/estimate-request.component';


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
    path: 'estimate_request',
    component: EstimateRequestComponent
},{
    path: 'faq',
    component: FaqComponent
}







];
