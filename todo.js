tags = [];
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

class Todo{
filterByType(arr, typeP){
return arr.filter(function(arr){
return arr.priority === typeP
});
}
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
statistick(arr, type, znach){
  var k = 0;
  for( i = 0; i < arr.lenght; i++){
    if(arr[i].type == znach){
      k = k + 1;
    }
  }
  console.log('Значение ' + type + znach + 'встречается' + k + 'раз')
}
}
var todolist = new Todo();
