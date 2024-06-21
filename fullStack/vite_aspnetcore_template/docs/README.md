# Vite + ASP.NET Core Template
Latest generalized template I am creating for creating a web application with a front end built with Vite and React, and a back end built with ASP.NET Core.

Started: 2024-06-21

## Goals
I started this template after a frustrating experience building my first app with my previous template, which used NestJS in the front end and NestJS in the back.

Some of my frustrations were because of my own bad choices, but others were because of those choices in framework. I don't mean to disparage them, and I am glad I took the time to learn them, but they left me wanting a different experience.

That, combined with a desire to go back to the drawing board on a number of other issues, led to me creating this template.

### Strongly-Typed API
I have always liked C# and .NET, and spending a lot of time working with TypeScript has only made me more homesick. NestJS was great, but I couldn't constantly feeling that it was great *despite* JavaScript, not *because* of it. I am excited to go back to ASP.NET and discover how it has grown since I've been away.

### Back to Pure React
I originally started using NextJS because it seemed like what everyone was doing. But the more I used it, the more I realized that I wasn't getting much out of it, and I missed my own miniature React framework(s) I had developed. This time I'll be trying out Vite, hopefully for a slimmer approach.

### OAuth
I'll be learning and implementing OAuth (finally).

### Embracing Cloud During Development
Rather than attempting to replicate the entire cloud stack locally when developing, I'm going to attempt to embrace the use of Staging resources and services during development.

### Testing
I'm going to aim for higher test coverage, especially in front end components, integration, and e2e. I mean it this time.

#### Unit Testing
Unit Testing is pretty straightforward.

For the api, most classes are covered by Unit Tests as long as the test wouldn't be trivial. 

The frontend is a little more interesting. I plan on introducing Storybook for designing and testing components in isolation.

#### Integration Testing
It is sometimes difficult to draw the line between Integration and E2E testing. For this template, only the api will have Integration Testing. Integration Testing will consist of all the logic from receiving a request, up to but not including interacting with a real database. I will mock the database.

#### E2E Testing
E2E Testing, then, will involve creating Testing Containers with as much of the tech stack as possible. The tests will operate the frontend, and the entire application will run, including an actual database in the Testing Container. I might have all of this done in the cloud.

## About the Template
Todo: Detail packages, frameworks, and design decisions.
### Development
All of my templates are in one large monorepo, but this template is meant to be used in 2 repos, one for the front and one for the API. As such, I have configured it under the expectation that it be run in two separate VSCode instances. One open to `vite_aspnetcore_template_api`, the other to `vite_aspnetcore_template_front`.

## How to Use
Todo: Detail how to create a project with this template.

## Deployment
Todo: Detail how to deploy this template, or a project created with it.