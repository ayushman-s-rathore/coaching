import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  step2Form!: FormGroup
  education: {name:string, degree:string, specialization:string,start:string, end:string}[]=[];
  experience: {name:string, title:string, description:string,start:string, end:string}[]=[];

  constructor(private router:Router){}

  ngOnInit(): void {
      this.step2Form= new FormGroup({
        'schoolInfo': new FormGroup({
        'schoolName': new FormControl('', Validators.required),
        'stDate': new FormControl('',Validators.required),
        'endDate': new FormControl('',Validators.required),
        'degree': new FormControl('',Validators.required),
        'specialization': new FormControl('',Validators.required),
        }),
        'employeeTitle': new FormControl('',Validators.required),
        'workInfo': new FormGroup({
        'stDate1': new FormControl('',Validators.required),
        'endDate1': new FormControl('',Validators.required),
        'orgName': new FormControl('',Validators.required),
        'title': new FormControl('',Validators.required),
        'description': new FormControl('',Validators.required),
        }),
        
        'qualification': new FormArray([]),
        'workExperience': new FormArray([]),
      });
  }
  
  

  onAddEducation(){
    const name=this.step2Form.value.schoolInfo.schoolName;
    const degree=this.step2Form.value.schoolInfo.degree;
    const specialization=this.step2Form.value.schoolInfo.specialization;
    const start=this.step2Form.value.schoolInfo.stDate;
    const end= this.step2Form.value.schoolInfo.endDate;
    this.education.push({name,degree,specialization,start,end});
      console.log(this.education);  
    
  }

  onAddWorkExp(){
    const name=this.step2Form.value.workInfo.orgName;
    const title=this.step2Form.value.workInfo.title;
    const description=this.step2Form.value.workInfo.description;
    const start=this.step2Form.value.workInfo.stDate1;
    const end= this.step2Form.value.workInfo.endDate1;
    this.experience.push({name,title,description,start,end});

  }

  addEduToForm(){
    const items=<FormArray>this.step2Form.get('qualification');

  this.education.forEach((item)=>{
    const newObject = new FormGroup({
      name: new FormControl(item.name),
      degree: new FormControl(item.degree),
    });
    items.push(newObject);
  })
  }

  addExpToForm(){
    const items=<FormArray>this.step2Form.get('workExperience');

  this.experience.forEach((item)=>{
    const newObject = new FormGroup({
      name: new FormControl(item.name),
      title: new FormControl(item.title),
    });
    items.push(newObject);
  })
  }

  deleteEdu(id:number){
    this.education.splice(id,1);
  }
  deleteExp(id:number){
    this.experience.splice(id,1);

  }

  onSubmit(){
    this.addEduToForm();
    this.addExpToForm();
    console.log(this.step2Form);
    this.router.navigate(['/step3']);
  }



}
