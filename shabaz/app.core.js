!function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 1)
}([function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2)
      , o = (n.n(i),
    n(3))
      , a = (n.n(o),
    n(7))
      , s = (n.n(a),
    n(8))
      , r = (n.n(s),
    n(9))
      , l = (n.n(r),
    n(10))
      , c = (n.n(l),
    n(11))
      , d = (n.n(c),
    n(12))
      , u = (n.n(d),
    n(13))
      , p = (n.n(u),
    n(14))
      , f = (n.n(p),
    n(15))
      , h = (n.n(f),
    n(16))
      , g = (n.n(h),
    n(17))
      , m = (n.n(g),
    n(18))
      , v = (n.n(m),
    n(19))
      , b = (n.n(v),
    n(20))
      , y = (n.n(b),
    n(21))
      , $ = (n.n(y),
    n(22))
      , w = (n.n($),
    n(23))
      , C = (n.n(w),
    n(24))
      , S = (n.n(C),
    n(25))
      , x = (n.n(S),
    n(26))
      , k = (n.n(x),
    n(27))
      , T = (n.n(k),
    n(28))
      , I = (n.n(T),
    n(29))
      , E = (n.n(I),
    n(30))
      , D = (n.n(E),
    n(31))
      , P = (n.n(D),
    n(32))
      , A = (n.n(P),
    n(33))
      , M = (n.n(A),
    n(34))
      , O = (n.n(M),
    n(35));
    n.n(O)
}
, function(t, e) {
    /*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
    if ("undefined" == typeof jQuery)
        throw new Error("Bootstrap's JavaScript requires jQuery");
    !function(t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0])
            throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(),
    function(t) {
        "use strict";
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1
              , i = this;
            return t(this).one("bsTransitionEnd", function() {
                n = !0
            }),
            setTimeout(function() {
                n || t(i).trigger(t.support.transition.end)
            }, e),
            this
        }
        ,
        t(function() {
            t.support.transition = function() {
                var t = document.createElement("bootstrap")
                  , e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in e)
                    if (void 0 !== t.style[n])
                        return {
                            end: e[n]
                        };
                return !1
            }(),
            t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]'
          , n = function(n) {
            t(n).on("click", e, this.close)
        };
        n.VERSION = "3.4.1",
        n.TRANSITION_DURATION = 150,
        n.prototype.close = function(e) {
            function i() {
                s.detach().trigger("closed.bs.alert").remove()
            }
            var o = t(this)
              , a = o.attr("data-target");
            a || (a = (a = o.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")),
            a = "#" === a ? [] : a;
            var s = t(document).find(a);
            e && e.preventDefault(),
            s.length || (s = o.closest(".alert")),
            s.trigger(e = t.Event("close.bs.alert")),
            e.isDefaultPrevented() || (s.removeClass("in"),
            t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        }
        ;
        var i = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)),
                "string" == typeof e && o[e].call(i)
            })
        }
        ,
        t.fn.alert.Constructor = n,
        t.fn.alert.noConflict = function() {
            return t.fn.alert = i,
            this
        }
        ,
        t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.button")
                  , a = "object" == typeof e && e;
                o || i.data("bs.button", o = new n(this,a)),
                "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var n = function(e, i) {
            this.$element = t(e),
            this.options = t.extend({}, n.DEFAULTS, i),
            this.isLoading = !1
        };
        n.VERSION = "3.4.1",
        n.DEFAULTS = {
            loadingText: "loading..."
        },
        n.prototype.setState = function(e) {
            var n = "disabled"
              , i = this.$element
              , o = i.is("input") ? "val" : "html"
              , a = i.data();
            e += "Text",
            null == a.resetText && i.data("resetText", i[o]()),
            setTimeout(t.proxy(function() {
                i[o](null == a[e] ? this.options[e] : a[e]),
                "loadingText" == e ? (this.isLoading = !0,
                i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
                i.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }
        ,
        n.prototype.toggle = function() {
            var t = !0
              , e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
                e.find(".active").removeClass("active"),
                this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
                this.$element.toggleClass("active")),
                n.prop("checked", this.$element.hasClass("active")),
                t && n.trigger("change")
            } else
                this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                this.$element.toggleClass("active")
        }
        ;
        var i = t.fn.button;
        t.fn.button = e,
        t.fn.button.Constructor = n,
        t.fn.button.noConflict = function() {
            return t.fn.button = i,
            this
        }
        ,
        t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = t(n.target).closest(".btn");
            e.call(i, "toggle"),
            t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
            i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.carousel")
                  , a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
                  , s = "string" == typeof e ? e : a.slide;
                o || i.data("bs.carousel", o = new n(this,a)),
                "number" == typeof e ? o.to(e) : s ? o[s]() : a.interval && o.pause().cycle()
            })
        }
        var n = function(e, n) {
            this.$element = t(e),
            this.$indicators = this.$element.find(".carousel-indicators"),
            this.options = n,
            this.paused = null,
            this.sliding = null,
            this.interval = null,
            this.$active = null,
            this.$items = null,
            this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
            "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.4.1",
        n.TRANSITION_DURATION = 600,
        n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        },
        n.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
                }
                t.preventDefault()
            }
        }
        ,
        n.prototype.cycle = function(e) {
            return e || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
            this
        }
        ,
        n.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"),
            this.$items.index(t || this.$active)
        }
        ,
        n.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
                return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i)
        }
        ,
        n.prototype.to = function(t) {
            var e = this
              , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0))
                return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                    e.to(t)
                }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
        }
        ,
        n.prototype.pause = function(e) {
            return e || (this.paused = !0),
            this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
            this.cycle(!0)),
            this.interval = clearInterval(this.interval),
            this
        }
        ,
        n.prototype.next = function() {
            if (!this.sliding)
                return this.slide("next")
        }
        ,
        n.prototype.prev = function() {
            if (!this.sliding)
                return this.slide("prev")
        }
        ,
        n.prototype.slide = function(e, i) {
            var o = this.$element.find(".item.active")
              , a = i || this.getItemForDirection(e, o)
              , s = this.interval
              , r = "next" == e ? "left" : "right"
              , l = this;
            if (a.hasClass("active"))
                return this.sliding = !1;
            var c = a[0]
              , d = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: r
            });
            if (this.$element.trigger(d),
            !d.isDefaultPrevented()) {
                if (this.sliding = !0,
                s && this.pause(),
                this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = t(this.$indicators.children()[this.getItemIndex(a)]);
                    u && u.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: r
                });
                return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e),
                "object" == typeof a && a.length && a[0].offsetWidth,
                o.addClass(r),
                a.addClass(r),
                o.one("bsTransitionEnd", function() {
                    a.removeClass([e, r].join(" ")).addClass("active"),
                    o.removeClass(["active", r].join(" ")),
                    l.sliding = !1,
                    setTimeout(function() {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
                a.addClass("active"),
                this.sliding = !1,
                this.$element.trigger(p)),
                s && this.cycle(),
                this
            }
        }
        ;
        var i = t.fn.carousel;
        t.fn.carousel = e,
        t.fn.carousel.Constructor = n,
        t.fn.carousel.noConflict = function() {
            return t.fn.carousel = i,
            this
        }
        ;
        var o = function(n) {
            var i = t(this)
              , o = i.attr("href");
            o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
            var a = i.attr("data-target") || o
              , s = t(document).find(a);
            if (s.hasClass("carousel")) {
                var r = t.extend({}, s.data(), i.data())
                  , l = i.attr("data-slide-to");
                l && (r.interval = !1),
                e.call(s, r),
                l && s.data("bs.carousel").to(l),
                n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
        t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(document).find(i)
        }
        function n(e) {
            return this.each(function() {
                var n = t(this)
                  , o = n.data("bs.collapse")
                  , a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                o || n.data("bs.collapse", o = new i(this,a)),
                "string" == typeof e && o[e]()
            })
        }
        var i = function(e, n) {
            this.$element = t(e),
            this.options = t.extend({}, i.DEFAULTS, n),
            this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
            this.transitioning = null,
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        };
        i.VERSION = "3.4.1",
        i.TRANSITION_DURATION = 350,
        i.DEFAULTS = {
            toggle: !0
        },
        i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }
        ,
        i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                    var a = t.Event("show.bs.collapse");
                    if (this.$element.trigger(a),
                    !a.isDefaultPrevented()) {
                        o && o.length && (n.call(o, "hide"),
                        e || o.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                        this.transitioning = 1;
                        var r = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                            this.transitioning = 0,
                            this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition)
                            return r.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }
        ,
        i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight,
                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                    this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0,
                        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition)
                        return o.call(this);
                    this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
                }
            }
        }
        ,
        i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
        ,
        i.prototype.getParent = function() {
            return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }
        ,
        i.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n),
            e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        }
        ;
        var o = t.fn.collapse;
        t.fn.collapse = n,
        t.fn.collapse.Constructor = i,
        t.fn.collapse.noConflict = function() {
            return t.fn.collapse = o,
            this
        }
        ,
        t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var o = t(this);
            o.attr("data-target") || i.preventDefault();
            var a = e(o)
              , s = a.data("bs.collapse") ? "toggle" : o.data();
            n.call(a, s)
        })
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = "#" !== n ? t(document).find(n) : null;
            return i && i.length ? i : e.parent()
        }
        function n(n) {
            n && 3 === n.which || (t(".dropdown-backdrop").remove(),
            t(i).each(function() {
                var i = t(this)
                  , o = e(i)
                  , a = {
                    relatedTarget: this
                };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", a)),
                n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
                o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
            }))
        }
        var i = '[data-toggle="dropdown"]'
          , o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        o.VERSION = "3.4.1",
        o.prototype.toggle = function(i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var a = e(o)
                  , s = a.hasClass("open");
                if (n(),
                !s) {
                    "ontouchstart"in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var r = {
                        relatedTarget: this
                    };
                    if (a.trigger(i = t.Event("show.bs.dropdown", r)),
                    i.isDefaultPrevented())
                        return;
                    o.trigger("focus").attr("aria-expanded", "true"),
                    a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                }
                return !1
            }
        }
        ,
        o.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var o = t(this);
                if (n.preventDefault(),
                n.stopPropagation(),
                !o.is(".disabled, :disabled")) {
                    var a = e(o)
                      , s = a.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which)
                        return 27 == n.which && a.find(i).trigger("focus"),
                        o.trigger("click");
                    var r = a.find(".dropdown-menu li:not(.disabled):visible a");
                    if (r.length) {
                        var l = r.index(n.target);
                        38 == n.which && 0 < l && l--,
                        40 == n.which && l < r.length - 1 && l++,
                        ~l || (l = 0),
                        r.eq(l).trigger("focus")
                    }
                }
            }
        }
        ;
        var a = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var n = t(this)
                  , i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new o(this)),
                "string" == typeof e && i[e].call(n)
            })
        }
        ,
        t.fn.dropdown.Constructor = o,
        t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a,
            this
        }
        ,
        t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
    }(jQuery),
    function(t) {
        "use strict";
        function e(e, i) {
            return this.each(function() {
                var o = t(this)
                  , a = o.data("bs.modal")
                  , s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                a || o.data("bs.modal", a = new n(this,s)),
                "string" == typeof e ? a[e](i) : s.show && a.show(i)
            })
        }
        var n = function(e, n) {
            this.options = n,
            this.$body = t(document.body),
            this.$element = t(e),
            this.$dialog = this.$element.find(".modal-dialog"),
            this.$backdrop = null,
            this.isShown = null,
            this.originalBodyPad = null,
            this.scrollbarWidth = 0,
            this.ignoreBackdropClick = !1,
            this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.4.1",
        n.TRANSITION_DURATION = 300,
        n.BACKDROP_TRANSITION_DURATION = 150,
        n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        },
        n.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }
        ,
        n.prototype.show = function(e) {
            var i = this
              , o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
            this.$element.trigger(o),
            this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }),
            this.backdrop(function() {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                o && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
                var a = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(a)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
            }))
        }
        ,
        n.prototype.hide = function(e) {
            e && e.preventDefault(),
            e = t.Event("hide.bs.modal"),
            this.$element.trigger(e),
            this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }
        ,
        n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }
        ,
        n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }
        ,
        n.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }
        ,
        n.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(),
            this.backdrop(function() {
                t.$body.removeClass("modal-open"),
                t.resetAdjustments(),
                t.resetScrollbar(),
                t.$element.trigger("hidden.bs.modal")
            })
        }
        ,
        n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(),
            this.$backdrop = null
        }
        ,
        n.prototype.backdrop = function(e) {
            var i = this
              , o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var a = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
                this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)),
                a && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !e)
                    return;
                a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    i.removeBackdrop(),
                    e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else
                e && e()
        }
        ,
        n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }
        ,
        n.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }
        ,
        n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }
        ,
        n.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t,
            this.scrollbarWidth = this.measureScrollbar()
        }
        ,
        n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            var n = this.scrollbarWidth;
            this.bodyIsOverflowing && (this.$body.css("padding-right", e + n),
            t(this.fixedContent).each(function(e, i) {
                var o = i.style.paddingRight
                  , a = t(i).css("padding-right");
                t(i).data("padding-right", o).css("padding-right", parseFloat(a) + n + "px")
            }))
        }
        ,
        n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad),
            t(this.fixedContent).each(function(e, n) {
                var i = t(n).data("padding-right");
                t(n).removeData("padding-right"),
                n.style.paddingRight = i || ""
            })
        }
        ,
        n.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t),
            e
        }
        ;
        var i = t.fn.modal;
        t.fn.modal = e,
        t.fn.modal.Constructor = n,
        t.fn.modal.noConflict = function() {
            return t.fn.modal = i,
            this
        }
        ,
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this)
              , o = i.attr("href")
              , a = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")
              , s = t(document).find(a)
              , r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
            i.is("a") && n.preventDefault(),
            s.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }),
            e.call(s, r, this)
        })
    }(jQuery),
    function(t) {
        "use strict";
        function e(e, n) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== t.inArray(i, n))
                return -1 === t.inArray(i, o) || Boolean(e.nodeValue.match(s) || e.nodeValue.match(r));
            for (var a = t(n).filter(function(t, e) {
                return e instanceof RegExp
            }), l = 0, c = a.length; l < c; l++)
                if (i.match(a[l]))
                    return !0;
            return !1
        }
        function n(n, i, o) {
            if (0 === n.length)
                return n;
            if (o && "function" == typeof o)
                return o(n);
            if (!document.implementation || !document.implementation.createHTMLDocument)
                return n;
            var a = document.implementation.createHTMLDocument("sanitization");
            a.body.innerHTML = n;
            for (var s = t.map(i, function(t, e) {
                return e
            }), r = t(a.body).find("*"), l = 0, c = r.length; l < c; l++) {
                var d = r[l]
                  , u = d.nodeName.toLowerCase();
                if (-1 !== t.inArray(u, s))
                    for (var p = t.map(d.attributes, function(t) {
                        return t
                    }), f = [].concat(i["*"] || [], i[u] || []), h = 0, g = p.length; h < g; h++)
                        e(p[h], f) || d.removeAttribute(p[h].nodeName);
                else
                    d.parentNode.removeChild(d)
            }
            return a.body.innerHTML
        }
        var i = ["sanitize", "whiteList", "sanitizeFn"]
          , o = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
          , a = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
          , s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi
          , r = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i
          , l = function(t, e) {
            this.type = null,
            this.options = null,
            this.enabled = null,
            this.timeout = null,
            this.hoverState = null,
            this.$element = null,
            this.inState = null,
            this.init("tooltip", t, e)
        };
        l.VERSION = "3.4.1",
        l.TRANSITION_DURATION = 150,
        l.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            },
            sanitize: !0,
            sanitizeFn: null,
            whiteList: a
        },
        l.prototype.init = function(e, n, i) {
            if (this.enabled = !0,
            this.type = e,
            this.$element = t(n),
            this.options = this.getOptions(i),
            this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
            this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            },
            this.$element[0]instanceof document.constructor && !this.options.selector)
                throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), a = o.length; a--; ) {
                var s = o[a];
                if ("click" == s)
                    this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var r = "hover" == s ? "mouseenter" : "focusin"
                      , l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                    this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }
        ,
        l.prototype.getDefaults = function() {
            return l.DEFAULTS
        }
        ,
        l.prototype.getOptions = function(e) {
            var o = this.$element.data();
            for (var a in o)
                o.hasOwnProperty(a) && -1 !== t.inArray(a, i) && delete o[a];
            return (e = t.extend({}, this.getDefaults(), o, e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        l.prototype.getDelegateOptions = function() {
            var e = {}
              , n = this.getDefaults();
            return this._options && t.each(this._options, function(t, i) {
                n[t] != i && (e[t] = i)
            }),
            e
        }
        ,
        l.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
            t(e.currentTarget).data("bs." + this.type, n)),
            e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
            n.tip().hasClass("in") || "in" == n.hoverState)
                n.hoverState = "in";
            else {
                if (clearTimeout(n.timeout),
                n.hoverState = "in",
                !n.options.delay || !n.options.delay.show)
                    return n.show();
                n.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)
            }
        }
        ,
        l.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t])
                    return !0;
            return !1
        }
        ,
        l.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
            t(e.currentTarget).data("bs." + this.type, n)),
            e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
            !n.isInStateTrue()) {
                if (clearTimeout(n.timeout),
                n.hoverState = "out",
                !n.options.delay || !n.options.delay.hide)
                    return n.hide();
                n.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            }
        }
        ,
        l.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n)
                    return;
                var i = this
                  , o = this.tip()
                  , a = this.getUID(this.type);
                this.setContent(),
                o.attr("id", a),
                this.$element.attr("aria-describedby", a),
                this.options.animation && o.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
                  , r = /\s?auto?\s?/i
                  , c = r.test(s);
                c && (s = s.replace(r, "") || "top"),
                o.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this),
                this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element),
                this.$element.trigger("inserted.bs." + this.type);
                var d = this.getPosition()
                  , u = o[0].offsetWidth
                  , p = o[0].offsetHeight;
                if (c) {
                    var f = s
                      , h = this.getPosition(this.$viewport);
                    s = "bottom" == s && d.bottom + p > h.bottom ? "top" : "top" == s && d.top - p < h.top ? "bottom" : "right" == s && d.right + u > h.width ? "left" : "left" == s && d.left - u < h.left ? "right" : s,
                    o.removeClass(f).addClass(s)
                }
                var g = this.getCalculatedOffset(s, d, u, p);
                this.applyPlacement(g, s);
                var m = function() {
                    var t = i.hoverState;
                    i.$element.trigger("shown.bs." + i.type),
                    i.hoverState = null,
                    "out" == t && i.leave(i)
                };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(l.TRANSITION_DURATION) : m()
            }
        }
        ,
        l.prototype.applyPlacement = function(e, n) {
            var i = this.tip()
              , o = i[0].offsetWidth
              , a = i[0].offsetHeight
              , s = parseInt(i.css("margin-top"), 10)
              , r = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0),
            isNaN(r) && (r = 0),
            e.top += s,
            e.left += r,
            t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0),
            i.addClass("in");
            var l = i[0].offsetWidth
              , c = i[0].offsetHeight;
            "top" == n && c != a && (e.top = e.top + a - c);
            var d = this.getViewportAdjustedDelta(n, e, l, c);
            d.left ? e.left += d.left : e.top += d.top;
            var u = /top|bottom/.test(n)
              , p = u ? 2 * d.left - o + l : 2 * d.top - a + c
              , f = u ? "offsetWidth" : "offsetHeight";
            i.offset(e),
            this.replaceArrow(p, i[0][f], u)
        }
        ,
        l.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }
        ,
        l.prototype.setContent = function() {
            var t = this.tip()
              , e = this.getTitle();
            this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)),
            t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
            t.removeClass("fade in top bottom left right")
        }
        ,
        l.prototype.hide = function(e) {
            function n() {
                "in" != i.hoverState && o.detach(),
                i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
                e && e()
            }
            var i = this
              , o = t(this.$tip)
              , a = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(a),
            !a.isDefaultPrevented())
                return o.removeClass("in"),
                t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(l.TRANSITION_DURATION) : n(),
                this.hoverState = null,
                this
        }
        ,
        l.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }
        ,
        l.prototype.hasContent = function() {
            return this.getTitle()
        }
        ,
        l.prototype.getPosition = function(e) {
            var n = (e = e || this.$element)[0]
              , i = "BODY" == n.tagName
              , o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var a = window.SVGElement && n instanceof window.SVGElement
              , s = i ? {
                top: 0,
                left: 0
            } : a ? null : e.offset()
              , r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            }
              , l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
            return t.extend({}, o, r, l, s)
        }
        ,
        l.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }
        ,
        l.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport)
                return o;
            var a = this.options.viewport && this.options.viewport.padding || 0
              , s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var r = e.top - a - s.scroll
                  , l = e.top + a - s.scroll + i;
                r < s.top ? o.top = s.top - r : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = e.left - a
                  , d = e.left + a + n;
                c < s.left ? o.left = s.left - c : d > s.right && (o.left = s.left + s.width - d)
            }
            return o
        }
        ,
        l.prototype.getTitle = function() {
            var t = this.$element
              , e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }
        ,
        l.prototype.getUID = function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        }
        ,
        l.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template),
            1 != this.$tip.length))
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }
        ,
        l.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }
        ,
        l.prototype.enable = function() {
            this.enabled = !0
        }
        ,
        l.prototype.disable = function() {
            this.enabled = !1
        }
        ,
        l.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }
        ,
        l.prototype.toggle = function(e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
            t(e.currentTarget).data("bs." + this.type, n))),
            e ? (n.inState.click = !n.inState.click,
            n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }
        ,
        l.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout),
            this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type),
                t.$tip && t.$tip.detach(),
                t.$tip = null,
                t.$arrow = null,
                t.$viewport = null,
                t.$element = null
            })
        }
        ,
        l.prototype.sanitizeHtml = function(t) {
            return n(t, this.options.whiteList, this.options.sanitizeFn)
        }
        ;
        var c = t.fn.tooltip;
        t.fn.tooltip = function(e) {
            return this.each(function() {
                var n = t(this)
                  , i = n.data("bs.tooltip")
                  , o = "object" == typeof e && e;
                !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new l(this,o)),
                "string" == typeof e && i[e]())
            })
        }
        ,
        t.fn.tooltip.Constructor = l,
        t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = c,
            this
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.4.1",
        e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }),
        ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() {
            return e.DEFAULTS
        }
        ,
        e.prototype.setContent = function() {
            var t = this.tip()
              , e = this.getTitle()
              , n = this.getContent();
            if (this.options.html) {
                var i = typeof n;
                this.options.sanitize && (e = this.sanitizeHtml(e),
                "string" === i && (n = this.sanitizeHtml(n))),
                t.find(".popover-title").html(e),
                t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
            } else
                t.find(".popover-title").text(e),
                t.find(".popover-content").children().detach().end().text(n);
            t.removeClass("fade top bottom left right in"),
            t.find(".popover-title").html() || t.find(".popover-title").hide()
        }
        ,
        e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }
        ,
        e.prototype.getContent = function() {
            var t = this.$element
              , e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }
        ,
        e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }
        ;
        var n = t.fn.popover;
        t.fn.popover = function(n) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.popover")
                  , a = "object" == typeof n && n;
                !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this,a)),
                "string" == typeof n && o[n]())
            })
        }
        ,
        t.fn.popover.Constructor = e,
        t.fn.popover.noConflict = function() {
            return t.fn.popover = n,
            this
        }
    }(jQuery),
    function(t) {
        "use strict";
        function e(n, i) {
            this.$body = t(document.body),
            this.$scrollElement = t(t(n).is(document.body) ? window : n),
            this.options = t.extend({}, e.DEFAULTS, i),
            this.selector = (this.options.target || "") + " .nav li > a",
            this.offsets = [],
            this.targets = [],
            this.activeTarget = null,
            this.scrollHeight = 0,
            this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
            this.refresh(),
            this.process()
        }
        function n(n) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.scrollspy")
                  , a = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new e(this,a)),
                "string" == typeof n && o[n]()
            })
        }
        e.VERSION = "3.4.1",
        e.DEFAULTS = {
            offset: 10
        },
        e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e.prototype.refresh = function() {
            var e = this
              , n = "offset"
              , i = 0;
            this.offsets = [],
            this.targets = [],
            this.scrollHeight = this.getScrollHeight(),
            t.isWindow(this.$scrollElement[0]) || (n = "position",
            i = this.$scrollElement.scrollTop()),
            this.$body.find(this.selector).map(function() {
                var e = t(this)
                  , o = e.data("target") || e.attr("href")
                  , a = /^#./.test(o) && t(o);
                return a && a.length && a.is(":visible") && [[a[n]().top + i, o]] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]),
                e.targets.push(this[1])
            })
        }
        ,
        e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, a = this.targets, s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(),
            i <= e)
                return s != (t = a[a.length - 1]) && this.activate(t);
            if (s && e < o[0])
                return this.activeTarget = null,
                this.clear();
            for (t = o.length; t--; )
                s != a[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(a[t])
        }
        ,
        e.prototype.activate = function(e) {
            this.activeTarget = e,
            this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
              , i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
            i.trigger("activate.bs.scrollspy")
        }
        ,
        e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        }
        ;
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n,
        t.fn.scrollspy.Constructor = e,
        t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = i,
            this
        }
        ,
        t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)),
                "string" == typeof e && o[e]()
            })
        }
        var n = function(e) {
            this.element = t(e)
        };
        n.VERSION = "3.4.1",
        n.TRANSITION_DURATION = 150,
        n.prototype.show = function() {
            var e = this.element
              , n = e.closest("ul:not(.dropdown-menu)")
              , i = e.data("target");
            if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
            !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a")
                  , a = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                })
                  , s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
                if (o.trigger(a),
                e.trigger(s),
                !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    var r = t(document).find(i);
                    this.activate(e.closest("li"), n),
                    this.activate(r, r.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }),
                        e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }
        ,
        n.prototype.activate = function(e, i, o) {
            function a() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                r ? (e[0].offsetWidth,
                e.addClass("in")) : e.removeClass("fade"),
                e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                o && o()
            }
            var s = i.find("> .active")
              , r = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(),
            s.removeClass("in")
        }
        ;
        var i = t.fn.tab;
        t.fn.tab = e,
        t.fn.tab.Constructor = n,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = i,
            this
        }
        ;
        var o = function(n) {
            n.preventDefault(),
            e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery),
    function(t) {
        "use strict";
        function e(e) {
            return this.each(function() {
                var i = t(this)
                  , o = i.data("bs.affix")
                  , a = "object" == typeof e && e;
                o || i.data("bs.affix", o = new n(this,a)),
                "string" == typeof e && o[e]()
            })
        }
        var n = function(e, i) {
            this.options = t.extend({}, n.DEFAULTS, i);
            var o = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
            this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
            this.$element = t(e),
            this.affixed = null,
            this.unpin = null,
            this.pinnedOffset = null,
            this.checkPosition()
        };
        n.VERSION = "3.4.1",
        n.RESET = "affix affix-top affix-bottom",
        n.DEFAULTS = {
            offset: 0,
            target: window
        },
        n.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop()
              , a = this.$element.offset()
              , s = this.$target.height();
            if (null != n && "top" == this.affixed)
                return o < n && "top";
            if ("bottom" == this.affixed)
                return null != n ? !(o + this.unpin <= a.top) && "bottom" : !(o + s <= t - i) && "bottom";
            var r = null == this.affixed
              , l = r ? o : a.top;
            return null != n && o <= n ? "top" : null != i && t - i <= l + (r ? s : e) && "bottom"
        }
        ,
        n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset)
                return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop()
              , e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }
        ,
        n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }
        ,
        n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height()
                  , i = this.options.offset
                  , o = i.top
                  , a = i.bottom
                  , s = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof i && (a = o = i),
                "function" == typeof o && (o = i.top(this.$element)),
                "function" == typeof a && (a = i.bottom(this.$element));
                var r = this.getState(s, e, o, a);
                if (this.affixed != r) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (r ? "-" + r : "")
                      , c = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(c),
                    c.isDefaultPrevented())
                        return;
                    this.affixed = r,
                    this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                    this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == r && this.$element.offset({
                    top: s - e - a
                })
            }
        }
        ;
        var i = t.fn.affix;
        t.fn.affix = e,
        t.fn.affix.Constructor = n,
        t.fn.affix.noConflict = function() {
            return t.fn.affix = i,
            this
        }
        ,
        t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var n = t(this)
                  , i = n.data();
                i.offset = i.offset || {},
                null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
                null != i.offsetTop && (i.offset.top = i.offsetTop),
                e.call(n, i)
            })
        })
    }(jQuery)
}
, function(t, e, n) {
    (function(t, e) {
        !function(t, e) {
            e()
        }(0, function() {
            "use strict";
            function n(t) {
                var e = this.constructor;
                return this.then(function(n) {
                    return e.resolve(t()).then(function() {
                        return n
                    })
                }, function(n) {
                    return e.resolve(t()).then(function() {
                        return e.reject(n)
                    })
                })
            }
            function i() {}
            function o(t) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                c(t, this)
            }
            function a(t, e) {
                for (; 3 === t._state; )
                    t = t._value;
                0 !== t._state ? (t._handled = !0,
                o._immediateFn(function() {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null !== n) {
                        var i;
                        try {
                            i = n(t._value)
                        } catch (t) {
                            return void r(e.promise, t)
                        }
                        s(e.promise, i)
                    } else
                        (1 === t._state ? s : r)(e.promise, t._value)
                })) : t._deferreds.push(e)
            }
            function s(t, e) {
                try {
                    if (e === t)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof o)
                            return t._state = 3,
                            t._value = e,
                            void l(t);
                        if ("function" == typeof n)
                            return void c(function(t, e) {
                                return function() {
                                    t.apply(e, arguments)
                                }
                            }(n, e), t)
                    }
                    t._state = 1,
                    t._value = e,
                    l(t)
                } catch (e) {
                    r(t, e)
                }
            }
            function r(t, e) {
                t._state = 2,
                t._value = e,
                l(t)
            }
            function l(t) {
                2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
                    t._handled || o._unhandledRejectionFn(t._value)
                });
                for (var e = 0, n = t._deferreds.length; n > e; e++)
                    a(t, t._deferreds[e]);
                t._deferreds = null
            }
            function c(t, e) {
                var n = !1;
                try {
                    t(function(t) {
                        n || (n = !0,
                        s(e, t))
                    }, function(t) {
                        n || (n = !0,
                        r(e, t))
                    })
                } catch (t) {
                    if (n)
                        return;
                    n = !0,
                    r(e, t)
                }
            }
            var d = setTimeout;
            o.prototype.catch = function(t) {
                return this.then(null, t)
            }
            ,
            o.prototype.then = function(t, e) {
                var n = new this.constructor(i);
                return a(this, new function(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = n
                }
                (t,e,n)),
                n
            }
            ,
            o.prototype.finally = n,
            o.all = function(t) {
                return new o(function(e, n) {
                    function i(t, s) {
                        try {
                            if (s && ("object" == typeof s || "function" == typeof s)) {
                                var r = s.then;
                                if ("function" == typeof r)
                                    return void r.call(s, function(e) {
                                        i(t, e)
                                    }, n)
                            }
                            o[t] = s,
                            0 == --a && e(o)
                        } catch (t) {
                            n(t)
                        }
                    }
                    if (!t || void 0 === t.length)
                        throw new TypeError("Promise.all accepts an array");
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length)
                        return e([]);
                    for (var a = o.length, s = 0; o.length > s; s++)
                        i(s, o[s])
                }
                )
            }
            ,
            o.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                    e(t)
                }
                )
            }
            ,
            o.reject = function(t) {
                return new o(function(e, n) {
                    n(t)
                }
                )
            }
            ,
            o.race = function(t) {
                return new o(function(e, n) {
                    for (var i = 0, o = t.length; o > i; i++)
                        t[i].then(e, n)
                }
                )
            }
            ,
            o._immediateFn = "function" == typeof t && function(e) {
                t(e)
            }
            || function(t) {
                d(t, 0)
            }
            ,
            o._unhandledRejectionFn = function(t) {
                void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }
            ;
            var u = function() {
                if ("undefined" != typeof self)
                    return self;
                if ("undefined" != typeof window)
                    return window;
                if (void 0 !== e)
                    return e;
                throw Error("unable to locate global object")
            }();
            "Promise"in u ? u.Promise.prototype.finally || (u.Promise.prototype.finally = n) : u.Promise = o
        })
    }
    ).call(e, n(4).setImmediate, n(0))
}
, function(t, e, n) {
    (function(t) {
        function i(t, e) {
            this._id = t,
            this._clearFn = e
        }
        var o = void 0 !== t && t || "undefined" != typeof self && self || window
          , a = Function.prototype.apply;
        e.setTimeout = function() {
            return new i(a.call(setTimeout, o, arguments),clearTimeout)
        }
        ,
        e.setInterval = function() {
            return new i(a.call(setInterval, o, arguments),clearInterval)
        }
        ,
        e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(o, this._id)
        }
        ,
        e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = e
        }
        ,
        e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = -1
        }
        ,
        e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }
        ,
        n(5),
        e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
        e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }
    ).call(e, n(0))
}
, function(t, e, n) {
    (function(t, e) {
        !function(t, n) {
            "use strict";
            function i(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                    e[n] = arguments[n + 1];
                var i = {
                    callback: t,
                    args: e
                };
                return c[l] = i,
                r(l),
                l++
            }
            function o(t) {
                delete c[t]
            }
            function a(t) {
                var e = t.callback
                  , i = t.args;
                switch (i.length) {
                case 0:
                    e();
                    break;
                case 1:
                    e(i[0]);
                    break;
                case 2:
                    e(i[0], i[1]);
                    break;
                case 3:
                    e(i[0], i[1], i[2]);
                    break;
                default:
                    e.apply(n, i)
                }
            }
            function s(t) {
                if (d)
                    setTimeout(s, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        d = !0;
                        try {
                            a(e)
                        } finally {
                            o(t),
                            d = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var r, l = 1, c = {}, d = !1, u = t.document, p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                p = p && p.setTimeout ? p : t,
                "[object process]" === {}.toString.call(t.process) ? function() {
                    r = function(t) {
                        e.nextTick(function() {
                            s(t)
                        })
                    }
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0
                          , n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }
                        ,
                        t.postMessage("", "*"),
                        t.onmessage = n,
                        e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$"
                      , n = function(n) {
                        n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n),
                    r = function(n) {
                        t.postMessage(e + n, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        s(t.data)
                    }
                    ,
                    r = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : u && "onreadystatechange"in u.createElement("script") ? function() {
                    var t = u.documentElement;
                    r = function(e) {
                        var n = u.createElement("script");
                        n.onreadystatechange = function() {
                            s(e),
                            n.onreadystatechange = null,
                            t.removeChild(n),
                            n = null
                        }
                        ,
                        t.appendChild(n)
                    }
                }() : function() {
                    r = function(t) {
                        setTimeout(s, 0, t)
                    }
                }(),
                p.setImmediate = i,
                p.clearImmediate = o
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }
    ).call(e, n(0), n(6))
}
, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(t) {
        if (d === setTimeout)
            return setTimeout(t, 0);
        if ((d === n || !d) && setTimeout)
            return d = setTimeout,
            setTimeout(t, 0);
        try {
            return d(t, 0)
        } catch (e) {
            try {
                return d.call(null, t, 0)
            } catch (e) {
                return d.call(this, t, 0)
            }
        }
    }
    function a(t) {
        if (u === clearTimeout)
            return clearTimeout(t);
        if ((u === i || !u) && clearTimeout)
            return u = clearTimeout,
            clearTimeout(t);
        try {
            return u(t)
        } catch (e) {
            try {
                return u.call(null, t)
            } catch (e) {
                return u.call(this, t)
            }
        }
    }
    function s() {
        g && f && (g = !1,
        f.length ? h = f.concat(h) : m = -1,
        h.length && r())
    }
    function r() {
        if (!g) {
            var t = o(s);
            g = !0;
            for (var e = h.length; e; ) {
                for (f = h,
                h = []; ++m < e; )
                    f && f[m].run();
                m = -1,
                e = h.length
            }
            f = null,
            g = !1,
            a(t)
        }
    }
    function l(t, e) {
        this.fun = t,
        this.array = e
    }
    function c() {}
    var d, u, p = t.exports = {};
    !function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            d = n
        }
        try {
            u = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            u = i
        }
    }();
    var f, h = [], g = !1, m = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        h.push(new l(t,e)),
        1 !== h.length || g || o(r)
    }
    ,
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = c,
    p.addListener = c,
    p.once = c,
    p.off = c,
    p.removeListener = c,
    p.removeAllListeners = c,
    p.emit = c,
    p.prependListener = c,
    p.prependOnceListener = c,
    p.listeners = function(t) {
        return []
    }
    ,
    p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    p.cwd = function() {
        return "/"
    }
    ,
    p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    p.umask = function() {
        return 0
    }
}
, function(t, e) {
    Type.registerNamespace("app.alerts"),
    app.alerts = function() {
        function t() {
            var t = e();
            t ? n(t) : c()
        }
        function e() {
            if (void 0 !== typeof Storage && sessionStorage.alertItems)
                return JSON.parse(sessionStorage.alertItems)
        }
        function n(t) {
            var e = !1
              , n = !1
              , s = 0
              , r = [];
            $.each(t, function(t, a) {
                if ("Site" == a.type) {
                    if (!e && (i(a),
                    e = !0,
                    app.siteoptions.alertType && "categorised" == app.siteoptions.alertType)) {
                        $(".alert-container").addClass("categorised").find("> .container").removeClass;
                        var l = $(".alert-container > .container");
                        l.length && l.removeClass("container").addClass("alert-content");
                        var c = "alert-" + (a.category && "" !== a.category ? a.category.toLowerCase() : "information")
                          , d = $("<div class='icon " + c + "'><span class='fa " + ("alert-information" == c ? " fa-info-circle" : "fa-warning") + "'></span ></button>");
                        $(".alert-container").prepend(d),
                        $(".alert-container").addClass(c)
                    }
                } else if ($.each(a.urls, function(t, e) {
                    if (!n && e.toLowerCase() == _spPageContextInfo.serverRequestPath.toLowerCase()) {
                        if (!app.siteoptions.alertType || "categorised" != app.siteoptions.alertType)
                            return o(a),
                            n = !0,
                            !1;
                        if (r.push(a),
                        3 == (s += 1))
                            return n = !0,
                            !1
                    }
                }),
                e && n)
                    return !1
            }),
            r.length > 0 && a(r)
        }
        function i(t) {
            if ($(".alert-container").length) {
                var e;
                if (void 0 !== typeof Storage && (e = sessionStorage.lastSiteAlertDate),
                !e || e != t.updateDate) {
                    $(".alert-container .header-alert-content").html(t.content),
                    $(".alert-container").removeClass("hidden");
                    var n = ($("#onlinetranslation-container").length && $("#onlinetranslation-container").is(":visible") ? $("#onlinetranslation-container").outerHeight() : 0) + ($(".alert-container").length ? $(".alert-container").outerHeight() : 0);
                    $(".hero-bg").css("margin-top", n + "px"),
                    "portfolio" !== app.siteoptions.site || $("body.v2").length || $(".home-page").length && setTimeout(function() {
                        $("header.home .search-container .search-btn").css("background", "transparent"),
                        $("header.home .search-container .search-btn").css("color", "#ececec"),
                        ($(".alert-container").is(":visible") || $("#onlinetranslation-container").is(":visible")) && ($("header.home").css("position", "relative"),
                        $("header.home .search-container .search-btn").css("background", "#ececec"),
                        $("header.home .search-container .search-btn").css("color", "#22313f"),
                        $("#contentBox").css("position", "relative"),
                        $(".alert-container .header-alert-hide-btn").click(function() {
                            $("#onlinetranslation-container").length || ($("header.home").css("position", "absolute"),
                            $("header.home .search-container .search-btn").css("background", "transparent"),
                            $("header.home .search-container .search-btn").css("color", "#ececec"))
                        }))
                    }, 50),
                    localStorage.setItem("lastSiteAlertDate", t.updateDate)
                }
            }
        }
        function o(t) {
            $(".warning-container").length && ($(".warning-container .warning-text").html(t.content),
            $(".warning-container").removeClass("hidden"))
        }
        function a(t) {
            if ($(".warning-container").length)
                if ($(".warning-container p.warning-text").replaceWith("<div class='warning-text'></div>"),
                "accordion" == app.siteoptions.alertDisplay) {
                    $(".warning-container").addClass("accordion");
                    for (var e = 0; e < t.length; e++)
                        s(t[e], e + 1);
                    $(".warning-container").removeClass("hidden"),
                    r(),
                    $(window).resize(function() {
                        r()
                    })
                } else {
                    $(".warning-container").addClass("stacked");
                    for (var e = 0; e < t.length; e++)
                        l(t[e], e + 1);
                    $(".warning-container").removeClass("hidden")
                }
        }
        function s(t, e) {
            var n = $('<button type="button" aria-label="Alert' + e + '" aria-expanded="' + (1 == e ? "true" : "false") + '" aria-controls="pagealert' + e + '"></button>')
              , i = $('<div class="content ' + (1 != e ? "collapsed" : "") + '" id="pagealert' + e + '">' + t.content.replace(/\u200B/g, "") + "</div>")
              , o = "alert-" + (t.category && "" !== t.category ? t.category.toLowerCase() : "information");
            n.addClass(o),
            i.addClass(o),
            "alert-information" == o ? n.html("<span class='fa fa-info-circle accordion-icon'></span>") : n.html("<span class='fa fa-warning accordion-icon'></span>"),
            1 == e ? n.append("<span class='fa fa-angle-right accordion-pointer'></span>") : n.prepend("<span class='fa fa-angle-left accordion-pointer'></span>"),
            $(".warning-container .warning-text").append(n).append(i),
            n.click(function() {
                $this = $(this),
                $(".warning-container .warning-text button").attr("aria-expanded", "false"),
                $this.attr("aria-expanded", "true"),
                r()
            })
        }
        function r() {
            warningtext = $(".warning-container .warning-text");
            var t = warningtext.find("button[aria-expanded='true']")
              , e = t.next()
              , n = warningtext.find("button");
            warningtext.find("button .accordion-pointer").remove(),
            n.prepend("<span class='fa fa-angle-left accordion-pointer'></span>"),
            t.find(".accordion-pointer").remove(),
            t.append("<span class='fa fa-angle-right accordion-pointer'></span>");
            var i = warningtext.find("button").length;
            warningtext.find(".content").css("width", "0px").attr("aria-hidden", "true"),
            e.removeClass("collapsed").css("width", $(".warning-container .warning-text").width() - t.width() * i - 3 * (i - 1) + "px").attr("aria-hidden", "false"),
            setTimeout(function() {
                warningtext.find(".content[aria-hidden='true']").addClass("collapsed")
            }, 150)
        }
        function l(t, e) {
            var n = $('<div class="alert-icon"></div>')
              , i = $('<div class="content" id="pagealert' + e + '">' + t.content.replace(/\u200B/g, "") + "</div>")
              , o = $('<div class="alert-item"></div>');
            o.append(n).append(i);
            var a = "alert-" + (t.category && "" !== t.category ? t.category.toLowerCase() : "information");
            n.addClass(a),
            i.addClass(a),
            "alert-information" == a ? n.html("<i class='fa fa-info-circle accordion-icon'></i>") : n.html("<i class='fa fa-warning accordion-icon'></i>"),
            $(".warning-container .warning-text").append(o)
        }
        function c() {
            if (app.siteoptions.useSiteDataScript) {
                var t = app.sitedata.alertItems;
                t && n(t)
            } else
                app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetAlertsData", {}, null, function(t) {
                    if (t.d.success) {
                        var e = t.d.data;
                        d(e),
                        n(e)
                    } else
                        console.log(t.d.data.internalError)
                })
        }
        function d(t) {
            void 0 !== typeof Storage && (sessionStorage.alertItems = JSON.stringify(t))
        }
        return {
            init: function() {
                t(),
                $(".alert-container").length && $(".header-alert-hide-btn").click(function() {
                    $(this).closest(".alert-container").slideUp(100);
                    var t = $("#onlinetranslation-container").length ? $("#onlinetranslation-container").outerHeight() : 0;
                    $(".hero-bg").length && ($(".hero-bg").css("margin-top", t + "px"),
                    $(window).resize(function() {
                        t = $("#onlinetranslation-container").length ? $("#onlinetranslation-container").outerHeight() : 0,
                        $(".hero-bg").css("margin-top", t + "px")
                    })),
                    "portfolio" !== app.siteoptions.site || $("body.v2").length || $(".home-page").length && ($("#onlinetranslation-container").length || ($(".home-page .hero-block").css("margin-top", "0px"),
                    $("header.home .search-container .search-btn").css("background", "transparent"),
                    $("header.home .search-container .search-btn").css("color", "#ffffff"),
                    $(".hero-bg").css("margin-top", t + "px"))),
                    void 0 !== typeof Storage && (sessionStorage.lastSiteAlertDate = localStorage.getItem("lastSiteAlertDate"))
                })
            }
        }
    }(),
    "undefined" != typeof angular ? angular.element(function() {
        window.setTimeout(window.app.alerts.init, 100)
    }) : _spBodyOnLoadFunctions.push(window.app.alerts.init)
}
, function(t, e) {
    Type.registerNamespace("app.loading"),
    app.loading = {
        init: function() {
            $(".app-loading").hide(),
            setTimeout(function() {
                $(document).on({
                    ajaxStart: function() {
                        $(".app-loading").show()
                    },
                    ajaxStop: function() {
                        $(".app-loading").hide()
                    }
                })
            }, 3e3)
        },
        show: function() {
            $(".app-loading").show()
        },
        hide: function() {
            $(".app-loading").hide()
        },
        moveblockUI: function() {
            setTimeout(function() {
                $("#block-ui-container").length && $("#block-ui-container").appendTo("body")
            }, 100)
        }
    };
    setTimeout(function() {
        document.querySelector(".app-loading").style.display = "none",
        $("#block-ui-container").length && $("#block-ui-container").addClass("hidden"),
        console.log("loading spinner timeout...")
    }, 1e4),
    $(document).ready(function() {
        app.loading.init(),
        app.loading.moveblockUI()
    })
}
, function(t, e) {
    Type.registerNamespace("app.banner"),
    app.banner = function() {
        function t() {
            var t = $(".hero-bg")
              , e = $("#pageTitle")
              , n = $("#PublishingPageImage").find("img").length;
            if (t) {
                var i, o = $("[id='DefaultBannerImageUrl']").val(), a = $("[id*='PageBannerImage']").val();
                if ("" !== a & void 0 !== a) {
                    i = $(a).attr("src")
                } else
                    i = o;
                i && t.css("background-image", 'url("' + i + '")'),
                n > 0 && e.hide()
            }
        }
        return {
            init: function() {
                $(document).ready({
                    ajaxStart: function() {},
                    ajaxStop: function() {},
                    ajaxComplete: function() {}
                }),
                t()
            }
        }
    }(),
    $(document).ready(function() {
        "1" !== $("#MSOLayout_InDesignMode").val() && app.banner.init()
    })
}
, function(t, e) {
    !function(t) {
        t.fn.stringify = function(t) {
            if (void 0 !== window.JSON)
                return JSON.stringify(t);
            var e = typeof t;
            if ("object" != e || null === t)
                return "string" == e && (t = '"' + t + '"'),
                String(t);
            var n, i, o = [], a = t && t.constructor == Array;
            for (n in t)
                i = t[n],
                e = typeof i,
                t.hasOwnProperty(n) && ("string" == e ? i = '"' + i + '"' : "object" == e && null !== i && (i = jQuery.stringify(i)),
                o.push((a ? "" : '"' + n + '":') + String(i)));
            return (a ? "[" : "{") + String(o) + (a ? "]" : "}")
        }
        ,
        String.prototype.format || (String.prototype.format = function() {
            var t = arguments;
            return this.replace(/{(\d+)}/g, function(e, n) {
                return void 0 !== t[n] ? t[n] : e
            })
        }
        )
    }(jQuery)
}
, function(t, e) {
    Type.registerNamespace("app.displaycomponent"),
    app.displaycomponent = function() {
        function t(t, e) {
            var n = $('<iframe class="full-frame" src="" width="100%"></iframe>');
            t.html(""),
            t.prepend(n),
            n[0].onload = function() {
                n.css("height", $(window).height()),
                n.contents().find("head").append('<style type="text/css">main > .container{width: 100%; padding:2em;}; </style>')
            }
            ,
            n[0].src = e,
            $(window).resize(function() {
                n.css("height", $(window).height())
            })
        }
        function e() {
            n() && $("[data-model-url]").each(function(t, e) {
                var n = $(e).attr("data-model-url")
                  , o = $(e).attr("data-toggle")
                  , a = $(e).attr("data-target");
                "modal" == o && i(n, a)
            })
        }
        function n() {
            return null != $("[data-model-url]") && $("[data-model-url]").length > 0
        }
        function i(e, n) {
            var i = $(n + "-body");
            if (0 == i.length) {
                var o = '<div class="modal fade sidebar" id="~0~" role="dialog" style="display: none;"><div class="modal-dialog"><div class="modal-content"><div class="modal-body no-padding" id="~0~-body"></div><div class="modal-footer"><button class="btn btn-default" type="button" data-dismiss="modal"><i class="fa fa-times"></i>Close</button><button class="btn btn-default" type="button"><i class="fa fa-print"></i>Print</button><br/><br/></div></div></div></div>'
                  , a = n.replace("#", "");
                o = o.replace(/~0~/g, a),
                $(o).appendTo("body"),
                i = $(n + "-body")
            }
            t(i, e)
        }
        return {
            init: function() {
                if ("1" !== $("#MSOLayout_InDesignMode").val() && e(),
                "1" === $("#MSOLayout_InDesignMode").val()) {
                    window.setTimeout(function() {
                        $(".ms-rtestate-field a").unbind("click"),
                        $(".ms-rtestate-field a").click(function(t) {
                            t.preventDefault()
                        }),
                        $(".ms-rtestate-field").on("click", "a", function(t) {
                            t.preventDefault()
                        })
                    }, 1e3);
                    var t = document.querySelectorAll('input[id$="_GlbPageUIDHiddenField_Input"]')[0];
                    void 0 !== t && t.value.length > 0 ? console.log("UID: " + t) : void 0 !== t && (t.value = SP.Guid.newGuid())
                }
            }
        }
    }(),
    "undefined" != typeof angular ? angular.element(function() {
        window.setTimeout(window.app.displaycomponent.init, 100)
    }) : _spBodyOnLoadFunctions.push(window.app.displaycomponent.init)
}
, function(t, e) {
    Type.registerNamespace("app.searchwidget"),
    app.searchwidget = {
        init: function() {
            this.initSearchTerms();
            var t = this;
            $(".search-input").on("focus", function() {
                $(this).closest(".search-form").addClass("focused")
            }),
            $(".search-input").on("blur", function() {
                $(this).closest(".search-form").removeClass("focused")
            }),
            $(".search-btn").click(function() {
                $(".search-overlay").fadeIn("fast").find("input").focus(),
                $(".search-overlay-content input.search-input").val("")
            }),
            $(".close-search-overlay-btn").click(function() {
                $(".search-overlay").fadeOut("fast")
            }),
            $(".search-overlay-content input.search-input").keypress(function(e) {
                "13" == (e.keyCode ? e.keyCode : e.which) && (e.preventDefault(),
                $("input.search-input").val($(this).val()),
                t.searchOverlaySearch(!1))
            }),
            $(".search-submit").click(function() {
                $("input.search-input").val($(this).prev().val()),
                t.searchOverlaySearch(!1)
            }),
            $(".previous-searches .previous-term").click(function() {
                $("input.search-input").val($(this).text()),
                t.searchOverlaySearch($(this).data("exactSearchTerm"))
            }),
            $(".popular-searches .popular-term").click(function() {
                $("input.search-input").val($(this).text()),
                t.searchOverlaySearch(!0)
            });
            var e = $(".search-overlay-content input.search-input")
              , n = parseInt(e.css("font-size"), 10);
            e.keyup(function(t) {
                if ($(this).val().length > 0) {
                    var e = $(this).val()
                      , i = $(this).css("font-size")
                      , o = document.createElement("span");
                    o.style.visibility = "hidden",
                    o.style.whiteSpace = "nowrap",
                    document.body.appendChild(o),
                    o.style.fontSize = i,
                    o.style.fontFamily = $(this).css("font-family"),
                    o.innerText = e;
                    var a = o.offsetWidth;
                    o.remove();
                    var s = $(this)[0].offsetWidth
                      , r = (s - 100) / a
                      , l = $(this).css("font-size");
                    l = parseInt(l, 10);
                    var c = parseInt(l * r);
                    c < 14 && (c = 14),
                    c >= n && (c = n),
                    $(this).css({
                        "font-size": c + "px"
                    })
                } else
                    $(this).css({
                        "font-size": n + "px"
                    })
            })
        },
        initSearchTerms: function() {
            this.populatePopularSearches(),
            this.populatePreviousSearches()
        },
        populatePopularSearches: function() {
            var t = []
              , e = JSON.parse(app.config.getConfigByKey("Internet.Search", "PopularSearchTermsJson").trim())
              , n = _spPageContextInfo.webServerRelativeUrl;
            for (o in e.popularsearch)
                if (e.popularsearch[o].site === n) {
                    t = e.popularsearch[o].keywords;
                    break
                }
            var i = $("ul.popular-searches");
            i.html("");
            for (var o = 0; o < t.length; o++)
                if (o <= 4) {
                    var a = '<a href="#" class="popular-term">' + t[o] + "</a>"
                      , s = $("<li/>").append(a);
                    i.append(s)
                }
        },
        populatePreviousSearches: function() {
            var t = []
              , e = [];
            localStorage.getItem("previousSearches") && (e = JSON.parse(localStorage.getItem("previousSearches")));
            for (var n = 0; n < e.length; n++) {
                for (var i = !1, o = 0; o < t.length; o++)
                    if (e[n] == t[o]) {
                        i = !0;
                        break
                    }
                i || t.push(e[n])
            }
            var a = $("ul.previous-searches");
            a.html("");
            for (var n = 0; n < t.length; n++)
                if (n <= 4) {
                    var s = '<a href="#" class="previous-term" data-exact-search-term="' + t[n].exactSearchTerm + '">' + t[n].term + "</a>"
                      , r = $("<li/>").append(s);
                    a.append(r)
                }
        },
        searchOverlaySearch: function(t) {
            var e = $(".search-input").val();
            if (e.length > 0) {
                var n = app.config.getConfigByKey("Internet.Search", "CustomSearch").trim()
                  , i = n + e;
                t && (i += "&exactSearchTerm=true"),
                window.location.href = i
            }
        }
    },
    $(document).ready(function() {
        $(".search-container").length > 0 && app.searchwidget.init()
    })
}
, function(t, e) {
    Type.registerNamespace("app.sp"),
    window.AddEvtHandler = function(t, e, n) {
        browseris.ie ? t.addEventListener ? t.addEventListener(e.substr(2), n, !1) : t.attachEvent(e, n) : t.addEventListener(e.substr(2), n, !1)
    }
    ,
    ExecuteOrDelayUntilScriptLoaded(function() {
        CUI.Ribbon.prototype._$1Y_0 = CUI.Ribbon.prototype.$1Y_0,
        CUI.Ribbon.prototype.$1Y_0 = function() {
            this._$1Y_0()
        }
    }, "cui.js"),
    "1" === $("#MSOLayout_InDesignMode").val() && (ExecuteOrDelayUntilScriptLoaded(function() {
        RTE.Canvas.initialFocusOnRichText = function() {
            return !1
        }
        ,
        RTE.Canvas.setInitialFocus = function() {}
    }, "sp.ui.rte.js"),
    ExecuteOrDelayUntilScriptLoaded(function() {
        RTE.PublishingRichTextEditor.setInitialFocusToEditableRegion = function() {}
    }, "sp.ui.rte.publishing.js"),
    ExecuteOrDelayUntilScriptLoaded(function() {
        SP.UI.UIUtility.$u = function(t) {
            for (var e = t; e; ) {
                var n = e.className;
                if (n && "string" == typeof n && (-1 !== n.indexOf("ms-cui") || -1 !== n.indexOf("ms-rtefocus-invalid") || -1 !== n.indexOf("ms-dlgOverlay") || -1 !== n.indexOf("ms-dlgFrame") || -1 !== n.indexOf("ms-dlgTitle") || -1 !== n.indexOf("ms-dlgTitleText") || -1 !== n.indexOf("ms-siteactions") || -1 !== n.indexOf("ms-core-deltaSuiteBarRight")))
                    return !0;
                e = e.parentNode
            }
            return "HTML" === t.tagName
        }
    }, "sp.init.js"),
    ExecuteOrDelayUntilScriptLoaded(function() {
        SP.Ribbon.Utility.$G = function(t, e) {
            return !!t && !SP.UI.UIUtility.isSvgNode(t) && "string" == typeof t.className && Sys.UI.DomElement.containsCssClass(t, e)
        }
    }, "sp.ribbon.js")),
    app.sp.ui = function() {
        return {
            add_load: function(t) {
                if ("function" == typeof t) {
                    if ("undefined" != typeof angular)
                        return void angular.element(function() {
                            window.setTimeout(t, 100)
                        });
                    _spBodyOnLoadFunctions.push(t)
                }
            },
            init: function() {
                if ("1" === $("#MSOLayout_InDesignMode").val() && ($("body").addClass("edit-mode"),
                $("#contentBox .content-page.full-page-edit > .row > .col-sm-3.ms-edit-overlay").hide().parent().children(".col-sm-9").removeClass("col-sm-9").addClass("col-sm-12"),
                $.fn.block && $("body.edit-mode .ms-edit-overlay").block({
                    message: null,
                    overlayCSS: {
                        backgroundColor: "#fff",
                        cursor: "not-allowed"
                    }
                }),
                $('#MSOTlPn_Tbl input[type="submit"]').attr("formnovalidate", "formnovalidate")),
                $("html.ms-dialog").length && $("#contentBox .content-page > .row > .col-sm-3.ms-dialogHidden").parent().children(".col-sm-9").removeClass("col-sm-9").addClass("col-sm-12"),
                $("#pageModified").length && $("#pageModified").text().length) {
                    var t = $("#pageModified").text().trim().split(" ");
                    if (t.length > 0) {
                        date = t[0].split("/");
                        var e = new Date(date[2],date[1] - 1,date[0]);
                        const n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        $("#pageModified").text(e.getDate() + " " + n[e.getMonth()] + " " + e.getFullYear()),
                        $("#pageModified").removeClass("hide")
                    }
                }
                var i = $("#ctl00_PlaceHolderMain_PagePubStatusHiddenField_Input");
                if (i.length && "UnPublished" == i.text().trim()) {
                    var o = $("#pageStatusBar");
                    o.length && o.append('<span class="ms-status-status" role="alert" tabindex="0"><span class="ms-status-iconSpan"><img class="ms-status-iconImg" src="/_layouts/15/images/spcommon.png"></span>This page has been <span style="font-size:1.6rem; font-weight: 600; color:royalblue">UnPublished</span>')
                }
            },
            format: {
                fileSize: function(t, e, n, i, o) {
                    var a = (e = Math,
                    n = e.log,
                    i = 1024,
                    o = n(t) / n(i) | 0,
                    t / e.pow(i, o)).toFixed(2);
                    return isNaN(a) ? "" : a + " " + (o ? "kMGTPEZY"[--o] + "B" : "B")
                }
            }
        }
    }(),
    app.sp.ajax = function() {
        var t = /^https?:\/\//i;
        return {
            post: function(e, n, i, a, s) {
                UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval),
                o = $.extend({
                    headers: {
                        Accept: "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }, i || {}),
                $.ajax({
                    url: t.test(e) ? e : ((e || "").startsWith("/") ? _spPageContextInfo.siteAbsoluteUrl : _spPageContextInfo.webAbsoluteUrl + "/") + e,
                    type: "POST",
                    data: "string" == typeof n ? n : JSON.stringify(n),
                    headers: o.headers || {},
                    dataType: "json",
                    success: function(t) {
                        a && a(t)
                    },
                    error: function(t) {
                        s && s(t)
                    }
                })
            },
            setSPHeaders: function() {
                return UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval),
                !0
            }
        }
    }(),
    app.sp.ajaxSync = function() {
        var t = /^https?:\/\//i;
        return {
            post: function(e, n, i, a, s) {
                UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval),
                o = $.extend({
                    headers: {
                        Accept: "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    }
                }, i || {}),
                $.ajax({
                    url: t.test(e) ? e : ((e || "").startsWith("/") ? _spPageContextInfo.siteAbsoluteUrl : _spPageContextInfo.webAbsoluteUrl + "/") + e,
                    type: "POST",
                    data: "string" == typeof n ? n : JSON.stringify(n),
                    headers: o.headers || {},
                    async: !1,
                    dataType: "json",
                    success: function(t) {
                        a && a(t)
                    },
                    error: function(t) {
                        s && s(t)
                    }
                })
            },
            setSPHeaders: function() {
                return UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval),
                !0
            }
        }
    }(),
    _spBodyOnLoadFunctions.push(app.sp.ui.init)
}
, function(t, e) {
    function n() {
        var t = $(".has-sub-menu.open").length + 1
          , e = $(window).width()
          , n = $(".sub-menu").width()
          , i = Math.floor(e / n)
          , o = i > t;
        if (i < 1 && (i = 1),
        o)
            $('ul[class="menu"]:not(.tiles)').css("transform", "translateX(0)");
        else {
            var a = Math.ceil(t - i)
              , s = a * n;
            $('ul[class="menu"]:not(.tiles)').css("transform", "translateX(-" + s + "px)")
        }
        1 === i && t > 1 ? $(".back-btn").show() : $(".back-btn").hide()
    }
    function i() {
        $(".has-sub-menu").removeClass("open"),
        n()
    }
    function o() {
        var t = $(".nav-overlay")
          , e = $(".side-navigation")
          , n = ($(".side-navigation > .menu"),
        $(".menu-close-btn"));
        $(".menu-open-btn").attr("aria-expanded", "true"),
        t.show(),
        e.addClass("open"),
        e.attr("aria-hidden", "false"),
        n.focus(),
        e.find("a").removeAttr("tabindex"),
        n.removeAttr("tabindex"),
        a(),
        $(document).keyup(function(t) {
            27 === t.keyCode && n.click()
        }),
        n.on("keydown", function(t) {
            9 === (t.which || t.keyCode) && t.shiftKey && setTimeout(function() {
                n.focus()
            }, 100)
        })
    }
    function a() {
        var t = $(".side-navigation > .menu")
          , e = t.find("li:visible > a")
          , n = e.last()
          , i = $(".menu-close-btn")
          , o = $(".side-navigation");
        e.unbind("blur"),
        n.blur(function() {
            o.hasClass("open") && i.focus()
        })
    }
    function s() {
        var t = $(".nav-overlay")
          , e = $(".side-navigation")
          , n = $(".menu-close-btn");
        t.hide(),
        e.removeClass("open"),
        e.attr("aria-hidden", "true"),
        e.find("a").attr("tabindex", "-1"),
        n.attr("tabindex", "-1"),
        i(),
        $(".menu-open-btn").attr("aria-expanded", "false").focus()
    }
    function r() {
        var t = $(".side-navigation")
          , e = $(".menu-close-btn");
        $(".menu-open-btn").attr("aria-expanded", "false"),
        t.removeClass("open"),
        t.attr("aria-hidden", "true"),
        t.find("a").attr("tabindex", "-1"),
        e.attr("tabindex", "-1"),
        t.find("li.has-sub-menu > a").attr("aria-expanded", "false")
    }
    function l() {
        function t(t) {
            t.siblings(".has-sub-menu").each(function() {
                e($(this))
            }),
            t.addClass("open"),
            t.find("> a").attr("aria-expanded", "true"),
            setTimeout(function() {
                r.find("li:visible a").removeAttr("tabindex"),
                r.find("li:hidden a").attr("tabindex", "-1"),
                a()
            }, 250),
            n()
        }
        function e(t) {
            t.removeClass("open"),
            t.find("> a").attr("aria-expanded", "false"),
            t.find(".has-sub-menu").removeClass("open"),
            t.find(".has-sub-menu > a").attr("aria-expanded", "false"),
            setTimeout(function() {
                r.find("li:visible a").removeAttr("tabindex"),
                r.find("li:hidden a").attr("tabindex", "-1"),
                a()
            }, 250),
            n()
        }
        var i = $(".nav-overlay")
          , r = $(".side-navigation")
          , l = $(".menu-open-btn")
          , c = $(".menu-close-btn")
          , d = ($(".has-sub-menu a"),
        $(".main-menu"))
          , u = $(".breadcrumb")
          , p = $("ul.menu-horizontal");
        l.click(function() {
            o()
        }),
        c.click(function() {
            s(),
            l.focus()
        }),
        i.click(function() {
            s()
        }),
        r.on("click", ".has-sub-menu > a", function(n) {
            n.preventDefault();
            var i = $(this).parent();
            i.hasClass("open") ? e(i) : t(i)
        }),
        p.length && p.on("click", "a[attr-placeholder]", function(t) {
            t.preventDefault()
        }),
        d.add(u).on("click", ".navigation-node > a", function(e) {
            if (e.preventDefault(),
            $(".menu-open-btn").is(":visible")) {
                var n = $(this).attr("href")
                  , i = $('.side-navigation li:has([href="' + n + '"])');
                $("#s4-workspace").animate({
                    scrollTop: 0
                }, "fast"),
                o(),
                t(i),
                i.find('[href="' + n + '"]').focus()
            } else if ($("ul.menu-horizontal").length && $("ul.menu-horizontal").is(":visible")) {
                var n = $(this).attr("href");
                $("#s4-workspace").animate({
                    scrollTop: 0
                }, "fast");
                var i = $('ul.menu-horizontal > li:has([href="' + n + '"])');
                i.length && i.find("> a").click()
            }
        }),
        setTimeout(function() {
            $(".side-navigation ul.menu .sub-menu").each(function() {
                var t = $('<li class="back-btn"><a href="javascript:void(0)">Back</a></li>').hide();
                t.click(function() {
                    e($(this).closest(".has-sub-menu"))
                }),
                $(this).prepend(t)
            })
        }, 1200)
    }
    Type.registerNamespace("app.menu"),
    app.menu = function() {
        function t(t) {
            var e = app.siteoptions.spMenuCache;
            e || (e = "immi");
            var n = null;
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetSiteNavigation", {
                siteName: e
            }, null, function(e) {
                e.d.success ? (n = e.d.data,
                f(n),
                m(n, t)) : console.log(e.d.data.internalError)
            })
        }
        function e() {
            var t;
            return void 0 !== typeof Storage && sessionStorage.currentLanguage && (t = sessionStorage.currentLanguage),
            t
        }
        function n(t) {
            void 0 !== typeof Storage && (sessionStorage.currentLanguage = t)
        }
        function i() {
            var t;
            if (void 0 !== typeof Storage && sessionStorage.topMenuElement) {
                if ("" == sessionStorage.topMenuElement)
                    return t;
                t = sessionStorage.topMenuElement
            }
            return t
        }
        function a() {
            var t;
            if (void 0 !== typeof Storage && sessionStorage.topMenuHorizontalElement) {
                if ("" == sessionStorage.topMenuHorizontalElement)
                    return t;
                t = sessionStorage.topMenuHorizontalElement
            }
            return t
        }
        function s(t) {
            void 0 !== typeof Storage && (sessionStorage.topMenuElement = t)
        }
        function l(t) {
            void 0 !== typeof Storage && (sessionStorage.topMenuHorizontalElement = t)
        }
        function c(t) {
            void 0 !== typeof Storage && (sessionStorage.topMenuElement = "")
        }
        function d() {
            var t;
            return void 0 !== typeof Storage && sessionStorage.multilingualUIElements && (t = sessionStorage.multilingualUIElements),
            t
        }
        function u(t) {
            void 0 !== typeof Storage && (sessionStorage.multilingualUIElements = t)
        }
        function p() {
            var t;
            return void 0 !== typeof Storage && sessionStorage.menuItems && (t = JSON.parse(sessionStorage.menuItems)),
            t
        }
        function f(t) {
            void 0 !== typeof Storage && (sessionStorage.menuItems = JSON.stringify(t))
        }
        function h() {
            var t;
            return void 0 !== typeof Storage && sessionStorage.languagePickerItems && (t = JSON.parse(sessionStorage.languagePickerItems)),
            t
        }
        function g(t) {
            void 0 !== typeof Storage && (sessionStorage.languagePickerItems = JSON.stringify(t))
        }
        function m(t, e) {
            if (null != t) {
                D(_spPageContextInfo.serverRequestPath, t),
                S(t),
                0 != Z.ispage || _spPageContextInfo.userId || (window.location.href = "/"),
                app.siteoptions.enableMultilingual ? v(Z, t) : $("#language-selector-container").hide(),
                A(t),
                M(t),
                $(window).resize(function() {
                    nt && (clearTimeout(window.resizedFinished),
                    window.resizedFinished = setTimeout(function() {
                        M(t)
                    }, 250))
                }),
                app.siteoptions.disableBreadcrumbs ? $(".breadcrumbs-container").hide() : P(t),
                L(t),
                z(t),
                Q(t),
                U(t),
                Z.isbetapage && K(),
                app.portfoliofunctions.init(t),
                app.siteoptions.enableMultilingual && w(),
                "function" == typeof e && e()
            }
        }
        function v(t, e) {
            C(t, e);
            var n = $("#language-selector-dropdown");
            if (app.siteoptions.useSiteDataScript)
                var i = app.sitedata.languagePickerItems;
            else
                var i = h();
            null != i && (i.forEach(function(e, i) {
                if ("English" != e.key && T(t, e.code)) {
                    var o = $("<option value='" + e.code + "'></option>");
                    o.text(1 == e.isrighttoleft ? e.text + " | " + e.key : e.key + " | " + e.text),
                    n.append(o)
                }
            }),
            n.append("<option value='en'>English</option>"),
            n.find("option[value='" + tt + "']").prop("selected", !0),
            k(tt, i),
            n.change(function() {
                tt = n.val(),
                b(),
                x()
            }),
            g(i),
            "my" == tt && $("main").addClass("lang-burmese"))
        }
        function b() {
            c()
        }
        function y() {
            return !!$("body").hasClass("right-to-left")
        }
        function w() {
            if (app.siteoptions.useSiteDataScript)
                var t = app.sitedata.multilingualUIElements;
            else
                var t = d();
            null != t && (t.forEach(function(t, e) {
                var n = $("#" + t.elementid).html()
                  , i = $.grep(t.languages, function(t, e) {
                    return "en" === t.langCode
                })
                  , o = $.grep(t.languages, function(t, e) {
                    return t.langCode === tt
                });
                $("#" + t.elementid).html(o.length > 0 ? o[0].text : i.length > 0 ? i[0].text : n)
            }),
            u(t))
        }
        function C(t, e) {
            _spPageContextInfo.serverRequestPath;
            "{}" != JSON.stringify(t) ? et && "en" != tt && !_spPageContextInfo.userId && x() : tt = "en"
        }
        function S(t) {
            if (!app.siteoptions.enableMultilingual)
                return !1;
            var i = e();
            if (null != i)
                _spPageContextInfo.userId ? tt && n(tt) : tt = i;
            else if ($("body.ie").length)
                app.sp.ajaxSync.post("/_layouts/15/api/Data.aspx/GetUserBrowserLanguage", {}, null, function(t) {
                    t.d.success ? tt = t.d.data.split("-")[0] : (console.log(t.d.data.internalError),
                    tt = "en")
                });
            else if (navigator.language || navigator.userLanguage) {
                var o = navigator.language || navigator.userLanguage;
                o = o.split("-")[0],
                tt = T(Z, o) ? o.split("-")[0] : "en"
            } else
                tt = "en"
        }
        function x() {
            n(tt);
            var t = W(Z, tt);
            "" != t && (window.location = t)
        }
        function k(t, e) {
            var n = ($("#language-selector-dropdown"),
            $.grep(e, function(e, n) {
                return e.code === t
            }));
            null != n && n.length > 0 && ($("body").toggleClass("right-to-left", n[0].isrighttoleft),
            $("body.right-to-left .apply-direction").attr("dir", "rtl"))
        }
        function T(t, e) {
            var n;
            return null != t && null != t.languages && null != e && (n = $.grep(t.languages, function(t, n) {
                return t.code === e
            })),
            null != n && n.length > 0
        }
        function I(e) {
            if (app.siteoptions.useSiteDataScript)
                var n = app.sitedata.menuItems;
            else
                var n = p();
            null != n ? m(n, e) : t(e)
        }
        function E(t, e) {
            function n(e) {
                for (var a = 0; a < e.length; a++) {
                    if (i.push(e[a]),
                    H(e[a]) == t && W(e[a]) === window.location.pathname.replace(/\/\//g, "/")) {
                        o = !0;
                        break
                    }
                    if (e[a].childterms && (n(e[a].childterms),
                    o))
                        break;
                    i.pop()
                }
            }
            var i = []
              , o = !1;
            return n(e),
            i
        }
        function D(t, e) {
            function i(e) {
                for (var o = 0; o < e.length; o++) {
                    if (H(e[o], "en") == t) {
                        Z = e[o],
                        et = !0;
                        break
                    }
                    if (app.siteoptions.enableMultilingual && e[o].languages) {
                        var a = $.grep(e[o].languages, function(e, n) {
                            return e.options.langPath.relativepageurl === t
                        });
                        if (a.length > 0) {
                            et = !1,
                            tt = a[0].code,
                            n(tt),
                            Z = e[o];
                            break
                        }
                    }
                    e[o].childterms && i(e[o].childterms)
                }
            }
            i(e)
        }
        function P(t) {
            var e = _spPageContextInfo.serverRequestPath
              , n = $("ol.breadcrumb")
              , i = E(e, t);
            y() && n.attr("dir", "rtl");
            var o = "<a href='/' id='ctlBreadcrumbsHome'>Home</a>"
              , a = $("<li/>").append(o);
            n.append(a);
            for (var s = 0; s < i.length - 1; s++)
                if (!i[s].istabset) {
                    var r = G(i[s], tt)
                      , l = W(i[s])
                      , o = "<a href='" + l + "'>" + r + "</a>"
                      , a = $("<li />");
                    i[s].leftnav || a.addClass("has-sub-menu"),
                    !0 !== i[s].ispage && a.addClass("navigation-node"),
                    a.append(o),
                    n.append(a)
                }
        }
        function A(t) {
            y() && $('ul[class="menu"]:not(.tiles)').attr("dir", "rtl");
            var e = i();
            if (null != e)
                $('ul[class="menu"]:not(.tiles)').html(e);
            else {
                new Date;
                e = $('ul[class="menu"]:not(.tiles)'),
                t.forEach(function(t, n) {
                    t.isauthuseroption && !_spPageContextInfo.userId && (t.hideoption = !0),
                    t.hideoption || J(e, t)
                }),
                s(e.html()),
                new Date
            }
        }
        function M(t) {
            if ($("ul.menu-horizontal").length) {
                y() && $("ul.menu-horizontal").attr("dir", "rtl"),
                $("ul.menu-horizontal").length && ($('ul.menu-horizontal[id ^= "accessible-megamenu"]').length ? ($("nav.menu-horizontal").off(".accessible-megamenu"),
                $("ul.menu-horizontal").remove(),
                $("nav.menu-horizontal").append("<ul class='menu-horizontal'></ul>")) : ($("ul.menu-horizontal").html(""),
                nt = !0));
                var e = a();
                if (null != e)
                    cMenuItems = $("ul.menu-horizontal"),
                    cMenuItems.html(e);
                else {
                    new Date;
                    cMenuItems = $("ul.menu-horizontal"),
                    cMenuItems.html(""),
                    t.forEach(function(t, e) {
                        t.isauthuseroption && !_spPageContextInfo.userId && (t.hideoption = !0),
                        t.hideoption || J(cMenuItems, t)
                    });
                    l(O(cMenuItems)),
                    new Date
                }
                N(cMenuItems),
                j()
            }
        }
        function O(t) {
            var e = (t.find("> li").addClass("nav-item"),
            t.find("> li.has-sub-menu > ul.sub-menu").removeClass("sub-menu").addClass("level2"));
            e.wrap("<div class='sub-menu-horizontal'></div>"),
            e.find('a[href="#"]').removeAttr("href");
            e.find("> li.has-sub-menu > ul.sub-menu").removeClass("sub-menu").addClass("level3");
            return t.clone().html()
        }
        function N(t) {
            var e = R(t);
            if ($("li.has-sub-menu.nav-item.more").length && $("li.has-sub-menu.nav-item.more").remove(),
            t.find("> li").length > e) {
                var n = $("<li class='has-sub-menu nav-item more'><a href='#' attr-placeholder='true'>More</a><div class='sub-menu-horizontal'></div></li>");
                t.append(n);
                var i = $("<ul class='level2'></ul>");
                n.find(".sub-menu-horizontal").append(i)
            }
            t.find("> li.nav-item:not(.more)").each(function(t) {
                if (t >= e) {
                    var n = $(this).removeClass("nav-item")
                      , o = n.find(".sub-menu-horizontal")
                      , a = o.find("ul.level2").removeClass("level2").addClass("level3");
                    a.find("> li > ul > li > ul").hide(),
                    a.appendTo(n),
                    o.remove(),
                    i.append(n)
                }
            }),
            i && i.find('a[href="#"]').removeAttr("href")
        }
        function R(t) {
            var e = $(".header-menu-horizontal > .container nav.menu-horizontal").outerWidth()
              , n = t.find(" > li")
              , i = 0;
            if (n.length) {
                var o = 0;
                if (n.each(function(t, e) {
                    o += $(e).outerWidth()
                }),
                parseInt(o) > parseInt(e)) {
                    var a = 0;
                    n.each(function(t, n) {
                        if (!(a + $(n).outerWidth() < e - 90))
                            return !1;
                        a += $(n).outerWidth(),
                        i += 1
                    })
                } else
                    i = n.length
            } else
                var i = 100;
            return i
        }
        function L(t) {
            var e = $("ul.main-menu");
            t.forEach(function(t, n) {
                t.isauthuseroption && !_spPageContextInfo.userId && (t.hideoption = !0),
                !t.hideoption && t.ishomepagemenu && Y(e, t)
            })
        }
        function U(t) {
            app.siteoptions.leftNavigation && "threelevels" == app.siteoptions.leftNavigation ? -1 == window.location.pathname.replace(/\/\//g, "/").indexOf(".aspx") && B(t) : F(t)
        }
        function F(t) {
            function e(t, o) {
                var a = []
                  , s = _spPageContextInfo.serverRequestPath;
                if (H(o) == s && W(o) === window.location.pathname.replace(/\/\//g, "/")) {
                    if (o.isauthuseroption && !_spPageContextInfo.userId && (o.leftnav = !1),
                    o && o.leftnav)
                        if (o.childterms && o.childterms.length > 0) {
                            var r = !1;
                            o.childterms.forEach(function(t, e) {
                                t.isauthuseroption && !_spPageContextInfo.userId && (t.leftnav = !1),
                                t.leftnav && (r = !0)
                            });
                            var l = r ? o : t && t.childterms ? t : o;
                            a.push(l),
                            l.childterms.forEach(function(t, e) {
                                t.isauthuseroption && !_spPageContextInfo.userId && (t.leftnav = !1),
                                t.leftnav && a.push(t)
                            })
                        } else
                            a.push(t),
                            t.childterms.forEach(function(t, e) {
                                t.isauthuseroption && !_spPageContextInfo.userId && (t.leftnav = !1),
                                t.leftnav && a.push(t)
                            })
                } else
                    o.childterms && o.childterms.forEach(function(t, n) {
                        e(o, t)
                    });
                a.length > 0 && a.forEach(function(t, e) {
                    if (t.leftnav && !t.isdeprecated) {
                        i = !0;
                        var o = H(t) == s ? "active" : ""
                          , a = "<a class='left-menu-sticky' href='" + W(t) + "'>" + G(t) + "</a>"
                          , r = $('<li class="' + o + '"/>').append(a);
                        n.append(r)
                    }
                })
            }
            var n = $("ul.content-menu")
              , i = !1;
            n.length > 0 && (t.forEach(function(t, n) {
                e(null, t)
            }),
            i ? ($(".content-menu-container").addClass("pin"),
            $(".content-menu-container").removeClass("hidden"),
            $(".content-main").removeClass("col-sm-12"),
            $(".content-main").addClass("col-sm-8 col-sm-push-1")) : $(".content-menu-container").removeClass("pin"),
            y() && ($(".content-menu-container").addClass("col-sm-push-9"),
            $(".content-menu-container").attr("dir", "rtl"),
            $(".content-main").removeClass("col-sm-push-1"),
            $(".content-main").addClass("col-sm-pull-3")))
        }
        function B(t) {
            function e(t) {
                var e = "";
                e = t.hasClass("active") ? "<button type='button' class='expandcollapse'><span class='fa fa-angle-up' aria-hidden='true'></span></button>" : "<button type='button' class='expandcollapse expand'><span class='fa fa-angle-down' aria-hidden='true'></span></button>",
                t.find("> .li-content").length && t.find("> .li-content").append(e)
            }
            function n(t, e, i, o, c) {
                if (s = _spPageContextInfo.serverRequestPath,
                e.isauthuseroption && !_spPageContextInfo.userId && (e.leftnav = !1),
                e) {
                    if (e.leftnav) {
                        var d = W(e)
                          , u = window.location.pathname.replace(/\/\//g, "/");
                        (u == d || u == d + "#" || u.indexOf(d + "/") > -1) && "" == l && (l = d),
                        d.indexOf(l) > -1 && "" != l && (r = !0,
                        a.push(e)),
                        e.levelCounter = i,
                        e.idName = o + "-" + (c + 1),
                        e.childterms && e.childterms.length > 0 && e.childterms.forEach(function(t, o) {
                            t.isauthuseroption && !_spPageContextInfo.userId && (t.leftnav = !1),
                            t.leftnav && n(e, t, i + 1, e.idName, o)
                        })
                    }
                    e.childterms && e.childterms.length > 0 && !r && (e.idName = o + "-" + (c + 1),
                    e.childterms.forEach(function(t, o) {
                        t.isauthuseroption && !_spPageContextInfo.userId && (t.leftnav = !1),
                        r || n(e, t, i + 1, e.idName, o)
                    }))
                }
            }
            var i = $("ul.content-menu")
              , o = !1
              , a = []
              , s = ""
              , r = !1
              , l = "";
            if (i.length > 0 && (t.forEach(function(t, e) {
                o || (n(null, t, 0, "id", 0),
                r ? o = !0 : a = [])
            }),
            a.length > 0)) {
                var c, d, u = 1, p = i, f = p, h = W(a[0]);
                "" !== h && window.location.pathname.replace(/\/\//g, "/") == h && (d = H(a[0])),
                a.splice(0, 1),
                a[0] && (u = a[0].levelCounter,
                a.forEach(function(t, n) {
                    if (t.leftnav && !t.isdeprecated) {
                        var o = W(t);
                        "" !== o && window.location.pathname.replace(/\/\//g, "/") == o && (d = H(t));
                        var a = "" !== o && (window.location.pathname.replace(/\/\//g, "/").indexOf(o + "/") > -1 || d == H(t)) ? "active" : ""
                          , s = "<div class='li-content'><a class='left-menu-sticky' href='" + (t.ispage ? W(t) : "#") + "'>" + G(t) + "</a></div>"
                          , r = $('<li class=" level-' + t.levelCounter + " " + a + '"/>').append(s);
                        if ((window.location.pathname.replace(/\/\//g, "/").indexOf(o + "/") > -1 || d == H(t)) && r.addClass("selected"),
                        u < t.levelCounter) {
                            var l = $('<ul id="' + t.idName + '">');
                            l.append(r),
                            f = p,
                            p = l,
                            c ? (c.append(l),
                            e(c)) : i.append(r)
                        } else if (u > t.levelCounter && t.levelCounter > 0) {
                            f = c.closest("ul");
                            for (var h = 0; h < u - t.levelCounter; h++)
                                f = f.parent().parent();
                            f.append(r),
                            p = f
                        } else
                            p.append(r);
                        if (u = t.levelCounter,
                        c = r,
                        r.hasClass("selected")) {
                            var g = r.closest("ul").closest(".selected");
                            if (g.length && g.removeClass("selected"),
                            r.closest("ul").length && !r.closest("ul").hasClass("active")) {
                                var m = r.closest("li");
                                if (m.addClass("active"),
                                !m.parent().closest("li").hasClass("active")) {
                                    m.parent().closest("li").addClass("active")
                                }
                            }
                        }
                    }
                }),
                $(".content-menu-container").removeClass("content-menu-container").addClass("content-menu-container-three-levels"),
                o ? ($(".content-menu-container-three-levels").addClass("pin"),
                $(".content-menu-container-three-levels").removeClass("hidden"),
                $(".content-main").removeClass("col-sm-12"),
                $(".content-main").addClass("col-sm-8 col-sm-push-1")) : $(".content-menu-container-three-levels").removeClass("pin"),
                y() && ($(".content-menu-container-three-levels").addClass("col-sm-push-9"),
                $(".content-menu-container-three-levels").attr("dir", "rtl"),
                $(".content-main").removeClass("col-sm-push-1"),
                $(".content-main").addClass("col-sm-pull-3")),
                function() {
                    $(".content-menu-container-three-levels .li-content").each(function() {
                        var t = $(this)
                          , e = t.find("button.expandcollapse");
                        e.length && (e.hasClass("expand") && !e.closest("li").hasClass("active") ? (t.parent().find("> ul").hide(),
                        e.addClass("expand").html('<span class="fa fa-angle-down" aria-hidden="true"></span>')) : (t.parent().find("> ul").show(),
                        e.removeClass("expand").html('<span class="fa fa-angle-up" aria-hidden="true"></span>')))
                    }),
                    $(".content-menu-container-three-levels .li-content").click(function() {
                        var t = $(this);
                        btn = t.find("button.expandcollapse"),
                        btn.length && (btn.hasClass("expand") ? (t.closest("li").find("> ul").show(),
                        btn.removeClass("expand").html('<span class="fa fa-angle-up" aria-hidden="true"></span>')) : (btn.closest("li").find("> ul").hide(),
                        btn.addClass("expand").html('<span class="fa fa-angle-down" aria-hidden="true"></span>')))
                    })
                }())
            }
        }
        function j() {
            $("nav.menu-horizontal").accessibleMegaMenu({
                uuidPrefix: "accessible-megamenu",
                menuClass: "menu-horizontal",
                topNavItemClass: "nav-item",
                panelClass: "sub-menu-horizontal",
                panelGroupClass: "level2",
                hoverClass: "hover",
                focusClass: "focus",
                openClass: "open",
                openOnMouseover: !0
            }),
            $("nav.menu-horizontal").data("plugin_accessibleMegaMenu").init()
        }
        function z(t) {
            var e = $(".topnav-container ul.tabs");
            new Date;
            ctopNavItems = e,
            t.forEach(function(t, n) {
                if (t.isauthuseroption && !_spPageContextInfo.userId && (t.hideoption = !0),
                !t.hideoption && t.istopnav) {
                    var i = "<a href='" + W(t) + "'>";
                    t.navinactiveimage && (i += "<img src='" + t.navinactiveimage + "' alt='Icon image for " + t.title + "' />"),
                    t.navactiveimage && (i += "<img src='" + t.navactiveimage + "' alt='Icon image for " + t.title + "' class='active' />"),
                    i += G(t, tt),
                    i += "</a>";
                    var o = $('<li class="tab" />').append(i);
                    W(Z) == W(t) && o.addClass("active"),
                    e.append(o)
                }
            }),
            new Date
        }
        function H(t, e) {
            var n = e || tt;
            if ("en" != n && app.siteoptions.enableMultilingual) {
                var i = $.grep(t.languages, function(t, e) {
                    return t.code === n
                });
                return i.length > 0 ? i[0].options.langPath.relativepageurl : ""
            }
            return null != t && null != t.navpath && null != t.navpath.relativepageurl ? t.navpath.relativepageurl : ""
        }
        function W(t, e) {
            var n = e || tt;
            if ("en" != n && app.siteoptions.enableMultilingual) {
                var i = $.grep(t.languages, function(t, e) {
                    return t.code === n
                });
                return i.length > 0 ? i[0].options.langPath.relativefriendlyurl : ""
            }
            return null != t && null != t.navpath && null != t.navpath.relativefriendlyurl ? t.navpath.relativefriendlyurl : ""
        }
        function G(t, e) {
            var n = e || tt;
            if ("en" === n || !app.siteoptions.enableMultilingual)
                return t.title;
            if (t.languages) {
                var i = $.grep(t.languages, function(t, e) {
                    return t.code === n
                });
                return i.length > 0 ? i[0].options.langtext : t.title
            }
            return t.title
        }
        function Q(t) {
            function e(n, i) {
                n.forEach(function(n, a) {
                    n.id == i ? (n.isauthuseroption && !_spPageContextInfo.userId && (n.istabset = !1),
                    n.istabset ? o = n : e(t, n.parentid)) : n.childterms && e(n.childterms, i)
                })
            }
            var n = $(".tabs-container ul.tabs")
              , i = $(".select-tabs")
              , o = null;
            1 == n.length && (Z.istabset ? o = Z : e(t, Z.parentid),
            o && (o.childterms.forEach(function(t, e) {
                var o = !0;
                if (t.isauthuseroption && !_spPageContextInfo.userId && (o = !1),
                o) {
                    var a = V(t)
                      , s = a ? "active" : ""
                      , r = "<a href='" + W(t) + "'>" + G(t) + "</a>"
                      , l = $('<li class="tab ' + s + '" />').append(r);
                    n.append(l),
                    q(i, t, G(t), a)
                }
            }),
            i.change(function() {
                var t = $(this).find("option:selected")[0];
                window.location.href = t.value
            })),
            0 == n.children().length ? $(".tabs-container-mobile").removeClass("visible-xs") : n.find("li.active").length || n.find("li:first-child").addClass("active"))
        }
        function q(t, e, n, i) {
            t.append(new Option(n,W(e),i,i)),
            e.childterms && e.childterms.forEach(function(e, n) {
                var i = !0;
                if (e.isauthuseroption && !_spPageContextInfo.userId && (i = !1),
                i) {
                    var o = "- " + G(e);
                    q(t, e, o, !1)
                }
            })
        }
        function V(t) {
            function e(t) {
                if (t.childterms)
                    for (var i = 0; i < t.childterms.length; i++) {
                        var o = t.childterms[i];
                        "" !== W(o) && (n = W(Z).indexOf(W(o)) > -1),
                        n ? i = t.childterms.length : !n && Z.childterms && e(o)
                    }
            }
            var n = W(Z).indexOf(W(t)) > -1;
            return !n && t.childterms && e(t),
            n
        }
        function J(t, e) {
            if (!e.isdeprecated)
                if (e.childterms) {
                    var n = "<a href='" + W(e) + "' " + (e.ispage ? "" : "attr-placeholder='true'") + ">" + G(e) + "</a>"
                      , i = $("<li/>").append(n);
                    t.append(i);
                    var o = $("<ul/>");
                    e.istabset || e.leftnav || $.each(e.childterms, function(t, e) {
                        e.isauthuseroption && !_spPageContextInfo.userId && (e.hideoption = !0),
                        e.hideoption || (i.addClass("has-sub-menu"),
                        o.hasClass("sub-menu") || (o.addClass("sub-menu"),
                        i.append(o)),
                        J(o, e))
                    })
                } else {
                    var n = "<a href='" + W(e) + "' " + (e.ispage ? "" : "attr-placeholder='true'") + ">" + G(e) + "</a>"
                      , i = $("<li/>").append(n);
                    t.append(i)
                }
        }
        function Y(t, e) {
            if (!e.isdeprecated) {
                var n = "<a href='" + W(e) + "'>" + G(e) + "</a>"
                  , i = $("<li/>").append(n);
                if (t.append(i),
                e.childterms) {
                    var o = _.filter(e.childterms, function(t) {
                        return !t.hideoption
                    });
                    !e.istabset && o.length > 0 && i.addClass("navigation-node has-sub-menu arrow")
                }
            }
        }
        function K() {
            "1" !== $("#MSOLayout_InDesignMode").val() && X()
        }
        function X() {
            var t = '<span class="beta-badge"><a href="/Pages/Conditions-of-use.aspx" target="_blank">beta</a></span>'
              , e = $(".hero-block-content-inner h1:first");
            if (e && e.length > 0)
                e.append(t);
            else {
                var n = $(".section-title + h1");
                n && n.length > 0 && n.html(n.text().trim() + t)
            }
        }
        var Z = {}
          , tt = "en"
          , et = !0
          , nt = !1;
        return {
            init: function(t) {
                I(t),
                r(),
                $("#skip-to-nav").on("click", function() {
                    if ("0px" == $("#skip-to-nav").css("top"))
                        return $("nav.menu-horizontal").length & $("nav.menu-horizontal").is(":visible") ? ($("nav.menu-horizontal > ul > li:first-child a").focus(),
                        !1) : (o(),
                        !1)
                }),
                setTimeout(function() {
                    $("input[type=checkbox], input[type=radio]").on("keydown", function(t) {
                        13 === (t.which || t.keyCode) && t.preventDefault()
                    })
                }, 2e3)
            },
            getRelativeFriendlyUrl: function(t, e) {
                return e ? W(t, e) : W(t)
            }
        }
    }(),
    $(document).ready(function() {
        l(),
        app.menu.init(function() {})
    }),
    $(document).ready(function() {
        ($(".home-page").length || $(".portfolio-page").length) && $(".footer-feedback").hide()
    })
}
, function(t, e) {
    Type.registerNamespace("app.config"),
    app.config = function() {
        function t() {
            var t = app.siteoptions.site
              , e = new Array({
                Product: "Internet.MasterPage",
                Key: "BetaMessage"
            },{
                Product: "Internet.MasterPage",
                Key: "ExternalPopupMessage"
            },{
                Product: "Internet.Search",
                Key: "CustomSearch"
            },{
                Product: "Internet.Search",
                Key: "PopularSearchTermsJson"
            },{
                Product: "Internet.Search",
                Key: "SearchUrlMapJson"
            },{
                Product: "Internet.Search",
                Key: "SearchContentSource"
            },{
                Product: "Internet.News",
                Key: "NewsContentSource"
            },{
                Product: "Internet.News",
                Key: "NewsCarouselMaxCount"
            },{
                Product: "Internet.GoogleCaptcha",
                Key: "ReCaptchaScript"
            },{
                Product: "Internet.Clickbot",
                Key: "ClickbotConfig"
            },{
                Product: "Internet.Clickbot",
                Key: "ClickbotStrings"
            });
            "abf" == t && e.push({
                Product: "Internet.MasterPage",
                Key: "AbnLookup"
            });
            var i = {
                settingsRequest: e
            };
            $.ajax({
                type: "POST",
                url: _spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/api/Data.aspx/GetConfigSettings",
                data: "string" == typeof i ? i : JSON.stringify(i),
                headers: {
                    Accept: "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    "X-RequestDigest": $("#__REQUESTDIGEST").val()
                },
                success: function(t) {
                    t.d.success ? n(t.d.data) : console.error(t.d.data.internalError)
                },
                dataType: "json",
                async: !1
            })
        }
        function e(e, n) {
            if (app.siteoptions.useSiteDataScript) {
                var i = app.sitedata.configItems;
                for (var o in i)
                    if (i[o].product === e && i[o].key === n)
                        return i[o].value
            } else {
                var i;
                if (void 0 !== typeof Storage) {
                    void 0 === sessionStorage.configItems && t(),
                    i = JSON.parse(sessionStorage.configItems);
                    for (var o in i)
                        if (i[o].product === e && i[o].key === n)
                            return i[o].value
                }
            }
        }
        function n(t) {
            void 0 !== typeof Storage && (sessionStorage.configItems = JSON.stringify(t))
        }
        return {
            getConfigByKey: function(t, n) {
                return e(t, n)
            }
        }
    }()
}
, function(t, e) {
    Type.registerNamespace("app.versioning"),
    app.versioning = function() {
        var t;
        return getItemVersions = function(e, n, i) {
            t = [];
            var o = e + "/_layouts/versions.aspx?list=" + n + "&ID=" + i;
            $.get(o, function(t) {
                processVersions(t);
                $("body").append('<div id="version-history"><div class="versions-filter row"><div class="col-md-4"><label for="date-from">From</label><input type="date" id="date-from" class="form-control" name="from"></div><div class="col-md-4"><label for="date-to">To</label><input type="date" id="date-to" class="form-control" name="from"></div><div class="col-md-4"><button class="btn btn-primary" onclick="app.versioning.renderVersions()">Submit</button></div></div><div class="version-results"></div></div>'),
                SP.UI.ModalDialog.showModalDialog({
                    html: document.getElementById("version-history"),
                    title: "Version History",
                    allowMaximize: !1,
                    showClose: !0,
                    autoSize: !0,
                    width: 900,
                    height: 800
                }),
                filterAndRender(6)
            })
        }
        ,
        getVersionAttributes = function(t, e) {
            var n = _spPageContextInfo.siteAbsoluteUrl + "/Pages/Forms/DispForm.aspx?ID=" + t + "&VersionNo=" + e;
            $.get(n, function(t) {
                var n = getSchemaFromMarkup(t)
                  , i = $("<table />")
                  , o = buildSchemaList(i, JSON.parse(n))
                  , a = document.querySelectorAll('input[id$="_PageSchemaHiddenField_Input"]')[0].value
                  , s = $("<table />")
                  , r = buildSchemaList(s, JSON.parse(a));
                console.log(JSON.parse(a));
                var l = htmldiff(o.prop("outerHTML"), r.prop("outerHTML"))
                  , c = $("<div id='list-container'></div>");
                c.append(l),
                $("body").append(c),
                SP.UI.ModalDialog.showModalDialog({
                    html: document.getElementById("list-container"),
                    title: "Version " + e,
                    allowMaximize: !1,
                    showClose: !0,
                    autoSize: !0,
                    width: 1e3,
                    height: 800
                })
            })
        }
        ,
        getSchemaFromMarkup = function(t) {
            var e = "";
            return $(t).find("table.ms-formtable").find("tr").each(function() {
                if ("Page Schema" == $(this).find("td:eq(0)").text().trim()) {
                    var t = $(this).find("td:eq(1)");
                    e = t.text().trim()
                }
            }),
            e
        }
        ,
        buildSchemaList = function(t, e) {
            for (var n in e)
                if (e.hasOwnProperty(n))
                    if ("object" == typeof e[n]) {
                        var i = n.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
                          , o = t.find("tr:last").hasClass("json-parent-obj");
                        o ? t.find("tr:last").find("b").append(" > " + i) : (!Array.isArray(e[n]) || Array.isArray(e[n]) && e[n].length > 0) && t.append('<tr class="json-parent-obj"><td colspan="2"><p><b>' + i + "</b></p></td></tr>"),
                        t = buildSchemaList(t, e[n])
                    } else {
                        var i = $("<div>").html(e[n]).text()
                          , a = n.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
                        "id" != a && "true" != i && "false" != i && t.append('<tr><td width="200"><p>' + a + "</p></td><td><p>" + i + "</p></td></tr>")
                    }
            return t
        }
        ,
        filterAndRender = function(e) {
            var n = ""
              , i = document.querySelectorAll('input[id$="_PageSchemaHiddenField_Input"]').length > 0
              , o = []
              , a = new Date($("#date-from").val())
              , s = new Date($("#date-to").val());
            o = "" == $("#date-from").val() || "" == $("#date-to").val() ? t.slice(0, e) : t.filter(function(t) {
                return t.date >= a && t.date <= s
            });
            var r = "<div id='version-history'><table class='table'><thead><tr><th>Version</th><th>Date</th><th>Modified By</th><th></th><th></th><th></th></tr></thead><tbody>";
            o.forEach(function(t, o) {
                var a = "<tr><td><a href='" + t.url + '\' target="_blank">' + t.version + "</a></td><td>" + t.dateText + "</td><td>" + t.modifiedBy + "</td>";
                1 == o && (n = t.url),
                o > 0 && o < e ? (a = a + "<td><button onclick=\"app.versioning.comparePage('" + t.url + "')\">Compare Page</button></td>",
                i ? a = a + "<td><button onclick=\"app.versioning.compareAttr('" + t.url + "')\">Compare Schema</button></td>" : a += "<td></td>",
                a = a + "<td><button onclick=\"app.versioning.restore('" + n + "', '" + t.version + "')\">Restore</button></td></tr>") : a += "<td>Current Version</td></tr>",
                r += a
            }),
            r += "</tbody></table></div>",
            $(".version-results").empty(),
            $(".version-results").append(r)
        }
        ,
        processVersions = function(e) {
            $(e).find("table.ms-settingsframe").find("> tbody > tr").each(function(e) {
                if (e > 1) {
                    var n = $(this)
                      , i = (n.next(),
                    n.find("td:first").html().trim());
                    if (i.length > 0) {
                        var o = n.find("td:eq(1)").find("a")
                          , a = o.text()
                          , s = getDateFromString(a)
                          , r = o.attr("href")
                          , l = n.find("td:eq(4)").find("a").text();
                        t.push({
                            version: i,
                            date: s,
                            dateText: a,
                            url: r,
                            modifiedBy: l
                        })
                    }
                }
            })
        }
        ,
        getDateFromString = function(t) {
            var e = t.trim().split(" ")[0]
              , n = e.split("/")
              , i = n[2] + "-" + n[1] + "-" + n[0];
            return new Date(i)
        }
        ,
        restoreVersion = function(t, e) {
            clientContext = new SP.ClientContext;
            var n = clientContext.get_web();
            oFile = n.getFileByServerRelativeUrl(t),
            oFile.checkOut(),
            clientContext.load(oFile),
            clientContext.executeQueryAsync(function() {
                oFile.get_versions().restoreByLabel(e),
                clientContext.load(oFile),
                clientContext.executeQueryAsync(function() {
                    alert("Successfully reverted version " + e),
                    window.location.reload()
                }, function(t, e) {
                    alert("Error:- " + e.get_message())
                })
            }, function(t, e) {
                alert("Error:- " + e.get_message())
            })
        }
        ,
        {
            getVersions: function() {
                SP.SOD.loadMultiple(["sp.js", "SP.UI.Dialog.js"], function() {
                    var t = _spPageContextInfo.webAbsoluteUrl
                      , e = _spPageContextInfo.pageListId
                      , n = _spPageContextInfo.pageItemId;
                    getItemVersions(t, e, n)
                })
            },
            renderVersions: function() {
                filterAndRender(100)
            },
            comparePage: function(t) {
                SP.UI.ModalDialog.showModalDialog({
                    url: t,
                    title: "Version History",
                    allowMaximize: !1,
                    showClose: !0,
                    autoSize: !0,
                    width: 2e3
                }),
                setTimeout(function() {
                    $("iframe:last").contents().find(".footer-container").remove();
                    var t = $("iframe:last").contents().find("#DeltaPlaceHolderMain")
                      , e = $("#DeltaPlaceHolderMain").prop("outerHTML")
                      , n = htmldiff(t.prop("outerHTML"), e);
                    $("iframe:last").contents().find("main").empty().append(n)
                }, 5e3)
            },
            compareAttr: function(t) {
                var e = _spPageContextInfo.pageItemId
                  , n = t.split("=")[1];
                getVersionAttributes(e, n)
            },
            restore: function(t, e) {
                if (confirm("Are you sure you want to restore version " + e + " ?")) {
                    var n = t.indexOf("/Pages")
                      , i = t.indexOf("?")
                      , o = t.substring(n, i);
                    restoreVersion(o, e.toString())
                }
            }
        }
    }()
}
, function(t, e) {
    Type.registerNamespace("app.plugins"),
    window.app.plugins.datepicker = function() {
        return {
            init: function() {
                $.fn.datepicker && "1" !== $("#MSOLayout_InDesignMode").val() && $(".datepicker").datepicker({
                    showOn: "button",
                    buttonImageOnly: !1,
                    changeMonth: !0,
                    changeYear: !0,
                    dateFormat: "dd/mm/yy",
                    buttonText: "<i class='fa fa-calendar'></i><span class='screen-reader-text'>Select a date from the date picker</span>"
                })
            }
        }
    }(),
    app.sp.ui.add_load(window.app.plugins.datepicker.init)
}
, function(t, e) {
    Type.registerNamespace("app.plugins"),
    window.app.plugins.tooltip = function() {
        return {
            init: function() {
                $(".tooltip").tooltip({
                    position: {
                        my: "center bottom-10",
                        at: "center top",
                        using: function(t, e) {
                            $(this).css(t),
                            $("<div>").addClass("tooltip-arrow").addClass(e.vertical).addClass(e.horizontal).appendTo(this)
                        }
                    }
                })
            }
        }
    }(),
    _spBodyOnLoadFunctionNames.push("window.app.plugins.tooltip.init")
}
, function(t, e) {
    Type.registerNamespace("app.plugins"),
    window.app.plugins.url = function() {
        function t() {
            return null != $("[data-getfilesize]") && $("[data-getfilesize]").length > 0
        }
        function e() {
            return null != $("a[data-hashvalue]") && $("a[data-hashvalue]").length > 0
        }
        function n(t) {
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetSPFileSize", {
                urls: t
            }, null, function(t) {
                if (t.d.success) {
                    var e = t.d.data;
                    $("[data-getfilesize]").each(function(t, n) {
                        var o = $(n).attr("data-getfilesize");
                        if (null != o && "" != o) {
                            var a = i(e, o);
                            if (null != a && "" != a) {
                                var s = $(n).text() + " (" + a + ")";
                                $(n).text(s)
                            }
                        }
                    })
                }
            }, function(t) {
                console.log(t)
            })
        }
        function i(t, e) {
            for (var n = 0; n < t.length; n++)
                if (t[n].url == encodeURI(e))
                    return t[n].size
        }
        function o() {
            return null != $("a.leave-site") && $("a.leave-site").length > 0
        }
        function a() {
            $("body").on("click", "a.leave-site", function() {
                if (0 == confirm("You are now leaving the Department of Home Affairs' website."))
                    return !1
            })
        }
        return {
            init: function() {
                if ("1" !== $("#MSOLayout_InDesignMode").val()) {
                    if (t()) {
                        var i = [];
                        $("[data-getfilesize]").each(function(t, e) {
                            var n = $(e).attr("data-getfilesize");
                            null != n && "" != n && i.push(encodeURI(n))
                        }),
                        n(i)
                    }
                    e() && $("a[data-hashvalue]").each(function(t, e) {
                        var n = $(e).attr("data-hashvalue");
                        $(e).attr("href", $(e).attr("href") + "#" + n)
                    }),
                    o() && a()
                }
            },
            getParameterByName: function(t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var e = new RegExp("[\\?&]" + t + "=([^&#]*)")
                  , n = location.href.split("?")
                  , i = "";
                return n.length > 1 && (i = "?" + n[1]),
                results = e.exec(i),
                null == results ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
            },
            getParameterByNameFromUrlString: function(t, e) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + t + "=([^&#]*)")
                  , i = e.split("%26")
                  , o = "";
                return i.length > 1 && (o = "?" + i[1]),
                results = n.exec(o),
                null == results ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
            },
            getQueryStringParams: function(t, e) {
                var n = window.location.toString().split("?")[1];
                if (void 0 != n)
                    for (var i = n.split("&"), o = 0; o < i.length; o++) {
                        var a = i[o].split("=");
                        if (a[0] == t)
                            return a[1];
                        if (e && a[0].toLowerCase() == t)
                            return a[1]
                    }
                return ""
            }
        }
    }(),
    "undefined" != typeof angular ? angular.element(function() {
        window.setTimeout(window.app.plugins.url.init, 200)
    }) : _spBodyOnLoadFunctions.push(window.app.plugins.url.init)
}
, function(t, e) {
    function n() {
        $(".data-haurltarget").click(function(t) {
            t.preventDefault();
            var e = $(this).attr("title");
            window.open(e)
        })
    }
    function i() {
        "immi" !== app.siteoptions.site && "abf" !== app.siteoptions.site || (localStorage.getItem("showBetaPopup") ? $("#beta-popup").removeClass("open") : ($("#betaPopMessage").html(app.config.getConfigByKey("Internet.MasterPage", "BetaMessage").trim()),
        $("#beta-popup").addClass("open"),
        localStorage.setItem("showBetaPopup", !1))),
        $(".popup-content").prop("tabindex", "-1"),
        $(".popup-close-btn,.btn-dismiss").click(function(t) {
            t.preventDefault(),
            $(this).closest(".popup-container").fadeOut("fast")
        }),
        $(".popup-trigger").click(function(t) {
            t.preventDefault();
            var e = $(this).attr("href");
            window.open(e)
        }),
        $(".popup-container").click(function() {
            $(this).fadeOut("fast")
        }),
        $(".popup-content").click(function(t) {
            t.stopPropagation()
        }),
        $("#external-link-popup").on("popup-opened", function(t, e) {
            $("#externalPopMessage").html(app.config.getConfigByKey("Internet.MasterPage", "ExternalPopupMessage").trim()),
            $(this).find(".link-clone").prop("href", e.href)
        })
    }
    $(document).ready(function() {
        i(),
        $("#tile-group-selector").on("change", function() {
            i()
        }),
        setTimeout(n, 2e3)
    })
}
, function(t, e) {
    function n() {
        var t = $(".video-container")
          , e = $(".transcript-toggle-btn")
          , n = $(".collapse")
          , i = $(".overlay")
          , o = t.attr("data-id");
        if (o) {
            var a = "https://www.youtube.com/embed/" + t.attr("data-id") + "?autoplay=1"
              , s = "https://img.youtube.com/vi/" + o + "/0.jpg"
              , r = !1;
            i.attr("style", "background-image: url(" + s + ");"),
            t.on("click", function() {
                i.removeClass("in"),
                setTimeout(function() {
                    i.addClass("hidden")
                }, 600),
                t.append($('<iframe width="560" height="315" src="' + a + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'))
            })
        }
        e.on("click", function() {
            r = !r,
            $(this).toggleClass("toggled", r),
            $(this).find("span").text(r ? $(this).text().replace("See", "Hide") : $(this).text().replace("Hide", "See")),
            n.toggleClass("in", r)
        })
    }
    function i() {
        setTimeout(function() {
            $(".video-showcase .slide-section").length && ($("#videoModal").appendTo("body"),
            $(".slider-items .video-items").slick({
                prevArrow: ".slide-controls .prevArrow",
                nextArrow: ".slide-controls .nextArrow",
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }))
        }, 1e3)
    }
    function o() {
        setTimeout(function() {
            $(".hybrid-playlist-showcase .slide-section").length && $(".slider-items .video-items").slick({
                prevArrow: ".slide-controls .prevArrow",
                nextArrow: ".slide-controls .nextArrow",
                infinite: !1,
                slidesToShow: 6,
                slidesToScroll: 6,
                responsive: [{
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }]
            })
        }, 2e3)
    }
    $(document).ready(function() {
        $(".video-player-single").length && n(),
        i(),
        o(),
        $(".close").click(function(t) {
            $("#videoModal iframe").attr("src", "")
        })
    }),
    Type.registerNamespace("app.video"),
    app.video.downloadVideo = function(t, e) {
        var n = new XMLHttpRequest;
        n.open("GET", t),
        n.responseType = "blob",
        n.onload = function() {
            var t = n.response;
            if (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
                window.navigator.msSaveBlob(t, e);
            else {
                const i = window.URL.createObjectURL(new Blob([t]))
                  , o = document.createElement("a");
                o.href = i,
                o.setAttribute("download", e),
                document.body.appendChild(o),
                o.click(),
                document.body.removeChild(o)
            }
        }
        ,
        n.send()
    }
}
, function(t, e) {
    !function() {
        var t = window.navigator.userAgent
          , e = t.indexOf("MSIE")
          , n = t.indexOf("Trident");
        (e > 0 || n > 0) && (document.body.className += " ie")
    }()
}
, function(t, e) {
    function n() {
        "1" !== document.getElementById("MSOLayout_InDesignMode").value && ($(".hero-block.pad-bottom").length && $(".hero-bg").addClass("pad-bottom"),
        $(".tabs-container").length && i(),
        $(".tabs-container-mobile").length && o())
    }
    function i() {
        if (!(window.innerWidth < 768)) {
            var t = $("#s4-workspace")
              , e = $(".tabs-container .tabs")
              , n = ($(".tabs-container"),
            e.offset().top - t.offset().top + t.scrollTop())
              , i = (e.height(),
            0);
            $("#s4-workspace").on("scroll", function() {
                var t = $("#s4-workspace").scrollTop() - $("#s4-workspace").offset().top;
                t > n && (e.addClass("fixed"),
                t > i ? e.addClass("up") : e.removeClass("up"),
                i = t),
                t < n && e.removeClass("fixed")
            })
        }
    }
    function o() {
        function t(t) {
            n = void 0 !== t ? Boolean(t) : !n,
            e.toggleClass("toggled", n)
        }
        var e = $(".tabs-container-mobile .select-wrapper");
        a(e);
        var n = !1;
        e.on("click", function(e) {
            e.stopPropagation(),
            t()
        }),
        $(window).on("click", function() {
            t(!1)
        })
    }
    function a(t) {
        t.find(".child-tab").toArray().map(function(t) {
            return $(t)
        }).forEach(function(t) {
            var e = t.text()
              , n = Number(t.attr("data-level")) || 0;
            t.html("- ".repeat(n) + e)
        })
    }
    $(document).ready(function() {
        n()
    })
}
, function(t, e) {
    Type.registerNamespace("app.smoothScroll"),
    app.smoothScroll = {
        smoothScroll: function(t) {
            $("#s4-workspace").animate({
                scrollTop: t
            }, 800)
        },
        smoothScrollToId: function(t) {
            var e = $("#s4-workspace")
              , n = $("#" + t)
              , i = n.offset().top - e.offset().top + e.scrollTop();
            this.smoothScroll(i)
        },
        smoothScrollToElement: function(t, e) {
            e || (e = 0);
            var n = $("#s4-workspace")
              , i = t.offset().top - n.offset().top + n.scrollTop();
            this.smoothScroll(i - e),
            t.trigger("click")
        },
        initSmoothScroll: function() {
            var t = this
              , e = $('a[href*="#"]').not('[href="#"]').not('[href="#0"]');
            e.length && e.click(function(e) {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var n = $(this.hash);
                    if (n = n.length ? n : $("[name=" + this.hash.slice(1) + "]"),
                    n.length) {
                        e.preventDefault();
                        var i = 120;
                        $("body").hasClass("ie") && (i = 220),
                        t.smoothScrollToElement(n, i)
                    }
                }
            })
        }
    },
    $(document).ready(function() {
        app.smoothScroll.initSmoothScroll()
    })
}
, function(t, e) {
    jQuery(document).ready(function(t) {
        if ("portfolio" === app.siteoptions.site) {
            t(".home-page").length && (t("header").addClass("home"),
            t("#s4-bodyContainer").addClass("home"),
            t("body.v2").length || t(".home-page").css("padding-top", "80px")),
            t(".search-page").length && (t("header").addClass("searchpage"),
            t("#s4-bodyContainer").addClass("searchpage")),
            t(".footer-container, .other-websites, .agencies-footer, .promotional-pages, .toplinks-container").each(function() {
                $this = t(this),
                $this.html($this.html().replace(/\u200B/g, ""))
            });
            var e = t(".other-websites");
            if (e.length) {
                e.find("ul li .box-container img").each(function() {
                    var e = t(this);
                    e.parent().css("background-image", "url(" + e.attr("src") + ")"),
                    e.remove()
                });
                var n = e.find(".styled-hover-links ul.list li:first-child .box-container")
                  , i = e.find(".styled-hover-links ul.list li:not(:first-child) .item-link");
                i.on("mouseenter, focusin", function(t) {
                    n.hide()
                }),
                i.on("mouseleave, focusout", function(t) {
                    n.show()
                }),
                t(".other-websites + br").remove(),
                t(".other-websites br").remove(),
                t(".other-websites").html(t(".other-websites").html().replaceAll("&nbsp;", "")),
                t(".agencies-footer + br").remove(),
                t(".agencies-footer br").remove(),
                t(".agencies-footer").html(t(".agencies-footer").html().replaceAll("&nbsp;", "")),
                t(".home-page > *").each(function() {
                    var e = t(this);
                    "BR" == e[0].nodeName.toUpperCase() && e.remove()
                })
            }
        }
    })
}
, function(t, e) {
    Type.registerNamespace("app.carousel"),
    app.carousel = function() {
        function t() {
            var t = new Date
              , o = []
              , a = document.querySelector("#news-carousel-json").textContent.trim();
            if (a.length > 0) {
                var s = JSON.parse(a)
                  , r = _.filter(s, function(t) {
                    return t.location.toLowerCase() === app.siteoptions.site.toLowerCase()
                });
                if (r.length > 0) {
                    var l = []
                      , o = _.map(r[0].data, function(t) {
                        return t.ArticleDate = moment(t.ArticleDate, "DD/MM/YYYY"),
                        t.CarouselExpiry = moment(t.CarouselExpiry, "YYYY-M-D"),
                        t
                    });
                    if (o.forEach(function(e) {
                        var n = !!_spPageContextInfo.userId;
                        e.CarouselExpiry >= t && (n || !n && "published" === e.Status) && l.push(e)
                    }),
                    $(".news-slider").length)
                        if (l.length >= 3) {
                            var c = app.config.getConfigByKey("Internet.News", "NewsCarouselMaxCount")
                              , d = c ? +c : 6;
                            i(l.slice(0, d))
                        } else
                            i(e(l, o, 3));
                    if ($(".news-updates").length)
                        if (l.length >= 3)
                            n(l.slice(0, 3));
                        else {
                            var u = e(l, o, 3);
                            u.length > 3 && (u = u.slice(0, 3)),
                            n(u)
                        }
                }
            }
        }
        function e(t, e, n) {
            for (var i = 0, o = _.filter(e, function(t) {
                return "published" === t.Status
            }), a = _.orderBy(o, ["ArticleDate"]).reverse(), s = t; i < n; ) {
                var r = a[i];
                if (!$.isEmptyObject(r)) {
                    _.find(t, ["Id", r.Id]) || s.push(r)
                }
                i++
            }
            return s
        }
        function n(t) {
            if ($(".archive-link").attr("href", s.archiveUrl),
            0 == t.length)
                return void $(".news-updates").remove();
            var e = $(".news-updates .news-items");
            e.length && (t.forEach(function(t, n) {
                var i = _.find(s.othercontentsource, function(t) {
                    return t.title.toLowerCase() === app.siteoptions.site.toLowerCase()
                })
                  , o = $('<div class="news-item"><span class="image-parent"><img class="img-responsive" alt="" src=""/></span><div class="news-text"><span class="source"></span><span class="date"></span><div class="title-summary"><a class="news-link" href=""><span class="title"></span></a> <span class="summary"></span></div><a class="read-more" href="">Read more <span class="icon-arrow-right" aria-hidden="false"></span></a></div></div>');
                if (t.Source && "" != t.Source ? o.find(".source").text(t.Source) : o.find(".source").remove(),
                o.find(".title").text(t.Title),
                o.find(".img-responsive").attr("src", s.maincontentsource + "/" + t.ImageUrl + "?RenditionID=" + s.carouselItemRenditionId),
                o.find(".date").text(t.ArticleDate.format("DD MMM YYYY")),
                $newslink = o.find(".news-link, .read-more"),
                t.NewsRedirectLink) {
                    if (0 == $("#redirectStyle").length) {
                        $("head").append("<style type='text/css' id='redirectStyle'>.redirect:after{content:' \\21ac';}</style>")
                    }
                    $newslink.attr("href", t.NewsRedirectLink.trim()),
                    $newslink.attr("title", "Redirect link"),
                    $newslink.attr("target", "_blank"),
                    $newslink.find(".title").addClass("redirect")
                } else {
                    var a = _spPageContextInfo.userId ? "authurl" : "url";
                    $newslink.attr("href", i[a] + s.newsItemUrl + t.Id)
                }
                o.find(".summary").text(t.Summary),
                0 == n ? ($clone = o.clone(),
                e.find(".main-item").append(o),
                e.find(".read-more").addClass("btn btn-primary"),
                $clone.find(".image-parent, .summary").remove(),
                e.find(".secondary-items").append($clone)) : (o.find(".image-parent, .summary").remove(),
                e.find(".secondary-items").append(o))
            }),
            1 == t.length && (e.find(".main-item").css("width", "100%"),
            e.find(".secondary-items").remove()))
        }
        function i(t) {
            if ($(".archive-link").attr("href", s.archiveUrl),
            0 == t.length)
                return void $(".news.slide-section").remove();
            t.forEach(function(t) {
                var e = _.find(s.othercontentsource, function(t) {
                    return t.title.toLowerCase() === app.siteoptions.site.toLowerCase()
                })
                  , n = $("<div/>").html(r);
                if (n.find(".title").text(t.Title),
                n.find(".img-responsive").attr("src", s.maincontentsource + "/" + t.ImageUrl + "?RenditionID=" + s.carouselItemRenditionId),
                n.find(".date").text(t.ArticleDate.format("DD MMM YYYY")),
                $newslink = n.find(".news-link"),
                t.NewsRedirectLink) {
                    if (0 == $("#redirectStyle").length) {
                        $("head").append("<style type='text/css' id='redirectStyle'>.redirect:after{content:' \\21ac';}</style>")
                    }
                    $newslink.attr("href", t.NewsRedirectLink.trim()),
                    $newslink.attr("title", "Redirect link"),
                    $newslink.attr("target", "_blank"),
                    $newslink.find(".title").addClass("redirect")
                } else {
                    var i = _spPageContextInfo.userId ? "authurl" : "url";
                    $newslink.attr("href", e[i] + s.newsItemUrl + t.Id)
                }
                n.find(".sub-title").text(t.Summary),
                $(".news-slider").append(n)
            }),
            o()
        }
        function o() {
            var t = $(".news-slider")
              , e = t.hasClass("show-two");
            t.length > 0 && t.slick({
                prevArrow: ".news-slide-controls .prevArrow",
                nextArrow: ".news-slide-controls .nextArrow",
                infinite: !1,
                slidesToShow: e ? 2 : 3,
                slidesToScroll: e ? 2 : 3,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: e ? 1 : 2,
                        slidesToScroll: e ? 1 : 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        }
        var a = window.app.config.getConfigByKey("Internet.News", "NewsContentSource")
          , s = a ? JSON.parse(a.trim()) : {}
          , r = '<div class="news-col"><div class="news-item"><a class="news-link" href=""><span class="image-parent"><img class="img-responsive" alt="" src=""/></span><span class="news-text"><span class="date"></span><span class="title"></span><span class="sub-title"></span></span></a> </div></div>';
        return {
            init: function() {
                t()
            }
        }
    }(),
    $(document).ready(function() {
        $(".news-slider, .news-updates").length > 0 && app.carousel.init()
    })
}
, function(t, e) {
    function n() {
        $(".slide-section").each(function() {
            var t = $(this)
              , e = t.find(".slide-controls .prevArrow")
              , n = t.find(".slide-controls .nextArrow")
              , i = t.find(".js-slider")
              , o = i.data("rows") ? i.data("rows") : 1;
            i.slick({
                prevArrow: e,
                nextArrow: n,
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: o,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }
    $(document).ready(function() {
        $(".slide-section .js-slider").length && n()
    })
}
, function(t, e) {
    Type.registerNamespace("app.portfoliofunctions"),
    app.portfoliofunctions = function() {
        function t(t) {
            if (t && $(".portfolio-functions").length) {
                e() && $(".portfolio-functions").attr("dir", "rtl");
                var i = s();
                if (null != i)
                    $(".portfolio-functions-list").html(i);
                else {
                    var o = (new Date,
                    !1);
                    i = $(".portfolio-functions-list"),
                    a(i.html()),
                    new Date,
                    t.forEach(function(t, e) {
                        o || t.isportfoliomenu && (n(i, t),
                        o = !0)
                    })
                }
                setTimeout(function() {
                    r()
                }, 200)
            }
        }
        function e() {
            return !!$("body").hasClass("right-to-left")
        }
        function n(t, e) {
            l = 0,
            $(".portfolio-functions-title").html(e.title),
            e.childterms.forEach(function(e, n) {
                e.isauthuseroption && !_spPageContextInfo.userId && (e.hideoption = !0),
                e.hideoption || (l += 1,
                i(t, e))
            })
        }
        function i(t, e) {
            $templateL1 = $('<div class="function-item"><a href="#" class="hover-box"><div class="image-parent"><img src="" alt="" /></div><span class="title"></span></a><div class="sub-menu"></div></div> '),
            $templateL1.find(".image-parent img").attr("src", e.navactiveimage),
            $templateL1.find("a.hover-box .title").prepend(e.title);
            var n = !(!e.navpath.externalpageurl || "" == e.navpath.externalpageurl)
              , i = $templateL1.find("a.hover-box");
            i.attr("href", e.ispage ? n ? e.navpath.externalpageurl : app.menu.getRelativeFriendlyUrl(e) : "#"),
            n && (i.attr("target", "_blank"),
            i.addClass("externalurl")),
            e.childterms && (o($templateL1, e),
            i.click(function() {
                var t = $(this);
                if ($(window).width() <= 768)
                    return t.parent().addClass("collapsed"),
                    !1
            })),
            t.append($templateL1)
        }
        function o(t, e) {
            var n = $('<ul class="level2" ></ul>')
              , i = !(!e.navpath.externalpageurl || "" == e.navpath.externalpageurl);
            if (e.ispage) {
                var o = $('<a class="title" href="' + (i ? e.navpath.externalpageurl : app.menu.getRelativeFriendlyUrl(e)) + '">' + e.title + ' <span class="icon-arrow-right" aria-hidden="false"></span></a>');
                t.find(".sub-menu").append(o),
                i && (o.attr("target", "_blank"),
                o.addClass("externalurl"))
            } else
                t.find(".sub-menu").append('<span class="title">' + e.title + "</span>");
            e.childterms.forEach(function(t, e) {
                if (t.isauthuseroption && !_spPageContextInfo.userId && (t.hideoption = !0),
                !t.hideoption) {
                    var i = $("<li></li>");
                    if (t.ispage) {
                        var o = $("<a>" + t.title + ' <span class="icon-arrow-right" aria-hidden="false"></span></a>')
                          , a = !(!t.navpath.externalpageurl || "" == t.navpath.externalpageurl);
                        o.attr("href", t.ispage ? a ? t.navpath.externalpageurl : app.menu.getRelativeFriendlyUrl(t) : "#"),
                        a && (o.attr("target", "_blank"),
                        o.addClass("externalurl")),
                        i.append(o)
                    } else {
                        var s = $("<span>" + t.title + "</span>");
                        i.append(s)
                    }
                    n.append(i)
                }
            }),
            n.find("li").length && t.find(".sub-menu").append(n)
        }
        function a(t) {
            void 0 !== typeof Storage && (sessionStorage.functionsElement = t)
        }
        function s() {
            var t;
            if (void 0 !== typeof Storage && sessionStorage.functionsElement) {
                if ("" == sessionStorage.functionsElement)
                    return t;
                t = sessionStorage.functionsElement
            }
            return t
        }
        function r() {
            var t = $(".portfolio-functions .portfolio-functions-list");
            t.length > 0 && (t.find(".function-item").length ? t.slick({
                prevArrow: ".news-slide-controls .prevArrow",
                nextArrow: ".news-slide-controls .nextArrow",
                infinite: !1,
                slidesToShow: 7,
                slidesToScroll: 3,
                rows: 1,
                dots: !0,
                responsive: [{
                    breakpoint: 2e3,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !1
                    }
                }]
            }) : $(".portfolio-functions").hide())
        }
        var l;
        return {
            init: function(e) {
                t(e),
                $(".portfolio-functions-slider .hover-box").bind("mouseover", function() {
                    var t = $(this);
                    t.closest(".slick-active").length && t.focus()
                }),
                $(".portfolio-functions-slider .hover-box").unbind("click, focus").bind("click, focus", function() {
                    $(".portfolio-functions-slider .function-item.active").removeClass("active"),
                    $(".portfolio-functions-slider .function-item:not(.slick-active)").attr("tabindex", "-1");
                    var t = $(this);
                    t.closest(".slick-active").length && t.closest(".function-item").addClass("active")
                }),
                $(".portfolio-functions-slider .slide-controls .prevArrow").on("focus", function() {
                    $(".portfolio-functions-slider .function-item.active").removeClass("active"),
                    $(".portfolio-functions-slider .function-item:not(.slick-active)").attr("tabindex", "-1")
                }),
                $(document).on("click", function(t) {
                    0 === $(t.target).closest(".portfolio-functions-list .slick-list").length && ($(".portfolio-functions-slider .function-item.active").removeClass("active"),
                    $(".portfolio-functions-slider .function-item:not(.slick-active)").attr("tabindex", "-1"))
                })
            }
        }
    }()
}
, function(t, e) {
    $(document).ready(function() {
        $("#skip-to-main").click(function() {
            var t = $("#contentBox");
            t.attr("tabindex", "0"),
            t.focus(),
            t.blur(function() {
                t.removeAttr("tabindex")
            })
        }),
        $(".back-to-top a").click(function() {
            return $("#s4-workspace").animate({
                scrollTop: "0"
            }, 500),
            !1
        })
    })
}
, function(t, e) {
    Type.registerNamespace("app.clickbot"),
    app.clickbot = {
        $el: $(".clickbot"),
        $botModel: $("#clickbot-modal"),
        $optionsContainer: $(".clickbot .options"),
        $convoContainer: $("#clickbot-convo-container"),
        $savedConvoHtml: "",
        newConvo: !0,
        isInFlow: !1,
        $feedbackActive: null,
        $clickbotConfig: null,
        $helloStr: "Hi, how can I help you?",
        $returnStr: "Anything else?",
        $glossaryMenuStr: "See definitions of complex terms",
        $feedbackMenuStr: "Submit feedback",
        $chatMenuStr: "Ask lopez?",
        $chatMenuIcon: '<i class="fa fa-user" style="font-size:2rem"></i> ',
        $botTitleStr: "Need a hand?",
        $feedbackTitleStr: "Tell us what you think",
        queries: [],
        defaultQueryOptions: [],
        feedbackWidget: null,
        captchaMarkup: '<script src="https://www.recaptcha.net/recaptcha/api.js?onload=CaptchaCallback&render=explicit" async defer><\/script>\r\n<script type="text/javascript">\r\n    var CaptchaCallback = function() {\r\n        feedbackWidgetID = grecaptcha.render("feedback-recaptcha", {"sitekey" : "6LdtwD0UAAAAAF5c52fVJ-ExG3iyF0_lVJolvTjZ"});\r\n\tapp.clickbot.setCaptchaWidget(feedbackWidgetID);\r\n    };\r\n<\/script>\r\n<div id="feedback-recaptcha"></div>',
        feedbackFormMarkup: '<div class="feedback-form">      <div class="form-group">        <fieldset class="star-rating">          <legend class="can-error">Star Rating *</legend>          <input type="radio" id="star5" name="rating" value="5" tabindex="0" /><label class = "full" for="star5" title="Very useful" tabindex="0"></label>          <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Useful" tabindex="0"></label>          <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Neutral" tabindex="0"></label>          <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Of some use" tabindex="0"></label>          <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Not useful" tabindex="0"></label>        </fieldset>      </div><div class="clearfix"></div>      <div class="form-group">        <label for="inputCategory">Category</label>        <select id="inputCategory" class="form-control">        </select>      </div>      <div class="form-group can-error">        <label for="taComments" class="can-error">Comments * <small>Please don’t provide any personal details (for example name, passport number).</small></label>        <textarea class="form-control" id="taComments" rows="3" maxlength="1000"></textarea><span>Maximum 1000 characters.</span>      </div>{0}      <label class="has-error error-text hidden"><small>You must include either a star rating or comments to submit your feedback.</small></label>      <div class="clearfix"></div>    </div>',
        successMarkup: 'Thank you, your feedback is valuable to us. <i class="fa fa-smile-o text-success"></i>',
        cancelMarkup: "Feedback cancelled",
        fatalErrorMarkup: "An error has occurred, feedback is currently unavailable",
        emailTemplateMarkup: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">    <html xmlns="http://www.w3.org/1999/xhtml">        <head>            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />            <title>New Feedback Submission</title>            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>            <style>                th{text-align:left;}td,th{padding:5px 5px 5px 0;}            </style>        </head>        <body>            <h1>New Page Feedback Submission</h1>            <p>New feedback has been submitted for page <a href="{0}">{0}</a></p>            <table>                <tr>                    <th>Star Rating</th>                    <td>{1}</td>                </tr>                <tr>                    <th>Category</th>                    <td>{2}</td>                </tr>                <tr>                    <th>Comments</th>                    <td>{3}</td>                </tr>            </table>        </body>    </html>',
        glossaryMarkup: '<div class="terms-container">      <div class="in-page-terms">        <div class="term-section-title">On this page</div>        <ul class="terms-list">        </ul>      </div>      <div class="all-terms">        <div class="term-section-title">All</div>        <div class="alphabet-nav"></div>        <ul class="terms-list">        </ul>      </div>  </div>',
        anythingElseMarkup: "Anything else?",
        init: function() {
            this.setupStrings(),
            this.addDefaultQueries();
            var t = this;
            if (this.$clickbotConfig = JSON.parse(app.config.getConfigByKey("Internet.Clickbot", "ClickbotConfig").trim()),
            null == app.proactivechat || _spPageContextInfo.userId || (app.proactivechat.Init(),
            this.defaultQueryOptions.push({
                label: this.$chatMenuStr,
                icon: this.$chatMenuIcon,
                action: function(e) {
                    app.proactivechat.Open(),
                    t.hideModelDialog(null)
                }
            })),
            this.$clickbotConfig.showFeedback || ($(".footer-feedback .feedback-link").hide(),
            $(".footer-feedback .feedback-link").prev().hide()),
            this.$clickbotConfig.showGlossary || this.$clickbotConfig.showFeedback || $(".clickbot").hide(),
            this.$clickbotConfig.showGlossary) {
                this.defaultQueryOptions.push({
                    label: this.$glossaryMenuStr,
                    action: function(t) {
                        t.showAllTerms()
                    }
                });
                var e = [];
                if ($(".clickbot-glossary").each(function() {
                    e.push($(this).text())
                }),
                app.siteoptions.useSiteDataScript) {
                    var n = app.sitedata.glossaryTerms;
                    n && this.loadGlossariesIntoBot(n)
                } else
                    this.checkGlossaryCache()
            }
            this.$clickbotConfig.showFeedback && (this.defaultQueryOptions.push({
                label: this.$feedbackMenuStr,
                action: function(t) {
                    t.fetchCaptchaMarkup()
                }
            }),
            $("body").on("click", ".feedback-link", function() {
                t.newConvo = !1,
                t.$feedbackActive ? t.openDialog(null) : t.openDialog(t.fetchCaptchaMarkup())
            })),
            $(".clickbot-button").click(function() {
                t.toggleDialog()
            }),
            $(".clickbot-close-button").click(function() {
                t.closeDialog()
            }),
            $(".close-dialog-option").click(function() {
                t.closeDialog()
            }),
            $("#clickbot-modal").find(".modal-title").text(t.$botTitleStr)
        },
        setCaptchaWidget: function(t) {
            this.feedbackWidget = t
        },
        setupStrings: function() {
            if (app.config.getConfigByKey("Internet.Clickbot", "ClickbotStrings")) {
                var t = JSON.parse(app.config.getConfigByKey("Internet.Clickbot", "ClickbotStrings").trim());
                t && (t.hello && (this.$helloStr = t.hello),
                t.return && (this.$returnStr = t.return),
                t.chatmenuicon && (this.$chatMenuIcon = t.chatmenuicon),
                t.chatmenu && (this.$chatMenuStr = t.chatmenu),
                t.glossaryMenu && (this.$glossaryMenuStr = t.glossaryMenu),
                t.feedbackMenu && (this.$feedbackMenuStr = t.feedbackMenu),
                t.botTitle && (this.$botTitleStr = t.botTitle),
                t.feedbackTitle && (this.$feedbackTitleStr = t.feedbackTitle))
            }
        },
        addDefaultQueries: function() {
            this.queries.push({
                id: "hello",
                label: "",
                answer: this.$helloStr
            }, {
                id: "return",
                label: "",
                answer: this.$returnStr,
                options: [{
                    label: "Nothing, all good.",
                    queryId: "nothing-all-good"
                }]
            }, {
                id: "nothing-all-good",
                label: "",
                answer: "No worries, I'll be here if you need me",
                options: []
            })
        },
        showModelDialog: function(t) {
            this.$botModel.removeClass("hide"),
            t && "function" == typeof t && t(this)
        },
        hideModelDialog: function(t) {
            this.$botModel.addClass("hide"),
            t && "function" == typeof t && t(this)
        },
        toggleDialog: function() {
            if (this.$el.hasClass("open")) {
                if (null != app.proactivechat && app.proactivechat.IsChatOnPage()) {
                    null != app.proactivechat.GetPlugin() && app.proactivechat.Close(),
                    this.showModelDialog(null)
                }
                this.closeDialog()
            } else
                this.openDialog(null),
                $("#clickbot-modal").focus()
        },
        closeDialog: function(t) {
            this.$el.removeClass("open"),
            t && "function" == typeof t && t(this)
        },
        openDialog: function(t) {
            this.$el.hasClass("open") || (this.$el.addClass("open"),
            this.newConvo && (this.askBot("hello"),
            this.newConvo = !1),
            setTimeout(function() {
                $(".clickbot .modal-body").css({
                    height: $(".clickbot .modal-content").outerHeight() - $(".clickbot .modal-header").outerHeight() - ($("#inqChatStage").length && $(window).width() < 768 ? 50 : 0)
                })
            }, 100)),
            t && "function" == typeof t && t(this)
        },
        addQuery: function(t, e) {
            if (!t.id)
                return void console.error("addQuery data needs an `id` attribute.");
            if (!t.answer)
                return void console.error("addQuery data needs an `answer` attribute.");
            var n = this.getQueryIndexById(t.id);
            n > 0 && (console.warn("id already exists, replacing with new data"),
            this.queries[n] = t),
            this.queries.push(t),
            e()
        },
        getQueryIndexById: function(t) {
            return this.getQueryById(t, !0)
        },
        getQueryById: function(t, e) {
            for (var n = 0; n < this.queries.length; n++) {
                var i = this.queries[n];
                if (i.id.toLowerCase() === t.toLowerCase())
                    return e ? n : i
            }
            return !1
        },
        loadGlossariesIntoBot: function(t) {
            var e = this;
            $.each(t, function(t, n) {
                var i = n.definition;
                n.ismoredetails && (i += '<div class="extra"><a href="' + e.$clickbotConfig.glossaryPage + "?expand=true#" + n.title.replace(/ /g, "-").toLowerCase() + '">See details <i class="fa fa-chevron-right pull-right"></i></a></div>'),
                e.addQuery({
                    id: e.getGlossaryId(n.title),
                    answer: i,
                    label: e.getGlossaryLabel(n.title)
                }, function() {})
            }),
            this.initInPageGlossaryLinks()
        },
        initInPageGlossaryLinks: function() {
            var t = this;
            $(".clickbot-glossary").click(function(e) {
                e.preventDefault(),
                t.showPageGlossaryInBot(t.getGlossaryId($(this).text()))
            })
        },
        showPageGlossaryInBot: function(t) {
            this.$feedbackActive && (this.restoreConvoWithMessage(null),
            this.$feedbackActive = !1);
            var e = this;
            this.openDialog(function() {
                e.askBot(t)
            })
        },
        getGlossaryId: function(t) {
            return "glossaryId" + t
        },
        getGlossaryLabel: function(t) {
            return 'What does "' + t + '" mean?'
        },
        renderOptions: function(t) {
            this.$optionsContainer.empty(),
            this.appendOptions(t)
        },
        appendOptions: function(t) {
            var e = this;
            t.map(function(t) {
                var n = $('<button type="button" id="' + t.label.replace(/[_\W]+/g, "_") + '"></button>');
                n.click(function() {
                    t.isCloseOption ? e.closeDialog() : t.isRestartOption && e.askBot("hello"),
                    t.queryId && e.askBot(t.queryId),
                    "function" == typeof t.action && t.action(e)
                }),
                null != t.icon ? e.$optionsContainer.append(n.html(t.icon + t.label)) : e.$optionsContainer.append(n.text(t.label))
            }),
            this.$convoContainer[0].scrollTop = this.$convoContainer[0].scrollHeight
        },
        askBot: function(t, e) {
            e || (e = !1);
            var n = this.getQueryById(t);
            this.processBotData(n, e)
        },
        processBotData: function(t, e) {
            if (e || (e = !1),
            !t)
                return void this.renderBotBubble({
                    answer: "Sorry I don't understand."
                });
            t.label && this.renderUserBubble(t.label),
            this.renderBotBubble(t, e)
        },
        thinking: function() {
            this.renderBubble('<div class="bubble left" id="thinking-bubble"><svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 70 100"><circle stroke="none" cx="6" cy="50" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle stroke="none" cx="26" cy="50" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle stroke="none" cx="46" cy="50" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg></div>')
        },
        stopThinking: function() {
            $("#thinking-bubble").length > 0 && $("#thinking-bubble").parent().remove()
        },
        renderBotBubble: function(t, e) {
            e || (e = !1);
            var n = this;
            if ("hello" === t.id) {
                var i = '<div class="bubble left">' + t.answer + "</div>";
                return n.showOptionsForQuery(t),
                void (e || n.renderBubble(i))
            }
            n.thinking(),
            setTimeout(function() {
                n.stopThinking();
                var e = '<div class="bubble left">' + t.answer + "</div>";
                if ("glossary" === t.type) {
                    var i = [{
                        label: n.$glossaryMenuStr,
                        action: function(t) {
                            t.showAllTerms()
                        }
                    }];
                    t.addedDefaultOptions || (t.options ? t.options = t.options.concat(i) : t.options = i,
                    t.addedDefaultOptions = !0)
                }
                t.type,
                n.showOptionsForQuery(t),
                n.renderBubble(e)
            }, 300)
        },
        showDefaultOptionsForQuery: function() {
            this.renderOptions(this.defaultQueryOptions)
        },
        showOptionsForQuery: function(t) {
            if (t) {
                if (t.options) {
                    var e = [{
                        label: "Show me all menu options",
                        action: function(t) {
                            t.askBot("hello", !0)
                        }
                    }]
                      , n = e.concat(t.options);
                    return void this.renderOptions(n)
                }
                this.showDefaultOptionsForQuery()
            }
        },
        renderUserBubble: function(t) {
            var e = '<div class="bubble right">' + t + "</div>";
            this.renderBubble(e)
        },
        renderBubble: function(t) {
            t = '<div class="bubble-container">' + t + "</div>",
            this.$convoContainer.append(t),
            this.$convoContainer[0].scrollTop = this.$convoContainer[0].scrollHeight
        },
        fetchCaptchaMarkup: function() {
            if ($("#clickbot-modal").find(".modal-title").text(this.$feedbackTitleStr),
            app.config.getConfigByKey("Internet.GoogleCaptcha", "FeedbackReCaptchaScript")) {
                var t = app.config.getConfigByKey("Internet.GoogleCaptcha", "FeedbackReCaptchaScript").trim();
                this.feedbackFormMarkup = this.feedbackFormMarkup.format(t),
                this.configureFeedbackChatbot(),
                this.fetchFeedbackCategories("inputCategory")
            } else
                console.error("Configuration for google feedback captcha not found")
        },
        setUpFlow: function(t) {
            var e = !this.isInFlow;
            this.isInFlow = !0;
            var n = this;
            return new Promise(function(i, o) {
                return e && (n.$savedConvoHtml = n.$convoContainer.html()),
                n.$convoContainer.empty(),
                n.$convoContainer.append(t),
                n.$optionsContainer.empty(),
                i(n)
            }
            )
        },
        configureFeedbackChatbot: function() {
            this.setUpFlow(this.feedbackFormMarkup).then(function(t) {
                $(".feedback-form .star-rating label").each(function() {
                    var t = $(this);
                    t.keypress(function(e) {
                        13 == e.which && t.click()
                    }),
                    $("#clickbot-modal").focus()
                });
                var e = $('<button type="button">Cancel Feedback</button>');
                e.click(function() {
                    t.restoreConvoWithMessage(t.cancelMarkup),
                    t.$feedbackActive = !1
                });
                var n = $('<button type="submit" class="submit-feedback">Submit Feedback</button>');
                n.click(function(e) {
                    t.submitFeedback(e),
                    t.$feedbackActive = !1
                }),
                t.$optionsContainer.append(n),
                t.$optionsContainer.append(e),
                t.$feedbackActive = !0
            })
        },
        fetchFeedbackCategories: function(t) {
            app.sp.ajax.post("/_layouts/15/api/Termstore.aspx/GetTerms", {
                groupName: "IMMI",
                termSetName: "FeedbackCategories"
            }, null, function(e) {
                if (e.d.success) {
                    $("#" + t).empty();
                    var n = $('<option value=""></option>');
                    $("#" + t).append(n);
                    for (var i = e.d.data, o = 0; o < i.length; o++)
                        $("<option />", {
                            value: i[o].Value,
                            text: i[o].Key
                        }).appendTo("#" + t)
                } else
                    console.error(e.d.data.internalError)
            })
        },
        submitFeedback: function(t) {
            var e = $("#clickbot-modal");
            t.preventDefault(),
            e.find(".can-error").removeClass("has-error"),
            e.find(".error-text").addClass("hidden");
            var n = e.find(".star-rating :radio:checked").val()
              , i = e.find("#inputCategory").val()
              , o = e.find("#taComments").val();
            if (n || o)
                if (grecaptcha.getResponse(this.feedbackWidget)) {
                    e.find(".feedback-form").addClass("hidden"),
                    e.find(".loading-container").removeClass("hidden");
                    var a = this.emailTemplateMarkup.format(window.location.href, this.getRating(n), i, o);
                    this.sendFeedback(a)
                } else
                    e.find(".error-text").removeClass("hidden").text("Invalid reCaptcha. Please try again.");
            else
                e.find(".can-error").addClass("has-error"),
                e.find(".error-text").removeClass("hidden")
        },
        getRating: function(t) {
            var e = "Not rated";
            switch (t) {
            case "1":
                e = "Not useful";
                break;
            case "2":
                e = "Of some use";
                break;
            case "3":
                e = "Neutral";
                break;
            case "4":
                e = "Useful";
                break;
            case "5":
                e = "Very useful";
                break;
            default:
                e = "Not rated"
            }
            return e
        },
        sendFeedback: function(t) {
            var e = this;
            app.sp.ajax.post("/_layouts/15/api/ESB.aspx/SendFeedBack", {
                web: _spPageContextInfo.webServerRelativeUrl,
                item: _spPageContextInfo.pageItemId,
                message: t,
                googleCapcha: grecaptcha.getResponse(this.feedbackWidget)
            }, null, function(t) {
                t.d.success ? (vs = t.d.data,
                null != vs && e.restoreConvoWithMessage(e.successMarkup)) : t.d.userMessage ? $("#clickbot-modal").find(".error-text").removeClass("hidden").text(t.d.userMessage) : (console.error(t.d.data.internalError),
                e.restoreConvoWithMessage(e.fatalErrorMarkup))
            }, function(t) {
                console.log(t),
                e.restoreConvoWithMessage(e.fatalErrorMarkup)
            })
        },
        restoreConvoWithMessage: function(t) {
            this.$convoContainer.html(this.$savedConvoHtml),
            t && (this.renderBotBubble({
                answer: t
            }),
            this.askBot("return"));
            var e = this;
            $("#clickbot-modal").find(".modal-title").text(e.$botTitleStr),
            this.$convoContainer[0].scrollTop = this.$convoContainer[0].scrollHeight,
            this.isInFlow = !1
        },
        checkGlossaryCache: function() {
            var t = this;
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetGlossaryLastItemModifiedDate", {}, null, function(e) {
                if (e.d.success) {
                    var n;
                    void 0 !== typeof Storage && (n = sessionStorage.lastGlossaryUpdateDate),
                    e.d.data !== n ? (sessionStorage.lastGlossaryUpdateDate = e.d.data,
                    t.updateGlossaryCache()) : void 0 !== typeof Storage && t.loadGlossariesIntoBot(JSON.parse(sessionStorage.glossaryTerms))
                } else
                    console.error(e.d.data.internalError)
            })
        },
        updateGlossaryCache: function() {
            var t = this;
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetAllGlossaryTerms", {}, null, function(e) {
                e.d.success ? void 0 !== typeof Storage && (sessionStorage.glossaryTerms = JSON.stringify(e.d.data),
                t.loadGlossariesIntoBot(JSON.parse(sessionStorage.glossaryTerms))) : console.error(e.d.data.internalError)
            })
        },
        showAllTerms: function() {
            var t = $(this.glossaryMarkup);
            this.setUpFlow(t).then(function(e) {
                var n = $('<button type="button">Cancel</button>');
                n.click(function() {
                    e.restoreConvoWithMessage(null),
                    e.askBot("return")
                }),
                e.$optionsContainer.append(n);
                var i = t.find(".in-page-terms .terms-list");
                if ($(".clickbot-glossary").length > 0) {
                    var o = [];
                    $(".clickbot-glossary").each(function() {
                        var t = $(this).text();
                        if (-1 === o.indexOf(t)) {
                            o.push(t);
                            var n = $('<li><button type="button">' + t + "</button></li>");
                            n.click(function() {
                                e.restoreConvoWithMessage(null),
                                e.askBot(e.getGlossaryId(t)),
                                e.askBot("return")
                            }),
                            i.append(n)
                        }
                    })
                } else
                    t.find(".in-page-terms").hide();
                if (app.siteoptions.useSiteDataScript)
                    var a = app.sitedata.glossaryTerms;
                else
                    var a = JSON.parse(sessionStorage.glossaryTerms);
                a.sort(function(t, e) {
                    return t.title.localeCompare(e.title)
                });
                var s = "abcdefghijklmnopqrstuvwxyz".split("")
                  , r = []
                  , l = t.find(".all-terms .terms-list");
                a.map(function(t) {
                    var n = t.title.toLowerCase()
                      , i = n.charAt(0)
                      , o = i.toUpperCase() + n.slice(1)
                      , a = $('<li class="nav-' + i + '"><button type="button">' + o + "</button></li>");
                    a.click(function() {
                        e.restoreConvoWithMessage(null),
                        e.askBot(e.getGlossaryId(t.title)),
                        e.askBot("return")
                    }),
                    -1 === r.indexOf(i) && r.push(i),
                    l.append(a)
                }),
                r.sort();
                var c = t.find(".all-terms .alphabet-nav")
                  , d = t.find(".in-page-terms").height();
                s.map(function(t) {
                    var n = $('<button type="button">' + t.toUpperCase() + "</button>");
                    n.click(function() {
                        var n = l.find(".nav-" + t).first();
                        e.$convoContainer.animate({
                            scrollTop: n.position().top + d
                        })
                    }),
                    r.indexOf(t) > -1 ? c.append(n) : (n.attr("disabled", "disabled"),
                    c.append(n))
                });
                var u = $(".all-terms")
                  , p = u.height()
                  , f = $(".all-terms .term-section-title").outerHeight();
                return c.css("top", f + "px"),
                e.$convoContainer.on("scroll", function() {
                    var t = u.position().top + f;
                    t > p && (t = p),
                    t <= 0 && (c[0].style.webkitTransform = "translateY(" + (0 - t) + "px)",
                    c[0].style.msTransform = "translateY(" + (0 - t) + "px)"),
                    t > 0 && (c[0].style.webkitTransform = "translateY(0)",
                    c[0].style.msTransform = "translateY(0)")
                }),
                e
            }).then(function(t) {
                t.$convoContainer.scrollTop(0)
            })
        },
        addDynamicQuery: function(t) {
            var e = this;
            t && t.length > 0 && this.addQuery({
                id: "dynamic" + t,
                answer: $("#" + t).html()
            }, function() {
                e.openDialog(function() {
                    e.askBot("dynamic" + t)
                })
            })
        }
    },
    $(document).ready(function() {
        $(".clickbot").length > 0 && app.clickbot.init()
    })
}
, function(t, e) {
    Type.registerNamespace("app.matchheight"),
    window.app.matchheight = function() {
        return {
            init: function() {
                "1" !== $("#MSOLayout_InDesignMode").val() && $(".match-height")[0] && $(window).resize(function() {
                    if ($(window).width() >= 768) {
                        var t = 0;
                        $(".match-height .card-body").css("height", "auto"),
                        $(".card-body").each(function() {
                            $(this).height() > t && (t = $(this).height())
                        }),
                        $(".card-body").height(t)
                    }
                }).resize()
            }
        }
    }(),
    $(document).ready(function() {
        window.app.matchheight.init()
    })
}
, function(t, e) {
    Type.registerNamespace("app.onlinetranslation"),
    app.onlinetranslation = function() {
        return {
            init: function() {
                try {
                    $("body.v2").length || setTimeout(function() {
                        var t = ($("#onlinetranslation-container").length && $("#onlinetranslation-container").is(":visible") ? $("#onlinetranslation-container").outerHeight() : 0) + ($(".alert-container").length && $(".alert-container").is(":visible") ? $(".alert-container").outerHeight() : 0);
                        $(".hero-bg").css("margin-top", t + "px")
                    }, 1e3)
                } catch (t) {
                    console.error("Error loading Language Translation bar: " + t.message)
                }
            }
        }
    }(),
    $(document).ready(function() {
        if (window.app.onlinetranslation.init(),
        $("#onlinetranslation-container").length) {
            var t = new MutationObserver(function(e) {
                window.app.onlinetranslation.init(),
                t.disconnect()
            }
            )
              , e = document.querySelector("#onlinetranslation-container");
            t.observe(e, {
                attributes: !0
            })
        }
    })
}
, function(t, e) {
    Type.registerNamespace("app.tables"),
    window.app.tables = function() {
        return {
            initMobileTables: function() {
                $("#styles-mobile-labels").length && $("#styles-mobile-labels").remove();
                var t = '<style id="styles-mobile-labels">@media (max-width: 1200px)  {';
                $(".table-responsive.labels-on-mobile").each(function(e) {
                    var n = e
                      , i = $(this);
                    i.attr("id", "table-to-label-" + n);
                    var o = i.attr("id")
                      , a = [];
                    if (i.find("th").each(function() {
                        a.push($(this).text())
                    }),
                    0 === a.length)
                        i.addClass("no-headers");
                    else {
                        for (var s = 0; s < a.length; s++)
                            t += "#" + o + ".table-responsive.labels-on-mobile td:nth-of-type(" + (s + 1) + '):before { content: "' + ($(document).width() <= 1e3 ? a[s] + ": " : "") + ' "; }';
                        $("body").append(t)
                    }
                }),
                t += "}</style>"
            }
        }
    }(),
    $(document).ready(function() {
        window.app.tables.initMobileTables(),
        $(window).resize(function() {
            setTimeout(function() {
                window.app.tables.initMobileTables()
            }, 200)
        })
    })
}
, function(t, e) {
    Type.registerNamespace("app.socialmedia"),
    app.socialmedia = function() {
        function t() {
            $("a.shareFacebook").each(function() {
                var t = $(this);
                if ("#" == t.attr("href")) {
                    var e = $("title").text().trim()
                      , n = "#" == t.attr("href") ? window.location : t.attr("href");
                    fbLink = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(n) + "&t=" + encodeURIComponent(e),
                    t.attr("href", fbLink)
                }
            })
        }
        function e() {
            $("a.shareTwitter").each(function() {
                var t = $(this);
                if ("#" == t.attr("href")) {
                    var e = $("title").text().trim()
                      , n = "#" == t.attr("href") ? window.location : t.attr("href");
                    twtrLink = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(e) + " " + encodeURIComponent(n),
                    t.attr("href", twtrLink)
                }
            })
        }
        function n() {
            $("a.shareReddit").each(function() {
                var t = $(this);
                if ("#" == t.attr("href")) {
                    var e = $("title").text().trim()
                      , n = "#" == t.attr("href") ? window.location : t.attr("href");
                    redditLink = "http://reddit.com/submit?url=" + encodeURIComponent(n) + "&title=" + encodeURIComponent(e),
                    t.attr("href", redditLink)
                }
            })
        }
        function i() {
            $("a.shareEmail").click(function() {
                var t = $(this)
                  , e = "#" == t.attr("href") ? $("title").text().trim() : t.attr("title")
                  , n = "#" == t.attr("href") ? window.location : t.attr("href");
                $("#modalShareByEmail").length && $("#modalShareByEmail").remove();
                var i = '<div id="modalShareByEmail" data-backdrop="static" class="modal fade" style="display:none;color: #000; z-index:10000;">           <div class="modal-dialog">             <div class="modal-content">               <div class="modal-header">                 <button type="button" class="close closeShareModal" data-dismiss="modal">&times;</button>                 <h4 class="modal-title">Share By Email</h4>               </div>               <div class="modal-body" style="padding:15px;">                 <p><strong>Share this URL:</strong></p><p>' + n + '</p><p><label for="ShareToEmail">Send To e-mail address :</label> <span style="color: red;">*</span></p>                 <p><input type="text" id="ShareToEmail" style="width:100%" /></p>                 <div id="ShareToEmailAlert" class="alert alert-danger" role="alert" style="display:none;">Enter a valid e-mail address.</div>                 <p><label for="ShareSenderName">Name of sender :</label> <span style="color: red;">*</span></p>                 <p><input type="text" id="ShareSenderName" style="width:100%" /></p>                 <div id="ShareSenderNameAlert" class="alert alert-danger" role="alert" style="display:none;">Enter the name of the sender.</div>                 <input type="hidden" id="ShareEmailSubject" value="' + e + '" />                 <input type="hidden" id="ShareURL" value="' + n + '" />                 <div id="ShareCaptchaContainer" style="margin-top:15px"></div>                 <div id="ShareCaptchaAlert" class="alert alert-danger" role="alert" style="display:none;">Please select the ReCaptcha.</div>               </div >               <div class="modal-footer">                 <button type="button" class="btn btn-primary" id="ShareEmailButton">Submit</button>                 <button type="button" class="btn btn-secondary closeShareModal" data-dismiss="modal">Close</button>                </div>             </div>           </div>         </div>'
                  , r = $(i);
                return r.appendTo("body"),
                r.modal("show").on("shown.bs.modal", function() {
                    a(),
                    $("#ShareEmailButton").click(function() {
                        return "" != $("#ShareToEmail").val() && o($("#ShareToEmail").val()) ? ($("#ShareToEmailAlert").hide(),
                        "" == $("#ShareSenderName").val() ? ($("#ShareSenderNameAlert").show(),
                        !1) : ($("#ShareSenderNameAlert").hide(),
                        "undefined" != typeof CaptchaL3WidgetID && "undefined" != typeof grecaptcha && 0 == grecaptcha.getResponse(CaptchaL3WidgetID).length ? ($("#ShareCaptchaAlert").show(),
                        !1) : ($("#ShareCaptchaAlert").hide(),
                        void ("undefined" != typeof grecaptcha && s($("#ShareSenderName").val(), $("#ShareToEmail").val(), grecaptcha.getResponse(CaptchaL3WidgetID)))))) : ($("#ShareToEmailAlert").show(),
                        !1)
                    })
                }),
                !1
            })
        }
        function o(t) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())
        }
        function a() {
            var t = new Array
              , e = new Object;
            e.Product = "Internet.GoogleCaptcha",
            e.Key = "Level3ReCaptchaScript",
            t.push(e);
            var n = {
                settingsRequest: t
            };
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/GetConfigSettings", n, null, function(t) {
                if (t.d.success) {
                    var e = t.d.data[0].value;
                    $("#ShareCaptchaContainer").html(e)
                } else
                    console.error(t.d.data.internalError)
            })
        }
        function s(t, e, n) {
            app.sp.ajax.post("/_layouts/15/api/Data.aspx/EmailPage", {
                web: _spPageContextInfo.webServerRelativeUrl,
                item: _spPageContextInfo.pageItemId,
                fromName: t,
                toemail: e,
                googleCapcha: n
            }, null, function(t) {
                t.d.success ? (vs = t.d.data,
                null != vs && $("#modalShareByEmail").modal("hide").on("hidden.bs.modal", function() {
                    t.d.data.SuccessMessage ? alert(t.d.data.SuccessMessage) : alert("This page has been shared.")
                })) : ($("#modalShareByEmail").modal("hide").on("hidden.bs.modal", function() {
                    alert("Error sending. Please try again later.")
                }),
                t.d.data.userMessage ? console.log(t.d.data.userMessage) : console.error(t.d.data.internalError))
            }, function(t) {
                console.log(t),
                $("#modalShareByEmail").modal("hide").on("hidden.bs.modal", function() {
                    alert("Error sending. Please try again later.")
                })
            })
        }
        return {
            init: function() {
                t(),
                e(),
                n(),
                i()
            }
        }
    }(),
    $(document).ready(function() {
        setTimeout(function() {
            app.socialmedia.init()
        }, 1e3)
    })
}
, function(t, e) {
    Type.registerNamespace("app.topictiles"),
    app.topictiles = function() {
        function t() {
            $(".tiles-topics-container .tiles-populartopics, .tiles-topics-container .tiles-relatedtopics").each(function() {
                var t, e, n, i = $(this);
                i.hasClass("tiles-populartopics") && (t = 3,
                e = ".populartopics-slide-controls .prevArrow",
                n = ".populartopics-slide-controls .nextArrow"),
                i.hasClass("tiles-relatedtopics") && (t = 4,
                e = ".relatedtopics-slide-controls .prevArrow",
                n = ".relatedtopics-slide-controls .nextArrow");
                var o = i.children().length;
                i.slick({
                    prevArrow: e,
                    nextArrow: n,
                    infinite: !1,
                    slidesToShow: t,
                    slidesToScroll: t,
                    rows: 1,
                    dots: o > t,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: o > 2
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: o > 1
                        }
                    }]
                })
            })
        }
        return {
            init: function() {
                t()
            }
        }
    }(),
    $(document).ready(function() {
        "1" !== $("#MSOLayout_InDesignMode").val() && ($(".tiles-relatedtopics").length || $(".related-topics-box").length && $(".related-topics-box").html("").css("height", "0px").css("padding", "0px"),
        app.topictiles.init())
    })
}
]);
