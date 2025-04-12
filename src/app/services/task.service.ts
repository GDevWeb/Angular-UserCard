import { Injectable } from '@angular/core';
import MOCK_USERS from '../../../data/MOCK_USERS';
import { User } from '../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private users: User[] = MOCK_USERS;

  constructor() {}

  /* ***Create*** */

  /* ***Read*** */

  /* ***Update*** */
  toggleTaskCompletion(taskId: number, userId: number): User[] {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      console.warn(`User with id ${userId} not found!`);
      return this.users;
    }

    const user = this.users[userIndex];
    const taskToUpdate = user.tasks.find((task) => task.id === taskId);

    if (!taskToUpdate) {
      console.warn(`Task with ID ${taskId} not found!`);
      return this.users;
    }

    taskToUpdate.status = !taskToUpdate.status;

    this.deleteTask(taskId, userId);

    this.users = [...this.users];
    return this.users;
  }

  /* ***Delete*** */
  deleteTask(taskId: number, userId: number) {
    setTimeout(() => {
      console.log(`Calling deleteTask`);
      const userIndex = this.users.findIndex((user) => user.id === userId);

      if (userIndex === -1) {
        console.warn(`User with id ${userId} not found!`);
        return this.users;
      }

      const user = this.users[userIndex];

      if (!user) {
        return this.users;
      }

      console.log('Deleting task');

      const taskToDelete = user.tasks.filter((task) => task.id !== taskId);

      if (!taskToDelete) {
        console.warn(`Task with ID ${taskId} not found!`);
        return this.users;
      }

      return (this.users[userIndex].tasks = taskToDelete);
    }, 3000);
  }
}
