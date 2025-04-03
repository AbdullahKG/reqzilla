## Table of Contents

1. [ReqZilla](#reqzilla)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Examples](#examples)
6. [Contributing](#contributing)
7. [License](#license)

---

## ReqZilla

![ReqZilla Logo](https://github.com/AbdullahKG/reqzilla/raw/main/assets/logo.png)  
A lightweight and powerful CLI tool for testing REST APIs directly from the terminal.

---

## Features

- Simple and intuitive command-line interface.
- Supports GET, POST, PATCH, and DELETE requests.
- Allows sending JSON data.
- Saves responses to a file.
- Displays detailed response information in verbose mode.
- Displays only headers if required.
- Supports setting request headers, including Authorization headers (e.g., Bearer tokens for JWT).
- Follows url redirects automatically

---

## Installation

To install ReqZilla globally using npm, run:

```sh
npm install -g reqzilla
```

---

## Usage

After installation, you can use `reqzilla` directly from your terminal.

### Sending Requests

#### GET Request

```sh
reqzilla get <url>
```

Example:

```sh
reqzilla get https://jsonplaceholder.typicode.com/posts/1
```

#### POST Request

```sh
reqzilla post <url> -d '<JSON data>'
```

Example:

```sh
reqzilla post https://jsonplaceholder.typicode.com/posts -d '{"title": "foo", "body": "bar", "userId": 1}'
```

#### PATCH Request

```sh
reqzilla patch <url> -d '<JSON data>'
```

Example:

```sh
reqzilla patch https://jsonplaceholder.typicode.com/posts/1 -d '{"title": "updated title"}'
```

#### DELETE Request

```sh
reqzilla delete <url>
```

Example:

```sh
reqzilla delete https://jsonplaceholder.typicode.com/posts/1
```

### Additional Options

- `-H, --Header <header>`: Add request headers (supports all types, including JWT Authorization headers).
- `-o, --outputFile <FileName>`: Save response to a file.
- `-v, --verbose`: Show detailed response info (status, headers, and body).
- `-I, --onlyHeaders`: Show only response headers.

---

## Examples

### Example with Headers

```sh
reqzilla get https://jsonplaceholder.typicode.com/posts/1 -H 'Accept: application/json'
```

### Example with Output to File

```sh
reqzilla get https://jsonplaceholder.typicode.com/posts/1 -o response.json
```

### Example Verbose Mode

```sh
reqzilla get https://jsonplaceholder.typicode.com/posts/1 -v
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub:
[ReqZilla Repository](https://github.com/AbdullahKG/reqzilla)

## License

This project is licensed under the MIT License.

---

Happy testing with ReqZilla!
