 let sliderArr2 = [
    `
    Dünyanı genişlet!
    NanoEdge ekran, iş ve oyun için sürükleyici bir görüntüleme deneyimi sunar ve geniş bir ekran alanı sağlar. Geniş görüşlü FHD paneli, rahatsız edici parlama ve yansımalardan kaynaklanan istenmeyen dikkat dağıtıcı unsurları azaltmak için bir parlama önleyici kaplamaya sahiptir. Sadece önünüzde ne olduğuna odaklanın.`,
    `
    Daha fazla sığdır, daha fazla yap size süper hızlı bir veri performansı ve geniş depolama kapasitesinin avantajlarını sağlamak için çift depolama tasarımınlı opsiyona sahiptir. Daha hızlı yanıt ve yükleme süreleri için uygulamaları SSD'ye yükleyin ve HDD'yi filmler, müzik kitaplıkları ve fotoğraf albümleri gibi büyük dosyaları depolamak için kullanın.
    `,
    `
    Dinamik hayat tarzını güçlendir
    Sadece 1,6 kg toplam ağırlıkla, son derece taşınabilir, hayatınızın hızına ayak uyduran hafif bir dizüstü bilgisayardır.
    `,
    `
    Sürekli Bağlı Kalın
    USB-C® 3.2 bağlantı noktasıyla donatılmıştır ve her yöne bakan tasarıma sahiptir. Ayrıca, eski USB 2.0 10 kata kadar daha hızlı 4 veri aktarım hızları sunar! Ayrıca USB 3.2 Type-A ve USB 2.0 bağlantı noktaları, HDMI çıkış içerir - böylece tüm mevcut çevre birimlerinizi, ekranlarınızı ve projektörlerinizi sıfır güçlükle kolayca bağlayabilirsiniz.
    `,
    `
    Kolay taşınabilirlik. Zahmetsiz üretkenlik.
    İster iş ister oyun için olsun, ASUS X415 güçlü performans ve sürükleyici görseller sunan giriş seviyesi bir dizüstü bilgisayardır. NanoEdge ekranı, gerçekten ilgi çekici bir deneyim için geniş 178° görüntüleme açısı ve mat parlama önleyici kaplamaya sahiptir. İçinde, hızlı çalışan bir RAM'e sahip bir 11.Nesil Intel ® Core ™ i7 işlemci ile güçlendirilmiştir .Yüksek depolama kapasitesi ve hızlı veri okuma/yazma hızları ile size mükemmel bir kombinasyon sağlar.
    `
]


let titleProduct = document.querySelectorAll('.urunTitle')
 let priceProduct = document.querySelectorAll('.product-price')
 let imageProduct = document.querySelectorAll('.default-img')


// product detail
 let productDetailImage = document.querySelector('.img-thumbnail')
 let productDetailTitle = document.querySelector('.product-detail-name')
 let productDetailSeller = document.querySelector('.product-detail-seller')
 let productDetailFeatures = document.querySelector('.product-detail-features')
 let productDetailPrice = document.querySelector('.product-detail-price')

let seciliData = {}
 let seciliUrun = (data) => {
    localStorage.removeItem('urunTitle')
    localStorage.removeItem('urunPrice')
    localStorage.removeItem('urunImage')

    localStorage.setItem('urunTitle',titleProduct[data].textContent)
    localStorage.setItem('urunPrice',priceProduct[data].textContent.trim())
    localStorage.setItem('urunImage',imageProduct[data].src)

}
/*
<li>
    <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
    <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
    <h4><a href="#">APPLE iPhone 11 64GB Akıllı Telefon Siyah</a></h4>
    <p class="quantity">1x - <span class="amount">15.999,00 TL</span></p>
</li>
*/

let sepetim = []

const sepeteEkle = (data) => {
    let shoppingList = document.querySelector('.shopping-list')

    sepetim.push({'title': titleProduct[data].textContent,
    'price': priceProduct[data].textContent.trim(),
    'image': imageProduct[data].src
})
    localStorage.setItem('urun', JSON.stringify(sepetim))

    if(JSON.parse(localStorage.getItem('urun')).length > 0) {
        sepetim.forEach ( element => {
            shoppingList.innerHTML += `<li>
            <a href="#" class="remove" title="Sil"><i class="fa fa-remove"></i></a>
            <a class="cart-img" href="#"><img style="width:60px;height:40px;aspect-radio:1/1"src="${element.image}" alt="#"></a>
            <h4><a href="#">${element.title}</a></h4>
            <p class="quantity">1x - <span class="amount">${element.price}</span></p>
        </li> ` 

        })
    }
}

window.addEventListener('DOMContentLoaded',function (){
    console.log("this.localStorage.getItem('title')",this.localStorage.getItem('urunTitle'))
    
    let shoppingList = document.querySelector('.shopping-list')

    if(JSON.parse(localStorage.getItem('urun')).length > 0) {
        sepetim.forEach ( element => {
            shoppingList.innerHTML += `<li>
            <a href="#" class="remove" title="Sil"><i class="fa fa-remove"></i></a>
            <a class="cart-img" href="#"><img style="width:60px;height:40px;aspect-radio:1/1"src="${element.image}" alt="#"></a>
            <h4><a href="#">${element.title}</a></h4>
            <p class="quantity">1x - <span class="amount">${element.price}</span></p>
        </li> ` 

        })
    }
    if(this.localStorage.getItem('urunTitle') && this.localStorage.getItem('urunPrice') && this.localStorage.getItem('urunImage')){
        productDetailTitle.innerText = this.localStorage.getItem('urunTitle')
        productDetailPrice.innerText = this.localStorage.getItem('urunPrice')
        productDetailImage.src = this.localStorage.getItem('urunImage')
        productDetailFeatures.innerText = sliderArr2[Math.floor(Math.random() * sliderArr2.length-1)]
    }
})






