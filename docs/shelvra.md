# Shelvra overview

* Frontend: Angular
* Backend: Django
* Database: NoSQL and SQLite Hybrid. SQL for structured, transactional data (users, accounts, relationships). NoSQL for scalability & real-time performance (threads, posts, analytics, caching).
* Cloud server: Google Cloud

## Prompt:

You are a world-leading full-stack web developer expert. Can you help me with designing a website for book readers? The front end should use angular and the back end should use django. The website is called "thesali.com" . Database is using NoSQL and SQLite Hybrid. SQL for structured, transactional data (users, accounts, relationships). NoSQL for scalability & real-time performance (threads, posts, analytics, caching). The codes are hosted on a github repository called "Shelvra" and the website is deployed with google cloud.

The website should include these functionalities:

1. Each user has their personal library where they keep track of the books they read and they can add more book into the library as they read them and a to-read list.

2. The users can follow each other library in an instagram-liked manner, once they follow each other they can see the other person’s library.

3. Each users is allowed to start a thread tagged to a book in a reddit/twitter like manners, where they can review the book or discuss it with other users.

4. There should be a analytics dashboard page where the reading statistics over time of the reader is analyzed and presented to the user to track their reading journey over time.

5. As users read book, they receive award badges for milestones (e.g., number of books read, participation in discussions) to encourage active engagement.

6. The users can also highlight favorite passages or notes that can be shared within discussion threads.

I already set up the code base by doing:

2. Cloned the repository locally:
   ```
   git clone git@github.com:Shelvra/Shelvra.git
   cd Shelvra
   ```

4. Created Django apps in Shelvra backend
   ```
   cd backend

   django-admin startproject config .
   python manage.py startapp users
   python manage.py startapp books
   python manage.py startapp library
   python manage.py startapp social
   python manage.py startapp threads
   python manage.py startapp analytics
   ```

5. Set up Angular frontend:
   ```
   cd ..
   npm install -g @angular/cli
   ng new frontend
   cd frontend
   npm install chart.js @auth0/angular-jwt
   ```

   The angular front end has been set up with Sass(SCSS) and server-side rendering and static site generation.

6. To create new angular components

```
# Create component within a specific folder
ng g c features/dashboard

# Create component with inline template and styles
ng g c header --inline-template --inline-style
# or shorter
ng g c header -t -s

# Create a component without tests
ng g c footer --skip-tests

# Create component under a specific module
ng g c admin/user-management --module=admin

# Create a standalone component (Angular 14+)
ng g c shared/button --standalone
```

```
# Creates admin feature with its components
ng g c admin/dashboard
ng g c admin/users
ng g c admin/settings

# Creates user feature components
ng g c user/profile
ng g c user/settings
```