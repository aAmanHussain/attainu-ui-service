export const isPayloadValid = (formItems: any[], userDetails: any): boolean => {
    const isValid = formItems
    .filter(({ required }) => required)
    .every(({ name }) => userDetails && userDetails[name]);

    return isValid;
};