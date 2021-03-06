const { BookPayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const BookValidator = {
  validateBookPayload: (payload) => {
    const validationResult = BookPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = BookValidator;
