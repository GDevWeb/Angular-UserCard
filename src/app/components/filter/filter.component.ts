import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../types/user.type';
@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() filteredUserList!: User[];
  @Output() filterUserList = new EventEmitter<string>();

  handleFilterUserList(event: Event): void {
    const target = event.target as HTMLInputElement | null;

    if (target) {
      this.filterUserList.emit(target.value);
    }
  }
}
