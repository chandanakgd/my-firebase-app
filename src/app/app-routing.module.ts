import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PageOneComponent} from './page-one/page-one.component';
import {AdminGuard} from './guard/admin.guard'
const routes:Routes =[
    { path: '', redirectTo:'/login', pathMatch: 'full' },
    {path:'pageone',component:PageOneComponent,canActivate:[AdminGuard]},
    {path:'login',component:LoginComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers:[]
})
export class AppRoutingModule{}
