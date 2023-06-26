import { Component, OnInit} from '@angular/core';
import { SignupService } from '../signup.service';
import { NgForm } from '@angular/forms';
import { Country,State,City } from 'country-state-city';
import { Timezones } from 'country-state-city/lib/interface';






@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  
  genders: string[]=['Male','Female','Other'];
  socialMedias: string[]=['Linkedin','Github','Other'];
  socialHandle: {name: string, link: string}[]=[];
  countries: {name:string, isoCode: string}[]=[];
  states: {name:string, isoCode: string}[]=[];
  cities:{name:string}[]=[];

  selectedCountry: any;
  selectedState:any;
  selectedCity:any;
  timeZone!: string;

  
  selectedGender: string='';
  selectedSocial: string='';
  socialLink!: string ;
  


  constructor(private signupService: SignupService){       
  }
  
  ngOnInit(): void {
    this.countries = Country.getAllCountries();
    
      
  }

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      // Create a new FormData object
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile);

      // Send the form data to your API endpoint for file upload
      // You can use HttpClient or a service to handle the HTTP request
      // Example:
      // this.http.post('/api/upload', formData).subscribe(response => {
      //   console.log('File uploaded successfully!');
      // });
    }
  }

  onAdd(){
    const name=this.selectedSocial;
    const link=this.socialLink;
    this.socialHandle.push({name,link});
  }

  onCountryChange(): void {
    let time: Timezones[]=[];
    this.states=State.getStatesOfCountry(this.selectedCountry);
    time=Country.getCountryByCode(this.selectedCountry)?.timezones as Timezones[];
    this.timeZone=time[0].gmtOffsetName;  
    
    
  }

  onStateChange() {
    this.cities=City.getCitiesOfState(this.selectedCountry,this.selectedState);
    
  }

  

  


  


    onSubmit(data: NgForm){
      console.log(data);
    }
}
