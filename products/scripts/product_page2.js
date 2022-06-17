import {rec_api,recom_data} from '../components/recommended.js';



// top page appending
// import {offer,delivery} from '../components/page_top.js';
// document.querySelector("#offer_section").innerHTML = offer();
// document.querySelector("#top_section").innerHTML = delivery();


let data = JSON.parse(localStorage.getItem("product_page2"));
// console.log(data);

let appending = (data)=>{
document.querySelector("#left_side_product").innerHTML=`  
<img id="product_img" src="${data.image_link}">
<div id="product_logo_dummy">
<img src="https://isclinical.com/media/online-retailers/cms-logo-skinstore.png" alt="">
<p>4 installments of $3.75 with ${data.name} 
Learn More about sezzle
Learn More ></p>
</div>
<hr class="line1">
<div id="description">
<h3>Description</h3>
<p>
        ${data.description}
    </p>
</div>
<hr class="line1">
<div id="product_Details">
<h3>Product Details</h3>
<table>
<tr class="bg_blue">
<td class="bold">Product Type</td>
<td>${data.product_type}</td>
</tr>
<tr class="bg_none">
<td class="bold">Ingredients:</td>
<td>Olea Europaea (Olive) Fruit Oil, Caprylic/Capric Triglyceride, Sorbeth-30 Tetraoleate, Pentylene Glycol, Phenoxyethanol, Tocopherol, Stearyl Glycyrrhetinate, Rosmarinus Officinalis (Rosemary) Leaf Oil.</td>
</tr>
<tr  class="bg_blue">
<td class="bold">Brand:</td>
<td>${data.brand}</td>
</tr>
<tr class="bg_none">
<td class="bold">Directions:</td>
<td>Dispense into dry hands, then massage onto dry face to dissolve make-up, dirt and other impurities. Rinse thoroughly.</td>
</tr>
</table>
</div>`;
}
appending(data);


let appending2=(data)=>{
    document.querySelector("#right_side_product").innerHTML = `<img id="company_logo" src="https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/dhc.gif" alt="">
    <h2 id="p_name">${data.name}</h2>
    <div id="rating_section">   
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span> 
            <p>8 Reviews</p>
            </div>
            <h1 id="product_price">From $${data.price}</h1>
            <p class="right_side_font">size</p>
            <button class="dummy_ml">70ml</button>
            <button class="dummy_ml">200ml</button>
            <hr class="line1">
            
            <div id="quantity_changer">
            <p>Quantity</p>
            <div>
            <button id="decrease">-</button>
            <input  type="number"  id="quant" min="1" max="5" readonly value="1">
            <button id="increase">+</button>  
            </div>
            </div>
            <button id="add_to_cart">ADD TO CART</button>
            <hr class="line1">
            <div id="product_wishlist">
            <div>
            <i class="fa fa-heart"></i>
            </div>
            <p>Save to Wishlist</p>
            </div>
            <p class="small_font">In stock - Usually dispatched within 24 hours</p>
            <button class="offer_scheme">20% off with code SAVE20</button>
            <p >20% off with code SAVE20</p> 
            <hr class="line1">
            <p class="small_font">20% off when you enter code <b>SAVE20 </b>  at the cart. Offer valid for 24 hours only. Ends midnight EST.</p>`;
        }
appending2(data);
        
        
        // quantity changer //
  let count = document.querySelector("#quant").value;
document.querySelector("#decrease").addEventListener("click",desc);
document.querySelector("#increase").addEventListener("click",incre);

function desc(){
    if(count==1){
        swal("Alert!", "Quantity must Greater than 0", "error");
    }else{
        count--;
        document.querySelector("#quant").value = count;
    }
}
function incre(){
    if(count==10){
        swal("Alert!", "You have reached the Limit", "error");
        
    }else{
        count++;
        document.querySelector("#quant").value = count;
    }
}

document.querySelector("#add_to_cart").addEventListener("click",added);


function added(){
    let data = JSON.parse(localStorage.getItem("product_page2"));
    add_to_cart_checker(data);
}

function add_to_cart_checker(product_data)
{      
     let cart = JSON.parse(localStorage.getItem("cartData"))||[];
     let flag = true;
      for(let i=0;i<cart.length;i++){
        if(cart[i].id===product_data.id){
            flag = false;
            swal(`Product is Already Present!`, "", "warning");
            break;
        }
    }
              
     if(flag==true){
         let quantity = document.querySelector("#quant").value;
            swal(`Added to cart Successfully!`, "", "success");
            product_data.quantity = quantity;
            cart.push(product_data);
            localStorage.setItem("cartData",JSON.stringify(cart));
     }
     console.log(cart);

}

console.log(data);

// recommendation api calling and appending to rec div
let fetch_data = async ()=>{
    let res = await rec_api("eyebrow");
    let container = document.querySelector("#product_4");
    recom_data(res,container);
}
fetch_data();