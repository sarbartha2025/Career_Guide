Career Path Explorer
A web application designed to help users explore career opportunities based on their age and stream of interest (Science, Commerce, or Arts). The application provides personalized career suggestions, along with step-by-step roadmaps for each career path.

Features
Feedback Form: Allows users to submit feedback on the application with a responsive design.

Career Roadmap Explorer: Helps users discover potential careers based on their age and stream.

AI Career Suggestions: Provides additional career advice through an embedded AI chatbot.

User Authentication: Login and sign-up functionality to personalize the user experience.

Technologies Used
Frontend:

HTML5

CSS (Custom Styles)

JavaScript (for form handling and dynamic content)

LocalStorage (to save user data)

Backend:

Node.js (for handling API requests and server-side logic)

Additional Libraries:

External API for AI-powered career suggestions

Custom career data stored in data.js

Project Structure
bash
Copy
Edit
/project-folder
├── /data.js                # Contains career data
├── /feedback.html          # Feedback form HTML
├── /hackathon.html         # Main career roadmap explorer HTML
├── /hackathonJS.js         # JavaScript for handling career roadmap
├── /login.html             # Login and Signup forms HTML
├── /hackathon.css          # Custom CSS for career roadmap explorer
├── /style.css              # Main CSS for overall design
├── /styles.css             # Additional styling for user interface
└── /README.md              # Project documentation
Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone <https://github.com/sarbartha2025/Career_Guide>
cd <project-folder>
2. Install dependencies (for backend, if using Node.js)
If you're planning to use a backend server for additional features like AI suggestions or storing user data:

bash
Copy
Edit
npm install
3. Open the project in your browser
You can open the HTML files directly in your browser, or you can set up a local server to run the project:

Option 1: Open the login.html file in your browser to start interacting with the application.

Option 2: Set up a local server using Node.js (if required) and visit http://localhost:3000.

How to Use
Login or Sign Up:

Use the login form to enter your email and password, or sign up if you're a new user.

Submit Feedback:

After interacting with the application, submit feedback through the feedback form.

Explore Careers:

Enter your name, age, and select your stream (Science, Commerce, Arts) to explore a list of career options.

Click on a career to view detailed steps for pursuing that career.

Get AI Career Suggestions:

Use the AI chatbot for personalized career advice based on your inputs.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
