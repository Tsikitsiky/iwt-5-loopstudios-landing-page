console.log('it works');

function* generator() {
    let num = 1;
    while(true) 
    yield num++;
}

const gen = generator();
console.log(gen.next().value); 
console.log(gen.next().value); 