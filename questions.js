'use strict';

const questions = [
    {
        //1
        question: 'Часто ли вы можете назвать свое общее самочувствие позитивным?',
        answers:[
            'Всегда',
            'Часто',
            'Иногда',
            'Редко',
            'Никогда',
        ],
        scores: {
            'Всегда': 1,
            'Часто': 2,
            'Иногда': 3,
            'Редко':4,
            'Никогда':5,
        }
    },
    {
        //2
        question: 'Вы ощущаете удовлетворение своей повседневной деятельностью?',
        answers:[
            'Полностью удовлетворён(-а)',
            'Скорее да, чем нет',
            'Затрудняюсь сказать',
            'Скорее нет, чем да',
            'Совсем неудовлетворён(-а)',
        ],
        scores: {
            'Полностью удовлетворён(-а)': 1,
            'Скорее да, чем нет': 2,
            'Затрудняюсь сказать': 3,
            'Скорее нет, чем да':4,
            'Совсем неудовлетворён(-а)':5,
        }
    },
    {
        //3
        question: 'Часто ли вам кажется, что окружающие вас понимают и поддерживают?',
        answers:[
            'Очень часто',
            'Достаточно часто',
            'Время от времени',
            'Практически никогда',
            'Никогда',
        ],
        scores: {
            'Очень часто': 1,
            'Достаточно часто': 2,
            'Время от времени': 3,
            'Практически никогда':4,
            'Никогда':5,
        }
    },
    {
        //4
        question: 'Как бы вы оценили уровень стресса в вашей жизни за последнюю неделю?',
        answers:[
            'Минимальный стресс',
            'Умеренный стресс',
            'Затрудняюсь сказать',
            'Высокий уровень стресса',
            'Постоянный сильный стресс',
        ],
        scores: {
            'Минимальный стресс': 1,
            'Умеренный стресс': 2,
            'Затрудняюсь сказать': 3,
            'Высокий уровень стресса':4,
            'Постоянный сильный стресс':5,
        }
    },
    {
        //5
        question: 'Умеете ли вы эффективно справляться с негативными эмоциями и переживаниями?',
        answers:[
            'Да, умею хорошо справляться',
            'Чаще всего справляюсь успешно',
            'Умею, но иногда возникают трудности',
            'Рано или поздно начинаю испытывать проблемы',
            'Не умею практически совсем',
        ],
        scores: {
            'Всегда': 1,
            'Часто': 2,
            'Иногда': 3,
            'Редко':4,
            'Никогда':5,
        }
    },
    {
        //6
        question: 'Способны ли вы самостоятельно расслабиться и отдохнуть после напряжённого дня?',
        answers:[
            'Легко расслабляюсь и отдыхаю',
            'Обычно удаётся восстановить силы',
            'Сложнее, чем хотелось бы',
            'Почти невозможно полноценно отдохнуть',
            'Невозможно снять напряжение и усталость',
        ],
        scores: {
            'Легко расслабляюсь и отдыхаю': 1,
            'Обычно удаётся восстановить силы': 2,
            'Сложнее, чем хотелось бы': 3,
            'Почти невозможно полноценно отдохнуть':4,
            'Невозможно снять напряжение и усталость':5,
        }
    },
    {
        //7
        question: 'Есть ли ощущение, что жизнь проходит мимо, а цели кажутся недосягаемыми?',
        answers:[
            'Нет такого ощущения вообще',
            'Такое бывает редко',
            'Периодически испытываю подобное чувство',
            'Довольно часто возникает такое впечатление',
            'Чувство постоянной потерянности и неопределённости',
        ],
        scores: {
            'Нет такого ощущения вообще': 1,
            'Такое бывает редко': 2,
            'Периодически испытываю подобное чувство': 3,
            'Довольно часто возникает такое впечатление':4,
            'Чувство постоянной потерянности и неопределённости':5,
        }
    },
    {
        //8
        question: 'Отмечали ли вы последнее время изменения настроения без очевидных причин?',
        answers:[
            'Такие перемены бывают крайне редко',
            'Бывают эпизодические перепады настроения',
            'Перепады происходят регулярно',
            'Настроение постоянно меняется непредсказуемо',
            'Эмоциональное состояние нестабильно большую часть времени',
        ],
        scores: {
            'Такие перемены бывают крайне редко': 1,
            'Бывают эпизодические перепады настроения': 2,
            'Перепады происходят регулярно': 3,
            'Настроение постоянно меняется непредсказуемо':4,
            'Эмоциональное состояние нестабильно большую часть времени':5,
        }
    },
];



let score = 0;

let questionIndex = 0;

const headerContainer = document.querySelector('#quizHeader');

const listContainer = document.querySelector('#quizList');

const quizButton  = document.querySelector('#quizSubmit');

const clearPage = () => {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
};

const showQuestion = () => {
    const headerTemplate = `<h4 class="quiz__heading">%title%</h4>`;
    headerContainer.innerHTML = headerTemplate.replace('%title%', questions[questionIndex].question);

    for (const answerText in questions[questionIndex].scores) {
        const questionTemplate = ` <li class="quiz__item"> <label> <input value="${questions[questionIndex].scores[answerText]}" type="radio" class="answer" name="answer"> <span class="quiz__answer">${answerText}</span> </label> </li> `;
        listContainer.innerHTML += questionTemplate;
    }
};

const checkAnswers = () => {
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    if (checkedRadio) {
        score += parseInt(checkedRadio.value);
        questionIndex++;
        if (questionIndex >= questions.length) {
            quizButton.innerHTML = 'Начать сначала';
            showResults();
        } else {
            clearPage();
            showQuestion();
        }
    }
};

const showResults = () =>{
    clearPage();
    let result,image;

    if(score > 30) {
        result = "Вам стоит обратиться к специалистам";
        image = "ken30.jpeg";
    }else if(score > 20 && score < 30) {
        result  = "Ваше состояние оставляет желать лучшего";
        image = "ken20.jpeg";
    }else if(score > 15 && score < 20) {
        result = "Ваше состояние в норме";
        image = "ken15.jpeg";
    }else if(score <= 15) {
        result = "Вы отлично себя чувствуете :)";
        image = "ken0.jpeg";
    }else {
        alert("Что-то пошло не так")
        result = "Ошибка";
    }

    const resultTemplate = `
        <h4 class="results__title">Спасибо, что прошли тест</h4>
        <h5 class="results__score">
        По результатам теста вы набрали ${score} баллов.
        <p class="results__description">${result}</p>
        </h5>
        <img class="results__image" src="./images/kenkaneki/${image}" alt="">
    `;

    headerContainer.innerHTML += resultTemplate;

    quizButton.onclick = () => {
        history.go();
    };
}
quizButton.onclick = checkAnswers;

clearPage();
showQuestion();

