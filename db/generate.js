// {
//     {
//        "id": 1,
//             "firstName" : "anis",
//              "lastName" : "hakim"
//    }
// }

module.exports = function () {
    var faker = require("faker");
    var _= require("lodash");


return {
    person:_.times(30, function (n) {
        return {
            id: n + 1,
            firstName: faker.name.firstName(),
            lastName:faker.name.lastName(),
            avatar: faker.image.avatar(),
            email: faker.internet.email(),
            address:faker.address.streetAddress()
        }
    })
    }
}