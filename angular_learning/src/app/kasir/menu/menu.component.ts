import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { item, KasirService } from '../kasir.service';
export interface items {id : number , name : string , Harga : number}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {

  public items : Observable<item[]>

  constructor(private kasirService: KasirService) {
    this.items = this.kasirService.items$
   }

  ngOnInit(): void {
  
   
  } 

  addItem(item :item) : void{
    this.kasirService.addItem(item);
  }
}
