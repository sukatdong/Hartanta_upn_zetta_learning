import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'kasir',
    pathMatch:'full',
    loadChildren:()=>import('./kasir/kasir.module').then(mod=>mod.KasirModule),
  },
  {
    path :'employee',
    loadChildren:()=>import('./employee/employee.module').then(m=> m.EmployeeModule),
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
