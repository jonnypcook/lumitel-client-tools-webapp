import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';

import {P403Component} from "./403.component";
import {P404Component} from './404.component';
import {P500Component} from './500.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

import {PagesRoutingModule} from './pages-routing.module';

import {NgSpinKitModule} from 'ng-spin-kit';

@NgModule({
    imports: [PagesRoutingModule, FormsModule, CommonModule, NgSpinKitModule],
    declarations: [
        P403Component,
        P404Component,
        P500Component,
        LoginComponent,
        RegisterComponent,
    ]
})
export class PagesModule {
}
