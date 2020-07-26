class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.star = false;
    this.id = Date.now();
  }

  saveToStorage(ideaCard) {
    //one job: save instance to storage
    //stringify
  }

  deleteFromStorage(storedIdea) {
    //de-stringify
  }

  updateIdea() {
    //update idea's title, body, or starred state
    //populate array of objects(card)
    //change value from one that already exists
      //reference id property???
  }
};

// Each idea should be created as an object instance of the Idea class.
// Once an idea object is created, all that data can be used to update the DOM. That object should also be added to a list of all the ideas your application currently has.
// This should probably be a global variable in your main.js.
