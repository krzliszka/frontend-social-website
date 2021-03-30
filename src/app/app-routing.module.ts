import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubsocialComponent } from './subsocial/create-subsocial/create-subsocial.component';
import { ListSubsocialsComponent } from './subsocial/list-subsocials/list-subsocials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-subsocials', component: ListSubsocialsComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-subsocial', component: CreateSubsocialComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
