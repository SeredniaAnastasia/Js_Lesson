const btns = document.querySelectorAll('.btn');
const elements = document.querySelectorAll('.flex .box');
const elements2 = document.querySelectorAll('.flex1 .box');
const reset = document.querySelector('.reset');
console.log(elements)

function removeGreen (){
    for(let h=0; h< elements.length; h++){
        elements[h].classList.remove('green')
        elements2[h].classList.remove('green')
    }
}
//цикил forEach поміщає по черзі елементи з масиву btns в змінну e
btns.forEach((e, i)=>{
    //addEventListener до елемента e прикріплює обробник подій
    e.addEventListener('click', ()=>{
        removeGreen();
       for(let h=0; h <= i; h++){
            elements[h].classList.add('green')
       }
       
       for(let h = i; h < elements2.length; h++){
            elements2[h].classList.add('green')
        }

    })
})

reset.addEventListener('click', removeGreen)
