# AccessCrowd - Crowdsourcing Accessibility Solutions

AccessCrowd is a web application designed to crowdsource accessibility feedback for digital platforms, helping make websites more inclusive for people with disabilities. The platform allows users to submit and view accessibility issues, focusing on improving usability and inclusivity for all users.

## Features

- **Crowdsourced Feedback:** Users can submit and view accessibility issues on various websites.
- **Responsive Design:** The UI is optimized for desktops, tablets, and mobile devices.
- **High-Contrast Styling:** Ensures usability for visually impaired users.
- **Modern Frontend:** Built with React.js and Vite for fast and efficient development.
- **Backend Support:** Node.js and Express.js used for managing API endpoints and data.

## Technologies Used

- **Frontend:** React.js, HTML, CSS, Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB
- **Build Tool:** Vite
- **Styling:** High-contrast and responsive design principles

## Installation

### Frontend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/accesscrowd.git
   cd accesscrowd/frontend
   ```

2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed.
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:5173/`.

### Backend Setup

1. **Navigate to the Backend Folder:**
   ```bash
   cd ../backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. **Run the Backend Server:**
   ```bash
   npm start
   ```

## License

This project is licensed under the [MIT License](LICENSE).
