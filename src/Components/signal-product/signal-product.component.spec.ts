import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalProductComponent } from './signal-product.component';

describe('SignalProductComponent', () => {
  let component: SignalProductComponent;
  let fixture: ComponentFixture<SignalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
