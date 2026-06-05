import { Routes } from '@angular/router';
import { Home } from './Pages/main-layout/home/home';
import { About } from './Pages/main-layout/about/about';
import { MainLayout } from './Pages/main-layout/main-layout.component/main-layout';
import { NotFound } from './Pages/not-found/not-found';
import { Profile } from './Pages/profile-layout/profile-layout.component/profile';
import { Users } from './Pages/dashboard-layout/users/users';
import { Login } from './Pages/auth-layout/login/login';
import { Register } from './Pages/auth-layout/register/register';
import { AuthLayout } from './Pages/auth-layout/auth-layout.component/auth-layout';
import { Blogs } from './Pages/main-layout/blogs/blogs';
import { BlogDetails } from './Pages/main-layout/blog-details/blog-details';

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