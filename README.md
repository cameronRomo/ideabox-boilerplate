# Ideabox Group Project

  This project is deeply dependent upon the understanding of parent/child relationships of HTML elements, as well as event delegation and JSON/local storage.  Core front-end languages of HTML, CSS, and JavaScript were used, as well as the Document Object Model for the user interface and the Data Model for accurate record of user input.  This application gives the user the chance to create and track various cards containing the user's ideas.  These idea cards include two pieces of content: title and body.  Each time the user saves a new idea, that idea is added to the card display, which is blank on initial load.  The user can click on the star icon to favorite the card, as well as click on the x icon to delete the card from view.  Our team had to research and use the concepts of event delegation to add this functionality to the dynamic user cards on display.  Event delegation is necessary for this project because the idea cards do not naturally exist in the application's HTML file.  Due to their dynamic nature, they must be accessed by elements that do have a place in the HTML file, and are connected in some way.  We do not yet allow the user to maintain data on page reload, but this is a feature for which we are planning in the near future.     

# Project Team

[Nicole Gooden](https://github.com/nicolegooden)

[Joe Varela](https://github.com/jobbotrock)

[Cameron Romo](https://github.com/cameronRomo)

Check out our group's [IdeaBox!](https://nicolegooden.github.io/ideabox-boilerplate/)

# Functionality

Mobile Layout (Media specs here i. e. 400px)
*Screenshots/giphs needed*

* When user is within the media specifications they should have a "hamburger menu" icon in the upper left containing the Filter for starred ideas with a button. Below that There is a Title and Body for the user to input their ideas, and a save button to save. Under that there is a "search ideas" bar which should allow the user to search through their idea cards. Below this main box, the user should see container full of their idea boxes. This comes complete with a clickable star to mark highly valued cards, or an 'x' button for un-valued cards. The main section of the card should display to the user their saved title and body text, and under that there is a comment section for the user to input various comments on their cards.


# Learning Goals

* Build stronger CSS and HTML skills and strategies.
* Continue to improve on building responsive client-side applications with good user feedback
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

# Progression

# Wins

* The delete functionality on each idea card allows the user to click on the card's 'x' to delete the card from view.  This win taught us how to use event delegation, where the naturally-existing parent element listens for events on its dynamically-created children.  In this case, we were able to add an event listener to the parent element(sectionIdeaCards) that would be fired when the 'x' is clicked by the user.  We learned how to use `parentElement.remove()`, which is a method called on the `target`.  When this method is called on the target, the grandparent element, and all of its contents, is removed from view.  Furthermore, we used the `splice()` method within this function to remove the targeted card from `ideas[]`, which is referenced when displaying the user's cards.  As we have it, the DOM is being updated with the card's removal, part of the data model is reflecting that change, and the existing cards shift ahead in position when a card is removed from a display of two or more ideas.  Overcoming the obstacle that is event delegation, from conceptual understanding, to syntax, to implementation, was a tremendous learning process that led to a satisfying outcome.

# Challenges

* The CSS.  Our group has taken the opportunity to experiment with flex-box and grid since day one of this journey.  We initially set up our HTML file with classes to be referenced in the stylesheet.  It took some time for us to realize that the grid and all of its associated properties need to be stated in the container, rather than on the element for which the style should appear.  Also, figuring out which units of measure to use for various elements posed a problem for us when it came to responsive design.  We often wondered why our search icon scaled with the page, or why it would stay a fixed height and width.  We realized that when using percentages, that element would always consume the specified percentage of the container in which it lives, no matter how large or small that container may be.  In our next project, we intend to utilize our units of measure more precisely to match their most desirable purpose.  This could reduce our time spent adjusting the size/relationship of elements and would allow us to point our energy in a different direction.  

#Next Steps

*   As of now, if a star is clicked(favorited) and the user saved a new idea card from the form's inputs, the aforementioned card will no longer have a favorited, red star.  It will return to its natural state, which is the outline star.  We plan to update the data model with these changes, so that the favorited card will appear favorited when new cards are added.

* Use local storage to allow user data to persist on page reload/refresh.  At this point in our progression, if the user refreshes the page, all of the displayed cards will be missing from the idea cards section, as well as from the ideas array which contains all of the user's idea cards from that session.

* Reference the data model, to be updated when changes are made by the user.  As of now, we are lacking some key object instantiation from our Idea class, which causes difficulty in tracking the source of truth for user data.  

* Allow the user to unfavorite a card that had already been favorited.  The user can currently click on the outline star to favorite it, but if that star is clicked on once more, it remains favorited.  Based on likely user expectations, we plan to update this functionality so that both user actions can occur upon clicking the card's star.

* Adjust styling through CSS.  The idea cards tend to expand and shrink based on the number of cards displayed and the amount of content the user types into each of the form inputs. Ideally, we plan to correct this distorted display by working more closely with the grid and text wrapping at a breakpoint.     

# Project Spec & Rubric
[IdeaBox](https://frontend.turing.io/projects/module-1/ideabox-group.html)
