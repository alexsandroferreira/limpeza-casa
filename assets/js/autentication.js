/************ cronograma da limpeza **************/
// variáveis 

const closeBtn = document.querySelector('.close-aut')
const userAt = document.querySelector(".user__aut")
const userBox = document.querySelector(".user__aut__box")
const UserBtn = document.getElementById('limpeza')
const UserBtnALex = document.getElementById('user__alex')
const UserBtnKaty = document.getElementById('user__katy')


// constante que recebe a função anônima
UserBtn.addEventListener('click', showDate)

function showDate() {
    userAt.classList.add('none')
}

closeBtn.addEventListener('click', closeDate)

function closeDate() {
    userAt.classList.remove('none')
}

const userAut = (typeUser) => {
    typeUser.addEventListener('click', () => {
        userBox.classList.add('user__aut__hide')
    })
}
userAut(UserBtnALex);
userAut(UserBtnKaty);