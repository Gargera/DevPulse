import { Routes } from '@angular/router';
import { Home } from '../Pages/home/home';
import { About } from '../Pages/about/about';
import { MainLayout } from '../Pages/main-layout/main-layout';
import { NotFound } from '../Pages/not-found/not-found';
import { Profile } from '../Pages/profile/profile';
import { Users } from '../Pages/users/users';
import { Login } from '../Pages/login/login';
import { Register } from '../Pages/register/register';
import { AuthLayout } from '../Pages/auth-layout/auth-layout';
import { Blogs } from '../Pages/blogs/blogs';
import { BlogDetails } from '../Pages/blog-details/blog-details';

export const routes: Routes = [
    {path: '', component: MainLayout, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'home', component: Home, title: 'DevPulse - Home'},
        {path: 'about', component: About, title: 'DevPulse - About'},
        {path: 'profile', component: Profile, title: 'DevPulse - Profile'},
        {path: 'users', component: Users, title: 'DevPulse - Users'},
        {path: 'blogs', component: Blogs, title: 'DevPulse - Blogs'},
        {path: 'blogs/:id', component: BlogDetails, title: "DevPulse - BlogDetails"}
    ]},
    {path: 'auth', component: AuthLayout, children: [
        {path: 'login', component: Login, title: 'DevPulse - Login'},
        {path: 'register', component: Register, title: 'DevPulse - Register'}
    ]},
    {path: '**', component: NotFound, title: "DevPulse - NotFound"}
];