import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../user.type';

@Component({
  selector: 'app-skills-user',
  imports: [CommonModule],
  templateUrl: './skills-user.component.html',
  styleUrl: './skills-user.component.css',
})
export class SkillsUserComponent {
  @Input() currentUser!: User;
  @Output() selectedUserSkills = new EventEmitter<string[]>();
  @Input() showSkills!: boolean;

  toggleSkillsVisibility() {
    this.showSkills = !this.showSkills;
  }

  showUserSkills(skills: string[]) {
    this.selectedUserSkills.emit(skills);
  }
}
