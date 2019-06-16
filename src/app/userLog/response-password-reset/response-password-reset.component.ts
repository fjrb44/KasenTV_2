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
  constructor(
    private route: ActivatedRoute,
    private jarwisService: JarwisService,
    private router: Router,
    private Notify: SnotifyService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }
  onSubmit() {
    this.jarwisService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    let _router = this.router;
    this.Notify.confirm('Done!, Now login with new Password', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/login'),
              this.Notify.remove(toster.id)
          }
        },
      ]
    });
  }

  handleError(error) {
    this.error = error.error.errors;
    console.log(this.error);
  }
}
