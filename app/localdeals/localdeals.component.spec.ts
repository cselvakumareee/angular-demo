import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldealsComponent } from './localdeals.component';

describe('LocaldealsComponent', () => {
  let component: LocaldealsComponent;
  let fixture: ComponentFixture<LocaldealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaldealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaldealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
