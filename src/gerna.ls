
{ Blitter } = require \./blitter

export class Gerna extends Blitter
  ({ @pre, @post }) ->
    super ...
    @ctx.font = "20px monospace"
    @ctx.line-width = 10

    @dom = document.create-element \div
    @dom.class-name = \node

  pre-string: ->
    if @pre then "{" + @pre + "} " else ""

  post-string: ->
    if @post then " {" + @post + "}" else ""

  bridi-string: ->
    if @bridi then " " + @bridi.to-string! else ""

