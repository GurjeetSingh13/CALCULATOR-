let dis = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DE') {
            string = string.substring(0, string.length - 1);
            dis.value = string;
        } else if(e.target.innerHTML == 'AC'){
            string = '';
            dis.value = string;
        }
         else if(e.target.innerHTML == '='){
            string = eval(string);
            dis.value = string;
        }
    else {
            string += e.target.innerHTML;
            dis.value = string;
        }


        // console.log(e.target.innerHTML);
    })
});