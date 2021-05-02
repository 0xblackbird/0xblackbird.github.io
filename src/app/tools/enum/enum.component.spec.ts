import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnumComponent } from './enum.component';

describe('EnumComponent', () => {
  let component: EnumComponent;
  let fixture: ComponentFixture<EnumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
