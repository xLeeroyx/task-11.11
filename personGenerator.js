const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Мария",
            "id_2": "Анастасия",
            "id_3": "Елена",
            "id_4": "Александра",
            "id_5": "Людмила",
            "id_6": "Ирина",
            "id_7": "Валентина",
            "id_8": "Виктория",
            "id_9": "Галина",
            "id_10": "Жанна"
        }
    }`,
    patronymicNameMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич"
        }
    }`,
    patronymicNameFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Никитична",
            "id_2": "Михайловна",
            "id_3": "Данииловна",
            "id_4": "Егоровна",
            "id_5": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Шахтёр",
            "id_2": "Слесарь",
            "id_3": "Грузчик",
            "id_4": "Водитель",
            "id_5": "Сварщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Косметолог",
            "id_2": "Продавец",
            "id_3": "Повар",
            "id_4": "Учитель",
            "id_5": "Врач"
        }
    }`,
    birthdayMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {

        return Math.random() >= 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
        
    },

    randomFirstName: function(gender) {

         if (gender == this.GENDER_MALE){
             return this.randomValue(this.firstNameMaleJson);
         }else{
             return this.randomValue(this.firstNameFemaleJson);
         }

    },

    randomSurname: function(gender) {

        if (gender == this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        }else{
            return this.randomValue(this.surnameJson) + 'a';
        }

    },

    randomPatronymic: function(gender) {
        if (gender == this.GENDER_MALE){
            return this.randomValue(this.patronymicNameMaleJson);
        }else{
            return this.randomValue(this.patronymicNameFemaleJson);
        }
    },

    randomYear: function() {

        return this.randomIntNumber(2002,1980);

    },

    randomProfession: function(gender) {
        if (gender == this.GENDER_MALE){
            return this.randomValue(this.professionMaleJson);
        }else{
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBirthdayMonth: function(){
        return this.randomValue(this.birthdayMonthJson);
    },

    randomBirthdayDay: function(month) {
        let maxDay = 0;
        switch(month){
            case 'апреля':
            case 'июня':
            case 'сентября':
            case 'ноября':
                maxDay = 30;
                break;
            case 'февраля':
                maxDay = 28;
                break;
            default: 
                maxDay = 31;
        }

        return this.randomIntNumber(maxDay,1);
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.year = this.randomYear();
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        this.person.birthdayMonth = this.randomBirthdayMonth();
        this.person.birthdayDay = this.randomBirthdayDay(this.person.birthdayMonth);
        return this.person;
    }
};
