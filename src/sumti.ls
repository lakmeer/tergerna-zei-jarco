
{ Gerna } = require \./gerna

{ size, gutter } = require \config

export class Sumti extends Gerna
  ({ @text, @pre = "", @post = "", bridi }) ->
    super ...
    if bridi? then @bridi = new Bridi that
    @dom.class-list.add \sumti

  to-string: ->
    @pre-string! + @text + @bridi-string! + @post-string!

  draw: (tag) ->
    text      = @text
    height    = 2 * gutter + size
    width     = 2 * gutter + size * 0.6 * @text.length
    tag-width = 2 * gutter + size * 0.6 * tag.length

    @set-size (max width, tag-width), height * 2 + gutter

    @do ->
      @font = "20px monospace"
      @text-baseline = \top
      @line-width = 2

      @fill-text text, gutter, gutter
      @stroke-rect 0.5 + gutter, 0.5 + height, width - gutter * 2, 0

      @text-align = \center
      @fill-text tag, width/2, gutter + height + gutter, width
      @ellipse width/2, height + height/2 + gutter, tag-width/2 - 2, height/2, 0, 0, tau
      @set-line-dash [ 2, 7 ]
      @stroke!

  draw-freeform: ->
    text      = @text
    height    = 2 * gutter + size
    width     = 2 * gutter + size * 0.6 * @text.length

    @set-size width, height

    @dom.innerText = @text

    document.body.append-child @dom

    @do ->
      @font = "20px monospace"
      @text-baseline = \top
      @line-width = 2
      @stroke-rect 0, height - 1, width - gutter * 2, 0
      @fill-text text, 0, gutter


