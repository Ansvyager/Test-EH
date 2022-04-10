const $products = '#products'
$.ajax({
  type: "GET",
  dataType:"json",
  url: "https://api.relove.id/products",
  success: function (products) {
      console.log(products)
      let result = ''
   $.each(products.response, function (i, product) {
     console.log(product);
     result += `
           <div class="col-6 col-md-3 mb-2">
          <div class="card">
            <div class="product-image">
              <img class="card-img-top" src="${product.image}" alt="Card image cap">
            </div>
            <div class="product-content pl-2 pt-2 pb-0 mt-2 ml-2">
              <p class="product-category mb-2 bg-danger px-2 py-1 w-75 rounded text-light">
                <span>
                  <i class="fa-solid fa-tag"></i>
                </span>
                ${product.category.name}
              </p>
              <h3 class="product-name mb-2">
                ${product.name}
              </h3>
              <h6 class="product-short-desc text-danger">
                ${product.short_description}
              </h6>
              <h6 class="product-price mb-2 ">Rp.${product.price}</h6>
            </div>
          </div>
        </div>
      `;
   });
   $('#products').append(result)
  },
});

