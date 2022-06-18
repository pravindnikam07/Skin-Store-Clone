let cartData = JSON.parse(localStorage.getItem("cartData")) || []

let itemscount = document.getElementById("r_count");
itemscount.innerText=`${cartData.length} items`

let cartTot = localStorage.getItem("totalCartValue")
let amountSaved = localStorage.getItem("savedAmount")

let itemsdisplay = document.getElementById("r_itemsdisplay")

let countries_div = document.getElementById("s_country");
let country_api=`https://restcountries.com/v3.1/all`
fetchData(country_api)
async function fetchData(url){
    try{
        let res = await fetch(url)
        let countriesData = await res.json()
        // console.log('countriesData:', countriesData)
        countriesOptions(countriesData)
    }catch(err){
        console.log('err:', err)
    }
}

function countriesOptions(countries){
    countries_div.innerHTML= null;
    let opt = `<option value=""></option>`
    countries.forEach((el)=>{
        let country_name = el.name.common
        // console.log(country_name)
        
        opt += `<option value="${country_name}">${country_name}</option>`
        // console.log('opt:', opt)
        
    })
    countries_div.innerHTML=opt

}




paymentPageItems(cartData)

function paymentPageItems(data){
    itemsdisplay.innerHTML = null;

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

        let quan_div = document.createElement("p")
        quan_div.innerText = `Quantity: ${el.quantity}`

        let price_div = document.createElement("p")
        let pri = Number(el.price);
        price_div.innerText = `$${pri.toFixed(2)}`
        price_div.setAttribute("class","item_amount")

        imgdiv.append(prodimg)  
        descrDiv.append(itemname,quan_div,price_div)
        box.append(imgdiv,descrDiv)
        itemsdisplay.append(box)
    })
}

document.getElementById("r_saveamt").innerText=`$${(+amountSaved).toFixed(2)}`
document.getElementById("r_taxAmt").innerText=`$${((+cartTot)*0.05).toFixed(2)}`
let totalAmtToPay = ((+cartTot)*1.05).toFixed(2)
localStorage.setItem("totalAmountToPay",JSON.stringify(totalAmtToPay))
document.getElementById("r_TotAmt").innerText=`$${totalAmtToPay}`

// --------------Form---------------------------//

let detailsForm = document.getElementById("details_form>form");
let paymentForm = document.getElementById("payment_form>form");


let countryName = document.getElementById("s_country")
let fullName = document.getElementById("s_name")
let zipCode = document.getElementById("s_zipcode")
let companyName = document.getElementById("s_company")
let address1 = document.getElementById("s_address")
let address2 = document.getElementById("s_address2")
let apartment = document.getElementById("s_apartment")
let townCity = document.getElementById("s_town")
let stateProvince = document.getElementById("s_state")
let contactNo = document.getElementById("s_contactNumber")


let cardNum = document.getElementById("c_num")
let NameOnCard = document.getElementById("c_name")
let expMonth = document.getElementById("expiry-month")
let expYear = document.getElementById("expiry-year")
let secCode = document.getElementById("c_security")

let deliveryForm_div = document.querySelector("#delivery_form>div")
address1.addEventListener("keyup",()=>{
    if(countryName.value && zipCode && address1)
    {
        deliveryForm_div.style.display = "block"
    }
    else 
    {
        deliveryForm_div.style.display = "none"
    }
})




let submitButton = document.getElementById("submit_btn")

submitButton.addEventListener("click",()=>{
    

    if(countryName.value && fullName.value && zipCode.value && address1.value && apartment.value && townCity.value && stateProvince.value && contactNo.value && cardNum.value && NameOnCard.value && expMonth.value && expYear.value && secCode.value)
    {
        let shippingDetailsObj = {
            countryName:countryName.value,
            fullName:fullName.value,
            zipCode:zipCode.value,
            companyName:companyName.value,
            address1:address1.value,
            address2:address2.value,
            apartment:apartment.value,
            townCity:townCity.value,
            stateProvince:stateProvince.value,
            contactNo:contactNo.value
        }
        let creditCardDetails = {
            cardNumber:cardNum.value,
            nameOnCard:NameOnCard.value,
            expMonth:expMonth.value,
            expYear:expYear.value,
            securityCode:secCode.value
        }
        localStorage.setItem("shippingDetails",JSON.stringify(shippingDetailsObj))
        localStorage.setItem("creditCardDetails",JSON.stringify(creditCardDetails))
        swal({
            title: "Order Successful!",
            text: "Your Order will be delivered within 3-5 working days!",
            icon: "success",
            button: "Continue Shopping",
          });
        setTimeout(function () {
            window.location.href="./index.html";
        },2000);  
    }
    else
    {
        swal("Please enter all the required details!");
    }
})