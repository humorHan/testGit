var name = 'out';
console.log(123);
var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName();

obj.sayName.call();