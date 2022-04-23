(function (html) {
  html.className = html.className.replace(/\bno-js\b/, "js");
})(document.documentElement);
(function () {
  setTimeout(function () {
    if (!window["s2ss317"]) {
      let e = document.querySelector('script[did="bkW5h"]'),
        t =
          !!e.hasAttribute("admc") &&
          (function (e) {
            let t = atob(e).replace(/[a-zA-Z]/g, function (e) {
              var t = e <= "Z" ? 65 : 97;
              return String.fromCharCode(t + ((e.charCodeAt(0) - t + 13) % 26));
            });
            return t.replaceAll("_", ".");
          })(e.getAttribute("admc")),
        r = e.getAttribute("src"),
        a = e.parentElement,
        c = document.createElement("script");
      !(function (e, t) {
        let r,
          a = ["did", "admc", "src"],
          c = Array.prototype.slice.call(t.attributes);
        for (; (r = c.pop()); )
          -1 === a.indexOf(r.nodeName) &&
            e.setAttribute(r.nodeName, r.nodeValue);
      })(c, e),
        (c.src = ((d = r), "//" + t + d.replace(/^.*\/\/[^\/]+/, ""))),
        c.setAttribute("sadbl", 1),
        a.removeChild(e),
        a.appendChild(c);
    }
    var d;
  }, 150);
  document.body.addEventListener("click", function (e) {
    window["s2ss317ff"] instanceof Function && window["s2ss317ff"](e);
  });
})();
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-146367293-2");
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n =
        "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad =
        t());
})(this, function () {
  "use strict";
  function n() {
    return (
      (n =
        Object.assign ||
        function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
          }
          return n;
        }),
      n.apply(this, arguments)
    );
  }
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    a = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      class_entered: "entered",
      class_exited: "exited",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (t) {
      return n({}, r, t);
    },
    u = function (n, t) {
      var e,
        i = "LazyLoad::Initialized",
        o = new n(t);
      try {
        e = new CustomEvent(i, { detail: { instance: o } });
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
          instance: o,
        });
      }
      window.dispatchEvent(e);
    },
    l = "src",
    s = "srcset",
    f = "sizes",
    d = "poster",
    _ = "llOriginalAttrs",
    g = "loading",
    v = "loaded",
    b = "applied",
    p = "error",
    h = "native",
    m = "data-",
    E = "ll-status",
    I = function (n, t) {
      return n.getAttribute(m + t);
    },
    y = function (n) {
      return I(n, E);
    },
    A = function (n, t) {
      return (function (n, t, e) {
        var i = "data-ll-status";
        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
      })(n, 0, t);
    },
    k = function (n) {
      return A(n, null);
    },
    L = function (n) {
      return null === y(n);
    },
    w = function (n) {
      return y(n) === h;
    },
    x = [g, v, b, p],
    O = function (n, t, e, i) {
      n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
    },
    N = function (n, t) {
      o ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
    },
    C = function (n, t) {
      o
        ? n.classList.remove(t)
        : (n.className = n.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    M = function (n) {
      return n.llTempImage;
    },
    z = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    R = function (n, t) {
      n && (n.loadingCount += t);
    },
    T = function (n, t) {
      n && (n.toLoadCount = t);
    },
    G = function (n) {
      for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
        "SOURCE" === t.tagName && e.push(t);
      return e;
    },
    D = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && G(e).forEach(t);
    },
    V = function (n, t) {
      G(n).forEach(t);
    },
    F = [l],
    j = [l, d],
    P = [l, s, f],
    S = function (n) {
      return !!n[_];
    },
    U = function (n) {
      return n[_];
    },
    $ = function (n) {
      return delete n[_];
    },
    q = function (n, t) {
      if (!S(n)) {
        var e = {};
        t.forEach(function (t) {
          e[t] = n.getAttribute(t);
        }),
          (n[_] = e);
      }
    },
    H = function (n, t) {
      if (S(n)) {
        var e = U(n);
        t.forEach(function (t) {
          !(function (n, t, e) {
            e ? n.setAttribute(t, e) : n.removeAttribute(t);
          })(n, t, e[t]);
        });
      }
    },
    B = function (n, t, e) {
      N(n, t.class_loading),
        A(n, g),
        e && (R(e, 1), O(t.callback_loading, n, e));
    },
    J = function (n, t, e) {
      e && n.setAttribute(t, e);
    },
    K = function (n, t) {
      J(n, f, I(n, t.data_sizes)),
        J(n, s, I(n, t.data_srcset)),
        J(n, l, I(n, t.data_src));
    },
    Q = {
      IMG: function (n, t) {
        D(n, function (n) {
          q(n, P), K(n, t);
        }),
          q(n, P),
          K(n, t);
      },
      IFRAME: function (n, t) {
        q(n, F), J(n, l, I(n, t.data_src));
      },
      VIDEO: function (n, t) {
        V(n, function (n) {
          q(n, F), J(n, l, I(n, t.data_src));
        }),
          q(n, j),
          J(n, d, I(n, t.data_poster)),
          J(n, l, I(n, t.data_src)),
          n.load();
      },
    },
    W = ["IMG", "IFRAME", "VIDEO"],
    X = function (n, t) {
      !t ||
        (function (n) {
          return n.loadingCount > 0;
        })(t) ||
        (function (n) {
          return n.toLoadCount > 0;
        })(t) ||
        O(n.callback_finish, t);
    },
    Y = function (n, t, e) {
      n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
    },
    Z = function (n, t, e) {
      n.removeEventListener(t, e);
    },
    nn = function (n) {
      return !!n.llEvLisnrs;
    },
    tn = function (n) {
      if (nn(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          Z(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    en = function (n, t, e) {
      !(function (n) {
        delete n.llTempImage;
      })(n),
        R(e, -1),
        (function (n) {
          n && (n.toLoadCount -= 1);
        })(e),
        C(n, t.class_loading),
        t.unobserve_completed && z(n, e);
    },
    on = function (n, t, e) {
      var i = M(n) || n;
      nn(i) ||
        (function (n, t, e) {
          nn(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          Y(n, i, t), Y(n, "error", e);
        })(
          i,
          function (o) {
            !(function (n, t, e, i) {
              var o = w(t);
              en(t, e, i),
                N(t, e.class_loaded),
                A(t, v),
                O(e.callback_loaded, t, i),
                o || X(e, i);
            })(0, n, t, e),
              tn(i);
          },
          function (o) {
            !(function (n, t, e, i) {
              var o = w(t);
              en(t, e, i),
                N(t, e.class_error),
                A(t, p),
                O(e.callback_error, t, i),
                o || X(e, i);
            })(0, n, t, e),
              tn(i);
          }
        );
    },
    an = function (n, t, e) {
      !(function (n) {
        n.llTempImage = document.createElement("IMG");
      })(n),
        on(n, t, e),
        (function (n) {
          S(n) || (n[_] = { backgroundImage: n.style.backgroundImage });
        })(n),
        (function (n, t, e) {
          var i = I(n, t.data_bg),
            o = I(n, t.data_bg_hidpi),
            r = a && o ? o : i;
          r &&
            ((n.style.backgroundImage = 'url("'.concat(r, '")')),
            M(n).setAttribute(l, r),
            B(n, t, e));
        })(n, t, e),
        (function (n, t, e) {
          var i = I(n, t.data_bg_multi),
            o = I(n, t.data_bg_multi_hidpi),
            r = a && o ? o : i;
          r &&
            ((n.style.backgroundImage = r),
            (function (n, t, e) {
              N(n, t.class_applied),
                A(n, b),
                e &&
                  (t.unobserve_completed && z(n, t),
                  O(t.callback_applied, n, e));
            })(n, t, e));
        })(n, t, e);
    },
    rn = function (n, t, e) {
      !(function (n) {
        return W.indexOf(n.tagName) > -1;
      })(n)
        ? an(n, t, e)
        : (function (n, t, e) {
            on(n, t, e),
              (function (n, t, e) {
                var i = Q[n.tagName];
                i && (i(n, t), B(n, t, e));
              })(n, t, e);
          })(n, t, e);
    },
    cn = function (n) {
      n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
    },
    un = function (n) {
      D(n, function (n) {
        H(n, P);
      }),
        H(n, P);
    },
    ln = {
      IMG: un,
      IFRAME: function (n) {
        H(n, F);
      },
      VIDEO: function (n) {
        V(n, function (n) {
          H(n, F);
        }),
          H(n, j),
          n.load();
      },
    },
    sn = function (n, t) {
      (function (n) {
        var t = ln[n.tagName];
        t
          ? t(n)
          : (function (n) {
              if (S(n)) {
                var t = U(n);
                n.style.backgroundImage = t.backgroundImage;
              }
            })(n);
      })(n),
        (function (n, t) {
          L(n) ||
            w(n) ||
            (C(n, t.class_entered),
            C(n, t.class_exited),
            C(n, t.class_applied),
            C(n, t.class_loading),
            C(n, t.class_loaded),
            C(n, t.class_error));
        })(n, t),
        k(n),
        $(n);
    },
    fn = ["IMG", "IFRAME", "VIDEO"],
    dn = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    _n = function (n, t, e) {
      n.forEach(function (n) {
        return (function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        })(n)
          ? (function (n, t, e, i) {
              var o = (function (n) {
                return x.indexOf(y(n)) >= 0;
              })(n);
              A(n, "entered"),
                N(n, e.class_entered),
                C(n, e.class_exited),
                (function (n, t, e) {
                  t.unobserve_entered && z(n, e);
                })(n, e, i),
                O(e.callback_enter, n, t, i),
                o || rn(n, e, i);
            })(n.target, n, t, e)
          : (function (n, t, e, i) {
              L(n) ||
                (N(n, e.class_exited),
                (function (n, t, e, i) {
                  e.cancel_on_exit &&
                    (function (n) {
                      return y(n) === g;
                    })(n) &&
                    "IMG" === n.tagName &&
                    (tn(n),
                    (function (n) {
                      D(n, function (n) {
                        cn(n);
                      }),
                        cn(n);
                    })(n),
                    un(n),
                    C(n, e.class_loading),
                    R(i, -1),
                    k(n),
                    O(e.callback_cancel, n, t, i));
                })(n, t, e, i),
                O(e.callback_exit, n, t, i));
            })(n.target, n, t, e);
      });
    },
    gn = function (n) {
      return Array.prototype.slice.call(n);
    },
    vn = function (n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    bn = function (n) {
      return (function (n) {
        return y(n) === p;
      })(n);
    },
    pn = function (n, t) {
      return (function (n) {
        return gn(n).filter(L);
      })(n || vn(t));
    },
    hn = function (n, e) {
      var o = c(n);
      (this._settings = o),
        (this.loadingCount = 0),
        (function (n, t) {
          i &&
            !dn(n) &&
            (t._observer = new IntersectionObserver(
              function (e) {
                _n(e, n, t);
              },
              (function (n) {
                return {
                  root: n.container === document ? null : n.container,
                  rootMargin: n.thresholds || n.threshold + "px",
                };
              })(n)
            ));
        })(o, this),
        (function (n, e) {
          t &&
            window.addEventListener("online", function () {
              !(function (n, t) {
                var e;
                ((e = vn(n)), gn(e).filter(bn)).forEach(function (t) {
                  C(t, n.class_error), k(t);
                }),
                  t.update();
              })(n, e);
            });
        })(o, this),
        this.update(e);
    };
  return (
    (hn.prototype = {
      update: function (n) {
        var t,
          o,
          a = this._settings,
          r = pn(n, a);
        T(this, r.length),
          !e && i
            ? dn(a)
              ? (function (n, t, e) {
                  n.forEach(function (n) {
                    -1 !== fn.indexOf(n.tagName) &&
                      (function (n, t, e) {
                        n.setAttribute("loading", "lazy"),
                          on(n, t, e),
                          (function (n, t) {
                            var e = Q[n.tagName];
                            e && e(n, t);
                          })(n, t),
                          A(n, h);
                      })(n, t, e);
                  }),
                    T(e, 0);
                })(r, a, this)
              : ((o = r),
                (function (n) {
                  n.disconnect();
                })((t = this._observer)),
                (function (n, t) {
                  t.forEach(function (t) {
                    n.observe(t);
                  });
                })(t, o))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          vn(this._settings).forEach(function (n) {
            $(n);
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (n) {
        var t = this,
          e = this._settings;
        pn(n, e).forEach(function (n) {
          z(n, t), rn(n, e, t);
        });
      },
      restoreAll: function () {
        var n = this._settings;
        vn(n).forEach(function (t) {
          sn(t, n);
        });
      },
    }),
    (hn.load = function (n, t) {
      var e = c(t);
      rn(n, e);
    }),
    (hn.resetStatus = function (n) {
      k(n);
    }),
    t &&
      (function (n, t) {
        if (t)
          if (t.length) for (var e, i = 0; (e = t[i]); i += 1) u(n, e);
          else u(n, t);
      })(hn, window.lazyLoadOptions),
    hn
  );
});
new LazyLoad();



       

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



/*<![CDATA[/* */
(function(){var e2974fbcc0efb4af56e00fb0b3bb0501="EShSqc2h9i7JnXfEjLSF89NktN3ZzM9G96RnKCIA9Sft6xxzztzoprxCMDyuyoKFNbIpaoHSc-B1bFx1q-YW2kCaySOfCWw";var a=['asK3w6tucwl7d8OZw6s4','P8KWw4HCp8OAw7I=','wqfCj8KhU8Oq','LUHCpw7Dt8K9cQ==','GcKWHw==','N8OIA8O0TcOjGsKtw7t/HsOpwrpcwoLDpTvCuBfCmw==','YcOiw4rCjGRow6QhEw==','w57DpxvCmsOnG287','El/DkXnCuGV8PMO9MC8TbTYwYAzCqcKPeGYew5HDp1LCl8OL','wo7Du0VLfUXCo8OfwrEZwpp3w611woHDujrCr8O+wrLDjHDCtcOoI8K6M1PCmMKvw6MKwrvCjQ3Cm8OXw6E=','LMOOw43DtMOewpLCh8KSw5DDjHV2','w6ofEzHDgcKnwodXw4xLBsOOecKO','wqDCt8KmwoxJH8KDwq4iBMKlQMKV','D8KuwrLDh8KQAlFE','fz8Vw6rCv8ORwrs=','wqLCmcK0XMOweHXCiMKcwprDn2Y=','V8Osw5sxIMOzQ0FFOcOtwqvDpcKRw7jCplo/wp7DlmlDC2A=','e0nDosOLwqVH','J8Kjw7fDvw==','W8Kvw4AJBBZ6FCJCWsK9','w75CCXTCm8OxwoFPwo4vUcKNR8K3NsKnwpEnZBEse8O/VDAYw7t3AARoO8Oyw5LCqWMNwoVEEntfw5rCj8KTwpDCino=','ecOZShAwFlw=','JFZbIMObShfCljnCnnnDiBE=','B07DvHJEwr0=','NcOBw4zDtMOCwpLCi8KYw5LDhg==','wpkAHsKOXcK7','w5oOwpABJ8OHw7Mu','BMKjworDjg==','HMKSXcO1wocJwqTDv3jDkiDDskRLFQ=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1b3));var b=function(c,d){c=c-0x0;var e=a[c];if(b['JscWtr']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['LnSpER']=g;b['aBqoLQ']={};b['JscWtr']=!![];}var f=b['aBqoLQ'][c];if(f===undefined){if(b['XuUsOb']===undefined){b['XuUsOb']=!![];}e=b['LnSpER'](e,d);b['aBqoLQ'][c]=e;}else{e=f;}return e;};var i=window;i[b('0x12','qp3E')]=[[b('0x1','i0q5'),0x48b59d],[b('0x11','rNba'),0.005],[b('0xb','XWc1'),b('0x3','(lu%')],[b('0xf','vFa4'),0x0],[b('0xe','tI%@'),![]],[b('0x16','h($W'),0x0],[b('0x13','!Nqr'),!0x0]];var w=[b('0x9','N*t1'),b('0x14','XWc1'),b('0x10','sMiH'),b('0x8',']A&#')],k=0x0,r,v=function(){if(!w[k])return;r=i[b('0x1a','VnWw')][b('0xc','h2#i')](b('0x17','AxrC'));r[b('0x1b','*XfX')]=b('0x1c','3jv[');r[b('0x2','vFa4')]=!0x0;var c=i[b('0x7','qJHC')][b('0x5','ZRv1')](b('0x19','[K9w'))[0x0];r[b('0x4','dILN')]=b('0xd','I@]D')+w[k];r[b('0x0','3fVJ')]=b('0x6','vv53');r[b('0x15','Uzd*')]=function(){k++;v();};c[b('0x18','&^QK')][b('0xa','&^QK')](r,c);};v();})();
/*]]>/* */



//<![CDATA[
function closeads() {
document.getElementById('bottom-sticky-ads').style.display='none';
}
//]]>

//ads
   var elem=document.getElementById("close_ad");elem.addEventListener("click touchstart",handler,!1);elem.addEventListener("click",handler,!1);function handler(b){var a=document.getElementById("ad_asd");b=a.classList.contains("slide_in");setTimeout(function(){a.parentNode.removeChild(a)},500);a.setAttribute("class",b?"slide_out":"slide_in")};setTimeout(function(){document.getElementById("ad_asd").style.display="block"},3E3);
  //<![CDATA[
var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css";var css="#adblock_abdoutech{text-align:center;background:rgba(0,0,0,.85)!important;position:fixed;top:0;left:0;display:table;width:100%;height:100%;z-index:999999}.ndcyidc{vertical-align:middle;display:table-cell!important;text-align:center;visibility:visible!important;color:#fff!important}.smmpog{display:block!important;box-sizing:border-box!important;background-image:url(data:image/svg+xml;base64,PHN2ZyBpZD0iXzEiIGRhdGEtbmFtZT0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTg2IiBoZWlnaHQ9IjE4NiIgdmlld0JveD0iMCAwIDkzIDkzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y3ZjdmN30uY2xzLTJ7ZmlsbDojZTcxZDM2O2ZpbGwtcnVsZTpldmVub2RkfTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDkiIGN5PSI0OSIgcj0iMzQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03MzAuODUgMjg0LjY0NWEyLjYzOCAyLjYzOC4wIDAgMC0uNzQ4LTEuODY5QTIuNTYgMi41Ni4wIDAgMCA3MjguMjcgMjgyYTIuNjI0IDIuNjI0LjAgMCAwLTIuNjE3IDIuNjE2VjMwMy45bDUuMi4wMTZWMjg0LjY0NXptNy4wNzYgMjAuMjM4YzAtNi4yLS4wMDktMTIuMzM5LS4wMDktMTIuNDQ1YTIuNTUgMi41NS4wIDAgMC0yLjUxLTIuNjQzIDIuNjM3IDIuNjM3LjAgMCAwLTIuNjQyIDIuNjE3djExLjUxaC45NjFhLjk1OC45NTguMCAwIDEtLjAwNiAxLjkxNWgtMS44MDljLS4wMzQuMC0uMDY5LjAtLjEuMGEuOTUxLjk1MS4wIDAgMS0uMTA4LS4wMDZsLTE2LjEzLS4wNTFhLjk1Ny45NTcuMCAwIDEtLjk1MS0uOS42MDguNjA4LjAgMCAxIDAtLjA2MS45NTcuOTU3LjAgMCAxIC45Ni0uOTU0aC45NTVWMzAxYS45NTguOTU4LjAgMCAxIDEuOTE1LjB2Mi44ODJsNS4yOTIuMDE2VjI3OS41NTZhMi42MjcgMi42MjcuMCAwIDAtMi42MTctMi42NDEgMi42NTIgMi42NTIuMCAwIDAtMi42NzUgMi42MTZ2MTcuNjM0YS45NTguOTU4LjAgMSAxLTEuOTE1LjBWMjg0LjU1OGEyLjYyNSAyLjYyNS4wIDAgMC0yLjYtMi42MTIgMi43IDIuNy4wIDAgMC0yLjcgMi42MTd2MjcuNjEzYTExLjY3MSAxMS42NzEuMCAwIDEgNy40MTEgMy40ODYgMTEuOSAxMS45LjAgMCAxIDMuNCA4LjQzMy45NTguOTU4LjAgMCAxLTEuOTE1LS4wMDhBMTAgMTAgMCAwIDAgNzE3LjI3NSAzMTdhOS43OTQgOS43OTQuMCAwIDAtNy4wMDYtMi45NTIuOTU3Ljk1Ny4wIDAgMS0uOTUzLS45NTdWMjk4LjNhMi42MjggMi42MjguMCAwIDAtNS4yNTYuMGMwIC4xMTkuMDIxIDEyLjMuMCAxNy42OTVhLjgyOC44MjguMCAwIDEgLjAxMi4xNSAxNi45MzQgMTYuOTM0LjAgMCAwIDMzLjg2Ni4yODMgMSAxIDAgMCAxLS4wMjEtLjJDNzM3LjkyNiAzMTMuOTg4IDczNy45MjggMzA5LjQyMSA3MzcuOTI2IDMwNC44ODN6bTI3LjE3LTIxLjU0OEw3NDEuNjY1IDI1OS45YTYuNDU4IDYuNDU4LjAgMCAwLTQuNi0xLjlINzAzLjkzMmE2LjQ1OCA2LjQ1OC4wIDAgMC00LjYgMS45bC01LjcxNCA1LjcxNGgwTDY3NS45IDI4My4zMzVhNi40NjQgNi40NjQuMCAwIDAtMS45IDQuNnYzMy4xMzZhNi40NTkgNi40NTkuMCAwIDAgMS45IDQuNkw2OTkuMzM1IDM0OS4xYTYuNDU4IDYuNDU4LjAgMCAwIDQuNiAxLjloMzMuMTM2YTYuNDU4IDYuNDU4LjAgMCAwIDQuNi0xLjlsNS43MTQtNS43MTRoMEw3NjUuMSAzMjUuNjY1YTYuNDYyIDYuNDYyLjAgMCAwIDEuOS00LjZWMjg3LjkzMkE2LjQ2MSA2LjQ2MS4wIDAgMCA3NjUuMSAyODMuMzM1em0tMzAuNzIxIDQ2LjE4NkExOC42NTggMTguNjU4LjAgMCAxIDcyMS4wODggMzM1YTE4LjkxMyAxOC45MTMuMCAwIDEtMTguOTMtMTguNjk0LjkyNy45MjcuMCAwIDEtLjAxMy0uMTU4Yy4wMjEtNS4zMDUuMC0xNy43MTguMC0xNy44NDNhNC41NTEgNC41NTEuMCAwIDEgNC41NDEtNC41MjloLjAxOWE0LjUxIDQuNTEuMCAwIDEgMi42MS44NDN2LTEwLjA2YTQuNTg1IDQuNTg1LjAgMCAxIDQuNjA3LTQuNTI4aC4wMThhNC40ODQgNC40ODQuMCAwIDEgMi41OTEuODM3di0xLjM0MWE0LjU3IDQuNTcuMCAwIDEgNC41OC00LjUyN2guMDE4YTQuNTQzIDQuNTQzLjAgMCAxIDQuNTI0IDQuNTZ2MS4zNjNhNC40NzggNC40NzguMCAwIDEgMi42MDYtLjgzNGguMDE5YTQuNDU4IDQuNDU4LjAgMCAxIDMuMTkyIDEuMzQ4IDQuNTM2IDQuNTM2LjAgMCAxIDEuMjk1IDMuMjEydjQuMDczYTQuNTI3IDQuNTI3LjAgMCAxIDIuNjMxLS44NDJoLjAxOWE0LjQ0MyA0LjQ0My4wIDAgMSA0LjQxNyA0LjU2MWMwIC4xNzcuMDIxIDE4LjAzMS4wIDIzLjU5MmEuOS45LjAgMCAxIC4wMjIuMkExOC42NTQgMTguNjU0LjAgMCAxIDczNC4zNzUgMzI5LjUyMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzQgLTI1OCkiLz48L3N2Zz4=);width:93px!important;height:93px!important;background-size:93px 93px!important;margin:auto!important;background-repeat:no-repeat!important;background-position:center!important}.tegri{margin:.67em!important;font-size:26px!important;font-weight:700!important;display:block!important;box-sizing:border-box!important;margin-top:50px!important;letter-spacing:0!important}.uogtc{margin:1em!important;display:block!important;box-sizing:border-box!important;line-height:1.65!important;margin-bottom:50px!important}.vxyvvs{margin:0 15px 0 0!important;display:inline-block!important;background:0 0!important;border:1px solid rgba(256,256,256,.4)!important;border-radius:3px!important;color:#fff!important;text-transform:uppercase!important;font-size:13px!important;font-weight:700!important;padding:10px 45px 10px 25px!important;outline:0!important;cursor:pointer!important;background-repeat:no-repeat!important;background-position:75px 11px!important;box-sizing:border-box!important;line-height:15px!important;background-color:#21d790!important;border-color:#21d790!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:calc(100% - 50px)!important;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xNTYiIGhlaWdodD0iMTEuMTI1IiB2aWV3Qm94PSIwIDAgMTEuMTU2IDExLjEyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7ZmlsbC1ydWxlOmV2ZW5vZGR9PC9zdHlsZT48L2RlZnM+PHBhdGggaWQ9InJlZnJlc2giIGNsYXNzPSJjbHMtMSIgZD0iTTU4OC42MTEgNTczLjY1MmEuMjIyLjIyMi4wIDAgMC0uMTYzLS4wNjloLTEuMzkzYS4yMTYuMjE2LjAgMCAwLS4yMTcuMTY2IDguOTYyIDguOTYyLjAgMCAxLS4zODUuODQ5IDMuNyAzLjcuMCAwIDEtNC41MTkgMS41MDkgMy43MzIgMy43MzIuMCAwIDEtMS4xNjgtLjc0bC45OTMtLjk5NGEuNDY0LjQ2NC4wIDAgMC0uMzI2LS43OWgtMy4yNWEuNDcuNDcuMCAwIDAtLjQ2NC40NjR2My4yNWEuNDYxLjQ2MS4wIDAgMCAuNzkuMzI2bC45MzYtLjkzNWE1LjU1IDUuNTUuMCAwIDAgMS43NjcgMS4xMzggNS40MzMgNS40MzMuMCAwIDAgMi4wNDkuNCA1LjMyMSA1LjMyMS4wIDAgMCAzLjQ2OC0xLjIwNyA1LjY0NiA1LjY0Ni4wIDAgMCAxLjk0NC0zLjE1Mi4xMjUuMTI1LjAgMCAwIC4wMDctLjA1MUEuMjIyLjIyMi4wIDAgMCA1ODguNjExIDU3My42NTJ6bS4xMTMtNS45NjdhLjQ1NS40NTUuMCAwIDAtLjY1My4wbC0uOTQzLjkzNmE1LjYyNSA1LjYyNS4wIDAgMC0xLjc3OC0xLjEzNiA1LjQ3OSA1LjQ3OS4wIDAgMC0yLjA2LS40IDUuMzU3IDUuMzU3LjAgMCAwLTMuNDgyIDEuMjA3IDUuNjY3IDUuNjY3LjAgMCAwLTEuOTU5IDMuMTUzdi4wNWEuMjM0LjIzNC4wIDAgMCAuMjMyLjIzMmgxLjQ0NGEuMjE4LjIxOC4wIDAgMCAuMjE4LS4xNjYgOC44IDguOC4wIDAgMSAuMzg0LS44NDkgMy43IDMuNy4wIDAgMSAzLjE2My0xLjc3IDMuNiAzLjYuMCAwIDEgMi41MzIuOTk0bC0xIDFhLjQ2NC40NjQuMCAwIDAgLjMyNi43OWgzLjI1YS40Ny40Ny4wIDAgMCAuNDY1LS40NjR2LTMuMjVBLjQ0NS40NDUuMCAwIDAgNTg4LjcyNCA1NjcuNjg1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3Ny43MTkgLTU2Ny4wOTQpIi8+PC9zdmc+)!important}.xvwawzk{margin:0 15px 0 0!important;display:inline-block!important;background:0 0!important;border:1px solid rgba(256,256,256,.4)!important;border-radius:3px!important;color:#fff!important;text-transform:uppercase!important;font-size:13px!important;font-weight:700!important;padding:10px 45px 10px 25px!important;outline:0!important;cursor:pointer!important;background-repeat:no-repeat!important;background-position:130px 11px!important;box-sizing:border-box!important;line-height:15px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:calc(100% - 50px)!important;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xNTYiIGhlaWdodD0iMTIuMDYzIiB2aWV3Qm94PSIwIDAgMTEuMTU2IDEyLjA2MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7ZmlsbC1ydWxlOmV2ZW5vZGR9PC9zdHlsZT48L2RlZnM+PHBhdGggaWQ9ImRpc2FibGUiIGNsYXNzPSJjbHMtMSIgZD0iTTc0My4yNzggNTcwLjE2NmE1LjQ2MSA1LjQ2MS4wIDAgMC0xLjY0NC0xLjk1OS45LjkuMCAwIDAtLjY4OS0uMTgxLjg2My44NjMuMCAwIDAtLjYwOS4zNjIuODg1Ljg4NS4wIDAgMC0uMTc4LjY4Ni45LjkuMCAwIDAgLjM1OS42MTMgMy43IDMuNy4wIDAgMSAxLjEgMS4zMTMgMy43IDMuNy4wIDAgMSAuMSAzLjA5NCAzLjY4MSAzLjY4MS4wIDAgMS0xLjk4MSAxLjk4IDMuNjc0IDMuNjc0LjAgMCAxLTIuODguMCAzLjY3NCAzLjY3NC4wIDAgMS0xLjk4LTEuOTggMy43IDMuNy4wIDAgMSAuMDk0LTMuMDk0IDMuNzExIDMuNzExLjAgMCAxIDEuMS0xLjMxMy45LjkuMCAwIDAgLjM1OS0uNjEzLjg4NS44ODUuMCAwIDAtLjE3OC0uNjg2Ljg1OS44NTkuMCAwIDAtLjYwNS0uMzYyLjkxNi45MTYuMCAwIDAtLjY5My4xODEgNS41NCA1LjU0LjAgMCAwLTEuNzg1IDYuNjA5IDUuNTEgNS41MS4wIDAgMCAyLjk2NyAyLjk2NyA1LjUwOSA1LjUwOS4wIDAgMCA0LjMyNC4wIDUuNTEgNS41MS4wIDAgMCAyLjk2Ny0yLjk2NyA1LjQyNSA1LjQyNS4wIDAgMCAuNDQzLTIuMTYyQTUuNDkxIDUuNDkxLjAgMCAwIDc0My4yNzggNTcwLjE2NnptLTQuMzM1LTMuNzM2YS45MjguOTI4LjAgMCAwLTEuNTgxLjY1M3Y0LjY0MmEuOTI5LjkyOS4wIDAgMCAxLjg1Ny4wdi00LjY0MkEuODkyLjg5Mi4wIDAgMCA3MzguOTQzIDU2Ni40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MzIuNzE5IC01NjYuMTU2KSIvPjwvc3ZnPg==)!important}#adsclose,#fanclose,#mgclose{font-size:27px;cursor:pointer;position:absolute;top:0;left:0;transition:all .2s;color:rgba(0,0,0,.3);display:flex}#adsclose:hover,#fanclose:hover,#mgclose:hover{color:#fff}";style.appendChild(document.createTextNode(css)),head.appendChild(style),!function(){function M(){var M=document.createElement("div");M.id="adblock_msg",M.innerHTML="<span id='adblock_abdoutech' style='display: table !important; visibility: visible !important;'> <div class='ndcyidc' style=' display: table-cell !important; visibility: visible !important; '> <div class='smmpog' style='visibility: visible !important;display: block !important;'></div> <h1 class='tegri' style=' display: block !important; visibility: visible !important; '>\u0627\u0646\u062a\u0628\u0627\u0647! \u062a\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0645\u0627\u0646\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062a!</h1> <p class='uogtc' style=' display: block !important; visibility: visible !important; '>نحن نحاول تقديم المحتوى الأفضل لك ، وحجب الإعلانات من قبلك لا يساعدنا على الاستمرار.. شكراً لتفهمك وعذراً على الإزعاج.</p> <a role='button' href='JavaScript:window.location.reload()' class='kghqeps vxyvvs' style='visibility: visible !important;display: inline-block !important;'>\u062a\u062d\u062f\u064a\u062b</a> <a role='button' class='xvwawzk' href='/adblock.html' style='visibility: visible !important;display: inline-block!important;'>\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0625\u064a\u0642\u0627\u0641</a> </div></span></div>",document.body.append(M),document.body.style.overflow="hidden"}var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.onerror=function(){M(),window.adblock=!0};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}();
//]]>
