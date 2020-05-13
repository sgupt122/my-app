import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CancelComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
