import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private ownUserService: OwnUserService, private route: Router) { }

  ngOnInit() {
    this.userService.getSuscribesUsers(this.getActualChannel()).subscribe((data: User[]) => this.users = data);
  }

  getActualChannel(): number{
    let channelId: string = this.route.url;
    channelId = channelId.substring( channelId.indexOf('channel/')+8, channelId.length);

    let position: number = channelId.indexOf("/");

    if(position != -1){
      channelId = channelId.substring( 0, position);
    }

    return Number(channelId);
  }
}
