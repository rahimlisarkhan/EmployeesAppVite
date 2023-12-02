const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6,8}$/;

export const isValidEmail = (email) => emailRegex.test(email);
export const isValidPhone = (phone) => phoneRegex.test(phone);
