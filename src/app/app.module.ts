import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    TodoComponent,
    CategoryviewComponent,
    SubcategorylistComponent,
    ProductviewComponent,
    CartlistComponent,
    CartaddComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
