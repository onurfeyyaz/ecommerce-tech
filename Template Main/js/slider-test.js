var urunArr = []

for (var x = 0; x < 20; x++) {
	urunArr[x] = {
		'title': 'Ürün İsmi',
		'price': '1299 TL',
		'detail': "Ürün detayı",
		'category': "televizyon",
		'seller': "satıcısı",
		'src': "https://picsum.photos/200",
	}
}

console.log("ürün array: ", urunArr)


function addElement() {
	const newDiv = document.createElement("div");

	urunArr.forEach(element => {
		newDiv.innerHTML += `
		<div class="col-xl-3 col-lg-4 col-md-4 col-12">
		<div class="single-product" onclick="seciliUrun(${element})">
			<div class="product-img">
				<a href="product-details.html">
					<img class="default-img" src="${element.src}" alt="${element.title}">
					<img class="hover-img" src="${element.src}" alt="${element.title}">
				</a>
				<div class="button-head">
					<div class="product-action-2">
						<a title="Sepete Ekle" href="#">Sepete Ekle</a>
					</div>
				</div>
			</div>
			<div class="product-content">
				<h3><a href="product-details.html" class="urunTitle">${element.title}</a></h3>
				<div class="product-price">
					<span>${element.price}</span>
				</div>
			</div>
	</div>
	</div>`
	});

	document.getElementById('allUrunler').appendChild(newDiv)

}
window.addEventListener('DOMContentLoaded', function () {
	addElement()
})
/*
		<div class="col-xl-3 col-lg-4 col-md-4 col-12">
												<div class="single-product" onclick="seciliUrun(0)">
													<div class="product-img">
														<a href="product-details.html">
															<img class="default-img" src="https://via.placeholder.com/550x750" alt="#">
															<img class="hover-img" src="https://via.placeholder.com/550x750" alt="#">
														</a>
														<div class="button-head">
															<div class="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="product-details.html" class="urunTitle">Polo Dress For Women </a></h3>
														<div class="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
*/