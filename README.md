# Number Classification API

This is a simple Express.js application that provides an API to classify numbers and fetch fun facts about them. The application supports checking if a number is Armstrong, even, odd, prime, and perfect. It also fetches a fun fact from an external Numbers API.

## Features

- Classify a number as Armstrong, even, odd, prime, or perfect.
- Sum the digits of the number.
- Fetch a fun fact about the number using the Numbers API.

## Endpoints

### `/api/classify-number`

This API endpoint accepts a query parameter `number` and returns a classification of the number along with some fun facts.

**Query Parameters:**

- `number` (required): The number to classify.

**Response:**

- `number`: The input number.
- `is_prime`: Boolean indicating whether the number is prime.
- `is_perfect`: Boolean indicating whether the number is perfect.
- `properties`: A list of classifications (e.g., 'armstrong', 'even', 'odd').
- `digit_sum`: The sum of the digits of the number.
- `fun_fact`: A fun fact about the number fetched from the Numbers API or generated internally.

### Example Request

```http
GET /api/classify-number?number=153
```

### Example Response

```json
{
  "number": 153,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 9,
  "fun_fact": "153 is a narcissistic number."
}
```

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher) installed.
- npm or yarn package manager.

### Steps

- Clone the repository: `git clone https://github.com/Oliver2929/HNG01.git`
- cd number-classification-api01
- Install dependencies: npm install
- Build the TypeScript files (if you're using TypeScript): npm run build
- Start the server: npm start
- The server will now be running on http://localhost:3000

## Deployment

To deploy to Vercel, run the following command after installing the Vercel CLI: vercel

## Helper Functions

- isArmstrong(num: number): boolean: Checks if a number is an Armstrong number.
- sumOfDigits(num: number): number: Returns the sum of the digits of a number.
- isPrime(num: number): boolean: Checks if a number is prime.
- isPerfect(num: number): boolean: Checks if a number is perfect.
