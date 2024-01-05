import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent implements OnInit {

  myurl = "https://akashsir.in/myapi/atecom1/api/api-change-password.php";

  constructor(public http:HttpClient){ }

    SubmitData(myForm:any){
      var a = myForm.value.opass;
      var b = myForm.value.npass;
      var c = myForm.value.cpass;
      var d = localStorage.getItem("uid");
      console.log(d)

      var myFormData = new FormData();
      myFormData.append("opass",a);
      myFormData.append("npass",b);                                                                                                                                                                                       
      myFormData.append("cpass",c);
      myFormData.append('user_id',d!);

      this.http.post(this.myurl,myFormData).subscribe((res)=>{
        console.log(res);
        console.log("Record Added");
      })
  }   
  
  ngOnInit(): void {
    
  }

}
