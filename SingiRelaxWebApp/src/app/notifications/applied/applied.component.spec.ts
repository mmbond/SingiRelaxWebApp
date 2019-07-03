import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedComponent } from './applied.component';

describe('AppliedComponent', () => {
  let component: AppliedComponent;
  let fixture: ComponentFixture<AppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
