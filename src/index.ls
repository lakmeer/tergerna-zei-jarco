
{ id, log, tau, max, sum, untags } = require \std

{ Blitter } = require \./blitter
{ Gerna } = require \./gerna


# Render config

size   = 20
gutter = 10
line-spacing = 50


# Word Classes

class Bridi extends Gerna
  ({ selbri }) ->
    super ...
    @selbri = new Selbri selbri

  to-string: ->
    "(#{@selbri.to-string!})"

  draw: ->
    @selbri.draw!

  draw-freeform: ->
    @selbri.draw-freeform!


class Selbri extends Gerna
  ({ @text, args }) ->
    super ...
    @args = { [ tag, new Sumti arg.sumti ] for tag, arg of args }

  to-string: ->
    @text + " " + untags do
      for tag, sumti of @args
        "[#tag: #{sumti.to-string!}]"

  draw: ->
    text         = @text
    canvases     = for tag, sumti of @args => sumti.draw tag
    sumti-width  = sum canvases.map (.width)
    selbri-width = size * 0.6 * @text.length + 2 * gutter
    height       = canvases.0.height + size

    @set-size selbri-width + sumti-width + gutter * canvases.length, height
    @install document.body

    @do ->
      @font = "20px monospace"
      @text-baseline = \top
      @line-width = 2
      @stroke-rect 0, 0, selbri-width, size + 2 * gutter
      @fill-text text, gutter, gutter

    offset = selbri-width + gutter

    for c, i in canvases
      @ctx.draw-image c, offset, 0
      offset += c.width + gutter

  draw-freeform: ->
    text         = @text
    height       = size + gutter * 3
    canvases     = for tag, sumti of @args => sumti.draw-freeform tag
    sumti-width  = sum canvases.map (.width)
    sumti-height = sum canvases.map (.height + gutter)
    selbri-width = size * 0.6 * @text.length + 2 * gutter

    @set-size selbri-width + sumti-width + gutter * canvases.length, sumti-height
    @install document.body

    @do ->
      @line-width = 2
      @font = "20px monospace"
      @text-baseline = \top
      @fill-text text, gutter, sumti-height/2 - height/2 + gutter * 1.5
      @stroke-rect 0.5, 0.5 + sumti-height/2 - height/2 + gutter/2, selbri-width, size + 2 * gutter

    for c, i in canvases
      x   = selbri-width + line-spacing + gutter
      y   = i * height + gutter/2
      cp  = gutter * 5
      cpy = sumti-height/2
      zz  = y + height/2 - gutter/2
      @ctx.draw-image c, x, y
      @ctx.move-to selbri-width, cpy
      @ctx.bezier-curve-to selbri-width + cp, cpy, x - cp, zz, x, zz
      @ctx.stroke!


class Sumti extends Gerna
  ({ @text, @pre = "", @post = "", bridi }) ->
    super ...
    if bridi? then @bridi = new Bridi that

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

  draw-freeform: (tag) ~>
    text      = @text
    height    = 2 * gutter + size
    width     = 2 * gutter + size * 0.6 * @text.length
    tag-width = 2 * gutter + size * 0.6 * tag.length

    @set-size width + tag-width + gutter, height

    @do ->
      @font = "20px monospace"
      @text-baseline = \top
      @line-width = 2

      @stroke-rect tag-width + gutter, height - 1, width - gutter * 2, 0
      @fill-text text, tag-width + gutter, gutter

      @ellipse tag-width/2, height/2, tag-width/2 - 2, height/2, 0, 0, tau
      @fill-text tag, gutter, gutter
      @set-line-dash [ 2, 7 ]
      @stroke!


# Canvas

output = new Blitter 700, 700


# Begin

{ balnema, example } = require \./data
b = new Bridi example
b.draw-freeform!

