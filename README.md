# Zpecter homepage

## About
I wanted to have my own dashboard somewhere, which would be set as the browser's homepage.

When I load the browser, the dashboard loads, where my favorite links are saved and basic information about the time, date and weather is displayed.
Everything is configurable and is only stored in the browser you are currently using, meaning that no one else will ever see your data.
I can also customize my own panels, which I can arrange as I need.

## Development

### Basic Dependencies

* react ^19.2.5
* @mui/material ^9.0.1
* react-hook-form ^7.75.0

### Development server

Starts a local development server, which defaults to `http://localhost:5173/`

```sh
% yarn start
```

### Prettier

Checks and corrects the formatting of the entire project folder

```sh
% yarn prettier:check
```
```sh
% yarn prettier:fix
```

### Linter

Checks formatting according to lint rules

```sh
% yarn lint
```

### Fixes

Fixes an issue with location service outages on macOS

```sh
% yarn dev:fix:geolocation
```

## Tests

..TODO

## Build

Converts source files to a publishable version

```sh
% yarn build
```
