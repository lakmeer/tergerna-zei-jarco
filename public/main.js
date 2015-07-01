(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ref$, id, log, Blitter, Gerna, Bridi, output, balnema, example, b;
ref$ = require('std'), id = ref$.id, log = ref$.log;
Blitter = require('./blitter').Blitter;
Gerna = require('./gerna').Gerna;
Bridi = require('./bridi').Bridi;
output = new Blitter(700, 700);
ref$ = require('./data'), balnema = ref$.balnema, example = ref$.example;
b = new Bridi(example);
b.drawFreeform();
},{"./blitter":2,"./bridi":3,"./data":6,"./gerna":8,"std":10}],2:[function(require,module,exports){
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
},{"./canvas":4}],3:[function(require,module,exports){
var Gerna, Selbri, Bridi, out$ = typeof exports != 'undefined' && exports || this;
Gerna = require('./gerna').Gerna;
Selbri = require('./selbri').Selbri;
out$.Bridi = Bridi = (function(superclass){
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
},{"./gerna":8,"./selbri":9}],4:[function(require,module,exports){
var Canvas, out$ = typeof exports != 'undefined' && exports || this;
out$.Canvas = Canvas = (function(){
  Canvas.displayName = 'Canvas';
  var prototype = Canvas.prototype, constructor = Canvas;
  function Canvas(w, h){
    this.canvas = document.createElement('canvas');
    this.setSize(w, h);
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
},{}],5:[function(require,module,exports){
var size, gutter, lineSpacing, out$ = typeof exports != 'undefined' && exports || this;
out$.size = size = 20;
out$.gutter = gutter = 10;
out$.lineSpacing = lineSpacing = 50;
},{}],6:[function(require,module,exports){
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
        explicit: true,
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
},{}],7:[function(require,module,exports){
var ref$, id, log, px, tau, size, gutter, Gerna, Sumti, FaTag, out$ = typeof exports != 'undefined' && exports || this;
ref$ = require('std'), id = ref$.id, log = ref$.log, px = ref$.px, tau = ref$.tau;
ref$ = require('config'), size = ref$.size, gutter = ref$.gutter;
Gerna = require('./gerna').Gerna;
Sumti = require('./sumti').Sumti;
out$.FaTag = FaTag = (function(superclass){
  var prototype = extend$((import$(FaTag, superclass).displayName = 'FaTag', FaTag), superclass).prototype, constructor = FaTag;
  function FaTag(text, arg$){
    var sumti;
    this.text = text;
    sumti = arg$.sumti;
    FaTag.superclass.apply(this, arguments);
    this.sumti = new Sumti(sumti);
    this.dom.classList.add('fa-tag');
  }
  prototype.toString = function(){
    return "[" + this.text + ": " + this.sumti.toString() + "]";
  };
  prototype.drawFreeform = function(){
    var height, tagWidth, sumtiCanvas, sumtiWidth, text;
    height = size + gutter * 2;
    tagWidth = 2 * gutter + size * 0.6 * this.text.length;
    sumtiCanvas = this.sumti.drawFreeform();
    sumtiWidth = sumtiCanvas.width;
    this.setSize(tagWidth + gutter + sumtiWidth, height);
    this.dom.innerText = text = this.text;
    document.body.appendChild(this.dom);
    return this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.drawImage(sumtiCanvas, tagWidth + gutter, 0);
      this.ellipse(tagWidth / 2, height / 2, tagWidth / 2 - 2, height / 2, 0, 0, tau);
      this.fillText(text, gutter, gutter);
      this.setLineDash([2, 7]);
      return this.stroke();
    });
  };
  return FaTag;
}(Gerna));
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
},{"./gerna":8,"./sumti":11,"config":5,"std":10}],8:[function(require,module,exports){
var Blitter, Gerna, out$ = typeof exports != 'undefined' && exports || this;
Blitter = require('./blitter').Blitter;
out$.Gerna = Gerna = (function(superclass){
  var prototype = extend$((import$(Gerna, superclass).displayName = 'Gerna', Gerna), superclass).prototype, constructor = Gerna;
  function Gerna(arg$){
    this.pre = arg$.pre, this.post = arg$.post;
    Gerna.superclass.apply(this, arguments);
    this.ctx.font = "20px monospace";
    this.ctx.lineWidth = 10;
    this.dom = document.createElement('div');
    this.dom.className = 'node';
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
},{"./blitter":2}],9:[function(require,module,exports){
var ref$, id, log, sum, px, size, gutter, lineSpacing, Gerna, FaTag, Selbri, out$ = typeof exports != 'undefined' && exports || this;
ref$ = require('std'), id = ref$.id, log = ref$.log, sum = ref$.sum, px = ref$.px;
ref$ = require('config'), size = ref$.size, gutter = ref$.gutter, lineSpacing = ref$.lineSpacing;
Gerna = require('./gerna').Gerna;
FaTag = require('./fa-tag').FaTag;
out$.Selbri = Selbri = (function(superclass){
  var prototype = extend$((import$(Selbri, superclass).displayName = 'Selbri', Selbri), superclass).prototype, constructor = Selbri;
  function Selbri(arg$){
    var args, res$, tag, arg;
    this.text = arg$.text, args = arg$.args;
    Selbri.superclass.apply(this, arguments);
    res$ = {};
    for (tag in args) {
      arg = args[tag];
      res$[tag] = new FaTag(tag, arg);
    }
    this.tags = res$;
    this.dom.classList.add('selbri');
    this.dom.innerText = this.text;
    document.body.appendChild(this.dom);
  }
  prototype.toString = function(){
    return this.text + " " + this.tags.map(function(it){
      return it.toString();
    });
  };
  prototype.draw = function(){
    var text, canvases, res$, tag, ref$, sumti, sumtiWidth, selbriWidth, height, offset, i$, len$, i, c, results$ = [];
    text = this.text;
    res$ = [];
    for (tag in ref$ = this.tags) {
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
    var text, height, domPairs, res$, name, ref$, tag, canvases, sumtiWidth, sumtiHeight, selbriWidth, i$, len$, i, x, y, cp, cpy, zz, c, results$ = [];
    text = this.text;
    height = size + gutter * 3;
    res$ = [];
    for (name in ref$ = this.tags) {
      tag = ref$[name];
      res$.push([name, tag]);
    }
    domPairs = res$;
    res$ = [];
    for (name in ref$ = this.tags) {
      tag = ref$[name];
      res$.push(tag.drawFreeform());
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
    import$(this.dom.style, {
      top: px(sumtiHeight / 2 - height / 2 + gutter / 2),
      left: px(0)
    });
    this['do'](function(){
      this.lineWidth = 2;
      return;
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.fillText(text, gutter, sumtiHeight / 2 - height / 2 + gutter * 1.5);
      return this.strokeRect(0.5, 0.5 + sumtiHeight / 2 - height / 2 + gutter / 2, selbriWidth, size + 2 * gutter);
    });
    for (i$ = 0, len$ = domPairs.length; i$ < len$; ++i$) {
      i = i$;
      ref$ = domPairs[i$], name = ref$[0], tag = ref$[1];
      x = selbriWidth + lineSpacing + gutter;
      y = i * height + gutter / 2;
      cp = gutter * 5;
      cpy = sumtiHeight / 2;
      zz = y + height / 2 - gutter / 2;
      import$(tag.dom.style, {
        top: px(y),
        left: px(x)
      });
      import$(tag.sumti.dom.style, {
        top: px(y),
        left: px(x + gutter + tag.dom.offsetWidth)
      });
    }
    for (i$ = 0, len$ = canvases.length; i$ < len$; ++i$) {
      i = i$;
      c = canvases[i$];
      x = selbriWidth + lineSpacing + gutter;
      y = i * height + gutter / 2;
      cp = gutter * 5;
      cpy = sumtiHeight / 2;
      zz = y + height / 2 - gutter / 2;
      this.ctx.moveTo(selbriWidth, cpy);
      this.ctx.bezierCurveTo(selbriWidth + cp, cpy, x - cp, zz, x, zz);
      results$.push(this.ctx.stroke());
    }
    return results$;
  };
  return Selbri;
}(Gerna));
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
},{"./fa-tag":7,"./gerna":8,"config":5,"std":10}],10:[function(require,module,exports){
var id, log, min, max, floor, round, sin, cos, tau, flip, delay, every, div, random, randomFrom, reverse, keys, values, untags, map, sum, px, fold, groupBy, out$ = typeof exports != 'undefined' && exports || this;
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
out$.px = px = (function(it){
  return it + 'px';
});
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
},{}],11:[function(require,module,exports){
var Gerna, ref$, size, gutter, Sumti, out$ = typeof exports != 'undefined' && exports || this;
Gerna = require('./gerna').Gerna;
ref$ = require('config'), size = ref$.size, gutter = ref$.gutter;
out$.Sumti = Sumti = (function(superclass){
  var prototype = extend$((import$(Sumti, superclass).displayName = 'Sumti', Sumti), superclass).prototype, constructor = Sumti;
  function Sumti(arg$){
    var ref$, bridi, that;
    this.text = arg$.text, this.pre = (ref$ = arg$.pre) != null ? ref$ : "", this.post = (ref$ = arg$.post) != null ? ref$ : "", bridi = arg$.bridi;
    Sumti.superclass.apply(this, arguments);
    if ((that = bridi) != null) {
      this.bridi = new Bridi(that);
    }
    this.dom.classList.add('sumti');
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
  prototype.drawFreeform = function(){
    var text, height, width;
    text = this.text;
    height = 2 * gutter + size;
    width = 2 * gutter + size * 0.6 * this.text.length;
    this.setSize(width, height);
    this.dom.innerText = this.text;
    document.body.appendChild(this.dom);
    return this['do'](function(){
      this.font = "20px monospace";
      this.textBaseline = 'top';
      this.lineWidth = 2;
      this.strokeRect(0, height - 1, width - gutter * 2, 0);
      return this.fillText(text, 0, gutter);
    });
  };
  return Sumti;
}(Gerna));
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
},{"./gerna":8,"config":5}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL3NyYy9pbmRleC5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9ibGl0dGVyLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2JyaWRpLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL2NhbnZhcy5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9jb25maWcubHMiLCIvVXNlcnMvbGFrbWVlci9Qcm9qZWN0cy9sb2piby1mYW52YS1qYXJjby9zcmMvZGF0YS5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9mYS10YWcubHMiLCIvVXNlcnMvbGFrbWVlci9Qcm9qZWN0cy9sb2piby1mYW52YS1qYXJjby9zcmMvZ2VybmEubHMiLCIvVXNlcnMvbGFrbWVlci9Qcm9qZWN0cy9sb2piby1mYW52YS1qYXJjby9zcmMvc2VsYnJpLmxzIiwiL1VzZXJzL2xha21lZXIvUHJvamVjdHMvbG9qYm8tZmFudmEtamFyY28vc3JjL3N0ZC9pbmRleC5scyIsIi9Vc2Vycy9sYWttZWVyL1Byb2plY3RzL2xvamJvLWZhbnZhLWphcmNvL3NyYy9zdW10aS5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHJlZiQsIGlkLCBsb2csIEJsaXR0ZXIsIEdlcm5hLCBCcmlkaSwgb3V0cHV0LCBiYWxuZW1hLCBleGFtcGxlLCBiO1xucmVmJCA9IHJlcXVpcmUoJ3N0ZCcpLCBpZCA9IHJlZiQuaWQsIGxvZyA9IHJlZiQubG9nO1xuQmxpdHRlciA9IHJlcXVpcmUoJy4vYmxpdHRlcicpLkJsaXR0ZXI7XG5HZXJuYSA9IHJlcXVpcmUoJy4vZ2VybmEnKS5HZXJuYTtcbkJyaWRpID0gcmVxdWlyZSgnLi9icmlkaScpLkJyaWRpO1xub3V0cHV0ID0gbmV3IEJsaXR0ZXIoNzAwLCA3MDApO1xucmVmJCA9IHJlcXVpcmUoJy4vZGF0YScpLCBiYWxuZW1hID0gcmVmJC5iYWxuZW1hLCBleGFtcGxlID0gcmVmJC5leGFtcGxlO1xuYiA9IG5ldyBCcmlkaShleGFtcGxlKTtcbmIuZHJhd0ZyZWVmb3JtKCk7IiwidmFyIENhbnZhcywgQmxpdHRlciwgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbkNhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJykuQ2FudmFzO1xub3V0JC5CbGl0dGVyID0gQmxpdHRlciA9IChmdW5jdGlvbihzdXBlcmNsYXNzKXtcbiAgdmFyIHByb3RvdHlwZSA9IGV4dGVuZCQoKGltcG9ydCQoQmxpdHRlciwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnQmxpdHRlcicsIEJsaXR0ZXIpLCBzdXBlcmNsYXNzKS5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gQmxpdHRlcjtcbiAgZnVuY3Rpb24gQmxpdHRlcih3LCBoKXtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG4gICAgQmxpdHRlci5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcHJvdG90eXBlLmJsaXRUbyA9IGZ1bmN0aW9uKGJsaXR0ZXIsIHgsIHkpe1xuICAgIHggPT0gbnVsbCAmJiAoeCA9IDApO1xuICAgIHkgPT0gbnVsbCAmJiAoeSA9IDApO1xuICAgIHJldHVybiBibGl0dGVyLmN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIHgsIHkpO1xuICB9O1xuICByZXR1cm4gQmxpdHRlcjtcbn0oQ2FudmFzKSk7XG5mdW5jdGlvbiBleHRlbmQkKHN1Yiwgc3VwKXtcbiAgZnVuY3Rpb24gZnVuKCl7fSBmdW4ucHJvdG90eXBlID0gKHN1Yi5zdXBlcmNsYXNzID0gc3VwKS5wcm90b3R5cGU7XG4gIChzdWIucHJvdG90eXBlID0gbmV3IGZ1bikuY29uc3RydWN0b3IgPSBzdWI7XG4gIGlmICh0eXBlb2Ygc3VwLmV4dGVuZGVkID09ICdmdW5jdGlvbicpIHN1cC5leHRlbmRlZChzdWIpO1xuICByZXR1cm4gc3ViO1xufVxuZnVuY3Rpb24gaW1wb3J0JChvYmosIHNyYyl7XG4gIHZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgaWYgKG93bi5jYWxsKHNyYywga2V5KSkgb2JqW2tleV0gPSBzcmNba2V5XTtcbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgR2VybmEsIFNlbGJyaSwgQnJpZGksIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5HZXJuYSA9IHJlcXVpcmUoJy4vZ2VybmEnKS5HZXJuYTtcblNlbGJyaSA9IHJlcXVpcmUoJy4vc2VsYnJpJykuU2VsYnJpO1xub3V0JC5CcmlkaSA9IEJyaWRpID0gKGZ1bmN0aW9uKHN1cGVyY2xhc3Mpe1xuICB2YXIgcHJvdG90eXBlID0gZXh0ZW5kJCgoaW1wb3J0JChCcmlkaSwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnQnJpZGknLCBCcmlkaSksIHN1cGVyY2xhc3MpLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBCcmlkaTtcbiAgZnVuY3Rpb24gQnJpZGkoYXJnJCl7XG4gICAgdmFyIHNlbGJyaTtcbiAgICBzZWxicmkgPSBhcmckLnNlbGJyaTtcbiAgICBCcmlkaS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZWxicmkgPSBuZXcgU2VsYnJpKHNlbGJyaSk7XG4gIH1cbiAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnNlbGJyaS50b1N0cmluZygpICsgXCIpXCI7XG4gIH07XG4gIHByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5zZWxicmkuZHJhdygpO1xuICB9O1xuICBwcm90b3R5cGUuZHJhd0ZyZWVmb3JtID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5zZWxicmkuZHJhd0ZyZWVmb3JtKCk7XG4gIH07XG4gIHJldHVybiBCcmlkaTtcbn0oR2VybmEpKTtcbmZ1bmN0aW9uIGV4dGVuZCQoc3ViLCBzdXApe1xuICBmdW5jdGlvbiBmdW4oKXt9IGZ1bi5wcm90b3R5cGUgPSAoc3ViLnN1cGVyY2xhc3MgPSBzdXApLnByb3RvdHlwZTtcbiAgKHN1Yi5wcm90b3R5cGUgPSBuZXcgZnVuKS5jb25zdHJ1Y3RvciA9IHN1YjtcbiAgaWYgKHR5cGVvZiBzdXAuZXh0ZW5kZWQgPT0gJ2Z1bmN0aW9uJykgc3VwLmV4dGVuZGVkKHN1Yik7XG4gIHJldHVybiBzdWI7XG59XG5mdW5jdGlvbiBpbXBvcnQkKG9iaiwgc3JjKXtcbiAgdmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBpZiAob3duLmNhbGwoc3JjLCBrZXkpKSBvYmpba2V5XSA9IHNyY1trZXldO1xuICByZXR1cm4gb2JqO1xufSIsInZhciBDYW52YXMsIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5vdXQkLkNhbnZhcyA9IENhbnZhcyA9IChmdW5jdGlvbigpe1xuICBDYW52YXMuZGlzcGxheU5hbWUgPSAnQ2FudmFzJztcbiAgdmFyIHByb3RvdHlwZSA9IENhbnZhcy5wcm90b3R5cGUsIGNvbnN0cnVjdG9yID0gQ2FudmFzO1xuICBmdW5jdGlvbiBDYW52YXModywgaCl7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLnNldFNpemUodywgaCk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG4gIHByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24odywgaCl7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3O1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoO1xuICB9O1xuICBwcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uKGhvc3Qpe1xuICAgIHJldHVybiBob3N0LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgfTtcbiAgcHJvdG90eXBlWydkbyddID0gZnVuY3Rpb24ozrspe1xuICAgIM67LmFwcGx5KHRoaXMuY3R4KTtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH07XG4gIHJldHVybiBDYW52YXM7XG59KCkpOyIsInZhciBzaXplLCBndXR0ZXIsIGxpbmVTcGFjaW5nLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xub3V0JC5zaXplID0gc2l6ZSA9IDIwO1xub3V0JC5ndXR0ZXIgPSBndXR0ZXIgPSAxMDtcbm91dCQubGluZVNwYWNpbmcgPSBsaW5lU3BhY2luZyA9IDUwOyIsInZhciBleGFtcGxlLCBiYWxuZW1hLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xub3V0JC5leGFtcGxlID0gZXhhbXBsZSA9IHtcbiAgc2VsYnJpOiB7XG4gICAgdGV4dDogXCJkdW5kYVwiLFxuICAgIHByZTogXCJjbydhXCIsXG4gICAgYXJnczoge1xuICAgICAgZmE6IHtcbiAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICB0ZXh0OiBcIm1pXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZlOiB7XG4gICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgdGV4dDogXCJsbyBzZSBkdW5kYVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmaToge1xuICAgICAgICBleHBsaWNpdDogdHJ1ZSxcbiAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICB0ZXh0OiBcImRvXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbm91dCQuYmFsbmVtYSA9IGJhbG5lbWEgPSBbXG4gIHtcbiAgICBzZWxicmk6IHtcbiAgICAgIHRleHQ6ICdzZW52YScsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGZhOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgdGV4dDogJ21pJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmU6IHtcbiAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICAgIHRleHQ6ICdsbyBudScsXG4gICAgICAgICAgICBicmlkaToge1xuICAgICAgICAgICAgICBzZWxicmk6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnYmFsbmVtYScsXG4gICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgZmE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbG8gZGplZGknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBzZWxicmk6IHtcbiAgICAgIHRleHQ6ICdrYW5zYScsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGZlOiB7XG4gICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgdGV4dDogJ2xvJyxcbiAgICAgICAgICAgIGJyaWRpOiB7XG4gICAgICAgICAgICAgIHNlbGJyaToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdkcmF0YSB4YWJqdScsXG4gICAgICAgICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgICAgICAgJ2JlIGZlJzoge1xuICAgICAgICAgICAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdsbyB4YW1zaSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHNlbGJyaToge1xuICAgICAgdGV4dDogJ2xpZnJpJyxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgZmE6IHtcbiAgICAgICAgICBzdW10aToge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB0ZXh0OiAnbWknXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmZToge1xuICAgICAgICAgIHN1bXRpOiB7XG4gICAgICAgICAgICB0eXBlOiAnZXZlbnQnLFxuICAgICAgICAgICAgdGV4dDogJ2xvIG51JyxcbiAgICAgICAgICAgIGJyaWRpOiB7XG4gICAgICAgICAgICAgIHNlbGJyaToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdiYWxuZW1hJyxcbiAgICAgICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgICAgICBmYToge1xuICAgICAgICAgICAgICAgICAgICB1aTogJ3VpJyxcbiAgICAgICAgICAgICAgICAgICAgc3VtdGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbG8gZGplZGknLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbl07XG4vKlxuLmkgcm8geGFtc2kgY3Ugdm9pIHN1IGJveG5hIGtpIHBhZ2J1XG4uaSBqZSBybyByaWN0dSdhIGN1IHZvaSBzdSB0cmljdSBraSB4YWJqdVxuLmkgcm8gcmlyeGUgY3Ugdm9pIGtpIHN1IGtyYXNpIGN1IGNsaXZhXG4uaSBqZSBtaSB2b2kga2kgc2VudmEgbG8gc2UgZGppY2FcblxuLmkgbG8geGFtc2kgY3UgbWFua3UgamUgY3Ugc2ltbHUgbG8ga2EgY2ltbmkgcm8gY2ltZGVcbi5pIHNpbWx1IGxvIGthIG5vIGRhIGNlIGppbXRlXG4uaSBsbyB4YW1zaSBjdSBsZW5rdSBqZSBjdSB6ZGFuaSBsbyB6YW52cmljaVxubm9pIGtpIGxvIGthIHByYW5lIHppZnJlIGJ1J3Uga2EnZSBsaWZyaVxuKi8iLCJ2YXIgcmVmJCwgaWQsIGxvZywgcHgsIHRhdSwgc2l6ZSwgZ3V0dGVyLCBHZXJuYSwgU3VtdGksIEZhVGFnLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xucmVmJCA9IHJlcXVpcmUoJ3N0ZCcpLCBpZCA9IHJlZiQuaWQsIGxvZyA9IHJlZiQubG9nLCBweCA9IHJlZiQucHgsIHRhdSA9IHJlZiQudGF1O1xucmVmJCA9IHJlcXVpcmUoJ2NvbmZpZycpLCBzaXplID0gcmVmJC5zaXplLCBndXR0ZXIgPSByZWYkLmd1dHRlcjtcbkdlcm5hID0gcmVxdWlyZSgnLi9nZXJuYScpLkdlcm5hO1xuU3VtdGkgPSByZXF1aXJlKCcuL3N1bXRpJykuU3VtdGk7XG5vdXQkLkZhVGFnID0gRmFUYWcgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKEZhVGFnLCBzdXBlcmNsYXNzKS5kaXNwbGF5TmFtZSA9ICdGYVRhZycsIEZhVGFnKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IEZhVGFnO1xuICBmdW5jdGlvbiBGYVRhZyh0ZXh0LCBhcmckKXtcbiAgICB2YXIgc3VtdGk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICBzdW10aSA9IGFyZyQuc3VtdGk7XG4gICAgRmFUYWcuc3VwZXJjbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc3VtdGkgPSBuZXcgU3VtdGkoc3VtdGkpO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ2ZhLXRhZycpO1xuICB9XG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIFwiW1wiICsgdGhpcy50ZXh0ICsgXCI6IFwiICsgdGhpcy5zdW10aS50b1N0cmluZygpICsgXCJdXCI7XG4gIH07XG4gIHByb3RvdHlwZS5kcmF3RnJlZWZvcm0gPSBmdW5jdGlvbigpe1xuICAgIHZhciBoZWlnaHQsIHRhZ1dpZHRoLCBzdW10aUNhbnZhcywgc3VtdGlXaWR0aCwgdGV4dDtcbiAgICBoZWlnaHQgPSBzaXplICsgZ3V0dGVyICogMjtcbiAgICB0YWdXaWR0aCA9IDIgKiBndXR0ZXIgKyBzaXplICogMC42ICogdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICBzdW10aUNhbnZhcyA9IHRoaXMuc3VtdGkuZHJhd0ZyZWVmb3JtKCk7XG4gICAgc3VtdGlXaWR0aCA9IHN1bXRpQ2FudmFzLndpZHRoO1xuICAgIHRoaXMuc2V0U2l6ZSh0YWdXaWR0aCArIGd1dHRlciArIHN1bXRpV2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5kb20uaW5uZXJUZXh0ID0gdGV4dCA9IHRoaXMudGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcbiAgICByZXR1cm4gdGhpc1snZG8nXShmdW5jdGlvbigpe1xuICAgICAgdGhpcy5mb250ID0gXCIyMHB4IG1vbm9zcGFjZVwiO1xuICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgIHRoaXMubGluZVdpZHRoID0gMjtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKHN1bXRpQ2FudmFzLCB0YWdXaWR0aCArIGd1dHRlciwgMCk7XG4gICAgICB0aGlzLmVsbGlwc2UodGFnV2lkdGggLyAyLCBoZWlnaHQgLyAyLCB0YWdXaWR0aCAvIDIgLSAyLCBoZWlnaHQgLyAyLCAwLCAwLCB0YXUpO1xuICAgICAgdGhpcy5maWxsVGV4dCh0ZXh0LCBndXR0ZXIsIGd1dHRlcik7XG4gICAgICB0aGlzLnNldExpbmVEYXNoKFsyLCA3XSk7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2UoKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIEZhVGFnO1xufShHZXJuYSkpO1xuZnVuY3Rpb24gZXh0ZW5kJChzdWIsIHN1cCl7XG4gIGZ1bmN0aW9uIGZ1bigpe30gZnVuLnByb3RvdHlwZSA9IChzdWIuc3VwZXJjbGFzcyA9IHN1cCkucHJvdG90eXBlO1xuICAoc3ViLnByb3RvdHlwZSA9IG5ldyBmdW4pLmNvbnN0cnVjdG9yID0gc3ViO1xuICBpZiAodHlwZW9mIHN1cC5leHRlbmRlZCA9PSAnZnVuY3Rpb24nKSBzdXAuZXh0ZW5kZWQoc3ViKTtcbiAgcmV0dXJuIHN1Yjtcbn1cbmZ1bmN0aW9uIGltcG9ydCQob2JqLCBzcmMpe1xuICB2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGlmIChvd24uY2FsbChzcmMsIGtleSkpIG9ialtrZXldID0gc3JjW2tleV07XG4gIHJldHVybiBvYmo7XG59IiwidmFyIEJsaXR0ZXIsIEdlcm5hLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xuQmxpdHRlciA9IHJlcXVpcmUoJy4vYmxpdHRlcicpLkJsaXR0ZXI7XG5vdXQkLkdlcm5hID0gR2VybmEgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKEdlcm5hLCBzdXBlcmNsYXNzKS5kaXNwbGF5TmFtZSA9ICdHZXJuYScsIEdlcm5hKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IEdlcm5hO1xuICBmdW5jdGlvbiBHZXJuYShhcmckKXtcbiAgICB0aGlzLnByZSA9IGFyZyQucHJlLCB0aGlzLnBvc3QgPSBhcmckLnBvc3Q7XG4gICAgR2VybmEuc3VwZXJjbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggbW9ub3NwYWNlXCI7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTA7XG4gICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbS5jbGFzc05hbWUgPSAnbm9kZSc7XG4gIH1cbiAgcHJvdG90eXBlLnByZVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMucHJlKSB7XG4gICAgICByZXR1cm4gXCJ7XCIgKyB0aGlzLnByZSArIFwifSBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuICBwcm90b3R5cGUucG9zdFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMucG9zdCkge1xuICAgICAgcmV0dXJuIFwiIHtcIiArIHRoaXMucG9zdCArIFwifVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG4gIHByb3RvdHlwZS5icmlkaVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHRoaXMuYnJpZGkpIHtcbiAgICAgIHJldHVybiBcIiBcIiArIHRoaXMuYnJpZGkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuICByZXR1cm4gR2VybmE7XG59KEJsaXR0ZXIpKTtcbmZ1bmN0aW9uIGV4dGVuZCQoc3ViLCBzdXApe1xuICBmdW5jdGlvbiBmdW4oKXt9IGZ1bi5wcm90b3R5cGUgPSAoc3ViLnN1cGVyY2xhc3MgPSBzdXApLnByb3RvdHlwZTtcbiAgKHN1Yi5wcm90b3R5cGUgPSBuZXcgZnVuKS5jb25zdHJ1Y3RvciA9IHN1YjtcbiAgaWYgKHR5cGVvZiBzdXAuZXh0ZW5kZWQgPT0gJ2Z1bmN0aW9uJykgc3VwLmV4dGVuZGVkKHN1Yik7XG4gIHJldHVybiBzdWI7XG59XG5mdW5jdGlvbiBpbXBvcnQkKG9iaiwgc3JjKXtcbiAgdmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBpZiAob3duLmNhbGwoc3JjLCBrZXkpKSBvYmpba2V5XSA9IHNyY1trZXldO1xuICByZXR1cm4gb2JqO1xufSIsInZhciByZWYkLCBpZCwgbG9nLCBzdW0sIHB4LCBzaXplLCBndXR0ZXIsIGxpbmVTcGFjaW5nLCBHZXJuYSwgRmFUYWcsIFNlbGJyaSwgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdGhpcztcbnJlZiQgPSByZXF1aXJlKCdzdGQnKSwgaWQgPSByZWYkLmlkLCBsb2cgPSByZWYkLmxvZywgc3VtID0gcmVmJC5zdW0sIHB4ID0gcmVmJC5weDtcbnJlZiQgPSByZXF1aXJlKCdjb25maWcnKSwgc2l6ZSA9IHJlZiQuc2l6ZSwgZ3V0dGVyID0gcmVmJC5ndXR0ZXIsIGxpbmVTcGFjaW5nID0gcmVmJC5saW5lU3BhY2luZztcbkdlcm5hID0gcmVxdWlyZSgnLi9nZXJuYScpLkdlcm5hO1xuRmFUYWcgPSByZXF1aXJlKCcuL2ZhLXRhZycpLkZhVGFnO1xub3V0JC5TZWxicmkgPSBTZWxicmkgPSAoZnVuY3Rpb24oc3VwZXJjbGFzcyl7XG4gIHZhciBwcm90b3R5cGUgPSBleHRlbmQkKChpbXBvcnQkKFNlbGJyaSwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnU2VsYnJpJywgU2VsYnJpKSwgc3VwZXJjbGFzcykucHJvdG90eXBlLCBjb25zdHJ1Y3RvciA9IFNlbGJyaTtcbiAgZnVuY3Rpb24gU2VsYnJpKGFyZyQpe1xuICAgIHZhciBhcmdzLCByZXMkLCB0YWcsIGFyZztcbiAgICB0aGlzLnRleHQgPSBhcmckLnRleHQsIGFyZ3MgPSBhcmckLmFyZ3M7XG4gICAgU2VsYnJpLnN1cGVyY2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXMkID0ge307XG4gICAgZm9yICh0YWcgaW4gYXJncykge1xuICAgICAgYXJnID0gYXJnc1t0YWddO1xuICAgICAgcmVzJFt0YWddID0gbmV3IEZhVGFnKHRhZywgYXJnKTtcbiAgICB9XG4gICAgdGhpcy50YWdzID0gcmVzJDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKCdzZWxicmknKTtcbiAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XG4gIH1cbiAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy50ZXh0ICsgXCIgXCIgKyB0aGlzLnRhZ3MubWFwKGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdC50b1N0cmluZygpO1xuICAgIH0pO1xuICB9O1xuICBwcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRleHQsIGNhbnZhc2VzLCByZXMkLCB0YWcsIHJlZiQsIHN1bXRpLCBzdW10aVdpZHRoLCBzZWxicmlXaWR0aCwgaGVpZ2h0LCBvZmZzZXQsIGkkLCBsZW4kLCBpLCBjLCByZXN1bHRzJCA9IFtdO1xuICAgIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgcmVzJCA9IFtdO1xuICAgIGZvciAodGFnIGluIHJlZiQgPSB0aGlzLnRhZ3MpIHtcbiAgICAgIHN1bXRpID0gcmVmJFt0YWddO1xuICAgICAgcmVzJC5wdXNoKHN1bXRpLmRyYXcodGFnKSk7XG4gICAgfVxuICAgIGNhbnZhc2VzID0gcmVzJDtcbiAgICBzdW10aVdpZHRoID0gc3VtKGNhbnZhc2VzLm1hcChmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXQud2lkdGg7XG4gICAgfSkpO1xuICAgIHNlbGJyaVdpZHRoID0gc2l6ZSAqIDAuNiAqIHRoaXMudGV4dC5sZW5ndGggKyAyICogZ3V0dGVyO1xuICAgIGhlaWdodCA9IGNhbnZhc2VzWzBdLmhlaWdodCArIHNpemU7XG4gICAgdGhpcy5zZXRTaXplKHNlbGJyaVdpZHRoICsgc3VtdGlXaWR0aCArIGd1dHRlciAqIGNhbnZhc2VzLmxlbmd0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmluc3RhbGwoZG9jdW1lbnQuYm9keSk7XG4gICAgdGhpc1snZG8nXShmdW5jdGlvbigpe1xuICAgICAgdGhpcy5mb250ID0gXCIyMHB4IG1vbm9zcGFjZVwiO1xuICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgIHRoaXMubGluZVdpZHRoID0gMjtcbiAgICAgIHRoaXMuc3Ryb2tlUmVjdCgwLCAwLCBzZWxicmlXaWR0aCwgc2l6ZSArIDIgKiBndXR0ZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuZmlsbFRleHQodGV4dCwgZ3V0dGVyLCBndXR0ZXIpO1xuICAgIH0pO1xuICAgIG9mZnNldCA9IHNlbGJyaVdpZHRoICsgZ3V0dGVyO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gY2FudmFzZXMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIGkgPSBpJDtcbiAgICAgIGMgPSBjYW52YXNlc1tpJF07XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYywgb2Zmc2V0LCAwKTtcbiAgICAgIHJlc3VsdHMkLnB1c2gob2Zmc2V0ICs9IGMud2lkdGggKyBndXR0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH07XG4gIHByb3RvdHlwZS5kcmF3RnJlZWZvcm0gPSBmdW5jdGlvbigpe1xuICAgIHZhciB0ZXh0LCBoZWlnaHQsIGRvbVBhaXJzLCByZXMkLCBuYW1lLCByZWYkLCB0YWcsIGNhbnZhc2VzLCBzdW10aVdpZHRoLCBzdW10aUhlaWdodCwgc2VsYnJpV2lkdGgsIGkkLCBsZW4kLCBpLCB4LCB5LCBjcCwgY3B5LCB6eiwgYywgcmVzdWx0cyQgPSBbXTtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGhlaWdodCA9IHNpemUgKyBndXR0ZXIgKiAzO1xuICAgIHJlcyQgPSBbXTtcbiAgICBmb3IgKG5hbWUgaW4gcmVmJCA9IHRoaXMudGFncykge1xuICAgICAgdGFnID0gcmVmJFtuYW1lXTtcbiAgICAgIHJlcyQucHVzaChbbmFtZSwgdGFnXSk7XG4gICAgfVxuICAgIGRvbVBhaXJzID0gcmVzJDtcbiAgICByZXMkID0gW107XG4gICAgZm9yIChuYW1lIGluIHJlZiQgPSB0aGlzLnRhZ3MpIHtcbiAgICAgIHRhZyA9IHJlZiRbbmFtZV07XG4gICAgICByZXMkLnB1c2godGFnLmRyYXdGcmVlZm9ybSgpKTtcbiAgICB9XG4gICAgY2FudmFzZXMgPSByZXMkO1xuICAgIHN1bXRpV2lkdGggPSBzdW0oY2FudmFzZXMubWFwKGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdC53aWR0aDtcbiAgICB9KSk7XG4gICAgc3VtdGlIZWlnaHQgPSBzdW0oY2FudmFzZXMubWFwKGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdC5oZWlnaHQgKyBndXR0ZXI7XG4gICAgfSkpO1xuICAgIHNlbGJyaVdpZHRoID0gc2l6ZSAqIDAuNiAqIHRoaXMudGV4dC5sZW5ndGggKyAyICogZ3V0dGVyO1xuICAgIHRoaXMuc2V0U2l6ZShzZWxicmlXaWR0aCArIHN1bXRpV2lkdGggKyBndXR0ZXIgKiBjYW52YXNlcy5sZW5ndGgsIHN1bXRpSGVpZ2h0KTtcbiAgICB0aGlzLmluc3RhbGwoZG9jdW1lbnQuYm9keSk7XG4gICAgaW1wb3J0JCh0aGlzLmRvbS5zdHlsZSwge1xuICAgICAgdG9wOiBweChzdW10aUhlaWdodCAvIDIgLSBoZWlnaHQgLyAyICsgZ3V0dGVyIC8gMiksXG4gICAgICBsZWZ0OiBweCgwKVxuICAgIH0pO1xuICAgIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMubGluZVdpZHRoID0gMjtcbiAgICAgIHJldHVybjtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIGd1dHRlciwgc3VtdGlIZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMiArIGd1dHRlciAqIDEuNSk7XG4gICAgICByZXR1cm4gdGhpcy5zdHJva2VSZWN0KDAuNSwgMC41ICsgc3VtdGlIZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMiArIGd1dHRlciAvIDIsIHNlbGJyaVdpZHRoLCBzaXplICsgMiAqIGd1dHRlcik7XG4gICAgfSk7XG4gICAgZm9yIChpJCA9IDAsIGxlbiQgPSBkb21QYWlycy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgaSA9IGkkO1xuICAgICAgcmVmJCA9IGRvbVBhaXJzW2kkXSwgbmFtZSA9IHJlZiRbMF0sIHRhZyA9IHJlZiRbMV07XG4gICAgICB4ID0gc2VsYnJpV2lkdGggKyBsaW5lU3BhY2luZyArIGd1dHRlcjtcbiAgICAgIHkgPSBpICogaGVpZ2h0ICsgZ3V0dGVyIC8gMjtcbiAgICAgIGNwID0gZ3V0dGVyICogNTtcbiAgICAgIGNweSA9IHN1bXRpSGVpZ2h0IC8gMjtcbiAgICAgIHp6ID0geSArIGhlaWdodCAvIDIgLSBndXR0ZXIgLyAyO1xuICAgICAgaW1wb3J0JCh0YWcuZG9tLnN0eWxlLCB7XG4gICAgICAgIHRvcDogcHgoeSksXG4gICAgICAgIGxlZnQ6IHB4KHgpXG4gICAgICB9KTtcbiAgICAgIGltcG9ydCQodGFnLnN1bXRpLmRvbS5zdHlsZSwge1xuICAgICAgICB0b3A6IHB4KHkpLFxuICAgICAgICBsZWZ0OiBweCh4ICsgZ3V0dGVyICsgdGFnLmRvbS5vZmZzZXRXaWR0aClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IGNhbnZhc2VzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICBpID0gaSQ7XG4gICAgICBjID0gY2FudmFzZXNbaSRdO1xuICAgICAgeCA9IHNlbGJyaVdpZHRoICsgbGluZVNwYWNpbmcgKyBndXR0ZXI7XG4gICAgICB5ID0gaSAqIGhlaWdodCArIGd1dHRlciAvIDI7XG4gICAgICBjcCA9IGd1dHRlciAqIDU7XG4gICAgICBjcHkgPSBzdW10aUhlaWdodCAvIDI7XG4gICAgICB6eiA9IHkgKyBoZWlnaHQgLyAyIC0gZ3V0dGVyIC8gMjtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzZWxicmlXaWR0aCwgY3B5KTtcbiAgICAgIHRoaXMuY3R4LmJlemllckN1cnZlVG8oc2VsYnJpV2lkdGggKyBjcCwgY3B5LCB4IC0gY3AsIHp6LCB4LCB6eik7XG4gICAgICByZXN1bHRzJC5wdXNoKHRoaXMuY3R4LnN0cm9rZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9O1xuICByZXR1cm4gU2VsYnJpO1xufShHZXJuYSkpO1xuZnVuY3Rpb24gZXh0ZW5kJChzdWIsIHN1cCl7XG4gIGZ1bmN0aW9uIGZ1bigpe30gZnVuLnByb3RvdHlwZSA9IChzdWIuc3VwZXJjbGFzcyA9IHN1cCkucHJvdG90eXBlO1xuICAoc3ViLnByb3RvdHlwZSA9IG5ldyBmdW4pLmNvbnN0cnVjdG9yID0gc3ViO1xuICBpZiAodHlwZW9mIHN1cC5leHRlbmRlZCA9PSAnZnVuY3Rpb24nKSBzdXAuZXh0ZW5kZWQoc3ViKTtcbiAgcmV0dXJuIHN1Yjtcbn1cbmZ1bmN0aW9uIGltcG9ydCQob2JqLCBzcmMpe1xuICB2YXIgb3duID0ge30uaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGlmIChvd24uY2FsbChzcmMsIGtleSkpIG9ialtrZXldID0gc3JjW2tleV07XG4gIHJldHVybiBvYmo7XG59IiwidmFyIGlkLCBsb2csIG1pbiwgbWF4LCBmbG9vciwgcm91bmQsIHNpbiwgY29zLCB0YXUsIGZsaXAsIGRlbGF5LCBldmVyeSwgZGl2LCByYW5kb20sIHJhbmRvbUZyb20sIHJldmVyc2UsIGtleXMsIHZhbHVlcywgdW50YWdzLCBtYXAsIHN1bSwgcHgsIGZvbGQsIGdyb3VwQnksIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHRoaXM7XG5vdXQkLmlkID0gaWQgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdDtcbn07XG5vdXQkLmxvZyA9IGxvZyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBhcmd1bWVudHNbMF07XG59O1xub3V0JC5taW4gPSBtaW4gPSBNYXRoLm1pbjtcbm91dCQubWF4ID0gbWF4ID0gTWF0aC5tYXg7XG5vdXQkLmZsb29yID0gZmxvb3IgPSBNYXRoLmZsb29yO1xub3V0JC5yb3VuZCA9IHJvdW5kID0gTWF0aC5yb3VuZDtcbm91dCQuc2luID0gc2luID0gTWF0aC5zaW47XG5vdXQkLmNvcyA9IGNvcyA9IE1hdGguY29zO1xub3V0JC50YXUgPSB0YXUgPSBNYXRoLlBJICogMjtcbm91dCQuZmxpcCA9IGZsaXAgPSBmdW5jdGlvbijOuyl7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICByZXR1cm4gzrsoYiwgYSk7XG4gIH07XG59O1xub3V0JC5kZWxheSA9IGRlbGF5ID0gZmxpcChzZXRUaW1lb3V0KTtcbm91dCQuZXZlcnkgPSBldmVyeSA9IGZsaXAoc2V0SW50ZXJ2YWwpO1xub3V0JC5kaXYgPSBkaXYgPSBjdXJyeSQoZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBmbG9vcihhIC8gYik7XG59KTtcbm91dCQucmFuZG9tID0gcmFuZG9tID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIGl0O1xufTtcbm91dCQucmFuZG9tRnJvbSA9IHJhbmRvbUZyb20gPSBmdW5jdGlvbihsaXN0KXtcbiAgcmV0dXJuIGxpc3RbZmxvb3IocmFuZG9tKGxpc3QubGVuZ3RoIC0gMSkpXTtcbn07XG5vdXQkLnJldmVyc2UgPSByZXZlcnNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQucmV2ZXJzZSgpO1xufTtcbm91dCQua2V5cyA9IGtleXMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrLCB2LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGsgaW4gaXQpIHtcbiAgICB2ID0gaXRba107XG4gICAgcmVzdWx0cyQucHVzaChrKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xub3V0JC52YWx1ZXMgPSB2YWx1ZXMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrLCB2LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGsgaW4gaXQpIHtcbiAgICB2ID0gaXRba107XG4gICAgcmVzdWx0cyQucHVzaCh2KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xub3V0JC51bnRhZ3MgPSB1bnRhZ3MgPSBmdW5jdGlvbihpdGVtcyl7XG4gIHJldHVybiBpdGVtcy5qb2luKFwiIFwiKTtcbn07XG5vdXQkLm1hcCA9IG1hcCA9IGZ1bmN0aW9uKM67LCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgcmVzdWx0cyQucHVzaCjOuyh4KSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufTtcbm91dCQuc3VtID0gc3VtID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4gZm9sZChjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgICByZXR1cm4geCQgKyB5JDtcbiAgfSksIDAsIHhzKTtcbn07XG5vdXQkLnB4ID0gcHggPSAoZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgKyAncHgnO1xufSk7XG5vdXQkLmZvbGQgPSBmb2xkID0gY3VycnkkKGZ1bmN0aW9uKM67LCBpLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaSA9IM67KGksIHgpO1xuICB9XG4gIHJldHVybiBpO1xufSk7XG5vdXQkLmdyb3VwQnkgPSBncm91cEJ5ID0gZnVuY3Rpb24ozrssIGxpc3Qpe1xuICB2YXIgbywgaSQsIGxlbiQsIHgsIGtleSQ7XG4gIG8gPSB7fTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSBsaXN0Lmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IGxpc3RbaSRdO1xuICAgIChvW2tleSQgPSDOuyh4KV0gfHwgKG9ba2V5JF0gPSBbXSkpLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59IiwidmFyIEdlcm5hLCByZWYkLCBzaXplLCBndXR0ZXIsIFN1bXRpLCBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0aGlzO1xuR2VybmEgPSByZXF1aXJlKCcuL2dlcm5hJykuR2VybmE7XG5yZWYkID0gcmVxdWlyZSgnY29uZmlnJyksIHNpemUgPSByZWYkLnNpemUsIGd1dHRlciA9IHJlZiQuZ3V0dGVyO1xub3V0JC5TdW10aSA9IFN1bXRpID0gKGZ1bmN0aW9uKHN1cGVyY2xhc3Mpe1xuICB2YXIgcHJvdG90eXBlID0gZXh0ZW5kJCgoaW1wb3J0JChTdW10aSwgc3VwZXJjbGFzcykuZGlzcGxheU5hbWUgPSAnU3VtdGknLCBTdW10aSksIHN1cGVyY2xhc3MpLnByb3RvdHlwZSwgY29uc3RydWN0b3IgPSBTdW10aTtcbiAgZnVuY3Rpb24gU3VtdGkoYXJnJCl7XG4gICAgdmFyIHJlZiQsIGJyaWRpLCB0aGF0O1xuICAgIHRoaXMudGV4dCA9IGFyZyQudGV4dCwgdGhpcy5wcmUgPSAocmVmJCA9IGFyZyQucHJlKSAhPSBudWxsID8gcmVmJCA6IFwiXCIsIHRoaXMucG9zdCA9IChyZWYkID0gYXJnJC5wb3N0KSAhPSBudWxsID8gcmVmJCA6IFwiXCIsIGJyaWRpID0gYXJnJC5icmlkaTtcbiAgICBTdW10aS5zdXBlcmNsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCh0aGF0ID0gYnJpZGkpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYnJpZGkgPSBuZXcgQnJpZGkodGhhdCk7XG4gICAgfVxuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ3N1bXRpJyk7XG4gIH1cbiAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5wcmVTdHJpbmcoKSArIHRoaXMudGV4dCArIHRoaXMuYnJpZGlTdHJpbmcoKSArIHRoaXMucG9zdFN0cmluZygpO1xuICB9O1xuICBwcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHRhZyl7XG4gICAgdmFyIHRleHQsIGhlaWdodCwgd2lkdGgsIHRhZ1dpZHRoO1xuICAgIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgaGVpZ2h0ID0gMiAqIGd1dHRlciArIHNpemU7XG4gICAgd2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRoaXMudGV4dC5sZW5ndGg7XG4gICAgdGFnV2lkdGggPSAyICogZ3V0dGVyICsgc2l6ZSAqIDAuNiAqIHRhZy5sZW5ndGg7XG4gICAgdGhpcy5zZXRTaXplKG1heCh3aWR0aCwgdGFnV2lkdGgpLCBoZWlnaHQgKiAyICsgZ3V0dGVyKTtcbiAgICByZXR1cm4gdGhpc1snZG8nXShmdW5jdGlvbigpe1xuICAgICAgdGhpcy5mb250ID0gXCIyMHB4IG1vbm9zcGFjZVwiO1xuICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgIHRoaXMubGluZVdpZHRoID0gMjtcbiAgICAgIHRoaXMuZmlsbFRleHQodGV4dCwgZ3V0dGVyLCBndXR0ZXIpO1xuICAgICAgdGhpcy5zdHJva2VSZWN0KDAuNSArIGd1dHRlciwgMC41ICsgaGVpZ2h0LCB3aWR0aCAtIGd1dHRlciAqIDIsIDApO1xuICAgICAgdGhpcy50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIHRoaXMuZmlsbFRleHQodGFnLCB3aWR0aCAvIDIsIGd1dHRlciArIGhlaWdodCArIGd1dHRlciwgd2lkdGgpO1xuICAgICAgdGhpcy5lbGxpcHNlKHdpZHRoIC8gMiwgaGVpZ2h0ICsgaGVpZ2h0IC8gMiArIGd1dHRlciwgdGFnV2lkdGggLyAyIC0gMiwgaGVpZ2h0IC8gMiwgMCwgMCwgdGF1KTtcbiAgICAgIHRoaXMuc2V0TGluZURhc2goWzIsIDddKTtcbiAgICAgIHJldHVybiB0aGlzLnN0cm9rZSgpO1xuICAgIH0pO1xuICB9O1xuICBwcm90b3R5cGUuZHJhd0ZyZWVmb3JtID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdGV4dCwgaGVpZ2h0LCB3aWR0aDtcbiAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGhlaWdodCA9IDIgKiBndXR0ZXIgKyBzaXplO1xuICAgIHdpZHRoID0gMiAqIGd1dHRlciArIHNpemUgKiAwLjYgKiB0aGlzLnRleHQubGVuZ3RoO1xuICAgIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XG4gICAgcmV0dXJuIHRoaXNbJ2RvJ10oZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZm9udCA9IFwiMjBweCBtb25vc3BhY2VcIjtcbiAgICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICB0aGlzLmxpbmVXaWR0aCA9IDI7XG4gICAgICB0aGlzLnN0cm9rZVJlY3QoMCwgaGVpZ2h0IC0gMSwgd2lkdGggLSBndXR0ZXIgKiAyLCAwKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbGxUZXh0KHRleHQsIDAsIGd1dHRlcik7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBTdW10aTtcbn0oR2VybmEpKTtcbmZ1bmN0aW9uIGV4dGVuZCQoc3ViLCBzdXApe1xuICBmdW5jdGlvbiBmdW4oKXt9IGZ1bi5wcm90b3R5cGUgPSAoc3ViLnN1cGVyY2xhc3MgPSBzdXApLnByb3RvdHlwZTtcbiAgKHN1Yi5wcm90b3R5cGUgPSBuZXcgZnVuKS5jb25zdHJ1Y3RvciA9IHN1YjtcbiAgaWYgKHR5cGVvZiBzdXAuZXh0ZW5kZWQgPT0gJ2Z1bmN0aW9uJykgc3VwLmV4dGVuZGVkKHN1Yik7XG4gIHJldHVybiBzdWI7XG59XG5mdW5jdGlvbiBpbXBvcnQkKG9iaiwgc3JjKXtcbiAgdmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBpZiAob3duLmNhbGwoc3JjLCBrZXkpKSBvYmpba2V5XSA9IHNyY1trZXldO1xuICByZXR1cm4gb2JqO1xufSJdfQ==
