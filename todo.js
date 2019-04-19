tags = [];
// создаем готовый массив объектов
Stroka = [
{
  priority:"A",
  tags:["job", "important", "money"],
  text:"Create a to do list on javascrpit",
  date: new Date(2019, 3, 25)
},
{
  priority:"B",
  tags: ["breakfest", "food"],
  text:"Visit a McDonalds",
  date: new Date(2019, 3, 24)
},
{
  priority:"A",
  tags: ["science", "study", "institute"],
  text:"Do homework",
  date: new Date(2019, 3, 22)
}
,{
  priority:"B",
  tags: ["study", "institute"],
  text:"attend a lecture",
  date: new Date(2019, 3, 23)
}
];
//Создаем класс который будет работать со строками
class Todo{
//Фильтр который выводит строки только с определенным приоритетом
filterByType(arr, typeP){
return arr.filter(function(arr){
return arr.priority === typeP
});
}
//Два метода которые сортируют строки либо по приоритету, либо по дате
sortirovkaByP(arr){
 console.log( arr.sort(function (a, b) {
 if (a.priority > b.priority) {
return 1;
  }
  if (a.priority < b.priority) {
return -1;
   }

 return 0;
}),)
}
sortirovkaByD(arr){
 console.log( arr.sort(function (a, b) {
 if (a.date > b.date) {
return 1;
  }
  if (a.date < b.date) {
return -1;
   }

 return 0;
}),)
}
//Метод который добавляет строку
addElem(arr, priority, tags, text, date){
 arr.push({
   priority: priority,
   tags: tags,
   text: text,
   date: date
 });
}
//Метод который удаляет строку
deleteElem(arr, i){
 delete arr[i];
}
}
var todolist = new Todo();
