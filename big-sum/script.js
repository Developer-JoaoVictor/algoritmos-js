let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    console.log(ar.reduce((acc, curr) => acc + curr))
}

aVeryBigSum(ar)