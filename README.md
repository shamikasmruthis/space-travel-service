# Space Travel Service

A GOV.UK prototype built using the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) that allows users to book space travel to the Moon or Mars.

## Live Demo

[View on Render] https://space-travel-service-7ukt.onrender.com 
Note: Please request password to view prototype.

## About the Service

This prototype simulates a government space travel booking service. Users can:

1. Choose a destination — Moon or Mars
2. Enter their personal details (name and address)
3. Review their answers on a summary page

## Getting Started

### Prerequisites

- Node.js v22.x.x or higher
- npm

### Installation

```bash
git clone https://github.com/YOURUSERNAME/space-travel-service.git
cd space-travel-service
npm install
npm run dev
```

The prototype will be running at `http://localhost:3000`

## Branching

Branching logic is handled in `app/routes.js`.

Users are routed based on their destination selection.

To test branching, select a destination, check answers and click "Accept and Send" button. It will take you to a destination-specific confirmation page.

## Built With

- [GOV.UK Prototype Kit v13](https://prototype-kit.service.gov.uk/docs/)
- [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Deployment

This project is deployed on [Render](https://render.com).

To deploy your own instance:
1. Fork this repo
2. Create a new Web Service on Render
3. Connect your GitHub repo
4. Set build command: `npm install`
5. Set start command: `npm start`
