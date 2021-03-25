const pricings = document.querySelectorAll("[data-toggle=price]");
let currentPrice = null;

pricings.forEach(price =>{

    price.addEventListener("click", ()=>{
        pricings.forEach(item =>{
            item.classList.remove("pop-up");
        })
        if (currentPrice == price){
            currentPrice = null;
            price.classList.remove("pop-up");
        } else {
            currentPrice = price;
            price.classList.add("pop-up");
        }
    });
})