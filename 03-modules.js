//Modules

const names = require('./04-name')

const sayhi = function (name) {
    console.log(`hello there ${name}`)
}

console.log(names);

sayhi(names.second_name)
sayhi(names.class_name)

console.log('\n\n\n\n',module);