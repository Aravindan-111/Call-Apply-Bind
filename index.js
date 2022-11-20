/** Call */

const name = {
    firstName: 'John',
    lastName: 'Carter',
};

const getFullName = function(homeTown) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown);
}

getFullName.call(name, 'New York');

const newName = {
    firstName: 'Sachin',
    lastName: 'Tendulkar'
};

// function borrowing
getFullName.call(newName, 'Mumbai');

//-------------------------------------------------------------------------------



/** Apply */

getFullName.apply(newName, ['Mumbai'])

//-------------------------------------------------------------------------------



/** Bind */

const details = getFullName.bind(newName, 'Mumbai')
details();
