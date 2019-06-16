import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/shared/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public form = {
    email: null
  };

  constructor(
    private jarvisService: JarwisService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.jarvisService.sendPasswordResetLink(this.form).subscribe( 
      (data) => this.handleResponse(data),
      (error) => this.notify.error(error.error.error)
    );
    /*
    this.Notfiy.info('Wait...' ,{timeout:5000})
    this.jarvisService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
    */
  }

  handleResponse(res) {
    console.log(res);
    this.form.email = null;
    /*
    this.Notfiy.success(res.data,{timeout:0});
    this.form.email = null;
    */
  }

}
