const $ = document
const laptopNameInput = $.getElementById('laptop-name');
const laptopBrandInput = $.getElementById('laptop-brand');
const laptopModelInput = $.getElementById('laptop-model');
const laptopCpuBrandInput = $.getElementById('processor-brand');
const laptopCpuClassInput = $.getElementById('processor-class');
const laptopCpuModelInput = $.getElementById('processor-model');
const graphicBrandInput = $.getElementById('graphic-brand');
const graphicModelInput = $.getElementById('graphic-model');
const ramSizeInput = $.getElementById('ram-amount');
const ramTypeInput = $.getElementById('ram-type');
const storageSizeInput = $.getElementById('storage-size');
const storageTypeInput = $.getElementById('storage-type');
const screenSizeInput = $.getElementById('screen-size');
const screenTypeInput = $.getElementById('screen-type');
const screenResolutionInput = $.getElementById('screen-resolution');
const laptopPriceInput = $.getElementById('laptop-price');
const submitButton = $.getElementById('submit');


const processorClassData = {
    Intel: ['Celeron', 'Pentium', 'Core-i3', 'Core-i5', 'Core-i7'],
    AMD: ['Ryzen3', 'Ryzen5', 'Ryzen7']
}

laptopCpuBrandInput.addEventListener('change', () => {

    if (laptopCpuBrandInput.value === 'انتخاب کنید') {
        laptopCpuClassInput.innerHTML = ''
        laptopCpuClassInput.innerHTML += `<option></option>`
    } else {
        const processorBrandName = laptopCpuBrandInput.value
        const processorClassName = processorClassData[processorBrandName]

        laptopCpuClassInput.innerHTML = ''

        processorClassName.forEach((cpuClass) => {
            laptopCpuClassInput.innerHTML += `<option>${cpuClass}</option>`
        })
    }

})

submitButton.addEventListener('click', event => {
    event.preventDefault()

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
    }

    fetch('https://hamid-foroughi-default-rtdb.firebaseio.com/laptops.json', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(laptopData)
    })
        .then(res => {
            console.log(res);
            clearData()
        })
        .catch(err => console.log(err))
})

function clearData() {
    laptopName = ''
    laptopBrand = ''
    laptopModel = ''
    laptopCover = ''
    laptopCpuBrand = ''
    laptopCpuClass = ''
    laptopCpuModel = ''
    laptopGpuBrand = ''
    laptopGpuModel = ''
    laptopRamSize = ''
    laptopRamType = ''
    laptopStorageSize = ''
    laptopStorageType = ''
    laptopScreenType = ''
    laptopScreenResolution = ''
    laptopPrice = ''
}
