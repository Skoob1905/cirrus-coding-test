## Solution

This repo contains all of the code which is used to create some customers dashboard which shows some information about their smart meter.

### Prerequisites

I have taken the time to run all of this using Docker. Please make sure you have the latest and greatest version of docker installed as this comes with `docker-compose`, which we will be using to run the app.

I will be also providing small execution snippets based on linux/zsh, so please use equivalent commands for other operating systems, if you are on those.

#### Running the app

Please clone this code using

```
git clone git@github.com:Skoob1905/cirrus-coding-test.git
```

if you are using SSH or

```
https://github.com/Skoob1905/cirrus-coding-test.git
```

if you prefer to use HTTPS.

I have forked the original cirrus repo so the structure has remained largely the same, barring a few folder structure within the belly of each of the backend/frontend services.

After cloning, in your terminal then execute

```
cd cirrus-coding-test
docker-compose up -d
```

**Note: Please stop currently all services runnning on ports 3000 and 8000 as docker will make an attempt, to run the services on these ports**

This will then begin to build the backend services and will pull the redis service that will be used to run this app.

Unfortunately, After everything working successfully and me performing these steps as a sanity I found a bug with running the frontend in production.

Due to last minute issues, The frontend will have to be ran locally to connect to the Backend/DB instance that's being ran in docker. Run the following commands to do this successfully.

First you need to create a .env file inside of the `services/frontend` directory and place this key=value pair inside, which will allow connection to backend service.

```
VITE_APP_METER_BASE_API_URL=http://localhost:8000
```

Then run these commands

```
cd services/frontend

```

When this is running, go to the app here[here](http://localhost:5173/meter/d0834a3e-3a8c-41c6-aea4-4bad2156ec6c), as this will take you a page showing some customer data.

### Documentation

Alongside these services I have also created and apiDoc to show how the API can be used.

I have tried to visualise this dashboard as an epic inside of a larger story. Best practices when working as a team on these epics, have told me in the past to make extensive use of comments, jsDoc and apiDoc.

Alongside the comments in the code, I have also built and apiDoc and served this as a static asset via the **"/"** endpoint on the backend.

Please follow this link [here](http://localhost:8000) to find this documentation and how to use the API

### Optimisation

This app also contains some basic code which is used to interact with a redis container.

There are multiple ways to optimise code for performance, I have tried to implement some here like caching for example. You will notice inside of the `routes/meter.ts` file, I have created a deliberate delay to simulate what a DB request could look like so that we can view the time difference inside of the console, to see that this works.

### DB

I placed the db.json inside of a db directory which was gitignored meaning this app wouldn't work! This json document has been stored in `db/data.json` and I have removed the line of code to gitignore this, for the purposes of this interview only. so just can actually render some data.
