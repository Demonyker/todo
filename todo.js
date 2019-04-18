var Stroka = [];
var tags = [];
// Так как по заданию не было уточнено, подготовил заполненный массив объектов для проверки работы функий
// Если будет нужно можно будет создать функцию которая заполняет массив объектов(строк)
Stroka[0] = {
  priority:"A",
  tags:["job", "important", "money"],
  text:"Create a to do list on javascrpit",
  date: new Date(2019, 3, 24)
}
Stroka[1] = {
  priority:"B",
  tags: ["breakfest", "food"],
  text:"Visit a McDonalds",
  date: new Date(2019, 3, 24)
}
Stroka[2] = {
  priority:"A",
  tags: ["science", "study", "institute"],
  text:"Do homework",
  date: new Date(2019, 3, 24)
}
Stroka[3] = {
  priority:"B",
  tags: ["study", "institute"],
  text:"attend a lecture",
  date: new Date(2019, 3, 25)
}
//Создаю класс который будет работать с массивом объектов
class Todo{
  constructor(priority, tags, text, date){
    this.priority = priority;
    this.tags = tags;
    this.text = text;
    this.date = date;
  }
//Метод фильтрации, в данном примере есть две функции, которые выводят строки либо только с приоритетом А, либо с приоритетом B
filterByA(Stroks){
  function filterByP1(Stroks){
   if (Stroks.priority == "A") {
    return true;
  }else
   return false;
 }
  var arrByP = Stroks.filter(filterByP1);
  console.log(arrByP);
}
filterByB(Stroks){
  function filterByP2(Stroks){
   if (Stroks.priority == "B") {
    return true;
  }else
   return false;
 }
  var arrByP = Stroks.filter(filterByP2);
  console.log(arrByP);
}
//Метод сортировки по приоритету(я еще создам сортировку по дате)
sortirovka(Stroks){
 console.log( Stroks.sort(function (a, b) {
 if (a.priority > b.priority) {
return 1;
  }
  if (a.priority < b.priority) {
return -1;
   }

 return 0;
}),)
}
}
//Получение классом массива объектов
var Stroks = new Todo(Stroka.priority, Stroka.tags, Stroka.text, Stroka.date);
//в html файле этот же код только с проверками методов
