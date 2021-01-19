function arraytoObject(people1,people2){


var people =[["Bruce","Banner","male",1975], ["Natasha","Romanoff","female",1998]]
var people1 = {
    firstName : "Bruce",
    lastName : "Banner",
    gender: "male",
    age : 1975,
    firstName1 : "Natasha",
    lastName1 : "Romanoff",
    gender1: "female",
    age1 : 1945,
    
    
}
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
var people2 = {
    firstName: "Tony",
    lastName: "Stark",
    gender: "male",
    age: 1980,
    firstName1: "Pepper",
    lastName1: "Pots",
    gender1: "female",
    age1 : "Invalid Birthdate",
}
var now = new Date(2020,12, 29)
var thisyear = now.getFullYear()
console.log("1. " + people1.firstName + " " + people1.lastName + ": { \n firstname : " + "\""+ people1.firstName + "\"," + "\n lastName : " +"\"" + people1.lastName + "\"," + "\n gender : " + "\"" + people1.gender + "\", " +"\n age : " + (thisyear - people1.age)+ "\"" + "\n2. " + people1.firstName1 + " " + people1.lastName1 + ": { \n firstname : " + "\""+ people1.firstName1 + "\"," + "\n lastName : " +"\"" + people1.lastName1 + "\"," + "\n gender : " + "\"" + people1.gender1 + "\", " +"\n age : " + (thisyear - people1.age1)+ "\"" +"\n }" )
console.log("1. " + people2.firstName + " " + people2.lastName + ": { \n firstname : " + "\""+ people2.firstName + "\"," + "\n lastName : " +"\"" + people2.lastName + "\"," + "\n gender : " + "\"" + people2.gender + "\", " +"\n age : " + (thisyear - people2.age)+ "\""+ "\n2. " + people2.firstName1 + " " + people2.lastName1 + ": { \n firstname : " + "\""+ people2.firstName1 + "\"," + "\n lastName : " +"\"" + people2.lastName1 + "\"," + "\n gender : " + "\"" + people2.gender1 + "\", " +"\n age : " + (thisyear - people2.age1)+ "\"" +"\n }" )
}


arraytoObject([])
