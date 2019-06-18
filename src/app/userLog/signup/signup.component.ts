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
    password_confirmation: null,
    logo: null
  };
  public imageSrc;
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
    this.error = [];

    let fd = new FormData;

    fd.append('email', this.form.email);
    fd.append('username', this.form.username);
    fd.append('password', this.form.password);
    fd.append('password_confirmation', this.form.password_confirmation);
    fd.append('logo', this.form.logo);

    this.jarwisService.signup(fd).subscribe(
      data => this.login(),
      error => this.handleError(error)
    );
  }

  login(){
    const form = {
      email: this.form.email,
      password: this.form.password
    };
  
    this.jarwisService.login(form).subscribe( (data) =>{
      this.handleResponse(data);
    }, (error) => {
  
    });
  }

  handleResponse(data){
    console.log(data);

    this.tokenService.handle(data.access_token);
    this.tokenService.setUsername(data.user);
    this.tokenService.setId(data.userId);
    
    this.authService.changeStatus(true);
    
    this.router.navigateByUrl("/");
  }

  handleError(error){
    this.error = error.error.errors;
  }

  onImageSelected(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);

      this.form.logo = <File>event.target.files[0];
    }
  }
}
