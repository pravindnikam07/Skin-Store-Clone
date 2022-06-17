
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
let main_cart_div = document.getElementById("mainCart")
let checkOutBtn1 = document.querySelector(".checkoutBtn1")
let checkOutBtn2 = document.querySelector(".checkoutBtn2")
let cart_products_table = document.getElementById("cart_prod_table")
let cartItems_list = document.getElementById("cart_items");
let free_products_div = document.getElementById("free_prods")
let freeFlag = localStorage.getItem("freeFlag") || 0
// coupon functionality-----------------------
let coupon_search = document.getElementById("couponSearch")
let coupon_button = document.getElementById("couponButton") 
let couponYN = localStorage.getItem("couponYN") || 0
coupon_button.addEventListener("click",()=>{
    if(coupon_search.value == "SAVE20")
    {
        couponYN = 1;
    }
    else couponYN =0;

    localStorage.setItem("couponYN",couponYN)
    couponYN = localStorage.getItem("couponYN")
    display(cartData)
})
// ---------------------------------------------
display(cartData)
function display(data){
    if(data.length == 0)
    {
        cart_prod_table.style.display="none"
        main_cart_div.style.display="block"
        checkOutBtn.style.display="none"
        let noitems = document.createElement("div")
        noitems.innerText=`There are currently no items in your cart.`
        noitems.setAttribute("id","no_items")
        let continueShopping = document.createElement("button")
        continueShopping.innerText=`CONTINUE SHOPPING`
        continueShopping.style.display="block"
        continueShopping.setAttribute("id","cnt_shopping")

        main_cart_div.append(noitems,continueShopping)
    }
    else
    {
        cartItems_list.innerHTML = null;
        var list = document.createElement("ul")
        data.forEach((el,i)=>{
            let listItem = document.createElement("li")
            listItem.setAttribute("class","li_row")
            let singleProd = document.createElement("div")
            singleProd.setAttribute("class","single_prod")
            // Image and description
            let item_div = document.createElement("div");
            item_div.setAttribute("class","item_c1")

            let itemImage = document.createElement("img");
            itemImage.src= el.image_link;
            itemImage.setAttribute("class","item_img")

            let itemDes = document.createElement("h4");
            itemDes.innerText = el.name;
            itemDes.setAttribute("class","des")

            item_div.append(itemImage,itemDes)
            // Price-----------------------------
            let price_div = document.createElement("p")
            price_div.innerText = `$${el.price.toFixed(2)}`
            price_div.setAttribute("class","item_price")
            // quantity--------------------------
            let quantity_div = document.createElement("div")
            quantity_div.setAttribute("class","mainquant")
            let dec = document.createElement("div")
            dec.innerText = "-"
            dec.addEventListener("click",()=>{
                quantityChanger(el,i,"-")
            })

            quantityDisplay= document.createElement("p")
            quantityDisplay.setAttribute("class","quant")
            quantityDisplay.innerText = el.quantity;

            let inc = document.createElement("div")
            inc.innerText = "+"
            inc.addEventListener("click",()=>{
                quantityChanger(el,i,"+")
            })

            quantity_div.append(dec,quantityDisplay,inc)
            
            // subtotal-------------------------------
            let subtotal_div = document.createElement("p")
            subtotal_div.setAttribute("class","sub_total")
            let actSub = el.price* el.quantity
            if(couponYN == 1)
            {
                actSub = actSub * 0.8
            }
            el.subTotal = actSub
            subtotal_div.innerText = `$${(actSub).toFixed(2)}`

            let cross_div = document.createElement("div")
            cross_div.setAttribute("class","cross_sym")
            let cross_img = document.createElement("img")
            cross_img.src = "../images/cross.png"
            cross_div.append(cross_img)
            cross_div.addEventListener("click",()=>{
                deleteFun(el,i)
            })
            

            singleProd.append(item_div,price_div,quantity_div,subtotal_div,cross_div)
            list.append(singleProd)
        })
        
        // freeFlag = localStorage.getItem("freeFlag")
        // if(freeFlag == 1)
        // {
        //     list.append(box)
        // }
        
        
        // Cart total---------------------------
        let cartTotal_div = document.createElement("div")
        cartTotal_div.setAttribute("id","cart_total_div")
        let carttotal = document.createElement("p")
        carttotal.innerText="Cart Subtotal:"

        let subtotalAmount = document.createElement("p")
        let actTotal = totalFun(cartData).toFixed(2)
        let offer_div = document.getElementById("offer_amount")
        offer_div.innerHTML=null
        if(couponYN == 1)
        {
            actTotal = actTotal * 0.8
            actTotal =actTotal.toFixed(2)
            offer_div.innerHTML=null
            let offer_des = document.createElement("p")
            offer_des.innerText=`SkinStore Offer - 20% off`

            let amount_reduced = document.createElement("p")
            let savedAmt = totalFun(cartData)*0.2
            amount_reduced.innerText = `-$${savedAmt.toFixed(2)}`
            amount_reduced.setAttribute("id","redAmt")
            localStorage.setItem("savedAmount",savedAmt)

            let offer_cross = document.createElement("div")
            offer_cross.setAttribute("id","cross_off")
            let cross_offImg = document.createElement("img")
            cross_offImg.src = "../images/cross.png"
            offer_cross.addEventListener("click",()=>{
                couponYN = 0
                localStorage.setItem("couponYN",couponYN)
                savedAmt=0
                localStorage.setItem("savedAmount",savedAmt)
                window.location.reload()
            })
            offer_cross.append(cross_offImg)
            offer_div.append(offer_des,amount_reduced,offer_cross)
        }
        localStorage.setItem("totalCartValue",actTotal)
        subtotalAmount.innerText =`$${actTotal}` 

        cartTotal_div.append(carttotal,subtotalAmount)

        cartItems_list.append(list,cartTotal_div)
    }
    localStorage.setItem("cartData",JSON.stringify(cartData))
}



function quantityChanger(el,i,op){
    if(op === "-")
    {
        if(el.quantity > 1)
        {
            el.quantity--;
        }
        else if(el.quantity == 1)
        {
            deleteFun(el,i)
        }
    }
    else if(op === "+")
    {
        el.quantity++
    }
    localStorage.setItem("cartData",JSON.stringify(cartData))
    cartData = JSON.parse(localStorage.getItem("cartData")) || []
    display(cartData)
}

function deleteFun(el,i){
    cartData.splice(i,1)
    localStorage.setItem("cartData",JSON.stringify(cartData))
    cartData = JSON.parse(localStorage.getItem("cartData")) || []
    
    display(cartData)
}
function totalFun(cartData){
var total= cartData.reduce((acc,el)=>{
    return acc+(el.price*el.quantity)
  },0)
  
  return total
}


checkOutBtn1.addEventListener("click",()=>{
    location.href="../payment.html"
})

checkOutBtn2.addEventListener("click",()=>{
    location.href="../payment.html"
})

let freeitemsdisplay = document.getElementById("freeProd_display")
let freecartData = JSON.parse(localStorage.getItem("freeProds")) || []
freeItems(freecartData)

function freeItems(data){
    freeitemsdisplay.innerHTML = null;

    data.forEach((el)=>{
        let box = document.createElement("div");
        box.setAttribute("class","singlebox")

        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("class","img_div");

        let prodimg = document.createElement("img");
        prodimg.src=el.image_link;

        let descrDiv = document.createElement("div");
        descrDiv.setAttribute("class","des_div")

        let itemname = document.createElement("p");
        itemname.innerText = el.name;
        itemname.setAttribute("class","item_name")

        imgdiv.append(prodimg)  
        descrDiv.append(itemname)
        box.append(imgdiv,descrDiv)
        freeitemsdisplay.append(box)

        // box.addEventListener("click",()=>{
        //     freeFlag = 1;
        //     localStorage.setItem("freeFlag",freeFlag);
        //     display(cartData)

        // })
    })
}