# WSECU - Vending Machine Challenge
## Project Notes

## Technologies used:
### - REST API: ASP.NET CORE WEB API (.NET 6)
### - Angular SPA

- To use the API, run the VendingMachine.API project and use the swagger ui.
- To use the Angular app, run `npm install` on the 'VendingMachine.FrontEnd' directory.
After the dependencies are installed, run `npm run start` and navigate to 'http://localhost:4200'.

# Ledger Functionality

## Requirement - 1: Record Purchase
- This is complete on the backend side, I ran out time implenting on the front end.
  - Backend Endpoint: 
    - POST api/vendingmachine
  - Frontend URL: 
    - vending/purchase
## Requirement - 2: Track remaining inventory of an item and all inventory
- This is complete on the backend and frontend. There are two calls (one for a single inventory and one for all inventory)
  - Backend Endpoints: 
    - GET api/vendingmachine/product/{productId}
    - GET api/vendingmachine/product/
  - Frontend URL: 
    - vending/inventory
## Requirement - 3: Record refunds of a transaction
- This is complete on the backend and frontend.
  - Backend Endpoint: 
    - PUT api/vendingmachine/
  - Frontend URL: 
    - /
## Requirement - 4: Allow for viewing of entire ledger and/or a single transaction
- This is complete on the backend and frontend.
  - Backend Endpoints:
    - GET api/vendingmachine/
    - GET api/vendingmachine/{transactionId}
  - Frontend URL: 
    - /
    - transaction/:id
## Requirement - 5: Store ledger in repository (db, memory, file)
- Based on time alotted, I decided to use in-memory persistence. However, I would have preferred to use the database and build out the data structures for the appropriate objects.
- This would have changed how I used the class libraries (VendingMachine.Repository & VendingMachine.Service) too.
  - I would have kept the reading and writing to the database in the repository class and all the logic around how transactions are handled in the service class
