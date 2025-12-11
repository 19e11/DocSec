🚀 Project Title & Tagline
========================
**DocSec** 🎓

_A comprehensive platform for students, professors, and administrators to manage college-related activities_

📖 Description
-------------
The DocSec is a web-based application designed to streamline college operations, enhance student engagement, and improve professor productivity. This system provides a user-friendly interface for students to register, log in, and access various resources, such as course materials, assignments, and announcements. Professors can use the system to create and manage courses, assign tasks, and track student progress.

The system is built using Node.js, Express.js, and MongoDB, ensuring scalability, security, and high performance. It also integrates with ImageKit for image processing and storage, and uses JSON Web Tokens (JWT) for authentication and authorization. The system is designed to be modular, with separate modules for student and professor authentication, course management, and assignment submission.

The DocSec aims to provide a seamless and efficient experience for all stakeholders, reducing administrative burdens and enhancing the overall quality of education. With its robust features, intuitive interface, and scalable architecture, this system is an ideal solution for colleges and universities seeking to modernize their operations and improve student outcomes.

The system consists of several key components, including user authentication, course management, assignment submission, and grading. Each component is designed to work seamlessly together, providing a comprehensive and integrated platform for managing college-related activities. The system also includes a range of features to support student engagement, such as discussion forums, live chat, and notification systems.

✨ Features
---------
The following are some of the key features of the College Management System:
1. **Student Registration**: Students can register for an account, providing basic information such as name, email, and enrollment number.
2. **Professor Registration**: Professors can register for an account, providing basic information such as name, email, and department.
3. **Course Management**: Professors can create and manage courses, including assigning tasks, tracking student progress, and grading assignments.
4. **Assignment Submission**: Students can submit assignments online, with the option to upload files or enter text-based responses.
5. **Grading System**: Professors can grade assignments and provide feedback to students, with the option to use a rubric or enter custom grades.
6. **Discussion Forums**: Students and professors can participate in online discussions, with the option to create threads, reply to posts, and upload files.
7. **Live Chat**: Students and professors can engage in live chat, with the option to send messages, share files, and collaborate on projects.
8. **Notification System**: The system sends notifications to students and professors for various events, such as new assignments, grades, and discussion forum posts.

🧰 Tech Stack Table
-------------------
| Category | Technology |
| --- | --- |
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JSON Web Tokens (JWT) |
| Image Processing | ImageKit |
| Storage | ImageKit |

📁 Project Structure
-------------------
The project is organized into the following folders:
* **config**: Configuration files, including database connection settings and API keys.
* **controllers**: Controller functions for handling HTTP requests and responses.
* **models**: Mongoose models for interacting with the database.
* **middlewares**: Middleware functions for authentication, authorization, and error handling.
* **routes**: Route definitions for handling HTTP requests and responses.
* **utils**: Utility functions for tasks such as image processing and token generation.
* **views**: Template files for rendering HTML pages.

⚙️ How to Run
-------------
To run the project, follow these steps:
1. Clone the repository using `git clone`.
2. Install dependencies using `npm install`.
3. Create a `.env` file with the following environment variables: `DB_URL`, `JWT_SEC`, `IK_PUBKEY`, `IK_PVTKEY`, `IK_URL_ENDPOINT`.
4. Start the server using `node app.js`.
5. Open a web browser and navigate to `http://localhost:3000`.

🧪 Testing Instructions
------------------------
To test the project, follow these steps:
1. Run the tests using `npm test`.
2. Use a tool such as Postman to test API endpoints.
3. Test user authentication and authorization by logging in as a student or professor.
4. Test course management by creating and managing courses.
5. Test assignment submission by submitting assignments as a student.

👤 Author
-------
The College Management System was developed by [Suyash Chaturvedi](https://github.com/19e11), [Ronit Gupta](https://github.com/NLZoro), [Tanay Singhai](https://github.com/SinghaiTanay), [Suyash Pawar](https://github.com/Dracosprite)

📝 License
-------
The College Management System is licensed under the MIT License.
