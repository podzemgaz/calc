const cont  = document.getElementById('container');

const input = document.getElementById('input');

let lastType = null;

// but1.addEventListener('click', () => {
//     input.value += "1";
// });




function getBut(num) {
    return document.getElementById(num);
}

function inputAppend(val) {
    input.value += val;
}

function inputErase() {
    input.value = '';
}

function inputBack() {
    input.value = input.value.slice(0, -1);
}

function equation() {
    let index = input.value.lastIndexOf('=');

    console.log(input.value.substring(index + 1));
    input.value += "=" + eval(input.value.substring(index + 1));
}

cont.addEventListener('click', (e) => {
    const type = e.target.dataset.type;
    console.log(type);
    const val = e.target.value;
    switch(type) {
        case 'num' || 'operand':
            inputAppend(val);
            break;
        case 'operand':
            if (lastType === 'operand') {
                inputBack();
            }
            inputAppend(val);
            break;
        case 'cancel':
            inputErase();
            break;
        case 'back':
            inputBack();
            break
        case 'equ':
            try {
                console.log('try')
                 equation();
            } catch (error) {
                input.classList.remove('invalid');
                setTimeout(() => {
                    input.classList.add('invalid');
                }, 0);
                console.log(error);
            }
            break;
        default:
            break;

    }

    lastType = type;
})
