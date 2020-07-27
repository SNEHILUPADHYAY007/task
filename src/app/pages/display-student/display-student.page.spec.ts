import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayStudentPage } from './display-student.page';

describe('DisplayStudentPage', () => {
  let component: DisplayStudentPage;
  let fixture: ComponentFixture<DisplayStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
