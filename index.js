const input = document.querySelector('.interface-top__input');
const button = document.querySelector('.interface-top__button');
const result = document.querySelector('.intreface-bot__result');

let inputValue = 0;
 result.textContent = 'NoItems' 
/* В задании я часто использую innerHTML, на практике же его не рекомендуют использовать в связи с уязвимостями
альтернативы на данный момент придумать не могу и вообще я привык к React'у
*/

const getValue = (number) => {
    inputValue = number
}

const getData = (value) => {
    if (value === '' || value === 0 || !value) {
        result.innerHTML = 'No Items';
    } else {
        fetch(`https://fakerapi.it/api/v1/companies?_quantity=${value}`).then((response) => {
            return response.json()
            .then((data) => {
                result.innerHTML = '';
                data.data.forEach((el) => {
                    const resultItem = document.createElement('div')
                    resultItem.innerHTML = el.name
                    result.append(resultItem)
                });
            });
        });
    }
}

input.addEventListener('input', (e) => {
    getValue(e.target.value);
})

 button.addEventListener('click', (e) => {
    e.preventDefault();
    getData(inputValue);
});