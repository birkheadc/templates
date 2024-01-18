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

- Debugging
  - Need something to make debugging easier.
  - Maybe a helper class that wraps console.log, at the very least this will make it easier to search for and delete them when done debugging. Could also have it not log when in production.

- Model <-> DTO mapping
  - Working on a nice way to map between the versions of the model that are used:
    - In the front end
    - DTO traveling between front- and backend
    - In the back end
    - In the database

  - I like the syntax of being able to, for instance, `Person.from(personDto)` or `person.toDto()` a lot. But having all those functions defined in the model brings with it a number of issues, mainly related to clutter and separation of concerns.

  - My latest thought is to have a static `from()` on `Person` that returns a `PersonMapper`, so you can still call `Person.from().dto(personDto)`, which is also very satisfying. Needs more thinking.

- ResultError standardization
  - Right now, when a Result fails, I instantiate it with `Result.Fail().WithMessage('<reason for failure here>')`. I could use a few standardized failure enums, instead of having dozens of variations of 'failed to connect to server' everywhere. Custom message capability should still be maintained.

- CSS / styling
  - Need to add `<meta name="viewport" content="width=device-width, initial-scale=1" />` to index.html, and fix styles to account for this change.