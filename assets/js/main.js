
/************ cronograma da limpeza **************/
// variáveis 
const btn = document.getElementById('limpeza')
const date = moment().format('DD/MM/YYYY')
const week = moment().isoWeeks();
const aLimpeza = [...document.querySelectorAll(".card__person")]

const dateNow = document.getElementById('dateNow')

// constante que recebe a função anônima

const cleaning = () => {
    aLimpeza[0].innerHTML = "Katy"
    aLimpeza[1].innerHTML = "Katy"
    aLimpeza[2].innerHTML = "Alex"
    aLimpeza[3].innerHTML = "Alex"
    dateNow.textContent = date;

    if (week % 2 === 0) {
        aLimpeza[0].innerHTML = "Alex"
        aLimpeza[1].innerHTML = "Alex"
        aLimpeza[2].innerHTML = "katy"
        aLimpeza[3].innerHTML = "Katy"
    }
}
cleaning();