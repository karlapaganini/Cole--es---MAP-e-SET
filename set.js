function uniqueElements(array) {
	let unico = new Set(array);
	return [...unico];
}

const arr = [80, 22, 40, 7, 598, 6587, 2365, 8];

console.log(uniqueElements(arr));