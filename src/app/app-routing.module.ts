import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachSignupComponent } from './sign-up/coach-signup/coach-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailAuthComponent } from './sign-up/email-auth/email-auth.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'coach', component: CoachSignupComponent },
  { path: 'email', component: EmailAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
