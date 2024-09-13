import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IGX_DIALOG_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxCheckboxComponent } from 'igniteui-angular';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductsComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IGX_DIALOG_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
