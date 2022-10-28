const CERTIFICATE_NAME_REGEX = /^([A-Za-z0-9_ ]{6,30})$/;
const CERTIFICATE_DESCRIPTION_REGEX = /^([A-Za-z0-9_ ]{12,1000})$/;
const TAG_NAME_REGEX = /^(#[A-Za-z0-9_]{3,15})$/;

const NAME_ERROR_MESSAGE = 'Title length must not be less than 6 and greater than\n' +
    ' 30 characters and can only contain letters, numbers and underscores';
const DESCRIPTION_ERROR_MESSAGE = 'Description length must not be less than 12 and greater than\n' +
    ' 1000 characters and can only contain letters, numbers and underscores';
const PRICE_ERROR_MESSAGE = 'Price must be a number or float and be greater than 0';
const DURATION_ERROR_MESSAGE = 'Duration must be a number. 0 – indicates this is an infinite certificate';
const TAG_ERROR_MESSAGE = 'Tag length must not be less than 3 and greater than\n' +
    ' 15 characters, must start with # and can only contain letters, numbers and underscores';

class CertificateValidator {
    static validateName(name) {
        let errorMessage = '';
        if (!CERTIFICATE_NAME_REGEX.test(name)) {
            errorMessage = NAME_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validateDescription(description) {
        let errorMessage = '';
        if (!CERTIFICATE_DESCRIPTION_REGEX.test(description)) {
            errorMessage = DESCRIPTION_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validatePrice(price) {
        let errorMessage = '';
        if ((isNaN(price) && !isNaN(parseFloat(price))) || price <= 0) {
            errorMessage = PRICE_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validateDuration(duration) {
        let errorMessage = '';
        if (isNaN(duration) || duration < 0) {
            errorMessage = DURATION_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    static validateTags(tags) {
        let errorMessage = '';
        if (tags.length > 0) {
            tags.forEach(tag => {
                if (!TAG_NAME_REGEX.test(tag.text)) {
                    errorMessage = TAG_ERROR_MESSAGE;
                }
            });
        }
        return errorMessage;
    }

    static validateCertificate(name, description, price, duration, tags) {
        let nameErrorMessage = this.validateName(name);
        let descriptionErrorMessage = this.validateDescription(description);
        let priceErrorMessage = this.validatePrice(price);
        let durationErrorMessage = this.validateDuration(duration);
        let tagErrorMessage = this.validateTags(tags);
        return {
            nameErrorMessage,
            descriptionErrorMessage,
            priceErrorMessage,
            durationErrorMessage,
            tagErrorMessage
        }
    }
}

export default CertificateValidator;