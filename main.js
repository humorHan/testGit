var name = 'out';

var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};
console.log(2);

obj.sayName();

obj.sayName.call();