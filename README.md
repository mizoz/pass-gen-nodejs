# Password Generator Node.js

[![npm Version](https://img.shields.io/npm/v/pass-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/pass-gen-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/pass-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/pass-gen-nodejs)
[![License](https://img.shields.io/npm/l/pass-gen-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/pass-gen-nodejs?style=flat-square)](https://www.npmjs.com/package/pass-gen-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/pass-gen-nodejs?style=flat-square)](https://github.com/mizoz/pass-gen-nodejs)

> A secure Node.js CLI tool for generating random passwords.

## Features

- Generate secure random passwords
- Customizable password length
- Include/exclude character types
- Special character support
- Copy to clipboard
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g pass-gen-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/pass-gen-nodejs.git
cd pass-gen-nodejs
npm install
```

## Usage

### Command Line

```bash
# Generate a password
pass-gen

# Generate with custom length
pass-gen --length 20

# Include special characters
pass-gen --special

# Generate multiple passwords
pass-gen --count 5
```

### JavaScript API

```javascript
const { PasswordGenerator } = require("pass-gen-nodejs");

const gen = new PasswordGenerator();

// Generate password
const password = gen.generate({
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  special: true
});

console.log(password);
```

## CLI Options

| Option | Description |
|--------|-------------|
| `-l, --length` | Password length (default: 16) |
| `-s, --special` | Include special characters |
| `-c, --count` | Number of passwords to generate |

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
