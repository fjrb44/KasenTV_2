import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
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
  public publicUrl: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.publicUrl = "http://localhost:8000/storage/";
    
    if(!this.message){
      this.showMessage = false;
    }else{
      this.showMessage = true;
    }

    this.url = "/channel/";
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
