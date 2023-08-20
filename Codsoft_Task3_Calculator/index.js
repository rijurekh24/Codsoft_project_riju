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

function mod(){
    var splitScreen = screen.value.split('%',2);
    if(splitScreen.length > 1){
        screen.value=eval(splitScreen[0] + '/100*' + splitScreen[1]);
    }else{
        screen.value=eval(screen.value);
    }
}