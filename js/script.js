
// Select the scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};
function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}


// MAIN SCRIPT //
let addBtn = document.querySelectorAll(".price-container button");
let cardTitle = document.querySelector(".card-title");
let card = document.querySelectorAll(".card");
let navbarNav = document.querySelector(".navbar-nav")
let data = []

addBtn.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
       
        let title = card[idx].querySelector(".card-title");
        let image = card[idx].querySelector(".card-img-top");
        let cardText = card[idx].querySelector(".card-text");
        let price = card[idx].querySelector(".price-container span");

        let obj = {
            img : image.src,
            title : title.innerHTML,
            text : cardText.innerHTML,
            price : price.textContent,
            quantity : 1,            
        }

        data.push(obj);
        cartDisplay(idx);
        toggleBtn();
    })
})

const toggleBtn = ()=>{
    let totalItem = data.length;
    let total = 0;
    let btnItem = document.querySelector(".cart-item p");
    let btnPrice = document.querySelector(".btn-price span");
    data.forEach((arr)=>{
        total += parseFloat(arr.price);
    })
    btnItem.innerHTML = `${totalItem} items`;
    btnPrice.innerHTML = `${total}`;
}


const cartDisplay = (idx)=>{
    navbarNav.innerHTML = "";
    data.forEach((liData,idx)=>{
        let li = document.createElement("li");
        li.className = "nav-item"
        li.innerHTML = 
        `
                      <div class="cart-item border d-flex border rounded mt-3">
                        <div class="cart-img">
                          <img src="${liData.img}" alt="">
                        </div>
                        <div class="cart-content w-100 d-flex justify-content-between p-3">
                          <div class="cart-name w-100">
                            <p class="mb-1">${liData.title}</p>
                            <p class="mb-1">${liData.text}</p>
                            <p><i class="fa-solid fa-indian-rupee-sign me-1"></i>${liData.price}</p>
                          </div>
                          <div class="cart-btn d-flex align-items-center btn-group">
                            <button class="minus btn btn-success p-1"><i class="fa-solid fa-minus"></i></button>
                            <div class="cart-text p-1 text-white bg-success btn px-2" disabled>${liData.quantity}</div>
                            <button class="plus btn btn-success p-1"><i class="fa-solid fa-plus"></i></button>
                          </div>
                        </div>
                      </div>
        `
        navbarNav.appendChild(li);
    })
}

  