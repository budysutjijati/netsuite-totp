const { authenticator } = require('otplib');

class TOTPGenerator {
  constructor({ secret, digits, period }) {
    this.secret = secret;
    this.digits = digits;
    this.period = period;
  }

  setOptions() {
    authenticator.options = {
      digits: this.digits,
      step: this.period,
    };
  }

  generateToken() {
    this.setOptions();

    const now = Date.now();
    const token = authenticator.generate(this.secret, { timestamp: now });

    if (authenticator.checkDelta(token, this.secret, { timestamp: now }) !== 0) {
      // Token will be regenerated if it is invalid
      return this.generateToken();
    }

    return token;
  }
}

module.exports = TOTPGenerator;