import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'reg', component: RegFormComponent, },

      { path: 'table', component: TableComponent },
      {
        path: ':id', component: RegFormComponent
      },
    ]
  },

  // {
  //   path: 'reg', component: RegFormComponent,
  //   children: [
  //     { path: 'reg', component: RegFormComponent },

  //     { path: 'table', component: TableComponent },
  //     {
  //       path: ':id', component: RegFormComponent
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
