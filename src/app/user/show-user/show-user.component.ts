import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  @Input("users") public users: User[];
  @Input("message") public message: string;
  url: string;
  showMessage: boolean;
  
  constructor(private ownUserService: OwnUserService, private router: Router) { }

  ngOnInit() {
    if(!this.message){
      this.showMessage = false;
    }else{
      this.showMessage = true;
    }

    this.url = "/user/"+this.ownUserService.getId()+"/channel/";
  }

  areSomeUsers(): boolean{
    return this.users.length != 0;
  }

  reload(){
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
