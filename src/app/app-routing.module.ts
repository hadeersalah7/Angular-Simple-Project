import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/post/add-post/add-post.component';
import { MyPostsComponent } from './pages/post/my-posts/my-posts.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path:"user", children:[
    {path:"register", component:RegisterComponent},
    {path:"profile", component:ProfileComponent},
    {path:"all", component:AllUsersComponent},
    {path:"all/:id", component:SingleUserComponent},
    {path:"edit/:id", component:EditUserComponent}
  ]},
  {path:"post", children:[
    {path:"add", component:AddPostComponent},
    {path: "myPosts", component: MyPostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
