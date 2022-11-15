function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

function printArray(arr, size) {
    for (let i = 0; i < size; ++i) {
        document.getElementById('screen_1').innerHTML += arr[i] + " ";
        console.log(arr[i] + " ")
    }
}

function clearScreen(divId) {
    document.getElementById(divId).innerHTML = "";
}

var arr1 = [14, 12, 3242, 131, 3, 43, 6532, 24, 64, 33, 5, 7, 654, 11, 6, 0, 36, 74, 23, 44];
var arr1_size = arr1.length;
