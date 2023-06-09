import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardskillComponent } from './hardskill.component.spec';

describe('HardskillComponent', () => {
  let component: HardskillComponent;
  let fixture: ComponentFixture<HardskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});