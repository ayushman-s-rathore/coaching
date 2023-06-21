import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
import { Coach } from 'src/app/models/coach.model';

@Component({
  selector: 'app-coach-signup',
  templateUrl: './coach-signup.component.html',
  styleUrls: ['./coach-signup.component.css']
})
export class CoachSignupComponent {
  user: Coach= new Coach();
  @ViewChild('user')
  coachData!: NgForm;
  constructor(private userService: DataServiceService ){
    // this.userData.users().subscribe((data)=>{
    //   console.log("data", data);
    // })
  }

  onSubmit(){
    const cUrl= "coachSignUp";
    this.user.name=this.coachData.value.name;
    this.user.email=this.coachData.value.email;
    this.user.password=this.coachData.value.password;
    this.userService.postData(cUrl,this.user).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
