let loveForm = document.querySelector('#loveForm');
loveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    showLoader();
    showModal();
    getData(data);
    showData(data);
})

let modalResults = document.querySelector('#modalResults');
const showModal = () => {
    modalResults.style.display = 'block' 
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4c45a2ccemsh4c7f0da2d8647eap1d8471jsnbd7511e676db',
		'X-RapidAPI-Host': 'the-love-calculator.p.rapidapi.com'
	}
};

const getData = async (data) => {
    let res = await (await fetch(`https://the-love-calculator.p.rapidapi.com/love-calculator?fname=${data.first}&sname=${data.second}`, options)).json();
    console.log(Object.keys(res)[0]);
    return res;
}

let firstName = document.querySelector('#firstName');
let secondName = document.querySelector('#secondName');
let porcentaje = document.querySelector('#porcentaje');
let frase = document.querySelector('#frase');
let inpFirst = document.querySelector('#inpFirst');
let inpSecond = document.querySelector('#inpSecond');

const showData = async (data) => {
    const dataAll = await getData(data);
    console.log(dataAll);
    firstName.textContent = Object.values(dataAll)[0];
    secondName.textContent = Object.values(dataAll)[1];
    porcentaje.textContent = `${Object.values(dataAll)[2]}%`;
    frase.textContent = Object.values(dataAll)[3];
    inpFirst.value = "";
    inpSecond.value = "";
}

let loader = document.querySelector('#loader')
const showLoader = () => {
    loader.classList.remove('none')
    setTimeout(() => {
        loader.classList.add('none')
    }, 1000)
}