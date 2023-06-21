import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  countries: {name: string}[]=[];
  genders: string[]=['Male','Female','Other'];
  selectedGender: string='';


  constructor(private signupService: SignupService){

  }

  ngOnInit(): void {
      this.countries=this.signupService.getCountries()
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


    onSubmit(){}
}
