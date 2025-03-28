import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUserComponent } from './skills-user.component';

describe('SkillsUserComponent', () => {
  let component: SkillsUserComponent;
  let fixture: ComponentFixture<SkillsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
