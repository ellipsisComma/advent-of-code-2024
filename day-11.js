// Advent of Code 2024 day 11

const input = `5910927 0 1 47 261223 94788 545 7771`;

// replace stones with a new array according to the three input rules
// find digits by dividing the number by 10 until reaching a number that's less than 1
// could also find number of digits by using .toString().length (about 67% of the speed)
// or by using log10 (about 55% of the speed)

let stones = input.split(` `).map(n => parseInt(n));

function divideToDigits(n) {
	if (n === 0) return 1;

	let count = 0;
	while (n >= 1) {
		count++;
		n /= 10;
	}

	return count;
}

function blink() {
	const newStones = [];

	stones.forEach(stone => {
		if (stone === 0) newStones.push(1);
		else if (divideToDigits(stone) % 2 === 0) {
			const stoneString = stone.toString();
			newStones.push(
				parseInt(stoneString.slice(0, stoneString.length / 2)),
				parseInt(stoneString.slice(stoneString.length / 2)),
			);
		} else {
			newStones.push(stone * 2024);
		}
	});

	return newStones;
}

for (let i = 0; i < 25; i++) stones = blink();

console.log(`number of stones: ${stones.length}`);

// stones change independently, so we can just process them in bulk
// if there are two 0s, there will be two 1s
// if there are two 1s, there will be two 2024s
// if there are two 2024s, there will be two 20s and two 24s
// instead of storing each stone's number separately, store a count of stones with each number

let numbers = {
	0: 0,
	1: 0,
};

input.split(` `).map(n => parseInt(n)).forEach(stone => {
	numbers[stone] ??= 0;
	numbers[stone]++;
});

function blink2() {
	const newNumbers = structuredClone(numbers);

	// all 0s become 1s
	newNumbers[0] = 0;
	newNumbers[1] += numbers[0];

	Object.keys(numbers).forEach(n => {
		if (n > 0) {
			if (divideToDigits(n) % 2 === 0) {
				const stoneString = n.toString();
				const firstHalf = parseInt(stoneString.slice(0, stoneString.length / 2));
				const secondHalf = parseInt(stoneString.slice(stoneString.length / 2))
				newNumbers[firstHalf] ??= 0;
				newNumbers[firstHalf] += numbers[n];
				newNumbers[secondHalf] ??= 0;
				newNumbers[secondHalf] += numbers[n];
				newNumbers[n] -= numbers[n];
			} else {
				newNumbers[n * 2024] ??= 0;
				newNumbers[n * 2024] += numbers[n];
				newNumbers[n] -= numbers[n];
			}
		}
	});

	return newNumbers;
}

for (let i = 0; i < 75; i++) numbers = blink2();

console.log(`number of stones: ${Object.values(numbers).reduce((acc, s) => acc + s, 0)}`);
