import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { TodoComponent } from './todo/todo.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { ProductviewComponent } from './productview/productview.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CartaddComponent } from './cartadd/cartadd.component';

const routes: Routes = [
  {
    path : '',
    component : SingUpComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'changepassword',
    component : ChangepasswordComponent
  },
  {
    path : 'forgetpassword',
    component : ForgetpasswordComponent
  },
  {
    path : 'todo',
    component : TodoComponent
  },
  {
    path : 'categoryview',
    component : CategoryviewComponent
  },
  {
    path : 'subcategorylist',
    component : SubcategorylistComponent
  },
  {
    path : 'productview',
    component : ProductviewComponent
  },
  {
    path : 'cartlist',
    component : CartlistComponent
  },
  {
    path : 'cartadd',
    component : CartaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
