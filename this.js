// console.dir(this);

// 'use strict';
/* (function() {
    console.dir(this);
})(); */

const user = {
    name: "Kriszti",
    getName: function() {
        console.log("1" + this);
        (function() {
            console.log("2" + this);
        })();
        const af = () => {
            console.log("3" + this);
        };
        af()
    }
};

const getUser = user.getName;
getUser();

window.addEventListener('load', function() {
    console.log(this)
});