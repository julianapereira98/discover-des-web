# Cores

Usamos CSS para alterar cores do nosso documento.

### Tipos

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros


### Valores

Podemos definir valores por:
- palavra-chave (blue, transparent)
- hexadecimal (#990011)
- funções: rgb, rgba, hsl, hsla

<br>

## Keyword named values

Nessa aula vamos entender as bases de como aplicar cores no CSS.

HTML
```
<div>
    <h1>Um texto aqui</h1>
    <p>Mais texto</p>
</div>
```

CSS
```
div {
    color: blue;
}

h1 {
    color: red;
}
```
<br>

## Hexadecimal

Nessa aula vamos aprender a trabalhar com valores hexadecimal
```
/*<hex-color> values 0-9 e A-F*/
color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color:#009900aa;
```
<br>

## RGB

- RGB → Red, Green e Blue
- O alpha representa a transparência da cor
```
/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)
```
<br>

## HSL

HSL → Hue - Saturation - Lightness
```
color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)
```
<br>

## Global values

Nessa aula vamos ver sobre os valores globais da propriedade color.
```
/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */
color: currentcolor; /*Pega a cor do contexto*/
```