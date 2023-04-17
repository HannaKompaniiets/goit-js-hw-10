export default function createMarkupList({ name, flags }) {
  const { official } = name;
  const { png } = flags;
  return ` 
          <li class = "country-list-item"> <img width="40px" height="30px" src=${png}>
          <p> ${official}</p> 
          </li>     
        `;
}
