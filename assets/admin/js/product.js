var product_id = document.forms['vform']['product_id'];
var name2= document.forms['vform']['name'];
var promotion = document.forms['vform']['promotion'];
var price = document.forms['vform']['price'];
var id_error = document.getElementById('id_error');
var name2_error = document.getElementById('name_error2');
var promotion_error = document.getElementById('promotion_error');
var price_error = document.getElementById('price_error');
product_id.addEventListener('blur', idVerify, true);
name2.addEventListener("blur", nameVerify, true);
price.addEventListener("blur", priceVerify, true);
img.addEventListener("blur", imgVerify, true);
// accessories.addEventListener("blur", accessoriesVerify, true);
warranty.addEventListener("blur", warrantyVerify, true);
promotion.addEventListener("blur", promotionVerify, true);
condition.addEventListener("blur", conditionVerify, true);
status.addEventListener("blur", statusVerify, true);
description.addEventListener("blur", descriptionVerify, true);
featured.addEventListener("blur", featuredVerify, true);
number.addEventListener("blur", numberVerify, true);
function Validate(){
    var i = 0;
    if(product_id.value == ""){
        product_id.style.border = "1px solid red";
        id_error.textContent = "Id là trường bắt buộc!";
        if(i==0){
            product_id.focus({preventScroll: true});
            document.getElementById("product_id").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(name2.value == ""){
        name2.style.border = "1px solid red";
        name2_error.textContent = "Name là trường bắt buộc!";
        if(i==0){
            name2.focus({preventScroll: true});
            document.getElementById("name2").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(price.value == ""){
        price.style.border = "1px solid red";
        price_error.textContent = "Giá là trường bắt buộc!";
        if(i==0){
            price.focus({preventScroll: true});
            document.getElementById("price").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(img.value == ""){
        img.style.border = "1px solid red";
        img_error.textContent = "Bạn phải thêm hình ảnh!";
        if(i==0){
            document.getElementById("imgt").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    // if(accessories.value == ""){
    //     accessories.style.border = "1px solid red";
    //     accessories_error.textContent = "Phụ kiện là trường bắt buộc!";
    //     if(i==0){
    //         accessories.focus({preventScroll: true});
    //         document.getElementById("accessories").scrollIntoView({block: 'center' ,behavior: 'smooth' });
    //     }
    //     i++;
    // }
    if(warranty.value == ""){
        warranty.style.border = "1px solid red";
        warranty_error.textContent = "Bảo hành là trường bắt buộc!";
        if(i==0){
            warranty.focus({preventScroll: true});
            document.getElementById("warranty").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(promotion.value == ""){
        promotion.style.border = "1px solid red";
        promotion_error.textContent = "Khuyến mãi là trường bắt buộc!";
        if(i==0){
            promotion.focus({preventScroll: true});
            document.getElementById("promotion").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(condition.value == ""){
        condition.style.border = "1px solid red";
        condition_error.textContent = "Tình trạng là trường bắt buộc!";
        if(i==0){
            condition.focus({preventScroll: true});
            document.getElementById("condition").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    // if(status.value == ""){
    //     status.style.border = "1px solid red";
    //     status_error.textContent = "Trạng thái là trường bắt buộc!";
    //     if(i==0){
    //         status.focus({preventScroll: true});
    //         document.getElementById("status").scrollIntoView({block: 'center' ,behavior: 'smooth' });
    //     }
    //     i++;
    // }
    if(featured.value == ""){
        featured.style.border = "1px solid red";
        featured_error.textContent = "Sản phẩm nổi bật là trường bắt buộc!";
        if(i==0){
            featured.focus({preventScroll: true});
            document.getElementById("featured").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(number.value == ""){
        number.style.border = "1px solid red";
        number_error.textContent = "Số sản phẩm là trường bắt buộc!";
        if(i==0){
            number.focus({preventScroll: true});
            document.getElementById("number").scrollIntoView({block: 'center' ,behavior: 'smooth' });
        }
        i++;
    }
    if(i>0){
        return false;
    }
}
function idVerify(){
    if (product_id.value != "") {
        product_id.style.border = "1px solid #5e6e66";
        id_error.innerHTML = "";
        return true;
    }
}
function nameVerify(){
    if (name2.value != "") {
        name2.style.border = "1px solid #5e6e66";
        name_error2.innerHTML = "";
        return true;
    }
}
function priceVerify(){
    if (price.value != "") {
        price.style.border = "1px solid #5e6e66";
        price_error.innerHTML = "";
        return true;
    }
}
function imgVerify(){
    
        img_error.innerHTML = "";
        return true;
}
function accessoriesVerify(){
    if (accessories.value != "") {
        accessories.style.border = "1px solid #5e6e66";
        accessories_error.innerHTML = "";
        return true;
    }
}
function warrantyVerify(){
    if (warranty.value != "") {
        warranty.style.border = "1px solid #5e6e66";
        warranty_error.innerHTML = "";
        return true;
    }
}
function promotionVerify(){
    if (promotion.value != "") {
        promotion.style.border = "1px solid #5e6e66";
        promotion_error.innerHTML = "";
        return true;
    }
}
function conditionVerify(){
    if (condition.value != "") {
        condition.style.border = "1px solid #5e6e66";
        condition_error.innerHTML = "";
        return true;
    }
}
function statusVerify(){
    if (status.value != "") {
        status.style.border = "1px solid #5e6e66";
        status_error.innerHTML = "";
        return true;
    }
}   
function featuredVerify(){
    if (featured.value != "") {
        featured.style.border = "1px solid #5e6e66";
        featured_error.innerHTML = "";
        return true;
    }
}
function numberVerify(){
    if (number.value != "") {
        number.style.border = "1px solid #5e6e66";
        number_error.innerHTML = "";
        return true;
    }
}