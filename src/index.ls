
{ id, log } = require \std

{ Blitter } = require \./blitter
{ Gerna } = require \./gerna


# Word Classes

{ Bridi }  = require \./bridi


# Canvas

output = new Blitter 700, 700


# Begin

{ balnema, example } = require \./data
b = new Bridi example
b.draw-freeform!

