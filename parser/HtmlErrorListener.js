var antlr4 = require('../antlr4/index');
var CompiladorLexer = require('../parser/CompiladorLexer');
var CompiladorParser = require('../parser/CompiladorParser');
var CompiladorListener = require('../parser/CompiladorListener').CompiladorListener;

HtmlErrorListener = function () {
    antlr4.error.ErrorListener.call(this);
    this.errors = [];
    return this;
}

HtmlErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);

HtmlErrorListener.prototype.constructor = HtmlErrorListener;

HtmlErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
        'recognizer': recognizer,
        'offendingSymbol': offendingSymbol,
        'line': line,
        'column': column,
        'msg': msg,
        'e': e
    });
};

exports.HtmlErrorListener = HtmlErrorListener;