import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInBusketComponent } from './item-in-busket.component';

describe('ItemInBusketComponent', () => {
  let component: ItemInBusketComponent;
  let fixture: ComponentFixture<ItemInBusketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInBusketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInBusketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
