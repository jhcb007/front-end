function retira_acentos(str) {
    str = str.replace(/ é|hoje|está /,' ')
    str = str.replace(/é/,' ')

    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ-";
	sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyrA";
	novastr="";
	for(i=0; i<str.length; i++) {
		troca=false;
		for (a=0; a<com_acento.length; a++) {
			if (str.substr(i,1)==com_acento.substr(a,1)) {
				novastr+=sem_acento.substr(a,1);
				troca=true;
				break;
			}
		}
		if (troca==false) {
			novastr+=str.substr(i,1);
		}
	}
	return novastr;
}

function myFunction() {

var frase = $("#frase").val()
frase = retira_acentos(frase.toLocaleLowerCase())
console.log("Frase inicial",frase)


var antlr4 = require('./antlr4/index');
var CompiladorLexer = require('./parser/CompiladorLexer').CompiladorLexer;
var CompiladorParser = require('./parser/CompiladorParser').CompiladorParser;
var HtmlCompiladorListener = require('./parser/HtmlCompiladorListener').HtmlCompiladorListener;
var HtmlErrorListener = require('./parser/HtmlErrorListener').HtmlErrorListener;
var chars = new antlr4.InputStream(frase);
var lexer = new CompiladorLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new CompiladorParser(tokens);

var errorListener = new HtmlErrorListener();
parser.addErrorListener(errorListener);
parser.buildParseTrees = true;
var tree = parser.prog();
var htmlExpr = new HtmlCompiladorListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlExpr, tree)

$('#handerFormulas').html('')
for (var i = 0; i < htmlExpr.values.length; i++) {
    $('#handerFormulas').append('<li class="list-group-item">'+htmlExpr.values[i].value+'</li>')
}

}

$("#frase").on("keypress",function(e) {
    var key = e.keyCode;
    if (key == 13) {
        myFunction()
    }
});
