import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UserFormComponent } from './components/user-form/user-form.component';


export const routing = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'newuser',
        component: UserFormComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
]);
