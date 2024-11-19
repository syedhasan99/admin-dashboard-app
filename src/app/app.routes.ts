import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard-components/overview/overview.component';
import { ProductsComponent } from './components/dashboard-components/products/products.component';
import { OrdersComponent } from './components/dashboard-components/orders/orders.component';
import { UsersComponent } from './components/dashboard-components/users/users.component';
import { CustomersComponent } from './components/dashboard-components/customers/customers.component';
import { InventoryManagementComponent } from './components/dashboard-components/inventory-management/inventory-management.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'inventoryManagement',
        component: InventoryManagementComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
