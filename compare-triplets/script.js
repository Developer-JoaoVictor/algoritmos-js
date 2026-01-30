const a = [5 ,6 ,7]
const b = [3, 6 ,10]

function compareTriplest(a,b){
    let alice = 0;
    let bob = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice++
        } else if (b[i] > a[i]){
            bob++
        }
    }

    return [alice,bob]
}

compareTriplest(a,b)