Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

var currentLineofPeople-Array //array of names of everyone in line
var newPersonsName  //name of the most recent person to wanting to join currentLineofPeople-Array


function takeANumber(currentLineofPeople-Array, newPersonsName){
  //add newPersonsName to end of currentLineofPeople-Array
  currentLineofPeople-Array.push(newPersonsName)

  //determine what position newPersonsName is in IRL line (i.e. not array position) by adding 1 to array position 
let welcomeMessage = "Welcome ${newPersonsName}. You are number "

  //return welcomeMessage using newPersonsName & newPersonsName position in line
  return welcomeMessage

}