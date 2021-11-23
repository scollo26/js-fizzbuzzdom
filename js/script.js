
// variabile div-contenitore
const container = document.querySelector('.container');

for(let i=1; i<=100; i++){
    // creazione-div
    const div = document.createElement('div');
    // contatore-dentro div
    div.append(i);
    // classe-box-div
    div.classList.add('box');
    // div-dentro-contenitore
    container.append(div);

    if( i % 15 == 0){
    // stampa-fizzbuzz
    div.innerHTML ="fizzbuzz";
    // classe-red-a-div
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

} 