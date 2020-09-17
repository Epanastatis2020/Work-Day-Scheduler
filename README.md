# Work-Day-Scheduler

This is a webpage made in Html, CSS and Javascript. The Work Day Planner provides users with an application in which they can plan their business day hour-by-hour. The application allows users to enter, save and delete calendar events. 
​
## Contents
<p>
The app is composed of 1 page, index.html. It includes a javascript file sciprt.js, which provides all the functionality as well as dynamically creating the table. There is also a style.css sheet which provides minimal auxiliary styling, as most of the styling is done via Bootstrap.
</p>

## Objective
<p>
The goal in this project was to use javascript and jquery to create a dynamic day planner in which users could enter and save calendar events. The planner had to present the current day at the top of the page. The planner also needed to change dynamically such that the current hour was highlighted, and passed hours were no longer able to be edited. Saved events needed to persist after a page refresh.
</p>

## Built With
​
* [VScode](https://code.visualstudio.com/) - The editor of choice
* [Git for Windows](https://gitforwindows.org/) - Brings the full feature set of Git SCM to Windows
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [jQuery](https://jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.
* [Bootstrap](https://getbootstrap.com/) - The world’s most popular front-end open source toolkit
* [FontAwesome](https://fontawesome.com/) - The web's most popular icon set and toolkit.
​
## Summary of project
In this assignment, we were tasked to create a work day planner that would show each hourly timeslot during the business day and provide users with the ability to enter in an event or task. The user should then be able to save this to localStorage. 

This was a challenging project, as it had many interacting pieces and I pushed myself to use as much jQuery as possible (creating all the table elements via jQuery) and also to use moment.js (I assigned each row a timestamp, for example, to comapare with the current time to determine whether or not a timeslot was eligible to be edited).

I used Bootstrap to style the app as this gave me a passable aesthetic while not consuming a lot of time or effort. I also used FontAwesome icons as my save and delete buttons.

I have also added individual and global delete functionality, so that users can choose to delete a specific event line, or clear the total localStorage. I had planned to add functionality to allow the user to view previous days, and plan future days, but I ran out of time. This functionality may be completed in the future.

## Screenshots

![Image here](image url)



## Licence
​
No licence was required for this project.
​
## Link to the site
<a href="https://epanastatis2020.github.io/Work-Day-Scheduler/">Please visit the site on GitHub Pages</a>

## Acknowledgements

My mentor John S was instrumental in helping me learn to use moment.js properly

AskBCS helped me resolve some bugs when I was stuck

## Authors
​
* **CON ANGELAKIS** - 
github.com/Epanastatis2020
con.angelakis@gmail.com