import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'

@Component({
    selector: 'home',
    templateUrl: 'app/main_site/home.component.html',
    directives: [NavbarComponent]
})
export class HomeComponent  { }