
const sockPairs = ((n, ar) => {

    let pair = 0;
    ar = ar.sort((a,b)=> a-b)
    
    for(let i=0;i<ar.length-1;i++){       
        if(ar[i]==ar[i+1]){
            pair++;
            i=i+1;
        }
    }
    return pair;
});
module.exports = {
    sockPairs: sockPairs
}