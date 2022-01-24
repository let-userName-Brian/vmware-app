
# VMware CRUD App

I recently had an interview with the amazing engineers over at VMware! 
During that interview I realized I had a loophole in my tech stack of 
not knowing Angular. I had never coded in angular and have been a React 
dev for most of my career. Thus, this project was created. 

My personal project goals where simple and failry straightforward. Build a CRUD app 
that was corporate focused. My vision was to create a hiring manager dashboard that
showed the applicants, jobs, and start availability. I wanted to be able to see
a list of all applicants, their skills, experience, jobs applied for, email, and 
phone number. I then wanted to be able to add a new applicant, edit a current applicant,
and the dreaded....remove an applicant from the running. 

I also wanted to be able to see a list of jobs available at the company with all
pertinent information, but keep it elegant!





## Tech Stack

**Client:** Angular, Angular Material, Clarity (made by VMware), TailwindCSS

**Server:** Node, Express, Knex, Postgres

**Testing:** Cypress e2e

## Installation

For this project I used a Postgres docker image for my data to persist. 
You will need to have the docker CLI installed. To read more on this please visit
[Docker Install](https://docs.docker.com/get-docker/).
 
Great, now that we have Docker installed you'll need to run the following: 
 ```
 docker run --name vmware-postgres -p 5432:5432 -e POSTGRES_PASSWORD=vmware -d postgres
 ```
Sweet, now that the container and DB are up and running lets get the rest of the project
on!


Clone the project and CD into the "Backend" folder. Once there, run the following commands:
```bash
  npm i
  npm run start:seed
```
The seed command is only needed for the first time use. After you have seeded the Database 
you can simply run:
```
npm start
```
So now you should have the backend talking to the Database and the Database should be 
seeded with the dummy data. Lets get that front end running!

Open another terminal and run the following commands:
```
npm i
npm start
```

Once the app has compiled you should be able to visit http://localhost:4200/ to see it in all of its glory!

## Running Tests

I decided to go with Cypress testing for this app to test my abilities. If you arent familiar with Cypress, 
it allows e2e testing from a users experience. You get to view your tests in action and see any oddities throughout.

To get the test up and running you'll need to make sure the app is running. Then open another terminal and run the following:
```bash
  npm run cypress:open
```


