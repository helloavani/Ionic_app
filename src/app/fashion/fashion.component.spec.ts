import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionComponent } from './fashion.component';

describe('FashionComponent', () => {
  let component: FashionComponent;
  let fixture: ComponentFixture<FashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
