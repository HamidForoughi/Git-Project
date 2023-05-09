const $ = document
const laptopBrandInput = $.getElementById('inputGroupSelect02')
const laptopModelInput = $.getElementById('laptop-model')
const submitButton = $.querySelector('.laptop__inputs')

submitButton.addEventListener('submit', event => {
    event.preventDefault()

    const laptopData = {
        laptopBrand: laptopBrandInput.value,
        laptopMOdel: laptopModelInput.value,
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
    laptopBrandInput = ''
    laptopModelInput = ''
}