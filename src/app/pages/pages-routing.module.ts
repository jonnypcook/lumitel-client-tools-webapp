import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {P403Component} from "./403.component";
import {P404Component} from './404.component';
import {P500Component} from './500.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'System Pages'
        },
        children: [
            {
                path: '403',
                component: P403Component,
                data: {
                    title: 'Page 403'
                }
            },
            {
                path: '404',
                component: P404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: P500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            },
            {
                path: '**',
                redirectTo: '404'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
