//set initial val
let count = 0;

// selection of val annd btn
const value= document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('increase') ){
            count++;
        } else if (styles.contains("reset")){
            count=0;
        } else count--;
        value.textContent = count;
        if(count>0){
            value.style.color = 'green';
            document.body.style.backgroundColor = "whitesmoke";
        }
        if(count<0){
            value.style.color = 'red';
            document.body.style.backgroundColor = "whitesmoke";
        }
        if(count==0){
            value.style.color = 'black';
            document.body.style.backgroundColor = 'red'
        }
    })
})