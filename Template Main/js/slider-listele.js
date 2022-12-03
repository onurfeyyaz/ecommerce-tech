const sliderArr = [
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
        'detail':"Ürün detayı",
        'category':"televizyon",
        'seller':"satıcısı",
        'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
        'detail':"Ürün detayı",
        'category':"televizyon",
        'seller':"satıcısı",
        'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
        'detail':"Ürün detayı",
        'category':"televizyon",
        'seller':"satıcısı",
        'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
        'detail':"Ürün detayı",
        'category':"televizyon",
        'seller':"satıcısı",
        'src':"https://picsum.photos/200",
    },
]


const titleProduct = document.querySelectorAll('.urunTitle')
const priceProduct = document.querySelectorAll('.product-price')

// product detail
const productDetailImage = document.querySelector('.product-detail-images')
const productDetailTitle = document.querySelector('.product-detail-name')
const productDetailSeller = document.querySelector('.product-detail-seller')
const productDetailFeatures = document.querySelector('.product-detail-features')
const productDetailPrice = document.querySelector('.product-detail-price')

let seciliData = {}
const seciliUrun = (data) => {
    localStorage.removeItem('urunTitle')
    localStorage.removeItem('urunPrice')

    localStorage.setItem('urunTitle',titleProduct[data].textContent)
    localStorage.setItem('urunPrice',priceProduct[data].textContent.trim())
}

window.addEventListener('DOMContentLoaded',function (){
    console.log("this.localStorage.getItem('title')",this.localStorage.getItem('urunTitle'))

    if(this.localStorage.getItem('urunTitle') && this.localStorage.getItem('urunPrice')){
        productDetailTitle.innerText = this.localStorage.getItem('urunTitle')
        productDetailPrice.innerText = this.localStorage.getItem('urunPrice')
    }
})






