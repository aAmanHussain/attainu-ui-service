import jwt_decode from 'jwt-decode';

export const isLoggedIn = () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User is not authenticated');
        }

        const decodedToken: any = jwt_decode(token);
        if (!decodedToken || !decodedToken.exp) {
            throw new Error('Token is not valid');
        }

        const isValid = Math.floor(Date.now()/1000) < decodedToken.exp;
        if (!isValid) {
            localStorage.removeItem('token');
        }
        
        return isValid;
    } catch (ex) {
        return false;
    }
};