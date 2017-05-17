import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { ComplainComponent } from './complain/complain.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'files', component: FilesComponent},
    {path: 'encuesta', component: ComplainComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
