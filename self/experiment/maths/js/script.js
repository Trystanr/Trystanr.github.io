function calc() {
	var a = document.getElementById("num").value;
	var b = document.getElementById("divisor").value;

	var arrVals = [2,3,4,5,6,7,8,9];
	var s = 10;

	console.log("Value: " + a);
	console.log("Divisor: " + b);

	var arrRes = combinationSumRecursive(arrVals, a);
	var arrResND = [];

	for (var i = arrRes.length - 1; i >= 0; i--) {
		if (!hasDuplicates(arrRes[i])) {
			if (arrRes[i].length == b) {
				arrResND.push(arrRes[i]);
			}
		} 
		// else {
		// 		arrResND.push(arrRes[i]);
		// }
	}

	console.log(arrResND);

	$("#resTable").empty();
	for (var i = arrResND.length - 1; i >= 0; i--) {
		console.log(arrResND[i]);

		var tr = $("<tr>");

		for (var n = arrResND[i].length - 1; n >= 0; n--) {
			tr.append($("<td>").append(arrResND[i][n]));
		}

		$("#resTable").append(tr);

	}


}


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function combinationSumRecursive(
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0,
) {
  if (remainingSum < 0) {
    // By adding another candidate we've gone below zero.
    // This would mean that the last candidate was not acceptable.
    return finalCombinations;
  }

  if (remainingSum === 0) {
    // If after adding the previous candidate our remaining sum
    // became zero - we need to save the current combination since it is one
    // of the answers we're looking for.
    finalCombinations.push(currentCombination.slice());

    return finalCombinations;
  }

  // If we haven't reached zero yet let's continue to add all
  // possible candidates that are left.
  for (let candidateIndex = startFrom; candidateIndex < candidates.length; candidateIndex += 1) {
    const currentCandidate = candidates[candidateIndex];

    // Let's try to add another candidate.
    currentCombination.push(currentCandidate);

    // Explore further option with current candidate being added.
    combinationSumRecursive(
      candidates,
      remainingSum - currentCandidate,
      finalCombinations,
      currentCombination,
      candidateIndex,
    );

    // BACKTRACKING.
    // Let's get back, exclude current candidate and try another ones later.
    currentCombination.pop();
  }

  return finalCombinations;
}