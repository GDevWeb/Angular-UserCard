import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MOCK_GENRE_LIST } from '../../../../../data/MOCK_GENRE_LIST';
import { MOCK_JOB_LIST } from '../../../../../data/MOCK_JOB_LIST';
import { MOCK_SKILL_LIST } from '../../../../../data/MOCK_SKILLS';
import { type Genre, GenreI, User } from '../../../../../types/user.type';
import { UsersService } from '../services/users.service';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  readonly genreList = MOCK_GENRE_LIST;
  readonly jobList = MOCK_JOB_LIST;
  readonly skillsList = MOCK_SKILL_LIST;
  readonly isOpen: boolean = false;

  selectGenre = '';
  selectedSkill = '';
  hobby = '';

  selectedSkillsList = [];
  selectedHobbiesLIst: string[] = [];

  constructor(
    private userService: UsersService,
    private newUserService: NewUserService
  ) {}

  addUser!: User;

  newUserForm = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    genre: new FormControl<Genre | null>(null, Validators.required),
    imgURL: new FormControl(''),
    job: new FormControl('', Validators.required),
    skills: new FormArray([]),
    hobbies: new FormArray([]),
  });

  /* *** Skills *** */

  /* ***Genre*** */
  /* --Getters-- */
  get genre() {
    console.log(this.newUserForm.get('genre'));
    return this.genreList as GenreI[];
  }

  /* --Getters-- */
  get skills(): FormArray {
    return this.newUserForm.get('skills') as FormArray;
  }

  /* --Logic-- */
  addSkill(): void {
    if (this.selectedSkill && !this.skills.value.includes(this.selectedSkill)) {
      this.skills.push(new FormControl(this.selectedSkill));
      console.log(this.selectedSkill);

      this.selectedSkill = '';
    }
  }

  removeSkills(index: number): void {
    this.skills.removeAt(index);
  }

  /* *** Hobbies*** */

  /* --Getter-- */
  get hobbies(): FormArray {
    return this.newUserForm.get('hobbies') as FormArray;
  }

  /* --Logic--  */
  addHobby(): void {
    const trimmed = this.hobby.trim();
    if (trimmed && !this.hobbies.value.includes(trimmed)) {
      this.hobbies.push(new FormControl(trimmed));
      this.hobby = '';
    }
  }

  removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }

  /* ***Submitting a new user*** */
  handleSubmit(): void {
    if (this.newUserForm.valid) {
      const user = this.newUserService.createUserFromForm(
        this.newUserForm.value
      );
      console.log('User created:', user);
      this.userService.createUser(user);

      this.newUserForm.reset();
      this.skills.clear();
      this.hobbies.clear();
    } else {
      console.warn('Form is invalid');
      this.newUserForm.markAllAsTouched();
    }
  }

  /* ***Utils*** */

  getRandomId(): number {
    return this.newUserService.generateRandomId();
  }

  setUrlGenre(value: string): string {
    return this.newUserService.setGenreUrl(value);
  }

  getRandomImgURL(): number {
    return this.newUserService.generateRandomImgUrl();
  }

  /* ***Modal*** */
  onCancel() {
    return !this.isOpen;
  }
}
