import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DownloadEnumComponent } from './download-enum.component';

describe('DownloadEnumComponent', () => {
  let component: DownloadEnumComponent;
  let fixture: ComponentFixture<DownloadEnumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadEnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
