const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

var fruits = ['apple', 'banana', 'strawberry', 'kiwi', 'guava', 'durian', 'dragonfruit', 'kale', 'spinach','carrot', 'lychee', 'mango', 'melon', 'honeydew'];

var makeSmoothies = (fruit, secondFruit = null) => {
	return new Promise((resolve, reject) => {
		if (fruits.includes(fruit.toLowerCase(fruit))) {
			if (!secondFruit)
				if (fruit[0].match(/[aeiou]/i)) resolve(`You made an ${fruit} smoothie!`);
				else resolve(`You made a ${fruit} smoothie!`);
			else if (fruits.includes(secondFruit.toLowerCase()))
				if (fruit[0].match(/[aeiou]/i))
					resolve(
						`You made an ${fruit[0].toLowerCase()}${fruit.slice(
							1,
							fruit.length
						).toLowerCase()} and ${secondFruit[0].toLowerCase()}${secondFruit.slice(1, secondFruit.length).toLowerCase()} smoothie!`
					);
				else
					resolve(
						`You made a ${fruit[0].toLowerCase()}${fruit.slice(
							1,
							fruit.length
						).toLowerCase()} and ${secondFruit[0].toLowerCase()}${secondFruit.slice(1, secondFruit.length).toLowerCase()} smoothie!`
					);
			else {
				reject(
					`Sorry, ${secondFruit[0].toLowerCase()}${secondFruit.slice(
						1,
						secondFruit.length
					).toLowerCase()} was not found on our menu.`
				);
			}
		} else reject(`Sorry, ${fruit[0].toLowerCase()}${fruit.slice(1, fruit.length).toLowerCase()} was not found on our menu.`);
	});
};

var inputs = new Array();
var count = 0;

rl.question('Enter one or two fruits, separated by a space: ', answer => {
	if (answer.match(/\s/)) {
        count = answer.match(/\s/g).length;
        if(count === 1){
		var userInput = answer.split(' ');
		inputs = userInput;

		makeSmoothies(inputs[0], inputs[1])
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
            });
        }
        else throw("Please enter only one or two menu items.")
	} else {
		makeSmoothies(answer)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
	rl.close();
});
