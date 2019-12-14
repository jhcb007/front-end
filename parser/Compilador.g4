grammar Compilador;
prog: (expr NEWLINE?)* EOF;
expr:
inicial
| expr oposicao? expr
| expr condicional? expr
| expr conjuncao? expr
| expr conclusao? expr
| expr negacao? expr
| WORD;

inicial: (WORD|COND|NEG);
condicional: COND;
oposicao: OP;
conclusao: CONC;
negacao: NEG;
conjuncao: CONJ;

OP: ('ou'|'OU');
COND: ('se'|'se e somente se');
CONC: ('portanto'|'assim'|'logo'|'entao'|'neste caso'|'assim sendo');
NEG: ('nao'|'mas nao esta');
CONJ: ('e');

NEWLINE: [\r\n]+;
WORD: ('a'..'z'|'A'..'Z')+;
WHITESPACE: (' ' | '\t') -> skip;