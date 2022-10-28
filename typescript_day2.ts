type combine =(number | string)[];

function ts (text1 :combine): string{
    let result: string= '';
    text1.map((text, index)=>{
        result += (index ? ' ' : '')+text;
    })

    return result;

    
}

const tes =[1 ,'data' ,3, 'result']
const tes2 =['Bejo', 'has', 4, 'sport', 'car']
console.log(ts(tes))
console.log(ts(tes2))