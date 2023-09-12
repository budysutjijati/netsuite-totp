# NetSuite-TOTP

[![Known Vulnerabilities](https://snyk.io/test/github/budysutjijati/netsuite-totp/badge.svg?targetFile=package.json)](https://snyk.io/test/github/budysutjijati/netsuite-totp?targetFile=package.json)


The NetSuite TOTP Node.js library is a robust and easy-to-use class-based module designed to facilitate the generation of Time-Based One-Time Passwords (TOTP) in Node.js applications. This toolkit has proven to be an invaluable resource in test automation initiatives, enabling the test framework to seamlessly log in with high-level access roles. Utilizing the otplib library, it allows developers to generate secure OTP tokens with configurable digits and time periods. The generated tokens are verified internally to ensure their validity before being returned, guaranteeing the generation of valid tokens in every instance. 

## Installation

Install the package by running the following command:

```
npm install netsuite-totp --save
```

Include and configure the library in your project. It is recommended to set up an environment file to securely store your sensitive data such as the secret key. You can use the `dotenv` package to help with this.

```javascript
const TOTPGenerator = require('netsuite-totp');
```

## Usage

Instantiate the TOTPGenerator class by providing the necessary 2FA secret key, the number of digits, and the time interval. If you didn't store the 2FA secret key during the initial setup, adhere to the steps below:

- Navigate to the settings portlet on your NetSuite home dashboard.
- Enter your existing password along with the 2FA token.
- The reset of the 2FA is now complete, and you will receive a confirmation email notifying you of this change.
- Log out from NetSuite and then log back in.
- You will notice a notification indicating that NetSuite has dispatched a verification code to your email.
- Inspect your email inbox, locate the message, and copy paste the 6-digit verification code into NetSuite before submitting the form.
- You will be greeted with the Security Setup wizard; proceed by clicking "next".
- On the initial step, you will observe both the QR code and the 32-digit 2FA secret key.
- Safely document the 2FA secret key, ideally in a password manager.
- Concurrently, initiate your authenticator app to scan the QR code displayed previously.
- Now enter the 6-digit token produced by your authenticator application in the confirmation field.
- If all details are accurate, you will have the option to save the newly generated backup codes displayed to you. This concludes the process.


### Create a TOTP
Create a new TOTP by providing the 2FA secret key. The digits and period can be defaulted as is.

```javascript
const totpGenerator = new TOTPGenerator({ 
    secret: 'YOUR-SECRET-KEY', 
    digits: 6, 
    period: 30
}).generateToken();
```

## Contributing

Feel free to contribute to the development of this library by submitting issues or pull requests.

## License

This project is licensed under the terms of the MIT license. Please check the LICENSE file for more information.