// custom Input

let getInputMain = document.querySelectorAll('input');

function validate(input) {
    if (input.value) {
        input.classList.add('fill-bg');
    } else {
        input.classList.remove('fill-bg');
    }
}
getInputMain.forEach((input) => {
    input.oninput = function() {
        validate(input)
    }
})


function showResultTrue(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('false');
    message.classList.add('true');
    message.innerHTML = `Kết quả : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;

}

function showResultFalse(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('true');
    message.classList.add('false');
    message.innerHTML = `Thông báo : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;
}


function checkSNT(n) {
    let ischeck = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            ischeck = false;
        }
    }
    return ischeck;
}


const quesBtn = document.querySelectorAll('.question-btn')
console.log('PhongThanh 🚀 ~> quesBtn', quesBtn)

const quesall = document.querySelectorAll('.question')
console.log('PhongThanh 🚀 ~> quesall', quesall)
quesBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let parentThis = this.closest('.question')
        quesall.forEach(ques => {
            if (parentThis !== ques) {
                ques.classList.remove('show')
            }
        })
        parentThis.classList.toggle('show')
    })
})

// EXE

var array = [];

function addArr() {
    const errorMessage = document.getElementById('errorMessage')
    const valueArr = document.getElementById('addArr').value;
    array.push(+valueArr);
    showResultTrue(errorMessage, array, '[', '', ']');

    console.log(array)

}

// EXE1
function bt1() {
    const errorMessage1 = document.getElementById('errorMessage1')
    let sum = 0;
    for (let value of array) {
        sum += +value
    }
    showResultTrue(errorMessage1, sum, 'Tổng số dương = ');
}

// EXE2
function bt2() {
    const errorMessage2 = document.getElementById('errorMessage2')
    let count = 0;
    for (let value of array) {
        if (+value > 0) {
            count += 1
        }
    }
    showResultTrue(errorMessage2, count, 'Số dương: ');
}


// EXE3
function bt3() {
    const errorMessage3 = document.getElementById('errorMessage3')
    if (array.length !== 0) {
        let min = +array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > +array[i]) {
                min = +array[i];
            }
        }
        showResultTrue(errorMessage3, min, 'Số nhỏ nhất: ');
    } else {
        showResultFalse(errorMessage3, 'Hãy thêm phần tử vào mảng trước ! ');
    }

}


// EXE4
function bt4() {
    const errorMessage4 = document.getElementById('errorMessage4')
    var newarr = []
    for (let value of array) {
        if (value > 0) {
            newarr.push(value);
        }
    }
    if (newarr.length !== 0) {
        let min = +newarr[0];
        for (let i = 0; i < newarr.length; i++) {
            if (min > +newarr[i]) {
                min = +newarr[i];
            }
        }
        showResultTrue(errorMessage4, min, 'Số nhỏ nhất là: ');
    } else {
        showResultFalse(errorMessage4, 'Không có số dương !');
    }
}


// EXE5
function bt5() {
    const errorMessage5 = document.getElementById('errorMessage5')
    let eventNum;
    for (let num of array) {
        if (+num % 2 == 0) {
            eventNum = num;
            showResultTrue(errorMessage5, eventNum, 'Số chẵn cuối cùng: ');
        } else {
            showResultFalse(errorMessage5, -1);
        }
    }

}

// EXE6
function bt6() {
    const errorMessage6 = document.getElementById('errorMessage6')

    const getIndex1 = document.getElementById('exe6-num1').value
    const getIndex2 = document.getElementById('exe6-num2').value
    let temp;
    if (getIndex1 < array.length && getIndex2 < array.length) {
        temp = array[getIndex1];
        array[getIndex1] = array[getIndex2];
        array[getIndex2] = temp;
        showResultTrue(errorMessage6, array, 'Mảng sau khi đổi vị trí: [', '', ']');
    } else {
        showResultFalse(errorMessage6, 'Vị trí không có phần tử');
    }
    console.log(array)
}

// EXE7
function bt7() {
    const lengthArr = array.length;
    const errorMessage7 = document.getElementById('errorMessage7')
    if (array.length !== 0) {
        for (let i = lengthArr - 1; i >= 0; i--) {
            console.log('PhongThanh 🚀 ~> lengthArr', lengthArr)
            for (let j = 1; j <= i; j++) {
                if (array[j - 1] > array[j]) {
                    let temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        showResultTrue(errorMessage7, array, 'Mảng sau khi sắp xếp: [', '', ']');
    } else {
        showResultFalse(errorMessage7, 'Hãy thêm phần tử vào mảng trước !');
    }
}

// EXE8

function bt8() {
    const errorMessage8 = document.getElementById('errorMessage8')

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 2) {
            let isCheck = checkSNT(array[i])
            if (isCheck) {
                showResultTrue(errorMessage8, array[i], 'Số nguyên tố đầu tiên: ');
                break;
            }
        } else {
            showResultTrue(errorMessage8, -1, );
        }
    }
}


// EXE9
var newArray = []

function bt9add() {
    const errorMessage9 = document.getElementById('errorMessage9add')

    const value = +document.getElementById('exe9-num1').value;
    newArray.push(value);
    console.log(newArray);
    showResultTrue(errorMessage9, newArray, '[', '', ']');

}

function bt9() {
    const errorMessage9 = document.getElementById('errorMessage9')
    let count = 0;
    for (let num of newArray) {
        if (Number.isInteger(num)) {
            count += 1;
        }
    }
    showResultTrue(errorMessage9, count, 'Số nguyên: ');
}

// EXE10

function bt10() {
    const errorMessage10 = document.getElementById('errorMessage10')

    let posi = 0;
    let nega = 0;
    for (let num of array) {
        if (num !== 0) {
            if (num > 0) {
                posi += 1
            } else {
                nega += 1;
            }
        }
    }
    if (posi > nega) {
        showResultTrue(errorMessage10, '>', 'Số dương', '', 'Số âm');
    } else if (posi < nega) {
        showResultTrue(errorMessage10, '<', 'Số dương', '', 'Số âm');
    } else {
        showResultTrue(errorMessage10, '=', 'Số dương', '', 'Số âm');

    }
}