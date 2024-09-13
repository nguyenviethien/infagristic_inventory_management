import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OrdersComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
