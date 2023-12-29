# Todo

- Configure serverless to create all the necessary services when deploying, including databases
  - First, we need an auth database for user(s)
- Check to make sure it all works when deployed, offline and to aws

- Maybe create an integration test?

- Add Settings page to front in with change password functionality
  - Add that functionality to backend
  - Need to add safeguards to stop:
    - Empty new password
    - Password and Confirm Password should match (on frontend only)

- MORE WORK ON GETTING SERVERLESS WORKING
  - local deployment doesn't seem to be creating the dynamodb table
  - need to seed the table with admin when done, too
  - try deploying to aws first and see if my config works properly
  - backend/serverless/seed.ts has region hard-coded, how to fix this?
  - when deploying locally with serverless-offline, secrets are still fetched from AWS. Is there a way to instead get them from .env? Is this a problem anyway? It would be nice to fix...
  - speaking of secrets, can I get serverless to create one for me? Only problem is I don't know if it can just add another key:value pair to my master secret or not

- Currently, local testing is looking like it should be done with serverless-offline, rather than webpack dev server (for the backend)
  - Maybe I should find a way to do both? The only real problem with that is that serverless-offline changes the url to have the stage in it. If that didn't happen, I could effortlessly swap between webpack dev server (faster, hot-reloading) and serverless (closer to real production, database integration)
  - Actually, now that I think of it webpack dev server is probably not going to work anymore because I need to access the database just to log in, don't I

- Readme needs a lot of updating. Best do it while I still remember what I've done and why

- @vendia/serverless-express is now @codegenie/serverless-express. Haven't even tested if the old code still works! So do that!

- Moving to passport for authentication
  - Main stuff is done, need to fix and clean up now
  - then add authentication for bearer