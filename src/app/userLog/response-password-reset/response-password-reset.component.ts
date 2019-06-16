import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/shared/services/jarwis.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.component.html',
  styleUrls: ['./response-password-reset.component.scss']
})
export class ResponsePasswordResetComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }
  public wait = null;


  constructor(
    private route: ActivatedRoute,
    private jarwisService: JarwisService,
    private router: Router,
    private notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.wait = this.notify.info('Wait...' ,{timeout:5000})
    this.error = null;

    this.jarwisService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    let _router = this.router;

    this.notify.remove(this.wait.id);
    this.notify.confirm('Done!, Now login with new Password', {
      buttons:[
        {text: 'Okay', action: toster =>{
          _router.navigateByUrl('/login'),
          this.notify.remove(toster.id)
        }},
      ]
    });
  }

  handleError(error){

    this.notify.remove(this.wait.id);
    if(error.error.error){
      this.notify.error(error.error.error);
    }else if(error.error.errors){
      this.error = error.error.errors;
    }
  }
}
