import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  step2Form!: FormGroup
  education: {name:string, degree:string, specialization:string,start:string, end:string}[]=[];
  experience: {name:string, title:string, description:string,start:string, end:string}[]=[];
  accounts: {name:string, link:string}[]=[];

  constructor(private router:Router,
    private dataService: DataServiceService){}


  ngOnInit(): void {
      this.step2Form= new FormGroup({
        'accInfo': new FormGroup({
          'accType': new FormControl(''),
          'accLink': new FormControl(''),
        }),
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
        'accounts': new FormArray([]),
        'qualification': new FormArray([]),
        'workExperience': new FormArray([]),
      });
  }
  
  onAddAcc(){
    const name=this.step2Form.value.accInfo.accType;
    const link=this.step2Form.value.accInfo.accLink;
    this.accounts.push({name,link});

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
  addAccounts(){
    const items=<FormArray>this.step2Form.get('accounts');

  this.accounts.forEach((item)=>{
    const newObject = new FormGroup({
      name: new FormControl(item.name),
      link: new FormControl(item.link),
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
  deleteAcc(id:number){
    this.accounts.splice(id,1);
  }

  onSubmit(){
    this.addAccounts();
    this.addEduToForm();
    this.addExpToForm();
    console.log(this.step2Form);
    // this.router.navigate(['/step3']);
  }



}
