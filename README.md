# sit323_737-2024-t1-prac2p

## Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
| PORT                          | Port number                         | 3000                                           |

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/), LTS version is recommended

## Getting started
Clone the repository
```
git clone https://github.com/dhianpratama/sit323_737-2024-t1-prac2p
```
Install dependencies
```
cd sit323_737-2024-t1-prac2p
npm install
```
Run the project
```
npm start
```
  Navigate to `http://localhost:3000`

## Testing
The tests are written in jasmine and it's using jasmine-reporters to display test result

```
"jasmine": "^5.1.0",
"jasmine-reporters": "^2.5.2"
```

How to run
```
npm test
```

Test result will be printed at terminal
```
App
  should load the page successfully ...
. Passed
  should return 404 for unknown path ...
. Passed
2 of 2 passed (0 skipped, 0 disabled).
```
