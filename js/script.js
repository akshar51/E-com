
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
let navbarNav = document.getElementById("navbarNav")
let data = JSON.parse(localStorage.getItem("cart")) || [];


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

        let existing = data.find(item => item.title === obj.title);
        if (existing) {
          existing.quantity += 1;
        } else {
          data.push(obj);
        }
        
        localStorage.setItem("cart",JSON.stringify(data))
        cartDisplay(idx);
        toggleBtn();
    })
})

const toggleBtn = ()=>{
    let total = 0;
    let totalItem = 0;
    let btnItem = document.querySelector(".cart-item p");
    let btnPrice = document.querySelector(".btn-price span");
    data.forEach((arr)=>{
        total += parseFloat(arr.price) * arr.quantity;
        totalItem += arr.quantity;
    })
    btnItem.innerHTML = `${totalItem} items`;
    btnPrice.innerHTML = `${total}`;
    totalBill(total,totalItem)
}


const cartDisplay = (idx)=>{
    navbarNav.innerHTML = "";
    data.forEach((liData,idx)=>{
        let li = document.createElement("li");
        li.className = "nav-item"
        li.innerHTML = 
        `
                      <div class="cart-item border d-flex border rounded mt-3">
                        <div class="cart-img my-auto">
                          <img src="${liData.img}" alt="">
                        </div>
                        <div class="cart-content w-100 d-flex justify-content-between p-3">
                          <div class="cart-name w-100">
                            <p class="mb-1">${liData.title}</p>
                            <p class="mb-1">${liData.text}</p>
                            <p><i class="fa-solid fa-indian-rupee-sign me-1"></i>${liData.price}</p>
                          </div>
                          <div class="cart-btn d-flex align-items-center btn-group">
                            <button class="minus btn btn-success p-1" onclick="addQuantity(-1,${idx})"><i class="fa-solid fa-minus"></i></button>
                            <div class="cart-text p-1 text-white bg-success btn px-2" disabled>${liData.quantity}</div>
                            <button class="plus btn btn-success p-1" onclick="addQuantity(1,${idx})"><i class="fa-solid fa-plus"></i></button>
                          </div>
                        </div>
                      </div>
        `
        navbarNav.appendChild(li);
    })
}

const totalBill = (total,qty)=>{
    let totalPriceCart = total;
    let li = document.createElement("li");
    li.className = "nav-item mt-4 border rounded p-3"
    li.innerHTML = 
    `
      <h4>Bill detail</h4>
      <div class="cart-price d-flex justify-content-between">
        <span class ="fw-bold">Item Total</span>
        <span><i class="fa-solid fa-indian-rupee-sign"></i> ${totalPriceCart}</span>
      </div>
      <div class="cart-price d-flex justify-content-between">
        <span class ="fw-bold">Total Product</span>
        <span>${qty} qty</span>
      </div>
      <div class="cart-total d-flex justify-content-between border-top border-2 mt-2 py-2">
        <span class="fw-bold">Grand Total</span>
        <span><i class="fa-solid fa-indian-rupee-sign"></i> ${totalPriceCart}</span>
      </div>
      <button class="btn btn-success w-100 mt-3">Process</button>
    `;
    navbarNav.appendChild(li);
}

const addQuantity = (num,idx)=>{
  data[idx].quantity += num

  if (data[idx].quantity <= 0) {
      data.splice(idx, 1); 
  }

  localStorage.setItem("cart",JSON.stringify(data))
  cartDisplay();
  toggleBtn();
}





