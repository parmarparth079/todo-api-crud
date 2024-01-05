import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent implements OnInit {

  myapiurl:string = "https://akashsir.in/myapi/atecom1/api/api-view-product.php";
  myarray:any = [];  

  constructor(public http: HttpClient){ }

  public fetchData(){
    this.http.get(this.myapiurl).subscribe((Response)=>{
      this.myarray = Response;
      console.log(this.myarray);
    })
  }


  ngOnInit(): void {
    console.log("Api Calling");
    this.fetchData();
  }

}
