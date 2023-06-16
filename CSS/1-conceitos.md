# Conhecendo o CSS

O CSS é um acrônimo para Cascading Style Sheet, uma forma de escrever uma folha de estilos em cascata, mas ainda precisamos saber o que exatamente é uma folha de estilos e uma cascata, mas falaremos disso mais pra frente.

O CSS é um código para criar estilos no HTML, que como vimos, é a estrutura de todo o documento, já o CSS seria a beleza, a parte bonita.

CSS não é uma linguagem de programação, é uma linguagem style sheet, pois mesmo não sendo de programação, ainda possui uma ideia de sintaxe, e assim, precisamos aprender a forma correta de se escrever.

<br>

## Comentários

Os comentários no css não irão afetar seu código, mas pode nos ajudar a lembrar de blocos de códigos ou agrupar e organizar nosso código, deixa dicas para a leitura e ajuda os outros a entenderem nosso código.

Apenas não esqueça de fechar um comentário aberto.

Os comentários abrem com /* e terminam com */ .

Você também pode usar um comentário para desabilitar partes do seu código, o que possibilitaria um debug mais fácil, ou caso deseje fazer alguma alteração sem quebrar todo o seu código.

<br>

## Anatomia

Na verdade, é bem simples, temos o nome de algum elemento, uma chave aberta e uma fechada embaixo, e no meio vamos ter propriedades e seus valores.

Toda propriedade é seguida de : (dois pontos) e um valor e um ; (ponto e vírgula) para encerrar essa ideia de valor.

```
h1 {
	color: blue;
	font-size: 60px;
	background: gray;
}
```

Os elementos do CSS são então:
- Selectors: Nesse caso o h1, que vai buscar no HTML a tag h1 e aplicar as mudanças
- Declaration: As chaves e tudo dentro delas.
- Properties: As coisas a serem alteradas.
- Property values: Os novos valores que estamos atribuindo a tais propriedades.

<br>

## Seletores

Os seletores são o que conectam um elemento HTML com o CSS, existem vários tipos, inclusive, nós vimos um na última aula, o Element/Type selector, mas também temos o seletor global, que é um * (asterisco), ID selector, que é # (cerquilha, cardinal) e o ID do elemento HTML, class selector, que é um . (ponto) e o nome da classe, e mais alguns que podemos entender mais tarde no curso.

Os seletores que mais usaremos serão realmente apenas os anteriormente citados, e vamos entrar em exemplos de como usá-los:
```
HTML
<div id="container" class="m-40">
	<h1>Título</h1>
	<h2>Subtitulo</h2>
</div>
```

```
CSS
/* ID selector */
#container {
	width: 200px;
}

/* Class selector */
.m-40 {
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 {
	color: blue;
	font-size: 60px;
	background: gray;
}
```

<br>

## Box model

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:
- Tamanho (largura x altura): width e height, respectivamente
- Conteúdo: o content
- Bordas: o border
- Preenchimento interno: o padding
- Espaços fora da caixa: a margin

Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

<br>

## Origem do CSS

<br> 

<b>inline > tag style > tag link</b>

<br>

1. Inline, que é dentro do próprio HTML, através da tag style, utilizada das seguintes formas:
```
<h1 style="color: blue;">Título
	<strong style="color: red;">alo</strong>
</h1>
```

2. Ou na head do HTML, assim:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
	<style>
	h1 {
	    color: blue;
	}
	strong {
	    color: red;
	}
	</style>
</head>
```

3. Porém, a forma mais comum, é através da tag link, onde vamos linkar um documento CSS externo, um outro arquivo para nosso documento HTML, feito da seguinte forma:
```
<link rel="stylesheet" href="style.css">
```

Neste caso, o nosso documento CSS se chama style.css e sua relação com o HTML é de stylesheet.

A última forma é através do @import, que é na verdade uma regra do CSS, portanto, deve ser usada dentro do css, ao invés de dentro do HTML, como as duas primeiras formas, e seu uso é mostrado a seguir:
```
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
```

Não é recomendado seu uso, pois leva um pouco mais de tempo do que através da tag link, fazendo a página ficar menos responsiva, demorando mais para o carregamento da mesma.

<br>

## A Cascata

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.

São levados em consideração 3 fatores:
- A origem do estilo;
- A especificidade;
- A importância;

<br>

## Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado

<br>

## Regra important

sintaxe: !important

São raras as ocasiões nas quais se devem usar um iportant, pois é em geral uma má pratica, visto que quebra o fluxo natural da cascata e pode acabar te atrapalhando caso você a deixe em algum lugar no seu código.
Portanto evite ao máximo seu uso.

<br>

## At rules

São regras relacionadas ao comportamento do CSS, começa com um sinal de @ seguido do identificador e do valor.
São as seguintes:
- @import serve para incluir um CSS externo.
- @media são regras condicionais para vários dispositivos.
- @font-face é para colocar fontes externas.
- @keyframes serve para as animations do CSS.

<br>

## Shorthand

É basicamente a ideia de junção de propriedades, para que fiquem de forma resumida e legível.
Abaixo um exemplo de propriedades com e sem o shorthand:
```
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}
```

Algumas das características do shorthand:
- Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.
- Os valores que não forem especificados irão assumir o valor padrão.
- Por fim, geralmente, a ordem descrita não importa, mas, caso haja muitas propriedades com valores semelhantes, poderemos encontrar problemas.

<br>

## Funções

Um tipo de valor existente no CSS, é estruturado com um nome seguido de abre e fecha parênteses. Recebe um argumento, que são seus valores.

Um exemplo de função é:
```
color: rgb(255,0,100);
```

<br>

## DevTools

Uma das ferramentas mais importantes para o desenvolvedor CSS é o DevTools (do inglês, Ferramentas de Desenvolvedor), é recomendado que você estude e faça uso da mesma, pois será muito utilizada.

Atalho F12 no navegador.

<br>

## Cuidados com a escrita


É importante prestar atenção à sua escrita do CSS, identar seu código para facilitar a leitura, e mais importante, manter tudo organizado e funcionando!

<br>

## Vendor prefixes

São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade que vemos no CSS.
Exemplos:
```
p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
```

Você também pode consultar se a feature pode ser utilizada através dos sites:

https://ireade.github.io/which-vendor-prefix

https://caniuse.com