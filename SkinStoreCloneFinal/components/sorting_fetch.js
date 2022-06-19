

let sorting_data = async (price="10",price_cat,brand="covergirl",product="eyeshadow")=>{
    let res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?${price_cat}=${price}&brand=${brand}&product_type=${product}`);
    let data = await res.json();
    return data;
}
let  cart = JSON.parse(localStorage.getItem("cartData"))||[];

let Product_data1 = (data,container)=>{
    document.querySelector( "#product_section_cart").innerHTML=null;
    let count =0;
         for(let i=0;i<data.length;i++){
            
         if(data[i].price=="0.0"){
            continue;
        }
        if(count>=20){
            break;
        }
        count++;
    
        // console.log(data[i]);
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
        btn2.innerText = "Buy Now"
        // / saving data into loacl storage and calling api and append;
    //   1. product page
        img1.addEventListener("click",function(){
            localStorage.setItem("product_page2" ,JSON.stringify(data[i]));
            window.location.href="./product_2.html"
        })
        //   2. cart storage
        btn2.addEventListener("click",function(){
            add_to_cart_checker(cart,data[i])
        })
        div.append(div2,div3,btn2)

        container.append(div);
        let change_name = document.getElementById('change_name');
        change_name.innerText = `Shop ${data[i].product_type.toUpperCase()} Skincare`;
    }
}

function add_to_cart_checker(ele,product_data)
{      
    //  cart = JSON.parse(localStorage.getItem("cartData"))||[];
     let flag = true;
      for(let i=0;i<ele.length;i++){
        // console.log(product_data);
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
            const cart_qty = document.getElementById('cart_qty');
            cart_qty.innerText = cartData.length;
            window.location.reload();
     }
        

}

export  {sorting_data,Product_data1} ;
