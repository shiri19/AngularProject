import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusketComponent } from './all-busket.component';

describe('AllBusketComponent', () => {
  let component: AllBusketComponent;
  let fixture: ComponentFixture<AllBusketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBusketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBusketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
