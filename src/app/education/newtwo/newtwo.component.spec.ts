import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtwoComponent } from './newtwo.component';

describe('NewtwoComponent', () => {
  let component: NewtwoComponent;
  let fixture: ComponentFixture<NewtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
