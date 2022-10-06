const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX = /^([A-Za-z0-9_]{4,30})$/;

const EMAIL_ERROR_MESSAGE = 'Enter a valid email in the joe@abc.com format';
const PASSWORD_ERROR_MESSAGE = 'Password length must not be less than 4 characters and greater than\n' +
    ' 30 characters and can only contain letters, numbers and underscores';

class UserValidator {
    static validateEmail(email) {
        let errorMessage = '';
        if (!EMAIL_REGEX.test(email)) {
            errorMessage = EMAIL_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validatePassword(password) {
        let errorMessage = '';
        if (!PASSWORD_REGEX.test(password)) {
            errorMessage = PASSWORD_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validateEmailAndPassword(email, password) {
        let emailErrorMessage = this.validateEmail(email);
        let passwordErrorMessage = this.validatePassword(password);
        return {
            emailErrorMessage,
            passwordErrorMessage
        }
    }
}

export default UserValidator;