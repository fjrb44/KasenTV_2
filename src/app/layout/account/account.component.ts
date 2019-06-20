import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';
import { JarwisService } from 'src/app/shared/services/jarwis.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public form = {
    logo: null,
    banner: null,
    username: null,
    password: null,
    password_confirmation: null
  };
  private publicUrl: string;
  
  public logoSrc;
  public bannerSrc;
  public error = [];
  public percentage: number;
  public userId: number;
  public user: User;

  constructor(
    private notify: SnotifyService,
    private ownUserService: OwnUserService,
    private userService: UserService,
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userId = Number(this.ownUserService.getId());
    this.loadUser();

    this.publicUrl = "http://localhost:8000/storage/";
  }

  loadUser(){
    this.userService.getUser(this.userId).subscribe( (data: User) => {
      this.user = data;
      this.form.username = this.user.username;
    });
  }
  onLogoSelected(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.logoSrc = reader.result;

      reader.readAsDataURL(file);

      this.form.logo = <File>event.target.files[0];
    }
  }

  onBannerSelected(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.bannerSrc = reader.result;

      reader.readAsDataURL(file);

      this.form.banner = <File>event.target.files[0];
    }
  }
  onSubmit(){
    let fd = new FormData;
    this.error = [];

    if(this.form.logo){
      fd.append('logo', this.form.logo);
    }

    if(this.form.banner){
      fd.append('banner', this.form.banner);
    }

    if(this.form.username != this.user.username){
      fd.append('username', this.form.username);
    }
    if(this.form.password){
      fd.append('password', this.form.password);
    }
    if(this.form.password_confirmation){
      fd.append('password_confirmation', this.form.password_confirmation);
    }
    this.jarwisService.changeUserData(fd).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    if(error.error.errors){
      this.error = error.error.errors;
    }else if(error.message){
      this.notify.error("You need to log in");
      this.tokenService.logout();
      this.route.navigateByUrl("/login");
    }
  }
  handleResponse(data){
    if(data.error){
      this.notify.info(data.error, {timeout: 2000});
    }else{
      this.user = null;
      this.loadUser();
      this.notify.success(data.data);
    }
  }
}
