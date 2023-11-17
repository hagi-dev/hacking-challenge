# RIMAC Web App
Welcome to the documentation for the RIMAC INSURANCE web application. This guide provides an overview of how to set up, run, and use the application.

## Developer: <a href="https://github.com/hagi-dev">Hagi Torres Macedo</a> 
<section style="text-align: center;">
 <a 
      href="https://www.linkedin.com/in/hagitorres/" 
      target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077b5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin">
  </a>
  <a 
     href = "hagiraitorresmacedo@gmail.com" 
     target="_blank">
     <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
 </a>
</section>

## Table of Contents

1. [Getting Started](#getting-started)
2. [Problem](#problem)

## Getting Started

### Installation

To get started with the RIMAC INSURANCE Web App, follow these steps:

1. Clone the repository:

   ```bash
   git clone [https://github.com/hagi-dev/hacking-challenge]
   cd hacking-challenge
   ## Implementation
   ## Inatall dependencies
   yarn install
   ## Running React App
   yarn start

2. 
## The app will be available at http://localhost:3000.

## Problem
# Web Application for Ricmac

This project is a web application developed for the company Ricmac using React.js.

## Features

The application includes the following pages:

- **Login Page**: Allows users to authenticate in the application. It includes fields to enter the Document Type, document, phone, license plate and a button to send this data.

- **Build your plain Page**: Shows detailed information about a specific topic. The exact nature of this information will depend on the needs of the Ricmac company (insurance sale).

- **Thank You Page**: It is shown after a user completes a specific action, such as submitting a form. It includes a thank you message and possibly relevant additional information.

## Implementation

The project was implemented following these steps:

1. Create a React component for the login page.
2. Create a React component for the build your plan page.
3. Create a React component for the thank you page.
4. Implement the logic to navigate between these pages using React Router.
5. Implement the logic to authenticate users on the login page.
6. Implement the logic to show build your plan information on the details page.
7. Implement the logic to show the thank you page after a specific action is completed.

## Tech Stack

- React js
- Typescript
- sass

## Support

- Author - [Hagi Torres Macedo](https://www.linkedin.com/in/hagitorres/)
- Contact - [hagiraitorresmacedo@gmail.com](mailto:hagiraitorresmacedo@gmail.com)

## License

This project is [MIT licensed](LICENSE).

## Code Example

Note: This is just a basic skeleton of the application. The components of the LoginPage, BuildYourPlan, and ThankYou pages must be created and customized according to the needs of the Ricmac company.

```jsx
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './Login';
import { BuildYourPlan } from './BuildYourPlan';
import { ThankYou } from './ThankYou';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/build-your-plan" element={<BuildYourPlan />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default Page;


