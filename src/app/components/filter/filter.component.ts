import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../../../types/user.type';
@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() filteredUserList!: User[];
  @Output() filterChanged = new EventEmitter<string>();

  handleFilterUserList(event: Event, value?: string): void {
    const target = event.target as HTMLInputElement | null;

    if (target) {
      this.filterChanged.emit(target.value);
    }
  }
}
