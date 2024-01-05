import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  {
  
  myFormData(myForm : any){
    console.warn("Formvalue is : " + myForm.value);


    



  }

  }


