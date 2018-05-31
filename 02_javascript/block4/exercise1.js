var check_who_is_older = (name1,age1,name2,age2) =>{
	let sentence = (n, a, n2, a2) =>{
		return `${n} age ${a} is older than ${n2} age ${a2}`
    }
	if (age1 > age2) return sentence(name1, age1, name2, age2)
	if (age2 > age1) return sentence(name2, age2, name1, age1)
	return "they are of the same age"
	
}


    module.exports = {
    check_who_is_older
}