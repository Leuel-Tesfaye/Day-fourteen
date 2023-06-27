/** sometimes you will get a runtime error when you try to access an undefined variable or call undefined function
 * javascript provides an error handling mechanism to catch runtime error using try-catch finally block.
 */

/** try : wrap suspicious code that may throw an error in try block. This block allows us to define a block of code to be tested for error while it's being executed 
 * 
 * catch: write a code to do sth in catch block when error occur. This block can have an error information. 
 * specifically displays error info. 
 * 
 * finally : will always be executed regardless of the occurrence of an error. 
 */

try {
   let firstName = 'Prince'
   let fullName = firstName + ' ' + lastName
} catch (error) {
    console.log(error)
}

try {
let fName = 'prince'
let fullName2 = fName + lastName

} catch (error) {
    console.error(error)
}
finally{
    console.log('I will be executed no matter what')
}

try {
    let lastName = 'Hope'
    let fullName = firstName + lastName
} catch (error) {
    console.log('Name of the error', error.name)
    console.log('Error message', error.message)
}
finally{
    console.log('I will be executed !!')
}