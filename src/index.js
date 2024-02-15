// const text = document.querySelector(".text");

// let secondTime = 0;

// setTimeout(timer, 1000);
// function timer() {
//   secondTime++;
//   text.textContent = secondTime;
// }

// Створити таймер, який буде починати відлік з 5 хвилин
//та зменшувати час кожну секунду.При досягненні 0 хвилин та 0 секунд,
// таймер повинен зупинятися та виводити повідомлення "Час вийшов!".

// const timer = document.querySelector(".timer");
// // const second = document.querySelector(".seconds");
// let time = 300;
// let timeRecreate = time / 60;
// let secondTime = 60;

// const timeId = setInterval(timeOut, 1000);

// function timeOut() {
//   time--;
//   timer.textContent = Math.round(timeRecreate);
//   if (time === 0) {
//     clearInterval(timeId);
//     alert("Час вийшов!");
//   }
//   if (
//     time < 300 ||
//     time === 240 ||
//     time === 180 ||
//     time === 120 ||
//     time === 60
//   ) {
//     secondTime--;
//     second.textContent = secondTime;
//   }
//   timer.textContent = `minuts`;
// }

// //Створити секундомір, який буде мати можливість зупинятися
// // та продовжуватися за допомогою кнопок "Старт" та "Стоп".
// //Також потрібно мати можливість скидати лічильник до 0.

// let time3 = 600;
// const text4 = document.getElementById("text4");
// const text5 = document.getElementById("text5");
// const btns = document.querySelectorAll(".timerBtn");

// let task3 = setInterval(timer3, 1000);

// function timer3() {
//   time3--;
//   text4.textContent = `Секунди: ${time3 % 60}`;
//   text5.textContent = `Хвилини: ${Math.floor(time3 / 60)}`;
//   if (time3 === 0) {
//     clearInterval(task3);
//     console.log("Час вийшов!");
//   }
// }

// btns[0].addEventListener("click", () => {
//   time3 = 600;
//   task3 = setInterval(timer3, 1000);
// });

// btns[1].addEventListener("click", () => {
//   clearInterval(task3);
// });

// btns[2].addEventListener("click", () => {
//   time3 = 0;
//   text4.textContent = `Секунди: ${time3 % 60}`;
//   text5.textContent = `Хвилини: ${Math.floor(time3 / 60)}`;
// });

//Створіть анімацію, використовуючи таймер, яка змінює розмір елемента на сторінці
// з плавним збільшенням та зменшенням.Анімація повинна циклічно повторюватися.
//Створіть таймер, який має можливість налаштування часу (години, хвилини, секунди)

const animationBoxRef = document.querySelector(".animation__box");
let width = 15;
let height = 15;
let maxWidth = 150;
let changeDirectin = true;

const intervalId = setInterval(() => {
  if (changeDirectin) {
    width += 10;
    height += 10;

    animationBoxRef.computedStyleMap.width = `${width}px`;
    animationBoxRef.computedStyleMap.height = `${height}px`;

    if (width >= maxWidth) {
      changeDirectin = false;
    }
  } else {
      width -= 10;
      height -= 10;

      animationBoxRef.computedStyleMap.width = `${width}px`;
      animationBoxRef.computedStyleMap.height = `${height}px`;
   
      if (width === maxWidth) {
          changeDirectin = true;
      }
     }
}, 1000);
