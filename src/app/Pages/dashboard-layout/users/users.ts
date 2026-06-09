import { Component, OnInit} from '@angular/core';
import { UserDto } from '../../../Core/Models/Auth/UserDto';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{
  users: UserDto[] = [{id: "0", firstName: "Esraa", lastName: "Taha", userName: "EsraaTaha", email: "esraataha@gmail.com", roles: ["Admin"]}];
  isLoading: boolean = false;

  ngOnInit(): void {
    //users = call api
  }

  makeAdmin(UserId: string)
  {

  }

  hasAdminRole(roles: string[]): boolean 
  {
    return roles && roles.includes('Admin');
  }
}