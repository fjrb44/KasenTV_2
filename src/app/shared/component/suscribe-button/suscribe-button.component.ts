import { Component, OnInit, Input } from '@angular/core';
import { OwnUserService } from '../../services/own-user.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-suscribe-button',
  templateUrl: './suscribe-button.component.html',
  styleUrls: ['./suscribe-button.component.scss']
})
export class SuscribeButtonComponent implements OnInit {
  @Input("channelId") private channelId: number;
  @Input("showEdit") private showEdit: boolean;
  userId: number;
  showButton: boolean;
  isSuscribe: boolean;
  isLoggedIn: boolean;
  private wait;
  private success;
  private error;
  private isEdditable: boolean;

  constructor( 
    private ownUserService: OwnUserService, 
    private userService: UserService,
    private authService: AuthService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.isSuscribe = true;
    this.isEdditable = false;
    
    if(!this.showEdit){
      this.showEdit = false;
    }

    this.userId = Number(this.ownUserService.getId());

    this.authService.authStatus.subscribe( (data: boolean) => {
      this.isLoggedIn = data;
      
      if(this.isLoggedIn){
        
        if(this.userId == this.channelId){
          this.editButton();
        }else{
          this.isLogged();
        }
      }else{
        this.showButton = false;
        this.userId = 0;
      }
    });
  }

  editButton(){
    this.isEdditable = true;
  }

  isLogged(){
    this.showButton = true;
    
    this.userService.getSuscription(this.userId, this.channelId).subscribe( (data: any[]) =>{
      if(data.length == 0){
        this.isSuscribe = true;
      }else{
        this.isSuscribe = false;
      }
    });
  }

  suscribe(){
    this.wait = this.notify.info("Wait...", {timeout: 2000});

    this.userService.suscribe(this.userId, this.channelId).subscribe((data) => {
      this.removePreviousMessage();
      this.success = this.notify.success("You have succesfully suscribed");
    }, error =>{
      this.removePreviousMessage();
      this.error = this.notify.error("It was an unnespected error, reload the page and try it again");
    });
    this.isSuscribe = false;
  }

  unsuscribe(){
    this.wait = this.notify.info("Wait...", {timeout: 2000});

    this.userService.unsuscribe(this.userId, this.channelId).subscribe((data) => {
      this.removePreviousMessage();
      this.success = this.notify.success("You have succesfully unsuscribed");
    }, error => {
      this.removePreviousMessage();
      this.error = this.notify.error("It was an unnespected error, reload the page and try it again");
    });
    this.isSuscribe = true;
  }

  removePreviousMessage(){
    if(this.wait){
      this.notify.remove(this.wait.id);
    }
    if(this.success){
      this.notify.remove(this.success.id);
    }
    if(this.error){
      this.notify.remove(this.error.id);
    }
  }

}
