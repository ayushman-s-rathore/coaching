import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  step2Form!: FormGroup
  education: {name:string, degree:string, specialization:string,start:string, end:string}[]=[];
  experience: {name:string, title:string, description:string,start:string, end:string}[]=[]

  ngOnInit(): void {
      this.step2Form= new FormGroup({
        'schoolName': new FormControl(null),
        'stDate': new FormControl(null),
        'endDate': new FormControl(null),
        'degree': new FormControl(null),
        'specialization': new FormControl(null),
        'employeeTitle': new FormControl(null),
        'orgName': new FormControl(null),
        'title': new FormControl(null),
        'description': new FormControl(null),
        'qualification': new FormArray([]),
        'workExperience': new FormArray([]),
      });
  }
  
  

  onAddEducation(){
    const name=this.step2Form.value.schoolName;
    const degree=this.step2Form.value.degree;
    const specialization=this.step2Form.value.specialization;
    const start=this.step2Form.value.stDate;
    const end= this.step2Form.value.endDate;
    this.education.push({name,degree,specialization,start,end});
      console.log(this.education);  
    
  }

  onAddWorkExp(){
    const name=this.step2Form.value.orgName;
    const title=this.step2Form.value.title;
    const description=this.step2Form.value.description;
    const start=this.step2Form.value.stDate;
    const end= this.step2Form.value.endDate;
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
  }



}
