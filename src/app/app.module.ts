import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoachSignupComponent } from './sign-up/coach-signup/coach-signup.component';
import { Step1Component } from './sign-up/step1/step1.component';
import { Step2Component } from './sign-up/step2/step2.component';
import { Step3Component } from './sign-up/step3/step3.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CoachSignupComponent,
    Step1Component,
    Step2Component,
    Step3Component
  
  
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
