import './css/styles.css';
import _debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { RestcountriesAPI } from './functions/fetchCountries';
import {createMarkup} from './functions/createMarkup';

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const restcoutriesApi = new RestcountriesAPI();

const input = document.querySelector('#search-box');

input.addEventListener('input', _debounce(onFetch, DEBOUNCE_DELAY));

function onFetch(event) {
  const countryNames = event.target.value.trim();
  if (countryNames === '') {
    resetInfo();
    return;
  }

  function resetInfo() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  }

  // return fetch(
  //   `https://restcountries.com/v3.1/name/${countryNames}?fields=${searchParams}`
  // )
  //   .then(response => response.json())
  //   .then(data => {

  //     return createMarkup(data);
  //   }
  //   )
  //   .catch((error) => {
  //     Notiflix.Notify.failure(
  //       'Oops, there is no country with that name.');
  //   })

  restcoutriesApi
    .fetchCountries(countryNames)
    .then(data => {
        return createMarkup(data);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
}
  