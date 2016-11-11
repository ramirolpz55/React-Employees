//Only executes on the server.
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
    //Great place to generate data

    //Check to see if data exists in the collection 
    //See if the collection has any records - Use .count instead of .length 
    const numberRecords = Employees.find({}).count();
    console.log(numberRecords);
    if (!numberRecords) {
        //Generate some data... use _.times same as a for loop using the lodash 
        _.times(5000, () => {
            //In ES6 we do this instead of examples of const below...
            const { name, email, phone } = helpers.createCard();
            //const name = helpers.createCard().name;
            //const email = helpers.createCard().email;
            //const phone = helpers.createCard().phone;
            //Save Data 
            Employees.insert({
                //This is the same as writing example below
                name,
                email,
                phone,
                avatar: image.avatar()
                    //name: name,
                    //email: email,
                    //phone: phone
            });
        });
    }

    Meteor.publish('employees', function() {
    	return Employees.find({}, { limit: 20 });
    })
});
