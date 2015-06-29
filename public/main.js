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
    var text, height, canvases, res$, tag, ref$, sumti, sumtiWidth, sumtiHeight, selbriWidth, i$, len$, i, c, x, y, cp, cpy, zz, results$ = [];
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
      this.lineWidth = 2;
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.fillText(text, gutter, sumtiHeight / 2 - height / 2 + gutter * 1.5);
      return this.strokeRect(0.5, 0.5 + sumtiHeight / 2 - height / 2 + gutter / 2, selbriWidth, size + 2 * gutter);
    });
    for (i$ = 0, len$ = canvases.length; i$ < len$; ++i$) {
      i = i$;
      c = canvases[i$];
      x = selbriWidth + lineSpacing + gutter;
      y = i * height + gutter / 2;
      cp = gutter * 5;
      cpy = sumtiHeight / 2;
      zz = y + height / 2 - gutter / 2;
      this.ctx.drawImage(c, x, y);
      this.ctx.moveTo(selbriWidth, cpy);
      this.ctx.bezierCurveTo(selbriWidth + cp, cpy, x - cp, zz, x, zz);
      results$.push(this.ctx.stroke());
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
      this.strokeRect(0.5 + gutter, 0.5 + height, width - gutter * 2, 0);
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
      this.strokeRect(tagWidth + gutter, height - 1, width - gutter * 2, 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL3NyYy9pbmRleC5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9ibGl0dGVyLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2NhbnZhcy5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9kYXRhLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2dlcm5hLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL3N0ZC9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgcmVmJCwgaWQsIGxvZywgdGF1LCBtYXgsIHN1bSwgdW50YWdzLCBCbGl0dGVyLCBHZXJuYSwgc2l6ZSwgZ3V0dGVyLCBsaW5lU3BhY2luZywgQnJpZGksIFNlbGJyaSwgU3VtdGksIG91dHB1dCwgYmFsbmVtYSwgZXhhbXBsZSwgYjtcbnJlZiQgPSByZXF1aXJlKCdzdGQnKSwgaWQgPSByZWYkLmlkLCBsb2cgPSByZWYkLmxvZywgdGF1ID0gcmVmJC50YXUsIG1heCA9IHJlZiQubWF4LCBzdW0gPSByZWYkLnN1bSwgdW50YWdzID0gcmVmJC51bnRhZ3M7XG5CbGl0dGVyID0gcmVxdWlyZSgnLi9ibGl0dGVyJykuQmxpdHRlcjtcbkdlcm5hID0gcmVxdWlyZSgnLi9nZXJuYScpLkdlcm5hO1xuc2l6ZSA9IDIwO1xuZ3V0dGVyID0gMTA7XG5saW5lU3BhY2luZyA9IDUwO1xuQnJpZGkgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKEJyaWRpLCBzdXBlcmNsYXNzKS5kaXNwbGF5TmFtZSA9ICdCcmlkaScsIEJyaWRpKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IEJyaWRpO1xuICBmdW5jdGlvbiBCcmlkaShhcmckKXtcbiAgICB2YXIgc2VsYnJpO1xuICAgIHNlbGJyaSA9IGFyZyQuc2VsYnJpO1xuICAgIEJyaWRpLnN1cGVyY2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNlbGJyaSA9IG5ldyBTZWxicmkoc2VsYnJpKTtcbiAgfVxuICBwcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBcIihcIiArIHRoaXMuc2VsYnJpLnRvU3RyaW5nKCkgKyBcIilcIjtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnNlbGJyaS5kcmF3KCk7XG4gIH07XG4gIHByb3RvdHlwZS5kcmF3RnJlZWZvcm0gPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnNlbGJyaS5kcmF3RnJlZWZvcm0oKTtcbiAgfTtcbiAgcmV0dXJuIEJyaWRpO1xufShHZXJuYSkpO1xuU2VsYnJpID0gKGZ1bmN0aW9uKHN1cGVyY2xhc3Mpe1xuICB2YXIgcHJvdG90eXBlID0gZXh0ZW5kJCgoaW1wb3J0JChTZWxicmksIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ1NlbGJyaScsIFNlbGJyaSksIHN1cGVyY2xhc3MpLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBTZWxicmk7XG4gIGZ1bmN0aW9uIFNlbGJyaShhcmckKXtcbiAgICB2YXIgYXJncywgcmVzJCwgdGFnLCBhcmc7XG4gICAgdGhpcy50ZXh0ID0gYXJnJC50ZXh0LCBhcmdzID0gYXJnJC5hcmdzO1xuICAgIFNlbGJyaS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmVzJCA9IHt9O1xuICAgIGZvciAodGFnIGluIGFyZ3MpIHtcbiAgICAgIGFyZyA9IGFyZ3NbdGFnXTtcbiAgICAgIHJlcyRbdGFnXSA9IG5ldyBTdW10aShhcmcuc3VtdGkpO1xuICAgIH1cbiAgICB0aGlzLmFyZ3MgPSByZXMkO1xuICB9XG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhZywgc3VtdGk7XG4gICAgcmV0dXJuIHRoaXMudGV4dCArIFwiIFwiICsgdW50YWdzKChmdW5jdGlvbigpe1xuICAgICAgdmFyIHJlZiQsIHJlc3VsdHMkID0gW107XG4gICAgICBmb3IgKHRhZyBpbiByZWYkID0gdGhpcy5hcmdzKSB7XG4gICAgICAgIHN1bXRpID0gcmVmJFt0YWddO1xuICAgICAgICByZXN1bHRzJC5wdXNoKFwiW1wiICsgdGFnICsgXCI6IFwiICsgc3VtdGkudG9TdHJpbmcoKSArIFwiXVwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzJDtcbiAgICB9LmNhbGwodGhpcykpKTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0ZXh0LCBjYW52YXNlcywgcmVzJCwgdGFnLCByZWYkLCBzdW10aSwgc3VtdGlXaWR0aCwgc2VsYnJpV2lkdGgsIGhlaWdodCwgb2Zmc2V0LCBpJCwgbGVuJCwgaSwgYywgcmVzdWx0cyQgPSBbXTtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHJlcyQgPSBbXTtcbiAgICBmb3IgKHRhZyBpbiByZWYkID0gdGhpcy5hcmdzKSB7XG4gICAgICBzdW10aSA9IHJlZiRbdGFnXTtcbiAgICAgIHJlcyQucHVzaChzdW10aS5kcmF3KHRhZykpO1xuICAgIH1cbiAgICBjYW52YXNlcyA9IHJlcyQ7XG4gICAgc3VtdGlXaWR0aCA9IHN1bShjYW52YXNlcy5tYXAoZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0LndpZHRoO1xuICAgIH0pKTtcbiAgICBzZWxicmlXaWR0aCA9IHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoICsgMiAqIGd1dHRlcjtcbiAgICBoZWlnaHQgPSBjYW52YXNlc1swXS5oZWlnaHQgKyBzaXplO1xuICAgIHRoaXMuc2V0U2l6ZShzZWxicmlXaWR0aCArIHN1bXRpV2lkdGggKyBndXR0ZXIgKiBjYW52YXNlcy5sZW5ndGgsIGhlaWdodCk7XG4gICAgdGhpcy5pbnN0YWxsKGRvY3VtZW50LmJvZHkpO1xuICAgIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QoMCwgMCwgc2VsYnJpV2lkdGgsIHNpemUgKyAyICogZ3V0dGVyKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbGxUZXh0KHRleHQsIGd1dHRlciwgZ3V0dGVyKTtcbiAgICB9KTtcbiAgICBvZmZzZXQgPSBzZWxicmlXaWR0aCArIGd1dHRlcjtcbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IGNhbnZhc2VzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICBpID0gaSQ7XG4gICAgICBjID0gY2FudmFzZXNbaSRdO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGMsIG9mZnNldCwgMCk7XG4gICAgICByZXN1bHRzJC5wdXNoKG9mZnNldCArPSBjLndpZHRoICsgZ3V0dGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9O1xuICBwcm90b3R5cGUuZHJhd0ZyZWVmb3JtID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdGV4dCwgaGVpZ2h0LCBjYW52YXNlcywgcmVzJCwgdGFnLCByZWYkLCBzdW10aSwgc3VtdGlXaWR0aCwgc3VtdGlIZWlnaHQsIHNlbGJyaVdpZHRoLCBpJCwgbGVuJCwgaSwgYywgeCwgeSwgY3AsIGNweSwgenosIHJlc3VsdHMkID0gW107XG4gICAgdGV4dCA9IHRoaXMudGV4dDtcbiAgICBoZWlnaHQgPSBzaXplICsgZ3V0dGVyICogMztcbiAgICByZXMkID0gW107XG4gICAgZm9yICh0YWcgaW4gcmVmJCA9IHRoaXMuYXJncykge1xuICAgICAgc3VtdGkgPSByZWYkW3RhZ107XG4gICAgICByZXMkLnB1c2goc3VtdGkuZHJhd0ZyZWVmb3JtKHRhZykpO1xuICAgIH1cbiAgICBjYW52YXNlcyA9IHJlcyQ7XG4gICAgc3VtdGlXaWR0aCA9IHN1bShjYW52YXNlcy5tYXAoZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0LndpZHRoO1xuICAgIH0pKTtcbiAgICBzdW10aUhlaWdodCA9IHN1bShjYW52YXNlcy5tYXAoZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0LmhlaWdodCArIGd1dHRlcjtcbiAgICB9KSk7XG4gICAgc2VsYnJpV2lkdGggPSBzaXplICogMC42ICogdGhpcy50ZXh0Lmxlbmd0aCArIDIgKiBndXR0ZXI7XG4gICAgdGhpcy5zZXRTaXplKHNlbGJyaVdpZHRoICsgc3VtdGlXaWR0aCArIGd1dHRlciAqIGNhbnZhc2VzLmxlbmd0aCwgc3VtdGlIZWlnaHQpO1xuICAgIHRoaXMuaW5zdGFsbChkb2N1bWVudC5ib2R5KTtcbiAgICB0aGlzWydkbyddKGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgICB0aGlzLnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgICAgdGhpcy5maWxsVGV4dCh0ZXh0LCBndXR0ZXIsIHN1bXRpSGVpZ2h0IC8gMiAtIGhlaWdodCAvIDIgKyBndXR0ZXIgKiAxLjUpO1xuICAgICAgcmV0dXJuIHRoaXMuc3Ryb2tlUmVjdCgwLjUsIDAuNSArIHN1bXRpSGVpZ2h0IC8gMiAtIGhlaWdodCAvIDIgKyBndXR0ZXIgLyAyLCBzZWxicmlXaWR0aCwgc2l6ZSArIDIgKiBndXR0ZXIpO1xuICAgIH0pO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gY2FudmFzZXMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIGkgPSBpJDtcbiAgICAgIGMgPSBjYW52YXNlc1tpJF07XG4gICAgICB4ID0gc2VsYnJpV2lkdGggKyBsaW5lU3BhY2luZyArIGd1dHRlcjtcbiAgICAgIHkgPSBpICogaGVpZ2h0ICsgZ3V0dGVyIC8gMjtcbiAgICAgIGNwID0gZ3V0dGVyICogNTtcbiAgICAgIGNweSA9IHN1bXRpSGVpZ2h0IC8gMjtcbiAgICAgIHp6ID0geSArIGhlaWdodCAvIDIgLSBndXR0ZXIgLyAyO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGMsIHgsIHkpO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHNlbGJyaVdpZHRoLCBjcHkpO1xuICAgICAgdGhpcy5jdHguYmV6aWVyQ3VydmVUbyhzZWxicmlXaWR0aCArIGNwLCBjcHksIHggLSBjcCwgenosIHgsIHp6KTtcbiAgICAgIHJlc3VsdHMkLnB1c2godGhpcy5jdHguc3Ryb2tlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH07XG4gIHJldHVybiBTZWxicmk7XG59KEdlcm5hKSk7XG5TdW10aSA9IChmdW5jdGlvbihzdXBlcmNsYXNzKXtcbiAgdmFyIHByb3RvdHlwZSA9IGV4dGVuZCQoKGltcG9ydCQoU3VtdGksIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ1N1bXRpJywgU3VtdGkpLCBzdXBlcmNsYXNzKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gU3VtdGk7XG4gIGZ1bmN0aW9uIFN1bXRpKGFyZyQpe1xuICAgIHZhciByZWYkLCBicmlkaSwgdGhhdDtcbiAgICB0aGlzLnRleHQgPSBhcmckLnRleHQsIHRoaXMucHJlID0gKHJlZiQgPSBhcmckLnByZSkgIT0gbnVsbCA/IHJlZiQgOiBcIlwiLCB0aGlzLnBvc3QgPSAocmVmJCA9IGFyZyQucG9zdCkgIT0gbnVsbCA/IHJlZiQgOiBcIlwiLCBicmlkaSA9IGFyZyQuYnJpZGk7XG4gICAgdGhpcy5kcmF3RnJlZWZvcm0gPSBiaW5kJCh0aGlzLCAnZHJhd0ZyZWVmb3JtJywgcHJvdG90eXBlKTtcbiAgICBTdW10aS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCh0aGF0ID0gYnJpZGkpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYnJpZGkgPSBuZXcgQnJpZGkodGhhdCk7XG4gICAgfVxuICB9XG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucHJlU3RyaW5nKCkgKyB0aGlzLnRleHQgKyB0aGlzLmJyaWRpU3RyaW5nKCkgKyB0aGlzLnBvc3RTdHJpbmcoKTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbih0YWcpe1xuICAgIHZhciB0ZXh0LCBoZWlnaHQsIHdpZHRoLCB0YWdXaWR0aDtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGhlaWdodCA9IDIgKiBndXR0ZXIgKyBzaXplO1xuICAgIHdpZHRoID0gMiAqIGd1dHRlciArIHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoO1xuICAgIHRhZ1dpZHRoID0gMiAqIGd1dHRlciArIHNpemUgKiAwLjYgKiB0YWcubGVuZ3RoO1xuICAgIHRoaXMuc2V0U2l6ZShtYXgod2lkdGgsIHRhZ1dpZHRoKSwgaGVpZ2h0ICogMiArIGd1dHRlcik7XG4gICAgcmV0dXJuIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIGd1dHRlciwgZ3V0dGVyKTtcbiAgICAgIHRoaXMuc3Ryb2tlUmVjdCgwLjUgKyBndXR0ZXIsIDAuNSArIGhlaWdodCwgd2lkdGggLSBndXR0ZXIgKiAyLCAwKTtcbiAgICAgIHRoaXMudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRhZywgd2lkdGggLyAyLCBndXR0ZXIgKyBoZWlnaHQgKyBndXR0ZXIsIHdpZHRoKTtcbiAgICAgIHRoaXMuZWxsaXBzZSh3aWR0aCAvIDIsIGhlaWdodCArIGhlaWdodCAvIDIgKyBndXR0ZXIsIHRhZ1dpZHRoIC8gMiAtIDIsIGhlaWdodCAvIDIsIDAsIDAsIHRhdSk7XG4gICAgICB0aGlzLnNldExpbmVEYXNoKFsyLCA3XSk7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2UoKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJvdG90eXBlLmRyYXdGcmVlZm9ybSA9IGZ1bmN0aW9uKHRhZyl7XG4gICAgdmFyIHRleHQsIGhlaWdodCwgd2lkdGgsIHRhZ1dpZHRoO1xuICAgIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgaGVpZ2h0ID0gMiAqIGd1dHRlciArIHNpemU7XG4gICAgd2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRoaXMudGV4dC5sZW5ndGg7XG4gICAgdGFnV2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRhZy5sZW5ndGg7XG4gICAgdGhpcy5zZXRTaXplKHdpZHRoICsgdGFnV2lkdGggKyBndXR0ZXIsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QodGFnV2lkdGggKyBndXR0ZXIsIGhlaWdodCAtIDEsIHdpZHRoIC0gZ3V0dGVyICogMiwgMCk7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIHRhZ1dpZHRoICsgZ3V0dGVyLCBndXR0ZXIpO1xuICAgICAgdGhpcy5lbGxpcHNlKHRhZ1dpZHRoIC8gMiwgaGVpZ2h0IC8gMiwgdGFnV2lkdGggLyAyIC0gMiwgaGVpZ2h0IC8gMiwgMCwgMCwgdGF1KTtcbiAgICAgIHRoaXMuZmlsbFRleHQodGFnLCBndXR0ZXIsIGd1dHRlcik7XG4gICAgICB0aGlzLnNldExpbmVEYXNoKFsyLCA3XSk7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2UoKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIFN1bXRpO1xufShHZXJuYSkpO1xub3V0cHV0ID0gbmV3IEJsaXR0ZXIoNzAwLCA3MDApO1xucmVmJCA9IHJlcXVpcmUoJy4vZGF0YScpLCBiYWxuZW1hID0gcmVmJC5iYWxuZW1hLCBleGFtcGxlID0gcmVmJC5leGFtcGxlO1xuYiA9IG5ldyBCcmlkaShleGFtcGxlKTtcbmIuZHJhd0ZyZWVmb3JtKCk7XG5mdW5jdGlvbiBleHRlbmQkKHN1Yiwgc3VwKXtcbiAgZnVuY3Rpb24gZnVuKCl7fSBmdW4ucHJvdG90eXBlID0gKHN1Yi5zdXBlcmNsYXNzID0gc3VwKS5wcm90b3R5cGU7XG4gIChzdWIucHJvdG90eXBlID0gbmV3IGZ1bikuY29uc3RydWN0b3IgPSBzdWI7XG4gIGlmICh0eXBlb2Ygc3VwLmV4dGVuZGVkID09ICdmdW5jdGlvbicpIHN1cC5leHRlbmRlZChzdWIpO1xuICByZXR1cm4gc3ViO1xufVxuZnVuY3Rpb24gaW1wb3J0JChvYmosIHNyYyl7XG4gIHZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgaWYgKG93bi5jYWxsKHNyYywga2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGJpbmQkKG9iaiwga2V5LCB0YXJnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuICh0YXJnZXQgfHwgb2JqKVtrZXldLmFwcGx5KG9iaiwgYXJndW1lbnRzKSB9O1xufSIsInZhciBDYW52YXMsIEJsaXR0ZXIsIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5DYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLkNhbnZhcztcbm91dCQuQmxpdHRlciA9IEJsaXR0ZXIgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKEJsaXR0ZXIsIHN1cGVyY2xhc3MpLmRpc3BsYXlOYW1lID0gJ0JsaXR0ZXInLCBCbGl0dGVyKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IEJsaXR0ZXI7XG4gIGZ1bmN0aW9uIEJsaXR0ZXIodywgaCl7XG4gICAgdGhpcy53ID0gdztcbiAgICB0aGlzLmggPSBoO1xuICAgIEJsaXR0ZXIuc3VwZXJjbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIHByb3RvdHlwZS5ibGl0VG8gPSBmdW5jdGlvbihibGl0dGVyLCB4LCB5KXtcbiAgICB4ID09IG51bGwgJiYgKHggPSAwKTtcbiAgICB5ID09IG51bGwgJiYgKHkgPSAwKTtcbiAgICByZXR1cm4gYmxpdHRlci5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5KTtcbiAgfTtcbiAgcmV0dXJuIEJsaXR0ZXI7XG59KENhbnZhcykpO1xuZnVuY3Rpb24gZXh0ZW5kJChzdWIsIHN1cCl7XG4gIGZ1bmN0aW9uIGZ1bigpe30gZnVuLnByb3RvdHlwZSA9IChzdWIuc3VwZXJjbGFzcyA9IHN1cCkucHJvdG90eXBlO1xuICAoc3ViLnByb3RvdHlwZSA9IG5ldyBmdW4pLmNvbnN0cnVjdG9yID0gc3ViO1xuICBpZiAodHlwZW9mIHN1cC5leHRlbmRlZCA9PSAnZnVuY3Rpb24nKSBzdXAuZXh0ZW5kZWQoc3ViKTtcbiAgcmV0dXJuIHN1Yjtcbn1cbmZ1bmN0aW9uIGltcG9ydCQob2JqLCBzcmMpe1xuICB2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGlmIChvd24uY2FsbChzcmMsIGtleSkpIG9ialtrZXldID0gc3JjW2tleV07XG4gIHJldHVybiBvYmo7XG59IiwidmFyIENhbnZhcywgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbm91dCQuQ2FudmFzID0gQ2FudmFzID0gKGZ1bmN0aW9uKCl7XG4gIENhbnZhcy5kaXNwbGF5TmFtZSA9ICdDYW52YXMnO1xuICB2YXIgcHJvdG90eXBlID0gQ2FudmFzLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBDYW52YXM7XG4gIGZ1bmN0aW9uIENhbnZhcyh3LCBoKXtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuc2V0U2l6ZSh3LCBoKTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBkb3R0ZWQgYmxhY2tcIjtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIH1cbiAgcHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbih3LCBoKXtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHc7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodCA9IGg7XG4gIH07XG4gIHByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24oaG9zdCl7XG4gICAgcmV0dXJuIGhvc3QuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9O1xuICBwcm90b3R5cGVbJ2RvJ10gPSBmdW5jdGlvbijOuyl7XG4gICAgzrsuYXBwbHkodGhpcy5jdHgpO1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfTtcbiAgcmV0dXJuIENhbnZhcztcbn0oKSk7IiwidmFyIGV4YW1wbGUsIGJhbG5lbWEsIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5vdXQkLmV4YW1wbGUgPSBleGFtcGxlID0ge1xuICBzZWxicmk6IHtcbiAgICB0ZXh0OiBcImR1bmRhXCIsXG4gICAgcHJlOiBcImNvJ2FcIixcbiAgICBhcmdzOiB7XG4gICAgICBmYToge1xuICAgICAgICBzdW10aToge1xuICAgICAgICAgIHRleHQ6IFwibWlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmU6IHtcbiAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICB0ZXh0OiBcImxvIHNlIGR1bmRhXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpOiB7XG4gICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgdGV4dDogXCJkb1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5vdXQkLmJhbG5lbWEgPSBiYWxuZW1hID0gW1xuICB7XG4gICAgc2VsYnJpOiB7XG4gICAgICB0ZXh0OiAnc2VudmEnLFxuICAgICAgYXJnczoge1xuICAgICAgICBmYToge1xuICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHRleHQ6ICdtaSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZlOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdldmVudCcsXG4gICAgICAgICAgICB0ZXh0OiAnbG8gbnUnLFxuICAgICAgICAgICAgYnJpZGk6IHtcbiAgICAgICAgICAgICAgc2VsYnJpOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ2JhbG5lbWEnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgIGZhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2xvIGRqZWRpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VsYnJpOiB7XG4gICAgICB0ZXh0OiAna2Fuc2EnLFxuICAgICAgYXJnczoge1xuICAgICAgICBmZToge1xuICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHRleHQ6ICdsbycsXG4gICAgICAgICAgICBicmlkaToge1xuICAgICAgICAgICAgICBzZWxicmk6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnZHJhdGEgeGFianUnLFxuICAgICAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICdiZSBmZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbG8geGFtc2knXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBzZWxicmk6IHtcbiAgICAgIHRleHQ6ICdsaWZyaScsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGZhOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgdGV4dDogJ21pJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmU6IHtcbiAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICAgIHRleHQ6ICdsbyBudScsXG4gICAgICAgICAgICBicmlkaToge1xuICAgICAgICAgICAgICBzZWxicmk6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnYmFsbmVtYScsXG4gICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgZmE6IHtcbiAgICAgICAgICAgICAgICAgICAgdWk6ICd1aScsXG4gICAgICAgICAgICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2xvIGRqZWRpJyxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuLypcbi5pIHJvIHhhbXNpIGN1IHZvaSBzdSBib3huYSBraSBwYWdidVxuLmkgamUgcm8gcmljdHUnYSBjdSB2b2kgc3UgdHJpY3Uga2kgeGFianVcbi5pIHJvIHJpcnhlIGN1IHZvaSBraSBzdSBrcmFzaSBjdSBjbGl2YVxuLmkgamUgbWkgdm9pIGtpIHNlbnZhIGxvIHNlIGRqaWNhXG5cbi5pIGxvIHhhbXNpIGN1IG1hbmt1IGplIGN1IHNpbWx1IGxvIGthIGNpbW5pIHJvIGNpbWRlXG4uaSBzaW1sdSBsbyBrYSBubyBkYSBjZSBqaW10ZVxuLmkgbG8geGFtc2kgY3UgbGVua3UgamUgY3UgemRhbmkgbG8gemFudnJpY2lcbm5vaSBraSBsbyBrYSBwcmFuZSB6aWZyZSBidSd1IGthJ2UgbGlmcmlcbiovIiwidmFyIEJsaXR0ZXIsIEdlcm5hLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xuQmxpdHRlciA9IHJlcXVpcmUoJy4vYmxpdHRlcicpLkJsaXR0ZXI7XG5vdXQkLkdlcm5hID0gR2VybmEgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKEdlcm5hLCBzdXBlcmNsYXNzKS5kaXNwbGF5TmFtZSA9ICdHZXJuYScsIEdlcm5hKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IEdlcm5hO1xuICBmdW5jdGlvbiBHZXJuYShhcmckKXtcbiAgICB0aGlzLnByZSA9IGFyZyQucHJlLCB0aGlzLnBvc3QgPSBhcmckLnBvc3Q7XG4gICAgR2VybmEuc3VwZXJjbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTA7XG4gIH1cbiAgcHJvdG90eXBlLnByZVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMucHJlKSB7XG4gICAgICByZXR1cm4gXCJ7XCIgKyB0aGlzLnByZSArIFwifSBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuICBwcm90b3R5cGUucG9zdFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMucG9zdCkge1xuICAgICAgcmV0dXJuIFwiIHtcIiArIHRoaXMucG9zdCArIFwifVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG4gIHByb3RvdHlwZS5icmlkaVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMuYnJpZGkpIHtcbiAgICAgIHJldHVybiBcIiBcIiArIHRoaXMuYnJpZGkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuICByZXR1cm4gR2VybmE7XG59KEJsaXR0ZXIpKTtcbmZ1bmN0aW9uIGV4dGVuZCQoc3ViLCBzdXApe1xuICBmdW5jdGlvbiBmdW4oKXt9IGZ1bi5wcm90b3R5cGUgPSAoc3ViLnN1cGVyY2xhc3MgPSBzdXApLnByb3RvdHlwZTtcbiAgKHN1Yi5wcm90b3R5cGUgPSBuZXcgZnVuKS5jb25zdHJ1Y3RvciA9IHN1YjtcbiAgaWYgKHR5cGVvZiBzdXAuZXh0ZW5kZWQgPT0gJ2Z1bmN0aW9uJykgc3VwLmV4dGVuZGVkKHN1Yik7XG4gIHJldHVybiBzdWI7XG59XG5mdW5jdGlvbiBpbXBvcnQkKG9iaiwgc3JjKXtcbiAgdmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBpZiAob3duLmNhbGwoc3JjLCBrZXkpKSBvYmpba2V5XSA9IHNyY1trZXldO1xuICByZXR1cm4gb2JqO1xufSIsInZhciBpZCwgbG9nLCBtaW4sIG1heCwgZmxvb3IsIHJvdW5kLCBzaW4sIGNvcywgdGF1LCBmbGlwLCBkZWxheSwgZXZlcnksIGRpdiwgcmFuZG9tLCByYW5kb21Gcm9tLCByZXZlcnNlLCBrZXlzLCB2YWx1ZXMsIHVudGFncywgbWFwLCBzdW0sIGZvbGQsIGdyb3VwQnksIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5vdXQkLmlkID0gaWQgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdDtcbn07XG5vdXQkLmxvZyA9IGxvZyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBhcmd1bWVudHNbMF07XG59O1xub3V0JC5taW4gPSBtaW4gPSBNYXRoLm1pbjtcbm91dCQubWF4ID0gbWF4ID0gTWF0aC5tYXg7XG5vdXQkLmZsb29yID0gZmxvb3IgPSBNYXRoLmZsb29yO1xub3V0JC5yb3VuZCA9IHJvdW5kID0gTWF0aC5yb3VuZDtcbm91dCQuc2luID0gc2luID0gTWF0aC5zaW47XG5vdXQkLmNvcyA9IGNvcyA9IE1hdGguY29zO1xub3V0JC50YXUgPSB0YXUgPSBNYXRoLlBJICogMjtcbm91dCQuZmxpcCA9IGZsaXAgPSBmdW5jdGlvbijOuyl7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICByZXR1cm4gzrsoYiwgYSk7XG4gIH07XG59O1xub3V0JC5kZWxheSA9IGRlbGF5ID0gZmxpcChzZXRUaW1lb3V0KTtcbm91dCQuZXZlcnkgPSBldmVyeSA9IGZsaXAoc2V0SW50ZXJ2YWwpO1xub3V0JC5kaXYgPSBkaXYgPSBjdXJyeSQoZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBmbG9vcihhIC8gYik7XG59KTtcbm91dCQucmFuZG9tID0gcmFuZG9tID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIGl0O1xufTtcbm91dCQucmFuZG9tRnJvbSA9IHJhbmRvbUZyb20gPSBmdW5jdGlvbihsaXN0KXtcbiAgcmV0dXJuIGxpc3RbZmxvb3IocmFuZG9tKGxpc3QubGVuZ3RoIC0gMSkpXTtcbn07XG5vdXQkLnJldmVyc2UgPSByZXZlcnNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQucmV2ZXJzZSgpO1xufTtcbm91dCQua2V5cyA9IGtleXMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrLCB2LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGsgaW4gaXQpIHtcbiAgICB2ID0gaXRba107XG4gICAgcmVzdWx0cyQucHVzaChrKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xub3V0JC52YWx1ZXMgPSB2YWx1ZXMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrLCB2LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGsgaW4gaXQpIHtcbiAgICB2ID0gaXRba107XG4gICAgcmVzdWx0cyQucHVzaCh2KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xub3V0JC51bnRhZ3MgPSB1bnRhZ3MgPSBmdW5jdGlvbihpdGVtcyl7XG4gIHJldHVybiBpdGVtcy5qb2luKFwiIFwiKTtcbn07XG5vdXQkLm1hcCA9IG1hcCA9IGZ1bmN0aW9uKM67LCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgcmVzdWx0cyQucHVzaCjOuyh4KSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufTtcbm91dCQuc3VtID0gc3VtID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4gZm9sZChjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgICByZXR1cm4geCQgKyB5JDtcbiAgfSksIDAsIHhzKTtcbn07XG5vdXQkLmZvbGQgPSBmb2xkID0gY3VycnkkKGZ1bmN0aW9uKM67LCBpLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaSA9IM67KGksIHgpO1xuICB9XG4gIHJldHVybiBpO1xufSk7XG5vdXQkLmdyb3VwQnkgPSBncm91cEJ5ID0gZnVuY3Rpb24ozrssIGxpc3Qpe1xuICB2YXIgbywgaSQsIGxlbiQsIHgsIGtleSQ7XG4gIG8gPSB7fTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSBsaXN0Lmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IGxpc3RbaSRdO1xuICAgIChvW2tleSQgPSDOuyh4KV0gfHwgKG9ba2V5JF0gPSBbXSkpLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59Il19
