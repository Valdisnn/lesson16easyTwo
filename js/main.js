/*

https://learn.javascript.ru/class-inheritance
https://learn.javascript.ru/static-properties-methods
*/

'use strict';

// 1) ДВА КЛАССА, FIRST И SECOND, SECOND НАСЛЕДУЕТ ОТ FIRST .

class First {
    constructor() {}

    // 2) В FIRST ЕСТЬ МЕТОД HELLO - ОН ПЕЧАТАЕТ В КОНСОЛЬ "
    // ПРИВЕТ Я МЕТОД РОДИТЕЛЯ!".
    static hello() {
        console.log(('Привет я метод родителя!'));
    }

}

class Second extends First {
    constructor() {}

    // 3) НУЖНО НАПИСАТЬ В SECOND МЕТОД HELLO, ЧТОБ ОН 
    // СНАЧАЛА ВЫЗЫВАЛ МЕТОД HELLO ИЗ FIRST, А ПОТОМ СРАЗУ ПЕЧАТАЛ 
    // В КОНСОЛЬ "А Я НАСЛЕДУЕМЫЙ МЕТОД!"
    static hello() {
        super.hello();
        console.log(('А я наследуемый метод!'));
    }
}

Second.hello();



// // 1) ДВА КЛАССА, FIRST И SECOND, SECOND НАСЛЕДУЕТ ОТ FIRST .

// class First {
//     constructor(firstText) {
//         this.firstText = firstText;
//     }

//     // 2) В FIRST ЕСТЬ МЕТОД HELLO - ОН ПЕЧАТАЕТ В КОНСОЛЬ "
//     // ПРИВЕТ Я МЕТОД РОДИТЕЛЯ!".
//     hello() {
//         console.log(this.firstText);
//     }
// }

// class Second extends First {

//     // 3) НУЖНО НАПИСАТЬ В SECOND МЕТОД HELLO, ЧТОБ ОН 
//     // СНАЧАЛА ВЫЗЫВАЛ МЕТОД HELLO ИЗ FIRST, А ПОТОМ СРАЗУ ПЕЧАТАЛ 
//     // В КОНСОЛЬ "А Я НАСЛЕДУЕМЫЙ МЕТОД!"
//     hello() {
//         super.hello();
//         console.log();
//     }
// }

// const firstClass = new First('Привет я метод родителя');
// const secondClass = new Second('А я наследуемый метод!');


// firstClass.hello();
// secondClass.hello();