import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  public userId: number;
  public form: FormGroup;
  public user: User;

  constructor(
    public router: Router, 
    public fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    let url = this.router.url;
    url = url.substring( url.indexOf('channel')+8, url.length );
    url = url.substring(0, url.indexOf('/'));


    this.userId = Number(url);
    
    this.form = this.fb.group({
      searchUserField: new FormControl('', Validators.required)
    });

    this.userService.getUser(this.userId).subscribe( (data: User) => this.user = data);
  }

  searchUserVideo() {
    this.router.navigate(["/channel/"+this.userId+"/search/"+this.form.get("searchUserField").value]);
    
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
        }
    });
  }
}
