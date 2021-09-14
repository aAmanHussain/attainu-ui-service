import { environment } from './../config/environment';

export class UserService {
    url = environment.searchAPI;

    async signUp(data: any) {
        const response = await fetch(environment.signUpAPI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        
        return response.json();
    }

    async signIn(data: any) {
        const response = await fetch(environment.signInAPI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        
        return response.json();
    }
}