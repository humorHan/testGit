var name = 'out';
var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};

console.log('dev dif');

obj.sayName();

obj.sayName.call();
