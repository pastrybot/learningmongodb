### MongoDB-Workshop

__Relational DBs__

Traditiaoony databases have been mostly relationlonlal databases.

Relational DBs store data very similar to an excel sheet with columns and rows.

For example, this is what a table might look like for a customers.


| fName        | lName          | id  |
| ------------- |:-------------:| -----:|
| "Doug"      | "Walter" | 12e120 |
| "Eric"      | "Berry"      |   34234 |
| "Sandra" | "Neat"      |    12341 |


The columns descibbe the property of the data, and each row represents an actual record.
Relational DBs also implement Structured Query Language, which is a way of accessing, and updating our database.

__Non-Relational DBS__

Non relational DBs are much less structured then Relational DBs. Instead of having tightly couple tables, we structure our data in 'JSON'

Previsouly a specifc data object was known as a record, in NR dbs a piece of data is a document:

```
var customer = {
 fName: "Bob",
 lName: "Wal",
 id: 3122
 }
```
 If you are a javascript developer you are very familiaer with this data structure.
 
 A bunch of documents together is called a `collection` , which is roughly the equivalent to a table.
 
 ----
  
 #### MongoDB

Is a documnet driven database in which all of the data is stored in JSON format.
Does not rely on table joins, therefor it is much more flexible. Supports Aigle, scalability, and performance.
MongoDB is very scalable. 
Much more difficult in relational.









----

#### Node Application Overview

Clents
Node (app)
MongoDB
MongoShell
Driver (handles communcation to DB)

[logo]: http://i61.photobucket.com/albums/h79/bigskycodeacademy/unspecified_zpsduke3mnn.png "Logo Title Text 2"


----
#### Installing Mongodb

The easiest way is to use [homebrew](https://brew.sh/)

Next create your directory
`mkdir -p /database/db`

----
#### JSON
key values
  keys must be strings
  seperated with colons
  fields seperated with comma
  start and close json with curly braces
  
value types available
String,
Number,
Boolean,
Array
Object

In this object we have serveral types of nesting to consider.

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

