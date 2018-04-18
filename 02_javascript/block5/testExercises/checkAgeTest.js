var checkAgeTest = (m, d) =>{
	if(m > 12 || d > 31 || m < 1 || d < 1) return "Error invalid data provided"
	if (new Date(`${m}/${d}/${2018}`).toDateString() == new Date().toDateString())return "happy birhtday!"
	var diff =  new Date(`${m}/${d}/${2018}`) - new Date() 
	if(diff < 1)return "Sorry your birthday is passed for this year"
	var days = Math.floor(diff / (1000 * 60 * 60 * 24))
	var months = days >= 30 ? days/30 : null
	var x =  `${parseInt(months)}`
	var y = 0
	if(String(months).split('.')[1]){
		y =   parseInt(`${String(`.${Number(String(months).split('.')[1].substring(0,2))}`) * 30 }`)
	}
	
	return `there are ${!isNaN(x) ? x :0} months and ${y ? y : days} days until your birthday `
}

module.exports = {
    checkAgeTest
}