import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  step3Form!: FormGroup;
  documents: {type: string, title: string, orgName:string, valid: string,link:string}[]=[];
  skills: {name:string}[]=[];

  constructor(private dataService: DataServiceService){}

  ngOnInit(): void {
      this.step3Form= new FormGroup({
        'years': new FormControl('',Validators.required),
        'mode': new FormControl('',Validators.required),
        'skill': new FormControl('',Validators.required),
        'doc': new FormGroup({
          'document': new FormControl('',Validators.required),
          'title': new FormControl('',Validators.required),
          'org': new FormControl('',Validators.required),
          'type': new FormControl('',Validators.required),
          'valid': new FormControl('',Validators.required),
          'verificationLink': new FormControl('',Validators.required),
        }),
       
        'documents[]': new FormArray([]),
        'skills[]': new FormArray([])
        
      });
  }

  onAdd(){
    const type= this.step3Form.value.doc.document;
    const title=this.step3Form.value.doc.title;
    const orgName=this.step3Form.value.doc.org;
    const valid=this.step3Form.value.doc.valid;
    const link=this.step3Form.value.doc.verificationLink;
    this.documents.push({type,title,orgName,valid,link});
    console.log(this.documents);
    this.step3Form.get('doc')?.reset();
  }

  onAddSkill(){
    const name=this.step3Form.value.skill;
    this.skills.push(name);
    console.log(this.skills);
  }

  onDelete(id:number){
    this.documents.splice(id,1);
  }
  onDeleteSkill(id:number){
    this.skills.splice(id,1);
  }

  addSkillsToForm(){
    const items=<FormArray>this.step3Form.get('skills');

  this.skills.forEach((item)=>{
    const newObject = new FormGroup({
      name: new FormControl(item.name),
    });
    items.push(newObject);
  })
  }
  addDocumentstoForm(){
    const items=<FormArray>this.step3Form.get('documents');

  this.documents.forEach((item)=>{
    const newObject = new FormGroup({
      document: new FormControl(item.type),
      title: new FormControl(item.title),
      org: new FormControl(item.orgName),
      type: new FormControl(item.type),
      valid: new FormControl(item.valid),
      verificationLink: new FormControl(item.link),
    });
    items.push(newObject);
  })
  }


  onSubmit(){
    this.addDocumentstoForm();
    this.addSkillsToForm();

  }

}
