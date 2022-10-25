function priceCalc(book, disc, tax) 
{

    let result = 0;

    if(book && book.price) 
    {
        const price = book.price;
        const amountdisc = price * (disc/100);
        const pricedisc = price - amountdisc;
        const amounttax = pricedisc * (tax/100);
        const pricetax = pricedisc - amounttax;

        console.group();
        console.log('Title               : ', book.title);
        console.log('Original            : ', price);
        console.log('Disc Amount         : ', amountdisc);
        console.log('Price After Dis     : ', pricedisc);
        console.log('Tax Amount          : ', amounttax);
        console.log('Price After Tax     : ', pricetax);
        console.groupEnd();  
    }
    return result; 
}
priceCalc({title : 'Tukang bubur Naik Mobil', price : 5000, printing_status : true}, 10, 5);