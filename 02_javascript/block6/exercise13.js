var bankAccount = {
total: 0,
withdraw: function(num1) {
	this.total -= num1;
	return this.total;
},

deposit: function(num2) {
	this.total+= num2;
	return this.total;
},

balance: function() {
	return this.total;
}
}


module.exports = {
    bankAccount
}