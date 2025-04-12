import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Genre, User } from '../../../../../types/user.type';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private userService;
  @Input() userList!: User[];
  @Output() selectedUserId = new EventEmitter<number>();

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  /* *** Utils *** */
  getUserId(userId: number) {
    console.log('from child component - getUserId', userId);

    this.selectedUserId.emit(userId);
  }

  /* *** Get the value of the user.genre =>badge *** */
  getDisplayGenre(genre: Genre): string {
    return this.userService.setUserGenre(genre);
  }
}
