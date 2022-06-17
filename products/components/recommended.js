let rec_api = async(query)=>{
    let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`);
    let data = await res.json();
    return data;
}
let  cart = JSON.parse(localStorage.getItem("cartData"))||[];

let recom_data = (data,container)=>{

    for(let i =0;i<5;i++){
        if(data[i].price=="0.0"){
            continue;
        }
        let div = document.createElement("div");
        div.setAttribute("id","images_section");
        
        let div2 = document.createElement("div");
        let img1 = document.createElement("img");
        img1.src = data[i].image_link;
        img1.setAttribute("id","product_image1");
        
        let img2 = document.createElement("img");
        img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEOA4hDXOIre__W81EdmdoDOLFG6SWGbkFw&usqp=CAU";
        img2.setAttribute("id","bookmark_tag");
        
        div2.append(img1,img2);
        
        let div3 = document.createElement("div");
        div3.setAttribute("id","product_content");
        
        let name = document.createElement("p");
        name.setAttribute("id","product_name");
        name.innerText = `${data[i].name}`;
        
        let cat = document.createElement("button");
        cat.setAttribute("id","dummy_brand");
        cat.innerText = `${data[i].brand}`;
        
        let product_type = document.createElement("btn");
        product_type.setAttribute("id","dummy_cat");
        product_type.innerText = `${data[i].product_type}`;
        
        let btn = document.createElement("button");
        btn.setAttribute("id","skin_gift");
        btn.innerText = "20% off SkinCeuticals Gift"
        
        
        let price = document.createElement("p");
        price.setAttribute("id","price_through");
        price.innerHTML = `MSRP: <span>$${Math.round(+data[i].price+5.5)*10/10}</span>`;
        
        let pri =  document.createElement("h3");
        pri.innerText = `$${data[i].price}`;
        
        div3.append(name,btn,cat,product_type,price,pri);
        
        let btn2 = document.createElement("button");
        btn2.setAttribute("id","buy_products");
        btn2.innerText = "Buy Now";

        // / saving data into loacl storage and calling api and append;
        img1.addEventListener("click",function(){
            localStorage.setItem("product_page2" ,JSON.stringify(data[i]));
            window.location.href="./product_2.html"
        })
        btn2.addEventListener("click",function(){
           // checking function 
           add_to_cart_checker(cart,data[i])
        })
        div.append(div2,div3,btn2)

        container.append(div);
    }
}

function add_to_cart_checker(ele,product_data)
{      
     let flag = true;
      for(let i=0;i<ele.length;i++){
        if(ele[i].id===product_data.id){
            flag = false;
            swal(`Product is Already Present!`, "", "warning");
            break;
        }
    }
              
     if(flag==true){
            swal(`Added to cart Successfully!`, "", "success");
            product_data.quantity =1;
            cart.push(product_data);
            localStorage.setItem("cartData",JSON.stringify(cart));
     }
        

}

export {rec_api,recom_data};



// thing to use this feature 
// 1. create a div on your html page with id as below:

// copy =>

{/* <div id="other_customer_buy">
<h3>Other Customers bought:</h3>
<div id="product_4">
    <!-- append  4 cards of products data -->
</div>
</div> */}

// 2. then link css as per folder directory

{/* <link rel="stylesheet" href="./styles/recomm.css"></link> */}

// 3. link js feature and remember keep your script type = "module" 

// import {rec_api,recom_data} from '../components/recommended.js'; 

// copy this code as it is

// let fetch_data = async ()=>{
//     let res = await rec_api("eyebrow");
//     let container = document.querySelector("#product_4");
//     recom_data(res,container);
// }
// fetch_data();