#!/usr/bin/env node

require('proof')(3, function (equal) {

    var hilbert = require('../..')
    equal(hilbert.xy2d(1, 0, 2), 3)
    equal(hilbert.xy2d(2, 0, 4), 4)
    equal(hilbert.xy2d(9, 9, 4), 10)
    //equal(5, 8)
    //hilbert.xy2d(0, 4, 2)
    console.log("x: 0, y: 1, length: ", hilbert.xy2d(0, 1, 2)) // 1
    console.log("x: 1, y: 1, length: ", hilbert.xy2d(1, 1, 2)) // 2
    console.log("x: 1, y: 0, length: ", hilbert.xy2d(1, 0, 2)) // 3
    console.log("x: 0, y: 2, length: ", hilbert.xy2d(0, 2, 2)) // 4
    console.log("x: 0, y: 3, length: ", hilbert.xy2d(0, 3, 2)) // 5
    console.log("x: 1, y: 3, length: ", hilbert.xy2d(1, 3, 2)) // 6
    console.log("x: 1, y: 2, length: ", hilbert.xy2d(1, 2, 2)) // 7
    console.log("x: 2, y: 2, length: ", hilbert.xy2d(2, 2, 2)) // 8
    console.log("x: 2, y: 3, length: ", hilbert.xy2d(2, 3, 2)) // 9
    console.log("x: 3, y: 3, length: ", hilbert.xy2d(3, 3, 2)) // 10
    console.log("x: 3, y: 2, length: ", hilbert.xy2d(3, 2, 2)) // 11
    console.log("x: 3, y: 1, length: ", hilbert.xy2d(3, 1, 2)) // 12
    console.log("x: 2, y: 1, length: ", hilbert.xy2d(2, 1, 2)) // 13
    console.log("x: 2, y: 0, length: ", hilbert.xy2d(2, 0, 2)) // 14
    console.log("x: 3, y: 0, length: ", hilbert.xy2d(3, 0, 2)) // 15
})
