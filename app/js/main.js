// console.log('Aloha Mr. Hand')
// import $ from 'jquery'
// import Keypress from 'keypress.js'
// var Keypress = require('keypress.js')

// const listener = Keypress.Listener()
const listener = new window.keypress.Listener()

listener.simple_combo('9', function () {
  console.log('You pressed shift and s')
  })


// var my_scope = this
// var my_combos = listener.register_many([
//     {
//         "keys"          : "shift s",
//         "is_exclusive"  : true,
//         "on_keydown"    : function() {
//             console.log("You pressed shift and s together.");
//         },
//         "on_keyup"      : function(e) {
//             console.log("And now you've released one of the keys.");ss
//         },
//         "this"          : my_scope
//     },
//     {
//         "keys"          : "s",
//         "is_exclusive"  : true,
//         "on_keyup"      : function(event) {
//            console.log('whammos')
//             // Normally because we have a keyup event handler,
//             // event.preventDefault() would automatically be called.
//             // But because we're returning true in this handler,
//             // event.preventDefault() will not be called.
//             return true
//         },
//         "this"          : my_scope
//     }
// ])

