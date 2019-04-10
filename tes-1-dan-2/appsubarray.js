var A = [1, 2, 0, 5, 8, 1, 3];
var B = [3, 0, 5, 1];

function checkIsSubArray(a, b) {
var count = 0;
    for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) > -1) {
            count++;
        }
    }

    if (count == b.length) {
        return true;
    }
    
    return false;
}

console.log(checkIsSubArray(A,B));