const phones = [
    {name: 'Samsung', price: 32000, color: 'black', camera: '13mp'},
    {name: 'xiaomi', price: 18000, color: 'silver', camera: '12mp'},
    {name: 'Lenevo', price: 22000, color: 'white', camera: '14mp'},
    {name: 'Iphone', price: 120000, color: 'pink', camera: '50mp'},
    {name: 'Nokia', price: 1200, color: 'black', camera: '10mp'},
]

function cheapPhone(phones){
    let cheap = phones[0]
    for(const phone of phones){
    if(phone.price < cheap.price){
        cheap = phone
    }
 }
 return cheap
}
const myPhone = cheapPhone(phones);
console.log(myPhone);