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
  private wait = null;

  constructor(
    private jarvisService: JarwisService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.wait = this.notify.info('Wait...' ,{timeout:5000})
    this.jarvisService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => {
        this.notify.remove(this.wait.id);
        this.notify.error(error.error.error);
      }
    );
  }

  handleResponse(res) {
    this.notify.remove(this.wait.id);
    this.notify.success(res.data,{timeout:0});
    this.form.email = null;
  }

}
