import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentMaterialComponent } from './add-component-material.component';

describe('AddComponentMaterialComponent', () => {
  let component: AddComponentMaterialComponent;
  let fixture: ComponentFixture<AddComponentMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
