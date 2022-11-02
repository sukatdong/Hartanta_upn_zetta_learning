import { Component, OnInit } from '@angular/core';
export interface item {id : number , name : string , Harga : number}
export interface Selecteditem {id : number , name : string , Harga : number, amount : number}

@Component({
  selector: 'app-kasir-big',
  templateUrl: './kasir-big.component.html',
  styleUrls: ['./kasir-big.component.scss']
})
export class KasirBigComponent implements OnInit {

  public items : item[] = [
    {id : 1 , name : 'Ayam Gule', Harga: 5000},
    {id : 2 , name : 'Ayam Bakar', Harga: 3000},
    {id : 3 , name : 'Ayam Madu', Harga: 4000},
    {id : 4 , name : 'Ayam Rica', Harga: 5000},
    {id : 5 , name : 'Kopi Susu', Harga:4000},
    {id : 6 , name : 'Kentang Bakar', Harga: 10000},
    {id : 7 , name : 'Tomat Bakar', Harga: 6000},
    {id : 8 , name : 'Air Gula', Harga: 7000},
    {id : 9 , name : 'Es Teh', Harga: 6000},
    {id : 10 , name : 'Es Jeruk', Harga: 6000}
  ]
  public selectedItems : Selecteditem[]=[]

  constructor() { }

  ngOnInit(): void {
  }
  addItem(item :item){
    const duplicated =this.selectedItems.findIndex(({id})   =>id=== item.id)

    if(duplicated>=0){
      this.selectedItems[duplicated].amount +=1
    }
    else{
      this.selectedItems.push({...item, amount: 1})
    }
  }


}
