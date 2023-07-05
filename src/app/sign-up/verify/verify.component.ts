import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  
  constructor(private router:Router,
              private route: ActivatedRoute,
              private authSerice: AuthenticationService){}

  ngOnInit(): void {

  }
  onSubmit(code: string){
    const email=this.route.snapshot.params['email'];
    this.authSerice.verify(email,code)
    this.router.navigate(['/step1']);
  }
}
