# Audio e Vídeo

## Vídeo

```
<video controls 
    widht="500
    height=""400
    poster="./icon.png"
    autoplay
    preload=none
    loop
    muted
>
    <source src="" type="video/mp4">
<p> Este Browser não suporta vídeo, baixe-o aqui</p>
</video>
```
<br>

## Áudio

```
<audio controls loop muted>
    <source src="" type="audio/mp3">
<p> Este Browser não suporta áudio</p>
</audio>
```
<br>

## Iframe

Elemento que traz conteúdo externo.
```
<iframe></iframe>
```

Atributos:
- src
- height
- width
- title (acessibilidade)
- allowfullscreen
- frameborder



# Images

```
<img>
```

Atributos:
- src
- alt = Texto alternativo caso não consiga visualizar a imagem
- title
- widht
- height

<br>

## Background image

```
<p style="background-image: url('./icon.png')"> Imagem </p>
```

É utilizado somente para estilo, não é semântico e falta significado.

<br>

## Figures

Cria título visível para as imagens
```
<figure>
    <img src="" alt="">
    <figcaption>Título da imagem</figcaption>
</figure>
```
<br>

## Intro de SVG

É uma marcação, estilo html, para fazer imagens. É uma imagem vetorizada.

Benefícios:
- mais leve
- mais detalhada
- maior acessibilidade e SEO
- pode ser editada via CSS ou atributos

Desvantagens:
- Pode ser mais complicado de trabalhar
- Quanto mais complexa, mais trabalho para o navegador
- Navegadores mais antigos não possuem suporte a essa tag

Para fotografias prefira usar imagens rasterizadas