
/* description: Parses and executes mathematical expressions. */
%{
  var represent = require("./representation.js")
%}
/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"+"                   return '+'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { console.log(represent($$)) }
    ;

e
    : e "+" e
        {$$ = {parent:$2,leftChild:$1,rightChild:$3}}
    | NUMBER
        {}
    ;
