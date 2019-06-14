import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    categories: Category[];
    mainUrl: string;
    userid: string;
    username: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        private translate: TranslateService, 
        public router: Router, 
        private categoryService: CategoryService,
        private ownUserService: OwnUserService,
        private userService: UserService
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
        
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';

        this.userid = this.ownUserService.getId();
        this.mainUrl = "/user/"+this.userid;
        this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);
        
        if(this.ownUserService.isLogged){
            this.userService.getUser(Number(this.userid)).subscribe( (data: User) => this.username = data.username );
        }
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
    }

    changeCategory(id: number){
        this.router.navigate([this.mainUrl + '/category/' + id ]);
        
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
