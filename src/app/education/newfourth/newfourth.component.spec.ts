import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfourthComponent } from './newfourth.component';

describe('NewfourthComponent', () => {
  let component: NewfourthComponent;
  let fixture: ComponentFixture<NewfourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
