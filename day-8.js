// Advent of Code 2024 day 8

const input = `.....p..........................................O.
.................A.v..............n...............
............p....2.......K.....A..................
..............Q......................a....d...O...
..................................................
.p.................Q.......6h.....................
..................Kh..s.........n..........d......
..D.................v......K.................O....
....................A..v...s.f..6.a...U...........
..............................6n.........o........
.0...........................6h..............C.H..
.......k............0D.........f..................
.............Q...................8................
........k..2.......s.....C......f...U.............
.....5.................................n..i.d.....
.u................s...K..............V.......3....
...u...............................O.....R........
....2......................U.y...h................
..u....S......0B.........U....................C...
.......B.........9...S............................
.....k..X........c..S.....D.................oa...F
......5...b......X..9.....................C..F....
.P.......bk...........Q........D..................
.b..B.........................8..d........o.....V.
....P.............9...........f.c.................
..........u.......w.............y.......F........R
..B...........................y...........F...V...
....................................c.............
..................49..............................
......X.W0.......4A....................G..........
....................I...............e.............
..............4...p...S....r18.........q......G...
........b.....................N.1..i.........Y...3
.....P............Iw.....7........q.r...R..Y......
.E.......X....w........I.........y.1..Y....q.V.G..
.......I...........N......................e.......
.......................N.r..8.......q.......G.....
.....................WN................c..........
...................g............3.................
.............................1..........3x........
..............g...H.5...........r.................
.....g.................H......................Y...
.....................4.w.........x................
...E......g...P.......H.........i......e....x.....
......................W...............x....7......
......................................7..i........
..................................................
..E...............................................
..............E....W...........o..................
..................................................`;

// encode two non-negative integers as their Szudzik pair
function elegantPair(a, b) {
	return a >= b ? (a * a) + a + b : (b * b) + a;
}

/*
	build lists of coordinates of nodes for each frequency,
	then compare within each list by adding or subtracting the distance between each pair
	and add the resultant antinodes to a set if they're on the map
	(Szudzik pair so only unique antinodes are counted)
*/

const city = input.split(`\n`).map(row => row.split(``));
const xMax = city[0].length;
const yMax = city.length;
const nodes = {};
const antiNodes = {};
const uniqueAntiNodes = new Set();
const nodeRegex = /[A-Za-z\d]/;

for (let y = 0; y < yMax; y++) {
	for (let x = 0; x < xMax; x++) {
		const location = city[y][x];
		if (nodeRegex.test(location)) {
			nodes[location] ??= [];
			nodes[location].push({"x": x, "y": y});
		}
	}
}

for (const freq of Object.values(nodes)) {
	if (freq.length === 1) continue;

	for (let f1 = 1; f1 < freq.length; f1++) {
		for (let f2 = 0; f2 < f1; f2++) {
			const dist = {
				"x": freq[f2].x - freq[f1].x,
				"y": freq[f2].y - freq[f1].y,
			};
			[
				{
					"x": freq[f2].x + dist.x,
					"y": freq[f2].y + dist.y,
				},
				{
					"x": freq[f1].x - dist.x,
					"y": freq[f1].y - dist.y,
				},
			].forEach(anti => {
				if (
					anti.x >= 0
					&& anti.x < xMax
					&& anti.y >= 0
					&& anti.y < yMax
				) uniqueAntiNodes.add(elegantPair(anti.x, anti.y));
			});
		}
	}
};

console.log(`count of unique antinodes: ${uniqueAntiNodes.size}`);

/*
	as above, but instead of only checking once at node +- dist,
	check for each multiple of node +- (dist * count), where count starts from 0;
	stop checking for each pair at the first antinode that's off the map
*/

const uniqueResonantAntiNodes = new Set();

for (const freq of Object.values(nodes)) {
	if (freq.length === 1) continue;

	for (let f1 = 1; f1 < freq.length; f1++) {
		for (let f2 = 0; f2 < f1; f2++) {
			const dist = {
				"x": freq[f2].x - freq[f1].x,
				"y": freq[f2].y - freq[f1].y,
			};
			[freq[f2], freq[f1]].forEach(node => {				
				let i = 0;
				let offMap = false;
				while (!offMap) {
					const anti = {
						"x": node.x + dist.x * i,
						"y": node.y + dist.y * i,
					};

					if (
						anti.x >= 0
						&& anti.x < xMax
						&& anti.y >= 0
						&& anti.y < yMax
					) uniqueResonantAntiNodes.add(elegantPair(anti.x, anti.y));
					else offMap = true;

					i++;
				}

				// flip distances to negative for second pass
				dist.x *= -1;
				dist.y *= -1;
			});
		}
	}
};

console.log(`count of unique resonant antinodes: ${uniqueResonantAntiNodes.size}`);
