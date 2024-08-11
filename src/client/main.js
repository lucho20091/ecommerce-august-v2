document.body.addEventListener('click', (e)=>{
    console.log(e.target)

})
// DOM Elements
const mainEl = document.querySelector('main')
const showShopEl = document.getElementById('show-shop')
const goToHomeEls = document.querySelectorAll('.goToHome')

// state
let home = true
let shop = false
let cart = false 
let checkout = false

// Event Listeners
showShopEl.addEventListener('click', renderShop)
goToHomeEls.forEach(El => {
    El.addEventListener('click', renderHome)
})

// Render HTML
function renderShop(){
    mainEl.innerHTML = `
     <div class="first-shop">
        <div class="first-shop-background">
          <h1>Shop</h1>
          <div class="location">
            <p><a href="#">Home</a></p>
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
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="second-shop-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
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

}
function renderHome(){
    mainEl.innerHTML = `
    <div class="first-hero">
        <div class="first-background">
          <div class="first-card">
            <p class="first-p">New Arrival</p>
            <h1>Discover Our New Collection</h1>
            <p class="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button>BUY NOW</button>
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
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
            <div class="third-card">
              <img src="/assets/homepage/images/second-section/image 2.png" alt="">
              <h3 class="title-item">Syltherine</h3>
              <p class="mini-description">Stylish cafe chair</p>
              <p class="price">Rp 2.500.000 <span class="price-before">Rp 3.500.000</span></p>
            </div>
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
            <button class="fourth-btn">Explore More</button>
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
}


// Functionality