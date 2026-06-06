import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../Core/Models/Auth/DecodedToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  private tokenKey = 'token';

  constructor() {}

  getToken(): string | null 
  {
    return localStorage.getItem(this.tokenKey);
  }

  getDecodedToken(): DecodedToken | null 
  {
    const token = this.getToken();
    if (!token) return null;
    try 
    {
      return jwtDecode<DecodedToken>(token);
    } 
    catch (error) 
    {
      return null;
    }
  }

  getUserId(): string | null {
    const decoded = this.getDecodedToken();
    return decoded ? decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || null : null;
  }

  getUsername(): string {
    const decoded = this.getDecodedToken();
    return decoded ? decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || 'Guest' : 'Guest';
  }

  isAdmin(): boolean 
  {
    const decoded = this.getDecodedToken();
    if (!decoded) return false;

    const roles = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (!roles) return false;

    if (Array.isArray(roles)) 
    {
      return roles.includes('Admin');
    }
    return roles === 'Admin';
  }

  isLoggedIn(): boolean 
  {
    return !!this.getToken();
  }
}