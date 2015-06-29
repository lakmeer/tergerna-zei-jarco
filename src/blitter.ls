
{ Canvas } = require \./canvas

export class Blitter extends Canvas
  (@w, @h) ->
    super ...

  blit-to: (blitter, x = 0, y = 0) ->
    blitter.ctx.draw-image @canvas, x, y

