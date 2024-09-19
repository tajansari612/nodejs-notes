
const fs = require("fs")   //importing inbuilt module



//01 Writing data to the file
//it creates the text.txt file and write provided text sync is for syncronous call
fs.writeFileSync('text.txt', 'Hello, this is file handling tutorial') 

//it replaces the already with the new text
fs.writeFileSync('text.txt', 'Hello, I am under the water')

// Async
// fs.writeFile('text.txt', 'Hello, this is async call', (err) => {})



//02 Reading data from the file
// Sync
const contacts = fs.readFileSync('contacts.txt','utf-8')
console.log(contacts);

// Async
fs.readFile('contacts.txt', 'utf-8', (err, result) => {
  if(err) console.log("Error: ",err);
  else console.log(result);
})



//03 Appending data
const fd = "./text.txt"
fs.appendFileSync(fd, `Bolo Juban Keshari\n`)
fs.appendFileSync(fd, `Bolo Juban Keshari\n`)
fs.appendFileSync(fd, `Bolo Juban Keshari\n`)
fs.appendFileSync(fd, `Bolo Juban Keshari\n`)


//04 Copying file
fs.cpSync(fd, './copy.txt')


//05 Deleting file
fs.unlinkSync('./copy.txt')


//06 Creating directory
fs.mkdirSync('taj')   //single directory
fs.mkdirSync('ayaj/a/b', {recursive: true}) //nested directory