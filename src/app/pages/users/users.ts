import { Component } from '@angular/core';
import { UserModel } from '../../_models/userModel';


@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  //users: string[] = ['Vinicius', 'Julio', 'Larissa','Maria'];

  users: UserModel[] = [
    { nome: 'Vinicius', idade: 23 },
    { nome: 'Julio', idade: 30 },
    { nome: 'Larissa', idade: 25 },
    { nome: 'Maria', idade: 28 },
  ]


}
