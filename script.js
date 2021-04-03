"use strict";
let money = prompt('Введіть ваш бюджет на місяць',''),
    time = prompt('Введіть дату в форматі YYYY-MM-DD','');
let appData = {
    budget : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData : time,
    saving : false,
};
for( let i = 0; i<2 ; i++) {
    let a = prompt('Введіть статтю розходів в цьому місяці');
    let b = prompt('Скільки коштуватиме?');
    if (typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
    } else {
             i -=i;
    }
};
alert(appData.budget/30);