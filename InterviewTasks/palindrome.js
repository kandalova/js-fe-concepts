/*
-Казак
-Madam, I'm Adam

O(1)

*/

function isEqual(str1, str2) {
	return str1.toLowerCase() === str2.toLowerCase()
}

function isLetter(str) {
	return /\w/.test(str);
	// return str.toLowerCase() !=== str.toupperCase()
}

function isPalyndrom(str) {
	let start = 0;
	let end = str.length - 1;

	while (start < end) {
		const startChar = str[start];
		const endChar = str[end];

		if (!isLetter(startChar)) {
			start += 1;
			continue;
		}
		if (!isLetter(endChar)) {
			end -= 1;
			continue;
		}
		if (!isEqual(startChar, endChar)) {
			return false;
		}

		start += 1;
		end -= 1;
	}

	return true;
}


console.log(isPalyndrom('Hell \' lleh'))
