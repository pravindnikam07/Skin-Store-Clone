import {navbar, footer} from '../components/navbarfooter.js';
let navbar_append = document.getElementById('navbar');
navbar_append.innerHTML = navbar();
let footer_append = document.getElementById('footer');
footer_append.innerHTML = footer();


const cartData = JSON.parse(localStorage.getItem('cartData'));
const user = JSON.parse(localStorage.getItem('user'));
const userdatabase = JSON.parse(localStorage.getItem('userdatabase'));

const ncategory = document.querySelectorAll('#ncategory');
const hover_category_div = document.getElementById('hover_category');

const naccount = document.querySelector('#naccount>a');
const account_hover = document.getElementById('account_hover');
const cart_hover = document.getElementById('cart_hover');
const ncart = document.getElementById('ncart');

const brands = document.getElementById('brands');
const summer_shop = document.getElementById('summer_shop');
const sale = document.getElementById('sale');
const build_a_routine = document.getElementById('build_a_routine');
const skin_care = document.getElementById('skin_care');
const hair = document.getElementById('hair');
const makeup = document.getElementById('makeup');
const tools = document.getElementById('tools');
const bath_body = document.getElementById('bath_body');
const self_care = document.getElementById('self_care');
const fragrance = document.getElementById('fragrance');
const new_trending = document.getElementById('new_trending');
const advice = document.getElementById('advice');

const hover_off = document.getElementById('hover_off');

const search_div = document.getElementById('nsearch');
const search_tag = document.getElementById('search_tag');
const search_icon = document.getElementById('search_icon');
const search_data = document.getElementById('search_data');
const deleteButton = document.getElementById('search_delete');
const logout_fun = document.getElementById('logout_fun');

/*
'blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish'

'Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick', 'Mascara', 'Nail Polish'
*/

/*








*/

let hover_data = {
        brands: [['Brands'], ['', 'Aesop', 'AHAVA', 'Alchimie Forever', 'Algenist'], ['', 'Alo', 'Alpha-H', 'Alterna', 'Ameliorate',], ['', 'Angela Caglia', 'Anna Sui', 'APIVITA', 'ARCONA',], ['', 'Aromatherapy Associates', 'Aurelia London', 'Auriderm']],
        summer_shop: [['Summer Shop'], ['Top Categories', 'Sunless Tanning', 'Hair Care', 'Skincare', 'Summer Scents', 'Experts Top Picks', 'Body Care', 'Skin Correcting Tools'], ['Trending SPF', 'Take the SPF Quiz', 'SPF 30 and over', 'SPF 50 and over', 'After Sun', 'Tinted', 'Mineral', 'Eye Protection'], ['On the Blog', 'How to Choose The Right SPF', 'Best Self Tanners for Summer', 'Summer Beauty Tricks', 'How to Get Glowing Skin This Summer', 'Summer Hair']],
        sale: [['Sale'], ['', 'Sale', 'Key Workers Discount',], ['', 'Refer A Friend', 'Clearance', ], ['', 'Gifts and Sets', 'All Coupons', 'Featured Offers']],
        build_a_routine: [['Build a Routine'], ['Skin Type Routines', 'Dry Skin Routine', 'Normal Skin Routine', 'Oily Skin Routine', 'Combination Skin Routine', 'Sensitive Skin Routine'], ['Skin Concern Routines', 'Acne Routine', 'Fine Lines & Wrinkles Routine', 'Dark Spots & Discoloration Routine', 'Redness & Rosacea Routine', 'Dullness & Brightening Routine'], ['Build a Hair Routine', 'Fine, Thinning Hair Routine', 'Healthy Scalp Routine', 'Colored Hair Routine', 'Dry, Damaged Hair Routine', 'Oily Hair Routine', 'Hair Styling Routine']],
        skin_care: [['Skin Care'], ['Popular Categories', 'View All Skin Care', 'New In', 'Clean Skincare', '5* Rated Products', 'Gifts & Sets', 'Supersizes & Duo', 'Travel Sizes'], ['By Product Type', 'Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick', 'Mascara', 'Nail Polish'], ['By Ingredient', 'Vitamin C', 'AHA', 'Caffeine', 'Retinol', 'Hyaluronic Acid', 'Niacinamide', 'Lactic Acid', 'Salicylic Acid', 'Glycolic Acid', 'Azelaic Acid'], ['By Specific Concern', 'Acne & Blemishes', 'Fine Lines & Wrinkles', 'Dark Circles', 'Dry Skin', 'Dullness', 'Lack of Firmness', 'Pigmentation', 'Pregnancy Skincare', 'Redness & Rosacea', 'Sensitive Skin', 'Visible Pores'], ['Sunscreen & Suncare', 'Take The SPF Quiz', 'SPF 30 and over', 'SPF 50 and over', 'After Sun', 'Tinted', 'Mineral', 'Eye Protection']],
        hair: [['Hair'], ['Popular Categories', 'View All Hair Care', 'New In', 'Clean Hair Care', '5* Rated Products', 'Gifts & Sets', 'Travel Sizes', 'Supersize & Duos'], ['Product Type', 'Shampoo', 'Conditioners',  'Hair Masks', 'Hair Oils', 'Hair Sprays', 'Hair Styling',  'Hair Color Treatments', 'Hair Brushes & Combs'], ['Hair Type', 'Anti-Dandruff & Scalp Care', 'Coarse & Textured Hair', 'Colored Hair', 'Curly & Wavy Hair', 'Damaged Hair', 'Dry Hair', 'Fine Hair', 'Oily Hair'], ['Electrical', 'Flat Irons', 'Hair Dryers', 'Rollers & Curling Tongs'], ['Hair Removal', 'Hair Removal Devices', 'Hair Removal Products', 'Mens Shaving Products']],
        makeup: [['Makeup'], ['Popular Categories', 'View All Cosmetics', 'New In', 'Clean Makeup', '5* Rated Products', 'Gifts & Sets', 'Brushes & Applicators'], ['Eyes', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Mascaras', 'Brow Pencils'], ['Face', 'BB & CC Cream', 'Blushers', 'Bronzers', 'Color Correctors', 'Concealers', 'Contour'], ['Lip', 'Lip Liner', 'Lipstick', 'Lip Balms', 'Lip Glosses', 'Lip Plumpers']],
        tools: [['Tools'], ['Popular Categories', 'View All Tools', 'Makeup Brushes & Accessories'], ['Hair Care', 'Hair Dryers', 'Flat Irons', 'Rollers & Curling Irons', 'Hair Brushes'], ['Skincare', 'LED Light Therapy', 'Facial Toning', 'Cleansing', 'Dermabrasion']],
        bath_body: [['Bath Body'], ['Popular Categories', 'View All Bath & Body', 'New In', 'Clean Bath & Body', '5* Rated Products', 'Travel Sizes'], ['Bath & Shower', 'Baths Oils/Soak', 'Bath Salts', 'Body Washes', 'Cleansing Bars', 'Exfoliators'], ['Self Tanners', 'Accessories', 'Pre-Tan Preparation', 'Body Tanners', 'Post Tanning'], ['Moisturizers', 'Balms', 'Butters', 'Creams', 'Lotions', 'Oils'], ['Targeted Care', 'Bust', 'Cellulite', 'Dry Skin', 'Hair Removal', 'Hand & Foot Care']],
        self_care: [['Self Care'], ['Popular Categories', 'Self Care', 'New In', '5* Rated Products', 'At-Home Spa', 'View All Wellness Products'], ['Sexual Wellness', 'Devices', 'Skin Care'], ['Supplements', 'Skin', 'Hair', 'Immune Boosting', 'Health & Wellbeing', 'Weight Loss'], ['Clean Beauty', 'Clean Skincare', 'Clean Haircare', 'Clean Makeup', 'Clean Bath & Body']],
        fragrance: [['Fragrance'], ['Popular Categories', 'View All Fragrance', 'New In', '5* Rated Products'], ['Top Brands', 'NEOM Organics', 'Glasshouse Fragrances', 'KORRES', 'NEST Fragrances', 'Molton Brown'], ['Personal Fragrance', 'Perfume', 'Eau de Toilette', 'Body Spray', 'For Her', 'For Him'], ['Home Fragrance', 'Scented Candles', 'Diffusers', 'Aromatherapy', 'Pillow Mists', 'Room Sprays']],
        new_trending: [['New Trending'], ['Latest brands', 'Trophy Skin', 'Rituals', 'SKIN GYM', 'Borghese', 'Chris Collins', 'Alpha-H', 'Alo'], ['View All New', 'New Skin Care', 'New Makeup', 'New Hair Care', 'New Bath & Body', 'New Fragrance'], ['Trending Now', 'Best of British Brands'], ['Trending Skin Care', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip Liner', 'Lipstick']],
        advice: [['Advice'], ['', 'Skin Care', 'Makeup'], ['', 'Hair Care', 'Body'], ['', 'Tips & Advice', 'Beauty Center'], ['', 'Free Beauty Consultations']]
    }



let create_div = (data) => {
    let hover_div = document.createElement('div');
    let n = data.length;
    for (let i=1; i<n; i++) {
        let div_c = document.createElement('div');
        let hr = document.createElement('hr');
        let lable = document.createElement('lable');
        lable.style.color = 'black';
        lable.innerText = data[i][0];
        div_c.append(hr,lable);

        let m = data[i].length;
        for (let j=1; j<m; j++) {
            let pTag = document.createElement('p');
            pTag.innerText = data[i][j];
            div_c.append(pTag);

            pTag.addEventListener('click', function () {
                let curr_product = pTag.innerText.toLocaleLowerCase().replace(/\s/g,'_');
                if (curr_product === 'blush' || curr_product === 'bronzer' || curr_product === 'eyebrow' || curr_product === 'eyeliner' || curr_product === 'eyeshadow' || curr_product === 'foundation' || curr_product === 'lip_liner' || curr_product === 'lipstick' || curr_product === 'mascara'|| curr_product === 'nail_polish') localStorage.setItem('product_category', JSON.stringify(curr_product));
                else localStorage.setItem('product_category', JSON.stringify('blush'));
                window.location.href = './product_1.html';
            });
        }
        hover_div.append(div_c);
    }
    return hover_div;
}
let hover_category = (data) => {
    let retData = create_div(data);
    let hr = document.createElement('hr');
    let categ = document.createElement('h3');
    categ.innerText = data[0];
    hover_category_div.innerHTML = null;
    hover_category_div.append(hr, categ, retData);
    hover_category_div.style.display = 'block';
}
brands.addEventListener('mouseover', function () {
    hover_category(hover_data.brands);
});
summer_shop.addEventListener('mouseover', function () {
    hover_category(hover_data.summer_shop);
});
sale.addEventListener('mouseover', function () {
    hover_category(hover_data.sale);
});
build_a_routine.addEventListener('mouseover', function () {
    hover_category(hover_data.build_a_routine);
});
skin_care.addEventListener('mouseover', function () {
    hover_category(hover_data.skin_care);
});
hair.addEventListener('mouseover', function () {
    hover_category(hover_data.hair);
});
makeup.addEventListener('mouseover', function () {
    hover_category(hover_data.makeup);
});
tools.addEventListener('mouseover', function () {
    hover_category(hover_data.tools);
});
bath_body.addEventListener('mouseover', function () {
    hover_category(hover_data.bath_body);
});
self_care.addEventListener('mouseover', function () {
    hover_category(hover_data.self_care);
});
fragrance.addEventListener('mouseover', function () {
    hover_category(hover_data.fragrance);
});
new_trending.addEventListener('mouseover', function () {
    hover_category(hover_data.new_trending);
});
advice.addEventListener('mouseover', function () {
    hover_category(hover_data.advice);
});



//to hide the hover content
let hover_category_hide = () => {
    hover_category_div.style.display = 'none';
}
hover_category_div.addEventListener('mouseleave', hover_category_hide);
hover_off.addEventListener('mouseover', hover_category_hide);


// seaching functionality
let getdata = async (query) => {
    let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`);
    let data = await res.json();
    return data;
}
let append_search_data = (data) => {
    search_data.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image_link;
        let div1 = document.createElement('div');
        let name = document.createElement('h4');
        name.innerText = el.name;
        let price = document.createElement('p');
        price.innerText = `$${el.price}`;
        div1.append(name, price)
        div.append(img,div1);
        search_data.append(div);

        div.addEventListener('click', function () {
            localStorage.setItem('product_page2', JSON.stringify(el));
            window.location.href = './product_2.html';
        });
    });   
}
let main = async () => {
    let query = search_tag.value;
    search_data.style.display = 'block';
    let data = await getdata(query);
    if (!data || !query.length) search_data_hide();
    else append_search_data(data);
}
search_icon.addEventListener('click', main);
// let id;
// function debounceFunction(func,delay){
//     if(id){
//         clearTimeout(id);
//     }
//     id = setTimeout(function(){
//         func();
//     },delay);
// }

let search_data_hide = () => {
    search_data.style.display = 'none';
    search_tag.value = null;
}
let delete_button = () => {
    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', search_data_hide);
}
let delete_button_hide = () => {
    deleteButton.style.display = 'none';
}
search_div.addEventListener('mouseenter', delete_button);
search_div.addEventListener('mouseleave', delete_button_hide);


// account hover
let account_data = () => {
    let sign_in = user;
    let div1 = document.createElement('div');
    if (!sign_in) {
        let button1 = document.createElement('button');
        button1.innerText = 'LOGIN';
        button1.addEventListener('click', function () { window.location.href = './login.html'});
        let button2 = document.createElement('button');
        button2.innerText = 'REGISTER';
        button2.addEventListener('click', function () { window.location.href = './register.html'});
        div1.append(button1, button2);
    }
    else {
        let name = user[0].name;
        let p1 = document.createElement('p');
        p1.innerText = `Hello ${name}`;
        let p2 = document.createElement('p');
        p2.innerText = 'My Account';
        let button1 = document.createElement('button');
        button1.setAttribute('id', 'logout_fun')
        button1.innerText = 'LOG OUT';
        // logout section
        button1.addEventListener('click', function () {
            window.localStorage.removeItem("user");
            window.location.href = './index.html';
        });
        div1.append(button1, p1, p2);
    }

    let div2 = document.createElement('div');
    let p1 = document.createElement('p');
    p1.innerText = 'Wishlist';
    let p2 = document.createElement('p');
    p2.innerText = 'Your Order';
    let p3 = document.createElement('p');
    p3.innerText = 'Your Referrals';

    div2.append(p1, p2, p3);
    account_hover.innerHTML = null;
    account_hover.append(div1,div2);

    account_hover.style.display = 'block';
}

let account_data_hide = () => {
    account_hover.style.display = 'none';
    cart_hover.style.display = 'none';
}
naccount.addEventListener('mouseover', account_data);
account_hover.addEventListener('mouseleave', account_data_hide);
hover_off.addEventListener('mouseleave', account_data_hide);


//cartData & totalCartValue append cart data
const totalCartValue = JSON.parse(localStorage.getItem('totalCartValue'));
// console.log(totalCartValue);
let pric;
if (totalCartValue) {pric = totalCartValue}
else {pric = 0}

let append_cart_data  = (cartData) => {
    cart_hover.innerHTML = null;
    if (cartData) {
        let cart_div = document.createElement('div');
        cart_div.setAttribute('id', 'fixed_pos');
        let main_div = document.createElement('div');
        main_div.setAttribute('id', 'cart_amount');
        let total_div = document.createElement('div');
        let div_len = document.createElement('p');
        div_len.innerText = `${cartData.length} items in your cart`;
        let div_total = document.createElement('h4');
        div_total.innerText = `$${pric}`;
        let cart_button = document.createElement('button');
        cart_button.innerText = 'VIEW CART';

        cart_button.addEventListener('click', function () {
            window.location.href = './cart.html';    
        });

        total_div.append(div_len,div_total)
        main_div.append(total_div, cart_button)
        cart_hover.append(main_div);

        cartData.forEach(el => {
            let div = document.createElement('div');
            div.setAttribute('id', 'cart_products_scroll');
            let img = document.createElement('img');
            img.src = el.image_link;
            let div1 = document.createElement('div');
            let name = document.createElement('p');
            name.innerText = el.name;
            let price = document.createElement('p');
            price.innerText = `$${el.price}`;
            div1.append(name, price)
            div.append(img,div1);

            cart_div.append(div);
            cart_hover.append(cart_div);
            cart_hover.style.display = 'block';
        }); 
    }
    else {
        let cart_div = document.createElement('div');
        cart_div.innerText = 'Cart is Empty!';
        cart_hover.append(cart_div);
        cart_hover.style.display = 'block';
        cart_hover.style.width = '150px';
        cart_hover.style.height = '40px';
        cart_hover.style.overflow = 'hidden';
    }   
}

let cart_hover_main = () => {
    append_cart_data(cartData);
    console.log(cartData);
}
ncart.addEventListener('mouseenter', cart_hover_main);
cart_hover.addEventListener('mouseleave', account_data_hide);
hover_off.addEventListener('mouseleave', account_data_hide);


const cart_qty = document.getElementById('cart_qty');
cart_qty.innerText = cartData.length;

// link section
