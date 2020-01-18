# evaluation-cypress

This is a test-ware for evaluation of Cypress test automation tool.

## Prerequisites

1. Node.js LTS

## Framework used

- Name: Cypress
- Home page: https://www.cypress.io/
- It is a meta-framework, built on other framework, which executes inside the application, with higher intrution to the application and the network layer.

## Test cases

The implemented test cases can be found in [TESTCASES.md](TESTCASES.md).

## Setup

```bash
npm install
```

## Execution

```bash
npm test
```

## Notes

1. It took 2 minutes to intall cypress as dependency
1. Cypress takes >400 MB on file system
1. `chromeWebSecurity` needed to be turned off for 3rd party site ([issue](https://github.com/cypress-io/cypress/issues/1951))
1. `scrollIntoView` does not scroll the element into the viewport