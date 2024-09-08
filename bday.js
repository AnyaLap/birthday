const bdayInput = document.getElementById("bdayInput");
const bdayButton = document.getElementById("bdayButton") ;
const bdayMessage = document.getElementById("bdayMessage") ;
const bdayError = document.getElementById("bdayError") ;

const makeBday = () =>{

  //Проверка на пустое значение
  if (bdayInput.value ===''){

    bdayMessage.style.color = 'red';
    bdayMessage.textContent = 'Ошибка. Введите дату рождения!';
    return;
  } 

  //Дата, введенная пользователем 
    const yourBday = new Date(bdayInput.value);

    //Текущая дата
    const currentDate = new Date();

    //Разница между текущей и введенной датой
    const differenceDate = Math.floor((yourBday - currentDate)/(1000*60*60*24));
    console.log(differenceDate);

    //Создаем переменную для указания дня
    let day;
    
    //Условия для склонения дня в зависимости от числа
    
    if ( differenceDate % 10 === 1 &&  differenceDate % 100 !== 11) {
      day = 'день';
    } else if ([2,3,4].includes(differenceDate % 10) && ![12,13,14].includes(differenceDate % 100)){
      day = 'дня';
    } else{
      day = 'дней';
    }
    //Условия для вывода сообщения в зависимости от введенной даты

    if (differenceDate === 0){

      bdayMessage.style.color = 'rgb(36, 91, 153)';
      bdayMessage.textContent = `Ваш День Рождения Сегодня! Ура!`;
    }
    else if (differenceDate < 0){

      bdayMessage.textContent = `Ваш День Рождения в следующем году!`;
    }
     else{

      bdayMessage.textContent = `До вашего Дня Рождения осталось ${differenceDate} ${day}!`;
    }
}

bdayButton.addEventListener('click',makeBday);







    // function getNoun(differenceDate, one, two, five) {
    //     let n = Math.abs(differenceDate);
    //     n %= 100;
    //     if (n > 1 && n < 5) {
    //       return five;
    //     }
    //     n %= 10;
    //     if (n === 1) {
    //       return one;
    //     }
    //     if (n >= 2 && n <= 4) {
    //       return two;
    //     }
    //     return five;
    //   }