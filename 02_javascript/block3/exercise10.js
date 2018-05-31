var twoArrays = (a , a2 ) => {
    let count = 0;
    a.map((ele, i)=>{
        ele == a2[i] ? count++ : null;
    })
    return count;
}
module.exports ={
    twoArrays
}