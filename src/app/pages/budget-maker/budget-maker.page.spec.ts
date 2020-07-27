import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetMakerPage } from './budget-maker.page';

describe('BudgetMakerPage', () => {
  let component: BudgetMakerPage;
  let fixture: ComponentFixture<BudgetMakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetMakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetMakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
