# Password Generator Node.js

A secure password generator CLI tool.

## Features

- Generate secure random passwords
- Customizable length
- Include/exclude character types (uppercase, lowercase, numbers, symbols)
- Copy to clipboard
- Password strength indicator
- Generate multiple passwords at once

## Installation

```bash
npm install -g pass-gen-nodejs
```

Or clone and install:

```bash
git clone https://github.com/mizoz/pass-gen-nodejs.git
cd pass-gen-nodejs
npm install
```

## Usage

```bash
# Generate default password (16 chars)
pass-gen

# Generate password with custom length
pass-gen --length 24

# Include specific character types
pass-gen --uppercase --lowercase --numbers --symbols

# Exclude ambiguous characters
pass-gen --no-ambiguous

# Generate multiple passwords
pass-gen --count 5

# Copy to clipboard
pass-gen --copy
```

## Options

- `-l, --length` - Password length (default: 16)
- `-u, --uppercase` - Include uppercase letters
- `-l, --lowercase` - Include lowercase letters
- `-n, --numbers` - Include numbers
- `-s, --symbols` - Include special symbols
- `-a, --no-ambiguous` - Exclude ambiguous characters (0, O, l, 1)
- `-c, --count` - Number of passwords to generate
- `-C, --copy` - Copy to clipboard

## License

MIT License

## Author

mizoz
