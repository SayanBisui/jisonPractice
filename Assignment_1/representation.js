var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("assignment_1.jison", "utf8");
var parser = new jison.Parser(bnf);

var represent = function(input, result){
  if (!result) {
    result = "";
  }
  result += "(";
  input.forEach(function(element){
     if(element instanceof Array){
       result = represent(element, result);
     }
     else{
       result += element;
     }
   });
   return result + ")";
}

console.log(represent(parser.parse('1+2+3+4')));
console.log(represent(parser.parse('1+2+3+4+5+6+7')));
