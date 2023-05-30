const laptopProducts = document.querySelector('.store__items');

window.addEventListener('load', () => {

    fetch('https://hamid-foroughi-default-rtdb.firebaseio.com/laptops.json')
        .then(res => res.json())
        .then(data => {
            let laptopData = Object.entries(data);

            laptopData.forEach(laptop => {
                console.log(laptop);

                laptopProducts.insertAdjacentHTML('beforeend', `
                
                <div class="store__item wow animate__animated animate__fadeInUp">
                        <div class="item__banner">
                            <div class="ih-item square effect10 right_to_left">
                                <a href="./Laptop 1 - Lenovo IdeaPad 3 15IGL05-C.html">
                                    <div class="img">
                                        <img loading="lazy" src="${laptop[1].laptopCover}" alt="laptop"
                                            class="item__img">
                                    </div>
                                    <div class="info">
                                        <h3>مشخصات فنی</h3>
                                        <p>مدل پردازنده: ${laptop[1].laptopCpuBrand} ${laptop[1].laptopCpuClass} ${laptop[1].laptopCpuModel}</p>
                                        <p>مدل گرافیک: ${laptop[1].laptopGpuBrand} ${laptop[1].laptopGpuModel}</p>
                                        <p>حافظه رم: ${laptop[1].laptopRamSize} (${laptop[1].laptopRamType})</p>
                                        <p>حافظه داخلی: ${laptop[1].laptopStorageSize} (${laptop[1].laptopStorageType})</p>
                                        <p>اندازه صفحه نمایش: ${laptop[1].laptopScreenSize} ${laptop[1].laptopScreenType}</p>
                                        <p>رزولوشن صفحه نمایش: ${laptop[1].laptopScreenResolution}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <h3 class="item__title">${laptop[1].laptopName}</h3>
                        <h4 class="item__caption">${laptop[1].laptopBrand} ${laptop[1].laptopModel}</h4>
                        <div class="item__purchase">
                            <p class="item__price">${laptop[1].laptopPrice} تومان</p>
                            <a href="#" class="button item__link">اضافه به سبد خرید</a>
                        </div>
                    </div>
                
                `);
            });
        });
});
