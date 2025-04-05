import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOCK_JOB_LIST } from '../../../../../data/MOCK_JOB_LIST';
import { MOCK_SKILL_LIST } from '../../../../../data/MOCK_SKILLS';
@Component({
  selector: 'app-new-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  readonly jobList = MOCK_JOB_LIST;
  readonly skillsList = MOCK_SKILL_LIST;
  readonly isOpen: boolean = false;

  selectedJob = '';
  selectedSkill = '';
  hobby = '';

  /* *** Skills picker *** */
  selectedSkills: string[] = [];
  pickedSkillsList: string[] = [];
  hobbiesList: string[] = [];
  /* ***Hobbies*** */

  /*  ***Modal *** */
  onCancel() {
    return !this.isOpen;
  }

  /* ***Form*** */
  getSelectedJob(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    const selectedJob = this.jobList.find((job) => job.name === selectedValue);
    console.log(selectedJob?.name);

    if (selectedJob) {
      console.log(selectedJob);

      console.log(`You ve selected ${selectedValue} as your job`);
    } else {
      console.log('No job selected.');
    }
  }

  /* ***Skills*** */
  handleSelectedSkills(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if (selectedValue) {
      this.selectedSkill = selectedValue;
      console.log(`You have added ${selectedValue} to your skills`);
    } else {
      return;
    }
  }

  addPickedSkills(): void {
    if (
      this.selectedSkill &&
      !this.pickedSkillsList.includes(this.selectedSkill)
    ) {
      this.pickedSkillsList.push(this.selectedSkill);
      console.log(`Added skill: ${this.pickedSkillsList}`);
    } else {
      console.log(`Skill already added or invalid`);
    }
  }

  removePickedSkill(skillIndex: number): void {
    if (skillIndex >= 0 && skillIndex < this.pickedSkillsList.length) {
      const removedSkill = this.pickedSkillsList[skillIndex];
      this.pickedSkillsList.splice(skillIndex, 1);
      console.log(`Removed: ${removedSkill}`);
    } else {
      console.warn(`Invalid skill index: ${skillIndex}`);
    }
  }

  /* ***Hobbies*** */
  addHobby(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (value.trim() !== '') {
      this.hobby = value;
      this.hobbiesList.push(this.hobby);
      console.log(this.hobbiesList);
    }
  }

  handleSubmit() {
    ('');
  }
}
