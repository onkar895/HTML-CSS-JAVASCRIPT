let user = {
    // Adding Key : value Pairs - (Properties)
    gamingName: 'cyborgavn',
    age: 28,
    email: 'abc@gmail.com',
    gender: 'male',
    location: 'Mumbai',

    // Adding Methods : The blog property of the 'user' is an array of objects, each with its own title,author and likes.
    blog: [{ title: 'Top games of 2023', coauthor: 'Sumit', likes: 10000 },
        { title: 'Most streamed game of 2023', coauthor: 'Avinash', likes: 2000 },
        { title: 'Best esports of 2023', coauthor: 'Onkar', likes: 50000 },
    ],


    //login: function(){
    login() {
        console.log("The user has successfully logged in");
    },

    // logout: function(){
    logout() {
        console.log("The user has successfully logged out");
    },

    // logBlog: function(){
    logBlog() {
        //console.log(blog); // Uncaught ReferenceError: blog is not defined
        console.log(this);
        console.log(this.blog);
        console.log("These are all the articles of a blog:");
        this.blog.forEach( // Callback function that accepts up to three arguments and 'forEach' calls the callback function one time for each element in the array.
            // So here forEach is used to logs each blog's title, coauthor, and likes through user object this.
            blog => {
                // console.log(blog);
                console.log(blog.title, blog.coauthor, blog.likes);
            }
        );
        // console.log();   
    }

}

//1st way of accessing the properties using object
console.log(user);
console.log('Gaming name: ' + user.gamingName);
console.log("Gamer's Age: " + user.age);

// Updated the value of ages
user.age = 26;
console.log("Updated Gamer's Age: " + user.age);

//2nd way of accessing the properties using object
console.log(user['gamingName']);
console.log(user['email']);
console.log(user['location']);

const key2loc = 'location';
console.log(user[key2loc]);

// Updated gamingName
user['gamingName'] = 'Star2ace';
console.log(user['gamingName']);

// Type of user which is object
console.log(typeof user);

user.login();

user.logout();

user.logBlog();

console.log(this); // 'this' is used globally, thats why it logs the window on the console screen.


// storing object inside array:

// blog: ['Top games of 2023', 'Most streamed game of 2023', 'Best esports of 2023'],

const blogOne = [
    { title: 'Top games of 2023', coauthor: 'Sumit', likes: 10000 },
    { title: 'Most streamed game of 2023', coauthor: 'Avinash', likes: 2000 },
    { title: 'Best esports of 2023', coauthor: 'Priyanka', likes: 50000 },
];

console.log(blogOne);
console.log(blogOne[0]);


// Math: 

console.log(Math);
console.log("The value of PI in Math obj: " + Math.PI);
console.log("The value of E in Math obj: " + Math.E);

const cost = 200.73;
console.log("Rounded value: " + Math.round(cost));
console.log("Floor value: " + Math.floor(cost));
console.log("Ceil value: " + Math.ceil(cost));
console.log("Trunc value: " + Math.trunc(cost));


//Random number
const randomno = Math.random();
console.log("The random value generated is: " + randomno);
console.log("The random value generated (1-10) is: " + randomno * 10);
console.log("The random value generated (1-100) is: " + randomno * 100);