import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCenterComponent } from './answer-center.component';

describe('AnswerCenterComponent', () => {
  let component: AnswerCenterComponent;
  let fixture: ComponentFixture<AnswerCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
