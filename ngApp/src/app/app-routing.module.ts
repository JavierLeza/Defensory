import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { ComplainComponent } from './complain/complain.component';
import { AnswerCenterComponent } from './answer-center/answer-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { PrivateComponent } from "app/private/private.component";

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'files', component: FilesComponent},
    {path: 'complain', component: ComplainComponent},
    {path: 'answer', component: AnswerCenterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'private', component: PrivateComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
