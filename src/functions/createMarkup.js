import buildMarkup from "./buildMarkup";
import createMarkupList from "./createMList";

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function createMarkup(data) {
   if (data.length === 1) {
    const markup = data
      .map(data => {
        return buildMarkup(data);
      })
       .join('');
     countryInfo.innerHTML = markup;
     countryList.innerHTML = '';
  } else if (data.length < 10) {
    const markup = data
      .map(data => {
        return createMarkupList(data);
      })
      .join('');
    countryList.innerHTML = markup;
  } else {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}





