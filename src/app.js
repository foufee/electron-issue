var Calipers = require('calipers')('jpeg');
Calipers.measure("a.jpg", function(err, result) {
    console.log(result)
})
