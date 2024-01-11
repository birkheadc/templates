# Todo

- Readme needs a lot of updating. Best do it while I still remember what I've done and why

- Font size / overall style on mobile needs work. More padding / bigger nav links / further from edge of screen. Maybe slightly bigger font.

- Fluent testing
  - Create basic integration testing that can be built off of

- Fluent development
  - At the moment, backend development is painful because of the need to constantly rebuild and redeploy serverless.
  - Need to reconfigure webpack dev server to work without serverless
    - Either mock the database when doing so, or manually launch dynamodb container and configure dev env to connect to it
  - Frontend with local login seems to be a good solution that fixes a few problems
    - Produces a 'demo-mode' for free that I can use to show off the app even if it is single-user
    - Works on mobile without any port-forwarding pain which makes responsive UI easier
    - Works as a dev environment that I can build without worrying about the backend