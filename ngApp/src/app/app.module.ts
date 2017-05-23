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
    AnswerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
