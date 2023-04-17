export class RestcountriesAPI {
    URL = 'https://restcountries.com/v3.1';
    // const searchParams = 'name,capital,population,flags,languages';
        
    fetchCountries(name) {
        return fetch(`${this.URL}/name/${name}?fields=name,capital,population,flags,languages`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }

                return response.json();
            });
    }
        
}