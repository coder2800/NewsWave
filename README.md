# NewsWave App

This is a responsive News application tracking all the current headlines in the category that user selects. The user can
choose the desired category and for this purpose react‑router has been used. The user can see the title, description, date, author and source of the article. The user can also click on the article to read more about it.

## API used

For this project used the news api available at the following link : [Link of the API](https://newsapi.org/). Note: The free version of this api runs only on localhost and thus for setting up the project on your local system, the user must generate his own api key.

## Project Setup

For setting up this project, after downloading the source code:

### Create a .env.local file

Inside this file, put your api key in the file in the following format : REACT_APP_NEWS_API="Put your api key here"

### `npm run start`

Use this command to run the application on a developement server.

## More info about this application: 

Four react components have been created for this application : 

1. Loading1.js : This component is used to display the spinner while the application is loading.

2. Navbar.js : This component is used for the Navbar. The Navbar gives the user the option to navigate to different categories of news.

3. NewsItem1.js : This component represnts each card in which one article is displayed. 

4. News.js : This component is used to display the entire news for the selected category using articles from the news api. Infinite scrolling feature has been added to this application, therefore the user can scroll infinitely in any chosen category (until the api keeps giving responses).

Besides this the App.js component combines all of this and sets up navigation using react router.

## Created by : Devansh Agarwal.