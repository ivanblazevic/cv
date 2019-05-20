import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceItemComponent } from './open-source-item.component';

describe('OpenSourceItemComponent', () => {
  let component: OpenSourceItemComponent;
  let fixture: ComponentFixture<OpenSourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
