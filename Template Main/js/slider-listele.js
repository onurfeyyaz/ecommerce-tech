const sliderArr = [
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
        'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
          'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
          'src':"https://picsum.photos/200",
    },
    {
        'title':'Ürün İsmi',
        'price':'Ürün Fiyatı',
          'src':"https://picsum.photos/200",
    },
]



const singleProduct = document.querySelectorAll('.single-product')
const titleProduct = document.querySelectorAll('.urunTitle')
const priceProduct = document.querySelectorAll('.product-price')

// product detail

const productDetailTitle = document.querySelector('.product-name')

let seciliData = {}
const seciliUrun = (data)=> {
    
    console.log('urunTitle',titleProduct[data].textContent)
    console.log('urunPrice',priceProduct[data].textContent.trim())
    localStorage.removeItem('urunTitle')
    localStorage.removeItem('urunPrice')
    localStorage.setItem('urunTitle',titleProduct[data].textContent)
    localStorage.setItem('urunPrice',priceProduct[data].textContent.trim())
}

window.addEventListener('DOMContentLoaded',function (){
    console.log("this.localStorage.getItem('title')",this.localStorage.getItem('urunTitle'))
    if(this.localStorage.getItem('urunTitle')){
        productDetailTitle.innerText = this.localStorage.getItem('urunTitle')
    }
})






