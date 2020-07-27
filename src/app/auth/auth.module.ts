import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ResisterComponent } from './resister/resister.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'resister', component: ResisterComponent },
];

@NgModule({
    declarations: [
        ResisterComponent,
        LoginComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    providers: [
        AuthService
    ],
    bootstrap: []
})
export class AuthModule { }
