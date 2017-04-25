import { HomeComponent } from './home/home.component';
import { FileCenterComponent } from './file-center/file-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'files', component: FileCenterComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
