//Declare our collection 
import { Mongo } from 'meteor/mongo';
//pass in the name of the collection. 'employees'
export const Employees = new Mongo.Collection('employees');
