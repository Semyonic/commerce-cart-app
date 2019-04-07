# commerce-cart-app 

[![Build Status](https://travis-ci.com/Semyonic/commerce-cart-app.svg?token=Fr3X3r9SMLHGZnUsMHop&branch=dev)](https://travis-ci.com/Semyonic/commerce-cart-app)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/semyonic/commerce-cart-app.svg)](https://hub.docker.com/r/semyonic/commerce-cart-app)

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/commerce-app/` directory. Use the `--prod` flag for a production build.
##### Available Commands
- `ng build:dev`
- `ng build:test`
- `ng build:prod`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) + [Puppeteer](https://pptr.dev/).
##### Available Commands
- `ng test-headless` to test in a Docker & CI environments

# Docker Environments
## Self

To provide deployment stage provide environment as :
`--build-arg env=dev`
#### Available Environments
- `dev`
- `test`
- `prod`
#
