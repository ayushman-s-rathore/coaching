import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachSignupComponent } from './sign-up/coach-signup/coach-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Step1Component } from './sign-up/step1/step1.component';
import { Step2Component } from './sign-up/step2/step2.component';
import { Step3Component } from './sign-up/step3/step3.component';


const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'coach', component: CoachSignupComponent },
  { path: 'step1', component: Step1Component},
  { path: 'step2', component: Step2Component},
  { path: 'step3', component: Step3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
