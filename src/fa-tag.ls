
{ id, log, px, tau } = require \std
{ size, gutter } = require \config

{ Gerna } = require \./gerna
{ Sumti }  = require \./sumti

export class FaTag  extends Gerna
  (@text, { sumti }) ->
    super ...
    @sumti = new Sumti sumti
    @dom.class-list.add \fa-tag

  to-string: ->
    "[#{@text}: #{@sumti.to-string!}]"

  draw-freeform: ->
    height       = size + gutter * 2
    tag-width    = 2 * gutter + size * 0.6 * @text.length
    sumti-canvas = @sumti.draw-freeform!
    sumti-width  = sumti-canvas.width

    @set-size tag-width + gutter + sumti-width, height
    @dom.innerText = text = @text
    document.body.append-child @dom

    @do ->
      @font = "20px monospace"
      @text-baseline = \top
      @line-width = 2
      @draw-image sumti-canvas, tag-width + gutter, 0
      @ellipse tag-width/2, height/2, tag-width/2 - 2, height/2, 0, 0, tau
      @fill-text text, gutter, gutter
      @set-line-dash [ 2, 7 ]
      @stroke!


