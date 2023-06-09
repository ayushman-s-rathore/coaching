import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  users: any;
  constructor(private userData: DataServiceService ){
    this.userData.users().subscribe((data)=>{
      console.log("data", data);
    })
  }
 

  onSubmit(data: any){
    console.log(data);
    this.userData.postData(data).
    subscribe(resp =>{
      console.log(resp);
    })
  }
}
