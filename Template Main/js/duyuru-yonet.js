const duyuruSingle = document.querySelectorAll('.shop-single-blog')

function addDuyuruIcerikElement() {
    let newDiv = document.createElement("div");

        newDiv.innerHTML = `
        <div class="image" id="anaDuyuruImage">
        <img src="${localStorage.getItem('duyuruImage')}" alt="#">
    </div>
    <div class="blog-detail">
        <h2 class="blog-title">${localStorage.getItem('duyuruTitle')}</h2>
        <div class="blog-meta">
            <span class="author"><a href="#"><i class="fa fa-user"></i>Admin</a><a href="#"><i class="fa fa-calendar"></i>${localStorage.getItem('duyuruTime')}</a></span>
        </div>
        <div class="content">
            <p>${localStorage.getItem('duyuruDetail')}</p>
            <br>
        </div>
    </div>`
    document.getElementById('duyuruContent').append(newDiv)
}

const seciliDuyuru = (data) => {
    localStorage.removeItem('duyuruTitle')
    localStorage.removeItem('duyuruImg')
    localStorage.removeItem('duyuruDetail')

    localStorage.setItem('urunTitle',titleProduct[data].textContent)
    localStorage.setItem('urunPrice',priceProduct[data].textContent.trim())
}
window.addEventListener('DOMContentLoaded', function () {
    addDuyuruIcerikElement()
})
