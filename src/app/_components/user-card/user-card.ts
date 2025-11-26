import { Component, Input } from '@angular/core';
import { UserModel } from '../../_models/userModel';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user!: UserModel;

}
