import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IComboSelectionChangingEventArgs, IGX_CARD_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ProductsType } from '../models/inventory-app/products-type';
import { SalesType } from '../models/ecommerce/sales-type';
import { InventoryAppService } from '../services/inventory-app.service';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_COMBO_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxCheckboxComponent, FormsModule, NgFor, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public inventoryAppProducts: ProductsType[] = [];
  public products: ProductsType[] = [];
  public eCommerceSales: SalesType[] = [];
  public value: string = 'Basic Tee';
  public value1: string = '2';
  public value2: string = 'Here you can add some description of the product in more details';
  public checked: boolean = true;
  public value3: number = 15.99;
  public value4: number = 99;
  public value5: string = 'M050';

  constructor(
    private inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    this.inventoryAppService.getProductsList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.inventoryAppProducts = data
    );
    this.inventoryAppService.products.pipe(takeUntil(this.destroy$)).subscribe(x => this.products = x);
    this.eCommerceService.getSalesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.eCommerceSales = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public comboSelectionChanging(event: IComboSelectionChangingEventArgs) {
    this.inventoryAppService.products.next(event.newValue as ProductsType[]);
  }
}
