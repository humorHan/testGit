var name = 'out';

var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};
console.log(222);

obj.sayName();

obj.sayName.call();