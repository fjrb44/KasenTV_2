import { Component, OnInit, Input } from '@angular/core';
import { OwnUserService } from '../../services/own-user.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-suscribe-button',
  templateUrl: './suscribe-button.component.html',
  styleUrls: ['./suscribe-button.component.scss']
})
export class SuscribeButtonComponent implements OnInit {
  @Input("channelId") private channelId: number;
  userId: number;
  showButton: boolean;
  isSuscribe: boolean;
  isLoggedIn: boolean;

  constructor( 
    private ownUserService: OwnUserService, 
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isSuscribe = true;
    this.userId = Number(this.ownUserService.getId());

    this.authService.authStatus.subscribe( (data: boolean) => {
      this.isLoggedIn = data;
      
      if(this.isLoggedIn){
        
        if(this.userId == this.channelId){
          this.showButton = false;
        }else{
          this.isLogged();
        }
      }else{
        this.showButton = false;
        this.userId = 0;
      }
    });
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
    // Añadir un modal en el futuro
    this.userService.suscribe(this.userId, this.channelId).subscribe((data) => console.log(data));
    this.isSuscribe = false;
  }

  unsuscribe(){
    // Añadir un modal en el futuro
    this.userService.unsuscribe(this.userId, this.channelId).subscribe((data) => console.log(data));
    this.isSuscribe = true;
  }

}
