import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsDetailComponent } from './posts/posts-detail/posts-detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'view/:categoryIndex', component: PostsComponent },
  { path: 'view/:categoryIndex/:postIndex', component: PostsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
