import { data } from './data'


// DOM Elements
const mainEl = document.querySelector('main')
const showShopEl = document.getElementById('show-shop')
const goToHomeEls = document.querySelectorAll('.goToHome')
const goToShopEls = document.querySelectorAll('.goToShop')
const homeCardEls = document.querySelectorAll('.third-card')
const cartEl = document.getElementById('cartEl')

// state
let home = true
let shop = false
let cart = JSON.parse(localStorage.getItem('cart')) || [] 
let checkout = false


// Event Listeners
showShopEl.addEventListener('click', renderShop)
cartEl.addEventListener('click', renderCart)
goToHomeEls.forEach(El => {
    El.addEventListener('click', renderHome)
})
homeCardEls.forEach(el => {
    el.addEventListener('click', renderSingleProduct)
})
goToShopEls.forEach(el => {
  el.addEventListener('click', renderShop)
})

// Render HTML
function renderShop(){
    mainEl.innerHTML = `
     <div class="first-shop">
        <div class="first-shop-background">
          <h1>Shop</h1>
          <div class="location">
            <p><a href="#" class="goToHome">Home</a></p>
            <img src="/assets/shop/icons/top/dashicons_arrow-down-alt2.png" alt="">
            <p><a href="#">Shop</a></p>
          </div>
        </div>
        <div class="filter-shop">
          <div class="filter-1">
            <button><img src="/assets/shop/icons/top/system-uicons_filtering.png" alt=""></button>
            <p class="filter-1-text">Filter</p>
            <button><img src="/assets/shop/icons/top/ci_grid-big-round.png" alt=""></button>
            <button><img src="/assets/shop/icons/top/bi_view-list.png" alt=""></button>
            <p class="filter-1-text-2">Showing 1-16 of 32 results</p>
          </div>
          <div class="filter-2">
            <label for="show">Show</label>
            <input type="number" value="16" id="show" name="show">
            <label for="short-by">Show</label>
            <select name="short-by" id="short-by">
              <option value="default">Default</option>
            </select>
          </div>
        </div>
      </div>
      <div class="second-shop">
        <div class="second-shop-background">
          <div class="second-shop-cards">
            ${shopDataRender()}
          </div>
        </div>
      </div>
      <div class="third-shop">
        <div class="third-shop-background">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button class="next">Next</button>
        </div>
        <div class="third-shop-banners">
          <div class="banner1">
            <img src="/assets/shop/icons/mid/trophy 1.png" alt="">
            <div class="banner-text">
              <h3>Hight Quality</h3>
              <h4>crafted from top materials</h4>
            </div>
          </div>
          <div class="banner2">
            <img src="/assets/shop/icons/mid/guarantee.png" alt="">
            <div class="banner-text">
              <h3>Warranty Protection</h3>
              <h4>Over 2 years</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/shipping.png" alt="">
            <div class="banner-text">
              <h3>Free Shipping</h3>
              <h4>Order over 150$</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/customer-support.png" alt="">
            <div class="banner-text">
              <h3>24/7 Support</h3>
              <h4>Dedicated support</h4>
            </div>
          </div>
        </div>
      </div>`
    window.scrollTo(0,0)
    document.querySelectorAll('.goToHome').forEach(el => {
      el.addEventListener('click', renderHome)
    })
    document.querySelectorAll('.second-shop-card').forEach(el => {
      el.addEventListener('click', (e) => {
        const productId = Number(e.target.parentElement.dataset.id)
        renderSingleProduct(productId)
      })
    })
}
function renderHome(){
    mainEl.innerHTML = `
          <div class="first-hero">
        <div class="first-background">
          <div class="first-card">
            <p class="first-p">New Arrival</p>
            <h1>Discover Our New Collection</h1>
            <p class="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button class="goToShop">BUY NOW</button>
          </div>
        </div>
      </div>
      <div class="second-hero">
        <div class="second-background">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="second-cards">
            <div class="second-card">
              <img src="/assets/homepage/images/first-section/image 100.png" alt="">
              <p>Dining</p>
            </div>
            <div class="second-card">
              <img src="/assets/homepage/images/first-section/image 101.png" alt="">
              <p>Living</p>
            </div>
            <div class="second-card">
              <img src="/assets/homepage/images/first-section/image 106.png" alt="">
              <p>Bedroom</p>
            </div>
          </div>
        </div>
      </div>
      <div class="third-hero">
        <div class="third-background">
          <h2>Our Products</h2>
          <div class="third-cards">
           ${homeDataRender()}
          </div>
          <button class="show-more-btn" id="show-shop">Show More</button>
        </div>
      </div>
      <div class="fourth-hero">
        <div class="fourth-background">
          <div class="fourth-left">            
            <h3>50+ Beautiful rooms 
              inspiration</h3>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button class="fourth-btn goToShop">Explore More</button>
          </div>
          <div class="fourth-right">
            <div class="slide">
              <img src="/assets/homepage/images/third-section/Rectangle 24.png" alt="">
              <img src="/assets/homepage/images/third-section/Rectangle 25.png" alt="">
              <img src="/assets/homepage/images/third-section/Rectangle 26 (1).png" alt="">
            </div>
            <button><img src="/assets/homepage/icons/Right 24px.png" alt=""></button> 
          </div>
        </div>
      </div>
      <div class="fifth-hero">
        <div class="fifth-background">
          <p>Share your setup with</p>
          <h3>#FuniroFurniture</h3>
          <div class="fifth-cards">
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 36.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 37.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 38.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 39.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 40.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 41.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 43.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 44.png" alt="">
            </div>
            <div class="fifth-card">
              <img src="/assets/homepage/images/fourth-section/Rectangle 45.png" alt="">
            </div>
          </div>
        </div>
      </div>`
      window.scrollTo(0,0)
      document.getElementById('show-shop').addEventListener('click', renderShop)
      document.querySelectorAll('.third-card').forEach(el => {
        el.addEventListener('click', (e) => {
          const productId = Number(e.target.parentElement.dataset.id)
          renderSingleProduct(productId)
        })
    })
      document.querySelectorAll('.goToShop').forEach(el => {
        el.addEventListener('click', renderShop)
      })
    }
function renderSingleProduct(id){
  const product = data.find(item => item.id === id) 
  const { name, miniDescription, fullDescription, type, img, price } = product
  const defaultImg = `/assets/products/${img}1.jpg`
  mainEl.innerHTML = `
  <div class="navigation-single-product">
        <div class="location">
          <p><a href="#" class="goToHome">Home</a></p>
          <img src="/assets/shop/icons/top/dashicons_arrow-down-alt2.png" alt="">
          <p><a href="#" class="goToShop">Shop</a></p>
          <img src="/assets/shop/icons/top/dashicons_arrow-down-alt2.png" alt="">
          <p><a href="#">${name}</a></p>
        </div>
      </div>
      <div class="first-single-product">
        <div class="first-single-1">
          <img src="/assets/products/${img}1.jpg" data-selected="true" data-img="${img}1.jpg" alt="" class="img-products-single">
          <img src="/assets/products/${img}2.jpg" data-selected="false" data-img="${img}2.jpg" alt="" class="img-products-single">
          <img src="/assets/products/${img}3.jpg" data-selected="false" data-img="${img}3.jpg" alt="" class="img-products-single">
          <img src="/assets/products/${img}4.jpg" data-selected="false" data-img="${img}4.jpg" alt="" class="img-products-single">
        </div>
        <div class="first-single-2">
          <div class="first-single-2-background">
            <img src="${defaultImg}" alt="" class="main-img-single-2">
          </div>
        </div>
        <div class="first-single-3">
          <h1>${name}</h1>
          <h2>$${price}</h2>
          <img src="/assets/singleProduct/images/top/Group 88.png" alt="">
          <span>5 customer Review</span>
          <p class="small-description">${miniDescription}
          </p>
          <label for="size-product">Size</label>
          <input type="radio" name="size-product" value="l">
          <input type="radio" name="size-product" value="xl">
          <input type="radio" name="size-product" value="xs">
          <label for="color-product">Color</label>
          <input type="radio" name="color-product" value="pink">
          <input type="radio" name="color-product" value="black">
          <input type="radio" name="color-product" value="yellow">
          <div class="quantity">
            <button class="remove-quantity">-</button>
            <p class="number-quantity">1</p>
            <button class="add-quantity">+</button>
          </div>
          <p>SKU : SS001</p>
          <p>Category : Sofas</p>
          <p>Tags : </p>
          <button id="add-to-cart" class="addToCart" data-id="${id}">Add To Cart</button>
        </div>
      </div>
      <div class="second-single-product">
        <div class="second-single-product-a-elements">
          <a href="#">Description</a>
          <a href="#">Additional Information</a>
          <a href="#">Reviews [5]</a>
        </div>
        <div class="description-mid">
         <p>${fullDescription}</p>
        </div>
        <div class="images-mid">
          <img src="/assets/singleProduct/images/mid/Group 106.png" alt="">
          <img src="/assets/singleProduct/images/mid/Group 107.png" alt="">
        </div>
      </div>
      <div class="third-single-product">
        <h3>Related Products</h3>
        <div class="third-single-product-cards">
          <div class="third-single-product-card">
            <img src="/assets/homepage/images/second-section/image 2.png" alt="">
            <h3 class="title-item">Syltherine</h3>
            <p class="mini-description">Stylish cafe chair</p>
            <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
          </div>
          <div class="third-single-product-card">
            <img src="/assets/homepage/images/second-section/image 2.png" alt="">
            <h3 class="title-item">Syltherine</h3>
            <p class="mini-description">Stylish cafe chair</p>
            <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
          </div>
          <div class="third-single-product-card">
            <img src="/assets/homepage/images/second-section/image 2.png" alt="">
            <h3 class="title-item">Syltherine</h3>
            <p class="mini-description">Stylish cafe chair</p>
            <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
          </div>
          <div class="third-single-product-card">
            <img src="/assets/homepage/images/second-section/image 2.png" alt="">
            <h3 class="title-item">Syltherine</h3>
            <p class="mini-description">Stylish cafe chair</p>
            <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
          </div>
        </div>
        <button class="show-more-btn goToShop">Show More</button>
      </div>
  `
  window.scrollTo(0,0)
  document.querySelectorAll('.goToHome').forEach(el => {
    el.addEventListener('click', renderHome)
  })
  document.querySelectorAll('.img-products-single').forEach(item => {
    item.addEventListener('click', (e) => {
      const imgUrl = e.target.dataset.img
      document.querySelector('.main-img-single-2').src = `/assets/products/${imgUrl}`
    })
  })
  document.querySelectorAll('.goToShop').forEach(el => {
    el.addEventListener('click', renderShop)
  })
  document.querySelectorAll('.third-single-product-card').forEach(el => {
    el.addEventListener('click', renderSingleProduct)
  })
  document.querySelector('.addToCart').addEventListener('click', (e) => {
    const cartItem = cart.find(item => item.id === Number(e.target.dataset.id))
    if (cartItem){
      cartItem.quantity += 1
    } else {
      const numberQuantity = Number(document.querySelector('.number-quantity').textContent)
      cart.push({...product, quantity: numberQuantity})
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    console.log(cart)
  })

  let quantityNumber = 1
  document.querySelector('.remove-quantity').addEventListener('click', (e) => {
      if (quantityNumber > 1){
        quantityNumber -= 1
      }
      document.querySelector('.number-quantity').textContent = quantityNumber 
    })

  document.querySelector('.add-quantity').addEventListener('click', (e) => {
    quantityNumber += 1
    document.querySelector('.number-quantity').textContent = quantityNumber 
  })
}
function renderCart(){
  mainEl.innerHTML = `
      <div class="first-cart">
        <div class="first-cart-background">
          <h1>Cart</h1>
          <div class="location">
            <p><a href="#" class="goToHome">Home</a></p>
            <img src="/assets/shop/icons/top/dashicons_arrow-down-alt2.png" alt="">
            <p><a href="#">Cart</a></p>
          </div>
        </div>
      </div>

      <div class="second-cart">
        <div class="second-cart-background">
          <div class="second-cart-left">
            <table>
                <thead>

                  <tr class="top">
                    <th scope="row" colspan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>

                </thead>
                <tbody>
                  ${cartDataRender()}
                </tbody>
            </table>
            </div>

          <div class="second-cart-right">
            <div class="right-box">
              <h2>Cart Totals</h2>
              <div class="second-cart-right-div">
                <p>Subtotal <span class="sub-span">RS. 250,000.00</span></p>
                <p>Total <span class="tot-span">RS. 250,000.00</span></p>
              </div>
              <a href="#" id="checkoutBtn">Check Out</a>
            </div>
          </div>
        </div>
      </div>

      <div class="third-cart">
        <div class="third-cart-banners">
          <div class="banner1">
            <img src="/assets/shop/icons/mid/trophy 1.png" alt="">
            <div class="banner-text">
              <h3>Hight Quality</h3>
              <h4>crafted from top materials</h4>
            </div>
          </div>
          <div class="banner2">
            <img src="/assets/shop/icons/mid/guarantee.png" alt="">
            <div class="banner-text">
              <h3>Warranty Protection</h3>
              <h4>Over 2 years</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/shipping.png" alt="">
            <div class="banner-text">
              <h3>Free Shipping</h3>
              <h4>Order over 150$</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/customer-support.png" alt="">
            <div class="banner-text">
              <h3>24/7 Support</h3>
              <h4>Dedicated support</h4>
            </div>
          </div>
      </div>
      </div>`
  window.scrollTo(0,0)
  document.querySelectorAll('.goToHome').forEach(el => {
    el.addEventListener('click', renderHome)
  })
  document.querySelectorAll('.goToShop').forEach(el => {
    el.addEventListener('click', renderShop)
  })
  document.querySelectorAll('.third-single-product-card').forEach(el => {
    el.addEventListener('click', renderSingleProduct)
  })
  document.getElementById('checkoutBtn').addEventListener('click', renderCheckout)
}
function renderCheckout(){
  mainEl.innerHTML = `
      <div class="first-checkout">
        <div class="first-checkout-background">
          <h1>Checkout</h1>
          <div class="location">
            <p><a href="#" class="goToHome">Home</a></p>
            <img src="/assets/shop/icons/top/dashicons_arrow-down-alt2.png" alt="">
            <p><a href="#">Checkout</a></p>
          </div>
        </div>
      </div>

      <div class="second-checkout">
        <div class="second-checkout-background">
          <div class="second-checkout-left">
            <form>
              <h2>Billing details</h2>
              <div class="name">
                <div class="firstname">
                  <label for="firstname">First Name</label>
                  <input type="text" name="firstname" id="firstname">
                </div>
                <div class="lastname">
                  <label for="lastname">Last Name</label>
                  <input type="text" name="lastname" id="lastname">
                </div>
              </div>
              <label for="companyname">Company Name (Optional)</label>
              <input type="text" name="companyname" id="companyname">
              <label for="country">Country / Region</label>
              <input type="text" name="country" id="country">
              <label for="address">Street address</label>
              <input type="text" name="address" id="address">
              <label for="town">Town / City</label>
              <input type="text" name="town" id="town">
              <label for="zip-code">Zip code</label>
              <input type="text" name="zip-code" id="zip-code">
              <label for="phone">Phone</label>
              <input type="text" name="phone" id="phone">
              <label for="email">Email address</label>
              <input type="text" name="email" id="email">
              <input type="text" name="additional" id="additional" placeholder="Additional Information">
            </form>
          </div>
          <div class="second-checkout-right">
            <div class="top">
              <div class="flex title-checkout">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div class="flex">
                <p>Asgaard sofa x 1</p>
                <p>Rs. 250,000.00</p>
              </div>
              <div class="flex">
                <p>Subtotal</p>
                <p>Rs. 250,000.00</p>
              </div>
              <div class="flex">
                <p>Total</p>
                <p class="total-checkout">Rs. 250,000.00</p>
              </div>
            </div>
            <div class="mid">
              <input type="radio">
              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <input type="radio">
              <input type="radio">
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              <button>Place order</button>
            </div>
          </div>
        </div>
      </div>

      <div class="third-checkout">
        <div class="third-checkout-banners">
          <div class="banner1">
            <img src="/assets/shop/icons/mid/trophy 1.png" alt="">
            <div class="banner-text">
              <h3>Hight Quality</h3>
              <h4>crafted from top materials</h4>
            </div>
          </div>
          <div class="banner2">
            <img src="/assets/shop/icons/mid/guarantee.png" alt="">
            <div class="banner-text">
              <h3>Warranty Protection</h3>
              <h4>Over 2 years</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/shipping.png" alt="">
            <div class="banner-text">
              <h3>Free Shipping</h3>
              <h4>Order over 150$</h4>
            </div>
          </div>
          <div class="banner1">
            <img src="/assets/shop/icons/mid/customer-support.png" alt="">
            <div class="banner-text">
              <h3>24/7 Support</h3>
              <h4>Dedicated support</h4>
            </div>
          </div>
      </div>
      </div>
  `
  window.scrollTo(0,0)
  document.querySelectorAll('.goToHome').forEach(el => {
    el.addEventListener('click', renderHome)
  })
  document.querySelectorAll('.goToShop').forEach(el => {
    el.addEventListener('click', renderShop)
  })
  document.querySelectorAll('.third-single-product-card').forEach(el => {
    el.addEventListener('click', renderSingleProduct)
  })
}

function homeDataRender(){
  let html = ''
  for (let i = 0; i < 8; i++){
    html += `
    <div class="third-card" data-id="${data[i].id}">
      <img src="/assets/products/${data[i].img}1.jpg" alt="">
      <h3 class="title-item">${data[i].name}</h3>
      <p class="mini-description">${data[i].miniDescription.slice(0, 30)}...</p>
      <p class="price">$${data[i].price}<span class="price-before"></span></p>
    </div>`
  }
  return html
}

function shopDataRender(){
  let html = ''
  for (let i = 0; i < 16; i++){
    html += `<div class="second-shop-card" data-id=${data[i].id}>
              <img src="/assets/products/${data[i].img}1.jpg" alt="">
              <h3 class="title-item">${data[i].name}</h3>
              <p class="mini-description">${data[i].miniDescription.slice(0,27)}...</p>
              <p class="price">$${data[i].price}<span class="price-before"></span></p>
            </div>`
  }
  return html
}

function cartDataRender(){
  let html = ''
  for (let i = 0; i < cart.length; i++){
    console.log('loop')
    console.log(cart.length)
    console.log(cart)
    html += `
            <tr class="mid">
              <td><img src="/assets/products/${cart[i].img}1.jpg" alt=""></td>
              <td><p>${cart[i].name}</p></td>
              <td><p>${cart[i].price}</p></td>
              <td><input type="number" value="${cart[i].quantity}"></td>
              <td><p>${cart[i].price * cart[i].quantity}</p></td>
              <td><button><img src="/assets/cart/icon/mid/ant-design_delete-filled.png" alt=""></button></td>
            </tr>
    `

  }
  return html
}
renderHome()
// Functionality