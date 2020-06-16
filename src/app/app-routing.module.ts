import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './auth-module/table/table.component';
import { RegFormComponent } from './auth-module/reg-form/reg-form.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'userregister', component: UserRegisterComponent },

  {
    path: 'register',
    loadChildren: () => import('./auth-module/auth-module.module').then(mode => mode.AuthModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
