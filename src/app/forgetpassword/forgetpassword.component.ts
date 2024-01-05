import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {

  myurl = "https://akashsir.in/myapi/atecom1/api/api-user-forgot-password.php";

  constructor(public http:HttpClient){ }

    msg:any;

  SubmitData(myForm:any){
    var a = myForm.value.email;
    var b = this.msg;

    var myFormData = new FormData();
    myFormData.append("user_email",a);

    this.http.post(this.myurl,myFormData).subscribe((res:any)=>{
    
      // var mydata = res;
      // if(res.flag== '1'){
      //   alert(res.message);
      //     }
      console.log(res.message);
      this.msg = res.message;
      alert(res.message);
      // console.log(res.message);
  
    
    });

  }

  ngOnInit(): void {
   
    
    
  }

}
