import { Component } from '@angular/core';
import {AdminNavbarComponent} from "./navbar-admin/navbar-admin.component";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/admin/dashboard.component.html',
    directives: [AdminNavbarComponent]
})
export class DashboardComponent  { }