!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = []
      , r = Object.getPrototypeOf
      , se = oe.slice
      , g = oe.flat ? function(e) {
        return oe.flat.call(e)
    }
    : function(e) {
        return oe.concat.apply([], e)
    }
      , a = oe.push
      , ae = oe.indexOf
      , n = {}
      , i = n.toString
      , ue = n.hasOwnProperty
      , o = ue.toString
      , s = o.call(Object)
      , le = {}
      , v = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , y = function(e) {
        return null != e && e === e.window
    }
      , x = ie.document
      , u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || x).createElement("script");
        if (o.text = e,
        t)
            for (r in u)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function _(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.0"
      , l = /HTML$/i
      , ce = function(e, t) {
        return new ce.fn.init(e,t)
    };
    function c(e) {
        var t = !!e && "length"in e && e.length
          , n = _(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return se.call(this)
        },
        get: function(e) {
            return null == e ? se.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(se.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: oe.sort,
        splice: oe.splice
    },
    ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || v(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && s !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                    o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {},
                    i = !1,
                    s[t] = ce.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e) || (t = r(e)) && ("function" != typeof (n = ue.call(t, "constructor") && t.constructor) || o.call(n) !== s))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i)
                    return e.textContent;
                if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += ce.text(t);
            return n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (c(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return g(s)
        },
        guid: 1,
        support: le
    }),
    "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var de = oe.pop
      , he = oe.sort
      , pe = oe.splice
      , ge = "[\\x20\\t\\r\\n\\f]"
      , ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$","g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    }
    ;
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function d(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, d)
    }
    ;
    var ye = x
      , me = a;
    !function() {
        var e, w, b, o, s, k, r, x, h, i, S = me, T = ce.expando, C = 0, n = 0, a = R(), c = R(), u = R(), p = R(), l = function(e, t) {
            return e === t && (s = !0),
            0
        }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", d = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + d + ")*)|.*)\\)|)", v = new RegExp(ge + "+","g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), _ = new RegExp(ge + "|>"), D = new RegExp(g), M = new RegExp("^" + t + "$"), O = {
            ID: new RegExp("^#(" + t + ")"),
            CLASS: new RegExp("^\\.(" + t + ")"),
            TAG: new RegExp("^(" + t + "|[*])"),
            ATTR: new RegExp("^" + d),
            PSEUDO: new RegExp("^" + g),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)","i"),
            bool: new RegExp("^(?:" + f + ")$","i"),
            needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)","i")
        }, A = /^(?:input|select|textarea|button)$/i, E = /^h\d$/i, j = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, N = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])","g"), P = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, Y = function() {
            G()
        }, L = K(function(e) {
            return !0 === e.disabled && fe(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            S.apply(oe = se.call(ye.childNodes), ye.childNodes),
            oe[ye.childNodes.length].nodeType
        } catch (e) {
            S = {
                apply: function(e, t) {
                    me.apply(e, se.call(t))
                },
                call: function(e) {
                    me.apply(e, se.call(arguments, 1))
                }
            }
        }
        function H(e, t, n, r) {
            var i, o, s, a, u, l, c, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && (G(t),
            t = t || k,
            x)) {
                if (11 !== d && (u = j.exec(e)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return S.call(n, s),
                                n
                        } else if (f && (s = f.getElementById(i)) && H.contains(t, s) && s.id === i)
                            return S.call(n, s),
                            n
                    } else {
                        if (u[2])
                            return S.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && t.getElementsByClassName)
                            return S.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (!(p[e + " "] || h && h.test(e))) {
                    if (c = e,
                    f = t,
                    1 === d && (_.test(e) || m.test(e))) {
                        for ((f = $.test(e) && B(t.parentNode) || t) == t && le.scope || ((a = t.getAttribute("id")) ? a = ce.escapeSelector(a) : t.setAttribute("id", a = T)),
                        o = (l = X(e)).length; o--; )
                            l[o] = (a ? "#" + a : ":scope") + " " + Z(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return S.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (t) {
                        p(e, !0)
                    } finally {
                        a === T && t.removeAttribute("id")
                    }
                }
            }
            return re(e.replace(ve, "$1"), t, n, r)
        }
        function R() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > w.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function W(e) {
            return e[T] = !0,
            e
        }
        function I(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function F(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }
        function z(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }
        function U(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && L(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function q(s) {
            return W(function(o) {
                return o = +o,
                W(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function B(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function G(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != k && 9 === n.nodeType && n.documentElement && (r = (k = n).documentElement,
            x = !ce.isXMLDoc(k),
            i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector,
            ye != k && (t = k.defaultView) && t.top !== t && t.addEventListener("unload", Y),
            le.getById = I(function(e) {
                return r.appendChild(e).id = ce.expando,
                !k.getElementsByName || !k.getElementsByName(ce.expando).length
            }),
            le.disconnectedMatch = I(function(e) {
                return i.call(e, "*")
            }),
            le.scope = I(function() {
                return k.querySelectorAll(":scope")
            }),
            le.cssHas = I(function() {
                try {
                    return k.querySelector(":has(*,:jqfake)"),
                    !1
                } catch (e) {
                    return !0
                }
            }),
            le.getById ? (w.filter.ID = function(e) {
                var t = e.replace(N, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && x) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (w.filter.ID = function(e) {
                var n = e.replace(N, P);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && x) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            w.find.CLASS = function(e, t) {
                if (void 0 !== t.getElementsByClassName && x)
                    return t.getElementsByClassName(e)
            }
            ,
            h = [],
            I(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + T + "' href='' disabled='disabled'></a><select id='" + T + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || h.push("\\[" + ge + "*(?:value|" + f + ")"),
                e.querySelectorAll("[id~=" + T + "-]").length || h.push("~="),
                e.querySelectorAll("a#" + T + "+*").length || h.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || h.push(":checked"),
                (t = k.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                r.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"),
                (t = k.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || h.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }),
            le.cssHas || h.push(":has"),
            h = h.length && new RegExp(h.join("|")),
            l = function(e, t) {
                if (e === t)
                    return s = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument == ye && H.contains(ye, e) ? -1 : t === k || t.ownerDocument == ye && H.contains(ye, t) ? 1 : o ? ae.call(o, e) - ae.call(o, t) : 0 : 4 & n ? -1 : 1)
            }
            ),
            k
        }
        for (e in H.matches = function(e, t) {
            return H(e, null, null, t)
        }
        ,
        H.matchesSelector = function(e, t) {
            if (G(e),
            x && !p[t + " "] && (!h || !h.test(t)))
                try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    p(t, !0)
                }
            return 0 < H(t, k, null, [e]).length
        }
        ,
        H.contains = function(e, t) {
            return (e.ownerDocument || e) != k && G(e),
            ce.contains(e, t)
        }
        ,
        H.attr = function(e, t) {
            (e.ownerDocument || e) != k && G(e);
            var n = w.attrHandle[t.toLowerCase()]
              , r = n && ue.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0;
            return void 0 !== r ? r : e.getAttribute(t)
        }
        ,
        H.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ce.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (s = !le.sortStable,
            o = !le.sortStable && se.call(e, 0),
            he.call(e, l),
            s) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    pe.call(e, n[r], 1)
            }
            return o = null,
            e
        }
        ,
        ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(se.apply(this)))
        }
        ,
        (w = ce.expr = {
            cacheLength: 50,
            createPseudo: W,
            match: O,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(N, P),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(N, P),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || H.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && H.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return O.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && D.test(n) && (t = X(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(N, P).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return fe(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = a[e + " "];
                    return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && a(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = H.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, p, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , m = "of-type" === e;
                    return 1 === p && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, s, a, u = v != y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, d = !1;
                        if (l) {
                            if (v) {
                                for (; u; ) {
                                    for (o = e; o = o[u]; )
                                        if (m ? fe(o, c) : 1 === o.nodeType)
                                            return !1;
                                    a = u = "only" === h && !a && "nextSibling"
                                }
                                return !0
                            }
                            if (a = [y ? l.firstChild : l.lastChild],
                            y && f) {
                                for (d = (s = (r = (i = l[T] || (l[T] = {}))[h] || [])[0] === C && r[1]) && r[2],
                                o = s && l.childNodes[s]; o = ++s && o && o[u] || (d = s = 0) || a.pop(); )
                                    if (1 === o.nodeType && ++d && o === e) {
                                        i[h] = [C, s, d];
                                        break
                                    }
                            } else if (f && (d = s = (r = (i = e[T] || (e[T] = {}))[h] || [])[0] === C && r[1]),
                            !1 === d)
                                for (; (o = ++s && o && o[u] || (d = s = 0) || a.pop()) && ((m ? !fe(o, c) : 1 !== o.nodeType) || !++d || (f && ((i = o[T] || (o[T] = {}))[h] = [C, d]),
                                o !== e)); )
                                    ;
                            return (d -= g) === p || d % p == 0 && 0 <= d / p
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || H.error("unsupported pseudo: " + e);
                    return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? W(function(e, t) {
                        for (var n, r = s(e, o), i = r.length; i--; )
                            e[n = ae.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: W(function(e) {
                    var r = []
                      , i = []
                      , a = ne(e.replace(ve, "$1"));
                    return a[T] ? W(function(e, t, n, r) {
                        for (var i, o = a(e, null, r, []), s = e.length; s--; )
                            (i = o[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: W(function(t) {
                    return function(e) {
                        return 0 < H(t, e).length
                    }
                }),
                contains: W(function(t) {
                    return t = t.replace(N, P),
                    function(e) {
                        return -1 < (e.textContent || ce.text(e)).indexOf(t)
                    }
                }),
                lang: W(function(n) {
                    return M.test(n || "") || H.error("unsupported lang: " + n),
                    n = n.replace(N, P).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return k.activeElement
                        } catch (e) {}
                    }() && k.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: U(!1),
                disabled: U(!0),
                checked: function(e) {
                    return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return E.test(e.nodeName)
                },
                input: function(e) {
                    return A.test(e.nodeName)
                },
                button: function(e) {
                    return fe(e, "input") && "button" === e.type || fe(e, "button")
                },
                text: function(e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(e, t) {
                    return [t - 1]
                }),
                eq: q(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: q(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: q(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: q(function(e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: q(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = F(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = z(e);
        function V() {}
        function X(e, t) {
            var n, r, i, o, s, a, u, l = c[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (s = e,
            a = [],
            u = w.preFilter; s; ) {
                for (o in n && !(r = y.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                a.push(i = [])),
                n = !1,
                (r = m.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(ve, " ")
                }),
                s = s.slice(n.length)),
                w.filter)
                    !(r = O[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? H.error(e) : c(e, a).slice(0)
        }
        function Z(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function K(s, e, t) {
            var a = e.dir
              , u = e.next
              , l = u || a
              , c = t && "parentNode" === l
              , f = n++;
            return e.first ? function(e, t, n) {
                for (; e = e[a]; )
                    if (1 === e.nodeType || c)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [C, f];
                if (n) {
                    for (; e = e[a]; )
                        if ((1 === e.nodeType || c) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[a]; )
                        if (1 === e.nodeType || c)
                            if (i = e[T] || (e[T] = {}),
                            u && fe(e, u))
                                e = e[a] || e;
                            else {
                                if ((r = i[l]) && r[0] === C && r[1] === f)
                                    return o[2] = r[2];
                                if ((i[l] = o)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function J(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Q(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                l && t.push(a)));
            return s
        }
        function ee(h, p, g, v, y, e) {
            return v && !v[T] && (v = ee(v)),
            y && !y[T] && (y = ee(y, e)),
            W(function(e, t, n, r) {
                var i, o, s, a, u = [], l = [], c = t.length, f = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        H(e, t[r], n);
                    return n
                }(p || "*", n.nodeType ? [n] : n, []), d = !h || !e && p ? f : Q(f, u, h, n, r);
                if (g ? g(d, a = y || (e ? h : c || v) ? [] : t, n, r) : a = d,
                v)
                    for (i = Q(a, l),
                    v(i, [], n, r),
                    o = i.length; o--; )
                        (s = i[o]) && (a[l[o]] = !(d[l[o]] = s));
                if (e) {
                    if (y || h) {
                        if (y) {
                            for (i = [],
                            o = a.length; o--; )
                                (s = a[o]) && i.push(d[o] = s);
                            y(null, a = [], i, r)
                        }
                        for (o = a.length; o--; )
                            (s = a[o]) && -1 < (i = y ? ae.call(e, s) : u[o]) && (e[i] = !(t[i] = s))
                    }
                } else
                    a = Q(a === t ? a.splice(c, a.length) : a),
                    y ? y(null, t, a, r) : S.apply(t, a)
            })
        }
        function te(e) {
            for (var i, t, n, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = K(function(e) {
                return e === i
            }, s, !0), l = K(function(e) {
                return -1 < ae.call(i, e)
            }, s, !0), c = [function(e, t, n) {
                var r = !o && (n || t != b) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; a < r; a++)
                if (t = w.relative[e[a].type])
                    c = [K(J(c), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < r && !w.relative[e[n].type]; n++)
                            ;
                        return ee(1 < a && J(c), 1 < a && Z(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, a < n && te(e.slice(a, n)), n < r && te(e = e.slice(n)), n < r && Z(e))
                    }
                    c.push(t)
                }
            return J(c)
        }
        function ne(e, t) {
            var n, v, y, m, _, r, i = [], o = [], s = u[e + " "];
            if (!s) {
                for (t || (t = X(e)),
                n = t.length; n--; )
                    (s = te(t[n]))[T] ? i.push(s) : o.push(s);
                (s = u(e, (v = o,
                m = 0 < (y = i).length,
                _ = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, s, a, u = 0, l = "0", c = e && [], f = [], d = b, h = e || _ && w.find.TAG("*", i), p = C += null == d ? 1 : Math.random() || .1, g = h.length;
                    for (i && (b = t == k || t || i); l !== g && null != (o = h[l]); l++) {
                        if (_ && o) {
                            for (s = 0,
                            t || o.ownerDocument == k || (G(o),
                            n = !x); a = v[s++]; )
                                if (a(o, t || k, n)) {
                                    S.call(r, o);
                                    break
                                }
                            i && (C = p)
                        }
                        m && ((o = !a && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        for (s = 0; a = y[s++]; )
                            a(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = de.call(r));
                            f = Q(f)
                        }
                        S.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (C = p,
                    b = d),
                    c
                }
                ,
                m ? W(r) : r))).selector = e
            }
            return s
        }
        function re(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, c = !r && X(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && x && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(N, P), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = O.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !w.relative[a = s.type]); )
                    if ((u = w.find[a]) && (r = u(s.matches[0].replace(N, P), $.test(o[0].type) && B(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && Z(o)))
                            return S.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || ne(e, c))(r, t, !x, n, !t || $.test(e) && B(t.parentNode) || t),
            n
        }
        V.prototype = w.filters = w.pseudos,
        w.setFilters = new V,
        le.sortStable = T.split("").sort(l).join("") === T,
        G(),
        le.sortDetached = I(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }),
        ce.find = H,
        ce.expr[":"] = ce.expr.pseudos,
        ce.unique = ce.uniqueSort,
        H.compile = ne,
        H.select = re,
        H.setDocument = G,
        H.escape = ce.escapeSelector,
        H.getText = ce.text,
        H.isXML = ce.isXMLDoc,
        H.selectors = ce.expr,
        H.support = ce.support,
        H.uniqueSort = ce.uniqueSort
    }();
    var h = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && ce(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , p = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , w = ce.expr.match.needsContext
      , b = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function k(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < ae.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(ce(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (ce.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && w.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var S, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || S,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : T.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof ce ? t[0] : t,
            ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
            b.test(r[1]) && ce.isPlainObject(t))
                for (r in t)
                    v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = x.getElementById(r[2])) && (this[0] = i,
        this.length = 1),
        this
    }
    ).prototype = ce.fn,
    S = ce(x);
    var C = /^(?:parents|prev(?:Until|All))/
      , D = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && ce(e);
            if (!w.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(ce(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e),
            ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length && (D[r] || ce.uniqueSort(n),
            C.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;
    function A(e) {
        return e
    }
    function E(e) {
        throw e
    }
    function j(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        ce.each(e.match(O) || [], function(e, t) {
            n[t] = !0
        }),
        n) : ce.extend({}, r);
        var i, t, o, s, a = [], u = [], l = -1, c = function() {
            for (s = s || r.once,
            o = i = !0; u.length; l = -1)
                for (t = u.shift(); ++l < a.length; )
                    !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            s && (a = t ? [] : "")
        }, f = {
            add: function() {
                return a && (t && !i && (l = a.length - 1,
                u.push(t)),
                function n(e) {
                    ce.each(e, function(e, t) {
                        v(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== _(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return ce.each(arguments, function(e, t) {
                    for (var n; -1 < (n = ce.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ce.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = u = [],
                a = t = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = u = [],
                t || i || (a = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    ce.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return ce.Deferred(function(r) {
                        ce.each(o, function(e, t) {
                            var n = v(i[t[4]]) && i[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, s, a) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = s.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? a ? t.call(e, l(u, o, A, a), l(u, o, E, a)) : (u++,
                                    t.call(e, l(u, o, A, a), l(u, o, E, a), l(u, o, A, o.notifyWith))) : (s !== A && (n = void 0,
                                    r = [e]),
                                    (a || o.resolveWith)(n, r))
                                }
                            }
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error),
                                    u <= i + 1 && (s !== E && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()),
                            ie.setTimeout(t))
                        }
                    }
                    return ce.Deferred(function(e) {
                        o[0][3].add(l(0, e, v(r) ? r : A, e.notifyWith)),
                        o[1][3].add(l(0, e, v(t) ? t : A)),
                        o[2][3].add(l(0, e, v(n) ? n : E))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ce.extend(e, s) : s
                }
            }
              , a = {};
            return ce.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                s[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = se.call(arguments)
              , o = ce.Deferred()
              , s = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? se.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (j(e, o.done(s(t)).resolve, o.reject, !n),
            "pending" === o.state() || v(i[t] && i[t].then)))
                return o.then();
            for (; t--; )
                j(i[t], s(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && $.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    }
    ;
    var N = ce.Deferred();
    function P() {
        x.removeEventListener("DOMContentLoaded", P),
        ie.removeEventListener("load", P),
        ce.ready()
    }
    ce.fn.ready = function(e) {
        return N.then(e).catch(function(e) {
            ce.readyException(e)
        }),
        this
    }
    ,
    ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || N.resolveWith(x, [ce])
        }
    }),
    ce.ready.then = N.then,
    "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? ie.setTimeout(ce.ready) : (x.addEventListener("DOMContentLoaded", P),
    ie.addEventListener("load", P));
    var Y = function(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , l = null == n;
        if ("object" === _(n))
            for (a in i = !0,
            n)
                Y(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        v(r) || (s = !0),
        l && (t = s ? (t.call(e, r),
        null) : (l = t,
        function(e, t, n) {
            return l.call(ce(e), n)
        }
        )),
        t))
            for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , L = /^-ms-/
      , H = /-([a-z])/g;
    function R(e, t) {
        return t.toUpperCase()
    }
    function W(e) {
        return e.replace(L, "ms-").replace(H, R)
    }
    var I = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function F() {
        this.expando = ce.expando + F.uid++
    }
    F.uid = 1,
    F.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            I(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[W(t)] = n;
            else
                for (r in t)
                    i[W(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][W(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(W) : (t = W(t))in r ? [t] : t.match(O) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var z = new F
      , U = new F
      , q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , B = /[A-Z]/g;
    function G(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(B, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : q.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                U.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return U.hasData(e) || z.hasData(e)
        },
        data: function(e, t, n) {
            return U.access(e, t, n)
        },
        removeData: function(e, t) {
            U.remove(e, t)
        },
        _data: function(e, t, n) {
            return z.access(e, t, n)
        },
        _removeData: function(e, t) {
            z.remove(e, t)
        }
    }),
    ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    U.set(this, n)
                }) : Y(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = U.get(o, n)) ? t : void 0 !== (t = G(o, n)) ? t : void 0;
                    this.each(function() {
                        U.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = U.get(o),
            1 === o.nodeType && !z.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = W(r.slice(5)),
                    G(o, r, i[r]));
                z.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                U.remove(this, e)
            })
        }
    }),
    ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = z.get(e, t),
                n && (!r || Array.isArray(n) ? r = z.access(e, t, ce.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                ce.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return z.get(e, n) || z.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    z.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = ce.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = z.get(o[s], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , X = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$","i")
      , Z = ["Top", "Right", "Bottom", "Left"]
      , K = x.documentElement
      , J = function(e) {
        return ce.contains(e.ownerDocument, e)
    }
      , Q = {
        composed: !0
    };
    K.getRootNode && (J = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Q) === e.ownerDocument
    }
    );
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && J(e) && "none" === ce.css(e, "display")
    };
    function te(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return ce.css(e, t, "")
        }
        , u = a(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && X.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; s--; )
                ce.style(e, t, c + l),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                c /= o;
            c *= 2,
            ce.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ne = {};
    function re(e, t) {
        for (var n, r, i, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = z.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (l[c] = (u = s = o = void 0,
            s = (i = r).ownerDocument,
            a = i.nodeName,
            (u = ne[a]) || (o = s.body.appendChild(s.createElement(a)),
            u = ce.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ne[a] = u)))) : "none" !== n && (l[c] = "none",
            z.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var _e, we, be = /^(?:checkbox|radio)$/i, ke = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, xe = /^$|^module$|\/(?:java|ecma)script/i;
    _e = x.createDocumentFragment().appendChild(x.createElement("div")),
    (we = x.createElement("input")).setAttribute("type", "radio"),
    we.setAttribute("checked", "checked"),
    we.setAttribute("name", "t"),
    _e.appendChild(we),
    le.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    _e.innerHTML = "<textarea>x</textarea>",
    le.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue,
    _e.innerHTML = "<option></option>",
    le.option = !!_e.lastChild;
    var Se = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function Te(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }
    function Ce(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
    }
    Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead,
    Se.th = Se.td,
    le.option || (Se.optgroup = Se.option = [1, "<select multiple='multiple'>", "</select>"]);
    var De = /<|&#?\w+;/;
    function Me(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === _(o))
                    ce.merge(d, o.nodeType ? [o] : o);
                else if (De.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (ke.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Se[a] || Se._default,
                    s.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        s = s.lastChild;
                    ce.merge(d, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (f.textContent = "",
        h = 0; o = d[h++]; )
            if (r && -1 < ce.inArray(o, r))
                i && i.push(o);
            else if (l = J(o),
            s = Te(f.appendChild(o), "script"),
            l && Ce(s),
            n)
                for (c = 0; o = s[c++]; )
                    xe.test(o.type || "") && n.push(o);
        return f
    }
    var Oe = /^([^.]*)(?:\.(.+)|)/;
    function Ae() {
        return !0
    }
    function Ee() {
        return !1
    }
    function je(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                je(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        (i = function(e) {
            return ce().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = ce.guid++)),
        e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }
    function $e(e, r, t) {
        t ? (z.set(e, r, !1),
        ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = z.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)
                        (ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = se.call(arguments),
                    z.set(this, r, n),
                    this[r](),
                    t = z.get(this, r),
                    z.set(this, r, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (z.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Ae)
            }
        })) : void 0 === z.get(e, r) && ce.event.add(e, r, Ae)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, d, h, p, g, v = z.get(t);
            if (I(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && ce.find.matchesSelector(K, i),
                n.guid || (n.guid = ce.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (s = v.handle) || (s = v.handle = function(e) {
                    return void 0 !== ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(O) || [""]).length; l--; )
                    h = g = (a = Oe.exec(e[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h && (f = ce.event.special[h] || {},
                    h = (i ? f.delegateType : f.bindType) || h,
                    f = ce.event.special[h] || {},
                    c = ce.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ce.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (d = u[h]) || ((d = u[h] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(h, s)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    ce.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, h, p, g, v = z.hasData(e) && z.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--; )
                    if (h = g = (a = Oe.exec(t[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (f = ce.event.special[h] || {},
                        d = u[h = (r ? f.delegateType : f.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length; o--; )
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || ce.removeEvent(e, h, v.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            ce.event.remove(e, h + t[l], n, r, !0);
                ce.isEmptyObject(u) && z.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = new Array(arguments.length), u = ce.event.fix(e), l = (z.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {};
            for (a[0] = u,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (s = ce.event.handlers.call(this, u, l),
                t = 0; (i = s[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return be.test(t.type) && t.click && fe(t, "input") && $e(t, "click", !0),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return be.test(t.type) && t.click && fe(t, "input") && $e(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return be.test(t.type) && t.click && fe(t, "input") && z.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ce.Event = function(e, t) {
        if (!(this instanceof ce.Event))
            return new ce.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ce.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[ce.expando] = !0
    }
    ,
    ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ae,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ae,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ae,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp),
    ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (x.documentMode) {
                var t = z.get(this, "handle")
                  , n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur",
                n.isSimulated = !0,
                t(e),
                n.target === n.currentTarget && t(n)
            } else
                ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if ($e(this, r, !0),
                !x.documentMode)
                    return !1;
                (e = z.get(this, i)) || this.addEventListener(i, o),
                z.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return $e(this, r),
                !0
            },
            teardown: function() {
                var e;
                if (!x.documentMode)
                    return !1;
                (e = z.get(this, i) - 1) ? z.set(this, i, e) : (this.removeEventListener(i, o),
                z.remove(this, i))
            },
            _default: function(e) {
                return z.get(e.target, r)
            },
            delegateType: i
        },
        ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = x.documentMode ? this : e
                  , n = z.get(t, i);
                n || (x.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)),
                z.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = x.documentMode ? this : e
                  , n = z.get(t, i) - 1;
                n ? z.set(t, i, n) : (x.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0),
                z.remove(t, i))
            }
        }
    }),
    ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    ce.fn.extend({
        on: function(e, t, n, r) {
            return je(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return je(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Ee),
                this.each(function() {
                    ce.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Ne = /<script|<style|<link/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ye = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Le(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function We(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
            if (z.hasData(e) && (a = z.get(e).events))
                for (i in z.remove(t, "handle events"),
                a)
                    for (n = 0,
                    r = a[i].length; n < r; n++)
                        ce.event.add(t, i, a[i][n]);
            U.hasData(e) && (o = U.access(e),
            s = ce.extend({}, o),
            U.set(t, s))
        }
    }
    function Ie(n, r, i, o) {
        r = g(r);
        var e, t, s, a, u, l, c = 0, f = n.length, d = f - 1, h = r[0], p = v(h);
        if (p || 1 < f && "string" == typeof h && !le.checkClone && Pe.test(h))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (r[0] = h.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = Me(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = ce.map(Te(e, "script"), He)).length; c < f; c++)
                u = e,
                c !== d && (u = ce.clone(u, !0, !0),
                a && ce.merge(s, Te(u, "script"))),
                i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                ce.map(s, Re),
                c = 0; c < a; c++)
                    u = s[c],
                    xe.test(u.type || "") && !z.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : m(u.textContent.replace(Ye, ""), u, l))
        }
        return n
    }
    function Fe(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ce.cleanData(Te(r)),
            r.parentNode && (n && J(r) && Ce(Te(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0), f = J(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (s = Te(c),
                r = 0,
                i = (o = Te(e)).length; r < i; r++)
                    a = o[r],
                    "input" === (l = (u = s[r]).nodeName.toLowerCase()) && be.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || Te(e),
                    s = s || Te(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        We(o[r], s[r]);
                else
                    We(e, c);
            return 0 < (s = Te(c, "script")).length && Ce(s, !f && Te(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (I(n)) {
                    if (t = n[z.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[z.expando] = void 0
                    }
                    n[U.expando] && (n[U.expando] = void 0)
                }
        }
    }),
    ce.fn.extend({
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return Y(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ce.cleanData(Te(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return Y(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Se[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (ce.cleanData(Te(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Te(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                ce(r[o])[s](t),
                a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ze = new RegExp("^(" + V + ")(?!px)[a-z%]+$","i")
      , Ue = /^--/
      , qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = ie),
        t.getComputedStyle(e)
    }
      , Be = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ge = new RegExp(Z.join("|"),"i");
    function Ve(e, t, n) {
        var r, i, o, s, a = Ue.test(t), u = e.style;
        return (n = n || qe(e)) && (s = n.getPropertyValue(t) || n[t],
        a && s && (s = s.replace(ve, "$1") || void 0),
        "" !== s || J(e) || (s = ce.style(e, t)),
        !le.pixelBoxStyles() && ze.test(s) && Ge.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = s,
        s = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Xe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                K.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                K.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, s, a, u = x.createElement("div"), l = x.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        le.clearCloneStyle = "content-box" === l.style.backgroundClip,
        ce.extend(le, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == s && (e = x.createElement("table"),
                t = x.createElement("tr"),
                n = x.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                K.appendChild(e).appendChild(t).appendChild(n),
                r = ie.getComputedStyle(t),
                s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                K.removeChild(e)),
                s
            }
        }))
    }();
    var Ze = ["Webkit", "Moz", "ms"]
      , Ke = x.createElement("div").style
      , Je = {};
    function Qe(e) {
        return ce.cssProps[e] || Je[e] || (e in Ke ? e : Je[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--; )
                if ((e = Ze[n] + t)in Ke)
                    return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/
      , tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , nt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var r = X.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , u = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += ce.css(e, n + Z[s], !0, i)),
            r ? ("content" === n && (u -= ce.css(e, "padding" + Z[s], !0, i)),
            "margin" !== n && (u -= ce.css(e, "border" + Z[s] + "Width", !0, i))) : (u += ce.css(e, "padding" + Z[s], !0, i),
            "padding" !== n ? u += ce.css(e, "border" + Z[s] + "Width", !0, i) : a += ce.css(e, "border" + Z[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0),
        u + l
    }
    function ot(e, t, n) {
        var r = qe(e)
          , i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r)
          , o = i
          , s = Ve(e, t, r)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }
    function st(e, t, n, r, i) {
        return new st.prototype.init(e,t,n,r,i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ve(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = W(t), u = Ue.test(t), l = e.style;
                if (u || (t = Qe(a)),
                s = ce.cssHooks[t] || ce.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = X.exec(n)) && i[1] && (n = te(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[a] ? "" : "px")),
                le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = W(t);
            return Ue.test(t) || (t = Qe(a)),
            (s = ce.cssHooks[t] || ce.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = Ve(e, t, r)),
            "normal" === i && t in nt && (i = nt[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Be(e, tt, function() {
                        return ot(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = qe(e), o = !le.scrollboxSize() && "absolute" === i.position, s = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), a = n ? it(e, u, n, s, i) : 0;
                return s && o && (a -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)),
                a && (r = X.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = ce.css(e, u)),
                rt(0, t, a)
            }
        }
    }),
    ce.cssHooks.marginLeft = Xe(le.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }),
    ce.fn.extend({
        css: function(e, t) {
            return Y(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = qe(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = ce.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((ce.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ce.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : st.propHooks._default.set(this),
            this
        }
    }).init.prototype = st.prototype,
    (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ce.fx = st.prototype.init,
    ce.fx.step = {};
    var at, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;
    function ht() {
        ut && (!1 === x.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(ht) : ie.setTimeout(ht, ce.fx.interval),
        ce.fx.tick())
    }
    function pt() {
        return ie.setTimeout(function() {
            at = void 0
        }),
        at = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function yt(o, e, t) {
        var n, s, r = 0, i = yt.prefilters.length, a = ce.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var e = at || pt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return a.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || a.notifyWith(o, [l, 1, 0]),
            a.resolveWith(o, [l]),
            !1)
        }, l = a.promise({
            elem: o,
            props: ce.extend({}, e),
            opts: ce.extend(!0, {
                specialEasing: {},
                easing: ce.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: at || pt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (a.notifyWith(o, [l, 1, 0]),
                a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = W(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (s = ce.cssHooks[r]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts))
                return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return ce.map(c, vt, l),
        v(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, X.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = v(e) ? (t = e,
            ["*"]) : e.match(O)).length; r < i; r++)
                n = e[r],
                yt.tweeners[n] = yt.tweeners[n] || [],
                yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, u, l, c, f = "width"in t || "height"in t, d = this, h = {}, p = e.style, g = e.nodeType && ee(e), v = z.get(e, "fxshow");
            for (r in n.queue || (null == (s = ce._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    ce.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ft.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    h[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (l = v && v.display) && (l = z.get(e, "display")),
                "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0),
                l = e.style.display || l,
                c = ce.css(e, "display"),
                re([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (d.done(function() {
                    p.display = l
                }),
                null == l && (c = p.display,
                l = "none" === c ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                d.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                u = !1,
                h)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = z.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && re([e], !0),
                    d.done(function() {
                        for (r in g || re([e]),
                        z.remove(e, "fxshow"),
                        h)
                            ce.style(e, r, h[r])
                    })),
                    u = vt(g ? v[r] : 0, r, d),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
    ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            v(r.old) && r.old.call(this),
            r.queue && ce.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t)
              , o = ce.speed(e, n, r)
              , s = function() {
                var e = yt(this, ce.extend({}, t), o);
                (i || z.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = ce.timers
                  , r = z.get(this);
                if (t)
                    r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && dt.test(t) && s(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = z.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = ce.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                ce.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }),
    ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    ce.timers = [],
    ce.fx.tick = function() {
        var e, t = 0, n = ce.timers;
        for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(),
        at = void 0
    }
    ,
    ce.fx.timer = function(e) {
        ce.timers.push(e),
        ce.fx.start()
    }
    ,
    ce.fx.interval = 13,
    ce.fx.start = function() {
        ut || (ut = !0,
        ht())
    }
    ,
    ce.fx.stop = function() {
        ut = null
    }
    ,
    ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }
    ,
    lt = x.createElement("input"),
    ct = x.createElement("select").appendChild(x.createElement("option")),
    lt.type = "checkbox",
    le.checkOn = "" !== lt.value,
    le.optSelected = ct.selected,
    (lt = x.createElement("input")).value = "t",
    lt.type = "radio",
    le.radioValue = "t" === lt.value;
    var mt, _t = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return Y(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }),
    ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)),
                void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = _t[t] || ce.find.attr;
        _t[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = _t[o],
            _t[o] = r,
            r = null != s(e, t, n) ? o : null,
            _t[o] = i),
            r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i
      , bt = /^(?:a|area)$/i;
    function kt(e) {
        return (e.match(O) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function St(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return Y(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }),
    ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t,
                i = ce.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }),
    ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, xt(this)))
            }) : (e = St(t)).length ? this.each(function() {
                if (r = xt(this),
                n = 1 === this.nodeType && " " + kt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    s = kt(n),
                    r !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, xt(this)))
            }) : arguments.length ? (e = St(t)).length ? this.each(function() {
                if (r = xt(this),
                n = 1 === this.nodeType && " " + kt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (i = e[o]; -1 < n.indexOf(" " + i + " "); )
                            n = n.replace(" " + i + " ", " ");
                    s = kt(n),
                    r !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, s = typeof t, a = "string" == s || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, xt(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = St(t),
            this.each(function() {
                if (a)
                    for (o = ce(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" != s || ((r = xt(this)) && z.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : z.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + kt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Tt, "") : null == e ? "" : e : void 0
        }
    }),
    ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : kt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ce.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        },
        le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Ct = ie.location
      , Dt = {
        guid: Date.now()
    }
      , Mt = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Ot = /^(?:focusinfocus|focusoutblur)$/
      , At = function(e) {
        e.stopPropagation()
    };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f, d = [n || x], h = ue.call(e, "type") ? e.type : e, p = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || x,
            3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(h + ce.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(),
            p.sort()),
            u = h.indexOf(":") < 0 && "on" + h,
            (e = e[ce.expando] ? e : new ce.Event(h,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : ce.makeArray(t, [e]),
            c = ce.event.special[h] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (a = c.delegateType || h,
                    Ot.test(a + h) || (o = o.parentNode); o; o = o.parentNode)
                        d.push(o),
                        s = o;
                    s === (n.ownerDocument || x) && d.push(s.defaultView || s.parentWindow || ie)
                }
                for (i = 0; (o = d[i++]) && !e.isPropagationStopped(); )
                    f = o,
                    e.type = 1 < i ? a : c.bindType || h,
                    (l = (z.get(o, "events") || Object.create(null))[e.type] && z.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && I(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = h,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !I(n) || u && v(n[h]) && !y(n) && ((s = n[u]) && (n[u] = null),
                ce.event.triggered = h,
                e.isPropagationStopped() && f.addEventListener(h, At),
                n[h](),
                e.isPropagationStopped() && f.removeEventListener(h, At),
                ce.event.triggered = void 0,
                s && (n[u] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }),
    ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ce.event.trigger(e, t, n, !0)
        }
    });
    var Et = /\[\]$/
      , jt = /\r?\n/g
      , $t = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            ce.each(e, function(e, t) {
                r || Et.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== _(e))
            i(n, e);
        else
            for (t in e)
                Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e))
            ce.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Pt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Nt.test(this.nodeName) && !$t.test(e) && (this.checked || !be.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Yt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Wt = /^(?:GET|HEAD)$/
      , It = /^\/\//
      , Ft = {}
      , zt = {}
      , Ut = "*/".concat("*")
      , qt = x.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(O) || [];
            if (v(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Gt(t, i, o, s) {
        var a = {}
          , u = t === zt;
        function l(e) {
            var r;
            return a[e] = !0,
            ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }
    function Vt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r),
        e
    }
    qt.href = Ct.href,
    ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, ce.ajaxSettings), t) : Vt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Ft),
        ajaxTransport: Bt(zt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, d, n, h, r, p, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, _ = ce.Deferred(), w = ce.Callbacks("once memory"), b = v.statusCode || {}, s = {}, a = {}, u = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Rt.exec(d); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (p)
                            k.always(e[k.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (_.promise(k),
            v.url = ((e || v.url || Ct.href) + "").replace(It, Ct.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(O) || [""],
            null == v.crossDomain) {
                r = x.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = qt.protocol + "//" + qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)),
            Gt(Ft, v, t, k),
            p)
                return k;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Wt.test(v.type),
            f = v.url.replace(Lt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Yt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Mt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ht, "$1"),
            o = (Mt.test(f) ? "&" : "?") + "_=" + Dt.guid++ + o),
            v.url = f + o),
            v.ifModified && (ce.lastModified[f] && k.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
            ce.etag[f] && k.setRequestHeader("If-None-Match", ce.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && k.setRequestHeader("Content-Type", v.contentType),
            k.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                k.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, k, v) || p))
                return k.abort();
            if (u = "abort",
            w.add(v.complete),
            k.done(v.success),
            k.fail(v.error),
            c = Gt(zt, v, t, k)) {
                if (k.readyState = 1,
                g && m.trigger("ajaxSend", [k, v]),
                p)
                    return k;
                v.async && 0 < v.timeout && (h = ie.setTimeout(function() {
                    k.abort("timeout")
                }, v.timeout));
                try {
                    p = !1,
                    c.send(s, l)
                } catch (e) {
                    if (p)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, s, a, u, l = t;
                p || (p = !0,
                h && ie.clearTimeout(h),
                c = void 0,
                d = r || "",
                k.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, k, n)),
                !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                a = function(e, t, n, r) {
                    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(s = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                            !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, a, k, i),
                i ? (v.ifModified && ((u = k.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u),
                (u = k.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state,
                o = a.data,
                i = !(s = a.error))) : (s = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                k.status = e,
                k.statusText = (t || l) + "",
                i ? _.resolveWith(y, [o, l, k]) : _.rejectWith(y, [k, l, s]),
                k.statusCode(b),
                b = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [k, v, i ? o : s]),
                w.fireWith(y, [k, l]),
                g && (m.trigger("ajaxComplete", [k, v]),
                --ce.active || ce.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }),
    ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n,
            n = t,
            t = void 0),
            ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }),
    ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }
    ,
    ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])),
            t = ce(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }
    ,
    ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Xt = {
        0: 200,
        1223: 204
    }
      , Zt = ce.ajaxSettings.xhr();
    le.cors = !!Zt && "withCredentials"in Zt,
    le.ajax = Zt = !!Zt,
    ce.ajaxTransport(function(i) {
        var o, s;
        if (le.cors || Zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Xt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    s = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && ie.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e),
                e
            }
        }
    }),
    ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    x.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Kt, Jt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Jt.pop() || ce.expando + "_" + Dt.guid++;
            return this[e] = !0,
            e
        }
    }),
    ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || ce.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = ie[r],
            ie[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? ce(ie).removeProp(r) : ie[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Jt.push(r)),
                o && v(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    le.createHTMLDocument = ((Kt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Kt.childNodes.length),
    ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (le.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href,
        t.head.appendChild(r)) : t = x),
        o = !n && [],
        (i = b.exec(e)) ? [t.createElement(i[1])] : (i = Me([e], t, o),
        o && o.length && ce(o).remove(),
        ce.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    ce.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return -1 < a && (r = kt(e.slice(a)),
        e = e.slice(0, a)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = ce.css(e, "position"), c = ce(e), f = {};
            "static" === l && (e.style.position = "relative"),
            a = c.offset(),
            o = ce.css(e, "top"),
            u = ce.css(e, "left"),
            i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top,
            r.left) : (s = parseFloat(o) || 0,
            parseFloat(u) || 0),
            v(t) && (t = t.call(e, n, ce.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    ce.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ce.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === ce.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0),
                    i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ce.css(e, "position"); )
                    e = e.offsetParent;
                return e || K
            })
        }
    }),
    ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return Y(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Xe(le.pixelPosition, function(e, t) {
            if (t)
                return t = Ve(e, n),
                ze.test(t) ? ce(e).position()[n] + "px" : t
        })
    }),
    ce.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        ce.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return Y(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        v(e))
            return r = se.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(se.call(arguments)))
            }
            ).guid = e.guid = e.guid || ce.guid++,
            i
    }
    ,
    ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }
    ,
    ce.isArray = Array.isArray,
    ce.parseJSON = JSON.parse,
    ce.nodeName = fe,
    ce.isFunction = v,
    ce.isWindow = y,
    ce.camelCase = W,
    ce.type = _,
    ce.now = Date.now,
    ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery
      , nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
    }
    ,
    void 0 === e && (ie.jQuery = ie.$ = ce),
    ce
}),
function() {
    function ts(e, t) {
        return e.set(t[0], t[1]),
        e
    }
    function ns(e, t) {
        return e.add(t),
        e
    }
    function rs(e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    function is(e, t, n, r) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
            var s = e[i];
            t(r, s, n(s), e)
        }
        return r
    }
    function os(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
            ;
        return e
    }
    function ss(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
            ;
        return e
    }
    function as(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (!t(e[n], n, e))
                return !1;
        return !0
    }
    function us(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
            var s = e[n];
            t(s, n, e) && (o[i++] = s)
        }
        return o
    }
    function ls(e, t) {
        return !!(null == e ? 0 : e.length) && -1 < ms(e, t, 0)
    }
    function cs(e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
            if (n(t, e[r]))
                return !0;
        return !1
    }
    function fs(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
            i[n] = t(e[n], n, e);
        return i
    }
    function ds(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; )
            e[i + n] = t[n];
        return e
    }
    function hs(e, t, n, r) {
        var i = -1
          , o = null == e ? 0 : e.length;
        for (r && o && (n = e[++i]); ++i < o; )
            n = t(n, e[i], i, e);
        return n
    }
    function ps(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        for (r && i && (n = e[--i]); i--; )
            n = t(n, e[i], i, e);
        return n
    }
    function gs(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e))
                return !0;
        return !1
    }
    function vs(e, r, t) {
        var i;
        return t(e, function(e, t, n) {
            if (r(e, t, n))
                return i = t,
                !1
        }),
        i
    }
    function ys(e, t, n, r) {
        for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (t(e[o], o, e))
                return o;
        return -1
    }
    function ms(e, t, n) {
        return t == t ? function(e, t, n) {
            for (var r = n - 1, i = e.length; ++r < i; )
                if (e[r] === t)
                    return r;
            return -1
        }(e, t, n) : ys(e, ws, n)
    }
    function _s(e, t, n, r) {
        for (var i = n - 1, o = e.length; ++i < o; )
            if (r(e[i], t))
                return i;
        return -1
    }
    function ws(e) {
        return e != e
    }
    function bs(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? Ss(e, t) / n : qs
    }
    function ks(t) {
        return function(e) {
            return null == e ? Rs : e[t]
        }
    }
    function e(t) {
        return function(e) {
            return null == t ? Rs : t[e]
        }
    }
    function xs(e, r, i, o, t) {
        return t(e, function(e, t, n) {
            i = o ? (o = !1,
            e) : r(i, e, t, n)
        }),
        i
    }
    function Ss(e, t) {
        for (var n, r = -1, i = e.length; ++r < i; ) {
            var o = t(e[r]);
            o !== Rs && (n = n === Rs ? o : n + o)
        }
        return n
    }
    function Ts(e, t) {
        for (var n = -1, r = Array(e); ++n < e; )
            r[n] = t(n);
        return r
    }
    function Cs(t) {
        return function(e) {
            return t(e)
        }
    }
    function Ds(t, e) {
        return fs(e, function(e) {
            return t[e]
        })
    }
    function Ms(e, t) {
        return e.has(t)
    }
    function Os(e, t) {
        for (var n = -1, r = e.length; ++n < r && -1 < ms(t, e[n], 0); )
            ;
        return n
    }
    function As(e, t) {
        for (var n = e.length; n-- && -1 < ms(t, e[n], 0); )
            ;
        return n
    }
    function Es(e) {
        return "\\" + $[e]
    }
    function js(e) {
        return j.test(e)
    }
    function $s(e) {
        var n = -1
          , r = Array(e.size);
        return e.forEach(function(e, t) {
            r[++n] = [t, e]
        }),
        r
    }
    function Ns(t, n) {
        return function(e) {
            return t(n(e))
        }
    }
    function Ps(e, t) {
        for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
            var s = e[n];
            s !== t && s !== Fs || (e[n] = Fs,
            o[i++] = n)
        }
        return o
    }
    function Ys(e) {
        var t = -1
          , n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }),
        n
    }
    function Ls(e) {
        return js(e) ? function(e) {
            for (var t = E.lastIndex = 0; E.test(e); )
                ++t;
            return t
        }(e) : W(e)
    }
    function Hs(e) {
        return js(e) ? function(e) {
            return e.match(E) || []
        }(e) : function(e) {
            return e.split("")
        }(e)
    }
    var Rs, Ws = "Expected a function", Is = "__lodash_hash_undefined__", Fs = "__lodash_placeholder__", zs = 128, Us = 9007199254740991, qs = NaN, Bs = 4294967295, Gs = [["ary", zs], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], Vs = "[object Arguments]", Xs = "[object Array]", Zs = "[object Boolean]", Ks = "[object Date]", Js = "[object Error]", Qs = "[object Function]", ea = "[object GeneratorFunction]", ta = "[object Map]", na = "[object Number]", ra = "[object Object]", ia = "[object Promise]", oa = "[object RegExp]", sa = "[object Set]", aa = "[object String]", ua = "[object Symbol]", la = "[object WeakMap]", ca = "[object ArrayBuffer]", fa = "[object DataView]", da = "[object Float32Array]", ha = "[object Float64Array]", pa = "[object Int8Array]", ga = "[object Int16Array]", va = "[object Int32Array]", ya = "[object Uint8Array]", ma = "[object Uint8ClampedArray]", _a = "[object Uint16Array]", wa = "[object Uint32Array]", ba = /\b__p \+= '';/g, ka = /\b(__p \+=) '' \+/g, xa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sa = /&(?:amp|lt|gt|quot|#39);/g, Ta = /[&<>"']/g, Ca = RegExp(Sa.source), Da = RegExp(Ta.source), Ma = /<%-([\s\S]+?)%>/g, Oa = /<%([\s\S]+?)%>/g, Aa = /<%=([\s\S]+?)%>/g, Ea = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ja = /^\w*$/, $a = /^\./, Na = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pa = /[\\^$.*+?()[\]{}|]/g, Ya = RegExp(Pa.source), La = /^\s+|\s+$/g, Ha = /^\s+/, Ra = /\s+$/, Wa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ia = /\{\n\/\* \[wrapped with (.+)\] \*/, Fa = /,? & /, za = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ua = /\\(\\)?/g, qa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ba = /\w*$/, Ga = /^[-+]0x[0-9a-f]+$/i, Va = /^0b[01]+$/i, Xa = /^\[object .+?Constructor\]$/, Za = /^0o[0-7]+$/i, Ka = /^(?:0|[1-9]\d*)$/, Ja = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qa = /($^)/, eu = /['\n\r\u2028\u2029\\]/g, t = "\\ud800-\\udfff", n = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", r = "\\u2700-\\u27bf", i = "a-z\\xdf-\\xf6\\xf8-\\xff", o = "A-Z\\xc0-\\xd6\\xd8-\\xde", s = "\\ufe0e\\ufe0f", a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", u = "['’]", l = "[" + t + "]", c = "[" + a + "]", f = "[" + n + "]", d = "\\d+", h = "[" + r + "]", p = "[" + i + "]", g = "[^" + t + a + d + r + i + o + "]", v = "\\ud83c[\\udffb-\\udfff]", y = "[^" + t + "]", m = "(?:\\ud83c[\\udde6-\\uddff]){2}", _ = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "[" + o + "]", b = "\\u200d", k = "(?:" + p + "|" + g + ")", x = "(?:" + w + "|" + g + ")", S = "(?:['’](?:d|ll|m|re|s|t|ve))?", T = "(?:['’](?:D|LL|M|RE|S|T|VE))?", C = "(?:" + f + "|" + v + ")" + "?", D = "[" + s + "]?", M = D + C + ("(?:" + b + "(?:" + [y, m, _].join("|") + ")" + D + C + ")*"), O = "(?:" + [h, m, _].join("|") + ")" + M, A = "(?:" + [y + f + "?", f, m, _, l].join("|") + ")", tu = RegExp(u, "g"), nu = RegExp(f, "g"), E = RegExp(v + "(?=" + v + ")|" + A + M, "g"), ru = RegExp([w + "?" + p + "+" + S + "(?=" + [c, w, "$"].join("|") + ")", x + "+" + T + "(?=" + [c, w + k, "$"].join("|") + ")", w + "?" + k + "+" + S, w + "+" + T, "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", d, O].join("|"), "g"), j = RegExp("[" + b + t + n + s + "]"), iu = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ou = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], su = -1, au = {};
    au[da] = au[ha] = au[pa] = au[ga] = au[va] = au[ya] = au[ma] = au[_a] = au[wa] = !0,
    au[Vs] = au[Xs] = au[ca] = au[Zs] = au[fa] = au[Ks] = au[Js] = au[Qs] = au[ta] = au[na] = au[ra] = au[oa] = au[sa] = au[aa] = au[la] = !1;
    var uu = {};
    uu[Vs] = uu[Xs] = uu[ca] = uu[fa] = uu[Zs] = uu[Ks] = uu[da] = uu[ha] = uu[pa] = uu[ga] = uu[va] = uu[ta] = uu[na] = uu[ra] = uu[oa] = uu[sa] = uu[aa] = uu[ua] = uu[ya] = uu[ma] = uu[_a] = uu[wa] = !0,
    uu[Js] = uu[Qs] = uu[la] = !1;
    var $ = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , lu = parseFloat
      , cu = parseInt
      , N = "object" == typeof global && global && global.Object === Object && global
      , P = "object" == typeof self && self && self.Object === Object && self
      , fu = N || P || Function("return this")()
      , Y = "object" == typeof exports && exports && !exports.nodeType && exports
      , L = Y && "object" == typeof module && module && !module.nodeType && module
      , du = L && L.exports === Y
      , H = du && N.process
      , R = function() {
        try {
            return H && H.binding && H.binding("util")
        } catch (e) {}
    }()
      , hu = R && R.isArrayBuffer
      , pu = R && R.isDate
      , gu = R && R.isMap
      , vu = R && R.isRegExp
      , yu = R && R.isSet
      , mu = R && R.isTypedArray
      , W = ks("length")
      , _u = e({
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
    })
      , wu = e({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })
      , bu = e({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    })
      , ku = function e(t) {
        function v(e) {
            if (ln(e) && !no(e) && !(e instanceof m)) {
                if (e instanceof y)
                    return e;
                if (Qn.call(e, "__wrapped__"))
                    return Nt(e)
            }
            return new y(e)
        }
        function o() {}
        function y(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = Rs
        }
        function m(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = Bs,
            this.__views__ = []
        }
        function n(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function i(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function a(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function _(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.__data__ = new a; ++t < n; )
                this.add(e[t])
        }
        function w(e) {
            var t = this.__data__ = new i(e);
            this.size = t.size
        }
        function r(e, t) {
            var n = no(e)
              , r = !n && to(e)
              , i = !n && !r && io(e)
              , o = !n && !r && !i && lo(e)
              , s = n || r || i || o
              , a = s ? Ts(e.length, Bn) : []
              , u = a.length;
            for (var l in e)
                !t && !Qn.call(e, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || wt(l, u)) || a.push(l);
            return a
        }
        function s(e) {
            var t = e.length;
            return t ? e[oe(0, t - 1)] : Rs
        }
        function u(e, t) {
            return Et(Ye(e), p(t, 0, e.length))
        }
        function l(e) {
            return Et(Ye(e))
        }
        function g(e, t, n) {
            (n === Rs || en(e[t], n)) && (n !== Rs || t in e) || d(e, t, n)
        }
        function b(e, t, n) {
            var r = e[t];
            Qn.call(e, t) && en(r, n) && (n !== Rs || t in e) || d(e, t, n)
        }
        function c(e, t) {
            for (var n = e.length; n--; )
                if (en(e[n][0], t))
                    return n;
            return -1
        }
        function f(e, r, i, o) {
            return Kr(e, function(e, t, n) {
                r(o, e, i(e), n)
            }),
            o
        }
        function k(e, t) {
            return e && Le(t, xn(t), e)
        }
        function d(e, t, n) {
            "__proto__" == t && yr ? yr(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        function h(e, t) {
            for (var n = -1, r = t.length, i = Rn(r), o = null == e; ++n < r; )
                i[n] = o ? Rs : bn(e, t[n]);
            return i
        }
        function p(e, t, n) {
            return e == e && (n !== Rs && (e = e <= n ? e : n),
            t !== Rs && (e = t <= e ? e : t)),
            e
        }
        function x(n, r, i, e, t, o) {
            var s, a = 1 & r, u = 2 & r, l = 4 & r;
            if (i && (s = t ? i(n, e, t, o) : i(n)),
            s !== Rs)
                return s;
            if (!un(n))
                return n;
            var c = no(n);
            if (c) {
                if (s = function(e) {
                    var t = e.length
                      , n = e.constructor(t);
                    return t && "string" == typeof e[0] && Qn.call(e, "index") && (n.index = e.index,
                    n.input = e.input),
                    n
                }(n),
                !a)
                    return Ye(n, s)
            } else {
                var f = li(n)
                  , d = f == Qs || f == ea;
                if (io(n))
                    return Ae(n, a);
                if (f == ra || f == Vs || d && !t) {
                    if (s = u || d ? {} : mt(n),
                    !a)
                        return u ? function(e, t) {
                            return Le(e, ui(e), t)
                        }(n, function(e, t) {
                            return e && Le(t, Sn(t), e)
                        }(s, n)) : function(e, t) {
                            return Le(e, ai(e), t)
                        }(n, k(s, n))
                } else {
                    if (!uu[f])
                        return t ? n : {};
                    s = function(e, t, n, r) {
                        var i = e.constructor;
                        switch (t) {
                        case ca:
                            return Ee(e);
                        case Zs:
                        case Ks:
                            return new i(+e);
                        case fa:
                            return function(e, t) {
                                var n = t ? Ee(e.buffer) : e.buffer;
                                return new e.constructor(n,e.byteOffset,e.byteLength)
                            }(e, r);
                        case da:
                        case ha:
                        case pa:
                        case ga:
                        case va:
                        case ya:
                        case ma:
                        case _a:
                        case wa:
                            return je(e, r);
                        case ta:
                            return function(e, t, n) {
                                return hs(t ? n($s(e), 1) : $s(e), ts, new e.constructor)
                            }(e, r, n);
                        case na:
                        case aa:
                            return new i(e);
                        case oa:
                            return function(e) {
                                var t = new e.constructor(e.source,Ba.exec(e));
                                return t.lastIndex = e.lastIndex,
                                t
                            }(e);
                        case sa:
                            return function(e, t, n) {
                                return hs(t ? n(Ys(e), 1) : Ys(e), ns, new e.constructor)
                            }(e, r, n);
                        case ua:
                            return function(e) {
                                return Vr ? Un(Vr.call(e)) : {}
                            }(e)
                        }
                    }(n, f, x, a)
                }
            }
            o || (o = new w);
            var h = o.get(n);
            if (h)
                return h;
            o.set(n, s);
            var p = c ? Rs : (l ? u ? ct : lt : u ? Sn : xn)(n);
            return os(p || n, function(e, t) {
                p && (e = n[t = e]),
                b(s, t, x(e, r, i, t, n, o))
            }),
            s
        }
        function S(e, t, n) {
            var r = n.length;
            if (null == e)
                return !r;
            for (e = Un(e); r--; ) {
                var i = n[r]
                  , o = t[i]
                  , s = e[i];
                if (s === Rs && !(i in e) || !o(s))
                    return !1
            }
            return !0
        }
        function T(e, t, n) {
            if ("function" != typeof e)
                throw new Gn(Ws);
            return pi(function() {
                e.apply(Rs, n)
            }, t)
        }
        function C(e, t, n, r) {
            var i = -1
              , o = ls
              , s = !0
              , a = e.length
              , u = []
              , l = t.length;
            if (!a)
                return u;
            n && (t = fs(t, Cs(n))),
            r ? (o = cs,
            s = !1) : 200 <= t.length && (o = Ms,
            s = !1,
            t = new _(t));
            e: for (; ++i < a; ) {
                var c = e[i]
                  , f = null == n ? c : n(c);
                if (c = r || 0 !== c ? c : 0,
                s && f == f) {
                    for (var d = l; d--; )
                        if (t[d] === f)
                            continue e;
                    u.push(c)
                } else
                    o(t, f, r) || u.push(c)
            }
            return u
        }
        function D(e, r) {
            var i = !0;
            return Kr(e, function(e, t, n) {
                return i = !!r(e, t, n)
            }),
            i
        }
        function M(e, t, n) {
            for (var r = -1, i = e.length; ++r < i; ) {
                var o = e[r]
                  , s = t(o);
                if (null != s && (a === Rs ? s == s && !hn(s) : n(s, a)))
                    var a = s
                      , u = o
            }
            return u
        }
        function O(e, r) {
            var i = [];
            return Kr(e, function(e, t, n) {
                r(e, t, n) && i.push(e)
            }),
            i
        }
        function A(e, t, n, r, i) {
            var o = -1
              , s = e.length;
            for (n || (n = _t),
            i || (i = []); ++o < s; ) {
                var a = e[o];
                0 < t && n(a) ? 1 < t ? A(a, t - 1, n, r, i) : ds(i, a) : r || (i[i.length] = a)
            }
            return i
        }
        function E(e, t) {
            return e && Qr(e, t, xn)
        }
        function j(e, t) {
            return e && ei(e, t, xn)
        }
        function $(t, e) {
            return us(e, function(e) {
                return on(t[e])
            })
        }
        function N(e, t) {
            for (var n = 0, r = (t = Me(t, e)).length; null != e && n < r; )
                e = e[jt(t[n++])];
            return n && n == r ? e : Rs
        }
        function P(e, t, n) {
            var r = t(e);
            return no(e) ? r : ds(r, n(e))
        }
        function Y(e) {
            return null == e ? e === Rs ? "[object Undefined]" : "[object Null]" : vr && vr in Un(e) ? function(e) {
                var t = Qn.call(e, vr)
                  , n = e[vr];
                try {
                    e[vr] = Rs;
                    var r = !0
                } catch (e) {}
                var i = nr.call(e);
                return r && (t ? e[vr] = n : delete e[vr]),
                i
            }(e) : function(e) {
                return nr.call(e)
            }(e)
        }
        function L(e, t) {
            return t < e
        }
        function H(e, t) {
            return null != e && Qn.call(e, t)
        }
        function R(e, t) {
            return null != e && t in Un(e)
        }
        function W(e, t, n) {
            for (var r = n ? cs : ls, i = e[0].length, o = e.length, s = o, a = Rn(o), u = 1 / 0, l = []; s--; ) {
                var c = e[s];
                s && t && (c = fs(c, Cs(t))),
                u = Or(c.length, u),
                a[s] = !n && (t || 120 <= i && 120 <= c.length) ? new _(s && c) : Rs
            }
            c = e[0];
            var f = -1
              , d = a[0];
            e: for (; ++f < i && l.length < u; ) {
                var h = c[f]
                  , p = t ? t(h) : h;
                if (h = n || 0 !== h ? h : 0,
                !(d ? Ms(d, p) : r(l, p, n))) {
                    for (s = o; --s; ) {
                        var g = a[s];
                        if (!(g ? Ms(g, p) : r(e[s], p, n)))
                            continue e
                    }
                    d && d.push(p),
                    l.push(h)
                }
            }
            return l
        }
        function I(e, t, n) {
            var r = null == (e = Mt(e, t = Me(t, e))) ? e : e[jt(Rt(t))];
            return null == r ? Rs : rs(r, e, n)
        }
        function F(e) {
            return ln(e) && Y(e) == Vs
        }
        function z(e, t, n, r, i) {
            return e === t || (null == e || null == t || !ln(e) && !ln(t) ? e != e && t != t : function(e, t, n, r, i, o) {
                var s = no(e)
                  , a = no(t)
                  , u = s ? Xs : li(e)
                  , l = a ? Xs : li(t)
                  , c = (u = u == Vs ? ra : u) == ra
                  , f = (l = l == Vs ? ra : l) == ra
                  , d = u == l;
                if (d && io(e)) {
                    if (!io(t))
                        return !1;
                    c = !(s = !0)
                }
                if (d && !c)
                    return o || (o = new w),
                    s || lo(e) ? at(e, t, n, r, i, o) : function(e, t, n, r, i, o, s) {
                        switch (n) {
                        case fa:
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                return !1;
                            e = e.buffer,
                            t = t.buffer;
                        case ca:
                            return !(e.byteLength != t.byteLength || !o(new ur(e), new ur(t)));
                        case Zs:
                        case Ks:
                        case na:
                            return en(+e, +t);
                        case Js:
                            return e.name == t.name && e.message == t.message;
                        case oa:
                        case aa:
                            return e == t + "";
                        case ta:
                            var a = $s;
                        case sa:
                            var u = 1 & r;
                            if (a || (a = Ys),
                            e.size != t.size && !u)
                                return !1;
                            var l = s.get(e);
                            if (l)
                                return l == t;
                            r |= 2,
                            s.set(e, t);
                            var c = at(a(e), a(t), r, i, o, s);
                            return s.delete(e),
                            c;
                        case ua:
                            if (Vr)
                                return Vr.call(e) == Vr.call(t)
                        }
                        return !1
                    }(e, t, u, n, r, i, o);
                if (!(1 & n)) {
                    var h = c && Qn.call(e, "__wrapped__")
                      , p = f && Qn.call(t, "__wrapped__");
                    if (h || p) {
                        var g = h ? e.value() : e
                          , v = p ? t.value() : t;
                        return o || (o = new w),
                        i(g, v, n, r, o)
                    }
                }
                return !!d && (o || (o = new w),
                function(e, t, n, r, i, o) {
                    var s = 1 & n
                      , a = lt(e)
                      , u = a.length
                      , l = lt(t).length;
                    if (u != l && !s)
                        return !1;
                    for (var c = u; c--; ) {
                        var f = a[c];
                        if (!(s ? f in t : Qn.call(t, f)))
                            return !1
                    }
                    var d = o.get(e);
                    if (d && o.get(t))
                        return d == t;
                    var h = !0;
                    o.set(e, t),
                    o.set(t, e);
                    for (var p = s; ++c < u; ) {
                        f = a[c];
                        var g = e[f]
                          , v = t[f];
                        if (r)
                            var y = s ? r(v, g, f, t, e, o) : r(g, v, f, e, t, o);
                        if (!(y === Rs ? g === v || i(g, v, n, r, o) : y)) {
                            h = !1;
                            break
                        }
                        p || (p = "constructor" == f)
                    }
                    if (h && !p) {
                        var m = e.constructor
                          , _ = t.constructor;
                        m != _ && "constructor"in e && "constructor"in t && !("function" == typeof m && m instanceof m && "function" == typeof _ && _ instanceof _) && (h = !1)
                    }
                    return o.delete(e),
                    o.delete(t),
                    h
                }(e, t, n, r, i, o))
            }(e, t, n, r, z, i))
        }
        function U(e, t, n, r) {
            var i = n.length
              , o = i
              , s = !r;
            if (null == e)
                return !o;
            for (e = Un(e); i--; ) {
                var a = n[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                var u = (a = n[i])[0]
                  , l = e[u]
                  , c = a[1];
                if (s && a[2]) {
                    if (l === Rs && !(u in e))
                        return !1
                } else {
                    var f = new w;
                    if (r)
                        var d = r(l, c, u, e, t, f);
                    if (!(d === Rs ? z(c, l, 3, r, f) : d))
                        return !1
                }
            }
            return !0
        }
        function q(e) {
            return !(!un(e) || function(e) {
                return !!tr && tr in e
            }(e)) && (on(e) ? or : Xa).test($t(e))
        }
        function B(e) {
            return "function" == typeof e ? e : null == e ? En : "object" == typeof e ? no(e) ? J(e[0], e[1]) : K(e) : Pn(e)
        }
        function G(e) {
            if (!St(e))
                return Dr(e);
            var t = [];
            for (var n in Un(e))
                Qn.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
        function V(e) {
            if (!un(e))
                return function(e) {
                    var t = [];
                    if (null != e)
                        for (var n in Un(e))
                            t.push(n);
                    return t
                }(e);
            var t = St(e)
              , n = [];
            for (var r in e)
                ("constructor" != r || !t && Qn.call(e, r)) && n.push(r);
            return n
        }
        function X(e, t) {
            return e < t
        }
        function Z(e, r) {
            var i = -1
              , o = tn(e) ? Rn(e.length) : [];
            return Kr(e, function(e, t, n) {
                o[++i] = r(e, t, n)
            }),
            o
        }
        function K(t) {
            var n = gt(t);
            return 1 == n.length && n[0][2] ? Ct(n[0][0], n[0][1]) : function(e) {
                return e === t || U(e, t, n)
            }
        }
        function J(n, r) {
            return kt(n) && Tt(r) ? Ct(jt(n), r) : function(e) {
                var t = bn(e, n);
                return t === Rs && t === r ? kn(e, n) : z(r, t, 3)
            }
        }
        function Q(r, i, o, s, a) {
            r !== i && Qr(i, function(e, t) {
                if (un(e))
                    a || (a = new w),
                    function(e, t, n, r, i, o, s) {
                        var a = e[n]
                          , u = t[n]
                          , l = s.get(u);
                        if (l)
                            return g(e, n, l);
                        var c = o ? o(a, u, n + "", e, t, s) : Rs
                          , f = c === Rs;
                        if (f) {
                            var d = no(u)
                              , h = !d && io(u)
                              , p = !d && !h && lo(u);
                            c = u,
                            d || h || p ? c = no(a) ? a : nn(a) ? Ye(a) : h ? Ae(u, !(f = !1)) : p ? je(u, !(f = !1)) : [] : fn(u) || to(u) ? to(c = a) ? c = _n(a) : (!un(a) || r && on(a)) && (c = mt(u)) : f = !1
                        }
                        f && (s.set(u, c),
                        i(c, u, r, o, s),
                        s.delete(u)),
                        g(e, n, c)
                    }(r, i, t, o, Q, s, a);
                else {
                    var n = s ? s(r[t], e, t + "", r, i, a) : Rs;
                    n === Rs && (n = e),
                    g(r, t, n)
                }
            }, Sn)
        }
        function ee(e, t) {
            var n = e.length;
            if (n)
                return wt(t += t < 0 ? n : 0, n) ? e[t] : Rs
        }
        function te(e, r, n) {
            var i = -1;
            return r = fs(r.length ? r : [En], Cs(ht())),
            function(e, t) {
                var n = e.length;
                for (e.sort(t); n--; )
                    e[n] = e[n].value;
                return e
            }(Z(e, function(t, e, n) {
                return {
                    criteria: fs(r, function(e) {
                        return e(t)
                    }),
                    index: ++i,
                    value: t
                }
            }), function(e, t) {
                return function(e, t, n) {
                    for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, a = n.length; ++r < s; ) {
                        var u = $e(i[r], o[r]);
                        if (u) {
                            if (a <= r)
                                return u;
                            var l = n[r];
                            return u * ("desc" == l ? -1 : 1)
                        }
                    }
                    return e.index - t.index
                }(e, t, n)
            })
        }
        function ne(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var s = t[r]
                  , a = N(e, s);
                n(a, s) && ce(o, Me(s, e), a)
            }
            return o
        }
        function re(e, t, n, r) {
            var i = r ? _s : ms
              , o = -1
              , s = t.length
              , a = e;
            for (e === t && (t = Ye(t)),
            n && (a = fs(e, Cs(n))); ++o < s; )
                for (var u = 0, l = t[o], c = n ? n(l) : l; -1 < (u = i(a, c, u, r)); )
                    a !== e && hr.call(a, u, 1),
                    hr.call(e, u, 1);
            return e
        }
        function ie(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                var i = t[n];
                if (n == r || i !== o) {
                    var o = i;
                    wt(i) ? hr.call(e, i, 1) : we(e, i)
                }
            }
            return e
        }
        function oe(e, t) {
            return e + kr(jr() * (t - e + 1))
        }
        function se(e, t) {
            var n = "";
            if (!e || t < 1 || Us < t)
                return n;
            for (; t % 2 && (n += e),
            (t = kr(t / 2)) && (e += e),
            t; )
                ;
            return n
        }
        function ae(e, t) {
            return gi(Dt(e, t, En), e + "")
        }
        function ue(e) {
            return s(Cn(e))
        }
        function le(e, t) {
            var n = Cn(e);
            return Et(n, p(t, 0, n.length))
        }
        function ce(e, t, n, r) {
            if (!un(e))
                return e;
            for (var i = -1, o = (t = Me(t, e)).length, s = o - 1, a = e; null != a && ++i < o; ) {
                var u = jt(t[i])
                  , l = n;
                if (i != s) {
                    var c = a[u];
                    (l = r ? r(c, u, a) : Rs) === Rs && (l = un(c) ? c : wt(t[i + 1]) ? [] : {})
                }
                b(a, u, l),
                a = a[u]
            }
            return e
        }
        function fe(e) {
            return Et(Cn(e))
        }
        function de(e, t, n) {
            var r = -1
              , i = e.length;
            t < 0 && (t = i < -t ? 0 : i + t),
            (n = i < n ? i : n) < 0 && (n += i),
            i = n < t ? 0 : n - t >>> 0,
            t >>>= 0;
            for (var o = Rn(i); ++r < i; )
                o[r] = e[r + t];
            return o
        }
        function he(e, r) {
            var i;
            return Kr(e, function(e, t, n) {
                return !(i = r(e, t, n))
            }),
            !!i
        }
        function pe(e, t, n) {
            var r = 0
              , i = null == e ? r : e.length;
            if ("number" == typeof t && t == t && i <= 2147483647) {
                for (; r < i; ) {
                    var o = r + i >>> 1
                      , s = e[o];
                    null !== s && !hn(s) && (n ? s <= t : s < t) ? r = 1 + o : i = o
                }
                return i
            }
            return ge(e, t, En, n)
        }
        function ge(e, t, n, r) {
            t = n(t);
            for (var i = 0, o = null == e ? 0 : e.length, s = t != t, a = null === t, u = hn(t), l = t === Rs; i < o; ) {
                var c = kr((i + o) / 2)
                  , f = n(e[c])
                  , d = f !== Rs
                  , h = null === f
                  , p = f == f
                  , g = hn(f);
                if (s)
                    var v = r || p;
                else
                    v = l ? p && (r || d) : a ? p && d && (r || !h) : u ? p && d && !h && (r || !g) : !h && !g && (r ? f <= t : f < t);
                v ? i = c + 1 : o = c
            }
            return Or(o, 4294967294)
        }
        function ve(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                var s = e[n]
                  , a = t ? t(s) : s;
                if (!n || !en(a, u)) {
                    var u = a;
                    o[i++] = 0 === s ? 0 : s
                }
            }
            return o
        }
        function ye(e) {
            return "number" == typeof e ? e : hn(e) ? qs : +e
        }
        function me(e) {
            if ("string" == typeof e)
                return e;
            if (no(e))
                return fs(e, me) + "";
            if (hn(e))
                return Xr ? Xr.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }
        function _e(e, t, n) {
            var r = -1
              , i = ls
              , o = e.length
              , s = !0
              , a = []
              , u = a;
            if (n)
                s = !1,
                i = cs;
            else if (200 <= o) {
                var l = t ? null : oi(e);
                if (l)
                    return Ys(l);
                s = !1,
                i = Ms,
                u = new _
            } else
                u = t ? [] : a;
            e: for (; ++r < o; ) {
                var c = e[r]
                  , f = t ? t(c) : c;
                if (c = n || 0 !== c ? c : 0,
                s && f == f) {
                    for (var d = u.length; d--; )
                        if (u[d] === f)
                            continue e;
                    t && u.push(f),
                    a.push(c)
                } else
                    i(u, f, n) || (u !== a && u.push(f),
                    a.push(c))
            }
            return a
        }
        function we(e, t) {
            return null == (e = Mt(e, t = Me(t, e))) || delete e[jt(Rt(t))]
        }
        function be(e, t, n, r) {
            return ce(e, t, n(N(e, t)), r)
        }
        function ke(e, t, n, r) {
            for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
                ;
            return n ? de(e, r ? 0 : o, r ? o + 1 : i) : de(e, r ? o + 1 : 0, r ? i : o)
        }
        function xe(e, t) {
            var n = e;
            return n instanceof m && (n = n.value()),
            hs(t, function(e, t) {
                return t.func.apply(t.thisArg, ds([e], t.args))
            }, n)
        }
        function Se(e, t, n) {
            var r = e.length;
            if (r < 2)
                return r ? _e(e[0]) : [];
            for (var i = -1, o = Rn(r); ++i < r; )
                for (var s = e[i], a = -1; ++a < r; )
                    a != i && (o[i] = C(o[i] || s, e[a], t, n));
            return _e(A(o, 1), t, n)
        }
        function Te(e, t, n) {
            for (var r = -1, i = e.length, o = t.length, s = {}; ++r < i; ) {
                var a = r < o ? t[r] : Rs;
                n(s, e[r], a)
            }
            return s
        }
        function Ce(e) {
            return nn(e) ? e : []
        }
        function De(e) {
            return "function" == typeof e ? e : En
        }
        function Me(e, t) {
            return no(e) ? e : kt(e, t) ? [e] : vi(wn(e))
        }
        function Oe(e, t, n) {
            var r = e.length;
            return n = n === Rs ? r : n,
            !t && r <= n ? e : de(e, t, n)
        }
        function Ae(e, t) {
            if (t)
                return e.slice();
            var n = e.length
              , r = lr ? lr(n) : new e.constructor(n);
            return e.copy(r),
            r
        }
        function Ee(e) {
            var t = new e.constructor(e.byteLength);
            return new ur(t).set(new ur(e)),
            t
        }
        function je(e, t) {
            var n = t ? Ee(e.buffer) : e.buffer;
            return new e.constructor(n,e.byteOffset,e.length)
        }
        function $e(e, t) {
            if (e !== t) {
                var n = e !== Rs
                  , r = null === e
                  , i = e == e
                  , o = hn(e)
                  , s = t !== Rs
                  , a = null === t
                  , u = t == t
                  , l = hn(t);
                if (!a && !l && !o && t < e || o && s && u && !a && !l || r && s && u || !n && u || !i)
                    return 1;
                if (!r && !o && !l && e < t || l && n && i && !r && !o || a && n && i || !s && i || !u)
                    return -1
            }
            return 0
        }
        function Ne(e, t, n, r) {
            for (var i = -1, o = e.length, s = n.length, a = -1, u = t.length, l = Mr(o - s, 0), c = Rn(u + l), f = !r; ++a < u; )
                c[a] = t[a];
            for (; ++i < s; )
                (f || i < o) && (c[n[i]] = e[i]);
            for (; l--; )
                c[a++] = e[i++];
            return c
        }
        function Pe(e, t, n, r) {
            for (var i = -1, o = e.length, s = -1, a = n.length, u = -1, l = t.length, c = Mr(o - a, 0), f = Rn(c + l), d = !r; ++i < c; )
                f[i] = e[i];
            for (var h = i; ++u < l; )
                f[h + u] = t[u];
            for (; ++s < a; )
                (d || i < o) && (f[h + n[s]] = e[i++]);
            return f
        }
        function Ye(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Rn(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        function Le(e, t, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, s = t.length; ++o < s; ) {
                var a = t[o]
                  , u = r ? r(n[a], e[a], a, n, e) : Rs;
                u === Rs && (u = e[a]),
                i ? d(n, a, u) : b(n, a, u)
            }
            return n
        }
        function He(i, o) {
            return function(e, t) {
                var n = no(e) ? is : f
                  , r = o ? o() : {};
                return n(e, i, ht(t, 2), r)
            }
        }
        function Re(a) {
            return ae(function(e, t) {
                var n = -1
                  , r = t.length
                  , i = 1 < r ? t[r - 1] : Rs
                  , o = 2 < r ? t[2] : Rs;
                for (i = 3 < a.length && "function" == typeof i ? (r--,
                i) : Rs,
                o && bt(t[0], t[1], o) && (i = r < 3 ? Rs : i,
                r = 1),
                e = Un(e); ++n < r; ) {
                    var s = t[n];
                    s && a(e, s, n, i)
                }
                return e
            })
        }
        function We(o, s) {
            return function(e, t) {
                if (null == e)
                    return e;
                if (!tn(e))
                    return o(e, t);
                for (var n = e.length, r = s ? n : -1, i = Un(e); (s ? r-- : ++r < n) && !1 !== t(i[r], r, i); )
                    ;
                return e
            }
        }
        function Ie(u) {
            return function(e, t, n) {
                for (var r = -1, i = Un(e), o = n(e), s = o.length; s--; ) {
                    var a = o[u ? s : ++r];
                    if (!1 === t(i[a], a, i))
                        break
                }
                return e
            }
        }
        function Fe(i) {
            return function(e) {
                var t = js(e = wn(e)) ? Hs(e) : Rs
                  , n = t ? t[0] : e.charAt(0)
                  , r = t ? Oe(t, 1).join("") : e.slice(1);
                return n[i]() + r
            }
        }
        function ze(t) {
            return function(e) {
                return hs(On(Mn(e).replace(tu, "")), t, "")
            }
        }
        function Ue(r) {
            return function() {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return new r;
                case 1:
                    return new r(e[0]);
                case 2:
                    return new r(e[0],e[1]);
                case 3:
                    return new r(e[0],e[1],e[2]);
                case 4:
                    return new r(e[0],e[1],e[2],e[3]);
                case 5:
                    return new r(e[0],e[1],e[2],e[3],e[4]);
                case 6:
                    return new r(e[0],e[1],e[2],e[3],e[4],e[5]);
                case 7:
                    return new r(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                }
                var t = Zr(r.prototype)
                  , n = r.apply(t, e);
                return un(n) ? n : t
            }
        }
        function qe(s) {
            return function(e, t, n) {
                var r = Un(e);
                if (!tn(e)) {
                    var i = ht(t, 3);
                    e = xn(e),
                    t = function(e) {
                        return i(r[e], e, r)
                    }
                }
                var o = s(e, t, n);
                return -1 < o ? r[i ? e[o] : o] : Rs
            }
        }
        function Be(u) {
            return ut(function(i) {
                var o = i.length
                  , e = o
                  , t = y.prototype.thru;
                for (u && i.reverse(); e--; ) {
                    var n = i[e];
                    if ("function" != typeof n)
                        throw new Gn(Ws);
                    if (t && !s && "wrapper" == ft(n))
                        var s = new y([],!0)
                }
                for (e = s ? e : o; ++e < o; ) {
                    var r = ft(n = i[e])
                      , a = "wrapper" == r ? si(n) : Rs;
                    s = a && xt(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9] ? s[ft(a[0])].apply(s, a[3]) : 1 == n.length && xt(n) ? s[r]() : s.thru(n)
                }
                return function() {
                    var e = arguments
                      , t = e[0];
                    if (s && 1 == e.length && no(t))
                        return s.plant(t).value();
                    for (var n = 0, r = o ? i[n].apply(this, e) : t; ++n < o; )
                        r = i[n].call(this, r);
                    return r
                }
            })
        }
        function Ge(l, c, f, d, h, p, g, v, y, m) {
            var _ = c & zs
              , w = 1 & c
              , b = 2 & c
              , k = 24 & c
              , x = 512 & c
              , S = b ? Rs : Ue(l);
            return function e() {
                for (var t = arguments.length, n = Rn(t), r = t; r--; )
                    n[r] = arguments[r];
                if (k)
                    var i = dt(e)
                      , o = function(e, t) {
                        for (var n = e.length, r = 0; n--; )
                            e[n] === t && ++r;
                        return r
                    }(n, i);
                if (d && (n = Ne(n, d, h, k)),
                p && (n = Pe(n, p, g, k)),
                t -= o,
                k && t < m) {
                    var s = Ps(n, i);
                    return et(l, c, Ge, e.placeholder, f, n, s, v, y, m - t)
                }
                var a = w ? f : this
                  , u = b ? a[l] : l;
                return t = n.length,
                v ? n = function(e, t) {
                    for (var n = e.length, r = Or(t.length, n), i = Ye(e); r--; ) {
                        var o = t[r];
                        e[r] = wt(o, n) ? i[o] : Rs
                    }
                    return e
                }(n, v) : x && 1 < t && n.reverse(),
                _ && y < t && (n.length = y),
                this && this !== fu && this instanceof e && (u = S || Ue(u)),
                u.apply(a, n)
            }
        }
        function Ve(n, r) {
            return function(e, t) {
                return function(e, r, i, o) {
                    return E(e, function(e, t, n) {
                        r(o, i(e), t, n)
                    }),
                    o
                }(e, n, r(t), {})
            }
        }
        function Xe(r, i) {
            return function(e, t) {
                var n;
                if (e === Rs && t === Rs)
                    return i;
                if (e !== Rs && (n = e),
                t !== Rs) {
                    if (n === Rs)
                        return t;
                    t = "string" == typeof e || "string" == typeof t ? (e = me(e),
                    me(t)) : (e = ye(e),
                    ye(t)),
                    n = r(e, t)
                }
                return n
            }
        }
        function Ze(r) {
            return ut(function(e) {
                return e = fs(e, Cs(ht())),
                ae(function(t) {
                    var n = this;
                    return r(e, function(e) {
                        return rs(e, n, t)
                    })
                })
            })
        }
        function Ke(e, t) {
            var n = (t = t === Rs ? " " : me(t)).length;
            if (n < 2)
                return n ? se(t, e) : t;
            var r = se(t, br(e / Ls(t)));
            return js(t) ? Oe(Hs(r), 0, e).join("") : r.slice(0, e)
        }
        function Je(r) {
            return function(e, t, n) {
                return n && "number" != typeof n && bt(e, t, n) && (t = n = Rs),
                e = gn(e),
                t === Rs ? (t = e,
                e = 0) : t = gn(t),
                function(e, t, n, r) {
                    for (var i = -1, o = Mr(br((t - e) / (n || 1)), 0), s = Rn(o); o--; )
                        s[r ? o : ++i] = e,
                        e += n;
                    return s
                }(e, t, n = n === Rs ? e < t ? 1 : -1 : gn(n), r)
            }
        }
        function Qe(n) {
            return function(e, t) {
                return "string" == typeof e && "string" == typeof t || (e = mn(e),
                t = mn(t)),
                n(e, t)
            }
        }
        function et(e, t, n, r, i, o, s, a, u, l) {
            var c = 8 & t;
            t |= c ? 32 : 64,
            4 & (t &= ~(c ? 64 : 32)) || (t &= -4);
            var f = [e, t, i, c ? o : Rs, c ? s : Rs, c ? Rs : o, c ? Rs : s, a, u, l]
              , d = n.apply(Rs, f);
            return xt(e) && hi(d, f),
            d.placeholder = r,
            Ot(d, e, t)
        }
        function tt(e) {
            var r = zn[e];
            return function(e, t) {
                if (e = mn(e),
                t = null == t ? 0 : Or(vn(t), 292)) {
                    var n = (wn(e) + "e").split("e");
                    return +((n = (wn(r(n[0] + "e" + (+n[1] + t))) + "e").split("e"))[0] + "e" + (+n[1] - t))
                }
                return r(e)
            }
        }
        function nt(n) {
            return function(e) {
                var t = li(e);
                return t == ta ? $s(e) : t == sa ? function(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = [e, e]
                    }),
                    n
                }(e) : function(t, e) {
                    return fs(e, function(e) {
                        return [e, t[e]]
                    })
                }(e, n(e))
            }
        }
        function rt(e, t, n, r, i, o, s, a) {
            var u = 2 & t;
            if (!u && "function" != typeof e)
                throw new Gn(Ws);
            var l = r ? r.length : 0;
            if (l || (t &= -97,
            r = i = Rs),
            s = s === Rs ? s : Mr(vn(s), 0),
            a = a === Rs ? a : vn(a),
            l -= i ? i.length : 0,
            64 & t) {
                var c = r
                  , f = i;
                r = i = Rs
            }
            var d = u ? Rs : si(e)
              , h = [e, t, n, r, i, c, f, o, s, a];
            if (d && function(e, t) {
                var n = e[1]
                  , r = t[1]
                  , i = n | r
                  , o = i < 131
                  , s = r == zs && 8 == n || r == zs && 256 == n && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                if (o || s) {
                    1 & r && (e[2] = t[2],
                    i |= 1 & n ? 0 : 4);
                    var a = t[3];
                    if (a) {
                        var u = e[3];
                        e[3] = u ? Ne(u, a, t[4]) : a,
                        e[4] = u ? Ps(e[3], Fs) : t[4]
                    }
                    (a = t[5]) && (u = e[5],
                    e[5] = u ? Pe(u, a, t[6]) : a,
                    e[6] = u ? Ps(e[5], Fs) : t[6]),
                    (a = t[7]) && (e[7] = a),
                    r & zs && (e[8] = null == e[8] ? t[8] : Or(e[8], t[8])),
                    null == e[9] && (e[9] = t[9]),
                    e[0] = t[0],
                    e[1] = i
                }
            }(h, d),
            e = h[0],
            t = h[1],
            n = h[2],
            r = h[3],
            i = h[4],
            !(a = h[9] = h[9] === Rs ? u ? 0 : e.length : Mr(h[9] - l, 0)) && 24 & t && (t &= -25),
            t && 1 != t)
                p = 8 == t || 16 == t ? function(s, a, u) {
                    var l = Ue(s);
                    return function e() {
                        for (var t = arguments.length, n = Rn(t), r = t, i = dt(e); r--; )
                            n[r] = arguments[r];
                        var o = t < 3 && n[0] !== i && n[t - 1] !== i ? [] : Ps(n, i);
                        return (t -= o.length) < u ? et(s, a, Ge, e.placeholder, Rs, n, o, Rs, Rs, u - t) : rs(this && this !== fu && this instanceof e ? l : s, this, n)
                    }
                }(e, t, a) : 32 != t && 33 != t || i.length ? Ge.apply(Rs, h) : function(a, e, u, l) {
                    var c = 1 & e
                      , f = Ue(a);
                    return function e() {
                        for (var t = -1, n = arguments.length, r = -1, i = l.length, o = Rn(i + n), s = this && this !== fu && this instanceof e ? f : a; ++r < i; )
                            o[r] = l[r];
                        for (; n--; )
                            o[r++] = arguments[++t];
                        return rs(s, c ? u : this, o)
                    }
                }(e, t, n, r);
            else
                var p = function(t, e, n) {
                    var r = 1 & e
                      , i = Ue(t);
                    return function e() {
                        return (this && this !== fu && this instanceof e ? i : t).apply(r ? n : this, arguments)
                    }
                }(e, t, n);
            return Ot((d ? ti : hi)(p, h), e, t)
        }
        function it(e, t, n, r) {
            return e === Rs || en(e, Zn[n]) && !Qn.call(r, n) ? t : e
        }
        function ot(e, t, n, r, i, o) {
            return un(e) && un(t) && (o.set(t, e),
            Q(e, t, Rs, ot, o),
            o.delete(t)),
            e
        }
        function st(e) {
            return fn(e) ? Rs : e
        }
        function at(e, t, n, r, i, o) {
            var s = 1 & n
              , a = e.length
              , u = t.length;
            if (a != u && !(s && a < u))
                return !1;
            var l = o.get(e);
            if (l && o.get(t))
                return l == t;
            var c = -1
              , f = !0
              , d = 2 & n ? new _ : Rs;
            for (o.set(e, t),
            o.set(t, e); ++c < a; ) {
                var h = e[c]
                  , p = t[c];
                if (r)
                    var g = s ? r(p, h, c, t, e, o) : r(h, p, c, e, t, o);
                if (g !== Rs) {
                    if (g)
                        continue;
                    f = !1;
                    break
                }
                if (d) {
                    if (!gs(t, function(e, t) {
                        if (!Ms(d, t) && (h === e || i(h, e, n, r, o)))
                            return d.push(t)
                    })) {
                        f = !1;
                        break
                    }
                } else if (h !== p && !i(h, p, n, r, o)) {
                    f = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            f
        }
        function ut(e) {
            return gi(Dt(e, Rs, Lt), e + "")
        }
        function lt(e) {
            return P(e, xn, ai)
        }
        function ct(e) {
            return P(e, Sn, ui)
        }
        function ft(e) {
            for (var t = e.name + "", n = Ir[t], r = Qn.call(Ir, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (null == o || o == e)
                    return i.name
            }
            return t
        }
        function dt(e) {
            return (Qn.call(v, "placeholder") ? v : e).placeholder
        }
        function ht() {
            var e = v.iteratee || jn;
            return e = e === jn ? B : e,
            arguments.length ? e(arguments[0], arguments[1]) : e
        }
        function pt(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        function gt(e) {
            for (var t = xn(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, Tt(i)]
            }
            return t
        }
        function vt(e, t) {
            var n = function(e, t) {
                return null == e ? Rs : e[t]
            }(e, t);
            return q(n) ? n : Rs
        }
        function yt(e, t, n) {
            for (var r = -1, i = (t = Me(t, e)).length, o = !1; ++r < i; ) {
                var s = jt(t[r]);
                if (!(o = null != e && n(e, s)))
                    break;
                e = e[s]
            }
            return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && an(i) && wt(s, i) && (no(e) || to(e))
        }
        function mt(e) {
            return "function" != typeof e.constructor || St(e) ? {} : Zr(cr(e))
        }
        function _t(e) {
            return no(e) || to(e) || !!(pr && e && e[pr])
        }
        function wt(e, t) {
            return !!(t = null == t ? Us : t) && ("number" == typeof e || Ka.test(e)) && -1 < e && e % 1 == 0 && e < t
        }
        function bt(e, t, n) {
            if (!un(n))
                return !1;
            var r = typeof t;
            return !!("number" == r ? tn(n) && wt(t, n.length) : "string" == r && t in n) && en(n[t], e)
        }
        function kt(e, t) {
            if (no(e))
                return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !hn(e)) || ja.test(e) || !Ea.test(e) || null != t && e in Un(t)
        }
        function xt(e) {
            var t = ft(e)
              , n = v[t];
            if ("function" != typeof n || !(t in m.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = si(n);
            return !!r && e === r[0]
        }
        function St(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || Zn)
        }
        function Tt(e) {
            return e == e && !un(e)
        }
        function Ct(t, n) {
            return function(e) {
                return null != e && e[t] === n && (n !== Rs || t in Un(e))
            }
        }
        function Dt(o, s, a) {
            return s = Mr(s === Rs ? o.length - 1 : s, 0),
            function() {
                for (var e = arguments, t = -1, n = Mr(e.length - s, 0), r = Rn(n); ++t < n; )
                    r[t] = e[s + t];
                t = -1;
                for (var i = Rn(s + 1); ++t < s; )
                    i[t] = e[t];
                return i[s] = a(r),
                rs(o, this, i)
            }
        }
        function Mt(e, t) {
            return t.length < 2 ? e : N(e, de(t, 0, -1))
        }
        function Ot(e, t, n) {
            var r = t + "";
            return gi(e, function(e, t) {
                var n = t.length;
                if (!n)
                    return e;
                var r = n - 1;
                return t[r] = (1 < n ? "& " : "") + t[r],
                t = t.join(2 < n ? ", " : " "),
                e.replace(Wa, "{\n/* [wrapped with " + t + "] */\n")
            }(r, function(n, r) {
                return os(Gs, function(e) {
                    var t = "_." + e[0];
                    r & e[1] && !ls(n, t) && n.push(t)
                }),
                n.sort()
            }(function(e) {
                var t = e.match(Ia);
                return t ? t[1].split(Fa) : []
            }(r), n)))
        }
        function At(n) {
            var r = 0
              , i = 0;
            return function() {
                var e = Ar()
                  , t = 16 - (e - i);
                if (i = e,
                0 < t) {
                    if (800 <= ++r)
                        return arguments[0]
                } else
                    r = 0;
                return n.apply(Rs, arguments)
            }
        }
        function Et(e, t) {
            var n = -1
              , r = e.length
              , i = r - 1;
            for (t = t === Rs ? r : t; ++n < t; ) {
                var o = oe(n, i)
                  , s = e[o];
                e[o] = e[n],
                e[n] = s
            }
            return e.length = t,
            e
        }
        function jt(e) {
            if ("string" == typeof e || hn(e))
                return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }
        function $t(e) {
            if (null != e) {
                try {
                    return Jn.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        function Nt(e) {
            if (e instanceof m)
                return e.clone();
            var t = new y(e.__wrapped__,e.__chain__);
            return t.__actions__ = Ye(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        function Pt(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = null == n ? 0 : vn(n);
            return i < 0 && (i = Mr(r + i, 0)),
            ys(e, ht(t, 3), i)
        }
        function Yt(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== Rs && (i = vn(n),
            i = n < 0 ? Mr(r + i, 0) : Or(i, r - 1)),
            ys(e, ht(t, 3), i, !0)
        }
        function Lt(e) {
            return null != e && e.length ? A(e, 1) : []
        }
        function Ht(e) {
            return e && e.length ? e[0] : Rs
        }
        function Rt(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : Rs
        }
        function Wt(e, t) {
            return e && e.length && t && t.length ? re(e, t) : e
        }
        function It(e) {
            return null == e ? e : $r.call(e)
        }
        function Ft(t) {
            if (!t || !t.length)
                return [];
            var n = 0;
            return t = us(t, function(e) {
                if (nn(e))
                    return n = Mr(e.length, n),
                    !0
            }),
            Ts(n, function(e) {
                return fs(t, ks(e))
            })
        }
        function zt(e, t) {
            if (!e || !e.length)
                return [];
            var n = Ft(e);
            return null == t ? n : fs(n, function(e) {
                return rs(t, Rs, e)
            })
        }
        function Ut(e) {
            var t = v(e);
            return t.__chain__ = !0,
            t
        }
        function qt(e, t) {
            return t(e)
        }
        function Bt(e, t) {
            return (no(e) ? os : Kr)(e, ht(t, 3))
        }
        function Gt(e, t) {
            return (no(e) ? ss : Jr)(e, ht(t, 3))
        }
        function Vt(e, t) {
            return (no(e) ? fs : Z)(e, ht(t, 3))
        }
        function Xt(e, t, n) {
            return t = n ? Rs : t,
            t = e && null == t ? e.length : t,
            rt(e, zs, Rs, Rs, Rs, Rs, t)
        }
        function Zt(e, t) {
            var n;
            if ("function" != typeof t)
                throw new Gn(Ws);
            return e = vn(e),
            function() {
                return 0 < --e && (n = t.apply(this, arguments)),
                e <= 1 && (t = Rs),
                n
            }
        }
        function Kt(r, n, e) {
            function i(e) {
                var t = u
                  , n = l;
                return u = l = Rs,
                p = e,
                f = r.apply(n, t)
            }
            function o(e) {
                var t = e - h;
                return h === Rs || n <= t || t < 0 || v && c <= e - p
            }
            function s() {
                var e = zi();
                return o(e) ? t(e) : void (d = pi(s, function(e) {
                    var t = n - (e - h);
                    return v ? Or(t, c - (e - p)) : t
                }(e)))
            }
            function t(e) {
                return d = Rs,
                y && u ? i(e) : (u = l = Rs,
                f)
            }
            function a() {
                var e = zi()
                  , t = o(e);
                if (u = arguments,
                l = this,
                h = e,
                t) {
                    if (d === Rs)
                        return function(e) {
                            return p = e,
                            d = pi(s, n),
                            g ? i(e) : f
                        }(h);
                    if (v)
                        return d = pi(s, n),
                        i(h)
                }
                return d === Rs && (d = pi(s, n)),
                f
            }
            var u, l, c, f, d, h, p = 0, g = !1, v = !1, y = !0;
            if ("function" != typeof r)
                throw new Gn(Ws);
            return n = mn(n) || 0,
            un(e) && (g = !!e.leading,
            c = (v = "maxWait"in e) ? Mr(mn(e.maxWait) || 0, n) : c,
            y = "trailing"in e ? !!e.trailing : y),
            a.cancel = function() {
                d !== Rs && ii(d),
                p = 0,
                u = h = l = d = Rs
            }
            ,
            a.flush = function() {
                return d === Rs ? f : t(zi())
            }
            ,
            a
        }
        function Jt(i, o) {
            if ("function" != typeof i || null != o && "function" != typeof o)
                throw new Gn(Ws);
            var s = function() {
                var e = arguments
                  , t = o ? o.apply(this, e) : e[0]
                  , n = s.cache;
                if (n.has(t))
                    return n.get(t);
                var r = i.apply(this, e);
                return s.cache = n.set(t, r) || n,
                r
            };
            return s.cache = new (Jt.Cache || a),
            s
        }
        function Qt(t) {
            if ("function" != typeof t)
                throw new Gn(Ws);
            return function() {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
                }
                return !t.apply(this, e)
            }
        }
        function en(e, t) {
            return e === t || e != e && t != t
        }
        function tn(e) {
            return null != e && an(e.length) && !on(e)
        }
        function nn(e) {
            return ln(e) && tn(e)
        }
        function rn(e) {
            if (!ln(e))
                return !1;
            var t = Y(e);
            return t == Js || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !fn(e)
        }
        function on(e) {
            if (!un(e))
                return !1;
            var t = Y(e);
            return t == Qs || t == ea || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
        function sn(e) {
            return "number" == typeof e && e == vn(e)
        }
        function an(e) {
            return "number" == typeof e && -1 < e && e % 1 == 0 && e <= Us
        }
        function un(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        function ln(e) {
            return null != e && "object" == typeof e
        }
        function cn(e) {
            return "number" == typeof e || ln(e) && Y(e) == na
        }
        function fn(e) {
            if (!ln(e) || Y(e) != ra)
                return !1;
            var t = cr(e);
            if (null === t)
                return !0;
            var n = Qn.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Jn.call(n) == rr
        }
        function dn(e) {
            return "string" == typeof e || !no(e) && ln(e) && Y(e) == aa
        }
        function hn(e) {
            return "symbol" == typeof e || ln(e) && Y(e) == ua
        }
        function pn(e) {
            if (!e)
                return [];
            if (tn(e))
                return dn(e) ? Hs(e) : Ye(e);
            if (gr && e[gr])
                return function(e) {
                    for (var t, n = []; !(t = e.next()).done; )
                        n.push(t.value);
                    return n
                }(e[gr]());
            var t = li(e);
            return (t == ta ? $s : t == sa ? Ys : Cn)(e)
        }
        function gn(e) {
            return e ? (e = mn(e)) !== 1 / 0 && e !== -1 / 0 ? e == e ? e : 0 : 17976931348623157e292 * (e < 0 ? -1 : 1) : 0 === e ? e : 0
        }
        function vn(e) {
            var t = gn(e)
              , n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
        function yn(e) {
            return e ? p(vn(e), 0, Bs) : 0
        }
        function mn(e) {
            if ("number" == typeof e)
                return e;
            if (hn(e))
                return qs;
            if (un(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = un(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(La, "");
            var n = Va.test(e);
            return n || Za.test(e) ? cu(e.slice(2), n ? 2 : 8) : Ga.test(e) ? qs : +e
        }
        function _n(e) {
            return Le(e, Sn(e))
        }
        function wn(e) {
            return null == e ? "" : me(e)
        }
        function bn(e, t, n) {
            var r = null == e ? Rs : N(e, t);
            return r === Rs ? n : r
        }
        function kn(e, t) {
            return null != e && yt(e, t, R)
        }
        function xn(e) {
            return tn(e) ? r(e) : G(e)
        }
        function Sn(e) {
            return tn(e) ? r(e, !0) : V(e)
        }
        function Tn(e, n) {
            if (null == e)
                return {};
            var t = fs(ct(e), function(e) {
                return [e]
            });
            return n = ht(n),
            ne(e, t, function(e, t) {
                return n(e, t[0])
            })
        }
        function Cn(e) {
            return null == e ? [] : Ds(e, xn(e))
        }
        function Dn(e) {
            return Yo(wn(e).toLowerCase())
        }
        function Mn(e) {
            return (e = wn(e)) && e.replace(Ja, _u).replace(nu, "")
        }
        function On(e, t, n) {
            return e = wn(e),
            (t = n ? Rs : t) === Rs ? function(e) {
                return iu.test(e)
            }(e) ? function(e) {
                return e.match(ru) || []
            }(e) : function(e) {
                return e.match(za) || []
            }(e) : e.match(t) || []
        }
        function An(e) {
            return function() {
                return e
            }
        }
        function En(e) {
            return e
        }
        function jn(e) {
            return B("function" == typeof e ? e : x(e, 1))
        }
        function $n(r, t, e) {
            var n = xn(t)
              , i = $(t, n);
            null != e || un(t) && (i.length || !n.length) || (e = t,
            t = r,
            r = this,
            i = $(t, xn(t)));
            var o = !(un(e) && "chain"in e && !e.chain)
              , s = on(r);
            return os(i, function(e) {
                var n = t[e];
                r[e] = n,
                s && (r.prototype[e] = function() {
                    var e = this.__chain__;
                    if (o || e) {
                        var t = r(this.__wrapped__);
                        return (t.__actions__ = Ye(this.__actions__)).push({
                            func: n,
                            args: arguments,
                            thisArg: r
                        }),
                        t.__chain__ = e,
                        t
                    }
                    return n.apply(r, ds([this.value()], arguments))
                }
                )
            }),
            r
        }
        function Nn() {}
        function Pn(e) {
            return kt(e) ? ks(jt(e)) : function(t) {
                return function(e) {
                    return N(e, t)
                }
            }(e)
        }
        function Yn() {
            return []
        }
        function Ln() {
            return !1
        }
        var Hn, Rn = (t = null == t ? fu : ku.defaults(fu.Object(), t, ku.pick(fu, ou))).Array, Wn = t.Date, In = t.Error, Fn = t.Function, zn = t.Math, Un = t.Object, qn = t.RegExp, Bn = t.String, Gn = t.TypeError, Vn = Rn.prototype, Xn = Fn.prototype, Zn = Un.prototype, Kn = t["__core-js_shared__"], Jn = Xn.toString, Qn = Zn.hasOwnProperty, er = 0, tr = (Hn = /[^.]+$/.exec(Kn && Kn.keys && Kn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Hn : "", nr = Zn.toString, rr = Jn.call(Un), ir = fu._, or = qn("^" + Jn.call(Qn).replace(Pa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), sr = du ? t.Buffer : Rs, ar = t.Symbol, ur = t.Uint8Array, lr = sr ? sr.allocUnsafe : Rs, cr = Ns(Un.getPrototypeOf, Un), fr = Un.create, dr = Zn.propertyIsEnumerable, hr = Vn.splice, pr = ar ? ar.isConcatSpreadable : Rs, gr = ar ? ar.iterator : Rs, vr = ar ? ar.toStringTag : Rs, yr = function() {
            try {
                var e = vt(Un, "defineProperty");
                return e({}, "", {}),
                e
            } catch (e) {}
        }(), mr = t.clearTimeout !== fu.clearTimeout && t.clearTimeout, _r = Wn && Wn.now !== fu.Date.now && Wn.now, wr = t.setTimeout !== fu.setTimeout && t.setTimeout, br = zn.ceil, kr = zn.floor, xr = Un.getOwnPropertySymbols, Sr = sr ? sr.isBuffer : Rs, Tr = t.isFinite, Cr = Vn.join, Dr = Ns(Un.keys, Un), Mr = zn.max, Or = zn.min, Ar = Wn.now, Er = t.parseInt, jr = zn.random, $r = Vn.reverse, Nr = vt(t, "DataView"), Pr = vt(t, "Map"), Yr = vt(t, "Promise"), Lr = vt(t, "Set"), Hr = vt(t, "WeakMap"), Rr = vt(Un, "create"), Wr = Hr && new Hr, Ir = {}, Fr = $t(Nr), zr = $t(Pr), Ur = $t(Yr), qr = $t(Lr), Br = $t(Hr), Gr = ar ? ar.prototype : Rs, Vr = Gr ? Gr.valueOf : Rs, Xr = Gr ? Gr.toString : Rs, Zr = function() {
            function n() {}
            return function(e) {
                if (!un(e))
                    return {};
                if (fr)
                    return fr(e);
                n.prototype = e;
                var t = new n;
                return n.prototype = Rs,
                t
            }
        }();
        v.templateSettings = {
            escape: Ma,
            evaluate: Oa,
            interpolate: Aa,
            variable: "",
            imports: {
                _: v
            }
        },
        (v.prototype = o.prototype).constructor = v,
        (y.prototype = Zr(o.prototype)).constructor = y,
        (m.prototype = Zr(o.prototype)).constructor = m,
        n.prototype.clear = function() {
            this.__data__ = Rr ? Rr(null) : {},
            this.size = 0
        }
        ,
        n.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        n.prototype.get = function(e) {
            var t = this.__data__;
            if (Rr) {
                var n = t[e];
                return n === Is ? Rs : n
            }
            return Qn.call(t, e) ? t[e] : Rs
        }
        ,
        n.prototype.has = function(e) {
            var t = this.__data__;
            return Rr ? t[e] !== Rs : Qn.call(t, e)
        }
        ,
        n.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = Rr && t === Rs ? Is : t,
            this
        }
        ,
        i.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        i.prototype.delete = function(e) {
            var t = this.__data__
              , n = c(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : hr.call(t, n, 1),
            --this.size,
            0))
        }
        ,
        i.prototype.get = function(e) {
            var t = this.__data__
              , n = c(t, e);
            return n < 0 ? Rs : t[n][1]
        }
        ,
        i.prototype.has = function(e) {
            return -1 < c(this.__data__, e)
        }
        ,
        i.prototype.set = function(e, t) {
            var n = this.__data__
              , r = c(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        ,
        a.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new n,
                map: new (Pr || i),
                string: new n
            }
        }
        ,
        a.prototype.delete = function(e) {
            var t = pt(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        a.prototype.get = function(e) {
            return pt(this, e).get(e)
        }
        ,
        a.prototype.has = function(e) {
            return pt(this, e).has(e)
        }
        ,
        a.prototype.set = function(e, t) {
            var n = pt(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        ,
        _.prototype.add = _.prototype.push = function(e) {
            return this.__data__.set(e, Is),
            this
        }
        ,
        _.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        w.prototype.clear = function() {
            this.__data__ = new i,
            this.size = 0
        }
        ,
        w.prototype.delete = function(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        ,
        w.prototype.get = function(e) {
            return this.__data__.get(e)
        }
        ,
        w.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        w.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof i) {
                var r = n.__data__;
                if (!Pr || r.length < 199)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new a(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        ;
        var Kr = We(E)
          , Jr = We(j, !0)
          , Qr = Ie()
          , ei = Ie(!0)
          , ti = Wr ? function(e, t) {
            return Wr.set(e, t),
            e
        }
        : En
          , ni = yr ? function(e, t) {
            return yr(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: An(t),
                writable: !0
            })
        }
        : En
          , ri = ae
          , ii = mr || function(e) {
            return fu.clearTimeout(e)
        }
          , oi = Lr && 1 / Ys(new Lr([, -0]))[1] == 1 / 0 ? function(e) {
            return new Lr(e)
        }
        : Nn
          , si = Wr ? function(e) {
            return Wr.get(e)
        }
        : Nn
          , ai = xr ? function(t) {
            return null == t ? [] : (t = Un(t),
            us(xr(t), function(e) {
                return dr.call(t, e)
            }))
        }
        : Yn
          , ui = xr ? function(e) {
            for (var t = []; e; )
                ds(t, ai(e)),
                e = cr(e);
            return t
        }
        : Yn
          , li = Y;
        (Nr && li(new Nr(new ArrayBuffer(1))) != fa || Pr && li(new Pr) != ta || Yr && li(Yr.resolve()) != ia || Lr && li(new Lr) != sa || Hr && li(new Hr) != la) && (li = function(e) {
            var t = Y(e)
              , n = t == ra ? e.constructor : Rs
              , r = n ? $t(n) : "";
            if (r)
                switch (r) {
                case Fr:
                    return fa;
                case zr:
                    return ta;
                case Ur:
                    return ia;
                case qr:
                    return sa;
                case Br:
                    return la
                }
            return t
        }
        );
        var ci, fi, di = Kn ? on : Ln, hi = At(ti), pi = wr || function(e, t) {
            return fu.setTimeout(e, t)
        }
        , gi = At(ni), vi = (fi = (ci = Jt(function(e) {
            var i = [];
            return $a.test(e) && i.push(""),
            e.replace(Na, function(e, t, n, r) {
                i.push(n ? r.replace(Ua, "$1") : t || e)
            }),
            i
        }, function(e) {
            return 500 === fi.size && fi.clear(),
            e
        })).cache,
        ci), yi = ae(function(e, t) {
            return nn(e) ? C(e, A(t, 1, nn, !0)) : []
        }), mi = ae(function(e, t) {
            var n = Rt(t);
            return nn(n) && (n = Rs),
            nn(e) ? C(e, A(t, 1, nn, !0), ht(n, 2)) : []
        }), _i = ae(function(e, t) {
            var n = Rt(t);
            return nn(n) && (n = Rs),
            nn(e) ? C(e, A(t, 1, nn, !0), Rs, n) : []
        }), wi = ae(function(e) {
            var t = fs(e, Ce);
            return t.length && t[0] === e[0] ? W(t) : []
        }), bi = ae(function(e) {
            var t = Rt(e)
              , n = fs(e, Ce);
            return t === Rt(n) ? t = Rs : n.pop(),
            n.length && n[0] === e[0] ? W(n, ht(t, 2)) : []
        }), ki = ae(function(e) {
            var t = Rt(e)
              , n = fs(e, Ce);
            return (t = "function" == typeof t ? t : Rs) && n.pop(),
            n.length && n[0] === e[0] ? W(n, Rs, t) : []
        }), xi = ae(Wt), Si = ut(function(e, t) {
            var n = null == e ? 0 : e.length
              , r = h(e, t);
            return ie(e, fs(t, function(e) {
                return wt(e, n) ? +e : e
            }).sort($e)),
            r
        }), Ti = ae(function(e) {
            return _e(A(e, 1, nn, !0))
        }), Ci = ae(function(e) {
            var t = Rt(e);
            return nn(t) && (t = Rs),
            _e(A(e, 1, nn, !0), ht(t, 2))
        }), Di = ae(function(e) {
            var t = Rt(e);
            return t = "function" == typeof t ? t : Rs,
            _e(A(e, 1, nn, !0), Rs, t)
        }), Mi = ae(function(e, t) {
            return nn(e) ? C(e, t) : []
        }), Oi = ae(function(e) {
            return Se(us(e, nn))
        }), Ai = ae(function(e) {
            var t = Rt(e);
            return nn(t) && (t = Rs),
            Se(us(e, nn), ht(t, 2))
        }), Ei = ae(function(e) {
            var t = Rt(e);
            return t = "function" == typeof t ? t : Rs,
            Se(us(e, nn), Rs, t)
        }), ji = ae(Ft), $i = ae(function(e) {
            var t = e.length
              , n = 1 < t ? e[t - 1] : Rs;
            return n = "function" == typeof n ? (e.pop(),
            n) : Rs,
            zt(e, n)
        }), Ni = ut(function(t) {
            var n = t.length
              , e = n ? t[0] : 0
              , r = this.__wrapped__
              , i = function(e) {
                return h(e, t)
            };
            return !(1 < n || this.__actions__.length) && r instanceof m && wt(e) ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                func: qt,
                args: [i],
                thisArg: Rs
            }),
            new y(r,this.__chain__).thru(function(e) {
                return n && !e.length && e.push(Rs),
                e
            })) : this.thru(i)
        }), Pi = He(function(e, t, n) {
            Qn.call(e, n) ? ++e[n] : d(e, n, 1)
        }), Yi = qe(Pt), Li = qe(Yt), Hi = He(function(e, t, n) {
            Qn.call(e, n) ? e[n].push(t) : d(e, n, [t])
        }), Ri = ae(function(e, t, n) {
            var r = -1
              , i = "function" == typeof t
              , o = tn(e) ? Rn(e.length) : [];
            return Kr(e, function(e) {
                o[++r] = i ? rs(t, e, n) : I(e, t, n)
            }),
            o
        }), Wi = He(function(e, t, n) {
            d(e, n, t)
        }), Ii = He(function(e, t, n) {
            e[n ? 0 : 1].push(t)
        }, function() {
            return [[], []]
        }), Fi = ae(function(e, t) {
            if (null == e)
                return [];
            var n = t.length;
            return 1 < n && bt(e, t[0], t[1]) ? t = [] : 2 < n && bt(t[0], t[1], t[2]) && (t = [t[0]]),
            te(e, A(t, 1), [])
        }), zi = _r || function() {
            return fu.Date.now()
        }
        , Ui = ae(function(e, t, n) {
            var r = 1;
            if (n.length) {
                var i = Ps(n, dt(Ui));
                r |= 32
            }
            return rt(e, r, t, n, i)
        }), qi = ae(function(e, t, n) {
            var r = 3;
            if (n.length) {
                var i = Ps(n, dt(qi));
                r |= 32
            }
            return rt(t, r, e, n, i)
        }), Bi = ae(function(e, t) {
            return T(e, 1, t)
        }), Gi = ae(function(e, t, n) {
            return T(e, mn(t) || 0, n)
        });
        Jt.Cache = a;
        var Vi, Xi = ri(function(r, i) {
            var o = (i = 1 == i.length && no(i[0]) ? fs(i[0], Cs(ht())) : fs(A(i, 1), Cs(ht()))).length;
            return ae(function(e) {
                for (var t = -1, n = Or(e.length, o); ++t < n; )
                    e[t] = i[t].call(this, e[t]);
                return rs(r, this, e)
            })
        }), Zi = ae(function(e, t) {
            var n = Ps(t, dt(Zi));
            return rt(e, 32, Rs, t, n)
        }), Ki = ae(function(e, t) {
            var n = Ps(t, dt(Ki));
            return rt(e, 64, Rs, t, n)
        }), Ji = ut(function(e, t) {
            return rt(e, 256, Rs, Rs, Rs, t)
        }), Qi = Qe(L), eo = Qe(function(e, t) {
            return t <= e
        }), to = F(function() {
            return arguments
        }()) ? F : function(e) {
            return ln(e) && Qn.call(e, "callee") && !dr.call(e, "callee")
        }
        , no = Rn.isArray, ro = hu ? Cs(hu) : function(e) {
            return ln(e) && Y(e) == ca
        }
        , io = Sr || Ln, oo = pu ? Cs(pu) : function(e) {
            return ln(e) && Y(e) == Ks
        }
        , so = gu ? Cs(gu) : function(e) {
            return ln(e) && li(e) == ta
        }
        , ao = vu ? Cs(vu) : function(e) {
            return ln(e) && Y(e) == oa
        }
        , uo = yu ? Cs(yu) : function(e) {
            return ln(e) && li(e) == sa
        }
        , lo = mu ? Cs(mu) : function(e) {
            return ln(e) && an(e.length) && !!au[Y(e)]
        }
        , co = Qe(X), fo = Qe(function(e, t) {
            return e <= t
        }), ho = Re(function(e, t) {
            if (St(t) || tn(t))
                Le(t, xn(t), e);
            else
                for (var n in t)
                    Qn.call(t, n) && b(e, n, t[n])
        }), po = Re(function(e, t) {
            Le(t, Sn(t), e)
        }), go = Re(function(e, t, n, r) {
            Le(t, Sn(t), e, r)
        }), vo = Re(function(e, t, n, r) {
            Le(t, xn(t), e, r)
        }), yo = ut(h), mo = ae(function(e) {
            return e.push(Rs, it),
            rs(go, Rs, e)
        }), _o = ae(function(e) {
            return e.push(Rs, ot),
            rs(So, Rs, e)
        }), wo = Ve(function(e, t, n) {
            e[t] = n
        }, An(En)), bo = Ve(function(e, t, n) {
            Qn.call(e, t) ? e[t].push(n) : e[t] = [n]
        }, ht), ko = ae(I), xo = Re(function(e, t, n) {
            Q(e, t, n)
        }), So = Re(function(e, t, n, r) {
            Q(e, t, n, r)
        }), To = ut(function(t, e) {
            var n = {};
            if (null == t)
                return n;
            var r = !1;
            e = fs(e, function(e) {
                return e = Me(e, t),
                r || (r = 1 < e.length),
                e
            }),
            Le(t, ct(t), n),
            r && (n = x(n, 7, st));
            for (var i = e.length; i--; )
                we(n, e[i]);
            return n
        }), Co = ut(function(e, t) {
            return null == e ? {} : function(n, e) {
                return ne(n, e, function(e, t) {
                    return kn(n, t)
                })
            }(e, t)
        }), Do = nt(xn), Mo = nt(Sn), Oo = ze(function(e, t, n) {
            return t = t.toLowerCase(),
            e + (n ? Dn(t) : t)
        }), Ao = ze(function(e, t, n) {
            return e + (n ? "-" : "") + t.toLowerCase()
        }), Eo = ze(function(e, t, n) {
            return e + (n ? " " : "") + t.toLowerCase()
        }), jo = Fe("toLowerCase"), $o = ze(function(e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase()
        }), No = ze(function(e, t, n) {
            return e + (n ? " " : "") + Yo(t)
        }), Po = ze(function(e, t, n) {
            return e + (n ? " " : "") + t.toUpperCase()
        }), Yo = Fe("toUpperCase"), Lo = ae(function(e, t) {
            try {
                return rs(e, Rs, t)
            } catch (e) {
                return rn(e) ? e : new In(e)
            }
        }), Ho = ut(function(t, e) {
            return os(e, function(e) {
                e = jt(e),
                d(t, e, Ui(t[e], t))
            }),
            t
        }), Ro = Be(), Wo = Be(!0), Io = ae(function(t, n) {
            return function(e) {
                return I(e, t, n)
            }
        }), Fo = ae(function(t, n) {
            return function(e) {
                return I(t, e, n)
            }
        }), zo = Ze(fs), Uo = Ze(as), qo = Ze(gs), Bo = Je(), Go = Je(!0), Vo = Xe(function(e, t) {
            return e + t
        }, 0), Xo = tt("ceil"), Zo = Xe(function(e, t) {
            return e / t
        }, 1), Ko = tt("floor"), Jo = Xe(function(e, t) {
            return e * t
        }, 1), Qo = tt("round"), es = Xe(function(e, t) {
            return e - t
        }, 0);
        return v.after = function(e, t) {
            if ("function" != typeof t)
                throw new Gn(Ws);
            return e = vn(e),
            function() {
                if (--e < 1)
                    return t.apply(this, arguments)
            }
        }
        ,
        v.ary = Xt,
        v.assign = ho,
        v.assignIn = po,
        v.assignInWith = go,
        v.assignWith = vo,
        v.at = yo,
        v.before = Zt,
        v.bind = Ui,
        v.bindAll = Ho,
        v.bindKey = qi,
        v.castArray = function() {
            if (!arguments.length)
                return [];
            var e = arguments[0];
            return no(e) ? e : [e]
        }
        ,
        v.chain = Ut,
        v.chunk = function(e, t, n) {
            t = (n ? bt(e, t, n) : t === Rs) ? 1 : Mr(vn(t), 0);
            var r = null == e ? 0 : e.length;
            if (!r || t < 1)
                return [];
            for (var i = 0, o = 0, s = Rn(br(r / t)); i < r; )
                s[o++] = de(e, i, i += t);
            return s
        }
        ,
        v.compact = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                var o = e[t];
                o && (i[r++] = o)
            }
            return i
        }
        ,
        v.concat = function() {
            var e = arguments.length;
            if (!e)
                return [];
            for (var t = Rn(e - 1), n = arguments[0], r = e; r--; )
                t[r - 1] = arguments[r];
            return ds(no(n) ? Ye(n) : [n], A(t, 1))
        }
        ,
        v.cond = function(r) {
            var i = null == r ? 0 : r.length
              , t = ht();
            return r = i ? fs(r, function(e) {
                if ("function" != typeof e[1])
                    throw new Gn(Ws);
                return [t(e[0]), e[1]]
            }) : [],
            ae(function(e) {
                for (var t = -1; ++t < i; ) {
                    var n = r[t];
                    if (rs(n[0], this, e))
                        return rs(n[1], this, e)
                }
            })
        }
        ,
        v.conforms = function(e) {
            return function(t) {
                var n = xn(t);
                return function(e) {
                    return S(e, t, n)
                }
            }(x(e, 1))
        }
        ,
        v.constant = An,
        v.countBy = Pi,
        v.create = function(e, t) {
            var n = Zr(e);
            return null == t ? n : k(n, t)
        }
        ,
        v.curry = function e(t, n, r) {
            var i = rt(t, 8, Rs, Rs, Rs, Rs, Rs, n = r ? Rs : n);
            return i.placeholder = e.placeholder,
            i
        }
        ,
        v.curryRight = function e(t, n, r) {
            var i = rt(t, 16, Rs, Rs, Rs, Rs, Rs, n = r ? Rs : n);
            return i.placeholder = e.placeholder,
            i
        }
        ,
        v.debounce = Kt,
        v.defaults = mo,
        v.defaultsDeep = _o,
        v.defer = Bi,
        v.delay = Gi,
        v.difference = yi,
        v.differenceBy = mi,
        v.differenceWith = _i,
        v.drop = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? de(e, (t = n || t === Rs ? 1 : vn(t)) < 0 ? 0 : t, r) : []
        }
        ,
        v.dropRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? de(e, 0, (t = r - (t = n || t === Rs ? 1 : vn(t))) < 0 ? 0 : t) : []
        }
        ,
        v.dropRightWhile = function(e, t) {
            return e && e.length ? ke(e, ht(t, 3), !0, !0) : []
        }
        ,
        v.dropWhile = function(e, t) {
            return e && e.length ? ke(e, ht(t, 3), !0) : []
        }
        ,
        v.fill = function(e, t, n, r) {
            var i = null == e ? 0 : e.length;
            return i ? (n && "number" != typeof n && bt(e, t, n) && (n = 0,
            r = i),
            function(e, t, n, r) {
                var i = e.length;
                for ((n = vn(n)) < 0 && (n = i < -n ? 0 : i + n),
                (r = r === Rs || i < r ? i : vn(r)) < 0 && (r += i),
                r = r < n ? 0 : yn(r); n < r; )
                    e[n++] = t;
                return e
            }(e, t, n, r)) : []
        }
        ,
        v.filter = function(e, t) {
            return (no(e) ? us : O)(e, ht(t, 3))
        }
        ,
        v.flatMap = function(e, t) {
            return A(Vt(e, t), 1)
        }
        ,
        v.flatMapDeep = function(e, t) {
            return A(Vt(e, t), 1 / 0)
        }
        ,
        v.flatMapDepth = function(e, t, n) {
            return n = n === Rs ? 1 : vn(n),
            A(Vt(e, t), n)
        }
        ,
        v.flatten = Lt,
        v.flattenDeep = function(e) {
            return null != e && e.length ? A(e, 1 / 0) : []
        }
        ,
        v.flattenDepth = function(e, t) {
            return null != e && e.length ? A(e, t = t === Rs ? 1 : vn(t)) : []
        }
        ,
        v.flip = function(e) {
            return rt(e, 512)
        }
        ,
        v.flow = Ro,
        v.flowRight = Wo,
        v.fromPairs = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                var i = e[t];
                r[i[0]] = i[1]
            }
            return r
        }
        ,
        v.functions = function(e) {
            return null == e ? [] : $(e, xn(e))
        }
        ,
        v.functionsIn = function(e) {
            return null == e ? [] : $(e, Sn(e))
        }
        ,
        v.groupBy = Hi,
        v.initial = function(e) {
            return null != e && e.length ? de(e, 0, -1) : []
        }
        ,
        v.intersection = wi,
        v.intersectionBy = bi,
        v.intersectionWith = ki,
        v.invert = wo,
        v.invertBy = bo,
        v.invokeMap = Ri,
        v.iteratee = jn,
        v.keyBy = Wi,
        v.keys = xn,
        v.keysIn = Sn,
        v.map = Vt,
        v.mapKeys = function(e, r) {
            var i = {};
            return r = ht(r, 3),
            E(e, function(e, t, n) {
                d(i, r(e, t, n), e)
            }),
            i
        }
        ,
        v.mapValues = function(e, r) {
            var i = {};
            return r = ht(r, 3),
            E(e, function(e, t, n) {
                d(i, t, r(e, t, n))
            }),
            i
        }
        ,
        v.matches = function(e) {
            return K(x(e, 1))
        }
        ,
        v.matchesProperty = function(e, t) {
            return J(e, x(t, 1))
        }
        ,
        v.memoize = Jt,
        v.merge = xo,
        v.mergeWith = So,
        v.method = Io,
        v.methodOf = Fo,
        v.mixin = $n,
        v.negate = Qt,
        v.nthArg = function(t) {
            return t = vn(t),
            ae(function(e) {
                return ee(e, t)
            })
        }
        ,
        v.omit = To,
        v.omitBy = function(e, t) {
            return Tn(e, Qt(ht(t)))
        }
        ,
        v.once = function(e) {
            return Zt(2, e)
        }
        ,
        v.orderBy = function(e, t, n, r) {
            return null == e ? [] : (no(t) || (t = null == t ? [] : [t]),
            no(n = r ? Rs : n) || (n = null == n ? [] : [n]),
            te(e, t, n))
        }
        ,
        v.over = zo,
        v.overArgs = Xi,
        v.overEvery = Uo,
        v.overSome = qo,
        v.partial = Zi,
        v.partialRight = Ki,
        v.partition = Ii,
        v.pick = Co,
        v.pickBy = Tn,
        v.property = Pn,
        v.propertyOf = function(t) {
            return function(e) {
                return null == t ? Rs : N(t, e)
            }
        }
        ,
        v.pull = xi,
        v.pullAll = Wt,
        v.pullAllBy = function(e, t, n) {
            return e && e.length && t && t.length ? re(e, t, ht(n, 2)) : e
        }
        ,
        v.pullAllWith = function(e, t, n) {
            return e && e.length && t && t.length ? re(e, t, Rs, n) : e
        }
        ,
        v.pullAt = Si,
        v.range = Bo,
        v.rangeRight = Go,
        v.rearg = Ji,
        v.reject = function(e, t) {
            return (no(e) ? us : O)(e, Qt(ht(t, 3)))
        }
        ,
        v.remove = function(e, t) {
            var n = [];
            if (!e || !e.length)
                return n;
            var r = -1
              , i = []
              , o = e.length;
            for (t = ht(t, 3); ++r < o; ) {
                var s = e[r];
                t(s, r, e) && (n.push(s),
                i.push(r))
            }
            return ie(e, i),
            n
        }
        ,
        v.rest = function(e, t) {
            if ("function" != typeof e)
                throw new Gn(Ws);
            return ae(e, t = t === Rs ? t : vn(t))
        }
        ,
        v.reverse = It,
        v.sampleSize = function(e, t, n) {
            return t = (n ? bt(e, t, n) : t === Rs) ? 1 : vn(t),
            (no(e) ? u : le)(e, t)
        }
        ,
        v.set = function(e, t, n) {
            return null == e ? e : ce(e, t, n)
        }
        ,
        v.setWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : Rs,
            null == e ? e : ce(e, t, n, r)
        }
        ,
        v.shuffle = function(e) {
            return (no(e) ? l : fe)(e)
        }
        ,
        v.slice = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? (n = n && "number" != typeof n && bt(e, t, n) ? (t = 0,
            r) : (t = null == t ? 0 : vn(t),
            n === Rs ? r : vn(n)),
            de(e, t, n)) : []
        }
        ,
        v.sortBy = Fi,
        v.sortedUniq = function(e) {
            return e && e.length ? ve(e) : []
        }
        ,
        v.sortedUniqBy = function(e, t) {
            return e && e.length ? ve(e, ht(t, 2)) : []
        }
        ,
        v.split = function(e, t, n) {
            return n && "number" != typeof n && bt(e, t, n) && (t = n = Rs),
            (n = n === Rs ? Bs : n >>> 0) ? (e = wn(e)) && ("string" == typeof t || null != t && !ao(t)) && !(t = me(t)) && js(e) ? Oe(Hs(e), 0, n) : e.split(t, n) : []
        }
        ,
        v.spread = function(r, i) {
            if ("function" != typeof r)
                throw new Gn(Ws);
            return i = null == i ? 0 : Mr(vn(i), 0),
            ae(function(e) {
                var t = e[i]
                  , n = Oe(e, 0, i);
                return t && ds(n, t),
                rs(r, this, n)
            })
        }
        ,
        v.tail = function(e) {
            var t = null == e ? 0 : e.length;
            return t ? de(e, 1, t) : []
        }
        ,
        v.take = function(e, t, n) {
            return e && e.length ? de(e, 0, (t = n || t === Rs ? 1 : vn(t)) < 0 ? 0 : t) : []
        }
        ,
        v.takeRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? de(e, (t = r - (t = n || t === Rs ? 1 : vn(t))) < 0 ? 0 : t, r) : []
        }
        ,
        v.takeRightWhile = function(e, t) {
            return e && e.length ? ke(e, ht(t, 3), !1, !0) : []
        }
        ,
        v.takeWhile = function(e, t) {
            return e && e.length ? ke(e, ht(t, 3)) : []
        }
        ,
        v.tap = function(e, t) {
            return t(e),
            e
        }
        ,
        v.throttle = function(e, t, n) {
            var r = !0
              , i = !0;
            if ("function" != typeof e)
                throw new Gn(Ws);
            return un(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            Kt(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        ,
        v.thru = qt,
        v.toArray = pn,
        v.toPairs = Do,
        v.toPairsIn = Mo,
        v.toPath = function(e) {
            return no(e) ? fs(e, jt) : hn(e) ? [e] : Ye(vi(wn(e)))
        }
        ,
        v.toPlainObject = _n,
        v.transform = function(e, r, i) {
            var t = no(e)
              , n = t || io(e) || lo(e);
            if (r = ht(r, 4),
            null == i) {
                var o = e && e.constructor;
                i = n ? t ? new o : [] : un(e) && on(o) ? Zr(cr(e)) : {}
            }
            return (n ? os : E)(e, function(e, t, n) {
                return r(i, e, t, n)
            }),
            i
        }
        ,
        v.unary = function(e) {
            return Xt(e, 1)
        }
        ,
        v.union = Ti,
        v.unionBy = Ci,
        v.unionWith = Di,
        v.uniq = function(e) {
            return e && e.length ? _e(e) : []
        }
        ,
        v.uniqBy = function(e, t) {
            return e && e.length ? _e(e, ht(t, 2)) : []
        }
        ,
        v.uniqWith = function(e, t) {
            return t = "function" == typeof t ? t : Rs,
            e && e.length ? _e(e, Rs, t) : []
        }
        ,
        v.unset = function(e, t) {
            return null == e || we(e, t)
        }
        ,
        v.unzip = Ft,
        v.unzipWith = zt,
        v.update = function(e, t, n) {
            return null == e ? e : be(e, t, De(n))
        }
        ,
        v.updateWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : Rs,
            null == e ? e : be(e, t, De(n), r)
        }
        ,
        v.values = Cn,
        v.valuesIn = function(e) {
            return null == e ? [] : Ds(e, Sn(e))
        }
        ,
        v.without = Mi,
        v.words = On,
        v.wrap = function(e, t) {
            return Zi(De(t), e)
        }
        ,
        v.xor = Oi,
        v.xorBy = Ai,
        v.xorWith = Ei,
        v.zip = ji,
        v.zipObject = function(e, t) {
            return Te(e || [], t || [], b)
        }
        ,
        v.zipObjectDeep = function(e, t) {
            return Te(e || [], t || [], ce)
        }
        ,
        v.zipWith = $i,
        v.entries = Do,
        v.entriesIn = Mo,
        v.extend = po,
        v.extendWith = go,
        $n(v, v),
        v.add = Vo,
        v.attempt = Lo,
        v.camelCase = Oo,
        v.capitalize = Dn,
        v.ceil = Xo,
        v.clamp = function(e, t, n) {
            return n === Rs && (n = t,
            t = Rs),
            n !== Rs && (n = (n = mn(n)) == n ? n : 0),
            t !== Rs && (t = (t = mn(t)) == t ? t : 0),
            p(mn(e), t, n)
        }
        ,
        v.clone = function(e) {
            return x(e, 4)
        }
        ,
        v.cloneDeep = function(e) {
            return x(e, 5)
        }
        ,
        v.cloneDeepWith = function(e, t) {
            return x(e, 5, t = "function" == typeof t ? t : Rs)
        }
        ,
        v.cloneWith = function(e, t) {
            return x(e, 4, t = "function" == typeof t ? t : Rs)
        }
        ,
        v.conformsTo = function(e, t) {
            return null == t || S(e, t, xn(t))
        }
        ,
        v.deburr = Mn,
        v.defaultTo = function(e, t) {
            return null == e || e != e ? t : e
        }
        ,
        v.divide = Zo,
        v.endsWith = function(e, t, n) {
            e = wn(e),
            t = me(t);
            var r = e.length
              , i = n = n === Rs ? r : p(vn(n), 0, r);
            return 0 <= (n -= t.length) && e.slice(n, i) == t
        }
        ,
        v.eq = en,
        v.escape = function(e) {
            return (e = wn(e)) && Da.test(e) ? e.replace(Ta, wu) : e
        }
        ,
        v.escapeRegExp = function(e) {
            return (e = wn(e)) && Ya.test(e) ? e.replace(Pa, "\\$&") : e
        }
        ,
        v.every = function(e, t, n) {
            var r = no(e) ? as : D;
            return n && bt(e, t, n) && (t = Rs),
            r(e, ht(t, 3))
        }
        ,
        v.find = Yi,
        v.findIndex = Pt,
        v.findKey = function(e, t) {
            return vs(e, ht(t, 3), E)
        }
        ,
        v.findLast = Li,
        v.findLastIndex = Yt,
        v.findLastKey = function(e, t) {
            return vs(e, ht(t, 3), j)
        }
        ,
        v.floor = Ko,
        v.forEach = Bt,
        v.forEachRight = Gt,
        v.forIn = function(e, t) {
            return null == e ? e : Qr(e, ht(t, 3), Sn)
        }
        ,
        v.forInRight = function(e, t) {
            return null == e ? e : ei(e, ht(t, 3), Sn)
        }
        ,
        v.forOwn = function(e, t) {
            return e && E(e, ht(t, 3))
        }
        ,
        v.forOwnRight = function(e, t) {
            return e && j(e, ht(t, 3))
        }
        ,
        v.get = bn,
        v.gt = Qi,
        v.gte = eo,
        v.has = function(e, t) {
            return null != e && yt(e, t, H)
        }
        ,
        v.hasIn = kn,
        v.head = Ht,
        v.identity = En,
        v.includes = function(e, t, n, r) {
            e = tn(e) ? e : Cn(e),
            n = n && !r ? vn(n) : 0;
            var i = e.length;
            return n < 0 && (n = Mr(i + n, 0)),
            dn(e) ? n <= i && -1 < e.indexOf(t, n) : !!i && -1 < ms(e, t, n)
        }
        ,
        v.indexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = null == n ? 0 : vn(n);
            return i < 0 && (i = Mr(r + i, 0)),
            ms(e, t, i)
        }
        ,
        v.inRange = function(e, t, n) {
            return t = gn(t),
            n === Rs ? (n = t,
            t = 0) : n = gn(n),
            function(e, t, n) {
                return e >= Or(t, n) && e < Mr(t, n)
            }(e = mn(e), t, n)
        }
        ,
        v.invoke = ko,
        v.isArguments = to,
        v.isArray = no,
        v.isArrayBuffer = ro,
        v.isArrayLike = tn,
        v.isArrayLikeObject = nn,
        v.isBoolean = function(e) {
            return !0 === e || !1 === e || ln(e) && Y(e) == Zs
        }
        ,
        v.isBuffer = io,
        v.isDate = oo,
        v.isElement = function(e) {
            return ln(e) && 1 === e.nodeType && !fn(e)
        }
        ,
        v.isEmpty = function(e) {
            if (null == e)
                return !0;
            if (tn(e) && (no(e) || "string" == typeof e || "function" == typeof e.splice || io(e) || lo(e) || to(e)))
                return !e.length;
            var t = li(e);
            if (t == ta || t == sa)
                return !e.size;
            if (St(e))
                return !G(e).length;
            for (var n in e)
                if (Qn.call(e, n))
                    return !1;
            return !0
        }
        ,
        v.isEqual = function(e, t) {
            return z(e, t)
        }
        ,
        v.isEqualWith = function(e, t, n) {
            var r = (n = "function" == typeof n ? n : Rs) ? n(e, t) : Rs;
            return r === Rs ? z(e, t, Rs, n) : !!r
        }
        ,
        v.isError = rn,
        v.isFinite = function(e) {
            return "number" == typeof e && Tr(e)
        }
        ,
        v.isFunction = on,
        v.isInteger = sn,
        v.isLength = an,
        v.isMap = so,
        v.isMatch = function(e, t) {
            return e === t || U(e, t, gt(t))
        }
        ,
        v.isMatchWith = function(e, t, n) {
            return n = "function" == typeof n ? n : Rs,
            U(e, t, gt(t), n)
        }
        ,
        v.isNaN = function(e) {
            return cn(e) && e != +e
        }
        ,
        v.isNative = function(e) {
            if (di(e))
                throw new In("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
            return q(e)
        }
        ,
        v.isNil = function(e) {
            return null == e
        }
        ,
        v.isNull = function(e) {
            return null === e
        }
        ,
        v.isNumber = cn,
        v.isObject = un,
        v.isObjectLike = ln,
        v.isPlainObject = fn,
        v.isRegExp = ao,
        v.isSafeInteger = function(e) {
            return sn(e) && -Us <= e && e <= Us
        }
        ,
        v.isSet = uo,
        v.isString = dn,
        v.isSymbol = hn,
        v.isTypedArray = lo,
        v.isUndefined = function(e) {
            return e === Rs
        }
        ,
        v.isWeakMap = function(e) {
            return ln(e) && li(e) == la
        }
        ,
        v.isWeakSet = function(e) {
            return ln(e) && "[object WeakSet]" == Y(e)
        }
        ,
        v.join = function(e, t) {
            return null == e ? "" : Cr.call(e, t)
        }
        ,
        v.kebabCase = Ao,
        v.last = Rt,
        v.lastIndexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r)
                return -1;
            var i = r;
            return n !== Rs && (i = (i = vn(n)) < 0 ? Mr(r + i, 0) : Or(i, r - 1)),
            t == t ? function(e, t, n) {
                for (var r = n + 1; r--; )
                    if (e[r] === t)
                        return r;
                return r
            }(e, t, i) : ys(e, ws, i, !0)
        }
        ,
        v.lowerCase = Eo,
        v.lowerFirst = jo,
        v.lt = co,
        v.lte = fo,
        v.max = function(e) {
            return e && e.length ? M(e, En, L) : Rs
        }
        ,
        v.maxBy = function(e, t) {
            return e && e.length ? M(e, ht(t, 2), L) : Rs
        }
        ,
        v.mean = function(e) {
            return bs(e, En)
        }
        ,
        v.meanBy = function(e, t) {
            return bs(e, ht(t, 2))
        }
        ,
        v.min = function(e) {
            return e && e.length ? M(e, En, X) : Rs
        }
        ,
        v.minBy = function(e, t) {
            return e && e.length ? M(e, ht(t, 2), X) : Rs
        }
        ,
        v.stubArray = Yn,
        v.stubFalse = Ln,
        v.stubObject = function() {
            return {}
        }
        ,
        v.stubString = function() {
            return ""
        }
        ,
        v.stubTrue = function() {
            return !0
        }
        ,
        v.multiply = Jo,
        v.nth = function(e, t) {
            return e && e.length ? ee(e, vn(t)) : Rs
        }
        ,
        v.noConflict = function() {
            return fu._ === this && (fu._ = ir),
            this
        }
        ,
        v.noop = Nn,
        v.now = zi,
        v.pad = function(e, t, n) {
            e = wn(e);
            var r = (t = vn(t)) ? Ls(e) : 0;
            if (!t || t <= r)
                return e;
            var i = (t - r) / 2;
            return Ke(kr(i), n) + e + Ke(br(i), n)
        }
        ,
        v.padEnd = function(e, t, n) {
            e = wn(e);
            var r = (t = vn(t)) ? Ls(e) : 0;
            return t && r < t ? e + Ke(t - r, n) : e
        }
        ,
        v.padStart = function(e, t, n) {
            e = wn(e);
            var r = (t = vn(t)) ? Ls(e) : 0;
            return t && r < t ? Ke(t - r, n) + e : e
        }
        ,
        v.parseInt = function(e, t, n) {
            return n || null == t ? t = 0 : t && (t = +t),
            Er(wn(e).replace(Ha, ""), t || 0)
        }
        ,
        v.random = function(e, t, n) {
            if (n && "boolean" != typeof n && bt(e, t, n) && (t = n = Rs),
            n === Rs && ("boolean" == typeof t ? (n = t,
            t = Rs) : "boolean" == typeof e && (n = e,
            e = Rs)),
            e === Rs && t === Rs ? (e = 0,
            t = 1) : (e = gn(e),
            t === Rs ? (t = e,
            e = 0) : t = gn(t)),
            t < e) {
                var r = e;
                e = t,
                t = r
            }
            if (n || e % 1 || t % 1) {
                var i = jr();
                return Or(e + i * (t - e + lu("1e-" + ((i + "").length - 1))), t)
            }
            return oe(e, t)
        }
        ,
        v.reduce = function(e, t, n) {
            var r = no(e) ? hs : xs
              , i = arguments.length < 3;
            return r(e, ht(t, 4), n, i, Kr)
        }
        ,
        v.reduceRight = function(e, t, n) {
            var r = no(e) ? ps : xs
              , i = arguments.length < 3;
            return r(e, ht(t, 4), n, i, Jr)
        }
        ,
        v.repeat = function(e, t, n) {
            return t = (n ? bt(e, t, n) : t === Rs) ? 1 : vn(t),
            se(wn(e), t)
        }
        ,
        v.replace = function() {
            var e = arguments
              , t = wn(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2])
        }
        ,
        v.result = function(e, t, n) {
            var r = -1
              , i = (t = Me(t, e)).length;
            for (i || (i = 1,
            e = Rs); ++r < i; ) {
                var o = null == e ? Rs : e[jt(t[r])];
                o === Rs && (r = i,
                o = n),
                e = on(o) ? o.call(e) : o
            }
            return e
        }
        ,
        v.round = Qo,
        v.runInContext = e,
        v.sample = function(e) {
            return (no(e) ? s : ue)(e)
        }
        ,
        v.size = function(e) {
            if (null == e)
                return 0;
            if (tn(e))
                return dn(e) ? Ls(e) : e.length;
            var t = li(e);
            return t == ta || t == sa ? e.size : G(e).length
        }
        ,
        v.snakeCase = $o,
        v.some = function(e, t, n) {
            var r = no(e) ? gs : he;
            return n && bt(e, t, n) && (t = Rs),
            r(e, ht(t, 3))
        }
        ,
        v.sortedIndex = function(e, t) {
            return pe(e, t)
        }
        ,
        v.sortedIndexBy = function(e, t, n) {
            return ge(e, t, ht(n, 2))
        }
        ,
        v.sortedIndexOf = function(e, t) {
            var n = null == e ? 0 : e.length;
            if (n) {
                var r = pe(e, t);
                if (r < n && en(e[r], t))
                    return r
            }
            return -1
        }
        ,
        v.sortedLastIndex = function(e, t) {
            return pe(e, t, !0)
        }
        ,
        v.sortedLastIndexBy = function(e, t, n) {
            return ge(e, t, ht(n, 2), !0)
        }
        ,
        v.sortedLastIndexOf = function(e, t) {
            if (null != e && e.length) {
                var n = pe(e, t, !0) - 1;
                if (en(e[n], t))
                    return n
            }
            return -1
        }
        ,
        v.startCase = No,
        v.startsWith = function(e, t, n) {
            return e = wn(e),
            n = null == n ? 0 : p(vn(n), 0, e.length),
            t = me(t),
            e.slice(n, n + t.length) == t
        }
        ,
        v.subtract = es,
        v.sum = function(e) {
            return e && e.length ? Ss(e, En) : 0
        }
        ,
        v.sumBy = function(e, t) {
            return e && e.length ? Ss(e, ht(t, 2)) : 0
        }
        ,
        v.template = function(s, e, t) {
            var n = v.templateSettings;
            t && bt(s, e, t) && (e = Rs),
            s = wn(s),
            e = go({}, e, n, it);
            var a, u, r = go({}, e.imports, n.imports, it), i = xn(r), o = Ds(r, i), l = 0, c = e.interpolate || Qa, f = "__p += '", d = qn((e.escape || Qa).source + "|" + c.source + "|" + (c === Aa ? qa : Qa).source + "|" + (e.evaluate || Qa).source + "|$", "g"), h = "//# sourceURL=" + ("sourceURL"in e ? e.sourceURL : "lodash.templateSources[" + ++su + "]") + "\n";
            s.replace(d, function(e, t, n, r, i, o) {
                return n || (n = r),
                f += s.slice(l, o).replace(eu, Es),
                t && (a = !0,
                f += "' +\n__e(" + t + ") +\n'"),
                i && (u = !0,
                f += "';\n" + i + ";\n__p += '"),
                n && (f += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                l = o + e.length,
                e
            }),
            f += "';\n";
            var p = e.variable;
            p || (f = "with (obj) {\n" + f + "\n}\n"),
            f = (u ? f.replace(ba, "") : f).replace(ka, "$1").replace(xa, "$1;"),
            f = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var g = Lo(function() {
                return Fn(i, h + "return " + f).apply(Rs, o)
            });
            if (g.source = f,
            rn(g))
                throw g;
            return g
        }
        ,
        v.times = function(e, t) {
            if ((e = vn(e)) < 1 || Us < e)
                return [];
            var n = Bs
              , r = Or(e, Bs);
            t = ht(t),
            e -= Bs;
            for (var i = Ts(r, t); ++n < e; )
                t(n);
            return i
        }
        ,
        v.toFinite = gn,
        v.toInteger = vn,
        v.toLength = yn,
        v.toLower = function(e) {
            return wn(e).toLowerCase()
        }
        ,
        v.toNumber = mn,
        v.toSafeInteger = function(e) {
            return e ? p(vn(e), -Us, Us) : 0 === e ? e : 0
        }
        ,
        v.toString = wn,
        v.toUpper = function(e) {
            return wn(e).toUpperCase()
        }
        ,
        v.trim = function(e, t, n) {
            if ((e = wn(e)) && (n || t === Rs))
                return e.replace(La, "");
            if (!e || !(t = me(t)))
                return e;
            var r = Hs(e)
              , i = Hs(t);
            return Oe(r, Os(r, i), As(r, i) + 1).join("")
        }
        ,
        v.trimEnd = function(e, t, n) {
            if ((e = wn(e)) && (n || t === Rs))
                return e.replace(Ra, "");
            if (!e || !(t = me(t)))
                return e;
            var r = Hs(e);
            return Oe(r, 0, As(r, Hs(t)) + 1).join("")
        }
        ,
        v.trimStart = function(e, t, n) {
            if ((e = wn(e)) && (n || t === Rs))
                return e.replace(Ha, "");
            if (!e || !(t = me(t)))
                return e;
            var r = Hs(e);
            return Oe(r, Os(r, Hs(t))).join("")
        }
        ,
        v.truncate = function(e, t) {
            var n = 30
              , r = "...";
            if (un(t)) {
                var i = "separator"in t ? t.separator : i;
                n = "length"in t ? vn(t.length) : n,
                r = "omission"in t ? me(t.omission) : r
            }
            var o = (e = wn(e)).length;
            if (js(e)) {
                var s = Hs(e);
                o = s.length
            }
            if (o <= n)
                return e;
            var a = n - Ls(r);
            if (a < 1)
                return r;
            var u = s ? Oe(s, 0, a).join("") : e.slice(0, a);
            if (i === Rs)
                return u + r;
            if (s && (a += u.length - a),
            ao(i)) {
                if (e.slice(a).search(i)) {
                    var l, c = u;
                    for (i.global || (i = qn(i.source, wn(Ba.exec(i)) + "g")),
                    i.lastIndex = 0; l = i.exec(c); )
                        var f = l.index;
                    u = u.slice(0, f === Rs ? a : f)
                }
            } else if (e.indexOf(me(i), a) != a) {
                var d = u.lastIndexOf(i);
                -1 < d && (u = u.slice(0, d))
            }
            return u + r
        }
        ,
        v.unescape = function(e) {
            return (e = wn(e)) && Ca.test(e) ? e.replace(Sa, bu) : e
        }
        ,
        v.uniqueId = function(e) {
            var t = ++er;
            return wn(e) + t
        }
        ,
        v.upperCase = Po,
        v.upperFirst = Yo,
        v.each = Bt,
        v.eachRight = Gt,
        v.first = Ht,
        $n(v, (Vi = {},
        E(v, function(e, t) {
            Qn.call(v.prototype, t) || (Vi[t] = e)
        }),
        Vi), {
            chain: !1
        }),
        v.VERSION = "4.17.4",
        os(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
            v[e].placeholder = v
        }),
        os(["drop", "take"], function(n, r) {
            m.prototype[n] = function(e) {
                e = e === Rs ? 1 : Mr(vn(e), 0);
                var t = this.__filtered__ && !r ? new m(this) : this.clone();
                return t.__filtered__ ? t.__takeCount__ = Or(e, t.__takeCount__) : t.__views__.push({
                    size: Or(e, Bs),
                    type: n + (t.__dir__ < 0 ? "Right" : "")
                }),
                t
            }
            ,
            m.prototype[n + "Right"] = function(e) {
                return this.reverse()[n](e).reverse()
            }
        }),
        os(["filter", "map", "takeWhile"], function(e, t) {
            var n = t + 1
              , r = 1 == n || 3 == n;
            m.prototype[e] = function(e) {
                var t = this.clone();
                return t.__iteratees__.push({
                    iteratee: ht(e, 3),
                    type: n
                }),
                t.__filtered__ = t.__filtered__ || r,
                t
            }
        }),
        os(["head", "last"], function(e, t) {
            var n = "take" + (t ? "Right" : "");
            m.prototype[e] = function() {
                return this[n](1).value()[0]
            }
        }),
        os(["initial", "tail"], function(e, t) {
            var n = "drop" + (t ? "" : "Right");
            m.prototype[e] = function() {
                return this.__filtered__ ? new m(this) : this[n](1)
            }
        }),
        m.prototype.compact = function() {
            return this.filter(En)
        }
        ,
        m.prototype.find = function(e) {
            return this.filter(e).head()
        }
        ,
        m.prototype.findLast = function(e) {
            return this.reverse().find(e)
        }
        ,
        m.prototype.invokeMap = ae(function(t, n) {
            return "function" == typeof t ? new m(this) : this.map(function(e) {
                return I(e, t, n)
            })
        }),
        m.prototype.reject = function(e) {
            return this.filter(Qt(ht(e)))
        }
        ,
        m.prototype.slice = function(e, t) {
            e = vn(e);
            var n = this;
            return n.__filtered__ && (0 < e || t < 0) ? new m(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)),
            t !== Rs && (n = (t = vn(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
            n)
        }
        ,
        m.prototype.takeRightWhile = function(e) {
            return this.reverse().takeWhile(e).reverse()
        }
        ,
        m.prototype.toArray = function() {
            return this.take(Bs)
        }
        ,
        E(m.prototype, function(f, e) {
            var d = /^(?:filter|find|map|reject)|While$/.test(e)
              , h = /^(?:head|last)$/.test(e)
              , p = v[h ? "take" + ("last" == e ? "Right" : "") : e]
              , g = h || /^find/.test(e);
            p && (v.prototype[e] = function() {
                var e = this.__wrapped__
                  , n = h ? [1] : arguments
                  , t = e instanceof m
                  , r = n[0]
                  , i = t || no(e)
                  , o = function(e) {
                    var t = p.apply(v, ds([e], n));
                    return h && s ? t[0] : t
                };
                i && d && "function" == typeof r && 1 != r.length && (t = i = !1);
                var s = this.__chain__
                  , a = !!this.__actions__.length
                  , u = g && !s
                  , l = t && !a;
                if (g || !i)
                    return u && l ? f.apply(this, n) : (c = this.thru(o),
                    u ? h ? c.value()[0] : c.value() : c);
                e = l ? e : new m(this);
                var c = f.apply(e, n);
                return c.__actions__.push({
                    func: qt,
                    args: [o],
                    thisArg: Rs
                }),
                new y(c,s)
            }
            )
        }),
        os(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
            var n = Vn[e]
              , r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
              , i = /^(?:pop|shift)$/.test(e);
            v.prototype[e] = function() {
                var t = arguments;
                if (!i || this.__chain__)
                    return this[r](function(e) {
                        return n.apply(no(e) ? e : [], t)
                    });
                var e = this.value();
                return n.apply(no(e) ? e : [], t)
            }
        }),
        E(m.prototype, function(e, t) {
            var n = v[t];
            if (n) {
                var r = n.name + "";
                (Ir[r] || (Ir[r] = [])).push({
                    name: t,
                    func: n
                })
            }
        }),
        Ir[Ge(Rs, 2).name] = [{
            name: "wrapper",
            func: Rs
        }],
        m.prototype.clone = function() {
            var e = new m(this.__wrapped__);
            return e.__actions__ = Ye(this.__actions__),
            e.__dir__ = this.__dir__,
            e.__filtered__ = this.__filtered__,
            e.__iteratees__ = Ye(this.__iteratees__),
            e.__takeCount__ = this.__takeCount__,
            e.__views__ = Ye(this.__views__),
            e
        }
        ,
        m.prototype.reverse = function() {
            if (this.__filtered__) {
                var e = new m(this);
                e.__dir__ = -1,
                e.__filtered__ = !0
            } else
                (e = this.clone()).__dir__ *= -1;
            return e
        }
        ,
        m.prototype.value = function() {
            var e = this.__wrapped__.value()
              , t = this.__dir__
              , n = no(e)
              , r = t < 0
              , i = n ? e.length : 0
              , o = function(e, t, n) {
                for (var r = -1, i = n.length; ++r < i; ) {
                    var o = n[r]
                      , s = o.size;
                    switch (o.type) {
                    case "drop":
                        e += s;
                        break;
                    case "dropRight":
                        t -= s;
                        break;
                    case "take":
                        t = Or(t, e + s);
                        break;
                    case "takeRight":
                        e = Mr(e, t - s)
                    }
                }
                return {
                    start: e,
                    end: t
                }
            }(0, i, this.__views__)
              , s = o.start
              , a = o.end
              , u = a - s
              , l = r ? a : s - 1
              , c = this.__iteratees__
              , f = c.length
              , d = 0
              , h = Or(u, this.__takeCount__);
            if (!n || !r && i == u && h == u)
                return xe(e, this.__actions__);
            var p = [];
            e: for (; u-- && d < h; ) {
                for (var g = -1, v = e[l += t]; ++g < f; ) {
                    var y = c[g]
                      , m = y.iteratee
                      , _ = y.type
                      , w = m(v);
                    if (2 == _)
                        v = w;
                    else if (!w) {
                        if (1 == _)
                            continue e;
                        break e
                    }
                }
                p[d++] = v
            }
            return p
        }
        ,
        v.prototype.at = Ni,
        v.prototype.chain = function() {
            return Ut(this)
        }
        ,
        v.prototype.commit = function() {
            return new y(this.value(),this.__chain__)
        }
        ,
        v.prototype.next = function() {
            this.__values__ === Rs && (this.__values__ = pn(this.value()));
            var e = this.__index__ >= this.__values__.length;
            return {
                done: e,
                value: e ? Rs : this.__values__[this.__index__++]
            }
        }
        ,
        v.prototype.plant = function(e) {
            for (var t, n = this; n instanceof o; ) {
                var r = Nt(n);
                r.__index__ = 0,
                r.__values__ = Rs,
                t ? i.__wrapped__ = r : t = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = e,
            t
        }
        ,
        v.prototype.reverse = function() {
            var e = this.__wrapped__;
            if (e instanceof m) {
                var t = e;
                return this.__actions__.length && (t = new m(this)),
                (t = t.reverse()).__actions__.push({
                    func: qt,
                    args: [It],
                    thisArg: Rs
                }),
                new y(t,this.__chain__)
            }
            return this.thru(It)
        }
        ,
        v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = function() {
            return xe(this.__wrapped__, this.__actions__)
        }
        ,
        v.prototype.first = v.prototype.head,
        gr && (v.prototype[gr] = function() {
            return this
        }
        ),
        v
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (fu._ = ku,
    define(function() {
        return ku
    })) : L ? ((L.exports = ku)._ = ku,
    Y._ = ku) : fu._ = ku
}
.call(this),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e, i;
    function p() {
        return e.apply(null, arguments)
    }
    function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function a(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function g(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function u(e) {
        if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e)
            if (g(e, t))
                return !1;
        return !0
    }
    function l(e) {
        return void 0 === e
    }
    function c(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function r(e, t) {
        var n, r = [], i = e.length;
        for (n = 0; n < i; ++n)
            r.push(t(e[n], n));
        return r
    }
    function f(e, t) {
        for (var n in t)
            g(t, n) && (e[n] = t[n]);
        return g(t, "toString") && (e.toString = t.toString),
        g(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function d(e, t, n, r) {
        return Mt(e, t, n, r, !0).utc()
    }
    function v(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function h(e) {
        var t = null
          , n = !1
          , r = e._d && !isNaN(e._d.getTime());
        return r && (t = v(e),
        n = i.call(t.parsedDateParts, function(e) {
            return null != e
        }),
        r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n),
        e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)),
        null != Object.isFrozen && Object.isFrozen(e) ? r : (e._isValid = r,
        e._isValid)
    }
    function y(e) {
        var t = d(NaN);
        return null != e ? f(v(t), e) : v(t).userInvalidated = !0,
        t
    }
    i = Array.prototype.some ? Array.prototype.some : function(e) {
        var t, n = Object(this), r = n.length >>> 0;
        for (t = 0; t < r; t++)
            if (t in n && e.call(this, n[t], t, n))
                return !0;
        return !1
    }
    ;
    var m = p.momentProperties = []
      , t = !1;
    function _(e, t) {
        var n, r, i, o = m.length;
        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = v(t)),
        l(t._locale) || (e._locale = t._locale),
        0 < o)
            for (n = 0; n < o; n++)
                l(i = t[r = m[n]]) || (e[r] = i);
        return e
    }
    function w(e) {
        _(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && (t = !0,
        p.updateOffset(this),
        t = !1)
    }
    function b(e) {
        return e instanceof w || null != e && null != e._isAMomentObject
    }
    function k(e) {
        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function n(o, s) {
        var a = !0;
        return f(function() {
            if (null != p.deprecationHandler && p.deprecationHandler(null, o),
            a) {
                var e, t, n, r = [], i = arguments.length;
                for (t = 0; t < i; t++) {
                    if (e = "",
                    "object" == typeof arguments[t]) {
                        for (n in e += "\n[" + t + "] ",
                        arguments[0])
                            g(arguments[0], n) && (e += n + ": " + arguments[0][n] + ", ");
                        e = e.slice(0, -2)
                    } else
                        e = arguments[t];
                    r.push(e)
                }
                k(o + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                a = !1
            }
            return s.apply(this, arguments)
        }, s)
    }
    var x, S = {};
    function T(e, t) {
        null != p.deprecationHandler && p.deprecationHandler(e, t),
        S[e] || (k(t),
        S[e] = !0)
    }
    function C(e) {
        return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function D(e, t) {
        var n, r = f({}, e);
        for (n in t)
            g(t, n) && (a(e[n]) && a(t[n]) ? (r[n] = {},
            f(r[n], e[n]),
            f(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
        for (n in e)
            g(e, n) && !g(t, n) && a(e[n]) && (r[n] = f({}, r[n]));
        return r
    }
    function M(e) {
        null != e && this.set(e)
    }
    p.suppressDeprecationWarnings = !1,
    p.deprecationHandler = null,
    x = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            g(e, t) && n.push(t);
        return n
    }
    ;
    function O(e, t, n) {
        var r = "" + Math.abs(e)
          , i = t - r.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
    }
    var A = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , j = {}
      , $ = {};
    function N(e, t, n, r) {
        var i = r;
        "string" == typeof r && (i = function() {
            return this[r]()
        }
        ),
        e && ($[e] = i),
        t && ($[t[0]] = function() {
            return O(i.apply(this, arguments), t[1], t[2])
        }
        ),
        n && ($[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        }
        )
    }
    function P(e, t) {
        return e.isValid() ? (t = Y(t, e.localeData()),
        j[t] = j[t] || function(r) {
            var e, i, t, o = r.match(A);
            for (e = 0,
            i = o.length; e < i; e++)
                $[o[e]] ? o[e] = $[o[e]] : o[e] = (t = o[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e) {
                var t, n = "";
                for (t = 0; t < i; t++)
                    n += C(o[t]) ? o[t].call(e, r) : o[t];
                return n
            }
        }(t),
        j[t](e)) : e.localeData().invalidDate()
    }
    function Y(e, t) {
        var n = 5;
        function r(e) {
            return t.longDateFormat(e) || e
        }
        for (E.lastIndex = 0; 0 <= n && E.test(e); )
            e = e.replace(E, r),
            E.lastIndex = 0,
            n -= 1;
        return e
    }
    var L = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
    };
    function H(e) {
        return "string" == typeof e ? L[e] || L[e.toLowerCase()] : void 0
    }
    function R(e) {
        var t, n, r = {};
        for (n in e)
            g(e, n) && (t = H(n)) && (r[t] = e[n]);
        return r
    }
    var W = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    };
    var I, F = /\d/, z = /\d\d/, U = /\d{3}/, q = /\d{4}/, B = /[+-]?\d{6}/, G = /\d\d?/, V = /\d\d\d\d?/, X = /\d\d\d\d\d\d?/, Z = /\d{1,3}/, K = /\d{1,4}/, J = /[+-]?\d{1,6}/, Q = /\d+/, ee = /[+-]?\d+/, te = /Z|[+-]\d\d:?\d\d/gi, ne = /Z|[+-]\d\d(?::?\d\d)?/gi, re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ie = /^[1-9]\d?/, oe = /^([1-9]\d|\d)/;
    function se(e, n, r) {
        I[e] = C(n) ? n : function(e, t) {
            return e && r ? r : n
        }
    }
    function ae(e, t) {
        return g(I, e) ? I[e](t._strict, t._locale) : new RegExp(function(e) {
            return ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            }))
        }(e))
    }
    function ue(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function le(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function ce(e) {
        var t = +e
          , n = 0;
        return 0 != t && isFinite(t) && (n = le(t)),
        n
    }
    I = {};
    var fe = {};
    function de(e, n) {
        var t, r, i = n;
        for ("string" == typeof e && (e = [e]),
        c(n) && (i = function(e, t) {
            t[n] = ce(e)
        }
        ),
        r = e.length,
        t = 0; t < r; t++)
            fe[e[t]] = i
    }
    function he(e, i) {
        de(e, function(e, t, n, r) {
            n._w = n._w || {},
            i(e, n._w, n, r)
        })
    }
    function pe(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    var ge = 0
      , ve = 1
      , ye = 2
      , me = 3
      , _e = 4
      , we = 5
      , be = 6
      , ke = 7
      , xe = 8;
    function Se(e) {
        return pe(e) ? 366 : 365
    }
    N("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? O(e, 4) : "+" + e
    }),
    N(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    N(0, ["YYYY", 4], 0, "year"),
    N(0, ["YYYYY", 5], 0, "year"),
    N(0, ["YYYYYY", 6, !0], 0, "year"),
    se("Y", ee),
    se("YY", G, z),
    se("YYYY", K, q),
    se("YYYYY", J, B),
    se("YYYYYY", J, B),
    de(["YYYYY", "YYYYYY"], ge),
    de("YYYY", function(e, t) {
        t[ge] = 2 === e.length ? p.parseTwoDigitYear(e) : ce(e)
    }),
    de("YY", function(e, t) {
        t[ge] = p.parseTwoDigitYear(e)
    }),
    de("Y", function(e, t) {
        t[ge] = parseInt(e, 10)
    }),
    p.parseTwoDigitYear = function(e) {
        return ce(e) + (68 < ce(e) ? 1900 : 2e3)
    }
    ;
    var Te, Ce = De("FullYear", !0);
    function De(t, n) {
        return function(e) {
            return null != e ? (Oe(this, t, e),
            p.updateOffset(this, n),
            this) : Me(this, t)
        }
    }
    function Me(e, t) {
        if (!e.isValid())
            return NaN;
        var n = e._d
          , r = e._isUTC;
        switch (t) {
        case "Milliseconds":
            return r ? n.getUTCMilliseconds() : n.getMilliseconds();
        case "Seconds":
            return r ? n.getUTCSeconds() : n.getSeconds();
        case "Minutes":
            return r ? n.getUTCMinutes() : n.getMinutes();
        case "Hours":
            return r ? n.getUTCHours() : n.getHours();
        case "Date":
            return r ? n.getUTCDate() : n.getDate();
        case "Day":
            return r ? n.getUTCDay() : n.getDay();
        case "Month":
            return r ? n.getUTCMonth() : n.getMonth();
        case "FullYear":
            return r ? n.getUTCFullYear() : n.getFullYear();
        default:
            return NaN
        }
    }
    function Oe(e, t, n) {
        var r, i, o, s, a;
        if (e.isValid() && !isNaN(n)) {
            switch (r = e._d,
            i = e._isUTC,
            t) {
            case "Milliseconds":
                return void (i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
            case "Seconds":
                return void (i ? r.setUTCSeconds(n) : r.setSeconds(n));
            case "Minutes":
                return void (i ? r.setUTCMinutes(n) : r.setMinutes(n));
            case "Hours":
                return void (i ? r.setUTCHours(n) : r.setHours(n));
            case "Date":
                return void (i ? r.setUTCDate(n) : r.setDate(n));
            case "FullYear":
                break;
            default:
                return
            }
            o = n,
            s = e.month(),
            a = 29 !== (a = e.date()) || 1 !== s || pe(o) ? a : 28,
            i ? r.setUTCFullYear(o, s, a) : r.setFullYear(o, s, a)
        }
    }
    function Ae(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = function(e, t) {
            return (e % t + t) % t
        }(t, 12);
        return e += (t - n) / 12,
        1 === n ? pe(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    N("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    N("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    N("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    se("M", G, ie),
    se("MM", G, z),
    se("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    se("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    de(["M", "MM"], function(e, t) {
        t[ve] = ce(e) - 1
    }),
    de(["MMM", "MMMM"], function(e, t, n, r) {
        var i = n._locale.monthsParse(e, r, n._strict);
        null != i ? t[ve] = i : v(n).invalidMonth = e
    });
    var Ee = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , je = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , $e = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , Ne = re
      , Pe = re;
    function Ye(e, t) {
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = ce(t);
            else if (!c(t = e.localeData().monthsParse(t)))
                return e;
        var n = t
          , r = e.date();
        return r = r < 29 ? r : Math.min(r, Ae(e.year(), n)),
        e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
        e
    }
    function Le(e) {
        return null != e ? (Ye(this, e),
        p.updateOffset(this, !0),
        this) : Me(this, "Month")
    }
    function He() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, r, i, o = [], s = [], a = [];
        for (t = 0; t < 12; t++)
            n = d([2e3, t]),
            r = ue(this.monthsShort(n, "")),
            i = ue(this.months(n, "")),
            o.push(r),
            s.push(i),
            a.push(i),
            a.push(r);
        o.sort(e),
        s.sort(e),
        a.sort(e),
        this._monthsRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i")
    }
    function Re(e) {
        var t, n;
        return e < 100 && 0 <= e ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
        t = new Date(Date.UTC.apply(null, n)),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
        t
    }
    function We(e, t, n) {
        var r = 7 + t - n;
        return r - (7 + Re(e, 0, r).getUTCDay() - t) % 7 - 1
    }
    function Ie(e, t, n, r, i) {
        var o, s, a = 1 + 7 * (t - 1) + (7 + n - r) % 7 + We(e, r, i);
        return s = a <= 0 ? Se(o = e - 1) + a : a > Se(e) ? (o = e + 1,
        a - Se(e)) : (o = e,
        a),
        {
            year: o,
            dayOfYear: s
        }
    }
    function Fe(e, t, n) {
        var r, i, o = We(e.year(), t, n), s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return s < 1 ? r = s + ze(i = e.year() - 1, t, n) : s > ze(e.year(), t, n) ? (r = s - ze(e.year(), t, n),
        i = e.year() + 1) : (i = e.year(),
        r = s),
        {
            week: r,
            year: i
        }
    }
    function ze(e, t, n) {
        var r = We(e, t, n)
          , i = We(e + 1, t, n);
        return (Se(e) - r + i) / 7
    }
    N("w", ["ww", 2], "wo", "week"),
    N("W", ["WW", 2], "Wo", "isoWeek"),
    se("w", G, ie),
    se("ww", G, z),
    se("W", G, ie),
    se("WW", G, z),
    he(["w", "ww", "W", "WW"], function(e, t, n, r) {
        t[r.substr(0, 1)] = ce(e)
    });
    function Ue(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    N("d", 0, "do", "day"),
    N("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    N("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    N("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    N("e", 0, 0, "weekday"),
    N("E", 0, 0, "isoWeekday"),
    se("d", G),
    se("e", G),
    se("E", G),
    se("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    se("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    se("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    he(["dd", "ddd", "dddd"], function(e, t, n, r) {
        var i = n._locale.weekdaysParse(e, r, n._strict);
        null != i ? t.d = i : v(n).invalidWeekday = e
    }),
    he(["d", "e", "E"], function(e, t, n, r) {
        t[r] = ce(e)
    });
    var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Ge = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Ve = re
      , Xe = re
      , Ze = re;
    function Ke() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, r, i, o, s = [], a = [], u = [], l = [];
        for (t = 0; t < 7; t++)
            n = d([2e3, 1]).day(t),
            r = ue(this.weekdaysMin(n, "")),
            i = ue(this.weekdaysShort(n, "")),
            o = ue(this.weekdays(n, "")),
            s.push(r),
            a.push(i),
            u.push(o),
            l.push(r),
            l.push(i),
            l.push(o);
        s.sort(e),
        a.sort(e),
        u.sort(e),
        l.sort(e),
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function Je() {
        return this.hours() % 12 || 12
    }
    function Qe(e, t) {
        N(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function et(e, t) {
        return t._meridiemParse
    }
    N("H", ["HH", 2], 0, "hour"),
    N("h", ["hh", 2], 0, Je),
    N("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    N("hmm", 0, 0, function() {
        return "" + Je.apply(this) + O(this.minutes(), 2)
    }),
    N("hmmss", 0, 0, function() {
        return "" + Je.apply(this) + O(this.minutes(), 2) + O(this.seconds(), 2)
    }),
    N("Hmm", 0, 0, function() {
        return "" + this.hours() + O(this.minutes(), 2)
    }),
    N("Hmmss", 0, 0, function() {
        return "" + this.hours() + O(this.minutes(), 2) + O(this.seconds(), 2)
    }),
    Qe("a", !0),
    Qe("A", !1),
    se("a", et),
    se("A", et),
    se("H", G, oe),
    se("h", G, ie),
    se("k", G, ie),
    se("HH", G, z),
    se("hh", G, z),
    se("kk", G, z),
    se("hmm", V),
    se("hmmss", X),
    se("Hmm", V),
    se("Hmmss", X),
    de(["H", "HH"], me),
    de(["k", "kk"], function(e, t, n) {
        var r = ce(e);
        t[me] = 24 === r ? 0 : r
    }),
    de(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    de(["h", "hh"], function(e, t, n) {
        t[me] = ce(e),
        v(n).bigHour = !0
    }),
    de("hmm", function(e, t, n) {
        var r = e.length - 2;
        t[me] = ce(e.substr(0, r)),
        t[_e] = ce(e.substr(r)),
        v(n).bigHour = !0
    }),
    de("hmmss", function(e, t, n) {
        var r = e.length - 4
          , i = e.length - 2;
        t[me] = ce(e.substr(0, r)),
        t[_e] = ce(e.substr(r, 2)),
        t[we] = ce(e.substr(i)),
        v(n).bigHour = !0
    }),
    de("Hmm", function(e, t, n) {
        var r = e.length - 2;
        t[me] = ce(e.substr(0, r)),
        t[_e] = ce(e.substr(r))
    }),
    de("Hmmss", function(e, t, n) {
        var r = e.length - 4
          , i = e.length - 2;
        t[me] = ce(e.substr(0, r)),
        t[_e] = ce(e.substr(r, 2)),
        t[we] = ce(e.substr(i))
    });
    var tt = De("Hours", !0);
    var nt, rt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ee,
        monthsShort: je,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: qe,
        weekdaysMin: Ge,
        weekdaysShort: Be,
        meridiemParse: /[ap]\.?m?\.?/i
    }, it = {}, ot = {};
    function st(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1)
            if (e[n] !== t[n])
                return n;
        return r
    }
    function at(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ut(t) {
        var e = null;
        if (void 0 === it[t] && "undefined" != typeof module && module && module.exports && function(e) {
            return !(!e || !e.match("^[^/\\\\]*$"))
        }(t))
            try {
                e = nt._abbr,
                require("./locale/" + t),
                lt(e)
            } catch (e) {
                it[t] = null
            }
        return it[t]
    }
    function lt(e, t) {
        var n;
        return e && ((n = l(t) ? ft(e) : ct(e, t)) ? nt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        nt._abbr
    }
    function ct(e, t) {
        if (null === t)
            return delete it[e],
            null;
        var n, r = rt;
        if (t.abbr = e,
        null != it[e])
            T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            r = it[e]._config;
        else if (null != t.parentLocale)
            if (null != it[t.parentLocale])
                r = it[t.parentLocale]._config;
            else {
                if (null == (n = ut(t.parentLocale)))
                    return ot[t.parentLocale] || (ot[t.parentLocale] = []),
                    ot[t.parentLocale].push({
                        name: e,
                        config: t
                    }),
                    null;
                r = n._config
            }
        return it[e] = new M(D(r, t)),
        ot[e] && ot[e].forEach(function(e) {
            ct(e.name, e.config)
        }),
        lt(e),
        it[e]
    }
    function ft(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return nt;
        if (!s(e)) {
            if (t = ut(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, r, i, o = 0; o < e.length; ) {
                for (t = (i = at(e[o]).split("-")).length,
                n = (n = at(e[o + 1])) ? n.split("-") : null; 0 < t; ) {
                    if (r = ut(i.slice(0, t).join("-")))
                        return r;
                    if (n && n.length >= t && st(i, n) >= t - 1)
                        break;
                    t--
                }
                o++
            }
            return nt
        }(e)
    }
    function dt(e) {
        var t, n = e._a;
        return n && -2 === v(e).overflow && (t = n[ve] < 0 || 11 < n[ve] ? ve : n[ye] < 1 || n[ye] > Ae(n[ge], n[ve]) ? ye : n[me] < 0 || 24 < n[me] || 24 === n[me] && (0 !== n[_e] || 0 !== n[we] || 0 !== n[be]) ? me : n[_e] < 0 || 59 < n[_e] ? _e : n[we] < 0 || 59 < n[we] ? we : n[be] < 0 || 999 < n[be] ? be : -1,
        v(e)._overflowDayOfYear && (t < ge || ye < t) && (t = ye),
        v(e)._overflowWeeks && -1 === t && (t = ke),
        v(e)._overflowWeekday && -1 === t && (t = xe),
        v(e).overflow = t),
        e
    }
    var ht = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , pt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , gt = /Z|[+-]\d\d(?::?\d\d)?/
      , vt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
      , yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , mt = /^\/?Date\((-?\d+)/i
      , _t = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
      , wt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function bt(e) {
        var t, n, r, i, o, s, a = e._i, u = ht.exec(a) || pt.exec(a), l = vt.length, c = yt.length;
        if (u) {
            for (v(e).iso = !0,
            t = 0,
            n = l; t < n; t++)
                if (vt[t][1].exec(u[1])) {
                    i = vt[t][0],
                    r = !1 !== vt[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                n = c; t < n; t++)
                    if (yt[t][1].exec(u[3])) {
                        o = (u[2] || " ") + yt[t][0];
                        break
                    }
                if (null == o)
                    return void (e._isValid = !1)
            }
            if (!r && null != o)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!gt.exec(u[4]))
                    return void (e._isValid = !1);
                s = "Z"
            }
            e._f = i + (o || "") + (s || ""),
            Ct(e)
        } else
            e._isValid = !1
    }
    function kt(e, t, n, r, i, o) {
        var s = [function(e) {
            var t = parseInt(e, 10);
            {
                if (t <= 49)
                    return 2e3 + t;
                if (t <= 999)
                    return 1900 + t
            }
            return t
        }(e), je.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
        return o && s.push(parseInt(o, 10)),
        s
    }
    function xt(e) {
        var t, n = _t.exec(function(e) {
            return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }(e._i));
        if (n) {
            if (t = kt(n[4], n[3], n[2], n[5], n[6], n[7]),
            !function(e, t, n) {
                return !e || Be.indexOf(e) === new Date(t[0],t[1],t[2]).getDay() || (v(n).weekdayMismatch = !0,
                n._isValid = !1)
            }(n[1], t, e))
                return;
            e._a = t,
            e._tzm = function(e, t, n) {
                if (e)
                    return wt[e];
                if (t)
                    return 0;
                var r = parseInt(n, 10)
                  , i = r % 100;
                return (r - i) / 100 * 60 + i
            }(n[8], n[9], n[10]),
            e._d = Re.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            v(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function St(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function Tt(e) {
        var t, n, r, i, o, s = [];
        if (!e._d) {
            for (r = function(e) {
                var t = new Date(p.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e),
            e._w && null == e._a[ye] && null == e._a[ve] && function(e) {
                var t, n, r, i, o, s, a, u, l;
                null != (t = e._w).GG || null != t.W || null != t.E ? (o = 1,
                s = 4,
                n = St(t.GG, e._a[ge], Fe(Ot(), 1, 4).year),
                r = St(t.W, 1),
                ((i = St(t.E, 1)) < 1 || 7 < i) && (u = !0)) : (o = e._locale._week.dow,
                s = e._locale._week.doy,
                l = Fe(Ot(), o, s),
                n = St(t.gg, e._a[ge], l.year),
                r = St(t.w, l.week),
                null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + o,
                (t.e < 0 || 6 < t.e) && (u = !0)) : i = o);
                r < 1 || r > ze(n, o, s) ? v(e)._overflowWeeks = !0 : null != u ? v(e)._overflowWeekday = !0 : (a = Ie(n, r, i, o, s),
                e._a[ge] = a.year,
                e._dayOfYear = a.dayOfYear)
            }(e),
            null != e._dayOfYear && (o = St(e._a[ge], r[ge]),
            (e._dayOfYear > Se(o) || 0 === e._dayOfYear) && (v(e)._overflowDayOfYear = !0),
            n = Re(o, 0, e._dayOfYear),
            e._a[ve] = n.getUTCMonth(),
            e._a[ye] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = s[t] = r[t];
            for (; t < 7; t++)
                e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[me] && 0 === e._a[_e] && 0 === e._a[we] && 0 === e._a[be] && (e._nextDay = !0,
            e._a[me] = 0),
            e._d = (e._useUTC ? Re : function(e, t, n, r, i, o, s) {
                var a;
                return e < 100 && 0 <= e ? (a = new Date(e + 400,t,n,r,i,o,s),
                isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e,t,n,r,i,o,s),
                a
            }
            ).apply(null, s),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[me] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (v(e).weekdayMismatch = !0)
        }
    }
    function Ct(e) {
        if (e._f !== p.ISO_8601)
            if (e._f !== p.RFC_2822) {
                e._a = [],
                v(e).empty = !0;
                var t, n, r, i, o, s, a, u, l, c, f = "" + e._i, d = f.length, h = 0;
                for (a = (r = Y(e._f, e._locale).match(A) || []).length,
                t = 0; t < a; t++)
                    i = r[t],
                    (n = (f.match(ae(i, e)) || [])[0]) && (0 < (o = f.substr(0, f.indexOf(n))).length && v(e).unusedInput.push(o),
                    f = f.slice(f.indexOf(n) + n.length),
                    h += n.length),
                    $[i] ? (n ? v(e).empty = !1 : v(e).unusedTokens.push(i),
                    u = i,
                    c = e,
                    null != (l = n) && g(fe, u) && fe[u](l, c._a, c, u)) : e._strict && !n && v(e).unusedTokens.push(i);
                v(e).charsLeftOver = d - h,
                0 < f.length && v(e).unusedInput.push(f),
                e._a[me] <= 12 && !0 === v(e).bigHour && 0 < e._a[me] && (v(e).bigHour = void 0),
                v(e).parsedDateParts = e._a.slice(0),
                v(e).meridiem = e._meridiem,
                e._a[me] = function(e, t, n) {
                    var r;
                    if (null == n)
                        return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((r = e.isPM(n)) && t < 12 && (t += 12),
                    r || 12 !== t || (t = 0)),
                    t)
                }(e._locale, e._a[me], e._meridiem),
                null !== (s = v(e).era) && (e._a[ge] = e._locale.erasConvertYear(s, e._a[ge])),
                Tt(e),
                dt(e)
            } else
                xt(e);
        else
            bt(e)
    }
    function Dt(e) {
        var t = e._i
          , n = e._f;
        return e._locale = e._locale || ft(e._l),
        null === t || void 0 === n && "" === t ? y({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        b(t) ? new w(dt(t)) : (o(t) ? e._d = t : s(n) ? function(e) {
            var t, n, r, i, o, s, a = !1, u = e._f.length;
            if (0 === u)
                return v(e).invalidFormat = !0,
                e._d = new Date(NaN);
            for (i = 0; i < u; i++)
                o = 0,
                s = !1,
                t = _({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[i],
                Ct(t),
                h(t) && (s = !0),
                o += v(t).charsLeftOver,
                o += 10 * v(t).unusedTokens.length,
                v(t).score = o,
                a ? o < r && (r = o,
                n = t) : (null == r || o < r || s) && (r = o,
                n = t,
                s && (a = !0));
            f(e, n || t)
        }(e) : n ? Ct(e) : function(e) {
            var t = e._i;
            l(t) ? e._d = new Date(p.now()) : o(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                var t = mt.exec(e._i);
                null === t ? (bt(e),
                !1 === e._isValid && (delete e._isValid,
                xt(e),
                !1 === e._isValid && (delete e._isValid,
                e._strict ? e._isValid = !1 : p.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(e) : s(t) ? (e._a = r(t.slice(0), function(e) {
                return parseInt(e, 10)
            }),
            Tt(e)) : a(t) ? function(e) {
                if (!e._d) {
                    var t = R(e._i)
                      , n = void 0 === t.day ? t.date : t.day;
                    e._a = r([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function(e) {
                        return e && parseInt(e, 10)
                    }),
                    Tt(e)
                }
            }(e) : c(t) ? e._d = new Date(t) : p.createFromInputFallback(e)
        }(e),
        h(e) || (e._d = null),
        e))
    }
    function Mt(e, t, n, r, i) {
        var o = {};
        return !0 !== t && !1 !== t || (r = t,
        t = void 0),
        !0 !== n && !1 !== n || (r = n,
        n = void 0),
        (a(e) && u(e) || s(e) && 0 === e.length) && (e = void 0),
        o._isAMomentObject = !0,
        o._useUTC = o._isUTC = i,
        o._l = n,
        o._i = e,
        o._f = t,
        o._strict = r,
        function(e) {
            var t = new w(dt(Dt(e)));
            return t._nextDay && (t.add(1, "d"),
            t._nextDay = void 0),
            t
        }(o)
    }
    function Ot(e, t, n, r) {
        return Mt(e, t, n, r, !1)
    }
    p.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    p.ISO_8601 = function() {}
    ,
    p.RFC_2822 = function() {}
    ;
    var At = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : y()
    })
      , Et = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : y()
    });
    function jt(e, t) {
        var n, r;
        if (1 === t.length && s(t[0]) && (t = t[0]),
        !t.length)
            return Ot();
        for (n = t[0],
        r = 1; r < t.length; ++r)
            t[r].isValid() && !t[r][e](n) || (n = t[r]);
        return n
    }
    var $t = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Nt(e) {
        var t = R(e)
          , n = t.year || 0
          , r = t.quarter || 0
          , i = t.month || 0
          , o = t.week || t.isoWeek || 0
          , s = t.day || 0
          , a = t.hour || 0
          , u = t.minute || 0
          , l = t.second || 0
          , c = t.millisecond || 0;
        this._isValid = function(e) {
            var t, n, r = !1, i = $t.length;
            for (t in e)
                if (g(e, t) && (-1 === Te.call($t, t) || null != e[t] && isNaN(e[t])))
                    return !1;
            for (n = 0; n < i; ++n)
                if (e[$t[n]]) {
                    if (r)
                        return !1;
                    parseFloat(e[$t[n]]) !== ce(e[$t[n]]) && (r = !0)
                }
            return !0
        }(t),
        this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60,
        this._days = +s + 7 * o,
        this._months = +i + 3 * r + 12 * n,
        this._data = {},
        this._locale = ft(),
        this._bubble()
    }
    function Pt(e) {
        return e instanceof Nt
    }
    function Yt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Lt(e, n) {
        N(e, 0, 0, function() {
            var e = this.utcOffset()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + O(~~(e / 60), 2) + n + O(~~e % 60, 2)
        })
    }
    Lt("Z", ":"),
    Lt("ZZ", ""),
    se("Z", ne),
    se("ZZ", ne),
    de(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Rt(ne, e)
    });
    var Ht = /([\+\-]|\d\d)/gi;
    function Rt(e, t) {
        var n, r, i = (t || "").match(e);
        return null === i ? null : 0 === (r = 60 * (n = ((i[i.length - 1] || []) + "").match(Ht) || ["-", 0, 0])[1] + ce(n[2])) ? 0 : "+" === n[0] ? r : -r
    }
    function Wt(e, t) {
        var n, r;
        return t._isUTC ? (n = t.clone(),
        r = (b(e) || o(e) ? e.valueOf() : Ot(e).valueOf()) - n.valueOf(),
        n._d.setTime(n._d.valueOf() + r),
        p.updateOffset(n, !1),
        n) : Ot(e).local()
    }
    function It(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    function Ft() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    p.updateOffset = function() {}
    ;
    var zt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , Ut = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function qt(e, t) {
        var n, r, i, o = e, s = null;
        return Pt(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : c(e) || !isNaN(+e) ? (o = {},
        t ? o[t] = +e : o.milliseconds = +e) : (s = zt.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
        o = {
            y: 0,
            d: ce(s[ye]) * n,
            h: ce(s[me]) * n,
            m: ce(s[_e]) * n,
            s: ce(s[we]) * n,
            ms: ce(Yt(1e3 * s[be])) * n
        }) : (s = Ut.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
        o = {
            y: Bt(s[2], n),
            M: Bt(s[3], n),
            w: Bt(s[4], n),
            d: Bt(s[5], n),
            h: Bt(s[6], n),
            m: Bt(s[7], n),
            s: Bt(s[8], n)
        }) : null == o ? o = {} : "object" == typeof o && ("from"in o || "to"in o) && (i = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Wt(t, e),
            e.isBefore(t) ? n = Gt(e, t) : ((n = Gt(t, e)).milliseconds = -n.milliseconds,
            n.months = -n.months);
            return n
        }(Ot(o.from), Ot(o.to)),
        (o = {}).ms = i.milliseconds,
        o.M = i.months),
        r = new Nt(o),
        Pt(e) && g(e, "_locale") && (r._locale = e._locale),
        Pt(e) && g(e, "_isValid") && (r._isValid = e._isValid),
        r
    }
    function Bt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Gt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Vt(r, i) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            n = e,
            e = t,
            t = n),
            Xt(this, qt(e, t), r),
            this
        }
    }
    function Xt(e, t, n, r) {
        var i = t._milliseconds
          , o = Yt(t._days)
          , s = Yt(t._months);
        e.isValid() && (r = null == r || r,
        s && Ye(e, Me(e, "Month") + s * n),
        o && Oe(e, "Date", Me(e, "Date") + o * n),
        i && e._d.setTime(e._d.valueOf() + i * n),
        r && p.updateOffset(e, o || s))
    }
    qt.fn = Nt.prototype,
    qt.invalid = function() {
        return qt(NaN)
    }
    ;
    var Zt = Vt(1, "add")
      , Kt = Vt(-1, "subtract");
    function Jt(e) {
        return "string" == typeof e || e instanceof String
    }
    function Qt(e) {
        return b(e) || o(e) || Jt(e) || c(e) || function(t) {
            var e = s(t)
              , n = !1;
            e && (n = 0 === t.filter(function(e) {
                return !c(e) && Jt(t)
            }).length);
            return e && n
        }(e) || function(e) {
            var t, n, r = a(e) && !u(e), i = !1, o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], s = o.length;
            for (t = 0; t < s; t += 1)
                n = o[t],
                i = i || g(e, n);
            return r && i
        }(e) || null == e
    }
    function en(e, t) {
        if (e.date() < t.date())
            return -en(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , r = e.clone().add(n, "months");
        return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(1 + n, "months") - r))) || 0
    }
    function tn(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ft(e)) && (this._locale = t),
        this)
    }
    p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var nn = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function rn() {
        return this._locale
    }
    var on = 126227808e5;
    function sn(e, t) {
        return (e % t + t) % t
    }
    function an(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400,t,n) - on : new Date(e,t,n).valueOf()
    }
    function un(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - on : Date.UTC(e, t, n)
    }
    function ln(e, t) {
        return t.erasAbbrRegex(e)
    }
    function cn() {
        var e, t, n, r, i, o = [], s = [], a = [], u = [], l = this.eras();
        for (e = 0,
        t = l.length; e < t; ++e)
            n = ue(l[e].name),
            r = ue(l[e].abbr),
            i = ue(l[e].narrow),
            s.push(n),
            o.push(r),
            a.push(i),
            u.push(n),
            u.push(r),
            u.push(i);
        this._erasRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function fn(e, t) {
        N(0, [e, e.length], 0, t)
    }
    function dn(e, t, n, r, i) {
        var o;
        return null == e ? Fe(this, r, i).year : ((o = ze(e, r, i)) < t && (t = o),
        function(e, t, n, r, i) {
            var o = Ie(e, t, n, r, i)
              , s = Re(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()),
            this.month(s.getUTCMonth()),
            this.date(s.getUTCDate()),
            this
        }
        .call(this, e, t, n, r, i))
    }
    N("N", 0, 0, "eraAbbr"),
    N("NN", 0, 0, "eraAbbr"),
    N("NNN", 0, 0, "eraAbbr"),
    N("NNNN", 0, 0, "eraName"),
    N("NNNNN", 0, 0, "eraNarrow"),
    N("y", ["y", 1], "yo", "eraYear"),
    N("y", ["yy", 2], 0, "eraYear"),
    N("y", ["yyy", 3], 0, "eraYear"),
    N("y", ["yyyy", 4], 0, "eraYear"),
    se("N", ln),
    se("NN", ln),
    se("NNN", ln),
    se("NNNN", function(e, t) {
        return t.erasNameRegex(e)
    }),
    se("NNNNN", function(e, t) {
        return t.erasNarrowRegex(e)
    }),
    de(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, r) {
        var i = n._locale.erasParse(e, r, n._strict);
        i ? v(n).era = i : v(n).invalidEra = e
    }),
    se("y", Q),
    se("yy", Q),
    se("yyy", Q),
    se("yyyy", Q),
    se("yo", function(e, t) {
        return t._eraYearOrdinalRegex || Q
    }),
    de(["y", "yy", "yyy", "yyyy"], ge),
    de(["yo"], function(e, t, n, r) {
        var i;
        n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse ? t[ge] = n._locale.eraYearOrdinalParse(e, i) : t[ge] = parseInt(e, 10)
    }),
    N(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    N(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    fn("gggg", "weekYear"),
    fn("ggggg", "weekYear"),
    fn("GGGG", "isoWeekYear"),
    fn("GGGGG", "isoWeekYear"),
    se("G", ee),
    se("g", ee),
    se("GG", G, z),
    se("gg", G, z),
    se("GGGG", K, q),
    se("gggg", K, q),
    se("GGGGG", J, B),
    se("ggggg", J, B),
    he(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
        t[r.substr(0, 2)] = ce(e)
    }),
    he(["gg", "GG"], function(e, t, n, r) {
        t[r] = p.parseTwoDigitYear(e)
    }),
    N("Q", 0, "Qo", "quarter"),
    se("Q", F),
    de("Q", function(e, t) {
        t[ve] = 3 * (ce(e) - 1)
    }),
    N("D", ["DD", 2], "Do", "date"),
    se("D", G, ie),
    se("DD", G, z),
    se("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    de(["D", "DD"], ye),
    de("Do", function(e, t) {
        t[ye] = ce(e.match(G)[0])
    });
    var hn = De("Date", !0);
    N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    se("DDD", Z),
    se("DDDD", U),
    de(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = ce(e)
    }),
    N("m", ["mm", 2], 0, "minute"),
    se("m", G, oe),
    se("mm", G, z),
    de(["m", "mm"], _e);
    var pn = De("Minutes", !1);
    N("s", ["ss", 2], 0, "second"),
    se("s", G, oe),
    se("ss", G, z),
    de(["s", "ss"], we);
    var gn, vn, yn = De("Seconds", !1);
    for (N("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    N(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    N(0, ["SSS", 3], 0, "millisecond"),
    N(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    N(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    N(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    N(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    N(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    N(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    se("S", Z, F),
    se("SS", Z, z),
    se("SSS", Z, U),
    gn = "SSSS"; gn.length <= 9; gn += "S")
        se(gn, Q);
    function mn(e, t) {
        t[be] = ce(1e3 * ("0." + e))
    }
    for (gn = "S"; gn.length <= 9; gn += "S")
        de(gn, mn);
    vn = De("Milliseconds", !1),
    N("z", 0, 0, "zoneAbbr"),
    N("zz", 0, 0, "zoneName");
    var _n = w.prototype;
    function wn(e) {
        return e
    }
    _n.add = Zt,
    _n.calendar = function(e, t) {
        1 === arguments.length && (arguments[0] ? Qt(arguments[0]) ? (e = arguments[0],
        t = void 0) : function(e) {
            var t, n = a(e) && !u(e), r = !1, i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
            for (t = 0; t < i.length; t += 1)
                r = r || g(e, i[t]);
            return n && r
        }(arguments[0]) && (t = arguments[0],
        e = void 0) : t = e = void 0);
        var n = e || Ot()
          , r = Wt(n, this).startOf("day")
          , i = p.calendarFormat(this, r) || "sameElse"
          , o = t && (C(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(o || this.localeData().calendar(i, this, Ot(n)))
    }
    ,
    _n.clone = function() {
        return new w(this)
    }
    ,
    _n.diff = function(e, t, n) {
        var r, i, o;
        if (!this.isValid())
            return NaN;
        if (!(r = Wt(e, this)).isValid())
            return NaN;
        switch (i = 6e4 * (r.utcOffset() - this.utcOffset()),
        t = H(t)) {
        case "year":
            o = en(this, r) / 12;
            break;
        case "month":
            o = en(this, r);
            break;
        case "quarter":
            o = en(this, r) / 3;
            break;
        case "second":
            o = (this - r) / 1e3;
            break;
        case "minute":
            o = (this - r) / 6e4;
            break;
        case "hour":
            o = (this - r) / 36e5;
            break;
        case "day":
            o = (this - r - i) / 864e5;
            break;
        case "week":
            o = (this - r - i) / 6048e5;
            break;
        default:
            o = this - r
        }
        return n ? o : le(o)
    }
    ,
    _n.endOf = function(e) {
        var t, n;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
            return this;
        switch (n = this._isUTC ? un : an,
        e) {
        case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(),
            t += 36e5 - sn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
            break;
        case "minute":
            t = this._d.valueOf(),
            t += 6e4 - sn(t, 6e4) - 1;
            break;
        case "second":
            t = this._d.valueOf(),
            t += 1e3 - sn(t, 1e3) - 1
        }
        return this._d.setTime(t),
        p.updateOffset(this, !0),
        this
    }
    ,
    _n.format = function(e) {
        e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
        var t = P(this, e);
        return this.localeData().postformat(t)
    }
    ,
    _n.from = function(e, t) {
        return this.isValid() && (b(e) && e.isValid() || Ot(e).isValid()) ? qt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    _n.fromNow = function(e) {
        return this.from(Ot(), e)
    }
    ,
    _n.to = function(e, t) {
        return this.isValid() && (b(e) && e.isValid() || Ot(e).isValid()) ? qt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    _n.toNow = function(e) {
        return this.to(Ot(), e)
    }
    ,
    _n.get = function(e) {
        return C(this[e = H(e)]) ? this[e]() : this
    }
    ,
    _n.invalidAt = function() {
        return v(this).overflow
    }
    ,
    _n.isAfter = function(e, t) {
        var n = b(e) ? e : Ot(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    _n.isBefore = function(e, t) {
        var n = b(e) ? e : Ot(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    ,
    _n.isBetween = function(e, t, n, r) {
        var i = b(e) ? e : Ot(e)
          , o = b(t) ? t : Ot(t);
        return !!(this.isValid() && i.isValid() && o.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
    }
    ,
    _n.isSame = function(e, t) {
        var n, r = b(e) ? e : Ot(e);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    ,
    _n.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    _n.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    _n.isValid = function() {
        return h(this)
    }
    ,
    _n.lang = nn,
    _n.locale = tn,
    _n.localeData = rn,
    _n.max = Et,
    _n.min = At,
    _n.parsingFlags = function() {
        return f({}, v(this))
    }
    ,
    _n.set = function(e, t) {
        if ("object" == typeof e) {
            var n, r = function(e) {
                var t, n = [];
                for (t in e)
                    g(e, t) && n.push({
                        unit: t,
                        priority: W[t]
                    });
                return n.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                n
            }(e = R(e)), i = r.length;
            for (n = 0; n < i; n++)
                this[r[n].unit](e[r[n].unit])
        } else if (C(this[e = H(e)]))
            return this[e](t);
        return this
    }
    ,
    _n.startOf = function(e) {
        var t, n;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
            return this;
        switch (n = this._isUTC ? un : an,
        e) {
        case "year":
            t = n(this.year(), 0, 1);
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = n(this.year(), this.month(), 1);
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(),
            t -= sn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
            break;
        case "minute":
            t = this._d.valueOf(),
            t -= sn(t, 6e4);
            break;
        case "second":
            t = this._d.valueOf(),
            t -= sn(t, 1e3)
        }
        return this._d.setTime(t),
        p.updateOffset(this, !0),
        this
    }
    ,
    _n.subtract = Kt,
    _n.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }
    ,
    _n.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }
    ,
    _n.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    _n.toISOString = function(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? P(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", P(n, "Z")) : P(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    ,
    _n.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e, t, n, r = "moment", i = "";
        return this.isLocal() || (r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        i = "Z"),
        e = "[" + r + '("]',
        t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        n = i + '[")]',
        this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
    }
    ,
    "undefined" != typeof Symbol && null != Symbol.for && (_n[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    ),
    _n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    _n.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    _n.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    _n.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    _n.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    _n.eraName = function() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].name;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].name
        }
        return ""
    }
    ,
    _n.eraNarrow = function() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].narrow;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].narrow
        }
        return ""
    }
    ,
    _n.eraAbbr = function() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].abbr;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].abbr
        }
        return ""
    }
    ,
    _n.eraYear = function() {
        var e, t, n, r, i = this.localeData().eras();
        for (e = 0,
        t = i.length; e < t; ++e)
            if (n = i[e].since <= i[e].until ? 1 : -1,
            r = this.clone().startOf("day").valueOf(),
            i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since)
                return (this.year() - p(i[e].since).year()) * n + i[e].offset;
        return this.year()
    }
    ,
    _n.year = Ce,
    _n.isLeapYear = function() {
        return pe(this.year())
    }
    ,
    _n.weekYear = function(e) {
        return dn.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    _n.isoWeekYear = function(e) {
        return dn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    _n.quarter = _n.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    _n.month = Le,
    _n.daysInMonth = function() {
        return Ae(this.year(), this.month())
    }
    ,
    _n.week = _n.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    _n.isoWeek = _n.isoWeeks = function(e) {
        var t = Fe(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    _n.weeksInYear = function() {
        var e = this.localeData()._week;
        return ze(this.year(), e.dow, e.doy)
    }
    ,
    _n.weeksInWeekYear = function() {
        var e = this.localeData()._week;
        return ze(this.weekYear(), e.dow, e.doy)
    }
    ,
    _n.isoWeeksInYear = function() {
        return ze(this.year(), 1, 4)
    }
    ,
    _n.isoWeeksInISOWeekYear = function() {
        return ze(this.isoWeekYear(), 1, 4)
    }
    ,
    _n.date = hn,
    _n.day = _n.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = Me(this, "Day");
        return null != e ? (e = function(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    ,
    _n.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    _n.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this.day() || 7;
        var t = function(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    }
    ,
    _n.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    _n.hour = _n.hours = tt,
    _n.minute = _n.minutes = pn,
    _n.second = _n.seconds = yn,
    _n.millisecond = _n.milliseconds = vn,
    _n.utcOffset = function(e, t, n) {
        var r, i = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this._isUTC ? i : It(this);
        if ("string" == typeof e) {
            if (null === (e = Rt(ne, e)))
                return this
        } else
            Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (r = It(this)),
        this._offset = e,
        this._isUTC = !0,
        null != r && this.add(r, "m"),
        i !== e && (!t || this._changeInProgress ? Xt(this, qt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        p.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    }
    ,
    _n.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    _n.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(It(this), "m")),
        this
    }
    ,
    _n.parseZone = function() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Rt(te, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    ,
    _n.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Ot(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    _n.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    _n.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    _n.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    _n.isUtc = Ft,
    _n.isUTC = Ft,
    _n.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    _n.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    _n.dates = n("dates accessor is deprecated. Use date instead.", hn),
    _n.months = n("months accessor is deprecated. Use month instead", Le),
    _n.years = n("years accessor is deprecated. Use year instead", Ce),
    _n.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }),
    _n.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!l(this._isDSTShifted))
            return this._isDSTShifted;
        var e, t = {};
        return _(t, this),
        (t = Dt(t))._a ? (e = t._isUTC ? d(t._a) : Ot(t._a),
        this._isDSTShifted = this.isValid() && 0 < function(e, t, n) {
            var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
            for (r = 0; r < i; r++)
                (n && e[r] !== t[r] || !n && ce(e[r]) !== ce(t[r])) && s++;
            return s + o
        }(t._a, e.toArray())) : this._isDSTShifted = !1,
        this._isDSTShifted
    });
    var bn = M.prototype;
    function kn(e, t, n, r) {
        var i = ft()
          , o = d().set(r, t);
        return i[n](o, e)
    }
    function xn(e, t, n) {
        if (c(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return kn(e, t, n, "month");
        var r, i = [];
        for (r = 0; r < 12; r++)
            i[r] = kn(e, r, n, "month");
        return i
    }
    function Sn(e, t, n, r) {
        t = ("boolean" == typeof e ? c(t) && (n = t,
        t = void 0) : (t = e,
        e = !1,
        c(n = t) && (n = t,
        t = void 0)),
        t || "");
        var i, o = ft(), s = e ? o._week.dow : 0, a = [];
        if (null != n)
            return kn(t, (n + s) % 7, r, "day");
        for (i = 0; i < 7; i++)
            a[i] = kn(t, (i + s) % 7, r, "day");
        return a
    }
    bn.calendar = function(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return C(r) ? r.call(t, n) : r
    }
    ,
    bn.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(A).map(function(e) {
            return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
        }).join(""),
        this._longDateFormat[e])
    }
    ,
    bn.invalidDate = function() {
        return this._invalidDate
    }
    ,
    bn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    bn.preparse = wn,
    bn.postformat = wn,
    bn.relativeTime = function(e, t, n, r) {
        var i = this._relativeTime[n];
        return C(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
    }
    ,
    bn.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return C(n) ? n(t) : n.replace(/%s/i, t)
    }
    ,
    bn.set = function(e) {
        var t, n;
        for (n in e)
            g(e, n) && (C(t = e[n]) ? this[n] = t : this["_" + n] = t);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    bn.eras = function(e, t) {
        var n, r, i, o = this._eras || ft("en")._eras;
        for (n = 0,
        r = o.length; n < r; ++n) {
            switch (typeof o[n].since) {
            case "string":
                i = p(o[n].since).startOf("day"),
                o[n].since = i.valueOf()
            }
            switch (typeof o[n].until) {
            case "undefined":
                o[n].until = 1 / 0;
                break;
            case "string":
                i = p(o[n].until).startOf("day").valueOf(),
                o[n].until = i.valueOf()
            }
        }
        return o
    }
    ,
    bn.erasParse = function(e, t, n) {
        var r, i, o, s, a, u = this.eras();
        for (e = e.toUpperCase(),
        r = 0,
        i = u.length; r < i; ++r)
            if (o = u[r].name.toUpperCase(),
            s = u[r].abbr.toUpperCase(),
            a = u[r].narrow.toUpperCase(),
            n)
                switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (s === e)
                        return u[r];
                    break;
                case "NNNN":
                    if (o === e)
                        return u[r];
                    break;
                case "NNNNN":
                    if (a === e)
                        return u[r]
                }
            else if (0 <= [o, s, a].indexOf(e))
                return u[r]
    }
    ,
    bn.erasConvertYear = function(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t ? p(e.since).year() : p(e.since).year() + (t - e.offset) * n
    }
    ,
    bn.erasAbbrRegex = function(e) {
        return g(this, "_erasAbbrRegex") || cn.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    ,
    bn.erasNameRegex = function(e) {
        return g(this, "_erasNameRegex") || cn.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    ,
    bn.erasNarrowRegex = function(e) {
        return g(this, "_erasNarrowRegex") || cn.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    ,
    bn.months = function(e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || $e).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
    }
    ,
    bn.monthsShort = function(e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[$e.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    bn.monthsParse = function(e, t, n) {
        var r, i, o;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var r, i, o, s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    r = 0; r < 12; ++r)
                        o = d([2e3, r]),
                        this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(),
                        this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        r = 0; r < 12; r++) {
            if (i = d([2e3, r]),
            n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
            n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
            this._monthsParse[r] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
                return r;
            if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                return r;
            if (!n && this._monthsParse[r].test(e))
                return r
        }
    }
    ,
    bn.monthsRegex = function(e) {
        return this._monthsParseExact ? (g(this, "_monthsRegex") || He.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (g(this, "_monthsRegex") || (this._monthsRegex = Pe),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    bn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (g(this, "_monthsRegex") || He.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (g(this, "_monthsShortRegex") || (this._monthsShortRegex = Ne),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    bn.week = function(e) {
        return Fe(e, this._week.dow, this._week.doy).week
    }
    ,
    bn.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    bn.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    bn.weekdays = function(e, t) {
        var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Ue(n, this._week.dow) : e ? n[e.day()] : n
    }
    ,
    bn.weekdaysMin = function(e) {
        return !0 === e ? Ue(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    bn.weekdaysShort = function(e) {
        return !0 === e ? Ue(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    bn.weekdaysParse = function(e, t, n) {
        var r, i, o;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var r, i, o, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    r = 0; r < 7; ++r)
                        o = d([2e3, 1]).day(r),
                        this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                        this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        r = 0; r < 7; r++) {
            if (i = d([2e3, 1]).day(r),
            n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
            this._weekdaysParse[r] = new RegExp(o.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
                return r;
            if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                return r;
            if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                return r;
            if (!n && this._weekdaysParse[r].test(e))
                return r
        }
    }
    ,
    bn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (g(this, "_weekdaysRegex") || (this._weekdaysRegex = Ve),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    bn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (g(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    bn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ke.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (g(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    bn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    bn.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    lt("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === ce(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }),
    p.lang = n("moment.lang is deprecated. Use moment.locale instead.", lt),
    p.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ft);
    var Tn = Math.abs;
    function Cn(e, t, n, r) {
        var i = qt(t, n);
        return e._milliseconds += r * i._milliseconds,
        e._days += r * i._days,
        e._months += r * i._months,
        e._bubble()
    }
    function Dn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Mn(e) {
        return 4800 * e / 146097
    }
    function On(e) {
        return 146097 * e / 4800
    }
    function An(e) {
        return function() {
            return this.as(e)
        }
    }
    var En = An("ms")
      , jn = An("s")
      , $n = An("m")
      , Nn = An("h")
      , Pn = An("d")
      , Yn = An("w")
      , Ln = An("M")
      , Hn = An("Q")
      , Rn = An("y")
      , Wn = En;
    function In(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var Fn = In("milliseconds")
      , zn = In("seconds")
      , Un = In("minutes")
      , qn = In("hours")
      , Bn = In("days")
      , Gn = In("months")
      , Vn = In("years");
    var Xn = Math.round
      , Zn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    var Kn = Math.abs;
    function Jn(e) {
        return (0 < e) - (e < 0) || +e
    }
    function Qn() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n, r, i, o, s, a, u = Kn(this._milliseconds) / 1e3, l = Kn(this._days), c = Kn(this._months), f = this.asSeconds();
        return f ? (t = le((e = le(u / 60)) / 60),
        u %= 60,
        e %= 60,
        n = le(c / 12),
        c %= 12,
        r = u ? u.toFixed(3).replace(/\.?0+$/, "") : "",
        i = f < 0 ? "-" : "",
        o = Jn(this._months) !== Jn(f) ? "-" : "",
        s = Jn(this._days) !== Jn(f) ? "-" : "",
        a = Jn(this._milliseconds) !== Jn(f) ? "-" : "",
        i + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (l ? s + l + "D" : "") + (t || e || u ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (u ? a + r + "S" : "")) : "P0D"
    }
    var er = Nt.prototype;
    return er.isValid = function() {
        return this._isValid
    }
    ,
    er.abs = function() {
        var e = this._data;
        return this._milliseconds = Tn(this._milliseconds),
        this._days = Tn(this._days),
        this._months = Tn(this._months),
        e.milliseconds = Tn(e.milliseconds),
        e.seconds = Tn(e.seconds),
        e.minutes = Tn(e.minutes),
        e.hours = Tn(e.hours),
        e.months = Tn(e.months),
        e.years = Tn(e.years),
        this
    }
    ,
    er.add = function(e, t) {
        return Cn(this, e, t, 1)
    }
    ,
    er.subtract = function(e, t) {
        return Cn(this, e, t, -1)
    }
    ,
    er.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, r = this._milliseconds;
        if ("month" === (e = H(e)) || "quarter" === e || "year" === e)
            switch (t = this._days + r / 864e5,
            n = this._months + Mn(t),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (t = this._days + Math.round(On(this._months)),
            e) {
            case "week":
                return t / 7 + r / 6048e5;
            case "day":
                return t + r / 864e5;
            case "hour":
                return 24 * t + r / 36e5;
            case "minute":
                return 1440 * t + r / 6e4;
            case "second":
                return 86400 * t + r / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + r;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    ,
    er.asMilliseconds = En,
    er.asSeconds = jn,
    er.asMinutes = $n,
    er.asHours = Nn,
    er.asDays = Pn,
    er.asWeeks = Yn,
    er.asMonths = Ln,
    er.asQuarters = Hn,
    er.asYears = Rn,
    er.valueOf = Wn,
    er._bubble = function() {
        var e, t, n, r, i, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
        return 0 <= o && 0 <= s && 0 <= a || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Dn(On(a) + s),
        a = s = 0),
        u.milliseconds = o % 1e3,
        e = le(o / 1e3),
        u.seconds = e % 60,
        t = le(e / 60),
        u.minutes = t % 60,
        n = le(t / 60),
        u.hours = n % 24,
        a += i = le(Mn(s += le(n / 24))),
        s -= Dn(On(i)),
        r = le(a / 12),
        a %= 12,
        u.days = s,
        u.months = a,
        u.years = r,
        this
    }
    ,
    er.clone = function() {
        return qt(this)
    }
    ,
    er.get = function(e) {
        return e = H(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    er.milliseconds = Fn,
    er.seconds = zn,
    er.minutes = Un,
    er.hours = qn,
    er.days = Bn,
    er.weeks = function() {
        return le(this.days() / 7)
    }
    ,
    er.months = Gn,
    er.years = Vn,
    er.humanize = function(e, t) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var n, r, i = !1, o = Zn;
        return "object" == typeof e && (t = e,
        e = !1),
        "boolean" == typeof e && (i = e),
        "object" == typeof t && (o = Object.assign({}, Zn, t),
        null != t.s && null == t.ss && (o.ss = t.s - 1)),
        n = this.localeData(),
        r = function(e, t, n, r) {
            var i = qt(e).abs()
              , o = Xn(i.as("s"))
              , s = Xn(i.as("m"))
              , a = Xn(i.as("h"))
              , u = Xn(i.as("d"))
              , l = Xn(i.as("M"))
              , c = Xn(i.as("w"))
              , f = Xn(i.as("y"))
              , d = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || s <= 1 && ["m"] || s < n.m && ["mm", s] || a <= 1 && ["h"] || a < n.h && ["hh", a] || u <= 1 && ["d"] || u < n.d && ["dd", u];
            return null != n.w && (d = d || c <= 1 && ["w"] || c < n.w && ["ww", c]),
            (d = d || l <= 1 && ["M"] || l < n.M && ["MM", l] || f <= 1 && ["y"] || ["yy", f])[2] = t,
            d[3] = 0 < +e,
            d[4] = r,
            function(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
            }
            .apply(null, d)
        }(this, !i, o, n),
        i && (r = n.pastFuture(+this, r)),
        n.postformat(r)
    }
    ,
    er.toISOString = Qn,
    er.toString = Qn,
    er.toJSON = Qn,
    er.locale = tn,
    er.localeData = rn,
    er.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn),
    er.lang = nn,
    N("X", 0, 0, "unix"),
    N("x", 0, 0, "valueOf"),
    se("x", ee),
    se("X", /[+-]?\d+(\.\d{1,3})?/),
    de("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }),
    de("x", function(e, t, n) {
        n._d = new Date(ce(e))
    }),
    p.version = "2.30.1",
    e = Ot,
    p.fn = _n,
    p.min = function() {
        return jt("isBefore", [].slice.call(arguments, 0))
    }
    ,
    p.max = function() {
        return jt("isAfter", [].slice.call(arguments, 0))
    }
    ,
    p.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    p.utc = d,
    p.unix = function(e) {
        return Ot(1e3 * e)
    }
    ,
    p.months = function(e, t) {
        return xn(e, t, "months")
    }
    ,
    p.isDate = o,
    p.locale = lt,
    p.invalid = y,
    p.duration = qt,
    p.isMoment = b,
    p.weekdays = function(e, t, n) {
        return Sn(e, t, n, "weekdays")
    }
    ,
    p.parseZone = function() {
        return Ot.apply(null, arguments).parseZone()
    }
    ,
    p.localeData = ft,
    p.isDuration = Pt,
    p.monthsShort = function(e, t) {
        return xn(e, t, "monthsShort")
    }
    ,
    p.weekdaysMin = function(e, t, n) {
        return Sn(e, t, n, "weekdaysMin")
    }
    ,
    p.defineLocale = ct,
    p.updateLocale = function(e, t) {
        if (null != t) {
            var n, r, i = rt;
            null != it[e] && null != it[e].parentLocale ? it[e].set(D(it[e]._config, t)) : (null != (r = ut(e)) && (i = r._config),
            t = D(i, t),
            null == r && (t.abbr = e),
            (n = new M(t)).parentLocale = it[e],
            it[e] = n),
            lt(e)
        } else
            null != it[e] && (null != it[e].parentLocale ? (it[e] = it[e].parentLocale,
            e === lt() && lt(e)) : null != it[e] && delete it[e]);
        return it[e]
    }
    ,
    p.locales = function() {
        return x(it)
    }
    ,
    p.weekdaysShort = function(e, t, n) {
        return Sn(e, t, n, "weekdaysShort")
    }
    ,
    p.normalizeUnits = H,
    p.relativeTimeRounding = function(e) {
        return void 0 === e ? Xn : "function" == typeof e && (Xn = e,
        !0)
    }
    ,
    p.relativeTimeThreshold = function(e, t) {
        return void 0 !== Zn[e] && (void 0 === t ? Zn[e] : (Zn[e] = t,
        "s" === e && (Zn.ss = t - 1),
        !0))
    }
    ,
    p.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    ,
    p.prototype = _n,
    p.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    p
}),
function() {
    var k, r, a, i, e, l, m, o, u, c, f, d, h, p, g, s, v;
    u = function(e) {
        return ">" === e
    }
    ,
    c = function(e) {
        return "<" === e
    }
    ,
    d = function(e) {
        return /^\s+$/.test(e)
    }
    ,
    f = function(e) {
        return /^\s*<[^>]+>\s*$/.test(e)
    }
    ,
    h = function(e) {
        return !f(e)
    }
    ,
    k = function(e, t, n) {
        this.start_in_before = e,
        this.start_in_after = t,
        this.length = n,
        this.end_in_before = this.start_in_before + this.length - 1,
        this.end_in_after = this.start_in_after + this.length - 1
    }
    ,
    o = function(e) {
        var t, n, r, i, o, s;
        for (o = "char",
        n = "",
        s = [],
        r = 0,
        i = e.length; r < i; r++)
            switch (t = e[r],
            o) {
            case "tag":
                u(t) ? (n += ">",
                s.push(n),
                n = "",
                o = d(t) ? "whitespace" : "char") : n += t;
                break;
            case "char":
                c(t) ? (n && s.push(n),
                n = "<",
                o = "tag") : /\s/.test(t) ? (n && s.push(n),
                n = t,
                o = "whitespace") : /[\w\#@]+/i.test(t) ? n += t : (n && s.push(n),
                n = t);
                break;
            case "whitespace":
                c(t) ? (n && s.push(n),
                n = "<",
                o = "tag") : d(t) ? n += t : (n && s.push(n),
                n = t,
                o = "char");
                break;
            default:
                throw new Error("Unknown mode " + o)
            }
        return n && s.push(n),
        s
    }
    ,
    l = function(e, t, n, r, i, o, s) {
        var a, u, l, c, f, d, h, p, g, v, y, m, _, w, b;
        for (a = o,
        l = 0,
        y = {},
        d = c = w = u = r,
        b = i; w <= b ? c < b : b < c; d = w <= b ? ++c : --c) {
            for (_ = {},
            h = 0,
            p = (g = n[e[d]]).length; h < p; h++)
                if (!((f = g[h]) < o)) {
                    if (s <= f)
                        break;
                    null == y[f - 1] && (y[f - 1] = 0),
                    m = y[f - 1] + 1,
                    l < (_[f] = m) && (u = d - m + 1,
                    a = f - m + 1,
                    l = m)
                }
            y = _
        }
        return 0 !== l && (v = new k(u,a,l)),
        v
    }
    ,
    g = function(e, t, n, r, i, o, s, a) {
        var u;
        return null != (u = l(e, 0, n, r, i, o, s)) && (r < u.start_in_before && o < u.start_in_after && g(e, t, n, r, u.start_in_before, o, u.start_in_after, a),
        a.push(u),
        u.end_in_before <= i && u.end_in_after <= s && g(e, t, n, u.end_in_before + 1, i, u.end_in_after + 1, s, a)),
        a
    }
    ,
    i = function(e) {
        var t, n, r, i, o, s;
        if (null == e.find_these)
            throw new Error("params must have find_these key");
        if (null == e.in_these)
            throw new Error("params must have in_these key");
        for (r = {},
        t = 0,
        i = (o = e.find_these).length; t < i; t++)
            for (r[s = o[t]] = [],
            n = e.in_these.indexOf(s); -1 !== n; )
                r[s].push(n),
                n = e.in_these.indexOf(s, n + 1);
        return r
    }
    ,
    m = function(e, t) {
        var n, r;
        return r = [],
        n = i({
            find_these: e,
            in_these: t
        }),
        g(e, t, n, 0, e.length, 0, t.length, r)
    }
    ,
    r = function(t, e) {
        var n, r, i, o, s, a, u, l, c, f, d, h, p, g, v, y;
        if (null == t)
            throw new Error("before_tokens?");
        if (null == e)
            throw new Error("after_tokens?");
        for (v = g = 0,
        p = [],
        n = {
            "false,false": "replace",
            "true,false": "insert",
            "false,true": "delete",
            "true,true": "none"
        },
        (d = m(t, e)).push(new k(t.length,e.length,0)),
        o = i = 0,
        l = d.length; i < l; o = ++i)
            "none" !== (r = n[[v === (f = d[o]).start_in_before, g === f.start_in_after].toString()]) && p.push({
                action: r,
                start_in_before: v,
                end_in_before: "insert" !== r ? f.start_in_before - 1 : void 0,
                start_in_after: g,
                end_in_after: "delete" !== r ? f.start_in_after - 1 : void 0
            }),
            0 !== f.length && p.push({
                action: "equal",
                start_in_before: f.start_in_before,
                end_in_before: f.end_in_before,
                start_in_after: f.start_in_after,
                end_in_after: f.end_in_after
            }),
            v = f.end_in_before + 1,
            g = f.end_in_after + 1;
        for (y = [],
        u = {
            action: "none"
        },
        s = function(e) {
            return "equal" === e.action && e.end_in_before - e.start_in_before == 0 && /^\s$/.test(t.slice(e.start_in_before, +e.end_in_before + 1 || 9e9))
        }
        ,
        a = 0,
        c = p.length; a < c; a++)
            s(h = p[a]) && "replace" === u.action || "replace" === h.action && "replace" === u.action ? (u.end_in_before = h.end_in_before,
            u.end_in_after = h.end_in_after) : (y.push(h),
            u = h);
        return y
    }
    ,
    a = function(e, t, n) {
        var r, i, o, s, a;
        for (s = void 0,
        o = i = 0,
        a = (t = t.slice(e, +t.length + 1 || 9e9)).length; i < a && (!0 === (r = n(t[o])) && (s = o),
        !1 !== r); o = ++i)
            ;
        return null != s ? t.slice(0, +s + 1 || 9e9) : []
    }
    ,
    v = function(e, t) {
        var n, r, i, o, s;
        for (o = "",
        i = 0,
        n = t.length; !(n <= i) && (i += (r = a(i, t, h)).length,
        0 !== r.length && (o += "<" + e + ">" + r.join("") + "</" + e + ">"),
        !(n <= i)); )
            i += (s = a(i, t, f)).length,
            o += s.join("");
        return o
    }
    ,
    (p = {
        equal: function(e, t, n) {
            return t.slice(e.start_in_before, +e.end_in_before + 1 || 9e9).join("")
        },
        insert: function(e, t, n) {
            var r;
            return r = n.slice(e.start_in_after, +e.end_in_after + 1 || 9e9),
            v("ins", r)
        },
        delete: function(e, t, n) {
            var r;
            return r = t.slice(e.start_in_before, +e.end_in_before + 1 || 9e9),
            v("del", r)
        }
    }).replace = function(e, t, n) {
        return p.delete(e, t, n) + p.insert(e, t, n)
    }
    ,
    s = function(e, t, n) {
        var r, i, o, s;
        for (s = "",
        r = 0,
        i = n.length; r < i; r++)
            o = n[r],
            s += p[o.action](o, e, t);
        return s
    }
    ,
    (e = function(e, t) {
        var n;
        return e === t ? e : (e = o(e),
        t = o(t),
        n = r(e, t),
        s(e, t, n))
    }
    ).html_to_tokens = o,
    (e.find_matching_blocks = m).find_match = l,
    m.create_index = i,
    e.calculate_operations = r,
    e.render_operations = s,
    "function" == typeof define ? define([], function() {
        return e
    }) : "undefined" != typeof module && null !== module ? module.exports = e : "undefined" != typeof window && (window.htmldiff = e)
}(),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(l) {
    "use strict";
    var i, o = window.Slick || {};
    (i = 0,
    o = function(e, t) {
        var n, r = this;
        r.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: l(e),
            appendDots: l(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return l('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        l.extend(r, r.initials),
        r.activeBreakpoint = null,
        r.animType = null,
        r.animProp = null,
        r.breakpoints = [],
        r.breakpointSettings = [],
        r.cssTransitions = !1,
        r.focussed = !1,
        r.interrupted = !1,
        r.hidden = "hidden",
        r.paused = !0,
        r.positionProp = null,
        r.respondTo = null,
        r.rowCount = 1,
        r.shouldClick = !0,
        r.$slider = l(e),
        r.$slidesCache = null,
        r.transformType = null,
        r.transitionType = null,
        r.visibilityChange = "visibilitychange",
        r.windowWidth = 0,
        r.windowTimer = null,
        n = l(e).data("slick") || {},
        r.options = l.extend({}, r.defaults, t, n),
        r.currentSlide = r.options.initialSlide,
        r.originalSettings = r.options,
        void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
        r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
        r.visibilityChange = "webkitvisibilitychange"),
        r.autoPlay = l.proxy(r.autoPlay, r),
        r.autoPlayClear = l.proxy(r.autoPlayClear, r),
        r.autoPlayIterator = l.proxy(r.autoPlayIterator, r),
        r.changeSlide = l.proxy(r.changeSlide, r),
        r.clickHandler = l.proxy(r.clickHandler, r),
        r.selectHandler = l.proxy(r.selectHandler, r),
        r.setPosition = l.proxy(r.setPosition, r),
        r.swipeHandler = l.proxy(r.swipeHandler, r),
        r.dragHandler = l.proxy(r.dragHandler, r),
        r.keyHandler = l.proxy(r.keyHandler, r),
        r.instanceUid = i++,
        r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        r.registerBreakpoints(),
        r.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    o.prototype.addSlide = o.prototype.slickAdd = function(e, t, n) {
        var r = this;
        if ("boolean" == typeof t)
            n = t,
            t = null;
        else if (t < 0 || t >= r.slideCount)
            return !1;
        r.unload(),
        "number" == typeof t ? 0 === t && 0 === r.$slides.length ? l(e).appendTo(r.$slideTrack) : n ? l(e).insertBefore(r.$slides.eq(t)) : l(e).insertAfter(r.$slides.eq(t)) : !0 === n ? l(e).prependTo(r.$slideTrack) : l(e).appendTo(r.$slideTrack),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slides.each(function(e, t) {
            l(t).attr("data-slick-index", e)
        }),
        r.$slidesCache = r.$slides,
        r.reinit()
    }
    ,
    o.prototype.animateHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({
                height: e
            }, this.options.speed)
        }
    }
    ,
    o.prototype.animateSlide = function(e, t) {
        var n = {}
          , r = this;
        r.animateHeight(),
        !0 === r.options.rtl && !1 === r.options.vertical && (e = -e),
        !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
            left: e
        }, r.options.speed, r.options.easing, t) : r.$slideTrack.animate({
            top: e
        }, r.options.speed, r.options.easing, t) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
        l({
            animStart: r.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === r.options.vertical ? n[r.animType] = "translate(" + e + "px, 0px)" : n[r.animType] = "translate(0px," + e + "px)",
                r.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (r.applyTransition(),
        e = Math.ceil(e),
        !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)",
        r.$slideTrack.css(n),
        t && setTimeout(function() {
            r.disableTransition(),
            t.call()
        }, r.options.speed))
    }
    ,
    o.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = l(e).not(this.$slider)),
        e
    }
    ,
    o.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = l(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    o.prototype.applyTransition = function(e) {
        var t = this
          , n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }
    ,
    o.prototype.autoPlay = function() {
        this.autoPlayClear(),
        this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
    }
    ,
    o.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    o.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    o.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = l(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = l(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    o.prototype.buildDots = function() {
        var e, t;
        if (!0 === this.options.dots) {
            for (this.$slider.addClass("slick-dotted"),
            t = l("<ul />").addClass(this.options.dotsClass),
            e = 0; e <= this.getDotCount(); e += 1)
                t.append(l("<li />").append(this.options.customPaging.call(this, this, e)));
            this.$dots = t.appendTo(this.options.appendDots),
            this.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    o.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            l(t).attr("data-slick-index", e).data("originalStyling", l(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? l('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        l("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    o.prototype.buildRows = function() {
        var e, t, n, r, i, o, s, a = this;
        if (r = document.createDocumentFragment(),
        o = a.$slider.children(),
        1 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows,
            i = Math.ceil(o.length / s),
            e = 0; e < i; e++) {
                var u = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var l = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var c = e * s + (t * a.options.slidesPerRow + n);
                        o.get(c) && l.appendChild(o.get(c))
                    }
                    u.appendChild(l)
                }
                r.appendChild(u)
            }
            a.$slider.empty().append(r),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    o.prototype.checkResponsive = function(e, t) {
        var n, r, i, o = this, s = !1, a = o.$slider.width(), u = window.innerWidth || l(window).width();
        if ("window" === o.respondTo ? i = u : "slider" === o.respondTo ? i = a : "min" === o.respondTo && (i = Math.min(u, a)),
        o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            for (n in r = null,
            o.breakpoints)
                o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? i < o.breakpoints[n] && (r = o.breakpoints[n]) : i > o.breakpoints[n] && (r = o.breakpoints[n]));
            null !== r ? null !== o.activeBreakpoint ? (r !== o.activeBreakpoint || t) && (o.activeBreakpoint = r,
            "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = l.extend({}, o.originalSettings, o.breakpointSettings[r]),
            !0 === e && (o.currentSlide = o.options.initialSlide),
            o.refresh(e)),
            s = r) : (o.activeBreakpoint = r,
            "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = l.extend({}, o.originalSettings, o.breakpointSettings[r]),
            !0 === e && (o.currentSlide = o.options.initialSlide),
            o.refresh(e)),
            s = r) : null !== o.activeBreakpoint && (o.activeBreakpoint = null,
            o.options = o.originalSettings,
            !0 === e && (o.currentSlide = o.options.initialSlide),
            o.refresh(e),
            s = r),
            e || !1 === s || o.$slider.trigger("breakpoint", [o, s])
        }
    }
    ,
    o.prototype.changeSlide = function(e, t) {
        var n, r, i = this, o = l(e.currentTarget);
        switch (o.is("a") && e.preventDefault(),
        o.is("li") || (o = o.closest("li")),
        n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll,
        e.data.message) {
        case "previous":
            r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
            break;
        case "next":
            r = 0 == n ? i.options.slidesToScroll : n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
            break;
        case "index":
            var s = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(s), !1, t),
            o.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    o.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0,
        e > (t = this.getNavigableIndexes())[t.length - 1])
            e = t[t.length - 1];
        else
            for (var r in t) {
                if (e < t[r]) {
                    e = n;
                    break
                }
                n = t[r]
            }
        return e
    }
    ,
    o.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (l("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", l.proxy(e.interrupt, e, !0)).off("mouseleave.slick", l.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        l(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && l(e.$slideTrack).children().off("click.slick", e.selectHandler),
        l(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        l(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        l("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        l(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    o.prototype.cleanUpSlideEvents = function() {
        this.$list.off("mouseenter.slick", l.proxy(this.interrupt, this, !0)),
        this.$list.off("mouseleave.slick", l.proxy(this.interrupt, this, !1))
    }
    ,
    o.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(e))
    }
    ,
    o.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    o.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        l(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            l(this).attr("style", l(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    o.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }
    ,
    o.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
        n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    }
    ,
    o.prototype.fadeSlideOut = function(e) {
        !1 === this.cssTransitions ? this.$slides.eq(e).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(e),
        this.$slides.eq(e).css({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }))
    }
    ,
    o.prototype.filterSlides = o.prototype.slickFilter = function(e) {
        null !== e && (this.$slidesCache = this.$slides,
        this.unload(),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slidesCache.filter(e).appendTo(this.$slideTrack),
        this.reinit())
    }
    ,
    o.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = l(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"),
                n.autoPlay())
            }, 0)
        })
    }
    ,
    o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    o.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , n = 0
          , r = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++r;
            else
                for (; t < e.slideCount; )
                    ++r,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            r = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++r,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            r = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return r - 1
    }
    ,
    o.prototype.getLeft = function(e) {
        var t, n, r, i, o = this, s = 0;
        return o.slideOffset = 0,
        n = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        i = -1,
        !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? i = -1.5 : 1 === o.options.slidesToShow && (i = -2)),
        s = n * o.options.slidesToShow * i),
        o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
        (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        s = (e + o.options.slidesToShow - o.slideCount) * n),
        o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0),
        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s,
        !0 === o.options.variableWidth && (r = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
        t = !0 === o.options.rtl ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0,
        !0 === o.options.centerMode && (r = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
        t = !0 === o.options.rtl ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0,
        t += (o.$list.width() - r.outerWidth()) / 2)),
        t
    }
    ,
    o.prototype.getOption = o.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    o.prototype.getNavigableIndexes = function() {
        var e, t = this, n = 0, r = 0, i = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll,
        r = -1 * t.options.slidesToScroll,
        2 * t.slideCount); n < e; )
            i.push(n),
            n = r + t.options.slidesToScroll,
            r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return i
    }
    ,
    o.prototype.getSlick = function() {
        return this
    }
    ,
    o.prototype.getSlideCount = function() {
        var n, r, i = this;
        return r = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - r + l(t).outerWidth() / 2 > -1 * i.swipeLeft)
                return n = t,
                !1
        }),
        Math.abs(l(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    o.prototype.goTo = o.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    o.prototype.init = function(e) {
        var t = this;
        l(t.$slider).hasClass("slick-initialized") || (l(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    o.prototype.initADA = function() {
        var n = this
          , r = Math.ceil(n.slideCount / n.options.slidesToShow)
          , i = n.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < n.slideCount
        });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = i.indexOf(e);
            l(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }),
            -1 !== t && l(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }),
        n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = i[e];
            l(this).attr({
                role: "presentation"
            }),
            l(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + r,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
            n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    }
    ,
    o.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }
    ,
    o.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (l("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && l("li", e.$dots).on("mouseenter.slick", l.proxy(e.interrupt, e, !0)).on("mouseleave.slick", l.proxy(e.interrupt, e, !1))
    }
    ,
    o.prototype.initSlideEvents = function() {
        this.options.pauseOnHover && (this.$list.on("mouseenter.slick", l.proxy(this.interrupt, this, !0)),
        this.$list.on("mouseleave.slick", l.proxy(this.interrupt, this, !1)))
    }
    ,
    o.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        l(document).on(e.visibilityChange, l.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && l(e.$slideTrack).children().on("click.slick", e.selectHandler),
        l(window).on("orientationchange.slick.slick-" + e.instanceUid, l.proxy(e.orientationChange, e)),
        l(window).on("resize.slick.slick-" + e.instanceUid, l.proxy(e.resize, e)),
        l("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        l(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        l(e.setPosition)
    }
    ,
    o.prototype.initUI = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(),
        this.$nextArrow.show()),
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
    }
    ,
    o.prototype.keyHandler = function(e) {
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    o.prototype.lazyLoad = function() {
        function e(e) {
            l("img[data-lazy]", e).each(function() {
                var e = l(this)
                  , t = l(this).attr("data-lazy")
                  , n = l(this).attr("data-srcset")
                  , r = l(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n),
                        r && e.attr("sizes", r)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        o.$slider.trigger("lazyLoaded", [o, e, t])
                    })
                }
                ,
                i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, e, t])
                }
                ,
                i.src = t
            })
        }
        var t, n, r, o = this;
        if (!0 === o.options.centerMode ? r = !0 === o.options.infinite ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        r = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (0 < n && n--,
        r <= o.slideCount && r++)),
        t = o.$slider.find(".slick-slide").slice(n, r),
        "anticipated" === o.options.lazyLoad)
            for (var i = n - 1, s = r, a = o.$slider.find(".slick-slide"), u = 0; u < o.options.slidesToScroll; u++)
                i < 0 && (i = o.slideCount - 1),
                t = (t = t.add(a.eq(i))).add(a.eq(s)),
                i--,
                s++;
        e(t),
        o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    o.prototype.loadSlider = function() {
        this.setPosition(),
        this.$slideTrack.css({
            opacity: 1
        }),
        this.$slider.removeClass("slick-loading"),
        this.initUI(),
        "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    }
    ,
    o.prototype.next = o.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    o.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    o.prototype.pause = o.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    o.prototype.play = o.prototype.slickPlay = function() {
        this.autoPlay(),
        this.options.autoplay = !0,
        this.paused = !1,
        this.focussed = !1,
        this.interrupted = !1
    }
    ,
    o.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && l(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    o.prototype.prev = o.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    o.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    o.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, r, i, o, s = this, a = l("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(),
        n = t.attr("data-lazy"),
        r = t.attr("data-srcset"),
        i = t.attr("data-sizes") || s.$slider.attr("data-sizes"),
        (o = document.createElement("img")).onload = function() {
            r && (t.attr("srcset", r),
            i && t.attr("sizes", i)),
            t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === s.options.adaptiveHeight && s.setPosition(),
            s.$slider.trigger("lazyLoaded", [s, t, n]),
            s.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            s.$slider.trigger("lazyLoadError", [s, t, n]),
            s.progressiveLazyLoad())
        }
        ,
        o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }
    ,
    o.prototype.refresh = function(e) {
        var t, n, r = this;
        n = r.slideCount - r.options.slidesToShow,
        !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
        t = r.currentSlide,
        r.destroy(!0),
        l.extend(r, r.initials, {
            currentSlide: t
        }),
        r.init(),
        e || r.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    o.prototype.registerBreakpoints = function() {
        var e, t, n, r = this, i = r.options.responsive || null;
        if ("array" === l.type(i) && i.length) {
            for (e in r.respondTo = r.options.respondTo || "window",
            i)
                if (n = r.breakpoints.length - 1,
                i.hasOwnProperty(e)) {
                    for (t = i[e].breakpoint; 0 <= n; )
                        r.breakpoints[n] && r.breakpoints[n] === t && r.breakpoints.splice(n, 1),
                        n--;
                    r.breakpoints.push(t),
                    r.breakpointSettings[t] = i[e].settings
                }
            r.breakpoints.sort(function(e, t) {
                return r.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    o.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && l(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    o.prototype.resize = function() {
        var e = this;
        l(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = l(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    o.prototype.removeSlide = o.prototype.slickRemove = function(e, t, n) {
        var r = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : r.slideCount - 1 : !0 === t ? --e : e,
        r.slideCount < 1 || e < 0 || e > r.slideCount - 1)
            return !1;
        r.unload(),
        !0 === n ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slidesCache = r.$slides,
        r.reinit()
    }
    ,
    o.prototype.setCSS = function(e) {
        var t, n, r = this, i = {};
        !0 === r.options.rtl && (e = -e),
        t = "left" == r.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == r.positionProp ? Math.ceil(e) + "px" : "0px",
        i[r.positionProp] = e,
        !1 === r.transformsEnabled || (!(i = {}) === r.cssTransitions ? i[r.animType] = "translate(" + t + ", " + n + ")" : i[r.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
        r.$slideTrack.css(i)
    }
    ,
    o.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    o.prototype.setFade = function() {
        var n, r = this;
        r.$slides.each(function(e, t) {
            n = r.slideWidth * e * -1,
            !0 === r.options.rtl ? l(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: r.options.zIndex - 2,
                opacity: 0
            }) : l(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: r.options.zIndex - 2,
                opacity: 0
            })
        }),
        r.$slides.eq(r.currentSlide).css({
            zIndex: r.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    o.prototype.setHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", e)
        }
    }
    ,
    o.prototype.setOption = o.prototype.slickSetOption = function() {
        var e, t, n, r, i, o = this, s = !1;
        if ("object" === l.type(arguments[0]) ? (n = arguments[0],
        s = arguments[1],
        i = "multiple") : "string" === l.type(arguments[0]) && (n = arguments[0],
        r = arguments[1],
        s = arguments[2],
        "responsive" === arguments[0] && "array" === l.type(arguments[1]) ? i = "responsive" : void 0 !== arguments[1] && (i = "single")),
        "single" === i)
            o.options[n] = r;
        else if ("multiple" === i)
            l.each(n, function(e, t) {
                o.options[e] = t
            });
        else if ("responsive" === i)
            for (t in r)
                if ("array" !== l.type(o.options.responsive))
                    o.options.responsive = [r[t]];
                else {
                    for (e = o.options.responsive.length - 1; 0 <= e; )
                        o.options.responsive[e].breakpoint === r[t].breakpoint && o.options.responsive.splice(e, 1),
                        e--;
                    o.options.responsive.push(r[t])
                }
        s && (o.unload(),
        o.reinit())
    }
    ,
    o.prototype.setPosition = function() {
        this.setDimensions(),
        this.setHeight(),
        !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(),
        this.$slider.trigger("setPosition", [this])
    }
    ,
    o.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    o.prototype.setSlideClasses = function(e) {
        var t, n, r, i, o = this;
        if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(e).addClass("slick-current"),
        !0 === o.options.centerMode) {
            var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(o.options.slidesToShow / 2),
            !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = o.options.slidesToShow + e,
            n.slice(r - t + 1 + s, r + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(e).addClass("slick-center")
        } else
            0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow,
            r = !0 === o.options.infinite ? o.options.slidesToShow + e : e,
            o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(r - (o.options.slidesToShow - i), r + i).addClass("slick-active").attr("aria-hidden", "false") : n.slice(r, r + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    o.prototype.setupInfinite = function() {
        var e, t, n, r = this;
        if (!0 === r.options.fade && (r.options.centerMode = !1),
        !0 === r.options.infinite && !1 === r.options.fade && (t = null,
        r.slideCount > r.options.slidesToShow)) {
            for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow,
            e = r.slideCount; e > r.slideCount - n; e -= 1)
                t = e - 1,
                l(r.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + r.slideCount; e += 1)
                t = e,
                l(r.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                l(this).attr("id", "")
            })
        }
    }
    ,
    o.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    o.prototype.selectHandler = function(e) {
        var t = l(e.target).is(".slick-slide") ? l(e.target) : l(e.target).parents(".slick-slide")
          , n = parseInt(t.attr("data-slick-index"));
        n || (n = 0),
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
    }
    ,
    o.prototype.slideHandler = function(e, t, n) {
        var r, i, o, s, a, u = null, l = this;
        if (t = t || !1,
        !(!0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === e))
            if (!1 === t && l.asNavFor(e),
            r = e,
            u = l.getLeft(r),
            s = l.getLeft(l.currentSlide),
            l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft,
            !1 === l.options.infinite && !1 === l.options.centerMode && (e < 0 || e > l.getDotCount() * l.options.slidesToScroll))
                !1 === l.options.fade && (r = l.currentSlide,
                !0 !== n ? l.animateSlide(s, function() {
                    l.postSlide(r)
                }) : l.postSlide(r));
            else if (!1 === l.options.infinite && !0 === l.options.centerMode && (e < 0 || e > l.slideCount - l.options.slidesToScroll))
                !1 === l.options.fade && (r = l.currentSlide,
                !0 !== n ? l.animateSlide(s, function() {
                    l.postSlide(r)
                }) : l.postSlide(r));
            else {
                if (l.options.autoplay && clearInterval(l.autoPlayTimer),
                i = r < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + r : r >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : r - l.slideCount : r,
                l.animating = !0,
                l.$slider.trigger("beforeChange", [l, l.currentSlide, i]),
                o = l.currentSlide,
                l.currentSlide = i,
                l.setSlideClasses(l.currentSlide),
                l.options.asNavFor && (a = (a = l.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(l.currentSlide),
                l.updateDots(),
                l.updateArrows(),
                !0 === l.options.fade)
                    return !0 !== n ? (l.fadeSlideOut(o),
                    l.fadeSlide(i, function() {
                        l.postSlide(i)
                    })) : l.postSlide(i),
                    void l.animateHeight();
                !0 !== n ? l.animateSlide(u, function() {
                    l.postSlide(i)
                }) : l.postSlide(i)
            }
    }
    ,
    o.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    o.prototype.swipeDirection = function() {
        var e, t, n, r;
        return e = this.touchObject.startX - this.touchObject.curX,
        t = this.touchObject.startY - this.touchObject.curY,
        n = Math.atan2(t, e),
        (r = Math.round(180 * n / Math.PI)) < 0 && (r = 360 - Math.abs(r)),
        r <= 45 && 0 <= r ? !1 === this.options.rtl ? "left" : "right" : r <= 360 && 315 <= r ? !1 === this.options.rtl ? "left" : "right" : 135 <= r && r <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= r && r <= 135 ? "down" : "up" : "vertical"
    }
    ,
    o.prototype.swipeEnd = function(e) {
        var t, n, r = this;
        if (r.dragging = !1,
        r.swiping = !1,
        r.scrolling)
            return r.scrolling = !1;
        if (r.interrupted = !1,
        r.shouldClick = !(10 < r.touchObject.swipeLength),
        void 0 === r.touchObject.curX)
            return !1;
        if (!0 === r.touchObject.edgeHit && r.$slider.trigger("edge", [r, r.swipeDirection()]),
        r.touchObject.swipeLength >= r.touchObject.minSwipe) {
            switch (n = r.swipeDirection()) {
            case "left":
            case "down":
                t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide + r.getSlideCount()) : r.currentSlide + r.getSlideCount(),
                r.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide - r.getSlideCount()) : r.currentSlide - r.getSlideCount(),
                r.currentDirection = 1
            }
            "vertical" != n && (r.slideHandler(t),
            r.touchObject = {},
            r.$slider.trigger("swipe", [r, n]))
        } else
            r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide),
            r.touchObject = {})
    }
    ,
    o.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    o.prototype.swipeMove = function(e) {
        var t, n, r, i, o, s, a = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
        a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
        n = a.swipeDirection(),
        void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0,
        e.preventDefault()),
        i = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (i = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        r = a.touchObject.swipeLength,
        (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (r = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = t + r * i : a.swipeLeft = t + r * (a.$list.height() / a.listWidth) * i,
        !0 === a.options.verticalSwiping && (a.swipeLeft = t + r * i),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    o.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    }
    ,
    o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slidesCache.appendTo(this.$slideTrack),
        this.reinit())
    }
    ,
    o.prototype.unload = function() {
        var e = this;
        l(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    o.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    }
    ,
    o.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    o.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(),
        this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    o.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    l.fn.slick = function() {
        var e, t, n = arguments[0], r = Array.prototype.slice.call(arguments, 1), i = this.length;
        for (e = 0; e < i; e++)
            if ("object" == typeof n || void 0 === n ? this[e].slick = new o(this[e],n) : t = this[e].slick[n].apply(this[e].slick, r),
            void 0 !== t)
                return t;
        return this
    }
}),
function(b, i, d) {
    "use strict";
    var k, s, x, S, n, r, o, a, u, l, c, f, h, p, g, v, e, y, T, m, _ = "accessibleMegaMenu", w = {
        uuidPrefix: "accessible-megamenu",
        menuClass: "accessible-megamenu",
        topNavItemClass: "accessible-megamenu-top-nav-item",
        panelClass: "accessible-megamenu-panel",
        panelGroupClass: "accessible-megamenu-panel-group",
        hoverClass: "hover",
        focusClass: "focus",
        openClass: "open",
        toggleButtonClass: "accessible-megamenu-toggle",
        openDelay: 0,
        closeDelay: 250,
        openOnMouseover: !1
    }, C = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        keyMap: {
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            190: "."
        }
    }, D = i.clearTimeout, M = i.setTimeout, O = i.opera && "[object Opera]" === i.opera.toString();
    function A(e, t) {
        this.element = e,
        this.settings = b.extend({}, w, t),
        this._defaults = w,
        this._name = _,
        this.mouseTimeoutID = null,
        this.focusTimeoutID = null,
        this.mouseFocused = !1,
        this.justFocused = !1,
        this.init()
    }
    function E(e) {
        return b.expr.filters.visible(e) && !b(e).parents().addBack().filter(function() {
            return "hidden" === b.css(this, "visibility")
        }).length
    }
    function j(e, t) {
        var n, r, i, o = e.nodeName.toLowerCase();
        return "area" === o ? (r = (n = e.parentNode).name,
        !(!e.href || !r || "map" !== n.nodeName.toLowerCase()) && (!!(i = b("img[usemap=#" + r + "]")[0]) && E(i))) : (/input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o && e.href || t) && E(e)
    }
    A.prototype = (y = 0,
    T = "",
    m = "ontouchstart"in i || i.navigator.msMaxTouchPoints,
    k = function(e) {
        return b(e).closest(":data(plugin_" + _ + ")").data("plugin_" + _)
    }
    ,
    s = function(e) {
        e = b(e);
        var t = this.settings;
        e.attr("id") || e.attr("id", t.uuidPrefix + "-" + (new Date).getTime() + "-" + ++y)
    }
    ,
    x = function(e, t) {
        var n, r = b(e.target), i = this, o = this.settings, s = this.menu, a = r.closest("." + o.topNavItemClass), u = r.hasClass(o.panelClass) ? r : r.closest("." + o.panelClass);
        if (g.call(this, !0),
        t)
            if ((a = s.find("." + o.topNavItemClass + " ." + o.openClass + ":first").closest("." + o.topNavItemClass)).is(e.relatedTarget) || 0 < a.has(e.relatedTarget).length)
                0 === a.length && s.find("[aria-expanded=true]").attr("aria-expanded", "false").removeClass(o.openClass).closest("." + o.topNavItemClass).find("." + o.panelClass).removeClass(o.openClass).attr("aria-hidden", "true");
            else {
                if (("mouseout" === e.type || "focusout" === e.type) && 0 < a.has(d.activeElement).length)
                    return;
                a.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass),
                a.find("." + o.panelClass).removeClass(o.openClass).attr("aria-hidden", "true"),
                ("keydown" === e.type && e.keyCode === C.ESCAPE || "DOMAttrModified" === e.type) && (n = a.find(":tabbable:first"),
                M(function() {
                    s.find("[aria-expanded]." + i.settings.panelClass).off("DOMAttrModified.accessible-megamenu"),
                    n.focus(),
                    i.justFocused = !1
                }, 99))
            }
        else {
            D(i.focusTimeoutID);
            var l = s.find("[aria-expanded=true]").closest("." + o.topNavItemClass);
            if (l.is(a) || (l.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass),
            l.find("." + o.panelClass).removeClass(o.openClass).attr("aria-hidden", "true")),
            a.find("[aria-expanded]").attr("aria-expanded", "true").addClass(o.openClass),
            a.find("." + o.panelClass).addClass(o.openClass).attr("aria-hidden", "false"),
            a.length) {
                var c = b("html")[0].scrollTop
                  , f = a.offset().top;
                f < c && (b("html")[0].scrollTop = f)
            }
            "mouseover" === e.type && r.is(":tabbable") && 1 === a.length && 0 === u.length && 0 < s.has(d.activeElement).length && (r.focus(),
            i.justFocused = !1),
            g.call(i)
        }
    }
    ,
    S = function(e) {
        var t = b(e.target).closest(":tabbable")
          , n = t.closest("." + this.settings.topNavItemClass);
        t.closest("." + this.settings.panelClass),
        1 === n.length && 1 === n.find("." + this.settings.panelClass).length && t.attr("attr-placeholder") ? t.hasClass(this.settings.openClass) ? this.justFocused ? (e.preventDefault(),
        e.stopPropagation(),
        this.justFocused = !1) : (m || !m && !this.settings.openOnMouseover) && (e.preventDefault(),
        e.stopPropagation(),
        x.call(this, e, t.hasClass(this.settings.openClass))) : (e.preventDefault(),
        e.stopPropagation(),
        x.call(this, e),
        this.justFocused = !1) : 1 === n.length && "keydown" == e.type && t.attr("href") && !t.attr("attr-placeholder") ? i.location.href = t.attr("href") : 1 === n.length && "keydown" == e.type && t.attr("href") && !t.attr("attr-placeholder") && (i.location.href = t.attr("href"))
    }
    ,
    n = function() {
        this.justMoved = !0
    }
    ,
    r = function(e) {
        0 === b(e.target).closest(this.menu).length && (e.preventDefault(),
        e.stopPropagation(),
        x.call(this, e, !0))
    }
    ,
    o = function(e) {
        "aria-expanded" === e.originalEvent.attrName && "false" === e.originalEvent.newValue && b(e.target).hasClass(this.settings.openClass) && (e.preventDefault(),
        e.stopPropagation(),
        x.call(this, e, !0))
    }
    ,
    a = function(e) {
        D(this.focusTimeoutID);
        var t = b(e.target)
          , n = t.closest("." + this.settings.panelClass);
        t.addClass(this.settings.focusClass),
        this.justFocused = !this.mouseFocused || !this.settings.openOnMouseover && this.mouseFocused,
        this.mouseFocused = !1,
        this.justFocused && this.panels.not(n).filter("." + this.settings.openClass).length && x.call(this, e)
    }
    ,
    u = function(t) {
        this.justFocused = !1;
        var n = this
          , e = b(t.target)
          , r = e.closest("." + this.settings.topNavItemClass);
        e.removeClass(this.settings.focusClass),
        "object" == typeof i.cvox && "object" != typeof i.cvox.Api ? n.focusTimeoutID = M(function() {
            i.cvox.Api.getCurrentNode(function(e) {
                r.has(e).length ? D(n.focusTimeoutID) : n.focusTimeoutID = M(function(e, t, n) {
                    x.call(e, t, n)
                }, 275, n, t, !0)
            })
        }, 25) : n.focusTimeoutID = M(function() {
            n.mouseFocused && null === t.relatedTarget || x.call(n, t, !0)
        }, 300)
    }
    ,
    l = function(e) {
        var t, n, r, i, o, s, a = this.constructor === A ? this : k(this), u = a.settings, l = b(b(this).is("." + u.hoverClass + ":tabbable") ? this : e.target), c = a.menu, f = a.topnavitems, d = l.closest("." + u.topNavItemClass), h = c.find(":tabbable"), p = l.hasClass(u.panelClass) ? l : l.closest("." + u.panelClass), g = p.find("." + u.panelGroupClass), v = l.closest("." + u.panelGroupClass), y = e.keyCode || e.which, m = !1, _ = C.keyMap[e.keyCode] || "", w = 1 === d.length && 0 === p.length;
        if (!l.is("input:focus, select:focus, textarea:focus, button:focus")) {
            switch (l.is("." + u.hoverClass + ":tabbable") && b("html").off("keydown.accessible-megamenu"),
            y) {
            case C.ESCAPE:
                this.mouseFocused = !1,
                x.call(a, e, !0);
                break;
            case C.DOWN:
                e.preventDefault(),
                this.mouseFocused = !1,
                !(m = w ? (x.call(a, e),
                1 === d.find("." + u.panelClass + " :tabbable:first").focus().length) : 1 === h.filter(":gt(" + h.index(l) + "):first").focus().length) && O && (e.ctrlKey || e.metaKey) && (r = (h = b(":tabbable")).index(l),
                m = 1 === b(":tabbable:gt(" + b(":tabbable").index(l) + "):first").focus().length);
                break;
            case C.UP:
                e.preventDefault(),
                this.mouseFocused = !1,
                w && l.hasClass(u.openClass) ? (x.call(a, e, !0),
                (t = f.filter(":lt(" + f.index(d) + "):last")).children("." + u.panelClass).length && (t.find("[aria-expanded]").attr("aria-expanded", "true").addClass(u.openClass),
                m = 1 === t.children("." + u.panelClass).addClass(u.openClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : w || (m = 1 === h.filter(":lt(" + h.index(l) + "):last").focus().length),
                !m && O && (e.ctrlKey || e.metaKey) && (r = (h = b(":tabbable")).index(l),
                m = 1 === b(":tabbable:lt(" + b(":tabbable").index(l) + "):first").focus().length);
                break;
            case C.RIGHT:
                e.preventDefault(),
                this.mouseFocused = !1,
                w ? m = 1 === f.filter(":gt(" + f.index(d) + "):first").find(":tabbable:first").focus().length : (g.length && v.length && (m = 1 === g.filter(":gt(" + g.index(v) + "):first").find(":tabbable:first").focus().length),
                m || (m = 1 === d.find(":tabbable:first").focus().length));
                break;
            case C.LEFT:
                e.preventDefault(),
                this.mouseFocused = !1,
                w ? m = 1 === f.filter(":lt(" + f.index(d) + "):last").find(":tabbable:first").focus().length : (g.length && v.length && (m = 1 === g.filter(":lt(" + g.index(v) + "):last").find(":tabbable:first").focus().length),
                m || (m = 1 === d.find(":tabbable:first").focus().length));
                break;
            case C.TAB:
                this.mouseFocused = !1,
                r = h.index(l),
                e.shiftKey && w && l.hasClass(u.openClass) ? (x.call(a, e, !0),
                (t = f.filter(":lt(" + f.index(d) + "):last")).children("." + u.panelClass).length && (m = t.children().attr("aria-expanded", "true").addClass(u.openClass).filter("." + u.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : e.shiftKey && 0 < r ? m = 1 === h.filter(":lt(" + r + "):last").focus().length : !e.shiftKey && r < h.length - 1 ? m = 1 === h.filter(":gt(" + r + "):first").focus().length : O && (r = (h = b(":tabbable")).index(l),
                m = e.shiftKey ? 1 === b(":tabbable:lt(" + b(":tabbable").index(l) + "):last").focus().length : 1 === b(":tabbable:gt(" + b(":tabbable").index(l) + "):first").focus().length),
                m && e.preventDefault();
                break;
            case C.SPACE:
            case C.ENTER:
                if (!w)
                    return !0;
                e.preventDefault(),
                l.hasClass("open") ? (this.mouseFocused = !1,
                x.call(a, e, !0)) : S.call(a, e);
                break;
            default:
                if (D(this.keydownTimeoutID),
                0 === (T += _ !== T ? _ : "").length)
                    return;
                for (this.keydownTimeoutID = M(function() {
                    T = ""
                }, 1e3),
                h = w && !l.hasClass(u.openClass) ? h.filter(":not(." + u.panelClass + " :tabbable)") : d.find(":tabbable"),
                e.shiftKey && (h = b(h.get().reverse())),
                r = 0; r < h.length; r++)
                    if ((i = h.eq(r)).is(l)) {
                        n = 1 === T.length ? r + 1 : r;
                        break
                    }
                for (s = new RegExp("^" + T.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),"i"),
                r = n; r < h.length; r++)
                    if (i = h.eq(r),
                    o = b.trim(i.text()),
                    s.test(o)) {
                        m = !0,
                        i.focus();
                        break
                    }
                if (!m)
                    for (r = 0; r < n; r++)
                        if (i = h.eq(r),
                        o = b.trim(i.text()),
                        s.test(o)) {
                            i.focus();
                            break
                        }
            }
            a.justFocused = !1
        }
    }
    ,
    c = function(e) {
        (b(e.target).closest(this.settings.panelClass) || b(e.target).closest(":focusable").length) && (this.mouseFocused = !0,
        b(e.target).closest(this.settings.menuClass) && b("html").on("keydown.accessible-megamenu", b.proxy(l, e.target))),
        D(this.mouseTimeoutID),
        this.mouseTimeoutID = M(function() {
            D(this.focusTimeoutID)
        }, 1)
    }
    ,
    f = function(e) {
        D(this.mouseTimeoutID);
        var t = this;
        t.settings.openOnMouseover && (this.mouseTimeoutID = M(function() {
            b(e.target).addClass(t.settings.hoverClass),
            x.call(t, e),
            b(e.target).closest(t.settings.menuClass) && b("html").on("keydown.accessible-megamenu", b.proxy(l, e.target))
        }, this.settings.openDelay))
    }
    ,
    h = function(e) {
        D(this.mouseTimeoutID);
        var t = this;
        t.settings.openOnMouseover && (b(e.target).removeClass(t.settings.hoverClass),
        t.mouseTimeoutID = M(function() {
            x.call(t, e, !0)
        }, this.settings.closeDelay),
        b(e.target).is(":tabbable") && b("html").off("keydown.accessible-megamenu"))
    }
    ,
    p = function() {
        var e = "true" === this.toggleButton.attr("aria-expanded");
        this.toggleButton.attr({
            "aria-expanded": !e
        })
    }
    ,
    g = function(e) {
        var t = this.menu;
        e ? (b("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"),
        t.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")) : (b("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu", b.proxy(r, this)),
        t.find("[aria-expanded=true]." + this.settings.panelClass).on("DOMAttrModified.accessible-megamenu", b.proxy(o, this)))
    }
    ,
    v = function() {
        var e = this.menu
          , t = this.toggleButton;
        e.on("focusin.accessible-megamenu", ":focusable, ." + this.settings.panelClass, b.proxy(a, this)).on("focusout.accessible-megamenu", ":focusable, ." + this.settings.panelClass, b.proxy(u, this)).on("keydown.accessible-megamenu", b.proxy(l, this)).on("mouseover.accessible-megamenu", b.proxy(f, this)).on("mouseout.accessible-megamenu", b.proxy(h, this)).on("mousedown.accessible-megamenu", b.proxy(c, this)).on("click.accessible-megamenu", b.proxy(S, this)),
        t.on("click.accessible-megamenu", b.proxy(p, this)),
        m && e.on("touchmove.accessible-megamenu", b.proxy(n, this)),
        b(d.activeElement).closest(e).length && b(d.activeElement).trigger("focusin.accessible-megamenu")
    }
    ,
    e = function() {
        var e = this.menu
          , t = this.toggleButton;
        e.off(".accessible-megamenu"),
        e.find("[aria-expanded=true]." + this.settings.panelClass).length && g.call(this, !0),
        t.off(".accessible-megamenu")
    }
    ,
    {
        constructor: A,
        init: function() {
            var e = this.settings
              , t = b(this.element)
              , n = t.children("ol,ul").first()
              , r = n.children()
              , i = t.children("button").first();
            this.start(e, t, n, r, i)
        },
        start: function(i, e, t, n, r) {
            var o = this;
            this.settings = i,
            this.menu = t,
            this.topnavitems = n,
            this.toggleButton = r,
            e.attr("role", "navigation"),
            s.call(o, t),
            t.addClass(i.menuClass),
            t.addClass(["js", i.menuClass].join("-")),
            n.each(function(e, t) {
                var n, r;
                (t = b(t)).addClass(i.topNavItemClass),
                n = t.find(":tabbable:first"),
                r = t.children(":not(:tabbable):last"),
                s.call(o, n),
                r.length && (s.call(o, r),
                n.attr({
                    role: "button",
                    "aria-controls": r.attr("id"),
                    "aria-expanded": !1,
                    tabindex: 0
                }),
                r.attr({
                    role: "region",
                    "aria-hidden": !0
                }).addClass(i.panelClass).not("[aria-labelledby]").attr("aria-labelledby", n.attr("id")))
            }),
            this.panels = t.find("." + i.panelClass),
            t.find("hr").attr("role", "separator"),
            r.addClass(i.toggleButtonClass),
            r.attr({
                "aria-expanded": !1,
                "aria-controls": t.attr("id")
            }),
            v.call(this)
        },
        destroy: function() {
            this.menu.removeClass(["js", this.settings.menuClass].join("-")),
            e.call(this, !0)
        },
        getDefaults: function() {
            return this._defaults
        },
        getOption: function(e) {
            return this.settings[e]
        },
        getAllOptions: function() {
            return this.settings
        },
        setOption: function(e, t, n) {
            this.settings[e] = t,
            n && this.init()
        }
    }),
    b.fn[_] = function(t) {
        return this.each(function() {
            var e = b.data(this, "plugin_" + _);
            e ? "function" == typeof e[t] && e[t].apply(e, Array.prototype.slice.call(arguments, 1)) : b.data(this, "plugin_" + _, new b.fn[_].AccessibleMegaMenu(this,t))
        })
    }
    ,
    b.fn[_].AccessibleMegaMenu = A,
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function(t) {
            return function(e) {
                return !!b.data(e, t)
            }
        }) : function(e, t, n) {
            return !!b.data(e, n[3])
        }
        ,
        focusable: function(e) {
            return j(e, !isNaN(b.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var t = b.attr(e, "tabindex")
              , n = isNaN(t);
            return (n || 0 <= t) && j(e, !n)
        }
    })
}(jQuery, window, document);
