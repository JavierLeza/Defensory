import { HomeComponent } from './home/home.component';
import { ComplainComponent } from './complain/complain.component';
import { AnswerCenterComponent } from './answer-center/answer-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WehelpyouComponent } from "app/wehelpyou/wehelpyou.component";
import { InvestigationComponent } from "app/investigation/investigation.component";
import { MediationComponent } from "app/mediation/mediation.component";
import { ContactComponent } from "app/contact/contact.component";

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'complain', component: ComplainComponent},
    {path: 'answer', component: AnswerCenterComponent},
    {path: 'we-help-you', component: WehelpyouComponent},
    {path: 'investigation', component: InvestigationComponent},
    {path: 'mediation', component: MediationComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
