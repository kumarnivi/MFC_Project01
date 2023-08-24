import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section02Component } from './section02.component';

describe('Section02Component', () => {
  let component: Section02Component;
  let fixture: ComponentFixture<Section02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section02Component]
    });
    fixture = TestBed.createComponent(Section02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
