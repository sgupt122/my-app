import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { CancelComponent } from './components/cancel/cancel.component';


const routes: Routes = [
  { path: '', component: CommentComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'cancel', component: CancelComponent },
  { path: '**', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
