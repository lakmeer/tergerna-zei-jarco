
export class Canvas
  (w, h) ->
    @canvas = document.create-element \canvas
    @set-size w, h
    @canvas.style.border = "1px dotted black"
    @ctx = @canvas.get-context \2d

  set-size: (w, h) ->
    @canvas.width  = w
    @canvas.height = h

  install: (host) ->
    host.append-child @canvas

  do: (λ) ->
    λ.apply @ctx
    return @canvas

