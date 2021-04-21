import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFromComponent } from './nested-from.component';

describe('NestedFromComponent', () => {
  let component: NestedFromComponent;
  let fixture: ComponentFixture<NestedFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
