export enum UserType {
    restaurant = 'restaurant',
    customer = 'customer'
}

export interface User {
    firstName?: string;
    lastName?: string;
    username?: string;
    password?: string;
    email?: string;
    phoneNumber?: number;
    userType?: UserType;
}