// Generated from Compilador.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CompiladorParser.
function CompiladorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CompiladorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CompiladorListener.prototype.constructor = CompiladorListener;

// Enter a parse tree produced by CompiladorParser#prog.
CompiladorListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#prog.
CompiladorListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#expr.
CompiladorListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#expr.
CompiladorListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#inicial.
CompiladorListener.prototype.enterInicial = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#inicial.
CompiladorListener.prototype.exitInicial = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#condicional.
CompiladorListener.prototype.enterCondicional = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#condicional.
CompiladorListener.prototype.exitCondicional = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#oposicao.
CompiladorListener.prototype.enterOposicao = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#oposicao.
CompiladorListener.prototype.exitOposicao = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#conclusao.
CompiladorListener.prototype.enterConclusao = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#conclusao.
CompiladorListener.prototype.exitConclusao = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#negacao.
CompiladorListener.prototype.enterNegacao = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#negacao.
CompiladorListener.prototype.exitNegacao = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#conjuncao.
CompiladorListener.prototype.enterConjuncao = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#conjuncao.
CompiladorListener.prototype.exitConjuncao = function(ctx) {
};



exports.CompiladorListener = CompiladorListener;