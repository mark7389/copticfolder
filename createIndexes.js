const fs = require('fs');
const spawn = require('child_process').spawn;
let arr = [];
for(let i = 17; i<97; i++){
  arr.push("http://memory.loc.gov/natlib/ihas/service/coptic/200155816/00"+i+"v.jpg");
}
arr = arr.join("\n");
fs.writeFile("endPoints.txt", arr, (err)=>{
  if(err) throw err;
  // spawn("wget",["-i","endPoints.txt", "-P","NoteImages/"],{cwd:"/",stdio:"inherit",shell:true});

});

