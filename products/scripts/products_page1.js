// importing
import {getData,Product_data} from '../components/fetch_products.js';
import {sorting_data,Product_data1} from '../components/sorting_fetch.js';



// // top page appending
// import {offer,delivery} from '../components/page_top.js';
// document.querySelector("#offer_section").innerHTML = offer();
// document.querySelector("#top_section").innerHTML = delivery();


// getting data from loacl storage 
let fetch_data = async()=>{
       let data = JSON.parse(localStorage.getItem("product_category"));
    //    let res = await getData(`${data}`);
   
      let res = await getData("bronzer");
      let container = document.querySelector("#product_section_cart");
      Product_data(res,container);
}
fetch_data();


// read more => read less javascript
let description = document.querySelector("#reading");
description.addEventListener("click",readMore);
function readMore(){
    let desc = document.querySelector("#reading");
    let description = document.querySelector(".reading");
    
    if(description.style.overflow==="hidden"){
        description.style.overflow = "visible";
        desc.style.marginTop = "180px";
        desc.innerText = "Read Less";
        
    }else if(description.style.overflow!=="hidden") {
        description.style.overflow = "hidden";
        desc.innerText = "Read More";
        desc.style.marginTop = "10px";
    }
}

//sorting functionality
let product_sort = document.querySelector("#sort_by_products");
product_sort.addEventListener("change",orient_Sort);

let brand_sort = document.querySelector("#sort_by_brand");
brand_sort.addEventListener("change",orient_Sort);

let order_sort = document.querySelector("#sort_by_price");
order_sort.addEventListener("change",orient_Sort);

 async function orient_Sort(){            
    let cont = document.querySelector("#product_section_cart");
    let price = order_sort.value;
    let brand = brand_sort.value;
    let product = product_sort.value;
    let res = await sorting_data(10,price,brand,product);
    if(res.length===0){
        cont.innerHTML="No Product is Available!";
    }else{
        Product_data1(res,cont);
    }
        
    // console.log(res);
}

