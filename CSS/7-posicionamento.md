
# Posicionando foguetes

Nesse curso vamos ver como posicionar os elementos em tela criando layouts maravilhosos e flexíveis, dando muito valor ao design de suas páginas.

<br>

## Page Layouts

1. Tables para alinhar os elementos um ao lado do outro
2. Floats que eram elementos flutuantes e o "clear" para fazer esse elemento para de flutuar.
3. Frameworks e Grid Systems
4. Flexbox
5. Grid

<br>

## Position

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.
- Name: position
- Value: static | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

<br>

## Static

Por padrão os elementos são static. Isso significa que os elementos irão seguir o fluxo normal do HTML.

<br>

## Relative

O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

HTML
```
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

CSS
```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: relative;
  left: 100px;
  top: 80px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```
<br>

## Absolute

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

HTML
```
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

CSS
```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

<br>

## Fixed

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

<br>

## Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

HTML
```
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>

```

CSS
```
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px
}
```
<br>

## Flex

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical)
- Alinhamento, direcionamento, ordenar e tamanhos
```
div.parent {
	display: flex;
}
```
<br>

### Flex-direction

- Qual a direção do flex: horizontal ou vertical
- row | column

<br>

### Alinhamento

- justify-content
- align-items

HTML
```
<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>
```

CSS
```
body {
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
}
.container {
    width: 100vw;
    display: flex;
    justify-content: space-between;
}
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
```
<br>

## Grid
- Posicionamento do elementos dentro da caixa
- Posicionamento horizontal e vertical ao mesmo tempo
- Pode ser flexível ou fixo
- Cria espaços para os elementos filhos habitarem

```
<body>
    <header>Topo</header>
    <main>Conteúdi</main>
    <aside>Infos Adicionais</aside>
    <footer>Rodapé</footer>
</body>

body {
    margin: 0;
    height
    display: grid;
    grid-template-areas:
        "header header"
        "main aside"
        "footer footer";
    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
}
main {
    grid-area: main;
}
aside {
    grid-area: aside;
}
footer {
    grid-area: footer;
}
```
<br>

## Grid ou Flexbox

Podemos usar o Display Flex e Display Grid ao mesmo tempo.

HTML
```
<body>
    <header>
        <div>Logo</div>
        <div>Menu</div>
    </header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>
```

CSS
```
header {
    grid-area: header;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
}
```