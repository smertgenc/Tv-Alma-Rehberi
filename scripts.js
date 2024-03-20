document.addEventListener("DOMContentLoaded", function() {
    var products = [
        {
            id: 1,
            brand: "PHILIPS",
            type: "LED TV",
            resolution: "4K UHD",
            image: "philips_led_tv_4k.jpg.webp",
            price: 3000
        },
        {
            id: 2,
            brand: "SAMSUNG",
            type: "QLED TV",
            resolution: "8K UHD-2",
            image: "samsung_qled_tv_8k.jpg.webp",
            price: 5000
        },
        {
            id: 3,
            brand: "LG",
            type: "OLED TV",
            resolution: "4K UHD",
            image: "lg_oled_tv_4k.jpg.webp",
            price: 4500
        },
        {
            id: 4,
            brand: "TCL",
            type: "LED TV",
            resolution: "Full HD",
            image: "tcl_led_tv_full_hd.jpg.webp",
            price: 2500
        },
        {
            id: 5,
            brand: "GRUNDIG",
            type: "QLED TV",
            resolution: "8K UHD-2",
            image: "grundig_qled_tv_8k.jpg.webp",
            price: 4800
        },
        {
            id: 6,
            brand: "PHILIPS",
            type: "OLED TV",
            resolution: "4K UHD",
            image: "philips_oled_tv_4k.jpg.webp",
            price: 4000
        },
        {
            id: 7,
            brand: "SAMSUNG",
            type: "Neo QLED TV",
            resolution: "8K UHD-2",
            image: "samsung_neo_qled_tv_8k.jpg.webp",
            price: 5500
        },
        {
            id: 8,
            brand: "LG",
            type: "LED TV",
            resolution: "Full HD",
            image: "lg_led_tv_full_hd.jpg.webp",
            price: 2800
        },
        {
            id: 9,
            brand: "TCL",
            type: "QLED TV",
            resolution: "4K UHD",
            image: "tcl_qled_tv_4k.jpg.webp",
            price: 3200
        },
        {
            id: 10,
            brand: "VESTEL",
            type: "LED TV",
            resolution: "4K UHD",
            image: "vestel_led_tv_4k.jpg.webp",
            price: 2700
        },
        {
            id: 11,
            brand: "AXEN",
            type: "OLED TV",
            resolution: "8K UHD-2",
            image: "axen_oled_tv_8k.jpg.webp",
            price: 4900
        },
        // Yeni ürünler buraya eklenecek
        {
            id: 12,
            brand: "SAMSUNG",
            type: "LED TV",
            resolution: "4K UHD",
            image: "samsung_led_tv_4k.jpg.webp",
            price: 3200
        },
        {
            id: 13,
            brand: "LG",
            type: "QLED TV",
            resolution: "4K UHD",
            image: "lg_qled_tv_4k.jpg.webp",
            price: 3800
        },
        {
            id: 14,
            brand: "PHILIPS",
            type: "LED TV",
            resolution: "Full HD",
            image: "philips_led_tv_full_hd.jpg.webp",
            price: 2300
        },
        {
            id: 15,
            brand: "TCL",
            type: "OLED TV",
            resolution: "4K UHD",
            image: "tcl_oled_tv_4k.jpg.webp",
            price: 3600
        },
        {
            id: 16,
            brand: "GRUNDIG",
            type: "LED TV",
            resolution: "Full HD",
            image: "grundig_led_tv_full_hd.jpg.webp",
            price: 2500
        },
        // Diğer ürünler...
    ];

    // Filtreleme işlevi
    function filterProducts() {
        var filteredProducts = products.filter(function(product) {
            var brandFilters = Array.from(document.querySelectorAll("#brand-form input:checked")).map(function(checkbox) {
                return checkbox.value;
            });
            var typeFilters = Array.from(document.querySelectorAll("#type-form input:checked")).map(function(checkbox) {
                return checkbox.value;
            });
            var resolutionFilters = Array.from(document.querySelectorAll("#resolution-form input:checked")).map(function(checkbox) {
                return checkbox.value;
            });

            return (
                (brandFilters.length === 0 || brandFilters.includes(product.brand)) &&
                (typeFilters.length === 0 || typeFilters.includes(product.type)) &&
                (resolutionFilters.length === 0 || resolutionFilters.includes(product.resolution))
            );
        });

        displayProducts(filteredProducts);
    }

    // Sonuçları gösterme işlevi
    function displayProducts(products) {
        var resultsSection = document.getElementById("results");
        resultsSection.innerHTML = "";

        if (products.length === 0) {
            resultsSection.innerHTML = "<p>Sonuç bulunamadı.</p>";
        } else {
            var productList = document.createElement("div");
            productList.classList.add("row");

            products.forEach(function(product) {
                var productCard = `
                    <div class="col-lg-4 mb-4">
                        <h3>${product.brand} ${product.type}</h3>
                        <img src="${product.image}" alt="${product.brand} ${product.type}" class="img-fluid">
                        <p>Çözünürlük: ${product.resolution}</p>
                        <p>Fiyat: ${product.price} TL</p>
                    </div>
                `;
                productList.innerHTML += productCard;
            });

            resultsSection.appendChild(productList);
        }
    }

    // Form submit olaylarını dinleme
    document.getElementById("budget-form").addEventListener("submit", function(event) {
        event.preventDefault();
        filterProducts();
    });

    document.getElementById("brand-form").addEventListener("submit", function(event) {
        event.preventDefault();
        filterProducts();
    });

    document.getElementById("type-form").addEventListener("submit", function(event) {
        event.preventDefault();
        filterProducts();
    });

    document.getElementById("resolution-form").addEventListener("submit", function(event) {
        event.preventDefault();
        filterProducts();
    });

    // Sayfa yüklendiğinde ürünleri göster
    displayProducts(products);
});
