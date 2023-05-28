import { validate } from "validate.js";

export const validateString = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false
        }
    };

    if (value !== "") {
        constraints.format = {
            pattern: '[a-z]+',
            flags: 'i',
            message: 'Solo puede contener letras',
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult && validationResult[id]
}

export const validateEmail = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: 'no puede estar en blanco'
        }
    };

    if (value !== "") {
        constraints.email = true
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult && validationResult[id]
}

export const validatePassword = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false
        }
    };

    if (value !== "") {
        constraints.length = {
            minimum: 6,
            message: 'debe contener al menos 6 caracteres'
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult && validationResult[id]
}