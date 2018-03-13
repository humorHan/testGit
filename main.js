var name = 'out';
var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName();

obj.sayName.call();

console.log('test end');