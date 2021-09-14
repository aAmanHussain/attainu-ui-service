export const signUpFormItems = [
    {
        label: 'First Name',
        type: 'text',
        name: 'firstName',
        placeholder: 'Enter the first name',
        required: true
    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'lastName',
        placeholder: 'Enter the last name',
        required: true
    },
    {
        label: 'Username',
        type: 'text',
        name: 'username',
        placeholder: 'Enter the username',
        required: true
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter the email',
        required: true
    },
    {
        label: 'Phone Number',
        type: 'tel',
        name: 'phoneNumber',
        placeholder: 'Enter the phone number',
        required: true
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter the password',
        required: true
    },
    {
        label: 'Confirm Password',
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Re-enter the password',
        required: true
    }
];

export const signUpButton = { type: 'submit', value: 'SIGN UP' };