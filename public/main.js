(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ref$, id, log, tau, max, sum, untags, Blitter, Gerna, size, gutter, lineSpacing, Bridi, Selbri, Sumti, output, balnema, example, b;
ref$ = require('std'), id = ref$.id, log = ref$.log, tau = ref$.tau, max = ref$.max, sum = ref$.sum, untags = ref$.untags;
Blitter = require('./blitter').Blitter;
Gerna = require('./gerna').Gerna;
size = 20;
gutter = 10;
lineSpacing = 50;
Bridi = (function(superclass){
  var prototype = extend$((import$(Bridi, superclass).displayName = 'Bridi', Bridi), superclass).prototype, constructor = Bridi;
  function Bridi(arg$){
    var selbri;
    selbri = arg$.selbri;
    Bridi.superclass.apply(this, arguments);
    this.selbri = new Selbri(selbri);
    log(this.ctx);
  }
  prototype.toString = function(){
    return "(" + this.selbri.toString() + ")";
  };
  prototype.draw = function(){
    return this.selbri.draw();
  };
  prototype.drawFreeform = function(){
    return this.selbri.drawFreeform();
  };
  return Bridi;
}(Gerna));
Selbri = (function(superclass){
  var prototype = extend$((import$(Selbri, superclass).displayName = 'Selbri', Selbri), superclass).prototype, constructor = Selbri;
  function Selbri(arg$){
    var args, res$, tag, arg;
    this.text = arg$.text, args = arg$.args;
    Selbri.superclass.apply(this, arguments);
    res$ = {};
    for (tag in args) {
      arg = args[tag];
      res$[tag] = new Sumti(arg.sumti);
    }
    this.args = res$;
  }
  prototype.toString = function(){
    var tag, sumti;
    return this.text + " " + untags((function(){
      var ref$, results$ = [];
      for (tag in ref$ = this.args) {
        sumti = ref$[tag];
        results$.push("[" + tag + ": " + sumti.toString() + "]");
      }
      return results$;
    }.call(this)));
  };
  prototype.draw = function(){
    var text, canvases, res$, tag, ref$, sumti, sumtiWidth, selbriWidth, height, offset, i$, len$, i, c, results$ = [];
    text = this.text;
    res$ = [];
    for (tag in ref$ = this.args) {
      sumti = ref$[tag];
      res$.push(sumti.draw(tag));
    }
    canvases = res$;
    sumtiWidth = sum(canvases.map(function(it){
      return it.width;
    }));
    selbriWidth = size * 0.6 * this.text.length + 2 * gutter;
    height = canvases[0].height + size;
    this.setSize(selbriWidth + sumtiWidth + gutter * canvases.length, height);
    this.install(document.body);
    this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.strokeRect(0, 0, selbriWidth, size + 2 * gutter);
      return this.fillText(text, gutter, gutter);
    });
    offset = selbriWidth + gutter;
    for (i$ = 0, len$ = canvases.length; i$ < len$; ++i$) {
      i = i$;
      c = canvases[i$];
      this.ctx.drawImage(c, offset, 0);
      results$.push(offset += c.width + gutter);
    }
    return results$;
  };
  prototype.drawFreeform = function(){
    var text, height, canvases, res$, tag, ref$, sumti, sumtiWidth, sumtiHeight, selbriWidth, i$, len$, i, c, results$ = [];
    text = this.text;
    height = size + gutter * 3;
    res$ = [];
    for (tag in ref$ = this.args) {
      sumti = ref$[tag];
      res$.push(sumti.drawFreeform(tag));
    }
    canvases = res$;
    sumtiWidth = sum(canvases.map(function(it){
      return it.width;
    }));
    sumtiHeight = sum(canvases.map(function(it){
      return it.height + gutter;
    }));
    selbriWidth = size * 0.6 * this.text.length + 2 * gutter;
    this.setSize(selbriWidth + sumtiWidth + gutter * canvases.length, sumtiHeight);
    this.install(document.body);
    this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.strokeRect(0, sumtiHeight / 2 - height / 2 + gutter / 2, selbriWidth, size + 2 * gutter);
      return this.fillText(text, gutter, sumtiHeight / 2 - height / 2 + gutter * 1.5);
    });
    for (i$ = 0, len$ = canvases.length; i$ < len$; ++i$) {
      i = i$;
      c = canvases[i$];
      results$.push(this.ctx.drawImage(c, selbriWidth + lineSpacing + gutter, i * height + gutter / 2));
    }
    return results$;
  };
  return Selbri;
}(Gerna));
Sumti = (function(superclass){
  var prototype = extend$((import$(Sumti, superclass).displayName = 'Sumti', Sumti), superclass).prototype, constructor = Sumti;
  function Sumti(arg$){
    var ref$, bridi, that;
    this.text = arg$.text, this.pre = (ref$ = arg$.pre) != null ? ref$ : "", this.post = (ref$ = arg$.post) != null ? ref$ : "", bridi = arg$.bridi;
    this.drawFreeform = bind$(this, 'drawFreeform', prototype);
    Sumti.superclass.apply(this, arguments);
    if ((that = bridi) != null) {
      this.bridi = new Bridi(that);
    }
  }
  prototype.toString = function(){
    return this.preString() + this.text + this.bridiString() + this.postString();
  };
  prototype.draw = function(tag){
    var text, height, width, tagWidth;
    text = this.text;
    height = 2 * gutter + size;
    width = 2 * gutter + size * 0.6 * this.text.length;
    tagWidth = 2 * gutter + size * 0.6 * tag.length;
    this.setSize(max(width, tagWidth), height * 2 + gutter);
    return this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.fillText(text, gutter, gutter);
      this.strokeRect(gutter, height, width - gutter * 2, 0);
      this.textAlign = 'center';
      this.fillText(tag, width / 2, gutter + height + gutter, width);
      this.ellipse(width / 2, height + height / 2 + gutter, tagWidth / 2 - 2, height / 2, 0, 0, tau);
      this.setLineDash([2, 7]);
      return this.stroke();
    });
  };
  prototype.drawFreeform = function(tag){
    var text, height, width, tagWidth;
    text = this.text;
    height = 2 * gutter + size;
    width = 2 * gutter + size * 0.6 * this.text.length;
    tagWidth = 2 * gutter + size * 0.6 * tag.length;
    this.setSize(width + tagWidth + gutter, height);
    return this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.strokeRect(tagWidth + gutter, height, width - gutter * 2, 0);
      this.fillText(text, tagWidth + gutter, gutter);
      this.ellipse(tagWidth / 2, height / 2, tagWidth / 2 - 2, height / 2, 0, 0, tau);
      this.fillText(tag, gutter, gutter);
      this.setLineDash([2, 7]);
      return this.stroke();
    });
  };
  return Sumti;
}(Gerna));
output = new Blitter(700, 700);
ref$ = require('./data'), balnema = ref$.balnema, example = ref$.example;
b = new Bridi(example);
b.drawFreeform();
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
},{"./blitter":2,"./data":4,"./gerna":5,"std":6}],2:[function(require,module,exports){
var Canvas, Blitter, out$ = typeof exports != 'undefined' && exports || this;
Canvas = require('./canvas').Canvas;
out$.Blitter = Blitter = (function(superclass){
  var prototype = extend$((import$(Blitter, superclass).displayName = 'Blitter', Blitter), superclass).prototype, constructor = Blitter;
  function Blitter(w, h){
    this.w = w;
    this.h = h;
    Blitter.superclass.apply(this, arguments);
  }
  prototype.blitTo = function(blitter, x, y){
    x == null && (x = 0);
    y == null && (y = 0);
    return blitter.ctx.drawImage(this.canvas, x, y);
  };
  return Blitter;
}(Canvas));
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"./canvas":3}],3:[function(require,module,exports){
var Canvas, out$ = typeof exports != 'undefined' && exports || this;
out$.Canvas = Canvas = (function(){
  Canvas.displayName = 'Canvas';
  var prototype = Canvas.prototype, constructor = Canvas;
  function Canvas(w, h){
    this.canvas = document.createElement('canvas');
    this.setSize(w, h);
    this.canvas.style.border = "1px dotted black";
    this.ctx = this.canvas.getContext('2d');
  }
  prototype.setSize = function(w, h){
    this.canvas.width = w;
    return this.canvas.height = h;
  };
  prototype.install = function(host){
    return host.appendChild(this.canvas);
  };
  prototype['do'] = function(λ){
    λ.apply(this.ctx);
    return this.canvas;
  };
  return Canvas;
}());
},{}],4:[function(require,module,exports){
var example, balnema, out$ = typeof exports != 'undefined' && exports || this;
out$.example = example = {
  selbri: {
    text: "dunda",
    pre: "co'a",
    args: {
      fa: {
        sumti: {
          text: "mi"
        }
      },
      fe: {
        sumti: {
          text: "lo se dunda"
        }
      },
      fi: {
        sumti: {
          text: "do"
        }
      }
    }
  }
};
out$.balnema = balnema = [
  {
    selbri: {
      text: 'senva',
      args: {
        fa: {
          sumti: {
            type: 'object',
            text: 'mi'
          }
        },
        fe: {
          sumti: {
            type: 'event',
            text: 'lo nu',
            bridi: {
              selbri: {
                text: 'balnema',
                args: {
                  fa: {
                    sumti: {
                      type: 'object',
                      text: 'lo djedi'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {
    selbri: {
      text: 'kansa',
      args: {
        fe: {
          sumti: {
            type: 'object',
            text: 'lo',
            bridi: {
              selbri: {
                text: 'drata xabju',
                args: {
                  'be fe': {
                    sumti: {
                      type: 'object',
                      text: 'lo xamsi'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {
    selbri: {
      text: 'lifri',
      args: {
        fa: {
          sumti: {
            type: 'object',
            text: 'mi'
          }
        },
        fe: {
          sumti: {
            type: 'event',
            text: 'lo nu',
            bridi: {
              selbri: {
                text: 'balnema',
                args: {
                  fa: {
                    ui: 'ui',
                    sumti: {
                      text: 'lo djedi',
                      type: 'object'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
];
/*
.i ro xamsi cu voi su boxna ki pagbu
.i je ro rictu'a cu voi su tricu ki xabju
.i ro rirxe cu voi ki su krasi cu cliva
.i je mi voi ki senva lo se djica

.i lo xamsi cu manku je cu simlu lo ka cimni ro cimde
.i simlu lo ka no da ce jimte
.i lo xamsi cu lenku je cu zdani lo zanvrici
noi ki lo ka prane zifre bu'u ka'e lifri
*/
},{}],5:[function(require,module,exports){
var Blitter, Gerna, out$ = typeof exports != 'undefined' && exports || this;
Blitter = require('./blitter').Blitter;
out$.Gerna = Gerna = (function(superclass){
  var prototype = extend$((import$(Gerna, superclass).displayName = 'Gerna', Gerna), superclass).prototype, constructor = Gerna;
  function Gerna(arg$){
    this.pre = arg$.pre, this.post = arg$.post;
    Gerna.superclass.apply(this, arguments);
    this.ctx.font = "20px monospace";
    this.ctx.lineWidth = 10;
  }
  prototype.preString = function(){
    if (this.pre) {
      return "{" + this.pre + "} ";
    } else {
      return "";
    }
  };
  prototype.postString = function(){
    if (this.post) {
      return " {" + this.post + "}";
    } else {
      return "";
    }
  };
  prototype.bridiString = function(){
    if (this.bridi) {
      return " " + this.bridi.toString();
    } else {
      return "";
    }
  };
  return Gerna;
}(Blitter));
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"./blitter":2}],6:[function(require,module,exports){
var id, log, min, max, floor, round, sin, cos, tau, flip, delay, every, div, random, randomFrom, reverse, keys, values, untags, map, sum, fold, groupBy, out$ = typeof exports != 'undefined' && exports || this;
out$.id = id = function(it){
  return it;
};
out$.log = log = function(){
  console.log.apply(console, arguments);
  return arguments[0];
};
out$.min = min = Math.min;
out$.max = max = Math.max;
out$.floor = floor = Math.floor;
out$.round = round = Math.round;
out$.sin = sin = Math.sin;
out$.cos = cos = Math.cos;
out$.tau = tau = Math.PI * 2;
out$.flip = flip = function(λ){
  return function(a, b){
    return λ(b, a);
  };
};
out$.delay = delay = flip(setTimeout);
out$.every = every = flip(setInterval);
out$.div = div = curry$(function(a, b){
  return floor(a / b);
});
out$.random = random = function(it){
  return Math.random() * it;
};
out$.randomFrom = randomFrom = function(list){
  return list[floor(random(list.length - 1))];
};
out$.reverse = reverse = function(it){
  return it.reverse();
};
out$.keys = keys = function(it){
  var k, v, results$ = [];
  for (k in it) {
    v = it[k];
    results$.push(k);
  }
  return results$;
};
out$.values = values = function(it){
  var k, v, results$ = [];
  for (k in it) {
    v = it[k];
    results$.push(v);
  }
  return results$;
};
out$.untags = untags = function(items){
  return items.join(" ");
};
out$.map = map = function(λ, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    results$.push(λ(x));
  }
  return results$;
};
out$.sum = sum = function(xs){
  return fold(curry$(function(x$, y$){
    return x$ + y$;
  }), 0, xs);
};
out$.fold = fold = curry$(function(λ, i, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    i = λ(i, x);
  }
  return i;
});
out$.groupBy = groupBy = function(λ, list){
  var o, i$, len$, x, key$;
  o = {};
  for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
    x = list[i$];
    (o[key$ = λ(x)] || (o[key$] = [])).push(x);
  }
  return o;
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL3NyYy9pbmRleC5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9ibGl0dGVyLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2NhbnZhcy5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9kYXRhLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2dlcm5hLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL3N0ZC9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHJlZiQsIGlkLCBsb2csIHRhdSwgbWF4LCBzdW0sIHVudGFncywgQmxpdHRlciwgR2VybmEsIHNpemUsIGd1dHRlciwgbGluZVNwYWNpbmcsIEJyaWRpLCBTZWxicmksIFN1bXRpLCBvdXRwdXQsIGJhbG5lbWEsIGV4YW1wbGUsIGI7XG5yZWYkID0gcmVxdWlyZSgnc3RkJyksIGlkID0gcmVmJC5pZCwgbG9nID0gcmVmJC5sb2csIHRhdSA9IHJlZiQudGF1LCBtYXggPSByZWYkLm1heCwgc3VtID0gcmVmJC5zdW0sIHVudGFncyA9IHJlZiQudW50YWdzO1xuQmxpdHRlciA9IHJlcXVpcmUoJy4vYmxpdHRlcicpLkJsaXR0ZXI7XG5HZXJuYSA9IHJlcXVpcmUoJy4vZ2VybmEnKS5HZXJuYTtcbnNpemUgPSAyMDtcbmd1dHRlciA9IDEwO1xubGluZVNwYWNpbmcgPSA1MDtcbkJyaWRpID0gKGZ1bmN0aW9uKHN1cGVyY2xhc3Mpe1xuICB2YXIgcHJvdG90eXBlID0gZXh0ZW5kJCgoaW1wb3J0JChCcmlkaSwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnQnJpZGknLCBCcmlkaSksIHN1cGVyY2xhc3MpLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBCcmlkaTtcbiAgZnVuY3Rpb24gQnJpZGkoYXJnJCl7XG4gICAgdmFyIHNlbGJyaTtcbiAgICBzZWxicmkgPSBhcmckLnNlbGJyaTtcbiAgICBCcmlkaS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZWxicmkgPSBuZXcgU2VsYnJpKHNlbGJyaSk7XG4gICAgbG9nKHRoaXMuY3R4KTtcbiAgfVxuICBwcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBcIihcIiArIHRoaXMuc2VsYnJpLnRvU3RyaW5nKCkgKyBcIilcIjtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnNlbGJyaS5kcmF3KCk7XG4gIH07XG4gIHByb3RvdHlwZS5kcmF3RnJlZWZvcm0gPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnNlbGJyaS5kcmF3RnJlZWZvcm0oKTtcbiAgfTtcbiAgcmV0dXJuIEJyaWRpO1xufShHZXJuYSkpO1xuU2VsYnJpID0gKGZ1bmN0aW9uKHN1cGVyY2xhc3Mpe1xuICB2YXIgcHJvdG90eXBlID0gZXh0ZW5kJCgoaW1wb3J0JChTZWxicmksIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ1NlbGJyaScsIFNlbGJyaSksIHN1cGVyY2xhc3MpLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBTZWxicmk7XG4gIGZ1bmN0aW9uIFNlbGJyaShhcmckKXtcbiAgICB2YXIgYXJncywgcmVzJCwgdGFnLCBhcmc7XG4gICAgdGhpcy50ZXh0ID0gYXJnJC50ZXh0LCBhcmdzID0gYXJnJC5hcmdzO1xuICAgIFNlbGJyaS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmVzJCA9IHt9O1xuICAgIGZvciAodGFnIGluIGFyZ3MpIHtcbiAgICAgIGFyZyA9IGFyZ3NbdGFnXTtcbiAgICAgIHJlcyRbdGFnXSA9IG5ldyBTdW10aShhcmcuc3VtdGkpO1xuICAgIH1cbiAgICB0aGlzLmFyZ3MgPSByZXMkO1xuICB9XG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhZywgc3VtdGk7XG4gICAgcmV0dXJuIHRoaXMudGV4dCArIFwiIFwiICsgdW50YWdzKChmdW5jdGlvbigpe1xuICAgICAgdmFyIHJlZiQsIHJlc3VsdHMkID0gW107XG4gICAgICBmb3IgKHRhZyBpbiByZWYkID0gdGhpcy5hcmdzKSB7XG4gICAgICAgIHN1bXRpID0gcmVmJFt0YWddO1xuICAgICAgICByZXN1bHRzJC5wdXNoKFwiW1wiICsgdGFnICsgXCI6IFwiICsgc3VtdGkudG9TdHJpbmcoKSArIFwiXVwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzJDtcbiAgICB9LmNhbGwodGhpcykpKTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0ZXh0LCBjYW52YXNlcywgcmVzJCwgdGFnLCByZWYkLCBzdW10aSwgc3VtdGlXaWR0aCwgc2VsYnJpV2lkdGgsIGhlaWdodCwgb2Zmc2V0LCBpJCwgbGVuJCwgaSwgYywgcmVzdWx0cyQgPSBbXTtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHJlcyQgPSBbXTtcbiAgICBmb3IgKHRhZyBpbiByZWYkID0gdGhpcy5hcmdzKSB7XG4gICAgICBzdW10aSA9IHJlZiRbdGFnXTtcbiAgICAgIHJlcyQucHVzaChzdW10aS5kcmF3KHRhZykpO1xuICAgIH1cbiAgICBjYW52YXNlcyA9IHJlcyQ7XG4gICAgc3VtdGlXaWR0aCA9IHN1bShjYW52YXNlcy5tYXAoZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0LndpZHRoO1xuICAgIH0pKTtcbiAgICBzZWxicmlXaWR0aCA9IHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoICsgMiAqIGd1dHRlcjtcbiAgICBoZWlnaHQgPSBjYW52YXNlc1swXS5oZWlnaHQgKyBzaXplO1xuICAgIHRoaXMuc2V0U2l6ZShzZWxicmlXaWR0aCArIHN1bXRpV2lkdGggKyBndXR0ZXIgKiBjYW52YXNlcy5sZW5ndGgsIGhlaWdodCk7XG4gICAgdGhpcy5pbnN0YWxsKGRvY3VtZW50LmJvZHkpO1xuICAgIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QoMCwgMCwgc2VsYnJpV2lkdGgsIHNpemUgKyAyICogZ3V0dGVyKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbGxUZXh0KHRleHQsIGd1dHRlciwgZ3V0dGVyKTtcbiAgICB9KTtcbiAgICBvZmZzZXQgPSBzZWxicmlXaWR0aCArIGd1dHRlcjtcbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IGNhbnZhc2VzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICBpID0gaSQ7XG4gICAgICBjID0gY2FudmFzZXNbaSRdO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGMsIG9mZnNldCwgMCk7XG4gICAgICByZXN1bHRzJC5wdXNoKG9mZnNldCArPSBjLndpZHRoICsgZ3V0dGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9O1xuICBwcm90b3R5cGUuZHJhd0ZyZWVmb3JtID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdGV4dCwgaGVpZ2h0LCBjYW52YXNlcywgcmVzJCwgdGFnLCByZWYkLCBzdW10aSwgc3VtdGlXaWR0aCwgc3VtdGlIZWlnaHQsIHNlbGJyaVdpZHRoLCBpJCwgbGVuJCwgaSwgYywgcmVzdWx0cyQgPSBbXTtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGhlaWdodCA9IHNpemUgKyBndXR0ZXIgKiAzO1xuICAgIHJlcyQgPSBbXTtcbiAgICBmb3IgKHRhZyBpbiByZWYkID0gdGhpcy5hcmdzKSB7XG4gICAgICBzdW10aSA9IHJlZiRbdGFnXTtcbiAgICAgIHJlcyQucHVzaChzdW10aS5kcmF3RnJlZWZvcm0odGFnKSk7XG4gICAgfVxuICAgIGNhbnZhc2VzID0gcmVzJDtcbiAgICBzdW10aVdpZHRoID0gc3VtKGNhbnZhc2VzLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXQud2lkdGg7XG4gICAgfSkpO1xuICAgIHN1bXRpSGVpZ2h0ID0gc3VtKGNhbnZhc2VzLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXQuaGVpZ2h0ICsgZ3V0dGVyO1xuICAgIH0pKTtcbiAgICBzZWxicmlXaWR0aCA9IHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoICsgMiAqIGd1dHRlcjtcbiAgICB0aGlzLnNldFNpemUoc2VsYnJpV2lkdGggKyBzdW10aVdpZHRoICsgZ3V0dGVyICogY2FudmFzZXMubGVuZ3RoLCBzdW10aUhlaWdodCk7XG4gICAgdGhpcy5pbnN0YWxsKGRvY3VtZW50LmJvZHkpO1xuICAgIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QoMCwgc3VtdGlIZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMiArIGd1dHRlciAvIDIsIHNlbGJyaVdpZHRoLCBzaXplICsgMiAqIGd1dHRlcik7XG4gICAgICByZXR1cm4gdGhpcy5maWxsVGV4dCh0ZXh0LCBndXR0ZXIsIHN1bXRpSGVpZ2h0IC8gMiAtIGhlaWdodCAvIDIgKyBndXR0ZXIgKiAxLjUpO1xuICAgIH0pO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gY2FudmFzZXMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIGkgPSBpJDtcbiAgICAgIGMgPSBjYW52YXNlc1tpJF07XG4gICAgICByZXN1bHRzJC5wdXNoKHRoaXMuY3R4LmRyYXdJbWFnZShjLCBzZWxicmlXaWR0aCArIGxpbmVTcGFjaW5nICsgZ3V0dGVyLCBpICogaGVpZ2h0ICsgZ3V0dGVyIC8gMikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH07XG4gIHJldHVybiBTZWxicmk7XG59KEdlcm5hKSk7XG5TdW10aSA9IChmdW5jdGlvbihzdXBlcmNsYXNzKXtcbiAgdmFyIHByb3RvdHlwZSA9IGV4dGVuZCQoKGltcG9ydCQoU3VtdGksIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ1N1bXRpJywgU3VtdGkpLCBzdXBlcmNsYXNzKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gU3VtdGk7XG4gIGZ1bmN0aW9uIFN1bXRpKGFyZyQpe1xuICAgIHZhciByZWYkLCBicmlkaSwgdGhhdDtcbiAgICB0aGlzLnRleHQgPSBhcmckLnRleHQsIHRoaXMucHJlID0gKHJlZiQgPSBhcmckLnByZSkgIT0gbnVsbCA/IHJlZiQgOiBcIlwiLCB0aGlzLnBvc3QgPSAocmVmJCA9IGFyZyQucG9zdCkgIT0gbnVsbCA/IHJlZiQgOiBcIlwiLCBicmlkaSA9IGFyZyQuYnJpZGk7XG4gICAgdGhpcy5kcmF3RnJlZWZvcm0gPSBiaW5kJCh0aGlzLCAnZHJhd0ZyZWVmb3JtJywgcHJvdG90eXBlKTtcbiAgICBTdW10aS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCh0aGF0ID0gYnJpZGkpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYnJpZGkgPSBuZXcgQnJpZGkodGhhdCk7XG4gICAgfVxuICB9XG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucHJlU3RyaW5nKCkgKyB0aGlzLnRleHQgKyB0aGlzLmJyaWRpU3RyaW5nKCkgKyB0aGlzLnBvc3RTdHJpbmcoKTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbih0YWcpe1xuICAgIHZhciB0ZXh0LCBoZWlnaHQsIHdpZHRoLCB0YWdXaWR0aDtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGhlaWdodCA9IDIgKiBndXR0ZXIgKyBzaXplO1xuICAgIHdpZHRoID0gMiAqIGd1dHRlciArIHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoO1xuICAgIHRhZ1dpZHRoID0gMiAqIGd1dHRlciArIHNpemUgKiAwLjYgKiB0YWcubGVuZ3RoO1xuICAgIHRoaXMuc2V0U2l6ZShtYXgod2lkdGgsIHRhZ1dpZHRoKSwgaGVpZ2h0ICogMiArIGd1dHRlcik7XG4gICAgcmV0dXJuIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIGd1dHRlciwgZ3V0dGVyKTtcbiAgICAgIHRoaXMuc3Ryb2tlUmVjdChndXR0ZXIsIGhlaWdodCwgd2lkdGggLSBndXR0ZXIgKiAyLCAwKTtcbiAgICAgIHRoaXMudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRhZywgd2lkdGggLyAyLCBndXR0ZXIgKyBoZWlnaHQgKyBndXR0ZXIsIHdpZHRoKTtcbiAgICAgIHRoaXMuZWxsaXBzZSh3aWR0aCAvIDIsIGhlaWdodCArIGhlaWdodCAvIDIgKyBndXR0ZXIsIHRhZ1dpZHRoIC8gMiAtIDIsIGhlaWdodCAvIDIsIDAsIDAsIHRhdSk7XG4gICAgICB0aGlzLnNldExpbmVEYXNoKFsyLCA3XSk7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2UoKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXdGcmVlZm9ybSA9IGZ1bmN0aW9uKHRhZyl7XG4gICAgdmFyIHRleHQsIGhlaWdodCwgd2lkdGgsIHRhZ1dpZHRoO1xuICAgIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgaGVpZ2h0ID0gMiAqIGd1dHRlciArIHNpemU7XG4gICAgd2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRoaXMudGV4dC5sZW5ndGg7XG4gICAgdGFnV2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRhZy5sZW5ndGg7XG4gICAgdGhpcy5zZXRTaXplKHdpZHRoICsgdGFnV2lkdGggKyBndXR0ZXIsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QodGFnV2lkdGggKyBndXR0ZXIsIGhlaWdodCwgd2lkdGggLSBndXR0ZXIgKiAyLCAwKTtcbiAgICAgIHRoaXMuZmlsbFRleHQodGV4dCwgdGFnV2lkdGggKyBndXR0ZXIsIGd1dHRlcik7XG4gICAgICB0aGlzLmVsbGlwc2UodGFnV2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0YWdXaWR0aCAvIDIgLSAyLCBoZWlnaHQgLyAyLCAwLCAwLCB0YXUpO1xuICAgICAgdGhpcy5maWxsVGV4dCh0YWcsIGd1dHRlciwgZ3V0dGVyKTtcbiAgICAgIHRoaXMuc2V0TGluZURhc2goWzIsIDddKTtcbiAgICAgIHJldHVybiB0aGlzLnN0cm9rZSgpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gU3VtdGk7XG59KEdlcm5hKSk7XG5vdXRwdXQgPSBuZXcgQmxpdHRlcig3MDAsIDcwMCk7XG5yZWYkID0gcmVxdWlyZSgnLi9kYXRhJyksIGJhbG5lbWEgPSByZWYkLmJhbG5lbWEsIGV4YW1wbGUgPSByZWYkLmV4YW1wbGU7XG5iID0gbmV3IEJyaWRpKGV4YW1wbGUpO1xuYi5kcmF3RnJlZWZvcm0oKTtcbmZ1bmN0aW9uIGV4dGVuZCQoc3ViLCBzdXApe1xuICBmdW5jdGlvbiBmdW4oKXt9IGZ1bi5wcm90b3R5cGUgPSAoc3ViLnN1cGVyY2xhc3MgPSBzdXApLnByb3RvdHlwZTtcbiAgKHN1Yi5wcm90b3R5cGUgPSBuZXcgZnVuKS5jb25zdHJ1Y3RvciA9IHN1YjtcbiAgaWYgKHR5cGVvZiBzdXAuZXh0ZW5kZWQgPT0gJ2Z1bmN0aW9uJykgc3VwLmV4dGVuZGVkKHN1Yik7XG4gIHJldHVybiBzdWI7XG59XG5mdW5jdGlvbiBpbXBvcnQkKG9iaiwgc3JjKXtcbiAgdmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBpZiAob3duLmNhbGwoc3JjLCBrZXkpKSBvYmpba2V5XSA9IHNyY1trZXldO1xuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gYmluZCQob2JqLCBrZXksIHRhcmdldCl7XG4gIHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gKHRhcmdldCB8fCBvYmopW2tleV0uYXBwbHkob2JqLCBhcmd1bWVudHMpIH07XG59IiwidmFyIENhbnZhcywgQmxpdHRlciwgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbkNhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJykuQ2FudmFzO1xub3V0JC5CbGl0dGVyID0gQmxpdHRlciA9IChmdW5jdGlvbihzdXBlcmNsYXNzKXtcbiAgdmFyIHByb3RvdHlwZSA9IGV4dGVuZCQoKGltcG9ydCQoQmxpdHRlciwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnQmxpdHRlcicsIEJsaXR0ZXIpLCBzdXBlcmNsYXNzKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gQmxpdHRlcjtcbiAgZnVuY3Rpb24gQmxpdHRlcih3LCBoKXtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG4gICAgQmxpdHRlci5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcHJvdG90eXBlLmJsaXRUbyA9IGZ1bmN0aW9uKGJsaXR0ZXIsIHgsIHkpe1xuICAgIHggPT0gbnVsbCAmJiAoeCA9IDApO1xuICAgIHkgPT0gbnVsbCAmJiAoeSA9IDApO1xuICAgIHJldHVybiBibGl0dGVyLmN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHkpO1xuICB9O1xuICByZXR1cm4gQmxpdHRlcjtcbn0oQ2FudmFzKSk7XG5mdW5jdGlvbiBleHRlbmQkKHN1Yiwgc3VwKXtcbiAgZnVuY3Rpb24gZnVuKCl7fSBmdW4ucHJvdG90eXBlID0gKHN1Yi5zdXBlcmNsYXNzID0gc3VwKS5wcm90b3R5cGU7XG4gIChzdWIucHJvdG90eXBlID0gbmV3IGZ1bikuY29uc3RydWN0b3IgPSBzdWI7XG4gIGlmICh0eXBlb2Ygc3VwLmV4dGVuZGVkID09ICdmdW5jdGlvbicpIHN1cC5leHRlbmRlZChzdWIpO1xuICByZXR1cm4gc3ViO1xufVxuZnVuY3Rpb24gaW1wb3J0JChvYmosIHNyYyl7XG4gIHZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgaWYgKG93bi5jYWxsKHNyYywga2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgQ2FudmFzLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xub3V0JC5DYW52YXMgPSBDYW52YXMgPSAoZnVuY3Rpb24oKXtcbiAgQ2FudmFzLmRpc3BsYXlOYW1lID0gJ0NhbnZhcyc7XG4gIHZhciBwcm90b3R5cGUgPSBDYW52YXMucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IENhbnZhcztcbiAgZnVuY3Rpb24gQ2FudmFzKHcsIGgpe1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMXB4IGRvdHRlZCBibGFja1wiO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuICBwcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uKHcsIGgpe1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdztcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0ID0gaDtcbiAgfTtcbiAgcHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbihob3N0KXtcbiAgICByZXR1cm4gaG9zdC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gIH07XG4gIHByb3RvdHlwZVsnZG8nXSA9IGZ1bmN0aW9uKM67KXtcbiAgICDOuy5hcHBseSh0aGlzLmN0eCk7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9O1xuICByZXR1cm4gQ2FudmFzO1xufSgpKTsiLCJ2YXIgZXhhbXBsZSwgYmFsbmVtYSwgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbm91dCQuZXhhbXBsZSA9IGV4YW1wbGUgPSB7XG4gIHNlbGJyaToge1xuICAgIHRleHQ6IFwiZHVuZGFcIixcbiAgICBwcmU6IFwiY28nYVwiLFxuICAgIGFyZ3M6IHtcbiAgICAgIGZhOiB7XG4gICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgdGV4dDogXCJtaVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmZToge1xuICAgICAgICBzdW10aToge1xuICAgICAgICAgIHRleHQ6IFwibG8gc2UgZHVuZGFcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmk6IHtcbiAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICB0ZXh0OiBcImRvXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbm91dCQuYmFsbmVtYSA9IGJhbG5lbWEgPSBbXG4gIHtcbiAgICBzZWxicmk6IHtcbiAgICAgIHRleHQ6ICdzZW52YScsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGZhOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgdGV4dDogJ21pJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmU6IHtcbiAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICAgIHRleHQ6ICdsbyBudScsXG4gICAgICAgICAgICBicmlkaToge1xuICAgICAgICAgICAgICBzZWxicmk6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnYmFsbmVtYScsXG4gICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgZmE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbG8gZGplZGknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBzZWxicmk6IHtcbiAgICAgIHRleHQ6ICdrYW5zYScsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGZlOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgdGV4dDogJ2xvJyxcbiAgICAgICAgICAgIGJyaWRpOiB7XG4gICAgICAgICAgICAgIHNlbGJyaToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdkcmF0YSB4YWJqdScsXG4gICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgJ2JlIGZlJzoge1xuICAgICAgICAgICAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdsbyB4YW1zaSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHNlbGJyaToge1xuICAgICAgdGV4dDogJ2xpZnJpJyxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgZmE6IHtcbiAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB0ZXh0OiAnbWknXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmZToge1xuICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICB0eXBlOiAnZXZlbnQnLFxuICAgICAgICAgICAgdGV4dDogJ2xvIG51JyxcbiAgICAgICAgICAgIGJyaWRpOiB7XG4gICAgICAgICAgICAgIHNlbGJyaToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdiYWxuZW1hJyxcbiAgICAgICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgICAgICBmYToge1xuICAgICAgICAgICAgICAgICAgICB1aTogJ3VpJyxcbiAgICAgICAgICAgICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbG8gZGplZGknLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG4vKlxuLmkgcm8geGFtc2kgY3Ugdm9pIHN1IGJveG5hIGtpIHBhZ2J1XG4uaSBqZSBybyByaWN0dSdhIGN1IHZvaSBzdSB0cmljdSBraSB4YWJqdVxuLmkgcm8gcmlyeGUgY3Ugdm9pIGtpIHN1IGtyYXNpIGN1IGNsaXZhXG4uaSBqZSBtaSB2b2kga2kgc2VudmEgbG8gc2UgZGppY2FcblxuLmkgbG8geGFtc2kgY3UgbWFua3UgamUgY3Ugc2ltbHUgbG8ga2EgY2ltbmkgcm8gY2ltZGVcbi5pIHNpbWx1IGxvIGthIG5vIGRhIGNlIGppbXRlXG4uaSBsbyB4YW1zaSBjdSBsZW5rdSBqZSBjdSB6ZGFuaSBsbyB6YW52cmljaVxubm9pIGtpIGxvIGthIHByYW5lIHppZnJlIGJ1J3Uga2EnZSBsaWZyaVxuKi8iLCJ2YXIgQmxpdHRlciwgR2VybmEsIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5CbGl0dGVyID0gcmVxdWlyZSgnLi9ibGl0dGVyJykuQmxpdHRlcjtcbm91dCQuR2VybmEgPSBHZXJuYSA9IChmdW5jdGlvbihzdXBlcmNsYXNzKXtcbiAgdmFyIHByb3RvdHlwZSA9IGV4dGVuZCQoKGltcG9ydCQoR2VybmEsIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ0dlcm5hJywgR2VybmEpLCBzdXBlcmNsYXNzKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gR2VybmE7XG4gIGZ1bmN0aW9uIEdlcm5hKGFyZyQpe1xuICAgIHRoaXMucHJlID0gYXJnJC5wcmUsIHRoaXMucG9zdCA9IGFyZyQucG9zdDtcbiAgICBHZXJuYS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMDtcbiAgfVxuICBwcm90b3R5cGUucHJlU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICBpZiAodGhpcy5wcmUpIHtcbiAgICAgIHJldHVybiBcIntcIiArIHRoaXMucHJlICsgXCJ9IFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG4gIHByb3RvdHlwZS5wb3N0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICBpZiAodGhpcy5wb3N0KSB7XG4gICAgICByZXR1cm4gXCIge1wiICsgdGhpcy5wb3N0ICsgXCJ9XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfTtcbiAgcHJvdG90eXBlLmJyaWRpU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICBpZiAodGhpcy5icmlkaSkge1xuICAgICAgcmV0dXJuIFwiIFwiICsgdGhpcy5icmlkaS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG4gIHJldHVybiBHZXJuYTtcbn0oQmxpdHRlcikpO1xuZnVuY3Rpb24gZXh0ZW5kJChzdWIsIHN1cCl7XG4gIGZ1bmN0aW9uIGZ1bigpe30gZnVuLnByb3RvdHlwZSA9IChzdWIuc3VwZXJjbGFzcyA9IHN1cCkucHJvdG90eXBlO1xuICAoc3ViLnByb3RvdHlwZSA9IG5ldyBmdW4pLmNvbnN0cnVjdG9yID0gc3ViO1xuICBpZiAodHlwZW9mIHN1cC5leHRlbmRlZCA9PSAnZnVuY3Rpb24nKSBzdXAuZXh0ZW5kZWQoc3ViKTtcbiAgcmV0dXJuIHN1Yjtcbn1cbmZ1bmN0aW9uIGltcG9ydCQob2JqLCBzcmMpe1xuICB2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGlmIChvd24uY2FsbChzcmMsIGtleSkpIG9ialtrZXldID0gc3JjW2tleV07XG4gIHJldHVybiBvYmo7XG59IiwidmFyIGlkLCBsb2csIG1pbiwgbWF4LCBmbG9vciwgcm91bmQsIHNpbiwgY29zLCB0YXUsIGZsaXAsIGRlbGF5LCBldmVyeSwgZGl2LCByYW5kb20sIHJhbmRvbUZyb20sIHJldmVyc2UsIGtleXMsIHZhbHVlcywgdW50YWdzLCBtYXAsIHN1bSwgZm9sZCwgZ3JvdXBCeSwgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbm91dCQuaWQgPSBpZCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0O1xufTtcbm91dCQubG9nID0gbG9nID0gZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbn07XG5vdXQkLm1pbiA9IG1pbiA9IE1hdGgubWluO1xub3V0JC5tYXggPSBtYXggPSBNYXRoLm1heDtcbm91dCQuZmxvb3IgPSBmbG9vciA9IE1hdGguZmxvb3I7XG5vdXQkLnJvdW5kID0gcm91bmQgPSBNYXRoLnJvdW5kO1xub3V0JC5zaW4gPSBzaW4gPSBNYXRoLnNpbjtcbm91dCQuY29zID0gY29zID0gTWF0aC5jb3M7XG5vdXQkLnRhdSA9IHRhdSA9IE1hdGguUEkgKiAyO1xub3V0JC5mbGlwID0gZmxpcCA9IGZ1bmN0aW9uKM67KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgIHJldHVybiDOuyhiLCBhKTtcbiAgfTtcbn07XG5vdXQkLmRlbGF5ID0gZGVsYXkgPSBmbGlwKHNldFRpbWVvdXQpO1xub3V0JC5ldmVyeSA9IGV2ZXJ5ID0gZmxpcChzZXRJbnRlcnZhbCk7XG5vdXQkLmRpdiA9IGRpdiA9IGN1cnJ5JChmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGZsb29yKGEgLyBiKTtcbn0pO1xub3V0JC5yYW5kb20gPSByYW5kb20gPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogaXQ7XG59O1xub3V0JC5yYW5kb21Gcm9tID0gcmFuZG9tRnJvbSA9IGZ1bmN0aW9uKGxpc3Qpe1xuICByZXR1cm4gbGlzdFtmbG9vcihyYW5kb20obGlzdC5sZW5ndGggLSAxKSldO1xufTtcbm91dCQucmV2ZXJzZSA9IHJldmVyc2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdC5yZXZlcnNlKCk7XG59O1xub3V0JC5rZXlzID0ga2V5cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGssIHYsIHJlc3VsdHMkID0gW107XG4gIGZvciAoayBpbiBpdCkge1xuICAgIHYgPSBpdFtrXTtcbiAgICByZXN1bHRzJC5wdXNoKGspO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn07XG5vdXQkLnZhbHVlcyA9IHZhbHVlcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGssIHYsIHJlc3VsdHMkID0gW107XG4gIGZvciAoayBpbiBpdCkge1xuICAgIHYgPSBpdFtrXTtcbiAgICByZXN1bHRzJC5wdXNoKHYpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn07XG5vdXQkLnVudGFncyA9IHVudGFncyA9IGZ1bmN0aW9uKGl0ZW1zKXtcbiAgcmV0dXJuIGl0ZW1zLmpvaW4oXCIgXCIpO1xufTtcbm91dCQubWFwID0gbWFwID0gZnVuY3Rpb24ozrssIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICByZXN1bHRzJC5wdXNoKM67KHgpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xub3V0JC5zdW0gPSBzdW0gPSBmdW5jdGlvbih4cyl7XG4gIHJldHVybiBmb2xkKGN1cnJ5JChmdW5jdGlvbih4JCwgeSQpe1xuICAgIHJldHVybiB4JCArIHkkO1xuICB9KSwgMCwgeHMpO1xufTtcbm91dCQuZm9sZCA9IGZvbGQgPSBjdXJyeSQoZnVuY3Rpb24ozrssIGksIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpID0gzrsoaSwgeCk7XG4gIH1cbiAgcmV0dXJuIGk7XG59KTtcbm91dCQuZ3JvdXBCeSA9IGdyb3VwQnkgPSBmdW5jdGlvbijOuywgbGlzdCl7XG4gIHZhciBvLCBpJCwgbGVuJCwgeCwga2V5JDtcbiAgbyA9IHt9O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IGxpc3QubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0gbGlzdFtpJF07XG4gICAgKG9ba2V5JCA9IM67KHgpXSB8fCAob1trZXkkXSA9IFtdKSkucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gbztcbn07XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn0iXX0=
