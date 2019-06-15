import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/shared/services/jarwis.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public form = {
    email: null,
    username: null,
    password: null,
    password_confirmation: null
  };
  
  public error = [];

  constructor(
    private router: Router,
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.form);

    this.jarwisService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token);
    this.tokenService.setUsername(data.username);
    this.tokenService.setId(data.id);
    
    this.authService.changeStatus(true);
    
    this.router.navigateByUrl("/");
  }

  handleError(error){
    this.error = error.error.errors;
  }
}
