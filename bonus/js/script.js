const button = document.querySelector('button');

button.addEventListener("click", function(){

    const ul = document.querySelector('.quadrati');
    
    // reset-ul
    ul.innerHTML='';


    

    for(let i=1; i<= 100; i++){
        // numero-random
        const rand= Math.floor(Math.random() * 101);
        const li = document.createElement("li");
        li.append(rand);
        li.classList.add("box");
        ul.append(li);


        if( rand % 15 == 0){
            
            li.innerHTML ="fizzbuzz"
            li.classList.add("red")
        }else if( rand % 5 == 0){
            
            li.innerHTML ="buzz"
            li.classList.add("yellow")
        } else if( rand % 3 == 0){
            console.log('fizz');
            li.innerHTML ="fizz"
            li.classList.add("green")
        }
        console.log(i);
        li.classList.add("blue")
        
    }
});



