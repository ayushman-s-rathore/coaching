import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachSignupComponent } from './sign-up/coach-signup/coach-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Step1Component } from './sign-up/step1/step1.component';


const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'coach', component: CoachSignupComponent },
  { path: 'step1', component: Step1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
