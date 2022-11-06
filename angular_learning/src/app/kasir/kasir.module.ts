import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir/kasir.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    KasirComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
