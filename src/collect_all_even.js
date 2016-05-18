'use strict';

function collect_all_even(collection) {
	var array = [];
	for (var i in collection) {
		if (collection[i] % 2 == 0)
			array.push(collection[i]);
	}
	return array;
}

module.exports = collect_all_even;
