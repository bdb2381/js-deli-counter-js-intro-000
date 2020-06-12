/*Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
*/

// currentLineofPeopleArray is array of names of everyone in line
// newPersonsName  is name of the most recent person to wanting to join currentLineofPeople-Array


function takeANumber(currentLineofPeopleArray, newPersonsName){
    //add newPersonsName to end of currentLineofPeople-Array
  currentLineofPeopleArray.push(newPersonsName)

    //write welcomeMessage using newPersonsName & newPersonsName position in line by knowing new person is always the last person to join which is the length of the array
  let welcomeMessage = `Welcome, ${newPersonsName}. You are number ${currentLineofPeopleArray.length} in line.`

    //return the welcomeMessage
  return welcomeMessage

}


/*Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/

//currentLineofPeople is array of who is now in line waiting to get served

function nowServing(currentLineofPeople){
    //if currentLineofPeople array has no one in line, return a message of "no one waiting"
  if (currentLineofPeople.length === 0){
    return "There is nobody waiting to be served!"
  }

  else{
    //put array[0] person into firstPersoninLine and return it
    //remove or  'shift' the first person off the currentLineofPeople array

  let firstPersoninLine = currentLineofPeople[0]
   currentLineofPeople.shift()

  return 'Currently serving ${firstPersoninLine}'
  }


}
