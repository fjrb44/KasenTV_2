import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public form: FormGroup;
    public mainUrl: string;
    public userId: number;
    public username: string;
    public loggedIn: boolean;

    constructor(
        private translate: TranslateService,
        public router: Router,
        public fb: FormBuilder,
        private ownUserService: OwnUserService,
        private userService: UserService,
        private authService: AuthService,
        private tokenService: TokenService
    ) {
    }

    ngOnInit() {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this.form = this.fb.group({
            searchField: new FormControl('', Validators.required)
        });
        
        this.pushRightClass = 'push-right';
        this.userId = this.ownUserService.getId();
        this.mainUrl = "/";
        
        this.username = this.tokenService.getUsername();
        
        this.authService.authStatus.subscribe( data => {this.loggedIn = data});
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    /*
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    */

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    searchF() {
        let search = this.form.get('searchField').value;

        if(search){
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };

            this.router.navigate([ this.mainUrl + '/search/' + this.form.get('searchField').value]);
            this.router.events.subscribe((evt) => {
                if (evt instanceof NavigationEnd) {
                    this.router.navigated = false;
                    window.scrollTo(0, 0);
                }
            });
        }else{
            this.router.navigate([ this.mainUrl+"/"]);
        }
    }

    ownChannel(){
        this.router.navigate([this.mainUrl + '/channel/' + this.userId ]);
        
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
