
const init = function ()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthdayOutput').innerText = initPerson.birthdayDay + " " + initPerson.birthdayMonth + " " + initPerson.year + " года рождения";
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    
};
window.onload = init();
document.getElementById('generationBtn').addEventListener('click', function () {
    init();
})

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('birthdayOutput').innerText = "Дата рождения";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('patronymicOutput').innerText = "Отчество";
    document.getElementById('professionOutput').innerText = "Профессия";
})
