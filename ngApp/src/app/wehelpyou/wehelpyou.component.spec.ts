import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WehelpyouComponent } from './wehelpyou.component';

describe('WehelpyouComponent', () => {
  let component: WehelpyouComponent;
  let fixture: ComponentFixture<WehelpyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WehelpyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WehelpyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
