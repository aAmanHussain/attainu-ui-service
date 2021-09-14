import { environment } from './../config/environment';

export class SearchService {
    
    async search(term: string) {
        const queryParams = `term=${term}`;
        const token = localStorage.getItem('token');

        const response = await fetch(`${environment.searchAPI}?${queryParams}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return response.json();
    }
}