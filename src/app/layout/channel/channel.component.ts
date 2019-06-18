import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  public channelId: number;
  public form: FormGroup;
  public user: User;
  public userId: number;
  private publicUrl: string;

  constructor(
    public router: Router, 
    public fb: FormBuilder,
    private userService: UserService,
    private ownUserService: OwnUserService
  ) { }

  ngOnInit() {
    this.publicUrl = "http://localhost:8000/storage/";

    let url = this.router.url;
    url = url.substring( url.indexOf('channel')+8, url.length );
    url = url.substring(0, url.indexOf('/'));

    this.channelId = Number(url);

    this.userId = Number(this.ownUserService.getId());

    this.form = this.fb.group({
      searchUserField: new FormControl('', Validators.required)
    });

    this.userService.getUser(this.channelId).subscribe( (data: User) => this.user = data);
  }

  searchUserVideo() {
    let search = this.form.get("searchUserField").value;

    if(search){
      this.router.navigate(["/channel/"+this.channelId+"/search/"+ search]);
    
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
  
      this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
            window.scrollTo(0, 0);
          }
      });
    }else{
      this.router.navigate(["/videos"]);
    }
    
  }
}
