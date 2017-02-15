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
 
 MongoDB
