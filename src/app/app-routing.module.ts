import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachSignupComponent } from './sign-up/coach-signup/coach-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'coach', component: CoachSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
