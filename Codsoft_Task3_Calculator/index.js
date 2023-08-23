var screen =document.querySelector('#display');
var btn=document.querySelectorAll('.btn');


for(item of btn)
{
    item.addEventListener('click',(e)=>{
         btntext=e.target.innerText;

        if(btntext=='x')
        {
            btntext='*';
        }

        screen.value+=btntext;
    });
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function percent(){
    const val=parseFloat(screen.value);
    screen.value=val/100;
}
