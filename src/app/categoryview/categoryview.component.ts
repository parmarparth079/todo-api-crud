import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrl: './categoryview.component.css'
})
export class CategoryviewComponent implements OnInit {

  myapiuri:string = "https://akashsir.in/myapi/atecom1/api/api-view-category.php";
  myarray:any = [];

  constructor(public http : HttpClient){ }

    public fetchData(){
      this.http.get(this.myapiuri).subscribe((Response)=>{
        this.myarray = Response;
        console.log(this.myarray);
      })
    }

  ngOnInit(): void {
    console.log("Api Calling");
    this.fetchData();
  }

}
