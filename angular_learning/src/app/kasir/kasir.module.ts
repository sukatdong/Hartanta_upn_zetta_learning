import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirBigComponent } from './kasir-big/kasir-big.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    KasirBigComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
