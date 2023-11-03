const input = document.querySelector('interface-top__input');
const button = document.querySelector('interface-top__button');

console.log(button)
/* знаю что должен был быть ТС, о его установки в проект я задумался на пол задании */

const getData = (value/* : number | string */) => { 
    fetch(`https://fakerapi.it/api/v1/companies?_quantity=${value}`).then((response) => {
        return console.log(response)
    })
}


button?.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(input.value)
})
   