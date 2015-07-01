
{ id, log, sum, px } = require \std
{ size, gutter, line-spacing } = require \config

{ Gerna } = require \./gerna
{ FaTag }  = require \./fa-tag

export class Selbri extends Gerna
  ({ @text, args }) ->
    super ...
    @tags = { [ tag, new FaTag tag, arg ] for tag, arg of args }
    @dom.class-list.add \selbri
    @dom.innerText = @text
    document.body.append-child @dom

  to-string: ->
    @text + " " + @tags.map (.to-string!)

  draw: ->
    text         = @text
    canvases     = for tag, sumti of @tags => sumti.draw tag
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
    dom-pairs    = for name, tag of @tags => [ name, tag ]
    canvases     = for name, tag of @tags => tag.draw-freeform!
    sumti-width  = sum canvases.map (.width)
    sumti-height = sum canvases.map (.height + gutter)
    selbri-width = size * 0.6 * @text.length + 2 * gutter

    @set-size selbri-width + sumti-width + gutter * canvases.length, sumti-height
    @install document.body

    @dom.style <<< do
      top: px sumti-height/2 - height/2 + gutter/2
      left: px 0

    @do ->
      @line-width = 2
      return
      @font = "20px monospace"
      @text-baseline = \top
      @fill-text text, gutter, sumti-height/2 - height/2 + gutter * 1.5
      @stroke-rect 0.5, 0.5 + sumti-height/2 - height/2 + gutter/2, selbri-width, size + 2 * gutter

    for [ name, tag ], i in dom-pairs
      x   = selbri-width + line-spacing + gutter
      y   = i * height + gutter/2
      cp  = gutter * 5
      cpy = sumti-height/2
      zz  = y + height/2 - gutter/2

      tag.dom.style <<< do
        top: px y
        left: px x

      tag.sumti.dom.style <<< do
        top: px y
        left: px x + gutter + tag.dom.offset-width

    for c, i in canvases
      x   = selbri-width + line-spacing + gutter
      y   = i * height + gutter/2
      cp  = gutter * 5
      cpy = sumti-height/2
      zz  = y + height/2 - gutter/2

      #@ctx.draw-image c, x, y
      @ctx.move-to selbri-width, cpy
      @ctx.bezier-curve-to selbri-width + cp, cpy, x - cp, zz, x, zz
      @ctx.stroke!

