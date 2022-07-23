import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarshamaComponent } from './harshama.component';

describe('HarshamaComponent', () => {
  let component: HarshamaComponent;
  let fixture: ComponentFixture<HarshamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarshamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarshamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
