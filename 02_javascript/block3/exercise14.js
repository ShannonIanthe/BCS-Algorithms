
function budgetTracker(expenses) {
    var average = 0;
    expenses.forEach(element => {
        average = element + average;
        average++;
        
    }); return average
}

module.exports = {
    budgetTracker
}