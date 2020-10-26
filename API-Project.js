// the fetch api

const Base = 'https://cat-fact.herokuapp.com/facts';

function fetchResults(){
fetch (Base)
.then(Response => Response.json())
.then(json => {
    console.log(json)

})}
fetchResults()

// attempt at fetching the random cat fact

function shuffle(Base) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
