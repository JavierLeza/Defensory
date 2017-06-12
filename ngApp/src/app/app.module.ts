import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileListComponent } from './file-list/file-list.component';
import { FilesComponent } from './files/files.component';
import { ComplainComponent } from './complain/complain.component';
import { FileDetailComponent } from './file-detail/file-detail.component';
import { AnswerCenterComponent } from './answer-center/answer-center.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileListComponent,
    FilesComponent,
    ComplainComponent,
    FileDetailComponent,
    AnswerCenterComponent,
    AnswerListComponent,
    AnswerDetailComponent,
    LoginComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCa1KCqLRLrHoKqbGdp9LLkwSd5Ly6TLfs'
    }),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
