import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  @Input("users") public users: User[];
  
  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

  areSomeUsers(): boolean{
    return this.users.length != 0;
  }

}
