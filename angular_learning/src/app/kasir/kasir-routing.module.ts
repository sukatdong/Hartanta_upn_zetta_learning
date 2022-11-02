import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KasirBigComponent } from './kasir-big/kasir-big.component';

const routes : Routes = [
  {
    path: '',
    pathMatch:'full',
    component: KasirBigComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KasirRoutingModule { }
