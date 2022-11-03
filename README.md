# Event App | Teclead Ventures

This Event App is "just" a coding challenge. It lists events that it gets from an API. The biggest features are:
* __the search function__, which allows you to filter the events by search query
* __the sorted and grouped events__, the events are allways grouped and sorted by date
* __the shopping cart__, you can add events to the shopping cart and also remove them from shopping cart

## Project setup

### Clone this GitHub repository
```
git clone https://github.com/paulsteuber/bc913a24-a828-44ff-a608-d35b9d47c7c2.git
````
### Install all required packages
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

## Navigate through Event App
![Overview](src/assets/teclead_coding1.png?raw=true)

### Use Search Function
While typing in the input field, the app filters all matching events. 

![Search Function](src/assets/teclead_coding2.png?raw=true)

### Add Event to Shopping Cart
You can add events to your shopping cart. After adding the event to the shopping cart it will disappear from the main list. The shopping cart will open automatically if it is the first event which was added to the shopping cart, otherwise you have to open the shopping cart by clicking the shopping cart button in the header.

#### Add Button
Click this button to add the event to your shopping cart.

![Search Function](src/assets/teclead_coding3.png?raw=true)

#### Open shopping cart
Click this Icon to open the shopping cart list.

![Search Function](src/assets/teclead_coding5.png?raw=true)

#### Shopping cart overview
All your choosen events will be displayed here. 

![Search Function](src/assets/teclead_coding6.png?raw=true)

#### Remove event from shopping cart
Click the trash button to remove the event from your shopping cart. After removing it will disappear automatically in the main list, if the event matches with your current search query.

![Search Function](src/assets/teclead_coding7.png?raw=true)
