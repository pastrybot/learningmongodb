### MongoDB-Workshop
1) Clone this repo
`git clone https://github.com/fresh5447/MongoDB-Workshop.git`
2) Create your own repo
3) Point this codebase to your new repo
`git set-url origin 'someNewUrl'`
4) Update the READme as you go, and commit your code.

---

__Relational DBs__

Historically databases have been mostly relational or SQL databases.

This means they store data in the format of tables and records.

A table is how you desribe a piece of data, for example:

| fName        | lName          | id  |
| ------------- |:-------------:| -----:|
| "Doug"      | "Walter" | 12e120 |
| "Eric"      | "Berry"      |   34234 |
| "Sandra" | "Neat"      |    12341 |


You can think of relational databases just like excel sheets. A table or excel page describes what a piece of data will contain.

A specific row in the table is a record.

ie { "Doug"      | "Walter" | 12e120  }

Additionaly tables may have relationships, or ways of relating peices of data together. We will learn how to do this in another section of the course but to learn more about it please read the 'types of associations' section of [this guide](http://guides.rubyonrails.org/association_basics.html)



Relational databases also use Structured Query Language, which is a way of accessing, and updating our database. We will learn SQL in a couple of weeks


----

__Non-Relational DBS__

Non relational DBs are much less structured then Relational DBs. Instead of having tightly couple tables, we structure our data in 'JSON'

Previously a specific data object was known as a `record`, in NR dbs a piece of data is a document:

```
var customer = {
 fName: "Bob",
 lName: "Wal",
 id: 3122
 }
```
 If you are a javascript developer you are very familiar with this data structure.

 A bunch of documents together is called a `collection` , which is roughly the equivalent to a table.

 ----

 #### MongoDB

Is a document driven database in which all of the data is stored in JSON format.

Does not rely on table joins, therefor it is much more flexible.

Supports agile software development, scalability, and performance.


----

#### Node Application Overview

Clients

Node (app)

MongoDB

MongoShell

Driver (handles communication to DB)


![alt text](http://i61.photobucket.com/albums/h79/bigskycodeacademy/unspecified_zpsduke3mnn.png "Logo Title Text 1")


----
#### Installing Mongodb

The easiest way is to use [homebrew](https://brew.sh/)

Next create your directory
`mkdir -p /database/db`

----
#### JSON
key values
  keys must be strings
  separated with colons
  fields separated with comma
  start and close separated with curly braces

__value types available__
 * String
 * Number,
 * Boolean,
 * Array
 * Object

In this object we have several types of nesting to consider.

```json
{
  "headline" : "Apple Reported Fourth Quarter Revenue Today",
  "date" : "2015-10-27T22:35:21.908Z",
  "views" : 1132,
  "author" : {
    "name" : "Bob Walker",
    "title" : "Lead Business Editor"
  },
  "published" : true,
  "tags" : [
    "AAPL",
    { "name" : "city", "value" : "Cupertino" },
    [ "Electronics", "Computers" ]
  ]
}

```
The flexiblity JSON offers allows us to design our data with complete flexibility.

For more information [json.org](http://json.org/)

----
#### BSON

Mongo actually stores JSON in BSON, Binary JSON.

Bsonspec.org

MongoDB drivers send and receive data as BSON, and when it is written to the DB it is stores as BSON.

The drives actually map BSON to JSON when you recall the data.

BSON is
Light
Traversable (support the variety of operations neccessary to writing, reading, etc...)
Effiecient

Also extends JSON value types: (dates, images, etc)

----

#### Crud operations
Create
Read
Update
Delete

The basic operations for working with data in any database.

Lets use the mongo shell

Start your server

`mongod`

Launch the shell

`mongo`

`help` to see a list of commands avaialble

Note there are commands for show dbs and show collections.
Collections are organized into databases.

Create a DB called Video, that contains a collection for movies, tv, and actors.

video.movies would specif the movies collection in the video database.

`use database` will switch to that database.

Lets try it:

`use video`

insert one: db.movies.insertOne()

Then we just need to pass the function an argument.

`db.movies.insertOne({"title": "Jaws", "year", 1975})`

We now have a Videos database and a Movies collection inside of this database.

Lets insert a couple of new documents. Then lets retrieve them all.

`db.movies.find()`

or `db.movies.find().pretty()`

We can pass in `query` operators into the find command, to find specifc items.

`db.movies.find({ "year": 1981 }).pretty()`

optional: hasNext() && next

----
#### RoboMongo

---
#### Mongo & Node

make sure node is installed
`node -v`
If you get back a number, or version, you are good to go.

If not you need to [install Node](https://www.google.com/search?q=install+node&oq=install+node&aqs=chrome..69i57j69i65j69i60l3.1117j0j4&sourceid=chrome&ie=UTF-8)

```js

// app.js

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/video';

MongoClient.connect(url, function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc.title);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find()");
});

```

Let's put it all together using express and ejs
Checkout `expressServer.js`


----
#### More CRUD

__insert many__

```
db.moviesScratch.insertMany(
    [
        {
	    "_id" : "tt0084726",
	    "title" : "Star Trek II: The Wrath of Khan",
	    "year" : 1982,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0796366",
	    "title" : "Star Trek",
	    "year" : 2009,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0084726",
	    "title" : "Star Trek II: The Wrath of Khan",
	    "year" : 1982,
	    "type" : "movie"
        },
        {
	    "_id" : "tt1408101",
	    "title" : "Star Trek Into Darkness",
	    "year" : 2013,
	    "type" : "movie"
        },
        {
	    "_id" : "tt0117731",
	    "title" : "Star Trek: First Contact",
	    "year" : 1996,
	    "type" : "movie"
        }
    ],
    {
        "ordered": false
    }
);
```
More queries
`db.movieDetails.find({ rated: "PG-13" }).count();`
`db.movieDetails.find({ rated: "PG-13", year: 2009 }).count();`
Since they are both inside of the same query selector, the fields implicitly use `&&`

----

#### Mongoose Driver

__Benefits__

* Easier database transactions

* Consistent database with schemas

* Fake relationships with population
