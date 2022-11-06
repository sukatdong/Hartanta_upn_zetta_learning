import { Component, OnInit, Input, EventEmitter, Output,AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { item } from '../kasir-big/kasir-big.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  styles:['[bgaq]{  background-color: aquamarine;}',
  '[coba]{background: red; color: white}'
]

})
export class MenuComponent implements OnInit {

  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()
  @ViewChild('bgaq') bgaq?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }
  ngAfterViewInit(){

    this.bgaq?.nativeElement.setAttribute('bgaq', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
   
  } 

}
