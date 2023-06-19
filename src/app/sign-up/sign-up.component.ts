import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Coachee } from '../models/coachee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: Coachee= new Coachee();
  @ViewChild('user')
  coacheeData!: NgForm;
  constructor(private userService: DataServiceService,
              private router: Router ){
    // this.userData.users().subscribe((data)=>{
    //   console.log("data", data);
    // })
  }
  
 

  onSubmit(){
    this.user.name=this.coacheeData.value.name;
    this.user.email=this.coacheeData.value.email;
    this.user.password=this.coacheeData.value.password;
    this.userService.postData(this.user).subscribe(
      data => {
        console.log(data);
      }
    )
    this.router.navigate(['/email']);

  }
}
