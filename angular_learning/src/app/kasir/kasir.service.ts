export interface item {id : number , name : string , Harga : number}
export interface Selecteditem {id : number , name : string , Harga : number, amount : number}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn :'root'
})

export class KasirService{ 
private items : BehaviorSubject<item[]> = new BehaviorSubject<item[]> 
    ([

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


    ])
    
  private selectedItems : BehaviorSubject<Selecteditem[]> = new BehaviorSubject<Selecteditem[]>([]);

  public items$ = this.items.asObservable();
  public selectedItems$ = this.selectedItems.asObservable();

  addItem(item :item){
    const duplicated =this.selectedItems.value.findIndex(({id}) =>id=== item.id)

    if(duplicated>=0){
      this.selectedItems.value[duplicated].amount +=1
    }
    else{
      this.selectedItems.value.push({...item, amount: 1})
    }
  }
    removeItem(itemToBeRemoved:Selecteditem)
    {
        const itemIndex = this.selectedItems.value.findIndex(({id}) => id ===itemToBeRemoved.id)
      
        if(this.selectedItems.value[itemIndex].amount>1){
          this.selectedItems.value[itemIndex].amount-=1
        }
        else{
          this.selectedItems.value.splice(itemIndex,1);
        }
     
    }
}

