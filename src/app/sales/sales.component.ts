import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IComboSelectionChangingEventArgs, IGX_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { RevenueType } from '../models/ecommerce/revenue-type';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_COMBO_DIRECTIVES, IgxCategoryChartModule, FormsModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public eCommerceRevenue: RevenueType[] = [];
  public revenue: RevenueType[] = [];

  constructor(
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.eCommerceRevenue = data
    );
    this.eCommerceService.revenue.pipe(takeUntil(this.destroy$)).subscribe(x => this.revenue = x);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public comboSelectionChanging(event: IComboSelectionChangingEventArgs) {
    this.eCommerceService.revenue.next(event.newValue as RevenueType[]);
  }
}
