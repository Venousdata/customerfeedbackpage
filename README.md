Hi!

This is an application that allows the user to view and write reviews for a small selection of products.
Users are able to view individual products in detail, including an image, title, description, and frequency/most common ratings out of 5.

There is room to scale this application to allow users to add their own products. although this is not currently implemented, i've structured the code to allow for easy addition of new functionality in future.

Code test coverage statistics:

app: 
-----------------------------------|---------|----------|---------|---------|----------------------
File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------|---------|----------|---------|---------|----------------------
All files                          |   83.69 |    53.45 |      68 |   82.58 |

api:
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   53.62 |    65.63 |   27.27 |   57.14 |

Setup instructions:

1. Create a postgresql db on default settings (port 5432). username should be "postgres", password should be "password". if not, update the credentials.js file (api) accordingly.
2. Name the database "customerfeedbackpage" 
3. In the api/sql folder, run the scripts (in pgadmin) to create and populate the database tables required
4. Run "npm install" in both the app and api directories to download all required packages.
5. Run the api (npm run dev) and it should print to console "API listening on port 8080"
6. Run the app (npm run start) and the app should open up in your preferred browser. Enjoy!
