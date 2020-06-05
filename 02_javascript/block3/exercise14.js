function budgetTracker(arr) {
	// we are going to work with numbers so we should initialize total as a number, otherwise it's undefined and not working with math
var total = 0;
for (var i = 0; i<arr.length; i++) {
debugger
	// we want to accumulate values in total for every loop iteration which means that every time we are looping value of total is current total + new value
total = total + Number( arr[i] )
}
// once you have your total you divide it by number of days which is length of array and convert to dollars after
let average = (total/arr.length) * 0.0089
// And we round it up
return Math.round( average );
}

module.exports = {
    budgetTracker
}