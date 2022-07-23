import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMenueComponent } from './manager-menue.component';

describe('ManagerMenueComponent', () => {
  let component: ManagerMenueComponent;
  let fixture: ComponentFixture<ManagerMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
