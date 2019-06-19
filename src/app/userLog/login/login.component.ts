import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/shared/services/jarwis.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error;
  public wait;
  public unableSubmit: boolean;

  constructor(
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.error = null;
    this.unableSubmit = false;
  }

  onSubmit(){
    this.error = null;
    this.unableSubmit = true;
    this.wait = this.notify.info("Wait");

    this.jarwisService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  handleResponse(data){
    this.notify.remove(this.wait.id);
    this.tokenService.handle(data.access_token);
    this.tokenService.setUsername(data.user);
    this.tokenService.setId(data.userId);

    this.authService.changeStatus(true);
    this.router.navigateByUrl("/");
  }

  handleError(error){
    this.unableSubmit = false;
    this.notify.remove(this.wait.id);
    this.error = error.error.error;
  }
}
