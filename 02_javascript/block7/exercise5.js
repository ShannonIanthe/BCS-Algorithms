let shuffle=(a)=>{
a.forEach((e,i)=>{
    let random = Math.floor(Math.random() * a.length)
temp = a[random]    
a[random] = e 
a[i]= temp 
})
return a 
}

module.exports = {
    shuffle
}