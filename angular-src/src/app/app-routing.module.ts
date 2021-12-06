import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';

import { AuthGuard } from './guards/auth.guard'
import { ComponentMaterialsComponent } from './component-materials/component-materials.component';
import { FinalItemsComponent } from './final-items/final-items.component';
import { NetworkViewComponent } from './network-view/network-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'raw-materials', component: RawMaterialsComponent},
  {path: 'component-materials', component: ComponentMaterialsComponent},
  {path: 'final-items', component: FinalItemsComponent},
  {path: 'network-view', component: NetworkViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
