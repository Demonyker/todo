// создаем готовый массив объектов
Stroka = [
{
  priority:"A",
  tags:["job", "important", "money"],
  text:"Create a to do list on javascrpit",
  date: new Date(2019, 3, 25),
  num: 1
},
{
  priority:"B",
  tags: ["breakfest", "food"],
  text:"Visit a McDonalds",
  date: new Date(2019, 3, 24),
  num: 2
},
{
  priority:"A",
  tags: ["science", "study", "institute"],
  text:"attend a lecture",
  date: new Date(2019, 3, 22),
  num: 3
}
,{
  priority:"B",
  tags: ["study", "institute"],
  text:"attend a lecture",
  date: new Date(2019, 3, 23),
  num: 4
}
];
 var sum = 0;
//Создаем класс который будет работать со строками
class Todo{
//Фильтр который выводит строки только с определенным приоритетом
filterByType(arr, typeP){
return arr.filter(function(arr){
return arr.priority === typeP
});
}
//Метод который сортирует строки по заданному типу(в нашем случае либо по приоритету, либо по дате)
sortirovka(arr, type){
 console.log( arr.sort(function (a, b) {
 if (a[type] > b[type]) {
return 1;
  }
  if (a[type] < b[type]) {
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
//Метод который выводит статистику того или иного значения строки
statistic(arr, type, znach){
arr.forEach(function(item){
      if(item[type] === znach){
         sum=sum+1;
      }
    });
  console.log(sum);
  }
}
var todolist = new Todo();
