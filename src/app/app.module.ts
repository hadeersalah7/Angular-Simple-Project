import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AddPostComponent } from './pages/post/add-post/add-post.component';
import { MyPostsComponent } from './pages/post/my-posts/my-posts.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    RegisterComponent,
    ProfileComponent,
    EditUserComponent,
    LoginComponent,
    AddPostComponent,
    MyPostsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
    UserService,
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
