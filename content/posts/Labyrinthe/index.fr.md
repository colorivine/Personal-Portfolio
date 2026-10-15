---
title: Le labyrinthe 
date: 2026-07-15
draft: false
tags:
cover:
  image: vignette.jpg
  alt: labyrinthe
  caption: Est-il même possible de sortir ?
featured: false
---

Le labyrinthe est un jeu de plateau d'énigme coopératif.

Il a été conçu pour faire jouer 15 joueurs sur 3 semaines, et prend inspiration sur l'univers du Labyrinthe de James Dashner.

Dans un jeu qui s'adresse à un grand groupe, la principale problématique est de donner à chaque joueur la même possibilité de s'y impliquer.

En considérent le groupe et l'univers, j'ai choisi comme pilier de conception le principe du knowledgevania/metroidbrainia (c'est à dire que la progression du jeu se base principalement sur l'apprentissage et la compréhension de ses règles et de son fonctionnement).

---

### Déroulé global

Le groupe est divisé en trinômes pour la totalité du jeu.

{{<figure src="groups.fr.png">}}

Chaque jour, un trinôme est envoyé dans le labyrinthe pour tenter de trouver la sortie. 

Lors de la partie, ils sont isolés, et ne peuvent pas communiquer avec le reste du groupe. Ils doivent retenir un maximum d'information pour leur restituer à la fin de la session.

{{<figure src="restitution.fr.png">}}


Sur chacune des 3 semaines, chaque trinôme jouera une fois, soit 3 fois au total.

{{<figure src="calendar.fr.png">}}

---

### Déroulé d'une partie 

Le trinôme qui joue est face à un maitre du jeu, qui les introduit aux règles simple (déplaçement et rotation du plateau), et joue le rôle du labyrinthe.

Une partie se divise en 5 tours.
À chaque tour, chaque joueur se déplace de 3 cases.

{{<figure src="IMG_7282.fr.JPG">}}

Ils doivent être prudents, car certaines cases s'alignent avec des trous.

Le labyrinthe est découpé en zones couvertes à la manière d'un brouillard de guerre, si les joueurs se déplacent en dessous, elles sont découvertes.

{{<figure src="uncover.fr.png">}}

Une fois que les trois joueurs ont joué leur tour, le labyrinthe change : son secteur central tourne d'un cinquième de tour.

{{<figure src="turning.fr.png">}}

Lors de la rotation, les cases peuvent s'aligner avec les trous, et faire tomber les joueurs (à la manière de croque carotte). Ils doivent donc retenir leurs emplaçements.

Au bout de 5 tours, la partie est finie.

{{<image-gallery dir="/gallery - turns">}}

---

### Sortir du labyrinthe

Depuis le secteur central, il y a 5 sorties, une pour chaque base (peu importe le tour)

{{<figure src="exits.fr.png">}}

Le but des joueurs est d'atteindre les secteurs extérieurs, dans lesquels se trouvent chacun un indice différent. Ils doivent donc anticiper les rotations du plateau pour prendre la sortie qui correspondra au secteur qu'ils visent au moment où ils l'atteignent.

{{<figure src="hints.fr.png">}}

{{<image-gallery dir="/gallery - hints">}}

Explication des indices :

I : Cette base est résolue tant que trois zones précises ne sont pas encore découvertes. Il ne faut donc pas y passer.

II : Ramasser les deux clés du labyrinthe pour la résoudre. Cinq cartes à ramasser sont disposées face cachée sur certaines cases. 2 sont des clés, les 3 autres sont fausses. 

III : La sortie est ici, elle s'ouvrira quand les autres bases seront résolues simultanément.

IV : Avec cet indice, les joueurs reçoivent l'énigme des cinq maisons. Ils doivent la résoudre en dehors du labyrinthe et annoncer sa solution dans cette base.

V : Dans ce secteur se trouvent deux ennemis qui suivront et tueront les joueurs si ils les atteignent. Ils sont déplacés par le maitre du jeu.
Pour résoudre cette base, il faut tuer un pion ennemi en le faisant tomber dans un trou (en anticipant les rotations du labyrinthe).


Si les joueurs résolvent tous les indices, ils sont libres !

---

### Réalisation

J'ai d'abord testé l'idée sur papier.

{{<figure src="realisation/realisation1.fr.gif">}}

J'ai déssiné le plan et des schémas de fabrication.

{{<figure src="realisation/realisation2.fr.jpg">}}

Puis j'ai développé et testé le prototype sur un moteur de jeu (Godot).

{{<video src="realisation/realisation4edited.fr.mov">}}

Et il ne restait plus qu'à le fabriquer !

{{<figure src="realisation/realisation5.fr.jpeg">}}
{{<figure src="realisation/realisation6.fr.png">}}
{{<figure src="realisation/realisation7.fr.jpeg">}}
{{<figure src="realisation/realisation8.fr.jpg">}}
{{<figure src="realisation/realisation9.fr.jpg">}}
{{<figure src="realisation/realisation10.fr.JPG">}}
