import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit {

  myurl = "https://akashsir.in/myapi/atecom1/api/api-signup.php";
  router: any;
  
  constructor(private http:HttpClient,router:Router) { }

  SubmitData(myForm:any){
    var a = myForm.value.name; 
    var b = myForm.value.email;
    var c = myForm.value.password;
    var d = myForm.value.gender;
    var e = myForm.value.mobile;
    var f = myForm.value.address;
    
    var myFormData = new FormData();
    myFormData.append("user_name",a);
    myFormData.append("user_email",b);
    myFormData.append("user_password",c);
    myFormData.append("user_gender",d);
    myFormData.append("user_mobile",e);
    myFormData.append("user_address",e);
  
    
    this.http.post(this.myurl,myFormData).subscribe((res)=>{
      console.log(res);
      console.log("Record Added");
      localStorage.setItem('email',b);
      localStorage.setItem('password',c);
    })
  }

  ngOnInit(): void{
    
  }


}
