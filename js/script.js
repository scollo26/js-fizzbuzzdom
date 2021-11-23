
const ul = document.querySelector('.quadrati');




const container = document.querySelector('.container');

for(let i=1; i<=100; i++){
    const div = document.createElement('div');
    div.append(i);
    div.classList.add('box');
    container.append(div);

        if( i % 15 == 0){
        
        div.innerHTML ="fizzbuzz";
        div.classList.add("red");
        }else if( i % 5 == 0){
                
        div.innerHTML ="buzz";
        div.classList.add("yellow");
        } else if( i % 3 == 0){
        div.innerHTML ="fizz";
        div.classList.add("green");
        }
        console.log(i);
        div.classList.add("blue");

    div.classList.add("blue");
} 