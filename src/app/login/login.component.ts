import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {

  myurl = "https://akashsir.in/myapi/atecom1/api/api-login.php";

   mydata= {};

  constructor(public http : HttpClient){}


    SubmitData(myForm:any){
      var a = myForm.value.email;
      var b = myForm.value.password;

      var myFormData = new  FormData();
      myFormData.append("user_email",a);
      myFormData.append("user_password",b);

      this.http.post(this.myurl,myFormData).subscribe((res:any)=>{
     
        var mydata = res;
        localStorage.setItem("name",mydata.user_name);
        localStorage.setItem("uid",mydata.user_id);
        
        console.log(res.user_name);
        
        
     
      });
    }

  ngOnInit(): void {
    
  }

}
