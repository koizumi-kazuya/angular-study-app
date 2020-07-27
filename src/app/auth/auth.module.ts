import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ResisterComponent } from './resister/resister.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';

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
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: []
})
export class AuthModule { }
