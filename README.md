# WIP: Template for the t3 app

# Quickstart

- If you haven't done so yet, sign up for a free vercel account. No credit card is required. After this is done, link your github to your vercel account. Then, configure your dns to point to your vercel domain.
- Set up your enviroment variables. You can find them in the .env-example file or copy them into your own .env by running the command `cp .env-example .env`. Some notes:
  - `NEXTAUTH_SECRET`: This is the secret that is used to sign the JWT tokens. It is recommended to change this to a random string generated with the command `openssl rand -base64 32`. You will also need to add this in the vercel enviroment variables.
- Create a free cockroachdb account. This will be used as our primary database. You can find more information about cockroachdb here: [https://www.cockroachlabs.com/docs/stable/](https://www.cockroachlabs.com/docs/stable/). Set the DATABASE_URL environment variable to the url of your cockroachdb instance.
- Run the command `npm install` to install all the dependencies.

# Rebuilding the template.

- Run npx create-t3-app@latest
- Add prettier
