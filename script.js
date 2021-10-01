let greet = document.querySelector('h1')
    div = document.querySelector('asd')
 
    
data()

    function data(){
        let time = new Date();
        console.log(time);
        if( time <= 12){
            greet.innerHTML = 'Добрый день' 
        }else if(time >= 12){
            greet.innerHTML = 'Добрый вечер'
        }
    }



    