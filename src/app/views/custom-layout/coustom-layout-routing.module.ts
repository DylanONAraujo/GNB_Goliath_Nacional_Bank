import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout.component';

const routes: Routes = [
  { path: '', component: CustomLayoutComponent, 
    children:[
      {
    path: 'dashboard',
    loadChildren: () =>
      import('../pages/dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class CoustomLayoutRoutingModule { }
