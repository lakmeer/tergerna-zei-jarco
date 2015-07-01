
{ Gerna } = require \./gerna
{ Selbri } = require \./selbri

export class Bridi extends Gerna
  ({ selbri }) ->
    super ...
    @selbri = new Selbri selbri

  to-string: ->
    "(#{@selbri.to-string!})"

  draw: ->
    @selbri.draw!

  draw-freeform: ->
    @selbri.draw-freeform!

