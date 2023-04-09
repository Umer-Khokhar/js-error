// Error Handling
function errorNow() {
    try {
        const name = 'Umer'
        name = "Aswad"
    }
    catch(err) {
        console.log(err)
    }
};
errorNow()

// Erro Handling with thrown
function thrownErr() {
    try {
        // const my = "coding"
        // my = "gardening"
        throw new Error("This is my Custom error")
    }
    catch(err) {
        console.log(err)
    }
};
thrownErr()

// throw error method 2:
function throwerr() {
    try {
        throw new myThrow("This is my Custom error two.","Log error")
    }
    catch(err) {
        console.log(err.stack)
    }
};
throwerr()
// Throw function
function myThrow(msg) {
    this.msg = msg
    this.name = "Custom Error"
    this.stack = `${this.name} : ${this.msg}`
}

// Error with loops 
const loopError = () => {
    let i = 1;
    do {
      try {
        if (i % 2 !== 0) {
            throw new Error("This is the odd Number")
        } else {
            console.log("This is the even Number.")
        }
      }
      catch(err) {
        console.error(err)
      } finally {
        console.log("Finally....")
        i++
      }
    } while(i <= 5)
};
loopError()