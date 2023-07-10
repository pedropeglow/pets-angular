import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './views/pets/pets.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
