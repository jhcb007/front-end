// Generated from Compilador.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CompiladorListener = require('./CompiladorListener').CompiladorListener;
var grammarFileName = "Compilador.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\nM\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0005\u0002\u0015\n\u0002\u0007",
    "\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003!\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003%\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003*\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003/\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "4\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00039\n\u0003\u0003",
    "\u0003\u0007\u0003<\n\u0003\f\u0003\u000e\u0003?\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0002\u0003\u0004",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0005\u0002\u0004",
    "\u0004\u0006\u0006\t\t\u0002Q\u0002\u0018\u0003\u0002\u0002\u0002\u0004",
    " \u0003\u0002\u0002\u0002\u0006@\u0003\u0002\u0002\u0002\bB\u0003\u0002",
    "\u0002\u0002\nD\u0003\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000e",
    "H\u0003\u0002\u0002\u0002\u0010J\u0003\u0002\u0002\u0002\u0012\u0014",
    "\u0005\u0004\u0003\u0002\u0013\u0015\u0007\b\u0002\u0002\u0014\u0013",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0017",
    "\u0003\u0002\u0002\u0002\u0016\u0012\u0003\u0002\u0002\u0002\u0017\u001a",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c\u0003",
    "\u0003\u0002\u0002\u0002\u001d\u001e\b\u0003\u0001\u0002\u001e!\u0005",
    "\u0006\u0004\u0002\u001f!\u0007\t\u0002\u0002 \u001d\u0003\u0002\u0002",
    "\u0002 \u001f\u0003\u0002\u0002\u0002!=\u0003\u0002\u0002\u0002\"$\f",
    "\b\u0002\u0002#%\u0005\n\u0006\u0002$#\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&<\u0005\u0004\u0003\t\'",
    ")\f\u0007\u0002\u0002(*\u0005\b\u0005\u0002)(\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+<\u0005\u0004\u0003",
    "\b,.\f\u0006\u0002\u0002-/\u0005\u0010\t\u0002.-\u0003\u0002\u0002\u0002",
    "./\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020<\u0005\u0004\u0003",
    "\u000713\f\u0005\u0002\u000224\u0005\f\u0007\u000232\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u00025<\u0005\u0004",
    "\u0003\u000668\f\u0004\u0002\u000279\u0005\u000e\b\u000287\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:<\u0005",
    "\u0004\u0003\u0005;\"\u0003\u0002\u0002\u0002;\'\u0003\u0002\u0002\u0002",
    ";,\u0003\u0002\u0002\u0002;1\u0003\u0002\u0002\u0002;6\u0003\u0002\u0002",
    "\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002>\u0005\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002",
    "@A\t\u0002\u0002\u0002A\u0007\u0003\u0002\u0002\u0002BC\u0007\u0004",
    "\u0002\u0002C\t\u0003\u0002\u0002\u0002DE\u0007\u0003\u0002\u0002E\u000b",
    "\u0003\u0002\u0002\u0002FG\u0007\u0005\u0002\u0002G\r\u0003\u0002\u0002",
    "\u0002HI\u0007\u0006\u0002\u0002I\u000f\u0003\u0002\u0002\u0002JK\u0007",
    "\u0007\u0002\u0002K\u0011\u0003\u0002\u0002\u0002\f\u0014\u0018 $).",
    "38;="].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "OP", "COND", "CONC", "NEG", "CONJ", "NEWLINE", 
                      "WORD", "WHITESPACE" ];

var ruleNames =  [ "prog", "expr", "inicial", "condicional", "oposicao", 
                   "conclusao", "negacao", "conjuncao" ];

function CompiladorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CompiladorParser.prototype = Object.create(antlr4.Parser.prototype);
CompiladorParser.prototype.constructor = CompiladorParser;

Object.defineProperty(CompiladorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.OP = 1;
CompiladorParser.COND = 2;
CompiladorParser.CONC = 3;
CompiladorParser.NEG = 4;
CompiladorParser.CONJ = 5;
CompiladorParser.NEWLINE = 6;
CompiladorParser.WORD = 7;
CompiladorParser.WHITESPACE = 8;

CompiladorParser.RULE_prog = 0;
CompiladorParser.RULE_expr = 1;
CompiladorParser.RULE_inicial = 2;
CompiladorParser.RULE_condicional = 3;
CompiladorParser.RULE_oposicao = 4;
CompiladorParser.RULE_conclusao = 5;
CompiladorParser.RULE_negacao = 6;
CompiladorParser.RULE_conjuncao = 7;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(CompiladorParser.EOF, 0);
};

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CompiladorParser.NEWLINE);
    } else {
        return this.getToken(CompiladorParser.NEWLINE, i);
    }
};


ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitProg(this);
	}
};




CompiladorParser.ProgContext = ProgContext;

CompiladorParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CompiladorParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CompiladorParser.COND) | (1 << CompiladorParser.NEG) | (1 << CompiladorParser.WORD))) !== 0)) {
            this.state = 16;
            this.expr(0);
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CompiladorParser.NEWLINE) {
                this.state = 17;
                this.match(CompiladorParser.NEWLINE);
            }

            this.state = 24;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 25;
        this.match(CompiladorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.inicial = function() {
    return this.getTypedRuleContext(InicialContext,0);
};

ExprContext.prototype.WORD = function() {
    return this.getToken(CompiladorParser.WORD, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.oposicao = function() {
    return this.getTypedRuleContext(OposicaoContext,0);
};

ExprContext.prototype.condicional = function() {
    return this.getTypedRuleContext(CondicionalContext,0);
};

ExprContext.prototype.conjuncao = function() {
    return this.getTypedRuleContext(ConjuncaoContext,0);
};

ExprContext.prototype.conclusao = function() {
    return this.getTypedRuleContext(ConclusaoContext,0);
};

ExprContext.prototype.negacao = function() {
    return this.getTypedRuleContext(NegacaoContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitExpr(this);
	}
};



CompiladorParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CompiladorParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 28;
            this.inicial();
            break;

        case 2:
            this.state = 29;
            this.match(CompiladorParser.WORD);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 59;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 57;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
                    this.state = 32;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 34;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===CompiladorParser.OP) {
                        this.state = 33;
                        this.oposicao();
                    }

                    this.state = 36;
                    this.expr(7);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
                    this.state = 37;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 39;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                    if(la_===1) {
                        this.state = 38;
                        this.condicional();

                    }
                    this.state = 41;
                    this.expr(6);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 44;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===CompiladorParser.CONJ) {
                        this.state = 43;
                        this.conjuncao();
                    }

                    this.state = 46;
                    this.expr(5);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
                    this.state = 47;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 49;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===CompiladorParser.CONC) {
                        this.state = 48;
                        this.conclusao();
                    }

                    this.state = 51;
                    this.expr(4);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
                    this.state = 52;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 54;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                    if(la_===1) {
                        this.state = 53;
                        this.negacao();

                    }
                    this.state = 56;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 61;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function InicialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_inicial;
    return this;
}

InicialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InicialContext.prototype.constructor = InicialContext;

InicialContext.prototype.WORD = function() {
    return this.getToken(CompiladorParser.WORD, 0);
};

InicialContext.prototype.COND = function() {
    return this.getToken(CompiladorParser.COND, 0);
};

InicialContext.prototype.NEG = function() {
    return this.getToken(CompiladorParser.NEG, 0);
};

InicialContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterInicial(this);
	}
};

InicialContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitInicial(this);
	}
};




CompiladorParser.InicialContext = InicialContext;

CompiladorParser.prototype.inicial = function() {

    var localctx = new InicialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CompiladorParser.RULE_inicial);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CompiladorParser.COND) | (1 << CompiladorParser.NEG) | (1 << CompiladorParser.WORD))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondicionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_condicional;
    return this;
}

CondicionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondicionalContext.prototype.constructor = CondicionalContext;

CondicionalContext.prototype.COND = function() {
    return this.getToken(CompiladorParser.COND, 0);
};

CondicionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterCondicional(this);
	}
};

CondicionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitCondicional(this);
	}
};




CompiladorParser.CondicionalContext = CondicionalContext;

CompiladorParser.prototype.condicional = function() {

    var localctx = new CondicionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CompiladorParser.RULE_condicional);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(CompiladorParser.COND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OposicaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_oposicao;
    return this;
}

OposicaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OposicaoContext.prototype.constructor = OposicaoContext;

OposicaoContext.prototype.OP = function() {
    return this.getToken(CompiladorParser.OP, 0);
};

OposicaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterOposicao(this);
	}
};

OposicaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitOposicao(this);
	}
};




CompiladorParser.OposicaoContext = OposicaoContext;

CompiladorParser.prototype.oposicao = function() {

    var localctx = new OposicaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CompiladorParser.RULE_oposicao);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(CompiladorParser.OP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConclusaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_conclusao;
    return this;
}

ConclusaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConclusaoContext.prototype.constructor = ConclusaoContext;

ConclusaoContext.prototype.CONC = function() {
    return this.getToken(CompiladorParser.CONC, 0);
};

ConclusaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterConclusao(this);
	}
};

ConclusaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitConclusao(this);
	}
};




CompiladorParser.ConclusaoContext = ConclusaoContext;

CompiladorParser.prototype.conclusao = function() {

    var localctx = new ConclusaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CompiladorParser.RULE_conclusao);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(CompiladorParser.CONC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NegacaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_negacao;
    return this;
}

NegacaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegacaoContext.prototype.constructor = NegacaoContext;

NegacaoContext.prototype.NEG = function() {
    return this.getToken(CompiladorParser.NEG, 0);
};

NegacaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterNegacao(this);
	}
};

NegacaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitNegacao(this);
	}
};




CompiladorParser.NegacaoContext = NegacaoContext;

CompiladorParser.prototype.negacao = function() {

    var localctx = new NegacaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CompiladorParser.RULE_negacao);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(CompiladorParser.NEG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConjuncaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_conjuncao;
    return this;
}

ConjuncaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConjuncaoContext.prototype.constructor = ConjuncaoContext;

ConjuncaoContext.prototype.CONJ = function() {
    return this.getToken(CompiladorParser.CONJ, 0);
};

ConjuncaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterConjuncao(this);
	}
};

ConjuncaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitConjuncao(this);
	}
};




CompiladorParser.ConjuncaoContext = ConjuncaoContext;

CompiladorParser.prototype.conjuncao = function() {

    var localctx = new ConjuncaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CompiladorParser.RULE_conjuncao);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(CompiladorParser.CONJ);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CompiladorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CompiladorParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CompiladorParser = CompiladorParser;
