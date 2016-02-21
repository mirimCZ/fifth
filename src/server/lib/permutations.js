
export default function permutations(list)
{
	// Empty list has one permutation
	if (list.length == 0)
		return [[]];


	var result = [];

	for (var i=0; i<list.length; i++)
	{
		// Clone list (kind of)
		var copy = Object.create(list);

		// Cut one element from list
		var head = copy.splice(i, 1);

		// Permute rest of list
		var rest = permutations(copy);

		// Add head to each permutation of rest of list
		for (var j=0; j<rest.length; j++)
		{
			var next = head.concat(rest[j]);
			result.push(next);
		}
	}

	return result;
}
