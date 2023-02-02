const obj = {
	name: "Bruce",
	age: 25,
	"is-admin": false,
	sayHello: function(){
		console.log(`Hello i'm ${this.name}`);
	},
}

obj.hobby = "jump";
delete obj.hobby;

console.log(obj.name);
console.log(obj["is-admin"]);
console.log(obj);
obj.sayHello();

// Object.keys() .values() .entries()