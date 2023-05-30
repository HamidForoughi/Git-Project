const $ = document.getElementById.bind(document);
const laptopNameInput = $('laptop-name');
const laptopBrandInput = $('laptop-brand');
const laptopModelInput = $('laptop-model');
const laptopCpuBrandInput = $('processor-brand');
const laptopCpuClassInput = $('processor-class');
const laptopCpuModelInput = $('processor-model');
const graphicBrandInput = $('graphic-brand');
const graphicModelInput = $('graphic-model');
const ramSizeInput = $('ram-amount');
const ramTypeInput = $('ram-type');
const storageSizeInput = $('storage-size');
const storageTypeInput = $('storage-type');
const screenSizeInput = $('screen-size');
const screenTypeInput = $('screen-type');
const screenResolutionInput = $('screen-resolution');
const laptopPriceInput = $('laptop-price');
const submitButton = $('submit');

const processorClassData = {
    Intel: ['Celeron', 'Pentium', 'Core-i3', 'Core-i5', 'Core-i7'],
    AMD: ['Ryzen3', 'Ryzen5', 'Ryzen7']
};

laptopCpuBrandInput.addEventListener('change', () => {
    if (laptopCpuBrandInput.value === 'انتخاب کنید') {
        laptopCpuClassInput.innerHTML = '';
        laptopCpuClassInput.innerHTML += `<option value=""></option>`;
    } else {
        const processorBrandName = laptopCpuBrandInput.value;
        const processorClassName = processorClassData[processorBrandName];

        laptopCpuClassInput.innerHTML = '';
        
        laptopCpuClassInput.appendChild(document.createElement('option'));

        processorClassName.forEach(cpuClass => {
            const option = document.createElement('option');
            option.value = cpuClass;
            option.textContent = cpuClass;
            laptopCpuClassInput.appendChild(option);
        });
    }
});

submitButton.addEventListener('click', event => {
    event.preventDefault();
    const laptopData = {
        laptopName: laptopNameInput.value,
        laptopBrand: laptopBrandInput.value,
        laptopModel: laptopModelInput.value,
        laptopCover: '../Images/Laptops/laptop1-min.jpg',
        laptopCpuBrand: laptopCpuBrandInput.value,
        laptopCpuClass: laptopCpuClassInput.value,
        laptopCpuModel: laptopCpuModelInput.value,
        laptopGpuBrand: graphicBrandInput.value,
        laptopGpuModel: graphicModelInput.value,
        laptopRamSize: ramSizeInput.value,
        laptopRamType: ramTypeInput.value,
        laptopStorageSize: storageSizeInput.value,
        laptopStorageType: storageTypeInput.value,
        laptopScreenSize: screenSizeInput.value,
        laptopScreenType: screenTypeInput.value,
        laptopScreenResolution: screenResolutionInput.value,
        laptopPrice: laptopPriceInput.value,
    };
    fetch('http://localhost:3000/Laptops', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(laptopData)
    })
        .then(res => {
            console.log(res);
            clearData();
        })
        .catch(err => console.log(err));
});

function clearData() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.value = '';
    });
}
