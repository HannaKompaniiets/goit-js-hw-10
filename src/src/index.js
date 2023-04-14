import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const url = 'https://restcountries.com';
const options = {
    name.official,
capital,
population ,
flags.svg,
languages
}


const input = document.querySelector('#search-box');

input.addEventListener('input', _.delay(getSearch, DEBOUNCE_DELAY));

function getSearch() {
    console.log(input.current.target.value);
}



fetchCountries(name){ 
fetch()

}




// _.delay(function(text) {
//   console.log(text);
// }, 1000, 'later');
// // => Logs 'later' after one second.