// filesystem
// files -> create, read, update, delete

let fs = require("fs");



/* READ */



// let buffer = fs.readFileSync("abc.js");

// console.log("bin data "+ buffer);



/* CREATE */




// fs.openSync("random.txt", "w");

/* If no file then create and if exist then replace it's content via writeFileSync */

//fs.writeFileSync("random.txt", "Hum aaj Node Js Padhen!");



/* UPDATE */



//fs.appendFileSync("random.txt", "Bhai kb start krna hai meko? ");


/* CREATE FOLDER   */


// fs.mkdirSync("MyDirectory");

// fs.writeFileSync("MyDirectory/myFiles.txt", "Mere Dad ki Maruti");

// let content = fs.readdirSync("MyDirectory");

// console.log(content);
//  for(let i =0; i<content.length; i++){
//     console.log("file ", content[i], "is removed");


//     /* Delete A File */


//     fs.unlinkSync("MyDirectory/"+content[i]);
//  }

 /* Delete A Folder */


 // fs.rmdirSync("MyDirectory")

 /* EXIST OR NOT */

// fs.existsSync -> File  exist at this path via returning true or false

// let doesPathExist = fs.existsSync("abc.text");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("random.txt");
// console.log(doesPathExist);

// let detailsObj=fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

/*  Created 10 Files Automatic */
// for(let i=1; i<=10; i++){
//     let dirPathName =`Lecture-${i}`;
//     fs.mkdirSync(dirPathName);
//     fs.writeFileSync(dirPathName+"\\"+"readme.md",`# readme for ${dirPathName}`);
// }