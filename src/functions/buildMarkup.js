
export default function buildMarkup({ name, capital, population, flags, languages }) {
  const { official } = name;
  const { png } = flags;
  return `<div class = "country">
      <li> <img width="80px" height="60px" src=${png}></span></li>
      <li class="country-info-item"> <span class="country-name">${official}</span></li></div>
      <li class="country-info-item"> Capital: <span class = "country-info-value">${capital}</span></li>
      <li class="country-info-item"> Population: <span class = "country-info-value">${population}</span></li>
      <li class="country-info-item"> Language(s): <span class = "country-info-value">${Object.values(
        languages
      ).join(', ')}</span></li>
        `;
}
