function fetchFligths(from) {
	const graph = {
		"A": ["B", "D"],
		"B": ["C", "N", "Z"],
		"D": ["E", "F"],
		"F": ["S"]
	}
	const fligths = graph[from];
	if (fligths && fligths.length) {
		return Promise.resolve(fligths);
	}
	return Promise.reject();
}

async function findPath(from, to, fetchFligths) {
	const checked = [];

	function findPromise(currentFrom) {
		return new Promise((res, rej) => {
			checked.push(currentFrom);
			fetchFligths(currentFrom)
				.then((fligths => {
					const notChecked = fligths.filter(item => !checked.includes(item));
					if (!notChecked.length) {
						rej();
					}
					if (notChecked.includes(to)) {
						res([currentFrom, to]);
					}
					Promise.any(notChecked.map(function (next) {
						return findPromise(next);
					}))
						.then(function ([...data]) {
							res([currentFrom, ...data]);
						})
						.catch(() => rej())
				}))
				.catch(() => {
					rej();
				})

		});

	};


	findPromise(from)
		.then(value => console.log('value', value))
		.catch(err => console.log('err', err))
}


// findPath("A", "N", fetchFligths);
findPath("A", "N", fetchFligths);
