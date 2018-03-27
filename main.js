var name = 'out';
var obj = {
  name: 'in',
  sayName: function () {
    console.log(this.name);
  },
};

console.log('str');

obj.sayName();

obj.sayName.call();
