import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDateComponent } from './icon-date.component';

describe('IconDateComponent', () => {
  let component: IconDateComponent;
  let fixture: ComponentFixture<IconDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDateComponent]
    });
    fixture = TestBed.createComponent(IconDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
