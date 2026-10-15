---
title: Le labyrinthe 
date: 2026-07-15
draft: false
tags:
cover:
  image: vignette.jpg
  alt: labyrinthe
  caption: Is it even possible to escape ?
featured: false
---
The Labyrinth is a cooperative puzzle board game.

It was designed for 15 players to play over the course of 3 weeks and draws inspiration from the world of James Dashner’s *The Maze Runner*.

In a game intended for a large group, the main challenge is to give every player an equal opportunity to participate.

Considering the group and the universe, I chose the “knowledgevania/metroidbrainia” principle as the design pillar (meaning that progress in the game is based mainly on learning and understanding its rules and mechanics).

---

### Overall layout

The group is divided into teams of three for the entire game.

{{<figure src="groups.png">}}

Each day, a team of three is sent into the maze to try to find the exit. 

During the game, they are isolated and cannot communicate with the rest of the group. They must retain as much information as possible to report back at the end of the session.

{{<figure src="restitution.png">}}



Over the course of the three weeks, each trio will play once, for a total of three times.

{{<figure src="calendar.png">}}

---

### How the Game Works 

The trio playing faces a game master, who introduces them to the simple rules (moving and rotating the board) and acts as the maze.

A game is divided into 5 turns.

On each turn, each player moves 3 spaces.

{{<figure src="IMG_7282.JPG">}}

They must be careful, as some tiles line up with holes.

The maze is divided into areas that are covered like a fog of war; if players move beneath them, those areas are revealed.

{{<figure src="uncover.png">}}

Once all three players have taken their turns, the maze changes: its central sector rotates one-fifth of a turn.

{{<figure src="turning.png">}}

During the rotation, the squares may align with the holes, causing players to fall through (similar to “Carrot Catch”). They must therefore remember their positions.

After 5 turns, the game ends.

{{<image-gallery dir="/gallery - turns">}}

---

### Escaping the Maze

From the central sector, there are 5 exits, one for each base (regardless of the turn)

{{<figure src="exits.png">}}

The players’ goal is to reach the outer sectors, each of which contains a different clue. They must therefore anticipate the board’s rotations to take the exit that corresponds to the sector they are aiming for by the time they reach it.

{{<figure src="hints.png">}}

{{<image-gallery dir="/gallery - hints">}}

Explanation of the clues:

I: This level is solved as long as three specific areas have not yet been discovered. Therefore, do not pass through it.

II: Collect both keys in the maze to solve it. Five cards to collect are placed face down on certain squares. Two are keys; the other three are fake. 

II: Collect the two keys in the maze to solve it. Five cards to collect are placed face down on certain squares. Two are keys; the other three are decoys. 

III: The exit is here; it will open when the other bases are solved simultaneously.

IV: With this clue, players receive the “Five Houses” puzzle. They must solve it outside the maze and announce the solution in this area.

V: In this sector, there are two enemies who will chase and kill players if they reach them. They are moved by the game master.

To solve this stage, players must kill an enemy piece by making it fall into a hole (by anticipating the maze’s rotations).



If the players solve all the clues, they’re free!

---

### Development

I first tested the idea on paper.

{{<figure src="realisation/realisation1.gif">}}

I drew the layout and construction diagrams.

{{<figure src="realisation/realisation2.jpg">}}

Then I developed and tested the prototype using a game engine (Godot).

{{<video src="realisation/realisation4edited.mov">}}

And all that was left to do was build it!

{{<figure src="realisation/realisation5.jpeg">}}
{{<figure src="realisation/realisation6.png">}}
{{<figure src="realisation/realisation7.jpeg">}}
{{<figure src="realisation/realisation8.jpg">}}
{{<figure src="realisation/realisation9.jpg">}}
{{<figure src="realisation/realisation10.JPG">}}