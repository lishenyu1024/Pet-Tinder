# petTinder-proposal


# Team

**Team members:** Shenyu Li (team leader), Letian Qin(team member)

**GitHub Repo:** [(https://github.com/lishenyu1024/web)] – Hosted by Shenyu Li

## Project Objectives

Develop a Pet Tinder website that allows pet owners to create profiles for their pets and list their pets for public activities such as group walks, thereby promoting social interaction between pets and their owners.

## User Stories

### Unregistered User
- As an unregistered user, I can:
  - Register with the application by providing a username and password

### Registered User
- As a registered user, I can:
  - Log in with previously provided credentials
  - Create a profile for my pet and list it for activities
  - Add photos
  - Join a listed public activity

## User Interface Design

The user interface will be simple and engaging, focusing on ease of use, including:
- Account Registration Page (You must register to access)
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/register.png)

- Login page, log in using the registered account
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/signin.png)

- A landing page with a clear call-to-action (e.g., "pet tinder")
![image](https://raw.githubusercontent.com/lishenyu1024/pics/c44ee82982ac33506a03b4da696ee6a3a7b5dab3/readme/homepage.png)

- Weather interface for viewing and joining local pet events
![image](https://raw.githubusercontent.com/lishenyu1024/pics/6e358ccca99016b6a86142c21a0e4094e1ffd95d/readme/weather.png)

- Pet's profile creation page including name, availability, description and photo upload fields
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/createprofile.png)
![image](https://raw.githubusercontent.com/lishenyu1024/pics/ab40aa935d15a87cd9acee83ec60f1ce8a334752/readme/editactivity.png)

- Main feed showing pet profiles and activities
![image](https://raw.githubusercontent.com/lishenyu1024/pics/ab40aa935d15a87cd9acee83ec60f1ce8a334752/readme/8activity.png)

- Activity detail page
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/internster-like.png)

- Click on the one you are interested in and go to the confirmation page, where you can confirm to cancel or proceed to the next step.
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/like-remove-edit.png)

- Confirm the activity and fill in the relevant information. You can see it in the activity in the navigation bar.
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/comfrim%20page.png)
![image](https://raw.githubusercontent.com/lishenyu1024/pics/5a04bef10829b810bd99cf3ffcc51477cb3025e3/readme/activitycomfrim.png)


## Architecture and Technical Requirements

### Frontend
- **Framework:** Angular
  - Creating user interfaces using Angular's two-way data binding and modular development methods.
    
### Backend
- **Language and Framework:** Python & Django
  - Utilize Django's back-end logic and database interaction capabilities.
  - Django interacts with SQLite database to manage user and pet information.

### Database
- **Type:** SQLite
  - Use SQLite database to store user and pet data, including activity information.

## Other Technologies
- Front-end and back-end communication: REST API design pattern, using Django REST framework
- Weather API integration: OpenWeatherMap API
- Authentication and security: JWT (JSON Web Tokens)

## Installation

 - Clone the repository to your local machine.
```rake
git clone https://github.com/lishenyu1024/web.git
```

## Front-end installation preparation
- cd Frontend/pet_frontend
- Install the required packages
```rake
npm install
```
 - Install Angular CLI globally by running the following command:
```rake
npm uninstall -g angular-cli
```
```rake
npm uninstall --save-dev angular-cli
```
```rake
npm install -g @angular/cli
```
- Start the Frontend development server
```rake
ng serve
```
- Access the application in your browser at http://localhost:4200
  
## Back-end installation preparation
- cd Backend/pet_backend
- Install the required packages
```rake
pip install -r requirement.txt
```
- Set up the database
```rake
python manage.py migrate
```
- If can't set up the database
```rake
python manage.py migrate --fake
```
- Start the Backend development server
```rake
python manage.py runserver
```
  
## Other Requirements

- Acknowledgments: Cite all sources used for development.
  1. Python Django Tutorial: https://www.youtube.com/watch?v=rHux0gMZ3Eg
  2. Angular Tutorial: https://www.youtube.com/watch?v=k5E2AVpwsko
  3. JSON Web Tokens: https://jwt.io/introduction
  4. OpenWeatherMap API guide: https://openweathermap.org/guide
- Reproducibility: Provide detailed instructions for setting up the development environment and running the application in the README.md.
- Deployment: Initially set up against a local development server, with a comprehensive privacy policy if deployed publicly.

## Project Management

- **Work Plan:** Detail roles, responsibilities, milestones, and timelines in a separate Markdown file in the proposal subdirectory.
- **Milestones:** Includes initial setup, feature development phases (authentication, profile management, api integration), testing, and final deployment.

### Roles and Responsibilities

- **Shenyu Li:** Front-end development, UI design, and weather API integration.
- **Letian Qin:** Back-end development, database management, and project management.

