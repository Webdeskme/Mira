$(document).ready(function(){
var fs = require('fs');
const wd_homedir = require('os').homedir();
var wd_home = wd_homedir + '/Documents/Mira/';
var wd_mem = wd_homedir + '/Documents/Mira/Memory/';
var h = "Hello!";
var s = "";
if (!fs.existsSync(wd_home)) {
      fs.mkdirSync(wd_home);
    }
if (!fs.existsSync(wd_mem)) {
      fs.mkdirSync(wd_mem);
    }
$("#sub").click(function(){
	let y = 1;
	let z = 1;
	$("#con").append("> " + $("#in").val() + "</br>");
	s = $("#in").val();
	$("#in").val("");
	//console.log("Going to get file info!");
// list all files in the directory
let files = fs.readdirSync(wd_mem); 
files.forEach(file => {
		
        //console.log(file);
        
			let data = fs.readFileSync(wd_mem + file, 
            {encoding:'utf8', flag:'r'}); 
			let mem = JSON.parse(data);
			//console.log(mem.a);
			if (mem.q == h){
				y = 2;
				//console.log(y);
				if(mem.b == s){
					mem.a = s;
				}
				else{
					mem.b = s;
				}
				let data = JSON.stringify(mem);
				fs.writeFileSync(wd_mem + file, data);
			}
			if(mem.q == s){
				z = 2;
				console.log(z);
				h = mem.a;
				$("#con").append(mem.a + "</br>");
			}

		//console.log('This is after the read call');


    });

///////////////////////////////////////////////////////////////////////////////////

	console.log(z);
if(y == 1){
	let ms = Date.now();
	let write = { 
		q: h,
		a: s,
		b: s
	};
 
let data = JSON.stringify(write);
fs.writeFileSync(wd_mem + ms + '.json', data);
//h = s;
//$("#con").append(h + "</br>");
}
if(z == 1){
	h = s;
	$("#con").append(h + "</br>");
}
});
});
