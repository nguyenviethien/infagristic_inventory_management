import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'products', component: ProductsComponent, data: { text: 'Products' } },
  { path: 'orders', component: OrdersComponent, data: { text: 'Orders' } },
  { path: 'customers', component: CustomersComponent, data: { text: 'Customers' } },
  { path: 'sales', component: SalesComponent, data: { text: 'Sales' } },
  { path: 'reports', component: ReportsComponent, data: { text: 'Reports' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
