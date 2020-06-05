function model (action, obj, schema){
	var DB = []; 

	if(action !== 'add'){  
		return 'Missing action (operation) argument'
	}

	var newObj = {};      
// it's better to loop on the schema so we only will check the leys that are pernitted, if the obj has 100 of keys but schemao nly permits 3 there is no point to loop through the obj
for (key in schema){  
	if (key in obj && typeof obj[key] == schema[key].type)
	{
		newObj[key] = obj[key];
// if value type of obj is not as in schema it means it's either incorrect or empty so we add default if there is one
	}else if('default' in schema[key]) {
		newObj[key] = schema[key].default
	}
}

DB.push(newObj);

return DB;
}


module.exports = {
	model
}