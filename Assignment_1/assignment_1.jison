
/* description: Parses and executes mathematical expressions. */

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
        { return $$ }
    ;

e
    : e "+" e
        {$$ = [$1, $2, $3]}
    | NUMBER
        {}
    ;
