# studio zerance test


# INSTALLATION

- git clone git@github.com:psemsari/zerancetest.git
- cd zerancetest
- npm install
- npm run dev


# DEROULEMENT

# Preparation -  ~30 min

## techno utilise

- npm
- html css js
- photoshop
- dev env / backend avec vitejs
- wsl sur windows

installation de vitejs

init du projet sur git

## extraction asset

je ne connais pas très bien photoshop mais j’ai réussi à exporter ce que j’avais besoin en format svg/png

## installation font

font face karla et futura

[@font-face - CSS : Feuilles de style en cascade | MDN](https://developer.mozilla.org/fr/docs/Web/CSS/@font-face)

[Comment ajouter des polices d'écriture en CSS - Codeur Tuto](https://www.codeur.com/tuto/css/ajouter-police-ecriture-css/)

[Futura Maxi CG Bold Regular](https://fontsgeek.com/fonts/Futura-Maxi-CG-Bold-Regular)

# Header ~1H

- enlever point ul

[list-style - CSS : Feuilles de style en cascade | MDN](https://developer.mozilla.org/fr/docs/Web/CSS/list-style)

- mes images svg ne marchait pas j’ai donc cherché comment résoudre le problème

[Images in SVG Image tags not showing up in Chrome, but displays locally?](https://stackoverflow.com/questions/41195669/images-in-svg-image-tags-not-showing-up-in-chrome-but-displays-locally)

- j’ai utilisé les flexbox pour mieux disposer mes éléments dans le header

[A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- pour aller vers les sections grâce aux liens (Nos clients, Nos offres etc)  j’ai utilisé les tags avec #, la balise a et les id

# Banner ~1H

- afficher des caractères spéciaux

[Caractères Spéciaux HTML](https://www.leptidigital.fr/productivite/caracteres-speciaux-html-2-19297/)

- pour le surlignage, j’ai voulu utilisé l’élément after sur le texte mais j’ai eu du mal à l’utiliser.
j’ai donc simplement créé un background sur un élément span pour mettre mon image
cela me permet aussi de réutiliser cette classe plus tard

[Span with background image and no content](https://stackoverflow.com/questions/4550069/span-with-background-image-and-no-content)

- j’ai utilisé une autre span pour changer la police de caractères des flèches

# Portofolio ~30min

- mettre chaque png en blanc

[CSS filter generator to convert from black to target hex color](https://codepen.io/sosuke/pen/Pjoqqp)

- ne pas cibler certain element

[:not - CSS : Feuilles de style en cascade | MDN](https://developer.mozilla.org/fr/docs/Web/CSS/:not)

- pour mettre en forme les images j’ai utilisé Grid

# slider ~2h

- j’ai essayé plusieurs lib mais je n’arrivais pas à les prendre en main pour faire exactement ce qu’il y avait sur la maquette
- j’ai utilisé finalement une lib simple mais je n’ai pas totalement réussi à faire ce qu’il y a sur la maquette. j’ai modifié quelques éléments de la lib avec !important

[Swiper - The Most Modern Mobile Touch Slider](https://swiperjs.com/)

- j’ai utilisé un transform sur les slider pour les décaler un petit peu pour me rapprocher de la maquette
- l’image des sliders est un backgroud-image et la card est une div à l’intérieur de ce block que j’ai placé grâce au flexbox
- je n’ai pas fait plus pour le slider car j’ai perdu beaucoup de temps pour la lib

# textinfinite ~1H

- je ne savais pas vraiment comment faire j’ai donc cherché et je me suis inspiré de cette vidéo

[Texte qui défile à l'infini 🔥](https://www.youtube.com/watch?v=_Pv6z5Rm2TI)

[Scroll infini ! 🔥 🔥 🔥](https://codepen.io/Ziratsu/pen/MWjqWOa?editors=1100)

j’ai du remettre le texte plusieurs fois pour que ça marche il doit y avoir une autre solution …

# Contact ~2H

- D’abord j’ai placé une div avec la position absolute et j’ai mis mes éléments pour le formulaire
- J’ai ajouté un filtre blur sur toute la page sauf la popup
- vu le manque de temps j’ai utilisé ce css pour le form

[W3Schools online HTML editor](https://www.w3schools.com/css/tryit.asp?filename=trycss_forms)

- J’ai connecté le submit form avec le js

[JavaScript Form](https://www.javascripttutorial.net/javascript-dom/javascript-form/)

- api utilisé :

[Genderize.io | Determine the gender of a name](https://genderize.io/#responses)

- j’ai ensuite ajouté des évènements pour mettre mes classes permettant d’enlever le blur de la page et d’enlever la popup de la page

[How To Add a Class Name](https://www.w3schools.com/howto/howto_js_add_class.asp)

- j’ai eu un problème avec les multi évènement mais j’ai rapidement trouvé la solution

[Add click event after another click event](https://stackoverflow.com/questions/33262256/add-click-event-after-another-click-event)


# CONCLUSION:

J’ai perdu beaucoup de temps sur certaine parti entre mon niveau et aussi parce que je voulais faire trop. Je pensais au départ ne pas prendre autant de temps. mais ce test m’a appris pas mal de chose et je m’entrainerais beaucoup plus grâce à des challenges qui existent et j’intégrerais des maquettes de dribble.

Je n'ai pas totalement fini.
- une meilleure responsivité est possible (pour le menu et la section client) grâce aux medias queries par exemple
- un meilleurn slider pour être plus proche de la maquette
- quelques détails à refaire (le contact et le highlights sur le mot "shopify" ou "voir plus")

Je n’ai pas eu de problème pour la parti data fetching parce que je connais plutôt bien le système de promesse en JS.

voici une image du temps que j'ai calculé avec toggl tracker
![image](https://user-images.githubusercontent.com/41895689/184680119-30d50077-9235-4f89-b074-6dbe28162a4c.png)

