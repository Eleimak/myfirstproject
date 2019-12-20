import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthirdComponent } from './newthird.component';

describe('NewthirdComponent', () => {
  let component: NewthirdComponent;
  let fixture: ComponentFixture<NewthirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewthirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
