import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinalItemComponent } from './add-final-item.component';

describe('AddFinalItemComponent', () => {
  let component: AddFinalItemComponent;
  let fixture: ComponentFixture<AddFinalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
