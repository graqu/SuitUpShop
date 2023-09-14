# SuitUp - online app

This is my repo of "suitUp shop" - online shop with suits. App was made in React.js. I also used google Firebase API to store and fetch products data.

I also use Polish Bank API (NBP) to calculate EUR and USD course by them current values (depends on user settings):
[NBP API](http://api.nbp.pl/)

Link to deployed app: [suitup.netlify.app](https://suitup.netlify.app/)

## Current version 1.0.0

* A dummy online shop where you can test basic functionalities of choosing  products and adding them to cart.
* Users can see price in PLN (original price) and current value in EUR and USD.
* User Can also sort items and filter to only available products. 
* All items are loaded from Firebase database.

## Next steps:
* Adding form to place an order and send them to server or other source to collect all requests.
* Add product Card with description and possibility to zoom product.
* UX changes.
* prevent users to order more items as its currently available. 
* Provide app local memory to remember user settings (currency, items on cart etc.) 
