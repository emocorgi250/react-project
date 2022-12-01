# Development

### Link to Deployed Website

[https://emocorgi250.github.io/react-project/](https://emocorgi250.github.io/react-project/)

### Goal and Value of the Application

The goal of this application is to develop an interactive interface that enables users to select items and aggregates them,using React. The surface I implement is supposed to be used as a coffee shop's website, where users can view different items of coffee, tea and pastry with images and information in a list, and users can choose whichever to mark as their favorites or unmark, and their favorite items with total price are shown in another list on the same page.

### Usability Principles Considered

In order to make the hierarchy clearer, I place the title of website on the top, and all filters and sort dropdown lists below. Below listed are all the items, using the same style of Card to show. On each Card of item, an image is shown on top to let users see the items more clearly. An "add to favorite" and a "remove from favorite" button are on each Card, and are enabled or disabled in accordance with whether they're in the favorite cart. Users can easily add or remove each item independently. The whole page is mainly in two parts left and right, which is clearer for users to see.

### Organization of Components

There are mainly 3 components in my code. The FoodItem component defines how each Card of food item is organized and displayed. The Filter component defines the two filters and one sorting dropdown lists. The FavList component defines how the starred items of users are displayed in the favorite section on the page, and how the total price of starred items is calculated. All three components are imported and used in the App.js code to display the final result of the page.

### How Data is Passed Down Through Components

I define propTypes for each component, which ensures several parameters will be set when the component is used. In the App.js, I define two lists to store the food items, one is for the items after filtering and sorting. The data of items are imported from the coffeeList.js file which store the data in json-style. In the App.js, when one component is called, data such as lists of items are passed into the component to initialize its content. Also functions are passed to enable interaction on components.

### How the User Triggers State Changes

In the App.js, I use state and setState function to change the value of some variables. For example, when users select options from the dropdown list, I use setState() function to change the corresponding value. And then in the filterList() function I define, I use filter() method to filter the data with the properties, and use setState() to set the displayed data.
