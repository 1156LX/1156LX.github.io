isplay:block;overflow:hidden;border-radius:3px;(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        0: function (t, e, n) {
            t.exports = n("zUnb")
        },
        "4Z/T": function (t, e, n) {
            var r;
            !
                function () {
                    "use strict";
                    var o = {
                        not_string: /[^s]/,
                        not_bool: /[^t]/,
                        not_type: /[^T]/,
                        not_primitive: /[^v]/,
                        number: /[diefg]/,
                        numeric_arg: /[bcdiefguxX]/,
                        json: /[j]/,
                        not_json: /[^j]/,
                        text: /^[^\x25]+/,
                        modulo: /^\x25{2}/,
                        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                        key: /^([a-z_][a-z_\d]*)/i,
                        key_access: /^\.([a-z_][a-z_\d]*)/i,
                        index_access: /^\[(\d+)\]/,
                        sign: /^[\+\-]/
                    };

                    function i(t) {
                        return function (t, e) {
                            var n, r, a, s, l, u, c, f, p, h = 1,
                                d = t.length,
                                g = "";
                            for (r = 0; r < d; r++) if ("string" == typeof t[r]) g += t[r];
                            else if (Array.isArray(t[r])) {
                                if ((s = t[r])[2]) for (n = e[h], a = 0; a < s[2].length; a++) {
                                    if (!n.hasOwnProperty(s[2][a])) throw new Error(i('[sprintf] property "%s" does not exist', s[2][a]));
                                    n = n[s[2][a]]
                                } else n = s[1] ? e[s[1]] : e[h++];
                                if (o.not_type.test(s[8]) && o.not_primitive.test(s[8]) && n instanceof Function && (n = n()), o.numeric_arg.test(s[8]) && "number" != typeof n && isNaN(n)) throw new TypeError(i("[sprintf] expecting number but found %T", n));
                                switch (o.number.test(s[8]) && (f = n >= 0), s[8]) {
                                    case "b":
                                        n = parseInt(n, 10).toString(2);
                                        break;
                                    case "c":
                                        n = String.fromCharCode(parseInt(n, 10));
                                        break;
                                    case "d":
                                    case "i":
                                        n = parseInt(n, 10);
                                        break;
                                    case "j":
                                        n = JSON.stringify(n, null, s[6] ? parseInt(s[6]) : 0);
                                        break;
                                    case "e":
                                        n = s[7] ? parseFloat(n).toExponential(s[7]) : parseFloat(n).toExponential();
                                        break;
                                    case "f":
                                        n = s[7] ? parseFloat(n).toFixed(s[7]) : parseFloat(n);
                                        break;
                                    case "g":
                                        n = s[7] ? String(Number(n.toPrecision(s[7]))) : parseFloat(n);
                                        break;
                                    case "o":
                                        n = (parseInt(n, 10) >>> 0).toString(8);
                                        break;
                                    case "s":
                                        n = String(n), n = s[7] ? n.substring(0, s[7]) : n;
                                        break;
                                    case "t":
                                        n = String( !! n), n = s[7] ? n.substring(0, s[7]) : n;
                                        break;
                                    case "T":
                                        n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase(), n = s[7] ? n.substring(0, s[7]) : n;
                                        break;
                                    case "u":
                                        n = parseInt(n, 10) >>> 0;
                                        break;
                                    case "v":
                                        n = n.valueOf(), n = s[7] ? n.substring(0, s[7]) : n;
                                        break;
                                    case "x":
                                        n = (parseInt(n, 10) >>> 0).toString(16);
                                        break;
                                    case "X":
                                        n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase()
                                }
                                o.json.test(s[8]) ? g += n : (!o.number.test(s[8]) || f && !s[3] ? p = "" : (p = f ? "+" : "-", n = n.toString().replace(o.sign, "")), u = s[4] ? "0" === s[4] ? "0" : s[4].charAt(1) : " ", c = s[6] - (p + n).length, l = s[6] && c > 0 ? u.repeat(c) : "", g += s[5] ? p + n + l : "0" === u ? p + l + n : l + p + n)
                            }
                            return g
                        }(function (t) {
                            if (s[t]) return s[t];
                            for (var e, n = t, r = [], i = 0; n;) {
                                if (null !== (e = o.text.exec(n))) r.push(e[0]);
                                else if (null !== (e = o.modulo.exec(n))) r.push("%");
                                else {
                                    if (null === (e = o.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                                    if (e[2]) {
                                        i |= 1;
                                        var a = [],
                                            l = e[2],
                                            u = [];
                                        if (null === (u = o.key.exec(l))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                        for (a.push(u[1]);
                                             "" !== (l = l.substring(u[0].length));) if (null !== (u = o.key_access.exec(l))) a.push(u[1]);
                                        else {
                                            if (null === (u = o.index_access.exec(l))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                            a.push(u[1])
                                        }
                                        e[2] = a
                                    } else i |= 2;
                                    if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                    r.push(e)
                                }
                                n = n.substring(e[0].length)
                            }
                            return s[t] = r
                        }(t), arguments)
                    }
                    function a(t, e) {
                        return i.apply(null, [t].concat(e || []))
                    }
                    var s = Object.create(null);
                    e.sprintf = i, e.vsprintf = a, "undefined" != typeof window && (window.sprintf = i, window.vsprintf = a, void 0 === (r = (function () {
                        return {
                            sprintf: i,
                            vsprintf: a
                        }
                    }).call(e, n, e, t)) || (t.exports = r))
                }()
        },
        crnd: function (t, e) {
            function n(t) {
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                })
            }
            n.keys = function () {
                return []
            }, n.resolve = n, t.exports = n, n.id = "crnd"
        },
        zUnb: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = function (t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e
                    } ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function () {
                return (i = Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
            };

            function a(t, e, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                else for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            }
            function s(t, e) {
                return function (n, r) {
                    e(n, r, t)
                }
            }
            function l(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }
            function u(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            }
            function c(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.
                            return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }
            function f() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t
            }
            var p = Array.isArray ||
                function (t) {
                    return t && "number" == typeof t.length
                };

            function h(t) {
                return null != t && "object" == typeof t
            }
            function d(t) {
                return "function" == typeof t
            }
            var g, m = {
                e: {}
            };

            function y() {
                try {
                    return g.apply(this, arguments)
                } catch (t) {
                    return m.e = t, m
                }
            }
            function v(t) {
                return g = t, y
            }
            function _(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
                    return e + 1 + ") " + t.toString()
                }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
            }
            _.prototype = Object.create(Error.prototype);
            var b = _,
                w = function () {
                    function t(t) {
                        this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function () {
                        var t, e = !1;
                        if (!this.closed) {
                            var n = this._parent,
                                r = this._parents,
                                o = this._unsubscribe,
                                i = this._subscriptions;
                            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                            for (var a = -1, s = r ? r.length : 0; n;) n.remove(this), n = ++a < s && r[a] || null;
                            if (d(o) && v(o).call(this) === m && (e = !0, t = t || (m.e instanceof b ? C(m.e.errors) : [m.e])), p(i)) for (a = -1, s = i.length; ++a < s;) {
                                var l = i[a];
                                if (h(l) && v(l.unsubscribe).call(l) === m) {
                                    e = !0, t = t || [];
                                    var u = m.e;
                                    u instanceof b ? t = t.concat(C(u.errors)) : t.push(u)
                                }
                            }
                            if (e) throw new b(t)
                        }
                    }, t.prototype.add = function (e) {
                        if (!e || e === t.EMPTY) return t.EMPTY;
                        if (e === this) return this;
                        var n = e;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if ("function" != typeof n._addParent) {
                                    var r = n;
                                    (n = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
                    }, t.prototype.remove = function (t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.prototype._addParent = function (t) {
                        var e = this._parent,
                            n = this._parents;
                        e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();

            function C(t) {
                return t.reduce(function (t, e) {
                    return t.concat(e instanceof b ? e.errors : e)
                }, [])
            }
            var S = !1,
                x = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        S = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return S
                    }
                };

            function E(t) {
                setTimeout(function () {
                    throw t
                })
            }
            var k = {
                    closed: !0,
                    next: function (t) {},
                    error: function (t) {
                        if (x.useDeprecatedSynchronousErrorHandling) throw t;
                        E(t)
                    },
                    complete: function () {}
                },
                P = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                O = function (t) {
                    function e(n, r, o) {
                        var i = t.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, i._parentSubscription = null, arguments.length) {
                            case 0:
                                i.destination = k;
                                break;
                            case 1:
                                if (!n) {
                                    i.destination = k;
                                    break
                                }
                                if ("object" == typeof n) {
                                    n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new T(i, n));
                                    break
                                }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new T(i, n, r, o)
                        }
                        return i
                    }
                    return o(e, t), e.prototype[P] = function () {
                        return this
                    }, e.create = function (t, n, r) {
                        var o = new e(t, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, e.prototype.next = function (t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function (t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function () {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function () {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function (t) {
                        this.destination.next(t)
                    }, e.prototype._error = function (t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function () {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function () {
                        var t = this._parent,
                            e = this._parents;
                        return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this._parentSubscription = null, this
                    }, e
                }(w),
                T = function (t) {
                    function e(e, n, r, o) {
                        var i, a = t.call(this) || this;
                        a._parentSubscriber = e;
                        var s = a;
                        return d(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== k && (d((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), s.unsubscribe = a.unsubscribe.bind(a))), a._context = s, a._next = i, a._error = r, a._complete = o, a
                    }
                    return o(e, t), e.prototype.next = function (t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            x.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function (t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = x.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : E(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw t;
                                E(t)
                            }
                        }
                    }, e.prototype.complete = function () {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function () {
                                    return t._complete.call(t._context)
                                };
                                x.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function (t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (t) {
                            if (this.unsubscribe(), x.useDeprecatedSynchronousErrorHandling) throw t;
                            E(t)
                        }
                    }, e.prototype.__tryOrSetError = function (t, e, n) {
                        if (!x.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (e) {
                            return x.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (E(e), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function () {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(O),
                M = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function I() {}
            function A() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return N(t)
            }
            function N(t) {
                return t ? 1 === t.length ? t[0] : function (e) {
                    return t.reduce(function (t, e) {
                        return e(t)
                    }, e)
                } : I
            }
            var D = function () {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function (e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function (t, e, n) {
                    var r = this.operator,
                        o = function (t, e, n) {
                            if (t) {
                                if (t instanceof O) return t;
                                if (t[P]) return t[P]()
                            }
                            return t || e || n ? new O(t, e, n) : new O(k)
                        }(t, e, n);
                    if (r ? r.call(o, this.source) : o.add(this.source || x.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), x.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function (t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        x.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
                            for (; t;) {
                                var e = t.destination;
                                if (t.closed || t.isStopped) return !1;
                                t = e && e instanceof O ? e : null
                            }
                            return !0
                        }(t) ? t.error(e) : console.warn(e)
                    }
                }, t.prototype.forEach = function (t, e) {
                    var n = this;
                    return new(e = R(e))(function (e, r) {
                        var o;
                        o = n.subscribe(function (e) {
                            try {
                                t(e)
                            } catch (t) {
                                r(t), o && o.unsubscribe()
                            }
                        }, r, e)
                    })
                }, t.prototype._subscribe = function (t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[M] = function () {
                    return this
                }, t.prototype.pipe = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : N(t)(this)
                }, t.prototype.toPromise = function (t) {
                    var e = this;
                    return new(t = R(t))(function (t, n) {
                        var r;
                        e.subscribe(function (t) {
                            return r = t
                        }, function (t) {
                            return n(t)
                        }, function () {
                            return t(r)
                        })
                    })
                }, t.create = function (e) {
                    return new t(e)
                }, t
            }();

            function R(t) {
                if (t || (t = x.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }
            function j() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }
            j.prototype = Object.create(Error.prototype);
            var F = j,
                L = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return o(e, t), e.prototype.unsubscribe = function () {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(w),
                H = function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return o(e, t), e
                }(O),
                V = function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return o(e, t), e.prototype[P] = function () {
                        return new H(this)
                    }, e.prototype.lift = function (t) {
                        var e = new U(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function (t) {
                        if (this.closed) throw new F;
                        if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
                    }, e.prototype.error = function (t) {
                        if (this.closed) throw new F;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function () {
                        if (this.closed) throw new F;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function () {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function (e) {
                        if (this.closed) throw new F;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function (t) {
                        if (this.closed) throw new F;
                        return this.hasError ? (t.error(this.thrownError), w.EMPTY) : this.isStopped ? (t.complete(), w.EMPTY) : (this.observers.push(t), new L(this, t))
                    }, e.prototype.asObservable = function () {
                        var t = new D;
                        return t.source = this, t
                    }, e.create = function (t, e) {
                        return new U(t, e)
                    }, e
                }(D),
                U = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return o(e, t), e.prototype.next = function (t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function (t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function () {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function (t) {
                        return this.source ? this.source.subscribe(t) : w.EMPTY
                    }, e
                }(V);

            function z(t) {
                return t && "function" == typeof t.schedule
            }
            var B = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                    }, e.prototype._error = function (t) {
                        this.parent.notifyError(t, this), this.unsubscribe()
                    }, e.prototype._complete = function () {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }, e
                }(O),
                q = function (t) {
                    return function (e) {
                        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.closed || e.complete()
                    }
                },
                K = function (t) {
                    return function (e) {
                        return t.then(function (t) {
                            e.closed || (e.next(t), e.complete())
                        }, function (t) {
                            return e.error(t)
                        }).then(null, E), e
                    }
                },
                Q = function () {
                    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
                }(),
                W = function (t) {
                    return function (e) {
                        for (var n = t[Q]();;) {
                            var r = n.next();
                            if (r.done) {
                                e.complete();
                                break
                            }
                            if (e.next(r.value), e.closed) break
                        }
                        return "function" == typeof n.
                            return &&e.add(function () {
                            n.
                                return &&n.
                            return ()
                        }), e
                    }
                },
                $ = function (t) {
                    return function (e) {
                        var n = t[M]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e)
                    }
                },
                G = function (t) {
                    return t && "number" == typeof t.length && "function" != typeof t
                };

            function Z(t) {
                return t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            var Y = function (t) {
                if (t instanceof D) return function (e) {
                    return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
                };
                if (t && "function" == typeof t[M]) return $(t);
                if (G(t)) return q(t);
                if (Z(t)) return K(t);
                if (t && "function" == typeof t[Q]) return W(t);
                var e = h(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
            };

            function J(t, e, n, r, o) {
                if (void 0 === o && (o = new B(t, n, r)), !o.closed) return Y(e)(o)
            }
            var X = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function (t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function (t) {
                    this.destination.complete()
                }, e
            }(O);

            function tt(t, e) {
                return function (n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new et(t, e))
                }
            }
            var et = function () {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new nt(t, this.project, this.thisArg))
                    }, t
                }(),
                nt = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }, e
                }(O);

            function rt(t, e) {
                return new D(e ?
                    function (n) {
                        var r = new w,
                            o = 0;
                        return r.add(e.schedule(function () {
                            o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                        })), r
                    } : q(t))
            }
            function ot(t, e) {
                if (!e) return t instanceof D ? t : new D(Y(t));
                if (null != t) {
                    if (function (t) {
                        return t && "function" == typeof t[M]
                    }(t)) return function (t, e) {
                        return new D(e ?
                            function (n) {
                                var r = new w;
                                return r.add(e.schedule(function () {
                                    var o = t[M]();
                                    r.add(o.subscribe({
                                        next: function (t) {
                                            r.add(e.schedule(function () {
                                                return n.next(t)
                                            }))
                                        },
                                        error: function (t) {
                                            r.add(e.schedule(function () {
                                                return n.error(t)
                                            }))
                                        },
                                        complete: function () {
                                            r.add(e.schedule(function () {
                                                return n.complete()
                                            }))
                                        }
                                    }))
                                })), r
                            } : $(t))
                    }(t, e);
                    if (Z(t)) return function (t, e) {
                        return new D(e ?
                            function (n) {
                                var r = new w;
                                return r.add(e.schedule(function () {
                                    return t.then(function (t) {
                                        r.add(e.schedule(function () {
                                            n.next(t), r.add(e.schedule(function () {
                                                return n.complete()
                                            }))
                                        }))
                                    }, function (t) {
                                        r.add(e.schedule(function () {
                                            return n.error(t)
                                        }))
                                    })
                                })), r
                            } : K(t))
                    }(t, e);
                    if (G(t)) return rt(t, e);
                    if (function (t) {
                        return t && "function" == typeof t[Q]
                    }(t) || "string" == typeof t) return function (t, e) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new D(e ?
                            function (n) {
                                var r, o = new w;
                                return o.add(function () {
                                    r && "function" == typeof r.
                                        return &&r.
                                    return ()
                                }), o.add(e.schedule(function () {
                                    r = t[Q](), o.add(e.schedule(function () {
                                        if (!n.closed) {
                                            var t, e;
                                            try {
                                                var o = r.next();
                                                t = o.value, e = o.done
                                            } catch (t) {
                                                return void n.error(t)
                                            }
                                            e ? n.complete() : (n.next(t), this.schedule())
                                        }
                                    }))
                                })), o
                            } : W(t))
                    }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }
            function it(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ?
                    function (r) {
                        return r.pipe(it(function (n, r) {
                            return ot(t(n, r)).pipe(tt(function (t, o) {
                                return e(n, t, r, o)
                            }))
                        }, n))
                    } : ("number" == typeof e && (n = e), function (e) {
                        return e.lift(new at(t, n))
                    })
            }
            var at = function () {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new st(t, this.project, this.concurrent))
                    }, t
                }(),
                st = function (t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function (t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.active++, this._innerSub(e, t, n)
                    }, e.prototype._innerSub = function (t, e, n) {
                        var r = new B(this, void 0, void 0);
                        this.destination.add(r), J(this, t, e, n, r)
                    }, e.prototype._complete = function () {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function (t, e, n, r, o) {
                        this.destination.next(e)
                    }, e.prototype.notifyComplete = function (t) {
                        var e = this.buffer;
                        this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(X);

            function lt(t) {
                return t
            }
            function ut(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), it(lt, t)
            }
            function ct() {
                return function (t) {
                    return t.lift(new ft(t))
                }
            }
            var ft = function () {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function (t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new pt(t, n),
                            o = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), o
                    }, t
                }(),
                pt = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._unsubscribe = function () {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(O),
                ht = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return o(e, t), e.prototype._subscribe = function (t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function () {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function () {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new w).add(this.source.subscribe(new gt(this.getSubject(), this))), t.closed ? (this._connection = null, t = w.EMPTY) : this._connection = t), t
                    }, e.prototype.refCount = function () {
                        return ct()(this)
                    }, e
                }(D).prototype,
                dt = {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: ht._subscribe
                    },
                    _isComplete: {
                        value: ht._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: ht.getSubject
                    },
                    connect: {
                        value: ht.connect
                    },
                    refCount: {
                        value: ht.refCount
                    }
                },
                gt = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._error = function (e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function () {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function () {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(H);

            function mt() {
                return new V
            }
            function yt(t) {
                return {
                    providedIn: t.providedIn || null,
                    factory: t.factory,
                    value: void 0
                }
            }
            var vt = function () {
                    function t(t, e) {
                        this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== e ? yt({
                            providedIn: e.providedIn || "root",
                            factory: e.factory
                        }) : void 0
                    }
                    return t.prototype.toString = function () {
                        return "InjectionToken " + this._desc
                    }, t
                }(),
                _t = "__parameters__",
                bt = "__prop__metadata__";

            function wt(t) {
                return function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (t) {
                        var r = t.apply(void 0, f(e));
                        for (var o in r) this[o] = r[o]
                    }
                }
            }
            function Ct(t, e, n) {
                var r = wt(e);

                function o() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (this instanceof o) return r.apply(this, e), this;
                    var i = new((t = o).bind.apply(t, f([void 0], e)));
                    return a.annotation = i, a;

                    function a(t, e, n) {
                        for (var r = t.hasOwnProperty(_t) ? t[_t] : Object.defineProperty(t, _t, {
                            value: []
                        })[_t]; r.length <= n;) r.push(null);
                        return (r[n] = r[n] || []).push(i), t
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            function St(t, e, n) {
                var r = wt(e);

                function o() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (this instanceof o) return r.apply(this, e), this;
                    var i = new((t = o).bind.apply(t, f([void 0], e)));
                    return function (t, e) {
                        var n = t.constructor,
                            r = n.hasOwnProperty(bt) ? n[bt] : Object.defineProperty(n, bt, {
                                value: {}
                            })[bt];
                        r[e] = r.hasOwnProperty(e) && r[e] || [], r[e].unshift(i)
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            var xt = new vt("AnalyzeForEntryComponents"),
                Et = Ct("Attribute", function (t) {
                    return {
                        attributeName: t
                    }
                }),
                kt = St("Input", function (t) {
                    return {
                        bindingPropertyName: t
                    }
                }),
                Pt = St("HostBinding", function (t) {
                    return {
                        hostPropertyName: t
                    }
                });
            Function;
            var Ot = "undefined" != typeof window && window,
                Tt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Mt = "undefined" != typeof global && global || Ot || Tt,
                It = Promise.resolve(0),
                At = null;

            function Nt() {
                if (!At) {
                    var t = Mt.Symbol;
                    if (t && t.iterator) At = t.iterator;
                    else for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                        var r = e[n];
                        "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (At = r)
                    }
                }
                return At
            }
            function Dt(t) {
                "undefined" == typeof Zone ? It.then(function () {
                    t && t.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
            }
            function Rt(t, e) {
                return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
            }
            function jt(t) {
                if ("string" == typeof t) return t;
                if (t instanceof Array) return "[" + t.map(jt).join(", ") + "]";
                if (null == t) return "" + t;
                if (t.overriddenName) return "" + t.overriddenName;
                if (t.name) return "" + t.name;
                var e = t.toString();
                if (null == e) return "" + e;
                var n = e.indexOf("\n");
                return -1 === n ? e : e.substring(0, n)
            }
            function Ft(t) {
                return t.__forward_ref__ = Ft, t.toString = function () {
                    return jt(this())
                }, t
            }
            function Lt(t) {
                return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === Ft ? t() : t
            }
            var Ht = Ct("Inject", function (t) {
                    return {
                        token: t
                    }
                }),
                Vt = Ct("Optional"),
                Ut = Ct("Self"),
                zt = Ct("SkipSelf"),
                Bt = "__source",
                qt = new Object,
                Kt = qt,
                Qt = new vt("INJECTOR"),
                Wt = function () {
                    function t() {}
                    return t.prototype.get = function (t, e) {
                        if (void 0 === e && (e = qt), e === qt) throw new Error("NullInjectorError: No provider for " + jt(t) + "!");
                        return e
                    }, t
                }(),
                $t = function () {
                    function t() {}
                    return t.create = function (t, e) {
                        return Array.isArray(t) ? new oe(t, e) : new oe(t.providers, t.parent, t.name || null)
                    }, t.THROW_IF_NOT_FOUND = qt, t.NULL = new Wt, t.ngInjectableDef = yt({
                        providedIn: "any",
                        factory: function () {
                            return ce(Qt)
                        }
                    }), t
                }(),
                Gt = function (t) {
                    return t
                },
                Zt = [],
                Yt = Gt,
                Jt = function () {
                    return Array.prototype.slice.call(arguments)
                },
                Xt = {},
                te = function (t) {
                    for (var e in t) if (t[e] === Xt) return e;
                    throw Error("!prop")
                }({
                    provide: String,
                    useValue: Xt
                }),
                ee = $t.NULL,
                ne = /\n/gm,
                re = "\u0275",
                oe = function () {
                    function t(t, e, n) {
                        void 0 === e && (e = ee), void 0 === n && (n = null), this.parent = e, this.source = n;
                        var r = this._records = new Map;
                        r.set($t, {
                            token: $t,
                            fn: Gt,
                            deps: Zt,
                            value: this,
                            useNew: !1
                        }), r.set(Qt, {
                            token: Qt,
                            fn: Gt,
                            deps: Zt,
                            value: this,
                            useNew: !1
                        }), function t(e, n) {
                            if (n) if ((n = Lt(n)) instanceof Array) for (var r = 0; r < n.length; r++) t(e, n[r]);
                            else {
                                if ("function" == typeof n) throw se("Function/Class not supported", n);
                                if (!n || "object" != typeof n || !n.provide) throw se("Unexpected provider", n);
                                var o = Lt(n.provide),
                                    i = function (t) {
                                        var e = function (t) {
                                                var e = Zt,
                                                    n = t.deps;
                                                if (n && n.length) {
                                                    e = [];
                                                    for (var r = 0; r < n.length; r++) {
                                                        var o = 6;
                                                        if ((l = Lt(n[r])) instanceof Array) for (var i = 0, a = l; i < a.length; i++) {
                                                            var s = a[i];
                                                            s instanceof Vt || s == Vt ? o |= 1 : s instanceof zt || s == zt ? o &= -3 : s instanceof Ut || s == Ut ? o &= -5 : l = s instanceof Ht ? s.token : Lt(s)
                                                        }
                                                        e.push({
                                                            token: l,
                                                            options: o
                                                        })
                                                    }
                                                } else if (t.useExisting) {
                                                    var l;
                                                    e = [{
                                                        token: l = Lt(t.useExisting),
                                                        options: 6
                                                    }]
                                                } else if (!(n || te in t)) throw se("'deps' required", t);
                                                return e
                                            }(t),
                                            n = Gt,
                                            r = Zt,
                                            o = !1,
                                            i = Lt(t.provide);
                                        if (te in t) r = t.useValue;
                                        else if (t.useFactory) n = t.useFactory;
                                        else if (t.useExisting);
                                        else if (t.useClass) o = !0, n = Lt(t.useClass);
                                        else {
                                            if ("function" != typeof i) throw se("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                            o = !0, n = i
                                        }
                                        return {
                                            deps: e,
                                            fn: n,
                                            useNew: o,
                                            value: r
                                        }
                                    }(n);
                                if (!0 === n.multi) {
                                    var a = e.get(o);
                                    if (a) {
                                        if (a.fn !== Jt) throw ie(o)
                                    } else e.set(o, a = {
                                        token: n.provide,
                                        deps: [],
                                        useNew: !1,
                                        fn: Jt,
                                        value: Zt
                                    });
                                    a.deps.push({
                                        token: o = n,
                                        options: 6
                                    })
                                }
                                var s = e.get(o);
                                if (s && s.fn == Jt) throw ie(o);
                                e.set(o, i)
                            }
                        }(r, t)
                    }
                    return t.prototype.get = function (t, e, n) {
                        void 0 === n && (n = 0);
                        var r = this._records.get(t);
                        try {
                            return function t(e, n, r, o, i, a) {
                                try {
                                    return function (e, n, r, o, i, a) {
                                        var s, l;
                                        if (!n || 4 & a) 2 & a || (l = o.get(e, i, 0));
                                        else {
                                            if ((l = n.value) == Yt) throw Error(re + "Circular dependency");
                                            if (l === Zt) {
                                                n.value = Yt;
                                                var u = n.useNew,
                                                    c = n.fn,
                                                    p = n.deps,
                                                    h = Zt;
                                                if (p.length) {
                                                    h = [];
                                                    for (var d = 0; d < p.length; d++) {
                                                        var g = p[d],
                                                            m = g.options,
                                                            y = 2 & m ? r.get(g.token) : void 0;
                                                        h.push(t(g.token, y, r, y || 4 & m ? o : ee, 1 & m ? null : $t.THROW_IF_NOT_FOUND, 0))
                                                    }
                                                }
                                                n.value = l = u ? new((s = c).bind.apply(s, f([void 0], h))) : c.apply(void 0, h)
                                            }
                                        }
                                        return l
                                    }(e, n, r, o, i, a)
                                } catch (t) {
                                    throw t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(e), n && n.value == Yt && (n.value = Zt), t
                                }
                            }(t, r, this._records, this.parent, e, n)
                        } catch (e) {
                            var o = e.ngTempTokenPath;
                            throw t[Bt] && o.unshift(t[Bt]), e.message = ae("\n" + e.message, o, this.source), e.ngTokenPath = o, e.ngTempTokenPath = null, e
                        }
                    }, t.prototype.toString = function () {
                        var t = [];
                        return this._records.forEach(function (e, n) {
                            return t.push(jt(n))
                        }), "StaticInjector[" + t.join(", ") + "]"
                    }, t
                }();

            function ie(t) {
                return se("Cannot mix multi providers and regular providers", t)
            }
            function ae(t, e, n) {
                void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == re ? t.substr(2) : t;
                var r = jt(e);
                if (e instanceof Array) r = e.map(jt).join(" -> ");
                else if ("object" == typeof e) {
                    var o = [];
                    for (var i in e) if (e.hasOwnProperty(i)) {
                        var a = e[i];
                        o.push(i + ":" + ("string" == typeof a ? JSON.stringify(a) : jt(a)))
                    }
                    r = "{" + o.join(", ") + "}"
                }
                return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(ne, "\n  ")
            }
            function se(t, e) {
                return new Error(ae(t, e))
            }
            var le = void 0;

            function ue(t) {
                var e = le;
                return le = t, e
            }
            function ce(t, e) {
                if (void 0 === e && (e = 0), void 0 === le) throw new Error("inject() must be called from an injection context");
                if (null === le) {
                    var n = t.ngInjectableDef;
                    if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
                    if (8 & e) return null;
                    throw new Error("Injector: NOT_FOUND [" + jt(t) + "]")
                }
                return le.get(t, 8 & e ? null : void 0, e)
            }
            function fe(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        for (var o = void 0, i = 0, a = 0; a < r.length; a++) {
                            var s = r[a];
                            s instanceof Vt || "Optional" === s.ngMetadataName ? i |= 8 : s instanceof zt || "SkipSelf" === s.ngMetadataName ? i |= 4 : s instanceof Ut || "Self" === s.ngMetadataName ? i |= 2 : o = s instanceof Ht ? s.token : s
                        }
                        e.push(ce(o, i))
                    } else e.push(ce(r))
                }
                return e
            }
            String;
            var pe = function (t) {
                    return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
                }({}),
                he = new
                function (t) {
                    this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                }("6.1.10"),
                de = "ngDebugContext",
                ge = "ngOriginalError",
                me = "ngErrorLogger";

            function ye(t) {
                return t[de]
            }
            function ve(t) {
                return t[ge]
            }
            function _e(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                t.error.apply(t, f(e))
            }
            var be = function () {
                    function t() {
                        this._console = console
                    }
                    return t.prototype.handleError = function (t) {
                        var e = this._findOriginalError(t),
                            n = this._findContext(t),
                            r = function (t) {
                                return t[me] || _e
                            }(t);
                        r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
                    }, t.prototype._findContext = function (t) {
                        return t ? ye(t) ? ye(t) : this._findContext(ve(t)) : null
                    }, t.prototype._findOriginalError = function (t) {
                        for (var e = ve(t); e && ve(e);) e = ve(e);
                        return e
                    }, t
                }(),
                we = new vt("The presence of this token marks an injector as being the root injector."),
                Ce = {},
                Se = {},
                xe = [],
                Ee = void 0;

            function ke() {
                return void 0 === Ee && (Ee = new Wt), Ee
            }
            var Pe = function () {
                function t(t, e, n) {
                    var r = this;
                    this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this.destroyed = !1, Me([t], function (t) {
                        return r.processInjectorType(t, new Set)
                    }), e && Me(e, function (t) {
                        return r.processProvider(t)
                    }), this.records.set(Qt, Te(void 0, this)), this.isRootInjector = this.records.has(we), this.injectorDefTypes.forEach(function (t) {
                        return r.get(t)
                    })
                }
                return t.prototype.destroy = function () {
                    this.assertNotDestroyed(), this.destroyed = !0;
                    try {
                        this.onDestroy.forEach(function (t) {
                            return t.ngOnDestroy()
                        })
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }, t.prototype.get = function (t, e, n) {
                    void 0 === e && (e = Kt), void 0 === n && (n = 0), this.assertNotDestroyed();
                    var r, o = ue(this);
                    try {
                        if (!(4 & n)) {
                            var i = this.records.get(t);
                            if (void 0 === i) {
                                var a = ("function" == typeof(r = t) || "object" == typeof r && r instanceof vt) && t.ngInjectableDef || void 0;
                                void 0 !== a && this.injectableDefInScope(a) && (i = Oe(t), this.records.set(t, i))
                            }
                            if (void 0 !== i) return this.hydrate(t, i)
                        }
                        return 2 & n && ke(), this.parent.get(t, e)
                    } finally {
                        ue(o)
                    }
                }, t.prototype.assertNotDestroyed = function () {
                    if (this.destroyed) throw new Error("Injector has already been destroyed.")
                }, t.prototype.processInjectorType = function (t, e) {
                    var n = this,
                        r = (t = Lt(t)).ngInjectorDef,
                        o = null == r && t.ngModule || void 0,
                        i = void 0 === o ? t : o,
                        a = void 0 !== o && t.providers || xe;
                    if (void 0 !== o && (r = o.ngInjectorDef), null != r) {
                        if (e.has(i)) throw new Error("Circular dependency: type " + jt(i) + " ends up importing itself.");
                        if (this.injectorDefTypes.add(i), this.records.set(i, Te(r.factory)), null != r.imports) {
                            e.add(i);
                            try {
                                Me(r.imports, function (t) {
                                    return n.processInjectorType(t, e)
                                })
                            } finally {
                                e.delete(i)
                            }
                        }
                        null != r.providers && Me(r.providers, function (t) {
                            return n.processProvider(t)
                        }), Me(a, function (t) {
                            return n.processProvider(t)
                        })
                    }
                }, t.prototype.processProvider = function (t) {
                    var e = Ie(t = Lt(t)) ? t : Lt(t.provide),
                        n = function (t) {
                            var e = Lt(t),
                                n = Ce,
                                r = void 0;
                            if (Ie(t)) return Oe(t);
                            if (e = Lt(t.provide), te in t) n = t.useValue;
                            else if (t.useExisting) r = function () {
                                return ce(t.useExisting)
                            };
                            else if (t.useFactory) r = function () {
                                return t.useFactory.apply(t, f(fe(t.deps || [])))
                            };
                            else {
                                var o = t.useClass || e;
                                if (!t.deps) return Oe(o);
                                r = function () {
                                    return new(o.bind.apply(o, f([void 0], fe(t.deps))))
                                }
                            }
                            return Te(r, n)
                        }(t);
                    if (Ie(t) || !0 !== t.multi) {
                        var r = this.records.get(e);
                        if (r && void 0 !== r.multi) throw new Error("Mixed multi-provider for " + jt(e))
                    } else {
                        var o = this.records.get(e);
                        if (o) {
                            if (void 0 === o.multi) throw new Error("Mixed multi-provider for " + e + ".")
                        } else(o = Te(void 0, Ce, !0)).factory = function () {
                            return fe(o.multi)
                        }, this.records.set(e, o);
                        e = t, o.multi.push(t)
                    }
                    this.records.set(e, n)
                }, t.prototype.hydrate = function (t, e) {
                    if (e.value === Se) throw new Error("Circular dep for " + jt(t));
                    var n;
                    return e.value === Ce && (e.value = Se, e.value = e.factory()), "object" == typeof e.value && e.value && "object" == typeof(n = e.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
                }, t.prototype.injectableDefInScope = function (t) {
                    return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || "root" === t.providedIn && this.isRootInjector : this.injectorDefTypes.has(t.providedIn))
                }, t
            }();

            function Oe(t) {
                var e = t.ngInjectableDef;
                if (void 0 === e) {
                    if (t instanceof vt) throw new Error("Token " + jt(t) + " is missing an ngInjectableDef definition.");
                    return Te(function () {
                        return new t
                    })
                }
                return Te(e.factory)
            }
            function Te(t, e, n) {
                return void 0 === e && (e = Ce), void 0 === n && (n = !1), {
                    factory: t,
                    value: e,
                    multi: n ? [] : void 0
                }
            }
            function Me(t, e) {
                t.forEach(function (t) {
                    return Array.isArray(t) ? Me(t, e) : e(t)
                })
            }
            function Ie(t) {
                return "function" == typeof t
            }
            function Ae(t) {
                return !!t && "function" == typeof t.then
            }
            function Ne(t) {
                return !!t && "function" == typeof t.subscribe
            }
            var De = new vt("Application Initializer"),
                Re = function () {
                    function t(t) {
                        var e = this;
                        this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (t, n) {
                            e.resolve = t, e.reject = n
                        })
                    }
                    return t.prototype.runInitializers = function () {
                        var t = this;
                        if (!this.initialized) {
                            var e = [],
                                n = function () {
                                    t.done = !0, t.resolve()
                                };
                            if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                                var o = this.appInits[r]();
                                Ae(o) && e.push(o)
                            }
                            Promise.all(e).then(function () {
                                n()
                            }).
                            catch (function (e) {
                                t.reject(e)
                            }), 0 === e.length && n(), this.initialized = !0
                        }
                    }, a([s(0, Ht(De)), s(0, Vt())], t)
                }(),
                je = new vt("AppId"),
                Fe = new vt("Platform Initializer"),
                Le = new vt("Platform ID"),
                He = new vt("appBootstrapListener"),
                Ve = function () {
                    function t() {}
                    return t.prototype.log = function (t) {
                        console.log(t)
                    }, t.prototype.warn = function (t) {
                        console.warn(t)
                    }, t
                }();

            function Ue() {
                throw new Error("Runtime compiler is not loaded")
            }
            var ze = function () {
                    function t() {}
                    return t.prototype.compileModuleSync = function (t) {
                        throw Ue()
                    }, t.prototype.compileModuleAsync = function (t) {
                        throw Ue()
                    }, t.prototype.compileModuleAndAllComponentsSync = function (t) {
                        throw Ue()
                    }, t.prototype.compileModuleAndAllComponentsAsync = function (t) {
                        throw Ue()
                    }, t.prototype.clearCache = function () {}, t.prototype.clearCacheFor = function (t) {}, t.prototype.getModuleId = function (t) {}, t
                }(),
                Be = function () {},
                qe = function () {},
                Ke = function () {};

            function Qe(t) {
                var e = Error("No component factory found for " + jt(t) + ". Did you add it to @NgModule.entryComponents?");
                return e[Ge] = t, e
            }
            var We, $e, Ge = "ngComponent",
                Ze = function () {
                    function t() {}
                    return t.prototype.resolveComponentFactory = function (t) {
                        throw Qe(t)
                    }, t
                }(),
                Ye = function () {
                    function t() {}
                    return t.NULL = new Ze, t
                }(),
                Je = function () {
                    function t(t, e, n) {
                        this._parent = e, this._ngModule = n, this._factories = new Map;
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return t.prototype.resolveComponentFactory = function (t) {
                        var e = this._factories.get(t);
                        if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw Qe(t);
                        return new Xe(e, this._ngModule)
                    }, t
                }(),
                Xe = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
                    }
                    return o(e, t), e.prototype.create = function (t, e, n, r) {
                        return this.factory.create(t, e, n, r || this.ngModule)
                    }, e
                }(Ke),
                tn = function () {},
                en = function () {},
                nn = function () {
                    var t = Mt.wtf;
                    return !(!t || !(We = t.trace) || ($e = We.events, 0))
                }();

            function rn(t, e) {
                return null
            }
            var on = nn ?
                function (t, e) {
                    return void 0 === e && (e = null), $e.createScope(t, e)
                } : function (t, e) {
                    return rn
                },
                an = nn ?
                    function (t, e) {
                        return We.leaveScope(t, e), e
                    } : function (t, e) {
                        return e
                    },
                sn = function (t) {
                    function e(e) {
                        void 0 === e && (e = !1);
                        var n = t.call(this) || this;
                        return n.__isAsync = e, n
                    }
                    return o(e, t), e.prototype.emit = function (e) {
                        t.prototype.next.call(this, e)
                    }, e.prototype.subscribe = function (e, n, r) {
                        var o, i = function (t) {
                                return null
                            },
                            a = function () {
                                return null
                            };
                        e && "object" == typeof e ? (o = this.__isAsync ?
                            function (t) {
                                setTimeout(function () {
                                    return e.next(t)
                                })
                            } : function (t) {
                                e.next(t)
                            }, e.error && (i = this.__isAsync ?
                            function (t) {
                                setTimeout(function () {
                                    return e.error(t)
                                })
                            } : function (t) {
                                e.error(t)
                            }), e.complete && (a = this.__isAsync ?
                            function () {
                                setTimeout(function () {
                                    return e.complete()
                                })
                            } : function () {
                                e.complete()
                            })) : (o = this.__isAsync ?
                            function (t) {
                                setTimeout(function () {
                                    return e(t)
                                })
                            } : function (t) {
                                e(t)
                            }, n && (i = this.__isAsync ?
                            function (t) {
                                setTimeout(function () {
                                    return n(t)
                                })
                            } : function (t) {
                                n(t)
                            }), r && (a = this.__isAsync ?
                            function () {
                                setTimeout(function () {
                                    return r()
                                })
                            } : function () {
                                r()
                            }));
                        var s = t.prototype.subscribe.call(this, o, i, a);
                        return e instanceof w && e.add(s), s
                    }, e
                }(V),
                ln = function () {
                    function t(t) {
                        var e, n = t.enableLongStackTrace,
                            r = void 0 !== n && n;
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new sn(!1), this.onMicrotaskEmpty = new sn(!1), this.onStable = new sn(!1), this.onError = new sn(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
                            name: "angular",
                            properties: {
                                isAngularZone: !0
                            },
                            onInvokeTask: function (t, n, r, o, i, a) {
                                try {
                                    return pn(e), t.invokeTask(r, o, i, a)
                                } finally {
                                    hn(e)
                                }
                            },
                            onInvoke: function (t, n, r, o, i, a, s) {
                                try {
                                    return pn(e), t.invoke(r, o, i, a, s)
                                } finally {
                                    hn(e)
                                }
                            },
                            onHasTask: function (t, n, r, o) {
                                t.hasTask(r, o), n === r && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, fn(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                            },
                            onHandleError: function (t, n, r, o) {
                                return t.handleError(r, o), e.runOutsideAngular(function () {
                                    return e.onError.emit(o)
                                }), !1
                            }
                        })
                    }
                    return t.isInAngularZone = function () {
                        return !0 === Zone.current.get("isAngularZone")
                    }, t.assertInAngularZone = function () {
                        if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                    }, t.assertNotInAngularZone = function () {
                        if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                    }, t.prototype.run = function (t, e, n) {
                        return this._inner.run(t, e, n)
                    }, t.prototype.runTask = function (t, e, n, r) {
                        var o = this._inner,
                            i = o.scheduleEventTask("NgZoneEvent: " + r, t, cn, un, un);
                        try {
                            return o.runTask(i, e, n)
                        } finally {
                            o.cancelTask(i)
                        }
                    }, t.prototype.runGuarded = function (t, e, n) {
                        return this._inner.runGuarded(t, e, n)
                    }, t.prototype.runOutsideAngular = function (t) {
                        return this._outer.run(t)
                    }, t
                }();

            function un() {}
            var cn = {};

            function fn(t) {
                if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                    t._nesting++, t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--, !t.hasPendingMicrotasks) try {
                        t.runOutsideAngular(function () {
                            return t.onStable.emit(null)
                        })
                    } finally {
                        t.isStable = !0
                    }
                }
            }
            function pn(t) {
                t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
            }
            function hn(t) {
                t._nesting--, fn(t)
            }
            var dn, gn = function () {
                    function t() {
                        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new sn, this.onMicrotaskEmpty = new sn, this.onStable = new sn, this.onError = new sn
                    }
                    return t.prototype.run = function (t) {
                        return t()
                    }, t.prototype.runGuarded = function (t) {
                        return t()
                    }, t.prototype.runOutsideAngular = function (t) {
                        return t()
                    }, t.prototype.runTask = function (t) {
                        return t()
                    }, t
                }(),
                mn = function () {
                    function t(t) {
                        var e = this;
                        this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), t.run(function () {
                            e.taskTrackingZone = Zone.current.get("TaskTrackingZone")
                        })
                    }
                    return t.prototype._watchAngularEvents = function () {
                        var t = this;
                        this._ngZone.onUnstable.subscribe({
                            next: function () {
                                t._didWork = !0, t._isZoneStable = !1
                            }
                        }), this._ngZone.runOutsideAngular(function () {
                            t._ngZone.onStable.subscribe({
                                next: function () {
                                    ln.assertNotInAngularZone(), Dt(function () {
                                        t._isZoneStable = !0, t._runCallbacksIfReady()
                                    })
                                }
                            })
                        })
                    }, t.prototype.increasePendingRequestCount = function () {
                        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                    }, t.prototype.decreasePendingRequestCount = function () {
                        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                        return this._runCallbacksIfReady(), this._pendingCount
                    }, t.prototype.isStable = function () {
                        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                    }, t.prototype._runCallbacksIfReady = function () {
                        var t = this;
                        if (this.isStable()) Dt(function () {
                            for (; 0 !== t._callbacks.length;) {
                                var e = t._callbacks.pop();
                                clearTimeout(e.timeoutId), e.doneCb(t._didWork)
                            }
                            t._didWork = !1
                        });
                        else {
                            var e = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter(function (t) {
                                return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                            }), this._didWork = !0
                        }
                    }, t.prototype.getPendingTasks = function () {
                        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (t) {
                            return {
                                source: t.source,
                                isPeriodic: t.data.isPeriodic,
                                delay: t.data.delay,
                                creationLocation: t.creationLocation,
                                xhr: t.data.target
                            }
                        }) : []
                    }, t.prototype.addCallback = function (t, e, n) {
                        var r = this,
                            o = -1;
                        e && e > 0 && (o = setTimeout(function () {
                            r._callbacks = r._callbacks.filter(function (t) {
                                return t.timeoutId !== o
                            }), t(r._didWork, r.getPendingTasks())
                        }, e)), this._callbacks.push({
                            doneCb: t,
                            timeoutId: o,
                            updateCb: n
                        })
                    }, t.prototype.whenStable = function (t, e, n) {
                        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(t, e, n), this._runCallbacksIfReady()
                    }, t.prototype.getPendingRequestCount = function () {
                        return this._pendingCount
                    }, t.prototype.findProviders = function (t, e, n) {
                        return []
                    }, t
                }(),
                yn = function () {
                    function t() {
                        this._applications = new Map, vn.addToWindow(this)
                    }
                    return t.prototype.registerApplication = function (t, e) {
                        this._applications.set(t, e)
                    }, t.prototype.unregisterApplication = function (t) {
                        this._applications.delete(t)
                    }, t.prototype.unregisterAllApplications = function () {
                        this._applications.clear()
                    }, t.prototype.getTestability = function (t) {
                        return this._applications.get(t) || null
                    }, t.prototype.getAllTestabilities = function () {
                        return Array.from(this._applications.values())
                    }, t.prototype.getAllRootElements = function () {
                        return Array.from(this._applications.keys())
                    }, t.prototype.findTestabilityInTree = function (t, e) {
                        return void 0 === e && (e = !0), vn.findTestabilityInTree(this, t, e)
                    }, a([l("design:paramtypes", [])], t)
                }(),
                vn = new(function () {
                    function t() {}
                    return t.prototype.addToWindow = function (t) {}, t.prototype.findTestabilityInTree = function (t, e, n) {
                        return null
                    }, t
                }()),
                _n = !0,
                bn = !1,
                wn = new vt("AllowMultipleToken");

            function Cn() {
                return bn = !0, _n
            }
            var Sn = function (t, e) {
                this.name = t, this.token = e
            };

            function xn(t, e, n) {
                void 0 === n && (n = []);
                var r = "Platform: " + e,
                    o = new vt(r);
                return function (e) {
                    void 0 === e && (e = []);
                    var i = En();
                    if (!i || i.injector.get(wn, !1)) if (t) t(n.concat(e).concat({
                        provide: o,
                        useValue: !0
                    }));
                    else {
                        var a = n.concat(e).concat({
                            provide: o,
                            useValue: !0
                        });
                        !
                            function (t) {
                                if (dn && !dn.destroyed && !dn.injector.get(wn, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                dn = t.get(kn);
                                var e = t.get(Fe, null);
                                e && e.forEach(function (t) {
                                    return t()
                                })
                            }($t.create({
                                providers: a,
                                name: r
                            }))
                    }
                    return function (t) {
                        var e = En();
                        if (!e) throw new Error("No platform exists!");
                        if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return e
                    }(o)
                }
            }
            function En() {
                return dn && !dn.destroyed ? dn : null
            }
            var kn = function () {
                function t(t) {
                    this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }
                return t.prototype.bootstrapModuleFactory = function (t, e) {
                    var n, r = this,
                        o = "noop" === (n = e ? e.ngZone : void 0) ? new gn : ("zone.js" === n ? void 0 : n) || new ln({
                            enableLongStackTrace: Cn()
                        }),
                        i = [{
                            provide: ln,
                            useValue: o
                        }];
                    return o.run(function () {
                        var e = $t.create({
                                providers: i,
                                parent: r.injector,
                                name: t.moduleType.name
                            }),
                            n = t.create(e),
                            a = n.injector.get(be, null);
                        if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.onDestroy(function () {
                            return Tn(r._modules, n)
                        }), o.runOutsideAngular(function () {
                            return o.onError.subscribe({
                                next: function (t) {
                                    a.handleError(t)
                                }
                            })
                        }), function (t, e, o) {
                            try {
                                var i = ((a = n.injector.get(Re)).runInitializers(), a.donePromise.then(function () {
                                    return r._moduleDoBootstrap(n), n
                                }));
                                return Ae(i) ? i.
                                catch (function (n) {
                                    throw e.runOutsideAngular(function () {
                                        return t.handleError(n)
                                    }), n
                                }) : i
                            } catch (n) {
                                throw e.runOutsideAngular(function () {
                                    return t.handleError(n)
                                }), n
                            }
                            var a
                        }(a, o)
                    })
                }, t.prototype.bootstrapModule = function (t, e) {
                    var n = this;
                    void 0 === e && (e = []);
                    var r = this.injector.get(Be),
                        o = Pn({}, e);
                    return r.createCompiler([o]).compileModuleAsync(t).then(function (t) {
                        return n.bootstrapModuleFactory(t, o)
                    })
                }, t.prototype._moduleDoBootstrap = function (t) {
                    var e = t.injector.get(On);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function (t) {
                        return e.bootstrap(t)
                    });
                    else {
                        if (!t.instance.ngDoBootstrap) throw new Error("The module " + jt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }, t.prototype.onDestroy = function (t) {
                    this._destroyListeners.push(t)
                }, Object.defineProperty(t.prototype, "injector", {
                    get: function () {
                        return this._injector
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.destroy = function () {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(function (t) {
                        return t.destroy()
                    }), this._destroyListeners.forEach(function (t) {
                        return t()
                    }), this._destroyed = !0
                }, Object.defineProperty(t.prototype, "destroyed", {
                    get: function () {
                        return this._destroyed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();

            function Pn(t, e) {
                return Array.isArray(e) ? e.reduce(Pn, t) : i({}, t, e)
            }
            var On = function () {
                function t(t, e, n, r, o, i) {
                    var a = this;
                    this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Cn(), this._zone.onMicrotaskEmpty.subscribe({
                        next: function () {
                            a._zone.run(function () {
                                a.tick()
                            })
                        }
                    });
                    var s = new D(function (t) {
                            a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular(function () {
                                t.next(a._stable), t.complete()
                            })
                        }),
                        l = new D(function (t) {
                            var e;
                            a._zone.runOutsideAngular(function () {
                                e = a._zone.onStable.subscribe(function () {
                                    ln.assertNotInAngularZone(), Dt(function () {
                                        a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0))
                                    })
                                })
                            });
                            var n = a._zone.onUnstable.subscribe(function () {
                                ln.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular(function () {
                                    t.next(!1)
                                }))
                            });
                            return function () {
                                e.unsubscribe(), n.unsubscribe()
                            }
                        });
                    this.isStable = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = Number.POSITIVE_INFINITY,
                            r = null,
                            o = t[t.length - 1];
                        return z(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof D ? t[0] : ut(n)(rt(t, r))
                    }(s, l.pipe(function (t) {
                        return ct()((e = mt, function (t) {
                            var n;
                            n = "function" == typeof e ? e : function () {
                                return e
                            };
                            var r = Object.create(t, dt);
                            return r.source = t, r.subjectFactory = n, r
                        })(t));
                        var e
                    }))
                }
                var e;
                return e = t, t.prototype.bootstrap = function (t, e) {
                    var n, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = t instanceof Ke ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                    var o = n instanceof Xe ? null : this._injector.get(tn),
                        i = n.create($t.NULL, [], e || n.selector, o);
                    i.onDestroy(function () {
                        r._unloadComponent(i)
                    });
                    var a = i.injector.get(mn, null);
                    return a && i.injector.get(yn).registerApplication(i.location.nativeElement, a), this._loadComponent(i), Cn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
                }, t.prototype.tick = function () {
                    var t = this;
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    var n = e._tickScope();
                    try {
                        this._runningTick = !0, this._views.forEach(function (t) {
                            return t.detectChanges()
                        }), this._enforceNoNewChanges && this._views.forEach(function (t) {
                            return t.checkNoChanges()
                        })
                    } catch (e) {
                        this._zone.runOutsideAngular(function () {
                            return t._exceptionHandler.handleError(e)
                        })
                    } finally {
                        this._runningTick = !1, an(n)
                    }
                }, t.prototype.attachView = function (t) {
                    var e = t;
                    this._views.push(e), e.attachToAppRef(this)
                }, t.prototype.detachView = function (t) {
                    var e = t;
                    Tn(this._views, e), e.detachFromAppRef()
                }, t.prototype._loadComponent = function (t) {
                    this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(He, []).concat(this._bootstrapListeners).forEach(function (e) {
                        return e(t)
                    })
                }, t.prototype._unloadComponent = function (t) {
                    this.detachView(t.hostView), Tn(this.components, t)
                }, t.prototype.ngOnDestroy = function () {
                    this._views.slice().forEach(function (t) {
                        return t.destroy()
                    })
                }, Object.defineProperty(t.prototype, "viewCount", {
                    get: function () {
                        return this._views.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t._tickScope = on("ApplicationRef#tick()"), t
            }();

            function Tn(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var Mn = function () {},
                In = function (t) {
                    return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
                }({}),
                An = function () {},
                Nn = function (t) {
                    this.nativeElement = t
                },
                Dn = function () {},
                Rn = function () {
                    function t() {
                        this.dirty = !0, this._results = [], this.changes = new sn, this.length = 0
                    }
                    return t.prototype.map = function (t) {
                        return this._results.map(t)
                    }, t.prototype.filter = function (t) {
                        return this._results.filter(t)
                    }, t.prototype.find = function (t) {
                        return this._results.find(t)
                    }, t.prototype.reduce = function (t, e) {
                        return this._results.reduce(t, e)
                    }, t.prototype.forEach = function (t) {
                        this._results.forEach(t)
                    }, t.prototype.some = function (t) {
                        return this._results.some(t)
                    }, t.prototype.toArray = function () {
                        return this._results.slice()
                    }, t.prototype[Nt()] = function () {
                        return this._results[Nt()]()
                    }, t.prototype.toString = function () {
                        return this._results.toString()
                    }, t.prototype.reset = function (t) {
                        this._results = function t(e) {
                            return e.reduce(function (e, n) {
                                var r = Array.isArray(n) ? t(n) : n;
                                return e.concat(r)
                            }, [])
                        }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                    }, t.prototype.notifyOnChanges = function () {
                        this.changes.emit(this)
                    }, t.prototype.setDirty = function () {
                        this.dirty = !0
                    }, t.prototype.destroy = function () {
                        this.changes.complete(), this.changes.unsubscribe()
                    }, t
                }(),
                jn = function () {},
                Fn = {
                    factoryPathPrefix: "",
                    factoryPathSuffix: ".ngfactory"
                },
                Ln = function () {
                    function t(t, e) {
                        this._compiler = t, this._config = e || Fn
                    }
                    return t.prototype.load = function (t) {
                        return this._compiler instanceof ze ? this.loadFactory(t) : this.loadAndCompile(t)
                    }, t.prototype.loadAndCompile = function (t) {
                        var e = this,
                            r = c(t.split("#"), 2),
                            o = r[0],
                            i = r[1];
                        return void 0 === i && (i = "default"), n("crnd")(o).then(function (t) {
                            return t[i]
                        }).then(function (t) {
                            return Hn(t, o, i)
                        }).then(function (t) {
                            return e._compiler.compileModuleAsync(t)
                        })
                    }, t.prototype.loadFactory = function (t) {
                        var e = c(t.split("#"), 2),
                            r = e[0],
                            o = e[1],
                            i = "NgFactory";
                        return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (t) {
                            return t[o + i]
                        }).then(function (t) {
                            return Hn(t, r, o)
                        })
                    }, a([s(1, Vt())], t)
                }();

            function Hn(t, e, n) {
                if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
                return t
            }
            var Vn = function () {},
                Un = function () {},
                zn = function () {},
                Bn = function () {
                    function t(t, e, n) {
                        this._debugContext = n, this.nativeNode = t, e && e instanceof qn ? e.addChild(this) : this.parent = null, this.listeners = []
                    }
                    return Object.defineProperty(t.prototype, "injector", {
                        get: function () {
                            return this._debugContext.injector
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentInstance", {
                        get: function () {
                            return this._debugContext.component
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "context", {
                        get: function () {
                            return this._debugContext.context
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "references", {
                        get: function () {
                            return this._debugContext.references
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "providerTokens", {
                        get: function () {
                            return this._debugContext.providerTokens
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                qn = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n, r) || this;
                        return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o
                    }
                    return o(e, t), e.prototype.addChild = function (t) {
                        t && (this.childNodes.push(t), t.parent = this)
                    }, e.prototype.removeChild = function (t) {
                        var e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
                    }, e.prototype.insertChildrenAfter = function (t, e) {
                        var n, r = this,
                            o = this.childNodes.indexOf(t); - 1 !== o && ((n = this.childNodes).splice.apply(n, f([o + 1, 0], e)), e.forEach(function (t) {
                            t.parent && t.parent.removeChild(t), t.parent = r
                        }))
                    }, e.prototype.insertBefore = function (t, e) {
                        var n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
                    }, e.prototype.query = function (t) {
                        return this.queryAll(t)[0] || null
                    }, e.prototype.queryAll = function (t) {
                        var e = [];
                        return function t(e, n, r) {
                            e.childNodes.forEach(function (e) {
                                e instanceof qn && (n(e) && r.push(e), t(e, n, r))
                            })
                        }(this, t, e), e
                    }, e.prototype.queryAllNodes = function (t) {
                        var e = [];
                        return function t(e, n, r) {
                            e instanceof qn && e.childNodes.forEach(function (e) {
                                n(e) && r.push(e), e instanceof qn && t(e, n, r)
                            })
                        }(this, t, e), e
                    }, Object.defineProperty(e.prototype, "children", {
                        get: function () {
                            return this.childNodes.filter(function (t) {
                                return t instanceof e
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.triggerEventHandler = function (t, e) {
                        this.listeners.forEach(function (n) {
                            n.name == t && n.callback(e)
                        })
                    }, e
                }(Bn),
                Kn = new Map;

            function Qn(t) {
                return Kn.get(t) || null
            }
            function Wn(t) {
                Kn.set(t.nativeNode, t)
            }
            function $n(t, e) {
                var n = Yn(t),
                    r = Yn(e);
                return n && r ?
                    function (t, e, n) {
                        for (var r = t[Nt()](), o = e[Nt()]();;) {
                            var i = r.next(),
                                a = o.next();
                            if (i.done && a.done) return !0;
                            if (i.done || a.done) return !1;
                            if (!n(i.value, a.value)) return !1
                        }
                    }(t, e, $n) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || Rt(t, e)
            }
            var Gn = function () {
                    function t(t) {
                        this.wrapped = t
                    }
                    return t.wrap = function (e) {
                        return new t(e)
                    }, t.unwrap = function (e) {
                        return t.isWrapped(e) ? e.wrapped : e
                    }, t.isWrapped = function (e) {
                        return e instanceof t
                    }, t
                }(),
                Zn = function () {
                    function t(t, e, n) {
                        this.previousValue = t, this.currentValue = e, this.firstChange = n
                    }
                    return t.prototype.isFirstChange = function () {
                        return this.firstChange
                    }, t
                }();

            function Yn(t) {
                return !!Jn(t) && (Array.isArray(t) || !(t instanceof Map) && Nt() in t)
            }
            function Jn(t) {
                return null !== t && ("function" == typeof t || "object" == typeof t)
            }
            var Xn = function () {
                    function t() {}
                    return t.prototype.supports = function (t) {
                        return Yn(t)
                    }, t.prototype.create = function (t) {
                        return new er(t)
                    }, t
                }(),
                tr = function (t, e) {
                    return e
                },
                er = function () {
                    function t(t) {
                        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || tr
                    }
                    return t.prototype.forEachItem = function (t) {
                        var e;
                        for (e = this._itHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachOperation = function (t) {
                        for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
                            var i = !n || e && e.currentIndex < ir(n, r, o) ? e : n,
                                a = ir(i, r, o),
                                s = i.currentIndex;
                            if (i === n) r--, n = n._nextRemoved;
                            else if (e = e._next, null == i.previousIndex) r++;
                            else {
                                o || (o = []);
                                var l = a - r,
                                    u = s - r;
                                if (l != u) {
                                    for (var c = 0; c < l; c++) {
                                        var f = c < o.length ? o[c] : o[c] = 0,
                                            p = f + c;
                                        u <= p && p < l && (o[c] = f + 1)
                                    }
                                    o[i.previousIndex] = u - l
                                }
                            }
                            a !== s && t(i, a, s)
                        }
                    }, t.prototype.forEachPreviousItem = function (t) {
                        var e;
                        for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachAddedItem = function (t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachMovedItem = function (t) {
                        var e;
                        for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
                    }, t.prototype.forEachRemovedItem = function (t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.forEachIdentityChange = function (t) {
                        var e;
                        for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
                    }, t.prototype.diff = function (t) {
                        if (null == t && (t = []), !Yn(t)) throw new Error("Error trying to diff '" + jt(t) + "'. Only arrays and iterables are allowed");
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function () {}, t.prototype.check = function (t) {
                        var e = this;
                        this._reset();
                        var n, r, o, i = this._itHead,
                            a = !1;
                        if (Array.isArray(t)) {
                            this.length = t.length;
                            for (var s = 0; s < this.length; s++) o = this._trackByFn(s, r = t[s]), null !== i && Rt(i.trackById, o) ? (a && (i = this._verifyReinsertion(i, r, o, s)), Rt(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, s), a = !0), i = i._next
                        } else n = 0, function (t, e) {
                            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]);
                            else for (var r = t[Nt()](), o = void 0; !(o = r.next()).done;) e(o.value)
                        }(t, function (t) {
                            o = e._trackByFn(n, t), null !== i && Rt(i.trackById, o) ? (a && (i = e._verifyReinsertion(i, t, o, n)), Rt(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, o, n), a = !0), i = i._next, n++
                        }), this.length = n;
                        return this._truncate(i), this.collection = t, this.isDirty
                    }, Object.defineProperty(t.prototype, "isDirty", {
                        get: function () {
                            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._reset = function () {
                        if (this.isDirty) {
                            var t = void 0,
                                e = void 0;
                            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }, t.prototype._mismatch = function (t, e, n, r) {
                        var o;
                        return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Rt(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Rt(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new nr(e, n), o, r), t
                    }, t.prototype._verifyReinsertion = function (t, e, n, r) {
                        var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                        return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
                    }, t.prototype._truncate = function (t) {
                        for (; null !== t;) {
                            var e = t._next;
                            this._addToRemovals(this._unlink(t)), t = e
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }, t.prototype._reinsertAfter = function (t, e, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                        var r = t._prevRemoved,
                            o = t._nextRemoved;
                        return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._moveAfter = function (t, e, n) {
                        return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._addAfter = function (t, e, n) {
                        return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                    }, t.prototype._insertAfter = function (t, e, n) {
                        var r = null === e ? this._itHead : e._next;
                        return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new or), this._linkedRecords.put(t), t.currentIndex = n, t
                    }, t.prototype._remove = function (t) {
                        return this._addToRemovals(this._unlink(t))
                    }, t.prototype._unlink = function (t) {
                        null !== this._linkedRecords && this._linkedRecords.remove(t);
                        var e = t._prev,
                            n = t._next;
                        return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                    }, t.prototype._addToMoves = function (t, e) {
                        return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
                    }, t.prototype._addToRemovals = function (t) {
                        return null === this._unlinkedRecords && (this._unlinkedRecords = new or), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                    }, t.prototype._addIdentityChange = function (t, e) {
                        return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                    }, t
                }(),
                nr = function (t, e) {
                    this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                },
                rr = function () {
                    function t() {
                        this._head = null, this._tail = null
                    }
                    return t.prototype.add = function (t) {
                        null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                    }, t.prototype.get = function (t, e) {
                        var n;
                        for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Rt(n.trackById, t)) return n;
                        return null
                    }, t.prototype.remove = function (t) {
                        var e = t._prevDup,
                            n = t._nextDup;
                        return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                    }, t
                }(),
                or = function () {
                    function t() {
                        this.map = new Map
                    }
                    return t.prototype.put = function (t) {
                        var e = t.trackById,
                            n = this.map.get(e);
                        n || (n = new rr, this.map.set(e, n)), n.add(t)
                    }, t.prototype.get = function (t, e) {
                        var n = this.map.get(t);
                        return n ? n.get(t, e) : null
                    }, t.prototype.remove = function (t) {
                        var e = t.trackById;
                        return this.map.get(e).remove(t) && this.map.delete(e), t
                    }, Object.defineProperty(t.prototype, "isEmpty", {
                        get: function () {
                            return 0 === this.map.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.clear = function () {
                        this.map.clear()
                    }, t
                }();

            function ir(t, e, n) {
                var r = t.previousIndex;
                if (null === r) return r;
                var o = 0;
                return n && r < n.length && (o = n[r]), r + e + o
            }
            var ar = function () {
                    function t() {}
                    return t.prototype.supports = function (t) {
                        return t instanceof Map || Jn(t)
                    }, t.prototype.create = function () {
                        return new sr
                    }, t
                }(),
                sr = function () {
                    function t() {
                        this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                    }
                    return Object.defineProperty(t.prototype, "isDirty", {
                        get: function () {
                            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEachItem = function (t) {
                        var e;
                        for (e = this._mapHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachPreviousItem = function (t) {
                        var e;
                        for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachChangedItem = function (t) {
                        var e;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                    }, t.prototype.forEachAddedItem = function (t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachRemovedItem = function (t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.diff = function (t) {
                        if (t) {
                            if (!(t instanceof Map || Jn(t))) throw new Error("Error trying to diff '" + jt(t) + "'. Only maps and objects are allowed")
                        } else t = new Map;
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function () {}, t.prototype.check = function (t) {
                        var e = this;
                        this._reset();
                        var n = this._mapHead;
                        if (this._appendAfter = null, this._forEach(t, function (t, r) {
                            if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                            else {
                                var o = e._getOrCreateRecordForKey(r, t);
                                n = e._insertBeforeOrAppend(n, o)
                            }
                        }), n) {
                            n._prev && (n._prev._next = null), this._removalsHead = n;
                            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                        }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }, t.prototype._insertBeforeOrAppend = function (t, e) {
                        if (t) {
                            var n = t._prev;
                            return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                        }
                        return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                    }, t.prototype._getOrCreateRecordForKey = function (t, e) {
                        if (this._records.has(t)) {
                            var n = this._records.get(t);
                            this._maybeAddToChanges(n, e);
                            var r = n._prev,
                                o = n._next;
                            return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                        }
                        var i = new lr(t);
                        return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i
                    }, t.prototype._reset = function () {
                        if (this.isDirty) {
                            var t = void 0;
                            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }, t.prototype._maybeAddToChanges = function (t, e) {
                        Rt(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                    }, t.prototype._addToAdditions = function (t) {
                        null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                    }, t.prototype._addToChanges = function (t) {
                        null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                    }, t.prototype._forEach = function (t, e) {
                        t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) {
                            return e(t[n], n)
                        })
                    }, t
                }(),
                lr = function (t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                },
                ur = function () {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function (e, n) {
                        if (null != n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function (e) {
                        return {
                            provide: t,
                            useFactory: function (n) {
                                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new zt, new Vt]
                            ]
                        }
                    }, t.prototype.find = function (t) {
                        var e, n = this.factories.find(function (e) {
                            return e.supports(t)
                        });
                        if (null != n) return n;
                        throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
                    }, t.ngInjectableDef = yt({
                        providedIn: "root",
                        factory: function () {
                            return new t([new Xn])
                        }
                    }), t
                }(),
                cr = function () {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function (e, n) {
                        if (n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function (e) {
                        return {
                            provide: t,
                            useFactory: function (n) {
                                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new zt, new Vt]
                            ]
                        }
                    }, t.prototype.find = function (t) {
                        var e = this.factories.find(function (e) {
                            return e.supports(t)
                        });
                        if (e) return e;
                        throw new Error("Cannot find a differ supporting object '" + t + "'")
                    }, t
                }(),
                fr = [new ar],
                pr = new ur([new Xn]),
                hr = new cr(fr),
                dr = xn(null, "core", [{
                    provide: Le,
                    useValue: "unknown"
                },
                    {
                        provide: kn,
                        deps: [$t]
                    },
                    {
                        provide: yn,
                        deps: []
                    },
                    {
                        provide: Ve,
                        deps: []
                    }]),
                gr = new vt("LocaleId");

            function mr() {
                return pr
            }
            function yr() {
                return hr
            }
            function vr(t) {
                return t || "en-US"
            }
            var _r = function (t) {},
                br = function () {
                    function t(t) {
                        if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            var e = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") &&
                        function () {
                            try {
                                return !!window.DOMParser
                            } catch (t) {
                                return !1
                            }
                        }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    return t.prototype.getInertBodyElement_XHR = function (t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            t = encodeURI(t)
                        } catch (t) {
                            return null
                        }
                        var e = new XMLHttpRequest;
                        e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(null);
                        var n = e.response.body;
                        return n.removeChild(n.firstChild), n
                    }, t.prototype.getInertBodyElement_DOMParser = function (t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                            return e.removeChild(e.firstChild), e
                        } catch (t) {
                            return null
                        }
                    }, t.prototype.getInertBodyElement_InertDocument = function (t) {
                        var e = this.inertDocument.createElement("template");
                        return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                    }, t.prototype.stripCustomNsAttrs = function (t) {
                        for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                            var r = e.item(n).name;
                            "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
                        }
                        for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
                    }, t
                }(),
                wr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                Cr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function Sr(t) {
                return (t = String(t)).match(wr) || t.match(Cr) ? t : (Cn() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
            }
            function xr(t) {
                var e, n, r = {};
                try {
                    for (var o = u(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.
                            return) && n.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }
            function Er() {
                for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                var o = {};
                try {
                    for (var i = u(n), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        for (var l in s) s.hasOwnProperty(l) && (o[l] = !0)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (e = i.
                            return) && e.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return o
            }
            var kr, Pr = xr("area,br,col,hr,img,wbr"),
                Or = xr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                Tr = xr("rp,rt"),
                Mr = Er(Tr, Or),
                Ir = Er(Pr, Er(Or, xr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Er(Tr, xr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Mr),
                Ar = xr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                Nr = xr("srcset"),
                Dr = Er(Ar, Nr, xr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
                Rr = function () {
                    function t() {
                        this.sanitizedSomething = !1, this.buf = []
                    }
                    return t.prototype.sanitizeChildren = function (t) {
                        for (var e = t.firstChild; e;) if (e.nodeType === Node.ELEMENT_NODE ? this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, e.firstChild) e = e.firstChild;
                        else for (; e;) {
                                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                var n = this.checkClobberedElement(e, e.nextSibling);
                                if (n) {
                                    e = n;
                                    break
                                }
                                e = this.checkClobberedElement(e, e.parentNode)
                            }
                        return this.buf.join("")
                    }, t.prototype.startElement = function (t) {
                        var e = t.nodeName.toLowerCase();
                        if (Ir.hasOwnProperty(e)) {
                            this.buf.push("<"), this.buf.push(e);
                            for (var n, r = t.attributes, o = 0; o < r.length; o++) {
                                var i = r.item(o),
                                    a = i.name,
                                    s = a.toLowerCase();
                                if (Dr.hasOwnProperty(s)) {
                                    var l = i.value;
                                    Ar[s] && (l = Sr(l)), Nr[s] && (n = l, l = (n = String(n)).split(",").map(function (t) {
                                        return Sr(t.trim())
                                    }).join(", ")), this.buf.push(" ", a, '="', Lr(l), '"')
                                } else this.sanitizedSomething = !0
                            }
                            this.buf.push(">")
                        } else this.sanitizedSomething = !0
                    }, t.prototype.endElement = function (t) {
                        var e = t.nodeName.toLowerCase();
                        Ir.hasOwnProperty(e) && !Pr.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                    }, t.prototype.chars = function (t) {
                        this.buf.push(Lr(t))
                    }, t.prototype.checkClobberedElement = function (t, e) {
                        if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                        return e
                    }, t
                }(),
                jr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Fr = /([^\#-~ |!])/g;

            function Lr(t) {
                return t.replace(/&/g, "&amp;").replace(jr, function (t) {
                    return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(Fr, function (t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function Hr(t) {
                return "content" in t &&
                function (t) {
                    return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
                }(t) ? t.content : null
            }
            var Vr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                Ur = /^url\(([^)]+)\)$/,
                zr = function (t) {
                    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
                }({}),
                Br = function () {};

            function qr(t, e, n) {
                var r = t.state,
                    o = 1792 & r;
                return o === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : o === n
            }
            function Kr(t, e, n) {
                return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
            }
            function Qr(t, e) {
                return t.nodes[e]
            }
            function Wr(t, e) {
                return t.nodes[e]
            }
            function $r(t, e) {
                return t.nodes[e]
            }
            function Gr(t, e) {
                return t.nodes[e]
            }
            function Zr(t, e) {
                return t.nodes[e]
            }
            var Yr = {
                setCurrentNode: void 0,
                createRootView: void 0,
                createEmbeddedView: void 0,
                createComponentView: void 0,
                createNgModuleRef: void 0,
                overrideProvider: void 0,
                overrideComponentView: void 0,
                clearOverrides: void 0,
                checkAndUpdateView: void 0,
                checkNoChangesView: void 0,
                destroyView: void 0,
                resolveDep: void 0,
                createDebugContext: void 0,
                handleEvent: void 0,
                updateDirectives: void 0,
                updateRenderer: void 0,
                dirtyParentQueries: void 0
            };

            function Jr(t, e, n, r) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
                return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (t, e) {
                    var n = new Error(t);
                    return Xr(n, e), n
                }(o, t)
            }
            function Xr(t, e) {
                t[de] = e, t[me] = e.logError.bind(e)
            }
            function to(t) {
                return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
            }
            var eo = function () {},
                no = new Map;

            function ro(t) {
                var e = no.get(t);
                return e || (e = jt(t) + "_" + no.size, no.set(t, e)), e
            }
            function oo(t, e, n, r) {
                if (Gn.isWrapped(r)) {
                    r = Gn.unwrap(r);
                    var o = t.def.nodes[e].bindingIndex + n,
                        i = Gn.unwrap(t.oldValues[o]);
                    t.oldValues[o] = new Gn(i)
                }
                return r
            }
            var io = "$$undefined",
                ao = "$$empty";

            function so(t) {
                return {
                    id: io,
                    styles: t.styles,
                    encapsulation: t.encapsulation,
                    data: t.data
                }
            }
            var lo = 0;

            function uo(t, e, n, r) {
                return !(!(2 & t.state) && Rt(t.oldValues[e.bindingIndex + n], r))
            }
            function co(t, e, n, r) {
                return !!uo(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
            }
            function fo(t, e, n, r) {
                var o = t.oldValues[e.bindingIndex + n];
                if (1 & t.state || !$n(o, r)) {
                    var i = e.bindings[n].name;
                    throw Jr(Yr.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state))
                }
            }
            function po(t) {
                for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
            }
            function ho(t, e) {
                for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
            }
            function go(t, e, n, r) {
                try {
                    return po(33554432 & t.def.nodes[e].flags ? Wr(t, e).componentView : t), Yr.handleEvent(t, e, n, r)
                } catch (e) {
                    t.root.errorHandler.handleError(e)
                }
            }
            function mo(t) {
                return t.parent ? Wr(t.parent, t.parentNodeDef.nodeIndex) : null
            }
            function yo(t) {
                return t.parent ? t.parentNodeDef.parent : null
            }
            function vo(t, e) {
                switch (201347067 & e.flags) {
                    case 1:
                        return Wr(t, e.nodeIndex).renderElement;
                    case 2:
                        return Qr(t, e.nodeIndex).renderText
                }
            }
            function _o(t) {
                return !!t.parent && !! (32768 & t.parentNodeDef.flags)
            }
            function bo(t) {
                return !(!t.parent || 32768 & t.parentNodeDef.flags)
            }
            function wo(t) {
                return 1 << t % 32
            }
            function Co(t) {
                var e = {},
                    n = 0,
                    r = {};
                return t && t.forEach(function (t) {
                    var o = c(t, 2),
                        i = o[0],
                        a = o[1];
                    "number" == typeof i ? (e[i] = a, n |= wo(i)) : r[i] = a
                }), {
                    matchedQueries: e,
                    references: r,
                    matchedQueryIds: n
                }
            }
            function So(t, e) {
                return t.map(function (t) {
                    var n, r, o;
                    return Array.isArray(t) ? (o = (n = c(t, 2))[0], r = n[1]) : (o = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, Bt, {
                        value: e,
                        configurable: !0
                    }), {
                        flags: o,
                        token: r,
                        tokenKey: ro(r)
                    }
                })
            }
            function xo(t, e, n) {
                var r = n.renderParent;
                return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === pe.Native ? Wr(t, n.renderParent.nodeIndex).renderElement : void 0 : e
            }
            var Eo = new WeakMap;

            function ko(t) {
                var e = Eo.get(t);
                return e || ((e = t(function () {
                    return eo
                })).factory = t, Eo.set(t, e)), e
            }
            function Po(t, e, n, r, o) {
                3 === e && (n = t.renderer.parentNode(vo(t, t.def.lastRenderRootNode))), Oo(t, e, 0, t.def.nodes.length - 1, n, r, o)
            }
            function Oo(t, e, n, r, o, i, a) {
                for (var s = n; s <= r; s++) {
                    var l = t.def.nodes[s];
                    11 & l.flags && Mo(t, l, e, o, i, a), s += l.childCount
                }
            }
            function To(t, e, n, r, o, i) {
                for (var a = t; a && !_o(a);) a = a.parent;
                for (var s = a.parent, l = yo(a), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
                    var f = s.def.nodes[c];
                    f.ngContentIndex === e && Mo(s, f, n, r, o, i), c += f.childCount
                }
                if (!s.parent) {
                    var p = t.root.projectableNodes[e];
                    if (p) for (c = 0; c < p.length; c++) Io(t, p[c], n, r, o, i)
                }
            }
            function Mo(t, e, n, r, o, i) {
                if (8 & e.flags) To(t, e.ngContent.index, n, r, o, i);
                else {
                    var a = vo(t, e);
                    if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && Io(t, a, n, r, o, i), 32 & e.bindingFlags && Io(Wr(t, e.nodeIndex).componentView, a, n, r, o, i)) : Io(t, a, n, r, o, i), 16777216 & e.flags) for (var s = Wr(t, e.nodeIndex).viewContainer._embeddedViews, l = 0; l < s.length; l++) Po(s[l], n, r, o, i);
                    1 & e.flags && !e.element.name && Oo(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i)
                }
            }
            function Io(t, e, n, r, o, i) {
                var a = t.renderer;
                switch (n) {
                    case 1:
                        a.appendChild(r, e);
                        break;
                    case 2:
                        a.insertBefore(r, e, o);
                        break;
                    case 3:
                        a.removeChild(r, e);
                        break;
                    case 0:
                        i.push(e)
                }
            }
            var Ao = /^:([^:]+):(.+)$/;

            function No(t) {
                if (":" === t[0]) {
                    var e = t.match(Ao);
                    return [e[1], e[2]]
                }
                return ["", t]
            }
            function Do(t) {
                for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
                return e
            }
            function Ro(t, e, n, r, o, i, a, s, l, u, c, f, p, h, d, g, m, y, v, _) {
                switch (t) {
                    case 1:
                        return e + jo(n) + r;
                    case 2:
                        return e + jo(n) + r + jo(o) + i;
                    case 3:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s;
                    case 4:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u;
                    case 5:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u + jo(c) + f;
                    case 6:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u + jo(c) + f + jo(p) + h;
                    case 7:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u + jo(c) + f + jo(p) + h + jo(d) + g;
                    case 8:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u + jo(c) + f + jo(p) + h + jo(d) + g + jo(m) + y;
                    case 9:
                        return e + jo(n) + r + jo(o) + i + jo(a) + s + jo(l) + u + jo(c) + f + jo(p) + h + jo(d) + g + jo(m) + y + jo(v) + _;
                    default:
                        throw new Error("Does not support more than 9 expressions")
                }
            }
            function jo(t) {
                return null != t ? t.toString() : ""
            }
            function Fo(t, e, n, r, o, i) {
                t |= 1;
                var a = Co(e);
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    flags: t,
                    checkIndex: -1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: a.matchedQueries,
                    matchedQueryIds: a.matchedQueryIds,
                    references: a.references,
                    ngContentIndex: n,
                    childCount: r,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: {
                        ns: null,
                        name: null,
                        attrs: null,
                        template: i ? ko(i) : null,
                        componentProvider: null,
                        componentView: null,
                        componentRendererType: null,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: o || eo
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }
            function Lo(t, e, n, r, o, i, a, s, l, u, f, p) {
                var h;
                void 0 === a && (a = []), u || (u = eo);
                var d = Co(n),
                    g = d.matchedQueries,
                    m = d.references,
                    y = d.matchedQueryIds,
                    v = null,
                    _ = null;
                i && (v = (h = c(No(i), 2))[0], _ = h[1]), s = s || [];
                for (var b = new Array(s.length), w = 0; w < s.length; w++) {
                    var C = c(s[w], 3),
                        S = C[0],
                        x = C[2],
                        E = c(No(C[1]), 2),
                        k = E[0],
                        P = E[1],
                        O = void 0,
                        T = void 0;
                    switch (15 & S) {
                        case 4:
                            T = x;
                            break;
                        case 1:
                        case 8:
                            O = x
                    }
                    b[w] = {
                        flags: S,
                        ns: k,
                        name: P,
                        nonMinifiedName: P,
                        securityContext: O,
                        suffix: T
                    }
                }
                l = l || [];
                var M = new Array(l.length);
                for (w = 0; w < l.length; w++) {
                    var I = c(l[w], 2);
                    M[w] = {
                        type: 0,
                        target: I[0],
                        eventName: I[1],
                        propName: null
                    }
                }
                var A = (a = a || []).map(function (t) {
                    var e = c(t, 2),
                        n = e[1],
                        r = c(No(e[0]), 2);
                    return [r[0], r[1], n]
                });
                return p = function (t) {
                    if (t && t.id === io) {
                        var e = null != t.encapsulation && t.encapsulation !== pe.None || t.styles.length || Object.keys(t.data).length;
                        t.id = e ? "c" + lo++ : ao
                    }
                    return t && t.id === ao && (t = null), t || null
                }(p), f && (e |= 33554432), {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e |= 1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: g,
                    matchedQueryIds: y,
                    references: m,
                    ngContentIndex: r,
                    childCount: o,
                    bindings: b,
                    bindingFlags: Do(b),
                    outputs: M,
                    element: {
                        ns: v,
                        name: _,
                        attrs: A,
                        template: null,
                        componentProvider: null,
                        componentView: f || null,
                        componentRendererType: p,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: u || eo
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }
            function Ho(t, e, n) {
                var r, o = n.element,
                    i = t.root.selectorOrNode,
                    a = t.renderer;
                if (t.parent || !i) {
                    r = o.name ? a.createElement(o.name, o.ns) : a.createComment("");
                    var s = xo(t, e, n);
                    s && a.appendChild(s, r)
                } else r = a.selectRootElement(i);
                if (o.attrs) for (var l = 0; l < o.attrs.length; l++) {
                    var u = c(o.attrs[l], 3);
                    a.setAttribute(r, u[1], u[2], u[0])
                }
                return r
            }
            function Vo(t, e, n, r) {
                for (var o = 0; o < n.outputs.length; o++) {
                    var i = n.outputs[o],
                        a = Uo(t, n.nodeIndex, (f = i.eventName, (c = i.target) ? c + ":" + f : f)),
                        s = i.target,
                        l = t;
                    "component" === i.target && (s = null, l = e);
                    var u = l.renderer.listen(s || r, i.eventName, a);
                    t.disposables[n.outputIndex + o] = u
                }
                var c, f
            }
            function Uo(t, e, n) {
                return function (r) {
                    return go(t, e, n, r)
                }
            }
            function zo(t, e, n, r) {
                if (!co(t, e, n, r)) return !1;
                var o = e.bindings[n],
                    i = Wr(t, e.nodeIndex),
                    a = i.renderElement,
                    s = o.name;
                switch (15 & o.flags) {
                    case 1:
                        !
                            function (t, e, n, r, o, i) {
                                var a = e.securityContext,
                                    s = a ? t.root.sanitizer.sanitize(a, i) : i;
                                s = null != s ? s.toString() : null;
                                var l = t.renderer;
                                null != i ? l.setAttribute(n, o, s, r) : l.removeAttribute(n, o, r)
                            }(t, o, a, o.ns, s, r);
                        break;
                    case 2:
                        !
                            function (t, e, n, r) {
                                var o = t.renderer;
                                r ? o.addClass(e, n) : o.removeClass(e, n)
                            }(t, a, s, r);
                        break;
                    case 4:
                        !
                            function (t, e, n, r, o) {
                                var i = t.root.sanitizer.sanitize(zr.STYLE, o);
                                if (null != i) {
                                    i = i.toString();
                                    var a = e.suffix;
                                    null != a && (i += a)
                                } else i = null;
                                var s = t.renderer;
                                null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r)
                            }(t, o, a, s, r);
                        break;
                    case 8:
                        !
                            function (t, e, n, r, o) {
                                var i = e.securityContext,
                                    a = i ? t.root.sanitizer.sanitize(i, o) : o;
                                t.renderer.setProperty(n, r, a)
                            }(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, a, s, r)
                }
                return !0
            }
            var Bo = new Object,
                qo = ro($t),
                Ko = ro(Qt),
                Qo = ro(tn);

            function Wo(t, e, n, r) {
                return n = Lt(n), {
                    index: -1,
                    deps: So(r, jt(e)),
                    flags: t,
                    token: e,
                    value: n
                }
            }
            function $o(t, e, n) {
                void 0 === n && (n = $t.THROW_IF_NOT_FOUND);
                var r, o, i = ue(t);
                try {
                    if (8 & e.flags) return e.token;
                    if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                    var a = e.tokenKey;
                    switch (a) {
                        case qo:
                        case Ko:
                        case Qo:
                            return t
                    }
                    var s = t._def.providersByKey[a];
                    if (s) {
                        var l = t._providers[s.index];
                        return void 0 === l && (l = t._providers[s.index] = Go(t, s)), l === Bo ? void 0 : l
                    }
                    if (e.token.ngInjectableDef && (r = t, null != (o = e.token.ngInjectableDef).providedIn && (function (t, e) {
                        return t._def.modules.indexOf(o.providedIn) > -1
                    }(r) || "root" === o.providedIn && r._def.isRoot))) {
                        var u = t._providers.length;
                        return t._def.providersByKey[e.tokenKey] = {
                            flags: 5120,
                            value: e.token.ngInjectableDef.factory,
                            deps: [],
                            index: u,
                            token: e.token
                        }, t._providers[u] = Bo, t._providers[u] = Go(t, t._def.providersByKey[e.tokenKey])
                    }
                    return 4 & e.flags ? n : t._parent.get(e.token, n)
                } finally {
                    ue(i)
                }
            }
            function Go(t, e) {
                var n;
                switch (201347067 & e.flags) {
                    case 512:
                        n = function (t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e($o(t, n[0]));
                                case 2:
                                    return new e($o(t, n[0]), $o(t, n[1]));
                                case 3:
                                    return new e($o(t, n[0]), $o(t, n[1]), $o(t, n[2]));
                                default:
                                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = $o(t, n[i]);
                                    return new(e.bind.apply(e, f([void 0], o)))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 1024:
                        n = function (t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return e();
                                case 1:
                                    return e($o(t, n[0]));
                                case 2:
                                    return e($o(t, n[0]), $o(t, n[1]));
                                case 3:
                                    return e($o(t, n[0]), $o(t, n[1]), $o(t, n[2]));
                                default:
                                    for (var o = Array(r), i = 0; i < r; i++) o[i] = $o(t, n[i]);
                                    return e.apply(void 0, f(o))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 2048:
                        n = $o(t, e.deps[0]);
                        break;
                    case 256:
                        n = e.value
                }
                return n === Bo || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Bo : n
            }
            function Zo(t, e) {
                var n = t.viewContainer._embeddedViews;
                if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
                var r = n[e];
                return r.viewContainerParent = null, ti(n, e), Yr.dirtyParentQueries(r), Jo(r), r
            }
            function Yo(t, e, n) {
                var r = e ? vo(e, e.def.lastRenderRootNode) : t.renderElement;
                Po(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0)
            }
            function Jo(t) {
                Po(t, 3, null, null, void 0)
            }
            function Xo(t, e, n) {
                e >= t.length ? t.push(n) : t.splice(e, 0, n)
            }
            function ti(t, e) {
                e >= t.length - 1 ? t.pop() : t.splice(e, 1)
            }
            var ei = new Object;

            function ni(t, e, n, r, o, i) {
                return new ri(t, e, n, r, o, i)
            }
            var ri = function (t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this) || this;
                        return s.selector = e, s.componentType = n, s._inputs = o, s._outputs = i, s.ngContentSelectors = a, s.viewDefFactory = r, s
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function () {
                            var t = [],
                                e = this._inputs;
                            for (var n in e) t.push({
                                propName: n,
                                templateName: e[n]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", {
                        get: function () {
                            var t = [];
                            for (var e in this._outputs) t.push({
                                propName: e,
                                templateName: this._outputs[e]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.create = function (t, e, n, r) {
                        if (!r) throw new Error("ngModule should be provided");
                        var o = ko(this.viewDefFactory),
                            i = o.nodes[0].element.componentProvider.nodeIndex,
                            a = Yr.createRootView(t, e || [], n, o, r, ei),
                            s = $r(a, i).instance;
                        return n && a.renderer.setAttribute(Wr(a, 0).renderElement, "ng-version", he.full), new oi(a, new li(a), s)
                    }, e
                }(Ke),
                oi = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "location", {
                        get: function () {
                            return new Nn(Wr(this._view, this._elDef.nodeIndex).renderElement)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "injector", {
                        get: function () {
                            return new pi(this._view, this._elDef)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "componentType", {
                        get: function () {
                            return this._component.constructor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.destroy = function () {
                        this._viewRef.destroy()
                    }, e.prototype.onDestroy = function (t) {
                        this._viewRef.onDestroy(t)
                    }, e
                }(qe);

            function ii(t, e, n) {
                return new ai(t, e, n)
            }
            var ai = function () {
                function t(t, e, n) {
                    this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
                }
                return Object.defineProperty(t.prototype, "element", {
                    get: function () {
                        return new Nn(this._data.renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function () {
                        return new pi(this._view, this._elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parentInjector", {
                    get: function () {
                        for (var t = this._view, e = this._elDef.parent; !e && t;) e = yo(t), t = t.parent;
                        return t ? new pi(t, e) : new pi(this._view, null)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.clear = function () {
                    for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                        var e = Zo(this._data, t);
                        Yr.destroyView(e)
                    }
                }, t.prototype.get = function (t) {
                    var e = this._embeddedViews[t];
                    if (e) {
                        var n = new li(e);
                        return n.attachToViewContainerRef(this), n
                    }
                    return null
                }, Object.defineProperty(t.prototype, "length", {
                    get: function () {
                        return this._embeddedViews.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createEmbeddedView = function (t, e, n) {
                    var r = t.createEmbeddedView(e || {});
                    return this.insert(r, n), r
                }, t.prototype.createComponent = function (t, e, n, r, o) {
                    var i = n || this.parentInjector;
                    o || t instanceof Xe || (o = i.get(tn));
                    var a = t.create(i, r, void 0, o);
                    return this.insert(a.hostView, e), a
                }, t.prototype.insert = function (t, e) {
                    if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    var n, r, o, i, a = t;
                    return o = a._view, i = (n = this._data).viewContainer._embeddedViews, null !== (r = e) && void 0 !== r || (r = i.length), o.viewContainerParent = this._view, Xo(i, r, o), function (t, e) {
                        var n = mo(e);
                        if (n && n !== t && !(16 & e.state)) {
                            e.state |= 16;
                            var r = n.template._projectedViews;
                            r || (r = n.template._projectedViews = []), r.push(e), function (t, n) {
                                if (!(4 & n.flags)) {
                                    e.parent.def.nodeFlags |= 4, n.flags |= 4;
                                    for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                                }
                            }(0, e.parentNodeDef)
                        }
                    }(n, o), Yr.dirtyParentQueries(o), Yo(n, r > 0 ? i[r - 1] : null, o), a.attachToViewContainerRef(this), t
                }, t.prototype.move = function (t, e) {
                    if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                    var n, r, o, i, a, s = this._embeddedViews.indexOf(t._view);
                    return o = e, a = (i = (n = this._data).viewContainer._embeddedViews)[r = s], ti(i, r), null == o && (o = i.length), Xo(i, o, a), Yr.dirtyParentQueries(a), Jo(a), Yo(n, o > 0 ? i[o - 1] : null, a), t
                }, t.prototype.indexOf = function (t) {
                    return this._embeddedViews.indexOf(t._view)
                }, t.prototype.remove = function (t) {
                    var e = Zo(this._data, t);
                    e && Yr.destroyView(e)
                }, t.prototype.detach = function (t) {
                    var e = Zo(this._data, t);
                    return e ? new li(e) : null
                }, t
            }();

            function si(t) {
                return new li(t)
            }
            var li = function () {
                function t(t) {
                    this._view = t, this._viewContainerRef = null, this._appRef = null
                }
                return Object.defineProperty(t.prototype, "rootNodes", {
                    get: function () {
                        return Po(this._view, 0, void 0, void 0, t = []), t;
                        var t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function () {
                        return this._view.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "destroyed", {
                    get: function () {
                        return 0 != (128 & this._view.state)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.markForCheck = function () {
                    po(this._view)
                }, t.prototype.detach = function () {
                    this._view.state &= -5
                }, t.prototype.detectChanges = function () {
                    var t = this._view.root.rendererFactory;
                    t.begin && t.begin();
                    try {
                        Yr.checkAndUpdateView(this._view)
                    } finally {
                        t.end && t.end()
                    }
                }, t.prototype.checkNoChanges = function () {
                    Yr.checkNoChangesView(this._view)
                }, t.prototype.reattach = function () {
                    this._view.state |= 4
                }, t.prototype.onDestroy = function (t) {
                    this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
                }, t.prototype.destroy = function () {
                    this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Yr.destroyView(this._view)
                }, t.prototype.detachFromAppRef = function () {
                    this._appRef = null, Jo(this._view), Yr.dirtyParentQueries(this._view)
                }, t.prototype.attachToAppRef = function (t) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }, t.prototype.attachToViewContainerRef = function (t) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = t
                }, t
            }();

            function ui(t, e) {
                return new ci(t, e)
            }
            var ci = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r._parentView = e, r._def = n, r
                }
                return o(e, t), e.prototype.createEmbeddedView = function (t) {
                    return new li(Yr.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
                }, Object.defineProperty(e.prototype, "elementRef", {
                    get: function () {
                        return new Nn(Wr(this._parentView, this._def.nodeIndex).renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(Vn);

            function fi(t, e) {
                return new pi(t, e)
            }
            var pi = function () {
                function t(t, e) {
                    this.view = t, this.elDef = e
                }
                return t.prototype.get = function (t, e) {
                    return void 0 === e && (e = $t.THROW_IF_NOT_FOUND), Yr.resolveDep(this.view, this.elDef, !! this.elDef && 0 != (33554432 & this.elDef.flags), {
                        flags: 0,
                        token: t,
                        tokenKey: ro(t)
                    }, e)
                }, t
            }();

            function hi(t, e) {
                var n = t.def.nodes[e];
                if (1 & n.flags) {
                    var r = Wr(t, n.nodeIndex);
                    return n.element.template ? r.template : r.renderElement
                }
                if (2 & n.flags) return Qr(t, n.nodeIndex).renderText;
                if (20240 & n.flags) return $r(t, n.nodeIndex).instance;
                throw new Error("Illegal state: read nodeValue for node index " + e)
            }
            function di(t) {
                return new gi(t.renderer)
            }
            var gi = function () {
                function t(t) {
                    this.delegate = t
                }
                return t.prototype.selectRootElement = function (t) {
                    return this.delegate.selectRootElement(t)
                }, t.prototype.createElement = function (t, e) {
                    var n = c(No(e), 2),
                        r = this.delegate.createElement(n[1], n[0]);
                    return t && this.delegate.appendChild(t, r), r
                }, t.prototype.createViewRoot = function (t) {
                    return t
                }, t.prototype.createTemplateAnchor = function (t) {
                    var e = this.delegate.createComment("");
                    return t && this.delegate.appendChild(t, e), e
                }, t.prototype.createText = function (t, e) {
                    var n = this.delegate.createText(e);
                    return t && this.delegate.appendChild(t, n), n
                }, t.prototype.projectNodes = function (t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
                }, t.prototype.attachViewAfter = function (t, e) {
                    for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r)
                }, t.prototype.detachView = function (t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                            r = this.delegate.parentNode(n);
                        this.delegate.removeChild(r, n)
                    }
                }, t.prototype.destroyView = function (t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
                }, t.prototype.listen = function (t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.listenGlobal = function (t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.setElementProperty = function (t, e, n) {
                    this.delegate.setProperty(t, e, n)
                }, t.prototype.setElementAttribute = function (t, e, n) {
                    var r = c(No(e), 2),
                        o = r[0],
                        i = r[1];
                    null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o)
                }, t.prototype.setBindingDebugInfo = function (t, e, n) {}, t.prototype.setElementClass = function (t, e, n) {
                    n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
                }, t.prototype.setElementStyle = function (t, e, n) {
                    null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
                }, t.prototype.invokeElementMethod = function (t, e, n) {
                    t[e].apply(t, n)
                }, t.prototype.setText = function (t, e) {
                    this.delegate.setValue(t, e)
                }, t.prototype.animate = function () {
                    throw new Error("Renderer.animate is no longer supported!")
                }, t
            }();

            function mi(t, e, n, r) {
                return new yi(t, e, n, r)
            }
            var yi = function () {
                    function t(t, e, n, r) {
                        this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (t) {
                            for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                                var o = e.providers[r];
                                4096 & o.flags || void 0 === n[r] && (n[r] = Go(t, o))
                            }
                        }(this)
                    }
                    return t.prototype.get = function (t, e, n) {
                        void 0 === e && (e = $t.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
                        var r = 0;
                        return 4 & n ? r |= 1 : 2 & n && (r |= 4), $o(this, {
                            token: t,
                            tokenKey: ro(t),
                            flags: r
                        }, e)
                    }, Object.defineProperty(t.prototype, "instance", {
                        get: function () {
                            return this.get(this._moduleType)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
                        get: function () {
                            return this.get(Ye)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function () {
                        if (this._destroyed) throw new Error("The ng module " + jt(this.instance.constructor) + " has already been destroyed.");
                        this._destroyed = !0, function (t, e) {
                            for (var n = t._def, r = new Set, o = 0; o < n.providers.length; o++) if (131072 & n.providers[o].flags) {
                                var i = t._providers[o];
                                if (i && i !== Bo) {
                                    var a = i.ngOnDestroy;
                                    "function" != typeof a || r.has(i) || (a.apply(i), r.add(i))
                                }
                            }
                        }(this), this._destroyListeners.forEach(function (t) {
                            return t()
                        })
                    }, t.prototype.onDestroy = function (t) {
                        this._destroyListeners.push(t)
                    }, t
                }(),
                vi = ro(function () {}),
                _i = ro(An),
                bi = ro(Nn),
                wi = ro(Un),
                Ci = ro(Vn),
                Si = ro(zn),
                xi = ro($t),
                Ei = ro(Qt);

            function ki(t, e, n, r, o, i, a, s) {
                var l = [];
                if (a) for (var u in a) {
                    var f = c(a[u], 2);
                    l[f[0]] = {
                        flags: 8,
                        name: u,
                        nonMinifiedName: f[1],
                        ns: null,
                        securityContext: null,
                        suffix: null
                    }
                }
                var p = [];
                if (s) for (var h in s) p.push({
                    type: 1,
                    propName: h,
                    target: null,
                    eventName: s[h]
                });
                return Oi(t, e |= 16384, n, r, o, o, i, l, p)
            }
            function Pi(t, e, n) {
                return Oi(-1, t |= 16, null, 0, e, e, n)
            }
            function Oi(t, e, n, r, o, i, a, s, l) {
                var u = Co(n),
                    c = u.matchedQueries,
                    f = u.references,
                    p = u.matchedQueryIds;
                l || (l = []), s || (s = []), i = Lt(i);
                var h = So(a, jt(o));
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: c,
                    matchedQueryIds: p,
                    references: f,
                    ngContentIndex: -1,
                    childCount: r,
                    bindings: s,
                    bindingFlags: Do(s),
                    outputs: l,
                    element: null,
                    provider: {
                        token: o,
                        value: i,
                        deps: h
                    },
                    text: null,
                    query: null,
                    ngContent: null
                }
            }
            function Ti(t, e) {
                return Ni(t, e)
            }
            function Mi(t, e) {
                for (var n = t; n.parent && !_o(n);) n = n.parent;
                return Di(n.parent, yo(n), !0, e.provider.value, e.provider.deps)
            }
            function Ii(t, e) {
                var n = Di(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
                if (e.outputs.length) for (var r = 0; r < e.outputs.length; r++) {
                    var o = e.outputs[r],
                        i = n[o.propName].subscribe(Ai(t, e.parent.nodeIndex, o.eventName));
                    t.disposables[e.outputIndex + r] = i.unsubscribe.bind(i)
                }
                return n
            }
            function Ai(t, e, n) {
                return function (r) {
                    return go(t, e, n, r)
                }
            }
            function Ni(t, e) {
                var n = (8192 & e.flags) > 0,
                    r = e.provider;
                switch (201347067 & e.flags) {
                    case 512:
                        return Di(t, e.parent, n, r.value, r.deps);
                    case 1024:
                        return function (t, e, n, r, o) {
                            var i = o.length;
                            switch (i) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(ji(t, e, n, o[0]));
                                case 2:
                                    return r(ji(t, e, n, o[0]), ji(t, e, n, o[1]));
                                case 3:
                                    return r(ji(t, e, n, o[0]), ji(t, e, n, o[1]), ji(t, e, n, o[2]));
                                default:
                                    for (var a = Array(i), s = 0; s < i; s++) a[s] = ji(t, e, n, o[s]);
                                    return r.apply(void 0, f(a))
                            }
                        }(t, e.parent, n, r.value, r.deps);
                    case 2048:
                        return ji(t, e.parent, n, r.deps[0]);
                    case 256:
                        return r.value
                }
            }
            function Di(t, e, n, r, o) {
                var i = o.length;
                switch (i) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(ji(t, e, n, o[0]));
                    case 2:
                        return new r(ji(t, e, n, o[0]), ji(t, e, n, o[1]));
                    case 3:
                        return new r(ji(t, e, n, o[0]), ji(t, e, n, o[1]), ji(t, e, n, o[2]));
                    default:
                        for (var a = new Array(i), s = 0; s < i; s++) a[s] = ji(t, e, n, o[s]);
                        return new(r.bind.apply(r, f([void 0], a)))
                }
            }
            var Ri = {};

            function ji(t, e, n, r, o) {
                if (void 0 === o && (o = $t.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
                var i = t;
                2 & r.flags && (o = null);
                var a = r.tokenKey;
                a === Si && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
                for (var s = t; s;) {
                    if (e) switch (a) {
                        case vi:
                            return di(Fi(s, e, n));
                        case _i:
                            return Fi(s, e, n).renderer;
                        case bi:
                            return new Nn(Wr(s, e.nodeIndex).renderElement);
                        case wi:
                            return Wr(s, e.nodeIndex).viewContainer;
                        case Ci:
                            if (e.element.template) return Wr(s, e.nodeIndex).template;
                            break;
                        case Si:
                            return si(Fi(s, e, n));
                        case xi:
                        case Ei:
                            return fi(s, e);
                        default:
                            var l = (n ? e.element.allProviders : e.element.publicProviders)[a];
                            if (l) {
                                var u = $r(s, l.nodeIndex);
                                return u || (u = {
                                    instance: Ni(s, l)
                                }, s.nodes[l.nodeIndex] = u), u.instance
                            }
                    }
                    n = _o(s), e = yo(s), s = s.parent, 4 & r.flags && (s = null)
                }
                var c = i.root.injector.get(r.token, Ri);
                return c !== Ri || o === Ri ? c : i.root.ngModule.injector.get(r.token, o)
            }
            function Fi(t, e, n) {
                var r;
                if (n) r = Wr(t, e.nodeIndex).componentView;
                else for (r = t; r.parent && !_o(r);) r = r.parent;
                return r
            }
            function Li(t, e, n, r, o, i) {
                if (32768 & n.flags) {
                    var a = Wr(t, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8)
                }
                if (e.instance[n.bindings[r].name] = o, 524288 & n.flags) {
                    i = i || {};
                    var s = Gn.unwrap(t.oldValues[n.bindingIndex + r]);
                    i[n.bindings[r].nonMinifiedName] = new Zn(s, o, 0 != (2 & t.state))
                }
                return t.oldValues[n.bindingIndex + r] = o, i
            }
            function Hi(t, e) {
                if (t.def.nodeFlags & e) for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
                    var i = n[o],
                        a = i.parent;
                    for (!a && i.flags & e && Ui(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); a && 1 & a.flags && o === a.nodeIndex + a.childCount;) a.directChildFlags & e && (r = Vi(t, a, e, r)), a = a.parent
                }
            }
            function Vi(t, e, n, r) {
                for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                    var i = t.def.nodes[o];
                    i.flags & n && Ui(t, o, i.flags & n, r++), o += i.childCount
                }
                return r
            }
            function Ui(t, e, n, r) {
                var o = $r(t, e);
                if (o) {
                    var i = o.instance;
                    i && (Yr.setCurrentNode(t, e), 1048576 & n && Kr(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Kr(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
                }
            }
            function zi(t, e, n) {
                var r = [];
                for (var o in n) r.push({
                    propName: o,
                    bindingType: n[o]
                });
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: -1,
                    flags: t,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    ngContentIndex: -1,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    childCount: 0,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: {
                        id: e,
                        filterId: wo(e),
                        bindings: r
                    },
                    ngContent: null
                }
            }
            function Bi(t) {
                for (var e = t.def.nodeMatchedQueries; t.parent && bo(t);) {
                    var n = t.parentNodeDef;
                    t = t.parent;
                    for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && Zr(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
                }
                if (134217728 & t.def.nodeFlags) for (o = 0; o < t.def.nodes.length; o++) {
                    var i;
                    134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Zr(t, o).setDirty(), o += i.childCount
                }
            }
            function qi(t, e) {
                var n = Zr(t, e.nodeIndex);
                if (n.dirty) {
                    var r, o = void 0;
                    if (67108864 & e.flags) {
                        var i = e.parent.parent;
                        o = Ki(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), r = $r(t, e.parent.nodeIndex).instance
                    } else 134217728 & e.flags && (o = Ki(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
                    n.reset(o);
                    for (var a = e.query.bindings, s = !1, l = 0; l < a.length; l++) {
                        var u = a[l],
                            c = void 0;
                        switch (u.bindingType) {
                            case 0:
                                c = n.first;
                                break;
                            case 1:
                                c = n, s = !0
                        }
                        r[u.propName] = c
                    }
                    s && n.notifyOnChanges()
                }
            }
            function Ki(t, e, n, r, o) {
                for (var i = e; i <= n; i++) {
                    var a = t.def.nodes[i],
                        s = a.matchedQueries[r.id];
                    if (null != s && o.push(Qi(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                        var l = Wr(t, i);
                        if ((a.childMatchedQueries & r.filterId) === r.filterId && (Ki(t, i + 1, i + a.childCount, r, o), i += a.childCount), 16777216 & a.flags) for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                            var f = u[c],
                                p = mo(f);
                            p && p === l && Ki(f, 0, f.def.nodes.length - 1, r, o)
                        }
                        var h = l.template._projectedViews;
                        if (h) for (c = 0; c < h.length; c++) {
                            var d = h[c];
                            Ki(d, 0, d.def.nodes.length - 1, r, o)
                        }
                    }(a.childMatchedQueries & r.filterId) !== r.filterId && (i += a.childCount)
                }
                return o
            }
            function Qi(t, e, n) {
                if (null != n) switch (n) {
                    case 1:
                        return Wr(t, e.nodeIndex).renderElement;
                    case 0:
                        return new Nn(Wr(t, e.nodeIndex).renderElement);
                    case 2:
                        return Wr(t, e.nodeIndex).template;
                    case 3:
                        return Wr(t, e.nodeIndex).viewContainer;
                    case 4:
                        return $r(t, e.nodeIndex).instance
                }
            }
            function Wi(t, e, n) {
                var r = xo(t, e, n);
                r && To(t, n.ngContent.index, 1, r, null, void 0)
            }
            function $i(t, e) {
                return Zi(128, t, new Array(e + 1))
            }
            function Gi(t, e) {
                for (var n = Object.keys(e), r = n.length, o = new Array(r), i = 0; i < r; i++) {
                    var a = n[i];
                    o[e[a]] = a
                }
                return Zi(64, t, o)
            }
            function Zi(t, e, n) {
                for (var r = new Array(n.length), o = 0; o < n.length; o++) {
                    var i = n[o];
                    r[o] = {
                        flags: 8,
                        name: i,
                        ns: null,
                        nonMinifiedName: i,
                        securityContext: null,
                        suffix: null
                    }
                }
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: e,
                    flags: t,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: -1,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: Do(r),
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }
            function Yi(t, e, n) {
                for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
                    flags: 8,
                    name: null,
                    ns: null,
                    nonMinifiedName: null,
                    securityContext: null,
                    suffix: n[o]
                };
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: 2,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: e,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: 8,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: {
                        prefix: n[0]
                    },
                    query: null,
                    ngContent: null
                }
            }
            function Ji(t, e, n) {
                var r, o = t.renderer;
                r = o.createText(n.text.prefix);
                var i = xo(t, e, n);
                return i && o.appendChild(i, r), {
                    renderText: r
                }
            }
            function Xi(t, e) {
                return (null != t ? t.toString() : "") + e.suffix
            }
            function ta(t, e, n, r) {
                for (var o = 0, i = 0, a = 0, s = 0, l = 0, u = null, c = null, f = !1, p = !1, h = null, d = 0; d < e.length; d++) {
                    var g = e[d];
                    if (g.nodeIndex = d, g.parent = u, g.bindingIndex = o, g.outputIndex = i, g.renderParent = c, a |= g.flags, l |= g.matchedQueryIds, g.element) {
                        var m = g.element;
                        m.publicProviders = u ? u.element.publicProviders : Object.create(null), m.allProviders = m.publicProviders, f = !1, p = !1, g.element.template && (l |= g.element.template.nodeMatchedQueries)
                    }
                    if (na(u, g, e.length), o += g.bindings.length, i += g.outputs.length, !c && 3 & g.flags && (h = g), 20224 & g.flags) {
                        f || (f = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                        var y = 0 != (32768 & g.flags);
                        0 == (8192 & g.flags) || y ? u.element.publicProviders[ro(g.provider.token)] = g : (p || (p = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[ro(g.provider.token)] = g), y && (u.element.componentProvider = g)
                    }
                    if (u ? (u.childFlags |= g.flags, u.directChildFlags |= g.flags, u.childMatchedQueries |= g.matchedQueryIds, g.element && g.element.template && (u.childMatchedQueries |= g.element.template.nodeMatchedQueries)) : s |= g.flags, g.childCount > 0) u = g, ea(g) || (c = g);
                    else for (; u && d === u.nodeIndex + u.childCount;) {
                        var v = u.parent;
                        v && (v.childFlags |= u.childFlags, v.childMatchedQueries |= u.childMatchedQueries), c = (u = v) && ea(u) ? u.renderParent : u
                    }
                }
                return {
                    factory: null,
                    nodeFlags: a,
                    rootNodeFlags: s,
                    nodeMatchedQueries: l,
                    flags: t,
                    nodes: e,
                    updateDirectives: n || eo,
                    updateRenderer: r || eo,
                    handleEvent: function (t, n, r, o) {
                        return e[n].element.handleEvent(t, r, o)
                    },
                    bindingCount: o,
                    outputCount: i,
                    lastRenderRootNode: h
                }
            }
            function ea(t) {
                return 0 != (1 & t.flags) && null === t.element.name
            }
            function na(t, e, n) {
                var r = e.element && e.element.template;
                if (r) {
                    if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                    if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
                }
                if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
                if (e.query) {
                    if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                    if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
                }
                if (e.childCount) {
                    var o = t ? t.nodeIndex + t.childCount : n - 1;
                    if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
                }
            }
            function ra(t, e, n, r) {
                var o = aa(t.root, t.renderer, t, e, n);
                return sa(o, t.component, r), la(o), o
            }
            function oa(t, e, n) {
                var r = aa(t, t.renderer, null, null, e);
                return sa(r, n, n), la(r), r
            }
            function ia(t, e, n, r) {
                var o, i = e.element.componentRendererType;
                return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, aa(t.root, o, t, e.element.componentProvider, n)
            }
            function aa(t, e, n, r, o) {
                var i = new Array(o.nodes.length),
                    a = o.outputCount ? new Array(o.outputCount) : null;
                return {
                    def: o,
                    parent: n,
                    viewContainerParent: null,
                    parentNodeDef: r,
                    context: null,
                    component: null,
                    nodes: i,
                    state: 13,
                    root: t,
                    renderer: e,
                    oldValues: new Array(o.bindingCount),
                    disposables: a,
                    initIndex: -1
                }
            }
            function sa(t, e, n) {
                t.component = e, t.context = n
            }
            function la(t) {
                var e;
                _o(t) && (e = Wr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
                    var i = n.nodes[o];
                    Yr.setCurrentNode(t, o);
                    var a = void 0;
                    switch (201347067 & i.flags) {
                        case 1:
                            var s = Ho(t, e, i),
                                l = void 0;
                            if (33554432 & i.flags) {
                                var u = ko(i.element.componentView);
                                l = Yr.createComponentView(t, i, u, s)
                            }
                            Vo(t, l, i, s), a = {
                                renderElement: s,
                                componentView: l,
                                viewContainer: null,
                                template: i.element.template ? ui(t, i) : void 0
                            }, 16777216 & i.flags && (a.viewContainer = ii(t, i, a));
                            break;
                        case 2:
                            a = Ji(t, e, i);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[o]) || 4096 & i.flags || (a = {
                                instance: Ti(t, i)
                            });
                            break;
                        case 16:
                            a = {
                                instance: Mi(t, i)
                            };
                            break;
                        case 16384:
                            (a = r[o]) || (a = {
                                instance: Ii(t, i)
                            }), 32768 & i.flags && sa(Wr(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            a = {
                                value: void 0
                            };
                            break;
                        case 67108864:
                        case 134217728:
                            a = new Rn;
                            break;
                        case 8:
                            Wi(t, e, i), a = void 0
                    }
                    r[o] = a
                }
                ya(t, ma.CreateViewNodes), wa(t, 201326592, 268435456, 0)
            }
            function ua(t) {
                pa(t), Yr.updateDirectives(t, 1), va(t, ma.CheckNoChanges), Yr.updateRenderer(t, 1), ya(t, ma.CheckNoChanges), t.state &= -97
            }
            function ca(t) {
                1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, qr(t, 0, 256), pa(t), Yr.updateDirectives(t, 0), va(t, ma.CheckAndUpdate), wa(t, 67108864, 536870912, 0);
                var e = qr(t, 256, 512);
                Hi(t, 2097152 | (e ? 1048576 : 0)), Yr.updateRenderer(t, 0), ya(t, ma.CheckAndUpdate), wa(t, 134217728, 536870912, 0), Hi(t, 8388608 | ((e = qr(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, qr(t, 768, 1024)
            }
            function fa(t, e, n, r, o, i, a, s, l, u, c, p, h) {
                return 0 === n ?
                    function (t, e, n, r, o, i, a, s, l, u, c, f) {
                        switch (201347067 & e.flags) {
                            case 1:
                                return function (t, e, n, r, o, i, a, s, l, u, c, f) {
                                    var p = e.bindings.length,
                                        h = !1;
                                    return p > 0 && zo(t, e, 0, n) && (h = !0), p > 1 && zo(t, e, 1, r) && (h = !0), p > 2 && zo(t, e, 2, o) && (h = !0), p > 3 && zo(t, e, 3, i) && (h = !0), p > 4 && zo(t, e, 4, a) && (h = !0), p > 5 && zo(t, e, 5, s) && (h = !0), p > 6 && zo(t, e, 6, l) && (h = !0), p > 7 && zo(t, e, 7, u) && (h = !0), p > 8 && zo(t, e, 8, c) && (h = !0), p > 9 && zo(t, e, 9, f) && (h = !0), h
                                }(t, e, n, r, o, i, a, s, l, u, c, f);
                            case 2:
                                return function (t, e, n, r, o, i, a, s, l, u, c, f) {
                                    var p = !1,
                                        h = e.bindings,
                                        d = h.length;
                                    if (d > 0 && co(t, e, 0, n) && (p = !0), d > 1 && co(t, e, 1, r) && (p = !0), d > 2 && co(t, e, 2, o) && (p = !0), d > 3 && co(t, e, 3, i) && (p = !0), d > 4 && co(t, e, 4, a) && (p = !0), d > 5 && co(t, e, 5, s) && (p = !0), d > 6 && co(t, e, 6, l) && (p = !0), d > 7 && co(t, e, 7, u) && (p = !0), d > 8 && co(t, e, 8, c) && (p = !0), d > 9 && co(t, e, 9, f) && (p = !0), p) {
                                        var g = e.text.prefix;
                                        d > 0 && (g += Xi(n, h[0])), d > 1 && (g += Xi(r, h[1])), d > 2 && (g += Xi(o, h[2])), d > 3 && (g += Xi(i, h[3])), d > 4 && (g += Xi(a, h[4])), d > 5 && (g += Xi(s, h[5])), d > 6 && (g += Xi(l, h[6])), d > 7 && (g += Xi(u, h[7])), d > 8 && (g += Xi(c, h[8])), d > 9 && (g += Xi(f, h[9]));
                                        var m = Qr(t, e.nodeIndex).renderText;
                                        t.renderer.setValue(m, g)
                                    }
                                    return p
                                }(t, e, n, r, o, i, a, s, l, u, c, f);
                            case 16384:
                                return function (t, e, n, r, o, i, a, s, l, u, c, f) {
                                    var p = $r(t, e.nodeIndex),
                                        h = p.instance,
                                        d = !1,
                                        g = void 0,
                                        m = e.bindings.length;
                                    return m > 0 && uo(t, e, 0, n) && (d = !0, g = Li(t, p, e, 0, n, g)), m > 1 && uo(t, e, 1, r) && (d = !0, g = Li(t, p, e, 1, r, g)), m > 2 && uo(t, e, 2, o) && (d = !0, g = Li(t, p, e, 2, o, g)), m > 3 && uo(t, e, 3, i) && (d = !0, g = Li(t, p, e, 3, i, g)), m > 4 && uo(t, e, 4, a) && (d = !0, g = Li(t, p, e, 4, a, g)), m > 5 && uo(t, e, 5, s) && (d = !0, g = Li(t, p, e, 5, s, g)), m > 6 && uo(t, e, 6, l) && (d = !0, g = Li(t, p, e, 6, l, g)), m > 7 && uo(t, e, 7, u) && (d = !0, g = Li(t, p, e, 7, u, g)), m > 8 && uo(t, e, 8, c) && (d = !0, g = Li(t, p, e, 8, c, g)), m > 9 && uo(t, e, 9, f) && (d = !0, g = Li(t, p, e, 9, f, g)), g && h.ngOnChanges(g), 65536 & e.flags && Kr(t, 256, e.nodeIndex) && h.ngOnInit(), 262144 & e.flags && h.ngDoCheck(), d
                                }(t, e, n, r, o, i, a, s, l, u, c, f);
                            case 32:
                            case 64:
                            case 128:
                                return function (t, e, n, r, o, i, a, s, l, u, c, f) {
                                    var p = e.bindings,
                                        h = !1,
                                        d = p.length;
                                    if (d > 0 && co(t, e, 0, n) && (h = !0), d > 1 && co(t, e, 1, r) && (h = !0), d > 2 && co(t, e, 2, o) && (h = !0), d > 3 && co(t, e, 3, i) && (h = !0), d > 4 && co(t, e, 4, a) && (h = !0), d > 5 && co(t, e, 5, s) && (h = !0), d > 6 && co(t, e, 6, l) && (h = !0), d > 7 && co(t, e, 7, u) && (h = !0), d > 8 && co(t, e, 8, c) && (h = !0), d > 9 && co(t, e, 9, f) && (h = !0), h) {
                                        var g = Gr(t, e.nodeIndex),
                                            m = void 0;
                                        switch (201347067 & e.flags) {
                                            case 32:
                                                m = new Array(p.length), d > 0 && (m[0] = n), d > 1 && (m[1] = r), d > 2 && (m[2] = o), d > 3 && (m[3] = i), d > 4 && (m[4] = a), d > 5 && (m[5] = s), d > 6 && (m[6] = l), d > 7 && (m[7] = u), d > 8 && (m[8] = c), d > 9 && (m[9] = f);
                                                break;
                                            case 64:
                                                m = {}, d > 0 && (m[p[0].name] = n), d > 1 && (m[p[1].name] = r), d > 2 && (m[p[2].name] = o), d > 3 && (m[p[3].name] = i), d > 4 && (m[p[4].name] = a), d > 5 && (m[p[5].name] = s), d > 6 && (m[p[6].name] = l), d > 7 && (m[p[7].name] = u), d > 8 && (m[p[8].name] = c), d > 9 && (m[p[9].name] = f);
                                                break;
                                            case 128:
                                                var y = n;
                                                switch (d) {
                                                    case 1:
                                                        m = y.transform(n);
                                                        break;
                                                    case 2:
                                                        m = y.transform(r);
                                                        break;
                                                    case 3:
                                                        m = y.transform(r, o);
                                                        break;
                                                    case 4:
                                                        m = y.transform(r, o, i);
                                                        break;
                                                    case 5:
                                                        m = y.transform(r, o, i, a);
                                                        break;
                                                    case 6:
                                                        m = y.transform(r, o, i, a, s);
                                                        break;
                                                    case 7:
                                                        m = y.transform(r, o, i, a, s, l);
                                                        break;
                                                    case 8:
                                                        m = y.transform(r, o, i, a, s, l, u);
                                                        break;
                                                    case 9:
                                                        m = y.transform(r, o, i, a, s, l, u, c);
                                                        break;
                                                    case 10:
                                                        m = y.transform(r, o, i, a, s, l, u, c, f)
                                                }
                                        }
                                        g.value = m
                                    }
                                    return h
                                }(t, e, n, r, o, i, a, s, l, u, c, f);
                            default:
                                throw "unreachable"
                        }
                    }(t, e, r, o, i, a, s, l, u, c, p, h) : function (t, e, n) {
                        switch (201347067 & e.flags) {
                            case 1:
                                return function (t, e, n) {
                                    for (var r = !1, o = 0; o < n.length; o++) zo(t, e, o, n[o]) && (r = !0);
                                    return r
                                }(t, e, n);
                            case 2:
                                return function (t, e, n) {
                                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) co(t, e, i, n[i]) && (o = !0);
                                    if (o) {
                                        var a = "";
                                        for (i = 0; i < n.length; i++) a += Xi(n[i], r[i]);
                                        a = e.text.prefix + a;
                                        var s = Qr(t, e.nodeIndex).renderText;
                                        t.renderer.setValue(s, a)
                                    }
                                    return o
                                }(t, e, n);
                            case 16384:
                                return function (t, e, n) {
                                    for (var r = $r(t, e.nodeIndex), o = r.instance, i = !1, a = void 0, s = 0; s < n.length; s++) uo(t, e, s, n[s]) && (i = !0, a = Li(t, r, e, s, n[s], a));
                                    return a && o.ngOnChanges(a), 65536 & e.flags && Kr(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i
                                }(t, e, n);
                            case 32:
                            case 64:
                            case 128:
                                return function (t, e, n) {
                                    for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) co(t, e, i, n[i]) && (o = !0);
                                    if (o) {
                                        var a = Gr(t, e.nodeIndex),
                                            s = void 0;
                                        switch (201347067 & e.flags) {
                                            case 32:
                                                s = n;
                                                break;
                                            case 64:
                                                for (s = {}, i = 0; i < n.length; i++) s[r[i].name] = n[i];
                                                break;
                                            case 128:
                                                var l = n[0],
                                                    u = n.slice(1);
                                                s = l.transform.apply(l, f(u))
                                        }
                                        a.value = s
                                    }
                                    return o
                                }(t, e, n);
                            default:
                                throw "unreachable"
                        }
                    }(t, e, r)
            }
            function pa(t) {
                var e = t.def;
                if (4 & e.nodeFlags) for (var n = 0; n < e.nodes.length; n++) {
                    var r = e.nodes[n];
                    if (4 & r.flags) {
                        var o = Wr(t, n).template._projectedViews;
                        if (o) for (var i = 0; i < o.length; i++) {
                            var a = o[i];
                            a.state |= 32, ho(a, t)
                        }
                    } else 0 == (4 & r.childFlags) && (n += r.childCount)
                }
            }
            function ha(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                return 0 === n ?
                    function (t, e, n, r, o, i, a, s, l, u, c, f) {
                        var p = e.bindings.length;
                        p > 0 && fo(t, e, 0, n), p > 1 && fo(t, e, 1, r), p > 2 && fo(t, e, 2, o), p > 3 && fo(t, e, 3, i), p > 4 && fo(t, e, 4, a), p > 5 && fo(t, e, 5, s), p > 6 && fo(t, e, 6, l), p > 7 && fo(t, e, 7, u), p > 8 && fo(t, e, 8, c), p > 9 && fo(t, e, 9, f)
                    }(t, e, r, o, i, a, s, l, u, c, f, p) : function (t, e, n) {
                        for (var r = 0; r < n.length; r++) fo(t, e, r, n[r])
                    }(t, e, r), !1
            }
            function da(t, e) {
                if (Zr(t, e.nodeIndex).dirty) throw Jr(Yr.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
            }
            function ga(t) {
                if (!(128 & t.state)) {
                    if (va(t, ma.Destroy), ya(t, ma.Destroy), Hi(t, 131072), t.disposables) for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                    !
                        function (t) {
                            if (16 & t.state) {
                                var e = mo(t);
                                if (e) {
                                    var n = e.template._projectedViews;
                                    n && (ti(n, n.indexOf(t)), Yr.dirtyParentQueries(t))
                                }
                            }
                        }(t), t.renderer.destroyNode &&
                    function (t) {
                        for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                            var r = t.def.nodes[n];
                            1 & r.flags ? t.renderer.destroyNode(Wr(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Qr(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Zr(t, n).destroy()
                        }
                    }(t), _o(t) && t.renderer.destroy(), t.state |= 128
                }
            }
            var ma = function (t) {
                return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
            }({});

            function ya(t, e) {
                var n = t.def;
                if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                    var o = n.nodes[r];
                    33554432 & o.flags ? _a(Wr(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
                }
            }
            function va(t, e) {
                var n = t.def;
                if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                    var o = n.nodes[r];
                    if (16777216 & o.flags) for (var i = Wr(t, r).viewContainer._embeddedViews, a = 0; a < i.length; a++) _a(i[a], e);
                    else 0 == (16777216 & o.childFlags) && (r += o.childCount)
                }
            }
            function _a(t, e) {
                var n = t.state;
                switch (e) {
                    case ma.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? ua(t) : 64 & n && ba(t, ma.CheckNoChangesProjectedViews));
                        break;
                    case ma.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? ua(t) : 64 & n && ba(t, e));
                        break;
                    case ma.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? ca(t) : 64 & n && ba(t, ma.CheckAndUpdateProjectedViews));
                        break;
                    case ma.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? ca(t) : 64 & n && ba(t, e));
                        break;
                    case ma.Destroy:
                        ga(t);
                        break;
                    case ma.CreateViewNodes:
                        la(t)
                }
            }
            function ba(t, e) {
                va(t, e), ya(t, e)
            }
            function wa(t, e, n, r) {
                if (t.def.nodeFlags & e && t.def.nodeFlags & n) for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                    var a = t.def.nodes[i];
                    if (a.flags & e && a.flags & n) switch (Yr.setCurrentNode(t, a.nodeIndex), r) {
                        case 0:
                            qi(t, a);
                            break;
                        case 1:
                            da(t, a)
                    }
                    a.childFlags & e && a.childFlags & n || (i += a.childCount)
                }
            }
            var Ca = !1;

            function Sa(t, e, n, r, o, i) {
                return oa(Ea(t, o, o.injector.get(Mn), e, n), r, i)
            }
            function xa(t, e, n, r, o, i) {
                var a = o.injector.get(Mn),
                    s = Ea(t, o, new is(a), e, n),
                    l = Ra(r);
                return rs(qa.create, oa, null, [s, l, i])
            }
            function Ea(t, e, n, r, o) {
                var i = e.injector.get(Br),
                    a = e.injector.get(be);
                return {
                    ngModule: e,
                    injector: t,
                    projectableNodes: r,
                    selectorOrNode: o,
                    sanitizer: i,
                    rendererFactory: n,
                    renderer: n.createRenderer(null, null),
                    errorHandler: a
                }
            }
            function ka(t, e, n, r) {
                var o = Ra(n);
                return rs(qa.create, ra, null, [t, e, o, r])
            }
            function Pa(t, e, n, r) {
                return n = Ia.get(e.element.componentProvider.provider.token) || Ra(n), rs(qa.create, ia, null, [t, e, n, r])
            }
            function Oa(t, e, n, r) {
                return mi(t, e, n, function (t) {
                    var e = function (t) {
                            var e = !1,
                                n = !1;
                            return 0 === Ta.size ? {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            } : (t.providers.forEach(function (t) {
                                var r = Ta.get(t.token);
                                3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
                            }), t.modules.forEach(function (t) {
                                Ma.forEach(function (r, o) {
                                    o.ngInjectableDef.providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                                })
                            }), {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            })
                        }(t),
                        n = e.hasDeprecatedOverrides;
                    return e.hasOverrides ? (function (t) {
                        for (var e = 0; e < t.providers.length; e++) {
                            var r = t.providers[e];
                            n && (r.flags |= 4096);
                            var o = Ta.get(r.token);
                            o && (r.flags = -3841 & r.flags | o.flags, r.deps = So(o.deps), r.value = o.value)
                        }
                        if (Ma.size > 0) {
                            var i = new Set(t.modules);
                            Ma.forEach(function (e, r) {
                                if (i.has(r.ngInjectableDef.providedIn)) {
                                    var o = {
                                        token: r,
                                        flags: e.flags | (n ? 4096 : 0),
                                        deps: So(e.deps),
                                        value: e.value,
                                        index: t.providers.length
                                    };
                                    t.providers.push(o), t.providersByKey[ro(r)] = o
                                }
                            })
                        }
                    }(t = t.factory(function () {
                        return eo
                    })), t) : t
                }(r))
            }
            var Ta = new Map,
                Ma = new Map,
                Ia = new Map;

            function Aa(t) {
                Ta.set(t.token, t), "function" == typeof t.token && t.token.ngInjectableDef && "function" == typeof t.token.ngInjectableDef.providedIn && Ma.set(t.token, t)
            }
            function Na(t, e) {
                var n = ko(ko(e.viewDefFactory).nodes[0].element.componentView);
                Ia.set(t, n)
            }
            function Da() {
                Ta.clear(), Ma.clear(), Ia.clear()
            }
            function Ra(t) {
                if (0 === Ta.size) return t;
                var e = function (t) {
                    for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                        var o = t.nodes[r];
                        1 & o.flags && (n = o), n && 3840 & o.flags && Ta.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
                    }
                    return e
                }(t);
                if (0 === e.length) return t;
                t = t.factory(function () {
                    return eo
                });
                for (var n = 0; n < e.length; n++) r(t, e[n]);
                return t;

                function r(t, e) {
                    for (var n = e + 1; n < t.nodes.length; n++) {
                        var r = t.nodes[n];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var o = r.provider,
                                i = Ta.get(o.token);
                            i && (r.flags = -3841 & r.flags | i.flags, o.deps = So(i.deps), o.value = i.value)
                        }
                    }
                }
            }
            function ja(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                var h = t.def.nodes[e];
                return fa(t, h, n, r, o, i, a, s, l, u, c, f, p), 224 & h.flags ? Gr(t, e).value : void 0
            }
            function Fa(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                var h = t.def.nodes[e];
                return ha(t, h, n, r, o, i, a, s, l, u, c, f, p), 224 & h.flags ? Gr(t, e).value : void 0
            }
            function La(t) {
                return rs(qa.detectChanges, ca, null, [t])
            }
            function Ha(t) {
                return rs(qa.checkNoChanges, ua, null, [t])
            }
            function Va(t) {
                return rs(qa.destroy, ga, null, [t])
            }
            var Ua, za, Ba, qa = function (t) {
                return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
            }({});

            function Ka(t, e) {
                za = t, Ba = e
            }
            function Qa(t, e, n, r) {
                return Ka(t, e), rs(qa.handleEvent, t.def.handleEvent, null, [t, e, n, r])
            }
            function Wa(t, e) {
                if (128 & t.state) throw to(qa[Ua]);
                return Ka(t, Xa(t, 0)), t.def.updateDirectives(function (t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? Ga(t, a, r, o) : Za(t, a, r, o), 16384 & a.flags && Ka(t, Xa(t, n)), 224 & a.flags ? Gr(t, a.nodeIndex).value : void 0
                }, t)
            }
            function $a(t, e) {
                if (128 & t.state) throw to(qa[Ua]);
                return Ka(t, ts(t, 0)), t.def.updateRenderer(function (t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? Ga(t, a, r, o) : Za(t, a, r, o), 3 & a.flags && Ka(t, ts(t, n)), 224 & a.flags ? Gr(t, a.nodeIndex).value : void 0
                }, t)
            }
            function Ga(t, e, n, r) {
                if (fa.apply(void 0, f([t, e, n], r))) {
                    var o = 1 === n ? r[0] : r;
                    if (16384 & e.flags) {
                        for (var i = {}, a = 0; a < e.bindings.length; a++) {
                            var s = e.bindings[a],
                                l = o[a];
                            8 & s.flags && (i[(h = s.nonMinifiedName, "ng-reflect-" + (h = h.replace(/[$@]/g, "_").replace(Ya, function () {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return "-" + t[1].toLowerCase()
                            })))] = Ja(l))
                        }
                        var u = e.parent,
                            c = Wr(t, u.nodeIndex).renderElement;
                        if (u.element.name) for (var p in i) null != (l = i[p]) ? t.renderer.setAttribute(c, p, l) : t.renderer.removeAttribute(c, p);
                        else t.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2))
                    }
                }
                var h
            }
            function Za(t, e, n, r) {
                ha.apply(void 0, f([t, e, n], r))
            }
            var Ya = /([A-Z])/g;

            function Ja(t) {
                try {
                    return null != t ? t.toString().slice(0, 30) : t
                } catch (t) {
                    return "[ERROR] Exception while trying to serialize the value"
                }
            }
            function Xa(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (16384 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }
            function ts(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (3 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }
            var es = function () {
                function t(t, e) {
                    this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                    for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
                    if (!n) for (; !n && r;) n = yo(r), r = r.parent;
                    this.elDef = n, this.elView = r
                }
                return Object.defineProperty(t.prototype, "elOrCompView", {
                    get: function () {
                        return Wr(this.elView, this.elDef.nodeIndex).componentView || this.view
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function () {
                        return fi(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "component", {
                    get: function () {
                        return this.elOrCompView.component
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function () {
                        return this.elOrCompView.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "providerTokens", {
                    get: function () {
                        var t = [];
                        if (this.elDef) for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                            var n = this.elView.def.nodes[e];
                            20224 & n.flags && t.push(n.provider.token), e += n.childCount
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "references", {
                    get: function () {
                        var t = {};
                        if (this.elDef) {
                            ns(this.elView, this.elDef, t);
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && ns(this.elView, n, t), e += n.childCount
                            }
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "componentRenderElement", {
                    get: function () {
                        var t = function (t) {
                            for (; t && !_o(t);) t = t.parent;
                            return t.parent ? Wr(t.parent, yo(t).nodeIndex) : null
                        }(this.elOrCompView);
                        return t ? t.renderElement : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderNode", {
                    get: function () {
                        return 2 & this.nodeDef.flags ? vo(this.view, this.nodeDef) : vo(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.logError = function (t) {
                    for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                    2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                    var i = function (t, e) {
                            for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                            return n
                        }(e, n),
                        a = -1;
                    e.factory(function () {
                        var e;
                        return ++a === i ? (e = t.error).bind.apply(e, f([t], r)) : eo
                    }), a < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, f(r)))
                }, t
            }();

            function ns(t, e, n) {
                for (var r in e.references) n[r] = Qi(t, e, e.references[r])
            }
            function rs(t, e, n, r) {
                var o = Ua,
                    i = za,
                    a = Ba;
                try {
                    Ua = t;
                    var s = e.apply(n, r);
                    return za = i, Ba = a, Ua = o, s
                } catch (t) {
                    if (ye(t) || !za) throw t;
                    throw function (t, e) {
                        return t instanceof Error || (t = new Error(t.toString())), Xr(t, e), t
                    }(t, os())
                }
            }
            function os() {
                return za ? new es(za, Ba) : null
            }
            var is = function () {
                    function t(t) {
                        this.delegate = t
                    }
                    return t.prototype.createRenderer = function (t, e) {
                        return new as(this.delegate.createRenderer(t, e))
                    }, t.prototype.begin = function () {
                        this.delegate.begin && this.delegate.begin()
                    }, t.prototype.end = function () {
                        this.delegate.end && this.delegate.end()
                    }, t.prototype.whenRenderingDone = function () {
                        return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
                    }, t
                }(),
                as = function () {
                    function t(t) {
                        this.delegate = t, this.data = this.delegate.data
                    }
                    return t.prototype.destroyNode = function (t) {
                        !
                            function (t) {
                                Kn.delete(t.nativeNode)
                            }(Qn(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
                    }, t.prototype.destroy = function () {
                        this.delegate.destroy()
                    }, t.prototype.createElement = function (t, e) {
                        var n = this.delegate.createElement(t, e),
                            r = os();
                        if (r) {
                            var o = new qn(n, null, r);
                            o.name = t, Wn(o)
                        }
                        return n
                    }, t.prototype.createComment = function (t) {
                        var e = this.delegate.createComment(t),
                            n = os();
                        return n && Wn(new Bn(e, null, n)), e
                    }, t.prototype.createText = function (t) {
                        var e = this.delegate.createText(t),
                            n = os();
                        return n && Wn(new Bn(e, null, n)), e
                    }, t.prototype.appendChild = function (t, e) {
                        var n = Qn(t),
                            r = Qn(e);
                        n && r && n instanceof qn && n.addChild(r), this.delegate.appendChild(t, e)
                    }, t.prototype.insertBefore = function (t, e, n) {
                        var r = Qn(t),
                            o = Qn(e),
                            i = Qn(n);
                        r && o && r instanceof qn && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n)
                    }, t.prototype.removeChild = function (t, e) {
                        var n = Qn(t),
                            r = Qn(e);
                        n && r && n instanceof qn && n.removeChild(r), this.delegate.removeChild(t, e)
                    }, t.prototype.selectRootElement = function (t) {
                        var e = this.delegate.selectRootElement(t),
                            n = os();
                        return n && Wn(new qn(e, null, n)), e
                    }, t.prototype.setAttribute = function (t, e, n, r) {
                        var o = Qn(t);
                        o && o instanceof qn && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
                    }, t.prototype.removeAttribute = function (t, e, n) {
                        var r = Qn(t);
                        r && r instanceof qn && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function (t, e) {
                        var n = Qn(t);
                        n && n instanceof qn && (n.classes[e] = !0), this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function (t, e) {
                        var n = Qn(t);
                        n && n instanceof qn && (n.classes[e] = !1), this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function (t, e, n, r) {
                        var o = Qn(t);
                        o && o instanceof qn && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r)
                    }, t.prototype.removeStyle = function (t, e, n) {
                        var r = Qn(t);
                        r && r instanceof qn && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function (t, e, n) {
                        var r = Qn(t);
                        r && r instanceof qn && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
                    }, t.prototype.listen = function (t, e, n) {
                        if ("string" != typeof t) {
                            var r = Qn(t);
                            r && r.listeners.push(new
                            function (t, e) {
                                this.name = t, this.callback = e
                            }(e, n))
                        }
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.parentNode = function (t) {
                        return this.delegate.parentNode(t)
                    }, t.prototype.nextSibling = function (t) {
                        return this.delegate.nextSibling(t)
                    }, t.prototype.setValue = function (t, e) {
                        return this.delegate.setValue(t, e)
                    }, t
                }(),
                ss = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
                    }
                    return o(e, t), e.prototype.create = function (t) {
                        !
                            function () {
                                if (!Ca) {
                                    Ca = !0;
                                    var t = Cn() ? {
                                        setCurrentNode: Ka,
                                        createRootView: xa,
                                        createEmbeddedView: ka,
                                        createComponentView: Pa,
                                        createNgModuleRef: Oa,
                                        overrideProvider: Aa,
                                        overrideComponentView: Na,
                                        clearOverrides: Da,
                                        checkAndUpdateView: La,
                                        checkNoChangesView: Ha,
                                        destroyView: Va,
                                        createDebugContext: function (t, e) {
                                            return new es(t, e)
                                        },
                                        handleEvent: Qa,
                                        updateDirectives: Wa,
                                        updateRenderer: $a
                                    } : {
                                        setCurrentNode: function () {},
                                        createRootView: Sa,
                                        createEmbeddedView: ra,
                                        createComponentView: ia,
                                        createNgModuleRef: mi,
                                        overrideProvider: eo,
                                        overrideComponentView: eo,
                                        clearOverrides: eo,
                                        checkAndUpdateView: ca,
                                        checkNoChangesView: ua,
                                        destroyView: ga,
                                        createDebugContext: function (t, e) {
                                            return new es(t, e)
                                        },
                                        handleEvent: function (t, e, n, r) {
                                            return t.def.handleEvent(t, e, n, r)
                                        },
                                        updateDirectives: function (t, e) {
                                            return t.def.updateDirectives(0 === e ? ja : Fa, t)
                                        },
                                        updateRenderer: function (t, e) {
                                            return t.def.updateRenderer(0 === e ? ja : Fa, t)
                                        }
                                    };
                                    Yr.setCurrentNode = t.setCurrentNode, Yr.createRootView = t.createRootView, Yr.createEmbeddedView = t.createEmbeddedView, Yr.createComponentView = t.createComponentView, Yr.createNgModuleRef = t.createNgModuleRef, Yr.overrideProvider = t.overrideProvider, Yr.overrideComponentView = t.overrideComponentView, Yr.clearOverrides = t.clearOverrides, Yr.checkAndUpdateView = t.checkAndUpdateView, Yr.checkNoChangesView = t.checkNoChangesView, Yr.destroyView = t.destroyView, Yr.resolveDep = ji, Yr.createDebugContext = t.createDebugContext, Yr.handleEvent = t.handleEvent, Yr.updateDirectives = t.updateDirectives, Yr.updateRenderer = t.updateRenderer, Yr.dirtyParentQueries = Bi
                                }
                            }();
                        var e = function (t) {
                            var e = Array.from(t.providers),
                                n = Array.from(t.modules),
                                r = {};
                            for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                            return {
                                factory: t.factory,
                                isRoot: t.isRoot,
                                providers: e,
                                modules: n,
                                providersByKey: r
                            }
                        }(ko(this._ngModuleDefFactory));
                        return Yr.createNgModuleRef(this.moduleType, t || $t.NULL, this._bootstrapComponents, e)
                    }, e
                }(en),
                ls = 16,
                us = 0,
                cs = 1,
                fs = 2,
                ps = 3,
                hs = 4,
                ds = 5,
                gs = 6,
                ms = 7,
                ys = 8,
                vs = 9,
                _s = 10,
                bs = 11,
                ws = 14;

            function Cs(t, e, n) {
                t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentInit), t.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked))
            }
            function Ss(t, e, n) {
                t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewInit), t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked))
            }
            function xs(t, e, n) {
                null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy)
            }
            function Es(t, e, n) {
                16 & t[hs] && (ks(t[ms], e.initHooks, e.checkHooks, n), t[hs] &= -17)
            }
            function ks(t, e, n, r) {
                var o = r ? e : n;
                o && Ps(t, o)
            }
            function Ps(t, e) {
                for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]])
            }
            var Os = 0,
                Ts = 4,
                Ms = "ngProjectAs";

            function Is(t) {
                return !!t.listen
            }
            var As = {
                createRenderer: function (t, e) {
                    return document
                }
            };

            function Ns(t) {
                return Array.isArray(t) ? t[0] : t
            }
            function Ds(t) {
                if (2 === t.tNode.type) {
                    var e = t.data;
                    return e[fs] ? e[fs][ds] : null
                }
                return t.tNode.next ? t.view[t.tNode.next.index] : null
            }
            function Rs(t) {
                return t.tNode.child ? Ns((2 === t.tNode.type ? t.data : t.view)[t.tNode.child.index]) : null
            }
            function js(t) {
                if (-1 === t.tNode.index && 2 === t.tNode.type) {
                    var e = t.data[ws];
                    return -1 === e ? null : t.view[e].dynamicLContainerNode
                }
                var n = t.tNode.parent;
                return Ns(n ? t.view[n.index] : t.view[ds])
            }
            var Fs = [];

            function Ls(t) {
                for (var e = t[ds]; 2 === e.tNode.type;) e = (t = t[cs])[ds];
                return e
            }
            function Hs(t, e, n, r, o) {
                0 === t ? Is(e) ? e.insertBefore(n, r, o) : n.insertBefore(r, o, !0) : 1 === t ? Is(e) ? e.removeChild(n, r) : n.removeChild(r) : 2 === t && e.destroyNode(r)
            }
            function Vs(t) {
                if (-1 === t[us].childIndex) return null;
                var e = t[t[us].childIndex];
                return e.data ? e.data : e.dynamicLContainerNode.data
            }
            function Us(t, e) {
                var n;
                return (n = t[ds]) && 2 === n.tNode.type ? js(n).data : t[cs] === e ? null : t[cs]
            }
            function zs(t) {
                if (t[us]) {
                    var e = t;
                    !
                        function (t) {
                            var e = t[us].cleanup;
                            if (null != e) {
                                for (var n = 0; n < e.length - 1; n += 2)"string" == typeof e[n] ? (Ns(t[e[n + 1]]).native.removeEventListener(e[n], t[ys][e[n + 2]], e[n + 3]), n += 2) : "number" == typeof e[n] ? (0, t[ys][e[n]])() : e[n].call(t[ys][e[n + 1]]);
                                t[ys] = null
                            }
                        }(e), function (t) {
                        var e, n = t[us];
                        null != n && null != (e = n.destroyHooks) && Ps(t[ms], e)
                    }(e), (r = (n = e)[us] && n[us].pipeDestroyHooks) && Ps(n, r), -1 === e[us].id && Is(e[bs]) && e[bs].destroy()
                }
                var n, r
            }
            var Bs, qs, Ks, Qs, Ws, $s, Gs, Zs, Ys, Js = "__ngHostLNode__",
                Xs = Promise.resolve(null),
                tl = [0, 0],
                el = new Array(ls).fill(null),
                nl = !1,
                rl = !0;

            function ol(t, e) {
                var n = Zs;
                return Ys = t && t[ms], Ws = t && t[us], Gs = t && 1 == (1 & t[hs]), rl = t && Ws.firstTemplatePass, Bs = t && t[bs], null != e && (Ks = e, Qs = !0), Zs = t, $s = t && t[ps], n
            }
            function il(t, e) {
                e || (nl || ks(Ys, Ws.viewHooks, Ws.viewCheckHooks, Gs), Zs[hs] &= -6), Zs[hs] |= 16, Zs[gs] = -1, ol(t, null)
            }
            function al() {
                nl || Es(Zs, Ws, Gs), function (t) {
                    for (var e = Vs(Zs); null !== e; e = e[fs]) if (e.length < ls && null === e[Os]) for (var n = e, r = 0; r < n[Ts].length; r++) {
                        var o = n[Ts][r],
                            i = o.data;
                        cl(o, i[us], i[vs], 2)
                    }
                }(), nl || ks(Ys, Ws.contentHooks, Ws.contentCheckHooks, Gs), Ws.firstTemplatePass = rl = !1, sl(Ws.hostBindings), function (t) {
                    if (null != t.contentQueries) for (var e = 0; e < t.contentQueries.length; e += 2) {
                        var n = t.contentQueries[e];
                        t.directives[n].contentQueriesRefresh(n, t.contentQueries[e + 1])
                    }
                }(Ws), function (t) {
                    if (null != t) for (var e = 0; e < t.length; e += 2) vl(t[e], t[e + 1])
                }(Ws.components)
            }
            function sl(t) {
                if (null != t) for (var e = Ws.directives, n = 0; n < t.length; n += 2) {
                    var r = t[n],
                        o = e[r];
                    o.hostBindings && o.hostBindings(r, t[n + 1])
                }
            }
            function ll(t, e, n, r, o) {
                return [e, Zs, null, null, 25 | r, null, -1, null, null, n, Zs && Zs[_s], t, o || null, null, -1, null]
            }
            function ul(t, e, n, r, o, i) {
                var a = Qs ? Ks : Ks && js(Ks),
                    s = a && a.view === Zs ? a.tNode : null,
                    l = (Qs ? $s : Ks && Ks.queries) || a && a.queries && a.queries.child(),
                    u = null != i,
                    c = function (t, e, n, r, o, i) {
                        return {
                            native: r,
                            view: Zs,
                            nodeInjector: n ? n.nodeInjector : null,
                            data: o,
                            queries: i,
                            tNode: null,
                            dynamicLContainerNode: null
                        }
                    }(0, 0, a, n, u ? i : null, l);
                if (-1 === t || 2 === e) c.tNode = (i ? i[us].node : null) || yl(e, t, null, null, s, null);
                else {
                    var f = t + ls,
                        p = Ws.data;
                    if (Zs[f] = c, f >= p.length) {
                        var h = p[f] = yl(e, f, r, o, s, null);
                        if (!Qs && Ks) {
                            var d = Ks.tNode;
                            d.next = h, d.dynamicContainerNode && (d.dynamicContainerNode.next = h)
                        }
                    }
                    c.tNode = p[f], Qs && ($s = null, (null == Ks.tNode.child && Ks.view === Zs || 2 === Ks.tNode.type) && (Ks.tNode.child = c.tNode))
                }
                if (2 == (2 & e) && u) {
                    var g = i;
                    g[ds] = c, rl && (g[us].node = c.tNode)
                }
                return Ks = c, Qs = !0, c
            }
            function cl(t, e, n, r) {
                var o, i = Qs,
                    a = Ks;
                if (null == t.data[cs] && t.data[vs] && !e.template) bl(t.data[vs]);
                else try {
                    Qs = !0, Ks = null, o = ol(t.data, t), dl(), e.template(r, n), 2 & r ? al() : t.data[us].firstTemplatePass = rl = !1
                } finally {
                    il(o, 1 == (1 & r)), Qs = i, Ks = a
                }
                return t
            }
            function fl(t, e, n, r) {
                var o = ol(e, t);
                try {
                    qs.begin && qs.begin(), r ? (dl(), r(pl(e), n), al()) : (nl || (Es(Zs, Ws, Gs), ks(Ys, Ws.contentHooks, Ws.contentCheckHooks, Gs)), sl(tl), vl(0, ls))
                } finally {
                    qs.end && qs.end(), il(o)
                }
            }
            function pl(t) {
                return 1 & t[hs] ? 3 : 2
            }
            var hl = null;

            function dl() {
                hl = null
            }
            function gl(t, e, n, r, o) {
                return {
                    id: t,
                    template: e,
                    viewQuery: o,
                    node: null,
                    data: el.slice(),
                    childIndex: -1,
                    bindingStartIndex: -1,
                    directives: null,
                    firstTemplatePass: !0,
                    initHooks: null,
                    checkHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    pipeDestroyHooks: null,
                    cleanup: null,
                    hostBindings: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof n ? n() : n,
                    pipeRegistry: "function" == typeof r ? r() : r,
                    currentMatches: null
                }
            }
            function ml(t, e) {
                qs = t;
                var n = t.createRenderer(null, null);
                return "string" == typeof e ? Is(n) ? n.selectRootElement(e) : n.querySelector(e) : e
            }
            function yl(t, e, n, r, o, i) {
                return {
                    type: t,
                    index: e,
                    flags: 0,
                    tagName: n,
                    attrs: r,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: void 0,
                    outputs: void 0,
                    tViews: i,
                    next: null,
                    child: null,
                    parent: o,
                    dynamicContainerNode: null,
                    detached: null,
                    stylingTemplate: null,
                    projection: null
                }
            }
            function vl(t, e) {
                var n = Zs[e],
                    r = n.data;
                _l(r) && 6 & r[hs] && Sl(r, n, Ys[t])
            }
            function _l(t) {
                return 8 == (8 & t[hs])
            }
            function bl(t) {
                for (var e = 0; e < t.components.length; e++) {
                    var n = t.components[e];
                    fl(xl(n), wl(n), n)
                }
            }
            function wl(t) {
                for (var e = xl(t).view; e[cs];) e = e[cs];
                return e
            }
            function Cl(t) {
                var e = xl(t);
                Sl(e.data, e, t)
            }
            function Sl(t, e, n) {
                var r = ol(t, e),
                    o = t[us],
                    i = o.template,
                    a = o.viewQuery;
                try {
                    dl(), function (e, n, r) {
                        e && 1 & t[hs] && e(1, r)
                    }(a, 0, n), i(pl(t), n), al(), function (t, e) {
                        t && t(2, e)
                    }(a, n)
                } finally {
                    il(r)
                }
            }
            function xl(t) {
                return t[Js]
            }
            var El = Xs;

            function kl(t) {
                return {
                    components: [],
                    scheduler: t,
                    clean: El
                }
            }
            var Pl = function () {
                    function t(t, e) {
                        this._view = t, this._appRef = null, this._viewContainerRef = null, this._lViewNode = null, this.context = e
                    }
                    return t.prototype._setComponentContext = function (t, e) {
                        this._view = t, this.context = e
                    }, Object.defineProperty(t.prototype, "destroyed", {
                        get: function () {
                            return 32 == (32 & this._view[hs])
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function () {
                        var t, e;
                        this._viewContainerRef && _l(this._view) && (this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), this._viewContainerRef = null), Is(e = (t = this._view)[bs]) && e.destroyNode &&
                        function (e, n, r, o, i, a) {
                            for (var s = t[ds], l = -1; s;) {
                                var u = null,
                                    c = s.tNode.type;
                                if (3 === c) Hs(2, o, null, s.native, a), s.dynamicLContainerNode && Hs(2, o, null, s.dynamicLContainerNode.native, a);
                                else if (0 === c) {
                                    Hs(2, o, null, s.native, a);
                                    var f = s,
                                        p = f.dynamicLContainerNode ? f.dynamicLContainerNode.data : f.data;
                                    (u = p[Ts].length ? Rs(p[Ts][0]) : null) && (a = f.dynamicLContainerNode ? f.dynamicLContainerNode.native : f.native)
                                } else if (1 === c) {
                                    var h = Ls(s.view),
                                        d = h.tNode.projection[s.tNode.projection];
                                    Fs[++l] = s, u = d ? h.data[cs][d.index] : null
                                } else u = Rs(s);
                                if (null === u) for (null === (u = Ds(s)) && 8192 & s.tNode.flags && (u = Ds(Fs[l--])); s && !u;) {
                                    if (null === (s = js(s)) || s === n) return null;
                                    s.tNode.next || 0 !== c || (a = s.native), u = Ds(s)
                                }
                                s = u
                            }
                        }(0, t[ds], 0, e), function (t) {
                            if (-1 === t[us].childIndex) return zs(t);
                            for (var e = Vs(t); e;) {
                                var n = null;
                                if (e.length >= ls ? e[us].childIndex > -1 && (n = Vs(e)) : e[Ts].length && (n = e[Ts][0].data), null == n) {
                                    for (; e && !e[fs] && e !== t;) zs(e), e = Us(e, t);
                                    zs(e || t), n = e && e[fs]
                                }
                                e = n
                            }
                        }(t), t[hs] |= 32
                    }, t.prototype.onDestroy = function (t) {
                        var e, n;
                        n = t, function (t) {
                            return t[ys] || (t[ys] = [])
                        }(e = this._view).push(n), e[us].firstTemplatePass &&
                        function (t) {
                            return t[us].cleanup || (t[us].cleanup = [])
                        }(e).push(e[ys].length - 1, null)
                    }, t.prototype.markForCheck = function () {
                        !
                            function (t) {
                                for (var e = t; null != e[cs];) e[hs] |= 4, e = e[cs];
                                var n, r;
                                e[hs] |= 4, (n = e[vs]).clean == Xs && (n.clean = new Promise(function (t) {
                                    return r = t
                                }), n.scheduler(function () {
                                    bl(n), r(null), n.clean = Xs
                                }))
                            }(this._view)
                    }, t.prototype.detach = function () {
                        this._view[hs] &= -9
                    }, t.prototype.reattach = function () {
                        this._view[hs] |= 8
                    }, t.prototype.detectChanges = function () {
                        Cl(this.context)
                    }, t.prototype.checkNoChanges = function () {
                        !
                            function (t) {
                                nl = !0;
                                try {
                                    Cl(t)
                                } finally {
                                    nl = !1
                                }
                            }(this.context)
                    }, t.prototype.attachToViewContainerRef = function (t) {
                        this._viewContainerRef = t
                    }, t.prototype.detachFromAppRef = function () {
                        this._appRef = null
                    }, t.prototype.attachToAppRef = function (t) {
                        this._appRef = t
                    }, t
                }(),
                Ol = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolveComponentFactory = function (t) {
                        return new Al(t.ngComponentDef)
                    }, e
                }(Ye);

            function Tl(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push({
                    propName: t[n],
                    templateName: n
                });
                return e
            }
            var Ml = new vt("ROOT_CONTEXT_TOKEN", {
                    providedIn: "root",
                    factory: function () {
                        return kl(ce(Il))
                    }
                }),
                Il = new vt("SCHEDULER_TOKEN", {
                    providedIn: "root",
                    factory: function () {
                        return requestAnimationFrame.bind(window)
                    }
                }),
                Al = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.componentDef = e, n.componentType = e.type, n.selector = e.selectors[0][0], n.ngContentSelectors = [], n
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function () {
                            return Tl(this.componentDef.inputs)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", {
                        get: function () {
                            return Tl(this.componentDef.outputs)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.create = function (t, e, n, r) {
                        var o, i, a = void 0 === n,
                            s = r ? r.injector.get(Mn) : As,
                            l = a ? (o = this.selector, Is(i = s.createRenderer(null, this.componentDef.rendererType) || Bs) ? i.createElement(o, hl) : null === hl ? i.createElement(o) : i.createElementNS(hl, o)) : ml(s, n),
                            u = r && !a ? r.injector.get(Ml) : kl(requestAnimationFrame.bind(window)),
                            c = ll(s.createRenderer(l, this.componentDef.rendererType), gl(-1, null, null, null, null), u, this.componentDef.onPush ? 4 : 2);
                        c[_s] = r && r.injector || null;
                        var f, p, h = ol(c, null);
                        try {
                            if (s.begin && s.begin(), p = function (t, e, n, r) {
                                Qs = !1, Ks = null;
                                var o, i = ul(0, 3, e, null, null, ll(Bs, (o = n.template).ngPrivateData || (o.ngPrivateData = gl(-1, o, n.directiveDefs, n.pipeDefs, n.viewQuery)), null, n.onPush ? 4 : 2, r));
                                return rl && (i.tNode.flags = 4096, n.diPublic && n.diPublic(n), Ws.directives = [n]), i
                            }(0, l, this.componentDef), u.components.push(f = function (t, e, n) {
                                if (Object.defineProperty(e, Js, {
                                    enumerable: !1,
                                    value: Ks
                                }), null == Ys && (Zs[ms] = Ys = []), Ys[t] = e, rl) {
                                    var r = Ks.tNode.flags;
                                    0 == (4095 & r) ? Ks.tNode.flags = t << 14 | 4096 & r | 1 : Ks.tNode.flags++
                                } else {
                                    var o = n.diPublic;
                                    o && o(n)
                                }
                                return null != n.attributes && 3 == Ks.tNode.type &&
                                function (t, e) {
                                    for (var n = Is(Bs), r = 0; r < e.length;) {
                                        var o = e[r];
                                        if (1 === o) break;
                                        if (o === Ms) r += 2;
                                        else if (0 === o) {
                                            var i = e[r + 1],
                                                a = e[r + 2],
                                                s = e[r + 3];
                                            n ? Bs.setAttribute(t, a, s, i) : t.setAttributeNS(i, a, s), r += 4
                                        } else s = e[r + 1], n ? Bs.setAttribute(t, o, s) : t.setAttribute(o, s), r += 2
                                    }
                                }(Ks.native, n.attributes), e
                            }(0, this.componentDef.factory(), this.componentDef)), function (t, e, n) {
                                t && null != t.changeDetectorRef && t.changeDetectorRef._setComponentContext(p.data, f)
                            }(p.nodeInjector), function (t, e) {
                                var n = xl(t),
                                    r = n.view[us];
                                (function (t, e, n, r) {
                                    e && (r.initHooks || (r.initHooks = [])).push(0, e), n && ((r.initHooks || (r.initHooks = [])).push(0, n), (r.checkHooks || (r.checkHooks = [])).push(0, n))
                                })(0, e.onInit, e.doCheck, r), function (t, e) {
                                    if (e.firstTemplatePass) for (var n = t >> 14, r = n + (4095 & t), o = n; o < r; o++) {
                                        var i = e.directives[o];
                                        Cs(i, e, o), Ss(i, e, o), xs(i, e, o)
                                    }
                                }(n.tNode.flags, r)
                            }(f, this.componentDef), e) for (var d = 0, g = p.tNode.projection = [], m = 0; m < e.length; m++) {
                                for (var y = e[m], v = null, _ = null, b = 0; b < y.length; b++) {
                                    var w = ul(++d, 3, y[b], null, null);
                                    _ ? _.next = w.tNode : v = w.tNode, _ = w.tNode
                                }
                                g.push(v)
                            }
                            cl(p, p.data[us], f, 1), p.data[hs] &= -2
                        } finally {
                            ol(h, null), s.end && s.end()
                        }
                        var C = new Nl(this.componentType, f, c, t, l);
                        return a && (C.hostView._lViewNode.tNode.child = p.tNode), C
                    }, e
                }(Ke),
                Nl = function (t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this) || this;
                        return a.destroyCbs = [], a.instance = n, a.hostView = a.changeDetectorRef = new Pl(r, n), a.hostView._lViewNode = ul(-1, 2, null, null, null, r), a.injector = o, a.location = new Nn(i), a.componentType = e, a
                    }
                    return o(e, t), e.prototype.destroy = function () {
                        this.destroyCbs.forEach(function (t) {
                            return t()
                        }), this.destroyCbs = null
                    }, e.prototype.onDestroy = function (t) {
                        this.destroyCbs.push(t)
                    }, e
                }(qe),
                Dl = {
                    provide: Ye,
                    useFactory: function () {
                        return new Ol
                    },
                    deps: []
                },
                Rl = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._bootstrapComponents = [], r.destroyCbs = [], r._bootstrapComponents = e.ngModuleDef.bootstrap, r.injector = function (t, e, n) {
                            return void 0 === e && (e = null), void 0 === n && (n = null), e = e || ke(), new Pe(t, n, e)
                        }(e, n, [Dl,
                            {
                                provide: tn,
                                useValue: r
                            }]), r.instance = r.injector.get(e), r.componentFactoryResolver = new Ol, r
                    }
                    return o(e, t), e.prototype.destroy = function () {
                        this.destroyCbs.forEach(function (t) {
                            return t()
                        }), this.destroyCbs = null
                    }, e.prototype.onDestroy = function (t) {
                        this.destroyCbs.push(t)
                    }, e
                }(tn);
            !
                function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.moduleType = e, n
                    }
                    o(e, t), e.prototype.create = function (t) {
                        return new Rl(this.moduleType, t)
                    }
                }(en);
            var jl = function () {},
                Fl = new D(function (t) {
                    return t.complete()
                });

            function Ll(t) {
                return t ?
                    function (t) {
                        return new D(function (e) {
                            return t.schedule(function () {
                                return e.complete()
                            })
                        })
                    }(t) : Fl
            }
            function Hl() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n, r, o = t[t.length - 1];
                switch (z(o) ? t.pop() : o = void 0, t.length) {
                    case 0:
                        return Ll(o);
                    case 1:
                        return o ? rt(t, o) : (n = t[0], (r = new D(function (t) {
                            t.next(n), t.complete()
                        }))._isScalar = !0, r.value = n, r);
                    default:
                        return rt(t, o)
                }
            }
            function Vl() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            Vl.prototype = Object.create(Error.prototype);
            var Ul = Vl,
                zl = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._value = e, n
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "value", {
                        get: function () {
                            return this.getValue()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._subscribe = function (e) {
                        var n = t.prototype._subscribe.call(this, e);
                        return n && !n.closed && e.next(this._value), n
                    }, e.prototype.getValue = function () {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new F;
                        return this._value
                    }, e.prototype.next = function (e) {
                        t.prototype.next.call(this, this._value = e)
                    }, e
                }(V);

            function Bl() {
                return ut(1)
            }
            function ql(t, e) {
                return function (n) {
                    return n.lift(new Kl(t, e))
                }
            }
            var Kl = function () {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new Ql(t, this.predicate, this.thisArg))
                    }, t
                }(),
                Ql = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.thisArg = r, o.count = 0, o
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e && this.destination.next(t)
                    }, e
                }(O);

            function Wl() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }
            Wl.prototype = Object.create(Error.prototype);
            var $l = Wl;

            function Gl(t) {
                return function (e) {
                    return 0 === t ? Ll() : e.lift(new Zl(t))
                }
            }
            var Zl = function () {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new $l
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new Yl(t, this.total))
                    }, t
                }(),
                Yl = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.ring = new Array, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        var e = this.ring,
                            n = this.total,
                            r = this.count++;
                        e.length < n ? e.push(t) : e[r % n] = t
                    }, e.prototype._complete = function () {
                        var t = this.destination,
                            e = this.count;
                        if (e > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                            var i = e++ % n;
                            t.next(r[i])
                        }
                        t.complete()
                    }, e
                }(O),
                Jl = function () {
                    function t(t, e, n) {
                        this.nextOrObserver = t, this.error = e, this.complete = n
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new Xl(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                Xl = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._tapNext = I, i._tapError = I, i._tapComplete = I, i._tapError = r || I, i._tapComplete = o || I, d(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || I, i._tapError = n.error || I, i._tapComplete = n.complete || I), i
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function (t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function () {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(O),
                tu = function (t) {
                    return void 0 === t && (t = eu), e = {
                        hasValue: !1,
                        next: function () {
                            this.hasValue = !0
                        },
                        complete: function () {
                            if (!this.hasValue) throw t()
                        }
                    }, function (t) {
                        return t.lift(new Jl(e, void 0, void 0))
                    };
                    var e
                };

            function eu() {
                return new Ul
            }
            function nu(t) {
                return void 0 === t && (t = null), function (e) {
                    return e.lift(new ru(t))
                }
            }
            var ru = function () {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new ou(t, this.defaultValue))
                    }, t
                }(),
                ou = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.defaultValue = n, r.isEmpty = !0, r
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function () {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(O);

            function iu(t, e) {
                var n = arguments.length >= 2;
                return function (r) {
                    return r.pipe(t ? ql(function (e, n) {
                        return t(e, n, r)
                    }) : lt, Gl(1), n ? nu(e) : tu(function () {
                        return new Ul
                    }))
                }
            }
            function au(t, e) {
                return function (n) {
                    return n.lift(new su(t, e, n))
                }
            }
            var su = function () {
                    function t(t, e, n) {
                        this.predicate = t, this.thisArg = e, this.source = n
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new lu(t, this.predicate, this.thisArg, this.source))
                    }, t
                }(),
                lu = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
                    }
                    return o(e, t), e.prototype.notifyComplete = function (t) {
                        this.destination.next(t), this.destination.complete()
                    }, e.prototype._next = function (t) {
                        var e = !1;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e || this.notifyComplete(!1)
                    }, e.prototype._complete = function () {
                        this.notifyComplete(!0)
                    }, e
                }(O);

            function uu(t) {
                return function (e) {
                    var n = new cu(t),
                        r = e.lift(n);
                    return n.caught = r
                }
            }
            var cu = function () {
                    function t(t) {
                        this.selector = t
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new fu(t, this.selector, this.caught))
                    }, t
                }(),
                fu = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.selector = n, o.caught = r, o
                    }
                    return o(e, t), e.prototype.error = function (e) {
                        if (!this.isStopped) {
                            var n = void 0;
                            try {
                                n = this.selector(e, this.caught)
                            } catch (e) {
                                return void t.prototype.error.call(this, e)
                            }
                            this._unsubscribeAndRecycle();
                            var r = new B(this, void 0, void 0);
                            this.add(r), J(this, n, void 0, void 0, r)
                        }
                    }, e
                }(X),
                pu = function () {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new $l
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new hu(t, this.total))
                    }, t
                }(),
                hu = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(O);

            function du(t, e) {
                var n = arguments.length >= 2;
                return function (r) {
                    return r.pipe(t ? ql(function (e, n) {
                        return t(e, n, r)
                    }) : lt, function (t) {
                        return t.lift(new pu(1))
                    }, n ? nu(e) : tu(function () {
                        return new Ul
                    }))
                }
            }
            function gu(t, e) {
                return it(t, e, 1)
            }
            function mu(t, e) {
                var n = !1;
                return arguments.length >= 2 && (n = !0), function (r) {
                    return r.lift(new yu(t, e, n))
                }
            }
            var yu = function () {
                    function t(t, e, n) {
                        void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new vu(t, this.accumulator, this.seed, this.hasSeed))
                    }, t
                }(),
                vu = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "seed", {
                        get: function () {
                            return this._seed
                        },
                        set: function (t) {
                            this.hasSeed = !0, this._seed = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._next = function (t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }, e.prototype._tryNext = function (t) {
                        var e, n = this.index++;
                        try {
                            e = this.accumulator(this.seed, t, n)
                        } catch (t) {
                            this.destination.error(t)
                        }
                        this.seed = e, this.destination.next(e)
                    }, e
                }(O),
                _u = function () {},
                bu = new vt("Location Initialized"),
                wu = function () {},
                Cu = new vt("appBaseHref"),
                Su = function () {
                    function t(t) {
                        var n = this;
                        this._subject = new sn, this._platformStrategy = t;
                        var r = this._platformStrategy.getBaseHref();
                        this._baseHref = e.stripTrailingSlash(xu(r)), this._platformStrategy.onPopState(function (t) {
                            n._subject.emit({
                                url: n.path(!0),
                                pop: !0,
                                state: t.state,
                                type: t.type
                            })
                        })
                    }
                    var e;
                    return e = t, t.prototype.path = function (t) {
                        return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
                    }, t.prototype.isCurrentPathEqualTo = function (t, n) {
                        return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n))
                    }, t.prototype.normalize = function (t) {
                        return e.stripTrailingSlash(function (t, e) {
                            return t && e.startsWith(t) ? e.substring(t.length) : e
                        }(this._baseHref, xu(t)))
                    }, t.prototype.prepareExternalUrl = function (t) {
                        return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                    }, t.prototype.go = function (t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e)
                    }, t.prototype.replaceState = function (t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e)
                    }, t.prototype.forward = function () {
                        this._platformStrategy.forward()
                    }, t.prototype.back = function () {
                        this._platformStrategy.back()
                    }, t.prototype.subscribe = function (t, e, n) {
                        return this._subject.subscribe({
                            next: t,
                            error: e,
                            complete: n
                        })
                    }, t.normalizeQueryParams = function (t) {
                        return t && "?" !== t[0] ? "?" + t : t
                    }, t.joinWithSlash = function (t, e) {
                        if (0 == t.length) return e;
                        if (0 == e.length) return t;
                        var n = 0;
                        return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
                    }, t.stripTrailingSlash = function (t) {
                        var e = t.match(/#|\?|$/),
                            n = e && e.index || t.length;
                        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
                    }, t
                }();

            function xu(t) {
                return t.replace(/\/index.html$/, "")
            }
            var Eu = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
                    }
                    return o(e, t), e.prototype.onPopState = function (t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function () {
                        return this._baseHref
                    }, e.prototype.path = function (t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.hash;
                        return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    }, e.prototype.prepareExternalUrl = function (t) {
                        var e = Su.joinWithSlash(this._baseHref, t);
                        return e.length > 0 ? "#" + e : e
                    }, e.prototype.pushState = function (t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Su.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function (t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Su.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function () {
                        this._platformLocation.forward()
                    }, e.prototype.back = function () {
                        this._platformLocation.back()
                    }, a([s(1, Vt()), s(1, Ht(Cu))], e)
                }(wu),
                ku = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                        return r._baseHref = n, r
                    }
                    return o(e, t), e.prototype.onPopState = function (t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function () {
                        return this._baseHref
                    }, e.prototype.prepareExternalUrl = function (t) {
                        return Su.joinWithSlash(this._baseHref, t)
                    }, e.prototype.path = function (t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.pathname + Su.normalizeQueryParams(this._platformLocation.search),
                            n = this._platformLocation.hash;
                        return n && t ? "" + e + n : e
                    }, e.prototype.pushState = function (t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Su.normalizeQueryParams(r));
                        this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function (t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Su.normalizeQueryParams(r));
                        this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function () {
                        this._platformLocation.forward()
                    }, e.prototype.back = function () {
                        this._platformLocation.back()
                    }, a([s(1, Vt()), s(1, Ht(Cu))], e)
                }(wu),
                Pu = void 0,
                Ou = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], Pu],
                    [
                        ["AM", "PM"], Pu, Pu],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], Pu, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], Pu, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", Pu, "{1} 'at' {0}", Pu],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar",
                    {}, function (t) {
                        var e = Math.floor(Math.abs(t)),
                            n = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === e && 0 === n ? 1 : 5
                    }],
                Tu = {},
                Mu = function (t) {
                    return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
                }({}),
                Iu = function (t) {
                    return t[t.Format = 0] = "Format", t[t.Standalone = 1] = "Standalone", t
                }({}),
                Au = function (t) {
                    return t[t.Narrow = 0] = "Narrow", t[t.Abbreviated = 1] = "Abbreviated", t[t.Wide = 2] = "Wide", t[t.Short = 3] = "Short", t
                }({}),
                Nu = function (t) {
                    return t[t.Short = 0] = "Short", t[t.Medium = 1] = "Medium", t[t.Long = 2] = "Long", t[t.Full = 3] = "Full", t
                }({}),
                Du = function (t) {
                    return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t
                }({});

            function Ru(t, e) {
                return Vu(zu(t)[10], e)
            }
            function ju(t, e) {
                return Vu(zu(t)[11], e)
            }
            function Fu(t, e) {
                return Vu(zu(t)[12], e)
            }
            function Lu(t, e) {
                var n = zu(t),
                    r = n[13][e];
                if (void 0 === r) {
                    if (e === Du.CurrencyDecimal) return n[13][Du.Decimal];
                    if (e === Du.CurrencyGroup) return n[13][Du.Group]
                }
                return r
            }
            function Hu(t) {
                if (!t[19]) throw new Error('Missing extra locale data for the locale "' + t[0] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.')
            }
            function Vu(t, e) {
                for (var n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
                throw new Error("Locale data API: locale data undefined")
            }
            function Uu(t) {
                var e = c(t.split(":"), 2);
                return {
                    hours: +e[0],
                    minutes: +e[1]
                }
            }
            function zu(t) {
                var e = t.toLowerCase().replace(/_/g, "-"),
                    n = Tu[e];
                if (n) return n;
                var r = e.split("-")[0];
                if (n = Tu[r]) return n;
                if ("en" === r) return Ou;
                throw new Error('Missing locale data for the locale "' + t + '".')
            }
            var Bu = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
                qu = {},
                Ku = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
                Qu = function (t) {
                    return t[t.Short = 0] = "Short", t[t.ShortGMT = 1] = "ShortGMT", t[t.Long = 2] = "Long", t[t.Extended = 3] = "Extended", t
                }({}),
                Wu = function (t) {
                    return t[t.FullYear = 0] = "FullYear", t[t.Month = 1] = "Month", t[t.Date = 2] = "Date", t[t.Hours = 3] = "Hours", t[t.Minutes = 4] = "Minutes", t[t.Seconds = 5] = "Seconds", t[t.FractionalSeconds = 6] = "FractionalSeconds", t[t.Day = 7] = "Day", t
                }({}),
                $u = function (t) {
                    return t[t.DayPeriods = 0] = "DayPeriods", t[t.Days = 1] = "Days", t[t.Months = 2] = "Months", t[t.Eras = 3] = "Eras", t
                }({});

            function Gu(t, e) {
                return e && (t = t.replace(/\{([^}]+)}/g, function (t, n) {
                    return null != e && n in e ? e[n] : t
                })), t
            }
            function Zu(t, e, n, r, o) {
                void 0 === n && (n = "-");
                var i = "";
                (t < 0 || o && t <= 0) && (o ? t = 1 - t : (t = -t, i = n));
                for (var a = String(t); a.length < e;) a = "0" + a;
                return r && (a = a.substr(a.length - e)), i + a
            }
            function Yu(t, e, n, r, o) {
                return void 0 === n && (n = 0), void 0 === r && (r = !1), void 0 === o && (o = !1), function (i, a) {
                    var s, l = function (t, e) {
                        switch (t) {
                            case Wu.FullYear:
                                return e.getFullYear();
                            case Wu.Month:
                                return e.getMonth();
                            case Wu.Date:
                                return e.getDate();
                            case Wu.Hours:
                                return e.getHours();
                            case Wu.Minutes:
                                return e.getMinutes();
                            case Wu.Seconds:
                                return e.getSeconds();
                            case Wu.FractionalSeconds:
                                return e.getMilliseconds();
                            case Wu.Day:
                                return e.getDay();
                            default:
                                throw new Error('Unknown DateType value "' + t + '".')
                        }
                    }(t, i);
                    if ((n > 0 || l > -n) && (l += n), t === Wu.Hours) 0 === l && -12 === n && (l = 12);
                    else if (t === Wu.FractionalSeconds) return s = e, Zu(l, 3).substr(0, s);
                    var u = Lu(a, Du.MinusSign);
                    return Zu(l, e, u, r, o)
                }
            }
            function Ju(t, e, n, r) {
                return void 0 === n && (n = Iu.Format), void 0 === r && (r = !1), function (o, i) {
                    return function (t, e, n, r, o, i) {
                        switch (n) {
                            case $u.Months:
                                return function (t, e, n) {
                                    var r = zu(t);
                                    return Vu(Vu([r[5], r[6]], e), n)
                                }(e, o, r)[t.getMonth()];
                            case $u.Days:
                                return function (t, e, n) {
                                    var r = zu(t);
                                    return Vu(Vu([r[3], r[4]], e), n)
                                }(e, o, r)[t.getDay()];
                            case $u.DayPeriods:
                                var a = t.getHours(),
                                    s = t.getMinutes();
                                if (i) {
                                    var l, u = function (t) {
                                            var e = zu(t);
                                            return Hu(e), (e[19][2] || []).map(function (t) {
                                                return "string" == typeof t ? Uu(t) : [Uu(t[0]), Uu(t[1])]
                                            })
                                        }(e),
                                        c = function (t, e, n) {
                                            var r = zu(t);
                                            return Hu(r), Vu(Vu([r[19][0], r[19][1]], e) || [], n) || []
                                        }(e, o, r);
                                    if (u.forEach(function (t, e) {
                                        if (Array.isArray(t)) {
                                            var n = t[0],
                                                r = t[1],
                                                o = r.hours;
                                            a >= n.hours && s >= n.minutes && (a < o || a === o && s < r.minutes) && (l = c[e])
                                        } else t.hours === a && t.minutes === s && (l = c[e])
                                    }), l) return l
                                }
                                return function (t, e, n) {
                                    var r = zu(t);
                                    return Vu(Vu([r[1], r[2]], e), n)
                                }(e, o, r)[a < 12 ? 0 : 1];
                            case $u.Eras:
                                return function (t, e) {
                                    return Vu(zu(t)[7], e)
                                }(e, r)[t.getFullYear() <= 0 ? 0 : 1];
                            default:
                                throw new Error("unexpected translation type " + n)
                        }
                    }(o, i, t, e, n, r)
                }
            }
            function Xu(t) {
                return function (e, n, r) {
                    var o = -1 * r,
                        i = Lu(n, Du.MinusSign),
                        a = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
                    switch (t) {
                        case Qu.Short:
                            return (o >= 0 ? "+" : "") + Zu(a, 2, i) + Zu(Math.abs(o % 60), 2, i);
                        case Qu.ShortGMT:
                            return "GMT" + (o >= 0 ? "+" : "") + Zu(a, 1, i);
                        case Qu.Long:
                            return "GMT" + (o >= 0 ? "+" : "") + Zu(a, 2, i) + ":" + Zu(Math.abs(o % 60), 2, i);
                        case Qu.Extended:
                            return 0 === r ? "Z" : (o >= 0 ? "+" : "") + Zu(a, 2, i) + ":" + Zu(Math.abs(o % 60), 2, i);
                        default:
                            throw new Error('Unknown zone width "' + t + '"')
                    }
                }
            }
            var tc = 0,
                ec = 4;

            function nc(t, e) {
                return void 0 === e && (e = !1), function (n, r) {
                    var o, i, a, s;
                    if (e) {
                        var l = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                            u = n.getDate();
                        o = 1 + Math.floor((u + l) / 7)
                    } else {
                        var c = (a = n.getFullYear(), s = new Date(a, tc, 1).getDay(), new Date(a, 0, 1 + (s <= ec ? ec : ec + 7) - s)),
                            f = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (ec - i.getDay()))).getTime() - c.getTime();
                        o = 1 + Math.round(f / 6048e5)
                    }
                    return Zu(o, t, Lu(r, Du.MinusSign))
                }
            }
            var rc = {};

            function oc(t, e) {
                t = t.replace(/:/g, "");
                var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
                return isNaN(n) ? e : n
            }
            function ic(t) {
                return t instanceof Date && !isNaN(t.valueOf())
            }
            var ac = new vt("UseV4Plurals"),
                sc = function () {},
                lc = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.locale = e, r.deprecatedPluralFn = n, r
                    }
                    return o(e, t), e.prototype.getPluralCategory = function (t, e) {
                        switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function (t) {
                            return zu(t)[18]
                        }(e || this.locale)(t)) {
                            case Mu.Zero:
                                return "zero";
                            case Mu.One:
                                return "one";
                            case Mu.Two:
                                return "two";
                            case Mu.Few:
                                return "few";
                            case Mu.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }, a([s(0, Ht(gr)), s(1, Vt()), s(1, Ht(ac))], e)
                }(sc),
                uc = function () {
                    function t(t, e, n, r) {
                        this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._initialClasses = []
                    }
                    return Object.defineProperty(t.prototype, "klass", {
                        set: function (t) {
                            this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngClass", {
                        set: function (t) {
                            this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Yn(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngDoCheck = function () {
                        if (this._iterableDiffer) {
                            var t = this._iterableDiffer.diff(this._rawClass);
                            t && this._applyIterableChanges(t)
                        } else if (this._keyValueDiffer) {
                            var e = this._keyValueDiffer.diff(this._rawClass);
                            e && this._applyKeyValueChanges(e)
                        }
                    }, t.prototype._applyKeyValueChanges = function (t) {
                        var e = this;
                        t.forEachAddedItem(function (t) {
                            return e._toggleClass(t.key, t.currentValue)
                        }), t.forEachChangedItem(function (t) {
                            return e._toggleClass(t.key, t.currentValue)
                        }), t.forEachRemovedItem(function (t) {
                            t.previousValue && e._toggleClass(t.key, !1)
                        })
                    }, t.prototype._applyIterableChanges = function (t) {
                        var e = this;
                        t.forEachAddedItem(function (t) {
                            if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + jt(t.item));
                            e._toggleClass(t.item, !0)
                        }), t.forEachRemovedItem(function (t) {
                            return e._toggleClass(t.item, !1)
                        })
                    }, t.prototype._applyClasses = function (t) {
                        var e = this;
                        t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
                            return e._toggleClass(t, !0)
                        }) : Object.keys(t).forEach(function (n) {
                            return e._toggleClass(n, !! t[n])
                        }))
                    }, t.prototype._removeClasses = function (t) {
                        var e = this;
                        t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
                            return e._toggleClass(t, !1)
                        }) : Object.keys(t).forEach(function (t) {
                            return e._toggleClass(t, !1)
                        }))
                    }, t.prototype._toggleClass = function (t, e) {
                        var n = this;
                        (t = t.trim()) && t.split(/\s+/g).forEach(function (t) {
                            e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t)
                        })
                    }, t
                }(),
                cc = function () {
                    function t(t, e, n, r) {
                        this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
                    }
                    return Object.defineProperty(t.prototype, "first", {
                        get: function () {
                            return 0 === this.index
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "last", {
                        get: function () {
                            return this.index === this.count - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "even", {
                        get: function () {
                            return this.index % 2 == 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "odd", {
                        get: function () {
                            return !this.even
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                fc = function () {
                    function t(t, e, n) {
                        this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null
                    }
                    return Object.defineProperty(t.prototype, "ngForOf", {
                        set: function (t) {
                            this._ngForOf = t, this._ngForOfDirty = !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngForTrackBy", {
                        get: function () {
                            return this._trackByFn
                        },
                        set: function (t) {
                            Cn() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngForTemplate", {
                        set: function (t) {
                            t && (this._template = t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngDoCheck = function () {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            var t = this._ngForOf;
                            if (!this._differ && t) try {
                                this._differ = this._differs.find(t).create(this.ngForTrackBy)
                            } catch (n) {
                                throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'. NgFor only supports binding to Iterables such as Arrays.")
                            }
                        }
                        var e;
                        if (this._differ) {
                            var n = this._differ.diff(this._ngForOf);
                            n && this._applyChanges(n)
                        }
                    }, t.prototype._applyChanges = function (t) {
                        var e = this,
                            n = [];
                        t.forEachOperation(function (t, r, o) {
                            if (null == t.previousIndex) {
                                var i = e._viewContainer.createEmbeddedView(e._template, new cc(null, e._ngForOf, -1, -1), o),
                                    a = new pc(t, i);
                                n.push(a)
                            } else null == o ? e._viewContainer.remove(r) : (i = e._viewContainer.get(r), e._viewContainer.move(i, o), a = new pc(t, i), n.push(a))
                        });
                        for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                        r = 0;
                        for (var o = this._viewContainer.length; r < o; r++) {
                            var i = this._viewContainer.get(r);
                            i.context.index = r, i.context.count = o, i.context.ngForOf = this._ngForOf
                        }
                        t.forEachIdentityChange(function (t) {
                            e._viewContainer.get(t.currentIndex).context.$implicit = t.item
                        })
                    }, t.prototype._perViewChange = function (t, e) {
                        t.context.$implicit = e.item
                    }, t
                }(),
                pc = function (t, e) {
                    this.record = t, this.view = e
                },
                hc = function () {
                    function t(t, e) {
                        this._viewContainer = t, this._context = new dc, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                    }
                    return Object.defineProperty(t.prototype, "ngIf", {
                        set: function (t) {
                            this._context.$implicit = this._context.ngIf = t, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfThen", {
                        set: function (t) {
                            gc("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfElse", {
                        set: function (t) {
                            gc("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._updateView = function () {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }, t
                }(),
                dc = function () {
                    this.$implicit = null, this.ngIf = null
                };

            function gc(t, e) {
                if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + jt(e) + "'.")
            }
            var mc = function () {
                function t(t, e, n) {
                    this._differs = t, this._ngEl = e, this._renderer = n
                }
                return Object.defineProperty(t.prototype, "ngStyle", {
                    set: function (t) {
                        this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create())
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngDoCheck = function () {
                    if (this._differ) {
                        var t = this._differ.diff(this._ngStyle);
                        t && this._applyChanges(t)
                    }
                }, t.prototype._applyChanges = function (t) {
                    var e = this;
                    t.forEachRemovedItem(function (t) {
                        return e._setStyle(t.key, null)
                    }), t.forEachAddedItem(function (t) {
                        return e._setStyle(t.key, t.currentValue)
                    }), t.forEachChangedItem(function (t) {
                        return e._setStyle(t.key, t.currentValue)
                    })
                }, t.prototype._setStyle = function (t, e) {
                    var n = c(t.split("."), 2),
                        r = n[0],
                        o = n[1];
                    null != (e = null != e && o ? "" + e + o : e) ? this._renderer.setStyle(this._ngEl.nativeElement, r, e) : this._renderer.removeStyle(this._ngEl.nativeElement, r)
                }, t
            }();

            function yc(t, e) {
                return Error("InvalidPipeArgument: '" + e + "' for pipe '" + jt(t) + "'")
            }
            var vc = function () {
                    function t() {}
                    return t.prototype.createSubscription = function (t, e) {
                        return t.subscribe({
                            next: e,
                            error: function (t) {
                                throw t
                            }
                        })
                    }, t.prototype.dispose = function (t) {
                        t.unsubscribe()
                    }, t.prototype.onDestroy = function (t) {
                        t.unsubscribe()
                    }, t
                }(),
                _c = new(function () {
                    function t() {}
                    return t.prototype.createSubscription = function (t, e) {
                        return t.then(e, function (t) {
                            throw t
                        })
                    }, t.prototype.dispose = function (t) {}, t.prototype.onDestroy = function (t) {}, t
                }()),
                bc = new vc,
                wc = function () {
                    function t(t) {
                        this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null
                    }
                    var e;
                    return e = t, t.prototype.ngOnDestroy = function () {
                        this._subscription && this._dispose()
                    }, t.prototype.transform = function (t) {
                        return this._obj ? t !== this._obj ? (this._dispose(), this.transform(t)) : this._latestValue === this._latestReturnedValue ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, Gn.wrap(this._latestValue)) : (t && this._subscribe(t), this._latestReturnedValue = this._latestValue, this._latestValue)
                    }, t.prototype._subscribe = function (t) {
                        var e = this;
                        this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, function (n) {
                            return e._updateLatestValue(t, n)
                        })
                    }, t.prototype._selectStrategy = function (t) {
                        if (Ae(t)) return _c;
                        if (Ne(t)) return bc;
                        throw yc(e, t)
                    }, t.prototype._dispose = function () {
                        this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null
                    }, t.prototype._updateLatestValue = function (t, e) {
                        t === this._obj && (this._latestValue = e, this._ref.markForCheck())
                    }, t
                }(),
                Cc = function () {
                    function t(t) {
                        this.locale = t
                    }
                    var e;
                    return e = t, t.prototype.transform = function (t, n, r, o) {
                        if (void 0 === n && (n = "mediumDate"), null == t || "" === t || t != t) return null;
                        try {
                            return function (t, e, n, r) {
                                var o = function (t) {
                                    if (ic(t)) return t;
                                    if ("number" == typeof t && !isNaN(t)) return new Date(t);
                                    if ("string" == typeof t) {
                                        t = t.trim();
                                        var e, n = parseFloat(t);
                                        if (!isNaN(t - n)) return new Date(n);
                                        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                                            var r = c(t.split("-").map(function (t) {
                                                return +t
                                            }), 3);
                                            return new Date(r[0], r[1] - 1, r[2])
                                        }
                                        if (e = t.match(Bu)) return function (t) {
                                            var e = new Date(0),
                                                n = 0,
                                                r = 0,
                                                o = t[8] ? e.setUTCFullYear : e.setFullYear,
                                                i = t[8] ? e.setUTCHours : e.setHours;
                                            t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), o.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                                            var a = Number(t[4] || 0) - n,
                                                s = Number(t[5] || 0) - r,
                                                l = Number(t[6] || 0),
                                                u = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                                            return i.call(e, a, s, l, u), e
                                        }(e)
                                    }
                                    var o = new Date(t);
                                    if (!ic(o)) throw new Error('Unable to convert "' + t + '" into a date');
                                    return o
                                }(t);
                                e = function t(e, n) {
                                    var r = function (t) {
                                        return zu(t)[0]
                                    }(e);
                                    if (qu[r] = qu[r] || {}, qu[r][n]) return qu[r][n];
                                    var o = "";
                                    switch (n) {
                                        case "shortDate":
                                            o = Ru(e, Nu.Short);
                                            break;
                                        case "mediumDate":
                                            o = Ru(e, Nu.Medium);
                                            break;
                                        case "longDate":
                                            o = Ru(e, Nu.Long);
                                            break;
                                        case "fullDate":
                                            o = Ru(e, Nu.Full);
                                            break;
                                        case "shortTime":
                                            o = ju(e, Nu.Short);
                                            break;
                                        case "mediumTime":
                                            o = ju(e, Nu.Medium);
                                            break;
                                        case "longTime":
                                            o = ju(e, Nu.Long);
                                            break;
                                        case "fullTime":
                                            o = ju(e, Nu.Full);
                                            break;
                                        case "short":
                                            var i = t(e, "shortTime"),
                                                a = t(e, "shortDate");
                                            o = Gu(Fu(e, Nu.Short), [i, a]);
                                            break;
                                        case "medium":
                                            var s = t(e, "mediumTime"),
                                                l = t(e, "mediumDate");
                                            o = Gu(Fu(e, Nu.Medium), [s, l]);
                                            break;
                                        case "long":
                                            var u = t(e, "longTime"),
                                                c = t(e, "longDate");
                                            o = Gu(Fu(e, Nu.Long), [u, c]);
                                            break;
                                        case "full":
                                            var f = t(e, "fullTime"),
                                                p = t(e, "fullDate");
                                            o = Gu(Fu(e, Nu.Full), [f, p])
                                    }
                                    return o && (qu[r][n] = o), o
                                }(n, e) || e;
                                for (var i, a = []; e;) {
                                    if (!(i = Ku.exec(e))) {
                                        a.push(e);
                                        break
                                    }
                                    var s = (a = a.concat(i.slice(1))).pop();
                                    if (!s) break;
                                    e = s
                                }
                                var l = o.getTimezoneOffset();
                                r && (l = oc(r, l), o = function (t, e, n) {
                                    var r = t.getTimezoneOffset();
                                    return function (t, e) {
                                        return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                                    }(t, -1 * (oc(e, r) - r))
                                }(o, r));
                                var u = "";
                                return a.forEach(function (t) {
                                    var e = function (t) {
                                        if (rc[t]) return rc[t];
                                        var e;
                                        switch (t) {
                                            case "G":
                                            case "GG":
                                            case "GGG":
                                                e = Ju($u.Eras, Au.Abbreviated);
                                                break;
                                            case "GGGG":
                                                e = Ju($u.Eras, Au.Wide);
                                                break;
                                            case "GGGGG":
                                                e = Ju($u.Eras, Au.Narrow);
                                                break;
                                            case "y":
                                                e = Yu(Wu.FullYear, 1, 0, !1, !0);
                                                break;
                                            case "yy":
                                                e = Yu(Wu.FullYear, 2, 0, !0, !0);
                                                break;
                                            case "yyy":
                                                e = Yu(Wu.FullYear, 3, 0, !1, !0);
                                                break;
                                            case "yyyy":
                                                e = Yu(Wu.FullYear, 4, 0, !1, !0);
                                                break;
                                            case "M":
                                            case "L":
                                                e = Yu(Wu.Month, 1, 1);
                                                break;
                                            case "MM":
                                            case "LL":
                                                e = Yu(Wu.Month, 2, 1);
                                                break;
                                            case "MMM":
                                                e = Ju($u.Months, Au.Abbreviated);
                                                break;
                                            case "MMMM":
                                                e = Ju($u.Months, Au.Wide);
                                                break;
                                            case "MMMMM":
                                                e = Ju($u.Months, Au.Narrow);
                                                break;
                                            case "LLL":
                                                e = Ju($u.Months, Au.Abbreviated, Iu.Standalone);
                                                break;
                                            case "LLLL":
                                                e = Ju($u.Months, Au.Wide, Iu.Standalone);
                                                break;
                                            case "LLLLL":
                                                e = Ju($u.Months, Au.Narrow, Iu.Standalone);
                                                break;
                                            case "w":
                                                e = nc(1);
                                                break;
                                            case "ww":
                                                e = nc(2);
                                                break;
                                            case "W":
                                                e = nc(1, !0);
                                                break;
                                            case "d":
                                                e = Yu(Wu.Date, 1);
                                                break;
                                            case "dd":
                                                e = Yu(Wu.Date, 2);
                                                break;
                                            case "E":
                                            case "EE":
                                            case "EEE":
                                                e = Ju($u.Days, Au.Abbreviated);
                                                break;
                                            case "EEEE":
                                                e = Ju($u.Days, Au.Wide);
                                                break;
                                            case "EEEEE":
                                                e = Ju($u.Days, Au.Narrow);
                                                break;
                                            case "EEEEEE":
                                                e = Ju($u.Days, Au.Short);
                                                break;
                                            case "a":
                                            case "aa":
                                            case "aaa":
                                                e = Ju($u.DayPeriods, Au.Abbreviated);
                                                break;
                                            case "aaaa":
                                                e = Ju($u.DayPeriods, Au.Wide);
                                                break;
                                            case "aaaaa":
                                                e = Ju($u.DayPeriods, Au.Narrow);
                                                break;
                                            case "b":
                                            case "bb":
                                            case "bbb":
                                                e = Ju($u.DayPeriods, Au.Abbreviated, Iu.Standalone, !0);
                                                break;
                                            case "bbbb":
                                                e = Ju($u.DayPeriods, Au.Wide, Iu.Standalone, !0);
                                                break;
                                            case "bbbbb":
                                                e = Ju($u.DayPeriods, Au.Narrow, Iu.Standalone, !0);
                                                break;
                                            case "B":
                                            case "BB":
                                            case "BBB":
                                                e = Ju($u.DayPeriods, Au.Abbreviated, Iu.Format, !0);
                                                break;
                                            case "BBBB":
                                                e = Ju($u.DayPeriods, Au.Wide, Iu.Format, !0);
                                                break;
                                            case "BBBBB":
                                                e = Ju($u.DayPeriods, Au.Narrow, Iu.Format, !0);
                                                break;
                                            case "h":
                                                e = Yu(Wu.Hours, 1, -12);
                                                break;
                                            case "hh":
                                                e = Yu(Wu.Hours, 2, -12);
                                                break;
                                            case "H":
                                                e = Yu(Wu.Hours, 1);
                                                break;
                                            case "HH":
                                                e = Yu(Wu.Hours, 2);
                                                break;
                                            case "m":
                                                e = Yu(Wu.Minutes, 1);
                                                break;
                                            case "mm":
                                                e = Yu(Wu.Minutes, 2);
                                                break;
                                            case "s":
                                                e = Yu(Wu.Seconds, 1);
                                                break;
                                            case "ss":
                                                e = Yu(Wu.Seconds, 2);
                                                break;
                                            case "S":
                                                e = Yu(Wu.FractionalSeconds, 1);
                                                break;
                                            case "SS":
                                                e = Yu(Wu.FractionalSeconds, 2);
                                                break;
                                            case "SSS":
                                                e = Yu(Wu.FractionalSeconds, 3);
                                                break;
                                            case "Z":
                                            case "ZZ":
                                            case "ZZZ":
                                                e = Xu(Qu.Short);
                                                break;
                                            case "ZZZZZ":
                                                e = Xu(Qu.Extended);
                                                break;
                                            case "O":
                                            case "OO":
                                            case "OOO":
                                            case "z":
                                            case "zz":
                                            case "zzz":
                                                e = Xu(Qu.ShortGMT);
                                                break;
                                            case "OOOO":
                                            case "ZZZZ":
                                            case "zzzz":
                                                e = Xu(Qu.Long);
                                                break;
                                            default:
                                                return null
                                        }
                                        return rc[t] = e, e
                                    }(t);
                                    u += e ? e(o, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                                }), u
                            }(t, n, o || this.locale, r)
                        } catch (t) {
                            throw yc(e, t.message)
                        }
                    }, e = a([s(0, Ht(gr))], t)
                }(),
                Sc = function () {},
                xc = new vt("DocumentToken"),
                Ec = "server",
                kc = function () {
                    function t() {}
                    return t.ngInjectableDef = yt({
                        providedIn: "root",
                        factory: function () {
                            return new Pc(ce(xc), window)
                        }
                    }), t
                }(),
                Pc = function () {
                    function t(t, e) {
                        this.document = t, this.window = e, this.offset = function () {
                            return [0, 0]
                        }
                    }
                    return t.prototype.setOffset = function (t) {
                        this.offset = Array.isArray(t) ?
                            function () {
                                return t
                            } : t
                    }, t.prototype.getScrollPosition = function () {
                        return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                    }, t.prototype.scrollToPosition = function (t) {
                        this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
                    }, t.prototype.scrollToAnchor = function (t) {
                        if (this.supportScrollRestoration()) {
                            var e = this.document.querySelector("#" + t);
                            if (e) return void this.scrollToElement(e);
                            var n = this.document.querySelector("[name='" + t + "']");
                            if (n) return void this.scrollToElement(n)
                        }
                    }, t.prototype.setHistoryScrollRestoration = function (t) {
                        if (this.supportScrollRestoration()) {
                            var e = this.window.history;
                            e && e.scrollRestoration && (e.scrollRestoration = t)
                        }
                    }, t.prototype.scrollToElement = function (t) {
                        var e = t.getBoundingClientRect(),
                            n = e.left + this.window.pageXOffset,
                            r = e.top + this.window.pageYOffset,
                            o = this.offset();
                        this.window.scrollTo(n - o[0], r - o[1])
                    }, t.prototype.supportScrollRestoration = function () {
                        try {
                            return !!this.window && !! this.window.scrollTo
                        } catch (t) {
                            return !1
                        }
                    }, t
                }(),
                Oc = null;

            function Tc() {
                return Oc
            }
            var Mc, Ic = {
                    class: "className",
                    innerHtml: "innerHTML",
                    readonly: "readOnly",
                    tabindex: "tabIndex"
                },
                Ac = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                Nc = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                };
            Mt.Node && (Mc = Mt.Node.prototype.contains ||
                function (t) {
                    return !!(16 & this.compareDocumentPosition(t))
                });
            var Dc, Rc = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.parse = function (t) {
                        throw new Error("parse not implemented")
                    }, e.makeCurrent = function () {
                        var t;
                        t = new e, Oc || (Oc = t)
                    }, e.prototype.hasProperty = function (t, e) {
                        return e in t
                    }, e.prototype.setProperty = function (t, e, n) {
                        t[e] = n
                    }, e.prototype.getProperty = function (t, e) {
                        return t[e]
                    }, e.prototype.invoke = function (t, e, n) {
                        var r;
                        (r = t)[e].apply(r, f(n))
                    }, e.prototype.logError = function (t) {
                        window.console && (console.error ? console.error(t) : console.log(t))
                    }, e.prototype.log = function (t) {
                        window.console && window.console.log && window.console.log(t)
                    }, e.prototype.logGroup = function (t) {
                        window.console && window.console.group && window.console.group(t)
                    }, e.prototype.logGroupEnd = function () {
                        window.console && window.console.groupEnd && window.console.groupEnd()
                    }, Object.defineProperty(e.prototype, "attrToPropMap", {
                        get: function () {
                            return Ic
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.contains = function (t, e) {
                        return Mc.call(t, e)
                    }, e.prototype.querySelector = function (t, e) {
                        return t.querySelector(e)
                    }, e.prototype.querySelectorAll = function (t, e) {
                        return t.querySelectorAll(e)
                    }, e.prototype.on = function (t, e, n) {
                        t.addEventListener(e, n, !1)
                    }, e.prototype.onAndCancel = function (t, e, n) {
                        return t.addEventListener(e, n, !1), function () {
                            t.removeEventListener(e, n, !1)
                        }
                    }, e.prototype.dispatchEvent = function (t, e) {
                        t.dispatchEvent(e)
                    }, e.prototype.createMouseEvent = function (t) {
                        var e = this.getDefaultDocument().createEvent("MouseEvent");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.createEvent = function (t) {
                        var e = this.getDefaultDocument().createEvent("Event");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.preventDefault = function (t) {
                        t.preventDefault(), t.returnValue = !1
                    }, e.prototype.isPrevented = function (t) {
                        return t.defaultPrevented || null != t.returnValue && !t.returnValue
                    }, e.prototype.getInnerHTML = function (t) {
                        return t.innerHTML
                    }, e.prototype.getTemplateContent = function (t) {
                        return "content" in t && this.isTemplateElement(t) ? t.content : null
                    }, e.prototype.getOuterHTML = function (t) {
                        return t.outerHTML
                    }, e.prototype.nodeName = function (t) {
                        return t.nodeName
                    }, e.prototype.nodeValue = function (t) {
                        return t.nodeValue
                    }, e.prototype.type = function (t) {
                        return t.type
                    }, e.prototype.content = function (t) {
                        return this.hasProperty(t, "content") ? t.content : t
                    }, e.prototype.firstChild = function (t) {
                        return t.firstChild
                    }, e.prototype.nextSibling = function (t) {
                        return t.nextSibling
                    }, e.prototype.parentElement = function (t) {
                        return t.parentNode
                    }, e.prototype.childNodes = function (t) {
                        return t.childNodes
                    }, e.prototype.childNodesAsList = function (t) {
                        for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                        return n
                    }, e.prototype.clearNodes = function (t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }, e.prototype.appendChild = function (t, e) {
                        t.appendChild(e)
                    }, e.prototype.removeChild = function (t, e) {
                        t.removeChild(e)
                    }, e.prototype.replaceChild = function (t, e, n) {
                        t.replaceChild(e, n)
                    }, e.prototype.remove = function (t) {
                        return t.parentNode && t.parentNode.removeChild(t), t
                    }, e.prototype.insertBefore = function (t, e, n) {
                        t.insertBefore(n, e)
                    }, e.prototype.insertAllBefore = function (t, e, n) {
                        n.forEach(function (n) {
                            return t.insertBefore(n, e)
                        })
                    }, e.prototype.insertAfter = function (t, e, n) {
                        t.insertBefore(n, e.nextSibling)
                    }, e.prototype.setInnerHTML = function (t, e) {
                        t.innerHTML = e
                    }, e.prototype.getText = function (t) {
                        return t.textContent
                    }, e.prototype.setText = function (t, e) {
                        t.textContent = e
                    }, e.prototype.getValue = function (t) {
                        return t.value
                    }, e.prototype.setValue = function (t, e) {
                        t.value = e
                    }, e.prototype.getChecked = function (t) {
                        return t.checked
                    }, e.prototype.setChecked = function (t, e) {
                        t.checked = e
                    }, e.prototype.createComment = function (t) {
                        return this.getDefaultDocument().createComment(t)
                    }, e.prototype.createTemplate = function (t) {
                        var e = this.getDefaultDocument().createElement("template");
                        return e.innerHTML = t, e
                    }, e.prototype.createElement = function (t, e) {
                        return (e = e || this.getDefaultDocument()).createElement(t)
                    }, e.prototype.createElementNS = function (t, e, n) {
                        return (n = n || this.getDefaultDocument()).createElementNS(t, e)
                    }, e.prototype.createTextNode = function (t, e) {
                        return (e = e || this.getDefaultDocument()).createTextNode(t)
                    }, e.prototype.createScriptTag = function (t, e, n) {
                        var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                        return r.setAttribute(t, e), r
                    }, e.prototype.createStyleElement = function (t, e) {
                        var n = (e = e || this.getDefaultDocument()).createElement("style");
                        return this.appendChild(n, this.createTextNode(t, e)), n
                    }, e.prototype.createShadowRoot = function (t) {
                        return t.createShadowRoot()
                    }, e.prototype.getShadowRoot = function (t) {
                        return t.shadowRoot
                    }, e.prototype.getHost = function (t) {
                        return t.host
                    }, e.prototype.clone = function (t) {
                        return t.cloneNode(!0)
                    }, e.prototype.getElementsByClassName = function (t, e) {
                        return t.getElementsByClassName(e)
                    }, e.prototype.getElementsByTagName = function (t, e) {
                        return t.getElementsByTagName(e)
                    }, e.prototype.classList = function (t) {
                        return Array.prototype.slice.call(t.classList, 0)
                    }, e.prototype.addClass = function (t, e) {
                        t.classList.add(e)
                    }, e.prototype.removeClass = function (t, e) {
                        t.classList.remove(e)
                    }, e.prototype.hasClass = function (t, e) {
                        return t.classList.contains(e)
                    }, e.prototype.setStyle = function (t, e, n) {
                        t.style[e] = n
                    }, e.prototype.removeStyle = function (t, e) {
                        t.style[e] = ""
                    }, e.prototype.getStyle = function (t, e) {
                        return t.style[e]
                    }, e.prototype.hasStyle = function (t, e, n) {
                        var r = this.getStyle(t, e) || "";
                        return n ? r == n : r.length > 0
                    }, e.prototype.tagName = function (t) {
                        return t.tagName
                    }, e.prototype.attributeMap = function (t) {
                        for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
                            var o = n.item(r);
                            e.set(o.name, o.value)
                        }
                        return e
                    }, e.prototype.hasAttribute = function (t, e) {
                        return t.hasAttribute(e)
                    }, e.prototype.hasAttributeNS = function (t, e, n) {
                        return t.hasAttributeNS(e, n)
                    }, e.prototype.getAttribute = function (t, e) {
                        return t.getAttribute(e)
                    }, e.prototype.getAttributeNS = function (t, e, n) {
                        return t.getAttributeNS(e, n)
                    }, e.prototype.setAttribute = function (t, e, n) {
                        t.setAttribute(e, n)
                    }, e.prototype.setAttributeNS = function (t, e, n, r) {
                        t.setAttributeNS(e, n, r)
                    }, e.prototype.removeAttribute = function (t, e) {
                        t.removeAttribute(e)
                    }, e.prototype.removeAttributeNS = function (t, e, n) {
                        t.removeAttributeNS(e, n)
                    }, e.prototype.templateAwareRoot = function (t) {
                        return this.isTemplateElement(t) ? this.content(t) : t
                    }, e.prototype.createHtmlDocument = function () {
                        return document.implementation.createHTMLDocument("fakeTitle")
                    }, e.prototype.getDefaultDocument = function () {
                        return document
                    }, e.prototype.getBoundingClientRect = function (t) {
                        try {
                            return t.getBoundingClientRect()
                        } catch (t) {
                            return {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }, e.prototype.getTitle = function (t) {
                        return t.title
                    }, e.prototype.setTitle = function (t, e) {
                        t.title = e || ""
                    }, e.prototype.elementMatches = function (t, e) {
                        return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
                    }, e.prototype.isTemplateElement = function (t) {
                        return this.isElementNode(t) && "TEMPLATE" === t.nodeName
                    }, e.prototype.isTextNode = function (t) {
                        return t.nodeType === Node.TEXT_NODE
                    }, e.prototype.isCommentNode = function (t) {
                        return t.nodeType === Node.COMMENT_NODE
                    }, e.prototype.isElementNode = function (t) {
                        return t.nodeType === Node.ELEMENT_NODE
                    }, e.prototype.hasShadowRoot = function (t) {
                        return null != t.shadowRoot && t instanceof HTMLElement
                    }, e.prototype.isShadowRoot = function (t) {
                        return t instanceof DocumentFragment
                    }, e.prototype.importIntoDoc = function (t) {
                        return document.importNode(this.templateAwareRoot(t), !0)
                    }, e.prototype.adoptNode = function (t) {
                        return document.adoptNode(t)
                    }, e.prototype.getHref = function (t) {
                        return t.getAttribute("href")
                    }, e.prototype.getEventKey = function (t) {
                        var e = t.key;
                        if (null == e) {
                            if (null == (e = t.keyIdentifier)) return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Nc.hasOwnProperty(e) && (e = Nc[e]))
                        }
                        return Ac[e] || e
                    }, e.prototype.getGlobalEventTarget = function (t, e) {
                        return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
                    }, e.prototype.getHistory = function () {
                        return window.history
                    }, e.prototype.getLocation = function () {
                        return window.location
                    }, e.prototype.getBaseHref = function (t) {
                        var e, n = jc || (jc = document.querySelector("base")) ? jc.getAttribute("href") : null;
                        return null == n ? null : (e = n, Dc || (Dc = document.createElement("a")), Dc.setAttribute("href", e), "/" === Dc.pathname.charAt(0) ? Dc.pathname : "/" + Dc.pathname)
                    }, e.prototype.resetBaseElement = function () {
                        jc = null
                    }, e.prototype.getUserAgent = function () {
                        return window.navigator.userAgent
                    }, e.prototype.setData = function (t, e, n) {
                        this.setAttribute(t, "data-" + e, n)
                    }, e.prototype.getData = function (t, e) {
                        return this.getAttribute(t, "data-" + e)
                    }, e.prototype.getComputedStyle = function (t) {
                        return getComputedStyle(t)
                    }, e.prototype.supportsWebAnimation = function () {
                        return "function" == typeof Element.prototype.animate
                    }, e.prototype.performanceNow = function () {
                        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                    }, e.prototype.supportsCookies = function () {
                        return !0
                    }, e.prototype.getCookie = function (t) {
                        return function (t, e) {
                            var n, r;
                            e = encodeURIComponent(e);
                            try {
                                for (var o = u(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                                    var a = i.value,
                                        s = a.indexOf("="),
                                        l = c(-1 == s ? [a, ""] : [a.slice(0, s), a.slice(s + 1)], 2),
                                        f = l[1];
                                    if (l[0].trim() === e) return decodeURIComponent(f)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = o.
                                        return) && r.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            return null
                        }(document.cookie, t)
                    }, e.prototype.setCookie = function (t, e) {
                        document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    }, e
                }(function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        e._animationPrefix = null, e._transitionEnd = null;
                        try {
                            var n = e.createElement("div", document);
                            if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                            else for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++) if (null != e.getStyle(n, r[o] + "AnimationName")) {
                                e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                                break
                            }
                            var i = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                            Object.keys(i).forEach(function (t) {
                                null != e.getStyle(n, t) && (e._transitionEnd = i[t])
                            })
                        } catch (t) {
                            e._animationPrefix = null, e._transitionEnd = null
                        }
                        return e
                    }
                    return o(e, t), e.prototype.getDistributedNodes = function (t) {
                        return t.getDistributedNodes()
                    }, e.prototype.resolveAndSetHref = function (t, e, n) {
                        t.href = null == n ? e : e + "/../" + n
                    }, e.prototype.supportsDOMEvents = function () {
                        return !0
                    }, e.prototype.supportsNativeShadowDOM = function () {
                        return "function" == typeof document.body.createShadowRoot
                    }, e.prototype.getAnimationPrefix = function () {
                        return this._animationPrefix ? this._animationPrefix : ""
                    }, e.prototype.getTransitionEnd = function () {
                        return this._transitionEnd ? this._transitionEnd : ""
                    }, e.prototype.supportsAnimation = function () {
                        return null != this._animationPrefix && null != this._transitionEnd
                    }, e
                }(function () {
                    function t() {
                        this.resourceLoaderType = null
                    }
                    return Object.defineProperty(t.prototype, "attrToPropMap", {
                        get: function () {
                            return this._attrToPropMap
                        },
                        set: function (t) {
                            this._attrToPropMap = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }())),
                jc = null,
                Fc = xc;

            function Lc() {
                return !!window.history.pushState
            }
            var Hc = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._init(), n
                    }
                    return o(e, t), e.prototype._init = function () {
                        this.location = Tc().getLocation(), this._history = Tc().getHistory()
                    }, e.prototype.getBaseHrefFromDOM = function () {
                        return Tc().getBaseHref(this._doc)
                    }, e.prototype.onPopState = function (t) {
                        Tc().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                    }, e.prototype.onHashChange = function (t) {
                        Tc().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                    }, Object.defineProperty(e.prototype, "pathname", {
                        get: function () {
                            return this.location.pathname
                        },
                        set: function (t) {
                            this.location.pathname = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "search", {
                        get: function () {
                            return this.location.search
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hash", {
                        get: function () {
                            return this.location.hash
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.pushState = function (t, e, n) {
                        Lc() ? this._history.pushState(t, e, n) : this.location.hash = n
                    }, e.prototype.replaceState = function (t, e, n) {
                        Lc() ? this._history.replaceState(t, e, n) : this.location.hash = n
                    }, e.prototype.forward = function () {
                        this._history.forward()
                    }, e.prototype.back = function () {
                        this._history.back()
                    }, a([s(0, Ht(Fc)), l("design:paramtypes", [Object])], e)
                }(_u),
                Vc = new vt("TRANSITION_ID");

            function Uc(t, e, n) {
                return function () {
                    n.get(Re).donePromise.then(function () {
                        var n = Tc();
                        Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function (e) {
                            return n.getAttribute(e, "ng-transition") === t
                        }).forEach(function (t) {
                            return n.remove(t)
                        })
                    })
                }
            }
            var zc = [{
                    provide: De,
                    useFactory: Uc,
                    deps: [Vc, Fc, $t],
                    multi: !0
                }],
                Bc = function () {
                    function t() {}
                    return t.init = function () {
                        var e;
                        e = new t, vn = e
                    }, t.prototype.addToWindow = function (t) {
                        Mt.getAngularTestability = function (e, n) {
                            void 0 === n && (n = !0);
                            var r = t.findTestabilityInTree(e, n);
                            if (null == r) throw new Error("Could not find testability for element.");
                            return r
                        }, Mt.getAllAngularTestabilities = function () {
                            return t.getAllTestabilities()
                        }, Mt.getAllAngularRootElements = function () {
                            return t.getAllRootElements()
                        }, Mt.frameworkStabilizers || (Mt.frameworkStabilizers = []), Mt.frameworkStabilizers.push(function (t) {
                            var e = Mt.getAllAngularTestabilities(),
                                n = e.length,
                                r = !1,
                                o = function (e) {
                                    r = r || e, 0 == --n && t(r)
                                };
                            e.forEach(function (t) {
                                t.whenStable(o)
                            })
                        })
                    }, t.prototype.findTestabilityInTree = function (t, e, n) {
                        if (null == e) return null;
                        var r = t.getTestability(e);
                        return null != r ? r : n ? Tc().isShadowRoot(e) ? this.findTestabilityInTree(t, Tc().getHost(e), !0) : this.findTestabilityInTree(t, Tc().parentElement(e), !0) : null
                    }, t
                }();

            function qc(t, e) {
                "undefined" != typeof COMPILED && COMPILED || ((Mt.ng = Mt.ng || {})[t] = e)
            }
            var Kc = {
                ApplicationRef: On,
                NgZone: ln
            };

            function Qc(t) {
                return Qn(t)
            }
            var Wc = new vt("EventManagerPlugins"),
                $c = function () {
                    function t(t, e) {
                        var n = this;
                        this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function (t) {
                            return t.manager = n
                        }), this._plugins = t.slice().reverse()
                    }
                    return t.prototype.addEventListener = function (t, e, n) {
                        return this._findPluginFor(e).addEventListener(t, e, n)
                    }, t.prototype.addGlobalEventListener = function (t, e, n) {
                        return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                    }, t.prototype.getZone = function () {
                        return this._zone
                    }, t.prototype._findPluginFor = function (t) {
                        var e = this._eventNameToPlugin.get(t);
                        if (e) return e;
                        for (var n = this._plugins, r = 0; r < n.length; r++) {
                            var o = n[r];
                            if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o
                        }
                        throw new Error("No event manager plugin found for event " + t)
                    }, a([s(0, Ht(Wc))], t)
                }(),
                Gc = function () {
                    function t(t) {
                        this._doc = t
                    }
                    return t.prototype.addGlobalEventListener = function (t, e, n) {
                        var r = Tc().getGlobalEventTarget(this._doc, t);
                        if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                        return this.addEventListener(r, e, n)
                    }, t
                }(),
                Zc = function () {
                    function t() {
                        this._stylesSet = new Set
                    }
                    return t.prototype.addStyles = function (t) {
                        var e = this,
                            n = new Set;
                        t.forEach(function (t) {
                            e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
                        }), this.onStylesAdded(n)
                    }, t.prototype.onStylesAdded = function (t) {}, t.prototype.getAllStyles = function () {
                        return Array.from(this._stylesSet)
                    }, t
                }(),
                Yc = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
                    }
                    return o(e, t), e.prototype._addStylesToHost = function (t, e) {
                        var n = this;
                        t.forEach(function (t) {
                            var r = n._doc.createElement("style");
                            r.textContent = t, n._styleNodes.add(e.appendChild(r))
                        })
                    }, e.prototype.addHost = function (t) {
                        this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
                    }, e.prototype.removeHost = function (t) {
                        this._hostNodes.delete(t)
                    }, e.prototype.onStylesAdded = function (t) {
                        var e = this;
                        this._hostNodes.forEach(function (n) {
                            return e._addStylesToHost(t, n)
                        })
                    }, e.prototype.ngOnDestroy = function () {
                        this._styleNodes.forEach(function (t) {
                            return Tc().remove(t)
                        })
                    }, a([s(0, Ht(Fc))], e)
                }(Zc),
                Jc = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                Xc = /%COMP%/g,
                tf = "_nghost-%COMP%",
                ef = "_ngcontent-%COMP%";

            function nf(t, e, n) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    Array.isArray(o) ? nf(t, o, n) : (o = o.replace(Xc, t), n.push(o))
                }
                return n
            }
            function rf(t) {
                return function (e) {
                    !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
                }
            }
            var of = function () {
                    function t(t, e) {
                        this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new af(t)
                    }
                    return t.prototype.createRenderer = function (t, e) {
                        if (!t || !e) return this.defaultRenderer;
                        switch (e.encapsulation) {
                            case pe.Emulated:
                                var n = this.rendererByCompId.get(e.id);
                                return n || (n = new cf(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                            case pe.Native:
                            case pe.ShadowDom:
                                return new ff(this.eventManager, this.sharedStylesHost, t, e);
                            default:
                                if (!this.rendererByCompId.has(e.id)) {
                                    var r = nf(e.id, e.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }, t.prototype.begin = function () {}, t.prototype.end = function () {}, t
                }(),
                af = function () {
                    function t(t) {
                        this.eventManager = t, this.data = Object.create(null)
                    }
                    return t.prototype.destroy = function () {}, t.prototype.createElement = function (t, e) {
                        return e ? document.createElementNS(Jc[e], t) : document.createElement(t)
                    }, t.prototype.createComment = function (t) {
                        return document.createComment(t)
                    }, t.prototype.createText = function (t) {
                        return document.createTextNode(t)
                    }, t.prototype.appendChild = function (t, e) {
                        t.appendChild(e)
                    }, t.prototype.insertBefore = function (t, e, n) {
                        t && t.insertBefore(e, n)
                    }, t.prototype.removeChild = function (t, e) {
                        t && t.removeChild(e)
                    }, t.prototype.selectRootElement = function (t) {
                        var e = "string" == typeof t ? document.querySelector(t) : t;
                        if (!e) throw new Error('The selector "' + t + '" did not match any elements');
                        return e.textContent = "", e
                    }, t.prototype.parentNode = function (t) {
                        return t.parentNode
                    }, t.prototype.nextSibling = function (t) {
                        return t.nextSibling
                    }, t.prototype.setAttribute = function (t, e, n, r) {
                        if (r) {
                            e = r + ":" + e;
                            var o = Jc[r];
                            o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
                        } else t.setAttribute(e, n)
                    }, t.prototype.removeAttribute = function (t, e, n) {
                        if (n) {
                            var r = Jc[n];
                            r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
                        } else t.removeAttribute(e)
                    }, t.prototype.addClass = function (t, e) {
                        t.classList.add(e)
                    }, t.prototype.removeClass = function (t, e) {
                        t.classList.remove(e)
                    }, t.prototype.setStyle = function (t, e, n, r) {
                        r & In.DashCase ? t.style.setProperty(e, n, r & In.Important ? "important" : "") : t.style[e] = n
                    }, t.prototype.removeStyle = function (t, e, n) {
                        n & In.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
                    }, t.prototype.setProperty = function (t, e, n) {
                        lf(e, "property"), t[e] = n
                    }, t.prototype.setValue = function (t, e) {
                        t.nodeValue = e
                    }, t.prototype.listen = function (t, e, n) {
                        return lf(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, rf(n)) : this.eventManager.addEventListener(t, e, rf(n))
                    }, t
                }(),
                sf = "@".charCodeAt(0);

            function lf(t, e) {
                if (t.charCodeAt(0) === sf) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
            }
            var uf, cf = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        o.component = r;
                        var i = nf(r.id, r.styles, []);
                        return n.addStyles(i), o.contentAttr = ef.replace(Xc, r.id), o.hostAttr = tf.replace(Xc, r.id), o
                    }
                    return o(e, t), e.prototype.applyToHost = function (e) {
                        t.prototype.setAttribute.call(this, e, this.hostAttr, "")
                    }, e.prototype.createElement = function (e, n) {
                        var r = t.prototype.createElement.call(this, e, n);
                        return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                    }, e
                }(af),
                ff = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === pe.ShadowDom ? r.attachShadow({
                            mode: "open"
                        }) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                        for (var a = nf(o.id, o.styles, []), s = 0; s < a.length; s++) {
                            var l = document.createElement("style");
                            l.textContent = a[s], i.shadowRoot.appendChild(l)
                        }
                        return i
                    }
                    return o(e, t), e.prototype.nodeOrShadowRoot = function (t) {
                        return t === this.hostEl ? this.shadowRoot : t
                    }, e.prototype.destroy = function () {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }, e.prototype.appendChild = function (e, n) {
                        return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.insertBefore = function (e, n, r) {
                        return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
                    }, e.prototype.removeChild = function (e, n) {
                        return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.parentNode = function (e) {
                        return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
                    }, e
                }(af),
                pf = "undefined" != typeof Zone && Zone.__symbol__ ||
                    function (t) {
                        return "__zone_symbol__" + t
                    },
                hf = pf("addEventListener"),
                df = pf("removeEventListener"),
                gf = {},
                mf = "__zone_symbol__propagationStopped";
            "undefined" != typeof Zone && Zone[pf("BLACK_LISTED_EVENTS")] && (uf = {});
            var yf = function (t) {
                    return !!uf && uf.hasOwnProperty(t)
                },
                vf = function (t) {
                    var e = gf[t.type];
                    if (e) {
                        var n = this[e];
                        if (n) {
                            var r = [t];
                            if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                            for (var o = n.slice(), i = 0; i < o.length && !0 !== t[mf]; i++) {
                                var a;
                                (a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r)
                            }
                        }
                    }
                },
                _f = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.ngZone = n, r &&
                        function (t) {
                            return t === Ec
                        }(r) || o.patchEvent(), o
                    }
                    return o(e, t), e.prototype.patchEvent = function () {
                        if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                            var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                            Event.prototype.stopImmediatePropagation = function () {
                                this && (this[mf] = !0), t && t.apply(this, arguments)
                            }
                        }
                    }, e.prototype.supports = function (t) {
                        return !0
                    }, e.prototype.addEventListener = function (t, e, n) {
                        var r = this,
                            o = n;
                        if (!t[hf] || ln.isInAngularZone() && !yf(e)) t.addEventListener(e, o, !1);
                        else {
                            var i = gf[e];
                            i || (i = gf[e] = pf("ANGULAR" + e + "FALSE"));
                            var a = t[i],
                                s = a && a.length > 0;
                            a || (a = t[i] = []);
                            var l = yf(e) ? Zone.root : Zone.current;
                            if (0 === a.length) a.push({
                                zone: l,
                                handler: o
                            });
                            else {
                                for (var u = !1, c = 0; c < a.length; c++) if (a[c].handler === o) {
                                    u = !0;
                                    break
                                }
                                u || a.push({
                                    zone: l,
                                    handler: o
                                })
                            }
                            s || t[hf](e, vf, !1)
                        }
                        return function () {
                            return r.removeEventListener(t, e, o)
                        }
                    }, e.prototype.removeEventListener = function (t, e, n) {
                        var r = t[df];
                        if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                        var o = gf[e],
                            i = o && t[o];
                        if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                        for (var a = !1, s = 0; s < i.length; s++) if (i[s].handler === n) {
                            a = !0, i.splice(s, 1);
                            break
                        }
                        a ? 0 === i.length && r.apply(t, [e, vf, !1]) : t.removeEventListener.apply(t, [e, n, !1])
                    }, a([s(0, Ht(Fc)), s(2, Vt()), s(2, Ht(Le))], e)
                }(Gc),
                bf = {
                    pan: !0,
                    panstart: !0,
                    panmove: !0,
                    panend: !0,
                    pancancel: !0,
                    panleft: !0,
                    panright: !0,
                    panup: !0,
                    pandown: !0,
                    pinch: !0,
                    pinchstart: !0,
                    pinchmove: !0,
                    pinchend: !0,
                    pinchcancel: !0,
                    pinchin: !0,
                    pinchout: !0,
                    press: !0,
                    pressup: !0,
                    rotate: !0,
                    rotatestart: !0,
                    rotatemove: !0,
                    rotateend: !0,
                    rotatecancel: !0,
                    swipe: !0,
                    swipeleft: !0,
                    swiperight: !0,
                    swipeup: !0,
                    swipedown: !0,
                    tap: !0
                },
                wf = new vt("HammerGestureConfig"),
                Cf = new vt("HammerLoader"),
                Sf = function () {
                    function t() {
                        this.events = [], this.overrides = {}
                    }
                    return t.prototype.buildHammer = function (t) {
                        var e = new Hammer(t, this.options);
                        for (var n in e.get("pinch").set({
                            enable: !0
                        }), e.get("rotate").set({
                            enable: !0
                        }), this.overrides) e.get(n).set(this.overrides[n]);
                        return e
                    }, t
                }(),
                xf = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._config = n, i.console = r, i.loader = o, i
                    }
                    return o(e, t), e.prototype.supports = function (t) {
                        return !(!bf.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
                    }, e.prototype.addEventListener = function (t, e, n) {
                        var r = this,
                            o = this.manager.getZone();
                        if (e = e.toLowerCase(), !window.Hammer && this.loader) {
                            var i = !1,
                                a = function () {
                                    i = !0
                                };
                            return this.loader().then(function () {
                                if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(a = function () {});
                                i || (a = r.addEventListener(t, e, n))
                            }).
                            catch (function () {
                                r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), a = function () {}
                            }), function () {
                                a()
                            }
                        }
                        return o.runOutsideAngular(function () {
                            var i = r._config.buildHammer(t),
                                a = function (t) {
                                    o.runGuarded(function () {
                                        n(t)
                                    })
                                };
                            return i.on(e, a), function () {
                                i.off(e, a), "function" == typeof i.destroy && i.destroy()
                            }
                        })
                    }, e.prototype.isCustomEvent = function (t) {
                        return this._config.events.indexOf(t) > -1
                    }, a([s(0, Ht(Fc)), s(1, Ht(wf)), s(3, Vt()), s(3, Ht(Cf))], e)
                }(Gc),
                Ef = ["alt", "control", "meta", "shift"],
                kf = {
                    alt: function (t) {
                        return t.altKey
                    },
                    control: function (t) {
                        return t.ctrlKey
                    },
                    meta: function (t) {
                        return t.metaKey
                    },
                    shift: function (t) {
                        return t.shiftKey
                    }
                },
                Pf = function (t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    var n;
                    return o(e, t), n = e, e.prototype.supports = function (t) {
                        return null != n.parseEventName(t)
                    }, e.prototype.addEventListener = function (t, e, r) {
                        var o = n.parseEventName(e),
                            i = n.eventCallback(o.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(function () {
                            return Tc().onAndCancel(t, o.domEventName, i)
                        })
                    }, e.parseEventName = function (t) {
                        var e = t.toLowerCase().split("."),
                            r = e.shift();
                        if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
                        var o = n._normalizeKey(e.pop()),
                            i = "";
                        if (Ef.forEach(function (t) {
                            var n = e.indexOf(t);
                            n > -1 && (e.splice(n, 1), i += t + ".")
                        }), i += o, 0 != e.length || 0 === o.length) return null;
                        var a = {};
                        return a.domEventName = r, a.fullKey = i, a
                    }, e.getEventFullKey = function (t) {
                        var e = "",
                            n = Tc().getEventKey(t);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Ef.forEach(function (r) {
                            r != n && (0, kf[r])(t) && (e += r + ".")
                        }), e += n
                    }, e.eventCallback = function (t, e, r) {
                        return function (o) {
                            n.getEventFullKey(o) === t && r.runGuarded(function () {
                                return e(o)
                            })
                        }
                    }, e._normalizeKey = function (t) {
                        switch (t) {
                            case "esc":
                                return "escape";
                            default:
                                return t
                        }
                    }, n = a([s(0, Ht(Fc))], e)
                }(Gc),
                Of = function () {},
                Tf = function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n
                    }
                    return o(e, t), e.prototype.sanitize = function (t, e) {
                        if (null == e) return null;
                        switch (t) {
                            case zr.NONE:
                                return e;
                            case zr.HTML:
                                return e instanceof If ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function (t, e) {
                                    var n = null;
                                    try {
                                        kr = kr || new br(t);
                                        var r = e ? String(e) : "";
                                        n = kr.getInertBodyElement(r);
                                        var o = 5,
                                            i = r;
                                        do {
                                            if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                            o--, r = i, i = n.innerHTML, n = kr.getInertBodyElement(r)
                                        } while (r !== i);
                                        var a = new Rr,
                                            s = a.sanitizeChildren(Hr(n) || n);
                                        return Cn() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), s
                                    } finally {
                                        if (n) for (var l = Hr(n) || n; l.firstChild;) l.removeChild(l.firstChild)
                                    }
                                }(this._doc, String(e)));
                            case zr.STYLE:
                                return e instanceof Af ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function (t) {
                                    if (!(t = String(t).trim())) return "";
                                    var e = t.match(Ur);
                                    return e && Sr(e[1]) === e[1] || t.match(Vr) &&
                                    function (t) {
                                        for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                            var o = t.charAt(r);
                                            "'" === o && n ? e = !e : '"' === o && e && (n = !n)
                                        }
                                        return e && n
                                    }(t) ? t : (Cn() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                                }(e));
                            case zr.SCRIPT:
                                if (e instanceof Nf) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                            case zr.URL:
                                return e instanceof Rf || e instanceof Df ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), Sr(String(e)));
                            case zr.RESOURCE_URL:
                                if (e instanceof Rf) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                            default:
                                throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                        }
                    }, e.prototype.checkNotSafeValue = function (t, e) {
                        if (t instanceof Mf) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
                    }, e.prototype.bypassSecurityTrustHtml = function (t) {
                        return new If(t)
                    }, e.prototype.bypassSecurityTrustStyle = function (t) {
                        return new Af(t)
                    }, e.prototype.bypassSecurityTrustScript = function (t) {
                        return new Nf(t)
                    }, e.prototype.bypassSecurityTrustUrl = function (t) {
                        return new Df(t)
                    }, e.prototype.bypassSecurityTrustResourceUrl = function (t) {
                        return new Rf(t)
                    }, a([s(0, Ht(Fc))], e)
                }(Of),
                Mf = function () {
                    function t(t) {
                        this.changingThisBreaksApplicationSecurity = t
                    }
                    return t.prototype.toString = function () {
                        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                    }, t
                }(),
                If = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function () {
                        return "HTML"
                    }, e
                }(Mf),
                Af = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function () {
                        return "Style"
                    }, e
                }(Mf),
                Nf = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function () {
                        return "Script"
                    }, e
                }(Mf),
                Df = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function () {
                        return "URL"
                    }, e
                }(Mf),
                Rf = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function () {
                        return "ResourceURL"
                    }, e
                }(Mf),
                jf = xn(dr, "browser", [{
                    provide: Le,
                    useValue: "browser"
                },
                    {
                        provide: Fe,
                        useValue: function () {
                            Rc.makeCurrent(), Bc.init()
                        },
                        multi: !0
                    },
                    {
                        provide: _u,
                        useClass: Hc,
                        deps: [Fc]
                    },
                    {
                        provide: Fc,
                        useFactory: function () {
                            return document
                        },
                        deps: []
                    }]);

            function Ff() {
                return new be
            }
            var Lf = function () {
                function t(t) {
                    if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                var e;
                return e = t, t.withServerTransition = function (t) {
                    return {
                        ngModule: e,
                        providers: [{
                            provide: je,
                            useValue: t.appId
                        },
                            {
                                provide: Vc,
                                useExisting: je
                            },
                            zc]
                    }
                }, e = a([s(0, Vt()), s(0, zt()), s(0, Ht(e))], t)
            }();

            function Hf() {
                return new Vf(ce(Fc))
            }
            var Vf = function () {
                function t(t) {
                    this._doc = t, this._dom = Tc()
                }
                return t.prototype.addTag = function (t, e) {
                    return void 0 === e && (e = !1), t ? this._getOrCreateElement(t, e) : null
                }, t.prototype.addTags = function (t, e) {
                    var n = this;
                    return void 0 === e && (e = !1), t ? t.reduce(function (t, r) {
                        return r && t.push(n._getOrCreateElement(r, e)), t
                    }, []) : []
                }, t.prototype.getTag = function (t) {
                    return t && this._dom.querySelector(this._doc, "meta[" + t + "]") || null
                }, t.prototype.getTags = function (t) {
                    if (!t) return [];
                    var e = this._dom.querySelectorAll(this._doc, "meta[" + t + "]");
                    return e ? [].slice.call(e) : []
                }, t.prototype.updateTag = function (t, e) {
                    if (!t) return null;
                    e = e || this._parseSelector(t);
                    var n = this.getTag(e);
                    return n ? this._setMetaElementAttributes(t, n) : this._getOrCreateElement(t, !0)
                }, t.prototype.removeTag = function (t) {
                    this.removeTagElement(this.getTag(t))
                }, t.prototype.removeTagElement = function (t) {
                    t && this._dom.remove(t)
                }, t.prototype._getOrCreateElement = function (t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        var n = this._parseSelector(t),
                            r = this.getTag(n);
                        if (r && this._containsAttributes(t, r)) return r
                    }
                    var o = this._dom.createElement("meta");
                    this._setMetaElementAttributes(t, o);
                    var i = this._dom.getElementsByTagName(this._doc, "head")[0];
                    return this._dom.appendChild(i, o), o
                }, t.prototype._setMetaElementAttributes = function (t, e) {
                    var n = this;
                    return Object.keys(t).forEach(function (r) {
                        return n._dom.setAttribute(e, r, t[r])
                    }), e
                }, t.prototype._parseSelector = function (t) {
                    var e = t.name ? "name" : "property";
                    return e + '="' + t[e] + '"'
                }, t.prototype._containsAttributes = function (t, e) {
                    var n = this;
                    return Object.keys(t).every(function (r) {
                        return n._dom.getAttribute(e, r) === t[r]
                    })
                }, t.ngInjectableDef = yt({
                    factory: Hf,
                    token: t,
                    providedIn: "root"
                }), a([s(0, Ht(Fc))], t)
            }();

            function Uf() {
                return new zf(ce(Fc))
            }
            var zf = function () {
                function t(t) {
                    this._doc = t
                }
                return t.prototype.getTitle = function () {
                    return Tc().getTitle(this._doc)
                }, t.prototype.setTitle = function (t) {
                    Tc().setTitle(this._doc, t)
                }, t.ngInjectableDef = yt({
                    factory: Uf,
                    token: t,
                    providedIn: "root"
                }), a([s(0, Ht(Fc))], t)
            }();
            "undefined" != typeof window && window;
            var Bf = function (t, e) {
                    this.id = t, this.url = e
                },
                qf = function (t) {
                    function e(e, n, r, o) {
                        void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                        var i = t.call(this, e, n) || this;
                        return i.navigationTrigger = r, i.restoredState = o, i
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(Bf),
                Kf = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.urlAfterRedirects = r, o
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
                    }, e
                }(Bf),
                Qf = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.reason = r, o
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(Bf),
                Wf = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.error = r, o
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
                    }, e
                }(Bf),
                $f = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Bf),
                Gf = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Bf),
                Zf = function (t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this, e, n) || this;
                        return a.urlAfterRedirects = r, a.state = o, a.shouldActivate = i, a
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
                    }, e
                }(Bf),
                Yf = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Bf),
                Jf = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Bf),
                Xf = function () {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function () {
                        return "RouteConfigLoadStart(path: " + this.route.path + ")"
                    }, t
                }(),
                tp = function () {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function () {
                        return "RouteConfigLoadEnd(path: " + this.route.path + ")"
                    }, t
                }(),
                ep = function () {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function () {
                        return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                np = function () {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function () {
                        return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                rp = function () {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function () {
                        return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                op = function () {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function () {
                        return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                ip = function () {
                    function t(t, e, n) {
                        this.routerEvent = t, this.position = e, this.anchor = n
                    }
                    return t.prototype.toString = function () {
                        return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
                    }, t
                }(),
                ap = function () {},
                sp = "primary",
                lp = function () {
                    function t(t) {
                        this.params = t || {}
                    }
                    return t.prototype.has = function (t) {
                        return this.params.hasOwnProperty(t)
                    }, t.prototype.get = function (t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e[0] : e
                        }
                        return null
                    }, t.prototype.getAll = function (t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e : [e]
                        }
                        return []
                    }, Object.defineProperty(t.prototype, "keys", {
                        get: function () {
                            return Object.keys(this.params)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }();

            function up(t) {
                return new lp(t)
            }
            function cp(t, e, n) {
                var r = n.path.split("/");
                if (r.length > t.length) return null;
                if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                for (var o = {}, i = 0; i < r.length; i++) {
                    var a = r[i],
                        s = t[i];
                    if (a.startsWith(":")) o[a.substring(1)] = s;
                    else if (a !== s.path) return null
                }
                return {
                    consumed: t.slice(0, r.length),
                    posParams: o
                }
            }
            var fp = function (t, e) {
                this.routes = t, this.module = e
            };

            function pp(t, e) {
                void 0 === e && (e = "");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    hp(r, dp(e, r))
                }
            }
            function hp(t, e) {
                if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
                if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
                if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== sp) throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
                if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
                if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
                if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
                if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
                if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
                if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
                if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
                if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
                if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
                if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
                t.children && pp(t.children, e)
            }
            function dp(t, e) {
                return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
            }
            function gp(t) {
                var e = t.children && t.children.map(gp),
                    n = e ? i({}, t, {
                        children: e
                    }) : i({}, t);
                return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== sp && (n.component = ap), n
            }
            function mp(t, e) {
                var n, r = Object.keys(t),
                    o = Object.keys(e);
                if (r.length != o.length) return !1;
                for (var i = 0; i < r.length; i++) if (t[n = r[i]] !== e[n]) return !1;
                return !0
            }
            function yp(t) {
                return Array.prototype.concat.apply([], t)
            }
            function vp(t) {
                return t.length > 0 ? t[t.length - 1] : null
            }
            function _p(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
            }
            function bp(t) {
                return t.pipe(ut(), au(function (t) {
                    return !0 === t
                }))
            }
            function wp(t) {
                return Ne(t) ? t : Ae(t) ? ot(Promise.resolve(t)) : Hl(t)
            }
            function Cp(t, e, n) {
                return n ?
                    function (t, e) {
                        return mp(t, e)
                    }(t.queryParams, e.queryParams) &&
                    function t(e, n) {
                        if (!kp(e.segments, n.segments)) return !1;
                        if (e.numberOfChildren !== n.numberOfChildren) return !1;
                        for (var r in n.children) {
                            if (!e.children[r]) return !1;
                            if (!t(e.children[r], n.children[r])) return !1
                        }
                        return !0
                    }(t.root, e.root) : function (t, e) {
                        return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function (n) {
                            return e[n] === t[n]
                        })
                    }(t.queryParams, e.queryParams) &&
                    function t(e, n) {
                        return function e(n, r, o) {
                            if (n.segments.length > o.length) return !!kp(a = n.segments.slice(0, o.length), o) && !r.hasChildren();
                            if (n.segments.length === o.length) {
                                if (!kp(n.segments, o)) return !1;
                                for (var i in r.children) {
                                    if (!n.children[i]) return !1;
                                    if (!t(n.children[i], r.children[i])) return !1
                                }
                                return !0
                            }
                            var a = o.slice(0, n.segments.length),
                                s = o.slice(n.segments.length);
                            return !!kp(n.segments, a) && !! n.children[sp] && e(n.children[sp], r, s)
                        }(e, n, n.segments)
                    }(t.root, e.root)
            }
            var Sp = function () {
                    function t(t, e, n) {
                        this.root = t, this.queryParams = e, this.fragment = n
                    }
                    return Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function () {
                            return this._queryParamMap || (this._queryParamMap = up(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function () {
                        return Mp.serialize(this)
                    }, t
                }(),
                xp = function () {
                    function t(t, e) {
                        var n = this;
                        this.segments = t, this.children = e, this.parent = null, _p(e, function (t, e) {
                            return t.parent = n
                        })
                    }
                    return t.prototype.hasChildren = function () {
                        return this.numberOfChildren > 0
                    }, Object.defineProperty(t.prototype, "numberOfChildren", {
                        get: function () {
                            return Object.keys(this.children).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function () {
                        return Ip(this)
                    }, t
                }(),
                Ep = function () {
                    function t(t, e) {
                        this.path = t, this.parameters = e
                    }
                    return Object.defineProperty(t.prototype, "parameterMap", {
                        get: function () {
                            return this._parameterMap || (this._parameterMap = up(this.parameters)), this._parameterMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function () {
                        return Fp(this)
                    }, t
                }();

            function kp(t, e) {
                return t.length === e.length && t.every(function (t, n) {
                    return t.path === e[n].path
                })
            }
            function Pp(t, e) {
                var n = [];
                return _p(t.children, function (t, r) {
                    r === sp && (n = n.concat(e(t, r)))
                }), _p(t.children, function (t, r) {
                    r !== sp && (n = n.concat(e(t, r)))
                }), n
            }
            var Op = function () {},
                Tp = function () {
                    function t() {}
                    return t.prototype.parse = function (t) {
                        var e = new zp(t);
                        return new Sp(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
                    }, t.prototype.serialize = function (t) {
                        var e, n;
                        return "/" +
                            function t(e, n) {
                                if (!e.hasChildren()) return Ip(e);
                                if (n) {
                                    var r = e.children[sp] ? t(e.children[sp], !1) : "",
                                        o = [];
                                    return _p(e.children, function (e, n) {
                                        n !== sp && o.push(n + ":" + t(e, !1))
                                    }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                                }
                                var i = Pp(e, function (n, r) {
                                    return r === sp ? [t(e.children[sp], !1)] : [r + ":" + t(n, !1)]
                                });
                                return Ip(e) + "/(" + i.join("//") + ")"
                            }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function (t) {
                                var n = e[t];
                                return Array.isArray(n) ? n.map(function (e) {
                                    return Np(t) + "=" + Np(e)
                                }).join("&") : Np(t) + "=" + Np(n)
                            })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
                    }, t
                }(),
                Mp = new Tp;

            function Ip(t) {
                return t.segments.map(function (t) {
                    return Fp(t)
                }).join("/")
            }
            function Ap(t) {
                return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }
            function Np(t) {
                return Ap(t).replace(/%3B/gi, ";")
            }
            function Dp(t) {
                return Ap(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }
            function Rp(t) {
                return decodeURIComponent(t)
            }
            function jp(t) {
                return Rp(t.replace(/\+/g, "%20"))
            }
            function Fp(t) {
                return "" + Dp(t.path) + (e = t.parameters, Object.keys(e).map(function (t) {
                    return ";" + Dp(t) + "=" + Dp(e[t])
                }).join(""));
                var e
            }
            var Lp = /^[^\/()?;=#]+/;

            function Hp(t) {
                var e = t.match(Lp);
                return e ? e[0] : ""
            }
            var Vp = /^[^=?&#]+/,
                Up = /^[^?&#]+/,
                zp = function () {
                    function t(t) {
                        this.url = t, this.remaining = t
                    }
                    return t.prototype.parseRootSegment = function () {
                        return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new xp([], {}) : new xp([], this.parseChildren())
                    }, t.prototype.parseQueryParams = function () {
                        var t = {};
                        if (this.consumeOptional("?")) do {
                            this.parseQueryParam(t)
                        } while (this.consumeOptional("&"));
                        return t
                    }, t.prototype.parseFragment = function () {
                        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                    }, t.prototype.parseChildren = function () {
                        if ("" === this.remaining) return {};
                        this.consumeOptional("/");
                        var t = [];
                        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                        var e = {};
                        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                        var n = {};
                        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[sp] = new xp(t, e)), n
                    }, t.prototype.parseSegment = function () {
                        var t = Hp(this.remaining);
                        if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                        return this.capture(t), new Ep(Rp(t), this.parseMatrixParams())
                    }, t.prototype.parseMatrixParams = function () {
                        for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
                        return t
                    }, t.prototype.parseParam = function (t) {
                        var e = Hp(this.remaining);
                        if (e) {
                            this.capture(e);
                            var n = "";
                            if (this.consumeOptional("=")) {
                                var r = Hp(this.remaining);
                                r && this.capture(n = r)
                            }
                            t[Rp(e)] = Rp(n)
                        }
                    }, t.prototype.parseQueryParam = function (t) {
                        var e, n = (e = this.remaining.match(Vp)) ? e[0] : "";
                        if (n) {
                            this.capture(n);
                            var r = "";
                            if (this.consumeOptional("=")) {
                                var o = function (t) {
                                    var e = t.match(Up);
                                    return e ? e[0] : ""
                                }(this.remaining);
                                o && this.capture(r = o)
                            }
                            var i = jp(n),
                                a = jp(r);
                            if (t.hasOwnProperty(i)) {
                                var s = t[i];
                                Array.isArray(s) || (t[i] = s = [s]), s.push(a)
                            } else t[i] = a
                        }
                    }, t.prototype.parseParens = function (t) {
                        var e = {};
                        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                            var n = Hp(this.remaining),
                                r = this.remaining[n.length];
                            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                            var o = void 0;
                            n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = sp);
                            var i = this.parseChildren();
                            e[o] = 1 === Object.keys(i).length ? i[sp] : new xp([], i), this.consumeOptional("//")
                        }
                        return e
                    }, t.prototype.peekStartsWith = function (t) {
                        return this.remaining.startsWith(t)
                    }, t.prototype.consumeOptional = function (t) {
                        return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
                    }, t.prototype.capture = function (t) {
                        if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
                    }, t
                }(),
                Bp = function (t) {
                    this.segmentGroup = t || null
                },
                qp = function (t) {
                    this.urlTree = t
                };

            function Kp(t) {
                return new D(function (e) {
                    return e.error(new Bp(t))
                })
            }
            function Qp(t) {
                return new D(function (e) {
                    return e.error(new qp(t))
                })
            }
            function Wp(t) {
                return new D(function (e) {
                    return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
                })
            }
            var $p = function () {
                function t(t, e, n, r, o) {
                    this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(tn)
                }
                return t.prototype.apply = function () {
                    var t = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, sp).pipe(tt(function (e) {
                        return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
                    })).pipe(uu(function (e) {
                        if (e instanceof qp) return t.allowRedirects = !1, t.match(e.urlTree);
                        if (e instanceof Bp) throw t.noMatchError(e);
                        throw e
                    }))
                }, t.prototype.match = function (t) {
                    var e = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, t.root, sp).pipe(tt(function (n) {
                        return e.createUrlTree(n, t.queryParams, t.fragment)
                    })).pipe(uu(function (t) {
                        if (t instanceof Bp) throw e.noMatchError(t);
                        throw t
                    }))
                }, t.prototype.noMatchError = function (t) {
                    return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
                }, t.prototype.createUrlTree = function (t, e, n) {
                    var r, o = t.segments.length > 0 ? new xp([], ((r = {})[sp] = t, r)) : t;
                    return new Sp(o, e, n)
                }, t.prototype.expandSegmentGroup = function (t, e, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(tt(function (t) {
                        return new xp([], t)
                    })) : this.expandSegment(t, n, e, n.segments, r, !0)
                }, t.prototype.expandChildren = function (t, e, n) {
                    var r = this;
                    return function (n, o) {
                        if (0 === Object.keys(n).length) return Hl({});
                        var i = [],
                            a = [],
                            s = {};
                        return _p(n, function (n, o) {
                            var l, u, c = (l = o, u = n, r.expandSegmentGroup(t, e, u, l)).pipe(tt(function (t) {
                                return s[o] = t
                            }));
                            o === sp ? i.push(c) : a.push(c)
                        }), Hl.apply(null, i.concat(a)).pipe(Bl(), iu(), tt(function () {
                            return s
                        }))
                    }(n.children)
                }, t.prototype.expandSegment = function (t, e, n, r, o, i) {
                    var a = this;
                    return Hl.apply(void 0, f(n)).pipe(tt(function (s) {
                        return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(uu(function (t) {
                            if (t instanceof Bp) return Hl(null);
                            throw t
                        }))
                    }), Bl(), du(function (t) {
                        return !!t
                    }), uu(function (t, n) {
                        if (t instanceof Ul || "EmptyError" === t.name) {
                            if (a.noLeftoversInUrl(e, r, o)) return Hl(new xp([], {}));
                            throw new Bp(e)
                        }
                        throw t
                    }))
                }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                    return 0 === e.length && !t.children[n]
                }, t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, o, i, a) {
                    return Jp(r) !== i ? Kp(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : Kp(e)
                }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                    return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
                }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) {
                    var o = this,
                        i = this.applyRedirectCommands([], n.redirectTo, {});
                    return n.redirectTo.startsWith("/") ? Qp(i) : this.lineralizeSegments(n, i).pipe(it(function (n) {
                        var i = new xp(n, {});
                        return o.expandSegment(t, i, e, n, r, !1)
                    }))
                }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) {
                    var a = this,
                        s = Gp(e, r, o),
                        l = s.consumedSegments,
                        u = s.lastChild,
                        c = s.positionalParamSegments;
                    if (!s.matched) return Kp(e);
                    var f = this.applyRedirectCommands(l, r.redirectTo, c);
                    return r.redirectTo.startsWith("/") ? Qp(f) : this.lineralizeSegments(r, f).pipe(it(function (r) {
                        return a.expandSegment(t, e, n, r.concat(o.slice(u)), i, !1)
                    }))
                }, t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
                    var o = this;
                    if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(tt(function (t) {
                        return n._loadedConfig = t, new xp(r, {})
                    })) : Hl(new xp(r, {}));
                    var a = Gp(e, n, r),
                        s = a.consumedSegments,
                        l = a.lastChild;
                    if (!a.matched) return Kp(e);
                    var c = r.slice(l);
                    return this.getChildConfig(t, n).pipe(it(function (t) {
                        var n = t.module,
                            r = t.routes,
                            a = function (t, e, n, r) {
                                return n.length > 0 &&
                                function (t, e, n) {
                                    return r.some(function (n) {
                                        return Yp(t, e, n) && Jp(n) !== sp
                                    })
                                }(t, n) ? {
                                    segmentGroup: Zp(new xp(e, function (t, e) {
                                        var n, r, o = {};
                                        o[sp] = e;
                                        try {
                                            for (var i = u(t), a = i.next(); !a.done; a = i.next()) {
                                                var s = a.value;
                                                "" === s.path && Jp(s) !== sp && (o[Jp(s)] = new xp([], {}))
                                            }
                                        } catch (t) {
                                            n = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                a && !a.done && (r = i.
                                                    return) && r.call(i)
                                            } finally {
                                                if (n) throw n.error
                                            }
                                        }
                                        return o
                                    }(r, new xp(n, t.children)))),
                                    slicedSegments: []
                                } : 0 === n.length &&
                                function (t, e, n) {
                                    return r.some(function (n) {
                                        return Yp(t, e, n)
                                    })
                                }(t, n) ? {
                                    segmentGroup: Zp(new xp(t.segments, function (t, e, n, r) {
                                        var o, a, s = {};
                                        try {
                                            for (var l = u(n), c = l.next(); !c.done; c = l.next()) {
                                                var f = c.value;
                                                Yp(t, e, f) && !r[Jp(f)] && (s[Jp(f)] = new xp([], {}))
                                            }
                                        } catch (t) {
                                            o = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                c && !c.done && (a = l.
                                                    return) && a.call(l)
                                            } finally {
                                                if (o) throw o.error
                                            }
                                        }
                                        return i({}, r, s)
                                    }(t, n, r, t.children))),
                                    slicedSegments: n
                                } : {
                                    segmentGroup: t,
                                    slicedSegments: n
                                }
                            }(e, s, c, r),
                            l = a.segmentGroup,
                            f = a.slicedSegments;
                        return 0 === f.length && l.hasChildren() ? o.expandChildren(n, r, l).pipe(tt(function (t) {
                            return new xp(s, t)
                        })) : 0 === r.length && 0 === f.length ? Hl(new xp(s, {})) : o.expandSegment(n, l, r, f, sp, !0).pipe(tt(function (t) {
                            return new xp(s.concat(t.segments), t.children)
                        }))
                    }))
                }, t.prototype.getChildConfig = function (t, e) {
                    var n = this;
                    return e.children ? Hl(new fp(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Hl(e._loadedConfig) : function (t, e) {
                        var n = e.canLoad;
                        return n && 0 !== n.length ? bp(ot(n).pipe(tt(function (n) {
                            var r = t.get(n);
                            return wp(r.canLoad ? r.canLoad(e) : r(e))
                        }))) : Hl(!0)
                    }(t.injector, e).pipe(it(function (r) {
                        return r ? n.configLoader.load(t.injector, e).pipe(tt(function (t) {
                            return e._loadedConfig = t, t
                        })) : function (t) {
                            return new D(function (e) {
                                return e.error(((n = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")).ngNavigationCancelingError = !0, n));
                                var n
                            })
                        }(e)
                    })) : Hl(new fp([], t))
                }, t.prototype.lineralizeSegments = function (t, e) {
                    for (var n = [], r = e.root;;) {
                        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Hl(n);
                        if (r.numberOfChildren > 1 || !r.children[sp]) return Wp(t.redirectTo);
                        r = r.children[sp]
                    }
                }, t.prototype.applyRedirectCommands = function (t, e, n) {
                    return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
                }, t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
                    var o = this.createSegmentGroup(t, e.root, n, r);
                    return new Sp(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
                }, t.prototype.createQueryParams = function (t, e) {
                    var n = {};
                    return _p(t, function (t, r) {
                        if ("string" == typeof t && t.startsWith(":")) {
                            var o = t.substring(1);
                            n[r] = e[o]
                        } else n[r] = t
                    }), n
                }, t.prototype.createSegmentGroup = function (t, e, n, r) {
                    var o = this,
                        i = this.createSegments(t, e.segments, n, r),
                        a = {};
                    return _p(e.children, function (e, i) {
                        a[i] = o.createSegmentGroup(t, e, n, r)
                    }), new xp(i, a)
                }, t.prototype.createSegments = function (t, e, n, r) {
                    var o = this;
                    return e.map(function (e) {
                        return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n)
                    })
                }, t.prototype.findPosParam = function (t, e, n) {
                    var r = n[e.path.substring(1)];
                    if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                    return r
                }, t.prototype.findOrReturn = function (t, e) {
                    var n, r, o = 0;
                    try {
                        for (var i = u(e), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value;
                            if (s.path === t.path) return e.splice(o), s;
                            o++
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (r = i.
                                return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return t
                }, t
            }();

            function Gp(t, e, n) {
                if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                } : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                };
                var r = (e.matcher || cp)(n, t, e);
                return r ? {
                    matched: !0,
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    positionalParamSegments: r.posParams
                } : {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                }
            }
            function Zp(t) {
                if (1 === t.numberOfChildren && t.children[sp]) {
                    var e = t.children[sp];
                    return new xp(t.segments.concat(e.segments), e.children)
                }
                return t
            }
            function Yp(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
            }
            function Jp(t) {
                return t.outlet || sp
            }
            var Xp = function () {
                function t(t) {
                    this._root = t
                }
                return Object.defineProperty(t.prototype, "root", {
                    get: function () {
                        return this._root.value
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.parent = function (t) {
                    var e = this.pathFromRoot(t);
                    return e.length > 1 ? e[e.length - 2] : null
                }, t.prototype.children = function (t) {
                    var e = th(t, this._root);
                    return e ? e.children.map(function (t) {
                        return t.value
                    }) : []
                }, t.prototype.firstChild = function (t) {
                    var e = th(t, this._root);
                    return e && e.children.length > 0 ? e.children[0].value : null
                }, t.prototype.siblings = function (t) {
                    var e = eh(t, this._root);
                    return e.length < 2 ? [] : e[e.length - 2].children.map(function (t) {
                        return t.value
                    }).filter(function (e) {
                        return e !== t
                    })
                }, t.prototype.pathFromRoot = function (t) {
                    return eh(t, this._root).map(function (t) {
                        return t.value
                    })
                }, t
            }();

            function th(t, e) {
                var n, r;
                if (t === e.value) return e;
                try {
                    for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = th(t, i.value);
                        if (a) return a
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.
                            return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }
            function eh(t, e) {
                var n, r;
                if (t === e.value) return [e];
                try {
                    for (var o = u(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = eh(t, i.value);
                        if (a.length) return a.unshift(e), a
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.
                            return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return []
            }
            var nh = function () {
                function t(t, e) {
                    this.value = t, this.children = e
                }
                return t.prototype.toString = function () {
                    return "TreeNode(" + this.value + ")"
                }, t
            }();

            function rh(t) {
                var e = {};
                return t && t.children.forEach(function (t) {
                    return e[t.value.outlet] = t
                }), e
            }
            var oh = function (t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.snapshot = n, ch(r, e), r
                }
                return o(e, t), e.prototype.toString = function () {
                    return this.snapshot.toString()
                }, e
            }(Xp);

            function ih(t, e) {
                var n = function (t, e) {
                        var n = new lh([], {}, {}, "", {}, sp, e, null, t.root, -1, {});
                        return new uh("", new nh(n, []))
                    }(t, e),
                    r = new zl([new Ep("", {})]),
                    o = new zl({}),
                    i = new zl({}),
                    a = new zl({}),
                    s = new zl(""),
                    l = new ah(r, o, a, s, i, sp, e, n.root);
                return l.snapshot = n.root, new oh(new nh(l, []), n)
            }
            var ah = function () {
                function t(t, e, n, r, o, i, a, s) {
                    this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this._futureSnapshot = s
                }
                return Object.defineProperty(t.prototype, "routeConfig", {
                    get: function () {
                        return this._futureSnapshot.routeConfig
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "root", {
                    get: function () {
                        return this._routerState.root
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function () {
                        return this._routerState.parent(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "firstChild", {
                    get: function () {
                        return this._routerState.firstChild(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "children", {
                    get: function () {
                        return this._routerState.children(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "pathFromRoot", {
                    get: function () {
                        return this._routerState.pathFromRoot(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "paramMap", {
                    get: function () {
                        return this._paramMap || (this._paramMap = this.params.pipe(tt(function (t) {
                            return up(t)
                        }))), this._paramMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "queryParamMap", {
                    get: function () {
                        return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(tt(function (t) {
                            return up(t)
                        }))), this._queryParamMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function () {
                    return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
                }, t
            }();

            function sh(t, e) {
                void 0 === e && (e = "emptyOnly");
                var n = t.pathFromRoot,
                    r = 0;
                if ("always" !== e) for (r = n.length - 1; r >= 1;) {
                    var o = n[r],
                        a = n[r - 1];
                    if (o.routeConfig && "" === o.routeConfig.path) r--;
                    else {
                        if (a.component) break;
                        r--
                    }
                }
                return function (t) {
                    return t.reduce(function (t, e) {
                        return {
                            params: i({}, t.params, e.params),
                            data: i({}, t.data, e.data),
                            resolve: i({}, t.resolve, e._resolvedData)
                        }
                    }, {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(n.slice(r))
            }
            var lh = function () {
                    function t(t, e, n, r, o, i, a, s, l, u, c) {
                        this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this.routeConfig = s, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
                    }
                    return Object.defineProperty(t.prototype, "root", {
                        get: function () {
                            return this._routerState.root
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "parent", {
                        get: function () {
                            return this._routerState.parent(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "firstChild", {
                        get: function () {
                            return this._routerState.firstChild(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "children", {
                        get: function () {
                            return this._routerState.children(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pathFromRoot", {
                        get: function () {
                            return this._routerState.pathFromRoot(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "paramMap", {
                        get: function () {
                            return this._paramMap || (this._paramMap = up(this.params)), this._paramMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function () {
                            return this._queryParamMap || (this._queryParamMap = up(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function () {
                        return "Route(url:'" + this.url.map(function (t) {
                            return t.toString()
                        }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
                    }, t
                }(),
                uh = function (t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return r.url = e, ch(r, n), r
                    }
                    return o(e, t), e.prototype.toString = function () {
                        return fh(this._root)
                    }, e
                }(Xp);

            function ch(t, e) {
                e.value._routerState = t, e.children.forEach(function (e) {
                    return ch(t, e)
                })
            }
            function fh(t) {
                var e = t.children.length > 0 ? " { " + t.children.map(fh).join(", ") + " } " : "";
                return "" + t.value + e
            }
            function ph(t) {
                if (t.snapshot) {
                    var e = t.snapshot,
                        n = t._futureSnapshot;
                    t.snapshot = n, mp(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), mp(e.params, n.params) || t.params.next(n.params), function (t, e) {
                        if (t.length !== e.length) return !1;
                        for (var n = 0; n < t.length; ++n) if (!mp(t[n], e[n])) return !1;
                        return !0
                    }(e.url, n.url) || t.url.next(n.url), mp(e.data, n.data) || t.data.next(n.data)
                } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
            }
            function hh(t, e) {
                var n, r;
                return mp(t.params, e.params) && kp(n = t.url, r = e.url) && n.every(function (t, e) {
                    return mp(t.parameters, r[e].parameters)
                }) && !(!t.parent != !e.parent) && (!t.parent || hh(t.parent, e.parent))
            }
            function dh(t) {
                return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
            }
            function gh(t, e, n, r, o) {
                var i = {};
                return r && _p(r, function (t, e) {
                    i[e] = Array.isArray(t) ? t.map(function (t) {
                        return "" + t
                    }) : "" + t
                }), new Sp(n.root === t ? e : function t(e, n, r) {
                    var o = {};
                    return _p(e.children, function (e, i) {
                        o[i] = e === n ? r : t(e, n, r)
                    }), new xp(e.segments, o)
                }(n.root, t, e), i, o)
            }
            var mh = function () {
                    function t(t, e, n) {
                        if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && dh(n[0])) throw new Error("Root segment cannot have matrix parameters");
                        var r = n.find(function (t) {
                            return "object" == typeof t && null != t && t.outlets
                        });
                        if (r && r !== vp(n)) throw new Error("{outlets:{}} has to be the last command")
                    }
                    return t.prototype.toRoot = function () {
                        return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                    }, t
                }(),
                yh = function (t, e, n) {
                    this.segmentGroup = t, this.processChildren = e, this.index = n
                };

            function vh(t) {
                return "object" == typeof t && null != t && t.outlets ? t.outlets[sp] : "" + t
            }
            function _h(t, e, n) {
                if (t || (t = new xp([], {})), 0 === t.segments.length && t.hasChildren()) return bh(t, e, n);
                var r = function (t, e, n) {
                        for (var r = 0, o = e, i = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        }; o < t.segments.length;) {
                            if (r >= n.length) return i;
                            var a = t.segments[o],
                                s = vh(n[r]),
                                l = r < n.length - 1 ? n[r + 1] : null;
                            if (o > 0 && void 0 === s) break;
                            if (s && l && "object" == typeof l && void 0 === l.outlets) {
                                if (!xh(s, l, a)) return i;
                                r += 2
                            } else {
                                if (!xh(s, {}, a)) return i;
                                r++
                            }
                            o++
                        }
                        return {
                            match: !0,
                            pathIndex: o,
                            commandIndex: r
                        }
                    }(t, e, n),
                    o = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < t.segments.length) {
                    var i = new xp(t.segments.slice(0, r.pathIndex), {});
                    return i.children[sp] = new xp(t.segments.slice(r.pathIndex), t.children), bh(i, 0, o)
                }
                return r.match && 0 === o.length ? new xp(t.segments, {}) : r.match && !t.hasChildren() ? wh(t, e, n) : r.match ? bh(t, 0, o) : wh(t, e, n)
            }
            function bh(t, e, n) {
                if (0 === n.length) return new xp(t.segments, {});
                var r = function (t) {
                        var e, n;
                        return "object" != typeof t[0] ? ((e = {})[sp] = t, e) : void 0 === t[0].outlets ? ((n = {})[sp] = t, n) : t[0].outlets
                    }(n),
                    o = {};
                return _p(r, function (n, r) {
                    null !== n && (o[r] = _h(t.children[r], e, n))
                }), _p(t.children, function (t, e) {
                    void 0 === r[e] && (o[e] = t)
                }), new xp(t.segments, o)
            }
            function wh(t, e, n) {
                for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
                    if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                        var i = Ch(n[o].outlets);
                        return new xp(r, i)
                    }
                    if (0 === o && dh(n[0])) r.push(new Ep(t.segments[e].path, n[0])), o++;
                    else {
                        var a = vh(n[o]),
                            s = o < n.length - 1 ? n[o + 1] : null;
                        a && s && dh(s) ? (r.push(new Ep(a, Sh(s))), o += 2) : (r.push(new Ep(a, {})), o++)
                    }
                }
                return new xp(r, {})
            }
            function Ch(t) {
                var e = {};
                return _p(t, function (t, n) {
                    null !== t && (e[n] = wh(new xp([], {}), 0, t))
                }), e
            }
            function Sh(t) {
                var e = {};
                return _p(t, function (t, n) {
                    return e[n] = "" + t
                }), e
            }
            function xh(t, e, n) {
                return t == n.path && mp(e, n.parameters)
            }
            var Eh = function (t) {
                    this.path = t, this.route = this.path[this.path.length - 1]
                },
                kh = function (t, e) {
                    this.component = t, this.route = e
                },
                Ph = function () {
                    function t(t, e, n, r) {
                        this.future = t, this.curr = e, this.moduleInjector = n, this.forwardEvent = r, this.canActivateChecks = [], this.canDeactivateChecks = []
                    }
                    return t.prototype.initialize = function (t) {
                        var e = this.future._root;
                        this.setupChildRouteGuards(e, this.curr ? this.curr._root : null, t, [e.value])
                    }, t.prototype.checkGuards = function () {
                        var t = this;
                        return this.isDeactivating() || this.isActivating() ? this.runCanDeactivateChecks().pipe(it(function (e) {
                            return e ? t.runCanActivateChecks() : Hl(!1)
                        })) : Hl(!0)
                    }, t.prototype.resolveData = function (t) {
                        var e = this;
                        return this.isActivating() ? ot(this.canActivateChecks).pipe(gu(function (n) {
                            return e.runResolve(n.route, t)
                        }), function (t, e) {
                            return arguments.length >= 2 ?
                                function (n) {
                                    return A(mu(t, e), Gl(1), nu(e))(n)
                                } : function (e) {
                                    return A(mu(function (e, n, r) {
                                        return t(e, n, r + 1)
                                    }), Gl(1))(e)
                                }
                        }(function (t, e) {
                            return t
                        })) : Hl(null)
                    }, t.prototype.isDeactivating = function () {
                        return 0 !== this.canDeactivateChecks.length
                    }, t.prototype.isActivating = function () {
                        return 0 !== this.canActivateChecks.length
                    }, t.prototype.setupChildRouteGuards = function (t, e, n, r) {
                        var o = this,
                            i = rh(e);
                        t.children.forEach(function (t) {
                            o.setupRouteGuards(t, i[t.value.outlet], n, r.concat([t.value])), delete i[t.value.outlet]
                        }), _p(i, function (t, e) {
                            return o.deactivateRouteAndItsChildren(t, n.getContext(e))
                        })
                    }, t.prototype.setupRouteGuards = function (t, e, n, r) {
                        var o = t.value,
                            i = e ? e.value : null,
                            a = n ? n.getContext(t.value.outlet) : null;
                        if (i && o.routeConfig === i.routeConfig) {
                            var s = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
                            s ? this.canActivateChecks.push(new Eh(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), this.setupChildRouteGuards(t, e, o.component ? a ? a.children : null : n, r), s && this.canDeactivateChecks.push(new kh(a.outlet.component, i))
                        } else i && this.deactivateRouteAndItsChildren(e, a), this.canActivateChecks.push(new Eh(r)), this.setupChildRouteGuards(t, null, o.component ? a ? a.children : null : n, r)
                    }, t.prototype.shouldRunGuardsAndResolvers = function (t, e, n) {
                        switch (n) {
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !hh(t, e) || !mp(t.queryParams, e.queryParams);
                            case "paramsChange":
                            default:
                                return !hh(t, e)
                        }
                    }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                        var n = this,
                            r = rh(t),
                            o = t.value;
                        _p(r, function (t, r) {
                            n.deactivateRouteAndItsChildren(t, o.component ? e ? e.children.getContext(r) : null : e)
                        }), this.canDeactivateChecks.push(new kh(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
                    }, t.prototype.runCanDeactivateChecks = function () {
                        var t = this;
                        return ot(this.canDeactivateChecks).pipe(it(function (e) {
                            return t.runCanDeactivate(e.component, e.route)
                        }), au(function (t) {
                            return !0 === t
                        }))
                    }, t.prototype.runCanActivateChecks = function () {
                        var t = this;
                        return ot(this.canActivateChecks).pipe(gu(function (e) {
                            return bp(ot([t.fireChildActivationStart(e.route.parent), t.fireActivationStart(e.route), t.runCanActivateChild(e.path), t.runCanActivate(e.route)]))
                        }), au(function (t) {
                            return !0 === t
                        }))
                    }, t.prototype.fireActivationStart = function (t) {
                        return null !== t && this.forwardEvent && this.forwardEvent(new rp(t)), Hl(!0)
                    }, t.prototype.fireChildActivationStart = function (t) {
                        return null !== t && this.forwardEvent && this.forwardEvent(new ep(t)), Hl(!0)
                    }, t.prototype.runCanActivate = function (t) {
                        var e = this,
                            n = t.routeConfig ? t.routeConfig.canActivate : null;
                        return n && 0 !== n.length ? bp(ot(n).pipe(tt(function (n) {
                            var r = e.getToken(n, t);
                            return wp(r.canActivate ? r.canActivate(t, e.future) : r(t, e.future)).pipe(du())
                        }))) : Hl(!0)
                    }, t.prototype.runCanActivateChild = function (t) {
                        var e = this,
                            n = t[t.length - 1];
                        return bp(ot(t.slice(0, t.length - 1).reverse().map(function (t) {
                            return e.extractCanActivateChild(t)
                        }).filter(function (t) {
                            return null !== t
                        })).pipe(tt(function (t) {
                            return bp(ot(t.guards).pipe(tt(function (r) {
                                var o = e.getToken(r, t.node);
                                return wp(o.canActivateChild ? o.canActivateChild(n, e.future) : o(n, e.future)).pipe(du())
                            })))
                        })))
                    }, t.prototype.extractCanActivateChild = function (t) {
                        var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                        return e && 0 !== e.length ? {
                            node: t,
                            guards: e
                        } : null
                    }, t.prototype.runCanDeactivate = function (t, e) {
                        var n = this,
                            r = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                        return r && 0 !== r.length ? ot(r).pipe(it(function (r) {
                            var o = n.getToken(r, e);
                            return wp(o.canDeactivate ? o.canDeactivate(t, e, n.curr, n.future) : o(t, e, n.curr, n.future)).pipe(du())
                        })).pipe(au(function (t) {
                            return !0 === t
                        })) : Hl(!0)
                    }, t.prototype.runResolve = function (t, e) {
                        return this.resolveNode(t._resolve, t).pipe(tt(function (n) {
                            return t._resolvedData = n, t.data = i({}, t.data, sh(t, e).resolve), null
                        }))
                    }, t.prototype.resolveNode = function (t, e) {
                        var n = this,
                            r = Object.keys(t);
                        if (0 === r.length) return Hl({});
                        if (1 === r.length) {
                            var o = r[0];
                            return this.getResolver(t[o], e).pipe(tt(function (t) {
                                var e;
                                return (e = {})[o] = t, e
                            }))
                        }
                        var i = {};
                        return ot(r).pipe(it(function (r) {
                            return n.getResolver(t[r], e).pipe(tt(function (t) {
                                return i[r] = t, t
                            }))
                        })).pipe(iu(), tt(function () {
                            return i
                        }))
                    }, t.prototype.getResolver = function (t, e) {
                        var n = this.getToken(t, e);
                        return wp(n.resolve ? n.resolve(e, this.future) : n(e, this.future))
                    }, t.prototype.getToken = function (t, e) {
                        var n = function (t) {
                            if (!t) return null;
                            for (var e = t.parent; e; e = e.parent) {
                                var n = e.routeConfig;
                                if (n && n._loadedConfig) return n._loadedConfig
                            }
                            return null
                        }(e);
                        return (n ? n.module.injector : this.moduleInjector).get(t)
                    }, t
                }(),
                Oh = function () {},
                Th = function () {
                    function t(t, e, n, r, o, i) {
                        this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i
                    }
                    return t.prototype.recognize = function () {
                        try {
                            var t = Ah(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                e = this.processSegmentGroup(this.config, t, sp),
                                n = new lh([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, sp, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                r = new nh(n, e),
                                o = new uh(this.url, r);
                            return this.inheritParamsAndData(o._root), Hl(o)
                        } catch (t) {
                            return new D(function (e) {
                                return e.error(t)
                            })
                        }
                    }, t.prototype.inheritParamsAndData = function (t) {
                        var e = this,
                            n = t.value,
                            r = sh(n, this.paramsInheritanceStrategy);
                        n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function (t) {
                            return e.inheritParamsAndData(t)
                        })
                    }, t.prototype.processSegmentGroup = function (t, e, n) {
                        return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
                    }, t.prototype.processChildren = function (t, e) {
                        var n, r = this,
                            o = Pp(e, function (e, n) {
                                return r.processSegmentGroup(t, e, n)
                            });
                        return n = {}, o.forEach(function (t) {
                            var e = n[t.value.outlet];
                            if (e) {
                                var r = e.url.map(function (t) {
                                        return t.toString()
                                    }).join("/"),
                                    o = t.value.url.map(function (t) {
                                        return t.toString()
                                    }).join("/");
                                throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                            }
                            n[t.value.outlet] = t.value
                        }), o.sort(function (t, e) {
                            return t.value.outlet === sp ? -1 : e.value.outlet === sp ? 1 : t.value.outlet.localeCompare(e.value.outlet)
                        }), o
                    }, t.prototype.processSegment = function (t, e, n, r) {
                        var o, i;
                        try {
                            for (var a = u(t), s = a.next(); !s.done; s = a.next()) {
                                var l = s.value;
                                try {
                                    return this.processSegmentAgainstRoute(l, e, n, r)
                                } catch (t) {
                                    if (!(t instanceof Oh)) throw t
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (i = a.
                                    return) && i.call(a)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        if (this.noLeftoversInUrl(e, n, r)) return [];
                        throw new Oh
                    }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                        return 0 === e.length && !t.children[n]
                    }, t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
                        if (t.redirectTo) throw new Oh;
                        if ((t.outlet || sp) !== r) throw new Oh;
                        var o, a = [],
                            s = [];
                        if ("**" === t.path) {
                            var l = n.length > 0 ? vp(n).parameters : {};
                            o = new lh(n, l, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Rh(t), r, t.component, t, Mh(e), Ih(e) + n.length, jh(t))
                        } else {
                            var u = function (t, e, n) {
                                if ("" === e.path) {
                                    if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Oh;
                                    return {
                                        consumedSegments: [],
                                        lastChild: 0,
                                        parameters: {}
                                    }
                                }
                                var r = (e.matcher || cp)(n, t, e);
                                if (!r) throw new Oh;
                                var o = {};
                                _p(r.posParams, function (t, e) {
                                    o[e] = t.path
                                });
                                var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                                return {
                                    consumedSegments: r.consumed,
                                    lastChild: r.consumed.length,
                                    parameters: a
                                }
                            }(e, t, n);
                            a = u.consumedSegments, s = n.slice(u.lastChild), o = new lh(a, u.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Rh(t), r, t.component, t, Mh(e), Ih(e) + a.length, jh(t))
                        }
                        var c = function (t) {
                                return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                            }(t),
                            f = Ah(e, a, s, c, this.relativeLinkResolution),
                            p = f.segmentGroup,
                            h = f.slicedSegments;
                        if (0 === h.length && p.hasChildren()) {
                            var d = this.processChildren(c, p);
                            return [new nh(o, d)]
                        }
                        if (0 === c.length && 0 === h.length) return [new nh(o, [])];
                        var g = this.processSegment(c, p, h, sp);
                        return [new nh(o, g)]
                    }, t
                }();

            function Mh(t) {
                for (var e = t; e._sourceSegment;) e = e._sourceSegment;
                return e
            }
            function Ih(t) {
                for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
                return n - 1
            }
            function Ah(t, e, n, r, o) {
                if (n.length > 0 &&
                    function (t, e, n) {
                        return r.some(function (n) {
                            return Nh(t, e, n) && Dh(n) !== sp
                        })
                    }(t, n)) {
                    var a = new xp(e, function (t, e, n, r) {
                        var o, i, a = {};
                        a[sp] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                        try {
                            for (var s = u(n), l = s.next(); !l.done; l = s.next()) {
                                var c = l.value;
                                if ("" === c.path && Dh(c) !== sp) {
                                    var f = new xp([], {});
                                    f._sourceSegment = t, f._segmentIndexShift = e.length, a[Dh(c)] = f
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (i = s.
                                    return) && i.call(s)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    }(t, e, r, new xp(n, t.children)));
                    return a._sourceSegment = t, a._segmentIndexShift = e.length, {
                        segmentGroup: a,
                        slicedSegments: []
                    }
                }
                if (0 === n.length &&
                    function (t, e, n) {
                        return r.some(function (n) {
                            return Nh(t, e, n)
                        })
                    }(t, n)) {
                    var s = new xp(t.segments, function (t, e, n, r, o, a) {
                        var s, l, c = {};
                        try {
                            for (var f = u(r), p = f.next(); !p.done; p = f.next()) {
                                var h = p.value;
                                if (Nh(t, n, h) && !o[Dh(h)]) {
                                    var d = new xp([], {});
                                    d._sourceSegment = t, d._segmentIndexShift = "legacy" === a ? t.segments.length : e.length, c[Dh(h)] = d
                                }
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                p && !p.done && (l = f.
                                    return) && l.call(f)
                            } finally {
                                if (s) throw s.error
                            }
                        }
                        return i({}, o, c)
                    }(t, e, n, r, t.children, o));
                    return s._sourceSegment = t, s._segmentIndexShift = e.length, {
                        segmentGroup: s,
                        slicedSegments: n
                    }
                }
                var l = new xp(t.segments, t.children);
                return l._sourceSegment = t, l._segmentIndexShift = e.length, {
                    segmentGroup: l,
                    slicedSegments: n
                }
            }
            function Nh(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
            }
            function Dh(t) {
                return t.outlet || sp
            }
            function Rh(t) {
                return t.data || {}
            }
            function jh(t) {
                return t.resolve || {}
            }
            var Fh = function () {},
                Lh = function () {
                    function t() {}
                    return t.prototype.shouldDetach = function (t) {
                        return !1
                    }, t.prototype.store = function (t, e) {}, t.prototype.shouldAttach = function (t) {
                        return !1
                    }, t.prototype.retrieve = function (t) {
                        return null
                    }, t.prototype.shouldReuseRoute = function (t, e) {
                        return t.routeConfig === e.routeConfig
                    }, t
                }(),
                Hh = new vt("ROUTES"),
                Vh = function () {
                    function t(t, e, n, r) {
                        this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
                    }
                    return t.prototype.load = function (t, e) {
                        var n = this;
                        return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(tt(function (r) {
                            n.onLoadEndListener && n.onLoadEndListener(e);
                            var o = r.create(t);
                            return new fp(yp(o.injector.get(Hh)).map(gp), o)
                        }))
                    }, t.prototype.loadModuleFactory = function (t) {
                        var e = this;
                        return "string" == typeof t ? ot(this.loader.load(t)) : wp(t()).pipe(it(function (t) {
                            return t instanceof en ? Hl(t) : ot(e.compiler.compileModuleAsync(t))
                        }))
                    }, t
                }(),
                Uh = function () {},
                zh = function () {
                    function t() {}
                    return t.prototype.shouldProcessUrl = function (t) {
                        return !0
                    }, t.prototype.extract = function (t) {
                        return t
                    }, t.prototype.merge = function (t, e) {
                        return t
                    }, t
                }();

            function Bh(t) {
                throw t
            }
            function qh(t, e, n) {
                return e.parse("/")
            }
            function Kh(t, e) {
                return Hl(null)
            }
            var Qh = function () {
                    function t(t, e, n, r, o, i, a, s) {
                        var l = this;
                        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = s, this.navigations = new zl(null), this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new V, this.errorHandler = Bh, this.malformedUriErrorHandler = qh, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: Kh,
                            afterPreactivation: Kh
                        }, this.urlHandlingStrategy = new zh, this.routeReuseStrategy = new Lh, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(tn), this.console = o.get(Ve);
                        var u = o.get(ln);
                        this.isNgZoneEnabled = u instanceof ln, this.resetConfig(s), this.currentUrlTree = new Sp(new xp([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.configLoader = new Vh(i, a, function (t) {
                            return l.triggerEvent(new Xf(t))
                        }, function (t) {
                            return l.triggerEvent(new tp(t))
                        }), this.routerState = ih(this.currentUrlTree, this.rootComponentType), this.processNavigations()
                    }
                    return t.prototype.resetRootComponentType = function (t) {
                        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                    }, t.prototype.initialNavigation = function () {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }, t.prototype.setUpLocationChangeListener = function () {
                        var t = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(function (e) {
                            var n = t.parseUrl(e.url),
                                r = "popstate" === e.type ? "popstate" : "hashchange",
                                o = e.state && e.state.navigationId ? {
                                    navigationId: e.state.navigationId
                                } : null;
                            setTimeout(function () {
                                t.scheduleNavigation(n, r, o, {
                                    replaceUrl: !0
                                })
                            }, 0)
                        }))
                    }, Object.defineProperty(t.prototype, "url", {
                        get: function () {
                            return this.serializeUrl(this.currentUrlTree)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.triggerEvent = function (t) {
                        this.events.next(t)
                    }, t.prototype.resetConfig = function (t) {
                        pp(t), this.config = t.map(gp), this.navigated = !1, this.lastSuccessfulId = -1
                    }, t.prototype.ngOnDestroy = function () {
                        this.dispose()
                    }, t.prototype.dispose = function () {
                        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                    }, t.prototype.createUrlTree = function (t, e) {
                        void 0 === e && (e = {});
                        var n = e.relativeTo,
                            r = e.queryParams,
                            o = e.fragment,
                            a = e.preserveQueryParams,
                            s = e.queryParamsHandling,
                            l = e.preserveFragment;
                        Cn() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var u = n || this.routerState.root,
                            c = l ? this.currentUrlTree.fragment : o,
                            p = null;
                        if (s) switch (s) {
                            case "merge":
                                p = i({}, this.currentUrlTree.queryParams, r);
                                break;
                            case "preserve":
                                p = this.currentUrlTree.queryParams;
                                break;
                            default:
                                p = r || null
                        } else p = a ? this.currentUrlTree.queryParams : r || null;
                        return null !== p && (p = this.removeEmptyProps(p)), function (t, e, n, r, o) {
                            if (0 === n.length) return gh(e.root, e.root, e, r, o);
                            var i = function (t) {
                                if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new mh(!0, 0, t);
                                var e = 0,
                                    n = !1,
                                    r = t.reduce(function (t, r, o) {
                                        if ("object" == typeof r && null != r) {
                                            if (r.outlets) {
                                                var i = {};
                                                return _p(r.outlets, function (t, e) {
                                                    i[e] = "string" == typeof t ? t.split("/") : t
                                                }), f(t, [{
                                                    outlets: i
                                                }])
                                            }
                                            if (r.segmentPath) return f(t, [r.segmentPath])
                                        }
                                        return "string" != typeof r ? f(t, [r]) : 0 === o ? (r.split("/").forEach(function (r, o) {
                                            0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                        }), t) : f(t, [r])
                                    }, []);
                                return new mh(n, e, r)
                            }(n);
                            if (i.toRoot()) return gh(e.root, new xp([], {}), e, r, o);
                            var a = function (t, n, r) {
                                    if (t.isAbsolute) return new yh(e.root, !0, 0);
                                    if (-1 === r.snapshot._lastPathIndex) return new yh(r.snapshot._urlSegment, !0, 0);
                                    var o = dh(t.commands[0]) ? 0 : 1;
                                    return function (e, n, i) {
                                        for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, l = t.numberOfDoubleDots; l > s;) {
                                            if (l -= s, !(a = a.parent)) throw new Error("Invalid number of '../'");
                                            s = a.segments.length
                                        }
                                        return new yh(a, !1, s - l)
                                    }()
                                }(i, 0, t),
                                s = a.processChildren ? bh(a.segmentGroup, a.index, i.commands) : _h(a.segmentGroup, a.index, i.commands);
                            return gh(a.segmentGroup, s, e, r, o)
                        }(u, this.currentUrlTree, t, p, c)
                    }, t.prototype.navigateByUrl = function (t, e) {
                        void 0 === e && (e = {
                            skipLocationChange: !1
                        }), Cn() && this.isNgZoneEnabled && !ln.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                        var n = t instanceof Sp ? t : this.parseUrl(t),
                            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, e)
                    }, t.prototype.navigate = function (t, e) {
                        return void 0 === e && (e = {
                            skipLocationChange: !1
                        }), function (t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                            }
                        }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                    }, t.prototype.serializeUrl = function (t) {
                        return this.urlSerializer.serialize(t)
                    }, t.prototype.parseUrl = function (t) {
                        var e;
                        try {
                            e = this.urlSerializer.parse(t)
                        } catch (n) {
                            e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                        }
                        return e
                    }, t.prototype.isActive = function (t, e) {
                        if (t instanceof Sp) return Cp(this.currentUrlTree, t, e);
                        var n = this.parseUrl(t);
                        return Cp(this.currentUrlTree, n, e)
                    }, t.prototype.removeEmptyProps = function (t) {
                        return Object.keys(t).reduce(function (e, n) {
                            var r = t[n];
                            return null !== r && void 0 !== r && (e[n] = r), e
                        }, {})
                    }, t.prototype.processNavigations = function () {
                        var t = this;
                        this.navigations.pipe(gu(function (e) {
                            return e ? (t.executeScheduledNavigation(e), e.promise.
                            catch (function () {})) : Hl(null)
                        })).subscribe(function () {})
                    }, t.prototype.scheduleNavigation = function (t, e, n, r) {
                        var o = this.navigations.value;
                        if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        var i = null,
                            a = null,
                            s = new Promise(function (t, e) {
                                i = t, a = e
                            }),
                            l = ++this.navigationId;
                        return this.navigations.next({
                            id: l,
                            source: e,
                            state: n,
                            rawUrl: t,
                            extras: r,
                            resolve: i,
                            reject: a,
                            promise: s
                        }), s.
                        catch (function (t) {
                            return Promise.reject(t)
                        })
                    }, t.prototype.executeScheduledNavigation = function (t) {
                        var e = this,
                            n = t.id,
                            r = t.rawUrl,
                            o = t.extras,
                            i = t.resolve,
                            a = t.reject,
                            s = t.source,
                            l = t.state,
                            u = this.urlHandlingStrategy.extract(r),
                            c = !this.navigated || u.toString() !== this.currentUrlTree.toString();
                        ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r) ? ("eager" !== this.urlUpdateStrategy || o.skipLocationChange || this.setBrowserUrl(r, !! o.replaceUrl, n), this.events.next(new qf(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function (t) {
                            return e.runNavigate(u, r, !! o.skipLocationChange, !! o.replaceUrl, n, null)
                        }).then(i, a)) : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.events.next(new qf(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function (t) {
                            return e.runNavigate(u, r, !1, !1, n, ih(u, e.rootComponentType).snapshot)
                        }).then(i, a)) : (this.rawUrlTree = r, i(null))
                    }, t.prototype.runNavigate = function (t, e, n, r, o, i) {
                        var a = this;
                        return o !== this.navigationId ? (this.events.next(new Qf(o, this.serializeUrl(t), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function (s, l) {
                            var c, f = (i ? Hl({
                                appliedUrl: t,
                                snapshot: i
                            }) : new $p(a.ngModule.injector, a.configLoader, a.urlSerializer, t, a.config).apply().pipe(it(function (e) {
                                return function (t, e, n, r, o, i) {
                                    return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new Th(t, e, n, r, o, i).recognize()
                                }(a.rootComponentType, a.config, e, a.serializeUrl(e), a.paramsInheritanceStrategy, a.relativeLinkResolution).pipe(tt(function (n) {
                                    return a.events.next(new $f(o, a.serializeUrl(t), a.serializeUrl(e), n)), {
                                        appliedUrl: e,
                                        snapshot: n
                                    }
                                }))
                            }))).pipe(it(function (i) {
                                return "boolean" == typeof i ? Hl(i) : a.hooks.beforePreactivation(i.snapshot, {
                                    navigationId: o,
                                    appliedUrlTree: t,
                                    rawUrlTree: e,
                                    skipLocationChange: n,
                                    replaceUrl: r
                                }).pipe(tt(function () {
                                    return i
                                }))
                            })).pipe(tt(function (t) {
                                if ("boolean" == typeof t) return t;
                                var e = t.appliedUrl,
                                    n = t.snapshot;
                                return (c = new Ph(n, a.routerState.snapshot, a.ngModule.injector, function (t) {
                                    return a.triggerEvent(t)
                                })).initialize(a.rootContexts), {
                                    appliedUrl: e,
                                    snapshot: n
                                }
                            })).pipe(it(function (e) {
                                if ("boolean" == typeof e || a.navigationId !== o) return Hl(!1);
                                var n = e.appliedUrl,
                                    r = e.snapshot;
                                return a.triggerEvent(new Gf(o, a.serializeUrl(t), a.serializeUrl(n), r)), c.checkGuards().pipe(tt(function (e) {
                                    return a.triggerEvent(new Zf(o, a.serializeUrl(t), a.serializeUrl(n), r, e)), {
                                        appliedUrl: n,
                                        snapshot: r,
                                        shouldActivate: e
                                    }
                                }))
                            })).pipe(it(function (e) {
                                return "boolean" == typeof e || a.navigationId !== o ? Hl(!1) : e.shouldActivate && c.isActivating() ? (a.triggerEvent(new Yf(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)), c.resolveData(a.paramsInheritanceStrategy).pipe(tt(function () {
                                    return a.triggerEvent(new Jf(o, a.serializeUrl(t), a.serializeUrl(e.appliedUrl), e.snapshot)), e
                                }))) : Hl(e)
                            })).pipe(it(function (i) {
                                return "boolean" == typeof i || a.navigationId !== o ? Hl(!1) : a.hooks.afterPreactivation(i.snapshot, {
                                    navigationId: o,
                                    appliedUrlTree: t,
                                    rawUrlTree: e,
                                    skipLocationChange: n,
                                    replaceUrl: r
                                }).pipe(tt(function () {
                                    return i
                                }))
                            })).pipe(tt(function (t) {
                                if ("boolean" == typeof t || a.navigationId !== o) return !1;
                                var e, n, r, i = t.appliedUrl,
                                    s = t.shouldActivate;
                                return s ? {
                                    appliedUrl: i,
                                    state: (r = function t(e, n, r) {
                                        if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                            (l = r.value)._futureSnapshot = n.value;
                                            var o = function (e, n, r) {
                                                return n.children.map(function (n) {
                                                    var o, i;
                                                    try {
                                                        for (var a = u(r.children), s = a.next(); !s.done; s = a.next()) {
                                                            var l = s.value;
                                                            if (e.shouldReuseRoute(l.value.snapshot, n.value)) return t(e, n, l)
                                                        }
                                                    } catch (t) {
                                                        o = {
                                                            error: t
                                                        }
                                                    } finally {
                                                        try {
                                                            s && !s.done && (i = a.
                                                                return) && i.call(a)
                                                        } finally {
                                                            if (o) throw o.error
                                                        }
                                                    }
                                                    return t(e, n)
                                                })
                                            }(e, n, r);
                                            return new nh(l, o)
                                        }
                                        var i = e.retrieve(n.value);
                                        if (i) {
                                            var a = i.route;
                                            return function t(e, n) {
                                                if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = e.value;
                                                for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                                            }(n, a), a
                                        }
                                        var s, l = new ah(new zl((s = n.value).url), new zl(s.params), new zl(s.queryParams), new zl(s.fragment), new zl(s.data), s.outlet, s.component, s);
                                        return o = n.children.map(function (n) {
                                            return t(e, n)
                                        }), new nh(l, o)
                                    }(a.routeReuseStrategy, (e = t.snapshot)._root, (n = a.routerState) ? n._root : void 0), new oh(r, e)),
                                    shouldActivate: s
                                } : {
                                    appliedUrl: i,
                                    state: null,
                                    shouldActivate: s
                                }
                            }));
                            a.activateRoutes(f, a.routerState, a.currentUrlTree, o, t, e, n, r, s, l)
                        })
                    }, t.prototype.activateRoutes = function (t, e, n, r, o, i, a, s, l, u) {
                        var c, f = this;
                        t.forEach(function (t) {
                            if ("boolean" != typeof t && t.shouldActivate && r === f.navigationId && t.state) {
                                var n = t.state;
                                f.currentUrlTree = t.appliedUrl, f.rawUrlTree = f.urlHandlingStrategy.merge(f.currentUrlTree, i), f.routerState = n, "deferred" !== f.urlUpdateStrategy || a || f.setBrowserUrl(f.rawUrlTree, s, r), new Wh(f.routeReuseStrategy, n, e, function (t) {
                                    return f.triggerEvent(t)
                                }).activate(f.rootContexts), c = !0
                            } else c = !1
                        }).then(function () {
                            c ? (f.navigated = !0, f.lastSuccessfulId = r, f.events.next(new Kf(r, f.serializeUrl(o), f.serializeUrl(f.currentUrlTree))), l(!0)) : (f.resetUrlToCurrentUrlTree(), f.events.next(new Qf(r, f.serializeUrl(o), "")), l(!1))
                        }, function (t) {
                            if ((a = t) && a.ngNavigationCancelingError) f.navigated = !0, f.resetStateAndUrl(e, n, i), f.events.next(new Qf(r, f.serializeUrl(o), t.message)), l(!1);
                            else {
                                f.resetStateAndUrl(e, n, i), f.events.next(new Wf(r, f.serializeUrl(o), t));
                                try {
                                    l(f.errorHandler(t))
                                } catch (t) {
                                    u(t)
                                }
                            }
                            var a
                        })
                    }, t.prototype.setBrowserUrl = function (t, e, n) {
                        var r = this.urlSerializer.serialize(t);
                        this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", {
                            navigationId: n
                        }) : this.location.go(r, "", {
                            navigationId: n
                        })
                    }, t.prototype.resetStateAndUrl = function (t, e, n) {
                        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                    }, t.prototype.resetUrlToCurrentUrlTree = function () {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                            navigationId: this.lastSuccessfulId
                        })
                    }, t
                }(),
                Wh = function () {
                    function t(t, e, n, r) {
                        this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
                    }
                    return t.prototype.activate = function (t) {
                        var e = this.futureState._root,
                            n = this.currState ? this.currState._root : null;
                        this.deactivateChildRoutes(e, n, t), ph(this.futureState.root), this.activateChildRoutes(e, n, t)
                    }, t.prototype.deactivateChildRoutes = function (t, e, n) {
                        var r = this,
                            o = rh(e);
                        t.children.forEach(function (t) {
                            var e = t.value.outlet;
                            r.deactivateRoutes(t, o[e], n), delete o[e]
                        }), _p(o, function (t, e) {
                            r.deactivateRouteAndItsChildren(t, n)
                        })
                    }, t.prototype.deactivateRoutes = function (t, e, n) {
                        var r = t.value,
                            o = e ? e.value : null;
                        if (r === o) if (r.component) {
                            var i = n.getContext(r.outlet);
                            i && this.deactivateChildRoutes(t, e, i.children)
                        } else this.deactivateChildRoutes(t, e, n);
                        else o && this.deactivateRouteAndItsChildren(e, n)
                    }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                        this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
                    }, t.prototype.detachAndStoreRouteSubtree = function (t, e) {
                        var n = e.getContext(t.value.outlet);
                        if (n && n.outlet) {
                            var r = n.outlet.detach(),
                                o = n.children.onOutletDeactivated();
                            this.routeReuseStrategy.store(t.value.snapshot, {
                                componentRef: r,
                                route: t,
                                contexts: o
                            })
                        }
                    }, t.prototype.deactivateRouteAndOutlet = function (t, e) {
                        var n = this,
                            r = e.getContext(t.value.outlet);
                        if (r) {
                            var o = rh(t),
                                i = t.value.component ? r.children : e;
                            _p(o, function (t, e) {
                                return n.deactivateRouteAndItsChildren(t, i)
                            }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                        }
                    }, t.prototype.activateChildRoutes = function (t, e, n) {
                        var r = this,
                            o = rh(e);
                        t.children.forEach(function (t) {
                            r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new op(t.value.snapshot))
                        }), t.children.length && this.forwardEvent(new np(t.value.snapshot))
                    }, t.prototype.activateRoutes = function (t, e, n) {
                        var r = t.value,
                            o = e ? e.value : null;
                        if (ph(r), r === o) if (r.component) {
                            var i = n.getOrCreateContext(r.outlet);
                            this.activateChildRoutes(t, e, i.children)
                        } else this.activateChildRoutes(t, e, n);
                        else if (r.component) if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                            var a = this.routeReuseStrategy.retrieve(r.snapshot);
                            this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(a.contexts), i.attachRef = a.componentRef, i.route = a.route.value, i.outlet && i.outlet.attach(a.componentRef, a.route.value), $h(a.route)
                        } else {
                            var s = function (t) {
                                    for (var e = r.snapshot.parent; e; e = e.parent) {
                                        var n = e.routeConfig;
                                        if (n && n._loadedConfig) return n._loadedConfig;
                                        if (n && n.component) return null
                                    }
                                    return null
                                }(),
                                l = s ? s.module.componentFactoryResolver : null;
                            i.attachRef = null, i.route = r, i.resolver = l, i.outlet && i.outlet.activateWith(r, l), this.activateChildRoutes(t, null, i.children)
                        } else this.activateChildRoutes(t, null, n)
                    }, t
                }();

            function $h(t) {
                ph(t.value), t.children.forEach($h)
            }
            var Gh = function () {
                function t(t, e, n) {
                    var r = this;
                    this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(function (t) {
                        t instanceof Kf && r.updateTargetUrlAndHref()
                    })
                }
                return Object.defineProperty(t.prototype, "routerLink", {
                    set: function (t) {
                        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "preserveQueryParams", {
                    set: function (t) {
                        Cn() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnChanges = function (t) {
                    this.updateTargetUrlAndHref()
                }, t.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe()
                }, t.prototype.onClick = function (t, e, n, r) {
                    if (0 !== t || e || n || r) return !0;
                    if ("string" == typeof this.target && "_self" != this.target) return !0;
                    var o = {
                        skipLocationChange: Zh(this.skipLocationChange),
                        replaceUrl: Zh(this.replaceUrl)
                    };
                    return this.router.navigateByUrl(this.urlTree, o), !1
                }, t.prototype.updateTargetUrlAndHref = function () {
                    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                }, Object.defineProperty(t.prototype, "urlTree", {
                    get: function () {
                        return this.router.createUrlTree(this.commands, {
                            relativeTo: this.route,
                            queryParams: this.queryParams,
                            fragment: this.fragment,
                            preserveQueryParams: Zh(this.preserve),
                            queryParamsHandling: this.queryParamsHandling,
                            preserveFragment: Zh(this.preserveFragment)
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), a([Pt("attr.target"), kt(), l("design:type", String)], t.prototype, "target", void 0), t
            }();

            function Zh(t) {
                return "" === t || !! t
            }
            var Yh = function () {
                    function t(t, e, n, r) {
                        var o = this;
                        this.router = t, this.element = e, this.renderer = n, this.cdr = r, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
                            exact: !1
                        }, this.subscription = t.events.subscribe(function (t) {
                            t instanceof Kf && o.update()
                        })
                    }
                    return t.prototype.ngAfterContentInit = function () {
                        var t = this;
                        this.links.changes.subscribe(function (e) {
                            return t.update()
                        }), this.linksWithHrefs.changes.subscribe(function (e) {
                            return t.update()
                        }), this.update()
                    }, Object.defineProperty(t.prototype, "routerLinkActive", {
                        set: function (t) {
                            var e = Array.isArray(t) ? t : t.split(" ");
                            this.classes = e.filter(function (t) {
                                return !!t
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngOnChanges = function (t) {
                        this.update()
                    }, t.prototype.ngOnDestroy = function () {
                        this.subscription.unsubscribe()
                    }, t.prototype.update = function () {
                        var t = this;
                        this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(function () {
                            var e = t.hasActiveLinks();
                            t.isActive !== e && (t.isActive = e, t.classes.forEach(function (n) {
                                e ? t.renderer.addClass(t.element.nativeElement, n) : t.renderer.removeClass(t.element.nativeElement, n)
                            }))
                        })
                    }, t.prototype.isLinkActive = function (t) {
                        var e = this;
                        return function (n) {
                            return t.isActive(n.urlTree, e.routerLinkActiveOptions.exact)
                        }
                    }, t.prototype.hasActiveLinks = function () {
                        return this.links.some(this.isLinkActive(this.router)) || this.linksWithHrefs.some(this.isLinkActive(this.router))
                    }, t
                }(),
                Jh = function () {
                    return function () {
                        this.outlet = null, this.route = null, this.resolver = null, this.children = new Xh, this.attachRef = null
                    }
                }(),
                Xh = function () {
                    function t() {
                        this.contexts = new Map
                    }
                    return t.prototype.onChildOutletCreated = function (t, e) {
                        var n = this.getOrCreateContext(t);
                        n.outlet = e, this.contexts.set(t, n)
                    }, t.prototype.onChildOutletDestroyed = function (t) {
                        var e = this.getContext(t);
                        e && (e.outlet = null)
                    }, t.prototype.onOutletDeactivated = function () {
                        var t = this.contexts;
                        return this.contexts = new Map, t
                    }, t.prototype.onOutletReAttached = function (t) {
                        this.contexts = t
                    }, t.prototype.getOrCreateContext = function (t) {
                        var e = this.getContext(t);
                        return e || (e = new Jh, this.contexts.set(t, e)), e
                    }, t.prototype.getContext = function (t) {
                        return this.contexts.get(t) || null
                    }, t
                }(),
                td = function () {
                    function t(t, e, n, r, o) {
                        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new sn, this.deactivateEvents = new sn, this.name = r || sp, t.onChildOutletCreated(this.name, this)
                    }
                    return t.prototype.ngOnDestroy = function () {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }, t.prototype.ngOnInit = function () {
                        if (!this.activated) {
                            var t = this.parentContexts.getContext(this.name);
                            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                        }
                    }, Object.defineProperty(t.prototype, "isActivated", {
                        get: function () {
                            return !!this.activated
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "component", {
                        get: function () {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this.activated.instance
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRoute", {
                        get: function () {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this._activatedRoute
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRouteData", {
                        get: function () {
                            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.detach = function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var t = this.activated;
                        return this.activated = null, this._activatedRoute = null, t
                    }, t.prototype.attach = function (t, e) {
                        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                    }, t.prototype.deactivate = function () {
                        if (this.activated) {
                            var t = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                        }
                    }, t.prototype.activateWith = function (t, e) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = t;
                        var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            o = new ed(t, r, this.location.injector);
                        this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }, a([s(3, Et("name"))], t)
                }(),
                ed = function () {
                    function t(t, e, n) {
                        this.route = t, this.childContexts = e, this.parent = n
                    }
                    return t.prototype.get = function (t, e) {
                        return t === ah ? this.route : t === Xh ? this.childContexts : this.parent.get(t, e)
                    }, t
                }(),
                nd = function () {},
                rd = function () {
                    function t() {}
                    return t.prototype.preload = function (t, e) {
                        return e().pipe(uu(function () {
                            return Hl(null)
                        }))
                    }, t
                }(),
                od = function () {
                    function t() {}
                    return t.prototype.preload = function (t, e) {
                        return Hl(null)
                    }, t
                }(),
                id = function () {
                    function t(t, e, n, r, o) {
                        this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new Vh(e, n, function (e) {
                            return t.triggerEvent(new Xf(e))
                        }, function (e) {
                            return t.triggerEvent(new tp(e))
                        })
                    }
                    return t.prototype.setUpPreloading = function () {
                        var t = this;
                        this.subscription = this.router.events.pipe(ql(function (t) {
                            return t instanceof Kf
                        }), gu(function () {
                            return t.preload()
                        })).subscribe(function () {})
                    }, t.prototype.preload = function () {
                        var t = this.injector.get(tn);
                        return this.processRoutes(t, this.router.config)
                    }, t.prototype.ngOnDestroy = function () {
                        this.subscription.unsubscribe()
                    }, t.prototype.processRoutes = function (t, e) {
                        var n, r, o = [];
                        try {
                            for (var i = u(e), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                                    var l = s._loadedConfig;
                                    o.push(this.processRoutes(l.module, l.routes))
                                } else s.loadChildren && !s.canLoad ? o.push(this.preloadConfig(t, s)) : s.children && o.push(this.processRoutes(t, s.children))
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (r = i.
                                    return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return ot(o).pipe(ut(), tt(function (t) {}))
                    }, t.prototype.preloadConfig = function (t, e) {
                        var n = this;
                        return this.preloadingStrategy.preload(e, function () {
                            return n.loader.load(t.injector, e).pipe(it(function (t) {
                                return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
                            }))
                        })
                    }, t
                }(),
                ad = function () {
                    function t(t, e, n) {
                        void 0 === n && (n = {}), this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                    }
                    return t.prototype.init = function () {
                        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                    }, t.prototype.createScrollEvents = function () {
                        var t = this;
                        return this.router.events.subscribe(function (e) {
                            e instanceof qf ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof Kf && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
                        })
                    }, t.prototype.consumeScrollEvents = function () {
                        var t = this;
                        return this.router.events.subscribe(function (e) {
                            e instanceof ip && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
                        })
                    }, t.prototype.scheduleScrollEvent = function (t, e) {
                        this.router.triggerEvent(new ip(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
                    }, t.prototype.ngOnDestroy = function () {
                        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                    }, t
                }(),
                sd = new vt("ROUTER_CONFIGURATION"),
                ld = new vt("ROUTER_FORROOT_GUARD"),
                ud = [Su,
                    {
                        provide: Op,
                        useClass: Tp
                    },
                    {
                        provide: Qh,
                        useFactory: md,
                        deps: [On, Op, Xh, Su, $t, Dn, ze, Hh, sd, [Uh, new Vt],
                            [Fh, new Vt]
                        ]
                    },
                    Xh,
                    {
                        provide: ah,
                        useFactory: yd,
                        deps: [Qh]
                    },
                    {
                        provide: Dn,
                        useClass: Ln
                    },
                    id, od, rd,
                    {
                        provide: sd,
                        useValue: {
                            enableTracing: !1
                        }
                    }];

            function cd() {
                return new Sn("Router", Qh)
            }
            var fd = function () {
                function t(t, e) {}
                var e;
                return e = t, t.forRoot = function (t, n) {
                    return {
                        ngModule: e,
                        providers: [ud, gd(t),
                            {
                                provide: ld,
                                useFactory: dd,
                                deps: [
                                    [Qh, new Vt, new zt]
                                ]
                            },
                            {
                                provide: sd,
                                useValue: n || {}
                            },
                            {
                                provide: wu,
                                useFactory: hd,
                                deps: [_u, [new Ht(Cu), new Vt], sd]
                            },
                            {
                                provide: ad,
                                useFactory: pd,
                                deps: [Qh, kc, sd]
                            },
                            {
                                provide: nd,
                                useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : od
                            },
                            {
                                provide: Sn,
                                multi: !0,
                                useFactory: cd
                            }, [vd,
                                {
                                    provide: De,
                                    multi: !0,
                                    useFactory: _d,
                                    deps: [vd]
                                },
                                {
                                    provide: wd,
                                    useFactory: bd,
                                    deps: [vd]
                                },
                                {
                                    provide: He,
                                    multi: !0,
                                    useExisting: wd
                                }]]
                    }
                }, t.forChild = function (t) {
                    return {
                        ngModule: e,
                        providers: [gd(t)]
                    }
                }, e = a([s(0, Vt()), s(0, Ht(ld)), s(1, Vt())], t)
            }();

            function pd(t, e, n) {
                return n.scrollOffset && e.setOffset(n.scrollOffset), new ad(t, e, n)
            }
            function hd(t, e, n) {
                return void 0 === n && (n = {}), n.useHash ? new Eu(t, e) : new ku(t, e)
            }
            function dd(t) {
                if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
                return "guarded"
            }
            function gd(t) {
                return [{
                    provide: xt,
                    multi: !0,
                    useValue: t
                }, {
                    provide: Hh,
                    multi: !0,
                    useValue: t
                }]
            }
            function md(t, e, n, r, o, i, a, s, l, u, c) {
                void 0 === l && (l = {});
                var f = new Qh(null, e, n, r, o, i, a, yp(s));
                if (u && (f.urlHandlingStrategy = u), c && (f.routeReuseStrategy = c), l.errorHandler && (f.errorHandler = l.errorHandler), l.malformedUriErrorHandler && (f.malformedUriErrorHandler = l.malformedUriErrorHandler), l.enableTracing) {
                    var p = Tc();
                    f.events.subscribe(function (t) {
                        p.logGroup("Router Event: " + t.constructor.name), p.log(t.toString()), p.log(t), p.logGroupEnd()
                    })
                }
                return l.onSameUrlNavigation && (f.onSameUrlNavigation = l.onSameUrlNavigation), l.paramsInheritanceStrategy && (f.paramsInheritanceStrategy = l.paramsInheritanceStrategy), l.urlUpdateStrategy && (f.urlUpdateStrategy = l.urlUpdateStrategy), l.relativeLinkResolution && (f.relativeLinkResolution = l.relativeLinkResolution), f
            }
            function yd(t) {
                return t.routerState.root
            }
            var vd = function () {
                function t(t) {
                    this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new V
                }
                return t.prototype.appInitializer = function () {
                    var t = this;
                    return this.injector.get(bu, Promise.resolve(null)).then(function () {
                        var e = null,
                            n = new Promise(function (t) {
                                return e = t
                            }),
                            r = t.injector.get(Qh),
                            o = t.injector.get(sd);
                        if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
                        else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
                        else {
                            if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                            r.hooks.afterPreactivation = function () {
                                return t.initNavigation ? Hl(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
                            }, r.initialNavigation()
                        }
                        return n
                    })
                }, t.prototype.bootstrapListener = function (t) {
                    var e = this.injector.get(sd),
                        n = this.injector.get(id),
                        r = this.injector.get(ad),
                        o = this.injector.get(Qh),
                        i = this.injector.get(On);
                    t === i.components[0] && (this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }, t.prototype.isLegacyEnabled = function (t) {
                    return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
                }, t.prototype.isLegacyDisabled = function (t) {
                    return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
                }, t
            }();

            function _d(t) {
                return t.appInitializer.bind(t)
            }
            function bd(t) {
                return t.bootstrapListener.bind(t)
            }
            var wd = new vt("Router Initializer"),
                Cd = function (t) {
                    return t[t.sm = 0] = "sm", t[t.lg = 1] = "lg", t
                }({}),
                Sd = n("4Z/T"),
                xd = function () {
                    function t(t) {
                        this.config = Object.assign({}, {
                            extend: t
                        }, window.__inside__), this.ssr = this.config.ssr
                    }
                    return t.prototype.i18n = function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        if (!t) return "";
                        var r, o = this.config.locale;
                        return "_p" === e[0] && (r = !0, e.shift()), function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            if (!t.length) return "";
                            var n = t.shift(),
                                i = t.length ? +t[0] : 0;
                            if (!r) return Object(Sd.vsprintf)(o[n] || n, t);
                            var a = n;
                            return !i && o.hasOwnProperty(n + ".zero") ? a = o[n + ".zero"] : 1 === i && o.hasOwnProperty(n + ".one") ? a = o[n + ".one"] : o.hasOwnProperty(n + ".other") ? a = o[n + ".other"] : o.hasOwnProperty(n) && (a = o[n]), Object(Sd.vsprintf)(a, t)
                        }(t, e)
                    }, t.prototype.process = function () {}, t.prototype.getCache = function (t) {
                        var e = document.getElementById("inside-state"),
                            n = {};
                        if (e && e.textContent) {
                            try {
                                n = JSON.parse(this.unescapeHtml(e.textContent))
                            } catch (t) {
                                console.warn("Exception occured while parsing state", t)
                            }
                            return n[t]
                        }
                        return null
                    }, t.prototype.unescapeHtml = function (t) {
                        var e = {
                            "&a;": "&",
                            "&q;": '"',
                            "&s;": "'",
                            "&l;": "<",
                            "&g;": ">"
                        };
                        return t.replace(/&[^;]+;/g, function (t) {
                            return e[t]
                        })
                    }, t
                }(),
                Ed = function () {
                    function t() {
                        this.subject = new V, this.state = this.subject.asObservable(), this.busy = !1
                    }
                    return t.prototype.show = function () {
                        this.busy = !0, this.subject.next(!0)
                    }, t.prototype.hide = function () {
                        this.busy = !1, this.subject.next(!1)
                    }, t
                }(),
                kd = {
                    colors: {}
                },
                Pd = [1, 717];

            function Od(t, e, n, r) {
                if (n.from !== n.to) {
                    n.duration || (t[e] = n.to);
                    var o = n.from,
                        i = n.to,
                        a = Math.ceil((n.duration || 300) / 17) || 1,
                        s = 0,
                        l = null;
                    !
                        function n() {
                            var u, c = Math.ceil((i - o) * ((u = (u = s) / a - 1) * u * u + 1) + o);
                            ++s <= a ? (t[e] = c, l = requestAnimationFrame(n)) : (r && r(), cancelAnimationFrame(l))
                        }()
                }
            }
            var Td = function () {
                    function t(t, e) {
                        this.loader = t, this.app = e, this.version = "", this.apiPrefix = this.app.config.api || "/api", this.version = this.app.config.hash || ""
                    }
                    return t.prototype.get = function (t) {
                        var e = this;
                        if (t = this.getFullUrl(t), !this.app.ssr) {
                            var n = this.app.getCache(t.split("?")[0]);
                            if (n) return Promise.resolve(n)
                        }
                        return this.loader.show(), fetch(t).then(function (t) {
                            return e.loader.hide(), t.json()
                        }).
                        catch (function (t) {
                            return e.loader.hide(), Promise.reject(t)
                        })
                    }, t.prototype.getFullUrl = function (t) {
                        return this.apiPrefix + "/" +
                            function (t) {
                                var e, n, r, o, i, a, s, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                    u = "",
                                    c = 0;
                                for (t = function (t) {
                                    t = t.replace(/\r\n/g, "\n");
                                    for (var e = "", n = 0; n < t.length; n++) {
                                        var r = t.charCodeAt(n);
                                        r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
                                    }
                                    return e
                                }(t); c < t.length;) o = (e = t.charCodeAt(c++)) >> 2, i = (3 & e) << 4 | (n = t.charCodeAt(c++)) >> 4, a = (15 & n) << 2 | (r = t.charCodeAt(c++)) >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), u = u + l.charAt(o) + l.charAt(i) + l.charAt(a) + l.charAt(s);
                                return u.replace(/=/g, "")
                            }(t.replace(/(^\/*|\/*$)/g, "")) + ".json?v=" + this.version
                    }, t
                }(),
                Md = function () {
                    function t(t, e, n) {
                        this.appService = t, this.http = e, this.router = n, this.track = 0, this.config = this.appService.config
                    }
                    return t.prototype.getData = function (t, e) {
                        return this.http.get(t + (e > 1 ? "/" + e : "")).
                        catch (this.error.bind(this))
                    }, t.prototype.error = function (t) {
                        return this.track < 1 && (this.router.navigate(["/"]), this.track++), {}
                    }, t
                }(),
                Id = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        var e = +t.params.page;
                        return "NaN" === String(e) && (e = 1), this.getData("posts", e)
                    }, e
                }(Md),
                Ad = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        return this.getData("post/" + t.params.slug)
                    }, e
                }(Md),
                Nd = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        return this.getData("page/" + t.routeConfig.path)
                    }, e
                }(Md),
                Dd = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        var e = +t.params.page;
                        return "NaN" === String(e) && (e = 1), this.getData("archives", e)
                    }, e
                }(Md),
                Rd = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        var e = t.params.name,
                            n = +t.params.page;
                        return "NaN" === String(n) && (n = 1), this.getData("tags/" + e, n)
                    }, e
                }(Md),
                jd = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        return this.getData("tags")
                    }, e
                }(Md),
                Fd = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        var e = t.params.name,
                            n = +t.params.page;
                        return "NaN" === String(n) && (n = 1), this.getData("categories/" + e, n)
                    }, e
                }(Md),
                Ld = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.resolve = function (t) {
                        return this.getData("categories")
                    }, e
                }(Md),
                Hd = function () {
                    function t() {
                        var t, e = this;
                        this.mediaSubject = new V, this.scrollSubject = new V, this.media = this.mediaSubject.asObservable(), this.scroll = this.scrollSubject.asObservable(), this.width = window.innerWidth, this.height = window.innerHeight, window.addEventListener("resize", (t = function () {
                            e.refreshMedia()
                        }, function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            clearTimeout(t.debounce), t.debounce = setTimeout(function () {
                                t.apply(void 0, e)
                            }, 100)
                        }), {
                            passive: !0
                        })
                    }
                    return t.prototype.initScroll = function (t) {
                        var e = this;
                        t.addEventListener("scroll", function () {
                            e.refreshScroll({
                                scrollTop: t.scrollTop
                            })
                        })
                    }, t.prototype.refreshScroll = function (t) {
                        this.scrollSubject.next(t || {})
                    }, t.prototype.refreshMedia = function () {
                        this.width = window.innerWidth, this.height = window.innerHeight, this.mediaSubject.next({
                            type: this.width < 976 ? Cd.sm : Cd.lg
                        })
                    }, t
                }(),
                Vd = function (t) {
                    return t[t.toTop = 0] = "toTop", t[t.toBottom = 1] = "toBottom", t[t.toggleSidebar = 2] = "toggleSidebar", t[t.toggleToc = 3] = "toggleToc", t
                }({}),
                Ud = function () {
                    function t(t, e) {
                        this.deviceService = t, this.loaderService = e, this.showMenu = !1, this.rotateState = "stop", this.busy = !1, this.action = new sn
                    }
                    return t.prototype.ngOnInit = function () {
                        var t = this;
                        this.deviceService.media.subscribe(function (e) {
                            return t.sidebar = e.type !== Cd.lg
                        }), this.deviceService.refreshMedia(), this.loaderService.state.subscribe(function (e) {
                            e && !t.busy && t.toggleRotateState()
                        })
                    }, t.prototype.rotateEnd = function () {
                        this.busy = !1, this.loaderService.busy && this.toggleRotateState()
                    }, t.prototype.act = function (t) {
                        this.action.emit(Vd[t])
                    }, t.prototype.toggleRotateState = function () {
                        this.rotateState = "stop" === this.rotateState ? "rotate" : "stop", this.busy = !0
                    }, t.prototype.toggle = function () {
                        this.showMenu = !this.showMenu
                    }, t
                }(),
                zd = function () {
                    function t(t, e, n) {
                        this.app = t, this.device = e, this.el = n, this.scrollTop = 0, this.action = new sn, this.currentId = "", this.stacks = {}, this.linedIds = [], this.config = (this.app.config.post || {}).toc || {}
                    }
                    return t.prototype.navigate = function (t) {
                        this.currentId !== t && (this.currentId = t, this.action.emit(this.getOffset(t)))
                    }, t.prototype.syncPosition = function () {
                        if (this.scrollTop < this.linedIds[0].offset) this.currentId = "";
                        else for (var t = 0; t < this.linedIds.length; t++) {
                            var e = this.linedIds[t],
                                n = this.linedIds[t + 1];
                            if (this.currentId !== e.id && this.scrollTop >= e.offset && (void 0 === n || this.scrollTop < n.offset)) return void(this.currentId = e.id)
                        }
                    }, t.prototype.getOffset = function (t) {
                        var e = this.stacks[t].offset;
                        return void 0 === e && (e = this.stacks[t].offset = Math.floor(document.querySelector("#" + t).getBoundingClientRect().top) + this.scrollTop), e
                    }, t.prototype.ngOnInit = function () {
                        var t = this;
                        this.updateStacks(), this.mediaSub = this.device.media.subscribe(function () {
                            t.refresh()
                        }), this.refresh()
                    }, t.prototype.ngOnChanges = function (t) {
                        var e = this;
                        t.toc && setTimeout(function () {
                            return e.updateStacks()
                        }, 100)
                    }, t.prototype.ngOnDestroy = function () {
                        this.mediaSub.unsubscribe()
                    }, t.prototype.updateStacks = function () {
                        this.stacks = function t(e, n, r) {
                            return void 0 === n && (n = {}), void 0 === r && (r = []), e.forEach(function (e) {
                                var o = e.id,
                                    i = e.children;
                                n[o] = {
                                    depth: r.concat(o)
                                }, i && t(i, n, n[o].depth)
                            }), n
                        }(this.toc), this.refresh()
                    }, t.prototype.refresh = function () {
                        var t = this;
                        for (var e in this.stacks) this.stacks[e].offset = Math.floor(document.querySelector("#" + e).getBoundingClientRect().top) + this.scrollTop;
                        this.linedIds = Object.keys(this.stacks).map(function (e) {
                            return {
                                id: e,
                                offset: t.stacks[e].offset
                            }
                        }).sort(function (t, e) {
                            return t.offset - e.offset
                        })
                    }, t.prototype.step = function (t, e) {
                        var n = this.el.nativeElement;
                        n.style.webkitTransitionDuration = n.style.transitionDuration = e + "ms", n.style.webkitTransform = n.style.transform = "translate3d(" + t + "px, 0, 0)", e > 4 && setTimeout(function () {
                            n.style.webkitTransitionDuration = n.style.transitionDuration = "", n.style.webkitTransitionProperty = n.style.transitionProperty = ""
                        }, e + 100)
                    }, t
                }();

            function Bd() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = t.length;
                if (0 === n) throw new Error("list of properties cannot be empty.");
                return function (e) {
                    return tt(function (t, e) {
                        return function (n) {
                            for (var r = n, o = 0; o < e; o++) {
                                var i = r[t[o]];
                                if (void 0 === i) return;
                                r = i
                            }
                            return r
                        }
                    }(t, n))(e)
                }
            }
            var qd = function () {
                    return function (t) {
                        this.page$ = t.data.pipe(Bd("page"))
                    }
                }(),
                Kd = function () {
                    function t(t, e, n, r, o, i, a) {
                        this.app = t, this.route = e, this.router = n, this.meta = r, this.title = o, this.element = i, this.device = a, this.isTocOpen = !1, this.isSidebarOpen = !1, this.isTouchable = !1, this.mainScrollPercent = 0, this.config = t.config
                    }
                    return t.prototype.ngOnInit = function () {
                        var t = this,
                            e = this.flatPath(this.config.routes).map(function (t) {
                                return {
                                    path: t,
                                    component: qd,
                                    resolve: {
                                        page: Nd
                                    },
                                    data: {
                                        id: "page"
                                    }
                                }
                            }),
                            n = [];
                        this.config.count.tags < 1 && (n = ["tag", "tags"]), this.config.count.categories < 1 && n.push("categories"), n.length && (this.router.config = this.router.config.filter(function (t) {
                            return !t.data || -1 === n.indexOf(t.data.id)
                        })), this.router.resetConfig(e.concat(this.router.config)), this.mainElement = this.element.nativeElement.querySelector("main"), this.sidebarElement = this.element.nativeElement.querySelector("is-sidebar > div"), this.device.media.subscribe(function (e) {
                            e.type === Cd.lg && t.isSidebarOpen && t.toggleSb(), e.type === Cd.lg || t.isTouchable || t.initTouch(), t.screenState = e, t.mainHeight = t.mainElement.offsetHeight, t.mainWidth = t.mainElement.offsetWidth, t.sidebarWidth = t.sidebarElement.offsetWidth, t.device.refreshScroll()
                        }), this.device.initScroll(this.mainElement), this.device.scroll.subscribe(function (e) {
                            var n = e.scrollTop;
                            t.mainScrollTop = n, t.mainScrollPercent = "post" === t.currentId ? Math.round(100 * n / (t.mainElement.scrollHeight - t.mainHeight)) : 0, "home" === t.currentId && (t.indexScrollTop = n)
                        }), this.router.events.pipe(ql(function (t) {
                            return t instanceof Kf
                        })).subscribe(function () {
                            t.isSidebarOpen && t.toggleSb(), t.isTocOpen && t.toggleToc(), t.mainScrollPercent = 0;
                            var e = t.route.snapshot.children[0].children.length ? t.route.snapshot.children[0].children[0].data : t.route.snapshot.children[0].data;
                            if (t.currentId = e.id, "home" === t.currentId) t.mainElement.scrollTop = t.indexScrollTop || 0;
                            else if ("post" === t.currentId || "page" === t.currentId) {
                                var n = t.route.fragment.value;
                                n ? setTimeout(function () {
                                    var e = document.querySelector("#" + n);
                                    e && (t.mainElement.scrollTop = Math.floor(e.getBoundingClientRect().top))
                                }, 0) : t.mainElement.scrollTop = 0
                            } else t.mainElement.scrollTop = 0;
                            t.toc = "post" === t.currentId && e.post.toc ? e.post.toc : null, t.procTitle(e), t.procColor(e)
                        })
                    }, t.prototype.initTouch = function () {
                        var t = this;
                        this.isTouchable = !0;
                        var e = function (t, e) {
                            void 0 === e && (e = {});
                            var n, r = new V,
                                o = 0,
                                i = 0,
                                a = 0,
                                s = !1;
                            return e = Object.assign({
                                scale: 1,
                                hold: 5
                            }, e), t.addEventListener("touchstart", function (t) {
                                var e = t.touches[0];
                                o = e.clientX, i = e.clientY
                            }, {
                                passive: !0
                            }), t.addEventListener("touchmove", function (t) {
                                var u = t.touches[0];
                                n = o > u.clientX ? "left" : "right", a = Math.abs(o - u.clientX), Math.abs(i - u.clientY) >= a || Math.abs(a) > e.hold && (s = !0, r.next({
                                    start: o,
                                    offset: l(a),
                                    direction: n,
                                    end: !1
                                }))
                            }, {
                                passive: !0
                            }), t.addEventListener("touchend", function (t) {
                                s && r.next({
                                    start: o,
                                    offset: l(a),
                                    direction: n,
                                    end: !0
                                }), s = !1, o = i = a = 0
                            }, {
                                passive: !0
                            }), r.asObservable();

                            function l(t) {
                                return Math.ceil((t + (t > 0 ? -e.hold : e.hold)) * e.scale)
                            }
                        }(this.mainElement, {
                            scale: .382
                        });
                        e.subscribe(function (e) {
                            var n = .02 * t.device.width,
                                r = t.isSidebarOpen,
                                o = ~~ (t.sidebarWidth - e.offset);
                            !t.isSidebarOpen && e.start > n || (e.offset > t.sidebarWidth && (e.offset = t.sidebarWidth), e.offset < 0 && (e.offset = 0), e.end ? e.offset < n ? t.stepSb(r ? t.sidebarWidth : 0, 5 * n) : (t.stepSb(r ? 0 : t.sidebarWidth, o), t.isSidebarOpen = !t.isSidebarOpen) : t.stepSb(r ? t.sidebarWidth - e.offset : e.offset, 0))
                        }), e.subscribe(function (e) {
                            var n = .02 * t.device.width,
                                r = t.isTocOpen,
                                o = ~~ (t.sidebarWidth - e.offset);
                            t.toc && (!t.isTocOpen && e.start < t.mainWidth - n || t.isSidebarOpen || (e.offset > t.sidebarWidth && (e.offset = t.sidebarWidth), e.offset < 0 && (e.offset = 0), e.end ? e.offset < n ? t.tocComponent.step(r ? 0 : t.sidebarWidth, 5 * n) : (t.tocComponent.step(r ? t.sidebarWidth : 0, o), t.isTocOpen = !t.isTocOpen, r || t.tocComponent.syncPosition()) : t.tocComponent.step(r ? e.offset : t.sidebarWidth - e.offset, 0)))
                        })
                    }, t.prototype.stepSb = function (t, e) {
                        var n = this.element.nativeElement;
                        n.style.webkitTransitionProperty = "-webkit-transform", n.style.transitionProperty = "transform", n.style.webkitTransitionDuration = n.style.transitionDuration = e + "ms", n.style.webkitTransform = n.style.transform = "translate3d(" + t + "px, 0, 0)", e > 4 && setTimeout(function () {
                            n.style.webkitTransitionDuration = n.style.transitionDuration = "", n.style.webkitTransitionProperty = n.style.transitionProperty = ""
                        }, e + 100)
                    }, t.prototype.toggleSb = function () {
                        this.screenState.type !== Cd.lg && (this.isSidebarOpen ? (this.stepSb(0, ~~ (1.5 * this.sidebarWidth)), this.isSidebarOpen = !1) : (this.stepSb(this.sidebarWidth, ~~ (1.5 * this.sidebarWidth)), this.isSidebarOpen = !0))
                    }, t.prototype.toggleToc = function () {
                        this.isTocOpen ? (this.tocComponent.step(this.sidebarWidth, ~~ (1.5 * this.sidebarWidth)), this.isTocOpen = !1) : (this.tocComponent.syncPosition(), this.tocComponent.step(0, ~~ (1.5 * this.sidebarWidth)), this.isTocOpen = !0)
                    }, t.prototype.procTitle = function (t) {
                        var e = this,
                            n = {
                                post: function (t) {
                                    return t.post.title
                                },
                                page: function (t) {
                                    return t.page.title
                                },
                                tags: function (t) {
                                    return e.app.i18n("title.tags")
                                },
                                tag: function (t) {
                                    return e.app.i18n("title.tags") + " : " + t.tag.name
                                },
                                categories: function (t) {
                                    return e.app.i18n("title.categories")
                                },
                                category: function (t) {
                                    return e.app.i18n("title.categories") + " : " + t.category.name
                                },
                                archives: function (t) {
                                    return e.app.i18n("title.archives")
                                },
                                404: function (t) {
                                    return 404
                                }
                            }[t.id],
                            r = n ? n(t) + " - " + this.config.title : this.config.title;
                        this.title.setTitle(r)
                    }, t.prototype.procColor = function (t) {
                        var e, n = this;
                        if (t.post) {
                            var r = t.post.thumbnail;
                            if (r) return (e = r, kd.colors[e] ? Promise.resolve(kd.colors[e]) : new Promise(function (t, n) {
                                var r = new Image;
                                r.crossOrigin = "anonymous", r.onload = function () {
                                    var n, o = document.createElement("canvas").getContext("2d");
                                    o.drawImage(r, 0, 0);
                                    var i = (n = o.getImageData(0, 0, 1, 1).data.slice(0, 3)).reduce(function (t, e) {
                                            return t + e
                                        }, 0),
                                        a = Pd[1] - i;
                                    a < 0 ? (a = Math.abs(a), a = Math.floor(a / 3), n = n.map(function (t) {
                                        return t - a
                                    })) : i < Pd[0] && (n[0] = Pd[0]), kd.colors[e] = (function (t, e, n) {
                                        return "#" + r(t) + r(e) + r(n);

                                        function r(t) {
                                            var e = t.toString(16);
                                            return t < 16 ? "0" + e : e
                                        }
                                    }).apply(null, n), t(kd.colors[e])
                                }, r.onerror = n, r.src = e
                            })).then(function (t) {
                                return n.meta.updateTag({
                                    name: "theme-color",
                                    content: t
                                })
                            }).
                            catch (function () {
                                n.meta.updateTag({
                                    name: "theme-color",
                                    content: n.config.color
                                })
                            })
                        }
                        this.meta.updateTag({
                            name: "theme-color",
                            content: this.config.color
                        })
                    }, t.prototype.onFabAct = function (t) {
                        switch (t) {
                            case Vd.toTop:
                                this.animateTo(0);
                                break;
                            case Vd.toBottom:
                                this.animateTo(this.mainElement.scrollHeight - this.mainHeight);
                                break;
                            case Vd.toggleSidebar:
                                this.toggleSb();
                                break;
                            case Vd.toggleToc:
                                this.toggleToc()
                        }
                    }, t.prototype.animateTo = function (t) {
                        var e = this.mainScrollTop,
                            n = Math.abs(~~ (.618 * (t - e) / 1));
                        Od(this.mainElement, "scrollTop", {
                            from: e,
                            to: t,
                            duration: n > 618 ? 618 : n
                        })
                    }, t.prototype.onOverlay = function () {
                        this.isSidebarOpen && this.toggleSb(), this.isTocOpen && this.toggleToc()
                    }, t.prototype.flatPath = function (t) {
                        var e = this,
                            n = [];
                        return t && t.length ? (t.forEach(function (t) {
                            if ("string" == typeof t) n.push(t);
                            else {
                                var r = [];
                                Object.keys(t).forEach(function (n) {
                                    r.push(n), r.push.apply(r, e.flatPath(t[n]).map(function (t) {
                                        return [n, t].join("/")
                                    }))
                                }), n = n.concat(r)
                            }
                        }), n) : []
                    }, t
                }(),
                Qd = so({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Wd(t) {
                return ta(0, [(t()(), Lo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(1, 212992, null, 0, td, [Xh, Un, Ye, [8, null], zn], null, null)], function (t, e) {
                    t(e, 1, 0)
                }, null)
            }
            var $d = ni("ng-component", ap, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "ng-component", [], null, null, null, Wd, Qd)), ki(1, 49152, null, 0, ap, [], null, null)], null, null)
                }, {}, {}, []),
                Gd = function () {
                    function t(t) {
                        this.router = t
                    }
                    return t.prototype.goPost = function () {
                        this.router.navigate(["/post/" + this.post.slug])
                    }, t
                }(),
                Zd = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;overflow:hidden;border-radius:3px;cursor:pointer}.title[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:1.2rem}.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:1.25rem;color:inherit}.thumbnail[_ngcontent-%COMP%]{display:block;border-top:1px solid #f5f7fa}.excerpt[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border-top:1px solid #f5f7fa}footer[_ngcontent-%COMP%]{border-top:1px solid #f5f7fa;color:#97a9c5;background-color: rgba(255,255,255,0.5)}footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:1.25rem}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem;color:#ccd6e4}"]
                    ],
                    data: {}
                });

            function Yd(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "img", [
                    ["class", "thumbnail"]
                ], [
                    [8, "src", 4],
                    [8, "alt", 0]
                ], null, null, null, null))], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, Ro(1, "", n.post.thumbnail, ""), Ro(1, "", n.post.title, ""))
                })
            }
            function Jd(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "div", [
                    ["class", "excerpt article"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null))], null, function (t, e) {
                    t(e, 0, 0, e.component.post.excerpt)
                })
            }
            function Xd(t) {
                return ta(2, [Pi(0, Cc, [gr]), (t()(), Lo(1, 0, null, null, 3, "h2", [
                    ["class", "title"]
                ], null, null, null, null, null)), (t()(), Lo(2, 0, null, null, 2, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(3, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(4, null, ["", ""])), (t()(), Fo(16777216, null, null, 1, null, Yd)), ki(6, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Jd)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(9, 0, null, null, 4, "footer", [], null, null, null, null, null)), (t()(), Lo(10, 0, null, null, 3, "span", [], null, null, null, null, null)), (t()(), Lo(11, 0, null, null, 0, "i", [
                    ["class", "icon-calendar"]
                ], null, null, null, null, null)), (t()(), Yi(12, null, ["", ""])), $i(13, 1)], function (t, e) {
                    var n = e.component;
                    t(e, 3, 0, Ro(1, "/post/", n.post.slug, "")), t(e, 6, 0, n.post.thumbnail), t(e, 8, 0, n.post.excerpt)
                }, function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, hi(e, 3).target, hi(e, 3).href), t(e, 4, 0, n.post.title), t(e, 12, 0, oo(e, 12, 0, t(e, 13, 0, hi(e, 0), n.post.date)))
                })
            }
            var tg = function () {
                    function t() {
                        this.items = []
                    }
                    return t.prototype.ngOnInit = function () {
                        this.size = +this.size, this.count = +this.count, this.current = +this.current, "/" !== this.url[0] && (this.url = "/" + this.url), void 0 === this.indexUrl && (this.indexUrl = this.url + "/1"), "/" !== this.indexUrl[0] && (this.indexUrl = "/" + this.indexUrl)
                    }, t.prototype.ngOnChanges = function () {
                        this.size = +this.size, this.count = +this.count, this.current = +this.current, this.determineItems()
                    }, t.prototype.determineItems = function () {
                        var t = [];
                        this.current > 1 && t.push({
                            route: this.current - 1,
                            type: "prev"
                        }), this.current > 1 && t.push({
                            route: 1,
                            text: 1
                        }), this.current > 3 && t.push({
                            type: "dot"
                        }), this.current - 2 > 0 && t.push({
                            route: this.current - 1,
                            text: this.current - 1
                        }), t.push({
                            text: this.current,
                            type: "active"
                        }), this.current < this.count - 1 && t.push({
                            route: this.current + 1,
                            text: this.current + 1
                        }), this.current < this.count - 2 && t.push({
                            type: "dot"
                        }), this.current < this.count && t.push({
                            route: this.count,
                            text: this.count
                        }), this.current < this.count && t.push({
                            route: this.current + 1,
                            type: "next"
                        }), this.items = t
                    }, t.prototype.link = function (t) {
                        return 1 === t ? [this.indexUrl] : [this.url + "/" + t]
                    }, t
                }(),
                eg = so({
                    encapsulation: 0,
                    styles: [
                        ['@charset "UTF-8";[_nghost-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:1rem;height:5rem;text-align:center}a[_ngcontent-%COMP%]{margin:0 2px;width:2.4rem;height:2.4rem;border-radius:50%;color:#a7a7a7;text-align:center;line-height:2.4rem}a.active[_ngcontent-%COMP%]{background-color:#2a2b33;color:#fff;pointer-events:none}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover{background-color:#2a2b33;color:#fff}a.dot[_ngcontent-%COMP%]{pointer-events:none}a.prev[_ngcontent-%COMP%]:before{content:"\ue903";font-family:Icon}a.next[_ngcontent-%COMP%]:before{content:"\ue901";font-family:Icon}']
                    ],
                    data: {}
                });

            function ng(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "a", [
                    ["class", "prev"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.component.link(e.parent.context.$implicit.route), ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href)
                })
            }
            function rg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "a", [
                    ["class", "next"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.component.link(e.parent.context.$implicit.route), ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href)
                })
            }
            function og(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(2, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.component.link(e.parent.context.$implicit.route), ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 2, 0, e.parent.context.$implicit.text)
                })
            }
            function ig(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "a", [
                    ["class", "active"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.$implicit.text)
                })
            }
            function ag(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "a", [
                    ["class", "dot"]
                ], null, null, null, null, null)), (t()(), Yi(-1, null, ["..."]))], null, null)
            }
            function sg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 10, null, null, null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, ng)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, rg)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, og)), ki(6, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, ig)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, ag)), ki(10, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 2, 0, "prev" === e.context.$implicit.type), t(e, 4, 0, "next" === e.context.$implicit.type), t(e, 6, 0, !e.context.$implicit.type), t(e, 8, 0, "active" === e.context.$implicit.type), t(e, 10, 0, "dot" === e.context.$implicit.type)
                }, null)
            }
            function lg(t) {
                return ta(2, [(t()(), Fo(16777216, null, null, 1, null, sg)), ki(1, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 1, 0, e.component.items)
                }, null)
            }
            var ug = function () {
                    function t(t, e) {
                        this.router = e, this.postList$ = t.data.pipe(Bd("postList"))
                    }
                    return t.prototype.goPage = function (t) {
                        this.router.navigate([1 === t ? "/" : "/page/" + t])
                    }, t
                }(),
                cg = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block}.post[_ngcontent-%COMP%]{margin:1.5rem}@media (max-width:656px){.post[_ngcontent-%COMP%]{margin:.75rem}}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "scaleIn",
                            definitions: [{
                                type: 0,
                                name: "in",
                                styles: {
                                    type: 6,
                                    styles: {
                                        transform: "none",
                                        opacity: 1
                                    },
                                    offset: null
                                },
                                options: void 0
                            },
                                {
                                    type: 0,
                                    name: "void",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "scale(.8)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 1,
                                    expr: ":enter",
                                    animation: {
                                        type: 4,
                                        styles: null,
                                        timings: "400ms ease"
                                    },
                                    options: null
                                }],
                            options: {}
                        }]
                    }
                });

            function fg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-post-card", [
                    ["class", "post"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).goPost() && r), r
                }, Xd, Zd)), ki(1, 49152, null, 0, Gd, [Qh], {
                    post: [0, "post"]
                }, null)], function (t, e) {
                    t(e, 1, 0, e.context.$implicit)
                }, null)
            }
            function pg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-pager", [
                    ["indexUrl", ""],
                    ["url", "page"]
                ], null, null, null, lg, eg)), ki(1, 638976, null, 0, tg, [], {
                    size: [0, "size"],
                    count: [1, "count"],
                    current: [2, "current"],
                    url: [3, "url"],
                    indexUrl: [4, "indexUrl"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.parent.context.ngIf.per_page, ""), Ro(1, "", e.parent.context.ngIf.total, ""), Ro(1, "", e.parent.context.ngIf.current, ""), "page", "")
                }, null)
            }
            function hg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, null, null, null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, fg)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, pg)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 2, 0, e.context.ngIf.data), t(e, 4, 0, e.context.ngIf.total > 1)
                }, null)
            }
            function dg(t) {
                return ta(0, [(t()(), Fo(16777216, null, null, 2, null, hg)), ki(1, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, oo(e, 1, 0, hi(e, 2).transform(n.postList$)))
                }, null)
            }
            var gg = ni("is-v-post-list", ug, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-post-list", [], null, null, null, dg, cg)), ki(1, 49152, null, 0, ug, [ah, Qh], null, null)], null, null)
                }, {}, {}, []),
                mg = function () {
                    function t(t) {
                        this.sanitizer = t
                    }
                    return t.prototype.transform = function (t, e) {
                        return void 0 === e && (e = "html"), "url" === e ? this.sanitizer.bypassSecurityTrustUrl(t) : this.sanitizer.bypassSecurityTrustHtml(t)
                    }, t
                }(),
                yg = function () {
                    function t(t) {
                        this.app = t
                    }
                    return t.prototype.transform = function (t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        return (e = this.app).i18n.apply(e, [t].concat(n))
                    }, t
                }(),
                vg = function (t) {
                    function e(e, n) {
                        var r = t.call(this, e, n) || this;
                        return r.scheduler = e, r.work = n, r.pending = !1, r
                    }
                    return o(e, t), e.prototype.schedule = function (t, e) {
                        if (void 0 === e && (e = 0), this.closed) return this;
                        this.state = t;
                        var n = this.id,
                            r = this.scheduler;
                        return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                    }, e.prototype.requestAsyncId = function (t, e, n) {
                        return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
                    }, e.prototype.recycleAsyncId = function (t, e, n) {
                        if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                        clearInterval(e)
                    }, e.prototype.execute = function (t, e) {
                        if (this.closed) return new Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(t, e);
                        if (n) return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, e.prototype._execute = function (t, e) {
                        var n = !1,
                            r = void 0;
                        try {
                            this.work(t)
                        } catch (t) {
                            n = !0, r = !! t && t || new Error(t)
                        }
                        if (n) return this.unsubscribe(), r
                    }, e.prototype._unsubscribe = function () {
                        var t = this.id,
                            e = this.scheduler,
                            n = e.actions,
                            r = n.indexOf(this);
                        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                    }, e
                }(function (t) {
                    function e(e, n) {
                        return t.call(this) || this
                    }
                    return o(e, t), e.prototype.schedule = function (t, e) {
                        return void 0 === e && (e = 0), this
                    }, e
                }(w)),
                _g = function () {
                    function t(e, n) {
                        void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
                    }
                    return t.prototype.schedule = function (t, e, n) {
                        return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
                    }, t.now = function () {
                        return Date.now()
                    }, t
                }(),
                bg = new(function (t) {
                    function e(n, r) {
                        void 0 === r && (r = _g.now);
                        var o = t.call(this, n, function () {
                            return e.delegate && e.delegate !== o ? e.delegate.now() : r()
                        }) || this;
                        return o.actions = [], o.active = !1, o.scheduled = void 0, o
                    }
                    return o(e, t), e.prototype.schedule = function (n, r, o) {
                        return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, o) : t.prototype.schedule.call(this, n, r, o)
                    }, e.prototype.flush = function (t) {
                        var e = this.actions;
                        if (this.active) e.push(t);
                        else {
                            var n;
                            this.active = !0;
                            do {
                                if (n = t.execute(t.state, t.delay)) break
                            } while (t = e.shift());
                            if (this.active = !1, n) {
                                for (; t = e.shift();) t.unsubscribe();
                                throw n
                            }
                        }
                    }, e
                }(_g))(vg);

            function wg(t, e) {
                return void 0 === e && (e = bg), function (n) {
                    return n.lift(new Cg(t, e))
                }
            }
            var Cg = function () {
                    function t(t, e) {
                        this.dueTime = t, this.scheduler = e
                    }
                    return t.prototype.call = function (t, e) {
                        return e.subscribe(new Sg(t, this.dueTime, this.scheduler))
                    }, t
                }(),
                Sg = function (t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.dueTime = n, o.scheduler = r, o.debouncedSubscription = null, o.lastValue = null, o.hasValue = !1, o
                    }
                    return o(e, t), e.prototype._next = function (t) {
                        this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(xg, this.dueTime, this))
                    }, e.prototype._complete = function () {
                        this.debouncedNext(), this.destination.complete()
                    }, e.prototype.debouncedNext = function () {
                        if (this.clearDebounce(), this.hasValue) {
                            var t = this.lastValue;
                            this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                        }
                    }, e.prototype.clearDebounce = function () {
                        var t = this.debouncedSubscription;
                        null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
                    }, e
                }(O);

            function xg(t) {
                t.debouncedNext()
            }
            var Eg = function () {
                    function t(t, e, n) {
                        this.cd = t, this.router = e, this.app = n, this.select = {}, this.enter = new V, this.leave = new V, this.text = n.config.reward.text, this.methods = n.config.reward.methods.map(function (t) {
                            return~ ["wechat", "paypal", "bitcoin"].indexOf(t.name) && (t.icon = !0), t
                        })
                    }
                    return t.prototype.ngOnInit = function () {
                        var t = this;
                        this.enterSub = this.enter.asObservable().pipe(wg(100)).subscribe(function (e) {
                            t.lock || (t.select = e, t.cd.detectChanges())
                        }), this.leaveSub = this.leave.asObservable().pipe(wg(100)).subscribe(function () {
                            t.lock || (t.select = {}, t.cd.detectChanges())
                        }), this.routerSub = this.router.events.subscribe(function () {
                            t.select = {}, t.cd.detectChanges()
                        })
                    }, t.prototype.ngOnDestroy = function () {
                        this.enterSub.unsubscribe(), this.leaveSub.unsubscribe(), this.routerSub.unsubscribe()
                    }, t.prototype.onClick = function (t) {
                        if (this.lock && this.select.name === t.name) return this.lock = !1, void(this.select = {});
                        this.select = t, this.lock = !0
                    }, t
                }(),
                kg = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;margin:6rem 0 1.5rem;background-color:#fff;text-align:center}[_nghost-%COMP%] > p[_ngcontent-%COMP%]{margin:0;font-size:1.1rem}[_nghost-%COMP%]   .picker[_ngcontent-%COMP%]{position:relative;padding-top:1rem}[_nghost-%COMP%]   .picker.active[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .picker.wechat[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{box-shadow:0 0 20px rgba(9,187,7,.1)}[_nghost-%COMP%]   .picker.wechat[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#09bb07}[_nghost-%COMP%]   .picker.wechat[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   a.wechat[_ngcontent-%COMP%]{color:#09bb07}[_nghost-%COMP%]   .picker.alipay[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{box-shadow:0 0 20px rgba(0,160,233,.1)}[_nghost-%COMP%]   .picker.alipay[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#00a0e9}[_nghost-%COMP%]   .picker.alipay[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   a.alipay[_ngcontent-%COMP%]{color:#00a0e9}[_nghost-%COMP%]   .picker.paypal[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{box-shadow:0 0 20px rgba(0,47,134,.1)}[_nghost-%COMP%]   .picker.paypal[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#002f86}[_nghost-%COMP%]   .picker.paypal[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   a.paypal[_ngcontent-%COMP%]{color:#002f86}[_nghost-%COMP%]   .picker.bitcoin[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{box-shadow:0 0 20px rgba(247,147,26,.1)}[_nghost-%COMP%]   .picker.bitcoin[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f7931a}[_nghost-%COMP%]   .picker.bitcoin[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   a.bitcoin[_ngcontent-%COMP%]{color:#f7931a}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{position:absolute;right:0;bottom:3.6rem;left:0;margin:auto;padding:1.5rem;max-width:50%;border:1px solid #eaecee;border-radius:3px;background:#fff;word-break:break-all}@media (max-width:656px){[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{max-width:95%}}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;padding:1em;border:1px solid #eaecee;line-height:1.4}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;overflow:hidden;border-radius:3px;background-color:#f5f7fa;text-overflow:ellipsis;white-space:nowrap;line-height:3rem;transition:background-color .15s}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;height:2.6rem;border-radius:2.6rem;box-shadow:inset 0 0 0 1px #eaecee;white-space:nowrap;font-size:.85rem;line-height:2.6rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;float:left;padding:0 1rem;font-size:1.1rem;transition:color .15s}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{position:absolute;top:50%;right:0;width:1px;height:1.4rem;background-color:#eaecee;content:'';-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{padding-left:1.25rem}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{padding-right:1.25rem}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{content:none}[_nghost-%COMP%]   .items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{vertical-align:middle;font-size:1.4rem}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "slideInOut",
                            definitions: [{
                                type: 0,
                                name: "in",
                                styles: {
                                    type: 6,
                                    styles: {
                                        transform: "none",
                                        opacity: 1
                                    },
                                    offset: null
                                },
                                options: void 0
                            },
                                {
                                    type: 0,
                                    name: "void",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translate3d(0,1rem,0)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 0,
                                    name: "out",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translate3d(0,1rem,0)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 1,
                                    expr: "* => *",
                                    animation: {
                                        type: 4,
                                        styles: null,
                                        timings: "400ms ease"
                                    },
                                    options: null
                                }],
                            options: {}
                        }]
                    }
                });

            function Pg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "img", [], [
                    [8, "src", 4]
                ], null, null, null, null))], null, function (t, e) {
                    t(e, 0, 0, e.component.select.qrcode)
                })
            }
            function Og(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [
                    ["rel", "external nofollow noopener"],
                    ["target", "=_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), $i(1, 2), (t()(), Yi(2, null, ["", ""]))], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, oo(e, 0, 0, t(e, 1, 0, hi(e.parent.parent, 0), n.select.url, "url"))), t(e, 2, 0, n.select.text || n.select.url)
                })
            }
            function Tg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 1, 0, e.component.select.text)
                })
            }
            function Mg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, "div", [
                    ["class", "panel"]
                ], [
                    [24, "@slideInOut", 0]
                ], null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Pg)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Og)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Tg)), ki(6, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.select.qrcode), t(e, 4, 0, n.select.url), t(e, 6, 0, !n.select.url && n.select.text)
                }, function (t, e) {
                    t(e, 0, 0, void 0)
                })
            }
            function Ig(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [], [
                    [8, "className", 0]
                ], [
                    [null, "mouseenter"],
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "mouseenter" === e && (r = !1 !== o.enter.next(t.context.$implicit) && r), "click" === e && (r = !1 !== o.onClick(t.context.$implicit) && r), r
                }, null, null)), (t()(), Yi(1, null, ["", ""])), $i(2, 1)], null, function (t, e) {
                    t(e, 0, 0, Ro(1, "", e.context.$implicit.icon ? "icon-" + e.context.$implicit.name + " " + e.context.$implicit.name : e.context.$implicit.name, "")), t(e, 1, 0, e.context.$implicit.icon ? "" : oo(e, 1, 0, t(e, 2, 0, hi(e.parent, 1), "reward." + e.context.$implicit.name)))
                })
            }
            function Ag(t) {
                return ta(2, [Pi(0, mg, [Of]), Pi(0, yg, [xd]), (t()(), Lo(2, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Yi(3, null, ["", ""])), (t()(), Lo(4, 0, null, null, 7, "div", [], null, [
                    [null, "mouseleave"]
                ], function (t, e, n) {
                    var r = !0;
                    return "mouseleave" === e && (r = !1 !== t.component.leave.next() && r), r
                }, null, null)), ki(5, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Zi(32, 6, new Array(2)), (t()(), Fo(16777216, null, null, 1, null, Mg)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(9, 0, null, null, 2, "div", [
                    ["class", "items"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Ig)), ki(11, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 5, 0, t(e, 6, 0, "picker", n.select.name ? n.select.name + " active" : "")), t(e, 8, 0, n.select.name), t(e, 11, 0, n.methods)
                }, function (t, e) {
                    t(e, 3, 0, e.component.text)
                })
            }
            var Ng = function () {
                    function t() {}
                    return t.prototype.ngOnInit = function () {
                        this.keys = Object.keys(this.copyright)
                    }, t
                }(),
                Dg = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;margin-top:1.5rem;padding:1rem 1.5rem;background-color:#f5f7fa;word-break:break-word;line-height:1.8;border-radius:3px}ul[_ngcontent-%COMP%]{margin:0;padding:0}li[_ngcontent-%COMP%]{overflow:hidden;list-style:none}strong[_ngcontent-%COMP%]{float:left}.colon[_ngcontent-%COMP%]{margin:0 .6em 0 .2em}p[_ngcontent-%COMP%]{display:table-cell}"]
                    ],
                    data: {}
                });

            function Rg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "p", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null))], null, function (t, e) {
                    t(e, 0, 0, e.component.copyright.custom)
                })
            }
            function jg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, "li", [], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 4, "strong", [], null, null, null, null, null)), (t()(), Yi(2, null, ["", ""])), $i(3, 1), (t()(), Lo(4, 0, null, null, 1, "span", [
                    ["class", "colon"]
                ], null, null, null, null, null)), (t()(), Yi(-1, null, [":"])), (t()(), Lo(6, 0, null, null, 0, "p", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null))], null, function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, oo(e, 2, 0, t(e, 3, 0, hi(e.parent.parent, 0), "post.copyright." + e.context.$implicit))), t(e, 6, 0, n.copyright[e.context.$implicit])
                })
            }
            function Fg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "ul", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, jg)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.component.keys)
                }, null)
            }
            function Lg(t) {
                return ta(2, [Pi(0, yg, [xd]), (t()(), Fo(16777216, null, null, 1, null, Rg)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Fg)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.copyright && n.copyright.custom), t(e, 4, 0, n.copyright && !n.copyright.custom && n.keys.length)
                }, null)
            }
            var Hg = function () {
                    function t(t) {
                        this.element = t
                    }
                    return t.prototype.ngOnInit = function () {
                        var t = .9 + .1 * this.count;
                        this.element.nativeElement.style.fontSize = (t = t > 4 ? 4 : t) + "rem"
                    }, t
                }(),
                Vg = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:inline-block;margin:0 1rem 1rem 0}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.2em 1em .1em;border-radius:2px;background-color:#f5f7fa;line-height:2;transition:background-color .15s}[_nghost-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active, [_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#48505b;color:#fff}"]
                    ],
                    data: {}
                });

            function Ug(t) {
                return ta(2, [(t()(), Lo(0, 0, null, null, 2, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(2, null, ["# ", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/tags/", e.component.name, ""))
                }, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 2, 0, n.name)
                })
            }
            var zg = Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                },
                Bg = function () {
                    function t(t, e) {
                        this.el = t, this.config = zg({}, e)
                    }
                    return t.prototype.loadScript = function () {
                        var t = this;
                        this.scriptTag && this.scriptTag.parentElement.removeChild(this.scriptTag);
                        var e = this.scriptTag = document.createElement("script");
                        return new Promise(function (n, r) {
                            e.addEventListener("error", r), e.addEventListener("load", n), e.async = !0, e.src = t.config.script, document.getElementsByTagName("head")[0].appendChild(e)
                        })
                    }, t
                }(),
                qg = function (t) {
                    function e(e, n) {
                        return t.call(this, e, n) || this
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "loaded", {
                        get: function () {
                            return void 0 !== window.LivereTower || !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.init = function (t) {
                        var e = this;
                        return this.initView(), window.livereOptions = this.parseOptions(t), this.loadScript().then(function () {
                            setTimeout(function () {
                                !e.el.querySelector('iframe[title="livere"]') && e.loaded && e.config.autoload && window.LivereTower.start()
                            }, 1e3)
                        })
                    }, e.prototype.initView = function () {
                        this.el.innerHTML = '<div id="lv-container" data-id="city" data-uid="' + this.config.uid + '"></div>'
                    }, e.prototype.refresh = function (t) {
                        if (this.loaded) {
                            this.initView();
                            var e = window.LivereTower,
                                n = e.get("common");
                            n && (window.livereOptions = this.parseOptions(t), n = Object.assign(n, window.livereOptions), e.set({
                                common: n
                            }), e.load(["comment"]))
                        }
                    }, e.prototype.parseOptions = function (t) {
                        return {
                            refer: t.url.replace(/^(https?:)?\/\//, "").replace(/^(https?:)?\/\/|\/(index.html)?$/g, ""),
                            title: t.title,
                            site: t.url,
                            logo: t.thumbnail
                        }
                    }, e
                }(Bg),
                Kg = function (t) {
                    function e(e, n) {
                        return t.call(this, e, n) || this
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "loaded", {
                        get: function () {
                            return void 0 !== window.DISQUS || !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.init = function (t) {
                        return this.initView(), new Function("window.disqus_config = function config() {\n      this.page.title = '" + t.title + "';\n      this.page.url = '" + t.url + "';\n      this.page.identifier = '" + t.id + "';\n    }")(), this.loadScript()
                    }, e.prototype.initView = function () {
                        this.el.innerHTML = '<div id="disqus_thread"></div>'
                    }, e.prototype.refresh = function (t) {
                        this.loaded && (this.initView(), new Function("window.DISQUS.reset({\n      reload: true,\n      config: function config() {\n        this.page.title = '" + t.title + "';\n        this.page.url = '" + t.url + "';\n        this.page.identifier = '" + t.id + "';\n      }\n    })")())
                    }, e
                }(Bg),
                Qg = function () {
                    function t(t, e, n) {
                        this.app = t, this.loader = e, this.cdr = n, this.status = 0, this.config = this.app.config.comments, this.type = Object.keys(this.config)[0], this.autoload = this.config[this.type].autoload
                    }
                    return t.prototype.ngOnInit = function () {
                        var t, e;
                        this.app.config.ssr || (this.comments = (e = {
                            disqus: Kg,
                            livere: qg
                        })[t = this.type] ? new e[t](this.mountNode.nativeElement, this.config[this.type]) : null, this.comments.loaded ? (this.status = 2, this.comments.refresh(this.page)) : this.autoload && this.load())
                    }, t.prototype.load = function () {
                        var t = this;
                        this.status = 1, this.loader.show(), this.comments.init(this.page).then(function () {
                            t.loader.hide(), t.status = 2, t.cdr.detectChanges()
                        }).
                        catch (function () {
                            t.loader.hide(), t.status = -1, t.cdr.detectChanges()
                        })
                    }, t.prototype.ngOnChanges = function () {
                        2 === this.status && this.comments.refresh(this.page)
                    }, t
                }(),
                Wg = so({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function $g(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 3, null, null, null, null, null, null, null)), (t()(), Yi(1, null, ["", ""])), $i(2, 1), $i(3, 2)], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, oo(e, 1, 0, t(e, 3, 0, hi(e.parent.parent, 0), "comments.load", oo(e, 1, 0, t(e, 2, 0, hi(e.parent.parent, 0), "comments." + n.type)))))
                })
            }
            function Gg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 3, null, null, null, null, null, null, null)), (t()(), Yi(1, null, ["", ""])), $i(2, 1), $i(3, 2)], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, oo(e, 1, 0, t(e, 3, 0, hi(e.parent.parent, 0), "comments.load_faild", oo(e, 1, 0, t(e, 2, 0, hi(e.parent.parent, 0), "comments." + n.type)))))
                })
            }
            function Zg(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, "a", [
                    ["class", "comments-btn-load"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.load() && r), r
                }, null, null)), (t()(), Fo(16777216, null, null, 1, null, $g)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Gg)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, 0 === n.status), t(e, 4, 0, -1 === n.status)
                }, null)
            }
            function Yg(t) {
                return ta(2, [Pi(0, yg, [xd]), zi(402653184, 1, {
                    mountNode: 0
                }), (t()(), Fo(16777216, null, null, 1, null, Zg)), ki(3, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(4, 0, [
                    [1, 0],
                    ["el", 1]
                ], null, 2, "div", [
                    ["class", "comments-content"]
                ], null, null, null, null, null)), ki(5, 278528, null, 0, mc, [cr, Nn, An], {
                    ngStyle: [0, "ngStyle"]
                }, null), Gi(6, {
                    display: 0
                })], function (t, e) {
                    var n = e.component;
                    t(e, 3, 0, !n.autoload && n.status < 1), t(e, 5, 0, t(e, 6, 0, 2 === n.status ? "" : "none"))
                }, null)
            }
            var Jg = function () {
                    function t(t, e, n) {
                        this.el = t, this.router = e, this.app = n, this.className = "is-snippet"
                    }
                    return t.prototype.ngAfterViewInit = function () {
                        var t = this;
                        this.app.ssr || (this.process(), this.currentUrl = this.getUrl(), this.routerSub = this.router.events.pipe(ql(function (t) {
                            return t instanceof Kf
                        })).subscribe(function () {
                            var e = t.getUrl();
                            e !== t.currentUrl && (t.currentUrl = e, setTimeout(function () {
                                t.process()
                            }, 0))
                        }))
                    }, t.prototype.ngOnDestroy = function () {
                        this.routerSub && this.routerSub.unsubscribe()
                    }, t.prototype.getUrl = function () {
                        return this.router.url.split("#")[0]
                    }, t.prototype.process = function () {
                        var t = this,
                            e = /^https?\:\/\/gist.github.com/,
                            n = this.el.nativeElement && this.el.nativeElement.getElementsByClassName(this.className);
                        n && n.length && Array.from(n).forEach(function (n) {
                            var r = n.querySelector("script");
                            if (n.classList.remove(t.className), r) {
                                var o = r.innerHTML,
                                    i = r.src;
                                if (o || i) {
                                    if (n.removeChild(r), i && i.match(e)) {
                                        var a = document.createElement("iframe");
                                        return a.style.display = "none", a.onload = function () {
                                            var t = a.contentDocument;
                                            if (t) {
                                                var e = document.createDocumentFragment(),
                                                    r = t.querySelector('link[rel="stylesheet"]'),
                                                    o = t.querySelector(".gist");
                                                if (r && o) {
                                                    var i = o.cloneNode();
                                                    i.innerHTML = o.innerHTML, e.appendChild(r.cloneNode()), e.appendChild(i)
                                                }
                                                n.removeChild(a), n.appendChild(e), a = t = null
                                            }
                                        }, a.srcdoc = '<script src="' + i + '"><\/script>', void n.appendChild(a)
                                    }
                                    var s = document.createElement("script");
                                    i ? s.src = i : s.innerHTML = o, n.appendChild(s)
                                }
                            }
                        })
                    }, t
                }(),
                Xg = function () {
                    return function (t) {
                        this.post$ = t.data.pipe(Bd("post"))
                    }
                }(),
                tm = so({
                    encapsulation: 0,
                    styles: [
                        ['@charset "UTF-8";[_nghost-%COMP%]{display:block;overflow:hidden;border-radius:3px}header[_ngcontent-%COMP%]{position:relative;overflow:hidden;background-color:#fff}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:relative;margin:0}header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{position:relative;z-index:1;margin:0;line-height:1}header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;margin-right:1.5rem;padding:.5em 0}header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:before, header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{margin-right:.5rem;vertical-align:text-top;font-family:Icon;opacity:.8}header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]::before{content:"\ue921"}header[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]::before{content:"\ue920"}header[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]::before{content:"\ue924"}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:4.5rem 2.25rem 2.25rem}.header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{padding:.5rem 2.25rem;background-color:#f5f7fa}.header-thumbnail[_ngcontent-%COMP%]{padding-top:37%;background-position:center;background-size:cover;color:#fff}.header-thumbnail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:2.5rem 2.25rem 1.5rem;background:rgba(0,0,0,.25);background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.75) 100%)}@media (max-width:656px){[_nghost-%COMP%]{border-radius:0}header[_ngcontent-%COMP%]{border-radius:0}.header[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{padding:.5rem 1.5rem}.header-thumbnail[_ngcontent-%COMP%]{padding-top:25%}.header-thumbnail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:2rem 1.5rem 1rem}}.header-thumbnail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{position:relative;margin:.7rem 0 1.4rem;border:0;border-bottom:2px solid rgba(255,255,255,.382)}article[_ngcontent-%COMP%]{position:relative;padding-top:.84375rem!important;padding:2.25rem;background-color:#fff}footer[_ngcontent-%COMP%]{padding:0 2.25rem;background-color:#fff}footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{padding-bottom:1rem}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;padding:1.5rem 0 2rem;border-top:1px dotted #eaecee}@media (max-width:656px){.header-thumbnail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:.5rem 0 1rem}article[_ngcontent-%COMP%]{padding-top:.5625rem!important;border:0;padding:1.5rem}footer[_ngcontent-%COMP%]{padding:0 1.5rem}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]{margin-top:.5rem;padding-top:1rem}}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;-ms-flex:1;flex:1;padding:0 1rem}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{position:absolute;top:0;font-size:1.4rem;font-family:Icon}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a.prev[_ngcontent-%COMP%]::before{left:-.5rem;content:"\ue903"}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a.next[_ngcontent-%COMP%]{text-align:right}footer[_ngcontent-%COMP%]   .siblings[_ngcontent-%COMP%]   a.next[_ngcontent-%COMP%]::after{right:-.5rem;content:"\ue901"}']
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "scaleIn",
                            definitions: [{
                                type: 0,
                                name: "in",
                                styles: {
                                    type: 6,
                                    styles: {
                                        transform: "none",
                                        opacity: 1
                                    },
                                    offset: null
                                },
                                options: void 0
                            },
                                {
                                    type: 0,
                                    name: "void",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "scale(.8)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 1,
                                    expr: ":enter",
                                    animation: {
                                        type: 4,
                                        styles: null,
                                        timings: "400ms ease"
                                    },
                                    options: null
                                }],
                            options: {}
                        }]
                    }
                });

            function em(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.ngIf.title)
                })
            }
            function nm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [
                    ["class", "author"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.ngIf.author)
                })
            }
            function rm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [
                    ["class", "categories"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(2, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/categories/", e.parent.context.ngIf.categories[0], ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 2, 0, e.parent.context.ngIf.categories[0])
                })
            }
            function om(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "hr", [], [
                    [24, "@scaleIn", 0]
                ], null, null, null, null))], null, function (t, e) {
                    t(e, 0, 0, void 0)
                })
            }
            function im(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.ngIf.title)
                })
            }
            function am(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-reward", [], null, null, null, Ag, kg)), ki(1, 245760, null, 0, Eg, [zn, Qh, xd], null, null)], function (t, e) {
                    t(e, 1, 0)
                }, null)
            }
            function sm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-copyright", [
                    ["class", "article"]
                ], null, null, null, Lg, Dg)), ki(1, 114688, null, 0, Ng, [], {
                    copyright: [0, "copyright"]
                }, null)], function (t, e) {
                    t(e, 1, 0, e.parent.context.ngIf.copyright)
                }, null)
            }
            function lm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-tag", [], null, null, null, Ug, Vg)), ki(1, 114688, null, 0, Hg, [Nn], {
                    name: [0, "name"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.context.$implicit, ""))
                }, null)
            }
            function um(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "div", [
                    ["class", "tags"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, lm)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.parent.context.ngIf.tags)
                }, null)
            }
            function cm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [
                    ["class", "prev"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(2, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/post/", e.parent.parent.context.ngIf.prev.slug, ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 2, 0, e.parent.parent.context.ngIf.prev.title)
                })
            }
            function fm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [
                    ["class", "next"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(2, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/post/", e.parent.parent.context.ngIf.next.slug, ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 2, 0, e.parent.parent.context.ngIf.next.title)
                })
            }
            function pm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, "div", [
                    ["class", "siblings"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, cm)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, fm)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.parent.context.ngIf.prev), t(e, 4, 0, e.parent.context.ngIf.next)
                }, null)
            }
            function hm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "is-comments", [
                    ["class", "comments"]
                ], null, null, null, Yg, Wg)), ki(1, 638976, null, 0, Qg, [xd, Ed, zn], {
                    page: [0, "page"]
                }, null), Gi(2, {
                    id: 0,
                    url: 1,
                    title: 2,
                    thumbnail: 3
                })], function (t, e) {
                    t(e, 1, 0, t(e, 2, 0, e.parent.context.ngIf.slug, e.parent.context.ngIf.link, e.parent.context.ngIf.title, e.parent.context.ngIf.thumbnail))
                }, null)
            }
            function dm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 37, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 19, "header", [], null, null, null, null, null)), ki(2, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(3, {
                    "header-thumbnail": 0,
                    header: 1
                }), ki(4, 278528, null, 0, mc, [cr, Nn, An], {
                    ngStyle: [0, "ngStyle"]
                }, null), Gi(5, {
                    "background-image": 0
                }), (t()(), Lo(6, 0, null, null, 14, "div", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, em)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(9, 0, null, null, 7, "p", [
                    ["class", "meta"]
                ], null, null, null, null, null)), (t()(), Lo(10, 0, null, null, 2, "span", [
                    ["class", "date"]
                ], null, null, null, null, null)), (t()(), Yi(11, null, ["", ""])), $i(12, 1), (t()(), Fo(16777216, null, null, 1, null, nm)), ki(14, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, rm)), ki(16, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, om)), ki(18, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, im)), ki(20, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(21, 0, null, null, 9, "article", [], null, null, null, null, null)), (t()(), Lo(22, 0, null, null, 4, "div", [
                    ["is-snippet", ""]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), ki(23, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(24, {
                    article: 0,
                    dropcap: 1
                }), ki(25, 4341760, null, 0, Jg, [Nn, Qh, xd], null, null), $i(26, 1), (t()(), Fo(16777216, null, null, 1, null, am)), ki(28, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, sm)), ki(30, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(31, 0, null, null, 4, "footer", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, um)), ki(33, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, pm)), ki(35, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, hm)), ki(37, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 2, 0, t(e, 3, 0, e.context.ngIf.thumbnail, !e.context.ngIf.thumbnail)), t(e, 4, 0, t(e, 5, 0, e.context.ngIf.thumbnail && "url(" + e.context.ngIf.thumbnail + ")")), t(e, 8, 0, !e.context.ngIf.thumbnail), t(e, 14, 0, e.context.ngIf.author), t(e, 16, 0, e.context.ngIf.categories), t(e, 18, 0, e.context.ngIf.thumbnail), t(e, 20, 0, e.context.ngIf.thumbnail), t(e, 23, 0, t(e, 24, 0, !0, e.context.ngIf.dropcap)), t(e, 28, 0, e.context.ngIf.reward), t(e, 30, 0, e.context.ngIf.copyright), t(e, 33, 0, e.context.ngIf.tags && e.context.ngIf.tags.length), t(e, 35, 0, e.context.ngIf.prev || e.context.ngIf.next), t(e, 37, 0, e.context.ngIf.comments)
                }, function (t, e) {
                    t(e, 11, 0, oo(e, 11, 0, t(e, 12, 0, hi(e.parent, 0), e.context.ngIf.date))), t(e, 22, 0, oo(e, 22, 0, t(e, 26, 0, hi(e.parent, 1), e.context.ngIf.content)))
                })
            }
            function gm(t) {
                return ta(0, [Pi(0, Cc, [gr]), Pi(0, mg, [Of]), (t()(), Fo(16777216, null, null, 2, null, dm)), ki(3, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 3, 0, oo(e, 3, 0, hi(e, 4).transform(n.post$)))
                }, null)
            }
            var mm = ni("is-v-post", Xg, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-post", [], null, null, null, gm, tm)), ki(1, 49152, null, 0, Xg, [ah], null, null)], null, null)
                }, {}, {}, []),
                ym = function () {
                    return function (t) {
                        this.tagList$ = t.data.pipe(Bd("tagList"))
                    }
                }(),
                vm = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;border-radius:3px;padding:2.25rem;background-color:#fff}@media (max-width:656px){[_nghost-%COMP%]{border:0;border-radius:0;padding:1.5rem}}h1[_ngcontent-%COMP%]{margin:0 0 1.5rem}"]
                    ],
                    data: {}
                });

            function _m(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-tag", [], null, null, null, Ug, Vg)), ki(1, 114688, null, 0, Hg, [Nn], {
                    name: [0, "name"],
                    count: [1, "count"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.context.$implicit.name, ""), Ro(1, "", e.context.$implicit.count, ""))
                }, null)
            }
            function bm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 5, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 2, "h1", [], null, null, null, null, null)), (t()(), Yi(2, null, ["", ""])), $i(3, 3), (t()(), Fo(16777216, null, null, 1, null, _m)), ki(5, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 5, 0, e.context.ngIf)
                }, function (t, e) {
                    t(e, 2, 0, oo(e, 2, 0, t(e, 3, 0, hi(e.parent, 0), "page.tags", "_p", e.context.ngIf.length)))
                })
            }
            function wm(t) {
                return ta(2, [Pi(0, yg, [xd]), (t()(), Fo(16777216, null, null, 2, null, bm)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, oo(e, 2, 0, hi(e, 3).transform(n.tagList$)))
                }, null)
            }
            var Cm = ni("is-v-tag-list", ym, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-tag-list", [], null, null, null, wm, vm)), ki(1, 49152, null, 0, ym, [ah], null, null)], null, null)
                }, {}, {}, []),
                Sm = function () {},
                xm = so({
                    encapsulation: 0,
                    styles: [
                        ['a[_ngcontent-%COMP%]{position:relative;display:block;margin-left:1.5rem;font-size:1.15rem;line-height:3rem}a[_ngcontent-%COMP%]::before{position:absolute;top:1.5rem;left:-1rem;color:#97a9c5;content:\'-\';-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}a[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{float:left;padding-right:.5rem;color:#97a9c5;white-space:nowrap;letter-spacing:1px;font-size:.85rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif;transition:color .4s}a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:table-cell}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover   .time[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover::before{color:inherit}']
                    ],
                    data: {}
                });

            function Em(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Lo(2, 0, null, null, 2, "span", [
                    ["class", "time"]
                ], null, null, null, null, null)), (t()(), Yi(3, null, ["", ""])), $i(4, 2), (t()(), Lo(5, 0, null, null, 1, "span", [
                    ["class", "text"]
                ], null, null, null, null, null)), (t()(), Yi(6, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/post/", e.context.$implicit.slug, ""))
                }, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, hi(e, 1).target, hi(e, 1).href), t(e, 3, 0, oo(e, 3, 0, t(e, 4, 0, hi(e.parent, 0), e.context.$implicit.date, n.dateFormat || "yyyy-MM-dd"))), t(e, 6, 0, e.context.$implicit.title)
                })
            }
            function km(t) {
                return ta(2, [Pi(0, Cc, [gr]), (t()(), Fo(16777216, null, null, 1, null, Em)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.component.posts)
                }, null)
            }
            var Pm = function () {
                    return function (t) {
                        this.tags$ = t.data.pipe(Bd("tag"))
                    }
                }(),
                Om = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block}article[_ngcontent-%COMP%]{border-radius:3px;padding:2.25rem;background-color:#fff}@media (max-width:656px){article[_ngcontent-%COMP%]{border:0;border-radius:0;padding:1.5rem}}h1[_ngcontent-%COMP%]{margin:0 0 1.5rem}"]
                    ],
                    data: {}
                });

            function Tm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-pager", [], null, null, null, lg, eg)), ki(1, 638976, null, 0, tg, [], {
                    size: [0, "size"],
                    count: [1, "count"],
                    current: [2, "current"],
                    url: [3, "url"],
                    indexUrl: [4, "indexUrl"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.parent.context.ngIf.per_page, ""), Ro(1, "", e.parent.context.ngIf.total, ""), Ro(1, "", e.parent.context.ngIf.current, ""), Ro(1, "tags/", e.parent.context.ngIf.name, ""), Ro(1, "tags/", e.parent.context.ngIf.name, ""))
                }, null)
            }
            function Mm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 7, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 4, "article", [], null, null, null, null, null)), (t()(), Lo(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), Yi(3, null, ["# ", ""])), (t()(), Lo(4, 0, null, null, 1, "is-archive", [], null, null, null, km, xm)), ki(5, 49152, null, 0, Sm, [], {
                    posts: [0, "posts"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Tm)), ki(7, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 5, 0, e.context.ngIf.data), t(e, 7, 0, e.context.ngIf.total > 1)
                }, function (t, e) {
                    t(e, 3, 0, e.context.ngIf.name)
                })
            }
            function Im(t) {
                return ta(0, [(t()(), Fo(16777216, null, null, 2, null, Mm)), ki(1, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, oo(e, 1, 0, hi(e, 2).transform(n.tags$)))
                }, null)
            }
            var Am = ni("is-v-tag", Pm, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-tag", [], null, null, null, Im, Om)), ki(1, 49152, null, 0, Pm, [ah], null, null)], null, null)
                }, {}, {}, []),
                Nm = function () {
                    function t(t) {
                        this.categoryList$ = t.data.pipe(Bd("categoryList"))
                    }
                    return t.prototype.ngAfterViewInit = function () {
                        var t = this;
                        setTimeout(function () {
                            var e = t.elementNav.nativeElement.querySelector("a.active");
                            if (e) {
                                var n = t.elementNav.nativeElement.offsetWidth;
                                if (t.elementNav.nativeElement.scrollWidth > n) {
                                    var r = e.offsetLeft - n + e.offsetWidth;
                                    if (r <= 0) return;
                                    Od(t.elementNav.nativeElement, "scrollLeft", {
                                        from: 0,
                                        to: r,
                                        duration: ~~r
                                    })
                                }
                            }
                        }, 100)
                    }, t
                }(),
                Dm = so({
                    encapsulation: 0,
                    styles: [
                        ['div[_ngcontent-%COMP%]{padding-bottom:5px}nav[_ngcontent-%COMP%]{display:block;position:relative;overflow-x:auto;overflow-y:hidden;padding:0!important;white-space:nowrap;border-radius:3px;background-color:#fff}@media (max-width:656px){nav[_ngcontent-%COMP%]{border:0;border-radius:0;padding:1.5rem}}nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:1.5rem 2rem;font-size:1.2rem}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{display:inline-block;margin-left:.5rem;padding:2px 5px;border-radius:2px;box-shadow:0 0 0 1px #eaecee;content:attr(count);font-size:.85rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{position:absolute;right:0;bottom:0;left:0;margin:auto;width:38%;height:.3rem;background-color:#2a2b33;content:\'\';transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-transform:scale3d(1,0,1);transform:scale3d(1,0,1);-webkit-transform-origin:center bottom;-ms-transform-origin:center bottom;transform-origin:center bottom}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}']
                    ],
                    data: {}
                });

            function Rm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 5, "a", [
                    ["routerLinkActive", "active"]
                ], [
                    [1, "count", 0],
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 671744, [
                    [3, 4]
                ], 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), ki(2, 1720320, null, 2, Yh, [Qh, Nn, An, zn], {
                    routerLinkActive: [0, "routerLinkActive"]
                }, null), zi(603979776, 2, {
                    links: 1
                }), zi(603979776, 3, {
                    linksWithHrefs: 1
                }), (t()(), Yi(5, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, Ro(1, "/categories/", e.context.$implicit.name, "")), t(e, 2, 0, "active")
                }, function (t, e) {
                    t(e, 0, 0, e.context.$implicit.count, hi(e, 1).target, hi(e, 1).href), t(e, 5, 0, e.context.$implicit.name)
                })
            }
            function jm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 3, "div", [], null, null, null, null, null)), (t()(), Lo(2, 0, [
                    [1, 0],
                    ["nav", 1]
                ], null, 2, "nav", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Rm)), ki(4, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), Lo(5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(6, 212992, null, 0, td, [Xh, Un, Ye, [8, null], zn], null, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 4, 0, e.context.ngIf), t(e, 6, 0)
                }, null)
            }
            function Fm(t) {
                return ta(0, [zi(671088640, 1, {
                    elementNav: 0
                }), (t()(), Fo(16777216, null, null, 2, null, jm)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, oo(e, 2, 0, hi(e, 3).transform(n.categoryList$)))
                }, null)
            }
            var Lm = ni("is-v-category", Nm, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-category", [], null, null, null, Fm, Dm)), ki(1, 4243456, null, 0, Nm, [ah], null, null)], null, null)
                }, {}, {}, []),
                Hm = function () {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.ngOnInit = function () {
                        var t = this;
                        this.route.data.subscribe(function (e) {
                            return t.categories = e.category
                        })
                    }, t
                }(),
                Vm = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block}article[_ngcontent-%COMP%]{position:relative;border-radius:3px;padding:2.25rem;background-color:#fff}@media (max-width:656px){article[_ngcontent-%COMP%]{border:0;border-radius:0;padding:1.5rem}}"]
                    ],
                    data: {}
                });

            function Um(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-pager", [], null, null, null, lg, eg)), ki(1, 638976, null, 0, tg, [], {
                    size: [0, "size"],
                    count: [1, "count"],
                    current: [2, "current"],
                    url: [3, "url"],
                    indexUrl: [4, "indexUrl"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, Ro(1, "", n.categories.per_page, ""), Ro(1, "", n.categories.total, ""), Ro(1, "", n.categories.current, ""), Ro(1, "categories/", n.categories.name, ""), Ro(1, "categories/", n.categories.name, ""))
                }, null)
            }
            function zm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "article", [], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 1, "is-archive", [], null, null, null, km, xm)), ki(2, 49152, null, 0, Sm, [], {
                    posts: [0, "posts"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Um)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.categories.data), t(e, 4, 0, n.categories.total > 1)
                }, null)
            }
            var Bm = ni("is-category", Hm, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-category", [], null, null, null, zm, Vm)), ki(1, 114688, null, 0, Hm, [ah], null, null)], function (t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                qm = function () {
                    return function (t) {
                        this.archives$ = t.data.pipe(Bd("archives"))
                    }
                }(),
                Km = so({
                    encapsulation: 0,
                    styles: [
                        ['[_nghost-%COMP%]{display:block}article[_ngcontent-%COMP%]{border-radius:3px;overflow:hidden}section[_ngcontent-%COMP%]{position:relative;padding:2.25rem;background-color:#fff}section[_ngcontent-%COMP%]:last-of-type{padding-bottom:6rem}section[_ngcontent-%COMP%]::before{position:absolute;top:0;left:3.75rem;width:1px;height:100%;background-color:#eaecee;content:\'\'}@media (max-width:656px){section[_ngcontent-%COMP%]{border:0;padding:1.5rem}section[_ngcontent-%COMP%]::before{left:3rem}}section[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{position:relative;background-color:#fff;font-weight:700;font-size:2rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif;line-height:2.4em}.month[_ngcontent-%COMP%]{position:relative;padding-left:3rem}.month[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{position:absolute;top:1.5rem;left:1.5rem;padding:.4em .6em;border-radius:2px;background-color:#97a9c5;color:#fff;font-weight:700;font-size:.9rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif;transition:background-color .25s;-webkit-transform:translate(-50%,-50%) scale(.75);-ms-transform:translate(-50%,-50%) scale(.75);transform:translate(-50%,-50%) scale(.75)}.month[_ngcontent-%COMP%]:hover > header[_ngcontent-%COMP%]{background-color:#2a2b33}']
                    ],
                    data: {}
                });

            function Qm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 5, "div", [
                    ["class", "month"]
                ], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 2, "header", [], null, null, null, null, null)), (t()(), Yi(2, null, ["", ""])), $i(3, 2), (t()(), Lo(4, 0, null, null, 1, "is-archive", [
                    ["dateFormat", "MM-dd"]
                ], null, null, null, km, xm)), ki(5, 49152, null, 0, Sm, [], {
                    posts: [0, "posts"],
                    dateFormat: [1, "dateFormat"]
                }, null)], function (t, e) {
                    t(e, 5, 0, e.context.$implicit.entries, "MM-dd")
                }, function (t, e) {
                    t(e, 2, 0, oo(e, 2, 0, t(e, 3, 0, hi(e.parent.parent.parent, 0), "1970-" + e.context.$implicit.month + "-1", "MMM")))
                })
            }
            function Wm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, "section", [
                    ["class", "year"]
                ], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 1, "header", [], null, null, null, null, null)), (t()(), Yi(2, null, ["", ""])), (t()(), Fo(16777216, null, null, 1, null, Qm)), ki(4, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 4, 0, e.context.$implicit.months)
                }, function (t, e) {
                    t(e, 2, 0, e.context.$implicit.year)
                })
            }
            function $m(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-pager", [
                    ["indexUrl", "archives"],
                    ["url", "archives"]
                ], null, null, null, lg, eg)), ki(1, 638976, null, 0, tg, [], {
                    size: [0, "size"],
                    count: [1, "count"],
                    current: [2, "current"],
                    url: [3, "url"],
                    indexUrl: [4, "indexUrl"]
                }, null)], function (t, e) {
                    t(e, 1, 0, Ro(1, "", e.parent.context.ngIf.per_page, ""), Ro(1, "", e.parent.context.ngIf.total, ""), Ro(1, "", e.parent.context.ngIf.current, ""), "archives", "archives")
                }, null)
            }
            function Gm(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 5, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 2, "article", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Wm)), ki(3, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, $m)), ki(5, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 3, 0, e.context.ngIf.data), t(e, 5, 0, e.context.ngIf.total > 1)
                }, null)
            }
            function Zm(t) {
                return ta(0, [Pi(0, Cc, [gr]), (t()(), Fo(16777216, null, null, 2, null, Gm)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, oo(e, 2, 0, hi(e, 3).transform(n.archives$)))
                }, null)
            }
            var Ym = ni("is-v-archive", qm, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-archive", [], null, null, null, Zm, Km)), ki(1, 49152, null, 0, qm, [ah], null, null)], null, null)
                }, {}, {}, []),
                Jm = function () {
                    function t(t) {
                        var e = this;
                        this.router = t, this.routerSub = this.router.events.pipe(ql(function (t) {
                            return t instanceof Kf
                        }), du()).subscribe(function (t) {
                            e.intendUrl = decodeURIComponent(t.url), e.url = decodeURIComponent(t.urlAfterRedirects)
                        })
                    }
                    return t.prototype.ngOnDestroy = function () {
                        this.routerSub.unsubscribe()
                    }, t
                }(),
                Xm = so({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function ty(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, null, null, null, null, null, null, null)), (t()(), Yi(1, null, ["", ""])), $i(2, 2)], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, oo(e, 1, 0, t(e, 2, 0, hi(e.parent, 0), "page.notfound.direct_failed", n.intendUrl)))
                })
            }
            function ey(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, null, null, null, null, null, null, null)), (t()(), Yi(1, null, ["", ""])), $i(2, 1)], null, function (t, e) {
                    t(e, 1, 0, oo(e, 1, 0, t(e, 2, 0, hi(e.parent, 0), "page.notfound.empty")))
                })
            }
            function ny(t) {
                return ta(2, [Pi(0, yg, [xd]), (t()(), Lo(1, 0, null, null, 8, "div", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, ty)), ki(3, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, ey)), ki(5, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(6, 0, null, null, 3, "a", [
                    ["routerLink", "/"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 7).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(7, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(8, null, ["", ""])), $i(9, 1)], function (t, e) {
                    var n = e.component;
                    t(e, 3, 0, n.intendUrl != n.url), t(e, 5, 0, n.intendUrl == n.url), t(e, 7, 0, "/")
                }, function (t, e) {
                    t(e, 6, 0, hi(e, 7).target, hi(e, 7).href), t(e, 8, 0, oo(e, 8, 0, t(e, 9, 0, hi(e, 0), "page.notfound.home")))
                })
            }
            var ry = ni("is-v-not-found", Jm, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-not-found", [
                        ["class", "v-not-found"]
                    ], null, null, null, ny, Xm)), ki(1, 180224, null, 0, Jm, [Qh], null, null)], null, null)
                }, {}, {}, []),
                oy = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;overflow:hidden;border-radius:3px}header[_ngcontent-%COMP%]{background-color:#fff;text-align:center}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;padding:3.375rem 2.25rem 1rem}header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#eaecee}article[_ngcontent-%COMP%]{position:relative;padding-top:1rem!important;padding:2.25rem;background-color:#fff}@media (max-width:656px){[_nghost-%COMP%]{border-radius:0}article[_ngcontent-%COMP%]{border:0;padding:1.5rem}}"]
                    ],
                    data: {}
                });

            function iy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-reward", [], null, null, null, Ag, kg)), ki(1, 245760, null, 0, Eg, [zn, Qh, xd], null, null)], function (t, e) {
                    t(e, 1, 0)
                }, null)
            }
            function ay(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "is-comments", [
                    ["class", "comments"]
                ], null, null, null, Yg, Wg)), ki(1, 638976, null, 0, Qg, [xd, Ed, zn], {
                    page: [0, "page"]
                }, null), Gi(2, {
                    id: 0,
                    url: 1,
                    title: 2
                })], function (t, e) {
                    t(e, 1, 0, t(e, 2, 0, e.parent.context.ngIf.slug, e.parent.context.ngIf.link, e.parent.context.ngIf.title))
                }, null)
            }
            function sy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 13, null, null, null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 2, "header", [], null, null, null, null, null)), (t()(), Lo(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), Yi(3, null, ["", ""])), (t()(), Lo(4, 0, null, null, 7, "article", [], null, null, null, null, null)), (t()(), Lo(5, 0, null, null, 4, "div", [
                    ["is-snippet", ""]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), ki(6, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(7, {
                    article: 0,
                    dropcap: 1
                }), ki(8, 4341760, null, 0, Jg, [Nn, Qh, xd], null, null), $i(9, 1), (t()(), Fo(16777216, null, null, 1, null, iy)), ki(11, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, ay)), ki(13, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    t(e, 6, 0, t(e, 7, 0, !0, e.context.ngIf.dropcap)), t(e, 11, 0, e.context.ngIf.reward), t(e, 13, 0, e.context.ngIf.comments)
                }, function (t, e) {
                    t(e, 3, 0, e.context.ngIf.title), t(e, 5, 0, oo(e, 5, 0, t(e, 9, 0, hi(e.parent, 0), e.context.ngIf.content)))
                })
            }
            function ly(t) {
                return ta(0, [Pi(0, mg, [Of]), (t()(), Fo(16777216, null, null, 2, null, sy)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), Pi(131072, wc, [zn])], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, oo(e, 2, 0, hi(e, 3).transform(n.page$)))
                }, null)
            }
            var uy = ni("is-v-page", qd, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-v-page", [], null, null, null, ly, oy)), ki(1, 49152, null, 0, qd, [ah], null, null)], null, null)
                }, {}, {}, []),
                cy = so({
                    encapsulation: 0,
                    styles: [
                        ['@charset "UTF-8";[_nghost-%COMP%]{position:absolute;right:1rem;bottom:1.5rem;z-index:9;color:#fff;text-align:center}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]{width:4rem;height:4rem;cursor:pointer}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\ue905";font-family:Icon}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]   span.progress[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif}[_nghost-%COMP%]   .toggle-menu[_ngcontent-%COMP%]   span.progress[_ngcontent-%COMP%]:after{padding-left:1px;content:\'%\';font-size:.75rem;font-family:inherit}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{z-index:-1;display:block;width:4rem;height:4rem}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.dot[_ngcontent-%COMP%]{-webkit-transform:translate(2rem,2rem);-ms-transform:translate(2rem,2rem);transform:translate(2rem,2rem)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.dot[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{transition:.15s;fill:#fff}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif;line-height:1;-webkit-transform:translateY(.382em);-ms-transform:translateY(.382em);transform:translateY(.382em);fill:#fff;text-anchor:middle}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]   tspan[_ngcontent-%COMP%]{font-size:.75rem;font-family:inherit}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle.progress[_ngcontent-%COMP%]{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;stroke-width:1px;stroke:rgba(185,128,128,.9);fill:none}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   circle.fab[_ngcontent-%COMP%]{fill:rgba(185,128,128,.9)}[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:2.8rem;height:2.8rem;border-radius:50%;background-color:rgba(0,0,0,.8);box-shadow:0 2px 4px 1px rgba(0,0,0,.2);font-size:1.5rem;line-height:2.8rem;opacity:0;cursor:pointer;transition:transform .4s cubic-bezier(0,0,.382,1.618),opacity .4s cubic-bezier(0,0,.382,1.618),-webkit-transform .4s cubic-bezier(0,0,.382,1.618)}[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{font-size:inherit}[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n-2){top:0;right:0}[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n-1){top:0;left:0}[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n){bottom:0;left:0}[_nghost-%COMP%]   .menu-group.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .menu-group.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){-webkit-transform:translate(0,-140%);-ms-transform:translate(0,-140%);transform:translate(0,-140%)}[_nghost-%COMP%]   .menu-group.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-transform:translate(-98.99494937%,-98.99494937%);-ms-transform:translate(-98.99494937%,-98.99494937%);transform:translate(-98.99494937%,-98.99494937%)}[_nghost-%COMP%]   .menu-group.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-transform:translate(-140%,0);-ms-transform:translate(-140%,0);transform:translate(-140%,0)}[_nghost-%COMP%]   .menu-group.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){-webkit-transform:translate(0,-280%);-ms-transform:translate(0,-280%);transform:translate(0,-280%)}']
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "isFab",
                            definitions: [{
                                type: 0,
                                name: "enter",
                                styles: {
                                    type: 6,
                                    styles: {
                                        transform: "none",
                                        opacity: 1
                                    },
                                    offset: null
                                },
                                options: void 0
                            },
                                {
                                    type: 0,
                                    name: "void",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(100%)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 0,
                                    name: "exit",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(100%)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                {
                                    type: 1,
                                    expr: "* => *",
                                    animation: {
                                        type: 4,
                                        styles: null,
                                        timings: "400ms ease"
                                    },
                                    options: null
                                }],
                            options: {}
                        },
                            {
                                type: 7,
                                name: "rotateVertical",
                                definitions: [{
                                    type: 0,
                                    name: "stop",
                                    styles: {
                                        type: 6,
                                        styles: {
                                            transform: "rotateY(0)"
                                        },
                                        offset: null
                                    },
                                    options: void 0
                                },
                                    {
                                        type: 0,
                                        name: "rotate",
                                        styles: {
                                            type: 6,
                                            styles: {
                                                transform: "rotateY(360deg)"
                                            },
                                            offset: null
                                        },
                                        options: void 0
                                    },
                                    {
                                        type: 1,
                                        expr: "stop <=> rotate",
                                        animation: {
                                            type: 4,
                                            styles: null,
                                            timings: "1000ms ease"
                                        },
                                        options: null
                                    }],
                                options: {}
                            }]
                    }
                });

            function fy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "span", [
                    ["class", "icon-sidebar"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.act("toggleSidebar") && r), r
                }, null, null))], null, null)
            }
            function py(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "span", [
                    ["class", "icon-toc"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.act("toggleToc") && r), r
                }, null, null))], null, null)
            }
            function hy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 3, ":svg:text", [
                    ["dy", "50%"],
                    ["x", "50%"],
                    ["y", "0"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", ""])), (t()(), Lo(2, 0, null, null, 1, ":svg:tspan", [
                    ["dx", "1"]
                ], null, null, null, null, null)), (t()(), Yi(-1, null, ["%"]))], null, function (t, e) {
                    t(e, 1, 0, e.component.progress || "")
                })
            }
            function dy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 3, ":svg:g", [
                    ["class", "dot"]
                ], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 0, ":svg:circle", [
                    ["r", ".2rem"]
                ], [
                    [1, "cx", 0],
                    [1, "cy", 0]
                ], null, null, null, null)), (t()(), Lo(2, 0, null, null, 0, ":svg:circle", [
                    ["r", ".2rem"]
                ], null, null, null, null, null)), (t()(), Lo(3, 0, null, null, 0, ":svg:circle", [
                    ["r", ".2rem"]
                ], [
                    [1, "cx", 0],
                    [1, "cy", 0]
                ], null, null, null, null))], null, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, n.showMenu ? "-.8rem" : 0, n.showMenu ? 0 : "-.8rem"), t(e, 3, 0, n.showMenu ? ".8rem" : 0, n.showMenu ? 0 : ".8rem")
                })
            }
            function gy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 8, "div", [], null, null, null, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(2, {
                    active: 0,
                    "menu-group": 1
                }), (t()(), Lo(3, 0, null, null, 0, "span", [
                    ["class", "icon-arrow-up"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.act("toTop") && r), r
                }, null, null)), (t()(), Lo(4, 0, null, null, 0, "span", [
                    ["class", "icon-arrow-down"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.act("toBottom") && r), r
                }, null, null)), (t()(), Fo(16777216, null, null, 1, null, fy)), ki(6, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, py)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(9, 0, null, null, 11, "div", [
                    ["class", "toggle-menu"]
                ], [
                    [24, "@rotateVertical", 0]
                ], [
                    [null, "click"],
                    [null, "@rotateVertical.done"]
                ], function (t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "click" === e && (r = !1 !== o.toggle() && r), "@rotateVertical.done" === e && (r = !1 !== o.rotateEnd() && r), r
                }, null, null)), (t()(), Lo(10, 0, null, null, 10, ":svg:svg", [], null, null, null, null, null)), (t()(), Lo(11, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (t()(), Lo(12, 0, null, null, 1, ":svg:filter", [
                    ["id", "dp"]
                ], null, null, null, null, null)), (t()(), Lo(13, 0, null, null, 0, ":svg:feGaussianBlur", [
                    ["in", "SourceGraphic"],
                    ["stdDeviation", "2"]
                ], null, null, null, null, null)), (t()(), Lo(14, 0, null, null, 0, ":svg:circle", [
                    ["cx", "50%"],
                    ["cy", "52%"],
                    ["fill", "rgba(0,0,0,.3)"],
                    ["filter", "url(#dp)"],
                    ["r", "44%"]
                ], null, null, null, null, null)), (t()(), Lo(15, 0, null, null, 0, ":svg:circle", [
                    ["class", "fab"],
                    ["cx", "50%"],
                    ["cy", "50%"],
                    ["r", "44%"]
                ], null, null, null, null, null)), (t()(), Lo(16, 0, null, null, 0, ":svg:circle", [
                    ["class", "progress"],
                    ["cx", "50%"],
                    ["cy", "50%"],
                    ["r", "48%"]
                ], [
                    [1, "stroke-dasharray", 0]
                ], null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, hy)), ki(18, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, dy)), ki(20, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, t(e, 2, 0, n.showMenu, !0)), t(e, 6, 0, n.sidebar), t(e, 8, 0, n.toc), t(e, 18, 0, n.progress), t(e, 20, 0, !n.progress)
                }, function (t, e) {
                    var n = e.component;
                    t(e, 9, 0, n.rotateState), t(e, 16, 0, 3.1415926 * (n.progress || 0) + "% 314.15926%")
                })
            }
            var my = so({
                encapsulation: 0,
                styles: [
                    ['[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;z-index:10;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:1rem 0;width:20rem;background-color:rgba(255,255,255,.85);box-shadow:-1px 0 2px rgba(0,0,0,.1);color:#a7a7a7;-webkit-transform:translate3d(104%,0,0);transform:translate3d(104%,0,0)}a[_ngcontent-%COMP%]{display:block;padding:.5em 1em;line-height:1.4rem}a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active{color:#000}a[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%]{float:left;margin-right:4px;font-size:.9rem;font-family:Montserrat,"PingFang SC","Microsoft JhengHei","Microsoft YaHei",sans-serif}a[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:table-cell}ol[_ngcontent-%COMP%]{margin:0;padding:0 0 0 1.5em}li[_ngcontent-%COMP%]{position:relative;list-style-type:none}ol.top[_ngcontent-%COMP%]{padding-left:0}ol.top[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]::before{position:absolute;top:.5em;bottom:.5em;left:1px;width:2px;background-color:#2a2b33;content:\'\';transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-transform:scale3d(1,0,1);transform:scale3d(1,0,1);-webkit-transform-origin:center top;-ms-transform-origin:center top;transform-origin:center top}@media (max-width:656px){[_nghost-%COMP%]{background-color:rgba(0,0,0,.85)}a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active{color:#fff}ol.top[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]::before{background-color:#fff}}ol.top[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]::before{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}']
                ],
                data: {}
            });

            function yy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [
                    ["class", "index"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", " "]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.$implicit.index)
                })
            }
            function vy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [
                    ["class", "index"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", " "]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.$implicit.index)
                })
            }
            function _y(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [
                    ["class", "index"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", " "]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.$implicit.index)
                })
            }
            function by(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [
                    ["class", "index"]
                ], null, null, null, null, null)), (t()(), Yi(1, null, ["", " "]))], null, function (t, e) {
                    t(e, 1, 0, e.parent.context.$implicit.index)
                })
            }
            function wy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, "li", [], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 5, "a", [], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.navigate(t.context.$implicit.id) && r), r
                }, null, null)), ki(2, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(3, {
                    active: 0
                }), (t()(), Fo(16777216, null, null, 1, null, by)), ki(5, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(6, 0, null, null, 0, "span", [
                    ["class", "title"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null))], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, t(e, 3, 0, n.currentId === e.context.$implicit.id)), t(e, 5, 0, n.config.index)
                }, function (t, e) {
                    t(e, 6, 0, e.context.$implicit.title)
                })
            }
            function Cy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "ol", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, wy)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.parent.context.$implicit.children)
                }, null)
            }
            function Sy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 8, "li", [], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 5, "a", [], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.navigate(t.context.$implicit.id) && r), r
                }, null, null)), ki(2, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(3, {
                    active: 0
                }), (t()(), Fo(16777216, null, null, 1, null, _y)), ki(5, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(6, 0, null, null, 0, "span", [
                    ["class", "title"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Cy)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, t(e, 3, 0, n.currentId === e.context.$implicit.id)), t(e, 5, 0, n.config.index), t(e, 8, 0, e.context.$implicit.children)
                }, function (t, e) {
                    t(e, 6, 0, e.context.$implicit.title)
                })
            }
            function xy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "ol", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Sy)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.parent.context.$implicit.children)
                }, null)
            }
            function Ey(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 8, "li", [], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 5, "a", [], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.navigate(t.context.$implicit.id) && r), r
                }, null, null)), ki(2, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(3, {
                    active: 0
                }), (t()(), Fo(16777216, null, null, 1, null, vy)), ki(5, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(6, 0, null, null, 0, "span", [
                    ["class", "title"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, xy)), ki(8, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, t(e, 3, 0, n.currentId === e.context.$implicit.id)), t(e, 5, 0, n.config.index), t(e, 8, 0, e.context.$implicit.children)
                }, function (t, e) {
                    t(e, 6, 0, e.context.$implicit.title)
                })
            }
            function ky(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "ol", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Ey)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.parent.context.$implicit.children)
                }, null)
            }
            function Py(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 10, "li", [], null, null, null, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(2, {
                    active: 0
                }), (t()(), Lo(3, 0, null, null, 5, "a", [], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.navigate(t.context.$implicit.id) && r), r
                }, null, null)), ki(4, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(5, {
                    active: 0
                }), (t()(), Fo(16777216, null, null, 1, null, yy)), ki(7, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(8, 0, null, null, 0, "span", [
                    ["class", "title"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, ky)), ki(10, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, t(e, 2, 0, n.stacks[n.currentId] && n.stacks[n.currentId].depth[0] === e.context.$implicit.id)), t(e, 4, 0, t(e, 5, 0, n.currentId === e.context.$implicit.id)), t(e, 7, 0, n.config.index), t(e, 10, 0, e.context.$implicit.children)
                }, function (t, e) {
                    t(e, 8, 0, e.context.$implicit.title)
                })
            }
            function Oy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "ol", [
                    ["class", "top"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Py)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.component.toc)
                }, null)
            }
            var Ty = function () {
                    this.title = "", this.size = 80
                },
                My = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{display:block;overflow:hidden}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto;border-radius:50%}"]
                    ],
                    data: {}
                });

            function Iy(t) {
                return ta(2, [(t()(), Lo(0, 0, null, null, 0, "img", [
                    ["draggable", "false"]
                ], [
                    [8, "src", 4],
                    [8, "alt", 0],
                    [8, "title", 0],
                    [8, "width", 0],
                    [8, "height", 0]
                ], null, null, null, null))], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, Ro(1, "", n.url, ""), Ro(1, "", n.title, ""), Ro(1, "", n.title, ""), Ro(1, "", n.size, ""), Ro(1, "", n.size, ""))
                })
            }
            var Ay = function () {
                    function t(t, e, n, r, o) {
                        var i = this;
                        this.route = t, this.router = e, this.element = n, this.device = r, this.app = o, this.config = this.app.config, this.router.events.pipe(ql(function (t) {
                            return t instanceof Kf
                        })).subscribe(function () {
                            var t = i.route.snapshot.children[0],
                                e = t.data;
                            i.currentKey = "page" === e.id ? t.routeConfig.path : "home" === e.id ? "" : "category" === e.id ? "categories" : "tag" === e.id ? "tags" : e.id, "/" !== i.currentKey[0] && (i.currentKey = "/" + i.currentKey)
                        }), this.menuKeys = this.config.menu ? Object.keys(this.config.menu) : []
                    }
                    return t.prototype.ngAfterViewInit = function () {
                        var t = this;
                        this.mediaSub = this.device.media.subscribe(function (e) {
                            var n = t.element.nativeElement.querySelector("footer"),
                                r = t.element.nativeElement.querySelector("section").offsetHeight + n.offsetHeight;
                            n.classList[r > t.device.height ? "remove" : "add"]("fixed")
                        }), this.device.refreshMedia()
                    }, t.prototype.isExternal = function (t) {
                        return !!t.match(/^(\w+:)?\/\/\w+\.\w+/)
                    }, t
                }(),
                Ny = so({
                    encapsulation: 0,
                    styles: [
                        ["[_nghost-%COMP%]{position:fixed;top:0;bottom:0;left:0;z-index:2;width:20rem;border-right:1px solid rgba(0,0,0,.1)}@media (max-width:975px){[_nghost-%COMP%]{left:-21rem;border:none;background-color:#202128;color:#c4c4c4}}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;overflow-x:visible;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-right:-1rem;padding-right:1rem;height:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}.author[_ngcontent-%COMP%]{margin:1rem 1rem .5rem;padding-top:3rem;border-radius:3px;background-size: 100%;background-color:#FFF;background-image: url(images/author.jpg);text-align:center}.author[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-bottom:2rem}.author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin:auto;padding:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:3px;box-shadow:inset 0 0 0 2px #2a2b33;text-align:center}.author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000}@media (max-width:975px){.author[_ngcontent-%COMP%]{border-color:#262626;background:rgba(0,0,0,.25);color:inherit}.author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #000}}.author[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{padding:1rem 1.4rem;line-height:1.5}.state[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-pack:distribute;justify-content:space-around;margin:0 1rem;padding:0 1rem;border-radius:3px;background-color:#fff;text-align:center;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:1.25rem 0;min-width:24%;border-radius:3px}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{position:absolute;right:0;bottom:0;left:0;margin:auto;width:62%;height:.3rem;background-color:#2a2b33;content:'';transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-transform:scale3d(1,0,1);transform:scale3d(1,0,1);-webkit-transform-origin:bottom center;-ms-transform-origin:bottom center;transform-origin:bottom center}.state[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:0 .5rem}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-bottom:.5rem;font-size:1.4rem}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-size:.95rem;color:#97a9c5}.routes[_ngcontent-%COMP%]{padding:2rem 0 4rem}.routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{position:relative;display:block;padding-right:2rem;height:3rem;text-align:right;text-transform:capitalize;font-family:Baloo Bhaijaan,\"PingFang SC\",\"Microsoft JhengHei\",\"Microsoft YaHei\",sans-serif;line-height:3rem;transition:.15s}.routes[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%], .routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#000;font-weight:700;font-size:1.2rem}@media (max-width:975px){.state[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.25);color:inherit}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{top:.5rem;bottom:.5rem;left:0;right:0;height:auto;width:auto;background-color:rgba(255,255,255,.06);border-radius:6px}.routes[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%], .routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}}.routes[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]::before, .routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover::before{background-color:#fff}.routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::before{position:absolute;top:50%;right:-.3rem;display:block;width:8px;height:8px;border-radius:50%;background-color:#f1f1f1;box-shadow:0 0 0 1px rgba(0,0,0,.1);content:'';transition:.15s;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}@media (max-width:975px){.routes[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::before{box-shadow:0 0 1px 1px rgba(0,0,0,.618)}}footer[_ngcontent-%COMP%]{padding:1rem 1rem .5rem;text-align:center;line-height:1.4em}footer.fixed[_ngcontent-%COMP%]{position:absolute;right:1rem;bottom:0;left:0}footer[_ngcontent-%COMP%]   .sns[_ngcontent-%COMP%]{margin-bottom:1rem;padding:0 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}footer[_ngcontent-%COMP%]   .sns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:0}footer[_ngcontent-%COMP%]   .sns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{margin:0 .4rem;font-size:1.5rem;line-height:1.5}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.25rem 0;font-size:.85rem}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]::before{padding:0 .8rem;content:'|'}"]
                    ],
                    data: {}
                });

            function Dy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 8, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(2, {
                    active: 0
                }), ki(3, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Lo(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Yi(5, null, ["", ""])), (t()(), Lo(6, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Yi(7, null, ["", ""])), $i(8, 1)], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, t(e, 2, 0, "/categories" === n.currentKey)), t(e, 3, 0, Ro(1, "/categories/", n.config.firstCategory, ""))
                }, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, hi(e, 3).target, hi(e, 3).href), t(e, 5, 0, n.config.count.categories > 1e4 ? "999+" : n.config.count.categories), t(e, 7, 0, oo(e, 7, 0, t(e, 8, 0, hi(e.parent.parent, 0), "menu.categories")))
                })
            }
            function Ry(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 8, "a", [
                    ["routerLink", "/tags"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(2, {
                    active: 0
                }), ki(3, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Lo(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Yi(5, null, ["", ""])), (t()(), Lo(6, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Yi(7, null, ["", ""])), $i(8, 1)], function (t, e) {
                    t(e, 1, 0, t(e, 2, 0, "/tags" === e.component.currentKey)), t(e, 3, 0, "/tags")
                }, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, hi(e, 3).target, hi(e, 3).href), t(e, 5, 0, n.config.count.tags > 1e4 ? "999+" : n.config.count.tags), t(e, 7, 0, oo(e, 7, 0, t(e, 8, 0, hi(e.parent.parent, 0), "menu.tags")))
                })
            }
            function jy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 13, "div", [
                    ["class", "state"]
                ], null, null, null, null, null)), (t()(), Lo(1, 0, null, null, 8, "a", [
                    ["routerLink", "/archives"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 4).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(2, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(3, {
                    active: 0
                }), ki(4, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Lo(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Yi(6, null, ["", ""])), (t()(), Lo(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), Yi(8, null, ["", ""])), $i(9, 1), (t()(), Fo(16777216, null, null, 1, null, Dy)), ki(11, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Ry)), ki(13, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, t(e, 3, 0, "/archives" === n.currentKey)), t(e, 4, 0, "/archives"), t(e, 11, 0, n.config.count.categories), t(e, 13, 0, n.config.count.tags)
                }, function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, hi(e, 4).target, hi(e, 4).href), t(e, 6, 0, n.config.count.posts > 1e4 ? "999+" : n.config.count.posts), t(e, 8, 0, oo(e, 8, 0, t(e, 9, 0, hi(e.parent, 0), "menu.archives")))
                })
            }
            function Fy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== hi(t, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), Gi(2, {
                    active: 0
                }), ki(3, 671744, null, 0, Gh, [Qh, ah, wu], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), Yi(4, null, ["", ""]))], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, t(e, 2, 0, n.config.menu[e.parent.context.$implicit] == n.currentKey)), t(e, 3, 0, Ro(1, "", n.config.menu[e.parent.context.$implicit], ""))
                }, function (t, e) {
                    t(e, 0, 0, hi(e, 3).target, hi(e, 3).href), t(e, 4, 0, e.parent.context.$implicit)
                })
            }
            function Ly(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "a", [
                    ["rel", "external nofollow noopener"],
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), Yi(1, null, ["", ""]))], null, function (t, e) {
                    t(e, 0, 0, Ro(1, "", e.component.config.menu[e.parent.context.$implicit], "")), t(e, 1, 0, e.parent.context.$implicit)
                })
            }
            function Hy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 4, null, null, null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Fy)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Ly)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(0, null, null, 0))], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, !n.isExternal(n.config.menu[e.context.$implicit])), t(e, 4, 0, n.isExternal(n.config.menu[e.context.$implicit]))
                }, null)
            }
            function Vy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "a", [
                    ["rel", "external nofollow noopener"],
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), ki(1, 278528, null, 0, uc, [ur, cr, Nn, An], {
                    ngClass: [0, "ngClass"]
                }, null), (t()(), Yi(2, null, ["", ""]))], function (t, e) {
                    t(e, 1, 0, "icon-" + e.context.$implicit[0])
                }, function (t, e) {
                    t(e, 0, 0, Ro(1, "", e.context.$implicit[1], "")), t(e, 2, 0, e.context.$implicit[0])
                })
            }
            function Uy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 2, "div", [
                    ["class", "sns"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Vy)), ki(2, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function (t, e) {
                    t(e, 2, 0, e.component.config.sns)
                }, null)
            }
            function zy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "p", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), $i(1, 1)], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, oo(e, 0, 0, t(e, 1, 0, hi(e.parent, 1), n.config.footer.copyright)))
                })
            }
            function By(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), $i(1, 1)], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, oo(e, 0, 0, t(e, 1, 0, hi(e.parent.parent, 1), n.config.footer.powered)))
                })
            }
            function qy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "span", [
                    ["class", "sep"]
                ], null, null, null, null, null))], null, null)
            }
            function Ky(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "span", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), $i(1, 1)], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, oo(e, 0, 0, t(e, 1, 0, hi(e.parent.parent, 1), n.config.footer.theme)))
                })
            }
            function Qy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 6, "p", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, By)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, qy)), ki(4, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Ky)), ki(6, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.config.footer.powered), t(e, 4, 0, n.config.footer.powered && n.config.footer.theme), t(e, 6, 0, n.config.footer.theme)
                }, null)
            }
            function Wy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "p", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), $i(1, 1)], null, function (t, e) {
                    var n = e.component;
                    t(e, 0, 0, oo(e, 0, 0, t(e, 1, 0, hi(e.parent, 1), n.config.footer.custom)))
                })
            }
            function $y(t) {
                return ta(0, [Pi(0, yg, [xd]), Pi(0, mg, [Of]), (t()(), Lo(2, 0, null, null, 24, "div", [], null, null, null, null, null)), (t()(), Lo(3, 0, null, null, 14, "section", [], null, null, null, null, null)), (t()(), Lo(4, 0, null, null, 8, "header", [
                    ["class", "author"]
                ], null, null, null, null, null)), (t()(), Lo(5, 0, null, null, 1, "is-avatar", [
                    ["class", "avatar"]
                ], null, null, null, Iy, My)), ki(6, 49152, null, 0, Ty, [], {
                    url: [0, "url"]
                }, null), (t()(), Lo(7, 0, null, null, 2, "div", [
                    ["class", "name"]
                ], null, null, null, null, null)), (t()(), Lo(8, 0, null, null, 1, "a", [
                    ["href", ""]
                ], null, null, null, null, null)), (t()(), Yi(9, null, ["", ""])), (t()(), Lo(10, 0, null, null, 2, "div", [
                    ["class", "bio"]
                ], null, null, null, null, null)), (t()(), Lo(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Yi(12, null, ["", ""])), (t()(), Fo(16777216, null, null, 1, null, jy)), ki(14, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(15, 0, null, null, 2, "nav", [
                    ["class", "routes"]
                ], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Hy)), ki(17, 278528, null, 0, fc, [Un, Vn, ur], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), Lo(18, 0, null, null, 8, "footer", [], null, null, null, null, null)), (t()(), Fo(16777216, null, null, 1, null, Uy)), ki(20, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, zy)), ki(22, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Qy)), ki(24, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Wy)), ki(26, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 6, 0, null == n.config.profile ? null : n.config.profile.avatar), t(e, 14, 0, n.config.count.posts), t(e, 17, 0, n.menuKeys), t(e, 20, 0, n.config.sns), t(e, 22, 0, n.config.footer.copyright), t(e, 24, 0, n.config.footer.powered || n.config.footer.theme), t(e, 26, 0, n.config.footer.custom)
                }, function (t, e) {
                    var n = e.component;
                    t(e, 9, 0, n.config.author), t(e, 12, 0, null == n.config.profile ? null : n.config.profile.bio)
                })
            }
            var Gy = so({
                encapsulation: 0,
                styles: [
                    ["[_nghost-%COMP%]{position:relative;display:block;height:100%}main[_ngcontent-%COMP%]{position:relative;z-index:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:2rem 4rem 2rem 24rem;height:100%}@media (max-width:975px){main[_ngcontent-%COMP%]{padding:2rem 0}}@media (max-width:656px){main[_ngcontent-%COMP%]{padding:0}}.page[_ngcontent-%COMP%]{position:relative;display:block;margin:auto;max-width:660px}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1}"]
                ],
                data: {}
            });

            function Zy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-fab", [], [
                    [40, "@isFab", 0]
                ], [
                    [null, "action"]
                ], function (t, e, n) {
                    var r = !0;
                    return "action" === e && (r = !1 !== t.component.onFabAct(n) && r), r
                }, gy, cy)), ki(1, 114688, null, 0, Ud, [Hd, Ed], {
                    progress: [0, "progress"],
                    toc: [1, "toc"]
                }, {
                    action: "action"
                })], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, n.mainScrollPercent, n.toc)
                }, function (t, e) {
                    t(e, 0, 0, void 0)
                })
            }
            function Yy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 0, "div", [
                    ["class", "overlay"]
                ], null, [
                    [null, "click"]
                ], function (t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onOverlay() && r), r
                }, null, null))], null, null)
            }
            function Jy(t) {
                return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-toc", [], null, [
                    [null, "action"]
                ], function (t, e, n) {
                    var r = !0;
                    return "action" === e && (r = !1 !== t.component.animateTo(n) && r), r
                }, Oy, my)), ki(1, 770048, [
                    [1, 4]
                ], 0, zd, [xd, Hd, Nn], {
                    toc: [0, "toc"],
                    scrollTop: [1, "scrollTop"]
                }, {
                    action: "action"
                })], function (t, e) {
                    var n = e.component;
                    t(e, 1, 0, n.toc, n.mainScrollTop)
                }, null)
            }
            function Xy(t) {
                return ta(0, [zi(671088640, 1, {
                    tocComponent: 0
                }), (t()(), Fo(16777216, null, null, 1, null, Zy)), ki(2, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Lo(3, 0, null, null, 1, "is-sidebar", [
                    ["class", "sidebar"]
                ], null, null, null, $y, Ny)), ki(4, 4243456, null, 0, Ay, [ah, Qh, Nn, Hd, xd], null, null), (t()(), Lo(5, 0, null, null, 5, "main", [], null, null, null, null, null)), (t()(), Lo(6, 0, null, null, 2, "div", [
                    ["class", "page"]
                ], null, null, null, null, null)), (t()(), Lo(7, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(8, 212992, null, 0, td, [Xh, Un, Ye, [8, null], zn], null, null), (t()(), Fo(16777216, null, null, 1, null, Yy)), ki(10, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), Fo(16777216, null, null, 1, null, Jy)), ki(12, 16384, null, 0, hc, [Un, Vn], {
                    ngIf: [0, "ngIf"]
                }, null)], function (t, e) {
                    var n = e.component;
                    t(e, 2, 0, !n.isSidebarOpen), t(e, 8, 0), t(e, 10, 0, n.isSidebarOpen || n.isTocOpen), t(e, 12, 0, n.toc)
                }, null)
            }
            var tv = ni("is-root", Kd, function (t) {
                    return ta(0, [(t()(), Lo(0, 0, null, null, 1, "is-root", [], null, null, null, Xy, Gy)), ki(1, 114688, null, 0, Kd, [xd, ah, Qh, Vf, zf, Nn, Hd], null, null)], function (t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                ev = function () {},
                nv = "*";

            function rv(t, e) {
                return void 0 === e && (e = null), {
                    type: 2,
                    steps: t,
                    options: e
                }
            }
            function ov(t) {
                return {
                    type: 6,
                    styles: t,
                    offset: null
                }
            }
            function iv(t) {
                Promise.resolve(null).then(t)
            }
            var av = function () {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
                    }
                    return t.prototype._onFinish = function () {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.onStart = function (t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function (t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function (t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.hasStarted = function () {
                        return this._started
                    }, t.prototype.init = function () {}, t.prototype.play = function () {
                        this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                    }, t.prototype.triggerMicrotask = function () {
                        var t = this;
                        iv(function () {
                            return t._onFinish()
                        })
                    }, t.prototype._onStart = function () {
                        this._onStartFns.forEach(function (t) {
                            return t()
                        }), this._onStartFns = []
                    }, t.prototype.pause = function () {}, t.prototype.restart = function () {}, t.prototype.finish = function () {
                        this._onFinish()
                    }, t.prototype.destroy = function () {
                        this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function (t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.reset = function () {}, t.prototype.setPosition = function (t) {}, t.prototype.getPosition = function () {
                        return 0
                    }, t.prototype.triggerCallback = function (t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function (t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                sv = function () {
                    function t(t) {
                        var e = this;
                        this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                        var n = 0,
                            r = 0,
                            o = 0,
                            i = this.players.length;
                        0 == i ? iv(function () {
                            return e._onFinish()
                        }) : this.players.forEach(function (t) {
                            t.onDone(function () {
                                ++n == i && e._onFinish()
                            }), t.onDestroy(function () {
                                ++r == i && e._onDestroy()
                            }), t.onStart(function () {
                                ++o == i && e._onStart()
                            })
                        }), this.totalTime = this.players.reduce(function (t, e) {
                            return Math.max(t, e.totalTime)
                        }, 0)
                    }
                    return t.prototype._onFinish = function () {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.init = function () {
                        this.players.forEach(function (t) {
                            return t.init()
                        })
                    }, t.prototype.onStart = function (t) {
                        this._onStartFns.push(t)
                    }, t.prototype._onStart = function () {
                        this.hasStarted() || (this._started = !0, this._onStartFns.forEach(function (t) {
                            return t()
                        }), this._onStartFns = [])
                    }, t.prototype.onDone = function (t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function (t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.hasStarted = function () {
                        return this._started
                    }, t.prototype.play = function () {
                        this.parentPlayer || this.init(), this._onStart(), this.players.forEach(function (t) {
                            return t.play()
                        })
                    }, t.prototype.pause = function () {
                        this.players.forEach(function (t) {
                            return t.pause()
                        })
                    }, t.prototype.restart = function () {
                        this.players.forEach(function (t) {
                            return t.restart()
                        })
                    }, t.prototype.finish = function () {
                        this._onFinish(), this.players.forEach(function (t) {
                            return t.finish()
                        })
                    }, t.prototype.destroy = function () {
                        this._onDestroy()
                    }, t.prototype._onDestroy = function () {
                        this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(function (t) {
                            return t.destroy()
                        }), this._onDestroyFns.forEach(function (t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.reset = function () {
                        this.players.forEach(function (t) {
                            return t.reset()
                        }), this._destroyed = !1, this._finished = !1, this._started = !1
                    }, t.prototype.setPosition = function (t) {
                        var e = t * this.totalTime;
                        this.players.forEach(function (t) {
                            var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                            t.setPosition(n)
                        })
                    }, t.prototype.getPosition = function () {
                        var t = 0;
                        return this.players.forEach(function (e) {
                            var n = e.getPosition();
                            t = Math.min(n, t)
                        }), t
                    }, t.prototype.beforeDestroy = function () {
                        this.players.forEach(function (t) {
                            t.beforeDestroy && t.beforeDestroy()
                        })
                    }, t.prototype.triggerCallback = function (t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function (t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                lv = "!";

            function uv() {
                return "undefined" != typeof process
            }
            function cv(t) {
                switch (t.length) {
                    case 0:
                        return new av;
                    case 1:
                        return t[0];
                    default:
                        return new sv(t)
                }
            }
            function fv(t, e, n, r, o, i) {
                void 0 === o && (o = {}), void 0 === i && (i = {});
                var a = [],
                    s = [],
                    l = -1,
                    u = null;
                if (r.forEach(function (t) {
                    var n = t.offset,
                        r = n == l,
                        c = r && u || {};
                    Object.keys(t).forEach(function (n) {
                        var r = n,
                            s = t[n];
                        if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), s) {
                            case lv:
                                s = o[n];
                                break;
                            case nv:
                                s = i[n];
                                break;
                            default:
                                s = e.normalizeStyleValue(n, r, s, a)
                        }
                        c[r] = s
                    }), r || s.push(c), u = c, l = n
                }), a.length) throw new Error("Unable to animate due to the following errors:\n - " + a.join("\n - "));
                return s
            }
            function pv(t, e, n, r) {
                switch (e) {
                    case "start":
                        t.onStart(function () {
                            return r(n && hv(n, "start", t))
                        });
                        break;
                    case "done":
                        t.onDone(function () {
                            return r(n && hv(n, "done", t))
                        });
                        break;
                    case "destroy":
                        t.onDestroy(function () {
                            return r(n && hv(n, "destroy", t))
                        })
                }
            }
            function hv(t, e, n) {
                var r = n.totalTime,
                    o = dv(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, void 0 == r ? t.totalTime : r, !! n.disabled),
                    i = t._data;
                return null != i && (o._data = i), o
            }
            function dv(t, e, n, r, o, i, a) {
                return void 0 === o && (o = ""), void 0 === i && (i = 0), {
                    element: t,
                    triggerName: e,
                    fromState: n,
                    toState: r,
                    phaseName: o,
                    totalTime: i,
                    disabled: !! a
                }
            }
            function gv(t, e, n) {
                var r;
                return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
            }
            function mv(t) {
                var e = t.indexOf(":");
                return [t.substring(1, e), t.substr(e + 1)]
            }
            var yv = function (t, e) {
                    return !1
                },
                vv = function (t, e) {
                    return !1
                },
                _v = function (t, e, n) {
                    return []
                },
                bv = uv();
            if (bv || "undefined" != typeof Element) {
                if (yv = function (t, e) {
                    return t.contains(e)
                }, bv || Element.prototype.matches) vv = function (t, e) {
                    return t.matches(e)
                };
                else {
                    var wv = Element.prototype,
                        Cv = wv.matchesSelector || wv.mozMatchesSelector || wv.msMatchesSelector || wv.oMatchesSelector || wv.webkitMatchesSelector;
                    Cv && (vv = function (t, e) {
                        return Cv.apply(t, [e])
                    })
                }
                _v = function (t, e, n) {
                    var r = [];
                    if (n) r.push.apply(r, f(t.querySelectorAll(e)));
                    else {
                        var o = t.querySelector(e);
                        o && r.push(o)
                    }
                    return r
                }
            }
            var Sv = null,
                xv = !1;

            function Ev(t) {
                Sv || (Sv = ("undefined" != typeof document ? document.body : null) || {}, xv = !! Sv.style && "WebkitAppearance" in Sv.style);
                var e = !0;
                return Sv.style && !
                    function (t) {
                        return "ebkit" == t.substring(1, 6)
                    }(t) && !(e = t in Sv.style) && xv && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Sv.style), e
            }
            var kv = vv,
                Pv = yv,
                Ov = _v;

            function Tv(t) {
                var e = {};
                return Object.keys(t).forEach(function (n) {
                    var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                    e[r] = t[n]
                }), e
            }
            var Mv = function () {
                    function t() {}
                    return t.prototype.validateStyleProperty = function (t) {
                        return Ev(t)
                    }, t.prototype.matchesElement = function (t, e) {
                        return kv(t, e)
                    }, t.prototype.containsElement = function (t, e) {
                        return Pv(t, e)
                    }, t.prototype.query = function (t, e, n) {
                        return Ov(t, e, n)
                    }, t.prototype.computeStyle = function (t, e, n) {
                        return n || ""
                    }, t.prototype.animate = function (t, e, n, r, o, i, a) {
                        return void 0 === i && (i = []), new av(n, r)
                    }, t
                }(),
                Iv = function () {
                    function t() {}
                    return t.NOOP = new Mv, t
                }(),
                Av = 1e3;

            function Nv(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/^(-?[\.\d]+)(m?s)/);
                return !e || e.length < 2 ? 0 : Dv(parseFloat(e[1]), e[2])
            }
            function Dv(t, e) {
                switch (e) {
                    case "s":
                        return t * Av;
                    default:
                        return t
                }
            }
            function Rv(t, e, n) {
                return t.hasOwnProperty("duration") ? t : function (t, e, n) {
                    var r, o = 0,
                        i = "";
                    if ("string" == typeof t) {
                        var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                        if (null === a) return e.push('The provided timing value "' + t + '" is invalid.'), {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                        r = Dv(parseFloat(a[1]), a[2]);
                        var s = a[3];
                        null != s && (o = Dv(Math.floor(parseFloat(s)), a[4]));
                        var l = a[5];
                        l && (i = l)
                    } else r = t;
                    if (!n) {
                        var u = !1,
                            c = e.length;
                        r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), o < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.')
                    }
                    return {
                        duration: r,
                        delay: o,
                        easing: i
                    }
                }(t, e, n)
            }
            function jv(t, e) {
                return void 0 === e && (e = {}), Object.keys(t).forEach(function (n) {
                    e[n] = t[n]
                }), e
            }
            function Fv(t, e, n) {
                if (void 0 === n && (n = {}), e) for (var r in t) n[r] = t[r];
                else jv(t, n);
                return n
            }
            function Lv(t, e, n) {
                return n ? e + ":" + n + ";" : ""
            }
            function Hv(t) {
                for (var e = "", n = 0; n < t.style.length; n++) e += Lv(0, r = t.style.item(n), t.style.getPropertyValue(r));
                for (var r in t.style) t.style.hasOwnProperty(r) && !r.startsWith("_") && (e += Lv(0, r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[r]));
                t.setAttribute("style", e)
            }
            function Vv(t, e) {
                t.style && (Object.keys(e).forEach(function (n) {
                    var r = $v(n);
                    t.style[r] = e[n]
                }), uv() && Hv(t))
            }
            function Uv(t, e) {
                t.style && (Object.keys(e).forEach(function (e) {
                    var n = $v(e);
                    t.style[n] = ""
                }), uv() && Hv(t))
            }
            function zv(t) {
                return Array.isArray(t) ? 1 == t.length ? t[0] : rv(t) : t
            }
            var Bv = new RegExp("{{\\s*(.+?)\\s*}}", "g");

            function qv(t) {
                var e = [];
                if ("string" == typeof t) {
                    for (var n = t.toString(), r = void 0; r = Bv.exec(n);) e.push(r[1]);
                    Bv.lastIndex = 0
                }
                return e
            }
            function Kv(t, e, n) {
                var r = t.toString(),
                    o = r.replace(Bv, function (t, r) {
                        var o = e[r];
                        return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), o = ""), o.toString()
                    });
                return o == r ? t : o
            }
            function Qv(t) {
                for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
                return e
            }
            var Wv = /-+([a-z0-9])/g;

            function $v(t) {
                return t.replace(Wv, function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return t[1].toUpperCase()
                })
            }
            function Gv(t, e) {
                return 0 === t || 0 === e
            }
            function Zv(t, e, n) {
                var r = Object.keys(n);
                if (r.length && e.length) {
                    var o = e[0],
                        i = [];
                    if (r.forEach(function (t) {
                        o.hasOwnProperty(t) || i.push(t), o[t] = n[t]
                    }), i.length) for (var a = function () {
                        var n = e[s];
                        i.forEach(function (e) {
                            n[e] = Jv(t, e)
                        })
                    }, s = 1; s < e.length; s++) a()
                }
                return e
            }
            function Yv(t, e, n) {
                switch (e.type) {
                    case 7:
                        return t.visitTrigger(e, n);
                    case 0:
                        return t.visitState(e, n);
                    case 1:
                        return t.visitTransition(e, n);
                    case 2:
                        return t.visitSequence(e, n);
                    case 3:
                        return t.visitGroup(e, n);
                    case 4:
                        return t.visitAnimate(e, n);
                    case 5:
                        return t.visitKeyframes(e, n);
                    case 6:
                        return t.visitStyle(e, n);
                    case 8:
                        return t.visitReference(e, n);
                    case 9:
                        return t.visitAnimateChild(e, n);
                    case 10:
                        return t.visitAnimateRef(e, n);
                    case 11:
                        return t.visitQuery(e, n);
                    case 12:
                        return t.visitStagger(e, n);
                    default:
                        throw new Error("Unable to resolve animation metadata node #" + e.type)
                }
            }
            function Jv(t, e) {
                return window.getComputedStyle(t)[e]
            }
            var Xv = "*",
                t_ = new Set(["true", "1"]),
                e_ = new Set(["false", "0"]);

            function n_(t, e) {
                var n = t_.has(t) || e_.has(t),
                    r = t_.has(e) || e_.has(e);
                return function (o, i) {
                    var a = t == Xv || t == o,
                        s = e == Xv || e == i;
                    return !a && n && "boolean" == typeof o && (a = o ? t_.has(t) : e_.has(t)), !s && r && "boolean" == typeof i && (s = i ? t_.has(e) : e_.has(e)), a && s
                }
            }
            var r_ = new RegExp("s*:selfs*,?", "g");

            function o_(t, e, n) {
                return new i_(t).build(e, n)
            }
            var i_ = function () {
                    function t(t) {
                        this._driver = t
                    }
                    return t.prototype.build = function (t, e) {
                        var n = new a_(e);
                        return this._resetContextStyleTimingState(n), Yv(this, zv(t), n)
                    }, t.prototype._resetContextStyleTimingState = function (t) {
                        t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
                    }, t.prototype.visitTrigger = function (t, e) {
                        var n = this,
                            r = e.queryCount = 0,
                            o = e.depCount = 0,
                            i = [],
                            a = [];
                        return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(function (t) {
                            if (n._resetContextStyleTimingState(e), 0 == t.type) {
                                var s = t,
                                    l = s.name;
                                l.toString().split(/\s*,\s*/).forEach(function (t) {
                                    s.name = t, i.push(n.visitState(s, e))
                                }), s.name = l
                            } else if (1 == t.type) {
                                var u = n.visitTransition(t, e);
                                r += u.queryCount, o += u.depCount, a.push(u)
                            } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                        }), {
                            type: 7,
                            name: t.name,
                            states: i,
                            transitions: a,
                            queryCount: r,
                            depCount: o,
                            options: null
                        }
                    }, t.prototype.visitState = function (t, e) {
                        var n = this.visitStyle(t.styles, e),
                            r = t.options && t.options.params || null;
                        if (n.containsDynamicStyles) {
                            var o = new Set,
                                i = r || {};
                            if (n.styles.forEach(function (t) {
                                if (s_(t)) {
                                    var e = t;
                                    Object.keys(e).forEach(function (t) {
                                        qv(e[t]).forEach(function (t) {
                                            i.hasOwnProperty(t) || o.add(t)
                                        })
                                    })
                                }
                            }), o.size) {
                                var a = Qv(o.values());
                                e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + a.join(", "))
                            }
                        }
                        return {
                            type: 0,
                            name: t.name,
                            style: n,
                            options: r ? {
                                params: r
                            } : null
                        }
                    }, t.prototype.visitTransition = function (t, e) {
                        e.queryCount = 0, e.depCount = 0;
                        var n, r, o, i = Yv(this, zv(t.animation), e);
                        return {
                            type: 1,
                            matchers: (n = t.expr, r = e.errors, o = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach(function (t) {
                                return function (t, e, n) {
                                    if (":" == t[0]) {
                                        var r = function (t, e) {
                                            switch (t) {
                                                case ":enter":
                                                    return "void => *";
                                                case ":leave":
                                                    return "* => void";
                                                case ":increment":
                                                    return function (t, e) {
                                                        return parseFloat(e) > parseFloat(t)
                                                    };
                                                case ":decrement":
                                                    return function (t, e) {
                                                        return parseFloat(e) < parseFloat(t)
                                                    };
                                                default:
                                                    return e.push('The transition alias value "' + t + '" is not supported'), "* => *"
                                            }
                                        }(t, n);
                                        if ("function" == typeof r) return void e.push(r);
                                        t = r
                                    }
                                    var o = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                                    if (null == o || o.length < 4) return n.push('The provided transition expression "' + t + '" is not supported'), e;
                                    var i = o[1],
                                        a = o[2],
                                        s = o[3];
                                    e.push(n_(i, s)), "<" != a[0] || i == Xv && s == Xv || e.push(n_(s, i))
                                }(t, o, r)
                            }) : o.push(n), o),
                            animation: i,
                            queryCount: e.queryCount,
                            depCount: e.depCount,
                            options: l_(t.options)
                        }
                    }, t.prototype.visitSequence = function (t, e) {
                        var n = this;
                        return {
                            type: 2,
                            steps: t.steps.map(function (t) {
                                return Yv(n, t, e)
                            }),
                            options: l_(t.options)
                        }
                    }, t.prototype.visitGroup = function (t, e) {
                        var n = this,
                            r = e.currentTime,
                            o = 0,
                            i = t.steps.map(function (t) {
                                e.currentTime = r;
                                var i = Yv(n, t, e);
                                return o = Math.max(o, e.currentTime), i
                            });
                        return e.currentTime = o, {
                            type: 3,
                            steps: i,
                            options: l_(t.options)
                        }
                    }, t.prototype.visitAnimate = function (t, e) {
                        var n, r = function (t, e) {
                            var n = null;
                            if (t.hasOwnProperty("duration")) n = t;
                            else if ("number" == typeof t) return u_(Rv(t, e).duration, 0, "");
                            var r = t;
                            if (r.split(/\s+/).some(function (t) {
                                return "{" == t.charAt(0) && "{" == t.charAt(1)
                            })) {
                                var o = u_(0, 0, "");
                                return o.dynamic = !0, o.strValue = r, o
                            }
                            return u_((n = n || Rv(r, e)).duration, n.delay, n.easing)
                        }(t.timings, e.errors);
                        e.currentAnimateTimings = r;
                        var o = t.styles ? t.styles : ov({});
                        if (5 == o.type) n = this.visitKeyframes(o, e);
                        else {
                            var i = t.styles,
                                a = !1;
                            if (!i) {
                                a = !0;
                                var s = {};
                                r.easing && (s.easing = r.easing), i = ov(s)
                            }
                            e.currentTime += r.duration + r.delay;
                            var l = this.visitStyle(i, e);
                            l.isEmptyStep = a, n = l
                        }
                        return e.currentAnimateTimings = null, {
                            type: 4,
                            timings: r,
                            style: n,
                            options: null
                        }
                    }, t.prototype.visitStyle = function (t, e) {
                        var n = this._makeStyleAst(t, e);
                        return this._validateStyleAst(n, e), n
                    }, t.prototype._makeStyleAst = function (t, e) {
                        var n = [];
                        Array.isArray(t.styles) ? t.styles.forEach(function (t) {
                            "string" == typeof t ? t == nv ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t)
                        }) : n.push(t.styles);
                        var r = !1,
                            o = null;
                        return n.forEach(function (t) {
                            if (s_(t)) {
                                var e = t,
                                    n = e.easing;
                                if (n && (o = n, delete e.easing), !r) for (var i in e) if (e[i].toString().indexOf("{{") >= 0) {
                                    r = !0;
                                    break
                                }
                            }
                        }), {
                            type: 6,
                            styles: n,
                            easing: o,
                            offset: t.offset,
                            containsDynamicStyles: r,
                            options: null
                        }
                    }, t.prototype._validateStyleAst = function (t, e) {
                        var n = this,
                            r = e.currentAnimateTimings,
                            o = e.currentTime,
                            i = e.currentTime;
                        r && i > 0 && (i -= r.duration + r.delay), t.styles.forEach(function (t) {
                            "string" != typeof t && Object.keys(t).forEach(function (r) {
                                if (n._driver.validateStyleProperty(r)) {
                                    var a, s, l, u = e.collectedStyles[e.currentQuerySelector],
                                        c = u[r],
                                        f = !0;
                                    c && (i != o && i >= c.startTime && o <= c.endTime && (e.errors.push('The CSS property "' + r + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + i + 'ms" and "' + o + 'ms"'), f = !1), i = c.startTime), f && (u[r] = {
                                        startTime: i,
                                        endTime: o
                                    }), e.options && (a = e.errors, s = e.options.params || {}, (l = qv(t[r])).length && l.forEach(function (t) {
                                        s.hasOwnProperty(t) || a.push("Unable to resolve the local animation param " + t + " in the given list of values")
                                    }))
                                } else e.errors.push('The provided animation property "' + r + '" is not a supported CSS property for animations')
                            })
                        })
                    }, t.prototype.visitKeyframes = function (t, e) {
                        var n = this,
                            r = {
                                type: 5,
                                styles: [],
                                options: null
                            };
                        if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
                        var o = 0,
                            i = [],
                            a = !1,
                            s = !1,
                            l = 0,
                            u = t.steps.map(function (t) {
                                var r = n._makeStyleAst(t, e),
                                    u = null != r.offset ? r.offset : function (t) {
                                        if ("string" == typeof t) return null;
                                        var e = null;
                                        if (Array.isArray(t)) t.forEach(function (t) {
                                            if (s_(t) && t.hasOwnProperty("offset")) {
                                                var n = t;
                                                e = parseFloat(n.offset), delete n.offset
                                            }
                                        });
                                        else if (s_(t) && t.hasOwnProperty("offset")) {
                                            var n = t;
                                            e = parseFloat(n.offset), delete n.offset
                                        }
                                        return e
                                    }(r.styles),
                                    c = 0;
                                return null != u && (o++, c = r.offset = u), s = s || c < 0 || c > 1, a = a || c < l, l = c, i.push(c), r
                            });
                        s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order");
                        var c = t.steps.length,
                            f = 0;
                        o > 0 && o < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == o && (f = 1 / (c - 1));
                        var p = c - 1,
                            h = e.currentTime,
                            d = e.currentAnimateTimings,
                            g = d.duration;
                        return u.forEach(function (t, o) {
                            var a = f > 0 ? o == p ? 1 : f * o : i[o],
                                s = a * g;
                            e.currentTime = h + d.delay + s, d.duration = s, n._validateStyleAst(t, e), t.offset = a, r.styles.push(t)
                        }), r
                    }, t.prototype.visitReference = function (t, e) {
                        return {
                            type: 8,
                            animation: Yv(this, zv(t.animation), e),
                            options: l_(t.options)
                        }
                    }, t.prototype.visitAnimateChild = function (t, e) {
                        return e.depCount++, {
                            type: 9,
                            options: l_(t.options)
                        }
                    }, t.prototype.visitAnimateRef = function (t, e) {
                        return {
                            type: 10,
                            animation: this.visitReference(t.animation, e),
                            options: l_(t.options)
                        }
                    }, t.prototype.visitQuery = function (t, e) {
                        var n = e.currentQuerySelector,
                            r = t.options || {};
                        e.queryCount++, e.currentQuery = t;
                        var o = c(function (t) {
                                var e = !! t.split(/\s*,\s*/).find(function (t) {
                                    return ":self" == t
                                });
                                return e && (t = t.replace(r_, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, function (t) {
                                    return ".ng-trigger-" + t.substr(1)
                                }).replace(/:animating/g, ".ng-animating"), e]
                            }(t.selector), 2),
                            i = o[0],
                            a = o[1];
                        e.currentQuerySelector = n.length ? n + " " + i : i, gv(e.collectedStyles, e.currentQuerySelector, {});
                        var s = Yv(this, zv(t.animation), e);
                        return e.currentQuery = null, e.currentQuerySelector = n, {
                            type: 11,
                            selector: i,
                            limit: r.limit || 0,
                            optional: !! r.optional,
                            includeSelf: a,
                            animation: s,
                            originalSelector: t.selector,
                            options: l_(t.options)
                        }
                    }, t.prototype.visitStagger = function (t, e) {
                        e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                        var n = "full" === t.timings ? {
                            duration: 0,
                            delay: 0,
                            easing: "full"
                        } : Rv(t.timings, e.errors, !0);
                        return {
                            type: 12,
                            animation: Yv(this, zv(t.animation), e),
                            timings: n,
                            options: null
                        }
                    }, t
                }(),
                a_ = function (t) {
                    this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
                };

            function s_(t) {
                return !Array.isArray(t) && "object" == typeof t
            }
            function l_(t) {
                var e;
                return t ? (t = jv(t)).params && (t.params = (e = t.params) ? jv(e) : null) : t = {}, t
            }
            function u_(t, e, n) {
                return {
                    duration: t,
                    delay: e,
                    easing: n
                }
            }
            function c_(t, e, n, r, o, i, a, s) {
                return void 0 === a && (a = null), void 0 === s && (s = !1), {
                    type: 1,
                    element: t,
                    keyframes: e,
                    preStyleProps: n,
                    postStyleProps: r,
                    duration: o,
                    delay: i,
                    totalTime: o + i,
                    easing: a,
                    subTimeline: s
                }
            }
            var f_ = function () {
                    function t() {
                        this._map = new Map
                    }
                    return t.prototype.consume = function (t) {
                        var e = this._map.get(t);
                        return e ? this._map.delete(t) : e = [], e
                    }, t.prototype.append = function (t, e) {
                        var n = this._map.get(t);
                        n || this._map.set(t, n = []), n.push.apply(n, f(e))
                    }, t.prototype.has = function (t) {
                        return this._map.has(t)
                    }, t.prototype.clear = function () {
                        this._map.clear()
                    }, t
                }(),
                p_ = new RegExp(":enter", "g"),
                h_ = new RegExp(":leave", "g");

            function d_(t, e, n, r, o, i, a, s, l, u) {
                return void 0 === i && (i = {}), void 0 === a && (a = {}), void 0 === u && (u = []), (new g_).buildKeyframes(t, e, n, r, o, i, a, s, l, u)
            }
            var g_ = function () {
                    function t() {}
                    return t.prototype.buildKeyframes = function (t, e, n, r, o, i, a, s, l, u) {
                        void 0 === u && (u = []), l = l || new f_;
                        var c = new y_(t, e, l, r, o, u, []);
                        c.options = s, c.currentTimeline.setStyles([i], null, c.errors, s), Yv(this, n, c);
                        var f = c.timelines.filter(function (t) {
                            return t.containsAnimation()
                        });
                        if (f.length && Object.keys(a).length) {
                            var p = f[f.length - 1];
                            p.allowOnlyTimelineStyles() || p.setStyles([a], null, c.errors, s)
                        }
                        return f.length ? f.map(function (t) {
                            return t.buildKeyframes()
                        }) : [c_(e, [], [], [], 0, 0, "", !1)]
                    }, t.prototype.visitTrigger = function (t, e) {}, t.prototype.visitState = function (t, e) {}, t.prototype.visitTransition = function (t, e) {}, t.prototype.visitAnimateChild = function (t, e) {
                        var n = e.subInstructions.consume(e.element);
                        if (n) {
                            var r = e.createSubContext(t.options),
                                o = e.currentTimeline.currentTime,
                                i = this._visitSubInstructions(n, r, r.options);
                            o != i && e.transformIntoNewTimeline(i)
                        }
                        e.previousNode = t
                    }, t.prototype.visitAnimateRef = function (t, e) {
                        var n = e.createSubContext(t.options);
                        n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
                    }, t.prototype._visitSubInstructions = function (t, e, n) {
                        var r = e.currentTimeline.currentTime,
                            o = null != n.duration ? Nv(n.duration) : null,
                            i = null != n.delay ? Nv(n.delay) : null;
                        return 0 !== o && t.forEach(function (t) {
                            var n = e.appendInstructionToTimeline(t, o, i);
                            r = Math.max(r, n.duration + n.delay)
                        }), r
                    }, t.prototype.visitReference = function (t, e) {
                        e.updateOptions(t.options, !0), Yv(this, t.animation, e), e.previousNode = t
                    }, t.prototype.visitSequence = function (t, e) {
                        var n = this,
                            r = e.subContextCount,
                            o = e,
                            i = t.options;
                        if (i && (i.params || i.delay) && ((o = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)) {
                            6 == o.previousNode.type && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = m_);
                            var a = Nv(i.delay);
                            o.delayNextStep(a)
                        }
                        t.steps.length && (t.steps.forEach(function (t) {
                            return Yv(n, t, o)
                        }), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), e.previousNode = t
                    }, t.prototype.visitGroup = function (t, e) {
                        var n = this,
                            r = [],
                            o = e.currentTimeline.currentTime,
                            i = t.options && t.options.delay ? Nv(t.options.delay) : 0;
                        t.steps.forEach(function (a) {
                            var s = e.createSubContext(t.options);
                            i && s.delayNextStep(i), Yv(n, a, s), o = Math.max(o, s.currentTimeline.currentTime), r.push(s.currentTimeline)
                        }), r.forEach(function (t) {
                            return e.currentTimeline.mergeTimelineCollectedStyles(t)
                        }), e.transformIntoNewTimeline(o), e.previousNode = t
                    }, t.prototype._visitTiming = function (t, e) {
                        if (t.dynamic) {
                            var n = t.strValue;
                            return Rv(e.params ? Kv(n, e.params, e.errors) : n, e.errors)
                        }
                        return {
                            duration: t.duration,
                            delay: t.delay,
                            easing: t.easing
                        }
                    }, t.prototype.visitAnimate = function (t, e) {
                        var n = e.currentAnimateTimings = this._visitTiming(t.timings, e),
                            r = e.currentTimeline;
                        n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
                        var o = t.style;
                        5 == o.type ? this.visitKeyframes(o, e) : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
                    }, t.prototype.visitStyle = function (t, e) {
                        var n = e.currentTimeline,
                            r = e.currentAnimateTimings;
                        !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                        var o = r && r.easing || t.easing;
                        t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options), e.previousNode = t
                    }, t.prototype.visitKeyframes = function (t, e) {
                        var n = e.currentAnimateTimings,
                            r = e.currentTimeline.duration,
                            o = n.duration,
                            i = e.createSubContext().currentTimeline;
                        i.easing = n.easing, t.styles.forEach(function (t) {
                            i.forwardTime((t.offset || 0) * o), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe()
                        }), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(r + o), e.previousNode = t
                    }, t.prototype.visitQuery = function (t, e) {
                        var n = this,
                            r = e.currentTimeline.currentTime,
                            o = t.options || {},
                            i = o.delay ? Nv(o.delay) : 0;
                        i && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = m_);
                        var a = r,
                            s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !! o.optional, e.errors);
                        e.currentQueryTotal = s.length;
                        var l = null;
                        s.forEach(function (r, o) {
                            e.currentQueryIndex = o;
                            var s = e.createSubContext(t.options, r);
                            i && s.delayNextStep(i), r === e.element && (l = s.currentTimeline), Yv(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime)
                        }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
                    }, t.prototype.visitStagger = function (t, e) {
                        var n = e.parentContext,
                            r = e.currentTimeline,
                            o = t.timings,
                            i = Math.abs(o.duration),
                            a = i * (e.currentQueryTotal - 1),
                            s = i * e.currentQueryIndex;
                        switch (o.duration < 0 ? "reverse" : o.easing) {
                            case "reverse":
                                s = a - s;
                                break;
                            case "full":
                                s = n.currentStaggerTime
                        }
                        var l = e.currentTimeline;
                        s && l.delayNextStep(s);
                        var u = l.currentTime;
                        Yv(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - u + (r.startTime - n.currentTimeline.startTime)
                    }, t
                }(),
                m_ = {},
                y_ = function () {
                    function t(t, e, n, r, o, i, a, s) {
                        this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = o, this.errors = i, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = m_, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = s || new v_(this._driver, e, 0), a.push(this.currentTimeline)
                    }
                    return Object.defineProperty(t.prototype, "params", {
                        get: function () {
                            return this.options.params
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.updateOptions = function (t, e) {
                        var n = this;
                        if (t) {
                            var r = t,
                                o = this.options;
                            null != r.duration && (o.duration = Nv(r.duration)), null != r.delay && (o.delay = Nv(r.delay));
                            var i = r.params;
                            if (i) {
                                var a = o.params;
                                a || (a = this.options.params = {}), Object.keys(i).forEach(function (t) {
                                    e && a.hasOwnProperty(t) || (a[t] = Kv(i[t], a, n.errors))
                                })
                            }
                        }
                    }, t.prototype._copyOptions = function () {
                        var t = {};
                        if (this.options) {
                            var e = this.options.params;
                            if (e) {
                                var n = t.params = {};
                                Object.keys(e).forEach(function (t) {
                                    n[t] = e[t]
                                })
                            }
                        }
                        return t
                    }, t.prototype.createSubContext = function (e, n, r) {
                        void 0 === e && (e = null);
                        var o = n || this.element,
                            i = new t(this._driver, o, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0));
                        return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i
                    }, t.prototype.transformIntoNewTimeline = function (t) {
                        return this.previousNode = m_, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
                    }, t.prototype.appendInstructionToTimeline = function (t, e, n) {
                        var r = {
                                duration: null != e ? e : t.duration,
                                delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                                easing: ""
                            },
                            o = new __(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
                        return this.timelines.push(o), r
                    }, t.prototype.incrementTime = function (t) {
                        this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
                    }, t.prototype.delayNextStep = function (t) {
                        t > 0 && this.currentTimeline.delayNextStep(t)
                    }, t.prototype.invokeQuery = function (t, e, n, r, o, i) {
                        var a = [];
                        if (r && a.push(this.element), t.length > 0) {
                            t = (t = t.replace(p_, "." + this._enterClassName)).replace(h_, "." + this._leaveClassName);
                            var s = this._driver.query(this.element, t, 1 != n);
                            0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), a.push.apply(a, f(s))
                        }
                        return o || 0 != a.length || i.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), a
                    }, t
                }(),
                v_ = function () {
                    function t(t, e, n, r) {
                        this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
                    }
                    return t.prototype.containsAnimation = function () {
                        switch (this._keyframes.size) {
                            case 0:
                                return !1;
                            case 1:
                                return this.getCurrentStyleProperties().length > 0;
                            default:
                                return !0
                        }
                    }, t.prototype.getCurrentStyleProperties = function () {
                        return Object.keys(this._currentKeyframe)
                    }, Object.defineProperty(t.prototype, "currentTime", {
                        get: function () {
                            return this.startTime + this.duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.delayNextStep = function (t) {
                        var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                        this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
                    }, t.prototype.fork = function (e, n) {
                        return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
                    }, t.prototype._loadKeyframe = function () {
                        this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
                    }, t.prototype.forwardFrame = function () {
                        this.duration += 1, this._loadKeyframe()
                    }, t.prototype.forwardTime = function (t) {
                        this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
                    }, t.prototype._updateStyle = function (t, e) {
                        this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
                            time: this.currentTime,
                            value: e
                        }
                    }, t.prototype.allowOnlyTimelineStyles = function () {
                        return this._currentEmptyStepKeyframe !== this._currentKeyframe
                    }, t.prototype.applyEmptyStep = function (t) {
                        var e = this;
                        t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function (t) {
                            e._backFill[t] = e._globalTimelineStyles[t] || nv, e._currentKeyframe[t] = nv
                        }), this._currentEmptyStepKeyframe = this._currentKeyframe
                    }, t.prototype.setStyles = function (t, e, n, r) {
                        var o = this;
                        e && (this._previousKeyframe.easing = e);
                        var i = r && r.params || {},
                            a = function (t, e) {
                                var n, r = {};
                                return t.forEach(function (t) {
                                    "*" === t ? (n = n || Object.keys(e)).forEach(function (t) {
                                        r[t] = nv
                                    }) : Fv(t, !1, r)
                                }), r
                            }(t, this._globalTimelineStyles);
                        Object.keys(a).forEach(function (t) {
                            var e = Kv(a[t], i, n);
                            o._pendingStyles[t] = e, o._localTimelineStyles.hasOwnProperty(t) || (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t) ? o._globalTimelineStyles[t] : nv), o._updateStyle(t, e)
                        })
                    }, t.prototype.applyStylesToKeyframe = function () {
                        var t = this,
                            e = this._pendingStyles,
                            n = Object.keys(e);
                        0 != n.length && (this._pendingStyles = {}, n.forEach(function (n) {
                            t._currentKeyframe[n] = e[n]
                        }), Object.keys(this._localTimelineStyles).forEach(function (e) {
                            t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
                        }))
                    }, t.prototype.snapshotCurrentStyles = function () {
                        var t = this;
                        Object.keys(this._localTimelineStyles).forEach(function (e) {
                            var n = t._localTimelineStyles[e];
                            t._pendingStyles[e] = n, t._updateStyle(e, n)
                        })
                    }, t.prototype.getFinalKeyframe = function () {
                        return this._keyframes.get(this.duration)
                    }, Object.defineProperty(t.prototype, "properties", {
                        get: function () {
                            var t = [];
                            for (var e in this._currentKeyframe) t.push(e);
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.mergeTimelineCollectedStyles = function (t) {
                        var e = this;
                        Object.keys(t._styleSummary).forEach(function (n) {
                            var r = e._styleSummary[n],
                                o = t._styleSummary[n];
                            (!r || o.time > r.time) && e._updateStyle(n, o.value)
                        })
                    }, t.prototype.buildKeyframes = function () {
                        var t = this;
                        this.applyStylesToKeyframe();
                        var e = new Set,
                            n = new Set,
                            r = 1 === this._keyframes.size && 0 === this.duration,
                            o = [];
                        this._keyframes.forEach(function (i, a) {
                            var s = Fv(i, !0);
                            Object.keys(s).forEach(function (t) {
                                var r = s[t];
                                r == lv ? e.add(t) : r == nv && n.add(t)
                            }), r || (s.offset = a / t.duration), o.push(s)
                        });
                        var i = e.size ? Qv(e.values()) : [],
                            a = n.size ? Qv(n.values()) : [];
                        if (r) {
                            var s = o[0],
                                l = jv(s);
                            s.offset = 0, l.offset = 1, o = [s, l]
                        }
                        return c_(this.element, o, i, a, this.duration, this.startTime, this.easing, !1)
                    }, t
                }(),
                __ = function (t) {
                    function e(e, n, r, o, i, a, s) {
                        void 0 === s && (s = !1);
                        var l = t.call(this, e, n, a.delay) || this;
                        return l.element = n, l.keyframes = r, l.preStyleProps = o, l.postStyleProps = i, l._stretchStartingKeyframe = s, l.timings = {
                            duration: a.duration,
                            delay: a.delay,
                            easing: a.easing
                        }, l
                    }
                    return o(e, t), e.prototype.containsAnimation = function () {
                        return this.keyframes.length > 1
                    }, e.prototype.buildKeyframes = function () {
                        var t = this.keyframes,
                            e = this.timings,
                            n = e.delay,
                            r = e.duration,
                            o = e.easing;
                        if (this._stretchStartingKeyframe && n) {
                            var i = [],
                                a = r + n,
                                s = n / a,
                                l = Fv(t[0], !1);
                            l.offset = 0, i.push(l);
                            var u = Fv(t[0], !1);
                            u.offset = b_(s), i.push(u);
                            for (var c = t.length - 1, f = 1; f <= c; f++) {
                                var p = Fv(t[f], !1);
                                p.offset = b_((n + p.offset * r) / a), i.push(p)
                            }
                            r = a, n = 0, o = "", t = i
                        }
                        return c_(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0)
                    }, e
                }(v_);

            function b_(t, e) {
                void 0 === e && (e = 3);
                var n = Math.pow(10, e - 1);
                return Math.round(t * n) / n
            }
            var w_ = function () {},
                C_ = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.normalizePropertyName = function (t, e) {
                        return $v(t)
                    }, e.prototype.normalizeStyleValue = function (t, e, n, r) {
                        var o = "",
                            i = n.toString().trim();
                        if (S_[e] && 0 !== n && "0" !== n) if ("number" == typeof n) o = "px";
                        else {
                            var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                            a && 0 == a[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n)
                        }
                        return i + o
                    }, e
                }(w_),
                S_ = function (t) {
                    var e = {};
                    return "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",").forEach(function (t) {
                        return e[t] = !0
                    }), e
                }();

            function x_(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                return {
                    type: 0,
                    element: t,
                    triggerName: e,
                    isRemovalTransition: o,
                    fromState: n,
                    fromStyles: i,
                    toState: r,
                    toStyles: a,
                    timelines: s,
                    queriedElements: l,
                    preStyleProps: u,
                    postStyleProps: c,
                    totalTime: f,
                    errors: p
                }
            }
            var E_ = {},
                k_ = function () {
                    function t(t, e, n) {
                        this._triggerName = t, this.ast = e, this._stateStyles = n
                    }
                    return t.prototype.match = function (t, e, n, r) {
                        return function (t, e, n, r, o) {
                            return t.some(function (t) {
                                return t(e, n, r, o)
                            })
                        }(this.ast.matchers, t, e, n, r)
                    }, t.prototype.buildStyles = function (t, e, n) {
                        var r = this._stateStyles["*"],
                            o = this._stateStyles[t],
                            i = r ? r.buildStyles(e, n) : {};
                        return o ? o.buildStyles(e, n) : i
                    }, t.prototype.build = function (t, e, n, r, o, a, s, l, u, c) {
                        var f = [],
                            p = this.ast.options && this.ast.options.params || E_,
                            h = this.buildStyles(n, s && s.params || E_, f),
                            d = l && l.params || E_,
                            g = this.buildStyles(r, d, f),
                            m = new Set,
                            y = new Map,
                            v = new Map,
                            _ = "void" === r,
                            b = {
                                params: i({}, p, d)
                            },
                            w = c ? [] : d_(t, e, this.ast.animation, o, a, h, g, b, u, f),
                            C = 0;
                        if (w.forEach(function (t) {
                            C = Math.max(t.duration + t.delay, C)
                        }), f.length) return x_(e, this._triggerName, n, r, _, h, g, [], [], y, v, C, f);
                        w.forEach(function (t) {
                            var n = t.element,
                                r = gv(y, n, {});
                            t.preStyleProps.forEach(function (t) {
                                return r[t] = !0
                            });
                            var o = gv(v, n, {});
                            t.postStyleProps.forEach(function (t) {
                                return o[t] = !0
                            }), n !== e && m.add(n)
                        });
                        var S = Qv(m.values());
                        return x_(e, this._triggerName, n, r, _, h, g, w, S, y, v, C)
                    }, t
                }(),
                P_ = function () {
                    function t(t, e) {
                        this.styles = t, this.defaultParams = e
                    }
                    return t.prototype.buildStyles = function (t, e) {
                        var n = {},
                            r = jv(this.defaultParams);
                        return Object.keys(t).forEach(function (e) {
                            var n = t[e];
                            null != n && (r[e] = n)
                        }), this.styles.styles.forEach(function (t) {
                            if ("string" != typeof t) {
                                var o = t;
                                Object.keys(o).forEach(function (t) {
                                    var i = o[t];
                                    i.length > 1 && (i = Kv(i, r, e)), n[t] = i
                                })
                            }
                        }), n
                    }, t
                }(),
                O_ = function () {
                    function t(t, e) {
                        var n = this;
                        this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function (t) {
                            n.states[t.name] = new P_(t.style, t.options && t.options.params || {})
                        }), T_(this.states, "true", "1"), T_(this.states, "false", "0"), e.transitions.forEach(function (e) {
                            n.transitionFactories.push(new k_(t, e, n.states))
                        }), this.fallbackTransition = new k_(t, {
                            type: 1,
                            animation: {
                                type: 2,
                                steps: [],
                                options: null
                            },
                            matchers: [function (t, e) {
                                return !0
                            }],
                            options: null,
                            queryCount: 0,
                            depCount: 0
                        }, this.states)
                    }
                    return Object.defineProperty(t.prototype, "containsQueries", {
                        get: function () {
                            return this.ast.queryCount > 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.matchTransition = function (t, e, n, r) {
                        return this.transitionFactories.find(function (o) {
                            return o.match(t, e, n, r)
                        }) || null
                    }, t.prototype.matchStyles = function (t, e, n) {
                        return this.fallbackTransition.buildStyles(t, e, n)
                    }, t
                }();

            function T_(t, e, n) {
                t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
            }
            var M_ = new f_,
                I_ = function () {
                    function t(t, e, n) {
                        this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
                    }
                    return t.prototype.register = function (t, e) {
                        var n = [],
                            r = o_(this._driver, e, n);
                        if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
                        this._animations[t] = r
                    }, t.prototype._buildPlayer = function (t, e, n) {
                        var r = t.element,
                            o = fv(0, this._normalizer, 0, t.keyframes, e, n);
                        return this._driver.animate(r, o, t.duration, t.delay, t.easing, [], !0)
                    }, t.prototype.create = function (t, e, n) {
                        var r = this;
                        void 0 === n && (n = {});
                        var o, i = [],
                            a = this._animations[t],
                            s = new Map;
                        if (a ? (o = d_(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, n, M_, i)).forEach(function (t) {
                            var e = gv(s, t.element, {});
                            t.postStyleProps.forEach(function (t) {
                                return e[t] = null
                            })
                        }) : (i.push("The requested animation doesn't exist or has already been destroyed"), o = []), i.length) throw new Error("Unable to create the animation due to the following errors: " + i.join("\n"));
                        s.forEach(function (t, e) {
                            Object.keys(t).forEach(function (n) {
                                t[n] = r._driver.computeStyle(e, n, nv)
                            })
                        });
                        var l = cv(o.map(function (t) {
                            var e = s.get(t.element);
                            return r._buildPlayer(t, {}, e)
                        }));
                        return this._playersById[t] = l, l.onDestroy(function () {
                            return r.destroy(t)
                        }), this.players.push(l), l
                    }, t.prototype.destroy = function (t) {
                        var e = this._getPlayer(t);
                        e.destroy(), delete this._playersById[t];
                        var n = this.players.indexOf(e);
                        n >= 0 && this.players.splice(n, 1)
                    }, t.prototype._getPlayer = function (t) {
                        var e = this._playersById[t];
                        if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
                        return e
                    }, t.prototype.listen = function (t, e, n, r) {
                        var o = dv(e, "", "", "");
                        return pv(this._getPlayer(t), n, o, r), function () {}
                    }, t.prototype.command = function (t, e, n, r) {
                        if ("register" != n) if ("create" != n) {
                            var o = this._getPlayer(t);
                            switch (n) {
                                case "play":
                                    o.play();
                                    break;
                                case "pause":
                                    o.pause();
                                    break;
                                case "reset":
                                    o.reset();
                                    break;
                                case "restart":
                                    o.restart();
                                    break;
                                case "finish":
                                    o.finish();
                                    break;
                                case "init":
                                    o.init();
                                    break;
                                case "setPosition":
                                    o.setPosition(parseFloat(r[0]));
                                    break;
                                case "destroy":
                                    this.destroy(t)
                            }
                        } else this.create(t, e, r[0] || {});
                        else this.register(t, r[0])
                    }, t
                }(),
                A_ = [],
                N_ = {
                    namespaceId: "",
                    setForRemoval: !1,
                    setForMove: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !1
                },
                D_ = {
                    namespaceId: "",
                    setForMove: !1,
                    setForRemoval: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !0
                },
                R_ = "__ng_removed",
                j_ = function () {
                    function t(t, e) {
                        void 0 === e && (e = ""), this.namespaceId = e;
                        var n = t && t.hasOwnProperty("value");
                        if (this.value = function (t) {
                            return null != t ? t : null
                        }(n ? t.value : t), n) {
                            var r = jv(t);
                            delete r.value, this.options = r
                        } else this.options = {};
                        this.options.params || (this.options.params = {})
                    }
                    return Object.defineProperty(t.prototype, "params", {
                        get: function () {
                            return this.options.params
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.absorbOptions = function (t) {
                        var e = t.params;
                        if (e) {
                            var n = this.options.params;
                            Object.keys(e).forEach(function (t) {
                                null == n[t] && (n[t] = e[t])
                            })
                        }
                    }, t
                }(),
                F_ = new j_("void"),
                L_ = function () {
                    function t(t, e, n) {
                        this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, Q_(e, this._hostClassName)
                    }
                    return t.prototype.listen = function (t, e, n, r) {
                        var o, i = this;
                        if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!");
                        if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!');
                        if ("start" != (o = n) && "done" != o) throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!');
                        var a = gv(this._elementListeners, t, []),
                            s = {
                                name: e,
                                phase: n,
                                callback: r
                            };
                        a.push(s);
                        var l = gv(this._engine.statesByElement, t, {});
                        return l.hasOwnProperty(e) || (Q_(t, "ng-trigger"), Q_(t, "ng-trigger-" + e), l[e] = F_), function () {
                            i._engine.afterFlush(function () {
                                var t = a.indexOf(s);
                                t >= 0 && a.splice(t, 1), i._triggers[e] || delete l[e]
                            })
                        }
                    }, t.prototype.register = function (t, e) {
                        return !this._triggers[t] && (this._triggers[t] = e, !0)
                    }, t.prototype._getTrigger = function (t) {
                        var e = this._triggers[t];
                        if (!e) throw new Error('The provided animation trigger "' + t + '" has not been registered!');
                        return e
                    }, t.prototype.trigger = function (t, e, n, r) {
                        var o = this;
                        void 0 === r && (r = !0);
                        var i = this._getTrigger(e),
                            a = new V_(this.id, e, t),
                            s = this._engine.statesByElement.get(t);
                        s || (Q_(t, "ng-trigger"), Q_(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {}));
                        var l = s[e],
                            u = new j_(n, this.id);
                        if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l || (l = F_), "void" === u.value || l.value !== u.value) {
                            var c = gv(this._engine.playersByElement, t, []);
                            c.forEach(function (t) {
                                t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy()
                            });
                            var f = i.matchTransition(l.value, u.value, t, u.params),
                                p = !1;
                            if (!f) {
                                if (!r) return;
                                f = i.fallbackTransition, p = !0
                            }
                            return this._engine.totalQueuedPlayers++, this._queue.push({
                                element: t,
                                triggerName: e,
                                transition: f,
                                fromState: l,
                                toState: u,
                                player: a,
                                isFallbackTransition: p
                            }), p || (Q_(t, "ng-animate-queued"), a.onStart(function () {
                                W_(t, "ng-animate-queued")
                            })), a.onDone(function () {
                                var e = o.players.indexOf(a);
                                e >= 0 && o.players.splice(e, 1);
                                var n = o._engine.playersByElement.get(t);
                                if (n) {
                                    var r = n.indexOf(a);
                                    r >= 0 && n.splice(r, 1)
                                }
                            }), this.players.push(a), c.push(a), a
                        }
                        if (!
                            function (t, e) {
                                var n = Object.keys(t),
                                    r = Object.keys(e);
                                if (n.length != r.length) return !1;
                                for (var o = 0; o < n.length; o++) {
                                    var i = n[o];
                                    if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
                                }
                                return !0
                            }(l.params, u.params)) {
                            var h = [],
                                d = i.matchStyles(l.value, l.params, h),
                                g = i.matchStyles(u.value, u.params, h);
                            h.length ? this._engine.reportError(h) : this._engine.afterFlush(function () {
                                Uv(t, d), Vv(t, g)
                            })
                        }
                    }, t.prototype.deregister = function (t) {
                        var e = this;
                        delete this._triggers[t], this._engine.statesByElement.forEach(function (e, n) {
                            delete e[t]
                        }), this._elementListeners.forEach(function (n, r) {
                            e._elementListeners.set(r, n.filter(function (e) {
                                return e.name != t
                            }))
                        })
                    }, t.prototype.clearElementCache = function (t) {
                        this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
                        var e = this._engine.playersByElement.get(t);
                        e && (e.forEach(function (t) {
                            return t.destroy()
                        }), this._engine.playersByElement.delete(t))
                    }, t.prototype._signalRemovalForInnerTriggers = function (t, e, n) {
                        var r = this;
                        void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach(function (t) {
                            if (!t[R_]) {
                                var n = r._engine.fetchNamespacesByElement(t);
                                n.size ? n.forEach(function (n) {
                                    return n.triggerLeaveAnimation(t, e, !1, !0)
                                }) : r.clearElementCache(t)
                            }
                        })
                    }, t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
                        var o = this,
                            i = this._engine.statesByElement.get(t);
                        if (i) {
                            var a = [];
                            if (Object.keys(i).forEach(function (e) {
                                if (o._triggers[e]) {
                                    var n = o.trigger(t, e, "void", r);
                                    n && a.push(n)
                                }
                            }), a.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && cv(a).onDone(function () {
                                return o._engine.processLeaveNode(t)
                            }), !0
                        }
                        return !1
                    }, t.prototype.prepareLeaveAnimationListeners = function (t) {
                        var e = this,
                            n = this._elementListeners.get(t);
                        if (n) {
                            var r = new Set;
                            n.forEach(function (n) {
                                var o = n.name;
                                if (!r.has(o)) {
                                    r.add(o);
                                    var i = e._triggers[o].fallbackTransition,
                                        a = e._engine.statesByElement.get(t)[o] || F_,
                                        s = new j_("void"),
                                        l = new V_(e.id, o, t);
                                    e._engine.totalQueuedPlayers++, e._queue.push({
                                        element: t,
                                        triggerName: o,
                                        transition: i,
                                        fromState: a,
                                        toState: s,
                                        player: l,
                                        isFallbackTransition: !0
                                    })
                                }
                            })
                        }
                    }, t.prototype.removeNode = function (t, e) {
                        var n = this,
                            r = this._engine;
                        if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
                            var o = !1;
                            if (r.totalAnimations) {
                                var i = r.players.length ? r.playersByQueriedElement.get(t) : [];
                                if (i && i.length) o = !0;
                                else for (var a = t; a = a.parentNode;) if (r.statesByElement.get(a)) {
                                    o = !0;
                                    break
                                }
                            }
                            this.prepareLeaveAnimationListeners(t), o ? r.markElementAsRemoved(this.id, t, !1, e) : (r.afterFlush(function () {
                                return n.clearElementCache(t)
                            }), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
                        }
                    }, t.prototype.insertNode = function (t, e) {
                        Q_(t, this._hostClassName)
                    }, t.prototype.drainQueuedTransitions = function (t) {
                        var e = this,
                            n = [];
                        return this._queue.forEach(function (r) {
                            var o = r.player;
                            if (!o.destroyed) {
                                var i = r.element,
                                    a = e._elementListeners.get(i);
                                a && a.forEach(function (e) {
                                    if (e.name == r.triggerName) {
                                        var n = dv(i, r.triggerName, r.fromState.value, r.toState.value);
                                        n._data = t, pv(r.player, e.phase, n, e.callback)
                                    }
                                }), o.markedForDestroy ? e._engine.afterFlush(function () {
                                    o.destroy()
                                }) : n.push(r)
                            }
                        }), this._queue = [], n.sort(function (t, n) {
                            var r = t.transition.ast.depCount,
                                o = n.transition.ast.depCount;
                            return 0 == r || 0 == o ? r - o : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
                        })
                    }, t.prototype.destroy = function (t) {
                        this.players.forEach(function (t) {
                            return t.destroy()
                        }), this._signalRemovalForInnerTriggers(this.hostElement, t)
                    }, t.prototype.elementContainsData = function (t) {
                        var e = !1;
                        return this._elementListeners.has(t) && (e = !0), !! this._queue.find(function (e) {
                            return e.element === t
                        }) || e
                    }, t
                }(),
                H_ = function () {
                    function t(t, e, n) {
                        this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) {}
                    }
                    return t.prototype._onRemovalComplete = function (t, e) {
                        this.onRemovalComplete(t, e)
                    }, Object.defineProperty(t.prototype, "queuedPlayers", {
                        get: function () {
                            var t = [];
                            return this._namespaceList.forEach(function (e) {
                                e.players.forEach(function (e) {
                                    e.queued && t.push(e)
                                })
                            }), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.createNamespace = function (t, e) {
                        var n = new L_(t, e, this);
                        return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
                    }, t.prototype._balanceNamespaceList = function (t, e) {
                        var n = this._namespaceList.length - 1;
                        if (n >= 0) {
                            for (var r = !1, o = n; o >= 0; o--) if (this.driver.containsElement(this._namespaceList[o].hostElement, e)) {
                                this._namespaceList.splice(o + 1, 0, t), r = !0;
                                break
                            }
                            r || this._namespaceList.splice(0, 0, t)
                        } else this._namespaceList.push(t);
                        return this.namespacesByHostElement.set(e, t), t
                    }, t.prototype.register = function (t, e) {
                        var n = this._namespaceLookup[t];
                        return n || (n = this.createNamespace(t, e)), n
                    }, t.prototype.registerTrigger = function (t, e, n) {
                        var r = this._namespaceLookup[t];
                        r && r.register(e, n) && this.totalAnimations++
                    }, t.prototype.destroy = function (t, e) {
                        var n = this;
                        if (t) {
                            var r = this._fetchNamespace(t);
                            this.afterFlush(function () {
                                n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                                var e = n._namespaceList.indexOf(r);
                                e >= 0 && n._namespaceList.splice(e, 1)
                            }), this.afterFlushAnimationsDone(function () {
                                return r.destroy(e)
                            })
                        }
                    }, t.prototype._fetchNamespace = function (t) {
                        return this._namespaceLookup[t]
                    }, t.prototype.fetchNamespacesByElement = function (t) {
                        var e = new Set,
                            n = this.statesByElement.get(t);
                        if (n) for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                            var i = n[r[o]].namespaceId;
                            if (i) {
                                var a = this._fetchNamespace(i);
                                a && e.add(a)
                            }
                        }
                        return e
                    }, t.prototype.trigger = function (t, e, n, r) {
                        if (U_(e)) {
                            var o = this._fetchNamespace(t);
                            if (o) return o.trigger(e, n, r), !0
                        }
                        return !1
                    }, t.prototype.insertNode = function (t, e, n, r) {
                        if (U_(e)) {
                            var o = e[R_];
                            if (o && o.setForRemoval) {
                                o.setForRemoval = !1, o.setForMove = !0;
                                var i = this.collectedLeaveElements.indexOf(e);
                                i >= 0 && this.collectedLeaveElements.splice(i, 1)
                            }
                            if (t) {
                                var a = this._fetchNamespace(t);
                                a && a.insertNode(e, n)
                            }
                            r && this.collectEnterElement(e)
                        }
                    }, t.prototype.collectEnterElement = function (t) {
                        this.collectedEnterElements.push(t)
                    }, t.prototype.markElementAsDisabled = function (t, e) {
                        e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Q_(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), W_(t, "ng-animate-disabled"))
                    }, t.prototype.removeNode = function (t, e, n) {
                        if (U_(e)) {
                            var r = t ? this._fetchNamespace(t) : null;
                            r ? r.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n)
                        } else this._onRemovalComplete(e, n)
                    }, t.prototype.markElementAsRemoved = function (t, e, n, r) {
                        this.collectedLeaveElements.push(e), e[R_] = {
                            namespaceId: t,
                            setForRemoval: r,
                            hasAnimation: n,
                            removedBeforeQueried: !1
                        }
                    }, t.prototype.listen = function (t, e, n, r, o) {
                        return U_(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function () {}
                    }, t.prototype._buildInstruction = function (t, e, n, r, o) {
                        return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, o)
                    }, t.prototype.destroyInnerAnimations = function (t) {
                        var e = this,
                            n = this.driver.query(t, ".ng-trigger", !0);
                        n.forEach(function (t) {
                            return e.destroyActiveAnimationsForElement(t)
                        }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach(function (t) {
                            return e.finishActiveQueriedAnimationOnElement(t)
                        })
                    }, t.prototype.destroyActiveAnimationsForElement = function (t) {
                        var e = this.playersByElement.get(t);
                        e && e.forEach(function (t) {
                            t.queued ? t.markedForDestroy = !0 : t.destroy()
                        })
                    }, t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
                        var e = this.playersByQueriedElement.get(t);
                        e && e.forEach(function (t) {
                            return t.finish()
                        })
                    }, t.prototype.whenRenderingDone = function () {
                        var t = this;
                        return new Promise(function (e) {
                            if (t.players.length) return cv(t.players).onDone(function () {
                                return e()
                            });
                            e()
                        })
                    }, t.prototype.processLeaveNode = function (t) {
                        var e = this,
                            n = t[R_];
                        if (n && n.setForRemoval) {
                            if (t[R_] = N_, n.namespaceId) {
                                this.destroyInnerAnimations(t);
                                var r = this._fetchNamespace(n.namespaceId);
                                r && r.clearElementCache(t)
                            }
                            this._onRemovalComplete(t, n.setForRemoval)
                        }
                        this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function (n) {
                            e.markElementAsDisabled(t, !1)
                        })
                    }, t.prototype.flush = function (t) {
                        var e = this;
                        void 0 === t && (t = -1);
                        var n = [];
                        if (this.newHostElements.size && (this.newHostElements.forEach(function (t, n) {
                            return e._balanceNamespaceList(t, n)
                        }), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (var r = 0; r < this.collectedEnterElements.length; r++) Q_(this.collectedEnterElements[r], "ng-star-inserted");
                        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                            var o = [];
                            try {
                                n = this._flushAnimations(o, t)
                            } finally {
                                for (r = 0; r < o.length; r++) o[r]()
                            }
                        } else for (r = 0; r < this.collectedLeaveElements.length; r++) this.processLeaveNode(this.collectedLeaveElements[r]);
                        if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function (t) {
                            return t()
                        }), this._flushFns = [], this._whenQuietFns.length) {
                            var i = this._whenQuietFns;
                            this._whenQuietFns = [], n.length ? cv(n).onDone(function () {
                                i.forEach(function (t) {
                                    return t()
                                })
                            }) : i.forEach(function (t) {
                                return t()
                            })
                        }
                    }, t.prototype.reportError = function (t) {
                        throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
                    }, t.prototype._flushAnimations = function (t, e) {
                        var n = this,
                            r = new f_,
                            o = [],
                            a = new Map,
                            s = [],
                            l = new Map,
                            u = new Map,
                            c = new Map,
                            p = new Set;
                        this.disabledNodes.forEach(function (t) {
                            p.add(t);
                            for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) p.add(e[r])
                        });
                        var h = this.bodyNode,
                            d = Array.from(this.statesByElement.keys()),
                            g = q_(d, this.collectedEnterElements),
                            m = new Map,
                            y = 0;
                        g.forEach(function (t, e) {
                            var n = "ng-enter" + y++;
                            m.set(e, n), t.forEach(function (t) {
                                return Q_(t, n)
                            })
                        });
                        for (var v = [], _ = new Set, b = new Set, w = 0; w < this.collectedLeaveElements.length; w++)(L = (F = this.collectedLeaveElements[w])[R_]) && L.setForRemoval && (v.push(F), _.add(F), L.hasAnimation ? this.driver.query(F, ".ng-star-inserted", !0).forEach(function (t) {
                            return _.add(t)
                        }) : b.add(F));
                        var C = new Map,
                            S = q_(d, Array.from(_));
                        S.forEach(function (t, e) {
                            var n = "ng-leave" + y++;
                            C.set(e, n), t.forEach(function (t) {
                                return Q_(t, n)
                            })
                        }), t.push(function () {
                            g.forEach(function (t, e) {
                                var n = m.get(e);
                                t.forEach(function (t) {
                                    return W_(t, n)
                                })
                            }), S.forEach(function (t, e) {
                                var n = C.get(e);
                                t.forEach(function (t) {
                                    return W_(t, n)
                                })
                            }), v.forEach(function (t) {
                                n.processLeaveNode(t)
                            })
                        });
                        for (var x = [], E = [], k = this._namespaceList.length - 1; k >= 0; k--) this._namespaceList[k].drainQueuedTransitions(e).forEach(function (t) {
                            var e = t.player,
                                i = t.element;
                            if (x.push(e), n.collectedEnterElements.length) {
                                var a = i[R_];
                                if (a && a.setForMove) return void e.destroy()
                            }
                            var f = !h || !n.driver.containsElement(h, i),
                                p = C.get(i),
                                d = m.get(i),
                                g = n._buildInstruction(t, r, d, p, f);
                            if (g.errors && g.errors.length) E.push(g);
                            else {
                                if (f) return e.onStart(function () {
                                    return Uv(i, g.fromStyles)
                                }), e.onDestroy(function () {
                                    return Vv(i, g.toStyles)
                                }), void o.push(e);
                                if (t.isFallbackTransition) return e.onStart(function () {
                                    return Uv(i, g.fromStyles)
                                }), e.onDestroy(function () {
                                    return Vv(i, g.toStyles)
                                }), void o.push(e);
                                g.timelines.forEach(function (t) {
                                    return t.stretchStartingKeyframe = !0
                                }), r.append(i, g.timelines), s.push({
                                    instruction: g,
                                    player: e,
                                    element: i
                                }), g.queriedElements.forEach(function (t) {
                                    return gv(l, t, []).push(e)
                                }), g.preStyleProps.forEach(function (t, e) {
                                    var n = Object.keys(t);
                                    if (n.length) {
                                        var r = u.get(e);
                                        r || u.set(e, r = new Set), n.forEach(function (t) {
                                            return r.add(t)
                                        })
                                    }
                                }), g.postStyleProps.forEach(function (t, e) {
                                    var n = Object.keys(t),
                                        r = c.get(e);
                                    r || c.set(e, r = new Set), n.forEach(function (t) {
                                        return r.add(t)
                                    })
                                })
                            }
                        });
                        if (E.length) {
                            var P = [];
                            E.forEach(function (t) {
                                P.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function (t) {
                                    return P.push("- " + t + "\n")
                                })
                            }), x.forEach(function (t) {
                                return t.destroy()
                            }), this.reportError(P)
                        }
                        var O = new Map,
                            T = new Map;
                        s.forEach(function (t) {
                            var e = t.element;
                            r.has(e) && (T.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, O))
                        }), o.forEach(function (t) {
                            var e = t.element;
                            n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function (t) {
                                gv(O, e, []).push(t), t.destroy()
                            })
                        });
                        var M = v.filter(function (t) {
                                return G_(t, u, c)
                            }),
                            I = new Map;
                        B_(I, this.driver, b, c, nv).forEach(function (t) {
                            G_(t, u, c) && M.push(t)
                        });
                        var A = new Map;
                        g.forEach(function (t, e) {
                            B_(A, n.driver, new Set(t), u, lv)
                        }), M.forEach(function (t) {
                            var e = I.get(t),
                                n = A.get(t);
                            I.set(t, i({}, e, n))
                        });
                        var N = [],
                            D = [],
                            R = {};
                        s.forEach(function (t) {
                            var e = t.element,
                                i = t.player,
                                s = t.instruction;
                            if (r.has(e)) {
                                if (p.has(e)) return i.onDestroy(function () {
                                    return Vv(e, s.toStyles)
                                }), i.disabled = !0, i.overrideTotalTime(s.totalTime), void o.push(i);
                                var l = R;
                                if (T.size > 1) {
                                    for (var u = e, c = []; u = u.parentNode;) {
                                        var f = T.get(u);
                                        if (f) {
                                            l = f;
                                            break
                                        }
                                        c.push(u)
                                    }
                                    c.forEach(function (t) {
                                        return T.set(t, l)
                                    })
                                }
                                var h = n._buildAnimation(i.namespaceId, s, O, a, A, I);
                                if (i.setRealPlayer(h), l === R) N.push(i);
                                else {
                                    var d = n.playersByElement.get(l);
                                    d && d.length && (i.parentPlayer = cv(d)), o.push(i)
                                }
                            } else Uv(e, s.fromStyles), i.onDestroy(function () {
                                return Vv(e, s.toStyles)
                            }), D.push(i), p.has(e) && o.push(i)
                        }), D.forEach(function (t) {
                            var e = a.get(t.element);
                            if (e && e.length) {
                                var n = cv(e);
                                t.setRealPlayer(n)
                            }
                        }), o.forEach(function (t) {
                            t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                        });
                        for (var j = 0; j < v.length; j++) {
                            var F, L = (F = v[j])[R_];
                            if (W_(F, "ng-leave"), !L || !L.hasAnimation) {
                                var H = [];
                                if (l.size) {
                                    var V = l.get(F);
                                    V && V.length && H.push.apply(H, f(V));
                                    for (var U = this.driver.query(F, ".ng-animating", !0), z = 0; z < U.length; z++) {
                                        var B = l.get(U[z]);
                                        B && B.length && H.push.apply(H, f(B))
                                    }
                                }
                                var q = H.filter(function (t) {
                                    return !t.destroyed
                                });
                                q.length ? $_(this, F, q) : this.processLeaveNode(F)
                            }
                        }
                        return v.length = 0, N.forEach(function (t) {
                            n.players.push(t), t.onDone(function () {
                                t.destroy();
                                var e = n.players.indexOf(t);
                                n.players.splice(e, 1)
                            }), t.play()
                        }), N
                    }, t.prototype.elementContainsData = function (t, e) {
                        var n = !1,
                            r = e[R_];
                        return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
                    }, t.prototype.afterFlush = function (t) {
                        this._flushFns.push(t)
                    }, t.prototype.afterFlushAnimationsDone = function (t) {
                        this._whenQuietFns.push(t)
                    }, t.prototype._getPreviousPlayers = function (t, e, n, r, o) {
                        var i = [];
                        if (e) {
                            var a = this.playersByQueriedElement.get(t);
                            a && (i = a)
                        } else {
                            var s = this.playersByElement.get(t);
                            if (s) {
                                var l = !o || "void" == o;
                                s.forEach(function (t) {
                                    t.queued || (l || t.triggerName == r) && i.push(t)
                                })
                            }
                        }
                        return (n || r) && (i = i.filter(function (t) {
                            return !(n && n != t.namespaceId || r && r != t.triggerName)
                        })), i
                    }, t.prototype._beforeAnimationBuild = function (t, e, n) {
                        var r, o, i = e.element,
                            a = e.isRemovalTransition ? void 0 : t,
                            s = e.isRemovalTransition ? void 0 : e.triggerName,
                            l = function (t) {
                                var r = t.element,
                                    o = r !== i,
                                    l = gv(n, r, []);
                                c._getPreviousPlayers(r, o, a, s, e.toState).forEach(function (t) {
                                    var e = t.getRealPlayer();
                                    e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
                                })
                            },
                            c = this;
                        try {
                            for (var f = u(e.timelines), p = f.next(); !p.done; p = f.next()) l(p.value)
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                p && !p.done && (o = f.
                                    return) && o.call(f)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        Uv(i, e.fromStyles)
                    }, t.prototype._buildAnimation = function (t, e, n, r, o, i) {
                        var a = this,
                            s = e.triggerName,
                            l = e.element,
                            u = [],
                            c = new Set,
                            f = new Set,
                            p = e.timelines.map(function (e) {
                                var p = e.element;
                                c.add(p);
                                var h = p[R_];
                                if (h && h.removedBeforeQueried) return new av(e.duration, e.delay);
                                var d, g, m = p !== l,
                                    y = (d = (n.get(p) || A_).map(function (t) {
                                        return t.getRealPlayer()
                                    }), g = [], function t(e, n) {
                                        for (var r = 0; r < e.length; r++) {
                                            var o = e[r];
                                            o instanceof sv ? t(o.players, n) : n.push(o)
                                        }
                                    }(d, g), g).filter(function (t) {
                                        return !!t.element && t.element === p
                                    }),
                                    v = o.get(p),
                                    _ = i.get(p),
                                    b = fv(0, a._normalizer, 0, e.keyframes, v, _),
                                    w = a._buildPlayer(e, b, y);
                                if (e.subTimeline && r && f.add(p), m) {
                                    var C = new V_(t, s, p);
                                    C.setRealPlayer(w), u.push(C)
                                }
                                return w
                            });
                        u.forEach(function (t) {
                            gv(a.playersByQueriedElement, t.element, []).push(t), t.onDone(function () {
                                return function (t, e, n) {
                                    var r;
                                    if (t instanceof Map) {
                                        if (r = t.get(e)) {
                                            if (r.length) {
                                                var o = r.indexOf(n);
                                                r.splice(o, 1)
                                            }
                                            0 == r.length && t.delete(e)
                                        }
                                    } else(r = t[e]) && (r.length && (o = r.indexOf(n), r.splice(o, 1)), 0 == r.length && delete t[e]);
                                    return r
                                }(a.playersByQueriedElement, t.element, t)
                            })
                        }), c.forEach(function (t) {
                            return Q_(t, "ng-animating")
                        });
                        var h = cv(p);
                        return h.onDestroy(function () {
                            c.forEach(function (t) {
                                return W_(t, "ng-animating")
                            }), Vv(l, e.toStyles)
                        }), f.forEach(function (t) {
                            gv(r, t, []).push(h)
                        }), h
                    }, t.prototype._buildPlayer = function (t, e, n) {
                        return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new av(t.duration, t.delay)
                    }, t
                }(),
                V_ = function () {
                    function t(t, e, n) {
                        this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new av, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                    }
                    return t.prototype.setRealPlayer = function (t) {
                        var e = this;
                        this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function (n) {
                            e._queuedCallbacks[n].forEach(function (e) {
                                return pv(t, n, void 0, e)
                            })
                        }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
                    }, t.prototype.getRealPlayer = function () {
                        return this._player
                    }, t.prototype.overrideTotalTime = function (t) {
                        this.totalTime = t
                    }, t.prototype.syncPlayerEvents = function (t) {
                        var e = this,
                            n = this._player;
                        n.triggerCallback && t.onStart(function () {
                            return n.triggerCallback("start")
                        }), t.onDone(function () {
                            return e.finish()
                        }), t.onDestroy(function () {
                            return e.destroy()
                        })
                    }, t.prototype._queueEvent = function (t, e) {
                        gv(this._queuedCallbacks, t, []).push(e)
                    }, t.prototype.onDone = function (t) {
                        this.queued && this._queueEvent("done", t), this._player.onDone(t)
                    }, t.prototype.onStart = function (t) {
                        this.queued && this._queueEvent("start", t), this._player.onStart(t)
                    }, t.prototype.onDestroy = function (t) {
                        this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
                    }, t.prototype.init = function () {
                        this._player.init()
                    }, t.prototype.hasStarted = function () {
                        return !this.queued && this._player.hasStarted()
                    }, t.prototype.play = function () {
                        !this.queued && this._player.play()
                    }, t.prototype.pause = function () {
                        !this.queued && this._player.pause()
                    }, t.prototype.restart = function () {
                        !this.queued && this._player.restart()
                    }, t.prototype.finish = function () {
                        this._player.finish()
                    }, t.prototype.destroy = function () {
                        this.destroyed = !0, this._player.destroy()
                    }, t.prototype.reset = function () {
                        !this.queued && this._player.reset()
                    }, t.prototype.setPosition = function (t) {
                        this.queued || this._player.setPosition(t)
                    }, t.prototype.getPosition = function () {
                        return this.queued ? 0 : this._player.getPosition()
                    }, t.prototype.triggerCallback = function (t) {
                        var e = this._player;
                        e.triggerCallback && e.triggerCallback(t)
                    }, t
                }();

            function U_(t) {
                return t && 1 === t.nodeType
            }
            function z_(t, e) {
                var n = t.style.display;
                return t.style.display = null != e ? e : "none", n
            }
            function B_(t, e, n, r, o) {
                var i = [];
                n.forEach(function (t) {
                    return i.push(z_(t))
                });
                var a = [];
                r.forEach(function (n, r) {
                    var i = {};
                    n.forEach(function (t) {
                        var n = i[t] = e.computeStyle(r, t, o);
                        n && 0 != n.length || (r[R_] = D_, a.push(r))
                    }), t.set(r, i)
                });
                var s = 0;
                return n.forEach(function (t) {
                    return z_(t, i[s++])
                }), a
            }
            function q_(t, e) {
                var n = new Map;
                if (t.forEach(function (t) {
                    return n.set(t, [])
                }), 0 == e.length) return n;
                var r = new Set(e),
                    o = new Map;
                return e.forEach(function (t) {
                    var e = function t(e) {
                        if (!e) return 1;
                        var i = o.get(e);
                        if (i) return i;
                        var a = e.parentNode;
                        return i = n.has(a) ? a : r.has(a) ? 1 : t(a), o.set(e, i), i
                    }(t);
                    1 !== e && n.get(e).push(t)
                }), n
            }
            var K_ = "$$classes";

            function Q_(t, e) {
                if (t.classList) t.classList.add(e);
                else {
                    var n = t[K_];
                    n || (n = t[K_] = {}), n[e] = !0
                }
            }
            function W_(t, e) {
                if (t.classList) t.classList.remove(e);
                else {
                    var n = t[K_];
                    n && delete n[e]
                }
            }
            function $_(t, e, n) {
                cv(n).onDone(function () {
                    return t.processLeaveNode(e)
                })
            }
            function G_(t, e, n) {
                var r = n.get(t);
                if (!r) return !1;
                var o = e.get(t);
                return o ? r.forEach(function (t) {
                    return o.add(t)
                }) : e.set(t, r), n.delete(t), !0
            }
            var Z_ = function () {
                    function t(t, e, n) {
                        var r = this;
                        this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = function (t, e) {}, this._transitionEngine = new H_(t, e, n), this._timelineEngine = new I_(t, e, n), this._transitionEngine.onRemovalComplete = function (t, e) {
                            return r.onRemovalComplete(t, e)
                        }
                    }
                    return t.prototype.registerTrigger = function (t, e, n, r, o) {
                        var i = t + "-" + r,
                            a = this._triggerCache[i];
                        if (!a) {
                            var s = [],
                                l = o_(this._driver, o, s);
                            if (s.length) throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + s.join("\n - "));
                            a = function (t, e) {
                                return new O_(t, e)
                            }(r, l), this._triggerCache[i] = a
                        }
                        this._transitionEngine.registerTrigger(e, r, a)
                    }, t.prototype.register = function (t, e) {
                        this._transitionEngine.register(t, e)
                    }, t.prototype.destroy = function (t, e) {
                        this._transitionEngine.destroy(t, e)
                    }, t.prototype.onInsert = function (t, e, n, r) {
                        this._transitionEngine.insertNode(t, e, n, r)
                    }, t.prototype.onRemove = function (t, e, n) {
                        this._transitionEngine.removeNode(t, e, n)
                    }, t.prototype.disableAnimations = function (t, e) {
                        this._transitionEngine.markElementAsDisabled(t, e)
                    }, t.prototype.process = function (t, e, n, r) {
                        if ("@" == n.charAt(0)) {
                            var o = c(mv(n), 2);
                            this._timelineEngine.command(o[0], e, o[1], r)
                        } else this._transitionEngine.trigger(t, e, n, r)
                    }, t.prototype.listen = function (t, e, n, r, o) {
                        if ("@" == n.charAt(0)) {
                            var i = c(mv(n), 2);
                            return this._timelineEngine.listen(i[0], e, i[1], o)
                        }
                        return this._transitionEngine.listen(t, e, n, r, o)
                    }, t.prototype.flush = function (t) {
                        void 0 === t && (t = -1), this._transitionEngine.flush(t)
                    }, Object.defineProperty(t.prototype, "players", {
                        get: function () {
                            return this._transitionEngine.players.concat(this._timelineEngine.players)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.whenRenderingDone = function () {
                        return this._transitionEngine.whenRenderingDone()
                    }, t
                }(),
                Y_ = "animation",
                J_ = "animationend",
                X_ = function () {
                    function t(t, e, n, r, o, i, a) {
                        var s = this;
                        this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = o, this._fillMode = i, this._onDoneFn = a, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) {
                            return s._handleCallback(t)
                        }
                    }
                    return t.prototype.apply = function () {
                        var t, e, n;
                        e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = ib(t = this._element, "").trim()).length && (function (t, e) {
                            for (var n = 0; n < t.length; n++)"," === t.charAt(n) && 0
                        }(n), e = n + ", " + e), ob(t, "", e), rb(this._element, this._eventFn, !1), this._startTime = Date.now()
                    }, t.prototype.pause = function () {
                        tb(this._element, this._name, "paused")
                    }, t.prototype.resume = function () {
                        tb(this._element, this._name, "running")
                    }, t.prototype.setPosition = function (t) {
                        var e = eb(this._element, this._name);
                        this._position = t * this._duration, ob(this._element, "Delay", "-" + this._position + "ms", e)
                    }, t.prototype.getPosition = function () {
                        return this._position
                    }, t.prototype._handleCallback = function (t) {
                        var e = t._ngTestManualTimestamp || Date.now(),
                            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                        t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
                    }, t.prototype.finish = function () {
                        this._finished || (this._finished = !0, this._onDoneFn(), rb(this._element, this._eventFn, !0))
                    }, t.prototype.destroy = function () {
                        var t, e, n, r;
                        this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (r = nb(n = ib(t = this._element, "").split(","), e)) >= 0 && (n.splice(r, 1), ob(t, "", n.join(","))))
                    }, t
                }();

            function tb(t, e, n) {
                ob(t, "PlayState", n, eb(t, e))
            }
            function eb(t, e) {
                var n = ib(t, "");
                return n.indexOf(",") > 0 ? nb(n.split(","), e) : nb([n], e)
            }
            function nb(t, e) {
                for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
                return -1
            }
            function rb(t, e, n) {
                n ? t.removeEventListener(J_, e) : t.addEventListener(J_, e)
            }
            function ob(t, e, n, r) {
                var o = Y_ + e;
                if (null != r) {
                    var i = t.style[o];
                    if (i.length) {
                        var a = i.split(",");
                        a[r] = n, n = a.join(",")
                    }
                }
                t.style[o] = n
            }
            function ib(t, e) {
                return t.style[Y_ + e]
            }
            var ab = "linear",
                sb = function () {
                    function t(t, e, n, r, o, i, a) {
                        this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = o, this._finalStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = i || ab, this.totalTime = r + o, this._buildStyler()
                    }
                    return t.prototype.onStart = function (t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function (t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function (t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.destroy = function () {
                        this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._onDestroyFns.forEach(function (t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype._flushDoneFns = function () {
                        this._onDoneFns.forEach(function (t) {
                            return t()
                        }), this._onDoneFns = []
                    }, t.prototype._flushStartFns = function () {
                        this._onStartFns.forEach(function (t) {
                            return t()
                        }), this._onStartFns = []
                    }, t.prototype.finish = function () {
                        this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._flushDoneFns())
                    }, t.prototype.setPosition = function (t) {
                        this._styler.setPosition(t)
                    }, t.prototype.getPosition = function () {
                        return this._styler.getPosition()
                    }, t.prototype.hasStarted = function () {
                        return this._state >= 2
                    }, t.prototype.init = function () {
                        this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
                    }, t.prototype.play = function () {
                        this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2), this._styler.resume()
                    }, t.prototype.pause = function () {
                        this.init(), this._styler.pause()
                    }, t.prototype.restart = function () {
                        this.reset(), this.play()
                    }, t.prototype.reset = function () {
                        this._styler.destroy(), this._buildStyler(), this._styler.apply()
                    }, t.prototype._buildStyler = function () {
                        var t = this;
                        this._styler = new X_(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", function () {
                            return t.finish()
                        })
                    }, t.prototype.triggerCallback = function (t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function (t) {
                            return t()
                        }), e.length = 0
                    }, t.prototype.beforeDestroy = function () {
                        var t = this;
                        this.init();
                        var e = {};
                        if (this.hasStarted()) {
                            var n = this._state >= 3;
                            Object.keys(this._finalStyles).forEach(function (r) {
                                "offset" != r && (e[r] = n ? t._finalStyles[r] : Jv(t.element, r))
                            })
                        }
                        this.currentSnapshot = e
                    }, t
                }(),
                lb = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.element = e, r._startingStyles = {}, r.__initialized = !1, r._styles = Tv(n), r
                    }
                    return o(e, t), e.prototype.init = function () {
                        var e = this;
                        !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(function (t) {
                            e._startingStyles[t] = e.element.style[t]
                        }), t.prototype.init.call(this))
                    }, e.prototype.play = function () {
                        var e = this;
                        this._startingStyles && (this.init(), Object.keys(this._styles).forEach(function (t) {
                            return e.element.style.setProperty(t, e._styles[t])
                        }), t.prototype.play.call(this))
                    }, e.prototype.destroy = function () {
                        var e = this;
                        this._startingStyles && (Object.keys(this._startingStyles).forEach(function (t) {
                            var n = e._startingStyles[t];
                            n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
                        }), this._startingStyles = null, t.prototype.destroy.call(this))
                    }, e
                }(av),
                ub = function () {
                    function t() {
                        this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
                    }
                    return t.prototype.validateStyleProperty = function (t) {
                        return Ev(t)
                    }, t.prototype.matchesElement = function (t, e) {
                        return kv(t, e)
                    }, t.prototype.containsElement = function (t, e) {
                        return Pv(t, e)
                    }, t.prototype.query = function (t, e, n) {
                        return Ov(t, e, n)
                    }, t.prototype.computeStyle = function (t, e, n) {
                        return window.getComputedStyle(t)[e]
                    }, t.prototype.buildKeyframeElement = function (t, e, n) {
                        var r = "@keyframes " + e + " {\n",
                            o = "";
                        (n = n.map(function (t) {
                            return Tv(t)
                        })).forEach(function (t) {
                            o = " ";
                            var e = parseFloat(t.offset);
                            r += "" + o + 100 * e + "% {\n", o += " ", Object.keys(t).forEach(function (e) {
                                var n = t[e];
                                switch (e) {
                                    case "offset":
                                        return;
                                    case "easing":
                                        return void(n && (r += o + "animation-timing-function: " + n + ";\n"));
                                    default:
                                        return void(r += "" + o + e + ": " + n + ";\n")
                                }
                            }), r += o + "}\n"
                        }), r += "}\n";
                        var i = document.createElement("style");
                        return i.innerHTML = r, i
                    }, t.prototype.animate = function (t, e, n, r, o, i, a) {
                        void 0 === i && (i = []), a && this._notifyFaultyScrubber();
                        var s = i.filter(function (t) {
                                return t instanceof sb
                            }),
                            l = {};
                        Gv(n, r) && s.forEach(function (t) {
                            var e = t.currentSnapshot;
                            Object.keys(e).forEach(function (t) {
                                return l[t] = e[t]
                            })
                        });
                        var u = function (t) {
                            var e = {};
                            return t && (Array.isArray(t) ? t : [t]).forEach(function (t) {
                                Object.keys(t).forEach(function (n) {
                                    "offset" != n && "easing" != n && (e[n] = t[n])
                                })
                            }), e
                        }(e = Zv(t, e, l));
                        if (0 == n) return new lb(t, u);
                        var c = "gen_css_kf_" + this._count++,
                            f = this.buildKeyframeElement(t, c, e);
                        document.querySelector("head").appendChild(f);
                        var p = new sb(t, e, c, n, r, o, u);
                        return p.onDestroy(function () {
                            var t;
                            (t = f).parentNode.removeChild(t)
                        }), p
                    }, t.prototype._notifyFaultyScrubber = function () {
                        this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
                    }, t
                }(),
                cb = function () {
                    function t(t, e, n) {
                        this.element = t, this.keyframes = e, this.options = n, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
                    }
                    return t.prototype._onFinish = function () {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.init = function () {
                        this._buildPlayer(), this._preparePlayerBeforeStart()
                    }, t.prototype._buildPlayer = function () {
                        var t = this;
                        if (!this._initialized) {
                            this._initialized = !0;
                            var e = this.keyframes;
                            this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", function () {
                                return t._onFinish()
                            })
                        }
                    }, t.prototype._preparePlayerBeforeStart = function () {
                        this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
                    }, t.prototype._triggerWebAnimation = function (t, e, n) {
                        return t.animate(e, n)
                    }, t.prototype.onStart = function (t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function (t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function (t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.play = function () {
                        this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function (t) {
                            return t()
                        }), this._onStartFns = [], this._started = !0), this.domPlayer.play()
                    }, t.prototype.pause = function () {
                        this.init(), this.domPlayer.pause()
                    }, t.prototype.finish = function () {
                        this.init(), this._onFinish(), this.domPlayer.finish()
                    }, t.prototype.reset = function () {
                        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
                    }, t.prototype._resetDomPlayerState = function () {
                        this.domPlayer && this.domPlayer.cancel()
                    }, t.prototype.restart = function () {
                        this.reset(), this.play()
                    }, t.prototype.hasStarted = function () {
                        return this._started
                    }, t.prototype.destroy = function () {
                        this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._onDestroyFns.forEach(function (t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.setPosition = function (t) {
                        this.domPlayer.currentTime = t * this.time
                    }, t.prototype.getPosition = function () {
                        return this.domPlayer.currentTime / this.time
                    }, Object.defineProperty(t.prototype, "totalTime", {
                        get: function () {
                            return this._delay + this._duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.beforeDestroy = function () {
                        var t = this,
                            e = {};
                        this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function (n) {
                            "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : Jv(t.element, n))
                        }), this.currentSnapshot = e
                    }, t.prototype.triggerCallback = function (t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function (t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                fb = function () {
                    function t() {
                        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(pb().toString()), this._cssKeyframesDriver = new ub
                    }
                    return t.prototype.validateStyleProperty = function (t) {
                        return Ev(t)
                    }, t.prototype.matchesElement = function (t, e) {
                        return kv(t, e)
                    }, t.prototype.containsElement = function (t, e) {
                        return Pv(t, e)
                    }, t.prototype.query = function (t, e, n) {
                        return Ov(t, e, n)
                    }, t.prototype.computeStyle = function (t, e, n) {
                        return window.getComputedStyle(t)[e]
                    }, t.prototype.overrideWebAnimationsSupport = function (t) {
                        this._isNativeImpl = t
                    }, t.prototype.animate = function (t, e, n, r, o, i, a) {
                        if (void 0 === i && (i = []), !a && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
                        var s = {
                            duration: n,
                            delay: r,
                            fill: 0 == r ? "both" : "forwards"
                        };
                        o && (s.easing = o);
                        var l = {},
                            u = i.filter(function (t) {
                                return t instanceof cb
                            });
                        return Gv(n, r) && u.forEach(function (t) {
                            var e = t.currentSnapshot;
                            Object.keys(e).forEach(function (t) {
                                return l[t] = e[t]
                            })
                        }), e = Zv(t, e = e.map(function (t) {
                            return Fv(t, !1)
                        }), l), new cb(t, e, s)
                    }, t
                }();

            function pb() {
                return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
            }
            var hb = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._nextAnimationId = 0, r._renderer = e.createRenderer(n.body, {
                            id: "0",
                            encapsulation: pe.None,
                            styles: [],
                            data: {
                                animation: []
                            }
                        }), r
                    }
                    return o(e, t), e.prototype.build = function (t) {
                        var e = this._nextAnimationId.toString();
                        this._nextAnimationId++;
                        var n = Array.isArray(t) ? rv(t) : t;
                        return mb(this._renderer, null, e, "register", [n]), new db(e, this._renderer)
                    }, a([s(1, Ht(Fc))], e)
                }(ev),
                db = function (t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._id = e, r._renderer = n, r
                    }
                    return o(e, t), e.prototype.create = function (t, e) {
                        return new gb(this._id, t, e || {}, this._renderer)
                    }, e
                }(function () {}),
                gb = function () {
                    function t(t, e, n, r) {
                        this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
                    }
                    return t.prototype._listen = function (t, e) {
                        return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e)
                    }, t.prototype._command = function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        return mb(this._renderer, this.element, this.id, t, e)
                    }, t.prototype.onDone = function (t) {
                        this._listen("done", t)
                    }, t.prototype.onStart = function (t) {
                        this._listen("start", t)
                    }, t.prototype.onDestroy = function (t) {
                        this._listen("destroy", t)
                    }, t.prototype.init = function () {
                        this._command("init")
                    }, t.prototype.hasStarted = function () {
                        return this._started
                    }, t.prototype.play = function () {
                        this._command("play"), this._started = !0
                    }, t.prototype.pause = function () {
                        this._command("pause")
                    }, t.prototype.restart = function () {
                        this._command("restart")
                    }, t.prototype.finish = function () {
                        this._command("finish")
                    }, t.prototype.destroy = function () {
                        this._command("destroy")
                    }, t.prototype.reset = function () {
                        this._command("reset")
                    }, t.prototype.setPosition = function (t) {
                        this._command("setPosition", t)
                    }, t.prototype.getPosition = function () {
                        return 0
                    }, t
                }();

            function mb(t, e, n, r, o) {
                return t.setProperty(e, "@@" + n + ":" + r, o)
            }
            var yb = function () {
                    function t(t, e, n) {
                        this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function (t, e) {
                            e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                        }
                    }
                    return t.prototype.createRenderer = function (t, e) {
                        var n = this,
                            r = this.delegate.createRenderer(t, e);
                        if (!(t && e && e.data && e.data.animation)) {
                            var o = this._rendererCache.get(r);
                            return o || (o = new vb("", r, this.engine), this._rendererCache.set(r, o)), o
                        }
                        var i = e.id,
                            a = e.id + "-" + this._currentId;
                        return this._currentId++, this.engine.register(a, t), e.data.animation.forEach(function (e) {
                            return n.engine.registerTrigger(i, a, t, e.name, e)
                        }), new _b(this, a, r, this.engine)
                    }, t.prototype.begin = function () {
                        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                    }, t.prototype._scheduleCountTask = function () {
                        var t = this;
                        this.promise.then(function () {
                            t._microtaskId++
                        })
                    }, t.prototype.scheduleListenerCallback = function (t, e, n) {
                        var r = this;
                        t >= 0 && t < this._microtaskId ? this._zone.run(function () {
                            return e(n)
                        }) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function () {
                            r._zone.run(function () {
                                r._animationCallbacksBuffer.forEach(function (t) {
                                    var e = c(t, 2);
                                    (0, e[0])(e[1])
                                }), r._animationCallbacksBuffer = []
                            })
                        }), this._animationCallbacksBuffer.push([e, n]))
                    }, t.prototype.end = function () {
                        var t = this;
                        this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function () {
                            t._scheduleCountTask(), t.engine.flush(t._microtaskId)
                        }), this.delegate.end && this.delegate.end()
                    }, t.prototype.whenRenderingDone = function () {
                        return this.engine.whenRenderingDone()
                    }, t
                }(),
                vb = function () {
                    function t(t, e, n) {
                        this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ?
                            function (t) {
                                return e.destroyNode(t)
                            } : null
                    }
                    return Object.defineProperty(t.prototype, "data", {
                        get: function () {
                            return this.delegate.data
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function () {
                        this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
                    }, t.prototype.createElement = function (t, e) {
                        return this.delegate.createElement(t, e)
                    }, t.prototype.createComment = function (t) {
                        return this.delegate.createComment(t)
                    }, t.prototype.createText = function (t) {
                        return this.delegate.createText(t)
                    }, t.prototype.appendChild = function (t, e) {
                        this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
                    }, t.prototype.insertBefore = function (t, e, n) {
                        this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
                    }, t.prototype.removeChild = function (t, e) {
                        this.engine.onRemove(this.namespaceId, e, this.delegate)
                    }, t.prototype.selectRootElement = function (t) {
                        return this.delegate.selectRootElement(t)
                    }, t.prototype.parentNode = function (t) {
                        return this.delegate.parentNode(t)
                    }, t.prototype.nextSibling = function (t) {
                        return this.delegate.nextSibling(t)
                    }, t.prototype.setAttribute = function (t, e, n, r) {
                        this.delegate.setAttribute(t, e, n, r)
                    }, t.prototype.removeAttribute = function (t, e, n) {
                        this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function (t, e) {
                        this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function (t, e) {
                        this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function (t, e, n, r) {
                        this.delegate.setStyle(t, e, n, r)
                    }, t.prototype.removeStyle = function (t, e, n) {
                        this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function (t, e, n) {
                        "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !! n) : this.delegate.setProperty(t, e, n)
                    }, t.prototype.setValue = function (t, e) {
                        this.delegate.setValue(t, e)
                    }, t.prototype.listen = function (t, e, n) {
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.disableAnimations = function (t, e) {
                        this.engine.disableAnimations(t, e)
                    }, t
                }(),
                _b = function (t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, n, r, o) || this;
                        return i.factory = e, i.namespaceId = n, i
                    }
                    return o(e, t), e.prototype.setProperty = function (t, e, n) {
                        "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !! n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
                    }, e.prototype.listen = function (t, e, n) {
                        var r, o, i, a = this;
                        if ("@" == e.charAt(0)) {
                            var s = function (t) {
                                    switch (t) {
                                        case "body":
                                            return document.body;
                                        case "document":
                                            return document;
                                        case "window":
                                            return window;
                                        default:
                                            return t
                                    }
                                }(t),
                                l = e.substr(1),
                                u = "";
                            return "@" != l.charAt(0) && (l = (r = c((o = l, i = o.indexOf("."), [o.substring(0, i), o.substr(i + 1)]), 2))[0], u = r[1]), this.engine.listen(this.namespaceId, s, l, u, function (t) {
                                a.factory.scheduleListenerCallback(t._data || -1, n, t)
                            })
                        }
                        return this.delegate.listen(t, e, n)
                    }, e
                }(vb),
                bb = function (t) {
                    function e(e, n, r) {
                        return t.call(this, e.body, n, r) || this
                    }
                    return o(e, t), a([s(0, Ht(xc))], e)
                }(Z_);

            function wb() {
                return "function" == typeof pb() ? new fb : new ub
            }
            function Cb() {
                return new C_
            }
            function Sb(t, e, n) {
                return new yb(t, e, n)
            }
            var xb = new vt("AnimationModuleType"),
                Eb = function () {},
                kb = {
                    theme: {
                        name: "Inside",
                        url: "https://github.com/elmorec/hexo-theme-inside"
                    }
                },
                Pb = new vt("app.config"),
                Ob = function () {},
                Tb = function (t, e, n) {
                    return new ss(jl, [Kd], function (t) {
                        return function (t) {
                            for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                                var i = t[o];
                                i.token === we && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, e[ro(i.token)] = i
                            }
                            return {
                                factory: null,
                                providersByKey: e,
                                providers: t,
                                modules: n,
                                isRoot: r
                            }
                        }([Wo(512, Ye, Je, [
                            [8, [$d, gg, mm, Cm, Am, Lm, Bm, Ym, ry, uy, tv]],
                            [3, Ye], tn]), Wo(5120, gr, vr, [
                            [3, gr]
                        ]), Wo(4608, sc, lc, [gr, [2, ac]]), Wo(5120, ur, mr, []), Wo(5120, cr, yr, []), Wo(4608, Of, Tf, [xc]), Wo(6144, Br, null, [Of]), Wo(4608, wf, Sf, []), Wo(5120, Wc, function (t, e, n, r, o, i, a, s) {
                            return [new _f(t, e, n), new Pf(r), new xf(o, i, a, s)]
                        }, [xc, ln, Le, xc, xc, wf, Ve, [2, Cf]]), Wo(4608, $c, $c, [Wc, ln]), Wo(135680, Yc, Yc, [xc]), Wo(4608, of, of, [$c, Yc]), Wo(5120, Iv, wb, []), Wo(5120, w_, Cb, []), Wo(4608, Z_, bb, [xc, Iv, w_]), Wo(5120, Mn, Sb, [of, Z_, ln]), Wo(6144, Zc, null, [Yc]), Wo(4608, mn, mn, [ln]), Wo(4608, ev, hb, [Mn, Fc]), Wo(5120, ah, yd, [Qh]), Wo(4608, od, od, []), Wo(6144, nd, null, [od]), Wo(135680, id, id, [Qh, Dn, ze, $t, nd]), Wo(4608, rd, rd, []), Wo(5120, ad, pd, [Qh, kc, sd]), Wo(5120, wd, bd, [vd]), Wo(5120, He, function (t) {
                            return [t]
                        }, [wd]), Wo(4608, Ed, Ed, []), Wo(4608, Td, Td, [Ed, xd]), Wo(4608, Id, Id, [xd, Td, Qh]), Wo(4608, Ad, Ad, [xd, Td, Qh]), Wo(4608, Nd, Nd, [xd, Td, Qh]), Wo(4608, Rd, Rd, [xd, Td, Qh]), Wo(4608, jd, jd, [xd, Td, Qh]), Wo(4608, Dd, Dd, [xd, Td, Qh]), Wo(4608, Ld, Ld, [xd, Td, Qh]), Wo(4608, Fd, Fd, [xd, Td, Qh]), Wo(4608, Hd, Hd, []), Wo(1073742336, Sc, Sc, []), Wo(1024, be, Ff, []), Wo(1024, Sn, function () {
                            return [cd()]
                        }, []), Wo(512, vd, vd, [$t]), Wo(256, je, "inside", []), Wo(2048, Vc, null, [je]), Wo(256, Pb, kb, []), Wo(512, xd, xd, [Pb]), Wo(1024, De, function (t, e, n, r, o, a) {
                            return [(l = t, qc("probe", Qc), qc("coreTokens", i({}, Kc, (l || []).reduce(function (t, e) {
                                return t[e.name] = e.token, t
                            }, {}))), function () {
                                return Qc
                            }), _d(e), Uc(n, r, o), (s = a, function () {
                                return s.process()
                            })];
                            var s, l
                        }, [
                            [2, Sn], vd, Vc, xc, $t, xd]), Wo(512, Re, Re, [
                            [2, De]
                        ]), Wo(131584, On, On, [ln, Ve, $t, be, Ye, Re]), Wo(1073742336, _r, _r, [On]), Wo(1073742336, Lf, Lf, [
                            [3, Lf]
                        ]), Wo(1073742336, Eb, Eb, []), Wo(1024, ld, dd, [
                            [3, Qh]
                        ]), Wo(512, Op, Tp, []), Wo(512, Xh, Xh, []), Wo(256, sd, {}, []), Wo(1024, wu, hd, [_u, [2, Cu], sd]), Wo(512, Su, Su, [wu]), Wo(512, ze, ze, []), Wo(512, Dn, Ln, [ze, [2, jn]]), Wo(1024, Hh, function () {
                            return [[{
                                path: "",
                                component: ug,
                                resolve: {
                                    postList: Id
                                },
                                data: {
                                    id: "home"
                                }
                            },
                                {
                                    path: "page/:page",
                                    component: ug,
                                    resolve: {
                                        postList: Id
                                    },
                                    data: {
                                        id: "posts"
                                    }
                                },
                                {
                                    path: "post/:slug",
                                    component: Xg,
                                    resolve: {
                                        post: Ad
                                    },
                                    data: {
                                        id: "post"
                                    }
                                },
                                {
                                    path: "tags",
                                    component: ym,
                                    resolve: {
                                        tagList: jd
                                    },
                                    data: {
                                        id: "tags"
                                    }
                                },
                                {
                                    path: "tags/:name",
                                    component: Pm,
                                    resolve: {
                                        tag: Rd
                                    },
                                    data: {
                                        id: "tag"
                                    }
                                },
                                {
                                    path: "tags/:name/:page",
                                    component: Pm,
                                    resolve: {
                                        tag: Rd
                                    },
                                    data: {
                                        id: "tag"
                                    }
                                },
                                {
                                    path: "categories",
                                    component: Nm,
                                    resolve: {
                                        categoryList: Ld
                                    },
                                    data: {
                                        id: "categories"
                                    },
                                    children: [{
                                        path: ":name",
                                        component: Hm,
                                        resolve: {
                                            category: Fd
                                        },
                                        data: {
                                            id: "category"
                                        }
                                    },
                                        {
                                            path: ":name/:page",
                                            component: Hm,
                                            resolve: {
                                                category: Fd
                                            },
                                            data: {
                                                id: "category"
                                            }
                                        }]
                                },
                                {
                                    path: "archives",
                                    component: qm,
                                    resolve: {
                                        archives: Dd
                                    },
                                    data: {
                                        id: "archives"
                                    }
                                },
                                {
                                    path: "archives/:page",
                                    component: qm,
                                    resolve: {
                                        archives: Dd
                                    },
                                    data: {
                                        id: "archives"
                                    }
                                },
                                {
                                    path: "404",
                                    component: Jm,
                                    data: {
                                        id: "404"
                                    }
                                },
                                {
                                    path: "**",
                                    redirectTo: "404"
                                }]]
                        }, []), Wo(1024, Qh, md, [On, Op, Xh, Su, $t, Dn, ze, Hh, sd, [2, Uh],
                            [2, Fh]
                        ]), Wo(1073742336, fd, fd, [
                            [2, ld],
                            [2, Qh]
                        ]), Wo(1073742336, Ob, Ob, []), Wo(1073742336, jl, jl, []), Wo(256, we, !0, []), Wo(256, xb, "BrowserAnimations", [])])
                    })
                }();
            (function () {
                if (bn) throw new Error("Cannot enable prod mode after platform setup.");
                _n = !1
            })(), jf().bootstrapModuleFactory(Tb).
            catch (function (t) {
                return console.log(t)
            })
        }
    }, [
        [0, 0]
    ]
]);