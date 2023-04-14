import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const url = 'https://restcountries.com/v3.1';
const options = {
    official,
    capital,
    population ,
    flags,
    languages
}


const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
input.addEventListener('input', _.delay(getSearch, DEBOUNCE_DELAY));

function getSearch(name) {
    const name = (input.current.target.value);
}



fetchCountries(name){ 
    fetch(url, options)
        .then(response => {
            return https://restcountries.com/v3.1/name/{name}
        })
        .then(data => {
            const markup = `
            <li> https://restcountries.com/v3.1/name/{'official'}</li>
            <li> https://restcountries.com/v3.1/name/{'capital'}</li>
            <li> https://restcountries.com/v3.1/name/{'population'}</li>
            <li> https://restcountries.com/v3.1/name/{'flags'}</li>
            <li> https://restcountries.com/v3.1/name/{'languages'}</li>
             `
            countryList.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    // Error handling
  });

}




// _.delay(function(text) {
//   console.log(text);
// }, 1000, 'later');
// // => Logs 'later' after one second.