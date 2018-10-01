const {Flint, NodeAdapter} = require('gun-flint');
const firebase = require('firebase');

const GunFirebase = new NodeAdapter({

    /**
     * @type {boolean}  Whether or not the adapter has been properly initialized and can attempt DB connections
     */
    initialized: false,

    /**
     * Handle Initialization options passed during Gun initialization of <code>opt</code> calls.
     * 
     * Prepare the adapter to create a connection to the Firebase server
     * 
     * @param {object}  context    The full Gun context during initialization/opt call
     * @param {object}  opt        Options pulled from fully context
     * 
     * @return {void}
     */
    opt: function(context, opt) {
        console.log("initialized", opt)

        let gunfirebase = opt.gunfirebase || null;
        firebase.initializeApp(gunfirebase);
        if (firebase) {
            this.initialized = true;
            let apiKey = firebase.apiKey;
            let authDomain = firebase.authDomain;
            let databaseURL = firebase.databaseURL;
            this.db = firebase.database();
            console.log("connected to the database")

          
        } else {
            this.initialized = false
        }
    },
    /**
     * Retrieve results from the DB
     * 
     * @param {string}   key    The key for the node to retrieve
     * @param {function} done   Call after retrieval (or error)
     *
     * @return {void}
     */

   get: function(key, done) {
        console.log("calling get")


        if (this.initialized) {
            var db = firebase.database();
           var ref = db.ref(key);

           ref.once("value", function(snapshot) {
                console.log("the key is : ", key)
            console.log("the value is: ", snapshot.val());
            done(null, null);
         }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      done(errorObject);
     });
        }
    },


    /**
     * Write nodes to the DB
     * 
     * @param {string}   key   The key for the node
     * @param {object}   node  The full node with metadata
     * @param {function} done  Called when the node has been written
     * 
     * @return {void}
     */


    put: function(key, node, done) {

       if (this.initialized) {
                console.log("calling put")

        delete node["_"]
        delete node[">"]
        delete node["#"]
            
            var db = firebase.database();
            var ref = db.ref();


            var postsRef = ref.child(key);
            console.log("writing to", key)
            postsRef.set(
                 node
                , done())
                        console.log("the new value is", node)
                         console.log("this is working")

            }
   },  

});
module.exports = GunFirebase
