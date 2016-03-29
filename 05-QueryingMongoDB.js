
// Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations)

// Here i'm going to show 2 get methods (get all & get by ID), 1 put, 1 post and 1 delete method.
// These are only the methods and not the entire script.

var allJokes = function (callback) {
    var db = getConnection();
    db.collection('jokes').find().toArray(function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
};

var getJoke = function (id, callback) {
    var db = getConnection();

    db.collection('jokes').findOne({'_id': new ObjectId(id)}, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
};

var updateJoke = function (id, joke, callback) {
    var db = getConnection();

    db.collection('jokes').replaceOne({'_id': new ObjectId(id)}, joke, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
};

var createJoke = function (joke, callback) {
    var db = getConnection();

    joke.lastEdited = new Date().toISOString();

    db.collection('jokes').insertOne(joke, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
};

var removeJoke = function (id, callback) {
    var db = getConnection();

    db.collection('jokes').deleteOne({'_id': new ObjectId(id)}, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
};
