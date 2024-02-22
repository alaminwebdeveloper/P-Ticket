


const allbtn = document.getElementsByClassName("add-btn");

let count = 0;
let removeCount = 8;

for(btn of allbtn){
    btn.addEventListener('click', function (e) {
       count = count + 1;
       setInnerText("card-count", count);

       removeCount = removeCount - 1;
       setRemoveInnerText("seats", removeCount);


       const placeName = e.target.parentNode.childNodes[3].innerText;
    
        
       const placeNameEconomoy = e.target.parentNode.childNodes.innerText = "Economoy";
       const cartPrice = e.target.parentNode.childNodes.innerText = 550;


       const selectCard = document.getElementById("select-cart");

       const div = document.createElement("div");
       div.classList.add("flex");
       div.classList.add("justify-between");
       div.classList.add("w-full");
    
       


       const p1 = document.createElement('p');
       p1.innerText = placeName;

       const p2 = document.createElement('p');
       p2.innerText = placeNameEconomoy;

       const p3 = document.createElement('p');
       p3.innerText = cartPrice;


       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);

       selectCard.appendChild(div);
       updateTotalCost(cartPrice);

       updateGrandTotal();

        
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function setRemoveInnerText(id, value){
    document.getElementById(id).innerText = value;
}




function updateGrandTotal(status){

    const totalCost = getConveredValue("total-cost");
    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalCost;
    }else{
        const couponCode = document.getElementById("coupon-code").value;
        
        if( couponCode == "NEW15" || couponCode == "Couple20"){
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }else{
            alert("Please Vailed Coupon Number");
        }
    }

}




function updateTotalCost(value){
    const totalCost = getConveredValue("total-cost");

    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

function getConveredValue(id){
    const prices = document.getElementById(id).innerText;
    const convertPrices = parseInt(prices);
    return convertPrices;
}   




// function addBackgrundColor(elementClass){
//     const element = document.getElementsByClassName(elementClass);
//     element.classList.add("red")
// }

// const btnColorChange = document.getElementsByClassName("add-btn");

// btnColorChange.addEventListener("click", function(){
    
// })





