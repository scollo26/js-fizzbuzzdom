const button = document.querySelector('button');

button.addEventListener("click", function(){

    const ul = document.querySelector('.quadrati');


    

    for(let i=1; i<= 100; i++){
        const li = document.createElement("li");
        li.append(i);
        li.classList.add("box");
        ul.append(li);


        if( i % 15 == 0){
            
            li.innerHTML ="fizzbuzz"
            li.classList.add("red")
        }else if( i % 5 == 0){
            
            li.innerHTML ="buzz"
            li.classList.add("yellow")
        } else if( i % 3 == 0){
            console.log('fizz');
            li.innerHTML ="fizz"
            li.classList.add("green")
        }
        console.log(i);
        li.classList.add("blue")
        
    }
});



