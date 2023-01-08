import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseManagerComponent } from './purchase-manager.component';

describe('PurchaseManagerComponent', () => {
  let component: PurchaseManagerComponent;
  let fixture: ComponentFixture<PurchaseManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
