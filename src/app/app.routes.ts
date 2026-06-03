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

export const routes: Routes = [
    {path: '', component: MainLayout, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'home', component: Home, title: 'Home'},
        {path: 'about', component: About, title: 'About'},
        {path: 'profile', component: Profile, title: 'Profile'},
        {path: 'users', component: Users, title: 'Users'}
    ]},
    {path: 'auth', component: AuthLayout, children: [
        {path: 'login', component: Login, title: 'Login'},
        {path: 'register', component: Register, title: 'Register'}
    ]},
    {path: '**', component: NotFound}
];