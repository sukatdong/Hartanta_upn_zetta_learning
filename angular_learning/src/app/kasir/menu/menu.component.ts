import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { item } from '../kasir-big/kasir-big.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()

  constructor() { }

  ngOnInit(): void {
  }
  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

}
