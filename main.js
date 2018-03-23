var name = 'out';
var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};

console.log('master');

obj.sayName();

obj.sayName.call();