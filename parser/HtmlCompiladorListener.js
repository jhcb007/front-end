var antlr4 = require('../antlr4/index');
var CompiladorLexer = require('../parser/CompiladorLexer');
var CompiladorParser = require('../parser/CompiladorParser');
var CompiladorListener = require('../parser/CompiladorListener').CompiladorListener;

/**
 * Esta função representa o construtor da classe HtmlExprListener
 */
HtmlCompiladorListener = function () {
    CompiladorListener.call(this);
    this.values = [];
    return this;
}

HtmlCompiladorListener.prototype = Object.create(CompiladorListener.prototype);

HtmlCompiladorListener.prototype.constructor = HtmlCompiladorListener;

/**
 * O método enterProg inicializa o valor de ctx.values como um
 * array vazio.
 */
HtmlCompiladorListener.prototype.enterProg = function (ctx) {
    ctx.values = [];
};

/**
 * O método exitProg atribui o valor de ctx.values ao atributo
 * values da instância desta classe.
 */
HtmlCompiladorListener.prototype.exitProg = function (ctx) {
    this.values = ctx.values;
};

/**
 * O método enterExpr verifica se o parser combina com a regra INT.
 * Em caso positivo, usa a função parseInt() para converter seu texto
 * para um número inteiro e usa o resultado como valor do nó. Caso contrário,
 * o valor do nó é null.
 */
HtmlCompiladorListener.prototype.enterExpr = function (ctx) {
    if (ctx.WORD() != null) {
        ctx.value = ctx.WORD().getText();
    } else {
        ctx.value = null;
    }

    if (ctx.oposicao() != null) {
        console.log(ctx.oposicao().getText())
    } else {
        ctx.value = null;
    }
};

HtmlCompiladorListener.prototype.exitExpr = function (ctx) {
    //console.log(ctx)
     if (ctx.children) {
        var formula = '';
        for (var i = 0; i < ctx.children.length; i++) {
            if(ctx.children[i].ruleIndex) {
                var op = ctx.children[i].getText()
                console.log("op",op)
                switch (op) {
                    case 'nao':
                        formula += '¬';
                        break;
                    case 'naoesta':
                        formula += '¬';
                        break;
                    case 'mas nao esta':
                        formula += '¬';
                        break;
                    case 'e':
                        formula += '∧';
                        break;
                    case 'ou':
                        formula += '∨';
                        break;
                    case 'se':
                        formula += '→';
                        break;
                    case 'se e somente se':
                        formula += '↔';
                        break;
                    case 'entao':
                        formula += '⊢';
                        break;
                    default:
                        formula += op.charAt(0);
                }
                console.log("esse", ctx.children[i].getText());
            }
        }
        ctx.value = formula.toLocaleUpperCase();
     }

    if (ctx.value && ctx.parentCtx instanceof CompiladorParser.CompiladorParser.ProgContext) {
        ctx.parentCtx.values.push({
            'expr': ctx.getText(),
            'value': ctx.value
        });
    }
};

exports.HtmlCompiladorListener = HtmlCompiladorListener;
