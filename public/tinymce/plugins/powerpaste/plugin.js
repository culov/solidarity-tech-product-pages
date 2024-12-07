/*!
 * Tiny PowerPaste plugin
 *
 * Copyright 2010-2021 Tiny Technologies, Inc. All rights reserved.
 *
 * Version: 5.5.1-491
 */
!function() {
    "use strict";
    function a(t) {
        return null == t
    }
    function f(t) {
        return !a(t)
    }
    function h() {}
    function i(n, r) {
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return n(r.apply(null, t))
        }
    }
    function l(t) {
        return function() {
            return t
        }
    }
    function u(t) {
        return t
    }
    var e, t = function(n) {
        return function(t) {
            return t = typeof (e = t),
            (null === e ? "null" : "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t) === n;
            var e
        }
    }, n = function(e) {
        return function(t) {
            return typeof t === e
        }
    }, y = t("string"), c = t("object"), s = t("array"), r = n("boolean"), d = function(t) {
        return e === t
    }, m = n("function"), o = n("number");
    function p(r) {
        for (var o = [], t = 1; t < arguments.length; t++)
            o[t - 1] = arguments[t];
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var n = o.concat(t);
            return r.apply(null, n)
        }
    }
    function b(t) {
        return function() {
            throw new Error(t)
        }
    }
    function g(t) {
        return t()
    }
    function v(t) {
        return parseInt(t, 10)
    }
    function x(t, e) {
        return 0 == (e = t - e) ? 0 : 0 < e ? 1 : -1
    }
    function w(t, e, n) {
        return {
            major: t,
            minor: e,
            patch: n
        }
    }
    function T(t) {
        return (t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(t)) ? w(v(t[1]), v(t[2]), v(t[3])) : w(0, 0, 0)
    }
    function I(t) {
        return T([(t = t).majorVersion, t.minorVersion].join(".").split(".").slice(0, 3).join("."))
    }
    function S(t, e) {
        return !!t && -1 === function(t, e) {
            var n = x(t.major, e.major);
            if (0 !== n)
                return n;
            n = x(t.minor, e.minor);
            if (0 !== n)
                return n;
            e = x(t.patch, e.patch);
            return 0 !== e ? e : 0
        }(I(t), T(e))
    }
    var O = l(!1)
      , A = l(!(e = void 0))
      , k = function() {
        return C
    }
      , C = {
        fold: function(t, e) {
            return t()
        },
        is: O,
        isSome: O,
        isNone: A,
        getOr: E,
        getOrThunk: L,
        getOrDie: function(t) {
            throw new Error(t || "error: getOrDie called on none.")
        },
        getOrNull: l(null),
        getOrUndefined: l(void 0),
        or: E,
        orThunk: L,
        map: k,
        each: h,
        bind: k,
        exists: O,
        forall: A,
        filter: k,
        equals: D,
        equals_: D,
        toArray: function() {
            return []
        },
        toString: l("none()")
    };
    function D(t) {
        return t.isNone()
    }
    function L(t) {
        return t()
    }
    function E(t) {
        return t
    }
    function _(t, e) {
        return t = t,
        e = e,
        -1 < it.call(t, e)
    }
    function N(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            if (e(t[n], n))
                return !0;
        return !1
    }
    function P(t, e) {
        for (var n = t.length, r = new Array(n), o = 0; o < n; o++) {
            var i = t[o];
            r[o] = e(i, o)
        }
        return r
    }
    function R(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            e(t[n], n)
    }
    function M(t, e) {
        for (var n = [], r = [], o = 0, i = t.length; o < i; o++) {
            var a = t[o];
            (e(a, o) ? n : r).push(a)
        }
        return {
            pass: n,
            fail: r
        }
    }
    function F(t, e) {
        for (var n = [], r = 0, o = t.length; r < o; r++) {
            var i = t[r];
            e(i, r) && n.push(i)
        }
        return n
    }
    function j(t, e, n) {
        return R(t, function(t) {
            n = e(n, t)
        }),
        n
    }
    function U(t, e) {
        return function(t, e, n) {
            for (var r = 0, o = t.length; r < o; r++) {
                var i = t[r];
                if (e(i, r))
                    return rt.some(i);
                if (n(i, r))
                    break
            }
            return rt.none()
        }(t, e, O)
    }
    function H(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            if (e(t[n], n))
                return rt.some(n);
        return rt.none()
    }
    function W(t) {
        for (var e = [], n = 0, r = t.length; n < r; ++n) {
            if (!s(t[n]))
                throw new Error("Arr.flatten item " + n + " was not an array, input: " + t);
            at.apply(e, t[n])
        }
        return e
    }
    function B(t, e) {
        return W(P(t, e))
    }
    function z(t, e) {
        for (var n = 0, r = t.length; n < r; ++n)
            if (!0 !== e(t[n], n))
                return !1;
        return !0
    }
    function q(t, e) {
        for (var n = {}, r = 0, o = t.length; r < o; r++) {
            var i = t[r];
            n[String(i)] = e(i, r)
        }
        return n
    }
    function $(t) {
        return e = t,
        (t = 0) <= t && t < e.length ? rt.some(e[t]) : rt.none();
        var e
    }
    function V(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = e(t[n], n);
            if (r.isSome())
                return r
        }
        return rt.none()
    }
    function G(t, e, n) {
        return e = t.getParam(e, n, "string"),
        _(["clean", "merge", "prompt"], e) ? e : n
    }
    function K(t) {
        return t.getParam("images_upload_url")
    }
    function X(t) {
        return t.getParam("automatic_uploads", !0, "boolean")
    }
    function J(t) {
        return t.getParam("paste_preprocess")
    }
    function Y(t) {
        return G(t, "powerpaste_word_import", "prompt")
    }
    function Z(t) {
        return G(t, "powerpaste_html_import", "clean")
    }
    function Q(t) {
        return !1 !== t.getParam("paste_merge_formats")
    }
    function tt(t) {
        return tinymce.explode(t.getParam("images_file_types", "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp", "string"))
    }
    function et(t, e) {
        t.dom.bind(e, "drop dragstart dragend dragover dragenter dragleave dragdrop draggesture", function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        })
    }
    var nt = function(n) {
        function t() {
            return o
        }
        function e(t) {
            return t(n)
        }
        var r = l(n)
          , o = {
            fold: function(t, e) {
                return e(n)
            },
            is: function(t) {
                return n === t
            },
            isSome: A,
            isNone: O,
            getOr: r,
            getOrThunk: r,
            getOrDie: r,
            getOrNull: r,
            getOrUndefined: r,
            or: t,
            orThunk: t,
            map: function(t) {
                return nt(t(n))
            },
            each: function(t) {
                t(n)
            },
            bind: e,
            exists: e,
            forall: e,
            filter: function(t) {
                return t(n) ? o : C
            },
            toArray: function() {
                return [n]
            },
            toString: function() {
                return "some(" + n + ")"
            },
            equals: function(t) {
                return t.is(n)
            },
            equals_: function(t, e) {
                return t.fold(O, function(t) {
                    return e(n, t)
                })
            }
        };
        return o
    }
      , rt = {
        some: nt,
        none: k,
        from: function(t) {
            return null == t ? C : nt(t)
        }
    }
      , ot = Array.prototype.slice
      , it = Array.prototype.indexOf
      , at = Array.prototype.push
      , ut = function() {
        return (ut = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    };
    function ct(t, e) {
        for (var n = yt(t), r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            e(t[i], i)
        }
    }
    function st(t, n) {
        return xt(t, function(t, e) {
            return {
                k: e,
                v: n(t, e)
            }
        })
    }
    function ft(t, e) {
        var n, r, o, i, a = {};
        return n = e,
        i = a,
        r = function(t, e) {
            i[e] = t
        }
        ,
        o = h,
        ct(t, function(t, e) {
            (n(t, e) ? r : o)(t, e)
        }),
        a
    }
    function lt(t, n) {
        var r = [];
        return ct(t, function(t, e) {
            r.push(n(t, e))
        }),
        r
    }
    function dt(t) {
        return yt(t).length
    }
    function mt(t, e) {
        return wt(t, e) ? rt.from(t[e]) : rt.none()
    }
    var pt, gt, vt, ht, yt = Object.keys, bt = Object.hasOwnProperty, xt = function(t, n) {
        var r = {};
        return ct(t, function(t, e) {
            e = n(t, e);
            r[e.k] = e.v
        }),
        r
    }, wt = function(t, e) {
        return bt.call(t, e)
    }, Tt = function(a) {
        if (!s(a))
            throw new Error("cases must be an array");
        if (0 === a.length)
            throw new Error("there must be at least one case");
        var u = []
          , n = {};
        return R(a, function(t, r) {
            var e = yt(t);
            if (1 !== e.length)
                throw new Error("one and only one name per case");
            var o = e[0]
              , i = t[o];
            if (void 0 !== n[o])
                throw new Error("duplicate key detected:" + o);
            if ("cata" === o)
                throw new Error("cannot have a case named cata (sorry)");
            if (!s(i))
                throw new Error("case arguments must be an array");
            u.push(o),
            n[o] = function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                var e = n.length;
                if (e !== i.length)
                    throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                return {
                    fold: function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        if (t.length !== a.length)
                            throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + t.length);
                        return t[r].apply(null, n)
                    },
                    match: function(t) {
                        var e = yt(t);
                        if (u.length !== e.length)
                            throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + e.join(","));
                        if (!z(u, function(t) {
                            return _(e, t)
                        }))
                            throw new Error("Not all branches were specified when using match. Specified: " + e.join(", ") + "\nRequired: " + u.join(", "));
                        return t[o].apply(null, n)
                    },
                    log: function(t) {
                        console.log(t, {
                            constructors: u,
                            constructor: o,
                            params: n
                        })
                    }
                }
            }
        }),
        n
    }, It = Tt([{
        blob: ["id", "imageresult", "objurl"]
    }, {
        url: ["id", "url", "raw"]
    }]), St = ut({
        cata: function(t, e, n) {
            return t.fold(e, n)
        }
    }, It), Ot = {}, At = {
        exports: Ot
    };
    gt = Ot,
    vt = At,
    ht = pt = void 0,
    function(t) {
        "object" == typeof gt && void 0 !== vt ? vt.exports = t() : "function" == typeof pt && pt.amd ? pt([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = t()
    }(function() {
        return function r(o, i, a) {
            function u(e, t) {
                if (!i[e]) {
                    if (!o[e]) {
                        var n = "function" == typeof ht && ht;
                        if (!t && n)
                            return n(e, !0);
                        if (c)
                            return c(e, !0);
                        throw (n = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                        n
                    }
                    n = i[e] = {
                        exports: {}
                    },
                    o[e][0].call(n.exports, function(t) {
                        return u(o[e][1][t] || t)
                    }, n, n.exports, r, o, i, a)
                }
                return i[e].exports
            }
            for (var c = "function" == typeof ht && ht, t = 0; t < a.length; t++)
                u(a[t]);
            return u
        }({
            1: [function(t, e, n) {
                var r, o, e = e.exports = {};
                function i() {
                    throw new Error("setTimeout has not been defined")
                }
                function a() {
                    throw new Error("clearTimeout has not been defined")
                }
                function u(e) {
                    if (r === setTimeout)
                        return setTimeout(e, 0);
                    if ((r === i || !r) && setTimeout)
                        return r = setTimeout,
                        setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }
                !function() {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : i
                    } catch (t) {
                        r = i
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (t) {
                        o = a
                    }
                }();
                var c, s = [], f = !1, l = -1;
                function d() {
                    f && c && (f = !1,
                    c.length ? s = c.concat(s) : l = -1,
                    s.length && m())
                }
                function m() {
                    if (!f) {
                        var t = u(d);
                        f = !0;
                        for (var e = s.length; e; ) {
                            for (c = s,
                            s = []; ++l < e; )
                                c && c[l].run();
                            l = -1,
                            e = s.length
                        }
                        c = null,
                        f = !1,
                        function(e) {
                            if (o === clearTimeout)
                                return clearTimeout(e);
                            if ((o === a || !o) && clearTimeout)
                                return o = clearTimeout,
                                clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(t)
                    }
                }
                function p(t, e) {
                    this.fun = t,
                    this.array = e
                }
                function g() {}
                e.nextTick = function(t) {
                    var e = new Array(arguments.length - 1);
                    if (1 < arguments.length)
                        for (var n = 1; n < arguments.length; n++)
                            e[n - 1] = arguments[n];
                    s.push(new p(t,e)),
                    1 !== s.length || f || u(m)
                }
                ,
                p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                e.title = "browser",
                e.browser = !0,
                e.env = {},
                e.argv = [],
                e.version = "",
                e.versions = {},
                e.on = g,
                e.addListener = g,
                e.once = g,
                e.off = g,
                e.removeListener = g,
                e.removeAllListeners = g,
                e.emit = g,
                e.prependListener = g,
                e.prependOnceListener = g,
                e.listeners = function(t) {
                    return []
                }
                ,
                e.binding = function(t) {
                    throw new Error("process.binding is not supported")
                }
                ,
                e.cwd = function() {
                    return "/"
                }
                ,
                e.chdir = function(t) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                e.umask = function() {
                    return 0
                }
            }
            , {}],
            2: [function(t, l, e) {
                !function(e) {
                    function r() {}
                    function i(t) {
                        if ("object" != typeof this)
                            throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t)
                            throw new TypeError("not a function");
                        this._state = 0,
                        this._handled = !1,
                        this._value = void 0,
                        this._deferreds = [],
                        f(t, this)
                    }
                    function o(n, r) {
                        for (; 3 === n._state; )
                            n = n._value;
                        0 !== n._state ? (n._handled = !0,
                        i._immediateFn(function() {
                            var t, e = 1 === n._state ? r.onFulfilled : r.onRejected;
                            if (null !== e) {
                                try {
                                    t = e(n._value)
                                } catch (t) {
                                    return void u(r.promise, t)
                                }
                                a(r.promise, t)
                            } else
                                (1 === n._state ? a : u)(r.promise, n._value)
                        })) : n._deferreds.push(r)
                    }
                    function a(e, t) {
                        try {
                            if (t === e)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var n = t.then;
                                if (t instanceof i)
                                    return e._state = 3,
                                    e._value = t,
                                    void c(e);
                                if ("function" == typeof n)
                                    return void f((r = n,
                                    o = t,
                                    function() {
                                        r.apply(o, arguments)
                                    }
                                    ), e)
                            }
                            e._state = 1,
                            e._value = t,
                            c(e)
                        } catch (t) {
                            u(e, t)
                        }
                        var r, o
                    }
                    function u(t, e) {
                        t._state = 2,
                        t._value = e,
                        c(t)
                    }
                    function c(t) {
                        2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
                            t._handled || i._unhandledRejectionFn(t._value)
                        });
                        for (var e = 0, n = t._deferreds.length; e < n; e++)
                            o(t, t._deferreds[e]);
                        t._deferreds = null
                    }
                    function s(t, e, n) {
                        this.onFulfilled = "function" == typeof t ? t : null,
                        this.onRejected = "function" == typeof e ? e : null,
                        this.promise = n
                    }
                    function f(t, e) {
                        var n = !1;
                        try {
                            t(function(t) {
                                n || (n = !0,
                                a(e, t))
                            }, function(t) {
                                n || (n = !0,
                                u(e, t))
                            })
                        } catch (t) {
                            if (n)
                                return;
                            n = !0,
                            u(e, t)
                        }
                    }
                    var t, n;
                    t = this,
                    n = setTimeout,
                    i.prototype.catch = function(t) {
                        return this.then(null, t)
                    }
                    ,
                    i.prototype.then = function(t, e) {
                        var n = new this.constructor(r);
                        return o(this, new s(t,e,n)),
                        n
                    }
                    ,
                    i.all = function(t) {
                        var u = Array.prototype.slice.call(t);
                        return new i(function(o, i) {
                            if (0 === u.length)
                                return o([]);
                            var a = u.length;
                            for (var t = 0; t < u.length; t++)
                                !function e(n, t) {
                                    try {
                                        if (t && ("object" == typeof t || "function" == typeof t)) {
                                            var r = t.then;
                                            if ("function" == typeof r)
                                                return void r.call(t, function(t) {
                                                    e(n, t)
                                                }, i)
                                        }
                                        u[n] = t,
                                        0 == --a && o(u)
                                    } catch (t) {
                                        i(t)
                                    }
                                }(t, u[t])
                        }
                        )
                    }
                    ,
                    i.resolve = function(e) {
                        return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                            t(e)
                        }
                        )
                    }
                    ,
                    i.reject = function(n) {
                        return new i(function(t, e) {
                            e(n)
                        }
                        )
                    }
                    ,
                    i.race = function(o) {
                        return new i(function(t, e) {
                            for (var n = 0, r = o.length; n < r; n++)
                                o[n].then(t, e)
                        }
                        )
                    }
                    ,
                    i._immediateFn = "function" == typeof e ? function(t) {
                        e(t)
                    }
                    : function(t) {
                        n(t, 0)
                    }
                    ,
                    i._unhandledRejectionFn = function(t) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                    }
                    ,
                    i._setImmediateFn = function(t) {
                        i._immediateFn = t
                    }
                    ,
                    i._setUnhandledRejectionFn = function(t) {
                        i._unhandledRejectionFn = t
                    }
                    ,
                    void 0 !== l && l.exports ? l.exports = i : t.Promise || (t.Promise = i)
                }
                .call(this, t("timers").setImmediate)
            }
            , {
                timers: 3
            }],
            3: [function(c, t, s) {
                !function(t, e) {
                    var r = c("process/browser.js").nextTick
                      , n = Function.prototype.apply
                      , o = Array.prototype.slice
                      , i = {}
                      , a = 0;
                    function u(t, e) {
                        this._id = t,
                        this._clearFn = e
                    }
                    s.setTimeout = function() {
                        return new u(n.call(setTimeout, window, arguments),clearTimeout)
                    }
                    ,
                    s.setInterval = function() {
                        return new u(n.call(setInterval, window, arguments),clearInterval)
                    }
                    ,
                    s.clearTimeout = s.clearInterval = function(t) {
                        t.close()
                    }
                    ,
                    u.prototype.unref = u.prototype.ref = function() {}
                    ,
                    u.prototype.close = function() {
                        this._clearFn.call(window, this._id)
                    }
                    ,
                    s.enroll = function(t, e) {
                        clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = e
                    }
                    ,
                    s.unenroll = function(t) {
                        clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = -1
                    }
                    ,
                    s._unrefActive = s.active = function(t) {
                        clearTimeout(t._idleTimeoutId);
                        var e = t._idleTimeout;
                        0 <= e && (t._idleTimeoutId = setTimeout(function() {
                            t._onTimeout && t._onTimeout()
                        }, e))
                    }
                    ,
                    s.setImmediate = "function" == typeof t ? t : function(t) {
                        var e = a++
                          , n = !(arguments.length < 2) && o.call(arguments, 1);
                        return i[e] = !0,
                        r(function() {
                            i[e] && (n ? t.apply(null, n) : t.call(null),
                            s.clearImmediate(e))
                        }),
                        e
                    }
                    ,
                    s.clearImmediate = "function" == typeof e ? e : function(t) {
                        delete i[t]
                    }
                }
                .call(this, c("timers").setImmediate, c("timers").clearImmediate)
            }
            , {
                "process/browser.js": 1,
                timers: 3
            }],
            4: [function(t, e, n) {
                var r = t("promise-polyfill")
                  , t = "undefined" != typeof window ? window : Function("return this;")();
                e.exports = {
                    boltExport: t.Promise || r
                }
            }
            , {
                "promise-polyfill": 2
            }]
        }, {}, [4])(4)
    });
    function kt(t) {
        setTimeout(function() {
            throw t
        }, 0)
    }
    function Ct(a, t) {
        return t(function(r) {
            var o = []
              , i = 0;
            0 === a.length ? r([]) : R(a, function(t, e) {
                var n;
                t.get((n = e,
                function(t) {
                    o[n] = t,
                    ++i >= a.length && r(o)
                }
                ))
            })
        })
    }
    function Dt(t) {
        return Ct(t, $t)
    }
    function Lt(t, e) {
        return Dt(P(t, e))
    }
    function Et(t) {
        var e = (new Date).getTime();
        return t + "_" + Math.floor(1e9 * Math.random()) + ++Kt + String(e)
    }
    function _t(t, e) {
        return Jt(document.createElement("canvas"), t, e)
    }
    function Nt(t) {
        var e = _t(t.width, t.height);
        return Xt(e).drawImage(t, 0, 0),
        e
    }
    function Pt(t) {
        return t.naturalWidth || t.width
    }
    function Rt(t) {
        return t.naturalHeight || t.height
    }
    var Mt, Ft, jt, Ut, Ht, Wt = At.exports.boltExport, Bt = function(t) {
        var n = rt.none()
          , e = []
          , r = function(t) {
            o() ? a(t) : e.push(t)
        }
          , o = function() {
            return n.isSome()
        }
          , i = function(t) {
            R(t, a)
        }
          , a = function(e) {
            n.each(function(t) {
                setTimeout(function() {
                    e(t)
                }, 0)
            })
        };
        return t(function(t) {
            o() || (n = rt.some(t),
            i(e),
            e = [])
        }),
        {
            get: r,
            map: function(n) {
                return Bt(function(e) {
                    r(function(t) {
                        e(n(t))
                    })
                })
            },
            isReady: o
        }
    }, zt = {
        nu: Bt,
        pure: function(e) {
            return Bt(function(t) {
                t(e)
            })
        }
    }, qt = function(n) {
        function t(t) {
            n().then(t, kt)
        }
        return {
            map: function(t) {
                return qt(function() {
                    return n().then(t)
                })
            },
            bind: function(e) {
                return qt(function() {
                    return n().then(function(t) {
                        return e(t).toPromise()
                    })
                })
            },
            anonBind: function(t) {
                return qt(function() {
                    return n().then(function() {
                        return t.toPromise()
                    })
                })
            },
            toLazy: function() {
                return zt.nu(t)
            },
            toCached: function() {
                var t = null;
                return qt(function() {
                    return t = null === t ? n() : t
                })
            },
            toPromise: n,
            get: t
        }
    }, $t = function(t) {
        return qt(function() {
            return new Wt(t)
        })
    }, Vt = function(t) {
        return qt(function() {
            return Wt.resolve(t)
        })
    }, Gt = Lt, Kt = 0, Xt = function(t) {
        return t.getContext("2d")
    }, Jt = function(t, e, n) {
        return t.width = e,
        t.height = n,
        t
    }, Yt = window.Promise || (Mt = window,
    Ft = Zt.immediateFn || "function" == typeof Mt.setImmediate && Mt.setImmediate || function(t) {
        return setTimeout(t, 1)
    }
    ,
    jt = function(n, r) {
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return n.apply(r, t)
        }
    }
    ,
    Ut = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ,
    Ht = function(t, e, n) {
        var r = !1;
        try {
            t(function(t) {
                r || (r = !0,
                e(t))
            }, function(t) {
                r || (r = !0,
                n(t))
            })
        } catch (t) {
            if (r)
                return;
            r = !0,
            n(t)
        }
    }
    ,
    Zt.prototype.catch = function(t) {
        return this.then(null, t)
    }
    ,
    Zt.prototype.then = function(n, r) {
        var o = this;
        return new Zt(function(t, e) {
            Qt.call(o, new re(n,r,t,e))
        }
        )
    }
    ,
    Zt.all = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var u = Array.prototype.slice.call(1 === t.length && Ut(t[0]) ? t[0] : t);
        return new Zt(function(r, o) {
            if (0 === u.length)
                return r([]);
            for (var i = u.length, a = function(e, t) {
                try {
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if ("function" == typeof n)
                            return void n.call(t, function(t) {
                                a(e, t)
                            }, o)
                    }
                    u[e] = t,
                    0 == --i && r(u)
                } catch (t) {
                    o(t)
                }
            }, t = 0; t < u.length; t++)
                a(t, u[t])
        }
        )
    }
    ,
    Zt.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === Zt ? e : new Zt(function(t) {
            t(e)
        }
        )
    }
    ,
    Zt.reject = function(n) {
        return new Zt(function(t, e) {
            e(n)
        }
        )
    }
    ,
    Zt.race = function(o) {
        return new Zt(function(t, e) {
            for (var n = 0, r = o; n < r.length; n++)
                r[n].then(t, e)
        }
        )
    }
    ,
    Zt);
    function Zt(t) {
        if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t)
            throw new TypeError("not a function");
        this._state = null,
        this._value = null,
        this._deferreds = [],
        Ht(t, jt(te, this), jt(ee, this))
    }
    function Qt(n) {
        var r = this;
        null !== this._state ? Ft(function() {
            var t, e = r._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                try {
                    t = e(r._value)
                } catch (t) {
                    return void n.reject(t)
                }
                n.resolve(t)
            } else
                (r._state ? n.resolve : n.reject)(r._value)
        }) : this._deferreds.push(n)
    }
    function te(t) {
        try {
            if (t === this)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var e = t.then;
                if ("function" == typeof e)
                    return void Ht(jt(e, t), jt(te, this), jt(ee, this))
            }
            this._state = !0,
            this._value = t,
            ne.call(this)
        } catch (t) {
            ee.call(this, t)
        }
    }
    function ee(t) {
        this._state = !1,
        this._value = t,
        ne.call(this)
    }
    function ne() {
        for (var t = 0, e = this._deferreds; t < e.length; t++) {
            var n = e[t];
            Qt.call(this, n)
        }
        this._deferreds = []
    }
    function re(t, e, n, r) {
        this.onFulfilled = "function" == typeof t ? t : null,
        this.onRejected = "function" == typeof e ? e : null,
        this.resolve = n,
        this.reject = r
    }
    function oe(t) {
        var e = t.split(",");
        if (!(t = /data:([^;]+)/.exec(e[0])))
            return rt.none();
        for (var t = t[1], e = e[1], n = atob(e), r = n.length, o = Math.ceil(r / 1024), i = new Array(o), a = 0; a < o; ++a) {
            for (var u = 1024 * a, c = Math.min(1024 + u, r), s = new Array(c - u), f = u, l = 0; f < c; ++l,
            ++f)
                s[l] = n[f].charCodeAt(0);
            i[a] = new Uint8Array(s)
        }
        return rt.some(new Blob(i,{
            type: t
        }))
    }
    function ie(t, r, o) {
        return r = r || "image/png",
        m(HTMLCanvasElement.prototype.toBlob) ? new Yt(function(e, n) {
            t.toBlob(function(t) {
                t ? e(t) : n()
            }, r, o)
        }
        ) : Ln(t.toDataURL(r, o))
    }
    function ae(t) {
        return u = t,
        new Yt(function(t, e) {
            function n() {
                o.removeEventListener("load", i),
                o.removeEventListener("error", a)
            }
            var r = URL.createObjectURL(u)
              , o = new Image
              , i = function() {
                n(),
                t(o)
            }
              , a = function() {
                n(),
                e("Unable to load data of type " + u.type + ": " + r)
            };
            o.addEventListener("load", i),
            o.addEventListener("error", a),
            o.src = r,
            o.complete && setTimeout(i, 0)
        }
        ).then(function(t) {
            En(t);
            var e = _t(Pt(t), Rt(t));
            return Xt(e).drawImage(t, 0, 0),
            e
        });
        var u
    }
    function ue(n) {
        return new Yt(function(t) {
            var e = new FileReader;
            e.onloadend = function() {
                t(e.result)
            }
            ,
            e.readAsDataURL(n)
        }
        )
    }
    function ce(t) {
        return rt.from(0 === (t = t).indexOf("blob:") ? Dn(t) : 0 === t.indexOf("data:") ? Ln(t) : null)
    }
    function se(t, e, n) {
        function r(r, o) {
            return t.then(function(t) {
                return e = r,
                n = o,
                t.toDataURL(e = e || "image/png", n);
                var e, n
            })
        }
        var o = e.type
          , i = l(o)
          , o = l(n);
        return {
            getType: i,
            toBlob: function() {
                return Yt.resolve(e)
            },
            toDataURL: o,
            toBase64: function() {
                return n.split(",")[1]
            },
            toAdjustedBlob: function(e, n) {
                return t.then(function(t) {
                    return ie(t, e, n)
                })
            },
            toAdjustedDataURL: r,
            toAdjustedBase64: function(t, e) {
                return r(t, e).then(function(t) {
                    return t.split(",")[1]
                })
            },
            toCanvas: function() {
                return t.then(Nt)
            }
        }
    }
    function fe(e, t) {
        return ie(e, t).then(function(t) {
            return se(Yt.resolve(e), t, e.toDataURL())
        })
    }
    function le(t, e) {
        return e = e,
        se(ae(t = t), t, e)
    }
    function de(t) {
        return function(t) {
            t = t.src;
            return (0 === t.indexOf("data:") ? Ln : Dn)(t)
        }(t).then(function(t) {
            return ue(e = t).then(function(t) {
                return se(ae(e), e, t)
            });
            var e
        })
    }
    function me(t, e, n) {
        return void 0 === e && void 0 === n ? Pn(t) : t.toAdjustedBlob(e, n)
    }
    function pe(t) {
        return t.toDataURL()
    }
    function ge(t) {
        var e = URL.createObjectURL(t);
        return Rn(t, e)
    }
    function ve(t) {
        return Lt(t, ge)
    }
    function he(t, e, n) {
        return "" === e || t.length >= e.length && t.substr(n, n + e.length) === e
    }
    function ye(t, e) {
        return Mn(t, e) ? (n = t,
        e = e.length,
        n.substring(e)) : t;
        var n
    }
    function be(t, e) {
        return Fn(t, e) ? (n = t,
        e = e.length,
        n.substring(0, n.length - e)) : t;
        var n
    }
    function xe(t, e) {
        return -1 !== t.indexOf(e)
    }
    function we(t, e) {
        return function(t, e) {
            for (var n = null != e ? e : Un, r = 0; r < t.length && null != n; ++r)
                n = n[t[r]];
            return n
        }(t.split("."), e)
    }
    function Te(t, e) {
        return function(t, e) {
            for (var n, r, o = void 0 !== e ? e : Un, i = 0; i < t.length; ++i)
                n = o,
                r = t[i],
                void 0 !== n[r] && null !== n[r] || (n[r] = {}),
                o = n[r];
            return o
        }(t.split("."), e)
    }
    function Ie(t) {
        return t.dom.nodeName.toLowerCase()
    }
    function Se(t) {
        return t.dom.nodeType
    }
    function Oe(t) {
        return 8 === Se(t) || "#comment" === Ie(t)
    }
    function Ae(e) {
        return function(t) {
            return Wn(t) && Ie(t) === e
        }
    }
    function ke(t, e, n) {
        if (!(y(n) || r(n) || o(n)))
            throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", n, ":: Element ", t),
            new Error("Attribute value was not simple");
        t.setAttribute(e, n + "")
    }
    function Ce(t, e, n) {
        ke(t.dom, e, n)
    }
    function De(t, e) {
        var n = t.dom;
        ct(e, function(t, e) {
            ke(n, e, t)
        })
    }
    function Le(t, e) {
        return null === (e = t.dom.getAttribute(e)) ? void 0 : e
    }
    function Ee(t, e) {
        return rt.from(Le(t, e))
    }
    function _e(t, e) {
        return !(!(t = t.dom) || !t.hasAttribute) && t.hasAttribute(e)
    }
    function Ne(t, e) {
        t.dom.removeAttribute(e)
    }
    function Pe(t) {
        return tinymce.translate(Kn[t])
    }
    function Re(t, n) {
        var r = {};
        return R(Xn, function(e) {
            n[e].or(t[e]).each(function(t) {
                r[e] = t
            })
        }),
        Jn(r)
    }
    function Me(t, e, n, r, o) {
        return t.fold(e, n, r, o)
    }
    function Fe(e) {
        return rr(function(t) {
            t(e)
        })
    }
    function je(t, e) {
        t(e)
    }
    function Ue(t) {
        return Fe({
            response: Zn(t),
            bundle: Jn({})
        })
    }
    function He(t, e, n, r) {
        return {
            steps: t,
            input: e,
            label: n,
            capture: r
        }
    }
    function We(t, e, n) {
        var r;
        return (r = n,
        V(t, function(e) {
            return e.getAvailable(r).map(function(t) {
                return He(e.steps(), t, e.label(), e.capture())
            })
        })).getOrThunk(function() {
            var t = e.getAvailable(n);
            return He(e.steps(), t, e.label(), e.capture())
        })
    }
    function Be(o, t) {
        function e() {
            return t().map(function(t) {
                var e, r, n = Re(o.bundle, t.bundle);
                return {
                    response: (e = o.response,
                    r = t.response,
                    Me(e, rt.none, rt.none, rt.none, function(t, e, n) {
                        return Me(r, rt.none, function(t, e) {
                            return rt.some(Yn.incomplete(t, e, n))
                        }, rt.none, rt.none)
                    }).getOr(r)),
                    bundle: n
                }
            })
        }
        var n = p(nr, o);
        return Me(o.response, n, e, n, e)
    }
    function ze(t, n) {
        return j(t, function(t, e) {
            return t.bind(function(t) {
                return Be(t, function() {
                    return e(n, t)
                })
            })
        }, Fe({
            response: Qn([], []),
            bundle: Jn({})
        }))
    }
    function qe(t, e) {
        return void 0 === (e = Le(t, e)) || "" === e ? [] : e.split(" ")
    }
    function $e(t) {
        return void 0 !== t.dom.classList
    }
    function Ve(t) {
        return qe(t, "class")
    }
    function Ge(t, e) {
        return function(t, e, n) {
            n = qe(t, e).concat([n]);
            return Ce(t, e, n.join(" ")),
            !0
        }(t, "class", e)
    }
    function Ke(t, e) {
        return r = e,
        0 < (t = F(qe(n = t, e = "class"), function(t) {
            return t !== r
        })).length ? Ce(n, e, t.join(" ")) : Ne(n, e),
        0;
        var n, r
    }
    function Xe(t, e) {
        $e(t) ? t.dom.classList.add(e) : Ge(t, e)
    }
    function Je(t, e) {
        $e(t) ? t.dom.classList.remove(e) : Ke(t, e),
        0 === ($e(t = t) ? t.dom.classList : Ve(t)).length && Ne(t, "class")
    }
    function Ye(t, e) {
        return $e(t) && t.dom.classList.contains(e)
    }
    function Ze(t) {
        return void 0 !== t.style && m(t.style.getPropertyValue)
    }
    function Qe(n) {
        var r, o = !1;
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return o || (o = !0,
            r = n.apply(null, t)),
            r
        }
    }
    function tn(t, e) {
        var n = String(e).toLowerCase();
        return U(t, function(t) {
            return t.search(n)
        })
    }
    function en(t) {
        return window.matchMedia(t).matches
    }
    function nn(t, e) {
        if (1 !== (t = t.dom).nodeType)
            return !1;
        if (void 0 !== t.matches)
            return t.matches(e);
        if (void 0 !== t.msMatchesSelector)
            return t.msMatchesSelector(e);
        if (void 0 !== t.webkitMatchesSelector)
            return t.webkitMatchesSelector(e);
        if (void 0 !== t.mozMatchesSelector)
            return t.mozMatchesSelector(e);
        throw new Error("Browser lacks native selectors")
    }
    function rn(t) {
        return 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType || 0 === t.childElementCount
    }
    function on(t, e) {
        return e = void 0 === e ? document : e.dom,
        rn(e) ? [] : P(e.querySelectorAll(t), Vn.fromDom)
    }
    function an(t, e) {
        return t.dom === e.dom
    }
    function un(t) {
        return Vn.fromDom(t.dom.ownerDocument)
    }
    function cn(t) {
        return zn(t) ? t : un(t)
    }
    function sn(t) {
        return Vn.fromDom(cn(t).dom.defaultView)
    }
    function fn(t) {
        return rt.from(t.dom.parentNode).map(Vn.fromDom)
    }
    function ln(t, e) {
        for (var n = m(e) ? e : O, r = t.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode; ) {
            var i = r.parentNode
              , a = Vn.fromDom(i);
            if (o.push(a),
            !0 === n(a))
                break;
            r = i
        }
        return o
    }
    function dn(t) {
        return rt.from(t.dom.previousSibling).map(Vn.fromDom)
    }
    function mn(t) {
        return rt.from(t.dom.nextSibling).map(Vn.fromDom)
    }
    function pn(t) {
        return function(t) {
            t = ot.call(t, 0);
            return t.reverse(),
            t
        }(function(t, e) {
            for (var n = [], r = function(t) {
                return n.push(t),
                e(t)
            }, o = e(t); (o = o.bind(r)).isSome(); )
                ;
            return n
        }(t, dn))
    }
    function gn(t) {
        return P(t.dom.childNodes, Vn.fromDom)
    }
    function vn(t) {
        return function(t, e) {
            t = t.dom.childNodes;
            return rt.from(t[e]).map(Vn.fromDom)
        }(t, 0)
    }
    function hn(t) {
        var e = Cr(t);
        return qn(t = e) && f(t.dom.host) ? rt.some(e) : rt.none()
    }
    function yn(t) {
        return Vn.fromDom(t.dom.host)
    }
    function bn(t, e, n) {
        if (!y(n))
            throw console.error("Invalid call to CSS.set. Property ", e, ":: Value ", n, ":: Element ", t),
            new Error("CSS value must be a string: " + n);
        Ze(t) && t.style.setProperty(e, n)
    }
    function xn(t, e) {
        Ze(t) && t.style.removeProperty(e)
    }
    function wn(t, e, n) {
        t = t.dom,
        bn(t, e, n)
    }
    function Tn(t, e) {
        var n = t.dom;
        ct(e, function(t, e) {
            bn(n, e, t)
        })
    }
    function In(t, e) {
        var n = t.dom
          , r = window.getComputedStyle(n).getPropertyValue(e);
        return "" !== r || Lr(t) ? r : Er(n, e)
    }
    function Sn(t, e) {
        return t = t.dom,
        e = Er(t, e),
        rt.from(e).filter(function(t) {
            return 0 < t.length
        })
    }
    function On(t) {
        var e = {}
          , n = t.dom;
        if (Ze(n))
            for (var r = 0; r < n.style.length; r++) {
                var o = n.style.item(r);
                e[o] = n.style[o]
            }
        return e
    }
    function An(t, e) {
        var n = t.dom;
        xn(n, e),
        Ee(t, "style").map(jn).is("") && Ne(t, "style")
    }
    function kn(r, o, t) {
        Wn(r) && Wn(o) && R(t, function(t) {
            var e, n;
            e = o,
            Sn(r, n = t).each(function(t) {
                Sn(e, n).isNone() && wn(e, n, t)
            })
        })
    }
    var Cn, Dn = function(r) {
        return new Yt(function(t, n) {
            var e = new XMLHttpRequest;
            e.open("GET", r, !0),
            e.responseType = "blob",
            e.onload = function() {
                200 === this.status && t(this.response)
            }
            ,
            e.onerror = function() {
                var t, e = this;
                n(0 === this.status ? ((t = new Error("No access to download image")).code = 18,
                t.name = "SecurityError",
                t) : new Error("Error " + e.status + " downloading image"))
            }
            ,
            e.send()
        }
        )
    }, Ln = function(n) {
        return new Yt(function(t, e) {
            oe(n).fold(function() {
                e("uri is not base64: " + n)
            }, t)
        }
        )
    }, En = function(t) {
        URL.revokeObjectURL(t.src)
    }, _n = ue, Nn = oe, Pn = function(t) {
        return t.toBlob()
    }, Rn = function(r, o) {
        return $t(function(n) {
            _n(r).then(function(t) {
                var e = le(r, t)
                  , t = Et("image")
                  , e = St.blob(t, e, o);
                n(e)
            })
        })
    }, Mn = function(t, e) {
        return he(t, e, 0)
    }, Fn = function(t, e) {
        return he(t, e, t.length - e.length)
    }, jn = (Cn = /^\s+|\s+$/g,
    function(t) {
        return t.replace(Cn, "")
    }
    ), Un = "undefined" != typeof window ? window : Function("return this;")(), Hn = function(e) {
        return function(t) {
            return Se(t) === e
        }
    }, Wn = Hn(1), Bn = Hn(3), zn = Hn(9), qn = Hn(11), $n = function(t) {
        if (null == t)
            throw new Error("Node cannot be null or undefined");
        return {
            dom: t
        }
    }, Vn = {
        fromHtml: function(t, e) {
            e = (e || document).createElement("div");
            if (e.innerHTML = t,
            !e.hasChildNodes() || 1 < e.childNodes.length)
                throw console.error("HTML does not have a single root node", t),
                new Error("HTML must have a single root node");
            return $n(e.childNodes[0])
        },
        fromTag: function(t, e) {
            t = (e || document).createElement(t);
            return $n(t)
        },
        fromText: function(t, e) {
            t = (e || document).createTextNode(t);
            return $n(t)
        },
        fromDom: $n,
        fromPoint: function(t, e, n) {
            return rt.from(t.dom.elementFromPoint(e, n)).map($n)
        }
    }, Gn = function() {
        return 'Safari does not support direct paste of images. <a href="https://support.ephox.com/entries/88543243-Safari-Direct-paste-of-images-does-not-work" style="text-decoration: underline">More information on image pasting for Safari</a>'
    }, Kn = {
        "cement.dialog.paste.title": "Paste Formatting Options",
        "cement.dialog.paste.instructions": "Choose to keep or remove formatting in the pasted content.",
        "cement.dialog.paste.merge": "Keep formatting",
        "cement.dialog.paste.clean": "Remove formatting",
        "safari.imagepaste": Gn(),
        "webview.imagepaste": Gn(),
        "error.code.images.not.found": "The images service was not found: (",
        "error.imageupload": "Image failed to upload: (",
        "error.full.stop": ").",
        "errors.local.images.disallowed": "Local image paste has been disabled. Local images have been removed from pasted content.",
        "errors.imageimport.failed": "Some images failed to import.",
        "errors.imageimport.unsupported": "Unsupported image type.",
        "errors.imageimport.invalid": "Image is invalid."
    }, Xn = ["officeStyles", "htmlStyles", "gdocsStyles", "isWord", "isGoogleDocs", "proxyBin", "isInternal", "backgroundAssets"], Jn = function(e) {
        return q(Xn, function(t) {
            return rt.from(e[t])
        })
    }, Yn = Tt([{
        error: ["message"]
    }, {
        paste: ["elements", "correlated"]
    }, {
        cancel: []
    }, {
        incomplete: ["elements", "correlated", "message"]
    }]), Zn = Yn.error, Qn = Yn.paste, tr = Yn.cancel, er = Yn.incomplete, nr = Fe, rr = function(e) {
        function t(t) {
            e(t)
        }
        var r = rr;
        return {
            get: t,
            map: function(n) {
                return r(function(e) {
                    t(function(t) {
                        t = n(t);
                        e(t)
                    })
                })
            },
            bind: function(n) {
                return r(function(e) {
                    t(function(t) {
                        n(t).get(e)
                    })
                })
            }
        }
    }, or = function() {
        return ir(0, 0)
    }, ir = function(t, e) {
        return {
            major: t,
            minor: e
        }
    }, ar = {
        nu: ir,
        detect: function(t, e) {
            e = String(e).toLowerCase();
            return 0 === t.length ? or() : function(t, e) {
                var n = function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (r.test(e))
                            return r
                    }
                }(t, e);
                if (!n)
                    return {
                        major: 0,
                        minor: 0
                    };
                t = function(t) {
                    return Number(e.replace(n, "$" + t))
                }
                ;
                return ir(t(1), t(2))
            }(t, e)
        },
        unknown: or
    }, ur = function(t, n) {
        return tn(t, n).map(function(t) {
            var e = ar.detect(t.versionRegexes, n);
            return {
                current: t.name,
                version: e
            }
        })
    }, cr = function(t, n) {
        return tn(t, n).map(function(t) {
            var e = ar.detect(t.versionRegexes, n);
            return {
                current: t.name,
                version: e
            }
        })
    }, sr = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, fr = function(e) {
        return function(t) {
            return xe(t, e)
        }
    }, lr = [{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function(t) {
            return xe(t, "edge/") && xe(t, "chrome") && xe(t, "safari") && xe(t, "applewebkit")
        }
    }, {
        name: "Chrome",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, sr],
        search: function(t) {
            return xe(t, "chrome") && !xe(t, "chromeframe")
        }
    }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function(t) {
            return xe(t, "msie") || xe(t, "trident")
        }
    }, {
        name: "Opera",
        versionRegexes: [sr, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: fr("opera")
    }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: fr("firefox")
    }, {
        name: "Safari",
        versionRegexes: [sr, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function(t) {
            return (xe(t, "safari") || xe(t, "mobile/")) && xe(t, "applewebkit")
        }
    }], dr = [{
        name: "Windows",
        search: fr("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "iOS",
        search: function(t) {
            return xe(t, "iphone") || xe(t, "ipad")
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
    }, {
        name: "Android",
        search: fr("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "OSX",
        search: fr("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
    }, {
        name: "Linux",
        search: fr("linux"),
        versionRegexes: []
    }, {
        name: "Solaris",
        search: fr("sunos"),
        versionRegexes: []
    }, {
        name: "FreeBSD",
        search: fr("freebsd"),
        versionRegexes: []
    }, {
        name: "ChromeOS",
        search: fr("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
    }], mr = {
        browsers: l(lr),
        oses: l(dr)
    }, pr = "Firefox", gr = function(t) {
        var e = t.current
          , n = t.version
          , t = function(t) {
            return function() {
                return e === t
            }
        };
        return {
            current: e,
            version: n,
            isEdge: t("Edge"),
            isChrome: t("Chrome"),
            isIE: t("IE"),
            isOpera: t("Opera"),
            isFirefox: t(pr),
            isSafari: t("Safari")
        }
    }, vr = {
        unknown: function() {
            return gr({
                current: void 0,
                version: ar.unknown()
            })
        },
        nu: gr,
        edge: l("Edge"),
        chrome: l("Chrome"),
        ie: l("IE"),
        opera: l("Opera"),
        firefox: l(pr),
        safari: l("Safari")
    }, hr = "Windows", yr = "Android", br = "Solaris", xr = "FreeBSD", wr = "ChromeOS", Tr = function(t) {
        var e = t.current
          , n = t.version
          , t = function(t) {
            return function() {
                return e === t
            }
        };
        return {
            current: e,
            version: n,
            isWindows: t(hr),
            isiOS: t("iOS"),
            isAndroid: t(yr),
            isOSX: t("OSX"),
            isLinux: t("Linux"),
            isSolaris: t(br),
            isFreeBSD: t(xr),
            isChromeOS: t(wr)
        }
    }, Ir = {
        unknown: function() {
            return Tr({
                current: void 0,
                version: ar.unknown()
            })
        },
        nu: Tr,
        windows: l(hr),
        ios: l("iOS"),
        android: l(yr),
        linux: l("Linux"),
        osx: l("OSX"),
        solaris: l(br),
        freebsd: l(xr),
        chromeos: l(wr)
    }, Sr = function(t, e) {
        var n, r, o = mr.browsers(), i = mr.oses(), a = ur(o, t).fold(vr.unknown, vr.nu), u = cr(i, t).fold(Ir.unknown, Ir.nu);
        return {
            browser: a,
            os: u,
            deviceType: (n = a,
            r = t,
            o = e,
            a = (i = u).isiOS() && !0 === /ipad/i.test(r),
            t = i.isiOS() && !a,
            e = i.isiOS() || i.isAndroid(),
            u = e || o("(pointer:coarse)"),
            o = a || !t && e && o("(min-device-width:768px)"),
            e = t || e && !o,
            r = n.isSafari() && i.isiOS() && !1 === /safari/i.test(r),
            {
                isiPad: l(a),
                isiPhone: l(t),
                isTablet: l(o),
                isPhone: l(e),
                isTouch: l(u),
                isAndroid: i.isAndroid,
                isiOS: i.isiOS,
                isWebView: l(r),
                isDesktop: l(!e && !o && !r)
            })
        }
    }, Or = Qe(function() {
        return Sr(navigator.userAgent, en)
    }), Ar = nn, t = m(Element.prototype.attachShadow) && m(Node.prototype.getRootNode), kr = l(t), Cr = t ? function(t) {
        return Vn.fromDom(t.dom.getRootNode())
    }
    : cn, Dr = function(t) {
        return f(t.dom.shadowRoot)
    }, Lr = function(t) {
        var e = Bn(t) ? t.dom.parentNode : t.dom;
        if (null == e || null === e.ownerDocument)
            return !1;
        var n, r, o = e.ownerDocument;
        return hn(Vn.fromDom(e)).fold(function() {
            return o.body.contains(e)
        }, (n = Lr,
        r = yn,
        function(t) {
            return n(r(t))
        }
        ))
    }, Er = function(t, e) {
        return Ze(t) ? t.style.getPropertyValue(e) : ""
    };
    function _r(t, e, n) {
        for (var r = t.dom, o = m(n) ? n : O; r.parentNode; ) {
            var r = r.parentNode
              , i = Vn.fromDom(r);
            if (e(i))
                return rt.some(i);
            if (o(i))
                break
        }
        return rt.none()
    }
    function Nr(t, e) {
        return U(t.dom.childNodes, function(t) {
            return e(Vn.fromDom(t))
        }).map(Vn.fromDom)
    }
    function Pr(t, r) {
        var o = function(t) {
            for (var e = 0; e < t.childNodes.length; e++) {
                var n = Vn.fromDom(t.childNodes[e]);
                if (r(n))
                    return rt.some(n);
                n = o(t.childNodes[e]);
                if (n.isSome())
                    return n
            }
            return rt.none()
        };
        return o(t.dom)
    }
    function Rr(e, n) {
        fn(e).each(function(t) {
            t.dom.insertBefore(n.dom, e.dom)
        })
    }
    function Mr(t, e) {
        mn(t).fold(function() {
            fn(t).each(function(t) {
                Io(t, e)
            })
        }, function(t) {
            Rr(t, e)
        })
    }
    function Fr(e, n) {
        vn(e).fold(function() {
            Io(e, n)
        }, function(t) {
            e.dom.insertBefore(n.dom, t.dom)
        })
    }
    function jr(t, e) {
        Rr(t, e),
        Io(e, t)
    }
    function Ur(n, r) {
        R(r, function(t, e) {
            e = 0 === e ? n : r[e - 1];
            Mr(e, t)
        })
    }
    function Hr(e, t) {
        R(t, function(t) {
            Io(e, t)
        })
    }
    function Wr(t) {
        t.dom.textContent = "",
        R(gn(t), function(t) {
            So(t)
        })
    }
    function Br(t) {
        var e, n = gn(t);
        0 < n.length && (e = t,
        R(n, function(t) {
            Rr(e, t)
        })),
        So(t)
    }
    function zr(t) {
        return e = t,
        t = !1,
        Vn.fromDom(e.dom.cloneNode(t));
        var e
    }
    function qr(t, e) {
        return on(e, t)
    }
    function $r(t, n) {
        return rt.from(t.dom.nodeValue).bind(function(t) {
            var e = t.indexOf("]>")
              , t = function(e) {
                try {
                    return (new DOMParser).parseFromString(e, "text/html").body
                } catch (t) {
                    var n = document.implementation.createHTMLDocument("").body;
                    return n.innerHTML = e,
                    n
                }
            }("<div>" + t.slice(e + "]>".length, t.lastIndexOf("<![")) + "</div>");
            return Pr(Vn.fromDom(t), function(t) {
                return Ie(t) === n
            })
        })
    }
    function Vr(t) {
        return (Oe(t = t) ? $r(t, "v:shape") : rt.none()).map(function(t) {
            var n, e = Le(t, "o:spid"), r = void 0 === e ? Ee(t, "id").getOr("") : e, e = Vn.fromTag("img");
            return Xe(e, "rtf-data-image"),
            Ce(e, "data-image-id", r.substr("_x0000_".length)),
            Ce(e, "data-image-type", "code"),
            r = e,
            t = {
                width: Sn(t, "width"),
                height: Sn(t, "height")
            },
            n = r.dom,
            ct(t, function(t, e) {
                t.fold(function() {
                    xn(n, e)
                }, function(t) {
                    bn(n, e, t)
                })
            }),
            e
        })
    }
    function Gr(t) {
        if (Ae("img")(t)) {
            var e = Le(t, "src");
            if (null != e && Mn(e, "file://")) {
                t = zr(t),
                e = e.split(/[\/\\]/),
                e = e[e.length - 1];
                return Ce(t, "data-image-id", e),
                Ne(t, "src"),
                Ce(t, "data-image-type", "local"),
                Xe(t, "rtf-data-image"),
                rt.some(t)
            }
            return rt.none()
        }
        return rt.none()
    }
    function Kr(t, e) {
        return (e = (e || document).createElement("div")).innerHTML = t,
        gn(Vn.fromDom(e))
    }
    function Xr(t) {
        return t.dom.innerHTML
    }
    function Jr(t, e, n) {
        var r, o, i = Vn.fromDom(t);
        switch (t.nodeType) {
        case 1:
            e ? r = ko : (r = Ao,
            Tn(i, n || {}));
            var a = t
              , u = ("HTML" !== a.scopeName && a.scopeName && a.tagName && a.tagName.indexOf(":") <= 0 ? a.scopeName + ":" + a.tagName : a.tagName).toLowerCase();
            break;
        case 3:
            r = Co,
            o = t.nodeValue;
            break;
        case 8:
            r = Do,
            o = t.nodeValue;
            break;
        default:
            console.log("WARNING: Unsupported node type encountered: " + t.nodeType)
        }
        return {
            getNode: l(t),
            tag: function() {
                return u
            },
            type: function() {
                return r
            },
            text: function() {
                return o
            }
        }
    }
    function Yr(t, e, n, r) {
        var o = r.createElement(t);
        return ct(e, function(t, e) {
            o.setAttribute(e, t + "")
        }),
        Jr(o, !1, n)
    }
    function Zr(t, e) {
        return Jr(e.createElement(t), !0)
    }
    function Qr(t) {
        return ($e(t) ? function(t) {
            for (var e = t.dom.classList, n = new Array(e.length), r = 0; r < e.length; r++) {
                var o = e.item(r);
                null !== o && (n[r] = o)
            }
            return n
        }
        : Ve)(t)
    }
    function to(t, e) {
        var n = Ie(t)
          , r = e.name
          , e = void 0 !== e.condition ? e.condition : A;
        return Po.matches(r, n) && e(t)
    }
    function eo(t, e) {
        var n, r = P(t.dom.attributes, function(t) {
            return t.name
        });
        dt(e) !== r.length && (n = t,
        e = e,
        R(r, function(t) {
            Ne(n, t)
        }),
        ct(e, function(t, e) {
            Ce(n, e, t)
        }))
    }
    function no(t, e, n) {
        var r, t = t.dom.getAttribute("style"), o = (r = {},
        t = f(t = t) ? t.split(";") : [],
        R(t, function(t) {
            t = t.split(":");
            2 === t.length && (r[jn(t[0])] = jn(t[1]))
        }),
        r), i = {};
        return R(e, function(t) {
            var e = o[t];
            void 0 === e || n(e, t) || (i[t] = e)
        }),
        i
    }
    function ro(e) {
        var t = yt(e);
        return P(t, function(t) {
            return t + ": " + e[t]
        }).join("; ")
    }
    function oo(t, e) {
        var n, r, o, i = no(t, Ro, e);
        !function(n, t, e) {
            Ce(n, "style", "");
            var r = dt(t)
              , o = dt(e);
            0 === r && 0 === o ? Ne(n, "style") : 0 === r ? Ce(n, "style", ro(e)) : (ct(t, function(t, e) {
                wn(n, e, t)
            }),
            t = Le(n, "style"),
            e = 0 < o ? ro(e) + "; " : "",
            Ce(n, "style", e + t))
        }(t, (r = e,
        t = (n = t).dom.style,
        t = a(t) ? [] : t,
        o = {},
        R(t, function(e) {
            Sn(n, e).each(function(t) {
                r(t, e) || (o[e] = t)
            })
        }),
        o), i)
    }
    function io(t, e) {
        var n, r, e = (n = e,
        r = {},
        R(t.dom.attributes, function(t) {
            n(t.value, t.name) || (r[t.name] = t.value)
        }),
        r);
        eo(t, e)
    }
    function ao(t, e, c) {
        t(c, function(a, u) {
            return N(e, function(t) {
                return e = c,
                n = a,
                r = u,
                i = (o = t).name,
                t = void 0 !== o.condition ? o.condition : A,
                o = void 0 !== o.value ? o.value : Po.all(),
                Po.matches(i, r) && Po.matches(o, n) && t(e);
                var e, n, r, o, i
            })
        })
    }
    function uo(r) {
        var o = r.createDocumentFragment()
          , i = o
          , a = function(t) {
            i.appendChild(t)
        };
        return {
            dom: o,
            receive: function(t) {
                function e(t) {
                    t = t.getNode().cloneNode(!1),
                    a(t = t),
                    i = t
                }
                var n;
                switch (t.type()) {
                case Ao:
                    e(t);
                    break;
                case Co:
                    !function(t) {
                        t = r.createTextNode(t.text());
                        a(t)
                    }(t);
                    break;
                case ko:
                    n = i.parentNode,
                    i = null === n ? o : n;
                    break;
                case Do:
                    break;
                default:
                    throw new Error("Unsupported token type: " + t.type())
                }
            },
            label: "SERIALISER"
        }
    }
    function co(t, r) {
        var o = (r = void 0 === r ? window.document : r).createElement("div");
        r.body.appendChild(o),
        o.style.position = "absolute",
        o.style.left = "-10000px",
        o.innerHTML = t;
        var i = o.firstChild || Lo
          , a = []
          , u = !1;
        return {
            hasNext: function() {
                return void 0 !== i
            },
            next: function() {
                var t = i
                  , e = i
                  , n = u;
                return !u && t.firstChild ? (a.push(t),
                i = t.firstChild) : u = !u && 1 === t.nodeType || (t.nextSibling ? (i = t.nextSibling,
                !1) : (i = a.pop(),
                !0)),
                e === Lo || i || (r.body.removeChild(o),
                i = Lo),
                n = n,
                (e = e) === Lo ? e : e ? Jr(e, n) : void 0
            }
        }
    }
    function so(n) {
        return function(t) {
            var e;
            t = t,
            e = _o({
                tags: []
            }, n),
            t = qr(t, "*"),
            R(t, function(t) {
                N(e.tags, p(to, t)) && Br(t)
            })
        }
    }
    function fo(e) {
        return function(t) {
            var n;
            t = t,
            n = _o({
                tags: []
            }, e),
            t = qr(t, "*"),
            R(t, function(e) {
                U(n.tags, p(to, e)).each(function(t) {
                    t.mutate(e)
                })
            })
        }
    }
    function lo(n) {
        return function(t) {
            var e = Xr(t)
              , e = function(t, e, n) {
                for (var r = uo(t), o = co(e, t), i = function(t, e, n) {
                    for (var r = n, o = e.length - 1; 0 <= o; o--)
                        r = e[o](r, {}, t);
                    return r
                }(t, n, r); o.hasNext(); ) {
                    var a = o.next();
                    i.receive(a)
                }
                return r.dom
            }(un(t).dom, e, n);
            Wr(t),
            t.dom.appendChild(e)
        }
    }
    function mo(t, e, n) {
        var r = Vn.fromTag("div", t.dom);
        return Tn(r, {
            position: "fixed",
            left: "-100000px",
            top: "0px"
        }),
        Io(function(t) {
            t = t.dom.body;
            if (null == t)
                throw new Error("Body is not available yet");
            return Vn.fromDom(t)
        }(t), r),
        r.dom.innerHTML = e,
        R(n, function(t) {
            t(r)
        }),
        n = Xr(r),
        So(r),
        n
    }
    function po(i, t) {
        return function(e) {
            var n = function(t) {
                e.receive(t)
            }
              , r = function(t, e, n) {
                return n = void 0 !== n ? n : t.type() === ko,
                Jr(e, n, {})
            }
              , o = {
                emit: n,
                emitTokens: function(t) {
                    R(t, n)
                },
                receive: function(t) {
                    i(o, t, r)
                },
                document: window.document
            };
            return t(o),
            o
        }
    }
    function go(t, e) {
        if (void 0 === t || void 0 === e)
            throw console.trace(),
            new Error("brick");
        t.nextFilter.set(e)
    }
    function vo(t, e) {
        return _e(Vn.fromDom(e.getNode()), "data-list-level")
    }
    function ho(t) {
        if (_(["p"], t.tag())) {
            t = function(t, e) {
                t = Vn.fromDom(t.getNode());
                return Le(t, e)
            }(t, "class");
            return f(t) && /^MsoHeading/.test(t)
        }
        return 1
    }
    function yo(t, e, n, r) {
        var o, i, a = n.getCurrentListType(), a = n.getCurrentLevel() == r.level() ? a : null;
        return o = r.emblems(),
        i = a,
        U(o, function(t) {
            return "ul" === t.tag || f(i) && Mo(t, i, !0)
        }).orThunk(function() {
            return $(o)
        }).filter(function(t) {
            return !("ol" === t.tag && ho(e))
        })
    }
    function bo(t, e, n) {
        return yo(n.listType.get(), t, n.emitter, e).each(n.listType.set),
        t = e.level(),
        e = n.originalToken.get(),
        n = n.listType.get(),
        {
            level: l(t),
            token: l(e),
            type: l(n)
        }
    }
    function xo(a) {
        return function(t, e, n) {
            var r, o, i = n, n = (r = Vn.fromDom(i.getNode()),
            o = parseInt(Le(r, "data-list-level"), 10),
            n = Le(r, "data-list-emblems"),
            n = f(n) ? JSON.parse(n) : [],
            Ne(r, "data-list-level"),
            Ne(r, "data-list-emblems"),
            {
                level: l(o),
                emblems: l(n)
            });
            e.originalToken.set(i);
            n = bo(i, n, e);
            e.emitter.openItem(n.level(), n.token(), n.type()),
            go(e, a.inside())
        }
    }
    function wo(t, e, n) {
        return {
            pred: t,
            action: e,
            label: l(n)
        }
    }
    var To, Io = function(t, e) {
        t.dom.appendChild(e.dom)
    }, So = function(t) {
        t = t.dom;
        null !== t.parentNode && t.parentNode.removeChild(t)
    }, Oo = function(t, e) {
        var n = [];
        return R(gn(t), function(t) {
            n = (n = e(t) ? n.concat([t]) : n).concat(Oo(t, e))
        }),
        n
    }, Ao = "startElement", ko = "endElement", Co = "text", Do = "comment", Lo = Zr("html", window.document), Eo = Object.prototype.hasOwnProperty, _o = (To = function(t, e) {
        return e
    }
    ,
    function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (0 === t.length)
            throw new Error("Can't merge zero objects");
        for (var n = {}, r = 0; r < t.length; r++) {
            var o, i = t[r];
            for (o in i)
                Eo.call(i, o) && (n[o] = To(n[o], i[o]))
        }
        return n
    }
    ), n = Tt([{
        starts: ["value", "f"]
    }, {
        pattern: ["regex", "f"]
    }, {
        contains: ["value", "f"]
    }, {
        exact: ["value", "f"]
    }, {
        all: []
    }, {
        not: ["stringMatch"]
    }]), No = function(t, n) {
        return t.fold(function(t, e) {
            return 0 === e(n).indexOf(e(t))
        }, function(t, e) {
            return t.test(e(n))
        }, function(t, e) {
            return 0 <= e(n).indexOf(e(t))
        }, function(t, e) {
            return e(n) === e(t)
        }, A, function(t) {
            return !No(t, n)
        })
    }, Po = {
        starts: n.starts,
        pattern: n.pattern,
        contains: n.contains,
        exact: n.exact,
        all: n.all,
        not: n.not,
        cata: function(t, e, n, r, o, i, a) {
            return t.fold(e, n, r, o, i, a)
        },
        matches: No,
        caseSensitive: function(t) {
            return t
        },
        caseInsensitive: function(t) {
            return t.toLowerCase()
        }
    }, Ro = ["mso-list"], k = function(e) {
        return function(t) {
            !function(t, e) {
                var r = _o({
                    styles: [],
                    attributes: [],
                    classes: [],
                    tags: []
                }, e)
                  , e = qr(t, "*");
                R(e, function(n) {
                    ao(oo, r.styles, n),
                    ao(io, r.attributes, n),
                    R(r.classes, function(e) {
                        var t = _e(n, "class") ? Qr(n) : [];
                        R(t, function(t) {
                            Po.matches(e.name, t) && Je(n, t)
                        })
                    })
                });
                t = qr(t, "*");
                R(t, function(t) {
                    N(r.tags, p(to, t)) && So(t)
                })
            }(t, e)
        }
    }, Mo = function(t, e, n) {
        return void 0 === n && (n = !1),
        t === e || f(t) && f(e) && t.tag === e.tag && t.type === e.type && (n || t.variant === e.variant)
    };
    function Fo(t, r, o) {
        function e(t, e, n) {
            U(r, function(t) {
                return t.pred(e, n)
            }).fold(l(o), function(t) {
                return t.action
            })(t, e, n)
        }
        return e.toString = function() {
            return "Handlers for " + t
        }
        ,
        e
    }
    function jo(t) {
        var e = t;
        return {
            get: function() {
                return e
            },
            set: function(t) {
                e = t
            }
        }
    }
    function Uo(t, e) {
        return {
            state: l(t),
            result: l(e)
        }
    }
    function Ho(t, e) {
        return {
            state: l(t),
            value: l(e)
        }
    }
    function Wo(t, e, n, r) {
        return {
            level: l(t),
            type: l(e),
            types: l(n),
            items: l(r)
        }
    }
    function Bo(t) {
        var e = t.items().slice(0);
        if (0 < e.length && "p" !== e[e.length - 1]) {
            var n = e[e.length - 1];
            e[e.length - 1] = "p";
            e = Wo(t.level(), t.type(), t.types(), e);
            return Ho(e, rt.some(n))
        }
        return Ho(t, rt.none())
    }
    function zo(t, e, n) {
        for (var r = [], o = t; e(o); )
            var i = n(o)
              , o = i.state()
              , r = r.concat(i.result());
        return Uo(o, r)
    }
    function qo(t) {
        return t = function(t, e) {
            t = Vn.fromDom(t.getNode());
            return In(t, e)
        }(t, "margin-left"),
        f(t) && "0px" !== t ? {
            "margin-left": t
        } : {}
    }
    function $o(t, e, n) {
        var r = e.start && 1 < e.start ? {
            start: e.start
        } : {}
          , o = t.level() + 1
          , i = e
          , a = t.types().concat([e])
          , n = [p(Yr, e.tag, r, n)]
          , t = Wo(o, i, a, t.items());
        return Uo(t, n)
    }
    function Vo(t) {
        var e = t.types().slice(0)
          , n = [p(Zr, e.pop().tag)]
          , r = t.level() - 1
          , o = e[e.length - 1]
          , t = Wo(r, o, e, t.items());
        return Uo(t, n)
    }
    function Go(t, o, e) {
        var n = (r = o) ? qo(r) : {
            "list-style-type": "none"
        }
          , r = t.type() && !Mo(t.type(), e) ? function(t, e) {
            t = Vo(t),
            e = $o(t.state(), e, e.type ? {
                "list-style-type": e.type
            } : {});
            return Uo(e.state(), t.result().concat(e.result()))
        }(t, e) : Uo(t, [])
          , e = [p(Yr, "li", {}, n)]
          , n = (t = function(t, e) {
            var n = t.items().slice(0)
              , e = void 0 !== e && "p" !== e ? rt.some(e) : rt.none();
            e.fold(function() {
                n.push("p")
            }, function(t) {
                n.push(t)
            });
            t = Wo(t.level(), t.type(), t.types(), n);
            return Ho(t, e)
        }(r.state(), o && o.tag())).value().map(function(t) {
            var e, n, r = o;
            return e = r.getNode(),
            n = A,
            oo(Vn.fromDom(e), n),
            [l(r)]
        }).getOr([]);
        return Uo(t.state(), r.result().concat(e).concat(n))
    }
    function Ko(t) {
        var e = p(Zr, "li")
          , n = Bo(t)
          , t = n.value().fold(function() {
            return [e]
        }, function(t) {
            return [p(Zr, t), e]
        });
        return Uo(n.state(), t)
    }
    function Xo(t) {
        if (0 === t.length)
            throw new Error("Compose must have at least one element in the list");
        var e = t[t.length - 1]
          , t = B(t, function(t) {
            return t.result()
        });
        return Uo(e.state(), t)
    }
    function Jo(t) {
        var e = Ko(t)
          , t = Vo(e.state());
        return Xo([e, t])
    }
    function Yo(t, i, a, u) {
        return e = a,
        zo(t, function(t) {
            return t.level() < e
        }, function(t) {
            return n = i,
            r = a,
            o = u,
            t = (e = t).level() === r - 1 && n.type ? {
                "list-style-type": n.type
            } : {},
            t = $o(e, n, t),
            n = Go(t.state(), t.state().level() == r ? o : void 0, n),
            Xo([t, n]);
            var e, n, r, o
        });
        var e
    }
    function Zo(t, e) {
        return n = e,
        zo(t, function(t) {
            return t.level() > n
        }, Jo);
        var n
    }
    function Qo(t, e, n, r) {
        var o = t.level() > e ? Zo(t, e) : Uo(t, [])
          , i = o.state().level() === e ? function(t, e, n) {
            t = 0 < t.level() ? Ko(t) : Uo(t, []),
            e = Go(t.state(), n, e);
            return Xo([t, e])
        }(o.state(), r, n) : (t = o.state(),
        r = r,
        i = n,
        e = 1 < (n = e) ? Bo(t) : Ho(t, rt.none()),
        t = e.value().map(function(t) {
            return [p(Zr, t)]
        }).getOr([]),
        i = Yo(e.state(), r, n, i),
        Uo(i.state(), t.concat(i.result())));
        return Xo([o, i])
    }
    function ti(e, n) {
        function o(t) {
            R(t.result(), function(t) {
                t = t(n);
                e.emit(t)
            })
        }
        var i = Wo(0, void 0, [], []);
        return {
            closeAllLists: function() {
                var t = ki(i, 0);
                i = t.state(),
                o(t)
            },
            openItem: function(t, e, n) {
                var r;
                n && (r = t,
                n = "ul" === (n = n).tag && Ci[r - 1] === n.type ? {
                    tag: "ul"
                } : n,
                n = Qo(i, t, e, n),
                i = n.state(),
                o(n))
            },
            getCurrentListType: function() {
                return i.type()
            },
            getCurrentLevel: function() {
                return i.level()
            }
        }
    }
    function ei(t) {
        for (var e = []; null !== t.nextNode(); )
            e.push(Vn.fromDom(t.currentNode));
        return e
    }
    function ni(t) {
        var e = Or().browser;
        return (e.isIE() || e.isEdge() ? function(t) {
            try {
                return ei(t)
            } catch (t) {
                return []
            }
        }
        : ei)(t)
    }
    function ri(t) {
        return t.dom.textContent
    }
    function oi(o, t) {
        var e = Ui[o] ? [Ui[o]] : []
          , t = (n = o,
        (t = t) && ji[n] ? [ji[n]] : t ? [{
            tag: "ul",
            variant: n
        }] : [])
          , n = B(Fi, function(t) {
            return t.regex.test(o) ? [_o(t.type, (n = (e = o).split("."),
            r = function() {
                if (0 === n.length)
                    return e;
                var t = n[n.length - 1];
                return 0 === t.length && 1 < n.length ? n[n.length - 2] : t
            }(),
            r = parseInt(r, 10),
            isNaN(r) ? {} : {
                start: r
            }), {
                variant: (r = t.type,
                t = o,
                d(r.variant) ? "(" === t.charAt(0) ? "()" : ")" === t.charAt(t.length - 1) ? ")" : "." : r.variant)
            })] : [];
            var e, n, r
        })
          , n = e.concat(t).concat(n);
        return P(n, function(t) {
            return void 0 !== t.variant ? t : _o(t, {
                variant: o
            })
        })
    }
    function ii(t) {
        return t = no(t, ["mso-list"], O)["mso-list"],
        (t = f(t) && / level([0-9]+)/.exec(t)) && t[1] ? rt.some(parseInt(t[1], 10)) : rt.none()
    }
    function ai(t, e) {
        return t = ri(t).trim(),
        0 < (e = oi(t, e)).length ? rt.some(e) : rt.none()
    }
    function ui(t) {
        return Nr(t, Oe).bind(mn).filter(Ae("span"))
    }
    function ci(t) {
        return Pr(t, function(t) {
            return (Wn(t) ? no(t, ["mso-list"], O) : {})["mso-list"]
        })
    }
    function si(t) {
        t = function(t, e) {
            e = e.fold(Mi, function(e) {
                return function(t) {
                    return e(t.nodeValue)
                }
            });
            e.acceptNode = e;
            e = document.createTreeWalker(t.dom, NodeFilter.SHOW_COMMENT, e, !1);
            return ni(e)
        }(t, rt.none()),
        R(t, So)
    }
    function fi(t, e, n, r) {
        !function(t, e, n) {
            Ce(t, "data-list-level", e);
            n = JSON.stringify(n);
            Ce(t, "data-list-emblems", n)
        }(t, e, n),
        si(t),
        R(r, So),
        Ne(t, "style"),
        Ne(t, "class")
    }
    function li(r) {
        return ii(r).bind(function(n) {
            return Nr(r, Hi).bind(function(e) {
                return ai(e, !0).map(function(t) {
                    return {
                        mutate: function() {
                            fi(r, n, t, [e])
                        }
                    }
                })
            })
        })
    }
    function di(r) {
        return "p" !== Ie(r) ? rt.none() : ci(r).bind(function(t) {
            var n = fn(t).getOr(t)
              , e = Hi(n);
            return ai(t, e).bind(function(e) {
                return Sn(r, "margin-left").bind(function(t) {
                    t = parseInt(t, 10);
                    return isNaN(t) ? rt.none() : rt.some(Math.max(1, Math.ceil(t / 18)))
                }).map(function(t) {
                    return {
                        mutate: function() {
                            fi(r, t, e, [n])
                        }
                    }
                })
            })
        })
    }
    function mi(t) {
        return li(t).orThunk(function() {
            return ii(r = t).bind(function(n) {
                return ui(r).bind(function(e) {
                    return ai(e, Hi(e)).map(function(t) {
                        return {
                            mutate: function() {
                                fi(r, n, t, [e])
                            }
                        }
                    })
                })
            });
            var r
        }).orThunk(function() {
            return ii(r = t).bind(function(n) {
                return ui(r).bind(function(e) {
                    return ai(e, Hi(e)).map(function(t) {
                        return {
                            mutate: function() {
                                fi(r, n, t, [e])
                            }
                        }
                    })
                })
            });
            var r
        }).orThunk(function() {
            return "p" !== Ie(r = t) ? rt.none() : ii(r).bind(function(n) {
                return ci(r).bind(function(e) {
                    return ai(e, !1).map(function(t) {
                        return {
                            mutate: function() {
                                fi(r, n, t, [fn(e).getOr(e)])
                            }
                        }
                    })
                })
            });
            var r
        }).orThunk(function() {
            return di(t)
        })
    }
    function pi(t, e) {
        return Pr(t, e).isSome()
    }
    function gi(t) {
        return zi.get(t)
    }
    function vi(t, e) {
        return zi.set(t, e)
    }
    function hi(t, e) {
        var n = Vn.fromTag(t);
        return Rr(e, n),
        t = e.dom.attributes,
        R(t, function(t) {
            n.dom.setAttribute(t.name, t.value)
        }),
        t = gn(e),
        Hr(n, t),
        So(e),
        n
    }
    function yi(t) {
        var o = hi("span", t)
          , i = {
            "font-size": {
                1: "8pt",
                2: "10pt",
                3: "12pt",
                4: "14pt",
                5: "18pt",
                6: "24pt",
                7: "36pt"
            }
        };
        ct({
            face: "font-family",
            size: "font-size",
            color: "color"
        }, function(n, r) {
            Ee(o, r).each(function(t) {
                var e = i[n]
                  , t = void 0 !== e && void 0 !== e[t] ? e[t] : t;
                wn(o, n, t),
                Ne(o, r)
            })
        })
    }
    var bi, xi, wi, Ti, Ii, Si, Oi, Ai, ki = Zo, Ci = ["disc", "circle", "square"], Di = {
        getCurrentListType: function() {
            return Li().getCurrentListType()
        },
        getCurrentLevel: function() {
            return Li().getCurrentLevel()
        },
        closeAllLists: function() {
            return Li().closeAllLists()
        },
        openItem: function(t, e, n) {
            return Li().openItem(t, e, n)
        }
    }, Li = function() {
        return {
            getCurrentListType: l({}),
            getCurrentLevel: l(1),
            closeAllLists: h,
            openItem: u
        }
    }, Ei = {
        inside: function() {
            return Ni
        },
        outside: function() {
            return Pi
        }
    }, _i = (bi = !1,
    {
        check: function(t) {
            return !(!bi || t.type() !== Co) || (t.type() === Ao && "style" === t.tag() ? bi = !0 : t.type() === ko && "style" === t.tag() && !(bi = !1))
        }
    }), Ni = (xi = Ei,
    Fo("Inside.List.Item", [wo(function(t, e) {
        t = t.originalToken.get();
        return e.type() === ko && null !== t && e.tag() === t.tag()
    }, function(t, e) {
        go(e, xi.outside())
    }, "Closing open tag")], function(t, e, n) {
        t.emit(n)
    })), Pi = Fo("Outside.List.Item", [wo(vo, xo(wi = Ei), "Data List ****"), wo(function(t, e) {
        return e.type() === Co && ((e = e).type() === Co && /^[\s\u00A0]*$/.test(e.text()))
    }, function(t, e, n) {
        t.emit(n)
    }, "Whitespace")], function(t, e, n) {
        e.emitter.closeAllLists(),
        t.emit(n),
        go(e, wi.outside())
    }), Ri = (Ii = jo(Ti = Pi),
    Si = jo(null),
    Oi = jo(null),
    {
        reset: function(t) {
            Ii.set(Ti),
            Si.set(null),
            Oi.set(null),
            Li = l(ti(t, t.document))
        },
        nextFilter: Ii,
        originalToken: Si,
        listType: Oi,
        emitter: Di
    }), It = po(function(t, e, n) {
        var r;
        _i.check(e) || (r = t,
        t = e,
        (e = Ri).nextFilter.get()(r, e, t))
    }, Ri.reset), Mi = l(A), Fi = [{
        regex: /^\(?[dc][\.\)]$/,
        type: {
            tag: "ol",
            type: "lower-alpha"
        }
    }, {
        regex: /^\(?[DC][\.\)]$/,
        type: {
            tag: "ol",
            type: "upper-alpha"
        }
    }, {
        regex: /^\(?M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})[\.\)]$/,
        type: {
            tag: "ol",
            type: "upper-roman"
        }
    }, {
        regex: /^\(?m*(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})[\.\)]$/,
        type: {
            tag: "ol",
            type: "lower-roman"
        }
    }, {
        regex: /^\(?[0-9]+[\.\)]$/,
        type: {
            tag: "ol"
        }
    }, {
        regex: /^([0-9]+\.)*[0-9]+\.?$/,
        type: {
            tag: "ol",
            variant: "outline"
        }
    }, {
        regex: /^\(?[a-z]+[\.\)]$/,
        type: {
            tag: "ol",
            type: "lower-alpha"
        }
    }, {
        regex: /^\(?[A-Z]+[\.\)]$/,
        type: {
            tag: "ol",
            type: "upper-alpha"
        }
    }], ji = {
        "\u2022": {
            tag: "ul",
            type: "disc"
        },
        "\xb7": {
            tag: "ul",
            type: "disc"
        },
        "\xa7": {
            tag: "ul",
            type: "square"
        }
    }, Ui = {
        o: {
            tag: "ul",
            type: "circle"
        },
        "-": {
            tag: "ul",
            type: "disc"
        },
        "\u25cf": {
            tag: "ul",
            type: "disc"
        },
        "\ufffd": {
            tag: "ul",
            type: "circle"
        }
    }, Hi = function(t) {
        return Wn(t) && Sn(t, "font-family").exists(function(t) {
            return _(["wingdings", "symbol"], t.toLowerCase())
        })
    }, Wi = fo({
        tags: [{
            name: Po.pattern(/^(p|h\d+)$/, Po.caseInsensitive),
            mutate: function(t) {
                mi(t).each(function(t) {
                    t.mutate()
                })
            }
        }]
    }), Ot = It, Bi = function(t) {
        t = t.dom.attributes;
        return null == t || (0 === t.length || 1 === t.length && "style" === t[0].name)
    }, At = function(n, r) {
        var e = function(t) {
            return n(t) ? rt.from(t.dom.nodeValue) : rt.none()
        };
        return {
            get: function(t) {
                if (!n(t))
                    throw new Error("Can only get " + r + " value of a " + r + " node");
                return e(t).getOr("")
            },
            getOption: e,
            set: function(t, e) {
                if (!n(t))
                    throw new Error("Can only set raw " + r + " value of a " + r + " node");
                t.dom.nodeValue = e
            }
        }
    }, zi = At(Bn, "text"), qi = Ae("li"), $i = function(t) {
        return dn(t).bind(function(t) {
            return Bn(t) && 0 === gi(t).trim().length ? $i(t) : qi(t) ? rt.some(t) : rt.none()
        })
    };
    (Hn = Ai = Ai || {})[Hn.Word = 0] = "Word",
    Hn[Hn.GoogleDocs = 1] = "GoogleDocs",
    Hn[Hn.Html = 2] = "Html";
    function Vi(t) {
        return e = t,
        ua.test(e) || ca.test(e) ? rt.some({
            value: t
        }) : rt.none();
        var e
    }
    function Gi(t) {
        return (1 === (t = t.toString(16)).length ? "0" + t : t).toUpperCase()
    }
    function Ki(t) {
        return {
            value: Gi(t.red) + Gi(t.green) + Gi(t.blue)
        }
    }
    function Xi(t, e, n, r) {
        return {
            red: t,
            green: e,
            blue: n,
            alpha: r
        }
    }
    function Ji(t, e, n, r) {
        return t = parseInt(t, 10),
        e = parseInt(e, 10),
        n = parseInt(n, 10),
        r = parseFloat(r),
        Xi(t, e, n, r)
    }
    function Yi(o) {
        return "currentcolor" === o || "transparent" === o ? o : "#" + Vi(ye(o, "#").toUpperCase()).orThunk(function() {
            return function(t) {
                if ("transparent" === t)
                    return rt.some(Xi(0, 0, 0, 0));
                var e = sa.exec(t);
                if (null !== e)
                    return rt.some(Ji(e[1], e[2], e[3], "1"));
                t = fa.exec(t);
                return null !== t ? rt.some(Ji(t[1], t[2], t[3], t[4])) : rt.none()
            }(o).map(Ki)
        }).getOrThunk(function() {
            var t = document.createElement("canvas");
            t.height = 1,
            t.width = 1;
            var e = t.getContext("2d");
            e.clearRect(0, 0, t.width, t.height),
            e.fillStyle = "#FFFFFF",
            e.fillStyle = o,
            e.fillRect(0, 0, 1, 1);
            var n = e.getImageData(0, 0, 1, 1).data
              , r = n[0]
              , t = n[1]
              , e = n[2]
              , n = n[3];
            return Ki(Xi(r, t, e, n))
        }).value
    }
    function Zi(t, e) {
        switch (e) {
        case "color":
            return Yi(t);
        case "font-family":
            return t.replace(/['"]/g, "");
        case "font-weight":
            return function(t) {
                switch (t) {
                case "bold":
                    return "700";
                case "normal":
                    return "400";
                default:
                    return t
                }
            }(t);
        default:
            return Fn(e, "-color") ? Yi(t) : t.replace(/^0(pt|px|pc|in|cm|mm|Q|cap|ch|ic|em|ex|lh|rlh|rem|vw|vh|vb|vi|vmax|vmin|%)$/, "0")
        }
    }
    function Qi(t, e, n, r) {
        var o = un(t).dom.createRange();
        return o.setStart(t.dom, e),
        o.setEnd(n.dom, r),
        o
    }
    function ta(t) {
        return xa.get(t)
    }
    function ea(t) {
        t = hi("span", t),
        Xe(t, "ephox-limbo-transform"),
        wn(t, "text-decoration", "underline")
    }
    var na, ra, oa, ia = function(t) {
        return "rtl" === In(t, "direction") ? "rtl" : "ltr"
    }, Gn = function(r) {
        return function(n) {
            Ee(n, r.attrName).each(function(t) {
                var e = f(r.styleName) ? r.styleName : r.attrName;
                Sn(n, e).isNone() && (t = r.mapValue(t),
                wn(n, e, t)),
                Ne(n, r.attrName)
            })
        }
    }, aa = function(t) {
        t = Ie(t);
        return "td" === t || "tr" === t || "col" === t || "th" === t
    }, ua = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, ca = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, sa = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/, fa = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/, la = fo({
        tags: [{
            name: Po.pattern(/^(p|div)$/, Po.caseInsensitive),
            mutate: function(e) {
                var t = "ltr" === ia(e)
                  , n = t ? "margin-left" : "margin-right"
                  , r = t ? "padding-left" : "padding-right";
                Sn(e, n).each(function() {
                    var t = In(e, n);
                    wn(e, r, t),
                    An(e, n)
                })
            }
        }]
    }), da = so({
        tags: [{
            name: Po.exact("b", Po.caseInsensitive),
            condition: function(t) {
                return Ee(t, "id").exists(function(t) {
                    return Mn(t, "docs-internal-guid")
                })
            }
        }]
    }), ma = k({
        attributes: [{
            name: Po.exact("id", Po.caseInsensitive),
            value: Po.starts("docs-internal-guid", Po.caseInsensitive)
        }]
    }), pa = [fo({
        tags: [{
            name: Po.exact("col", Po.caseInsensitive),
            mutate: Gn({
                attrName: "width",
                mapValue: function(t) {
                    return t.replace(/^(\d+)$/, "$1px")
                }
            })
        }]
    })], sr = function(n) {
        return fo({
            tags: [{
                name: Po.exact(n.matchTag, Po.caseInsensitive),
                mutate: function(e) {
                    mt(On(e), n.key).exists(function(t) {
                        return _(n.values, t)
                    }) && (jr(e, Vn.fromTag(n.newTag)),
                    An(e, n.key),
                    s(n.removeExtra) && R(n.removeExtra, function(t) {
                        return An(e, t),
                        0
                    }))
                }
            }]
        })
    }, ga = [sr({
        matchTag: "span",
        key: "font-weight",
        values: ["700", "bold"],
        newTag: "strong"
    }), sr({
        matchTag: "span",
        key: "font-style",
        values: ["italic"],
        newTag: "em"
    }), sr({
        matchTag: "span",
        key: "vertical-align",
        values: ["sub"],
        newTag: "sub",
        removeExtra: ["font-size"]
    }), sr({
        matchTag: "span",
        key: "vertical-align",
        values: ["super"],
        newTag: "sup",
        removeExtra: ["font-size"]
    })], va = ["p", "div", "article", "aside", "details", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"], ha = k({
        styles: [{
            name: Po.exact("background-color", Po.caseInsensitive),
            value: Po.exact("transparent", Po.caseInsensitive)
        }, {
            name: Po.exact("white-space", Po.caseInsensitive),
            value: Po.starts("pre", Po.caseInsensitive)
        }, {
            name: Po.pattern(/^overflow(-[xy])?$/, Po.caseInsensitive),
            condition: function(t) {
                return aa(t) && Sn(t, "overflow").is("hidden")
            }
        }, {
            name: Po.exact("overflow-wrap", Po.caseInsensitive),
            condition: aa
        }, {
            name: Po.exact("table-layout", Po.caseInsensitive),
            value: Po.exact("fixed", Po.caseInsensitive),
            condition: Ae("table")
        }, {
            name: Po.exact("line-height", Po.caseInsensitive),
            value: Po.exact("1.38", Po.caseInsensitive)
        }, {
            name: Po.exact("vertical-align", Po.caseInsensitive),
            value: Po.exact("baseline", Po.caseInsensitive)
        }, {
            name: Po.exact("font-style", Po.caseInsensitive),
            value: Po.exact("normal", Po.caseInsensitive)
        }, {
            name: Po.exact("font-variant", Po.caseInsensitive),
            value: Po.exact("normal", Po.caseInsensitive)
        }, {
            name: Po.exact("background-color", Po.caseInsensitive),
            value: Po.exact("transparent", Po.caseInsensitive)
        }, {
            name: Po.starts("padding", Po.caseInsensitive),
            condition: aa
        }, {
            name: Po.pattern(/^text-decoration(-(line|thickness|style|color))?$/, Po.caseInsensitive),
            condition: function(t) {
                return !Ae("a")(t) && Sn(t, "text-decoration").is("none")
            }
        }],
        attributes: [{
            name: Po.exact("aria-level", Po.caseInsensitive),
            condition: Ae("li")
        }, {
            name: Po.exact("dir", Po.caseInsensitive),
            value: Po.exact("ltr", Po.caseInsensitive),
            condition: function(t) {
                return _(va, Ie(t))
            }
        }, {
            name: Po.exact("role", Po.caseInsensitive),
            value: Po.exact("presentation", Po.caseInsensitive),
            condition: function(t) {
                return Ae("p")(t) && fn(t).exists(Ae("li"))
            }
        }]
    }), ya = k({
        styles: [{
            name: Po.exact("text-align", Po.caseInsensitive),
            value: Po.exact("right", Po.caseInsensitive),
            condition: function(t) {
                return "rtl" === ia(t)
            }
        }]
    }), ba = fo({
        tags: [{
            name: Po.exact("p", Po.caseInsensitive),
            condition: function(e) {
                function t(t) {
                    return Sn(e, t).map(function(t) {
                        return parseInt(t, 10)
                    }).filter(function(t) {
                        return !isNaN(t)
                    }).getOr(0)
                }
                var n = ia(e);
                return t("text-indent") + t("rtl" === n ? "padding-right" : "padding-left") === 0
            },
            mutate: function(t) {
                var e = ia(t);
                An(t, "text-indent"),
                An(t, "rtl" === e ? "padding-right" : "padding-left")
            }
        }]
    }), fr = function(e) {
        return function(t) {
            return Ye(t, e)
        }
    }, xa = At(Oe, "comment"), wa = k({
        tags: [{
            name: Po.exact("script", Po.caseInsensitive)
        }, {
            name: Po.exact("link", Po.caseInsensitive)
        }, {
            name: Po.exact("style", Po.caseInsensitive),
            condition: function(t) {
                return 0 === Xr(t).length
            }
        }],
        attributes: [{
            name: Po.starts("on", Po.caseInsensitive)
        }, {
            name: Po.exact('"', Po.caseInsensitive)
        }, {
            name: Po.exact("lang", Po.caseInsensitive)
        }, {
            name: Po.exact("language", Po.caseInsensitive)
        }],
        styles: [{
            name: Po.all(),
            value: Po.pattern(/OLE_LINK/i, Po.caseInsensitive)
        }]
    }), Ta = k({
        tags: [{
            name: Po.exact("meta", Po.caseInsensitive)
        }]
    }), Ia = k({
        tags: [{
            name: Po.exact("style", Po.caseInsensitive)
        }]
    }), Sa = k({
        styles: [{
            name: Po.not(Po.pattern(/^(width|height|list-style-type)$/, Po.caseInsensitive)),
            condition: function(t) {
                return !Ye(t, "ephox-limbo-transform")
            }
        }, {
            name: Po.pattern(/^(width|height)$/, Po.caseInsensitive),
            condition: function(t) {
                return "img" !== Ie(t) && !("table" === Ie(t = t) || aa(t))
            }
        }]
    }), Oa = k({
        classes: [{
            name: Po.not(Po.exact("rtf-data-image", Po.caseInsensitive))
        }]
    }), Aa = k({
        styles: [{
            name: Po.pattern(/^(mso-.*|tab-stops|tab-interval|language|text-underline|text-effect|text-line-through|font-color|horiz-align|list-image-[0-9]+|separator-image|table-border-color-(dark|light)|vert-align|vnd\..*)$/, Po.caseInsensitive)
        }]
    }), ka = k({
        classes: [{
            name: Po.pattern(/mso/i, Po.caseInsensitive)
        }]
    }), Ca = so({
        tags: [{
            name: Po.exact("img", Po.caseInsensitive),
            condition: function(t) {
                t = Le(t, "src");
                return y(t) && /^file:/.test(t)
            }
        }]
    }), Da = so({
        tags: [{
            name: Po.exact("a", Po.caseInsensitive),
            condition: Bi
        }]
    }), La = k({
        attributes: [{
            name: Po.exact("style", Po.caseInsensitive),
            value: Po.exact("", Po.caseInsensitive)
        }]
    }), Ea = k({
        attributes: [{
            name: Po.exact("class", Po.caseInsensitive),
            value: Po.exact("", Po.caseInsensitive)
        }]
    }), _a = so({
        tags: [{
            name: Po.pattern(/^(font|em|strong|samp|acronym|cite|code|dfn|kbd|tt|b|i|u|s|sub|sup|ins|del|var|span)$/, Po.caseInsensitive),
            condition: (na = function(t) {
                return !Bi(t) || (n = null != (n = (e = t).dom.attributes) && 0 < n.length,
                ("span" !== Ie(e) || n) && pi(t, function(t) {
                    var e = !Bi(t)
                      , n = !_(["font", "em", "strong", "samp", "acronym", "cite", "code", "dfn", "kbd", "tt", "b", "i", "u", "s", "sub", "sup", "ins", "del", "var", "span"], Ie(t));
                    return Bn(t) || e || n
                }));
                var e, n
            }
            ,
            function(t) {
                return !na(t)
            }
            )
        }]
    }), Na = fo({
        tags: [{
            name: Po.exact("p", Po.caseInsensitive),
            mutate: function(t) {
                0 === Xr(t).length && Io(t, Vn.fromTag("br"))
            }
        }]
    }), Pa = fo({
        tags: [{
            name: Po.pattern(/ol|ul/, Po.caseInsensitive),
            mutate: function(e) {
                fn(e).each(function(t) {
                    t = Ie(t);
                    _(["ol", "ul"], t) && $i(e).fold(function() {
                        var t = Vn.fromTag("li");
                        wn(t, "list-style-type", "none"),
                        jr(e, t)
                    }, function(t) {
                        Io(t, e)
                    })
                })
            }
        }]
    }), Ra = k({
        classes: [{
            name: Po.exact("ephox-limbo-transform", Po.caseInsensitive)
        }]
    }), Ma = k({
        tags: [{
            name: Po.exact("br", Po.caseInsensitive),
            condition: fr("Apple-interchange-newline")
        }]
    }), Fa = k({
        styles: [{
            name: Po.pattern(/^-/, Po.caseInsensitive)
        }, {
            name: Po.all(),
            value: Po.exact("initial", Po.caseInsensitive)
        }, {
            name: Po.exact("background-color", Po.caseInsensitive),
            value: Po.exact("transparent", Po.caseInsensitive)
        }, {
            name: Po.exact("font-style", Po.caseInsensitive),
            value: Po.exact("normal", Po.caseInsensitive)
        }, {
            name: Po.pattern(/font-variant.*/, Po.caseInsensitive)
        }, {
            name: Po.exact("letter-spacing", Po.caseInsensitive)
        }, {
            name: Po.exact("font-weight", Po.caseInsensitive),
            value: Po.pattern(/400|normal/, Po.caseInsensitive)
        }, {
            name: Po.exact("orphans", Po.caseInsensitive)
        }, {
            name: Po.exact("text-decoration", Po.caseInsensitive),
            value: Po.exact("none", Po.caseInsensitive)
        }, {
            name: Po.exact("text-size-adjust", Po.caseInsensitive)
        }, {
            name: Po.exact("text-indent", Po.caseInsensitive),
            value: Po.exact("0px", Po.caseInsensitive)
        }, {
            name: Po.exact("text-transform", Po.caseInsensitive),
            value: Po.exact("none", Po.caseInsensitive)
        }, {
            name: Po.exact("white-space", Po.caseInsensitive),
            value: Po.exact("normal", Po.caseInsensitive)
        }, {
            name: Po.exact("widows", Po.caseInsensitive)
        }, {
            name: Po.exact("word-spacing", Po.caseInsensitive),
            value: Po.exact("0px", Po.caseInsensitive)
        }, {
            name: Po.exact("text-align", Po.caseInsensitive),
            value: Po.pattern(/start|end/, Po.caseInsensitive)
        }, {
            name: Po.exact("font-weight", Po.caseInsensitive),
            value: Po.pattern(/700|bold/, Po.caseInsensitive),
            condition: function(t) {
                return /^h\d$/.test(Ie(t))
            }
        }]
    }), ja = (ra = Ua(dn, Fn),
    oa = Ua(mn, Mn),
    fo({
        tags: [{
            name: Po.exact("span", Po.caseInsensitive),
            condition: fr("Apple-converted-space"),
            mutate: function(t) {
                "\xa0" === ri(t) && (ra(t) || oa(t) ? Br(t) : (Rr(t, Vn.fromText(" ")),
                So(t)))
            }
        }]
    }));
    function Ua(t, n) {
        return function(e) {
            return t(e).filter(function(t) {
                return Bn(e) && n(ri(t) || "", " ")
            }).isSome()
        }
    }
    var Ha, Wa = (Ha = /^file:\/\/\/[^#]+(#[^#]+)$/,
    fo({
        tags: [{
            name: Po.exact("a", Po.caseInsensitive),
            condition: function(t) {
                t = Le(t, "href");
                return !!t && Ha.test(t)
            },
            mutate: function(e) {
                Ee(e, "href").each(function(t) {
                    Ce(e, "href", t.replace(Ha, "$1"))
                })
            }
        }]
    })), Ba = k({
        attributes: [{
            name: Po.exact("href", Po.caseInsensitive),
            value: Po.starts("file:///", Po.caseInsensitive)
        }]
    }), za = fo({
        tags: [qa("a", "data-ephox-href", "href"), qa("img", "data-ephox-src", "src")]
    });
    function qa(t, n, r) {
        return {
            name: Po.exact(t, Po.caseInsensitive),
            condition: function(t) {
                return _e(t, n)
            },
            mutate: function(e) {
                Ee(e, n).each(function(t) {
                    Ce(e, r, t),
                    Ne(e, n)
                })
            }
        }
    }
    function $a(i) {
        var a = ["table", "thead", "tbody", "tfoot", "th", "tr", "td", "ul", "ol", "li"]
          , t = Oo(i, Oe)
          , e = U(t, function(t) {
            return xe(ta(t), "StartFragment")
        })
          , n = U(t, function(t) {
            return xe(ta(t), "EndFragment")
        });
        e.each(function(o) {
            n.each(function(t) {
                for (var e = o, n = [], r = function(t, e, n, r) {
                    r = Qi(t, e, n, r);
                    return Vn.fromDom(r.commonAncestorContainer)
                }(o, 0, t, 0); void 0 !== r && !an(r, i); )
                    _(a, Ie(r)) ? e = r : n.push(r),
                    r = fn(r).getOrUndefined();
                R(n, Br),
                R(pn(e), So)
            }),
            So(o)
        }),
        n.each(So)
    }
    function Va(t, e) {
        return t = t,
        zi.getOption(t).exists(function(t) {
            return 0 === e(t).length
        })
    }
    function Ga(t) {
        return t.browser.isIE() && 11 <= t.browser.version.major
    }
    function Ka(n, i) {
        return po(function(t, e) {
            var r, o, e = (r = e,
            o = i,
            n(Vn.fromDom(r.getNode())).fold(function() {
                return [r]
            }, function(t) {
                var e = r.type() === ko
                  , n = [Jr(t.dom, e)];
                return !e && o && n.push(Jr(t.dom, !0)),
                n
            }));
            t.emitTokens(e)
        }, h)
    }
    function Xa(t) {
        var e = [pu, Aa, ka]
          , n = [pu, Sa, function(t) {
            t = P(t = void 0 === t ? [] : t, function(t) {
                return {
                    name: Po.exact(t, Po.caseInsensitive)
                }
            });
            return so({
                tags: t
            })
        }(t.cleanFilteredInlineElements), Oa];
        return t.merge ? e : n
    }
    function Ja(t, e) {
        return t.type === Ai.GoogleDocs ? function() {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
            for (var r = Array(t), o = 0, e = 0; e < n; e++)
                for (var i = arguments[e], a = 0, u = i.length; a < u; a++,
                o++)
                    r[o] = i[a];
            return r
        }([ha], ga, pa, [(n = e,
        function(t) {
            var r = []
              , o = {
                border: n.browser.isFirefox() ? "medium none" : "none",
                "text-decoration": "none"
            }
              , i = function(e, t) {
                d(t) || (n = Vn.fromTag(Ie(e)),
                Io(t, n),
                r.push({
                    me: e,
                    fake: n
                }));
                var n = F(gn(e), Wn);
                R(n, function(t) {
                    return i(t, e)
                })
            };
            i(t);
            t = P(r, function(t) {
                var r = t.fake
                  , n = t.me
                  , e = On(n)
                  , t = ft(e, function(t, e) {
                    var n = In(r, e);
                    return Zi(t, e) === Zi(n, e)
                })
                  , e = ft(o, function(t, e) {
                    return Sn(n, e).is(t)
                });
                return {
                    fake: r,
                    me: n,
                    toRemove: t,
                    toPreserve: e
                }
            });
            R(t, function(t) {
                var n = t.me
                  , e = t.toRemove
                  , r = t.toPreserve
                  , t = t.fake;
                ct(e, function(t, e) {
                    An(n, e)
                }),
                ct(r, function(t, e) {
                    wn(n, e, t)
                }),
                So(t)
            })
        }
        ), ya, ba], (t = t).type !== Ai.GoogleDocs || t.indentUseMargin ? [] : [la]) : [];
        var n
    }
    function Ya(t) {
        return [gu, vu, (e = t,
        t = [{
            name: "b",
            transform: {
                mutate: p(hi, "strong")
            }
        }, {
            name: "i",
            transform: {
                mutate: p(hi, "em")
            }
        }, {
            name: "u",
            transform: {
                mutate: ea
            }
        }, {
            name: "s",
            transform: {
                mutate: p(hi, "strike")
            }
        }, {
            name: "font",
            transform: {
                mutate: yi,
                debug: !0
            }
        }],
        t = F(t, function(t) {
            return !_(e, t.name)
        }).map(function(t) {
            return ut({
                name: Po.exact(t.name, Po.caseInsensitive)
            }, t.transform)
        }),
        fo({
            tags: t
        }))];
        var e
    }
    function Za(t, e) {
        var n, r, o, i, a = e.merge, u = (n = e,
        i = (r = t).browser.isFirefox() || r.browser.isEdge(),
        o = i ? Gr : Vr,
        u = !i,
        u = Ga(r) ? h : lo([Ka(o, u)]),
        {
            annotate: [n.type === Ai.Word ? u : h],
            local: [i ? h : Ca]
        });
        return W([u.local, (i = e,
        Ga(t) || i.type !== Ai.Word ? [] : [Wi]), e.type === Ai.GoogleDocs ? [da] : [], u.annotate, Ya(a ? [] : e.cleanFilteredInlineElements), function(t, e) {
            if (t.type !== Ai.Word)
                return [];
            t = [hu],
            e = Ga(e) ? [] : yu;
            return t.concat(e).concat([Iu])
        }(e, t), Ja(e, t), [ma], [Pa], [wa], [Ta], Xa(e), [Wa, Ba, Da, za], [La], [Ea], [_a], [Ma], (a = e).type === Ai.Html && a.merge ? [Fa] : [], [ja], [Na], (a = e,
        Ga(t) && a.type === Ai.Word ? [Su] : []), [mu], e.type === Ai.Word ? [Tu, wu, xu, bu] : [], [Ra], [Ia]])
    }
    function Qa(t, e) {
        return t ? rt.some(e) : rt.none()
    }
    function tu(t, e) {
        return void 0 === e && (e = 2),
        e = Math.pow(10, e),
        t = Math.round(t * e),
        Math.ceil(t / e)
    }
    function eu(t, e, n, r, o) {
        return a = e,
        u = n,
        c = r,
        s = o,
        (i = t).toCanvas().then(function(t) {
            return Eu(t, i.getType(), a, u, c, s)
        });
        var i, a, u, c, s
    }
    function nu(t, e, n) {
        return o = e,
        i = n,
        (r = t).toCanvas().then(function(t) {
            return Cu(t, o, i).then(function(t) {
                return fe(t, r.getType())
            })
        });
        var r, o, i
    }
    function ru(t, e) {
        return r = e,
        (n = t).toCanvas().then(function(t) {
            return Lu(t, n.getType(), r)
        });
        var n, r
    }
    function ou(t) {
        return parseInt(t, 10)
    }
    function iu(t) {
        return t.isPx && (t.cropWidth !== t.width || t.cropHeight !== t.height)
    }
    function au(n, r) {
        return function(e) {
            return function(t) {
                t = In(t, "transform");
                return rt.from(_u.exec(t)).map(function(t) {
                    return Math.round(parseFloat(t[1]) * (180 / Math.PI))
                })
            }(r).fold(function() {
                return Wt.resolve(e)
            }, function(t) {
                return ru(e, t).then(function(t) {
                    return An(r, "transform"),
                    Ne(n, "width"),
                    Ne(n, "height"),
                    t
                })
            })
        }
    }
    function uu(e, t, n) {
        return de(e.dom).then((i = t,
        function(t) {
            return nu(t, i.width, i.height)
        }
        )).then((r = e,
        o = t,
        function(t) {
            if (iu(o)) {
                var e = -1 * ou(In(r, "margin-top"))
                  , n = -1 * ou(In(r, "margin-left"));
                return eu(t, n, e, o.cropWidth, o.cropHeight).then(function(t) {
                    return De(r, {
                        width: o.cropWidth,
                        height: o.cropHeight
                    }),
                    t
                })
            }
            return Wt.resolve(t)
        }
        )).then(au(e, n)).then(function(t) {
            t = pe(t);
            return Ce(e, "src", t),
            Wt.resolve()
        });
        var r, o, i
    }
    function cu(u) {
        return fn(u).filter(Ae("span")).map(function(n) {
            function t() {
                return e = n,
                An(t = u, "margin-top"),
                An(t, "margin-left"),
                An(e, "width"),
                An(e, "height"),
                An(e, "overflow"),
                An(e, "display"),
                kn(e, t, ["transform"]),
                void An(e, "transform");
                var t, e
            }
            var e, r, o, i, a, o = (e = u,
            o = function(t, e) {
                return Ee(t, e).map(ou).filter(function(t) {
                    return !isNaN(t)
                }).getOr(0)
            }
            ,
            i = In(r = n, "width"),
            a = In(r, "height"),
            r = o(e, "width"),
            o = o(e, "height"),
            {
                isPx: (e = /^\d+px$/).test(i) && e.test(a),
                cropWidth: ou(i),
                cropHeight: ou(a),
                width: r,
                height: o
            });
            return (iu(o) || _u.test(In(n, "transform")) ? uu(u, o, n) : Wt.resolve()).then(t, t)
        }).getOrThunk(function() {
            return Wt.resolve()
        })
    }
    function su(t, e, n) {
        return _r(t, function(t) {
            return nn(t, e)
        }, n)
    }
    function fu(t, e) {
        return function(t, e) {
            e = void 0 === e ? document : e.dom;
            return rn(e) ? rt.none() : rt.from(e.querySelector(t)).map(Vn.fromDom)
        }(e, t)
    }
    function lu(t, e, n) {
        var r;
        return r = su,
        n = n,
        nn(t = t, e = e) ? rt.some(t) : m(n) && n(t) ? rt.none() : r(t, e, n)
    }
    var du, mu = fo({
        tags: [{
            name: Po.pattern(/^(img|table)$/, Po.caseInsensitive),
            mutate: function(t) {
                Sn(t, "margin-left").exists(function(t) {
                    return Mn(t, "-")
                }) && An(t, "margin-left"),
                Mn(In(t, "margin-left"), "-") && (wn(t, "margin-top", In(t, "margin-top")),
                wn(t, "margin-bottom", In(t, "margin-bottom")),
                wn(t, "margin-right", In(t, "margin-right")),
                An(t, "margin"))
            }
        }]
    }), pu = fo({
        tags: [{
            name: Po.exact("p", Po.caseInsensitive),
            mutate: Gn({
                attrName: "align",
                styleName: "text-align",
                mapValue: u
            })
        }]
    }), gu = k({
        tags: [{
            name: Po.exact("font", Po.caseInsensitive),
            condition: function(t) {
                function e(t) {
                    return t.replace(/[ \r\n\uFEFF]+/g, "")
                }
                t = gn(t);
                return 0 === t.length || z(t, function(t) {
                    return Va(t, e)
                })
            }
        }]
    }), lr = function(t) {
        return R(gn(t), function(t) {
            Va(t, jn) && So(t)
        })
    }, vu = fo({
        tags: [{
            name: Po.exact("ol", Po.caseInsensitive),
            mutate: lr
        }, {
            name: Po.exact("ul", Po.caseInsensitive),
            mutate: lr
        }]
    }), hu = so({
        tags: [{
            name: Po.pattern(/^([OVWXP]|U[0-9]+|ST[0-9]+):/i, Po.caseInsensitive)
        }]
    }), yu = [lo([Ot])], bu = k({
        attributes: [{
            name: Po.exact("height", Po.caseInsensitive),
            condition: Ae("table")
        }]
    }), xu = k({
        attributes: [{
            name: Po.pattern(/^(width|height)$/, Po.caseInsensitive),
            condition: aa
        }]
    }), wu = fo({
        tags: [{
            name: Po.exact("table", Po.caseInsensitive),
            mutate: Gn({
                attrName: "width",
                mapValue: function(t) {
                    return t.replace(/^(\d+)$/, "$1px")
                }
            })
        }]
    }), Tu = k({
        styles: [{
            name: Po.exact("height", Po.caseInsensitive),
            condition: Ae("td")
        }, {
            name: Po.exact("width", Po.caseInsensitive),
            condition: Ae("tr")
        }, {
            name: Po.exact("height", Po.caseInsensitive),
            condition: Ae("col")
        }]
    }), Iu = k({
        attributes: [{
            name: Po.pattern(/^v:/, Po.caseInsensitive)
        }, {
            name: Po.exact("href", Po.caseInsensitive),
            value: Po.contains("#_toc", Po.caseInsensitive)
        }, {
            name: Po.exact("href", Po.caseInsensitive),
            value: Po.contains("#_mso", Po.caseInsensitive)
        }, {
            name: Po.pattern(/^xmlns(:|$)/, Po.caseInsensitive)
        }, {
            name: Po.exact("type", Po.caseInsensitive),
            condition: function(t) {
                return "ol" === Ie(t) || "ul" === Ie(t)
            }
        }]
    }), Su = so({
        tags: [{
            name: Po.exact("p", Po.caseInsensitive),
            condition: (du = "li",
            function(t) {
                return fn(t).exists(function(t) {
                    return Ie(t) === du && 1 === gn(t).length
                })
            }
            )
        }]
    }), Ou = (fo({
        tags: [{
            name: Po.pattern(/^(img|table)$/, Po.caseInsensitive),
            mutate: function(t) {
                Sn(t, "margin-left").exists(function(t) {
                    return Mn(t, "-")
                }) && An(t, "margin-left"),
                Mn(In(t, "margin-left"), "-") && (wn(t, "margin-top", In(t, "margin-top")),
                wn(t, "margin-bottom", In(t, "margin-bottom")),
                wn(t, "margin-right", In(t, "margin-right")),
                An(t, "margin"))
            }
        }]
    }),
    function(n) {
        return {
            is: function(t) {
                return n === t
            },
            isValue: A,
            isError: O,
            getOr: l(n),
            getOrThunk: l(n),
            getOrDie: l(n),
            or: function(t) {
                return Ou(n)
            },
            orThunk: function(t) {
                return Ou(n)
            },
            fold: function(t, e) {
                return e(n)
            },
            map: function(t) {
                return Ou(t(n))
            },
            mapError: function(t) {
                return Ou(n)
            },
            each: function(t) {
                t(n)
            },
            bind: function(t) {
                return t(n)
            },
            exists: function(t) {
                return t(n)
            },
            forall: function(t) {
                return t(n)
            },
            toOptional: function() {
                return rt.some(n)
            }
        }
    }
    ), Au = function(n) {
        return {
            is: O,
            isValue: O,
            isError: A,
            getOr: u,
            getOrThunk: function(t) {
                return t()
            },
            getOrDie: function() {
                return b(String(n))()
            },
            or: function(t) {
                return t
            },
            orThunk: function(t) {
                return t()
            },
            fold: function(t, e) {
                return t(n)
            },
            map: function(t) {
                return Au(n)
            },
            mapError: function(t) {
                return Au(t(n))
            },
            each: h,
            bind: function(t) {
                return Au(n)
            },
            exists: O,
            forall: A,
            toOptional: rt.none
        }
    }, ku = {
        value: Ou,
        error: Au,
        fromOption: function(t, e) {
            return t.fold(function() {
                return Au(e)
            }, Ou)
        }
    }, Cu = function(t, e, n) {
        var r = Pt(t)
          , o = Rt(t)
          , i = e / r
          , r = n / o
          , o = !1;
        (i < .5 || 2 < i) && (i = i < .5 ? .5 : 2,
        o = !0),
        (r < .5 || 2 < r) && (r = r < .5 ? .5 : 2,
        o = !0);
        r = Du(t, i, r);
        return o ? r.then(function(t) {
            return Cu(t, e, n)
        }) : r
    }, Du = function(a, u, c) {
        return new Yt(function(t) {
            var e = Pt(a)
              , n = Rt(a)
              , r = Math.floor(e * u)
              , o = Math.floor(n * c)
              , i = _t(r, o);
            Xt(i).drawImage(a, 0, 0, e, n, 0, 0, r, o),
            t(i)
        }
        )
    }, Lu = function(t, e, n) {
        var r = (n < 0 ? 360 + n : n) * Math.PI / 180
          , o = t.width
          , i = t.height
          , a = Math.sin(r)
          , u = Math.cos(r)
          , c = tu(Math.abs(o * u) + Math.abs(i * a))
          , n = tu(Math.abs(o * a) + Math.abs(i * u))
          , a = _t(c, n)
          , u = Xt(a);
        return u.translate(c / 2, n / 2),
        u.rotate(r),
        u.drawImage(t, -o / 2, -i / 2),
        fe(a, e)
    }, Eu = function(t, e, n, r, o, i) {
        i = _t(o, i);
        return Xt(i).drawImage(t, -n, -r),
        fe(i, e)
    }, _u = /rotate\((\d\.\d+)rad\)/, Nu = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "li", "table", "thead", "tbody", "tfoot", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"];
    function Pu(t, e) {
        return H(t, function(t) {
            return t.start === e
        })
    }
    function Ru(t, e, n) {
        var r;
        return e = e = n(t, e),
        r = t.start,
        P(e, function(t) {
            return ut(ut({}, t), {
                start: t.start + r,
                finish: t.finish + r
            })
        })
    }
    function Mu(t, e, n) {
        return {
            element: t,
            start: e,
            finish: n
        }
    }
    function Fu(r, t, e) {
        var n = B(e, function(t) {
            return [t.start, t.finish]
        })
          , o = Oc(t, n, function(t, e) {
            return function(r, t, e) {
                var n = r.property().getText(t)
                  , o = F(Uc(n, e), function(t) {
                    return 0 < t.length
                });
                if (o.length <= 1)
                    return [Mu(t, 0, n.length)];
                r.property().setText(t, o[0]);
                e = Sc(o.slice(1), function(t, e) {
                    var n = r.create().text(t)
                      , t = Mu(n, e, e + t.length);
                    return rt.some(t)
                }, o[0].length),
                n = P(e, function(t) {
                    return t.element
                });
                return r.insert().afterAll(t, n),
                [Mu(t, 0, o[0].length)].concat(e)
            }(r, t.element, e)
        });
        return P(e, function(t) {
            var e = Ac(o, t.start, t.finish)
              , n = P(e, function(t) {
                return t.element
            })
              , e = P(n, r.property().getText).join("");
            return {
                elements: n,
                word: t.word,
                exact: e
            }
        })
    }
    function ju(t) {
        var e, n = {
            word: "__INTERNAL__",
            pattern: Ic(Bc)
        };
        return Hc(Wc, t, [n], e)
    }
    function Uu(t) {
        return !lu(t, "a", e).isSome();
        var e
    }
    function Hu(t) {
        t = ju(t),
        R(t, function(t) {
            var n, e = t.exact;
            (e.indexOf("@") < 0 || zc(e)) && (n = t.elements,
            rt.from(n[0]).filter(Uu).map(function(t) {
                var e = Vn.fromTag("a");
                return Rr(t, e),
                Hr(e, n),
                Ce(e, "href", ri(e)),
                e
            }))
        })
    }
    function Wu(t) {
        R(t, function(t) {
            Wn(t) && Sn(t, "position").isSome() && An(t, "position")
        })
    }
    function Bu(t) {
        var e, n, r = F(t, Ae("li"));
        0 < r.length && (e = pn(r[0]),
        n = Vn.fromTag("ul"),
        Rr(t[0], n),
        0 < e.length && (t = Vn.fromTag("li"),
        Io(n, t),
        Hr(t, e)),
        Hr(n, r))
    }
    function zu(t) {
        return t = qr(e = t, "img"),
        Wt.all(P(t, cu)).then(function() {
            return e
        });
        var e
    }
    function qu(t) {
        var e = gn(t);
        R([Hu, Wu, Bu], function(t) {
            t(e)
        })
    }
    function $u(t, e) {
        return pi(t, function(t) {
            return Wn(t) && Ee(t, "style").exists(function(t) {
                return -1 < t.indexOf("mso-")
            })
        })
    }
    function Vu(t, e) {
        return t = Xr(t),
        e = e,
        0 <= (t = t).indexOf("<o:p>") || e.browser.isEdge() && 0 <= t.indexOf('v:shapes="') || e.browser.isEdge() && 0 <= t.indexOf("mso-") || 0 <= t.indexOf("mso-list") || 0 <= t.indexOf("p.MsoNormal, li.MsoNormal, div.MsoNormal") || 0 <= t.indexOf("MsoListParagraphCxSpFirst") || 0 <= t.indexOf("<w:WordDocument>")
    }
    function Gu(t) {
        var e = Gc(t);
        return e && $c(t) || !e && Vc(t)
    }
    function Ku(t) {
        return t.isInternal.getOr(!1)
    }
    function Xu(t) {
        return Gc(t) ? Ai.Word : t.isGoogleDocs.getOr(!1) ? Ai.GoogleDocs : Ai.Html
    }
    function Ju(e) {
        var o = [];
        return {
            bind: function(t) {
                if (void 0 === t)
                    throw new Error("Event bind error: undefined handler");
                o.push(t)
            },
            unbind: function(e) {
                o = F(o, function(t) {
                    return t !== e
                })
            },
            trigger: function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                var r = {};
                R(e, function(t, e) {
                    r[t] = n[e]
                }),
                R(o, function(t) {
                    t(r)
                })
            }
        }
    }
    function Yu(t) {
        return {
            registry: st(t, function(t) {
                return {
                    bind: t.bind,
                    unbind: t.unbind
                }
            }),
            trigger: st(t, function(t) {
                return t.trigger
            })
        }
    }
    function Zu(t, e, n) {
        var r, o, t = t.document.createRange();
        return r = t,
        e.fold(function(t) {
            r.setStartBefore(t.dom)
        }, function(t, e) {
            r.setStart(t.dom, e)
        }, function(t) {
            r.setStartAfter(t.dom)
        }),
        o = t,
        n.fold(function(t) {
            o.setEndBefore(t.dom)
        }, function(t, e) {
            o.setEnd(t.dom, e)
        }, function(t) {
            o.setEndAfter(t.dom)
        }),
        t
    }
    function Qu(t, e, n, r, o) {
        return (t = t.document.createRange()).setStart(e.dom, n),
        t.setEnd(r.dom, o),
        t
    }
    function tc(t, e, n) {
        return e(Vn.fromDom(n.startContainer), n.startOffset, Vn.fromDom(n.endContainer), n.endOffset)
    }
    function ec(t, e) {
        var o, n, e = (o = t,
        e.match({
            domRange: function(t) {
                return {
                    ltr: l(t),
                    rtl: rt.none
                }
            },
            relative: function(t, e) {
                return {
                    ltr: Qe(function() {
                        return Zu(o, t, e)
                    }),
                    rtl: Qe(function() {
                        return rt.some(Zu(o, e, t))
                    })
                }
            },
            exact: function(t, e, n, r) {
                return {
                    ltr: Qe(function() {
                        return Qu(o, t, e, n, r)
                    }),
                    rtl: Qe(function() {
                        return rt.some(Qu(o, n, r, t, e))
                    })
                }
            }
        }));
        return (n = (e = e).ltr()).collapsed ? e.rtl().filter(function(t) {
            return !1 === t.collapsed
        }).map(function(t) {
            return Xc.rtl(Vn.fromDom(t.endContainer), t.endOffset, Vn.fromDom(t.startContainer), t.startOffset)
        }).getOrThunk(function() {
            return tc(0, Xc.ltr, n)
        }) : tc(0, Xc.ltr, n)
    }
    function nc(t, e) {
        var n = Ie(t);
        return "input" === n ? Yc.after(t) : _(["br", "img"], n) ? 0 === e ? Yc.before(t) : Yc.after(t) : Yc.on(t, e)
    }
    function rc(t) {
        return rt.from(t.getSelection())
    }
    function oc(t, e, n, r, o) {
        var i, o = Qu(t, e, n, r, o);
        i = o,
        rc(t).each(function(t) {
            t.removeAllRanges(),
            t.addRange(i)
        })
    }
    function ic(f, t) {
        return ec(f, t).match({
            ltr: function(t, e, n, r) {
                oc(f, t, e, n, r)
            },
            rtl: function(a, u, c, s) {
                rc(f).each(function(t) {
                    if (t.setBaseAndExtent)
                        t.setBaseAndExtent(a.dom, u, c.dom, s);
                    else if (t.extend)
                        try {
                            n = a,
                            r = u,
                            o = c,
                            i = s,
                            (e = t).collapse(n.dom, r),
                            e.extend(o.dom, i)
                        } catch (t) {
                            oc(f, c, s, a, u)
                        }
                    else
                        oc(f, c, s, a, u);
                    var e, n, r, o, i
                })
            }
        })
    }
    function ac(t, e, n, r, o) {
        o = function(t, e, n, r) {
            e = nc(t, e),
            r = nc(n, r);
            return Qc.relative(e, r)
        }(e, n, r, o),
        ic(t, o)
    }
    function uc(t) {
        if (0 < t.rangeCount) {
            var e = t.getRangeAt(0)
              , t = t.getRangeAt(t.rangeCount - 1);
            return rt.some(Jc(Vn.fromDom(e.startContainer), e.startOffset, Vn.fromDom(t.endContainer), t.endOffset))
        }
        return rt.none()
    }
    function cc(t) {
        if (null === t.anchorNode || null === t.focusNode)
            return uc(t);
        var e, n, r, o, i, a = Vn.fromDom(t.anchorNode), u = Vn.fromDom(t.focusNode);
        return e = a,
        n = t.anchorOffset,
        r = u,
        o = t.focusOffset,
        i = Qi(e, n, r, o),
        o = an(e, r) && n === o,
        i.collapsed && !o ? rt.some(Jc(a, t.anchorOffset, u, t.focusOffset)) : uc(t)
    }
    function sc(t) {
        return rc(t).filter(function(t) {
            return 0 < t.rangeCount
        }).bind(cc)
    }
    function fc(t, e, n, r) {
        var o = an(t, n) && e === r;
        return {
            startContainer: l(t),
            startOffset: l(e),
            endContainer: l(n),
            endOffset: l(r),
            collapsed: l(o)
        }
    }
    function lc(t) {
        return t.slice(0).sort()
    }
    function dc(e, t) {
        0 < (t = F(t, function(t) {
            return !_(e, t)
        })).length && function(t) {
            throw new Error("Unsupported keys for object: " + lc(t).join(", "))
        }(t)
    }
    function mc(t) {
        function e() {
            return t.stopPropagation()
        }
        function n() {
            return t.preventDefault()
        }
        var r = Vn.fromDom(function(t) {
            if (kr() && f(t.target)) {
                var e = Vn.fromDom(t.target);
                if (Wn(e) && Dr(e) && t.composed && t.composedPath) {
                    e = t.composedPath();
                    if (e)
                        return $(e)
                }
            }
            return rt.from(t.target)
        }(t).getOr(t.target))
          , o = i(n, e);
        return {
            target: r,
            x: t.clientX,
            y: t.clientY,
            stop: e,
            prevent: n,
            kill: o,
            raw: t
        }
    }
    function pc(t, e, n, r, o) {
        var i, a, r = (i = n,
        a = r,
        function(t) {
            i(t) && a(mc(t))
        }
        );
        return t.dom.addEventListener(e, r, o),
        {
            unbind: p(es, t, e, r, o)
        }
    }
    function gc(t, e, n) {
        return pc(t, e, ns, n, !1)
    }
    function vc(n) {
        var t, r = (t = !1,
        {
            isBlocked: function() {
                return t
            },
            block: function() {
                t = !0
            },
            unblock: function() {
                t = !1
            }
        });
        return {
            control: r,
            instance: function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                r.isBlocked() || n.apply(void 0, t)
            }
        }
    }
    function hc(t) {
        R(gn(t), function(t) {
            var e;
            Wn(e = t) && !e.dom.hasChildNodes() && _(cs, Ie(e)) && So(t)
        })
    }
    function yc(e, t) {
        var n, r = Vn.fromTag("div");
        function o(t) {
            return Ye(t, ls)
        }
        return De(r, t),
        De(r, {
            contenteditable: "true",
            "aria-hidden": "true"
        }),
        Tn(r, {
            position: "fixed",
            top: "0px",
            width: "100px",
            height: "100px",
            overflow: "hidden",
            opacity: "0"
        }),
        n = r,
        R([fs, ls], function(t) {
            Xe(n, t)
        }),
        {
            attach: function(t) {
                Wr(r),
                wn(r, "left", ds(t)),
                Io(t, r)
            },
            focus: function() {
                su(r, "body").each(function(t) {
                    e.toOff(t, r)
                })
            },
            contents: function() {
                var n, t;
                return t = o,
                mn(n = r).filter(t).each(function(t) {
                    var e = gn(t);
                    Hr(n, e),
                    So(t)
                }),
                ss(n, t),
                hc(n),
                {
                    elements: gn(r),
                    html: Xr(r),
                    offscreen: r
                }
            },
            container: l(r),
            detach: function() {
                So(r)
            }
        }
    }
    function bc(e, n, t) {
        function r() {
            e.cleanup();
            var t = o.contents();
            o.detach(),
            a.trigger.after(t.elements, t.html, o.container())
        }
        var o = yc(e, t)
          , i = vc(function() {
            var t;
            a.trigger.before(),
            o.attach(n),
            o.focus(),
            t = un(n),
            us(t, i, r)
        })
          , a = Yu({
            before: Ju([]),
            after: Ju(["elements", "html", "container"])
        });
        return {
            instance: l(function() {
                i.instance()
            }),
            destroy: h,
            events: a.registry
        }
    }
    function xc(t) {
        var e = an(t.start, t.finish) && t.soffset === t.foffset;
        return {
            startContainer: l(t.start),
            startOffset: l(t.soffset),
            endContainer: l(t.finish),
            endOffset: l(t.foffset),
            collapsed: l(e)
        }
    }
    var wc, Tc, Ic = function(t) {
        return e = t,
        n = l(0),
        t = l(0),
        r = rt.none(),
        {
            term: function() {
                return new RegExp(e,r.getOr("g"))
            },
            prefix: n,
            suffix: t
        };
        var e, n, r
    }, Sc = function(t, n, e) {
        return j(t, function(e, t) {
            return n(t, e.len).fold(l(e), function(t) {
                return {
                    len: t.finish,
                    list: e.list.concat([t])
                }
            })
        }, {
            len: e = void 0 === e ? 0 : e,
            list: []
        }).list
    }, Oc = function(t, e, n) {
        return 0 === e.length ? t : B(t, function(r) {
            var t = B(e, function(t) {
                return (n = t) >= (e = r).start && n <= e.finish ? [t - r.start] : [];
                var e, n
            });
            return 0 < t.length ? Ru(r, t, n) : [r]
        })
    }, Ac = function(r, t, o) {
        var t = Pu(r, t)
          , i = Pu(r, o);
        return t.bind(function(t) {
            var e, n, e = i.getOr((n = o,
            (e = r)[e.length - 1] && e[e.length - 1].finish === n ? e.length + 1 : -1));
            return -1 < e ? rt.some(r.slice(t, e)) : rt.none()
        }).getOr([])
    }, kc = function(n, t) {
        return function(t) {
            t = Array.prototype.slice.call(t, 0);
            return t.sort(function(t, e) {
                return t.start < e.start ? -1 : e.start < t.start ? 1 : 0
            }),
            t
        }(B(t, function(e) {
            var t = function(t, e) {
                for (var n = e.term(), r = [], o = n.exec(t); o; ) {
                    var i = o.index + e.prefix(o)
                      , a = o[0].length - e.prefix(o) - e.suffix(o);
                    r.push({
                        start: i,
                        finish: i + a
                    }),
                    n.lastIndex = i + a,
                    o = n.exec(t)
                }
                return r
            }(n, e.pattern);
            return P(t, function(t) {
                return ut(ut({}, e), t)
            })
        }))
    }, dr = Tt([{
        include: ["item"]
    }, {
        excludeWith: ["item"]
    }, {
        excludeWithout: ["item"]
    }]), Cc = {
        include: dr.include,
        excludeWith: dr.excludeWith,
        excludeWithout: dr.excludeWithout,
        cata: function(t, e, n, r) {
            return t.fold(e, n, r)
        }
    }, Dc = function(t, n) {
        var r = []
          , o = [];
        return R(t, function(t) {
            var e = n(t);
            Cc.cata(e, function() {
                o.push(t)
            }, function() {
                0 < o.length && r.push(o),
                r.push([t]),
                o = []
            }, function() {
                0 < o.length && r.push(o),
                o = []
            })
        }),
        0 < o.length && r.push(o),
        r
    }, t = Tt([{
        boundary: ["item", "universe"]
    }, {
        empty: ["item", "universe"]
    }, {
        text: ["item", "universe"]
    }, {
        nonEditable: ["item", "universe"]
    }]), Lc = O, Ec = A, _c = l(0), Nc = l(1), n = function(t) {
        return ut(ut({}, t), {
            isBoundary: function() {
                return t.fold(Ec, Lc, Lc, Lc)
            },
            toText: function() {
                return t.fold(rt.none, rt.none, function(t) {
                    return rt.some(t)
                }, rt.none)
            },
            is: function(n) {
                return t.fold(Lc, Lc, function(t, e) {
                    return e.eq(t, n)
                }, Lc)
            },
            len: function() {
                return t.fold(_c, Nc, function(t, e) {
                    return e.property().getText(t).length
                }, Nc)
            }
        })
    }, Pc = {
        text: i(n, t.text),
        boundary: i(n, t.boundary),
        empty: i(n, t.empty),
        nonEditable: i(n, t.empty),
        cata: function(t, e, n, r, o) {
            return t.fold(e, n, r, o)
        }
    }, Rc = l([]), Mc = function(e, t, n) {
        if (e.property().isText(t))
            return [Pc.text(t, e)];
        if (e.property().isEmptyTag(t))
            return [Pc.empty(t, e)];
        if (e.property().isNonEditable(t))
            return [];
        if (e.property().isElement(t)) {
            var r = e.property().children(t)
              , o = e.property().isBoundary(t) ? [Pc.boundary(t, e)] : []
              , r = void 0 !== n && n(t) ? [] : B(r, function(t) {
                return Mc(e, t, n)
            });
            return o.concat(r).concat(o)
        }
        return []
    }, Fc = Mc, jc = function(e, t, n) {
        t = B(t, function(t) {
            return Fc(e, t, n)
        }),
        t = Dc(t, function(t) {
            return t.match({
                boundary: function() {
                    return Cc.excludeWithout(t)
                },
                empty: function() {
                    return Cc.excludeWith(t)
                },
                text: function() {
                    return Cc.include(t)
                },
                nonEditable: function() {
                    return Cc.excludeWithout(t)
                }
            })
        });
        return F(t, function(t) {
            return 0 < t.length
        })
    }, Uc = function(r, t) {
        if (0 === t.length)
            return [r];
        var e = j(t, function(t, e) {
            if (0 === e)
                return t;
            var n = r.substring(t.prev, e);
            return {
                prev: e,
                values: t.values.concat([n])
            }
        }, {
            prev: 0,
            values: []
        })
          , t = t[t.length - 1];
        return t < r.length ? e.values.concat(r.substring(t)) : e.values
    }, Hc = function(n, t, o, e) {
        e = jc(n, t, e);
        return B(e, function(t) {
            var r, e = B(t, function(t) {
                return t.fold(Rc, Rc, function(t) {
                    return [t]
                }, Rc)
            }), t = P(e, n.property().getText).join(""), t = kc(t, o), e = (r = n,
            Sc(e, function(t, e) {
                var n = e + r.property().getText(t).length;
                return rt.from(Mu(t, e, n))
            }));
            return Fu(n, e, t)
        })
    }, Wc = {
        up: l({
            selector: su,
            closest: lu,
            predicate: _r,
            all: ln
        }),
        down: l({
            selector: qr,
            predicate: Oo
        }),
        styles: l({
            get: In,
            getRaw: Sn,
            set: wn,
            remove: An
        }),
        attrs: l({
            get: Le,
            set: Ce,
            remove: Ne,
            copyTo: function(t, e) {
                t = j(t.dom.attributes, function(t, e) {
                    return t[e.name] = e.value,
                    t
                }, {});
                De(e, t)
            }
        }),
        insert: l({
            before: Rr,
            after: Mr,
            afterAll: Ur,
            append: Io,
            appendAll: Hr,
            prepend: Fr,
            wrap: jr
        }),
        remove: l({
            unwrap: Br,
            remove: So
        }),
        create: l({
            nu: Vn.fromTag,
            clone: function(t) {
                return Vn.fromDom(t.dom.cloneNode(!1))
            },
            text: Vn.fromText
        }),
        query: l({
            comparePosition: function(t, e) {
                return t.dom.compareDocumentPosition(e.dom)
            },
            prevSibling: dn,
            nextSibling: mn
        }),
        property: l({
            children: gn,
            name: Ie,
            parent: fn,
            document: function(t) {
                return cn(t).dom
            },
            isText: Bn,
            isComment: Oe,
            isElement: Wn,
            getText: gi,
            setText: vi,
            isBoundary: function(t) {
                return !!Wn(t) && ("body" === Ie(t) || _(Nu, Ie(t)))
            },
            isEmptyTag: function(t) {
                return !!Wn(t) && _(["br", "img", "hr", "input"], Ie(t))
            },
            isNonEditable: function(t) {
                return Wn(t) && "false" === Le(t, "contenteditable")
            }
        }),
        eq: an,
        is: Ar
    }, Bc = /(?:(?:[A-Za-z]{3,9}:(?:\/\/))(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*|(?:www\.|[-;:&=+$,.\w]+@)[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)(?::[0-9]+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source, zc = function(t) {
        t = t.indexOf("://");
        return 3 <= t && t <= 9
    }, qc = function(t, e) {
        return mo(t, e, [Ta, za])
    }, $c = function(t) {
        return t.officeStyles.getOr(!0)
    }, Vc = function(t) {
        return t.htmlStyles.getOr(!1)
    }, Gc = function(t) {
        return t.isWord.getOr(!1)
    }, It = Or(), Hn = It.deviceType.isiOS() || It.deviceType.isAndroid(), sr = l({
        isSupported: !1,
        cleanDocument: function() {
            return Wt.reject("not supported")
        }
    }), Kc = Hn ? sr : function(t, e, n) {
        var n = e + "/wordimport.js" + (n = n || "v=7.1.0",
        rt.from(n).filter(function(t) {
            return 0 !== t.length
        }).map(function(t) {
            return (-1 === t.indexOf("?") ? "?" : "") + t
        }).getOr(""))
          , o = t.loadScript("ephox.wimp", n);
        o.catch(function(t) {
            console.error("Unable to load word import: ", t)
        });
        return {
            isSupported: !0,
            cleanDocument: function(e, n, r) {
                return o.then(function(t) {
                    return t.cleanDocument(e, n, r.cleanFilteredInlineElements)
                })
            }
        }
    }
    , Xc = Tt([{
        ltr: ["start", "soffset", "finish", "foffset"]
    }, {
        rtl: ["start", "soffset", "finish", "foffset"]
    }]), Jc = (Xc.ltr,
    Xc.rtl,
    function(t, e, n, r) {
        return {
            start: t,
            soffset: e,
            finish: n,
            foffset: r
        }
    }
    ), At = Tt([{
        before: ["element"]
    }, {
        on: ["element", "offset"]
    }, {
        after: ["element"]
    }]), Yc = {
        before: At.before,
        on: At.on,
        after: At.after,
        cata: function(t, e, n, r) {
            return t.fold(e, n, r)
        },
        getStart: function(t) {
            return t.fold(u, u, u)
        }
    }, Zc = Tt([{
        domRange: ["rng"]
    }, {
        relative: ["startSitu", "finishSitu"]
    }, {
        exact: ["start", "soffset", "finish", "foffset"]
    }]), Qc = {
        domRange: Zc.domRange,
        relative: Zc.relative,
        exact: Zc.exact,
        exactFromRange: function(t) {
            return Zc.exact(t.start, t.soffset, t.finish, t.foffset)
        },
        getWin: function(t) {
            t = t.match({
                domRange: function(t) {
                    return Vn.fromDom(t.startContainer)
                },
                relative: function(t, e) {
                    return Yc.getStart(t)
                },
                exact: function(t, e, n, r) {
                    return t
                }
            });
            return sn(t)
        },
        range: Jc
    }, ts = function(r, o, i) {
        if (0 === o.length)
            throw new Error("You must specify at least one required field.");
        var n;
        return function(e, t) {
            if (!s(t))
                throw new Error("The " + e + " fields must be an array. Was: " + t + ".");
            R(t, function(t) {
                if (!y(t))
                    throw new Error("The value " + t + " in the " + e + " fields was not a string.")
            })
        }("required", o),
        n = lc(o),
        U(n, function(t, e) {
            return e < n.length - 1 && t === n[e + 1]
        }).each(function(t) {
            throw new Error("The field: " + t + " occurs more than once in the combined fields: [" + n.join(", ") + "].")
        }),
        function(e) {
            var n = yt(e);
            z(o, function(t) {
                return _(n, t)
            }) || function(t, e) {
                throw new Error("All required keys (" + lc(t).join(", ") + ") were not specified. Specified keys were: " + lc(e).join(", ") + ".")
            }(o, n),
            r(o, n);
            var t = F(o, function(t) {
                return !i.validate(e[t], t)
            });
            return 0 < t.length && function(t, e) {
                throw new Error("All values need to be of type: " + e + ". Keys (" + lc(t).join(", ") + ") were not.")
            }(t, i.label),
            e
        }
    }, fr = Or(), lr = fr.browser, es = (lr.isEdge() && lr.version.major < 16 || fr.deviceType.isiOS(),
    ts(dc, ["doc", "win", "body", "getSelection", "setSelection"], {
        validate: m,
        label: "function"
    }),
    function(t, e, n, r) {
        t.dom.removeEventListener(e, n, r)
    }
    ), ns = A, Ot = function(t) {
        var e = rs(t);
        return {
            resolve: function(t) {
                t = t.split(" ");
                return P(t, function(t) {
                    return os(e, t)
                }).join(" ")
            }
        }
    }, rs = function(t) {
        return t.replace(/\./g, "-")
    }, os = function(t, e) {
        return t + "-" + e
    }, Gn = (Ot("ephox.flour"),
    Ot("ephox-sloth").resolve), is = l(Gn("bin")), k = Or(), as = l(k.browser.isIE() && k.browser.version.major <= 10), us = as() ? function(t, e, n) {
        e.control.block(),
        t.dom.execCommand("paste"),
        n(),
        e.control.unblock()
    }
    : function(t, e, n) {
        setTimeout(n, 1)
    }
    , cs = ["b", "i", "u", "sub", "sup", "strike"], ss = function(t, r) {
        t = gn(t);
        R(t, function(t) {
            var e, n;
            r(t) && (n = gn(e = t),
            t = Vn.fromTag("div", un(e).dom),
            Hr(t, n),
            Rr(e, t),
            So(e))
        })
    }, fs = is(), ls = fs + Et(""), ds = (wc = "-100000px",
    Tc = "100000px",
    function(t) {
        return "rtl" === ia(t) ? Tc : wc
    }
    ), ms = {
        set: function(t, e) {
            ac(t, e.startContainer(), e.startOffset(), e.endContainer(), e.endOffset())
        },
        get: function(t) {
            return sc(t).map(xc)
        }
    };
    function ps(c) {
        return function(e) {
            var i, r, a, u, n = Yu({
                after: Ju(["container"])
            }), o = (i = ms,
            r = Vn.fromTag("br"),
            a = rt.none(),
            u = function(t) {
                return sn(t).dom
            }
            ,
            {
                cleanup: function() {
                    So(r)
                },
                toOn: function(r, t) {
                    var o = u(t);
                    a.each(function(t) {
                        var e = r.dom.childNodes.length
                          , n = an(r, t.startContainer()) && e < t.startOffset() ? e : t.startOffset()
                          , e = an(r, t.endContainer()) && e < t.endOffset() ? e : t.endOffset()
                          , e = fc(t.startContainer(), n, t.endContainer(), e);
                        i.set(o, e)
                    })
                },
                toOff: function(t, e) {
                    var n = u(e);
                    Io(e, r),
                    a = i.get(n),
                    i.set(n, fc(r, 0, r, 0))
                }
            }), t = bc(o, e, c);
            t.events.after.bind(function(t) {
                o.toOn(e, t.container),
                n.trigger.after(t.container)
            });
            return {
                run: function() {
                    t.instance()()
                },
                events: n.registry
            }
        }
    }
    function gs() {
        var n = {};
        return {
            getOrSetIndexed: function(t, e) {
                return void 0 !== n[t] ? n[t] : (t = t,
                e = e(),
                n[t] = e)
            },
            waitForLoad: function() {
                var t = lt(n, function(t) {
                    return t
                });
                return Dt(t)
            }
        }
    }
    function vs(t, e) {
        t = function(t) {
            t = t.dom.head;
            if (null == t)
                throw new Error("Head is not available yet");
            return Vn.fromDom(t)
        }(t),
        Io(t, e)
    }
    function hs(a, u) {
        return zt.nu(function(e) {
            function n(t) {
                R(i, function(t) {
                    t.unbind()
                }),
                e(t.fold(function(t) {
                    return ku.error(t + 'Unable to download editor stylesheets from "' + a + '"')
                }, ku.value))
            }
            var t, r, o, r = (t = a,
            o = r || Vn.fromDom(document),
            r = Vn.fromTag("link", o.dom),
            De(r, {
                rel: "stylesheet",
                type: "text/css",
                href: t
            }),
            vs(o, r),
            r), i = [gc(r, "load", function(t) {
                !function(t) {
                    try {
                        var e = t.target.dom.sheet.cssRules;
                        return c(e) && 0 === e.length
                    } catch (t) {}
                    return !1
                }(t) ? u(n) : n(ku.error(""))
            }), gc(r, "error", p(n, ku.error("")))]
        })
    }
    function ys(t) {
        return void 0 !== t && void 0 !== t.types && null !== t.types
    }
    var bs, xs, ws = function(u) {
        var c = p(Te, u);
        Te("callbacks", c());
        function e(n, r) {
            var t, e, o, i = c(), a = (e = void 0 === (t = i).count ? 0 : t.count,
            o = "callback_" + e,
            t.count = e + 1,
            o);
            return i.callbacks[a] = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                r || s(a),
                n.apply(null, t)
            }
            ,
            u + ".callbacks." + a
        }
        var s = function(t) {
            var e = t.substring(t.lastIndexOf(".") + 1)
              , t = c();
            void 0 !== t.callbacks[e] && delete t.callbacks[e]
        };
        return {
            ephemeral: function(t) {
                return e(t, !1)
            },
            permanent: function(t) {
                return e(t, !0)
            },
            unregister: s
        }
    }("ephox.henchman.features"), Ts = (bs = gs(),
    {
        preload: function() {
            xs().get(u)
        },
        addStylesheet: function(t, e) {
            return bs.getOrSetIndexed(t, function() {
                return hs(t, e)
            })
        },
        addScript: function(t, e) {
            return bs.getOrSetIndexed(t, function() {
                return i = t,
                zt.nu(function(e) {
                    function t() {
                        r.unbind(),
                        o.unbind()
                    }
                    var n = Vn.fromTag("script");
                    Ce(n, "src", i),
                    Ce(n, "type", "text/javascript"),
                    Ce(n, "async", "async"),
                    Ce(n, "data-main", ws.ephemeral(function(t) {
                        e(ku.value(t))
                    }));
                    var r = gc(n, "error", function() {
                        t(),
                        e(ku.error("Error loading external script tag " + i))
                    })
                      , o = gc(n, "load", t);
                    Io(Vn.fromDom(document.head), n)
                }).map(e);
                var i
            })
        },
        waitForLoad: xs = function() {
            return bs.waitForLoad()
        }
    }), Is = {
        loadScript: function(t, o) {
            return new Wt(function(e, n) {
                var t, r;
                t = o,
                r = u,
                Ts.addScript(t, r).get(function(t) {
                    t.fold(n, e)
                })
            }
            )
        }
    }, dr = {
        disabled: function() {
            return {
                discriminator: "disabled",
                data: {}
            }
        },
        fromClipboard: function(t) {
            return {
                discriminator: "fromClipboard",
                data: {
                    rtf: t
                }
            }
        }
    }, Ss = yt(dr), Os = dr.disabled, As = dr.fromClipboard, ks = function(t, e) {
        var n = new RegExp(e,"i");
        return V(t, function(t) {
            return Qa(null !== n.exec(t), {
                type: t,
                flavor: e
            })
        })
    };
    var Cs, Ds = Object.hasOwnProperty, Ls = Object.setPrototypeOf, Es = Object.isFrozen, _s = Object.getPrototypeOf, Ns = Object.getOwnPropertyDescriptor, Ps = Object.freeze, n = Object.seal, Rs = Object.create, t = "undefined" != typeof Reflect && Reflect, Ms = (Ms = t.apply) || function(t, e, n) {
        return t.apply(e, n)
    }
    , Ps = Ps || function(t) {
        return t
    }
    , n = n || function(t) {
        return t
    }
    , Fs = (Fs = t.construct) || function(t, e) {
        return new (Function.prototype.bind.apply(t, [null].concat(function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
            return Array.from(t)
        }(e))))
    }
    , js = Ks(Array.prototype.forEach), Us = Ks(Array.prototype.pop), Hs = Ks(Array.prototype.push), Ws = Ks(String.prototype.toLowerCase), Bs = Ks(String.prototype.match), zs = Ks(String.prototype.replace), qs = Ks(String.prototype.indexOf), $s = Ks(String.prototype.trim), Vs = Ks(RegExp.prototype.test), Gs = (Cs = TypeError,
    function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return Fs(Cs, e)
    }
    );
    function Ks(o) {
        return function(t) {
            for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            return Ms(o, t, n)
        }
    }
    function Xs(t, e) {
        Ls && Ls(t, null);
        for (var n = e.length; n--; ) {
            var r, o = e[n];
            "string" != typeof o || (r = Ws(o)) !== o && (Es(e) || (e[n] = r),
            o = r),
            t[o] = !0
        }
        return t
    }
    function Js(t) {
        var e = Rs(null)
          , n = void 0;
        for (n in t)
            Ms(Ds, t, [n]) && (e[n] = t[n]);
        return e
    }
    function Ys(t, e) {
        for (; null !== t; ) {
            var n = Ns(t, e);
            if (n) {
                if (n.get)
                    return Ks(n.get);
                if ("function" == typeof n.value)
                    return Ks(n.value)
            }
            t = _s(t)
        }
        return function(t) {
            return console.warn("fallback value for", t),
            null
        }
    }
    var Zs = Ps(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
      , Qs = Ps(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
      , tf = Ps(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
      , ef = Ps(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
      , nf = Ps(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"])
      , rf = Ps(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
      , of = Ps(["#text"])
      , af = Ps(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"])
      , uf = Ps(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
      , cf = Ps(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
      , sf = Ps(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
      , ff = n(/\{\{[\s\S]*|[\s\S]*\}\}/gm)
      , lf = n(/<%[\s\S]*|[\s\S]*%>/gm)
      , df = n(/^data-[\-\w.\u00B7-\uFFFF]/)
      , mf = n(/^aria-[\-\w]+$/)
      , pf = n(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
      , gf = n(/^(?:\w+script|data):/i)
      , vf = n(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
      , hf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    function yf(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
        return Array.from(t)
    }
    var bf = function() {
        return "undefined" == typeof window ? null : window
    }
      , xf = function(t, e) {
        if ("object" !== (void 0 === t ? "undefined" : hf(t)) || "function" != typeof t.createPolicy)
            return null;
        var n = null
          , r = "data-tt-policy-suffix"
          , n = "dompurify" + ((n = e.currentScript && e.currentScript.hasAttribute(r) ? e.currentScript.getAttribute(r) : n) ? "#" + n : "");
        try {
            return t.createPolicy(n, {
                createHTML: function(t) {
                    return t
                }
            })
        } catch (t) {
            return console.warn("TrustedTypes policy " + n + " could not be created."),
            null
        }
    };
    function wf(t, e) {
        $f.addHook("uponSanitizeElement", function(t, e) {
            _(Vf, e.tagName) || wt(e.allowedTags, e.tagName) || (e.allowedTags[e.tagName] = !0)
        }),
        $f.addHook("uponSanitizeAttribute", function(t, e) {
            0 === e.attrName.indexOf("on") || wt(e.allowedAttributes, e.attrName) || (e.allowedAttributes[e.attrName] = !0),
            e.attrValue && -1 !== e.attrValue.indexOf("\n") && (e.attrValue = e.attrValue.replace(/\r?\n/g, ""))
        });
        var n = Mn(jn(t), "<!")
          , r = n ? "<body>" + t + "</body>" : t.replace(/^[\S\s]*?(<!DOCTYPE|<html)/i, "$1")
          , t = $f.sanitize(r, {
            ALLOW_UNKNOWN_PROTOCOLS: !0,
            FORBID_TAGS: Vf,
            WHOLE_DOCUMENT: -1 !== t.lastIndexOf("</html>")
        });
        return $f.removeHook("uponSanitizeElement"),
        $f.removeHook("uponSanitizeAttribute"),
        n ? be(ye(t, "<body>"), "</body>") : t
    }
    function Tf(n) {
        return {
            sanitizeHtml: function(t, e) {
                return n(t) ? t : wf(t)
            },
            sanitizeText: u
        }
    }
    function If(t) {
        return xe(e = t, "<html") && (xe(e, 'xmlns:o="urn:schemas-microsoft-com:office:office"') || xe(e, 'xmlns:x="urn:schemas-microsoft-com:office:excel"')) || xe(t, 'meta name="ProgId" content="Word.Document"');
        var e
    }
    function Sf(t) {
        return xe(t, 'id="docs-internal-guid-')
    }
    function Of(t) {
        return 0 < t.length
    }
    function Af(e, t) {
        return ks(e.types, t).map(function(t) {
            return e.getData(t.type)
        }).filter(Of)
    }
    function kf(t) {
        return Af(t, "html")
    }
    function Cf(t) {
        return kf(t).filter(Sf)
    }
    function Df(t) {
        return il ? rt.from(t.clipboardData).filter(ys) : rt.none()
    }
    function Lf(t) {
        var e, n, r = Vn.fromTag("div"), o = (e = un(r),
        mo(e, t, [$a]));
        return n = o,
        t = un(e = r).dom,
        o = Vn.fromDom(t.createDocumentFragment()),
        t = Kr(n, t),
        Hr(o, t),
        Wr(e),
        Io(e, o),
        Xf({
            container: r
        })
    }
    function Ef(t, n) {
        function e(r) {
            return void 0 === r.items ? rt.none() : (t = al,
            e = r.types,
            V(t, function(t) {
                return ks(e, t)
            }).map(function(t) {
                for (var e = [], n = 0; n < r.items.length; n++)
                    e.push(r.items[n]);
                return Jf({
                    images: e
                })
            }));
            var t, e
        }
        function r(e) {
            return V(e.types, function(t) {
                return "text/plain" === t ? rt.some(e.getData(t)).map(function(t) {
                    return Zf({
                        text: n.sanitizeText(t)
                    })
                }) : rt.none()
            })
        }
        return void 0 === n && (n = Gf),
        {
            getWordData: function() {
                return Df(t).bind(function(n) {
                    return kf(n).filter(If).map(function(t) {
                        var e = Af(n, "rtf");
                        return Yf({
                            html: t,
                            rtf: e.fold(function() {
                                return Os()
                            }, function(t) {
                                return As(t)
                            })
                        })
                    })
                })
            },
            getGoogleDocsData: function() {
                return Df(t).bind(Cf).map(function(t) {
                    return n.sanitizeHtml(t, "googledocs")
                }).map(Lf)
            },
            getImage: function() {
                return Df(t).bind(e)
            },
            getText: function() {
                return Df(t).fold(function() {
                    var t = window.clipboardData;
                    return void 0 !== t ? rt.some(Zf({
                        text: n.sanitizeText(t.getData("text"))
                    })) : rt.none()
                }, r)
            },
            getHtml: function() {
                return Df(t).bind(kf).map(n.sanitizeHtml).map(Lf)
            },
            getOnlyText: function() {
                return Df(t).bind(function(t) {
                    return e = t.types,
                    n = "text/plain",
                    1 === e.length && e[0] === n ? r(t) : rt.none();
                    var e, n
                })
            },
            getNative: function() {
                return Kf({
                    nativeEvent: t
                })
            },
            getVoid: function() {
                return Qf({})
            }
        }
    }
    function _f(t) {
        return P(t, function(t) {
            return t.asset
        })
    }
    function Nf(r, o, n) {
        function i(t, e, n) {
            a.trigger.block(!0),
            (t = We(r, o, t)).capture && n();
            var n = P(t.steps, function(t) {
                return t(e)
            })
              , n = ze(n, t.input)
              , i = cl.getLabelForApi(t.label);
            n.get(function(t) {
                var r = t.bundle.isInternal.getOr(!1)
                  , o = t.bundle.officeStyles.fold(l("auto"), function(t) {
                    return t ? "merge" : "clean"
                });
                a.trigger.block(!1),
                Me(t.response, function(t) {
                    a.trigger.error(t)
                }, function(t, e) {
                    a.trigger.insert(t, _f(e), e, r, i, o)
                }, function() {
                    a.trigger.cancel()
                }, function(t, e, n) {
                    a.trigger.insert(t, _f(e), e, r, i, o),
                    a.trigger.error(n)
                })
            })
        }
        var a = Yu({
            cancel: Ju([]),
            error: Ju(["message"]),
            insert: Ju(["elements", "assets", "correlated", "isInternal", "source", "mode"]),
            block: Ju(["state"])
        })
          , u = vc(function(e) {
            var t = sn(Vn.fromDom(e.target));
            sc(t.dom).each(function(t) {
                Ye(t.start, is()) || (t = Ef(e, n),
                as() && (u.control.block(),
                e.preventDefault()),
                i(t, u.control, function() {
                    e.preventDefault()
                }))
            })
        });
        return {
            paste: u.instance,
            pasteCustom: function(t, e) {
                var n = vc(h);
                i(t, n.control, e = void 0 === e ? h : e)
            },
            isBlocked: u.control.isBlocked,
            destroy: h,
            events: a.registry
        }
    }
    function Pf() {
        var e = rt.none();
        return {
            convert: function(t) {
                e = sl(t)
            },
            listen: function(t) {
                return e.fold(function() {
                    return $t(function(t) {
                        t([])
                    })
                }, function(t) {
                    return t
                }).get(t)
            },
            clear: function() {
                e = rt.none()
            }
        }
    }
    function Rf(t) {
        return fl($t(t))
    }
    function Mf(t, e) {
        return {
            asset: t,
            image: e
        }
    }
    function Ff(t, r) {
        return St.cata(t, function(t, e, n) {
            return Ce(r, "src", n),
            !0
        }, O)
    }
    function jf(t, n) {
        var r = [];
        return R(t, function(t, e) {
            e = n[e];
            Ff(t, e) && r.push(Mf(t, e))
        }),
        r
    }
    function Uf(t, e) {
        return {
            futureAsset: t,
            image: e
        }
    }
    function Hf(t) {
        var e = Vn.fromTag("div");
        return Hr(e, t),
        qr(e, "img[src]")
    }
    function Wf(t) {
        return 0 === t.indexOf("data:") && -1 < t.indexOf("base64")
    }
    function Bf(t) {
        return 0 === t.indexOf("blob:")
    }
    function zf(t) {
        return Ee(t, "src").exists(function(t) {
            return Wf(t) || Bf(t)
        })
    }
    function qf(t) {
        return B(Hf(t), function(t) {
            var e, n, r = Ee(t, "src").getOr("");
            return Wf(r) ? (n = t,
            Nn(r).map(function(t) {
                return Uf(pl(ge(t)), n)
            }).toArray()) : Bf(r) ? (e = t,
            ce(r).map(function(t) {
                t = gl(t).bindFuture(function(t) {
                    return ge(t).map(ku.value)
                });
                return Uf(t, e)
            }).toArray()) : []
        })
    }
    var $f = function e(t) {
        function f(t) {
            return e(t)
        }
        var u = 0 < arguments.length && void 0 !== t ? t : bf();
        if (f.version = "2.2.8",
        f.removed = [],
        !u || !u.document || 9 !== u.document.nodeType)
            return f.isSupported = !1,
            f;
        var c = u.document
          , o = u.document
          , s = u.DocumentFragment
          , n = u.HTMLTemplateElement
          , l = u.Node
          , a = u.Element
          , r = u.NodeFilter
          , i = u.NamedNodeMap
          , d = void 0 === i ? u.NamedNodeMap || u.MozNamedAttrMap : i
          , m = u.Text
          , p = u.Comment
          , g = u.DOMParser
          , t = u.trustedTypes
          , i = a.prototype
          , v = Ys(i, "cloneNode")
          , h = Ys(i, "nextSibling")
          , y = Ys(i, "childNodes")
          , b = Ys(i, "parentNode");
        "function" != typeof n || (n = o.createElement("template")).content && n.content.ownerDocument && (o = n.content.ownerDocument);
        var x = xf(t, c)
          , w = x && Z ? x.createHTML("") : ""
          , T = o.implementation
          , I = o.createNodeIterator
          , S = o.createDocumentFragment
          , O = c.importNode
          , t = {};
        try {
            t = Js(o).documentMode ? o.documentMode : {}
        } catch (t) {}
        var A = {};
        f.isSupported = "function" == typeof b && T && void 0 !== T.createHTMLDocument && 9 !== t;
        function k(t) {
            lt && lt === t || (t = Js(t = t && "object" === (void 0 === t ? "undefined" : hf(t)) ? t : {}),
            M = "ALLOWED_TAGS"in t ? Xs({}, t.ALLOWED_TAGS) : F,
            j = "ALLOWED_ATTR"in t ? Xs({}, t.ALLOWED_ATTR) : U,
            it = "ADD_URI_SAFE_ATTR"in t ? Xs(Js(at), t.ADD_URI_SAFE_ATTR) : at,
            rt = "ADD_DATA_URI_TAGS"in t ? Xs(Js(ot), t.ADD_DATA_URI_TAGS) : ot,
            H = "FORBID_TAGS"in t ? Xs({}, t.FORBID_TAGS) : {},
            W = "FORBID_ATTR"in t ? Xs({}, t.FORBID_ATTR) : {},
            C = "USE_PROFILES"in t && t.USE_PROFILES,
            B = !1 !== t.ALLOW_ARIA_ATTR,
            z = !1 !== t.ALLOW_DATA_ATTR,
            q = t.ALLOW_UNKNOWN_PROTOCOLS || !1,
            $ = t.SAFE_FOR_TEMPLATES || !1,
            V = t.WHOLE_DOCUMENT || !1,
            X = t.RETURN_DOM || !1,
            J = t.RETURN_DOM_FRAGMENT || !1,
            Y = !1 !== t.RETURN_DOM_IMPORT,
            Z = t.RETURN_TRUSTED_TYPE || !1,
            K = t.FORCE_BODY || !1,
            Q = !1 !== t.SANITIZE_DOM,
            tt = !1 !== t.KEEP_CONTENT,
            et = t.IN_PLACE || !1,
            R = t.ALLOWED_URI_REGEXP || R,
            ft = t.NAMESPACE || ft,
            $ && (z = !1),
            J && (X = !0),
            C && (M = Xs({}, [].concat(yf(of))),
            j = [],
            !0 === C.html && (Xs(M, Zs),
            Xs(j, af)),
            !0 === C.svg && (Xs(M, Qs),
            Xs(j, uf),
            Xs(j, sf)),
            !0 === C.svgFilters && (Xs(M, tf),
            Xs(j, uf),
            Xs(j, sf)),
            !0 === C.mathMl && (Xs(M, nf),
            Xs(j, cf),
            Xs(j, sf))),
            t.ADD_TAGS && Xs(M = M === F ? Js(M) : M, t.ADD_TAGS),
            t.ADD_ATTR && Xs(j = j === U ? Js(j) : j, t.ADD_ATTR),
            t.ADD_URI_SAFE_ATTR && Xs(it, t.ADD_URI_SAFE_ATTR),
            tt && (M["#text"] = !0),
            V && Xs(M, ["html", "head", "body"]),
            M.table && (Xs(M, ["tbody"]),
            delete H.tbody),
            Ps && Ps(t),
            lt = t)
        }
        var C, D = ff, L = lf, E = df, _ = mf, N = gf, P = vf, R = pf, M = null, F = Xs({}, [].concat(yf(Zs), yf(Qs), yf(tf), yf(nf), yf(of))), j = null, U = Xs({}, [].concat(yf(af), yf(uf), yf(cf), yf(sf))), H = null, W = null, B = !0, z = !0, q = !1, $ = !1, V = !1, G = !1, K = !1, X = !1, J = !1, Y = !0, Z = !1, Q = !0, tt = !0, et = !1, nt = Xs({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), rt = null, ot = Xs({}, ["audio", "video", "img", "source", "image", "track"]), it = null, at = Xs({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]), ut = "http://www.w3.org/1998/Math/MathML", ct = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml", ft = st, lt = null, dt = o.createElement("form"), mt = Xs({}, ["mi", "mo", "mn", "ms", "mtext"]), pt = Xs({}, ["foreignobject", "desc", "title", "annotation-xml"]), gt = Xs({}, Qs);
        Xs(gt, tf),
        Xs(gt, ef);
        var vt = Xs({}, nf);
        Xs(vt, rf);
        function ht(e) {
            Hs(f.removed, {
                element: e
            });
            try {
                e.parentNode.removeChild(e)
            } catch (t) {
                try {
                    e.outerHTML = w
                } catch (t) {
                    e.remove()
                }
            }
        }
        function yt(t, e) {
            try {
                Hs(f.removed, {
                    attribute: e.getAttributeNode(t),
                    from: e
                })
            } catch (t) {
                Hs(f.removed, {
                    attribute: null,
                    from: e
                })
            }
            if (e.removeAttribute(t),
            "is" === t && !j[t])
                if (X || J)
                    try {
                        ht(e)
                    } catch (t) {}
                else
                    try {
                        e.setAttribute(t, "")
                    } catch (t) {}
        }
        function bt(t) {
            var e = void 0
              , n = void 0;
            K ? t = "<remove></remove>" + t : n = (r = Bs(t, /^[\r\n\t ]+/)) && r[0];
            var r = x ? x.createHTML(t) : t;
            if (ft === st)
                try {
                    e = (new g).parseFromString(r, "text/html")
                } catch (t) {}
            return e && e.documentElement || ((e = T.createDocument(ft, "template", null)).documentElement.innerHTML = r),
            r = e.body || e.documentElement,
            t && n && r.insertBefore(o.createTextNode(n), r.childNodes[0] || null),
            V ? e.documentElement : r
        }
        function xt(t) {
            return I.call(t.ownerDocument || t, t, r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT, function() {
                return r.FILTER_ACCEPT
            }, !1)
        }
        function wt(t) {
            return "object" === (void 0 === l ? "undefined" : hf(l)) ? t instanceof l : t && "object" === (void 0 === t ? "undefined" : hf(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
        }
        function Tt(t, e, n) {
            A[t] && js(A[t], function(t) {
                t.call(f, e, n, lt)
            })
        }
        function It(t) {
            var e;
            if (Tt("beforeSanitizeElements", t, null),
            !((n = t)instanceof m || n instanceof p || "string" == typeof n.nodeName && "string" == typeof n.textContent && "function" == typeof n.removeChild && n.attributes instanceof d && "function" == typeof n.removeAttribute && "function" == typeof n.setAttribute && "string" == typeof n.namespaceURI && "function" == typeof n.insertBefore))
                return ht(t),
                1;
            if (Bs(t.nodeName, /[\u0080-\uFFFF]/))
                return ht(t),
                1;
            var n = Ws(t.nodeName);
            if (Tt("uponSanitizeElement", t, {
                tagName: n,
                allowedTags: M
            }),
            !wt(t.firstElementChild) && (!wt(t.content) || !wt(t.content.firstElementChild)) && Vs(/<[/\w]/g, t.innerHTML) && Vs(/<[/\w]/g, t.textContent))
                return ht(t),
                1;
            if (M[n] && !H[n])
                return t instanceof a && !function(t) {
                    var e = b(t);
                    e && e.tagName || (e = {
                        namespaceURI: st,
                        tagName: "template"
                    });
                    var n = Ws(t.tagName)
                      , r = Ws(e.tagName);
                    return t.namespaceURI === ct ? e.namespaceURI === st ? "svg" === n : e.namespaceURI === ut ? "svg" === n && ("annotation-xml" === r || mt[r]) : Boolean(gt[n]) : t.namespaceURI === ut ? e.namespaceURI === st ? "math" === n : e.namespaceURI === ct ? "math" === n && pt[r] : Boolean(vt[n]) : t.namespaceURI === st && ((e.namespaceURI !== ct || pt[r]) && ((e.namespaceURI !== ut || mt[r]) && (r = Xs({}, ["title", "style", "font", "a", "script"]),
                    !vt[n] && (r[n] || !gt[n]))))
                }(t) || ("noscript" === n || "noembed" === n) && Vs(/<\/no(script|embed)/i, t.innerHTML) ? (ht(t),
                1) : ($ && 3 === t.nodeType && (e = t.textContent,
                e = zs(e, D, " "),
                e = zs(e, L, " "),
                t.textContent !== e && (Hs(f.removed, {
                    element: t.cloneNode()
                }),
                t.textContent = e)),
                Tt("afterSanitizeElements", t, null),
                0);
            if (tt && !nt[n]) {
                var r = b(t) || t.parentNode
                  , o = y(t) || t.childNodes;
                if (o && r)
                    for (var i = o.length - 1; 0 <= i; --i)
                        r.insertBefore(v(o[i], !0), h(t))
            }
            return ht(t),
            1
        }
        function St(t, e, n) {
            if (Q && ("id" === e || "name" === e) && (n in o || n in dt))
                return !1;
            if (!(z && Vs(E, e) || B && Vs(_, e))) {
                if (!j[e] || W[e])
                    return !1;
                if (!it[e] && !Vs(R, zs(n, P, "")) && ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== qs(n, "data:") || !rt[t]) && (!q || Vs(N, zs(n, P, ""))) && n)
                    return !1
            }
            return !0
        }
        function Ot(t) {
            var e = void 0
              , n = void 0
              , r = void 0;
            Tt("beforeSanitizeAttributes", t, null);
            var o = t.attributes;
            if (o) {
                for (var i = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: j
                }, r = o.length; r--; ) {
                    var a = (e = o[r]).name
                      , u = e.namespaceURI
                      , n = $s(e.value)
                      , c = Ws(a);
                    if (i.attrName = c,
                    i.attrValue = n,
                    i.keepAttr = !0,
                    i.forceKeepAttr = void 0,
                    Tt("uponSanitizeAttribute", t, i),
                    n = i.attrValue,
                    !i.forceKeepAttr && (yt(a, t),
                    i.keepAttr))
                        if (Vs(/\/>/i, n))
                            yt(a, t);
                        else {
                            $ && (n = zs(n, D, " "),
                            n = zs(n, L, " "));
                            var s = t.nodeName.toLowerCase();
                            if (St(s, c, n))
                                try {
                                    u ? t.setAttributeNS(u, a, n) : t.setAttribute(a, n),
                                    Us(f.removed)
                                } catch (t) {}
                        }
                }
                Tt("afterSanitizeAttributes", t, null)
            }
        }
        function At(t) {
            var e, n = xt(t);
            for (Tt("beforeSanitizeShadowDOM", t, null); e = n.nextNode(); )
                Tt("uponSanitizeShadowNode", e, null),
                It(e) || (e.content instanceof s && At(e.content),
                Ot(e));
            Tt("afterSanitizeShadowDOM", t, null)
        }
        return f.sanitize = function(t, e) {
            var n, r = void 0, o = void 0, i = void 0;
            if ("string" != typeof (t = t || "\x3c!--\x3e") && !wt(t)) {
                if ("function" != typeof t.toString)
                    throw Gs("toString is not a function");
                if ("string" != typeof (t = t.toString()))
                    throw Gs("dirty is not a string, aborting")
            }
            if (!f.isSupported) {
                if ("object" === hf(u.toStaticHTML) || "function" == typeof u.toStaticHTML) {
                    if ("string" == typeof t)
                        return u.toStaticHTML(t);
                    if (wt(t))
                        return u.toStaticHTML(t.outerHTML)
                }
                return t
            }
            if (G || k(e),
            f.removed = [],
            !(et = "string" != typeof t && et))
                if (t instanceof l)
                    1 === (e = (r = bt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === e.nodeName || "HTML" === e.nodeName ? r = e : r.appendChild(e);
                else {
                    if (!X && !$ && !V && -1 === t.indexOf("<"))
                        return x && Z ? x.createHTML(t) : t;
                    if (!(r = bt(t)))
                        return X ? null : w
                }
            r && K && ht(r.firstChild);
            for (var a = xt(et ? t : r); n = a.nextNode(); )
                3 === n.nodeType && n === o || It(n) || (n.content instanceof s && At(n.content),
                Ot(n),
                o = n);
            if (o = null,
            et)
                return t;
            if (X) {
                if (J)
                    for (i = S.call(r.ownerDocument); r.firstChild; )
                        i.appendChild(r.firstChild);
                else
                    i = r;
                return i = Y ? O.call(c, i, !0) : i
            }
            return t = V ? r.outerHTML : r.innerHTML,
            $ && (t = zs(t, D, " "),
            t = zs(t, L, " ")),
            x && Z ? x.createHTML(t) : t
        }
        ,
        f.setConfig = function(t) {
            k(t),
            G = !0
        }
        ,
        f.clearConfig = function() {
            lt = null,
            G = !1
        }
        ,
        f.isValidAttribute = function(t, e, n) {
            return lt || k({}),
            t = Ws(t),
            e = Ws(e),
            St(t, e, n)
        }
        ,
        f.addHook = function(t, e) {
            "function" == typeof e && (A[t] = A[t] || [],
            Hs(A[t], e))
        }
        ,
        f.removeHook = function(t) {
            A[t] && Us(A[t])
        }
        ,
        f.removeHooks = function(t) {
            A[t] && (A[t] = [])
        }
        ,
        f.removeAllHooks = function() {
            A = {}
        }
        ,
        f
    }()
      , Vf = ["script", "svg"]
      , Gf = {
        sanitizeHtml: u,
        sanitizeText: u
    }
      , It = function(e) {
        return function(t) {
            return {
                discriminator: e,
                data: t
            }
        }
    }
      , Hn = function(e) {
        return function(t) {
            return t.discriminator === e ? rt.some(t.data) : rt.none()
        }
    }
      , Kf = It("event")
      , Xf = It("html")
      , Jf = It("images")
      , Yf = It("word")
      , Zf = It("text")
      , Qf = It("void")
      , tl = Hn("event")
      , el = Hn("html")
      , nl = Hn("images")
      , rl = Hn("word")
      , ol = Hn("text")
      , sr = Or().browser
      , il = !(sr.isIE() || sr.isEdge() && sr.version.major < 16)
      , al = ["^image/", "file"]
      , ul = {
        native: "Outside of Textbox.io pasting HTML5 API (could be internal)",
        fallback: "Outside of Textbox.io pasting offscreen (could be internal)",
        msoffice: "Word Import pasting",
        googledocs: " pasting",
        image: "Image pasting",
        plaintext: "Only plain text is available to paste",
        text: "Plain text pasting",
        none: "There is no valid way to paste",
        discard: "There is no valid way to paste, discarding content"
    }
      , cl = ut({
        getLabelForApi: function(e) {
            var t = yt(ul);
            return U(t, function(t) {
                return ul[t] === e
            }).fold(function() {
                return "unknown"
            }, function(t) {
                switch (t) {
                case "native":
                case "fallback":
                    return "html";
                case "none":
                case "discard":
                    return "invalid";
                default:
                    return t
                }
            })
        }
    }, ul)
      , sl = function(n) {
        var t, e = we("window.clipboardData.files"), r = f((t = n).convertURL) ? t.convertURL : f(t.msConvertURL) ? t.msConvertURL : void 0;
        if (void 0 !== e && void 0 !== sl && 0 < e.length) {
            e = Gt(e, function(t) {
                var e = URL.createObjectURL(t);
                return r.apply(n, [t, "specified", e]),
                Rn(t, e)
            });
            return rt.some(e)
        }
        return rt.none()
    }
      , fl = function(i) {
        return ut(ut({}, i), {
            toCached: function() {
                return fl(i.toCached())
            },
            bindFuture: function(e) {
                return fl(i.bind(function(t) {
                    return t.fold(function(t) {
                        return Vt(ku.error(t))
                    }, function(t) {
                        return e(t)
                    })
                }))
            },
            bindResult: function(e) {
                return fl(i.map(function(t) {
                    return t.bind(e)
                }))
            },
            mapResult: function(e) {
                return fl(i.map(function(t) {
                    return t.map(e)
                }))
            },
            mapError: function(e) {
                return fl(i.map(function(t) {
                    return t.mapError(e)
                }))
            },
            foldResult: function(e, n) {
                return i.map(function(t) {
                    return t.fold(e, n)
                })
            },
            withTimeout: function(t, o) {
                return fl($t(function(e) {
                    var n = !1
                      , r = setTimeout(function() {
                        n = !0,
                        e(ku.error(o()))
                    }, t);
                    i.get(function(t) {
                        n || (clearTimeout(r),
                        e(t))
                    })
                }))
            }
        })
    }
      , At = function(t) {
        return fl(Vt(ku.value(t)))
    }
      , ll = Rf
      , dl = At
      , ml = function(t) {
        return fl(Vt(ku.error(t)))
    }
      , pl = function(t) {
        return fl(t.map(ku.value))
    }
      , gl = function(t) {
        return Rf(function(e) {
            t.then(function(t) {
                e(ku.value(t))
            }, function(t) {
                e(ku.error(t))
            })
        })
    };
    Tt([{
        bothErrors: ["error1", "error2"]
    }, {
        firstError: ["error1", "value2"]
    }, {
        secondError: ["value1", "error2"]
    }, {
        bothValues: ["value1", "value2"]
    }]);
    function vl(i) {
        return function(t, u) {
            return rr(function(a) {
                function n() {
                    je(a, {
                        response: u.response,
                        bundle: u.bundle
                    })
                }
                function r(o) {
                    var t = qf(o)
                      , e = Gt(t, function(t) {
                        return t.futureAsset
                    })
                      , i = P(t, function(t) {
                        return t.image
                    });
                    e.get(function(t) {
                        var e, n, r = (e = [],
                        n = [],
                        R(t, function(t) {
                            t.fold(function(t) {
                                e.push(t)
                            }, function(t) {
                                n.push(t)
                            })
                        }),
                        {
                            errors: e,
                            values: n
                        }), t = jf(r.values, i);
                        je(a, {
                            response: 0 < r.errors.length ? er(o, t, "errors.imageimport.failed") : Qn(o, t),
                            bundle: u.bundle
                        })
                    })
                }
                function o(t) {
                    var e = F(Hf(t), zf);
                    R(e, So),
                    je(a, {
                        response: 0 < e.length ? function(t) {
                            t = F(t, function(t) {
                                return !Ae("img")(t) || !zf(t)
                            });
                            return er(t, [], "errors.local.images.disallowed")
                        }(t) : u.response,
                        bundle: u.bundle
                    })
                }
                function t(t, e) {
                    !1 === i.allowLocalImages ? o(t) : 0 === e.length ? r(t) : n()
                }
                Me(u.response, n, t, n, t)
            })
        }
    }
    function hl(e, r, o) {
        return void 0 === o && (o = !1),
        new Yt(function(t) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                4 === n.readyState && t({
                    status: n.status,
                    blob: n.response
                })
            }
            ,
            n.open("GET", e, !0),
            n.withCredentials = o,
            ct(r, function(t, e) {
                n.setRequestHeader(e, t)
            }),
            n.responseType = "blob",
            n.send()
        }
        )
    }
    function yl(t) {
        var e, t = (e = t,
        "ImageProxy HTTP error: " + U(Hl, function(t) {
            return e === t.code
        }).fold(l("Unknown ImageProxy error"), function(t) {
            return t.message
        }));
        return Yt.reject(t)
    }
    function bl(e) {
        return U(Wl, function(t) {
            return t.type === e
        }).fold(l("Unknown service error"), function(t) {
            return t.message
        })
    }
    function xl(t) {
        return "ImageProxy Service error: " + function(t) {
            try {
                return rt.some(JSON.parse(t))
            } catch (t) {
                return rt.none()
            }
        }(t).bind(function(t) {
            return function(t, e) {
                t = j(e, function(t, e) {
                    return f(t) ? t[e] : void 0
                }, t);
                return rt.from(t)
            }(t, ["error", "type"]).map(bl)
        }).getOr("Invalid JSON in service error message")
    }
    function wl(t) {
        return r = t,
        new Yt(function(t, e) {
            var n = new FileReader;
            n.onload = function() {
                t(n.result)
            }
            ,
            n.onerror = function(t) {
                e(t)
            }
            ,
            n.readAsText(r)
        }
        ).then(function(t) {
            t = xl(t);
            return Yt.reject(t)
        });
        var r
    }
    function Tl(t) {
        return t < 200 || 300 <= t
    }
    function Il(t, e) {
        var n, r = {
            "Content-Type": "application/json;charset=UTF-8",
            "tiny-api-key": e
        };
        return hl((n = e,
        t = -1 === (e = t).indexOf("?") ? "?" : "&",
        /[?&]apiKey=/.test(e) ? e : e + t + "apiKey=" + encodeURIComponent(n)), r).then(function(t) {
            return Tl(t.status) ? (e = t.status,
            n = t.blob,
            r = e,
            "application/json" !== (null == (o = n) ? void 0 : o.type) || 400 !== r && 403 !== r && 404 !== r && 500 !== r ? yl(e) : wl(n)) : Yt.resolve(t.blob);
            var e, n, r, o
        })
    }
    function Sl(t, e, n) {
        return void 0 === n && (n = !1),
        e ? Il(t, e) : hl(t, {}, n).then(function(t) {
            return Tl(t.status) ? yl(t.status) : Yt.resolve(t.blob)
        })
    }
    function Ol(t, e) {
        var n = (e ? Bl : zl).exec(t)
          , t = q(["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], function(t, e) {
            return null !== (e = n[e]) && void 0 !== e ? e : ""
        });
        return ut(ut({}, t), {
            queryKey: function(t) {
                for (var e = {}; ; ) {
                    var n = ql.exec(t);
                    if (null === n)
                        return e;
                    e[n[1]] = n[2]
                }
            }(t.query)
        })
    }
    function Al(t, e) {
        return Ol(t, null !== (e = (e = void 0 === e ? {} : e).strictMode) && void 0 !== e && e)
    }
    function kl(t) {
        return be(t, $l(t))
    }
    function Cl(t) {
        for (var e, n = t, r = ""; "" !== n; )
            Mn(n, "../") ? n = ye(n, "../") : Mn(n, "./") ? n = ye(n, "./") : Mn(n, "/./") ? n = "/" + ye(n, "/./") : "/." === n ? n = "/" : Mn(n, "/../") ? (n = "/" + ye(n, "/../"),
            r = kl(r)) : "/.." === n ? (n = "/",
            r = kl(r)) : "." === n || ".." === n ? n = "" : (e = /(^\/?.*?)(\/|$)/.exec(n)[1],
            n = ye(n, e),
            r += e);
        return r
    }
    function Dl(t, e) {
        var t = Al(t, n = {
            strictMode: !0
        })
          , e = Al(e, n)
          , n = {};
        return "" !== e.protocol ? (n.protocol = e.protocol,
        n.authority = e.authority,
        n.path = Cl(e.path),
        n.query = e.query) : ("" !== e.authority ? (n.authority = e.authority,
        n.path = Cl(e.path),
        n.query = e.query) : ("" === e.path ? (n.path = t.path,
        "" !== e.query ? n.query = e.query : n.query = t.query) : (Mn(e.path, "/") ? n.path = Cl(e.path) : (n.path = function(t, e, n) {
            if ("" !== n && "" === t)
                return "/" + e;
            n = t.substring(t.lastIndexOf("/") + 1);
            return be(t, n) + e
        }(t.path, e.path, t.authority),
        n.path = Cl(n.path)),
        n.query = e.query),
        n.authority = t.authority),
        n.protocol = t.protocol),
        n.anchor = e.anchor,
        n
    }
    function Ll(t) {
        return function(t, c) {
            return rr(function(i) {
                function t() {
                    je(i, {
                        response: c.response,
                        bundle: c.bundle
                    })
                }
                function a(r) {
                    return _n(r).then(function(t) {
                        var e = Et("image")
                          , n = le(r, t)
                          , t = URL.createObjectURL(r);
                        return St.blob(e, n, t)
                    })
                }
                function u(t, e) {
                    return St.url(Et("image"), e, t)
                }
                function e(e, n) {
                    var r = !1
                      , o = B(e, function(t) {
                        return qr(t, "img")
                    });
                    Wt.all(P(o, function(t) {
                        var e = t.dom.src;
                        return function(t) {
                            t = Al(t);
                            return xe(t.host, "google") && !Mn(t.path, "/drawings/")
                        }(e) ? Sl(t.dom.src).then(a, function() {
                            return r = !0,
                            u(t, e)
                        }) : u(t, e)
                    })).then(function(t) {
                        t = n.concat(jf(t, o));
                        return je(i, {
                            response: r ? er(e, t, "errors.imageimport.failed") : Qn(e, t),
                            bundle: c.bundle
                        })
                    }, function() {
                        return je(i, {
                            response: Zn("errors.imageimport.invalid"),
                            bundle: c.bundle
                        })
                    })
                }
                Me(c.response, t, e, t, e)
            })
        }
    }
    function El(a, n) {
        function u(t, e) {
            e(rt.some(_o(n, {
                officeStyles: t,
                gdocsStyles: t,
                htmlStyles: t
            })))
        }
        var c = n.translations;
        return {
            get: function(t, e) {
                t = function(t) {
                    switch (t) {
                    case Ai.Word:
                        return "officeStyles";
                    case Ai.GoogleDocs:
                        return "gdocsStyles";
                    default:
                        return "htmlStyles"
                    }
                }(t),
                t = n[t];
                "clean" === t ? u(!1, e) : "merge" === t ? u(!0, e) : function(t) {
                    var e = Vn.fromTag("div");
                    Xe(e, Vl("styles-dialog-content"));
                    var n = Vn.fromTag("p")
                      , r = Kr(c("cement.dialog.paste.instructions"));
                    Hr(n, r),
                    Io(e, n);
                    var r = {
                        text: c("cement.dialog.paste.clean"),
                        tabindex: 0,
                        className: Vl("clean-styles"),
                        click: function() {
                            o(),
                            u(!1, t)
                        }
                    }
                      , n = {
                        text: c("cement.dialog.paste.merge"),
                        tabindex: 1,
                        className: Vl("merge-styles"),
                        click: function() {
                            o(),
                            u(!0, t)
                        }
                    }
                      , o = function() {
                        i.destroy()
                    }
                      , i = a();
                    i.setTitle(c("cement.dialog.paste.title")),
                    i.setContent(e),
                    i.setButtons([r, n]),
                    i.events.close.bind(function() {
                        t(rt.none()),
                        o()
                    }),
                    i.show()
                }(e)
            },
            destroy: h
        }
    }
    function _l(t, e) {
        var i = El(t, e);
        return function(t, n) {
            var r = n.bundle
              , o = n.response;
            return rr(function(e) {
                i.get(Xu(r), function(t) {
                    t = t.fold(function() {
                        return {
                            response: tr(),
                            bundle: n.bundle
                        }
                    }, function(t) {
                        return {
                            response: o,
                            bundle: Jn({
                                officeStyles: t.officeStyles,
                                gdocsStyles: t.gdocsStyles,
                                htmlStyles: t.htmlStyles
                            })
                        }
                    });
                    je(e, t)
                })
            })
        }
    }
    function Nl(r, o) {
        return function(t, e) {
            var n;
            return Ku(e.bundle) ? (n = !0,
            Fe({
                response: e.response,
                bundle: Jn({
                    officeStyles: n,
                    gdocsStyles: n,
                    htmlStyles: n
                })
            })) : _l(r, o)(t, e)
        }
    }
    function Pl(e) {
        var t, n, e = e.dom;
        try {
            var r = e.contentWindow ? e.contentWindow.document : e.contentDocument;
            return t = r,
            n = Vn.fromDom,
            null != t ? rt.some(n(t)) : rt.none()
        } catch (t) {
            return console.log("Error reading iframe: ", e),
            console.log("Error was: " + t),
            rt.none()
        }
    }
    function Rl(t, e) {
        if (!Lr(t))
            throw new Error("Internal error: attempted to write to an iframe that is not in the DOM");
        var n;
        (t = Pl(n = t).getOrThunk(function() {
            return un(n)
        }).dom).open("text/html", "replace"),
        t.writeln(e),
        t.close()
    }
    var Ml, Fl, jl, Ul, Hl = [{
        code: 404,
        message: "Could not find Image Proxy"
    }, {
        code: 403,
        message: "Rejected request"
    }, {
        code: 0,
        message: "Incorrect Image Proxy URL"
    }], Wl = [{
        type: "not_found",
        message: "Failed to load image."
    }, {
        type: "key_missing",
        message: "The request did not include an api key."
    }, {
        type: "key_not_found",
        message: "The provided api key could not be found."
    }, {
        type: "domain_not_trusted",
        message: "The api key is not valid for the request origins."
    }], Bl = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, zl = /^(?:(?![^:@\/]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ql = /(?:^|&)([^&=]+)=?([^&]*)/g, $l = function(t) {
        return t.substring(t.lastIndexOf("/"))
    }, Vl = Ot("ephox-cement").resolve, Gl = function(t) {
        t = t.dom.styleSheets;
        return Array.prototype.slice.call(t)
    }, lr = {}, fr = {
        exports: lr
    };
    Fl = lr,
    jl = fr,
    Ul = Ml = void 0,
    function(t) {
        "object" == typeof Fl && void 0 !== jl ? jl.exports = t() : "function" == typeof Ml && Ml.amd ? Ml([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = t()
    }(function() {
        return function r(o, i, a) {
            function u(e, t) {
                if (!i[e]) {
                    if (!o[e]) {
                        var n = "function" == typeof Ul && Ul;
                        if (!t && n)
                            return n(e, !0);
                        if (c)
                            return c(e, !0);
                        throw (n = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                        n
                    }
                    n = i[e] = {
                        exports: {}
                    },
                    o[e][0].call(n.exports, function(t) {
                        return u(o[e][1][t] || t)
                    }, n, n.exports, r, o, i, a)
                }
                return i[e].exports
            }
            for (var c = "function" == typeof Ul && Ul, t = 0; t < a.length; t++)
                u(a[t]);
            return u
        }({
            1: [function(t, e, n) {
                var r, a, r = (r = function(t) {
                    for (var e, n = [], r = t.split(","), o = 0, i = r.length; o < i; o += 1)
                        0 < (e = r[o]).length && n.push(a(e));
                    return n
                }
                ,
                a = function(c) {
                    var t, e, s = c, f = {
                        a: 0,
                        b: 0,
                        c: 0
                    }, l = [];
                    function n(t) {
                        var e, n, r, o;
                        if (t.test(s))
                            for (n = 0,
                            r = (e = s.match(t)).length; n < r; n += 1)
                                o = e[n],
                                s = s.replace(o, Array(o.length + 1).join("A"))
                    }
                    return t = function(t, e) {
                        var n, r, o, i, a, u;
                        if (t.test(s))
                            for (r = 0,
                            o = (n = s.match(t)).length; r < o; r += 1)
                                f[e] += 1,
                                i = n[r],
                                a = s.indexOf(i),
                                u = i.length,
                                l.push({
                                    selector: c.substr(a, u),
                                    type: e,
                                    index: a,
                                    length: u
                                }),
                                s = s.replace(i, Array(u + 1).join(" "))
                    }
                    ,
                    n(/\\[0-9A-Fa-f]{6}\s?/g),
                    n(/\\[0-9A-Fa-f]{1,5}\s/g),
                    n(/\\./g),
                    (e = /:not\(([^\)]*)\)/g).test(s) && (s = s.replace(e, "     $1 ")),
                    function() {
                        var t, e, n, r, o = /{[^]*/gm;
                        if (o.test(s))
                            for (e = 0,
                            n = (t = s.match(o)).length; e < n; e += 1)
                                r = t[e],
                                s = s.replace(r, Array(r.length + 1).join(" "))
                    }(),
                    t(/(\[[^\]]+\])/g, "b"),
                    t(/(#[^\#\s\+>~\.\[:]+)/g, "a"),
                    t(/(\.[^\s\+>~\.\[:]+)/g, "b"),
                    t(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, "c"),
                    t(/(:[\w-]+\([^\)]*\))/gi, "b"),
                    t(/(:[^\s\+>~\.\[:]+)/g, "b"),
                    s = (s = s.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " "),
                    t(/([^\s\+>~\.\[:]+)/g, "c"),
                    l.sort(function(t, e) {
                        return t.index - e.index
                    }),
                    {
                        selector: c,
                        specificity: "0," + f.a.toString() + "," + f.b.toString() + "," + f.c.toString(),
                        specificityArray: [0, f.a, f.b, f.c],
                        parts: l
                    }
                }
                ,
                {
                    calculate: r,
                    compare: function(t, e) {
                        var n, r, o;
                        if ("string" == typeof t) {
                            if (-1 !== t.indexOf(","))
                                throw "Invalid CSS selector";
                            n = a(t).specificityArray
                        } else {
                            if (!Array.isArray(t))
                                throw "Invalid CSS selector or specificity array";
                            if (4 !== t.filter(function(t) {
                                return "number" == typeof t
                            }).length)
                                throw "Invalid specificity array";
                            n = t
                        }
                        if ("string" == typeof e) {
                            if (-1 !== e.indexOf(","))
                                throw "Invalid CSS selector";
                            r = a(e).specificityArray
                        } else {
                            if (!Array.isArray(e))
                                throw "Invalid CSS selector or specificity array";
                            if (4 !== e.filter(function(t) {
                                return "number" == typeof t
                            }).length)
                                throw "Invalid specificity array";
                            r = e
                        }
                        for (o = 0; o < 4; o += 1) {
                            if (n[o] < r[o])
                                return -1;
                            if (n[o] > r[o])
                                return 1
                        }
                        return 0
                    }
                });
                void 0 !== n && (n.calculate = r.calculate,
                n.compare = r.compare)
            }
            , {}],
            2: [function(t, e, n) {
                t = t("specificity");
                e.exports = {
                    boltExport: t
                }
            }
            , {
                specificity: 1
            }]
        }, {}, [2])(2)
    });
    function Kl(t) {
        return B(t, Id)
    }
    function Xl(e, t, n) {
        t = B(t, function(i) {
            var t = qr(e, i.selector);
            return R(t, function(t) {
                var n, r, o, e = (n = i.raw,
                r = t,
                o = {},
                R(n, function(t) {
                    var e;
                    void 0 !== n[t] && (e = r.dom.style,
                    _(e, t) || (o[t] = n[t]))
                }),
                o);
                Tn(t, e)
            }),
            t
        }),
        n && R(t, function(t) {
            Ne(t, "class")
        })
    }
    function Jl(t, e, n) {
        function r(t) {
            return -1 !== t.selector.indexOf(",")
        }
        var o = B(F(t, r), function(e) {
            var t = e.selector.split(",");
            return P(t, function(t) {
                return {
                    selector: t.trim(),
                    raw: e.raw
                }
            })
        });
        (o = F(t, function(t) {
            return !r(t)
        }).concat(o)).sort(function(t, e) {
            return Td.compare(t.selector, e.selector)
        }).reverse(),
        Xl(e, o, n)
    }
    function Yl(t, e, n, r) {
        t = Gl(t),
        t = Kl(t).map(function(t) {
            var e = t.selector;
            return {
                selector: n.hasOwnProperty(e) ? n[e] : e,
                raw: t.raw
            }
        }),
        Jl(t, e, r)
    }
    function Zl(t, e, n, r) {
        t = Gl(t),
        t = Kl(t),
        t = F(t, function(t) {
            return Mn(t.selector, n)
        }),
        Jl(t, e, r)
    }
    function Ql(t, e, n, r) {
        t = Gl(t),
        t = Kl(t),
        t = F(t, function(t) {
            return _(n, t.selector)
        }),
        Jl(t, e, r)
    }
    function td(t) {
        var e, n = (e = Vn.fromTag("span"),
        Fr(t, e),
        e);
        return {
            convertToPx: function(t) {
                var e;
                return wn(n, "margin-left", t),
                e = In(n, "margin-left"),
                parseFloat(/-?\d+\.?\d*/.exec(e)[0])
            },
            destroy: function() {
                return So(n)
            }
        }
    }
    function ed(t, e, n) {
        (n = n.mergeInline()) && (Sd.inlineStyles(t, e, Od),
        mu(e)),
        Ad(e, n)
    }
    function nd(n) {
        var t, r = (t = Vn.fromDom(document.body),
        {
            play: function(n, r, o) {
                var i = Vn.fromTag("div")
                  , a = Vn.fromTag("iframe");
                Tn(i, {
                    display: "none"
                });
                var u = gc(a, "load", function() {
                    u.unbind(),
                    Rl(a, n);
                    var t = null === (e = a.dom.contentWindow) || void 0 === e ? void 0 : e.document;
                    if (void 0 === t)
                        throw new Error("sandbox iframe load event did not fire correctly");
                    var e = Vn.fromDom(t)
                      , t = e.dom.body;
                    if (void 0 === t)
                        throw new Error("sandbox iframe does not have a body");
                    t = Vn.fromDom(t),
                    t = r(e, t);
                    So(i),
                    setTimeout(p(o, t), 0)
                });
                Io(i, a),
                Io(t, i)
            }
        });
        return function(t, e) {
            r.play(t, function(t, e) {
                return ed(t, e, {
                    mergeInline: l(n)
                }),
                Xr(e)
            }, e)
        }
    }
    function rd(e, t, n, i, r) {
        function a(t) {
            je(e, {
                response: t,
                bundle: Jn({})
            })
        }
        n = r.sanitizeHtml(n, "word"),
        nd(t)(n, function(t) {
            function e(t) {
                a(Qn(n, t))
            }
            var n = Kr(t)
              , r = Vn.fromTag("div");
            Hr(r, n);
            var o = F(on("img[src]", r), function(t) {
                return Ee(t, "src").exists(function(t) {
                    return Mn(t, "blob:") || Mn(t, "data:")
                })
            })
              , t = on("img[data-image-src]", r);
            0 === o.length && 0 === t.length ? e([]) : i ? (R(o, function(t) {
                return Ne(t, "id"),
                0
            }),
            Gt(o, function(i) {
                return $t(function(r) {
                    var o = i.dom;
                    de(o).then(function(n) {
                        n.toBlob().then(function(t) {
                            var e = Mn(o.src, "blob:") ? o.src : URL.createObjectURL(t)
                              , t = Et("image")
                              , e = St.blob(t, n, e);
                            r(Mf(e, i))
                        })
                    })
                })
            }).get(e)) : (R(o, So),
            R(t, So),
            r = gn(r),
            a(er(r, [], "errors.local.images.disallowed")))
        })
    }
    function od(t, r, e, o) {
        var i = t.html;
        return rr(function(n) {
            e.cleanDocument(i, r, o).then(function(t) {
                var e;
                null == (e = t) || 0 === e.length ? je(n, {
                    response: Qn([], []),
                    bundle: Jn({})
                }) : (e = void 0 === o.sanitizer ? Tf(o.intraFlag.isMarked) : o.sanitizer,
                rd(n, r, t, o.allowLocalImages, e))
            }, function(t) {
                console.error("PowerPaste error code: WIM01"),
                je(n, {
                    response: Zn("errors.paste.process.failure"),
                    bundle: Jn({})
                })
            })
        })
    }
    function id(t) {
        var t = F(t, function(t) {
            return "file" === t.kind && /image/.test(t.type)
        })
          , n = j(t, function(t, e) {
            e = e.getAsFile();
            return null !== e ? t.concat(e) : t
        }, []);
        return rr(function(e) {
            ve(n).get(function(t) {
                var i, a, t = (i = [],
                a = [],
                R(t, function(o) {
                    return St.cata(o, function(t, e, n) {
                        var r = Vn.fromTag("img");
                        Ce(r, "src", n),
                        i.push(r),
                        a.push(Mf(o, r))
                    }, function(t, e, n) {
                        console.error("Internal error: Paste operation produced an image URL instead of a Data URI: ", e)
                    })
                }),
                Qn(i, a));
                je(e, {
                    response: t,
                    bundle: Jn({})
                })
            })
        })
    }
    function ad(t) {
        try {
            var e = t()
              , n = null != e && 0 < e.length ? Kr(e) : [];
            return ku.value(n)
        } catch (t) {
            return console.error("PowerPaste error code: PT01. Message: ", t),
            ku.error("errors.paste.process.failure")
        }
    }
    function ud(t) {
        return t.fold(Ue, function(t) {
            return Fe({
                response: Qn(t, []),
                bundle: Jn({})
            })
        })
    }
    function cd(e, n, r, o, i) {
        return ad(function() {
            var t = {
                type: o,
                merge: r,
                cleanFilteredInlineElements: null !== (t = i.cleanFilteredInlineElements) && void 0 !== t ? t : [],
                indentUseMargin: null !== (t = i.indentUseMargin) && void 0 !== t && t
            };
            return function(t, e, n, r) {
                qu(n);
                n = Xr(n),
                r = Za(e, r);
                return mo(t, n, r)
            }(e, Cd, n, t)
        })
    }
    function sd(t, e) {
        var n = ad(function() {
            return qc(t, Xr(e))
        });
        return ud(n)
    }
    function fd(n) {
        return rr(function(e) {
            function t(t) {
                return je(e, {
                    response: Qn([t], []),
                    bundle: Jn({})
                })
            }
            zu(n).then(t).catch(function() {
                return t(n)
            })
        })
    }
    function ld(t, e, n, r, o, i) {
        return cd(t, e, r, n, i).fold(Ue, function(n) {
            return rr(function(e) {
                o.get(function(t) {
                    var o, i, t = (t = t,
                    o = [],
                    i = B(n, function(t) {
                        return Ae("img")(t) ? [t] : qr(t, "img")
                    }),
                    R(t, function(r) {
                        St.cata(r, function(t, e, n) {
                            R(i, function(t) {
                                Le(t, "src") === n && o.push(Mf(r, t))
                            })
                        }, h)
                    }),
                    o);
                    je(e, {
                        response: Qn(n, t),
                        bundle: Jn({})
                    })
                })
            })
        })
    }
    function dd(t) {
        return "\n" === t || "\r" === t
    }
    function md(t, e) {
        var o = t.replace(/\t/g, (t = " ",
        (e = e) <= 0 ? "" : new Array(e + 1).join(t)));
        return j(o, function(t, e) {
            return -1 !== " \f\t\v".indexOf(e) || "\xa0" === e ? t.pcIsSpace || "" === t.str || t.str.length === o.length - 1 || (n = o,
            (r = t.str.length + 1) < n.length && 0 <= r && dd(n[r])) ? {
                pcIsSpace: !1,
                str: t.str + "\xa0"
            } : {
                pcIsSpace: !0,
                str: t.str + " "
            } : {
                pcIsSpace: dd(e),
                str: t.str + e
            };
            var n, r
        }, {
            pcIsSpace: !1,
            str: ""
        }).str
    }
    function pd(t, e) {
        var n, e = function(t, e) {
            e = md(t, e).replace(/^[\r\n]*|[\r\n]*$/g, "").split(/(?:\r?\n){2}/),
            e = P(e, function(t) {
                return t.split(/\n|\r\n/).join("<br />")
            });
            return 1 === e.length ? e[0] : P(e, function(t) {
                return "<p>" + t + "</p>"
            }).join("")
        }((n = t,
        t = Vn.fromTag("div"),
        n = n,
        t.dom.textContent = n,
        Xr(t)), e), e = Kr(e);
        return Qn(e, [])
    }
    function gd(o) {
        return function(t, e) {
            return n = o,
            r = ol(t).getOrDie("Required text input for Text Handler"),
            rr(function(t) {
                var e = 0 < r.text.length ? pd(r.text, n) : tr();
                je(t, {
                    response: e,
                    bundle: Jn({})
                })
            });
            var n, r
        }
    }
    function vd(t, r) {
        function e(t, e) {
            var n = Vn.fromTag("div");
            return Hr(n, t),
            qu(n),
            n = gn(n),
            Fe({
                response: Qn(n, e),
                bundle: r.bundle
            })
        }
        var n = p(nr, r);
        return Me(r.response, n, e, n, e)
    }
    function hd(r, o, i) {
        return function(t, e) {
            var n = el(t).getOrDie("Wrong input type for HTML handler").container
              , t = un(o)
              , e = e.bundle;
            return Ku(e) ? sd(t, n) : (r(n),
            function(t, e, n, r, o) {
                o = cd(t, e, n, r, o);
                return ud(o)
            }(t, n, Gu(e), Xu(e), i))
        }
    }
    function yd(c, s, f) {
        return function(t, e) {
            var n, u = e.bundle;
            return n = u,
            function(t, e) {
                return n.proxyBin.fold(function() {
                    return console.error(t),
                    Fe({
                        response: tr(),
                        bundle: Jn({})
                    })
                }, e)
            }("There was no proxy bin setup. Ensure you have run proxyStep first.", function(t) {
                var n, e = Gu(u), r = Xu(u), o = Ku(u), i = (n = u,
                $t(function(e) {
                    n.backgroundAssets.fold(function() {
                        e([])
                    }, function(t) {
                        t.listen(e)
                    })
                })), a = un(c);
                return o ? function(t, e, n, r) {
                    var o = Ai.Html
                      , e = e.findClipboardTags(gn(n)).getOr([]);
                    R(e, So);
                    e = $t(function(t) {
                        return t([])
                    });
                    return ld(t, n, o, !0, e, r)
                }(a, s, t, f) : ld(a, t, r, e, i, f)
            })
        }
    }
    function bd(t, e) {
        return Fe({
            response: tr(),
            bundle: Jn({})
        })
    }
    function xd(r) {
        return function(t, e) {
            var n = Re(e.bundle, Jn(r));
            return Fe({
                response: e.response,
                bundle: n
            })
        }
    }
    function wd(t, e) {
        return t = el(t).getOrDie("Wrong input type for HTML handler"),
        fd(t.container)
    }
    var Td = fr.exports.boltExport
      , Id = function(t) {
        t = t.cssRules;
        return B(t, function(t) {
            return t.type === window.CSSRule.IMPORT_RULE ? Id(t.styleSheet) : t.type === window.CSSRule.STYLE_RULE ? [function(t) {
                var e = t.selectorText
                  , n = t.style.cssText;
                if (void 0 === n)
                    throw new Error("WARNING: Browser does not support cssText property");
                return {
                    selector: e,
                    style: n,
                    raw: t.style
                }
            }(t)] : []
        })
    }
      , Gn = {
        inlineStyles: function(t, e, n) {
            Yl(t, e, n, !0)
        },
        inlineStylesKeepClasses: function(t, e, n) {
            Yl(t, e, n, !1)
        },
        inlinePrefixedStyles: function(t, e, n) {
            Zl(t, e, n, !0)
        },
        inlinePrefixedStylesKeepClasses: function(t, e, n) {
            Zl(t, e, n, !1)
        },
        inlineSelectorsStyles: function(t, e, n) {
            Ql(t, e, n, !0)
        },
        inlineSelectorsStylesKeepClasses: function(t, e, n) {
            Ql(t, e, n, !1)
        }
    }
      , Sd = {
        inlineStyles: Gn.inlineStyles,
        inlineStylesKeepClasses: Gn.inlineStylesKeepClasses,
        inlinePrefixedStyles: Gn.inlinePrefixedStyles,
        inlinePrefixedStylesKeepClasses: Gn.inlinePrefixedStylesKeepClasses,
        inlineSelectorsStyles: Gn.inlineSelectorsStyles,
        inlineSelectorsStylesKeepClasses: Gn.inlineSelectorsStylesKeepClasses
    }
      , Od = {
        p: "p, li[data-converted-paragraph]"
    }
      , Ad = function(o, t) {
        var e = qr(o, "li[data-converted-paragraph]");
        R(e, function(t) {
            Ne(t, "data-converted-paragraph")
        }),
        t && (t = qr(o, "li"),
        R(t, function(t) {
            var n, e = td(o), r = function(t, e) {
                t = Ee(t, "data-tab-interval").getOr("36pt");
                return e.convertToPx(t)
            }(o, e), r = kd(t, r, e).getOr({});
            Ne(n = t, "data-list-level"),
            Ne(n, "data-text-indent-alt"),
            Ne(n, "data-border-margin"),
            An(n, "margin-left"),
            An(n, "text-indent"),
            ct(On(n), function(t, e) {
                !Mn(e, "border") || "border-image" !== e && "none" !== t.trim() && "initial" !== t.trim() || An(n, e)
            }),
            e.destroy(),
            Tn(t, r)
        }),
        t = qr(o, "ol,ul"),
        R(t, function(e) {
            var t = qr(e, "li");
            Sn(e, "margin-top").isNone() && rt.from(t[0]).each(function(t) {
                wn(e, "margin-top", In(t, "margin-top"))
            }),
            Sn(e, "margin-bottom").isNone() && rt.from(t[t.length - 1]).each(function(t) {
                wn(e, "margin-bottom", In(t, "margin-bottom"))
            })
        })),
        Ne(o, "data-tab-interval")
    }
      , kd = function(i, a, u) {
        function c(t) {
            return Ee(t, "data-list-level").map(function(t) {
                return parseInt(t, 10)
            }).getOr(1)
        }
        return Sn(i, "text-indent").bind(function(o) {
            return Sn(i, "margin-left").map(function(t) {
                var e = Sn(i, "list-style").exists(function(t) {
                    return xe(t, "none")
                })
                  , n = Ee(i, "data-border-margin").getOr("0px")
                  , r = e ? c(i) + 1 : c(i)
                  , e = u.convertToPx(t) + u.convertToPx(n)
                  , t = a * r
                  , n = Ee(i, "data-text-indent-alt").getOr(o)
                  , r = u.convertToPx(n)
                  , n = {}
                  , r = a / 2 * -1 - r;
                0 < r && (n["text-indent"] = r + "px");
                r = e - t - r;
                return n["margin-left"] = 0 < r ? r + "px" : "0px",
                n
            })
        })
    }
      , Cd = Or()
      , Dd = l(Vl("smartpaste-eph-bin"))
      , Ld = Or();
    function Ed(r, u, c, s, o) {
        return function(t, e) {
            var n = tl(t).getOrDie("Must pass through event type").nativeEvent
              , i = o()
              , a = e.response;
            return rr(function(o) {
                var t = r(c);
                t.events.after.bind(function(t) {
                    var e, n, r = t.container;
                    Ld.browser.isSafari() && fu(r, 'img[src^="webkit-fake-url"]').isSome() ? (n = Ld.deviceType.isWebView() ? "webview.imagepaste" : "safari.imagepaste",
                    je(o, {
                        response: Zn(n),
                        bundle: Jn({})
                    })) : (u(r),
                    Xe(r, Dd()),
                    e = r,
                    n = ((n = (t = Ld).browser).isIE() && 11 <= n.version.major ? $u : Vu)(e, t),
                    e = function(t) {
                        t = qr(t, "*[id]");
                        return N(t, function(t) {
                            return Ee(t, "id").exists(function(t) {
                                return Mn(t, "docs-internal-guid-")
                            })
                        })
                    }(r),
                    t = gn(r),
                    t = s.findClipboardTags(t).isSome(),
                    je(o, {
                        response: a,
                        bundle: Jn({
                            isWord: n,
                            isGoogleDocs: e,
                            isInternal: t,
                            proxyBin: r,
                            backgroundAssets: i
                        })
                    }))
                }),
                i.convert(n),
                t.run()
            })
        }
    }
    function _d(t, e) {
        if (0 === t.length)
            throw new Error("Zero length content passed to Hex conversion");
        return t = function(t) {
            for (var e = new Array(t.length / 2), n = 0; n < t.length; n += 2) {
                var r = t.substr(n, 2);
                e[Math.floor(n / 2)] = parseInt(r, 16)
            }
            return e
        }(t),
        t = new Uint8Array(t),
        new Blob([t],{
            type: e
        })
    }
    function Nd(t, e, n) {
        return e.indexOf(t, n)
    }
    function Pd(t, e, n, r, o, i, a) {
        return -1 === t || -1 === e ? rt.none() : rt.some({
            start: t,
            end: e,
            bower: n,
            regex: r,
            idRef: o,
            isEquation: i,
            attrs: a
        })
    }
    function Rd(t, e, n) {
        return t.substring(e, n)
    }
    function Md(t, e) {
        if (-1 === e)
            return e;
        var n = 0
          , r = t.length;
        do {
            var o = t.indexOf("{", e)
              , i = t.indexOf("}", e);
            if (o < i && -1 !== o ? (e = o + 1,
            ++n) : (i < o || o < 0) && -1 !== i && (e = i + 1,
            --n),
            r < e || -1 === i)
                return -1
        } while (0 < n);
        return e
    }
    function Fd(t, e, n, r, o) {
        var i, a = Rd(t, n, r), u = (t = Nd("\\picscalex", i = t, u = n),
        u = Nd("\\bliptag", i, t),
        -1 < t && t < u ? rt.from(i.substring(t, u)) : rt.none());
        return Pd(n, r, a, /[^a-fA-F0-9]([a-fA-F0-9]+)\}$/, "i", o, u)
    }
    function jd(t, e, n, r, o) {
        return t = Rd(t, n, r),
        Pd(n, r, t, /([a-fA-F0-9]{64,})(?:\}.*)/, "s", o, rt.none())
    }
    function Ud(t, e) {
        return tm(t, e)
    }
    function Hd(t) {
        return 0 <= t.indexOf("\\pngblip") ? ku.value("image/png") : 0 <= t.indexOf("\\jpegblip") ? ku.value("image/jpeg") : ku.error("errors.imageimport.unsupported")
    }
    function Wd(t, e) {
        return (e = t.match(e)) && e[1] && e[1].length % 2 == 0 ? ku.value(e[1]) : ku.error("errors.imageimport.invalid")
    }
    function Bd(t) {
        return null !== (t = /\\shplid(\d+)/.exec(t)) ? rt.some(t[1]) : rt.none()
    }
    function zd(t) {
        for (var u = [], e = function() {
            return t.length
        }, n = function(t) {
            var e, r, o, i, a, n = (r = (e = t).bower,
            o = e.regex,
            i = e.isEquation,
            a = e.attrs,
            Bd(r).map(function(t) {
                var n = e.idRef + t;
                return Hd(r).fold(function(t) {
                    return Qd.unsupported(n, t, i, a)
                }, function(e) {
                    return Wd(r, o).fold(function(t) {
                        return Qd.unsupported(n, t, i, a)
                    }, function(t) {
                        return Qd.supported(n, e, _d(t, e), i, a)
                    })
                })
            }));
            return u = u.concat(n.toArray()),
            t.end
        }, r = 0; r < t.length; )
            r = Ud(t, r).fold(e, n);
        return u
    }
    function qd(t) {
        return Qd.cata(t, function(t, e, n) {
            return t
        }, function(t, e, n, r, o) {
            return t
        })
    }
    function $d(t) {
        return Qd.cata(t, function(t, e, n) {
            return n
        }, function(t, e, n, r, o) {
            return r
        })
    }
    function Vd(t) {
        return Qd.cata(t, function(t, e, n) {
            return ku.error(e)
        }, function(t, e, n, r, o) {
            return ku.value(n)
        })
    }
    function Gd(t, e) {
        return t = new RegExp("\\\\pic" + e + "(\\-?\\d+)\\\\").exec(t)[1],
        parseInt(t, 10)
    }
    function Kd(m, t) {
        return t.fold(function() {
            return Wt.resolve(m)
        }, function(d) {
            return St.cata(m, function(s, f, l) {
                return f.toCanvas().then(function(t) {
                    var e, n, r, o, i, a = Vn.fromDom(t), u = Ee(a, "width").map(function(t) {
                        return parseInt(t, 10)
                    }).getOr(1), c = Ee(a, "height").map(function(t) {
                        return parseInt(t, 10)
                    }).getOr(1), e = (n = u,
                    r = c,
                    o = p(Gd, e = d),
                    i = o("wgoal"),
                    t = o("hgoal"),
                    a = i / n,
                    e = t / r,
                    n = o("cropl"),
                    r = o("cropt"),
                    {
                        cropl: n / a,
                        cropt: r / e,
                        cropw: (i - n - o("cropr")) / a,
                        croph: (t - r - o("cropb")) / e
                    });
                    return u === e.cropw && c === e.croph && 0 === e.cropl && 0 === e.cropt ? Wt.resolve(m) : eu(f, e.cropl, e.cropt, e.cropw, e.croph).then(function(e) {
                        return e.toBlob().then(function(t) {
                            URL.revokeObjectURL(l);
                            t = URL.createObjectURL(t);
                            return St.blob(s, e, t)
                        })
                    })
                })
            }, function(t, e, n) {
                return Wt.resolve(m)
            })
        })
    }
    function Xd(t, e, i, a, u) {
        var c = []
          , s = []
          , f = !1;
        return {
            blobs: B(t, function(r, n) {
                var o = Le(r, "data-image-id");
                return Ne(r, "rtf-data-image"),
                Ne(r, "data-image-id"),
                Ne(r, "data-ms-equation"),
                u || Ne(r, "data-image-src"),
                "unsupported" === o ? (f = !0,
                Ce(r, "alt", i("errors.imageimport.unsupported")),
                []) : U(e, function(t, e) {
                    return a(t, e, o, n)
                }).fold(function() {
                    return console.log("WARNING: unable to find data for image ", r.dom),
                    f = !0,
                    Ce(r, "alt", i("errors.imageimport.unsupported")),
                    []
                }, function(n) {
                    return Vd(n).fold(function(t) {
                        return f = !0,
                        console.error("PowerPaste error code: RTF04"),
                        Ce(r, "alt", i(t)),
                        []
                    }, function(t) {
                        var e;
                        return c.push(r),
                        s.push((e = n,
                        Qd.cata(e, function(t, e, n) {
                            return rt.none()
                        }, function(t, e, n, r, o) {
                            return o
                        }))),
                        u && Ne(r, "data-image-src"),
                        [t]
                    })
                })
            }),
            filteredImages: c,
            imageAttrs: s,
            failedImage: f
        }
    }
    function Jd(t, e, r, n, o) {
        var i = j(e, function(e, n) {
            var r = qd(n)
              , o = $d(n);
            return H(e, function(t) {
                return !(o || $d(t)) && qd(t) === r
            }).fold(function() {
                return e.concat([n])
            }, function(t) {
                return Vd(e[t]).isValue() ? e : e.slice(0, t).concat(e.slice(t + 1)).concat([n])
            })
        }, [])
          , a = o.keepSrc || !1
          , o = (e = M(i, function(t) {
            return !$d(t)
        })).pass
          , i = e.fail
          , t = (e = M(t, function(t) {
            return "true" !== Le(t, "data-ms-equation")
        })).pass
          , e = e.fail
          , o = Xd(t, o, n, function(t, e, n, r) {
            return qd(t) === n
        }, a)
          , n = Xd(e, i, n, function(t, e, n, r) {
            return e === r
        }, a)
          , u = o.filteredImages.concat(n.filteredImages)
          , c = o.imageAttrs.concat(n.imageAttrs)
          , a = o.blobs.concat(n.blobs)
          , s = o.failedImage || n.failedImage;
        ve(a).get(function(t) {
            var n;
            n = c,
            ((t = t).length === n.length ? Wt.all(P(t, function(t, e) {
                return Kd(t, n[e])
            })) : Wt.resolve(t)).then(function(t) {
                t = jf(t, u);
                r(t, s)
            })
        })
    }
    function Yd(t) {
        return qr(t, "[rtf-data-image]")
    }
    function Zd(t) {
        var i = t.translations
          , a = Yu({
            insert: Ju(["elements", "correlated"]),
            incomplete: Ju(["elements", "correlated", "message"])
        });
        return {
            events: a.registry,
            processRtf: function(r, o, t, e) {
                var n = em(t)
                  , t = Yd(r);
                Jd(t, n, function(t, e) {
                    var n = gn(r)
                      , t = t.concat(o);
                    e ? (console.error("PowerPaste error code: RTF01"),
                    a.trigger.incomplete(n, t, "errors.imageimport.failed")) : a.trigger.insert(n, t)
                }, i, e)
            }
        }
    }
    var k = Tt([{
        unsupported: ["id", "message", "isEquation", "attrs"]
    }, {
        supported: ["id", "contentType", "blob", "isEquation", "attrs"]
    }])
      , Qd = {
        unsupported: k.unsupported,
        supported: k.supported,
        cata: function(t, e, n) {
            return t.fold(e, n)
        }
    }
      , tm = function(t, e) {
        var n = Nd("{\\pict{", t, e)
          , r = Md(t, n)
          , o = Nd("{\\shp{", t, e)
          , i = Md(t, o)
          , a = Nd("{\\mmathPict{", t, e)
          , u = Md(t, a)
          , a = -1 !== a && (a < n && r < u || a < o && i < u)
          , u = p(jd, t, e, o, i, a)
          , a = p(Fd, t, e, n, r, a);
        return -1 === n && -1 === o ? rt.none() : -1 === n ? u() : -1 === o || o < n && r < i ? a() : n < o && i < r ? u() : n < o ? a() : o < n ? u() : rt.none()
    }
      , em = function(t) {
        t = t.replace(/\r/g, "").replace(/\n/g, "");
        return zd(t)
    };
    function nm(i) {
        function a(e) {
            c.get().each(function(t) {
                je(t, {
                    response: e,
                    bundle: Jn({})
                })
            })
        }
        var u = Zd(i)
          , c = jo(rt.none());
        return u.events.insert.bind(function(t) {
            a(Qn(t.elements, t.correlated))
        }),
        u.events.incomplete.bind(function(t) {
            console.error("PowerPaste error code: RTF02"),
            a(er(t.elements, t.correlated, t.message))
        }),
        function(t, r) {
            function e(o) {
                return rr(function(e) {
                    function t() {
                        je(e, r)
                    }
                    function n(t, n) {
                        c.set(rt.some(e));
                        var r = Vn.fromTag("div");
                        Hr(r, t),
                        o.fold(function() {
                            var t, e = Yd(r);
                            return 0 < e.length ? function(t) {
                                R(t, So);
                                t = gn(r);
                                console.error("PowerPaste error code: RTF03"),
                                a(er(t, n, "errors.imageimport.failed"))
                            }(e) : (t = gn(r),
                            void a(Qn(t, n)))
                        }, function(t) {
                            u.processRtf(r, n, t, i)
                        })
                    }
                    Me(r.response, t, n, t, n)
                })
            }
            t = rl(t).getOrDie("Word input required for rtf data");
            return function(e, n) {
                var t = yt(n);
                if (t.length !== Ss.length)
                    throw new Error("Partial match");
                return V(t, function(t) {
                    return Qa(e.discriminator === t, n[t])
                }).getOrDie("Must find branch for constructor: " + e.discriminator)(e.data)
            }(t.rtf, {
                disabled: function() {
                    return e(rt.none())
                },
                fromClipboard: function(t) {
                    return e(!0 === i.allowLocalImages ? rt.some(t.rtf) : rt.none())
                }
            })
        }
    }
    function rm(o) {
        function i() {
            return Vt(o)
        }
        return St.cata(o.asset, function(t, e, n) {
            return /tiff$/.test(e.getType()) ? (r = e,
            $t(function(e) {
                me(r, "image/png").then(function(t) {
                    ge(t).map(rt.some).get(e)
                }).catch(function(t) {
                    return console.warn(t),
                    e(rt.none()),
                    t
                })
            }).map(function(t) {
                return t.map(function(t) {
                    var e = o.image;
                    return URL.revokeObjectURL(n),
                    Ff(t, e),
                    Mf(t, e)
                }).getOr(o)
            })) : i();
            var r
        }, i)
    }
    function om() {
        return function(t, o) {
            return rr(function(n) {
                function t() {
                    je(n, o)
                }
                function r(t, e) {
                    Gt(t, rm).get(function(t) {
                        je(n, {
                            response: e(t),
                            bundle: o.bundle
                        })
                    })
                }
                Me(o.response, t, function(e, t) {
                    r(t, function(t) {
                        return Qn(e, t)
                    })
                }, t, function(e, t, n) {
                    r(t, function(t) {
                        return console.error("PowerPaste error code:  IMG01"),
                        er(e, t, n)
                    })
                })
            })
        }
    }
    function im(r) {
        return function(n) {
            return function(t, e) {
                return n.block(),
                r(t, e).map(function(t) {
                    return n.unblock(),
                    t
                })
            }
        }
    }
    function am(t, e) {
        return t.isSupported ? e.getWordData() : rt.none()
    }
    function um(t) {
        return t.getNative()
    }
    function cm(t) {
        return t.getImage()
    }
    function sm(t) {
        return t.getHtml()
    }
    function fm(t) {
        return t.getText()
    }
    function lm(t) {
        return t.getOnlyText()
    }
    function dm(t) {
        return t.getGoogleDocsData()
    }
    function mm(t) {
        return t.getVoid()
    }
    function pm(t, e, n, r) {
        return {
            _label: t,
            label: l(t),
            getAvailable: e,
            steps: l(n),
            capture: l(r)
        }
    }
    function gm(t, e, n, r) {
        return {
            _label: t,
            label: l(t),
            getAvailable: e,
            steps: l(n),
            capture: l(r)
        }
    }
    function vm(t, e, n, r) {
        return pm(cl.native, sm, [xm((o = e.intraFlag,
        function(t, e) {
            t = el(t).getOrDie("Wrong input type for HTML handler"),
            t = o.findClipboardTags(gn(t.container));
            t.each(function(t) {
                R(t, So)
            });
            t = t.isSome();
            return Fe({
                response: e.response,
                bundle: Jn({
                    isInternal: t
                })
            })
        }
        )), xm(Nl(t, e)), xm(hd(n, r, e)), xm(vl(e)), xm(om())], !0);
        var o
    }
    function hm(t, e, n) {
        return pm(cl.msoffice, p(am, t), [xm(xd({
            isWord: !0
        })), xm(_l(e, n)), xm((r = t,
        o = n,
        function(t, e) {
            t = rl(t).getOrDie("Wrong input type for Word Import handler"),
            e = $c(e.bundle);
            return od(t, e, r, o)
        }
        )), im(nm(n)), xm(om())], !0);
        var r, o
    }
    function ym(t) {
        return pm(cl.image, cm, [xm(!1 === t.allowLocalImages ? function(t, e) {
            return Ue("errors.local.images.disallowed")
        }
        : function(t, e) {
            t = nl(t).getOrDie("Must have image data for images handler");
            return id(t.images)
        }
        ), xm(om())], !0)
    }
    function bm(t, e, n, r, o) {
        var i, a = Kc(o = void 0 === o ? Is : o, r.baseUrl, r.cacheSuffix), u = ps(void 0 !== r.pasteBinAttrs ? r.pasteBinAttrs : {}), c = void 0 === r.sanitizer ? Tf(r.intraFlag.isMarked) : r.sanitizer, s = [function(t) {
            t = rt.from(t.tabSpaces).getOr(4);
            return pm(cl.plaintext, lm, [xm(gd(t)), xm(vd)], !0)
        }(r), hm(a, e, r), (i = e,
        s = r,
        o = n,
        a = t,
        pm(cl.googledocs, dm, [xm(xd({
            isGoogleDocs: !0
        })), xm(_l(i, s)), xm(wd), xm(hd(o, a, s)), im(Ll()), xm(vl(s)), xm(om())], !0)), vm(e, r, n, t), ym(r)], r = (e = e,
        r = r,
        n = n,
        u = u,
        t = t,
        gm(cl.fallback, um, [xm(Ed(u, n, t, r.intraFlag, Pf)), xm(Nl(e, r)), xm(yd(t, r.intraFlag, r)), xm(vl(r)), xm(om())], !1));
        return Nf(s, r, c)
    }
    var xm = l;
    function wm(t, e) {
        return void 0 === t && (t = Gf),
        Nf([(e = e,
        pm(cl.text, fm, [xm(gd(e = void 0 === e ? 4 : e)), xm(vd)], !0))], gm(cl.discard, mm, [xm(bd)], !0), t)
    }
    function Tm(t) {
        return -1 !== t.indexOf(ep)
    }
    function Im(t, e) {
        return e = new np({},t.schema).parse(e, {
            forced_root_block: !1,
            isRootContent: !0
        }),
        new rp({
            validate: !0
        },t.schema).serialize(e)
    }
    function Sm(t) {
        var n = Tf(Tm)
          , r = {
            sanitizeHtml: p(Im, t),
            sanitizeText: u
        };
        return {
            sanitizeText: n.sanitizeText,
            sanitizeHtml: function(t, e) {
                return (Tm(t) ? r : n).sanitizeHtml(t, e)
            }
        }
    }
    function Om(t) {
        (n = document.createElement("div")).appendChild(t.cloneNode(!0));
        var e = n.innerHTML
          , n = t = null;
        return e
    }
    function Am(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function km(t) {
        "undefined" != typeof console && console.log && console.log(t)
    }
    function Cm(t, e, n) {
        return function(n) {
            for (var t = [], e = 1; e < arguments.length; e++)
                t[e - 1] = arguments[e];
            return tinymce.each(Array.prototype.slice.call(arguments, 1), function(t) {
                for (var e in t)
                    n[e] = t[e]
            }),
            n
        }(function(t, e) {
            if (t && "string" != typeof t)
                return t;
            switch (t) {
            case "clean":
                return ap;
            case "merge":
                return up;
            default:
                return e
            }
        }(t, e), {
            base_64_images: n
        })
    }
    function Dm(t) {
        return t.replace(/-(.)/g, function(t, e) {
            return e.toUpperCase()
        })
    }
    function Lm(o, t, e) {
        var i, n, r, a, u, c, s, f, l, d;
        switch (o.nodeType) {
        case 1:
            t ? i = sp : (i = cp,
            a = dp(o),
            u = {},
            c = o,
            f = function(t, e) {
                u[t] = e
            }
            ,
            null != (s = (s = e) || c.getAttribute("style")) && s.split || (s = c.style.cssText),
            op(s.split(";"), function(t) {
                var e = t.indexOf(":");
                0 < e && ((l = ip(t.substring(0, e))).toUpperCase() === l && (l = l.toLowerCase()),
                l = l.replace(/([A-Z])/g, function(t, e) {
                    return "-" + e.toLowerCase()
                }),
                d = ip(t.substring(e + 1)),
                mp = mp || 0 === l.indexOf("mso-"),
                f(l, d))
            }),
            mp || (d = c.style["mso-list"]) && f("mso-list", d)),
            n = "HTML" !== o.scopeName && o.scopeName && o.tagName && o.tagName.indexOf(":") <= 0 ? (o.scopeName + ":" + o.tagName).toUpperCase() : o.tagName;
            break;
        case 3:
            i = fp,
            r = o.nodeValue;
            break;
        case 8:
            i = lp,
            r = o.nodeValue;
            break;
        default:
            km("WARNING: Unsupported node type encountered: " + o.nodeType)
        }
        function m() {
            return i
        }
        function p(t) {
            i === cp && a.filter(t)
        }
        return {
            getNode: function() {
                return a && a.getAttributes(),
                o
            },
            tag: function() {
                return n
            },
            type: m,
            text: function() {
                return r
            },
            toString: function() {
                return "Type: " + i + ", Tag: " + n + " Text: " + r
            },
            getAttribute: function(t) {
                return a.get(t.toLowerCase())
            },
            filterAttributes: p,
            filterStyles: function(n) {
                var r;
                i === cp && (r = "",
                op(u, function(t, e) {
                    t = n(e, t);
                    null === t ? (o.style.removeProperty ? o.style.removeProperty(Dm(e)) : o.style.removeAttribute(Dm(e)),
                    delete u[e]) : (r += e + ": " + t + "; ",
                    u[e] = t)
                }),
                r = r || null,
                p(function(t, e) {
                    return "style" === t ? r : e
                }),
                o.style.cssText = r)
            },
            getAttributeCount: function() {
                return a.getAttributeCount()
            },
            attributes: function(t) {
                a.each(t)
            },
            getStyle: function(t) {
                return u[t]
            },
            styles: function(n) {
                op(u, function(t, e) {
                    n(e, t)
                })
            },
            getComputedStyle: function() {
                return (t = o).ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle || {};
                var t
            },
            isWhitespace: function() {
                return i === fp && /^[\s\u00A0]*$/.test(r)
            }
        }
    }
    function Em(t, e, n, r) {
        var o = r.createElement(t)
          , i = "";
        return op(e, function(t, e) {
            o.setAttribute(e, t)
        }),
        op(n, function(t, e) {
            i += e + ":" + t + ";",
            o.style[Dm(e)] = t
        }),
        Lm(o, !1, "" !== i ? i : null)
    }
    function _m(t, e) {
        return Lm(e.createElement(t), !0)
    }
    function Nm(n) {
        var r = n.createDocumentFragment()
          , o = function(t) {
            r.appendChild(t)
        };
        return {
            dom: r,
            receive: function(t) {
                function e(t) {
                    t = t.getNode().cloneNode(!1),
                    o(t = t),
                    r = t
                }
                switch (t.type()) {
                case cp:
                    e(t);
                    break;
                case fp:
                    !function(t) {
                        t = n.createTextNode(t.text());
                        o(t)
                    }(t);
                    break;
                case sp:
                    r = r.parentNode;
                    break;
                case lp:
                    break;
                default:
                    throw {
                        message: "Unsupported token type: " + t.type()
                    }
                }
            }
        }
    }
    function Pm(t, n) {
        var r;
        n = n || window.document,
        r = n.createElement("div"),
        n.body.appendChild(r),
        r.style.position = "absolute",
        r.style.left = "-10000px",
        r.innerHTML = t;
        var o = r.firstChild || pp
          , i = []
          , a = !1;
        return {
            hasNext: function() {
                return void 0 !== o
            },
            next: function() {
                var t = o
                  , e = a;
                return !a && o.firstChild ? (i.push(o),
                o = o.firstChild) : a = !a && 1 === o.nodeType || (o.nextSibling ? (o = o.nextSibling,
                !1) : (o = i.pop(),
                !0)),
                t === pp || o || (n.body.removeChild(r),
                o = pp),
                e = e,
                (t = t) === pp ? t : t ? Lm(t, e) : void 0
            }
        }
    }
    function Rm(p, g) {
        return function(e, t, n) {
            function r() {
                g && g(m),
                s = !1,
                u = [],
                c = []
            }
            function o(t) {
                op(t, function(t) {
                    e.receive(t)
                })
            }
            function i(t) {
                s ? c.push(t) : e.receive(t)
            }
            var a, u, c, s = !1, f = function() {
                l(),
                o(c),
                r()
            }, l = function() {
                op(a, function(t) {
                    i(t)
                }),
                d()
            }, d = function() {
                a = []
            }, m = {
                document: n || window.document,
                settings: t || {},
                emit: i,
                receive: function(t) {
                    g && u.push(t),
                    p(m, t),
                    t === pp && f()
                },
                startTransaction: function() {
                    s = !0
                },
                rollback: function() {
                    o(u),
                    r()
                },
                commit: f,
                defer: function(t) {
                    (a = a || []).push(t)
                },
                hasDeferred: function() {
                    return a && 0 < a.length
                },
                emitDeferred: l,
                dropDeferred: d
            };
            return r(),
            m
        }
    }
    function Mm(t) {
        return "A" === t.tag() || "SPAN" === t.tag()
    }
    function Fm(t) {
        return (t = t.getStyle("mso-list")) && "skip" !== t
    }
    function jm(t, e) {
        return t.type() === cp ? 0 === t.getAttributeCount() || e && 1 === t.getAttributeCount() && null !== t.getAttribute("style") && void 0 !== t.getAttribute("style") : t.type() === sp
    }
    function Um(t) {
        if (xp)
            for (var e = void 0, n = yp.length, r = void 0, r = 0; r < n; r++)
                (e = yp[r]) && (e.type() === cp && "SPAN" === e.tag() && jm(e) ? function(t, e) {
                    for (var n, r = 1, o = e + 1; o < t; o++)
                        if ((n = yp[o]) && "SPAN" === n.tag())
                            if (n.type() === cp)
                                r++;
                            else if (n.type() === sp && 0 === --r)
                                return yp[o] = null
                }(n, r) : t.emit(e));
        yp = [],
        xp = !(bp = [])
    }
    function Hm(t, e) {
        yp.push(e),
        bp = bp || [],
        e.type() === cp ? bp.push(e) : e.type() === sp && (bp.pop(),
        0 === bp.length && Um(t))
    }
    function Wm(t) {
        return !jm(t) && !/^OLE_LINK/.test(t.getAttribute("name"))
    }
    function Bm(t, e) {
        return e = {
            tag: t.tag,
            type: t.type,
            variant: e
        },
        t.start && (e.start = t.start),
        t.type || delete e.type,
        e
    }
    function zm(t, e, n) {
        var r, o, i = null;
        return t && (r = t.text,
        o = t.symbolFont),
        r = ip(r),
        (i = Ap[r]) ? i = Bm(i, r) : o ? i = (i = Op[r]) ? Bm(i, r) : {
            tag: "UL",
            variant: r
        } : (op(Sp, function(t) {
            if (t.regex.test(r)) {
                if (e && kp(t.type, e, !0))
                    return (i = t.type).start = parseInt(r, 10),
                    !1;
                (i = i || t.type).start = parseInt(r, 10)
            }
        }),
        i && !i.variant && (o = "(" === r.charAt(0) ? "()" : ")" === r.charAt(r.length - 1) ? ")" : ".",
        i = Bm(i, o))),
        i = i && "OL" === i.tag && n && ("P" !== n.tag() || /^MsoHeading/.test(n.getAttribute("class"))) ? null : i
    }
    function qm(t, e) {
        function n(t) {
            (t = t.style.fontFamily) && (o = "Wingdings" === t || "Symbol" === t)
        }
        var r, o = !1;
        if (t.type() === cp && e.openedTag && "SPAN" === t.tag()) {
            for (n(r = e.openedTag.getNode()),
            1 < r.childNodes.length && "A" === r.firstChild.tagName && "" === r.firstChild.textContent && (r = r.childNodes[1]); r.firstChild && ("SPAN" === r.firstChild.tagName || "A" === r.firstChild.tagName); )
                n(r = r.firstChild);
            if (!(r = r.firstChild) || 3 !== r.nodeType)
                return r && "IMG" === r.tagName;
            if (t = r.value,
            ip(t) || (t = (r = r.parentNode.nextSibling) ? r.value : ""),
            !r || ip(r.parentNode.textContent) != t)
                return;
            if (t = zm({
                text: t,
                symbolFont: o
            }, null, e.originalToken))
                return r.nextSibling && "SPAN" === r.nextSibling.tagName && /^[\u00A0\s]/.test(r.nextSibling.firstChild.value) && ("P" === e.openedTag.tag() || "UL" === t.tag)
        }
    }
    function $m(a, u) {
        function c(t, e) {
            var n = {}
              , r = {};
            d++,
            e && t.type && (n = {
                "list-style-type": t.type
            }),
            t.start && 1 < t.start && (r = {
                start: t.start
            }),
            o.push(t),
            a.emit(Em(t.tag, r, n, u)),
            i = t
        }
        function s() {
            a.emit(_m(o.pop().tag, u)),
            d--,
            i = o[o.length - 1]
        }
        function f(t, e, n) {
            var r, o = {};
            t ? void 0 !== (r = t.getStyle("margin-left")) && (o["margin-left"] = r) : o["list-style-type"] = "none",
            i && !kp(i, e) && (s(),
            n && (a.emit(Em("P", {}, {}, u)),
            a.emit((n = "\xa0",
            Lm(u.createTextNode(n)))),
            a.emit(_m("P", u))),
            c(e, !0)),
            a.emit(Em("LI", {}, o, u)),
            t && "P" !== t.tag() ? (l.push(t.tag()),
            t.filterStyles(function() {
                return null
            }),
            a.emit(t)) : l.push("P")
        }
        var i, o = [], l = [], d = 0, m = function() {
            var t = l ? l.pop() : "P";
            "P" !== t && a.emit(_m(t, u)),
            a.emit(_m("LI", u))
        };
        return {
            openList: c,
            closelist: s,
            closeAllLists: function() {
                for (; 0 < d; )
                    m(),
                    s();
                a.commit()
            },
            closeItem: m,
            openLI: f,
            openItem: function(t, e, n, r) {
                if (n) {
                    for (d = d || 0; t < d; )
                        m(),
                        s();
                    var o, i;
                    if (i = t,
                    n = o = "UL" === (o = n).tag && Dp[i - 1] === o.type ? {
                        tag: "UL"
                    } : o,
                    d === t)
                        m(),
                        f(e, n, r);
                    else
                        for (1 < t && 0 < l.length && "P" !== l[l.length - 1] && (a.emit(_m(l[l.length - 1], u)),
                        l[l.length - 1] = "P"); d < t; )
                            c(n, d === t - 1),
                            f(d === t ? e : void 0, n)
                }
            },
            getCurrentListType: function() {
                return i
            },
            getCurrentLevel: function() {
                return d
            }
        }
    }
    function Vm(t, e) {
        km("Unexpected token in list conversion: " + e.toString()),
        t.rollback()
    }
    function Gm(t, e, n) {
        n.type() === fp && "" === ip(n.text()) ? t.defer(n) : e.skippedPara || n.type() !== cp || "P" !== n.tag() || Fm(n) ? Ep(t, e, n) : (e.openedTag = n,
        t.defer(n),
        e.nextFilter = Lp)
    }
    function Km(t, e, n) {
        n.type() === sp && e.originalToken.tag() === n.tag() && (e.nextFilter = Gm,
        e.styleLevelAdjust = -1),
        t.emit(n)
    }
    function Xm(t) {
        var o, i, e;
        Up.nextFilter = jp,
        Up.itemLevel = 0,
        Up.originalToken = null,
        Up.commentMode = !1,
        Up.openedTag = null,
        Up.symbolFont = !1,
        Up.listType = null,
        Up.indentGuesser = {
            guessIndentLevel: function(t, e, n, r) {
                return r && /^([0-9]+\.)+[0-9]+\.?$/.test(r.text) ? r.text.replace(/([0-9]+|\.$)/g, "").length + 1 : (n = i || parseInt(Cp(n, e.getAttribute("class"))),
                e = function(t, e) {
                    for (var n = 0, r = t.parentNode; null != r && r !== e.parentNode; )
                        n += r.offsetLeft,
                        r = r.offsetParent;
                    return n
                }(t.getNode(), e.getNode()),
                n ? o ? e += o : 0 === e && (e += o = n) : n = 48,
                i = n = Math.min(e, n),
                Math.max(1, Math.floor(e / n)) || 1)
            }
        },
        Up.emitter = $m(t, t.document),
        Up.styles = (e = !1,
        {
            check: function(t) {
                return e && t.type() === fp ? (t.text(),
                !0) : t.type() === cp && "STYLE" === t.tag() ? e = !0 : t.type() === sp && "STYLE" === t.tag() && !(e = !1)
            }
        }),
        Up.spanCount = [],
        Up.skippedPara = !1,
        Up.styleLevelAdjust = 0,
        Up.bulletInfo = void 0
    }
    var Jm, Ym, Zm, Qm, dr = "x-tinymce/html", tp = l(dr), ep = "\x3c!-- " + dr + " --\x3e", np = tinymce.html.DomParser, rp = tinymce.html.Serializer, op = tinymce.each, ip = tinymce.trim, ap = {
        strip_class_attributes: "all",
        retain_style_properties: "none"
    }, up = {
        strip_class_attributes: "none",
        retain_style_properties: "valid"
    }, cp = "startElement", sp = "endElement", fp = "text", lp = "comment", dp = function(o) {
        function e() {
            return i
        }
        var i, a, u, c = 0, s = function() {
            return i = {},
            c = 0,
            op(o.attributes, function(t) {
                var e = t.nodeName
                  , n = t.value;
                !1 === (t = t).specified && ("name" !== t.nodeName || "" === t.value) || null != n && (i[e] = n,
                c++)
            }),
            void 0 === i.style && o.style.cssText && (i.style = o.style.cssText,
            c++),
            s = e,
            i
        }, f = function(n) {
            op(s(), function(t, e) {
                n(e, t)
            })
        };
        return {
            get: function(t) {
                return s()[t]
            },
            each: f,
            filter: function(t) {
                var n, r;
                a || (u = s),
                r = t,
                a = (n = a) && r ? function(t, e) {
                    return r(t, n(t, e))
                }
                : n || r,
                s = function() {
                    return s = u,
                    f(function(t, e) {
                        var n = a(t, e);
                        null === n ? (o.removeAttribute(t),
                        delete i[t],
                        c--) : n !== e && ("class" === t ? o.className = n : o.setAttribute(t, n),
                        i[t] = n)
                    }),
                    s = e,
                    i
                }
            },
            getAttributes: function() {
                return s()
            },
            getAttributeCount: function() {
                return s(),
                c
            }
        }
    }, mp = !1, pp = _m("HTML", window.document), t = function(n) {
        return Rm(function(t, e) {
            e.filterAttributes(Am(n, t)),
            t.emit(e)
        })
    }, n = [function(t) {
        var e = t;
        return 65279 === e.charCodeAt(e.length - 1) ? e.substring(0, e.length - 1) : t
    }
    ], It = tinymce.isIE && 9 <= document.documentMode ? [function(t) {
        return t.replace(/<BR><BR>/g, "<br>")
    }
    , function(t) {
        return t.replace(/<br>/g, " ")
    }
    , function(t) {
        return t.replace(/<br><br>/g, "<BR><BR>")
    }
    , function(t) {
        return /<(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)/.test(t) ? t.replace(/(?:<br>&nbsp;[\s\r\n]+|<br>)*(<\/?(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)[^>]*>)(?:<br>&nbsp;[\s\r\n]+|<br>)*/g, "$1") : t
    }
    ].concat(n) : n, gp = (Jm = It,
    Ym = Array.prototype.slice.call(Jm).reverse(),
    function(t) {
        for (var e = t, n = 0; n < Ym.length; n++)
            e = (0,
            Ym[n])(e);
        return e
    }
    ), vp = /^(mso-.*|tab-stops|tab-interval|language|text-underline|text-effect|text-line-through|font-color|horiz-align|list-image-[0-9]+|separator-image|table-border-color-(dark|light)|vert-align|vnd\..*)$/, Hn = Rm(function(t, e) {
        var r, n = t.settings.get("retain_style_properties");
        e.filterStyles((r = n,
        function(t, e) {
            var n = !1;
            switch (r) {
            case "all":
            case "*":
                n = !0;
                break;
            case "valid":
                n = !vp.test(t);
                break;
            case void 0:
            case "none":
                n = "list-style-type" === t;
                break;
            default:
                n = 0 <= ("," + r + ",").indexOf("," + t + ",")
            }
            return n ? e : null
        }
        )),
        t.emit(e)
    }), sr = Rm(function(t, e) {
        t.seenList || (t.inferring ? "LI" === e.tag() && (e.type() === cp ? t.inferring++ : (t.inferring--,
        t.inferring || (t.needsClosing = !0))) : ("OL" === e.tag() || "UL" === e.tag() ? t.seenList = !0 : "LI" === e.tag() && (t.inferring = 1,
        t.needsClosing || t.emit(Em("UL", {}, {}, t.document))),
        !t.needsClosing || t.inferring || e.isWhitespace() || (t.needsClosing = !1,
        t.emit(_m("UL", t.document))))),
        t.emit(e)
    }), At = t(function(t, e) {
        return "name" === t || "id" === t ? null : e
    }), lr = t(function(t, e) {
        if ("class" === t)
            switch (this.settings.get("strip_class_attributes")) {
            case "mso":
                return 0 === e.indexOf("Mso") ? null : e;
            case "none":
                return e;
            default:
                return null
            }
        return e
    }), hp = function() {
        if (0 < navigator.userAgent.indexOf("Gecko") && navigator.userAgent.indexOf("WebKit") < 0)
            return !1;
        var t = document.createElement("div");
        try {
            t.innerHTML = '<p style="mso-list: Ignore;">&nbsp;</p>'
        } catch (t) {
            return !1
        }
        return "Ignore" === Lm(t.firstChild).getStyle("mso-list")
    }(), yp = [], bp = [], xp = !1, fr = Rm(function(t, e) {
        function n(t) {
            return !(0 <= ",FONT,EM,STRONG,SAMP,ACRONYM,CITE,CODE,DFN,KBD,TT,B,I,U,S,SUB,SUP,INS,DEL,VAR,SPAN,".indexOf("," + t.tag() + ",") && jm(t, !0))
        }
        0 === (yp = yp || []).length ? e.type() !== cp || n(e) ? t.emit(e) : Hm(t, e) : (xp = xp || n(e),
        Hm(t, e))
    }), Gn = t(function(t, e) {
        return "style" === t && "" === e ? null : e
    }), k = t(function(t, e) {
        return "lang" === t ? null : e
    }), dr = Rm(function(t, e) {
        if ("IMG" === e.tag()) {
            if (e.type() === sp && t.skipEnd)
                return void (t.skipEnd = !1);
            if (e.type() === cp) {
                if (/^file:/.test(e.getAttribute("src")))
                    return void (t.skipEnd = !0);
                if (t.settings.get("base_64_images") && /^data:image\/.*;base64/.test(e.getAttribute("src")))
                    return void (t.skipEnd = !0)
            }
        }
        t.emit(e)
    }), n = Rm(function(t, e) {
        "META" !== e.tag() && "LINK" !== e.tag() && t.emit(e)
    }), wp = [], It = Rm(function(t, e) {
        var n;
        e.type() === cp && "A" === e.tag() ? (wp.push(e),
        Wm(e) && t.defer(e)) : e.type() === sp && "A" === e.tag() ? (n = wp.pop(),
        Wm(n) && t.defer(e),
        0 === wp.length && t.emitDeferred()) : t.hasDeferred() ? t.defer(e) : t.emit(e)
    }), Tp = !1, Ip = [Rm(function(t, e) {
        "SCRIPT" === e.tag() ? Tp = e.type() === cp : Tp || (e.filterAttributes(function(t, e) {
            return /^on/.test(t) || "language" === t ? null : e
        }),
        t.emit(e))
    }), At, dr, Hn, k, Gn, lr, It, fr, n, sr], It = Rm(function(t, n) {
        n.filterAttributes(function(t, e) {
            return "align" !== t && ("UL" !== n.tag() && "OL" !== n.tag() || "type" !== t) ? e : null
        }),
        t.emit(n)
    }), fr = t(function(t, e) {
        return /^xmlns(:|$)/.test(t) ? null : e
    }), n = Rm(function(t, e) {
        e.tag && /^([OVWXP]|U[0-9]+|ST[0-9]+):/.test(e.tag()) || t.emit(e)
    }), sr = t(function(t, e) {
        return "href" === t && (0 <= e.indexOf("#_Toc") || 0 <= e.indexOf("#_mso")) ? null : e
    }), t = t(function(t, e) {
        return /^v:/.test(t) ? null : e
    }), Sp = [{
        regex: /^\(?[dc][\.\)]$/,
        type: {
            tag: "OL",
            type: "lower-alpha"
        }
    }, {
        regex: /^\(?[DC][\.\)]$/,
        type: {
            tag: "OL",
            type: "upper-alpha"
        }
    }, {
        regex: /^\(?M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})[\.\)]$/,
        type: {
            tag: "OL",
            type: "upper-roman"
        }
    }, {
        regex: /^\(?m*(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})[\.\)]$/,
        type: {
            tag: "OL",
            type: "lower-roman"
        }
    }, {
        regex: /^\(?[0-9]+[\.\)]$/,
        type: {
            tag: "OL"
        }
    }, {
        regex: /^([0-9]+\.)*[0-9]+\.?$/,
        type: {
            tag: "OL",
            variant: "outline"
        }
    }, {
        regex: /^\(?[a-z]+[\.\)]$/,
        type: {
            tag: "OL",
            type: "lower-alpha"
        }
    }, {
        regex: /^\(?[A-Z]+[\.\)]$/,
        type: {
            tag: "OL",
            type: "upper-alpha"
        }
    }], Op = {
        "\u2022": {
            tag: "UL",
            type: "disc"
        },
        "\xb7": {
            tag: "UL",
            type: "disc"
        },
        "\xa7": {
            tag: "UL",
            type: "square"
        }
    }, Ap = {
        o: {
            tag: "UL",
            type: "circle"
        },
        "-": {
            tag: "UL",
            type: "disc"
        },
        "\u25cf": {
            tag: "UL",
            type: "disc"
        }
    }, kp = function(t, e, n) {
        return t === e || t && e && t.tag === e.tag && t.type === e.type && (n || t.variant === e.variant)
    }, Cp = (Zm = function(t, e) {
        var n, r = /([^{]+){([^}]+)}/g;
        for (r.lastIndex = 0; null !== (n = r.exec(t)); )
            op(n[1].split(","), function(t) {
                var e = t.indexOf(".");
                if (0 <= e && void 0 === ip(t.substring(e + 1)))
                    return (void 0)[2],
                    !1
            }(void 0));
        return !1
    }
    ,
    Qm = {},
    function(t, e) {
        var n = t + "," + e;
        return Qm.hasOwnProperty(n) ? Qm[n] : (e = Zm.call(null, t, e),
        Qm[n] = e)
    }
    ), Dp = ["disc", "circle", "square"], Lp = function(t, e, n) {
        n.type() !== cp || "SPAN" !== n.tag() || 0 !== e.spanCount.length || !hp && qm(n, e) || Fm(n) ? n.type() === sp ? "SPAN" === n.tag() ? (t.defer(n),
        e.spanCount.pop()) : "P" === n.tag() ? (t.defer(n),
        e.skippedPara = !0,
        e.openedTag = null,
        e.nextFilter = Gm) : (e.nextFilter = Ep,
        e.nextFilter(t, e, n)) : n.isWhitespace() ? t.defer(n) : (e.nextFilter = Ep,
        e.nextFilter(t, e, n)) : (t.defer(n),
        e.spanCount.push(n))
    }, Ep = function(t, e, n) {
        function r() {
            e.emitter.closeAllLists(),
            t.emitDeferred(),
            e.openedTag = null,
            t.emit(n),
            e.nextFilter = Ep
        }
        var o;
        n.type() === cp && Fm(n) && "LI" !== n.tag() ? (o = / level([0-9]+)/.exec(n.getStyle("mso-list"))) && o[1] ? (e.itemLevel = parseInt(o[1], 10) + e.styleLevelAdjust,
        e.nextFilter === Ep ? t.emitDeferred() : t.dropDeferred(),
        e.nextFilter = _p,
        t.startTransaction(),
        e.originalToken = n,
        e.commentMode = !1) : r() : !hp && (n.type() === lp && "[if !supportLists]" === n.text() || qm(n, t)) ? (n.type() === cp && "SPAN" === n.tag() && e.spanCount.push(n),
        e.nextFilter = _p,
        t.startTransaction(),
        e.originalToken = e.openedTag,
        e.commentMode = !0,
        e.openedTag = null,
        t.dropDeferred()) : n.type() === sp && Mm(n) ? (t.defer(n),
        e.spanCount.pop()) : n.type() === cp ? Mm(n) ? (t.defer(n),
        e.spanCount.push(n)) : (e.openedTag && (e.emitter.closeAllLists(),
        t.emitDeferred()),
        e.openedTag = n,
        t.defer(n)) : r()
    }, _p = function(t, e, n) {
        var r, o;
        n.type() === cp && "Ignore" === n.getStyle("mso-list") && (e.nextFilter = Np),
        n.type() === cp && "SPAN" === n.tag() ? (e.spanCount.push(n),
        (e.commentMode && "" === n.getAttribute("style") || null === n.getAttribute("style")) && (e.nextFilter = Np)) : "A" === n.tag() ? n.type() === cp ? e.spanCount.push(n) : e.spanCount.pop() : n.type() === fp ? e.commentMode ? (e.nextFilter = Np,
        e.nextFilter(t, e, n)) : (r = e.originalToken,
        o = e.spanCount,
        e.emitter.closeAllLists(),
        t.emit(r),
        op(o, Am(t.emit, t)),
        t.emit(n),
        t.commit(),
        e.originalToken = r,
        e.nextFilter = Km) : !e.commentMode && n.type() === lp || Vm(t, n)
    }, Np = function(t, e, n) {
        n.type() === fp ? n.isWhitespace() || (e.nextFilter = Pp,
        e.bulletInfo = {
            text: n.text(),
            symbolFont: e.symbolFont
        }) : Mm(n) ? n.type() === cp ? e.spanCount.push(n) : e.spanCount.pop() : n.type() === cp && "IMG" === n.tag() ? (e.nextFilter = Pp,
        e.bulletInfo = {
            text: "\u2202",
            symbolFont: !0
        }) : Vm(t, n)
    }, Pp = function(t, e, n) {
        n.type() === cp && Mm(n) ? (e.spanCount.push(n),
        e.nextFilter = Rp) : n.type() === sp && Mm(n) ? (e.spanCount.pop(),
        e.nextFilter = Mp) : n.type() === sp && "IMG" === n.tag() || Vm(t, n)
    }, Rp = function(t, e, n) {
        n.type() === sp && (Mm(n) && e.spanCount.pop(),
        e.nextFilter = Mp)
    }, Mp = function(o, i, a) {
        function t(t) {
            var e, n, r;
            if (i.nextFilter = Fp,
            i.commentMode && (i.itemLevel = i.indentGuesser.guessIndentLevel(a, i.originalToken, i.styles.styles, i.bulletInfo)),
            i.listType = zm(i.bulletInfo, (e = i.emitter.getCurrentListType(),
            n = i.emitter.getCurrentLevel(),
            r = i.itemLevel,
            n === r ? e : null), i.originalToken),
            i.listType) {
                for (i.emitter.openItem(i.itemLevel, i.originalToken, i.listType, i.skippedPara),
                o.emitDeferred(); 0 < i.spanCount.length; )
                    o.emit(i.spanCount.shift());
                t && o.emit(a)
            } else
                km("Unknown list type: " + i.bulletInfo.text + " Symbol font? " + i.bulletInfo.symbolFont),
                o.rollback()
        }
        a.type() === fp || a.type() === cp ? t(!0) : a.type() === lp ? t("[endif]" !== a.text()) : a.type() === sp ? Mm(a) && i.spanCount.pop() : Vm(o, a)
    }, Fp = function(t, e, n) {
        n.type() === sp && n.tag() === e.originalToken.tag() ? (e.nextFilter = Gm,
        e.skippedPara = !1) : t.emit(n)
    }, jp = Ep, Up = {};
    Xm({});
    function Hp(t, e, n) {
        var r = gp(t)
          , o = Zp(r);
        return e.setWordContent(o),
        t = Ip,
        function(t, e, n, r) {
            for (var o = Nm(n), i = Pm(t, n), a = function(t, e, n, r) {
                for (var o = e, i = t.length - 1; 0 <= i; i--)
                    o = t[i](o, n, r);
                return o
            }(r, o, e, n); i.hasNext(); )
                a.receive(i.next());
            return o.dom
        }(r, e, n, t = o ? Yp.concat(Ip) : t)
    }
    function Wp(c, o, i) {
        return {
            showDialog: function(u) {
                var t, e = Y(c), n = Z(c), r = Zp(u) ? e : n, n = function(t) {
                    var e, n, r, o, i, a = Sm(c).sanitizeHtml(u);
                    0 < a.length && (c.fire("PastePreProcess", {
                        content: {
                            content: a
                        },
                        internal: !1
                    }),
                    t = e = t,
                    n = Cm(e, ap, e = !0),
                    r = Cm(t, up, e),
                    o = r,
                    i = Hp(a, {
                        setWordContent: function(t) {
                            o = t ? n : r
                        },
                        get: function(t) {
                            return o[t]
                        }
                    }, c.getDoc()),
                    c.fire("PastePostProcess", {
                        node: i,
                        internal: !1
                    }),
                    c.undoManager.transact(function() {
                        var t = Om(i);
                        c.insertContent(t)
                    }))
                };
                "clean" === (t = r) || "merge" === t ? n(r) : (i ? tg : Qp).openDialog(c, o, n)
            }
        }
    }
    function Bp(t, e) {
        return t.hasEventListeners(e)
    }
    function zp(t, e, n, r, o) {
        var i, a, u, c = e.replace(ep, "");
        return i = c,
        a = n,
        u = r,
        e = o,
        i = Bp(t = c = t, "PastePreProcess") ? (e = {
            internal: a,
            content: i,
            source: u,
            mode: e = e
        },
        t.fire("PastePreProcess", e).content) : i,
        n = n,
        r = r,
        o = o,
        Bp(c, "PastePostProcess") ? function(t, e, n, r, o) {
            e = t.dom.add(t.getBody(), "div", {
                style: "display:none"
            }, e),
            o = {
                internal: n,
                node: e,
                source: r,
                mode: o
            },
            o = t.fire("PastePostProcess", o).node.innerHTML;
            return t.dom.remove(e),
            o
        }(c, i, n, r, o) : i
    }
    function qp(t) {
        return t.plugins.powerpaste
    }
    function $p(r, t, n, o) {
        var i;
        function a(t, e) {
            return e in t && 0 < t[e].length
        }
        function u() {
            var t = tt(r);
            return function(n) {
                return Mn(n.type, "image/") && N(t, function(t) {
                    return t = (e = t).toLowerCase(),
                    (wt(e = {
                        jpg: "jpeg",
                        jpe: "jpeg",
                        jfi: "jpeg",
                        jif: "jpeg",
                        jfif: "jpeg",
                        pjpeg: "jpeg",
                        pjp: "jpeg",
                        svg: "svg+xml"
                    }, t) ? "image/" + e[t] : "image/" + t) === n.type;
                    var e
                })
            }
        }
        function c(t) {
            ve(t).get(function(t) {
                var e = P(t, function(t) {
                    var e = Vn.fromTag("img")
                      , t = St.cata(t, n.getLocalURL, function(t, e, n) {
                        return e
                    });
                    return Ce(e, "src", t),
                    e.dom.outerHTML
                }).join("");
                r.insertContent(zp(r, e, !1, "imagedrop", "auto"), {
                    merge: Q(r)
                }),
                X(r) && n.uploadImages(t)
            })
        }
        r.on("dragstart dragend", function(t) {
            i = "dragstart" === t.type
        }),
        r.on("dragover dragend dragleave", function(t) {
            i || t.preventDefault()
        });
        var s = function(t) {
            t = t["text/plain"];
            return !!t && 0 === t.indexOf("file://")
        };
        r.on("drop", function(t) {
            if (!i) {
                var e = tinymce.dom.RangeUtils;
                e && e.getCaretRangeFromPoint && (n = e.getCaretRangeFromPoint(t.clientX || 0, t.clientY || 0, r.getDoc()),
                f(n) && r.selection.setRng(n));
                e = function(t) {
                    t = t.target.files || t.dataTransfer.files;
                    return F(t, u())
                }(t);
                if (0 < e.length)
                    return c(e),
                    void t.preventDefault();
                var n = function(t) {
                    var e, n = {};
                    if (t && (!t.getData || (e = t.getData("Text")) && 0 < e.length && (n["text/plain"] = e),
                    t.types))
                        for (var r = 0; r < t.types.length; r++) {
                            var o = t.types[r];
                            n[o] = t.getData(o)
                        }
                    return n
                }(t.dataTransfer);
                s(e = n) || !a(e, "text/html") && !a(e, "text/plain") || (Wp(r, Pe, o).showDialog(n["text/html"] || n["text/plain"]),
                t.preventDefault())
            }
        })
    }
    function Vp() {
        function n(t) {
            URL.revokeObjectURL(t.objurl())
        }
        var r = {};
        return {
            add: function(t, e, n) {
                n = {
                    id: l(t),
                    imageresult: l(e),
                    objurl: l(n)
                };
                return r[t] = n
            },
            get: function(t) {
                return mt(r, t)
            },
            remove: function(t) {
                var e = r[t];
                delete r[t],
                void 0 !== e && n(e)
            },
            lookupByData: function(e) {
                return function(t, e) {
                    for (var n = yt(t), r = 0, o = n.length; r < o; r++) {
                        var i = n[r]
                          , a = t[i];
                        if (e(a, i, t))
                            return rt.some(a)
                    }
                    return rt.none()
                }(r, function(t) {
                    return pe(t.imageresult()) === e
                })
            },
            destroy: function() {
                ct(r, n),
                r = {}
            }
        }
    }
    function Gp(t, e) {
        return qr(t, "img[" + ng + '="' + e + '"]')
    }
    function Kp(t) {
        return qr(t, "img:not([" + ng + "])[" + eg.blobId() + "]")
    }
    function Xp() {
        var o = []
          , i = []
          , t = Yu({
            complete: Ju(["response"])
        })
          , a = function() {
            t.trigger.complete(i),
            i = []
        }
          , u = function() {
            return 0 < o.length
        };
        return {
            findById: Gp,
            findAll: Kp,
            register: function(t, e) {
                Ce(t, ng, e),
                o.push(e)
            },
            report: function(t, e, n) {
                var r;
                R(e, function(t) {
                    var e;
                    Ne(t, ng),
                    e = n,
                    t = t,
                    i.push({
                        success: e,
                        element: t.dom
                    })
                }),
                r = t,
                o = F(o, function(t) {
                    return t !== r
                }),
                u() || a()
            },
            inProgress: u,
            isActive: function(t) {
                return _(o, t)
            },
            events: t.registry
        }
    }
    var Jp, Yp = [n, Rm(function(t, e) {
        var n, r, o;
        Up.styles.check(e) || (Up.symbolFont = (n = e,
        r = Up.symbolFont,
        n.type() === cp && ((o = n.getStyle("font-family")) ? r = "Wingdings" === o || "Symbol" === o : /^(P|H[1-6]|DIV)$/.test(n.tag()) && (r = !1)),
        r),
        Up.nextFilter(t, Up, e))
    }, function(t) {
        Xm(t)
    }), sr, t, fr, It], Zp = function(t) {
        return 0 <= t.indexOf("<o:p>") || 0 <= t.indexOf("p.MsoNormal, li.MsoNormal, div.MsoNormal") || 0 <= t.indexOf("MsoListParagraphCxSpFirst") || 0 <= t.indexOf("<w:WordDocument>")
    }, Qp = Object.freeze({
        __proto__: null,
        openDialog: function(t, e, n) {
            var r = e("cement.dialog.paste.clean")
              , o = e("cement.dialog.paste.merge")
              , o = [{
                text: r,
                ariaLabel: r,
                onclick: function() {
                    i.close(),
                    n("clean")
                }
            }, {
                text: o,
                ariaLabel: o,
                onclick: function() {
                    i.close(),
                    n("merge")
                }
            }]
              , o = {
                title: e("cement.dialog.paste.title"),
                spacing: 10,
                padding: 10,
                items: [{
                    type: "container",
                    html: e("cement.dialog.paste.instructions")
                }],
                buttons: o
            }
              , i = t.windowManager.open(o);
            setTimeout(function() {
                i && i.getEl().focus()
            }, 1)
        }
    }), tg = Object.freeze({
        __proto__: null,
        openDialog: function(t, e, n) {
            var r = e("cement.dialog.paste.clean")
              , o = e("cement.dialog.paste.merge")
              , o = {
                title: e("cement.dialog.paste.title"),
                body: {
                    type: "panel",
                    items: [{
                        type: "htmlpanel",
                        name: "instructions",
                        html: e("cement.dialog.paste.instructions")
                    }]
                },
                buttons: [{
                    text: r,
                    type: "custom",
                    name: "clean"
                }, {
                    text: o,
                    type: "custom",
                    name: "merge"
                }],
                onAction: function(t, e) {
                    switch (e.name) {
                    case "clean":
                        t.close(),
                        n("clean");
                        break;
                    case "merge":
                        t.close(),
                        n("merge")
                    }
                }
            };
            t.windowManager.open(o)
        }
    }), fr = Ot("ephox-salmon").resolve, It = fr("upload-image-in-progress"), Ot = "data-" + fr("image-blob"), fr = "data-" + fr("image-upload"), eg = {
        uploadInProgress: l(It),
        blobId: l(Ot),
        trackedImage: l(fr)
    }, ng = eg.trackedImage();
    (fr = Jp = Jp || {}).JSON = "json",
    fr.Blob = "blob",
    fr.Text = "text",
    fr.FormData = "formdata",
    fr.MultipartFormData = "multipart/form-data";
    function rg(n) {
        return $t(function(e) {
            var t = new FileReader;
            t.onload = function(t) {
                t = t.target ? t.target.result : "";
                e(t)
            }
            ,
            t.readAsText(n)
        })
    }
    function og(t) {
        try {
            var e = JSON.parse(t);
            return ku.value(e)
        } catch (t) {
            return ku.error("Response was not JSON.")
        }
    }
    function ig(t) {
        return Vt(t.response)
    }
    function ag(t, e) {
        switch (t) {
        case Jp.JSON:
            return og(e.response).fold(function() {
                return ig(e)
            }, Vt);
        case Jp.Blob:
            return n = e,
            rt.from(n.response).map(rg).getOr(Vt("no response content"));
        case Jp.Text:
        default:
            return ig(e)
        }
        var n
    }
    function ug(t, e) {
        function n() {
            return dl(e.response)
        }
        function r(t) {
            return ml({
                message: t,
                status: e.status,
                responseText: e.responseText
            })
        }
        switch (t) {
        case Jp.JSON:
            return og(e.response).fold(r, dl);
        case Jp.Blob:
        case Jp.Text:
            return n();
        default:
            return r("unknown data type")
        }
    }
    function cg(t) {
        var e = (o = t.body,
        rt.from(o).bind(function(t) {
            switch (t.type) {
            case Jp.JSON:
                return rt.some("application/json");
            case Jp.FormData:
                return rt.some("application/x-www-form-urlencoded; charset=UTF-8");
            case Jp.MultipartFormData:
                return rt.none();
            case Jp.Text:
            default:
                return rt.some("text/plain")
            }
        }))
          , n = !0 === t.credentials ? rt.some(!0) : rt.none()
          , r = function(t) {
            switch (t) {
            case Jp.Blob:
                return "application/octet-stream";
            case Jp.JSON:
                return "application/json, text/javascript";
            case Jp.Text:
                return "text/plain";
            default:
                return ""
            }
        }(t.responseType) + ", */*; q=0.01"
          , o = void 0 !== t.headers ? t.headers : {};
        return {
            contentType: e,
            responseType: function(t) {
                switch (t) {
                case Jp.JSON:
                    return rt.none();
                case Jp.Blob:
                    return rt.some("blob");
                case Jp.Text:
                    return rt.some("text");
                default:
                    return rt.none()
                }
            }(t.responseType),
            credentials: n,
            accept: r,
            headers: o,
            progress: m(t.progress) ? rt.some(t.progress) : rt.none()
        }
    }
    function sg(t) {
        var n = new FormData;
        return ct(t, function(t, e) {
            n.append(e, t)
        }),
        n
    }
    function fg(a) {
        return ll(function(r) {
            var n, o = new XMLHttpRequest;
            o.open(a.method, (n = a.url,
            rt.from(a.query).map(function(t) {
                var e = lt(t, function(t, e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t)
                })
                  , t = xe(n, "?") ? "&" : "?";
                return 0 < e.length ? n + t + e.join("&") : n
            }).getOr(n)), !0);
            var i, t = cg(a);
            i = o,
            (t = t).contentType.each(function(t) {
                return i.setRequestHeader("Content-Type", t)
            }),
            i.setRequestHeader("Accept", t.accept),
            t.credentials.each(function(t) {
                return i.withCredentials = t
            }),
            t.responseType.each(function(t) {
                return i.responseType = t
            }),
            t.progress.each(function(e) {
                return i.upload.addEventListener("progress", function(t) {
                    return e(t.loaded, t.total)
                })
            }),
            ct(t.headers, function(t, e) {
                return i.setRequestHeader(e, t)
            });
            function e() {
                var e, t, n;
                e = a.url,
                t = a.responseType,
                ag(t, n = o).map(function(t) {
                    return {
                        message: 0 === n.status ? "Unknown HTTP error (possible cross-domain request)" : "Could not load url " + e + ": " + n.statusText,
                        status: n.status,
                        responseText: t
                    }
                }).get(function(t) {
                    return r(ku.error(t))
                })
            }
            o.onerror = e,
            o.onload = function() {
                0 === o.status && !Mn(a.url, "file:") || o.status < 100 || 400 <= o.status ? e() : ug(a.responseType, o).get(r)
            }
            ,
            t = a.body,
            rt.from(t).map(function(t) {
                return t.type === Jp.JSON ? JSON.stringify(t.data) : t.type === Jp.FormData || t.type === Jp.MultipartFormData ? sg(t.data) : t.data
            }).fold(function() {
                return o.send()
            }, function(t) {
                o.send(t)
            })
        })
    }
    function lg(t, e, n) {
        return {
            message: l(t),
            status: l(e),
            contents: l(n)
        }
    }
    function dg(t, e) {
        var n = t.name;
        return y(n) && !Fn(n, ".tmp") ? n : function(t, e) {
            if (y(t.type) && Mn(t.type, "image/")) {
                t = t.type.substr("image/".length);
                return _(mg, t) ? e + "." + t : e
            }
            return e
        }(t, e)
    }
    var mg = ["jpg", "png", "gif", "jpeg"];
    function pg(o) {
        function c(t, e) {
            return t = t.split(/\s+/),
            e = 1 === t.length && "" !== t[0] ? t[0] : e,
            function(t, e) {
                t = Dl(t, e);
                return (e = "") !== (t = t).protocol && (e += t.protocol,
                e += ":"),
                "" !== t.authority && (e += "//",
                e += t.authority),
                e += t.path,
                "" !== t.query && (e += "?",
                e += t.query),
                "" !== t.anchor && (e += "#",
                e += t.anchor),
                e
            }(n, e)
        }
        function r(t, e, a) {
            var n, r, u = dg(t, e), t = (n = "image",
            r = t,
            e = u,
            (t = new FormData).append(n, r, e),
            t = t.get("image"),
            {
                type: Jp.Blob,
                data: t
            });
            t = {
                url: o.url,
                body: t,
                responseType: Jp.Text,
                credentials: !0 === o.credentials
            },
            fg(ut(ut({}, t), {
                method: "post"
            })).get(function(t) {
                t.fold(function(t) {
                    a(ku.error(lg(t.message, t.status, t.responseText)))
                }, function(e) {
                    var t, n, r;
                    try {
                        var o = JSON.parse(e);
                        if (!y(o.location))
                            return t = "JSON response did not contain a string location",
                            n = 500,
                            r = e,
                            void a(ku.error(lg(t, n, r)));
                        i = o.location
                    } catch (t) {
                        i = e
                    }
                    var i = c(i, u);
                    a(ku.value({
                        location: i
                    }))
                })
            })
        }
        var t, e, n = (t = o.url,
        t = 0 < (e = t.lastIndexOf("/")) ? t.substr(0, e) : t,
        t = void 0 === o.basePath ? t : o.basePath,
        Fn(t, "/") ? t : t + "/");
        return {
            upload: function(t, e, n) {
                t = t.imageresult();
                me(t).then(function(t) {
                    r(t, e, n)
                })
            }
        }
    }
    function gg(t, e) {
        return {
            image: l(t),
            blobInfo: l(e)
        }
    }
    function vg(t, n, i, r, a, e, u) {
        function c() {
            var t = "Internal error with blob cache";
            console.error(t, a),
            u($g.failure(lg(t, 666, a)))
        }
        t.upload(e, a, function(t) {
            var e, o = n.findById(r, a);
            R(o, (e = eg.uploadInProgress(),
            function(t) {
                Je(t, e)
            }
            )),
            t.fold(function(t) {
                u($g.failure(t))
            }, function(e) {
                var t, n, r;
                t = i,
                n = a,
                r = e,
                R(o, function(t) {
                    Ce(t, "src", r.location),
                    Ne(t, eg.blobId())
                }),
                Vg(t, n).fold(c, function(t) {
                    u($g.success(e, o, t))
                })
            }),
            n.report(a, o, t.isValue())
        })
    }
    function hg(s, e, t) {
        return B(t, function(t) {
            return St.cata(t, function(a, u, c) {
                return fu(e, 'img[src="' + c + '"]').fold(function() {
                    return [ku.error("Image that was just inserted could not be found: " + c)]
                }, function(t) {
                    return [ku.value((e = s,
                    n = a,
                    o = c,
                    i = t,
                    t = pe(r = u),
                    t = e.lookupByData(t).getOrThunk(function() {
                        return e.add(n, r, o)
                    }),
                    Ce(i, eg.blobId(), t.id()),
                    gg(i, t)))];
                    var e, n, r, o, i
                })
            }, l([]))
        })
    }
    function yg(t, o, e) {
        return e = t.findAll(e),
        t.inProgress() ? [] : P(e, function(t) {
            return e = o,
            r = Le(n = t, eg.blobId()),
            e.get(r).fold(function() {
                return ku.error(r)
            }, function(t) {
                return ku.value(gg(n, t))
            });
            var e, n, r
        })
    }
    function bg(t) {
        Je(t, eg.uploadInProgress())
    }
    function xg(c) {
        function s(t, e) {
            return l(4 === (n = I(tinymce)).major && n.minor < 6 ? t : t + "." + (e = (t = e).toLowerCase(),
            wt(t = {
                "image/jpeg": "jpg",
                "image/jpg": "jpg",
                "image/gif": "gif",
                "image/png": "png"
            }, e) ? t[e] : "dat"));
            var n
        }
        return {
            importImages: function(t) {
                t = B(t, function(t) {
                    return St.cata(t, function(t, e, n) {
                        var r, o, i, a, u = pe(e);
                        return [(r = t,
                        o = e,
                        i = u,
                        a = n,
                        $t(function(e) {
                            Pn(o).then(function(t) {
                                c.editorUpload.blobCache.add({
                                    id: l(r),
                                    name: l(r),
                                    filename: s(r, t.type),
                                    blob: l(t),
                                    base64: l(i.split(",")[1]),
                                    blobUri: l(a),
                                    uri: l(null)
                                }),
                                e(t)
                            })
                        }))]
                    }, l([]))
                });
                return Dt(t)
            },
            uploadImages: function() {
                c.uploadImages()
            },
            prepareImages: h,
            getLocalURL: function(t, e, n) {
                return pe(e)
            }
        }
    }
    function wg(e, t, n) {
        function r() {
            return Pe("error.code.images.not.found") + t + Pe("error.full.stop")
        }
        function o() {
            return Pe("error.imageupload") + t + Pe("error.full.stop")
        }
        function i(t) {
            t = t.status(),
            n.showDialog(e, (0 === t || 400 <= t || t < 500 ? r : o)())
        }
        return {
            instance: function() {
                return Qe(i)
            }
        }
    }
    function Tg(r, t) {
        function a() {
            return Vn.fromDom(r.getBody())
        }
        function u(e, t, n) {
            R(t, function(t) {
                Ce(t, "data-mce-src", e.location)
            }),
            function(t, e, n) {
                for (var r = 0; r < t.undoManager.data.length; r++)
                    t.undoManager.data[r].content = t.undoManager.data[r].content.split(e.objurl()).join(n.location)
            }(r, n, e)
        }
        var c = Vp()
          , s = Xp()
          , o = wg(r, t.url, Gg)
          , f = qg(t);
        function i(r, o) {
            var t, e, n, i;
            t = s,
            e = r.blobInfo().id(),
            n = r.image(),
            i = t.isActive(e),
            t.register(n, e),
            Xe(n, eg.uploadInProgress()),
            (i ? rt.none() : rt.some(e)).each(function(t) {
                var e, n;
                e = t,
                t = r.blobInfo(),
                n = o,
                vg(f, s, c, a(), e, t, function(t) {
                    t.fold(n, u)
                })
            })
        }
        return s.events.complete.bind(function(t) {
            !function(t) {
                for (var e = 0; e < t.undoManager.data.length; e++) {
                    var n = t.undoManager.data[e].content
                      , r = Vn.fromTag("div");
                    Hr(r, Kr(n));
                    n = qr(r, "." + eg.uploadInProgress());
                    R(n, bg),
                    t.undoManager.data[e].content = r.dom.innerHTML
                }
            }(r)
        }),
        {
            importImages: function() {
                return Vt([])
            },
            uploadImages: function(t) {
                var e, n, r;
                e = o.instance(),
                n = yg(s, c, a()),
                R(n, function(t) {
                    t.fold(function(t) {
                        s.report(t, [], !1)
                    }, function(t) {
                        i(t, e)
                    })
                }),
                t = t,
                r = o.instance(),
                t = hg(c, a(), t),
                R(t, function(t) {
                    t.fold(function(t) {
                        console.error(t)
                    }, function(t) {
                        i(t, r)
                    })
                })
            },
            prepareImages: h,
            getLocalURL: function(t, e, n) {
                return n
            }
        }
    }
    function Ig(t) {
        if (y(K(t))) {
            var e = {
                url: K(t),
                basePath: t.getParam("images_upload_base_path"),
                credentials: t.getParam("images_upload_credentials", !1)
            };
            return Tg(t, e)
        }
        var o;
        return t = xg(o = t),
        {
            importImages: function() {
                return Vt([])
            },
            uploadImages: h,
            prepareImages: function(t) {
                R(t, function(t) {
                    St.cata(t, function(t, e, n) {
                        var r = pe(e);
                        R(o.dom.select('img[src="' + n + '"]'), function(t) {
                            o.dom.setAttrib(t, "src", r)
                        })
                    }, h)
                })
            },
            getLocalURL: t.getLocalURL
        }
    }
    function Sg(e, r, t, n) {
        var o, i = e.selection, a = e.dom, u = e.getBody(), c = t.isText();
        if (t.reset(),
        n.clipboardData && n.clipboardData.getData("text/html")) {
            n.preventDefault();
            var t = n.clipboardData.getData("text/html")
              , s = t.match(/<html[\s\S]+<\/html>/i)
              , s = null === s ? t : s[0];
            return r(s)
        }
        if (!a.get("_mcePaste")) {
            if (s = a.add(u, "div", {
                id: "_mcePaste",
                class: "mcePaste"
            }, '\ufeff<br _mce_bogus="1">'),
            u = u !== e.getDoc().body ? a.getPos(e.selection.getStart(), u).y : u.scrollTop,
            a.setStyles(s, {
                position: "absolute",
                left: -1e4,
                top: u,
                width: 1,
                height: 1,
                overflow: "hidden"
            }),
            tinymce.isIE)
                return (f = a.doc.body.createTextRange()).moveToElementText(s),
                f.execCommand("Paste"),
                a.remove(s),
                "\ufeff" === s.innerHTML ? (e.execCommand("mcePasteWord"),
                void n.preventDefault()) : (r(c ? s.innerText : s.innerHTML),
                tinymce.dom.Event.cancel(n));
            var f, l = function(t) {
                t.preventDefault()
            };
            a.bind(e.getDoc(), "mousedown", l),
            a.bind(e.getDoc(), "keydown", l),
            tinymce.isGecko && ((f = e.selection.getRng(!0)).startContainer !== f.endContainer || 3 !== f.startContainer.nodeType || 1 === (n = a.select("p,h1,h2,h3,h4,h5,h6,pre", s)).length && a.remove(n.reverse(), !0)),
            o = e.selection.getRng(),
            s = s.firstChild,
            (f = e.getDoc().createRange()).setStart(s, 0),
            f.setEnd(s, 1),
            i.setRng(f),
            window.setTimeout(function() {
                var n = ""
                  , t = a.select("div.mcePaste");
                op(t, function(t) {
                    var e = t.firstChild;
                    e && "DIV" === e.nodeName && e.style.marginTop && e.style.backgroundColor && a.remove(e, 1),
                    op(a.select("div.mcePaste", t), function(t) {
                        a.remove(t, 1)
                    }),
                    op(a.select("span.Apple-style-span", t), function(t) {
                        a.remove(t, 1)
                    }),
                    op(a.select("br[_mce_bogus]", t), function(t) {
                        a.remove(t)
                    }),
                    n += t.innerHTML
                }),
                op(t, function(t) {
                    a.remove(t)
                }),
                o && i.setRng(o),
                r(n),
                a.unbind(e.getDoc(), "mousedown", l),
                a.unbind(e.getDoc(), "keydown", l)
            }, 0)
        }
    }
    function Og(e, t) {
        function n(e) {
            return function(t) {
                e(t)
            }
        }
        var r, o, i, a = this, u = Wp(e, Pe, !1), c = (r = e,
        o = u.showDialog,
        i = t,
        function(t) {
            Sg(r, o, i, t)
        }
        );
        e.on("paste", n(c));
        var s, f, l, t = (s = e,
        f = u.showDialog,
        l = t,
        function(t) {
            (tinymce.isOpera || 0 < navigator.userAgent.indexOf("Firefox/2")) && ((tinymce.isMac ? t.metaKey : t.ctrlKey) && 86 === t.keyCode || t.shiftKey && 45 === t.keyCode) && Sg(s, f, l, t)
        }
        );
        e.on("keydown", n(t)),
        e.addCommand("mceInsertClipboardContent", function(t, e) {
            u.showDialog(e.content || e)
        }),
        J(e) && e.on("PastePreProcess", function(t) {
            J(e).call(a, a, t)
        })
    }
    function Ag() {
        return t = function(t) {
            return t.unbind()
        }
        ,
        n = jo(rt.none()),
        {
            clear: function() {
                e(),
                n.set(rt.none())
            },
            isSet: function() {
                return n.get().isSome()
            },
            set: function(t) {
                e(),
                n.set(rt.some(t))
            }
        };
        function e() {
            return n.get().each(t)
        }
        var t, n
    }
    function kg() {
        var e = jo(rt.none());
        return {
            clear: function() {
                return e.set(rt.none())
            },
            set: function(t) {
                return e.set(rt.some(t))
            },
            isSet: function() {
                return e.get().isSome()
            },
            on: function(t) {
                return e.get().each(t)
            }
        }
    }
    function Cg() {
        function u(t, e, n) {
            function r(n) {
                return function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    o || (o = !0,
                    null !== i && (clearTimeout(i),
                    i = null),
                    n.apply(void 0, t))
                }
            }
            void 0 === n && (n = 1e3);
            var o = !1
              , i = null
              , t = r(t)
              , a = r(e);
            return {
                reject: a,
                resolve: t,
                start: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    o || (i = setTimeout(function() {
                        return a.apply(void 0, t)
                    }, n))
                }
            }
        }
        var n = {}
          , c = {};
        tinymce.Resource = {
            add: function(t, e) {
                c[t] && (c[t](e),
                delete c[t]),
                n[t] = Wt.resolve(e)
            },
            load: function(r, o) {
                var i = 'Script at URL "' + o + '" failed to load'
                  , a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                if (void 0 !== n[r])
                    return n[r];
                var t = new Wt(function(t, e) {
                    var n = u(t, e);
                    c[r] = n.resolve,
                    tinymce.ScriptLoader.loadScripts([o], function() {
                        return n.start(a)
                    }, function() {
                        return n.reject(i)
                    })
                }
                );
                return n[r] = t
            }
        }
    }
    function Dg(t, e, n) {
        var r;
        if (r = t,
        !1 === tinymce.Env.iOS && "function" == typeof (null == r ? void 0 : r.setData))
            try {
                return t.clearData(),
                t.setData("text/html", e),
                t.setData("text/plain", n),
                t.setData(tp(), e),
                1
            } catch (t) {
                return
            }
    }
    function Lg(t, e, n, r) {
        Dg(t.clipboardData, e.html, e.text) ? (t.preventDefault(),
        r()) : n(e.html, r)
    }
    function Eg(i) {
        return function(t, e) {
            var n = i.dom.create("div", {
                contenteditable: "false",
                "data-mce-bogus": "all"
            })
              , r = i.dom.create("div", {
                contenteditable: "true",
                "data-mce-bogus": "all"
            }, t);
            i.dom.setStyles(n, {
                position: "fixed",
                top: "50%",
                left: "-3000px",
                width: "1000px",
                overflow: "hidden"
            }),
            n.appendChild(r),
            i.dom.add(i.getBody(), n);
            var o = i.selection.getRng();
            r.focus();
            t = i.dom.createRng();
            t.selectNodeContents(r),
            i.selection.setRng(t),
            setTimeout(function() {
                var t;
                i.selection.setRng(o),
                null !== (t = n.parentNode) && void 0 !== t && t.removeChild(n),
                e()
            }, 0)
        }
    }
    function _g(t) {
        var e = t.selection.getContent({
            contextual: !0
        }).replace(/ contenteditable="([^"]+)"/g, ' data-mce-contenteditable="$1"');
        return {
            html: ep + e,
            text: t.selection.getContent({
                format: "text"
            })
        }
    }
    function Ng(t) {
        return !t.selection.isCollapsed() || null !== (t = t).dom.getParent(t.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", t.getBody())
    }
    function Pg(t) {
        var n, e;
        t.on("cut", (n = t,
        function(t) {
            Ng(n) && Lg(t, _g(n), Eg(n), function() {
                var t, e = Or().browser;
                e.isChrome() || e.isFirefox() ? (t = n.selection.getRng(),
                tinymce.util.Delay.setEditorTimeout(n, function() {
                    n.selection.setRng(t),
                    n.execCommand("Delete")
                }, 0)) : n.execCommand("Delete")
            })
        }
        )),
        t.on("copy", (e = t,
        function(t) {
            Ng(e) && Lg(t, _g(e), Eg(e), h)
        }
        ))
    }
    function Rg(t) {
        return /^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)
    }
    function Mg(n) {
        var t = /^<a href="([^"]+)">([^<]+)<\/a>$/.exec(n);
        return rt.from(t).bind(function(t) {
            var e = {
                url: t[1],
                html: n
            };
            return Qa(t[1] === t[2], e)
        })
    }
    function Fg(t, e, n) {
        return "extra"in t.undoManager ? (t.undoManager.extra(function() {
            Xg(t, e)
        }, n),
        rt.some(!0)) : rt.none()
    }
    function jg(r, t) {
        return Mg(t).bind(function(t) {
            var e, n;
            return !1 === r.selection.isCollapsed() && Rg(t.url) ? Fg(e = r, (n = t).html, function() {
                e.execCommand("mceInsertLink", !1, n.url)
            }) : rt.none()
        })
    }
    function Ug(a, t) {
        return Mg(t).bind(function(t) {
            return r = t.url,
            o = tt(a),
            i = r.toLowerCase(),
            Rg(i) && N(o, function(t) {
                return Fn(i, "." + t.toLowerCase())
            }) ? Fg(e = a, (n = t).html, function() {
                e.insertContent('<img src="' + n.url + '">')
            }) : rt.none();
            var e, n, r, o, i
        })
    }
    function Hg(u) {
        return {
            createDialog: function() {
                function e() {
                    t.trigger.close()
                }
                var r, o, n = "", i = kg(), a = (r = jo([{
                    text: "Close",
                    name: "close",
                    type: "custom",
                    primary: !0
                }]),
                o = jo({}),
                {
                    setButtons: function(t) {
                        var n = {}
                          , t = P(t, function(t) {
                            var e = t.text;
                            return n[e.toLowerCase()] = t.click,
                            {
                                text: e,
                                name: e.toLowerCase(),
                                type: "custom"
                            }
                        });
                        o.set(n),
                        r.set(t)
                    },
                    getButtons: r.get,
                    getAction: function(t) {
                        var e = o.get();
                        return wt(e, t) ? rt.some(e[t]) : rt.none()
                    }
                }), t = Yu({
                    close: Ju([])
                });
                return {
                    events: t.registry,
                    setTitle: function(t) {
                        return n = t
                    },
                    setContent: function(t) {
                        return i.set(t)
                    },
                    setButtons: function(t) {
                        a.setButtons(t)
                    },
                    show: function() {
                        i.on(function(t) {
                            t = Om(t.dom),
                            t = {
                                title: n,
                                body: {
                                    type: "panel",
                                    items: [{
                                        type: "htmlpanel",
                                        html: t
                                    }]
                                },
                                initialData: {},
                                buttons: a.getButtons(),
                                onCancel: e,
                                onAction: function(t, e) {
                                    a.getAction(e.name).each(g),
                                    t.close()
                                }
                            };
                            u.windowManager.open(t)
                        })
                    },
                    hide: h,
                    destroy: function() {
                        i.clear()
                    },
                    reflow: h
                }
            }
        }
    }
    function Wg(i, a, t, e, u, s) {
        function c(r) {
            return function(e, n) {
                return e.undoManager.transact(function() {
                    var t;
                    Xg(e, n),
                    t = e.getBody(),
                    R(P(t.getElementsByTagName("*"), Vn.fromDom), function(e) {
                        _e(e, "data-mce-style") && !_e(e, "style") && Ee(e, "data-mce-style").each(function(t) {
                            return Ce(e, "style", t)
                        })
                    }),
                    u.prepareImages(r)
                }),
                rt.some(!0)
            }
        }
        function f(t, e, n) {
            var r, o, i = t.getParam("smart_paste", !0, "boolean") ? [jg, Ug] : [];
            r = t,
            o = e,
            n = i.concat([c(n)]),
            V(n, function(t) {
                return t(r, o)
            })
        }
        function l() {
            m.on(function(t) {
                return i.selection.moveToBookmark(t)
            }),
            m.clear()
        }
        var d = Ag()
          , m = kg()
          , p = (e = e ? e.jsUrl : t,
        t = "/js",
        e.replace(/\/$/, "") + "/" + t.replace(/^\//, ""))
          , g = Sm(i)
          , v = i.getParam("paste_tab_spaces", 4, "number");
        i.on("init", function() {
            var c, t = {
                baseUrl: p,
                cacheSuffix: i.getParam("cache_suffix"),
                officeStyles: Y(i),
                htmlStyles: Z(i),
                gdocsStyles: G(i, "powerpaste_googledocs_import", "prompt"),
                translations: Pe,
                allowLocalImages: i.getParam("powerpaste_allow_local_images", !0, "boolean"),
                pasteBinAttrs: {
                    "data-mce-bogus": "all"
                },
                intraFlag: {
                    isMarked: Tm,
                    findClipboardTags: function(t) {
                        t = F(t, function(t) {
                            return Oe(t) && xe(ta(t), tp())
                        });
                        return t.length ? rt.some(t) : rt.none()
                    }
                },
                keepSrc: i.getParam("powerpaste_keep_unsupported_src", !1, "boolean"),
                cleanFilteredInlineElements: function(t) {
                    t = t.getParam("powerpaste_clean_filtered_inline_elements");
                    return y(t) ? P(t.split(","), function(t) {
                        return t.trim()
                    }) : []
                }(i),
                indentUseMargin: i.getParam("indent_use_margin", !1),
                sanitizer: g,
                tabSpaces: v
            }, e = s ? Hg(i) : (c = i,
            {
                createDialog: function() {
                    function t() {
                        n.trigger.close()
                    }
                    function e() {
                        r.off("close", t),
                        r.close("close")
                    }
                    var r, o = "", i = [], a = [], u = kg(), n = Yu({
                        close: Ju([])
                    });
                    return {
                        events: n.registry,
                        setTitle: function(t) {
                            o = t
                        },
                        setContent: function(t) {
                            var e = Om(t.dom);
                            i = [{
                                type: "container",
                                html: e
                            }],
                            u.set(t)
                        },
                        setButtons: function(t) {
                            var e = [];
                            t.forEach(function(t) {
                                e.push({
                                    text: t.text,
                                    ariaLabel: t.text,
                                    onclick: t.click
                                })
                            }),
                            a = e
                        },
                        show: function() {
                            0 === a.length && (a = [{
                                text: "Close",
                                onclick: function() {
                                    r.close()
                                }
                            }]),
                            r = c.windowManager.open({
                                title: o,
                                spacing: 10,
                                padding: 10,
                                minWidth: 300,
                                minHeight: 100,
                                layout: "flex",
                                items: i,
                                buttons: a
                            });
                            var n = Vn.fromDom(r.getEl());
                            u.on(function(t) {
                                var e = fu(n, "." + Le(t, "class")).getOrDie("We must find this element or we cannot continue");
                                Rr(e, t),
                                So(e)
                            }),
                            r.on("close", t)
                        },
                        hide: function() {
                            e()
                        },
                        destroy: function() {
                            e()
                        },
                        reflow: h
                    }
                }
            }), n = Vn.fromDom(i.getBody()), r = bm(n, e.createDialog, h, t, Kg), o = wm(g, v);
            R([r, o], function(t) {
                t.events.cancel.bind(function() {
                    l()
                }),
                t.events.error.bind(function(t) {
                    l(),
                    i.notificationManager ? i.notificationManager.open({
                        text: Pe(t.message),
                        type: "error"
                    }) : (s ? Jg : Gg).showDialog(i, Pe(t.message))
                }),
                t.events.insert.bind(function(t) {
                    var e = P(t.elements, function(t) {
                        return Om(t.dom)
                    }).join("").replace(/ data-mce-contenteditable="([^"]+)"/g, ' contenteditable="$1"');
                    i.focus(),
                    u.importImages(t.assets).get(function() {
                        l(),
                        f(i, zp(i, e, t.isInternal, t.source, t.mode), t.assets),
                        X(i) && u.uploadImages(t.assets)
                    })
                }),
                S(tinymce, "5.7.0") || t.events.block.bind(function(t) {
                    i.setProgressState(t.state)
                })
            }),
            i.addCommand("mceInsertClipboardContent", function(t, e) {
                void 0 !== e.content ? r.pasteCustom(function(t, e) {
                    void 0 === e && (e = Gf);
                    return {
                        getWordData: function() {
                            return rt.some(Yf({
                                html: e.sanitizeHtml(t),
                                rtf: Os()
                            }))
                        },
                        getGoogleDocsData: rt.none,
                        getImage: rt.none,
                        getHtml: rt.none,
                        getText: rt.none,
                        getNative: b("There is no native event"),
                        getOnlyText: rt.none,
                        getVoid: b("There is no paste event")
                    }
                }(e.content, g)) : void 0 !== e.text && o.pasteCustom(function(t, e) {
                    void 0 === e && (e = Gf);
                    return {
                        getWordData: rt.none,
                        getGoogleDocsData: rt.none,
                        getImage: rt.none,
                        getHtml: rt.none,
                        getText: function() {
                            return rt.some(Zf({
                                text: e.sanitizeText(t)
                            }))
                        },
                        getNative: b("There is no native event"),
                        getOnlyText: rt.none,
                        getVoid: b("There is no paste event")
                    }
                }(e.text, g))
            });
            n = gc(n, "paste", function(t) {
                m.isSet() || m.set(i.selection.getBookmark(1)),
                (a.isText() ? o : r).paste(t.raw),
                a.reset()
            });
            d.set(n),
            Pg(i)
        }),
        i.on("remove", function() {
            d.clear()
        })
    }
    function Bg(n, r) {
        var o = jo(n.getParam("paste_as_text", !1, "boolean"))
          , i = jo(!1);
        n.on("keydown", function(t) {
            var e;
            e = t,
            tinymce.util.VK.metaKeyPressed(e) && 86 === e.keyCode && e.shiftKey && (i.set(!0),
            tinymce.Env.ie && tinymce.Env.ie < 10 && (t.preventDefault(),
            n.fire("paste", {})))
        });
        var a = function() {
            var t = !o.get();
            o.set(t),
            t = t,
            n.fire("PastePlainTextToggle", {
                state: t
            }),
            n.focus()
        };
        return {
            buttonToggle: function(t) {
                var e = !o.get();
                r ? t.setActive(e) : this.active(e),
                a()
            },
            toggle: a,
            reset: function() {
                i.set(!1)
            },
            isText: function() {
                return i.get() || o.get()
            }
        }
    }
    var zg, qg = pg, $g = Tt([{
        failure: ["error"]
    }, {
        success: ["result", "images", "blob"]
    }]), Vg = function(e, n) {
        return e.get(n).fold(function() {
            return ku.error("Internal error with blob cache")
        }, function(t) {
            return e.remove(n),
            ku.value(t)
        })
    }, Gg = Object.freeze({
        __proto__: null,
        showDialog: function(t, e) {
            var n = t.windowManager.open({
                title: "Error",
                spacing: 10,
                padding: 10,
                items: [{
                    type: "container",
                    html: e
                }],
                buttons: [{
                    text: "Ok",
                    onclick: function() {
                        n.close()
                    }
                }]
            })
        }
    }), Kg = Object.freeze({
        __proto__: null,
        loadScript: function(t, e) {
            return tinymce.Resource || Cg(),
            tinymce.Resource.load(t, e)
        }
    }), Xg = function(t, e) {
        return t.insertContent(e, {
            merge: Q(t),
            paste: !0
        }),
        rt.some(!0)
    }, Jg = Object.freeze({
        __proto__: null,
        showDialog: function(t, e) {
            t.windowManager.open({
                title: "Error",
                body: {
                    type: "panel",
                    items: [{
                        type: "htmlpanel",
                        html: e
                    }]
                },
                initialData: {},
                buttons: [{
                    text: "OK",
                    type: "cancel",
                    name: "ok",
                    primary: !0
                }]
            })
        }
    });
    tinymce.PluginManager.requireLangPack("powerpaste", "ar,bg_BG,ca,cs,da,de,el,es,eu,fa,fi,fr_FR,he_IL,hr,hu_HU,id,it,ja,kk,ko_KR,nb_NO,nl,pl,pt_BR,pt_PT,ro,ru,sk,sl_SI,sv_SE,th_TH,tr,uk,zh_CN,zh_TW"),
    tinymce.PluginManager.add("powerpaste", (zg = void 0,
    S(tinymce, "4.0.28") ? (console.error('The "powerpaste" plugin requires at least 4.0.28 version of TinyMCE.'),
    h) : function(n, r) {
        function t() {
            var t, e = (void 0 !== (e = n).uploadImages ? xg : Ig)(e);
            Wg(n, c, r, zg, e, u),
            n.getParam("powerpaste_block_drop", !1, "boolean") ? (t = n).on("init", function() {
                et(t, t.getBody()),
                t.inline || et(t, t.getDoc())
            }) : $p(n, 0, e, u)
        }
        function e(e) {
            function t(t) {
                e.setActive(t.state)
            }
            return e.setActive(c.isText()),
            n.on("PastePlainTextToggle", t),
            function() {
                return n.off("PastePlainTextToggle", t)
            }
        }
        var o, i, a, u = !S(tinymce, "5.0.0"), c = Bg(n, u), s = function() {
            var e = this;
            e.active(c.isText()),
            n.on("PastePlainTextToggle", function(t) {
                e.active(t.state)
            })
        };
        tinymce.Env.ie && tinymce.Env.ie < 10 ? Og(n, c) : t(),
        i = J(o = n),
        a = o.getParam("paste_postprocess"),
        i && o.on("PastePreProcess", function(t) {
            return i.call(o, qp(o), t)
        }),
        a && o.on("PastePostProcess", function(t) {
            return a.call(o, qp(o), t)
        }),
        u ? (n.ui.registry.addToggleButton("pastetext", {
            icon: "paste-text",
            tooltip: "Paste as text",
            onAction: c.buttonToggle,
            onSetup: e
        }),
        n.ui.registry.addToggleMenuItem("pastetext", {
            icon: "paste-text",
            text: "Paste as text",
            onAction: c.buttonToggle,
            onSetup: e
        })) : (n.addButton("pastetext", {
            icon: "pastetext",
            tooltip: "Paste as text",
            onclick: c.buttonToggle,
            onPostRender: s
        }),
        n.addMenuItem("pastetext", {
            text: "Paste as text",
            selectable: !0,
            onclick: c.buttonToggle,
            onPostRender: s
        })),
        s = c,
        n.addCommand("mceTogglePlainTextPaste", s.toggle)
    }
    ))
}();
