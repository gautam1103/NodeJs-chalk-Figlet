
let path = require ("path");


// for(let i=1; i<=10; i++){
//     let dirPathName =`Lecture-${i}`;
//     fs.mkdirSync(dirPathName);
//     fs.writeFileSync(path.join(dirPathName,"readme.md"),`# readme for ${dirPathName}`);
// }

let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("ext", ext);
let name=path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);


