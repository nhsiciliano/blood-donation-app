import {
    validateString,
    validateEmail,
    validatePassword
} from '../ValidationConstraints'

export const validateInput = (inputId, inputValue) => {
    if (
        inputId === 'fullName' ||
        inputId === 'bloodType' ||
        inputId === 'location' ||
        inputId === 'phoneNumber'
    ) {
        return validateString(inputId, inputValue)
    } else if (inputId === 'email') {
        return validateEmail(inputId, inputValue)
    } else if (inputId === 'password') {
        return validatePassword(inputId, inputValue)
    }
}