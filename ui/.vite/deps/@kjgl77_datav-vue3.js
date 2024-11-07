import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  toRef,
  unref,
  useCssVars,
  watch,
  watchEffect
} from "./chunk-IEIA7NMQ.js";
import "./chunk-HUBM7RA2.js";

// node_modules/@kjgl77/datav-vue3/dist/datav-vue3.es.js
import "F:/\u9879\u76EE/\u793E\u533A\u5065\u5EB7\u7BA1\u7406/002/chc-web/node_modules/@kjgl77/datav-vue3/dist/style.css";
function Hi(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function qt(e) {
  return typeof e == "function" ? e() : unref(e);
}
var Vi = typeof window < "u";
var Cn = () => {
};
function Ui(e, t) {
  function r(...n) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(o);
    });
  }
  return r;
}
function Xi(e, t = {}) {
  let r, n, a = Cn;
  const o = (s) => {
    clearTimeout(s), a(), a = Cn;
  };
  return (s) => {
    const D = qt(e), W = qt(t.maxWait);
    return r && o(r), D <= 0 || W !== void 0 && W <= 0 ? (n && (o(n), n = null), Promise.resolve(s())) : new Promise((T, U) => {
      a = t.rejectOnCancel ? U : T, W && !n && (n = setTimeout(() => {
        r && o(r), n = null, T(s());
      }, W)), r = setTimeout(() => {
        n && o(n), n = null, T(s());
      }, D);
    });
  };
}
function Qi(e, t = 200, r = {}) {
  return Ui(
    Xi(t, r),
    e
  );
}
function Yi(e) {
  var t;
  const r = qt(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
var Ki = Vi ? window : void 0;
function Ji(...e) {
  let t, r, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, a] = e, t = Ki) : [t, r, n, a] = e, !t)
    return Cn;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], l = () => {
    o.forEach((T) => T()), o.length = 0;
  }, s = (T, U, B, A) => (T.addEventListener(U, B, A), () => T.removeEventListener(U, B, A)), D = watch(
    () => [Yi(t), qt(a)],
    ([T, U]) => {
      l(), T && o.push(
        ...r.flatMap((B) => n.map((A) => s(T, B, A, U)))
      );
    },
    { immediate: true, flush: "post" }
  ), W = () => {
    D(), l();
  };
  return Hi(W), W;
}
function Ct(e, t) {
  return arguments.length === 1 ? parseInt((Math.random() * e + 1).toString(), 10) : parseInt((Math.random() * (t - e + 1) + e).toString(), 10);
}
function Zi(e, t) {
  const r = window.MutationObserver, n = new r(t);
  return n.observe(e, { attributes: true, attributeFilter: ["style"], attributeOldValue: true }), n;
}
function It(e, t) {
  const r = Math.abs(e[0] - t[0]), n = Math.abs(e[1] - t[1]);
  return Math.sqrt(r * r + n * n);
}
function nt(e, t, r, n) {
  return [e + Math.cos(n) * r, t + Math.sin(n) * r];
}
function eo(e) {
  return e.filter((t) => typeof t == "number");
}
function to(e) {
  return e = eo(e), e.reduce((t, r) => t + r, 0);
}
function ro(e, t) {
  const r = Math.abs(e.x - t.x), n = Math.abs(e.y - t.y);
  return Math.sqrt(r * r + n * n);
}
function Mn(e) {
  const r = new Array(e.length - 1).fill(0).map((n, a) => [e[a], e[a + 1]]).map((n) => ro(n[0], n[1]));
  return to(r);
}
function no(e) {
  return `${e.x},${e.y}`;
}
function Dn(e) {
  return e.map(no).join(" ");
}
function Ve(e) {
  return (e ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx").replace(/[xy]/g, (t) => {
    const r = Math.random() * 16 | 0;
    return (t === "x" ? r : r & 3 | 8).toString(16);
  });
}
function xe(e, t) {
  for (const r in t) {
    if (e[r] && typeof e[r] == "object") {
      xe(e[r], t[r]);
      continue;
    }
    if (typeof t[r] == "object") {
      e[r] = _e(t[r], true);
      continue;
    }
    e[r] = t[r];
  }
  return e;
}
function _e(e, t) {
  if (!e)
    return e;
  const { parse: r, stringify: n } = JSON;
  if (!t)
    return r(n(e));
  const a = Array.isArray(e) ? [] : {};
  if (e && typeof e == "object")
    for (const o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (e[o] && typeof e[o] == "object" ? a[o] = _e(e[o], true) : a[o] = e[o]);
  return a;
}
var be = (e, t, r) => {
  const n = ref(0), a = ref(0);
  let o, l = null, s = null;
  const D = (A = true) => new Promise((v) => {
    nextTick(() => {
      s = e.value, n.value = e.value ? e.value.clientWidth : 0, a.value = e.value ? e.value.clientHeight : 0, e.value ? (!n.value || !a.value) && console.warn("DataV: Component width or height is 0px, rendering abnormality may occur!") : console.warn("DataV: Failed to get dom node, component rendering may be abnormal!"), typeof t == "function" && A && t(), v(true);
    });
  }), W = () => {
    o = Qi(D, 200);
  }, T = () => {
    l = Zi(s, o), Ji(window, "resize", o);
  }, U = () => {
    l && (l.disconnect(), l.takeRecords(), l = null);
  }, B = async () => {
    await D(false), W(), T(), typeof r == "function" && r();
  };
  return onMounted(() => {
    B();
  }), onUnmounted(() => {
    U();
  }), {
    width: n,
    height: a,
    initWH: D
  };
};
var ao = ["width", "height"];
var io = ["d", "fill"];
var oo = ["fill", "x", "y"];
var lo = ["xlink:href", "width", "height", "x", "y"];
var so = ["fill", "x", "y"];
var uo = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    useCssVars((A) => ({
      "5914205c": unref(l)
    }));
    const r = ref(null), { width: n, height: a } = be(r, D, s), o = reactive({
      defaultConfig: {
        data: [],
        img: [],
        fontSize: 12,
        imgSideLength: 30,
        columnColor: "rgba(0, 194, 255, 0.4)",
        textColor: "#fff",
        showValue: false,
        sort: true
      },
      mergedConfig: null,
      column: []
    }), l = computed(() => `${t.config.fontSize ? t.config.fontSize : o.defaultConfig.fontSize}px`);
    watch(() => t.config, () => {
      W();
    }, {
      deep: true
    });
    function s() {
      W();
    }
    function D() {
      W();
    }
    function W() {
      T(), U(), B();
    }
    function T() {
      o.mergedConfig = xe(_e(o.defaultConfig, true), t.config || {});
    }
    function U() {
      let { data: A } = o.mergedConfig;
      const { sort: v } = o.mergedConfig;
      A = _e(A, true), v && A.sort(({ value: N }, { value: I }) => N > I ? -1 : N < I ? 1 : 0);
      const R = Math.max(...A.map((N) => N.value));
      A = A.map((N) => ({
        ...N,
        percent: R === 0 ? 0 : N.value / R
      })), o.mergedConfig.data = A;
    }
    function B() {
      const { imgSideLength: A, fontSize: v, data: R } = o.mergedConfig, N = R.length, I = n.value / (N + 1), E = a.value - A - v - 5, b = a.value - v - 5;
      o.column = R.map(($, f) => {
        const { percent: _ } = $, O = I * (f + 1), m = I * f, C = I * (f + 2), d = b - E * _, G = E * _ * 0.6 + d, S = `
          M${m}, ${b}
          Q${O}, ${G} ${O},${d}
          M${O},${d}
          Q${O}, ${G} ${C},${b}
          L${m}, ${b}
          Z
        `, g = (b + d) / 2 + v / 2;
        return {
          ...$,
          d: S,
          x: O,
          y: d,
          textY: g
        };
      });
    }
    return (A, v) => (openBlock(), createElementBlock("div", {
      ref_key: "conicalColumnChart",
      ref: r,
      class: "dv-conical-column-chart"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(n),
        height: unref(a)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o).column, (R, N) => (openBlock(), createElementBlock("g", { key: N }, [
          createBaseVNode("path", {
            d: R.d,
            fill: unref(o).mergedConfig.columnColor
          }, null, 8, io),
          createBaseVNode("text", {
            fill: unref(o).mergedConfig.textColor,
            x: R.x,
            y: unref(a) - 4
          }, toDisplayString(R.name), 9, oo),
          unref(o).mergedConfig.img.length ? (openBlock(), createElementBlock("image", {
            key: 0,
            "xlink:href": unref(o).mergedConfig.img[N % unref(o).mergedConfig.img.length],
            width: unref(o).mergedConfig.imgSideLength,
            height: unref(o).mergedConfig.imgSideLength,
            x: R.x - unref(o).mergedConfig.imgSideLength / 2,
            y: R.y - unref(o).mergedConfig.imgSideLength
          }, null, 8, lo)) : createCommentVNode("", true),
          unref(o).mergedConfig.showValue ? (openBlock(), createElementBlock("text", {
            key: 1,
            fill: unref(o).mergedConfig.textColor,
            x: R.x,
            y: R.textY
          }, toDisplayString(R.value), 9, so)) : createCommentVNode("", true)
        ]))), 128))
      ], 8, ao))
    ], 512));
  }
};
var br = {
  install(e) {
    e.component("DvConicalColumnChart", uo);
  }
};
var co = ["id"];
var fo = ["offset", "stop-color"];
var ho = ["id", "x2"];
var vo = ["offset", "stop-color"];
var po = ["x", "y", "rx", "ry", "stroke-width", "stroke", "width", "height"];
var go = ["stroke-width", "stroke-dasharray", "stroke", "points"];
var mo = ["stroke", "fill", "x", "y"];
var yo = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), a = reactive({
      gradientId1: `percent-pond-gradientId1-${r}`,
      gradientId2: `percent-pond-gradientId2-${r}`,
      width: 0,
      height: 0,
      defaultConfig: {
        value: 0,
        colors: ["#3DE7C9", "#00BAFF"],
        borderWidth: 3,
        borderGap: 3,
        lineDash: [5, 1],
        textColor: "#fff",
        borderRadius: 5,
        localGradient: false,
        formatter: "{value}%"
      },
      mergedConfig: null
    }), o = computed(() => {
      if (!a.mergedConfig)
        return 0;
      const { borderWidth: N } = a.mergedConfig;
      return a.width - N;
    }), l = computed(() => {
      if (!a.mergedConfig)
        return 0;
      const { borderWidth: N } = a.mergedConfig;
      return a.height - N;
    }), s = computed(() => {
      const N = a.height / 2;
      if (!a.mergedConfig)
        return `0, ${N} 0, ${N}`;
      const { borderWidth: I, borderGap: E, value: b } = a.mergedConfig, $ = (a.width - (I + E) * 2) / 100 * b;
      return `
        ${I + E}, ${N}
        ${I + E + $}, ${N + 1e-3}
      `;
    }), D = computed(() => {
      if (!a.mergedConfig)
        return 0;
      const { borderWidth: N, borderGap: I } = a.mergedConfig;
      return a.height - (N + I) * 2;
    }), W = computed(() => {
      if (!a.mergedConfig)
        return [];
      const { colors: N } = a.mergedConfig, E = 100 / (N.length - 1);
      return N.map((b, $) => [E * $, b]);
    }), T = computed(() => a.mergedConfig && a.mergedConfig.localGradient ? a.gradientId1 : a.gradientId2), U = computed(() => {
      if (!a.mergedConfig)
        return "100%";
      const { value: N } = a.mergedConfig;
      return `${200 - N}%`;
    }), B = computed(() => {
      if (!a.mergedConfig)
        return "";
      const { value: N, formatter: I } = a.mergedConfig;
      return I.replace("{value}", N);
    });
    watch(() => t.config, () => {
      R();
    }, {
      deep: true
    }), onMounted(() => {
      A();
    });
    async function A() {
      await v(), t.config && R();
    }
    async function v() {
      await nextTick();
      const { clientWidth: N, clientHeight: I } = n.value;
      a.width = N, a.height = I;
    }
    function R() {
      a.mergedConfig = xe(_e(a.defaultConfig, true), t.config || {});
    }
    return (N, I) => (openBlock(), createElementBlock("div", {
      ref_key: "percentPond",
      ref: n,
      class: "dv-percent-pond"
    }, [
      (openBlock(), createElementBlock("svg", null, [
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: unref(a).gradientId1,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(W), (E) => (openBlock(), createElementBlock("stop", {
              key: E[0],
              offset: `${E[0]}%`,
              "stop-color": E[1]
            }, null, 8, fo))), 128))
          ], 8, co),
          createBaseVNode("linearGradient", {
            id: unref(a).gradientId2,
            x1: "0%",
            y1: "0%",
            x2: unref(U),
            y2: "0%"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(W), (E) => (openBlock(), createElementBlock("stop", {
              key: E[0],
              offset: `${E[0]}%`,
              "stop-color": E[1]
            }, null, 8, vo))), 128))
          ], 8, ho)
        ]),
        createBaseVNode("rect", {
          x: unref(a).mergedConfig ? unref(a).mergedConfig.borderWidth / 2 : "0",
          y: unref(a).mergedConfig ? unref(a).mergedConfig.borderWidth / 2 : "0",
          rx: unref(a).mergedConfig ? unref(a).mergedConfig.borderRadius : "0",
          ry: unref(a).mergedConfig ? unref(a).mergedConfig.borderRadius : "0",
          fill: "transparent",
          "stroke-width": unref(a).mergedConfig ? unref(a).mergedConfig.borderWidth : "0",
          stroke: `url(#${unref(a).gradientId1})`,
          width: unref(o) > 0 ? unref(o) : 0,
          height: unref(l) > 0 ? unref(l) : 0
        }, null, 8, po),
        createBaseVNode("polyline", {
          "stroke-width": unref(D),
          "stroke-dasharray": unref(a).mergedConfig ? unref(a).mergedConfig.lineDash.join(",") : "0",
          stroke: `url(#${unref(T)})`,
          points: unref(s)
        }, null, 8, go),
        createBaseVNode("text", {
          stroke: unref(a).mergedConfig ? unref(a).mergedConfig.textColor : "#fff",
          fill: unref(a).mergedConfig ? unref(a).mergedConfig.textColor : "#fff",
          x: unref(a).width / 2,
          y: unref(a).height / 2
        }, toDisplayString(unref(B)), 9, mo)
      ]))
    ], 512));
  }
};
var xr = {
  install(e) {
    e.component("DvPercentPond", yo);
  }
};
function ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bo(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var a = [null];
        a.push.apply(a, arguments);
        var o = Function.bind.apply(t, a);
        return new o();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: true,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var fr = {};
var Pe = {};
var xo = {
  get exports() {
    return Pe;
  },
  set exports(e) {
    Pe = e;
  }
};
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(xo);
var Cr = {};
var Ht = {};
var Co = {
  get exports() {
    return Ht;
  },
  set exports(e) {
    Ht = e;
  }
};
var Fn;
function Ue() {
  return Fn || (Fn = 1, function(e) {
    function t(r, n, a) {
      return n in r ? Object.defineProperty(r, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : r[n] = a, r;
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Co)), Ht;
}
var Vt = {};
var _o = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
};
var Ut = {};
var $o = {
  get exports() {
    return Ut;
  },
  set exports(e) {
    Ut = e;
  }
};
var Xt = {};
var Po = {
  get exports() {
    return Xt;
  },
  set exports(e) {
    Xt = e;
  }
};
var Bn;
function ri() {
  return Bn || (Bn = 1, function(e) {
    function t(r, n) {
      (n == null || n > r.length) && (n = r.length);
      for (var a = 0, o = new Array(n); a < n; a++)
        o[a] = r[a];
      return o;
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Po)), Xt;
}
var Nn;
function wo() {
  return Nn || (Nn = 1, function(e) {
    var t = ri();
    function r(n) {
      if (Array.isArray(n))
        return t(n);
    }
    e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
  }($o)), Ut;
}
var Qt = {};
var ko = {
  get exports() {
    return Qt;
  },
  set exports(e) {
    Qt = e;
  }
};
var jn;
function Ao() {
  return jn || (jn = 1, function(e) {
    function t(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(ko)), Qt;
}
var Yt = {};
var So = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
var En;
function ni() {
  return En || (En = 1, function(e) {
    var t = ri();
    function r(n, a) {
      if (n) {
        if (typeof n == "string")
          return t(n, a);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
          return Array.from(n);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return t(n, a);
      }
    }
    e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
  }(So)), Yt;
}
var Kt = {};
var Lo = {
  get exports() {
    return Kt;
  },
  set exports(e) {
    Kt = e;
  }
};
var Wn;
function Oo() {
  return Wn || (Wn = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Lo)), Kt;
}
var zn;
function Fe() {
  return zn || (zn = 1, function(e) {
    var t = wo(), r = Ao(), n = ni(), a = Oo();
    function o(l) {
      return t(l) || r(l) || n(l) || a();
    }
    e.exports = o, e.exports.__esModule = true, e.exports.default = e.exports;
  }(_o)), Vt;
}
var Jt = {};
var Go = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
  }
};
var qn;
function wt() {
  return qn || (qn = 1, function(e) {
    function t(r, n) {
      if (!(r instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Go)), Jt;
}
var ai = ((e) => (e.transparent = "rgba(0,0,0,0)", e.black = "#000000", e.silver = "#C0C0C0", e.gray = "#808080", e.white = "#FFFFFF", e.maroon = "#800000", e.red = "#FF0000", e.purple = "#800080", e.fuchsia = "#FF00FF", e.green = "#008000", e.lime = "#00FF00", e.olive = "#808000", e.yellow = "#FFFF00", e.navy = "#000080", e.blue = "#0000FF", e.teal = "#008080", e.aqua = "#00FFFF", e.aliceblue = "#f0f8ff", e.antiquewhite = "#faebd7", e.aquamarine = "#7fffd4", e.azure = "#f0ffff", e.beige = "#f5f5dc", e.bisque = "#ffe4c4", e.blanchedalmond = "#ffebcd", e.blueviolet = "#8a2be2", e.brown = "#a52a2a", e.burlywood = "#deb887", e.cadetblue = "#5f9ea0", e.chartreuse = "#7fff00", e.chocolate = "#d2691e", e.coral = "#ff7f50", e.cornflowerblue = "#6495ed", e.cornsilk = "#fff8dc", e.crimson = "#dc143c", e.cyan = "#00ffff", e.darkblue = "#00008b", e.darkcyan = "#008b8b", e.darkgoldenrod = "#b8860b", e.darkgray = "#a9a9a9", e.darkgreen = "#006400", e.darkgrey = "#a9a9a9", e.darkkhaki = "#bdb76b", e.darkmagenta = "#8b008b", e.darkolivegreen = "#556b2f", e.darkorange = "#ff8c00", e.darkorchid = "#9932cc", e.darkred = "#8b0000", e.darksalmon = "#e9967a", e.darkseagreen = "#8fbc8f", e.darkslateblue = "#483d8b", e.darkslategray = "#2f4f4f", e.darkslategrey = "#2f4f4f", e.darkturquoise = "#00ced1", e.darkviolet = "#9400d3", e.deeppink = "#ff1493", e.deepskyblue = "#00bfff", e.dimgray = "#696969", e.dimgrey = "#696969", e.dodgerblue = "#1e90ff", e.firebrick = "#b22222", e.floralwhite = "#fffaf0", e.forestgreen = "#228b22", e.gainsboro = "#dcdcdc", e.ghostwhite = "#f8f8ff", e.gold = "#ffd700", e.goldenrod = "#daa520", e.greenyellow = "#adff2f", e.grey = "#808080", e.honeydew = "#f0fff0", e.hotpink = "#ff69b4", e.indianred = "#cd5c5c", e.indigo = "#4b0082", e.ivory = "#fffff0", e.khaki = "#f0e68c", e.lavender = "#e6e6fa", e.lavenderblush = "#fff0f5", e.lawngreen = "#7cfc00", e.lemonchiffon = "#fffacd", e.lightblue = "#add8e6", e.lightcoral = "#f08080", e.lightcyan = "#e0ffff", e.lightgoldenrodyellow = "#fafad2", e.lightgray = "#d3d3d3", e.lightgreen = "#90ee90", e.lightgrey = "#d3d3d3", e.lightpink = "#ffb6c1", e.lightsalmon = "#ffa07a", e.lightseagreen = "#20b2aa", e.lightskyblue = "#87cefa", e.lightslategray = "#778899", e.lightslategrey = "#778899", e.lightsteelblue = "#b0c4de", e.lightyellow = "#ffffe0", e.limegreen = "#32cd32", e.linen = "#faf0e6", e.magenta = "#ff00ff", e.mediumaquamarine = "#66cdaa", e.mediumblue = "#0000cd", e.mediumorchid = "#ba55d3", e.mediumpurple = "#9370db", e.mediumseagreen = "#3cb371", e.mediumslateblue = "#7b68ee", e.mediumspringgreen = "#00fa9a", e.mediumturquoise = "#48d1cc", e.mediumvioletred = "#c71585", e.midnightblue = "#191970", e.mintcream = "#f5fffa", e.mistyrose = "#ffe4e1", e.moccasin = "#ffe4b5", e.navajowhite = "#ffdead", e.oldlace = "#fdf5e6", e.olivedrab = "#6b8e23", e.orange = "#ffa500", e.orangered = "#ff4500", e.orchid = "#da70d6", e.palegoldenrod = "#eee8aa", e.palegreen = "#98fb98", e.paleturquoise = "#afeeee", e.palevioletred = "#db7093", e.papayawhip = "#ffefd5", e.peachpuff = "#ffdab9", e.peru = "#cd853f", e.pink = "#ffc0cb", e.plum = "#dda0dd", e.powderblue = "#b0e0e6", e.rosybrown = "#bc8f8f", e.royalblue = "#4169e1", e.saddlebrown = "#8b4513", e.salmon = "#fa8072", e.sandybrown = "#f4a460", e.seagreen = "#2e8b57", e.seashell = "#fff5ee", e.sienna = "#a0522d", e.skyblue = "#87ceeb", e.slateblue = "#6a5acd", e.slategray = "#708090", e.snow = "#fffafa", e.springgreen = "#00ff7f", e.steelblue = "#4682b4", e.tan = "#d2b48c", e.thistle = "#d8bfd8", e.tomato = "#ff6347", e.turquoise = "#40e0d0", e.violet = "#ee82ee", e.wheat = "#f5deb3", e.whitesmoke = "#f5f5f5", e.yellowgreen = "#9acd32", e))(ai || {});
function dr(e) {
  return typeof e != "string" ? false : (e = e.toLowerCase(), /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e));
}
function To(e) {
  return typeof e != "string" ? false : (e = e.toLowerCase(), /^(rgb\(|RGB\()/.test(e));
}
function ii(e) {
  return typeof e != "string" ? false : (e = e.toLowerCase(), /^(rgba|RGBA)/.test(e));
}
function oi(e) {
  return /^(rgb|rgba|RGB|RGBA)/.test(e);
}
function Ro(e) {
  return ai[e];
}
function li(e) {
  if (dr(e) || oi(e))
    return e;
  const t = Ro(e);
  if (!t)
    throw new Error(`Color: Invalid Input of ${e}`);
  return t;
}
function Mo(e) {
  e = e.replace("#", ""), e.length === 3 && (e = Array.from(e).map((r) => r + r).join(""));
  const t = e.split("");
  return new Array(3).fill(0).map((r, n) => parseInt(`0x${t[n * 2]}${t[n * 2 + 1]}`));
}
function Do(e) {
  return e.replace(/rgb\(|rgba\(|\)/g, "").split(",").slice(0, 3).map((t) => parseInt(t));
}
function kt(e) {
  const t = li(e).toLowerCase();
  return dr(t) ? Mo(t) : Do(t);
}
function si(e) {
  const t = li(e);
  return ii(t) ? Number(
    t.toLowerCase().split(",").slice(-1)[0].replace(/[)|\s]/g, "")
  ) : 1;
}
function kn(e) {
  const t = kt(e);
  return t && [...t, si(e)];
}
function Fo(e, t) {
  const r = kt(e);
  return typeof t == "number" ? `rgba(${r.join(",")},${t})` : `rgb(${r.join(",")})`;
}
function Bo(e) {
  if (dr(e))
    return e;
  const t = kt(e), r = (n) => Number(n).toString(16).padStart(2, "0");
  return `#${t.map(r).join("")}`;
}
function hr(e) {
  if (!Array.isArray(e))
    throw new Error(`getColorFromRgbValue: ${e} is not an array`);
  const { length: t } = e;
  if (t !== 3 && t !== 4)
    throw new Error("getColorFromRgbValue: value length should be 3 or 4");
  return (t === 3 ? "rgb(" : "rgba(") + e.join(",") + ")";
}
function No(e, t = 0) {
  let r = kn(e);
  return r = r.map((n, a) => a === 3 ? n : n - Math.ceil(2.55 * t)).map((n) => n < 0 ? 0 : n), hr(r);
}
function jo(e, t = 0) {
  let r = kn(e);
  return r = r.map((n, a) => a === 3 ? n : n + Math.ceil(2.55 * t)).map((n) => n > 255 ? 255 : n), hr(r);
}
function De(e, t = 100) {
  const r = kt(e);
  return hr([...r, t / 100]);
}
var Eo = Object.freeze(Object.defineProperty({
  __proto__: null,
  darken: No,
  fade: De,
  getColorFromRgbValue: hr,
  getOpacity: si,
  getRgbValue: kt,
  getRgbaValue: kn,
  isHex: dr,
  isRgb: To,
  isRgbOrRgba: oi,
  isRgba: ii,
  lighten: jo,
  toHex: Bo,
  toRgb: Fo
}, Symbol.toStringTag, { value: "Module" }));
var At = bo(Eo);
var _r = {};
var $r = {};
var Zt = {};
var Wo = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
};
var er = {};
var zo = {
  get exports() {
    return er;
  },
  set exports(e) {
    er = e;
  }
};
var In;
function qo() {
  return In || (In = 1, function(e) {
    function t(r) {
      if (Array.isArray(r))
        return r;
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(zo)), er;
}
var tr = {};
var Io = {
  get exports() {
    return tr;
  },
  set exports(e) {
    tr = e;
  }
};
var Hn;
function Ho() {
  return Hn || (Hn = 1, function(e) {
    function t(r, n) {
      var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (a != null) {
        var o = [], l = true, s = false, D, W;
        try {
          for (a = a.call(r); !(l = (D = a.next()).done) && (o.push(D.value), !(n && o.length === n)); l = true)
            ;
        } catch (T) {
          s = true, W = T;
        } finally {
          try {
            !l && a.return != null && a.return();
          } finally {
            if (s)
              throw W;
          }
        }
        return o;
      }
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Io)), tr;
}
var rr = {};
var Vo = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
};
var Vn;
function Uo() {
  return Vn || (Vn = 1, function(e) {
    function t() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Vo)), rr;
}
var Un;
function Ne() {
  return Un || (Un = 1, function(e) {
    var t = qo(), r = Ho(), n = ni(), a = Uo();
    function o(l, s) {
      return t(l) || r(l, s) || n(l, s) || a();
    }
    e.exports = o, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Wo)), Zt;
}
var Xn;
function Xo() {
  return Xn || (Xn = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.bezierCurveToPolyline = I, e.getBezierCurveLength = E, e.default = void 0;
    var r = t(Ne()), n = t(Fe()), a = Math.sqrt, o = Math.pow, l = Math.ceil, s = Math.abs, D = 50;
    function W($) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, _ = $.length - 1, O = $[0], m = $[_][2], C = $.slice(1), d = C.map(function(V, X) {
        var Z = X === 0 ? O : C[X - 1][2];
        return T.apply(void 0, [Z].concat((0, n.default)(V)));
      }), G = new Array(_).fill(D), S = v(d, G), g = N(S, d, C, f);
      return g.segmentPoints.push(m), g;
    }
    function T($, f, _, O) {
      return function(m) {
        var C = 1 - m, d = o(C, 3), G = o(C, 2), S = o(m, 3), g = o(m, 2);
        return [$[0] * d + 3 * f[0] * m * G + 3 * _[0] * g * C + O[0] * S, $[1] * d + 3 * f[1] * m * G + 3 * _[1] * g * C + O[1] * S];
      };
    }
    function U($, f) {
      var _ = (0, r.default)($, 2), O = _[0], m = _[1], C = (0, r.default)(f, 2), d = C[0], G = C[1];
      return a(o(O - d, 2) + o(m - G, 2));
    }
    function B($) {
      return $.reduce(function(f, _) {
        return f + _;
      }, 0);
    }
    function A($) {
      return $.map(function(f, _) {
        return new Array(f.length - 1).fill(0).map(function(O, m) {
          return U(f[m], f[m + 1]);
        });
      });
    }
    function v($, f) {
      return $.map(function(_, O) {
        var m = 1 / f[O];
        return new Array(f[O]).fill("").map(function(C, d) {
          return _(d * m);
        });
      });
    }
    function R($, f) {
      return $.map(function(_) {
        return _.map(function(O) {
          return s(O - f);
        });
      }).map(function(_) {
        return B(_);
      }).reduce(function(_, O) {
        return _ + O;
      }, 0);
    }
    function N($, f, _, O) {
      var m = 4, C = 1, d = function() {
        var g = $.reduce(function(te, ae) {
          return te + ae.length;
        }, 0);
        $.forEach(function(te, ae) {
          return te.push(_[ae][2]);
        });
        var V = A($), X = V.reduce(function(te, ae) {
          return te + ae.length;
        }, 0), Z = V.map(function(te) {
          return B(te);
        }), c = B(Z), y = c / X, h2 = R(V, y);
        if (h2 <= O)
          return "break";
        g = l(y / O * g * 1.1);
        var P = Z.map(function(te) {
          return l(te / c * g);
        });
        $ = v(f, P), g = $.reduce(function(te, ae) {
          return te + ae.length;
        }, 0);
        var q = JSON.parse(JSON.stringify($));
        q.forEach(function(te, ae) {
          return te.push(_[ae][2]);
        }), V = A(q), X = V.reduce(function(te, ae) {
          return te + ae.length;
        }, 0), Z = V.map(function(te) {
          return B(te);
        }), c = B(Z), y = c / X;
        var K = 1 / g / 10;
        f.forEach(function(te, ae) {
          for (var oe = P[ae], ve = new Array(oe).fill("").map(function(k, L) {
            return L / P[ae];
          }), Q = 0; Q < m; Q++)
            for (var ie = A([$[ae]])[0], ce = ie.map(function(k) {
              return k - y;
            }), fe = 0, j = 0; j < oe; j++) {
              if (j === 0)
                return;
              fe += ce[j - 1], ve[j] -= K * fe, ve[j] > 1 && (ve[j] = 1), ve[j] < 0 && (ve[j] = 0), $[ae][j] = te(ve[j]);
            }
        }), m *= 4, C++;
      };
      do {
        var G = d();
        if (G === "break")
          break;
      } while (m <= 1025);
      return $ = $.reduce(function(S, g) {
        return S.concat(g);
      }, []), {
        segmentPoints: $,
        cycles: C,
        rounds: m
      };
    }
    function I($) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
      if (!$)
        return console.error("bezierCurveToPolyline: Missing parameters!"), false;
      if (!($ instanceof Array))
        return console.error("bezierCurveToPolyline: Parameter bezierCurve must be an array!"), false;
      if (typeof f != "number")
        return console.error("bezierCurveToPolyline: Parameter precision must be a number!"), false;
      var _ = W($, f), O = _.segmentPoints;
      return O;
    }
    function E($) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
      if (!$)
        return console.error("getBezierCurveLength: Missing parameters!"), false;
      if (!($ instanceof Array))
        return console.error("getBezierCurveLength: Parameter bezierCurve must be an array!"), false;
      if (typeof f != "number")
        return console.error("getBezierCurveLength: Parameter precision must be a number!"), false;
      var _ = W($, f), O = _.segmentPoints, m = A([O])[0], C = B(m);
      return C;
    }
    var b = I;
    e.default = b;
  }($r)), $r;
}
var Pr = {};
var Qn;
function Qo() {
  return Qn || (Qn = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var r = t(Ne()), n = t(Fe());
    function a(W) {
      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.25, B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
      if (!(W instanceof Array))
        return console.error("polylineToBezierCurve: Parameter polyline must be an array!"), false;
      if (W.length <= 2)
        return console.error("polylineToBezierCurve: Converting to a curve requires at least 3 points!"), false;
      var A = W[0], v = W.length - 1, R = new Array(v).fill(0).map(function(N, I) {
        return [].concat((0, n.default)(o(W, I, T, U, B)), [W[I + 1]]);
      });
      return T && l(R, A), R.unshift(W[0]), R;
    }
    function o(W, T) {
      var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.25, v = W.length;
      if (!(v < 3 || T >= v)) {
        var R = T - 1;
        R < 0 && (R = U ? v + R : 0);
        var N = T + 1;
        N >= v && (N = U ? N - v : v - 1);
        var I = T + 2;
        I >= v && (I = U ? I - v : v - 1);
        var E = W[R], b = W[T], $ = W[N], f = W[I];
        return [[b[0] + B * ($[0] - E[0]), b[1] + B * ($[1] - E[1])], [$[0] - A * (f[0] - b[0]), $[1] - A * (f[1] - b[1])]];
      }
    }
    function l(W, T) {
      var U = W[0], B = W.slice(-1)[0];
      return W.push([s(B[1], B[2]), s(U[0], T), T]), W;
    }
    function s(W, T) {
      var U = (0, r.default)(W, 2), B = U[0], A = U[1], v = (0, r.default)(T, 2), R = v[0], N = v[1], I = R - B, E = N - A;
      return [R + I, N + E];
    }
    var D = a;
    e.default = D;
  }(Pr)), Pr;
}
var Yn;
function An() {
  return Yn || (Yn = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), Object.defineProperty(e, "bezierCurveToPolyline", {
      enumerable: true,
      get: function() {
        return r.bezierCurveToPolyline;
      }
    }), Object.defineProperty(e, "getBezierCurveLength", {
      enumerable: true,
      get: function() {
        return r.getBezierCurveLength;
      }
    }), Object.defineProperty(e, "polylineToBezierCurve", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    }), e.default = void 0;
    var r = Xo(), n = t(Qo()), a = {
      bezierCurveToPolyline: r.bezierCurveToPolyline,
      getBezierCurveLength: r.getBezierCurveLength,
      polylineToBezierCurve: n.default
    };
    e.default = a;
  }(_r)), _r;
}
var wr = {};
var nr = {};
var Yo = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
  }
};
var Kn;
function ze() {
  return Kn || (Kn = 1, function(e) {
    function t(r) {
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, e.exports.__esModule = true, e.exports.default = e.exports, t(r);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  }(Yo)), nr;
}
var Jn;
function Be() {
  return Jn || (Jn = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.deepClone = B, e.eliminateBlur = A, e.checkPointIsInCircle = v, e.getTwoPointDistance = R, e.checkPointIsInPolygon = N, e.checkPointIsInSector = I, e.checkPointIsNearPolyline = b, e.checkPointIsInRect = $, e.getRotatePointPos = f, e.getScalePointPos = _, e.getTranslatePointPos = O, e.getDistanceBetweenPointAndLine = m, e.getCircleRadianPoint = C, e.getRegularPolygonPoints = d, e.default = void 0;
    var r = t(Fe()), n = t(Ne()), a = t(ze()), o = Math.abs, l = Math.sqrt, s = Math.sin, D = Math.cos, W = Math.max, T = Math.min, U = Math.PI;
    function B(S) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!S)
        return S;
      var V = JSON.parse, X = JSON.stringify;
      if (!g)
        return V(X(S));
      var Z = S instanceof Array ? [] : {};
      if (S && (0, a.default)(S) === "object")
        for (var c in S)
          S.hasOwnProperty(c) && (S[c] && (0, a.default)(S[c]) === "object" ? Z[c] = B(S[c], true) : Z[c] = S[c]);
      return Z;
    }
    function A(S) {
      return S.map(function(g) {
        var V = (0, n.default)(g, 2), X = V[0], Z = V[1];
        return [parseInt(X) + 0.5, parseInt(Z) + 0.5];
      });
    }
    function v(S, g, V, X) {
      return R(S, [g, V]) <= X;
    }
    function R(S, g) {
      var V = (0, n.default)(S, 2), X = V[0], Z = V[1], c = (0, n.default)(g, 2), y = c[0], h2 = c[1], P = o(X - y), q = o(Z - h2);
      return l(P * P + q * q);
    }
    function N(S, g) {
      for (var V = 0, X = (0, n.default)(S, 2), Z = X[0], c = X[1], y = g.length, h2 = 1, P = g[0]; h2 <= y; h2++) {
        var q = g[h2 % y];
        if (Z > T(P[0], q[0]) && Z <= W(P[0], q[0]) && c <= W(P[1], q[1]) && P[0] !== q[0]) {
          var K = (Z - P[0]) * (q[1] - P[1]) / (q[0] - P[0]) + P[1];
          (P[1] === q[1] || c <= K) && V++;
        }
        P = q;
      }
      return V % 2 === 1;
    }
    function I(S, g, V, X, Z, c, y) {
      if (!S || R(S, [g, V]) > X)
        return false;
      if (!y) {
        var h2 = B([c, Z]), P = (0, n.default)(h2, 2);
        Z = P[0], c = P[1];
      }
      var q = Z > c;
      if (q) {
        var K = [c, Z];
        Z = K[0], c = K[1];
      }
      var te = c - Z;
      if (te >= U * 2)
        return true;
      var ae = (0, n.default)(S, 2), oe = ae[0], ve = ae[1], Q = C(g, V, X, Z), ie = (0, n.default)(Q, 2), ce = ie[0], fe = ie[1], j = C(g, V, X, c), k = (0, n.default)(j, 2), L = k[0], F = k[1], H = [oe - g, ve - V], ee = [ce - g, fe - V], p = [L - g, F - V], z = te > U;
      if (z) {
        var u = B([p, ee]), x = (0, n.default)(u, 2);
        ee = x[0], p = x[1];
      }
      var w = E(ee, H) && !E(p, H);
      return z && (w = !w), q && (w = !w), w;
    }
    function E(S, g) {
      var V = (0, n.default)(S, 2), X = V[0], Z = V[1], c = (0, n.default)(g, 2), y = c[0], h2 = c[1];
      return -Z * y + X * h2 > 0;
    }
    function b(S, g, V) {
      var X = V / 2, Z = g.map(function(h2) {
        var P = (0, n.default)(h2, 2), q = P[0], K = P[1];
        return [q, K - X];
      }), c = g.map(function(h2) {
        var P = (0, n.default)(h2, 2), q = P[0], K = P[1];
        return [q, K + X];
      }), y = [].concat((0, r.default)(Z), (0, r.default)(c.reverse()));
      return N(S, y);
    }
    function $(S, g, V, X, Z) {
      var c = (0, n.default)(S, 2), y = c[0], h2 = c[1];
      return !(y < g || h2 < V || y > g + X || h2 > V + Z);
    }
    function f() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, g = arguments.length > 1 ? arguments[1] : void 0, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
      if (!g)
        return false;
      if (S % 360 === 0)
        return g;
      var X = (0, n.default)(g, 2), Z = X[0], c = X[1], y = (0, n.default)(V, 2), h2 = y[0], P = y[1];
      return S *= U / 180, [(Z - h2) * D(S) - (c - P) * s(S) + h2, (Z - h2) * s(S) + (c - P) * D(S) + P];
    }
    function _() {
      var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [1, 1], g = arguments.length > 1 ? arguments[1] : void 0, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
      if (!g)
        return false;
      if (S === 1)
        return g;
      var X = (0, n.default)(g, 2), Z = X[0], c = X[1], y = (0, n.default)(V, 2), h2 = y[0], P = y[1], q = (0, n.default)(S, 2), K = q[0], te = q[1], ae = Z - h2, oe = c - P;
      return [ae * K + h2, oe * te + P];
    }
    function O(S, g) {
      if (!S || !g)
        return false;
      var V = (0, n.default)(g, 2), X = V[0], Z = V[1], c = (0, n.default)(S, 2), y = c[0], h2 = c[1];
      return [X + y, Z + h2];
    }
    function m(S, g, V) {
      if (!S || !g || !V)
        return false;
      var X = (0, n.default)(S, 2), Z = X[0], c = X[1], y = (0, n.default)(g, 2), h2 = y[0], P = y[1], q = (0, n.default)(V, 2), K = q[0], te = q[1], ae = te - P, oe = h2 - K, ve = P * (K - h2) - h2 * (te - P), Q = o(ae * Z + oe * c + ve), ie = l(ae * ae + oe * oe);
      return Q / ie;
    }
    function C(S, g, V, X) {
      return [S + D(X) * V, g + s(X) * V];
    }
    function d(S, g, V, X) {
      var Z = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : U * -0.5, c = U * 2 / X, y = new Array(X).fill("").map(function(h2, P) {
        return P * c + Z;
      });
      return y.map(function(h2) {
        return C(S, g, V, h2);
      });
    }
    var G = {
      deepClone: B,
      eliminateBlur: A,
      checkPointIsInCircle: v,
      checkPointIsInPolygon: N,
      checkPointIsInSector: I,
      checkPointIsNearPolyline: b,
      getTwoPointDistance: R,
      getRotatePointPos: f,
      getScalePointPos: _,
      getTranslatePointPos: O,
      getCircleRadianPoint: C,
      getRegularPolygonPoints: d,
      getDistanceBetweenPointAndLine: m
    };
    e.default = G;
  }(wr)), wr;
}
var kr = {};
var Ar = {};
var Zn;
function Ko() {
  return Zn || (Zn = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.drawPolylinePath = n, e.drawBezierCurvePath = a, e.default = void 0;
    var r = t(Fe());
    function n(l, s) {
      var D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, W = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      if (!l || s.length < 2)
        return false;
      D && l.beginPath(), s.forEach(function(T, U) {
        return T && (U === 0 ? l.moveTo.apply(l, (0, r.default)(T)) : l.lineTo.apply(l, (0, r.default)(T)));
      }), W && l.closePath();
    }
    function a(l, s) {
      var D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, W = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      if (!l || !s)
        return false;
      W && l.beginPath(), D && l.moveTo.apply(l, (0, r.default)(D)), s.forEach(function(U) {
        return U && l.bezierCurveTo.apply(l, (0, r.default)(U[0]).concat((0, r.default)(U[1]), (0, r.default)(U[2])));
      }), T && l.closePath();
    }
    var o = {
      drawPolylinePath: n,
      drawBezierCurvePath: a
    };
    e.default = o;
  }(Ar)), Ar;
}
var ea;
function Sn() {
  return ea || (ea = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.extendNewGraph = _, e.default = e.text = e.bezierCurve = e.smoothline = e.polyline = e.regPolygon = e.sector = e.arc = e.ring = e.rect = e.ellipse = e.circle = void 0;
    var r = t(Fe()), n = t(Ne()), a = t(An()), o = Be(), l = Ko(), s = a.default.polylineToBezierCurve, D = a.default.bezierCurveToPolyline, W = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.rx, G = C.ry, S = C.r;
        return typeof d != "number" || typeof G != "number" || typeof S != "number" ? (console.error("Circle shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.rx, g = G.ry, V = G.r;
        d.arc(S, g, V > 0 ? V : 0.01, 0, Math.PI * 2), d.fill(), d.stroke(), d.closePath();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = d.rx, S = d.ry, g = d.r;
        return (0, o.checkPointIsInCircle)(m, G, S, g);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape;
        this.attr("shape", {
          rx: S.rx + d,
          ry: S.ry + G
        });
      }
    };
    e.circle = W;
    var T = {
      shape: {
        rx: 0,
        ry: 0,
        hr: 0,
        vr: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.rx, G = C.ry, S = C.hr, g = C.vr;
        return typeof d != "number" || typeof G != "number" || typeof S != "number" || typeof g != "number" ? (console.error("Ellipse shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.rx, g = G.ry, V = G.hr, X = G.vr;
        d.ellipse(S, g, V > 0 ? V : 0.01, X > 0 ? X : 0.01, 0, 0, Math.PI * 2), d.fill(), d.stroke(), d.closePath();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = d.rx, S = d.ry, g = d.hr, V = d.vr, X = Math.max(g, V), Z = Math.min(g, V), c = Math.sqrt(X * X - Z * Z), y = [G - c, S], h2 = [G + c, S], P = (0, o.getTwoPointDistance)(m, y) + (0, o.getTwoPointDistance)(m, h2);
        return P <= 2 * X;
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape;
        this.attr("shape", {
          rx: S.rx + d,
          ry: S.ry + G
        });
      }
    };
    e.ellipse = T;
    var U = {
      shape: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.x, G = C.y, S = C.w, g = C.h;
        return typeof d != "number" || typeof G != "number" || typeof S != "number" || typeof g != "number" ? (console.error("Rect shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.x, g = G.y, V = G.w, X = G.h;
        d.rect(S, g, V, X), d.fill(), d.stroke(), d.closePath();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = d.x, S = d.y, g = d.w, V = d.h;
        return (0, o.checkPointIsInRect)(m, G, S, g, V);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.x, g = d.y, V = d.w, X = d.h;
        G.graphCenter = [S + V / 2, g + X / 2];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape;
        this.attr("shape", {
          x: S.x + d,
          y: S.y + G
        });
      }
    };
    e.rect = U;
    var B = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.rx, G = C.ry, S = C.r;
        return typeof d != "number" || typeof G != "number" || typeof S != "number" ? (console.error("Ring shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.rx, g = G.ry, V = G.r;
        d.arc(S, g, V > 0 ? V : 0.01, 0, Math.PI * 2), d.stroke(), d.closePath();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry, V = d.r, X = G.lineWidth, Z = X / 2, c = V - Z, y = V + Z, h2 = (0, o.getTwoPointDistance)(m, [S, g]);
        return h2 >= c && h2 <= y;
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape;
        this.attr("shape", {
          rx: S.rx + d,
          ry: S.ry + G
        });
      }
    };
    e.ring = B;
    var A = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        startAngle: 0,
        endAngle: 0,
        clockWise: true
      },
      validator: function(m) {
        var C = m.shape, d = ["rx", "ry", "r", "startAngle", "endAngle"];
        return d.find(function(G) {
          return typeof C[G] != "number";
        }) ? (console.error("Arc shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.rx, g = G.ry, V = G.r, X = G.startAngle, Z = G.endAngle, c = G.clockWise;
        d.arc(S, g, V > 0 ? V : 1e-3, X, Z, !c), d.stroke(), d.closePath();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry, V = d.r, X = d.startAngle, Z = d.endAngle, c = d.clockWise, y = G.lineWidth, h2 = y / 2, P = V - h2, q = V + h2;
        return !(0, o.checkPointIsInSector)(m, S, g, P, X, Z, c) && (0, o.checkPointIsInSector)(m, S, g, q, X, Z, c);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape;
        this.attr("shape", {
          rx: S.rx + d,
          ry: S.ry + G
        });
      }
    };
    e.arc = A;
    var v = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        startAngle: 0,
        endAngle: 0,
        clockWise: true
      },
      validator: function(m) {
        var C = m.shape, d = ["rx", "ry", "r", "startAngle", "endAngle"];
        return d.find(function(G) {
          return typeof C[G] != "number";
        }) ? (console.error("Sector shape configuration is abnormal!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape;
        d.beginPath();
        var S = G.rx, g = G.ry, V = G.r, X = G.startAngle, Z = G.endAngle, c = G.clockWise;
        d.arc(S, g, V > 0 ? V : 0.01, X, Z, !c), d.lineTo(S, g), d.closePath(), d.stroke(), d.fill();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = d.rx, S = d.ry, g = d.r, V = d.startAngle, X = d.endAngle, Z = d.clockWise;
        return (0, o.checkPointIsInSector)(m, G, S, g, V, X, Z);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = S.rx, V = S.ry;
        this.attr("shape", {
          rx: g + d,
          ry: V + G
        });
      }
    };
    e.sector = v;
    var R = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        side: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.side, G = ["rx", "ry", "r", "side"];
        return G.find(function(S) {
          return typeof C[S] != "number";
        }) ? (console.error("RegPolygon shape configuration is abnormal!"), false) : d < 3 ? (console.error("RegPolygon at least trigon!"), false) : true;
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape, S = C.cache;
        d.beginPath();
        var g = G.rx, V = G.ry, X = G.r, Z = G.side;
        if (!S.points || S.rx !== g || S.ry !== V || S.r !== X || S.side !== Z) {
          var c = (0, o.getRegularPolygonPoints)(g, V, X, Z);
          Object.assign(S, {
            points: c,
            rx: g,
            ry: V,
            r: X,
            side: Z
          });
        }
        var y = S.points;
        (0, l.drawPolylinePath)(d, y), d.closePath(), d.stroke(), d.fill();
      },
      hoverCheck: function(m, C) {
        var d = C.cache, G = d.points;
        return (0, o.checkPointIsInPolygon)(m, G);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.rx, g = d.ry;
        G.graphCenter = [S, g];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = C.cache, V = S.rx, X = S.ry;
        g.rx += d, g.ry += G, this.attr("shape", {
          rx: V + d,
          ry: X + G
        }), g.points = g.points.map(function(Z) {
          var c = (0, n.default)(Z, 2), y = c[0], h2 = c[1];
          return [y + d, h2 + G];
        });
      }
    };
    e.regPolygon = R;
    var N = {
      shape: {
        points: [],
        close: false
      },
      validator: function(m) {
        var C = m.shape, d = C.points;
        return d instanceof Array ? true : (console.error("Polyline points should be an array!"), false);
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape, S = C.style.lineWidth;
        d.beginPath();
        var g = G.points, V = G.close;
        S === 1 && (g = (0, o.eliminateBlur)(g)), (0, l.drawPolylinePath)(d, g), V && (d.closePath(), d.fill()), d.stroke();
      },
      hoverCheck: function(m, C) {
        var d = C.shape, G = C.style, S = d.points, g = d.close, V = G.lineWidth;
        return g ? (0, o.checkPointIsInPolygon)(m, S) : (0, o.checkPointIsNearPolyline)(m, S, V);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.points;
        G.graphCenter = S[0];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = S.points, V = g.map(function(X) {
          var Z = (0, n.default)(X, 2), c = Z[0], y = Z[1];
          return [c + d, y + G];
        });
        this.attr("shape", {
          points: V
        });
      }
    };
    e.polyline = N;
    var I = {
      shape: {
        points: [],
        close: false
      },
      validator: function(m) {
        var C = m.shape, d = C.points;
        return d instanceof Array ? true : (console.error("Smoothline points should be an array!"), false);
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape, S = C.cache, g = G.points, V = G.close;
        if (!S.points || S.points.toString() !== g.toString()) {
          var X = s(g, V), Z = D(X);
          Object.assign(S, {
            points: (0, o.deepClone)(g, true),
            bezierCurve: X,
            hoverPoints: Z
          });
        }
        var c = S.bezierCurve;
        d.beginPath(), (0, l.drawBezierCurvePath)(d, c.slice(1), c[0]), V && (d.closePath(), d.fill()), d.stroke();
      },
      hoverCheck: function(m, C) {
        var d = C.cache, G = C.shape, S = C.style, g = d.hoverPoints, V = G.close, X = S.lineWidth;
        return V ? (0, o.checkPointIsInPolygon)(m, g) : (0, o.checkPointIsNearPolyline)(m, g, X);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.points;
        G.graphCenter = S[0];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = C.cache, V = S.points, X = V.map(function(P) {
          var q = (0, n.default)(P, 2), K = q[0], te = q[1];
          return [K + d, te + G];
        });
        g.points = X;
        var Z = (0, n.default)(g.bezierCurve[0], 2), c = Z[0], y = Z[1], h2 = g.bezierCurve.slice(1);
        g.bezierCurve = [[c + d, y + G]].concat((0, r.default)(h2.map(function(P) {
          return P.map(function(q) {
            var K = (0, n.default)(q, 2), te = K[0], ae = K[1];
            return [te + d, ae + G];
          });
        }))), g.hoverPoints = g.hoverPoints.map(function(P) {
          var q = (0, n.default)(P, 2), K = q[0], te = q[1];
          return [K + d, te + G];
        }), this.attr("shape", {
          points: X
        });
      }
    };
    e.smoothline = I;
    var E = {
      shape: {
        points: [],
        close: false
      },
      validator: function(m) {
        var C = m.shape, d = C.points;
        return d instanceof Array ? true : (console.error("BezierCurve points should be an array!"), false);
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape, S = C.cache, g = G.points, V = G.close;
        if (!S.points || S.points.toString() !== g.toString()) {
          var X = D(g, 20);
          Object.assign(S, {
            points: (0, o.deepClone)(g, true),
            hoverPoints: X
          });
        }
        d.beginPath(), (0, l.drawBezierCurvePath)(d, g.slice(1), g[0]), V && (d.closePath(), d.fill()), d.stroke();
      },
      hoverCheck: function(m, C) {
        var d = C.cache, G = C.shape, S = C.style, g = d.hoverPoints, V = G.close, X = S.lineWidth;
        return V ? (0, o.checkPointIsInPolygon)(m, g) : (0, o.checkPointIsNearPolyline)(m, g, X);
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.points;
        G.graphCenter = S[0];
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = C.cache, V = S.points, X = (0, n.default)(V[0], 2), Z = X[0], c = X[1], y = V.slice(1), h2 = [[Z + d, c + G]].concat((0, r.default)(y.map(function(P) {
          return P.map(function(q) {
            var K = (0, n.default)(q, 2), te = K[0], ae = K[1];
            return [te + d, ae + G];
          });
        })));
        g.points = h2, g.hoverPoints = g.hoverPoints.map(function(P) {
          var q = (0, n.default)(P, 2), K = q[0], te = q[1];
          return [K + d, te + G];
        }), this.attr("shape", {
          points: h2
        });
      }
    };
    e.bezierCurve = E;
    var b = {
      shape: {
        content: "",
        position: [],
        maxWidth: void 0,
        rowGap: 0
      },
      validator: function(m) {
        var C = m.shape, d = C.content, G = C.position, S = C.rowGap;
        return typeof d != "string" ? (console.error("Text content should be a string!"), false) : G instanceof Array ? typeof S != "number" ? (console.error("Text rowGap should be a number!"), false) : true : (console.error("Text position should be an array!"), false);
      },
      draw: function(m, C) {
        var d = m.ctx, G = C.shape, S = G.content, g = G.position, V = G.maxWidth, X = G.rowGap, Z = d.textBaseline, c = d.font, y = parseInt(c.replace(/\D/g, "")), h2 = g, P = (0, n.default)(h2, 2), q = P[0], K = P[1];
        S = S.split(`
`);
        var te = S.length, ae = y + X, oe = te * ae - X, ve = 0;
        Z === "middle" && (ve = oe / 2, K += y / 2), Z === "bottom" && (ve = oe, K += y), g = new Array(te).fill(0).map(function(Q, ie) {
          return [q, K + ie * ae - ve];
        }), d.beginPath(), S.forEach(function(Q, ie) {
          d.fillText.apply(d, [Q].concat((0, r.default)(g[ie]), [V])), d.strokeText.apply(d, [Q].concat((0, r.default)(g[ie]), [V]));
        }), d.closePath();
      },
      hoverCheck: function(m, C) {
        return C.shape, C.style, false;
      },
      setGraphCenter: function(m, C) {
        var d = C.shape, G = C.style, S = d.position;
        G.graphCenter = (0, r.default)(S);
      },
      move: function(m, C) {
        var d = m.movementX, G = m.movementY, S = C.shape, g = (0, n.default)(S.position, 2), V = g[0], X = g[1];
        this.attr("shape", {
          position: [V + d, X + G]
        });
      }
    };
    e.text = b;
    var $ = /* @__PURE__ */ new Map([["circle", W], ["ellipse", T], ["rect", U], ["ring", B], ["arc", A], ["sector", v], ["regPolygon", R], ["polyline", N], ["smoothline", I], ["bezierCurve", E], ["text", b]]), f = $;
    e.default = f;
    function _(O, m) {
      if (!O || !m) {
        console.error("ExtendNewGraph Missing Parameters!");
        return;
      }
      if (!m.shape) {
        console.error("Required attribute of shape to extendNewGraph!");
        return;
      }
      if (!m.validator) {
        console.error("Required function of validator to extendNewGraph!");
        return;
      }
      if (!m.draw) {
        console.error("Required function of draw to extendNewGraph!");
        return;
      }
      $.set(O, m);
    }
  }(kr)), kr;
}
var Sr = {};
var ar = {};
var Jo = {
  get exports() {
    return ar;
  },
  set exports(e) {
    ar = e;
  }
};
var ir = {};
var Zo = {
  get exports() {
    return ir;
  },
  set exports(e) {
    ir = e;
  }
};
var ta;
function el() {
  return ta || (ta = 1, function(e) {
    var t = function(r) {
      var n = Object.prototype, a = n.hasOwnProperty, o, l = typeof Symbol == "function" ? Symbol : {}, s = l.iterator || "@@iterator", D = l.asyncIterator || "@@asyncIterator", W = l.toStringTag || "@@toStringTag";
      function T(y, h2, P) {
        return Object.defineProperty(y, h2, {
          value: P,
          enumerable: true,
          configurable: true,
          writable: true
        }), y[h2];
      }
      try {
        T({}, "");
      } catch {
        T = function(h2, P, q) {
          return h2[P] = q;
        };
      }
      function U(y, h2, P, q) {
        var K = h2 && h2.prototype instanceof E ? h2 : E, te = Object.create(K.prototype), ae = new X(q || []);
        return te._invoke = G(y, P, ae), te;
      }
      r.wrap = U;
      function B(y, h2, P) {
        try {
          return { type: "normal", arg: y.call(h2, P) };
        } catch (q) {
          return { type: "throw", arg: q };
        }
      }
      var A = "suspendedStart", v = "suspendedYield", R = "executing", N = "completed", I = {};
      function E() {
      }
      function b() {
      }
      function $() {
      }
      var f = {};
      T(f, s, function() {
        return this;
      });
      var _ = Object.getPrototypeOf, O = _ && _(_(Z([])));
      O && O !== n && a.call(O, s) && (f = O);
      var m = $.prototype = E.prototype = Object.create(f);
      b.prototype = $, T(m, "constructor", $), T($, "constructor", b), b.displayName = T(
        $,
        W,
        "GeneratorFunction"
      );
      function C(y) {
        ["next", "throw", "return"].forEach(function(h2) {
          T(y, h2, function(P) {
            return this._invoke(h2, P);
          });
        });
      }
      r.isGeneratorFunction = function(y) {
        var h2 = typeof y == "function" && y.constructor;
        return h2 ? h2 === b || (h2.displayName || h2.name) === "GeneratorFunction" : false;
      }, r.mark = function(y) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(y, $) : (y.__proto__ = $, T(y, W, "GeneratorFunction")), y.prototype = Object.create(m), y;
      }, r.awrap = function(y) {
        return { __await: y };
      };
      function d(y, h2) {
        function P(te, ae, oe, ve) {
          var Q = B(y[te], y, ae);
          if (Q.type === "throw")
            ve(Q.arg);
          else {
            var ie = Q.arg, ce = ie.value;
            return ce && typeof ce == "object" && a.call(ce, "__await") ? h2.resolve(ce.__await).then(function(fe) {
              P("next", fe, oe, ve);
            }, function(fe) {
              P("throw", fe, oe, ve);
            }) : h2.resolve(ce).then(function(fe) {
              ie.value = fe, oe(ie);
            }, function(fe) {
              return P("throw", fe, oe, ve);
            });
          }
        }
        var q;
        function K(te, ae) {
          function oe() {
            return new h2(function(ve, Q) {
              P(te, ae, ve, Q);
            });
          }
          return q = q ? q.then(
            oe,
            oe
          ) : oe();
        }
        this._invoke = K;
      }
      C(d.prototype), T(d.prototype, D, function() {
        return this;
      }), r.AsyncIterator = d, r.async = function(y, h2, P, q, K) {
        K === void 0 && (K = Promise);
        var te = new d(
          U(y, h2, P, q),
          K
        );
        return r.isGeneratorFunction(h2) ? te : te.next().then(function(ae) {
          return ae.done ? ae.value : te.next();
        });
      };
      function G(y, h2, P) {
        var q = A;
        return function(te, ae) {
          if (q === R)
            throw new Error("Generator is already running");
          if (q === N) {
            if (te === "throw")
              throw ae;
            return c();
          }
          for (P.method = te, P.arg = ae; ; ) {
            var oe = P.delegate;
            if (oe) {
              var ve = S(oe, P);
              if (ve) {
                if (ve === I)
                  continue;
                return ve;
              }
            }
            if (P.method === "next")
              P.sent = P._sent = P.arg;
            else if (P.method === "throw") {
              if (q === A)
                throw q = N, P.arg;
              P.dispatchException(P.arg);
            } else
              P.method === "return" && P.abrupt("return", P.arg);
            q = R;
            var Q = B(y, h2, P);
            if (Q.type === "normal") {
              if (q = P.done ? N : v, Q.arg === I)
                continue;
              return {
                value: Q.arg,
                done: P.done
              };
            } else
              Q.type === "throw" && (q = N, P.method = "throw", P.arg = Q.arg);
          }
        };
      }
      function S(y, h2) {
        var P = y.iterator[h2.method];
        if (P === o) {
          if (h2.delegate = null, h2.method === "throw") {
            if (y.iterator.return && (h2.method = "return", h2.arg = o, S(y, h2), h2.method === "throw"))
              return I;
            h2.method = "throw", h2.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            );
          }
          return I;
        }
        var q = B(P, y.iterator, h2.arg);
        if (q.type === "throw")
          return h2.method = "throw", h2.arg = q.arg, h2.delegate = null, I;
        var K = q.arg;
        if (!K)
          return h2.method = "throw", h2.arg = new TypeError("iterator result is not an object"), h2.delegate = null, I;
        if (K.done)
          h2[y.resultName] = K.value, h2.next = y.nextLoc, h2.method !== "return" && (h2.method = "next", h2.arg = o);
        else
          return K;
        return h2.delegate = null, I;
      }
      C(m), T(m, W, "Generator"), T(m, s, function() {
        return this;
      }), T(m, "toString", function() {
        return "[object Generator]";
      });
      function g(y) {
        var h2 = { tryLoc: y[0] };
        1 in y && (h2.catchLoc = y[1]), 2 in y && (h2.finallyLoc = y[2], h2.afterLoc = y[3]), this.tryEntries.push(h2);
      }
      function V(y) {
        var h2 = y.completion || {};
        h2.type = "normal", delete h2.arg, y.completion = h2;
      }
      function X(y) {
        this.tryEntries = [{ tryLoc: "root" }], y.forEach(g, this), this.reset(true);
      }
      r.keys = function(y) {
        var h2 = [];
        for (var P in y)
          h2.push(P);
        return h2.reverse(), function q() {
          for (; h2.length; ) {
            var K = h2.pop();
            if (K in y)
              return q.value = K, q.done = false, q;
          }
          return q.done = true, q;
        };
      };
      function Z(y) {
        if (y) {
          var h2 = y[s];
          if (h2)
            return h2.call(y);
          if (typeof y.next == "function")
            return y;
          if (!isNaN(y.length)) {
            var P = -1, q = function K() {
              for (; ++P < y.length; )
                if (a.call(y, P))
                  return K.value = y[P], K.done = false, K;
              return K.value = o, K.done = true, K;
            };
            return q.next = q;
          }
        }
        return { next: c };
      }
      r.values = Z;
      function c() {
        return { value: o, done: true };
      }
      return X.prototype = {
        constructor: X,
        reset: function(y) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = o, this.done = false, this.delegate = null, this.method = "next", this.arg = o, this.tryEntries.forEach(V), !y)
            for (var h2 in this)
              h2.charAt(0) === "t" && a.call(this, h2) && !isNaN(+h2.slice(1)) && (this[h2] = o);
        },
        stop: function() {
          this.done = true;
          var y = this.tryEntries[0], h2 = y.completion;
          if (h2.type === "throw")
            throw h2.arg;
          return this.rval;
        },
        dispatchException: function(y) {
          if (this.done)
            throw y;
          var h2 = this;
          function P(ve, Q) {
            return te.type = "throw", te.arg = y, h2.next = ve, Q && (h2.method = "next", h2.arg = o), !!Q;
          }
          for (var q = this.tryEntries.length - 1; q >= 0; --q) {
            var K = this.tryEntries[q], te = K.completion;
            if (K.tryLoc === "root")
              return P("end");
            if (K.tryLoc <= this.prev) {
              var ae = a.call(K, "catchLoc"), oe = a.call(K, "finallyLoc");
              if (ae && oe) {
                if (this.prev < K.catchLoc)
                  return P(K.catchLoc, true);
                if (this.prev < K.finallyLoc)
                  return P(K.finallyLoc);
              } else if (ae) {
                if (this.prev < K.catchLoc)
                  return P(K.catchLoc, true);
              } else if (oe) {
                if (this.prev < K.finallyLoc)
                  return P(K.finallyLoc);
              } else
                throw new Error("try statement without catch or finally");
            }
          }
        },
        abrupt: function(y, h2) {
          for (var P = this.tryEntries.length - 1; P >= 0; --P) {
            var q = this.tryEntries[P];
            if (q.tryLoc <= this.prev && a.call(q, "finallyLoc") && this.prev < q.finallyLoc) {
              var K = q;
              break;
            }
          }
          K && (y === "break" || y === "continue") && K.tryLoc <= h2 && h2 <= K.finallyLoc && (K = null);
          var te = K ? K.completion : {};
          return te.type = y, te.arg = h2, K ? (this.method = "next", this.next = K.finallyLoc, I) : this.complete(te);
        },
        complete: function(y, h2) {
          if (y.type === "throw")
            throw y.arg;
          return y.type === "break" || y.type === "continue" ? this.next = y.arg : y.type === "return" ? (this.rval = this.arg = y.arg, this.method = "return", this.next = "end") : y.type === "normal" && h2 && (this.next = h2), I;
        },
        finish: function(y) {
          for (var h2 = this.tryEntries.length - 1; h2 >= 0; --h2) {
            var P = this.tryEntries[h2];
            if (P.finallyLoc === y)
              return this.complete(P.completion, P.afterLoc), V(P), I;
          }
        },
        catch: function(y) {
          for (var h2 = this.tryEntries.length - 1; h2 >= 0; --h2) {
            var P = this.tryEntries[h2];
            if (P.tryLoc === y) {
              var q = P.completion;
              if (q.type === "throw") {
                var K = q.arg;
                V(P);
              }
              return K;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(y, h2, P) {
          return this.delegate = {
            iterator: Z(y),
            resultName: h2,
            nextLoc: P
          }, this.method === "next" && (this.arg = o), I;
        }
      }, r;
    }(
      e.exports
    );
    try {
      regeneratorRuntime = t;
    } catch {
      typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
    }
  }(Zo)), ir;
}
var ra;
function tl() {
  return ra || (ra = 1, function(e) {
    e.exports = el();
  }(Jo)), ar;
}
var or = {};
var rl = {
  get exports() {
    return or;
  },
  set exports(e) {
    or = e;
  }
};
var na;
function nl() {
  return na || (na = 1, function(e) {
    function t(n, a, o, l, s, D, W) {
      try {
        var T = n[D](W), U = T.value;
      } catch (B) {
        o(B);
        return;
      }
      T.done ? a(U) : Promise.resolve(U).then(l, s);
    }
    function r(n) {
      return function() {
        var a = this, o = arguments;
        return new Promise(function(l, s) {
          var D = n.apply(a, o);
          function W(U) {
            t(D, l, s, W, T, "next", U);
          }
          function T(U) {
            t(D, l, s, W, T, "throw", U);
          }
          W(void 0);
        });
      };
    }
    e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
  }(rl)), or;
}
var Lr = {};
var aa;
function al() {
  return aa || (aa = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var r = t(Fe()), n = t(wt()), a = At, o = Be(), l = function A(v) {
      (0, n.default)(this, A), this.colorProcessor(v);
      var R = {
        fill: [0, 0, 0, 1],
        stroke: [0, 0, 0, 0],
        opacity: 1,
        lineCap: null,
        lineJoin: null,
        lineDash: null,
        lineDashOffset: null,
        shadowBlur: 0,
        shadowColor: [0, 0, 0, 0],
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 0,
        graphCenter: null,
        scale: null,
        rotate: null,
        translate: null,
        hoverCursor: "pointer",
        fontStyle: "normal",
        fontVarient: "normal",
        fontWeight: "normal",
        fontSize: 10,
        fontFamily: "Arial",
        textAlign: "center",
        textBaseline: "middle",
        gradientColor: null,
        gradientType: "linear",
        gradientParams: null,
        gradientWith: "stroke",
        gradientStops: "auto",
        colors: null
      };
      Object.assign(this, R, v);
    };
    e.default = l, l.prototype.colorProcessor = function(A) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, R = v ? a.getColorFromRgbValue : a.getRgbaValue, N = ["fill", "stroke", "shadowColor"], I = Object.keys(A), E = I.filter(function(_) {
        return N.find(function(O) {
          return O === _;
        });
      });
      E.forEach(function(_) {
        return A[_] = R(A[_]);
      });
      var b = A.gradientColor, $ = A.colors;
      if (b && (A.gradientColor = b.map(function(_) {
        return R(_);
      })), $) {
        var f = Object.keys($);
        f.forEach(function(_) {
          return $[_] = R($[_]);
        });
      }
    }, l.prototype.initStyle = function(A) {
      s(A, this), W(A, this), T(A, this);
    };
    function s(A, v) {
      A.save();
      var R = v.graphCenter, N = v.rotate, I = v.scale, E = v.translate;
      R instanceof Array && (A.translate.apply(A, (0, r.default)(R)), N && A.rotate(N * Math.PI / 180), I instanceof Array && A.scale.apply(A, (0, r.default)(I)), E && A.translate.apply(A, (0, r.default)(E)), A.translate(-R[0], -R[1]));
    }
    var D = ["lineCap", "lineJoin", "lineDashOffset", "shadowOffsetX", "shadowOffsetY", "lineWidth", "textAlign", "textBaseline"];
    function W(A, v) {
      var R = v.fill, N = v.stroke, I = v.shadowColor, E = v.opacity;
      D.forEach(function(d) {
        (d || typeof d == "number") && (A[d] = v[d]);
      }), R = (0, r.default)(R), N = (0, r.default)(N), I = (0, r.default)(I), R[3] *= E, N[3] *= E, I[3] *= E, A.fillStyle = (0, a.getColorFromRgbValue)(R), A.strokeStyle = (0, a.getColorFromRgbValue)(N), A.shadowColor = (0, a.getColorFromRgbValue)(I);
      var b = v.lineDash, $ = v.shadowBlur;
      b && (b = b.map(function(d) {
        return d >= 0 ? d : 0;
      }), A.setLineDash(b)), typeof $ == "number" && (A.shadowBlur = $ > 0 ? $ : 1e-3);
      var f = v.fontStyle, _ = v.fontVarient, O = v.fontWeight, m = v.fontSize, C = v.fontFamily;
      A.font = f + " " + _ + " " + O + " " + m + "px " + C;
    }
    function T(A, v) {
      if (U(v)) {
        var R = v.gradientColor, N = v.gradientParams, I = v.gradientType, E = v.gradientWith, b = v.gradientStops, $ = v.opacity;
        R = R.map(function(_) {
          var O = _[3] * $, m = (0, r.default)(_);
          return m[3] = O, m;
        }), R = R.map(function(_) {
          return (0, a.getColorFromRgbValue)(_);
        }), b === "auto" && (b = B(R));
        var f = A["create".concat(I.slice(0, 1).toUpperCase() + I.slice(1), "Gradient")].apply(A, (0, r.default)(N));
        b.forEach(function(_, O) {
          return f.addColorStop(_, R[O]);
        }), A["".concat(E, "Style")] = f;
      }
    }
    function U(A) {
      var v = A.gradientColor, R = A.gradientParams, N = A.gradientType, I = A.gradientWith, E = A.gradientStops;
      if (!v || !R)
        return false;
      if (v.length === 1)
        return console.warn("The gradient needs to provide at least two colors"), false;
      if (N !== "linear" && N !== "radial")
        return console.warn("GradientType only supports linear or radial, current value is " + N), false;
      var b = R.length;
      return N === "linear" && b !== 4 || N === "radial" && b !== 6 ? (console.warn("The expected length of gradientParams is " + (N === "linear" ? "4" : "6")), false) : I !== "fill" && I !== "stroke" ? (console.warn("GradientWith only supports fill or stroke, current value is " + I), false) : E !== "auto" && !(E instanceof Array) ? (console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + E), false) : true;
    }
    function B(A) {
      var v = 1 / (A.length - 1);
      return A.map(function(R, N) {
        return v * N;
      });
    }
    l.prototype.restoreTransform = function(A) {
      A.restore();
    }, l.prototype.update = function(A) {
      this.colorProcessor(A), Object.assign(this, A);
    }, l.prototype.getStyle = function() {
      var A = (0, o.deepClone)(this, true);
      return this.colorProcessor(A, true), A;
    };
  }(Lr)), Lr;
}
var Or = {};
var Gr = {};
var ia;
function il() {
  return ia || (ia = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = e.easeInOutBounce = e.easeOutBounce = e.easeInBounce = e.easeInOutElastic = e.easeOutElastic = e.easeInElastic = e.easeInOutBack = e.easeOutBack = e.easeInBack = e.easeInOutQuint = e.easeOutQuint = e.easeInQuint = e.easeInOutQuart = e.easeOutQuart = e.easeInQuart = e.easeInOutCubic = e.easeOutCubic = e.easeInCubic = e.easeInOutQuad = e.easeOutQuad = e.easeInQuad = e.easeInOutSine = e.easeOutSine = e.easeInSine = e.linear = void 0;
    var t = [[[0, 1], "", [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
    e.linear = t;
    var r = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.88, 0.196]], [[1, 0]]];
    e.easeInSine = r;
    var n = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
    e.easeOutSine = n;
    var a = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
    e.easeInOutSine = a;
    var o = [[[0, 1]], [[0.55, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
    e.easeInQuad = o;
    var l = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.76, 0.04]], [[1, 0]]];
    e.easeOutQuad = l;
    var s = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
    e.easeInOutQuad = s;
    var D = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
    e.easeInCubic = D;
    var W = [[[0, 1]], [[0.321, 0.312], [8e-3, 0.616], [0.634, 8e-3]], [[1, 0]]];
    e.easeOutCubic = W;
    var T = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
    e.easeInOutCubic = T;
    var U = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
    e.easeInQuart = U;
    var B = [[[0, 1]], [[0.152, 0.244], [1e-3, 0.448], [0.285, -0.02]], [[1, 0]]];
    e.easeOutQuart = B;
    var A = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
    e.easeInOutQuart = A;
    var v = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
    e.easeInQuint = v;
    var R = [[[0, 1]], [[0.108, 0.2], [1e-3, 0.4], [0.214, -0.012]], [[1, 0]]];
    e.easeOutQuint = R;
    var N = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
    e.easeInOutQuint = N;
    var I = [[[0, 1]], [[0.667, 0.896], [0.38, 1.184], [0.955, 0.616]], [[1, 0]]];
    e.easeInBack = I;
    var E = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
    e.easeOutBack = E;
    var b = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
    e.easeInOutBack = b;
    var $ = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.77, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
    e.easeInElastic = $;
    var f = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.11, 0.06], [0.256, 0.08]], [[0.31, -0.076], [0.26, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -4e-3]], [[1, 0]]];
    e.easeOutElastic = f;
    var _ = [[[0, 1]], [[0.21, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
    e.easeInOutElastic = _;
    var O = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.6, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
    e.easeInBounce = O;
    var m = [[[0, 1]], [[0.357, 4e-3], [0.27, 0.592], [0.376, 0.252]], [[0.604, -4e-3], [0.548, 0.312], [0.669, 0.184]], [[0.82, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
    e.easeOutBounce = m;
    var C = [[[0, 1]], [[0.102, 1], [0.05, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.48, 0.292]], [[0.635, 4e-3], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.76, 0.2], [0.795, 0.144]], [[0.905, -4e-3], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
    e.easeInOutBounce = C;
    var d = /* @__PURE__ */ new Map([["linear", t], ["easeInSine", r], ["easeOutSine", n], ["easeInOutSine", a], ["easeInQuad", o], ["easeOutQuad", l], ["easeInOutQuad", s], ["easeInCubic", D], ["easeOutCubic", W], ["easeInOutCubic", T], ["easeInQuart", U], ["easeOutQuart", B], ["easeInOutQuart", A], ["easeInQuint", v], ["easeOutQuint", R], ["easeInOutQuint", N], ["easeInBack", I], ["easeOutBack", E], ["easeInOutBack", b], ["easeInElastic", $], ["easeOutElastic", f], ["easeInOutElastic", _], ["easeInBounce", O], ["easeOutBounce", m], ["easeInOutBounce", C]]);
    e.default = d;
  }(Gr)), Gr;
}
var oa;
function ol() {
  return oa || (oa = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.transition = l, e.injectNewCurve = b, e.default = void 0;
    var r = t(Ne()), n = t(ze()), a = t(il()), o = "linear";
    function l(f) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30, C = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      if (!s.apply(void 0, arguments))
        return false;
      try {
        var d = D(f), G = W(d, m);
        return !C || typeof O == "number" ? v(_, O, G) : E(_, O, G);
      } catch {
        return console.warn("Transition parameter may be abnormal!"), [O];
      }
    }
    function s(f) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30;
      if (!f || _ === false || O === false || !m)
        return console.error("transition: Missing Parameters!"), false;
      if ((0, n.default)(_) !== (0, n.default)(O))
        return console.error("transition: Inconsistent Status Types!"), false;
      var C = (0, n.default)(O);
      return C === "string" || C === "boolean" || !f.length ? (console.error("transition: Unsupported Data Type of State!"), false) : (!a.default.has(f) && !(f instanceof Array) && console.warn("transition: Transition curve not found, default curve will be used!"), true);
    }
    function D(f) {
      var _ = "";
      return a.default.has(f) ? _ = a.default.get(f) : f instanceof Array ? _ = f : _ = a.default.get(o), _;
    }
    function W(f, _) {
      var O = 1 / (_ - 1), m = new Array(_).fill(0).map(function(d, G) {
        return G * O;
      }), C = m.map(function(d) {
        return T(f, d);
      });
      return C;
    }
    function T(f, _) {
      var O = U(f, _), m = B(O, _);
      return A(O, m);
    }
    function U(f, _) {
      var O = f.length - 1, m = "", C = "";
      f.findIndex(function(V, X) {
        if (X !== O) {
          m = V, C = f[X + 1];
          var Z = m[0][0], c = C[0][0];
          return _ >= Z && _ < c;
        }
      });
      var d = m[0], G = m[2] || m[0], S = C[1] || C[0], g = C[0];
      return [d, G, S, g];
    }
    function B(f, _) {
      var O = f[0][0], m = f[3][0], C = m - O, d = _ - O;
      return d / C;
    }
    function A(f, _) {
      var O = (0, r.default)(f, 4), m = (0, r.default)(O[0], 2), C = m[1], d = (0, r.default)(O[1], 2), G = d[1], S = (0, r.default)(O[2], 2), g = S[1], V = (0, r.default)(O[3], 2), X = V[1], Z = Math.pow, c = 1 - _, y = C * Z(c, 3), h2 = 3 * G * _ * Z(c, 2), P = 3 * g * Z(_, 2) * c, q = X * Z(_, 3);
      return 1 - (y + h2 + P + q);
    }
    function v(f, _, O) {
      var m = "object";
      return typeof f == "number" && (m = "number"), f instanceof Array && (m = "array"), m === "number" ? R(f, _, O) : m === "array" ? N(f, _, O) : m === "object" ? I(f, _, O) : O.map(function(C) {
        return _;
      });
    }
    function R(f, _, O) {
      var m = _ - f;
      return O.map(function(C) {
        return f + m * C;
      });
    }
    function N(f, _, O) {
      var m = _.map(function(C, d) {
        return typeof C != "number" ? false : C - f[d];
      });
      return O.map(function(C) {
        return m.map(function(d, G) {
          return d === false ? _[G] : f[G] + d * C;
        });
      });
    }
    function I(f, _, O) {
      var m = Object.keys(_), C = m.map(function(S) {
        return f[S];
      }), d = m.map(function(S) {
        return _[S];
      }), G = N(C, d, O);
      return G.map(function(S) {
        var g = {};
        return S.forEach(function(V, X) {
          return g[m[X]] = V;
        }), g;
      });
    }
    function E(f, _, O) {
      var m = v(f, _, O), C = function(g) {
        var V = f[g], X = _[g];
        if ((0, n.default)(X) !== "object")
          return "continue";
        var Z = E(V, X, O);
        m.forEach(function(c, y) {
          return c[g] = Z[y];
        });
      };
      for (var d in _)
        var G = C(d);
      return m;
    }
    function b(f, _) {
      if (!f || !_) {
        console.error("InjectNewCurve Missing Parameters!");
        return;
      }
      a.default.set(f, _);
    }
    var $ = l;
    e.default = $;
  }(Or)), Or;
}
var la;
function ll() {
  return la || (la = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var r = t(tl()), n = t(nl()), a = t(ze()), o = t(Fe()), l = t(wt()), s = t(al()), D = t(ol()), W = Be(), T = function B(A, v) {
      (0, l.default)(this, B), v = (0, W.deepClone)(v, true);
      var R = {
        visible: true,
        drag: false,
        hover: false,
        index: 1,
        animationDelay: 0,
        animationFrame: 30,
        animationCurve: "linear",
        animationPause: false,
        hoverRect: null,
        mouseEnter: null,
        mouseOuter: null,
        click: null
      }, N = {
        status: "static",
        animationRoot: [],
        animationKeys: [],
        animationFrameState: [],
        cache: {}
      };
      v.shape || (v.shape = {}), v.style || (v.style = {});
      var I = Object.assign({}, A.shape, v.shape);
      Object.assign(R, v, N), Object.assign(this, A, R), this.shape = I, this.style = new s.default(v.style), this.addedProcessor();
    };
    e.default = T, T.prototype.addedProcessor = function() {
      typeof this.setGraphCenter == "function" && this.setGraphCenter(null, this), typeof this.added == "function" && this.added(this);
    }, T.prototype.drawProcessor = function(B, A) {
      var v = B.ctx;
      A.style.initStyle(v), typeof this.beforeDraw == "function" && this.beforeDraw(this, B), A.draw(B, A), typeof this.drawed == "function" && this.drawed(this, B), A.style.restoreTransform(v);
    }, T.prototype.hoverCheckProcessor = function(B, A) {
      var v = A.hoverRect, R = A.style, N = A.hoverCheck, I = R.graphCenter, E = R.rotate, b = R.scale, $ = R.translate;
      return I && (E && (B = (0, W.getRotatePointPos)(-E, B, I)), b && (B = (0, W.getScalePointPos)(b.map(function(f) {
        return 1 / f;
      }), B, I)), $ && (B = (0, W.getTranslatePointPos)($.map(function(f) {
        return f * -1;
      }), B))), v ? W.checkPointIsInRect.apply(void 0, [B].concat((0, o.default)(v))) : N(B, this);
    }, T.prototype.moveProcessor = function(B) {
      this.move(B, this), typeof this.beforeMove == "function" && this.beforeMove(B, this), typeof this.setGraphCenter == "function" && this.setGraphCenter(B, this), typeof this.moved == "function" && this.moved(B, this);
    }, T.prototype.attr = function(B) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      if (!B || A === void 0)
        return false;
      var v = (0, a.default)(this[B]) === "object";
      v && (A = (0, W.deepClone)(A, true));
      var R = this.render;
      B === "style" ? this.style.update(A) : v ? Object.assign(this[B], A) : this[B] = A, B === "index" && R.sortGraphsByIndex(), R.drawAllGraph();
    }, T.prototype.animation = function() {
      var B = (0, n.default)(
        r.default.mark(function A(v, R) {
          var N, I, E, b, $, f, _, O, m, C = arguments;
          return r.default.wrap(function(G) {
            for (; ; )
              switch (G.prev = G.next) {
                case 0:
                  if (N = C.length > 2 && C[2] !== void 0 ? C[2] : false, !(v !== "shape" && v !== "style")) {
                    G.next = 4;
                    break;
                  }
                  return console.error("Only supported shape and style animation!"), G.abrupt("return");
                case 4:
                  if (R = (0, W.deepClone)(R, true), v === "style" && this.style.colorProcessor(R), I = this[v], E = Object.keys(R), b = {}, E.forEach(function(S) {
                    return b[S] = I[S];
                  }), $ = this.animationFrame, f = this.animationCurve, _ = this.animationDelay, O = (0, D.default)(f, b, R, $, true), this.animationRoot.push(I), this.animationKeys.push(E), this.animationFrameState.push(O), !N) {
                    G.next = 17;
                    break;
                  }
                  return G.abrupt("return");
                case 17:
                  if (!(_ > 0)) {
                    G.next = 20;
                    break;
                  }
                  return G.next = 20, U(_);
                case 20:
                  return m = this.render, G.abrupt("return", new Promise(
                    function() {
                      var S = (0, n.default)(
                        r.default.mark(function g(V) {
                          return r.default.wrap(function(Z) {
                            for (; ; )
                              switch (Z.prev = Z.next) {
                                case 0:
                                  return Z.next = 2, m.launchAnimation();
                                case 2:
                                  V();
                                case 3:
                                case "end":
                                  return Z.stop();
                              }
                          }, g);
                        })
                      );
                      return function(g) {
                        return S.apply(this, arguments);
                      };
                    }()
                  ));
                case 22:
                case "end":
                  return G.stop();
              }
          }, A, this);
        })
      );
      return function(A, v) {
        return B.apply(this, arguments);
      };
    }(), T.prototype.turnNextAnimationFrame = function(B) {
      var A = this.animationDelay, v = this.animationRoot, R = this.animationKeys, N = this.animationFrameState, I = this.animationPause;
      I || Date.now() - B < A || (v.forEach(function(E, b) {
        R[b].forEach(function($) {
          E[$] = N[b][0][$];
        });
      }), N.forEach(function(E, b) {
        E.shift();
        var $ = E.length === 0;
        $ && (v[b] = null), $ && (R[b] = null);
      }), this.animationFrameState = N.filter(function(E) {
        return E.length;
      }), this.animationRoot = v.filter(function(E) {
        return E;
      }), this.animationKeys = R.filter(function(E) {
        return E;
      }));
    }, T.prototype.animationEnd = function() {
      var B = this.animationFrameState, A = this.animationKeys, v = this.animationRoot, R = this.render;
      return v.forEach(function(N, I) {
        var E = A[I], b = B[I].pop();
        E.forEach(function($) {
          return N[$] = b[$];
        });
      }), this.animationFrameState = [], this.animationKeys = [], this.animationRoot = [], R.drawAllGraph();
    }, T.prototype.pauseAnimation = function() {
      this.attr("animationPause", true);
    }, T.prototype.playAnimation = function() {
      var B = this.render;
      return this.attr("animationPause", false), new Promise(
        function() {
          var A = (0, n.default)(
            r.default.mark(function v(R) {
              return r.default.wrap(function(I) {
                for (; ; )
                  switch (I.prev = I.next) {
                    case 0:
                      return I.next = 2, B.launchAnimation();
                    case 2:
                      R();
                    case 3:
                    case "end":
                      return I.stop();
                  }
              }, v);
            })
          );
          return function(v) {
            return A.apply(this, arguments);
          };
        }()
      );
    }, T.prototype.delProcessor = function(B) {
      var A = this, v = B.graphs, R = v.findIndex(function(N) {
        return N === A;
      });
      R !== -1 && (typeof this.beforeDelete == "function" && this.beforeDelete(this), v.splice(R, 1, null), typeof this.deleted == "function" && this.deleted(this));
    };
    function U(B) {
      return new Promise(function(A) {
        setTimeout(A, B);
      });
    }
  }(Sr)), Sr;
}
var sa;
function sl() {
  return sa || (sa = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var r = t(Ue()), n = t(Fe()), a = t(wt()), o = t(At), l = t(An()), s = Be(), D = t(Sn()), W = t(ll());
    function T(E, b) {
      var $ = Object.keys(E);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(E);
        b && (f = f.filter(function(_) {
          return Object.getOwnPropertyDescriptor(E, _).enumerable;
        })), $.push.apply($, f);
      }
      return $;
    }
    function U(E) {
      for (var b = 1; b < arguments.length; b++) {
        var $ = arguments[b] != null ? arguments[b] : {};
        b % 2 ? T($, true).forEach(function(f) {
          (0, r.default)(E, f, $[f]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors($)) : T($).forEach(function(f) {
          Object.defineProperty(E, f, Object.getOwnPropertyDescriptor($, f));
        });
      }
      return E;
    }
    var B = function E(b) {
      if ((0, a.default)(this, E), !b) {
        console.error("CRender Missing parameters!");
        return;
      }
      var $ = b.getContext("2d"), f = b.clientWidth, _ = b.clientHeight, O = [f, _];
      b.setAttribute("width", f), b.setAttribute("height", _), this.ctx = $, this.area = O, this.animationStatus = false, this.graphs = [], this.color = o.default, this.bezierCurve = l.default, b.addEventListener("mousedown", R.bind(this)), b.addEventListener("mousemove", N.bind(this)), b.addEventListener("mouseup", I.bind(this));
    };
    e.default = B, B.prototype.clearArea = function() {
      var E, b = this.area;
      (E = this.ctx).clearRect.apply(E, [0, 0].concat((0, n.default)(b)));
    }, B.prototype.add = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = E.name;
      if (!b) {
        console.error("add Missing parameters!");
        return;
      }
      var $ = D.default.get(b);
      if (!$) {
        console.warn("No corresponding graph configuration found!");
        return;
      }
      var f = new W.default($, E);
      if (f.validator(f))
        return f.render = this, this.graphs.push(f), this.sortGraphsByIndex(), this.drawAllGraph(), f;
    }, B.prototype.sortGraphsByIndex = function() {
      var E = this.graphs;
      E.sort(function(b, $) {
        if (b.index > $.index)
          return 1;
        if (b.index === $.index)
          return 0;
        if (b.index < $.index)
          return -1;
      });
    }, B.prototype.delGraph = function(E) {
      typeof E.delProcessor == "function" && (E.delProcessor(this), this.graphs = this.graphs.filter(function(b) {
        return b;
      }), this.drawAllGraph());
    }, B.prototype.delAllGraph = function() {
      var E = this;
      this.graphs.forEach(function(b) {
        return b.delProcessor(E);
      }), this.graphs = this.graphs.filter(function(b) {
        return b;
      }), this.drawAllGraph();
    }, B.prototype.drawAllGraph = function() {
      var E = this;
      this.clearArea(), this.graphs.filter(function(b) {
        return b && b.visible;
      }).forEach(function(b) {
        return b.drawProcessor(E, b);
      });
    }, B.prototype.launchAnimation = function() {
      var E = this, b = this.animationStatus;
      if (!b)
        return this.animationStatus = true, new Promise(function($) {
          A.call(E, function() {
            E.animationStatus = false, $();
          }, Date.now());
        });
    };
    function A(E, b) {
      var $ = this.graphs;
      if (!v($)) {
        E();
        return;
      }
      $.forEach(function(f) {
        return f.turnNextAnimationFrame(b);
      }), this.drawAllGraph(), requestAnimationFrame(A.bind(this, E, b));
    }
    function v(E) {
      return E.find(function(b) {
        return !b.animationPause && b.animationFrameState.length;
      });
    }
    function R(E) {
      var b = this.graphs, $ = b.find(function(f) {
        return f.status === "hover";
      });
      $ && ($.status = "active");
    }
    function N(E) {
      var b = E.offsetX, $ = E.offsetY, f = [b, $], _ = this.graphs, O = _.find(function(g) {
        return g.status === "active" || g.status === "drag";
      });
      if (O) {
        if (!O.drag)
          return;
        if (typeof O.move != "function") {
          console.error("No move method is provided, cannot be dragged!");
          return;
        }
        O.moveProcessor(E), O.status = "drag";
        return;
      }
      var m = _.find(function(g) {
        return g.status === "hover";
      }), C = _.filter(function(g) {
        return g.hover && (typeof g.hoverCheck == "function" || g.hoverRect);
      }), d = C.find(function(g) {
        return g.hoverCheckProcessor(f, g);
      });
      d ? document.body.style.cursor = d.style.hoverCursor : document.body.style.cursor = "default";
      var G = false, S = false;
      if (m && (G = typeof m.mouseOuter == "function"), d && (S = typeof d.mouseEnter == "function"), !(!d && !m)) {
        if (!d && m) {
          G && m.mouseOuter(E, m), m.status = "static";
          return;
        }
        if (!(d && d === m)) {
          if (d && !m) {
            S && d.mouseEnter(E, d), d.status = "hover";
            return;
          }
          d && m && d !== m && (G && m.mouseOuter(E, m), m.status = "static", S && d.mouseEnter(E, d), d.status = "hover");
        }
      }
    }
    function I(E) {
      var b = this.graphs, $ = b.find(function(_) {
        return _.status === "active";
      }), f = b.find(function(_) {
        return _.status === "drag";
      });
      $ && typeof $.click == "function" && $.click(E, $), b.forEach(function(_) {
        return _ && (_.status = "static");
      }), $ && ($.status = "hover"), f && (f.status = "hover");
    }
    B.prototype.clone = function(E) {
      var b = E.style.getStyle(), $ = U({}, E, {
        style: b
      });
      return delete $.render, $ = (0, s.deepClone)($, true), this.add($);
    };
  }(Cr)), Cr;
}
(function(e) {
  var t = Pe;
  Object.defineProperty(e, "__esModule", {
    value: true
  }), Object.defineProperty(e, "CRender", {
    enumerable: true,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(e, "extendNewGraph", {
    enumerable: true,
    get: function() {
      return n.extendNewGraph;
    }
  }), e.default = void 0;
  var r = t(sl()), n = Sn(), a = r.default;
  e.default = a;
})(fr);
var ui = ti(fr);
var ul = { class: "dv-water-pond-level" };
var cl = { key: 0 };
var fl = ["id"];
var dl = ["offset", "stop-color"];
var hl = ["stroke", "fill", "x", "y"];
var vl = ["cx", "cy", "rx", "ry", "stroke"];
var pl = ["rx", "ry", "width", "height", "stroke"];
var gl = {
  __name: "index",
  props: {
    config: Object,
    default: () => ({})
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), a = reactive({
      gradientId: `water-level-pond-${r}`,
      defaultConfig: {
        data: [],
        shape: "rect",
        waveNum: 3,
        waveHeight: 40,
        waveOpacity: 0.4,
        colors: ["#3DE7C9", "#00BAFF"],
        formatter: "{value}%"
      },
      mergedConfig: {},
      renderer: null,
      svgBorderGradient: [],
      details: "",
      waves: [],
      animation: false
    }), o = computed(() => {
      const { shape: b } = a.mergedConfig;
      return b === "round" ? "50%" : b === "rect" ? "0" : b === "roundRect" ? "10px" : "0";
    }), l = computed(() => {
      const { shape: b } = a.mergedConfig;
      return b || "rect";
    });
    watch(() => t.config, () => {
      a.renderer.delAllGraph(), a.waves = [], setTimeout(W, 0);
    }, {
      deep: true
    }), onMounted(() => {
      s();
    }), onBeforeUnmount(() => {
      a.renderer.delAllGraph(), a.waves = [];
    });
    function s() {
      D(), t.config && W();
    }
    function D() {
      a.renderer = new ui(n.value);
    }
    function W() {
      T(), U(), B(), A(), E();
    }
    function T() {
      a.mergedConfig = xe(_e(a.defaultConfig, true), t.config);
    }
    function U() {
      const { colors: b } = a.mergedConfig, f = 100 / (b.length - 1);
      a.svgBorderGradient = b.map((_, O) => [f * O, _]);
    }
    function B() {
      const { data: b, formatter: $ } = a.mergedConfig;
      if (!b.length) {
        a.details = "";
        return;
      }
      const f = Math.max(...b);
      a.details = $.replace("{value}", f);
    }
    function A() {
      const b = v(), $ = N();
      a.waves = b.map((f) => a.renderer.add({
        name: "smoothline",
        animationFrame: 300,
        shape: f,
        style: $,
        drawed: I
      }));
    }
    function v() {
      const { waveNum: b, waveHeight: $, data: f } = a.mergedConfig, [_, O] = a.renderer.area, m = b * 4 + 4, C = _ / b / 2;
      return f.map((d) => {
        let G = new Array(m).fill(0).map((S, g) => {
          const V = _ - C * g, X = (1 - d / 100) * O, Z = g % 2 === 0 ? X : X - $;
          return [V, Z];
        });
        return G = G.map((S) => R(S, [C * 2, 0])), { points: G };
      });
    }
    function R([b, $], [f, _]) {
      return [b + f, $ + _];
    }
    function N() {
      const b = a.renderer.area[1];
      return {
        gradientColor: a.mergedConfig.colors,
        gradientType: "linear",
        gradientParams: [0, 0, 0, b],
        gradientWith: "fill",
        opacity: a.mergedConfig.waveOpacity,
        translate: [0, 0]
      };
    }
    function I({ shape: { points: b } }, { ctx: $, area: f }) {
      const _ = b[0], O = b.slice(-1)[0], m = f[1];
      $.lineTo(O[0], m), $.lineTo(_[0], m), $.closePath(), $.fill();
    }
    async function E(b = 1) {
      if (a.animation)
        return;
      a.animation = true;
      const $ = a.renderer.area[0];
      a.waves.forEach((f) => {
        f.attr("style", { translate: [0, 0] }), f.animation("style", {
          translate: [$, 0]
        }, true);
      }), await a.renderer.launchAnimation(), a.animation = false, a.renderer.graphs.length && E(b + 1);
    }
    return (b, $) => (openBlock(), createElementBlock("div", ul, [
      unref(a).renderer ? (openBlock(), createElementBlock("svg", cl, [
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: unref(a).gradientId,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(a).svgBorderGradient, (f) => (openBlock(), createElementBlock("stop", {
              key: f[0],
              offset: f[0],
              "stop-color": f[1]
            }, null, 8, dl))), 128))
          ], 8, fl)
        ]),
        unref(a).renderer ? (openBlock(), createElementBlock("text", {
          key: 0,
          stroke: `url(#${unref(a).gradientId})`,
          fill: `url(#${unref(a).gradientId})`,
          x: unref(a).renderer.area[0] / 2 + 8,
          y: unref(a).renderer.area[1] / 2 + 8
        }, toDisplayString(unref(a).details), 9, hl)) : createCommentVNode("", true),
        !unref(l) || unref(l) === "round" ? (openBlock(), createElementBlock("ellipse", {
          key: 1,
          cx: unref(a).renderer.area[0] / 2 + 8,
          cy: unref(a).renderer.area[1] / 2 + 8,
          rx: unref(a).renderer.area[0] / 2 + 5,
          ry: unref(a).renderer.area[1] / 2 + 5,
          stroke: `url(#${unref(a).gradientId})`
        }, null, 8, vl)) : (openBlock(), createElementBlock("rect", {
          key: 2,
          x: "2",
          y: "2",
          rx: unref(l) === "roundRect" ? 10 : 0,
          ry: unref(l) === "roundRect" ? 10 : 0,
          width: unref(a).renderer.area[0] + 12,
          height: unref(a).renderer.area[1] + 12,
          stroke: `url(#${unref(a).gradientId})`
        }, null, 8, pl))
      ])) : createCommentVNode("", true),
      createBaseVNode("canvas", {
        ref_key: "waterPondLevel",
        ref: n,
        style: normalizeStyle(`border-radius: ${unref(o)};`)
      }, null, 4)
    ]));
  }
};
var Tr = {
  install(e) {
    e.component("DvWaterLevelPond", gl);
  }
};
var ci = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
};
var ml = {};
var yl = { class: "dv-loading" };
var bl = createStaticVNode('<svg width="50px" height="50px"><circle cx="25" cy="25" r="20" fill="transparent" stroke-width="3" stroke-dasharray="31.415, 31.415" stroke="#02bcfe" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0, 25 25;360, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#02bcfe;#3be6cb;#02bcfe" dur="3s" repeatCount="indefinite"></animate></circle><circle cx="25" cy="25" r="10" fill="transparent" stroke-width="3" stroke-dasharray="15.7, 15.7" stroke="#3be6cb" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="360, 25 25;0, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#3be6cb;#02bcfe;#3be6cb" dur="3s" repeatCount="indefinite"></animate></circle></svg>', 1);
var xl = { class: "loading-tip" };
function Cl(e, t) {
  return openBlock(), createElementBlock("div", yl, [
    bl,
    createBaseVNode("div", xl, [
      renderSlot(e.$slots, "default")
    ])
  ]);
}
var _l = ci(ml, [["render", Cl]]);
var Rr = {
  install(e) {
    e.component("DvLoading", _l);
  }
};
var $l = ["width", "height"];
var Pl = ["id"];
var wl = createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
var kl = createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
var Al = [
  wl,
  kl
];
var Sl = ["id"];
var Ll = createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
var Ol = createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
var Gl = [
  Ll,
  Ol
];
var Tl = ["id", "cx", "cy"];
var Rl = ["values", "dur"];
var Ml = ["dur"];
var Dl = ["id"];
var Fl = ["xlink:href", "fill"];
var Bl = ["xlink:href", "fill", "mask"];
var Nl = ["xlink:href", "width", "height", "x", "y"];
var jl = ["fill", "x", "y"];
var El = ["id", "d"];
var Wl = ["xlink:href", "stroke-width", "stroke"];
var zl = ["id"];
var ql = ["r", "fill"];
var Il = ["dur", "path"];
var Hl = ["xlink:href", "stroke-width", "stroke", "mask"];
var Vl = ["from", "to", "dur"];
var Ul = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), { width: a, height: o } = be(n, W, D), l = reactive({
      unique: Math.random(),
      flylineGradientId: `flyline-gradient-id-${r}`,
      haloGradientId: `halo-gradient-id-${r}`,
      defaultConfig: {
        points: [],
        lines: [],
        halo: {
          show: false,
          duration: [20, 30],
          color: "#fb7293",
          radius: 120
        },
        text: {
          show: false,
          offset: [0, 15],
          color: "#ffdb5c",
          fontSize: 12
        },
        icon: {
          show: false,
          src: "",
          width: 15,
          height: 15
        },
        line: {
          width: 1,
          color: "#ffde93",
          orbitColor: "rgba(103, 224, 227, .2)",
          duration: [20, 30],
          radius: 100
        },
        bgImgSrc: "",
        k: -0.5,
        curvature: 5,
        relative: true
      },
      flylines: [],
      flylineLengths: [],
      flylinePoints: [],
      mergedConfig: null
    });
    let s;
    onMounted(() => {
      s = getCurrentInstance();
    }), watch(() => t.config, () => {
      T();
    }, {
      deep: true
    });
    function D() {
      T();
    }
    function W() {
      T();
    }
    async function T() {
      U(), B(), A(), await I();
    }
    function U() {
      const b = xe(_e(l.defaultConfig, true), t.config || {}), { points: $, lines: f, halo: _, text: O, icon: m, line: C } = b;
      b.points = $.map((d) => (d.halo = xe(_e(_, true), d.halo || {}), d.text = xe(_e(O, true), d.text || {}), d.icon = xe(_e(m, true), d.icon || {}), d)), b.lines = f.map((d) => xe(_e(C, true), d)), l.mergedConfig = b;
    }
    function B() {
      const { relative: b, points: $ } = l.mergedConfig;
      l.flylinePoints = $.map((f, _) => {
        const { coordinate: [O, m], halo: C, icon: d, text: G } = f;
        b && (f.coordinate = [O * a.value, m * o.value]), f.halo.time = Ct(...C.duration) / 10;
        const { width: S, height: g } = d;
        f.icon.x = f.coordinate[0] - S / 2, f.icon.y = f.coordinate[1] - g / 2;
        const [V, X] = G.offset;
        return f.text.x = f.coordinate[0] + V, f.text.y = f.coordinate[1] + X, f.key = `${f.coordinate.toString()}${_}`, f;
      });
    }
    function A() {
      const { points: b, lines: $ } = l.mergedConfig;
      l.flylines = $.map((f) => {
        const { source: _, target: O, duration: m } = f, C = b.find(({ name: X }) => X === _).coordinate, d = b.find(({ name: X }) => X === O).coordinate, G = v(C, d).map((X) => X.map((Z) => parseFloat(Z.toFixed(10)))), S = `M${G[0].toString()} Q${G[1].toString()} ${G[2].toString()}`, g = `path${G.toString()}`, V = Ct(...m) / 10;
        return { ...f, path: G, key: g, d: S, time: V };
      });
    }
    function v(b, $) {
      const f = R(b, $);
      return [b, f, $];
    }
    function R([b, $], [f, _]) {
      const { curvature: O, k: m } = l.mergedConfig, [C, d] = [(b + f) / 2, ($ + _) / 2], S = It([b, $], [f, _]) / O, g = S / 2;
      let [V, X] = [C, d];
      do
        V += g, X = N(m, [C, d], V)[1];
      while (It([C, d], [V, X]) < S);
      return [V, X];
    }
    function N(b, [$, f], _) {
      const O = f - b * $ + b * _;
      return [_, O];
    }
    async function I() {
      await nextTick(), l.flylineLengths = l.flylines.map(({ key: b }) => s.proxy.$refs[b][0].getTotalLength());
    }
    function E({ offsetX: b, offsetY: $ }) {
      if (!t.dev)
        return;
      const f = (b / a.value).toFixed(2), _ = ($ / o.value).toFixed(2);
      console.warn(`dv-flyline-chart-enhanced DEV: 
 Click Position is [${b}, ${$}] 
 Relative Position is [${f}, ${_}]`);
    }
    return (b, $) => (openBlock(), createElementBlock("div", {
      ref_key: "flylineChartEnhanced",
      ref: n,
      class: "dv-flyline-chart-enhanced",
      style: normalizeStyle(`background-image: url(${unref(l).mergedConfig ? unref(l).mergedConfig.bgImgSrc : ""})`),
      onClick: E
    }, [
      unref(l).flylines.length ? (openBlock(), createElementBlock("svg", {
        key: 0,
        width: unref(a),
        height: unref(o)
      }, [
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: unref(l).flylineGradientId,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, Al, 8, Pl),
          createBaseVNode("radialGradient", {
            id: unref(l).haloGradientId,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, Gl, 8, Sl)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).flylinePoints, (f) => (openBlock(), createElementBlock("g", {
          key: f.key + Math.random()
        }, [
          createBaseVNode("defs", null, [
            f.halo.show ? (openBlock(), createElementBlock("circle", {
              key: 0,
              id: `halo${unref(l).unique}${f.key}`,
              cx: f.coordinate[0],
              cy: f.coordinate[1]
            }, [
              createBaseVNode("animate", {
                attributeName: "r",
                values: `1;${f.halo.radius}`,
                dur: `${f.halo.time}s`,
                repeatCount: "indefinite"
              }, null, 8, Rl),
              createBaseVNode("animate", {
                attributeName: "opacity",
                values: "1;0",
                dur: `${f.halo.time}s`,
                repeatCount: "indefinite"
              }, null, 8, Ml)
            ], 8, Tl)) : createCommentVNode("", true)
          ]),
          createBaseVNode("mask", {
            id: `mask${unref(l).unique}${f.key}`
          }, [
            f.halo.show ? (openBlock(), createElementBlock("use", {
              key: 0,
              "xlink:href": `#halo${unref(l).unique}${f.key}`,
              fill: `url(#${unref(l).haloGradientId})`
            }, null, 8, Fl)) : createCommentVNode("", true)
          ], 8, Dl),
          f.halo.show ? (openBlock(), createElementBlock("use", {
            key: 0,
            "xlink:href": `#halo${unref(l).unique}${f.key}`,
            fill: f.halo.color,
            mask: `url(#mask${unref(l).unique}${f.key})`
          }, null, 8, Bl)) : createCommentVNode("", true),
          f.icon.show ? (openBlock(), createElementBlock("image", {
            key: 1,
            "xlink:href": f.icon.src,
            width: f.icon.width,
            height: f.icon.height,
            x: f.icon.x,
            y: f.icon.y
          }, null, 8, Nl)) : createCommentVNode("", true),
          f.text.show ? (openBlock(), createElementBlock("text", {
            key: 2,
            style: normalizeStyle(`fontSize:${f.text.fontSize}px;color:${f.text.color}`),
            fill: f.text.color,
            x: f.text.x,
            y: f.text.y
          }, toDisplayString(f.name), 13, jl)) : createCommentVNode("", true)
        ]))), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).flylines, (f, _) => (openBlock(), createElementBlock("g", {
          key: f.key + Math.random()
        }, [
          createBaseVNode("defs", null, [
            createBaseVNode("path", {
              id: f.key,
              ref_for: true,
              ref: f.key,
              d: f.d,
              fill: "transparent"
            }, null, 8, El)
          ]),
          createBaseVNode("use", {
            "xlink:href": `#${f.key}`,
            "stroke-width": f.width,
            stroke: f.orbitColor
          }, null, 8, Wl),
          createBaseVNode("mask", {
            id: `mask${unref(l).unique}${f.key}`
          }, [
            createBaseVNode("circle", {
              cx: "0",
              cy: "0",
              r: f.radius,
              fill: `url(#${unref(l).flylineGradientId})`
            }, [
              createBaseVNode("animateMotion", {
                dur: f.time,
                path: f.d,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8, Il)
            ], 8, ql)
          ], 8, zl),
          unref(l).flylineLengths[_] ? (openBlock(), createElementBlock("use", {
            key: 0,
            "xlink:href": `#${f.key}`,
            "stroke-width": f.width,
            stroke: f.color,
            mask: `url(#mask${unref(l).unique}${f.key})`
          }, [
            createBaseVNode("animate", {
              attributeName: "stroke-dasharray",
              from: `0, ${unref(l).flylineLengths[_]}`,
              to: `${unref(l).flylineLengths[_]}, 0`,
              dur: f.time,
              repeatCount: "indefinite"
            }, null, 8, Vl)
          ], 8, Hl)) : createCommentVNode("", true)
        ]))), 128))
      ], 8, $l)) : createCommentVNode("", true)
    ], 4));
  }
};
var Mr = {
  install(e) {
    e.component("DvFlylineChartEnhanced", Ul);
  }
};
var Xl = ["width", "height"];
var Ql = ["id"];
var Yl = createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
var Kl = createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
var Jl = [
  Yl,
  Kl
];
var Zl = ["id"];
var es = createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
var ts = createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
var rs = [
  es,
  ts
];
var ns = ["id", "cx", "cy"];
var as = ["values", "dur"];
var is = ["dur"];
var os = ["xlink:href", "width", "height", "x", "y"];
var ls = ["id"];
var ss = ["xlink:href", "fill"];
var us = ["xlink:href", "fill", "mask"];
var cs = ["id", "d"];
var fs = ["xlink:href", "stroke-width", "stroke"];
var ds = ["xlink:href", "stroke-width", "stroke", "mask"];
var hs = ["from", "to", "dur"];
var vs = ["id"];
var ps = ["r", "fill"];
var gs = ["dur", "path"];
var ms = ["xlink:href", "width", "height", "x", "y"];
var ys = ["fill", "x", "y"];
var bs = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), { width: a, height: o } = be(n, W, D), l = reactive({
      unique: Math.random(),
      maskId: `flyline-mask-id-${r}`,
      maskCircleId: `mask-circle-id-${r}`,
      gradientId: `gradient-id-${r}`,
      gradient2Id: `gradient2-id-${r}`,
      defaultConfig: {
        centerPoint: [0, 0],
        points: [],
        lineWidth: 1,
        orbitColor: "rgba(103, 224, 227, .2)",
        flylineColor: "#ffde93",
        k: -0.5,
        curvature: 5,
        flylineRadius: 100,
        duration: [20, 30],
        relative: true,
        bgImgUrl: "",
        text: {
          offset: [0, 15],
          color: "#ffdb5c",
          fontSize: 12
        },
        halo: {
          show: true,
          duration: 30,
          color: "#fb7293",
          radius: 120
        },
        centerPointImg: {
          width: 40,
          height: 40,
          url: ""
        },
        pointsImg: {
          width: 15,
          height: 15,
          url: ""
        }
      },
      mergedConfig: null,
      paths: [],
      lengths: [],
      times: [],
      texts: []
    });
    let s;
    onMounted(() => {
      s = getCurrentInstance();
    }), watch(() => t.config, () => {
      T();
    }, {
      deep: true
    });
    function D() {
      T();
    }
    function W() {
      T();
    }
    async function T() {
      U(), B(), await N(), I(), E();
    }
    function U() {
      const $ = xe(_e(l.defaultConfig, true), t.config || {}), { points: f } = $;
      $.points = f.map((_) => _ instanceof Array ? { position: _, text: "" } : _), l.mergedConfig = $;
    }
    function B() {
      let { centerPoint: $, points: f } = l.mergedConfig;
      const { relative: _ } = l.mergedConfig;
      f = f.map(({ position: O }) => O), _ && ($ = [a.value * $[0], o.value * $[1]], f = f.map(([O, m]) => [a.value * O, o.value * m])), l.paths = f.map((O) => A($, O));
    }
    function A($, f) {
      const _ = v($, f);
      return [f, _, $];
    }
    function v([$, f], [_, O]) {
      const { curvature: m, k: C } = l.mergedConfig, [d, G] = [($ + _) / 2, (f + O) / 2], g = It([$, f], [_, O]) / m, V = g / 2;
      let [X, Z] = [d, G];
      do
        X += V, Z = R(C, [d, G], X)[1];
      while (It([d, G], [X, Z]) < g);
      return [X, Z];
    }
    function R($, [f, _], O) {
      const m = _ - $ * f + $ * O;
      return [O, m];
    }
    async function N() {
      await nextTick(), l.lengths = l.paths.map(($, f) => s.proxy.$refs[`path${f}`][0].getTotalLength());
    }
    function I() {
      const { duration: $, points: f } = l.mergedConfig;
      l.times = f.map((_) => Ct(...$) / 10);
    }
    function E() {
      const { points: $ } = l.mergedConfig;
      l.texts = $.map(({ text: f }) => f);
    }
    function b({ offsetX: $, offsetY: f }) {
      if (!t.dev)
        return;
      const _ = ($ / a.value).toFixed(2), O = (f / o.value).toFixed(2);
      console.warn(`dv-flyline-chart DEV: 
 Click Position is [${$}, ${f}] 
 Relative Position is [${_}, ${O}]`);
    }
    return ($, f) => (openBlock(), createElementBlock("div", {
      ref_key: "flylineChart",
      ref: n,
      class: "dv-flyline-chart",
      style: normalizeStyle(`background-image: url(${unref(l).mergedConfig ? unref(l).mergedConfig.bgImgUrl : ""})`),
      onClick: b
    }, [
      unref(l).mergedConfig ? (openBlock(), createElementBlock("svg", {
        key: 0,
        width: unref(a),
        height: unref(o)
      }, [
        createBaseVNode("defs", null, [
          createBaseVNode("radialGradient", {
            id: unref(l).gradientId,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, Jl, 8, Ql),
          createBaseVNode("radialGradient", {
            id: unref(l).gradient2Id,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, rs, 8, Zl),
          unref(l).paths[0] ? (openBlock(), createElementBlock("circle", {
            key: 0,
            id: `circle${unref(l).paths[0].toString()}`,
            cx: unref(l).paths[0][2][0],
            cy: unref(l).paths[0][2][1]
          }, [
            createBaseVNode("animate", {
              attributeName: "r",
              values: `1;${unref(l).mergedConfig.halo.radius}`,
              dur: unref(l).mergedConfig.halo.duration / 10 + "s",
              repeatCount: "indefinite"
            }, null, 8, as),
            createBaseVNode("animate", {
              attributeName: "opacity",
              values: "1;0",
              dur: unref(l).mergedConfig.halo.duration / 10 + "s",
              repeatCount: "indefinite"
            }, null, 8, is)
          ], 8, ns)) : createCommentVNode("", true)
        ]),
        unref(l).paths[0] ? (openBlock(), createElementBlock("image", {
          key: 0,
          "xlink:href": unref(l).mergedConfig.centerPointImg.url,
          width: unref(l).mergedConfig.centerPointImg.width,
          height: unref(l).mergedConfig.centerPointImg.height,
          x: unref(l).paths[0][2][0] - unref(l).mergedConfig.centerPointImg.width / 2,
          y: unref(l).paths[0][2][1] - unref(l).mergedConfig.centerPointImg.height / 2
        }, null, 8, os)) : createCommentVNode("", true),
        createBaseVNode("mask", {
          id: `maskhalo${unref(l).paths[0].toString()}`
        }, [
          unref(l).paths[0] ? (openBlock(), createElementBlock("use", {
            key: 0,
            "xlink:href": `#circle${unref(l).paths[0].toString()}`,
            fill: `url(#${unref(l).gradient2Id})`
          }, null, 8, ss)) : createCommentVNode("", true)
        ], 8, ls),
        unref(l).paths[0] && unref(l).mergedConfig.halo.show ? (openBlock(), createElementBlock("use", {
          key: 1,
          "xlink:href": `#circle${unref(l).paths[0].toString()}`,
          fill: unref(l).mergedConfig.halo.color,
          mask: `url(#maskhalo${unref(l).paths[0].toString()})`
        }, null, 8, us)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).paths, (_, O) => (openBlock(), createElementBlock("g", { key: O }, [
          createBaseVNode("defs", null, [
            createBaseVNode("path", {
              id: `path${_.toString()}`,
              ref_for: true,
              ref: `path${O}`,
              d: `M${_[0].toString()} Q${_[1].toString()} ${_[2].toString()}`,
              fill: "transparent"
            }, null, 8, cs)
          ]),
          createBaseVNode("use", {
            "xlink:href": `#path${_.toString()}`,
            "stroke-width": unref(l).mergedConfig.lineWidth,
            stroke: unref(l).mergedConfig.orbitColor
          }, null, 8, fs),
          unref(l).lengths[O] ? (openBlock(), createElementBlock("use", {
            key: 0,
            "xlink:href": `#path${_.toString()}`,
            "stroke-width": unref(l).mergedConfig.lineWidth,
            stroke: unref(l).mergedConfig.flylineColor,
            mask: `url(#mask${unref(l).unique}${_.toString()})`
          }, [
            createBaseVNode("animate", {
              attributeName: "stroke-dasharray",
              from: `0, ${unref(l).lengths[O]}`,
              to: `${unref(l).lengths[O]}, 0`,
              dur: unref(l).times[O] || 0,
              repeatCount: "indefinite"
            }, null, 8, hs)
          ], 8, ds)) : createCommentVNode("", true),
          createBaseVNode("mask", {
            id: `mask${unref(l).unique}${_.toString()}`
          }, [
            createBaseVNode("circle", {
              cx: "0",
              cy: "0",
              r: unref(l).mergedConfig.flylineRadius,
              fill: `url(#${unref(l).gradientId})`
            }, [
              createBaseVNode("animateMotion", {
                dur: unref(l).times[O] || 0,
                path: `M${_[0].toString()} Q${_[1].toString()} ${_[2].toString()}`,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8, gs)
            ], 8, ps)
          ], 8, vs),
          createBaseVNode("image", {
            "xlink:href": unref(l).mergedConfig.pointsImg.url,
            width: unref(l).mergedConfig.pointsImg.width,
            height: unref(l).mergedConfig.pointsImg.height,
            x: _[0][0] - unref(l).mergedConfig.pointsImg.width / 2,
            y: _[0][1] - unref(l).mergedConfig.pointsImg.height / 2
          }, null, 8, ms),
          createBaseVNode("text", {
            style: normalizeStyle(`fontSize:${unref(l).mergedConfig.text.fontSize}px;`),
            fill: unref(l).mergedConfig.text.color,
            x: _[0][0] + unref(l).mergedConfig.text.offset[0],
            y: _[0][1] + unref(l).mergedConfig.text.offset[1]
          }, toDisplayString(unref(l).texts[O]), 13, ys)
        ]))), 128))
      ], 8, Xl)) : createCommentVNode("", true)
    ], 4));
  }
};
var Dr = {
  install(e) {
    e.component("DvFlylineChart", bs);
  }
};
var xs = (e) => (pushScopeId("data-v-282cb432"), e = e(), popScopeId(), e);
var Cs = { class: "ranking-info" };
var _s = { class: "rank" };
var $s = ["innerHTML"];
var Ps = { class: "ranking-value" };
var ws = { class: "ranking-column" };
var ks = xs(() => createBaseVNode("div", { class: "shine" }, null, -1));
var As = [
  ks
];
var Ss = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    useCssVars((b) => ({
      "2801d2f6": unref(s),
      "5c86b458": unref(l),
      "6524ce8e": unref(W),
      "65ae9c69": unref(D)
    }));
    const r = ref(null), { width: n, height: a } = be(r, U, T), o = reactive({
      defaultConfig: {
        data: [],
        rowNum: 5,
        waitTime: 2e3,
        carousel: "single",
        unit: "",
        sort: true,
        valueFormatter: null,
        textColor: "#fff",
        color: "#1370fb",
        fontSize: 13
      },
      mergedConfig: null,
      rowsData: [],
      rows: [],
      heights: [],
      avgHeight: 0,
      animationIndex: 0,
      animationHandler: "",
      updater: 0
    });
    watch(() => t.config, () => {
      E(), B();
    }, {
      deep: true
    });
    const l = computed(() => t.config.textColor ? t.config.textColor : o.defaultConfig.textColor), s = computed(() => t.config.color ? t.config.color : o.defaultConfig.color), D = computed(() => De(s.value, 50)), W = computed(() => `${t.config.fontSize ? t.config.fontSize : o.defaultConfig.fontSize}px`);
    onUnmounted(() => {
      E();
    });
    function T() {
      B();
    }
    function U() {
      o.mergedConfig && R(true);
    }
    function B() {
      A(), v(), R(), I(true);
    }
    function A() {
      o.mergedConfig = xe(_e(o.defaultConfig, true), t.config || {});
    }
    function v() {
      let { data: b } = o.mergedConfig;
      const { rowNum: $, sort: f } = o.mergedConfig;
      f && b.sort(({ value: S }, { value: g }) => S > g ? -1 : S < g ? 1 : 0);
      const _ = b.map(({ value: S }) => S), O = Math.min(..._) || 0, m = Math.abs(O), d = (Math.max(..._) || 0) + m;
      b = b.map((S, g) => ({ ...S, ranking: g + 1, percent: (S.value + m) / d * 100 }));
      const G = b.length;
      G > $ && G < 2 * $ && (b = [...b, ...b]), b = b.map((S, g) => ({ ...S, scroll: g })), o.rowsData = b, o.rows = b;
    }
    function R(b = false) {
      const { rowNum: $, data: f } = o.mergedConfig, _ = a.value / $;
      o.avgHeight = _, b || (o.heights = new Array(f.length).fill(_));
    }
    const N = computed(() => o.mergedConfig.carousel === "single");
    async function I(b = false) {
      const { waitTime: $, rowNum: f } = o.mergedConfig, _ = o.rowsData.length;
      if (f >= _)
        return;
      const { updater: O } = o;
      if (b && (await new Promise((G) => setTimeout(G, $)), O !== o.updater))
        return;
      const m = N.value ? 1 : f, C = o.rowsData.slice(o.animationIndex);
      if (C.push(...o.rowsData.slice(0, o.animationIndex)), o.rows = C.slice(0, N.value ? f + 1 : f * 2), o.heights = new Array(_).fill(o.avgHeight), await new Promise((G) => setTimeout(G, 300)), O !== o.updater)
        return;
      o.heights.fill(0, 0, m), o.animationIndex += m;
      const d = o.animationIndex - _;
      d >= 0 && (o.animationIndex = d), o.animationHandler = setTimeout(I, $ - 300);
    }
    function E() {
      o.updater = (o.updater + 1) % 999999, o.animationHandler && clearTimeout(o.animationHandler);
    }
    return (b, $) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollRankingBoard",
      ref: r,
      class: "dv-scroll-ranking-board"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o).rows, (f, _) => (openBlock(), createElementBlock("div", {
        key: f.toString() + f.scroll,
        class: "row-item",
        style: normalizeStyle(`height: ${unref(o).heights[_]}px;`)
      }, [
        createBaseVNode("div", Cs, [
          createBaseVNode("div", _s, " No." + toDisplayString(f.ranking), 1),
          createBaseVNode("div", {
            class: "info-name",
            innerHTML: f.name
          }, null, 8, $s),
          createBaseVNode("div", Ps, toDisplayString(unref(o).mergedConfig.valueFormatter ? unref(o).mergedConfig.valueFormatter(f) : f.value + unref(o).mergedConfig.unit), 1)
        ]),
        createBaseVNode("div", ws, [
          createBaseVNode("div", {
            class: "inside-column",
            style: normalizeStyle(`width: ${f.percent}%;`)
          }, As, 4)
        ])
      ], 4))), 128))
    ], 512));
  }
};
var Ls = ci(Ss, [["__scopeId", "data-v-282cb432"]]);
var Fr = {
  install(e) {
    e.component("DvScrollRankingBoard", Ls);
  }
};
var Os = ["align", "innerHTML"];
var Gs = ["align", "onClick", "onMouseenter", "innerHTML"];
var Ts = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["mouseover", "click", "getFirstRow"],
  setup(e, { expose: t, emit: r }) {
    const n = e, a = ref(null), { width: o, height: l } = be(a, U, T), s = reactive({
      defaultConfig: {
        header: [],
        data: [],
        rowNum: 5,
        headerBGC: "#00BAFF",
        oddRowBGC: "#003B51",
        evenRowBGC: "#0A2732",
        waitTime: 2e3,
        headerHeight: 35,
        columnWidth: [],
        align: [],
        index: false,
        indexHeader: "#",
        carousel: "single",
        hoverPause: true
      },
      mergedConfig: null,
      header: [],
      rowsData: [],
      rows: [],
      widths: [],
      heights: [],
      avgHeight: 0,
      aligns: [],
      animationIndex: 0,
      animationHandler: "",
      updater: 0,
      needCalc: false
    });
    watch(() => n.config, (_) => {
      $(), B();
    }, { deep: true }), onUnmounted(() => {
      $();
    }), t({
      updateRows: f
    });
    function D(_, O, m, C) {
      const { ceils: d, rowIndex: G } = m;
      r("click", {
        row: d,
        ceil: C,
        rowIndex: G,
        columnIndex: O
      });
    }
    function W(_, O, m, C, d) {
      if (_) {
        const { ceils: G, rowIndex: S } = C;
        r("mouseover", {
          row: G,
          ceil: d,
          rowIndex: S,
          columnIndex: m
        });
      }
      s.mergedConfig.hoverPause && (_ ? $() : b(true));
    }
    function T() {
      B();
    }
    function U() {
      s.mergedConfig && (N(), I());
    }
    function B() {
      A(), v(), R(), N(), I(), E(), b(true);
    }
    function A() {
      s.mergedConfig = xe(_e(s.defaultConfig, true), n.config || {});
    }
    function v() {
      let { header: _ } = s.mergedConfig;
      const { index: O, indexHeader: m } = s.mergedConfig;
      if (!_.length) {
        _ = [];
        return;
      }
      _ = [..._], O && _.unshift(m), s.header = _;
    }
    function R() {
      let { data: _ } = s.mergedConfig;
      const { index: O, headerBGC: m, rowNum: C } = s.mergedConfig;
      O && (_ = _.map((G, S) => {
        G = [...G];
        const g = `<span class="index" style="background-color: ${m};">${S + 1}</span>`;
        return G.unshift(g), G;
      })), _ = _.map((G, S) => ({ ceils: G, rowIndex: S }));
      const d = _.length;
      d > C && d < 2 * C && (_ = [..._, ..._]), _ = _.map((G, S) => ({ ...G, scroll: S })), s.rowsData = _, s.rows = _;
    }
    function N() {
      const { columnWidth: _, header: O } = s.mergedConfig, m = _.reduce((S, g) => S + g, 0);
      let C = 0;
      s.rowsData[0] ? C = s.rowsData[0].ceils.length : O.length && (C = O.length);
      const d = (o.value - m) / (C - _.length), G = new Array(C).fill(d);
      s.widths = xe(G, _);
    }
    function I(_ = false) {
      const { headerHeight: O, rowNum: m, data: C } = s.mergedConfig;
      let d = l.value;
      s.header.length && (d -= O);
      const G = d / m;
      s.avgHeight = G, _ || (s.heights = new Array(C.length).fill(G));
    }
    function E() {
      const _ = s.header.length, O = new Array(_).fill("left"), { align: m } = s.mergedConfig;
      s.aligns = xe(O, m);
    }
    async function b(_ = false) {
      s.needCalc && (R(), I(), s.needCalc = false);
      const { waitTime: O, carousel: m, rowNum: C } = s.mergedConfig, { updater: d } = s, G = s.rowsData.length;
      if (C >= G || (_ && await new Promise((X) => setTimeout(X, O)), d !== s.updater))
        return;
      const S = m === "single" ? 1 : C, g = s.rowsData.slice(s.animationIndex);
      if (g.push(...s.rowsData.slice(0, s.animationIndex)), s.rows = g.slice(0, m === "page" ? C * 2 : C + 1), s.heights = new Array(G).fill(s.avgHeight), await new Promise((X) => setTimeout(X, 300)), d !== s.updater)
        return;
      s.heights.splice(0, S, ...new Array(S).fill(0)), s.animationIndex += S;
      const V = s.animationIndex - G;
      V >= 0 && (s.animationIndex = V), s.animationHandler = setTimeout(b, O - 300), r("getFirstRow", g[1]);
    }
    function $() {
      s.updater = (s.updater + 1) % 999999, s.animationHandler && clearTimeout(s.animationHandler);
    }
    function f(_, O) {
      s.mergedConfig = {
        ...s.mergedConfig,
        data: [..._]
      }, s.needCalc = true, typeof O == "number" && (s.animationIndex = O), s.animationHandler || b(true);
    }
    return (_, O) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollBoard",
      ref: a,
      class: "dv-scroll-board"
    }, [
      unref(s).header.length && unref(s).mergedConfig ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "header",
        style: normalizeStyle(`background-color: ${unref(s).mergedConfig.headerBGC};`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s).header, (m, C) => (openBlock(), createElementBlock("div", {
          key: `${m}${C}`,
          class: "header-item",
          style: normalizeStyle(`
          height: ${unref(s).mergedConfig.headerHeight}px;
          line-height: ${unref(s).mergedConfig.headerHeight}px;
          width: ${unref(s).widths[C]}px;
        `),
          align: unref(s).aligns[C],
          innerHTML: m
        }, null, 12, Os))), 128))
      ], 4)) : createCommentVNode("", true),
      unref(s).mergedConfig ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "rows",
        style: normalizeStyle(`height: ${unref(l) - (unref(s).header.length ? unref(s).mergedConfig.headerHeight : 0)}px;`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s).rows, (m, C) => (openBlock(), createElementBlock("div", {
          key: `${m.toString()}${m.scroll}`,
          class: "row-item",
          style: normalizeStyle(`
          height: ${unref(s).heights[C]}px;
          line-height: ${unref(s).heights[C]}px;
          background-color: ${unref(s).mergedConfig[m.rowIndex % 2 === 0 ? "evenRowBGC" : "oddRowBGC"]};
        `)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.ceils, (d, G) => (openBlock(), createElementBlock("div", {
            key: `${d}${C}${G}`,
            class: "ceil",
            style: normalizeStyle(`width: ${unref(s).widths[G]}px;`),
            align: unref(s).aligns[G],
            onClick: (S) => D(C, G, m, d),
            onMouseenter: (S) => W(true, C, G, m, d),
            onMouseleave: O[0] || (O[0] = (S) => W(false)),
            innerHTML: d
          }, null, 44, Gs))), 128))
        ], 4))), 128))
      ], 4)) : createCommentVNode("", true)
    ], 512));
  }
};
var Br = {
  install(e) {
    e.component("DvScrollBoard", Ts);
  }
};
var fi = {};
var Nr = {};
var je = {};
var ua;
function qe() {
  if (ua)
    return je;
  ua = 1;
  var e = Pe;
  Object.defineProperty(je, "__esModule", {
    value: true
  }), je.filterNonNumber = a, je.deepMerge = o, je.mulAdd = l, je.mergeSameStackData = s, je.getTwoPointDistance = D, je.getLinearGradientColor = W, je.getPolylineLength = T, je.getPointToLineDistance = U, je.initNeedSeries = B, je.radianToAngle = A;
  var t = e(Fe()), r = e(ze()), n = Be();
  function a(v) {
    return v.filter(function(R) {
      return typeof R == "number";
    });
  }
  function o(v, R) {
    for (var N in R) {
      if (v[N] && (0, r.default)(v[N]) === "object") {
        o(v[N], R[N]);
        continue;
      }
      if ((0, r.default)(R[N]) === "object") {
        v[N] = (0, n.deepClone)(R[N], true);
        continue;
      }
      v[N] = R[N];
    }
    return v;
  }
  function l(v) {
    return v = a(v), v.reduce(function(R, N) {
      return R + N;
    }, 0);
  }
  function s(v, R) {
    var N = v.stack;
    if (!N)
      return (0, t.default)(v.data);
    var I = R.filter(function(f) {
      var _ = f.stack;
      return _ === N;
    }), E = I.findIndex(function(f) {
      var _ = f.data;
      return _ === v.data;
    }), b = I.splice(0, E + 1).map(function(f) {
      var _ = f.data;
      return _;
    }), $ = b[0].length;
    return new Array($).fill(0).map(function(f, _) {
      return l(b.map(function(O) {
        return O[_];
      }));
    });
  }
  function D(v, R) {
    var N = Math.abs(v[0] - R[0]), I = Math.abs(v[1] - R[1]);
    return Math.sqrt(N * N + I * I);
  }
  function W(v, R, N, I) {
    if (!(!v || !R || !N || !I.length)) {
      var E = I;
      typeof E == "string" && (E = [I, I]);
      var b = v.createLinearGradient.apply(v, (0, t.default)(R).concat((0, t.default)(N))), $ = 1 / (E.length - 1);
      return E.forEach(function(f, _) {
        return b.addColorStop($ * _, f);
      }), b;
    }
  }
  function T(v) {
    var R = new Array(v.length - 1).fill(0).map(function(I, E) {
      return [v[E], v[E + 1]];
    }), N = R.map(function(I) {
      return D.apply(void 0, (0, t.default)(I));
    });
    return l(N);
  }
  function U(v, R, N) {
    var I = D(v, R), E = D(v, N), b = D(R, N);
    return 0.5 * Math.sqrt((I + E + b) * (I + E - b) * (I + b - E) * (E + b - I)) / b;
  }
  function B(v, R, N) {
    return v = v.filter(function(I) {
      var E = I.type;
      return E === N;
    }), v = v.map(function(I) {
      return o((0, n.deepClone)(R, true), I);
    }), v.filter(function(I) {
      var E = I.show;
      return E;
    });
  }
  function A(v) {
    return v / Math.PI * 180;
  }
  return je;
}
var di = Pe;
var Rs = di(Ue());
var ca = di(Fe());
var vr = fr;
var Ms = Sn();
var _t = Be();
var Ds = At;
var Fs = qe();
function fa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fa(Object(r), true).forEach(function(n) {
      (0, Rs.default)(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Bs = {
  shape: {
    rx: 0,
    ry: 0,
    ir: 0,
    or: 0,
    startAngle: 0,
    endAngle: 0,
    clockWise: true
  },
  validator: function(t) {
    var r = t.shape, n = ["rx", "ry", "ir", "or", "startAngle", "endAngle"];
    return n.find(function(a) {
      return typeof r[a] != "number";
    }) ? (console.error("Pie shape configuration is abnormal!"), false) : true;
  },
  draw: function(t, r) {
    var n = t.ctx, a = r.shape;
    n.beginPath();
    var o = a.rx, l = a.ry, s = a.ir, D = a.or, W = a.startAngle, T = a.endAngle, U = a.clockWise;
    o = parseInt(o) + 0.5, l = parseInt(l) + 0.5, n.arc(o, l, s > 0 ? s : 0, W, T, !U);
    var B = (0, _t.getCircleRadianPoint)(o, l, D, T).map(function(v) {
      return parseInt(v) + 0.5;
    }), A = (0, _t.getCircleRadianPoint)(o, l, s, W).map(function(v) {
      return parseInt(v) + 0.5;
    });
    n.lineTo.apply(n, (0, ca.default)(B)), n.arc(o, l, D > 0 ? D : 0, T, W, U), n.lineTo.apply(n, (0, ca.default)(A)), n.closePath(), n.stroke(), n.fill();
  }
};
var Ns = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    startAngle: 0,
    endAngle: 0,
    gradientStartAngle: null,
    gradientEndAngle: null
  },
  validator: function(t) {
    var r = t.shape, n = ["rx", "ry", "r", "startAngle", "endAngle"];
    return n.find(function(a) {
      return typeof r[a] != "number";
    }) ? (console.error("AgArc shape configuration is abnormal!"), false) : true;
  },
  draw: function(t, r) {
    var n = t.ctx, a = r.shape, o = r.style, l = o.gradient;
    l = l.map(function(O) {
      return (0, Ds.getColorFromRgbValue)(O);
    }), l.length === 1 && (l = [l[0], l[0]]);
    var s = l.length - 1, D = a.gradientStartAngle, W = a.gradientEndAngle, T = a.startAngle, U = a.endAngle, B = a.r, A = a.rx, v = a.ry;
    D === null && (D = T), W === null && (W = U);
    var R = (W - D) / s;
    R === Math.PI * 2 && (R = Math.PI * 2 - 1e-3);
    for (var N = 0; N < s; N++) {
      n.beginPath();
      var I = (0, _t.getCircleRadianPoint)(A, v, B, T + R * N), E = (0, _t.getCircleRadianPoint)(A, v, B, T + R * (N + 1)), b = (0, Fs.getLinearGradientColor)(n, I, E, [l[N], l[N + 1]]), $ = T + R * N, f = T + R * (N + 1), _ = false;
      if (f > U && (f = U, _ = true), n.arc(A, v, B, $, f), n.strokeStyle = b, n.stroke(), _)
        break;
    }
  }
};
var js = {
  shape: {
    number: [],
    content: "",
    position: [0, 0],
    toFixed: 0,
    rowGap: 0,
    formatter: null
  },
  validator: function(t) {
    var r = t.shape, n = r.number, a = r.content, o = r.position;
    return !(n instanceof Array) || typeof a != "string" || !(o instanceof Array) ? (console.error("NumberText shape configuration is abnormal!"), false) : true;
  },
  draw: function(t, r) {
    var n = t.ctx, a = r.shape, o = a.number, l = a.content, s = a.toFixed, D = a.rowGap, W = a.formatter, T = l.split("{nt}"), U = "";
    T.forEach(function(B, A) {
      var v = o[A];
      typeof v != "number" && (v = ""), typeof v == "number" && (v = v.toFixed(s), typeof W == "function" && (v = W(v))), U += B + (v || "");
    }), Ms.text.draw({
      ctx: n
    }, {
      shape: da(da({}, a), {}, {
        content: U,
        rowGap: D
      })
    });
  }
};
var Es = {
  shape: {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  },
  validator: function(t) {
    var r = t.shape, n = r.x, a = r.y, o = r.w, l = r.h;
    return typeof n != "number" || typeof a != "number" || typeof o != "number" || typeof l != "number" ? (console.error("lineIcon shape configuration is abnormal!"), false) : true;
  },
  draw: function(t, r) {
    var n = t.ctx, a = r.shape;
    n.beginPath();
    var o = a.x, l = a.y, s = a.w, D = a.h, W = D / 2;
    n.strokeStyle = n.fillStyle, n.moveTo(o, l + W), n.lineTo(o + s, l + W), n.lineWidth = 1, n.stroke(), n.beginPath();
    var T = W - 5 * 2;
    T <= 0 && (T = 3), n.arc(o + s / 2, l + W, T, 0, Math.PI * 2), n.lineWidth = 5, n.stroke(), n.fillStyle = "#fff", n.fill();
  },
  hoverCheck: function(t, r) {
    var n = r.shape, a = n.x, o = n.y, l = n.w, s = n.h;
    return (0, _t.checkPointIsInRect)(t, a, o, l, s);
  },
  setGraphCenter: function(t, r) {
    var n = r.shape, a = r.style, o = n.x, l = n.y, s = n.w, D = n.h;
    a.graphCenter = [o + s / 2, l + D / 2];
  }
};
(0, vr.extendNewGraph)("pie", Bs);
(0, vr.extendNewGraph)("agArc", Ns);
(0, vr.extendNewGraph)("numberText", js);
(0, vr.extendNewGraph)("lineIcon", Es);
var jr = {};
var Gt = {};
var Er = {};
var st = {};
var ha;
function Ws() {
  if (ha)
    return st;
  ha = 1, Object.defineProperty(st, "__esModule", {
    value: true
  }), st.colorConfig = void 0;
  var e = ["#37a2da", "#32c5e9", "#67e0e3", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e062ae", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff"];
  return st.colorConfig = e, st;
}
var ut = {};
var va;
function zs() {
  if (va)
    return ut;
  va = 1, Object.defineProperty(ut, "__esModule", {
    value: true
  }), ut.gridConfig = void 0;
  var e = {
    left: "10%",
    right: "10%",
    top: 60,
    bottom: 60,
    style: {
      fill: "rgba(0, 0, 0, 0)"
    },
    rLevel: -30,
    animationCurve: "easeOutCubic",
    animationFrame: 30
  };
  return ut.gridConfig = e, ut;
}
var et = {};
var pa;
function qs() {
  if (pa)
    return et;
  pa = 1, Object.defineProperty(et, "__esModule", {
    value: true
  }), et.yAxisConfig = et.xAxisConfig = void 0;
  var e = {
    name: "",
    show: true,
    position: "bottom",
    nameGap: 15,
    nameLocation: "end",
    nameTextStyle: {
      fill: "#333",
      fontSize: 10
    },
    min: "20%",
    max: "20%",
    interval: null,
    minInterval: null,
    maxInterval: null,
    boundaryGap: null,
    splitNumber: 5,
    axisLine: {
      show: true,
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    axisTick: {
      show: true,
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    axisLabel: {
      show: true,
      formatter: null,
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0
      }
    },
    splitLine: {
      show: false,
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    rLevel: -20,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  et.xAxisConfig = e;
  var t = {
    name: "",
    show: true,
    position: "left",
    nameGap: 15,
    nameLocation: "end",
    nameTextStyle: {
      fill: "#333",
      fontSize: 10
    },
    min: "20%",
    max: "20%",
    interval: null,
    minInterval: null,
    maxInterval: null,
    boundaryGap: null,
    splitNumber: 5,
    axisLine: {
      show: true,
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    axisTick: {
      show: true,
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    axisLabel: {
      show: true,
      formatter: null,
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0
      }
    },
    splitLine: {
      show: true,
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    rLevel: -20,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return et.yAxisConfig = t, et;
}
var ct = {};
var ga;
function Is() {
  if (ga)
    return ct;
  ga = 1, Object.defineProperty(ct, "__esModule", {
    value: true
  }), ct.titleConfig = void 0;
  var e = {
    show: true,
    text: "",
    offset: [0, -20],
    style: {
      fill: "#333",
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center",
      textBaseline: "bottom"
    },
    rLevel: 20,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return ct.titleConfig = e, ct;
}
var ft = {};
var ma;
function Hs() {
  if (ma)
    return ft;
  ma = 1, Object.defineProperty(ft, "__esModule", {
    value: true
  }), ft.lineConfig = void 0;
  var e = {
    show: true,
    name: "",
    stack: "",
    smooth: false,
    xAxisIndex: 0,
    yAxisIndex: 0,
    data: [],
    lineStyle: {
      lineWidth: 1
    },
    linePoint: {
      show: true,
      radius: 2,
      style: {
        fill: "#fff",
        lineWidth: 1
      }
    },
    lineArea: {
      show: false,
      gradient: [],
      style: {
        opacity: 0.5
      }
    },
    label: {
      show: false,
      position: "top",
      offset: [0, -10],
      formatter: null,
      style: {
        fontSize: 10
      }
    },
    rLevel: 10,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return ft.lineConfig = e, ft;
}
var dt = {};
var ya;
function Vs() {
  if (ya)
    return dt;
  ya = 1, Object.defineProperty(dt, "__esModule", {
    value: true
  }), dt.barConfig = void 0;
  var e = {
    show: true,
    name: "",
    stack: "",
    shapeType: "normal",
    echelonOffset: 10,
    barWidth: "auto",
    barGap: "30%",
    barCategoryGap: "20%",
    xAxisIndex: 0,
    yAxisIndex: 0,
    data: [],
    backgroundBar: {
      show: false,
      width: "auto",
      style: {
        fill: "rgba(200, 200, 200, .4)"
      }
    },
    label: {
      show: false,
      position: "top",
      offset: [0, -10],
      formatter: null,
      style: {
        fontSize: 10
      }
    },
    gradient: {
      color: [],
      local: true
    },
    barStyle: {},
    independentColor: false,
    independentColors: [],
    rLevel: 0,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return dt.barConfig = e, dt;
}
var ht = {};
var ba;
function hi() {
  if (ba)
    return ht;
  ba = 1, Object.defineProperty(ht, "__esModule", {
    value: true
  }), ht.pieConfig = void 0;
  var e = {
    show: true,
    name: "",
    radius: "50%",
    center: ["50%", "50%"],
    startAngle: -Math.PI / 2,
    roseType: false,
    roseSort: true,
    roseIncrement: "auto",
    data: [],
    insideLabel: {
      show: false,
      formatter: "{percent}%",
      style: {
        fontSize: 10,
        fill: "#fff",
        textAlign: "center",
        textBaseline: "middle"
      }
    },
    outsideLabel: {
      show: true,
      formatter: "{name}",
      style: {
        fontSize: 11
      },
      labelLineBendGap: "20%",
      labelLineEndLength: 50,
      labelLineStyle: {
        lineWidth: 1
      }
    },
    pieStyle: {},
    percentToFixed: 0,
    rLevel: 10,
    animationDelayGap: 60,
    animationCurve: "easeOutCubic",
    startAnimationCurve: "easeOutBack",
    animationFrame: 50
  };
  return ht.pieConfig = e, ht;
}
var vt = {};
var xa;
function Us() {
  if (xa)
    return vt;
  xa = 1, Object.defineProperty(vt, "__esModule", {
    value: true
  }), vt.radarAxisConfig = void 0;
  var e = {
    show: true,
    center: ["50%", "50%"],
    radius: "65%",
    startAngle: -Math.PI / 2,
    splitNum: 5,
    polygon: false,
    axisLabel: {
      show: true,
      labelGap: 15,
      color: [],
      style: {
        fill: "#333"
      }
    },
    axisLine: {
      show: true,
      color: [],
      style: {
        stroke: "#999",
        lineWidth: 1
      }
    },
    splitLine: {
      show: true,
      color: [],
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    splitArea: {
      show: false,
      color: ["#f5f5f5", "#e6e6e6"],
      style: {}
    },
    rLevel: -10,
    animationCurve: "easeOutCubic",
    animationFrane: 50
  };
  return vt.radarAxisConfig = e, vt;
}
var pt = {};
var Ca;
function Xs() {
  if (Ca)
    return pt;
  Ca = 1, Object.defineProperty(pt, "__esModule", {
    value: true
  }), pt.radarConfig = void 0;
  var e = {
    show: true,
    name: "",
    data: [],
    radarStyle: {
      lineWidth: 1
    },
    point: {
      show: true,
      radius: 2,
      style: {
        fill: "#fff"
      }
    },
    label: {
      show: true,
      offset: [0, 0],
      labelGap: 5,
      formatter: null,
      style: {
        fontSize: 10
      }
    },
    rLevel: 10,
    animationCurve: "easeOutCubic",
    animationFrane: 50
  };
  return pt.radarConfig = e, pt;
}
var gt = {};
var _a;
function vi() {
  if (_a)
    return gt;
  _a = 1, Object.defineProperty(gt, "__esModule", {
    value: true
  }), gt.gaugeConfig = void 0;
  var e = {
    show: true,
    name: "",
    radius: "60%",
    center: ["50%", "50%"],
    startAngle: -(Math.PI / 4) * 5,
    endAngle: Math.PI / 4,
    min: 0,
    max: 100,
    splitNum: 5,
    arcLineWidth: 15,
    data: [],
    dataItemStyle: {},
    axisTick: {
      show: true,
      tickLength: 6,
      style: {
        stroke: "#999",
        lineWidth: 1
      }
    },
    axisLabel: {
      show: true,
      data: [],
      formatter: null,
      labelGap: 5,
      style: {}
    },
    pointer: {
      show: true,
      valueIndex: 0,
      style: {
        scale: [1, 1],
        fill: "#fb7293"
      }
    },
    details: {
      show: false,
      formatter: null,
      offset: [0, 0],
      valueToFixed: 0,
      position: "center",
      style: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textBaseline: "middle"
      }
    },
    backgroundArc: {
      show: true,
      style: {
        stroke: "#e0e0e0"
      }
    },
    rLevel: 10,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return gt.gaugeConfig = e, gt;
}
var mt = {};
var $a;
function Qs() {
  if ($a)
    return mt;
  $a = 1, Object.defineProperty(mt, "__esModule", {
    value: true
  }), mt.legendConfig = void 0;
  var e = {
    show: true,
    orient: "horizontal",
    left: "auto",
    right: "auto",
    top: "auto",
    bottom: "auto",
    itemGap: 10,
    iconWidth: 25,
    iconHeight: 10,
    selectAble: true,
    data: [],
    textStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#000"
    },
    iconStyle: {},
    textUnselectedStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#999"
    },
    iconUnselectedStyle: {
      fill: "#999"
    },
    rLevel: 20,
    animationCurve: "easeOutCubic",
    animationFrame: 50
  };
  return mt.legendConfig = e, mt;
}
var Pa;
function Xe() {
  return Pa || (Pa = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.changeDefaultConfig = v, Object.defineProperty(e, "colorConfig", {
      enumerable: true,
      get: function() {
        return t.colorConfig;
      }
    }), Object.defineProperty(e, "gridConfig", {
      enumerable: true,
      get: function() {
        return r.gridConfig;
      }
    }), Object.defineProperty(e, "xAxisConfig", {
      enumerable: true,
      get: function() {
        return n.xAxisConfig;
      }
    }), Object.defineProperty(e, "yAxisConfig", {
      enumerable: true,
      get: function() {
        return n.yAxisConfig;
      }
    }), Object.defineProperty(e, "titleConfig", {
      enumerable: true,
      get: function() {
        return a.titleConfig;
      }
    }), Object.defineProperty(e, "lineConfig", {
      enumerable: true,
      get: function() {
        return o.lineConfig;
      }
    }), Object.defineProperty(e, "barConfig", {
      enumerable: true,
      get: function() {
        return l.barConfig;
      }
    }), Object.defineProperty(e, "pieConfig", {
      enumerable: true,
      get: function() {
        return s.pieConfig;
      }
    }), Object.defineProperty(e, "radarAxisConfig", {
      enumerable: true,
      get: function() {
        return D.radarAxisConfig;
      }
    }), Object.defineProperty(e, "radarConfig", {
      enumerable: true,
      get: function() {
        return W.radarConfig;
      }
    }), Object.defineProperty(e, "gaugeConfig", {
      enumerable: true,
      get: function() {
        return T.gaugeConfig;
      }
    }), Object.defineProperty(e, "legendConfig", {
      enumerable: true,
      get: function() {
        return U.legendConfig;
      }
    }), e.keys = void 0;
    var t = Ws(), r = zs(), n = qs(), a = Is(), o = Hs(), l = Vs(), s = hi(), D = Us(), W = Xs(), T = vi(), U = Qs(), B = qe(), A = {
      colorConfig: t.colorConfig,
      gridConfig: r.gridConfig,
      xAxisConfig: n.xAxisConfig,
      yAxisConfig: n.yAxisConfig,
      titleConfig: a.titleConfig,
      lineConfig: o.lineConfig,
      barConfig: l.barConfig,
      pieConfig: s.pieConfig,
      radarAxisConfig: D.radarAxisConfig,
      radarConfig: W.radarConfig,
      gaugeConfig: T.gaugeConfig,
      legendConfig: U.legendConfig
    };
    function v(N, I) {
      if (!A["".concat(N, "Config")]) {
        console.warn("Change default config Error - Invalid key!");
        return;
      }
      (0, B.deepMerge)(A["".concat(N, "Config")], I);
    }
    var R = ["color", "title", "legend", "xAxis", "yAxis", "grid", "radarAxis", "line", "bar", "pie", "radar", "gauge"];
    e.keys = R;
  }(Er)), Er;
}
var wa;
function Ys() {
  if (wa)
    return Gt;
  wa = 1, Object.defineProperty(Gt, "__esModule", {
    value: true
  }), Gt.mergeColor = n;
  var e = Xe(), t = Be(), r = qe();
  function n(a) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = (0, t.deepClone)(e.colorConfig, true), s = o.color, D = o.series;
    if (D || (D = []), s || (s = []), o.color = s = (0, r.deepMerge)(l, s), !!D.length) {
      var W = s.length;
      D.forEach(function(A, v) {
        A.color || (A.color = s[v % W]);
      });
      var T = D.filter(function(A) {
        var v = A.type;
        return v === "pie";
      });
      T.forEach(function(A) {
        return A.data.forEach(function(v, R) {
          return v.color = s[R % W];
        });
      });
      var U = D.filter(function(A) {
        var v = A.type;
        return v === "gauge";
      });
      U.forEach(function(A) {
        return A.data.forEach(function(v, R) {
          return v.color = s[R % W];
        });
      });
      var B = D.filter(function(A) {
        var v = A.type, R = A.independentColor;
        return v === "bar" && R;
      });
      B.forEach(function(A) {
        A.independentColors || (A.independentColors = s);
      });
    }
  }
  return Gt;
}
var Tt = {};
var at = {};
var ka;
function Qe() {
  if (ka)
    return at;
  ka = 1;
  var e = Pe;
  Object.defineProperty(at, "__esModule", {
    value: true
  }), at.doUpdate = T, at.Updater = void 0;
  var t = e(Fe()), r = e(ze()), n = e(wt()), a = function U(B, A) {
    (0, n.default)(this, U);
    var v = B.chart, R = B.key, N = B.getGraphConfig;
    if (typeof N != "function") {
      console.warn("Updater need function getGraphConfig!");
      return;
    }
    v[R] || (this.graphs = v[R] = []), Object.assign(this, B), this.update(A);
  };
  at.Updater = a, a.prototype.update = function(U) {
    var B = this, A = this.graphs, v = this.beforeUpdate;
    if (o(this, U), !!U.length) {
      var R = (0, r.default)(v);
      U.forEach(function(N, I) {
        R === "function" && v(A, N, I, B);
        var E = A[I];
        E ? l(E, N, I, B) : D(A, N, I, B);
      });
    }
  };
  function o(U, B) {
    var A = U.graphs, v = U.chart.render, R = A.length, N = B.length;
    if (R > N) {
      var I = A.splice(N);
      I.forEach(function(E) {
        return E.forEach(function(b) {
          return v.delGraph(b);
        });
      });
    }
  }
  function l(U, B, A, v) {
    var R = v.getGraphConfig, N = v.chart.render, I = v.beforeChange, E = R(B, v);
    s(U, E, N), U.forEach(function(b, $) {
      var f = E[$];
      typeof I == "function" && I(b, f), W(b, f);
    });
  }
  function s(U, B, A) {
    var v = U.length, R = B.length;
    if (R > v) {
      var N = U.slice(-1)[0], I = R - v, E = new Array(I).fill(0).map(function($) {
        return A.clone(N);
      });
      U.push.apply(U, (0, t.default)(E));
    } else if (R < v) {
      var b = U.splice(R);
      b.forEach(function($) {
        return A.delGraph($);
      });
    }
  }
  function D(U, B, A, v) {
    var R = v.getGraphConfig, N = v.getStartGraphConfig, I = v.chart, E = I.render, b = null;
    typeof N == "function" && (b = N(B, v));
    var $ = R(B, v);
    if ($.length) {
      b ? (U[A] = b.map(function(_) {
        return E.add(_);
      }), U[A].forEach(function(_, O) {
        var m = $[O];
        W(_, m);
      })) : U[A] = $.map(function(_) {
        return E.add(_);
      });
      var f = v.afterAddGraph;
      typeof f == "function" && f(U[A]);
    }
  }
  function W(U, B) {
    var A = Object.keys(B);
    A.forEach(function(v) {
      v === "shape" || v === "style" ? U.animation(v, B[v], true) : U[v] = B[v];
    });
  }
  function T() {
    var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, B = U.chart, A = U.series, v = U.key, R = U.getGraphConfig, N = U.getStartGraphConfig, I = U.beforeChange, E = U.beforeUpdate, b = U.afterAddGraph;
    B[v] ? B[v].update(A) : B[v] = new a({
      chart: B,
      key: v,
      getGraphConfig: R,
      getStartGraphConfig: N,
      beforeChange: I,
      beforeUpdate: E,
      afterAddGraph: b
    }, A);
  }
  return at;
}
var Aa;
function Ks() {
  if (Aa)
    return Tt;
  Aa = 1;
  var e = Pe;
  Object.defineProperty(Tt, "__esModule", {
    value: true
  }), Tt.title = l;
  var t = e(Ne()), r = Qe(), n = Be(), a = Xe(), o = qe();
  function l(T) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = [];
    U.title && (B[0] = (0, o.deepMerge)((0, n.deepClone)(a.titleConfig, true), U.title)), (0, r.doUpdate)({
      chart: T,
      series: B,
      key: "title",
      getGraphConfig: s
    });
  }
  function s(T, U) {
    var B = a.titleConfig.animationCurve, A = a.titleConfig.animationFrame, v = a.titleConfig.rLevel, R = D(T, U), N = W(T);
    return [{
      name: "text",
      index: v,
      visible: T.show,
      animationCurve: B,
      animationFrame: A,
      shape: R,
      style: N
    }];
  }
  function D(T, U) {
    var B = T.offset, A = T.text, v = U.chart.gridArea, R = v.x, N = v.y, I = v.w, E = (0, t.default)(B, 2), b = E[0], $ = E[1];
    return {
      content: A,
      position: [R + I / 2 + b, N + $]
    };
  }
  function W(T) {
    var U = T.style;
    return U;
  }
  return Tt;
}
var Rt = {};
var Sa;
function Js() {
  if (Sa)
    return Rt;
  Sa = 1;
  var e = Pe;
  Object.defineProperty(Rt, "__esModule", {
    value: true
  }), Rt.grid = W;
  var t = e(Ne()), r = e(Ue()), n = Qe(), a = Be(), o = Xe(), l = qe();
  function s(v, R) {
    var N = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(v);
      R && (I = I.filter(function(E) {
        return Object.getOwnPropertyDescriptor(v, E).enumerable;
      })), N.push.apply(N, I);
    }
    return N;
  }
  function D(v) {
    for (var R = 1; R < arguments.length; R++) {
      var N = arguments[R] != null ? arguments[R] : {};
      R % 2 ? s(Object(N), true).forEach(function(I) {
        (0, r.default)(v, I, N[I]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(N)) : s(Object(N)).forEach(function(I) {
        Object.defineProperty(v, I, Object.getOwnPropertyDescriptor(N, I));
      });
    }
    return v;
  }
  function W(v) {
    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = R.grid;
    N = (0, l.deepMerge)((0, a.deepClone)(o.gridConfig, true), N || {}), (0, n.doUpdate)({
      chart: v,
      series: [N],
      key: "grid",
      getGraphConfig: T
    });
  }
  function T(v, R) {
    var N = v.animationCurve, I = v.animationFrame, E = v.rLevel, b = U(v, R), $ = A(v);
    return R.chart.gridArea = D({}, b), [{
      name: "rect",
      index: E,
      animationCurve: N,
      animationFrame: I,
      shape: b,
      style: $
    }];
  }
  function U(v, R) {
    var N = (0, t.default)(R.chart.render.area, 2), I = N[0], E = N[1], b = B(v.left, I), $ = B(v.right, I), f = B(v.top, E), _ = B(v.bottom, E), O = I - b - $, m = E - f - _;
    return {
      x: b,
      y: f,
      w: O,
      h: m
    };
  }
  function B(v, R) {
    return typeof v == "number" ? v : typeof v != "string" ? 0 : R * parseInt(v) / 100;
  }
  function A(v) {
    var R = v.style;
    return R;
  }
  return Rt;
}
var Mt = {};
var La;
function Zs() {
  if (La)
    return Mt;
  La = 1;
  var e = Pe;
  Object.defineProperty(Mt, "__esModule", {
    value: true
  }), Mt.axis = v;
  var t = e(ze()), r = e(Ne()), n = e(Ue()), a = e(Fe()), o = Qe(), l = Xe(), s = qe(), D = Be();
  function W(u, x) {
    var w = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(u);
      x && (M = M.filter(function(Y) {
        return Object.getOwnPropertyDescriptor(u, Y).enumerable;
      })), w.push.apply(w, M);
    }
    return w;
  }
  function T(u) {
    for (var x = 1; x < arguments.length; x++) {
      var w = arguments[x] != null ? arguments[x] : {};
      x % 2 ? W(Object(w), true).forEach(function(M) {
        (0, n.default)(u, M, w[M]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : W(Object(w)).forEach(function(M) {
        Object.defineProperty(u, M, Object.getOwnPropertyDescriptor(w, M));
      });
    }
    return u;
  }
  var U = {
    xAxisConfig: l.xAxisConfig,
    yAxisConfig: l.yAxisConfig
  }, B = Math.abs, A = Math.pow;
  function v(u) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = x.xAxis, M = x.yAxis, Y = x.series, re = [];
    w && M && Y && (re = R(w, M), re = N(re), re = re.filter(function(le) {
      var de = le.show;
      return de;
    }), re = I(re), re = E(re, Y), re = X(re), re = Z(re, u), re = c(re), re = h2(re), re = P(re, u)), (0, o.doUpdate)({
      chart: u,
      series: re,
      key: "axisLine",
      getGraphConfig: q
    }), (0, o.doUpdate)({
      chart: u,
      series: re,
      key: "axisTick",
      getGraphConfig: ae
    }), (0, o.doUpdate)({
      chart: u,
      series: re,
      key: "axisLabel",
      getGraphConfig: Q
    }), (0, o.doUpdate)({
      chart: u,
      series: re,
      key: "axisName",
      getGraphConfig: k
    }), (0, o.doUpdate)({
      chart: u,
      series: re,
      key: "splitLine",
      getGraphConfig: ee
    }), u.axisData = re;
  }
  function R(u, x) {
    var w = [], M = [];
    if (u instanceof Array) {
      var Y;
      (Y = w).push.apply(Y, (0, a.default)(u));
    } else
      w.push(u);
    if (x instanceof Array) {
      var re;
      (re = M).push.apply(re, (0, a.default)(x));
    } else
      M.push(x);
    return w.splice(2), M.splice(2), w = w.map(function(le, de) {
      return T(T({}, le), {}, {
        index: de,
        axis: "x"
      });
    }), M = M.map(function(le, de) {
      return T(T({}, le), {}, {
        index: de,
        axis: "y"
      });
    }), [].concat((0, a.default)(w), (0, a.default)(M));
  }
  function N(u) {
    var x = u.filter(function(M) {
      var Y = M.axis;
      return Y === "x";
    }), w = u.filter(function(M) {
      var Y = M.axis;
      return Y === "y";
    });
    return x = x.map(function(M) {
      return (0, s.deepMerge)((0, D.deepClone)(l.xAxisConfig), M);
    }), w = w.map(function(M) {
      return (0, s.deepMerge)((0, D.deepClone)(l.yAxisConfig), M);
    }), [].concat((0, a.default)(x), (0, a.default)(w));
  }
  function I(u) {
    var x = u.filter(function(M) {
      var Y = M.data;
      return Y === "value";
    }), w = u.filter(function(M) {
      var Y = M.data;
      return Y !== "value";
    });
    return x.forEach(function(M) {
      typeof M.boundaryGap != "boolean" && (M.boundaryGap = false);
    }), w.forEach(function(M) {
      typeof M.boundaryGap != "boolean" && (M.boundaryGap = true);
    }), [].concat((0, a.default)(x), (0, a.default)(w));
  }
  function E(u, x) {
    var w = u.filter(function(Y) {
      var re = Y.data;
      return re === "value";
    }), M = u.filter(function(Y) {
      var re = Y.data;
      return re instanceof Array;
    });
    return w = b(w, x), M = g(M), [].concat((0, a.default)(w), (0, a.default)(M));
  }
  function b(u, x) {
    return u.map(function(w) {
      var M = $(w, x), Y = O(w, M), re = (0, r.default)(Y, 2), le = re[0], de = re[1], he = V(le, de, w), pe = w.axisLabel.formatter, ge = [];
      return le < 0 && de > 0 ? ge = d(le, de, he) : ge = G(le, de, he), ge = ge.map(function(ye) {
        return parseFloat(ye.toFixed(2));
      }), T(T({}, w), {}, {
        maxValue: ge.slice(-1)[0],
        minValue: ge[0],
        label: S(ge, pe)
      });
    });
  }
  function $(u, x) {
    if (x = x.filter(function(le) {
      var de = le.show, he = le.type;
      return !(de === false || he === "pie");
    }), x.length === 0)
      return [0, 0];
    var w = u.index, M = u.axis;
    x = _(x);
    var Y = M + "Axis", re = x.filter(function(le) {
      return le[Y] === w;
    });
    return re.length || (re = x), f(re);
  }
  function f(u) {
    if (u) {
      var x = Math.min.apply(Math, (0, a.default)(u.map(function(M) {
        var Y = M.data;
        return Math.min.apply(Math, (0, a.default)((0, s.filterNonNumber)(Y)));
      }))), w = Math.max.apply(Math, (0, a.default)(u.map(function(M) {
        var Y = M.data;
        return Math.max.apply(Math, (0, a.default)((0, s.filterNonNumber)(Y)));
      })));
      return [x, w];
    }
  }
  function _(u) {
    var x = (0, D.deepClone)(u, true);
    return u.forEach(function(w, M) {
      var Y = (0, s.mergeSameStackData)(w, u);
      x[M].data = Y;
    }), x;
  }
  function O(u, x) {
    var w = u.min, M = u.max, Y = u.axis, re = (0, r.default)(x, 2), le = re[0], de = re[1], he = (0, t.default)(w), pe = (0, t.default)(M);
    if (C(w) || (w = U[Y + "AxisConfig"].min, he = "string"), C(M) || (M = U[Y + "AxisConfig"].max, pe = "string"), he === "string") {
      w = parseInt(le - B(le * parseFloat(w) / 100));
      var ge = m(w);
      w = parseFloat((w / ge - 0.1).toFixed(1)) * ge;
    }
    if (pe === "string") {
      M = parseInt(de + B(de * parseFloat(M) / 100));
      var ye = m(M);
      M = parseFloat((M / ye + 0.1).toFixed(1)) * ye;
    }
    return [w, M];
  }
  function m(u) {
    var x = B(u).toString(), w = x.length, M = x.replace(/0*$/g, "").indexOf("0"), Y = w - 1;
    return M !== -1 && (Y -= M), A(10, Y);
  }
  function C(u) {
    var x = (0, t.default)(u), w = x === "string" && /^\d+%$/.test(u), M = x === "number";
    return w || M;
  }
  function d(u, x, w) {
    var M = [], Y = [], re = 0, le = 0;
    do
      M.push(re -= w);
    while (re > u);
    do
      Y.push(le += w);
    while (le < x);
    return [].concat((0, a.default)(M.reverse()), [0], (0, a.default)(Y));
  }
  function G(u, x, w) {
    var M = [u], Y = u;
    do
      M.push(Y += w);
    while (Y < x);
    return M;
  }
  function S(u, x) {
    return x && (typeof x == "string" && (u = u.map(function(w) {
      return x.replace("{value}", w);
    })), typeof x == "function" && (u = u.map(function(w, M) {
      return x({
        value: w,
        index: M
      });
    }))), u;
  }
  function g(u) {
    return u.map(function(x) {
      var w = x.data, M = x.axisLabel.formatter;
      return T(T({}, x), {}, {
        label: S(w, M)
      });
    });
  }
  function V(u, x, w) {
    var M = w.interval, Y = w.minInterval, re = w.maxInterval, le = w.splitNumber, de = w.axis, he = U[de + "AxisConfig"];
    if (typeof M != "number" && (M = he.interval), typeof Y != "number" && (Y = he.minInterval), typeof re != "number" && (re = he.maxInterval), typeof le != "number" && (le = he.splitNumber), typeof M == "number")
      return M;
    var pe = parseInt((x - u) / (le - 1));
    return pe.toString().length > 1 && (pe = parseInt(pe.toString().replace(/\d$/, "0"))), pe === 0 && (pe = 1), typeof Y == "number" && pe < Y ? Y : typeof re == "number" && pe > re ? re : pe;
  }
  function X(u) {
    var x = u.filter(function(M) {
      var Y = M.axis;
      return Y === "x";
    }), w = u.filter(function(M) {
      var Y = M.axis;
      return Y === "y";
    });
    return x[0] && !x[0].position && (x[0].position = l.xAxisConfig.position), x[1] && !x[1].position && (x[1].position = x[0].position === "bottom" ? "top" : "bottom"), w[0] && !w[0].position && (w[0].position = l.yAxisConfig.position), w[1] && !w[1].position && (w[1].position = w[0].position === "left" ? "right" : "left"), [].concat((0, a.default)(x), (0, a.default)(w));
  }
  function Z(u, x) {
    var w = x.gridArea, M = w.x, Y = w.y, re = w.w, le = w.h;
    return u = u.map(function(de) {
      var he = de.position, pe = [];
      return he === "left" ? pe = [[M, Y], [M, Y + le]].reverse() : he === "right" ? pe = [[M + re, Y], [M + re, Y + le]].reverse() : he === "top" ? pe = [[M, Y], [M + re, Y]] : he === "bottom" && (pe = [[M, Y + le], [M + re, Y + le]]), T(T({}, de), {}, {
        linePosition: pe
      });
    }), u;
  }
  function c(u, x) {
    return u.map(function(w) {
      var M = w.axis, Y = w.linePosition, re = w.position, le = w.label, de = w.boundaryGap;
      typeof de != "boolean" && (de = U[M + "AxisConfig"].boundaryGap);
      var he = le.length, pe = (0, r.default)(Y, 2), ge = (0, r.default)(pe[0], 2), ye = ge[0], Ge = ge[1], Ke = (0, r.default)(pe[1], 2), Ze = Ke[0], Je = Ke[1], Mi = M === "x" ? Ze - ye : Je - Ge, Lt = Mi / (de ? he : he - 1), Rn = new Array(he).fill(0).map(function(Kv, Ot) {
        return M === "x" ? [ye + Lt * (de ? Ot + 0.5 : Ot), Ge] : [ye, Ge + Lt * (de ? Ot + 0.5 : Ot)];
      }), Di = y(M, de, re, Rn, Lt);
      return T(T({}, w), {}, {
        tickPosition: Rn,
        tickLinePosition: Di,
        tickGap: Lt
      });
    });
  }
  function y(u, x, w, M, Y) {
    var re = u === "x" ? 1 : 0, le = 5;
    u === "x" && w === "top" && (le = -5), u === "y" && w === "left" && (le = -5);
    var de = M.map(function(he) {
      var pe = (0, D.deepClone)(he);
      return pe[re] += le, [(0, D.deepClone)(he), pe];
    });
    return x && (re = u === "x" ? 0 : 1, le = Y / 2, de.forEach(function(he) {
      var pe = (0, r.default)(he, 2), ge = pe[0], ye = pe[1];
      ge[re] += le, ye[re] += le;
    })), de;
  }
  function h2(u, x) {
    return u.map(function(w) {
      var M = w.nameGap, Y = w.nameLocation, re = w.position, le = w.linePosition, de = (0, r.default)(le, 2), he = de[0], pe = de[1], ge = (0, a.default)(he);
      Y === "end" && (ge = (0, a.default)(pe)), Y === "center" && (ge[0] = (he[0] + pe[0]) / 2, ge[1] = (he[1] + pe[1]) / 2);
      var ye = 0;
      re === "top" && Y === "center" && (ye = 1), re === "bottom" && Y === "center" && (ye = 1), re === "left" && Y !== "center" && (ye = 1), re === "right" && Y !== "center" && (ye = 1);
      var Ge = M;
      return re === "top" && Y !== "end" && (Ge *= -1), re === "left" && Y !== "start" && (Ge *= -1), re === "bottom" && Y === "start" && (Ge *= -1), re === "right" && Y === "end" && (Ge *= -1), ge[ye] += Ge, T(T({}, w), {}, {
        namePosition: ge
      });
    });
  }
  function P(u, x) {
    var w = x.gridArea, M = w.w, Y = w.h;
    return u.map(function(re) {
      var le = re.tickLinePosition, de = re.position, he = re.boundaryGap, pe = 0, ge = M;
      (de === "top" || de === "bottom") && (pe = 1), (de === "top" || de === "bottom") && (ge = Y), (de === "right" || de === "bottom") && (ge *= -1);
      var ye = le.map(function(Ge) {
        var Ke = (0, r.default)(Ge, 1), Ze = Ke[0], Je = (0, a.default)(Ze);
        return Je[pe] += ge, [(0, a.default)(Ze), Je];
      });
      return he || ye.shift(), T(T({}, re), {}, {
        splitLinePosition: ye
      });
    });
  }
  function q(u) {
    var x = u.animationCurve, w = u.animationFrame, M = u.rLevel;
    return [{
      name: "polyline",
      index: M,
      visible: u.axisLine.show,
      animationCurve: x,
      animationFrame: w,
      shape: K(u),
      style: te(u)
    }];
  }
  function K(u) {
    var x = u.linePosition;
    return {
      points: x
    };
  }
  function te(u) {
    return u.axisLine.style;
  }
  function ae(u) {
    var x = u.animationCurve, w = u.animationFrame, M = u.rLevel, Y = oe(u), re = ve(u);
    return Y.map(function(le) {
      return {
        name: "polyline",
        index: M,
        visible: u.axisTick.show,
        animationCurve: x,
        animationFrame: w,
        shape: le,
        style: re
      };
    });
  }
  function oe(u) {
    var x = u.tickLinePosition;
    return x.map(function(w) {
      return {
        points: w
      };
    });
  }
  function ve(u) {
    return u.axisTick.style;
  }
  function Q(u) {
    var x = u.animationCurve, w = u.animationFrame, M = u.rLevel, Y = ie(u), re = fe(u, Y);
    return Y.map(function(le, de) {
      return {
        name: "text",
        index: M,
        visible: u.axisLabel.show,
        animationCurve: x,
        animationFrame: w,
        shape: le,
        style: re[de],
        setGraphCenter: function() {
        }
      };
    });
  }
  function ie(u) {
    var x = u.label, w = u.tickPosition, M = u.position;
    return w.map(function(Y, re) {
      return {
        position: ce(Y, M),
        content: x[re].toString()
      };
    });
  }
  function ce(u, x) {
    var w = 0, M = 10;
    return (x === "top" || x === "bottom") && (w = 1), (x === "top" || x === "left") && (M = -10), u = (0, D.deepClone)(u), u[w] += M, u;
  }
  function fe(u, x) {
    var w = u.position, M = u.axisLabel.style, Y = j(w);
    M = (0, s.deepMerge)(Y, M);
    var re = x.map(function(le) {
      var de = le.position;
      return T(T({}, M), {}, {
        graphCenter: de
      });
    });
    return re;
  }
  function j(u) {
    if (u === "left")
      return {
        textAlign: "right",
        textBaseline: "middle"
      };
    if (u === "right")
      return {
        textAlign: "left",
        textBaseline: "middle"
      };
    if (u === "top")
      return {
        textAlign: "center",
        textBaseline: "bottom"
      };
    if (u === "bottom")
      return {
        textAlign: "center",
        textBaseline: "top"
      };
  }
  function k(u) {
    var x = u.animationCurve, w = u.animationFrame, M = u.rLevel;
    return [{
      name: "text",
      index: M,
      animationCurve: x,
      animationFrame: w,
      shape: L(u),
      style: F(u)
    }];
  }
  function L(u) {
    var x = u.name, w = u.namePosition;
    return {
      content: x,
      position: w
    };
  }
  function F(u) {
    var x = u.nameLocation, w = u.position, M = u.nameTextStyle, Y = H(w, x);
    return (0, s.deepMerge)(Y, M);
  }
  function H(u, x) {
    if (u === "top" && x === "start" || u === "bottom" && x === "start" || u === "left" && x === "center")
      return {
        textAlign: "right",
        textBaseline: "middle"
      };
    if (u === "top" && x === "end" || u === "bottom" && x === "end" || u === "right" && x === "center")
      return {
        textAlign: "left",
        textBaseline: "middle"
      };
    if (u === "top" && x === "center" || u === "left" && x === "end" || u === "right" && x === "end")
      return {
        textAlign: "center",
        textBaseline: "bottom"
      };
    if (u === "bottom" && x === "center" || u === "left" && x === "start" || u === "right" && x === "start")
      return {
        textAlign: "center",
        textBaseline: "top"
      };
  }
  function ee(u) {
    var x = u.animationCurve, w = u.animationFrame, M = u.rLevel, Y = p(u), re = z(u);
    return Y.map(function(le) {
      return {
        name: "polyline",
        index: M,
        visible: u.splitLine.show,
        animationCurve: x,
        animationFrame: w,
        shape: le,
        style: re
      };
    });
  }
  function p(u) {
    var x = u.splitLinePosition;
    return x.map(function(w) {
      return {
        points: w
      };
    });
  }
  function z(u) {
    return u.splitLine.style;
  }
  return Mt;
}
var Dt = {};
var Oa;
function eu() {
  if (Oa)
    return Dt;
  Oa = 1;
  var e = Pe;
  Object.defineProperty(Dt, "__esModule", {
    value: true
  }), Dt.line = A;
  var t = e(ze()), r = e(Ne()), n = e(Fe()), a = e(Ue()), o = Qe(), l = Xe(), s = e(An()), D = qe();
  function W(Q, ie) {
    var ce = Object.keys(Q);
    if (Object.getOwnPropertySymbols) {
      var fe = Object.getOwnPropertySymbols(Q);
      ie && (fe = fe.filter(function(j) {
        return Object.getOwnPropertyDescriptor(Q, j).enumerable;
      })), ce.push.apply(ce, fe);
    }
    return ce;
  }
  function T(Q) {
    for (var ie = 1; ie < arguments.length; ie++) {
      var ce = arguments[ie] != null ? arguments[ie] : {};
      ie % 2 ? W(Object(ce), true).forEach(function(fe) {
        (0, a.default)(Q, fe, ce[fe]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(ce)) : W(Object(ce)).forEach(function(fe) {
        Object.defineProperty(Q, fe, Object.getOwnPropertyDescriptor(ce, fe));
      });
    }
    return Q;
  }
  var U = s.default.polylineToBezierCurve, B = s.default.getBezierCurveLength;
  function A(Q) {
    var ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ce = ie.xAxis, fe = ie.yAxis, j = ie.series, k = [];
    ce && fe && j && (k = (0, D.initNeedSeries)(j, l.lineConfig, "line"), k = v(k, Q)), (0, o.doUpdate)({
      chart: Q,
      series: k,
      key: "lineArea",
      getGraphConfig: b,
      getStartGraphConfig: m,
      beforeUpdate: C,
      beforeChange: d
    }), (0, o.doUpdate)({
      chart: Q,
      series: k,
      key: "line",
      getGraphConfig: G,
      getStartGraphConfig: X,
      beforeUpdate: C,
      beforeChange: d
    }), (0, o.doUpdate)({
      chart: Q,
      series: k,
      key: "linePoint",
      getGraphConfig: Z,
      getStartGraphConfig: h2
    }), (0, o.doUpdate)({
      chart: Q,
      series: k,
      key: "lineLabel",
      getGraphConfig: P
    });
  }
  function v(Q, ie) {
    var ce = ie.axisData;
    return Q.map(function(fe) {
      var j = (0, D.mergeSameStackData)(fe, Q);
      j = R(fe, j);
      var k = N(fe, ce), L = I(j, k), F = E(k);
      return T(T({}, fe), {}, {
        linePosition: L.filter(function(H) {
          return H;
        }),
        lineFillBottomPos: F
      });
    });
  }
  function R(Q, ie) {
    var ce = Q.data;
    return ie.map(function(fe, j) {
      return typeof ce[j] == "number" ? fe : null;
    });
  }
  function N(Q, ie) {
    var ce = Q.xAxisIndex, fe = Q.yAxisIndex, j = ie.find(function(L) {
      var F = L.axis, H = L.index;
      return F === "x" && H === ce;
    }), k = ie.find(function(L) {
      var F = L.axis, H = L.index;
      return F === "y" && H === fe;
    });
    return [j, k];
  }
  function I(Q, ie) {
    var ce = ie.findIndex(function(re) {
      var le = re.data;
      return le === "value";
    }), fe = ie[ce], j = ie[1 - ce], k = fe.linePosition, L = fe.axis, F = j.tickPosition, H = F.length, ee = L === "x" ? 0 : 1, p = k[0][ee], z = k[1][ee], u = z - p, x = fe.maxValue, w = fe.minValue, M = x - w, Y = new Array(H).fill(0).map(function(re, le) {
      var de = Q[le];
      if (typeof de != "number")
        return null;
      var he = (de - w) / M;
      return M === 0 && (he = 0), he * u + p;
    });
    return Y.map(function(re, le) {
      if (le >= H || typeof re != "number")
        return null;
      var de = [re, F[le][1 - ee]];
      return ee === 0 || de.reverse(), de;
    });
  }
  function E(Q) {
    var ie = Q.find(function(z) {
      var u = z.data;
      return u === "value";
    }), ce = ie.axis, fe = ie.linePosition, j = ie.minValue, k = ie.maxValue, L = ce === "x" ? 0 : 1, F = fe[0][L];
    if (j < 0 && k > 0) {
      var H = k - j, ee = Math.abs(fe[0][L] - fe[1][L]), p = Math.abs(j) / H * ee;
      ce === "y" && (p *= -1), F += p;
    }
    return {
      changeIndex: L,
      changeValue: F
    };
  }
  function b(Q) {
    var ie = Q.animationCurve, ce = Q.animationFrame, fe = Q.lineFillBottomPos, j = Q.rLevel;
    return [{
      name: S(Q),
      index: j,
      animationCurve: ie,
      animationFrame: ce,
      visible: Q.lineArea.show,
      lineFillBottomPos: fe,
      shape: $(Q),
      style: f(Q),
      drawed: O
    }];
  }
  function $(Q) {
    var ie = Q.linePosition;
    return {
      points: ie
    };
  }
  function f(Q) {
    var ie = Q.lineArea, ce = Q.color, fe = ie.gradient, j = ie.style, k = [j.fill || ce], L = (0, D.deepMerge)(k, fe);
    L.length === 1 && L.push(L[0]);
    var F = _(Q);
    return j = T(T({}, j), {}, {
      stroke: "rgba(0, 0, 0, 0)"
    }), (0, D.deepMerge)({
      gradientColor: L,
      gradientParams: F,
      gradientType: "linear",
      gradientWith: "fill"
    }, j);
  }
  function _(Q) {
    var ie = Q.lineFillBottomPos, ce = Q.linePosition, fe = ie.changeIndex, j = ie.changeValue, k = ce.map(function(ee) {
      return ee[fe];
    }), L = Math.max.apply(Math, (0, n.default)(k)), F = Math.min.apply(Math, (0, n.default)(k)), H = L;
    return fe === 1 && (H = F), fe === 1 ? [0, H, 0, j] : [H, 0, j, 0];
  }
  function O(Q, ie) {
    var ce = Q.lineFillBottomPos, fe = Q.shape, j = ie.ctx, k = fe.points, L = ce.changeIndex, F = ce.changeValue, H = (0, n.default)(k[k.length - 1]), ee = (0, n.default)(k[0]);
    H[L] = F, ee[L] = F, j.lineTo.apply(j, (0, n.default)(H)), j.lineTo.apply(j, (0, n.default)(ee)), j.closePath(), j.fill();
  }
  function m(Q) {
    var ie = b(Q)[0], ce = T({}, ie.style);
    return ce.opacity = 0, ie.style = ce, [ie];
  }
  function C(Q, ie, ce, fe) {
    var j = Q[ce];
    if (j) {
      var k = S(ie), L = fe.chart.render, F = j[0].name, H = k !== F;
      H && (j.forEach(function(ee) {
        return L.delGraph(ee);
      }), Q[ce] = null);
    }
  }
  function d(Q, ie) {
    var ce = ie.shape.points, fe = Q.shape.points, j = fe.length, k = ce.length;
    if (k > j) {
      var L = fe.slice(-1)[0], F = new Array(k - j).fill(0).map(function(H) {
        return (0, n.default)(L);
      });
      fe.push.apply(fe, (0, n.default)(F));
    } else
      k < j && fe.splice(k);
  }
  function G(Q) {
    var ie = Q.animationCurve, ce = Q.animationFrame, fe = Q.rLevel;
    return [{
      name: S(Q),
      index: fe + 1,
      animationCurve: ie,
      animationFrame: ce,
      shape: $(Q),
      style: g(Q)
    }];
  }
  function S(Q) {
    var ie = Q.smooth;
    return ie ? "smoothline" : "polyline";
  }
  function g(Q) {
    var ie = Q.lineStyle, ce = Q.color, fe = Q.smooth, j = Q.linePosition, k = V(j, fe);
    return (0, D.deepMerge)({
      stroke: ce,
      lineDash: [k, 0]
    }, ie);
  }
  function V(Q) {
    var ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!ie)
      return (0, D.getPolylineLength)(Q);
    var ce = U(Q);
    return B(ce);
  }
  function X(Q) {
    var ie = Q.lineStyle.lineDash, ce = G(Q)[0], fe = ce.style.lineDash;
    return ie ? fe = [0, 0] : fe = (0, n.default)(fe).reverse(), ce.style.lineDash = fe, [ce];
  }
  function Z(Q) {
    var ie = Q.animationCurve, ce = Q.animationFrame, fe = Q.rLevel, j = c(Q), k = y(Q);
    return j.map(function(L) {
      return {
        name: "circle",
        index: fe + 2,
        visible: Q.linePoint.show,
        animationCurve: ie,
        animationFrame: ce,
        shape: L,
        style: k
      };
    });
  }
  function c(Q) {
    var ie = Q.linePosition, ce = Q.linePoint.radius;
    return ie.map(function(fe) {
      var j = (0, r.default)(fe, 2), k = j[0], L = j[1];
      return {
        r: ce,
        rx: k,
        ry: L
      };
    });
  }
  function y(Q) {
    var ie = Q.color, ce = Q.linePoint.style;
    return (0, D.deepMerge)({
      stroke: ie
    }, ce);
  }
  function h2(Q) {
    var ie = Z(Q);
    return ie.forEach(function(ce) {
      ce.shape.r = 0.1;
    }), ie;
  }
  function P(Q) {
    var ie = Q.animationCurve, ce = Q.animationFrame, fe = Q.rLevel, j = q(Q), k = ve(Q);
    return j.map(function(L, F) {
      return {
        name: "text",
        index: fe + 3,
        visible: Q.label.show,
        animationCurve: ie,
        animationFrame: ce,
        shape: L,
        style: k
      };
    });
  }
  function q(Q) {
    var ie = oe(Q), ce = K(Q);
    return ie.map(function(fe, j) {
      return {
        content: fe,
        position: ce[j]
      };
    });
  }
  function K(Q) {
    var ie = Q.linePosition, ce = Q.lineFillBottomPos, fe = Q.label, j = fe.position, k = fe.offset, L = ce.changeIndex, F = ce.changeValue;
    return ie.map(function(H) {
      if (j === "bottom" && (H = (0, n.default)(H), H[L] = F), j === "center") {
        var ee = (0, n.default)(H);
        ee[L] = F, H = ae(H, ee);
      }
      return te(H, k);
    });
  }
  function te(Q, ie) {
    var ce = (0, r.default)(Q, 2), fe = ce[0], j = ce[1], k = (0, r.default)(ie, 2), L = k[0], F = k[1];
    return [fe + L, j + F];
  }
  function ae(Q, ie) {
    var ce = (0, r.default)(Q, 2), fe = ce[0], j = ce[1], k = (0, r.default)(ie, 2), L = k[0], F = k[1];
    return [(fe + L) / 2, (j + F) / 2];
  }
  function oe(Q) {
    var ie = Q.data, ce = Q.label.formatter;
    if (ie = ie.filter(function(j) {
      return typeof j == "number";
    }).map(function(j) {
      return j.toString();
    }), !ce)
      return ie;
    var fe = (0, t.default)(ce);
    return fe === "string" ? ie.map(function(j) {
      return ce.replace("{value}", j);
    }) : fe === "function" ? ie.map(function(j, k) {
      return ce({
        value: j,
        index: k
      });
    }) : ie;
  }
  function ve(Q) {
    var ie = Q.color, ce = Q.label.style;
    return (0, D.deepMerge)({
      fill: ie
    }, ce);
  }
  return Dt;
}
var Ft = {};
var Ga;
function tu() {
  if (Ga)
    return Ft;
  Ga = 1;
  var e = Pe;
  Object.defineProperty(Ft, "__esModule", {
    value: true
  }), Ft.bar = U;
  var t = e(ze()), r = e(Ue()), n = e(Ne()), a = e(Fe()), o = Qe(), l = Xe(), s = Be(), D = qe();
  function W(p, z) {
    var u = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(p);
      z && (x = x.filter(function(w) {
        return Object.getOwnPropertyDescriptor(p, w).enumerable;
      })), u.push.apply(u, x);
    }
    return u;
  }
  function T(p) {
    for (var z = 1; z < arguments.length; z++) {
      var u = arguments[z] != null ? arguments[z] : {};
      z % 2 ? W(Object(u), true).forEach(function(x) {
        (0, r.default)(p, x, u[x]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(u)) : W(Object(u)).forEach(function(x) {
        Object.defineProperty(p, x, Object.getOwnPropertyDescriptor(u, x));
      });
    }
    return p;
  }
  function U(p) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = z.xAxis, x = z.yAxis, w = z.series, M = [];
    u && x && w && (M = (0, D.initNeedSeries)(w, l.barConfig, "bar"), M = B(M, p), M = A(M), M = O(M)), (0, o.doUpdate)({
      chart: p,
      series: M.slice(-1),
      key: "backgroundBar",
      getGraphConfig: V
    }), M.reverse(), (0, o.doUpdate)({
      chart: p,
      series: M,
      key: "bar",
      getGraphConfig: y,
      getStartGraphConfig: ve,
      beforeUpdate: fe
    }), (0, o.doUpdate)({
      chart: p,
      series: M,
      key: "barLabel",
      getGraphConfig: j
    });
  }
  function B(p, z) {
    var u = z.axisData;
    return p.forEach(function(x) {
      var w = x.xAxisIndex, M = x.yAxisIndex;
      typeof w != "number" && (w = 0), typeof M != "number" && (M = 0);
      var Y = u.find(function(he) {
        var pe = he.axis, ge = he.index;
        return "".concat(pe).concat(ge) === "x".concat(w);
      }), re = u.find(function(he) {
        var pe = he.axis, ge = he.index;
        return "".concat(pe).concat(ge) === "y".concat(M);
      }), le = [Y, re], de = le.findIndex(function(he) {
        var pe = he.data;
        return pe === "value";
      });
      x.valueAxis = le[de], x.labelAxis = le[1 - de];
    }), p;
  }
  function A(p, z) {
    var u = R(p);
    return u.forEach(function(x) {
      v(x), I(x), E(x), b(x), _(x);
    }), p;
  }
  function v(p) {
    var z = N(p);
    z = z.map(function(x) {
      return {
        stack: x,
        index: -1
      };
    });
    var u = 0;
    p.forEach(function(x) {
      var w = x.stack;
      if (!w)
        x.barIndex = u, u++;
      else {
        var M = z.find(function(Y) {
          var re = Y.stack;
          return re === w;
        });
        M.index === -1 && (M.index = u, u++), x.barIndex = M.index;
      }
    });
  }
  function R(p) {
    var z = p.map(function(u) {
      var x = u.labelAxis, w = x.axis, M = x.index;
      return w + M;
    });
    return z = (0, a.default)(new Set(z)), z.map(function(u) {
      return p.filter(function(x) {
        var w = x.labelAxis, M = w.axis, Y = w.index;
        return M + Y === u;
      });
    });
  }
  function N(p) {
    var z = [];
    return p.forEach(function(u) {
      var x = u.stack;
      x && z.push(x);
    }), (0, a.default)(new Set(z));
  }
  function I(p) {
    var z = (0, a.default)(new Set(p.map(function(u) {
      var x = u.barIndex;
      return x;
    }))).length;
    p.forEach(function(u) {
      return u.barNum = z;
    });
  }
  function E(p) {
    var z = p.slice(-1)[0], u = z.barCategoryGap, x = z.labelAxis.tickGap, w = 0;
    typeof u == "number" ? w = u : w = (1 - parseInt(u) / 100) * x, p.forEach(function(M) {
      return M.barCategoryWidth = w;
    });
  }
  function b(p) {
    var z = p.slice(-1)[0], u = z.barCategoryWidth, x = z.barWidth, w = z.barGap, M = z.barNum, Y = [];
    typeof x == "number" || x !== "auto" ? Y = $(u, x, w) : x === "auto" && (Y = f(u, x, w, M));
    var re = Y, le = (0, n.default)(re, 2), de = le[0], he = le[1];
    p.forEach(function(pe) {
      pe.barWidth = de, pe.barGap = he;
    });
  }
  function $(p, z, u) {
    var x = 0, w = 0;
    return typeof z == "number" ? x = z : x = parseInt(z) / 100 * p, typeof u == "number" ? w = u : w = parseInt(u) / 100 * x, [x, w];
  }
  function f(p, z, u, x) {
    var w = 0, M = 0, Y = p / x;
    if (typeof u == "number")
      M = u, w = Y - M;
    else {
      var re = 10 + parseInt(u) / 10;
      re === 0 ? (w = Y * 2, M = -w) : (w = Y / re * 10, M = Y - w);
    }
    return [w, M];
  }
  function _(p) {
    var z = p.slice(-1)[0], u = z.barGap, x = z.barWidth, w = z.barNum, M = (u + x) * w - u;
    p.forEach(function(Y) {
      return Y.barAllWidthAndGap = M;
    });
  }
  function O(p, z) {
    return p = C(p), p = m(p), p = G(p), p = S(p), p;
  }
  function m(p) {
    return p.map(function(z) {
      var u = z.labelAxis, x = z.barAllWidthAndGap, w = z.barGap, M = z.barWidth, Y = z.barIndex, re = u.tickGap, le = u.tickPosition, de = u.axis, he = de === "x" ? 0 : 1, pe = le.map(function(ge, ye) {
        var Ge = le[ye][he] - re / 2, Ke = Ge + (re - x) / 2;
        return Ke + (Y + 0.5) * M + Y * w;
      });
      return T(T({}, z), {}, {
        barLabelAxisPos: pe
      });
    });
  }
  function C(p) {
    return p.map(function(z) {
      var u = (0, D.mergeSameStackData)(z, p);
      u = d(z, u);
      var x = z.valueAxis, w = x.axis, M = x.minValue, Y = x.maxValue, re = x.linePosition, le = g(M, Y, M < 0 ? 0 : M, re, w), de = u.map(function(pe) {
        return g(M, Y, pe, re, w);
      }), he = de.map(function(pe) {
        return [le, pe];
      });
      return T(T({}, z), {}, {
        barValueAxisPos: he
      });
    });
  }
  function d(p, z) {
    var u = p.data;
    return z.map(function(x, w) {
      return typeof u[w] == "number" ? x : null;
    }).filter(function(x) {
      return x !== null;
    });
  }
  function G(p) {
    return p.map(function(z) {
      var u = z.barLabelAxisPos, x = z.data;
      return x.forEach(function(w, M) {
        typeof w != "number" && (u[M] = null);
      }), T(T({}, z), {}, {
        barLabelAxisPos: u.filter(function(w) {
          return w !== null;
        })
      });
    });
  }
  function S(p) {
    return p.forEach(function(z) {
      var u = z.data, x = z.barLabelAxisPos, w = z.barValueAxisPos, M = u.filter(function(re) {
        return typeof re == "number";
      }).length, Y = x.length;
      Y > M && (x.splice(M), w.splice(M));
    }), p;
  }
  function g(p, z, u, x, w) {
    if (typeof u != "number")
      return null;
    var M = z - p, Y = w === "x" ? 0 : 1, re = x[1][Y] - x[0][Y], le = (u - p) / M;
    M === 0 && (le = 0);
    var de = le * re;
    return de + x[0][Y];
  }
  function V(p) {
    var z = p.animationCurve, u = p.animationFrame, x = p.rLevel, w = X(p), M = c(p);
    return w.map(function(Y) {
      return {
        name: "rect",
        index: x,
        visible: p.backgroundBar.show,
        animationCurve: z,
        animationFrame: u,
        shape: Y,
        style: M
      };
    });
  }
  function X(p) {
    var z = p.labelAxis, u = p.valueAxis, x = z.tickPosition, w = u.axis, M = u.linePosition, Y = Z(p), re = Y / 2, le = w === "x" ? 0 : 1, de = x.map(function(ye) {
      return ye[1 - le];
    }), he = [M[0][le], M[1][le]], pe = he[0], ge = he[1];
    return de.map(function(ye) {
      return w === "x" ? {
        x: pe,
        y: ye - re,
        w: ge - pe,
        h: Y
      } : {
        x: ye - re,
        y: ge,
        w: Y,
        h: pe - ge
      };
    });
  }
  function Z(p) {
    var z = p.barAllWidthAndGap, u = p.barCategoryWidth, x = p.backgroundBar, w = x.width;
    return typeof w == "number" ? w : w === "auto" ? z : parseInt(w) / 100 * u;
  }
  function c(p) {
    return p.backgroundBar.style;
  }
  function y(p) {
    var z = p.barLabelAxisPos, u = p.animationCurve, x = p.animationFrame, w = p.rLevel, M = h2(p);
    return z.map(function(Y, re) {
      return {
        name: M,
        index: w,
        animationCurve: u,
        animationFrame: x,
        shape: P(p, re),
        style: ae(p, re)
      };
    });
  }
  function h2(p) {
    var z = p.shapeType;
    return z === "leftEchelon" || z === "rightEchelon" ? "polyline" : "rect";
  }
  function P(p, z) {
    var u = p.shapeType;
    return u === "leftEchelon" ? q(p, z) : u === "rightEchelon" ? K(p, z) : te(p, z);
  }
  function q(p, z) {
    var u = p.barValueAxisPos, x = p.barLabelAxisPos, w = p.barWidth, M = p.echelonOffset, Y = (0, n.default)(u[z], 2), re = Y[0], le = Y[1], de = x[z], he = w / 2, pe = p.valueAxis.axis, ge = [];
    return pe === "x" ? (ge[0] = [le, de - he], ge[1] = [le, de + he], ge[2] = [re, de + he], ge[3] = [re + M, de - he], le - re < M && ge.splice(3, 1)) : (ge[0] = [de - he, le], ge[1] = [de + he, le], ge[2] = [de + he, re], ge[3] = [de - he, re - M], re - le < M && ge.splice(3, 1)), {
      points: ge,
      close: true
    };
  }
  function K(p, z) {
    var u = p.barValueAxisPos, x = p.barLabelAxisPos, w = p.barWidth, M = p.echelonOffset, Y = (0, n.default)(u[z], 2), re = Y[0], le = Y[1], de = x[z], he = w / 2, pe = p.valueAxis.axis, ge = [];
    return pe === "x" ? (ge[0] = [le, de + he], ge[1] = [le, de - he], ge[2] = [re, de - he], ge[3] = [re + M, de + he], le - re < M && ge.splice(2, 1)) : (ge[0] = [de + he, le], ge[1] = [de - he, le], ge[2] = [de - he, re], ge[3] = [de + he, re - M], re - le < M && ge.splice(2, 1)), {
      points: ge,
      close: true
    };
  }
  function te(p, z) {
    var u = p.barValueAxisPos, x = p.barLabelAxisPos, w = p.barWidth, M = (0, n.default)(u[z], 2), Y = M[0], re = M[1], le = x[z], de = p.valueAxis.axis, he = {};
    return de === "x" ? (he.x = Y, he.y = le - w / 2, he.w = re - Y, he.h = w) : (he.x = le - w / 2, he.y = re, he.w = w, he.h = Y - re), he;
  }
  function ae(p, z) {
    var u = p.barStyle, x = p.gradient, w = p.color, M = p.independentColor, Y = p.independentColors, re = [u.fill || w], le = (0, D.deepMerge)(re, x.color);
    if (M) {
      var de = Y[z % Y.length];
      le = de instanceof Array ? de : [de];
    }
    le.length === 1 && le.push(le[0]);
    var he = oe(p, z);
    return (0, D.deepMerge)({
      gradientColor: le,
      gradientParams: he,
      gradientType: "linear",
      gradientWith: "fill"
    }, u);
  }
  function oe(p, z) {
    var u = p.barValueAxisPos, x = p.barLabelAxisPos, w = p.data, M = p.valueAxis, Y = M.linePosition, re = M.axis, le = (0, n.default)(u[z], 2), de = le[0], he = le[1], pe = x[z], ge = w[z], ye = (0, n.default)(Y, 2), Ge = ye[0], Ke = ye[1], Ze = re === "x" ? 0 : 1, Je = he;
    return p.gradient.local || (Je = ge < 0 ? Ge[Ze] : Ke[Ze]), re === "y" ? [pe, Je, pe, de] : [Je, pe, de, pe];
  }
  function ve(p) {
    var z = y(p), u = p.shapeType;
    return z.forEach(function(x) {
      var w = x.shape;
      u === "leftEchelon" ? w = Q(w, p) : u === "rightEchelon" ? w = ie(w, p) : w = ce(w, p), x.shape = w;
    }), z;
  }
  function Q(p, z) {
    var u = z.valueAxis.axis;
    p = (0, s.deepClone)(p);
    var x = p, w = x.points, M = u === "x" ? 0 : 1, Y = w[2][M];
    return w.forEach(function(re) {
      return re[M] = Y;
    }), p;
  }
  function ie(p, z) {
    var u = z.valueAxis.axis;
    p = (0, s.deepClone)(p);
    var x = p, w = x.points, M = u === "x" ? 0 : 1, Y = w[2][M];
    return w.forEach(function(re) {
      return re[M] = Y;
    }), p;
  }
  function ce(p, z) {
    var u = z.valueAxis.axis, x = p.x, w = p.y, M = p.w, Y = p.h;
    return u === "x" ? M = 0 : (w = w + Y, Y = 0), {
      x,
      y: w,
      w: M,
      h: Y
    };
  }
  function fe(p, z, u, x) {
    var w = x.chart.render, M = h2(z);
    p[u] && p[u][0].name !== M && (p[u].forEach(function(Y) {
      return w.delGraph(Y);
    }), p[u] = null);
  }
  function j(p) {
    var z = p.animationCurve, u = p.animationFrame, x = p.rLevel, w = k(p), M = ee(p);
    return w.map(function(Y) {
      return {
        name: "text",
        index: x,
        visible: p.label.show,
        animationCurve: z,
        animationFrame: u,
        shape: Y,
        style: M
      };
    });
  }
  function k(p) {
    var z = L(p), u = F(p);
    return u.map(function(x, w) {
      return {
        position: x,
        content: z[w]
      };
    });
  }
  function L(p) {
    var z = p.data, u = p.label, x = u.formatter;
    if (z = z.filter(function(M) {
      return typeof M == "number";
    }).map(function(M) {
      return M.toString();
    }), !x)
      return z;
    var w = (0, t.default)(x);
    return w === "string" ? z.map(function(M) {
      return x.replace("{value}", M);
    }) : w === "function" ? z.map(function(M, Y) {
      return x({
        value: M,
        index: Y
      });
    }) : z;
  }
  function F(p) {
    var z = p.label, u = p.barValueAxisPos, x = p.barLabelAxisPos, w = z.position, M = z.offset, Y = p.valueAxis.axis;
    return u.map(function(re, le) {
      var de = (0, n.default)(re, 2), he = de[0], pe = de[1], ge = x[le], ye = [pe, ge];
      return w === "bottom" && (ye = [he, ge]), w === "center" && (ye = [(he + pe) / 2, ge]), Y === "y" && ye.reverse(), H(ye, M);
    });
  }
  function H(p, z) {
    var u = (0, n.default)(p, 2), x = u[0], w = u[1], M = (0, n.default)(z, 2), Y = M[0], re = M[1];
    return [x + Y, w + re];
  }
  function ee(p) {
    var z = p.color, u = p.label.style, x = p.gradient.color;
    return x.length && (z = x[0]), u = (0, D.deepMerge)({
      fill: z
    }, u), u;
  }
  return Ft;
}
var Bt = {};
var Ta;
function ru() {
  if (Ta)
    return Bt;
  Ta = 1;
  var e = Pe;
  Object.defineProperty(Bt, "__esModule", {
    value: true
  }), Bt.pie = U;
  var t = e(Ue()), r = e(ze()), n = e(Ne()), a = e(Fe()), o = Qe(), l = hi(), s = Be(), D = qe();
  function W(k, L) {
    var F = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(k);
      L && (H = H.filter(function(ee) {
        return Object.getOwnPropertyDescriptor(k, ee).enumerable;
      })), F.push.apply(F, H);
    }
    return F;
  }
  function T(k) {
    for (var L = 1; L < arguments.length; L++) {
      var F = arguments[L] != null ? arguments[L] : {};
      L % 2 ? W(Object(F), true).forEach(function(H) {
        (0, t.default)(k, H, F[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(F)) : W(Object(F)).forEach(function(H) {
        Object.defineProperty(k, H, Object.getOwnPropertyDescriptor(F, H));
      });
    }
    return k;
  }
  function U(k) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = L.series;
    F || (F = []);
    var H = (0, D.initNeedSeries)(F, l.pieConfig, "pie");
    H = B(H, k), H = A(H, k), H = R(H), H = E(H), H = f(H), H = O(H), H = C(H), H = d(H), (0, o.doUpdate)({
      chart: k,
      series: H,
      key: "pie",
      getGraphConfig: Z,
      getStartGraphConfig: c,
      beforeChange: y
    }), (0, o.doUpdate)({
      chart: k,
      series: H,
      key: "pieInsideLabel",
      getGraphConfig: q
    }), (0, o.doUpdate)({
      chart: k,
      series: H,
      key: "pieOutsideLabelLine",
      getGraphConfig: ae,
      getStartGraphConfig: oe
    }), (0, o.doUpdate)({
      chart: k,
      series: H,
      key: "pieOutsideLabel",
      getGraphConfig: ie,
      getStartGraphConfig: ce
    });
  }
  function B(k, L) {
    var F = L.render.area;
    return k.forEach(function(H) {
      var ee = H.center;
      ee = ee.map(function(p, z) {
        return typeof p == "number" ? p : parseInt(p) / 100 * F[z];
      }), H.center = ee;
    }), k;
  }
  function A(k, L) {
    var F = Math.min.apply(Math, (0, a.default)(L.render.area)) / 2;
    return k.forEach(function(H) {
      var ee = H.radius, p = H.data;
      ee = v(ee, F), p.forEach(function(z) {
        var u = z.radius;
        u || (u = ee), u = v(u, F), z.radius = u;
      }), H.radius = ee;
    }), k;
  }
  function v(k, L) {
    return k instanceof Array || (k = [0, k]), k = k.map(function(F) {
      return typeof F == "number" ? F : parseInt(F) / 100 * L;
    }), k;
  }
  function R(k, L) {
    var F = k.filter(function(H) {
      var ee = H.roseType;
      return ee;
    });
    return F.forEach(function(H) {
      var ee = H.radius, p = H.data, z = H.roseSort, u = I(H), x = (0, a.default)(p);
      p = N(p), p.forEach(function(w, M) {
        w.radius[1] = ee[1] - u * M;
      }), z ? p.reverse() : H.data = x, H.roseIncrement = u;
    }), k;
  }
  function N(k) {
    return k.sort(function(L, F) {
      var H = L.value, ee = F.value;
      if (H === ee)
        return 0;
      if (H > ee)
        return -1;
      if (H < ee)
        return 1;
    });
  }
  function I(k) {
    var L = k.radius, F = k.roseIncrement;
    if (typeof F == "number")
      return F;
    if (F === "auto") {
      var H = k.data, ee = H.reduce(function(u, x) {
        var w = x.radius;
        return [].concat((0, a.default)(u), (0, a.default)(w));
      }, []), p = Math.min.apply(Math, (0, a.default)(ee)), z = Math.max.apply(Math, (0, a.default)(ee));
      return (z - p) * 0.6 / (H.length - 1 || 1);
    }
    return parseInt(F) / 100 * L[1];
  }
  function E(k) {
    return k.forEach(function(L) {
      var F = L.data, H = L.percentToFixed, ee = $(F);
      F.forEach(function(z) {
        var u = z.value;
        z.percent = u / ee * 100, z.percentForLabel = b(u / ee * 100, H);
      });
      var p = (0, D.mulAdd)(F.slice(0, -1).map(function(z) {
        var u = z.percent;
        return u;
      }));
      F.slice(-1)[0].percent = 100 - p, F.slice(-1)[0].percentForLabel = b(100 - p, H);
    }), k;
  }
  function b(k) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, F = k.toString(), H = F.split("."), ee = H[1] || "0", p = ee.slice(0, L);
    return H[1] = p, parseFloat(H.join("."));
  }
  function $(k) {
    return (0, D.mulAdd)(k.map(function(L) {
      var F = L.value;
      return F;
    }));
  }
  function f(k) {
    return k.forEach(function(L) {
      var F = L.startAngle, H = L.data;
      H.forEach(function(ee, p) {
        var z = _(H, p), u = (0, n.default)(z, 2), x = u[0], w = u[1];
        ee.startAngle = F + x, ee.endAngle = F + w;
      });
    }), k;
  }
  function _(k, L) {
    var F = Math.PI * 2, H = k.slice(0, L + 1), ee = (0, D.mulAdd)(H.map(function(u) {
      var x = u.percent;
      return x;
    })), p = k[L].percent, z = ee - p;
    return [F * z / 100, F * ee / 100];
  }
  function O(k) {
    return k.forEach(function(L) {
      var F = L.data;
      F.forEach(function(H) {
        H.insideLabelPos = m(L, H);
      });
    }), k;
  }
  function m(k, L) {
    var F = k.center, H = L.startAngle, ee = L.endAngle, p = (0, n.default)(L.radius, 2), z = p[0], u = p[1], x = (z + u) / 2, w = (H + ee) / 2;
    return s.getCircleRadianPoint.apply(void 0, (0, a.default)(F).concat([x, w]));
  }
  function C(k) {
    return k.forEach(function(L) {
      var F = L.data, H = L.center;
      F.forEach(function(ee) {
        var p = ee.startAngle, z = ee.endAngle, u = ee.radius, x = (p + z) / 2, w = s.getCircleRadianPoint.apply(void 0, (0, a.default)(H).concat([u[1], x]));
        ee.edgeCenterPos = w;
      });
    }), k;
  }
  function d(k) {
    return k.forEach(function(L) {
      var F = g(L), H = g(L, false);
      F = V(F), H = V(H), X(F, L), X(H, L, false);
    }), k;
  }
  function G(k) {
    var L = k.outsideLabel.labelLineBendGap, F = S(k);
    return typeof L != "number" && (L = parseInt(L) / 100 * F), L + F;
  }
  function S(k) {
    var L = k.data, F = L.map(function(H) {
      var ee = (0, n.default)(H.radius, 2);
      ee[0];
      var p = ee[1];
      return p;
    });
    return Math.max.apply(Math, (0, a.default)(F));
  }
  function g(k) {
    var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, F = k.data, H = k.center, ee = H[0];
    return F.filter(function(p) {
      var z = p.edgeCenterPos, u = z[0];
      return L ? u <= ee : u > ee;
    });
  }
  function V(k) {
    return k.sort(function(L, F) {
      var H = (0, n.default)(L.edgeCenterPos, 2);
      H[0];
      var ee = H[1], p = (0, n.default)(F.edgeCenterPos, 2);
      p[0];
      var z = p[1];
      if (ee > z)
        return 1;
      if (ee < z)
        return -1;
      if (ee === z)
        return 0;
    }), k;
  }
  function X(k, L) {
    var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, H = L.center, ee = L.outsideLabel, p = G(L);
    k.forEach(function(z) {
      var u = z.edgeCenterPos, x = z.startAngle, w = z.endAngle, M = ee.labelLineEndLength, Y = (x + w) / 2, re = s.getCircleRadianPoint.apply(void 0, (0, a.default)(H).concat([p, Y])), le = (0, a.default)(re);
      le[0] += M * (F ? -1 : 1), z.labelLine = [u, re, le], z.labelLineLength = (0, D.getPolylineLength)(z.labelLine), z.align = {
        textAlign: "left",
        textBaseline: "middle"
      }, F && (z.align.textAlign = "right");
    });
  }
  function Z(k) {
    var L = k.data, F = k.animationCurve, H = k.animationFrame, ee = k.rLevel;
    return L.map(function(p, z) {
      return {
        name: "pie",
        index: ee,
        animationCurve: F,
        animationFrame: H,
        shape: h2(k, z),
        style: P(k, z)
      };
    });
  }
  function c(k) {
    var L = k.animationDelayGap, F = k.startAnimationCurve, H = Z(k);
    return H.forEach(function(ee, p) {
      ee.animationCurve = F, ee.animationDelay = p * L, ee.shape.or = ee.shape.ir;
    }), H;
  }
  function y(k) {
    k.animationDelay = 0;
  }
  function h2(k, L) {
    var F = k.center, H = k.data, ee = H[L], p = ee.radius, z = ee.startAngle, u = ee.endAngle;
    return {
      startAngle: z,
      endAngle: u,
      ir: p[0],
      or: p[1],
      rx: F[0],
      ry: F[1]
    };
  }
  function P(k, L) {
    var F = k.pieStyle, H = k.data, ee = H[L], p = ee.color;
    return (0, D.deepMerge)({
      fill: p
    }, F);
  }
  function q(k) {
    var L = k.animationCurve, F = k.animationFrame, H = k.data, ee = k.rLevel;
    return H.map(function(p, z) {
      return {
        name: "text",
        index: ee,
        visible: k.insideLabel.show,
        animationCurve: L,
        animationFrame: F,
        shape: K(k, z),
        style: te(k)
      };
    });
  }
  function K(k, L) {
    var F = k.insideLabel, H = k.data, ee = F.formatter, p = H[L], z = (0, r.default)(ee), u = "";
    return z === "string" && (u = ee.replace("{name}", p.name), u = u.replace("{percent}", p.percentForLabel), u = u.replace("{value}", p.value)), z === "function" && (u = ee(p)), {
      content: u,
      position: p.insideLabelPos
    };
  }
  function te(k, L) {
    var F = k.insideLabel.style;
    return F;
  }
  function ae(k) {
    var L = k.animationCurve, F = k.animationFrame, H = k.data, ee = k.rLevel;
    return H.map(function(p, z) {
      return {
        name: "polyline",
        index: ee,
        visible: k.outsideLabel.show,
        animationCurve: L,
        animationFrame: F,
        shape: ve(k, z),
        style: Q(k, z)
      };
    });
  }
  function oe(k) {
    var L = k.data, F = ae(k);
    return F.forEach(function(H, ee) {
      H.style.lineDash = [0, L[ee].labelLineLength];
    }), F;
  }
  function ve(k, L) {
    var F = k.data, H = F[L];
    return {
      points: H.labelLine
    };
  }
  function Q(k, L) {
    var F = k.outsideLabel, H = k.data, ee = F.labelLineStyle, p = H[L].color;
    return (0, D.deepMerge)({
      stroke: p,
      lineDash: [H[L].labelLineLength, 0]
    }, ee);
  }
  function ie(k) {
    var L = k.animationCurve, F = k.animationFrame, H = k.data, ee = k.rLevel;
    return H.map(function(p, z) {
      return {
        name: "text",
        index: ee,
        visible: k.outsideLabel.show,
        animationCurve: L,
        animationFrame: F,
        shape: fe(k, z),
        style: j(k, z)
      };
    });
  }
  function ce(k) {
    var L = k.data, F = ie(k);
    return F.forEach(function(H, ee) {
      H.shape.position = L[ee].labelLine[1];
    }), F;
  }
  function fe(k, L) {
    var F = k.outsideLabel, H = k.data, ee = F.formatter, p = H[L], z = p.labelLine, u = p.name, x = p.percentForLabel, w = p.value, M = (0, r.default)(ee), Y = "";
    return M === "string" && (Y = ee.replace("{name}", u), Y = Y.replace("{percent}", x), Y = Y.replace("{value}", w)), M === "function" && (Y = ee(H[L])), {
      content: Y,
      position: z[2]
    };
  }
  function j(k, L) {
    var F = k.outsideLabel, H = k.data, ee = H[L], p = ee.color, z = ee.align, u = F.style;
    return (0, D.deepMerge)(T({
      fill: p
    }, z), u);
  }
  return Bt;
}
var Nt = {};
var Ra;
function nu() {
  if (Ra)
    return Nt;
  Ra = 1;
  var e = Pe;
  Object.defineProperty(Nt, "__esModule", {
    value: true
  }), Nt.radarAxis = T;
  var t = e(Ne()), r = e(Ue()), n = e(Fe()), a = Qe(), o = Xe(), l = Be(), s = qe();
  function D(c, y) {
    var h2 = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(c);
      y && (P = P.filter(function(q) {
        return Object.getOwnPropertyDescriptor(c, q).enumerable;
      })), h2.push.apply(h2, P);
    }
    return h2;
  }
  function W(c) {
    for (var y = 1; y < arguments.length; y++) {
      var h2 = arguments[y] != null ? arguments[y] : {};
      y % 2 ? D(Object(h2), true).forEach(function(P) {
        (0, r.default)(c, P, h2[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(h2)) : D(Object(h2)).forEach(function(P) {
        Object.defineProperty(c, P, Object.getOwnPropertyDescriptor(h2, P));
      });
    }
    return c;
  }
  function T(c) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h2 = y.radar, P = [];
    h2 && (P = U(h2), P = B(P, c), P = A(P, c), P = v(P), P = R(P), P = N(P), P = [P]);
    var q = P;
    P.length && !P[0].show && (q = []), (0, a.doUpdate)({
      chart: c,
      series: q,
      key: "radarAxisSplitArea",
      getGraphConfig: I,
      beforeUpdate: $,
      beforeChange: f
    }), (0, a.doUpdate)({
      chart: c,
      series: q,
      key: "radarAxisSplitLine",
      getGraphConfig: _,
      beforeUpdate: C,
      beforeChange: d
    }), (0, a.doUpdate)({
      chart: c,
      series: q,
      key: "radarAxisLine",
      getGraphConfig: G
    }), (0, a.doUpdate)({
      chart: c,
      series: q,
      key: "radarAxisLable",
      getGraphConfig: V
    }), c.radarAxis = P[0];
  }
  function U(c) {
    return (0, s.deepMerge)((0, l.deepClone)(o.radarAxisConfig), c);
  }
  function B(c, y) {
    var h2 = y.render.area, P = c.center;
    return c.centerPos = P.map(function(q, K) {
      return typeof q == "number" ? q : parseInt(q) / 100 * h2[K];
    }), c;
  }
  function A(c, y) {
    var h2 = y.render.area, P = c.splitNum, q = c.radius, K = Math.min.apply(Math, (0, n.default)(h2)) / 2;
    typeof q != "number" && (q = parseInt(q) / 100 * K);
    var te = q / P;
    return c.ringRadius = new Array(P).fill(0).map(function(ae, oe) {
      return te * (oe + 1);
    }), c.radius = q, c;
  }
  function v(c) {
    var y = c.indicator, h2 = c.centerPos, P = c.radius, q = c.startAngle, K = Math.PI * 2, te = y.length, ae = K / te, oe = new Array(te).fill(0).map(function(ve, Q) {
      return ae * Q + q;
    });
    return c.axisLineAngles = oe, c.axisLinePosition = oe.map(function(ve) {
      return l.getCircleRadianPoint.apply(void 0, (0, n.default)(h2).concat([P, ve]));
    }), c;
  }
  function R(c) {
    var y = c.ringRadius, h2 = y[0] / 2;
    return c.areaRadius = y.map(function(P) {
      return P - h2;
    }), c;
  }
  function N(c) {
    var y = c.axisLineAngles, h2 = c.centerPos, P = c.radius, q = c.axisLabel;
    return P += q.labelGap, c.axisLabelPosition = y.map(function(K) {
      return l.getCircleRadianPoint.apply(void 0, (0, n.default)(h2).concat([P, K]));
    }), c;
  }
  function I(c) {
    var y = c.areaRadius, h2 = c.polygon, P = c.animationCurve, q = c.animationFrame, K = c.rLevel, te = h2 ? "regPolygon" : "ring";
    return y.map(function(ae, oe) {
      return {
        name: te,
        index: K,
        visible: c.splitArea.show,
        animationCurve: P,
        animationFrame: q,
        shape: E(c, oe),
        style: b(c, oe)
      };
    });
  }
  function E(c, y) {
    var h2 = c.polygon, P = c.areaRadius, q = c.indicator, K = c.centerPos, te = q.length, ae = {
      rx: K[0],
      ry: K[1],
      r: P[y]
    };
    return h2 && (ae.side = te), ae;
  }
  function b(c, y) {
    var h2 = c.splitArea, P = c.ringRadius, q = c.axisLineAngles, K = c.polygon, te = c.centerPos, ae = h2.color, oe = h2.style;
    oe = W({
      fill: "rgba(0, 0, 0, 0)"
    }, oe);
    var ve = P[0] - 0;
    if (K) {
      var Q = l.getCircleRadianPoint.apply(void 0, (0, n.default)(te).concat([P[0], q[0]])), ie = l.getCircleRadianPoint.apply(void 0, (0, n.default)(te).concat([P[0], q[1]]));
      ve = (0, s.getPointToLineDistance)(te, Q, ie);
    }
    if (oe = (0, s.deepMerge)((0, l.deepClone)(oe, true), {
      lineWidth: ve
    }), !ae.length)
      return oe;
    var ce = ae.length;
    return (0, s.deepMerge)(oe, {
      stroke: ae[y % ce]
    });
  }
  function $(c, y, h2, P) {
    var q = c[h2];
    if (q) {
      var K = P.chart.render, te = y.polygon, ae = q[0].name, oe = te ? "regPolygon" : "ring", ve = oe !== ae;
      ve && (q.forEach(function(Q) {
        return K.delGraph(Q);
      }), c[h2] = null);
    }
  }
  function f(c, y) {
    var h2 = y.shape.side;
    typeof h2 == "number" && (c.shape.side = h2);
  }
  function _(c) {
    var y = c.ringRadius, h2 = c.polygon, P = c.animationCurve, q = c.animationFrame, K = c.rLevel, te = h2 ? "regPolygon" : "ring";
    return y.map(function(ae, oe) {
      return {
        name: te,
        index: K,
        animationCurve: P,
        animationFrame: q,
        visible: c.splitLine.show,
        shape: O(c, oe),
        style: m(c, oe)
      };
    });
  }
  function O(c, y) {
    var h2 = c.ringRadius, P = c.centerPos, q = c.indicator, K = c.polygon, te = {
      rx: P[0],
      ry: P[1],
      r: h2[y]
    }, ae = q.length;
    return K && (te.side = ae), te;
  }
  function m(c, y) {
    var h2 = c.splitLine, P = h2.color, q = h2.style;
    if (q = W({
      fill: "rgba(0, 0, 0, 0)"
    }, q), !P.length)
      return q;
    var K = P.length;
    return (0, s.deepMerge)(q, {
      stroke: P[y % K]
    });
  }
  function C(c, y, h2, P) {
    var q = c[h2];
    if (q) {
      var K = P.chart.render, te = y.polygon, ae = q[0].name, oe = te ? "regPolygon" : "ring", ve = oe !== ae;
      ve && (q.forEach(function(Q) {
        return K.delGraph(Q);
      }), c[h2] = null);
    }
  }
  function d(c, y) {
    var h2 = y.shape.side;
    typeof h2 == "number" && (c.shape.side = h2);
  }
  function G(c) {
    var y = c.axisLinePosition, h2 = c.animationCurve, P = c.animationFrame, q = c.rLevel;
    return y.map(function(K, te) {
      return {
        name: "polyline",
        index: q,
        visible: c.axisLine.show,
        animationCurve: h2,
        animationFrame: P,
        shape: S(c, te),
        style: g(c, te)
      };
    });
  }
  function S(c, y) {
    var h2 = c.centerPos, P = c.axisLinePosition, q = [h2, P[y]];
    return {
      points: q
    };
  }
  function g(c, y) {
    var h2 = c.axisLine, P = h2.color, q = h2.style;
    if (!P.length)
      return q;
    var K = P.length;
    return (0, s.deepMerge)(q, {
      stroke: P[y % K]
    });
  }
  function V(c) {
    var y = c.axisLabelPosition, h2 = c.animationCurve, P = c.animationFrame, q = c.rLevel;
    return y.map(function(K, te) {
      return {
        name: "text",
        index: q,
        visible: c.axisLabel.show,
        animationCurve: h2,
        animationFrame: P,
        shape: X(c, te),
        style: Z(c, te)
      };
    });
  }
  function X(c, y) {
    var h2 = c.axisLabelPosition, P = c.indicator;
    return {
      content: P[y].name,
      position: h2[y]
    };
  }
  function Z(c, y) {
    var h2 = c.axisLabel, P = (0, t.default)(c.centerPos, 2), q = P[0], K = P[1], te = c.axisLabelPosition, ae = h2.color, oe = h2.style, ve = (0, t.default)(te[y], 2), Q = ve[0], ie = ve[1], ce = Q > q ? "left" : "right", fe = ie > K ? "top" : "bottom";
    if (oe = (0, s.deepMerge)({
      textAlign: ce,
      textBaseline: fe
    }, oe), !ae.length)
      return oe;
    var j = ae.length;
    return (0, s.deepMerge)(oe, {
      fill: ae[y % j]
    });
  }
  return Nt;
}
var jt = {};
var Ma;
function au() {
  if (Ma)
    return jt;
  Ma = 1;
  var e = Pe;
  Object.defineProperty(jt, "__esModule", {
    value: true
  }), jt.radar = B;
  var t = e(Ue()), r = e(ze()), n = e(Ne()), a = e(Fe()), o = Qe(), l = Xe(), s = Be(), D = At, W = qe();
  function T(g, V) {
    var X = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var Z = Object.getOwnPropertySymbols(g);
      V && (Z = Z.filter(function(c) {
        return Object.getOwnPropertyDescriptor(g, c).enumerable;
      })), X.push.apply(X, Z);
    }
    return X;
  }
  function U(g) {
    for (var V = 1; V < arguments.length; V++) {
      var X = arguments[V] != null ? arguments[V] : {};
      V % 2 ? T(Object(X), true).forEach(function(Z) {
        (0, t.default)(g, Z, X[Z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(X)) : T(Object(X)).forEach(function(Z) {
        Object.defineProperty(g, Z, Object.getOwnPropertyDescriptor(X, Z));
      });
    }
    return g;
  }
  function B(g) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = V.series;
    X || (X = []);
    var Z = (0, W.initNeedSeries)(X, l.radarConfig, "radar");
    Z = A(Z, g), Z = v(Z, g), Z = R(Z, g), (0, o.doUpdate)({
      chart: g,
      series: Z,
      key: "radar",
      getGraphConfig: N,
      getStartGraphConfig: I,
      beforeChange: $
    }), (0, o.doUpdate)({
      chart: g,
      series: Z,
      key: "radarPoint",
      getGraphConfig: f,
      getStartGraphConfig: _
    }), (0, o.doUpdate)({
      chart: g,
      series: Z,
      key: "radarLabel",
      getGraphConfig: C
    });
  }
  function A(g, V) {
    var X = V.radarAxis;
    if (!X)
      return [];
    var Z = X.indicator, c = X.axisLineAngles, y = X.radius, h2 = X.centerPos;
    return g.forEach(function(P) {
      var q = P.data;
      P.dataRadius = [], P.radarPosition = Z.map(function(K, te) {
        var ae = K.max, oe = K.min, ve = q[te];
        typeof ae != "number" && (ae = ve), typeof oe != "number" && (oe = 0), typeof ve != "number" && (ve = oe);
        var Q = (ve - oe) / (ae - oe) * y;
        return P.dataRadius[te] = Q, s.getCircleRadianPoint.apply(void 0, (0, a.default)(h2).concat([Q, c[te]]));
      });
    }), g;
  }
  function v(g, V) {
    var X = V.radarAxis;
    if (!X)
      return [];
    var Z = X.centerPos, c = X.axisLineAngles;
    return g.forEach(function(y) {
      var h2 = y.dataRadius, P = y.label, q = P.labelGap;
      y.labelPosition = h2.map(function(K, te) {
        return s.getCircleRadianPoint.apply(void 0, (0, a.default)(Z).concat([K + q, c[te]]));
      });
    }), g;
  }
  function R(g, V) {
    var X = V.radarAxis;
    if (!X)
      return [];
    var Z = (0, n.default)(X.centerPos, 2), c = Z[0], y = Z[1];
    return g.forEach(function(h2) {
      var P = h2.labelPosition, q = P.map(function(K) {
        var te = (0, n.default)(K, 2), ae = te[0], oe = te[1], ve = ae > c ? "left" : "right", Q = oe > y ? "top" : "bottom";
        return {
          textAlign: ve,
          textBaseline: Q
        };
      });
      h2.labelAlign = q;
    }), g;
  }
  function N(g) {
    var V = g.animationCurve, X = g.animationFrame, Z = g.rLevel;
    return [{
      name: "polyline",
      index: Z,
      animationCurve: V,
      animationFrame: X,
      shape: E(g),
      style: b(g)
    }];
  }
  function I(g, V) {
    var X = V.chart.radarAxis.centerPos, Z = N(g)[0], c = Z.shape.points.length, y = new Array(c).fill(0).map(function(h2) {
      return (0, a.default)(X);
    });
    return Z.shape.points = y, [Z];
  }
  function E(g) {
    var V = g.radarPosition;
    return {
      points: V,
      close: true
    };
  }
  function b(g) {
    var V = g.radarStyle, X = g.color, Z = (0, D.getRgbaValue)(X);
    Z[3] = 0.5;
    var c = {
      stroke: X,
      fill: (0, D.getColorFromRgbValue)(Z)
    };
    return (0, W.deepMerge)(c, V);
  }
  function $(g, V) {
    var X = V.shape, Z = g.shape.points, c = Z.length, y = X.points.length;
    if (y > c) {
      var h2 = Z.slice(-1)[0], P = new Array(y - c).fill(0).map(function(q) {
        return (0, a.default)(h2);
      });
      Z.push.apply(Z, (0, a.default)(P));
    } else
      y < c && Z.splice(y);
  }
  function f(g) {
    var V = g.radarPosition, X = g.animationCurve, Z = g.animationFrame, c = g.rLevel;
    return V.map(function(y, h2) {
      return {
        name: "circle",
        index: c,
        animationCurve: X,
        animationFrame: Z,
        visible: g.point.show,
        shape: O(g, h2),
        style: m(g)
      };
    });
  }
  function _(g) {
    var V = f(g);
    return V.forEach(function(X) {
      return X.shape.r = 0.01;
    }), V;
  }
  function O(g, V) {
    var X = g.radarPosition, Z = g.point, c = Z.radius, y = X[V];
    return {
      rx: y[0],
      ry: y[1],
      r: c
    };
  }
  function m(g, V) {
    var X = g.point, Z = g.color, c = X.style;
    return (0, W.deepMerge)({
      stroke: Z
    }, c);
  }
  function C(g) {
    var V = g.labelPosition, X = g.animationCurve, Z = g.animationFrame, c = g.rLevel;
    return V.map(function(y, h2) {
      return {
        name: "text",
        index: c,
        visible: g.label.show,
        animationCurve: X,
        animationFrame: Z,
        shape: d(g, h2),
        style: S(g, h2)
      };
    });
  }
  function d(g, V) {
    var X = g.labelPosition, Z = g.label, c = g.data, y = Z.offset, h2 = Z.formatter, P = G(X[V], y), q = c[V] ? c[V].toString() : "0", K = (0, r.default)(h2);
    return K === "string" && (q = h2.replace("{value}", q)), K === "function" && (q = h2(q)), {
      content: q,
      position: P
    };
  }
  function G(g, V) {
    var X = (0, n.default)(g, 2), Z = X[0], c = X[1], y = (0, n.default)(V, 2), h2 = y[0], P = y[1];
    return [Z + h2, c + P];
  }
  function S(g, V) {
    var X = g.label, Z = g.color, c = g.labelAlign, y = X.style, h2 = U({
      fill: Z
    }, c[V]);
    return (0, W.deepMerge)(h2, y);
  }
  return jt;
}
var Et = {};
var Da;
function iu() {
  if (Da)
    return Et;
  Da = 1;
  var e = Pe;
  Object.defineProperty(Et, "__esModule", {
    value: true
  }), Et.gauge = B;
  var t = e(Ue()), r = e(ze()), n = e(Ne()), a = e(Fe()), o = Qe(), l = vi(), s = Be(), D = qe(), W = At;
  function T(j, k) {
    var L = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(j);
      k && (F = F.filter(function(H) {
        return Object.getOwnPropertyDescriptor(j, H).enumerable;
      })), L.push.apply(L, F);
    }
    return L;
  }
  function U(j) {
    for (var k = 1; k < arguments.length; k++) {
      var L = arguments[k] != null ? arguments[k] : {};
      k % 2 ? T(Object(L), true).forEach(function(F) {
        (0, t.default)(j, F, L[F]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(L)) : T(Object(L)).forEach(function(F) {
        Object.defineProperty(j, F, Object.getOwnPropertyDescriptor(L, F));
      });
    }
    return j;
  }
  function B(j) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = k.series;
    L || (L = []);
    var F = (0, D.initNeedSeries)(L, l.gaugeConfig, "gauge");
    F = A(F, j), F = v(F, j), F = R(F, j), F = N(F), F = I(F), F = E(F), F = b(F), F = $(F), F = f(F), F = _(F), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugeAxisTick",
      getGraphConfig: m
    }), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugeAxisLabel",
      getGraphConfig: G
    }), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugeBackgroundArc",
      getGraphConfig: V,
      getStartGraphConfig: c
    }), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugeArc",
      getGraphConfig: y,
      getStartGraphConfig: q,
      beforeChange: K
    }), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugePointer",
      getGraphConfig: te,
      getStartGraphConfig: Q
    }), (0, o.doUpdate)({
      chart: j,
      series: F,
      key: "gaugeDetails",
      getGraphConfig: ie
    });
  }
  function A(j, k) {
    var L = k.render.area;
    return j.forEach(function(F) {
      var H = F.center;
      H = H.map(function(ee, p) {
        return typeof ee == "number" ? ee : parseInt(ee) / 100 * L[p];
      }), F.center = H;
    }), j;
  }
  function v(j, k) {
    var L = k.render.area, F = Math.min.apply(Math, (0, a.default)(L)) / 2;
    return j.forEach(function(H) {
      var ee = H.radius;
      typeof ee != "number" && (ee = parseInt(ee) / 100 * F), H.radius = ee;
    }), j;
  }
  function R(j, k) {
    var L = k.render.area, F = Math.min.apply(Math, (0, a.default)(L)) / 2;
    return j.forEach(function(H) {
      var ee = H.radius, p = H.data, z = H.arcLineWidth;
      p.forEach(function(u) {
        var x = u.radius, w = u.lineWidth;
        x || (x = ee), typeof x != "number" && (x = parseInt(x) / 100 * F), u.radius = x, w || (w = z), u.lineWidth = w;
      });
    }), j;
  }
  function N(j, k) {
    return j.forEach(function(L) {
      var F = L.startAngle, H = L.endAngle, ee = L.data, p = L.min, z = L.max, u = H - F, x = z - p;
      ee.forEach(function(w) {
        var M = w.value, Y = Math.abs((M - p) / x * u);
        w.startAngle = F, w.endAngle = F + Y;
      });
    }), j;
  }
  function I(j, k) {
    return j.forEach(function(L) {
      var F = L.data;
      F.forEach(function(H) {
        var ee = H.color, p = H.gradient;
        (!p || !p.length) && (p = ee), p instanceof Array || (p = [p]), H.gradient = p;
      });
    }), j;
  }
  function E(j, k) {
    return j.forEach(function(L) {
      var F = L.startAngle, H = L.endAngle, ee = L.splitNum, p = L.center, z = L.radius, u = L.arcLineWidth, x = L.axisTick, w = x.tickLength, M = x.style.lineWidth, Y = H - F, re = z - u / 2, le = re - w, de = Y / (ee - 1), he = 2 * Math.PI * z * Y / (Math.PI * 2), pe = Math.ceil(M / 2) / he * Y;
      L.tickAngles = [], L.tickInnerRadius = [], L.tickPosition = new Array(ee).fill(0).map(function(ge, ye) {
        var Ge = F + de * ye;
        return ye === 0 && (Ge += pe), ye === ee - 1 && (Ge -= pe), L.tickAngles[ye] = Ge, L.tickInnerRadius[ye] = le, [s.getCircleRadianPoint.apply(void 0, (0, a.default)(p).concat([re, Ge])), s.getCircleRadianPoint.apply(void 0, (0, a.default)(p).concat([le, Ge]))];
      });
    }), j;
  }
  function b(j, k) {
    return j.forEach(function(L) {
      var F = L.center, H = L.tickInnerRadius, ee = L.tickAngles, p = L.axisLabel.labelGap, z = ee.map(function(x, w) {
        return s.getCircleRadianPoint.apply(void 0, (0, a.default)(F).concat([H[w] - p, ee[w]]));
      }), u = z.map(function(x) {
        var w = (0, n.default)(x, 2), M = w[0], Y = w[1];
        return {
          textAlign: M > F[0] ? "right" : "left",
          textBaseline: Y > F[1] ? "bottom" : "top"
        };
      });
      L.labelPosition = z, L.labelAlign = u;
    }), j;
  }
  function $(j, k) {
    return j.forEach(function(L) {
      var F = L.axisLabel, H = L.min, ee = L.max, p = L.splitNum, z = F.data, u = F.formatter, x = (ee - H) / (p - 1), w = new Array(p).fill(0).map(function(Y, re) {
        return parseInt(H + x * re);
      }), M = (0, r.default)(u);
      z = (0, D.deepMerge)(w, z).map(function(Y, re) {
        var le = Y;
        return M === "string" && (le = u.replace("{value}", Y)), M === "function" && (le = u({
          value: Y,
          index: re
        })), le;
      }), F.data = z;
    }), j;
  }
  function f(j, k) {
    return j.forEach(function(L) {
      var F = L.data, H = L.details, ee = L.center, p = H.position, z = H.offset, u = F.map(function(x) {
        var w = x.startAngle, M = x.endAngle, Y = x.radius, re = null;
        return p === "center" ? re = ee : p === "start" ? re = s.getCircleRadianPoint.apply(void 0, (0, a.default)(ee).concat([Y, w])) : p === "end" && (re = s.getCircleRadianPoint.apply(void 0, (0, a.default)(ee).concat([Y, M]))), O(re, z);
      });
      L.detailsPosition = u;
    }), j;
  }
  function _(j, k) {
    return j.forEach(function(L) {
      var F = L.data, H = L.details, ee = H.formatter, p = (0, r.default)(ee), z = F.map(function(u) {
        var x = u.value;
        return p === "string" && (x = ee.replace("{value}", "{nt}"), x = x.replace("{name}", u.name)), p === "function" && (x = ee(u)), x.toString();
      });
      L.detailsContent = z;
    }), j;
  }
  function O(j, k) {
    var L = (0, n.default)(j, 2), F = L[0], H = L[1], ee = (0, n.default)(k, 2), p = ee[0], z = ee[1];
    return [F + p, H + z];
  }
  function m(j) {
    var k = j.tickPosition, L = j.animationCurve, F = j.animationFrame, H = j.rLevel;
    return k.map(function(ee, p) {
      return {
        name: "polyline",
        index: H,
        visible: j.axisTick.show,
        animationCurve: L,
        animationFrame: F,
        shape: C(j, p),
        style: d(j)
      };
    });
  }
  function C(j, k) {
    var L = j.tickPosition;
    return {
      points: L[k]
    };
  }
  function d(j, k) {
    var L = j.axisTick.style;
    return L;
  }
  function G(j) {
    var k = j.labelPosition, L = j.animationCurve, F = j.animationFrame, H = j.rLevel;
    return k.map(function(ee, p) {
      return {
        name: "text",
        index: H,
        visible: j.axisLabel.show,
        animationCurve: L,
        animationFrame: F,
        shape: S(j, p),
        style: g(j, p)
      };
    });
  }
  function S(j, k) {
    var L = j.labelPosition, F = j.axisLabel.data;
    return {
      content: F[k].toString(),
      position: L[k]
    };
  }
  function g(j, k) {
    var L = j.labelAlign, F = j.axisLabel, H = F.style;
    return (0, D.deepMerge)(U({}, L[k]), H);
  }
  function V(j) {
    var k = j.animationCurve, L = j.animationFrame, F = j.rLevel;
    return [{
      name: "arc",
      index: F,
      visible: j.backgroundArc.show,
      animationCurve: k,
      animationFrame: L,
      shape: X(j),
      style: Z(j)
    }];
  }
  function X(j) {
    var k = j.startAngle, L = j.endAngle, F = j.center, H = j.radius;
    return {
      rx: F[0],
      ry: F[1],
      r: H,
      startAngle: k,
      endAngle: L
    };
  }
  function Z(j) {
    var k = j.backgroundArc, L = j.arcLineWidth, F = k.style;
    return (0, D.deepMerge)({
      lineWidth: L
    }, F);
  }
  function c(j) {
    var k = V(j)[0], L = U({}, k.shape);
    return L.endAngle = k.shape.startAngle, k.shape = L, [k];
  }
  function y(j) {
    var k = j.data, L = j.animationCurve, F = j.animationFrame, H = j.rLevel;
    return k.map(function(ee, p) {
      return {
        name: "agArc",
        index: H,
        animationCurve: L,
        animationFrame: F,
        shape: h2(j, p),
        style: P(j, p)
      };
    });
  }
  function h2(j, k) {
    var L = j.data, F = j.center, H = j.endAngle, ee = L[k], p = ee.radius, z = ee.startAngle, u = ee.endAngle, x = ee.localGradient;
    return x && (H = u), {
      rx: F[0],
      ry: F[1],
      r: p,
      startAngle: z,
      endAngle: u,
      gradientEndAngle: H
    };
  }
  function P(j, k) {
    var L = j.data, F = j.dataItemStyle, H = L[k], ee = H.lineWidth, p = H.gradient;
    return p = p.map(function(z) {
      return (0, W.getRgbaValue)(z);
    }), (0, D.deepMerge)({
      lineWidth: ee,
      gradient: p
    }, F);
  }
  function q(j) {
    var k = y(j);
    return k.map(function(L) {
      var F = U({}, L.shape);
      F.endAngle = L.shape.startAngle, L.shape = F;
    }), k;
  }
  function K(j, k) {
    var L = j.style.gradient, F = L.length, H = k.style.gradient.length;
    if (F > H)
      L.splice(H);
    else {
      var ee = L.slice(-1)[0];
      L.push.apply(L, (0, a.default)(new Array(H - F).fill(0).map(function(p) {
        return (0, a.default)(ee);
      })));
    }
  }
  function te(j) {
    var k = j.animationCurve, L = j.animationFrame, F = j.center, H = j.rLevel;
    return [{
      name: "polyline",
      index: H,
      visible: j.pointer.show,
      animationCurve: k,
      animationFrame: L,
      shape: ae(j),
      style: oe(j),
      setGraphCenter: function(p, z) {
        z.style.graphCenter = F;
      }
    }];
  }
  function ae(j) {
    var k = j.center;
    return {
      points: ve(k),
      close: true
    };
  }
  function oe(j) {
    var k = j.startAngle, L = j.endAngle, F = j.min, H = j.max, ee = j.data, p = j.pointer, z = j.center, u = p.valueIndex, x = p.style, w = ee[u] ? ee[u].value : 0, M = (w - F) / (H - F) * (L - k) + k + Math.PI / 2;
    return (0, D.deepMerge)({
      rotate: (0, D.radianToAngle)(M),
      scale: [1, 1],
      graphCenter: z
    }, x);
  }
  function ve(j) {
    var k = (0, n.default)(j, 2), L = k[0], F = k[1], H = [L, F - 40], ee = [L + 5, F], p = [L, F + 10], z = [L - 5, F];
    return [H, ee, p, z];
  }
  function Q(j) {
    var k = j.startAngle, L = te(j)[0];
    return L.style.rotate = (0, D.radianToAngle)(k + Math.PI / 2), [L];
  }
  function ie(j) {
    var k = j.detailsPosition, L = j.animationCurve, F = j.animationFrame, H = j.rLevel, ee = j.details.show;
    return k.map(function(p, z) {
      return {
        name: "numberText",
        index: H,
        visible: ee,
        animationCurve: L,
        animationFrame: F,
        shape: ce(j, z),
        style: fe(j, z)
      };
    });
  }
  function ce(j, k) {
    var L = j.detailsPosition, F = j.detailsContent, H = j.data, ee = j.details, p = L[k], z = F[k], u = H[k].value, x = ee.valueToFixed;
    return {
      number: [u],
      content: z,
      position: p,
      toFixed: x
    };
  }
  function fe(j, k) {
    var L = j.details, F = j.data, H = L.style, ee = F[k].color;
    return (0, D.deepMerge)({
      fill: ee
    }, H);
  }
  return Et;
}
var Wt = {};
var Fa;
function ou() {
  if (Fa)
    return Wt;
  Fa = 1;
  var e = Pe;
  Object.defineProperty(Wt, "__esModule", {
    value: true
  }), Wt.legend = D;
  var t = e(Ue()), r = e(Ne()), n = e(ze()), a = Qe(), o = Be(), l = Xe(), s = qe();
  function D(c) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h2 = y.legend;
    h2 ? (h2 = (0, s.deepMerge)((0, o.deepClone)(l.legendConfig, true), h2), h2 = W(h2), h2 = T(h2, y, c), h2 = U(h2, c), h2 = v(h2, c), h2 = [h2]) : h2 = [], (0, a.doUpdate)({
      chart: c,
      series: h2,
      key: "legendIcon",
      getGraphConfig: C
    }), (0, a.doUpdate)({
      chart: c,
      series: h2,
      key: "legendText",
      getGraphConfig: S
    });
  }
  function W(c) {
    var y = c.data;
    return c.data = y.map(function(h2) {
      var P = (0, n.default)(h2);
      return P === "string" ? {
        name: h2
      } : P === "object" ? h2 : {
        name: ""
      };
    }), c;
  }
  function T(c, y, h2) {
    var P = y.series, q = h2.legendStatus, K = c.data.filter(function(te) {
      var ae = te.name, oe = P.find(function(ve) {
        var Q = ve.name;
        return ae === Q;
      });
      return oe ? (te.color || (te.color = oe.color), te.icon || (te.icon = oe.type), te) : false;
    });
    return (!q || q.length !== c.data.length) && (q = new Array(c.data.length).fill(true)), K.forEach(function(te, ae) {
      return te.status = q[ae];
    }), c.data = K, h2.legendStatus = q, c;
  }
  function U(c, y) {
    var h2 = y.render.ctx, P = c.data, q = c.textStyle, K = c.textUnselectedStyle;
    return P.forEach(function(te) {
      var ae = te.status, oe = te.name;
      te.textWidth = B(h2, oe, ae ? q : K);
    }), c;
  }
  function B(c, y, h2) {
    return c.font = A(h2), c.measureText(y).width;
  }
  function A(c) {
    var y = c.fontFamily, h2 = c.fontSize;
    return "".concat(h2, "px ").concat(y);
  }
  function v(c, y) {
    var h2 = c.orient;
    return h2 === "vertical" ? f(c, y) : R(c, y), c;
  }
  function R(c, y) {
    var h2 = c.iconHeight, P = c.itemGap, q = N(c, y), K = q.map(function(oe) {
      return E(oe, c, y);
    }), te = b(c, y), ae = {
      textAlign: "left",
      textBaseline: "middle"
    };
    q.forEach(function(oe, ve) {
      return oe.forEach(function(Q) {
        var ie = Q.iconPosition, ce = Q.textPosition, fe = K[ve], j = te + ve * (P + h2);
        Q.iconPosition = $(ie, [fe, j]), Q.textPosition = $(ce, [fe, j]), Q.align = ae;
      });
    });
  }
  function N(c, y) {
    var h2 = c.data, P = c.iconWidth, q = y.render.area[0], K = 0, te = [[]];
    return h2.forEach(function(ae, oe) {
      var ve = I(K, oe, c), Q = ve + P + 5 + ae.textWidth;
      Q >= q && (K = oe, ve = I(K, oe, c), te.push([])), ae.iconPosition = [ve, 0], ae.textPosition = [ve + P + 5, 0], te.slice(-1)[0].push(ae);
    }), te;
  }
  function I(c, y, h2) {
    var P = h2.data, q = h2.iconWidth, K = h2.itemGap, te = P.slice(c, y);
    return (0, s.mulAdd)(te.map(function(ae) {
      var oe = ae.textWidth;
      return oe;
    })) + (y - c) * (K + 5 + q);
  }
  function E(c, y, h2) {
    var P = y.left, q = y.right, K = y.iconWidth, te = y.itemGap, ae = h2.render.area[0], oe = c.length, ve = (0, s.mulAdd)(c.map(function(ie) {
      var ce = ie.textWidth;
      return ce;
    })) + oe * (5 + K) + (oe - 1) * te, Q = [P, q].findIndex(function(ie) {
      return ie !== "auto";
    });
    return Q === -1 ? (ae - ve) / 2 : Q === 0 ? typeof P == "number" ? P : parseInt(P) / 100 * ae : (typeof q != "number" && (q = parseInt(q) / 100 * ae), ae - (ve + q));
  }
  function b(c, y) {
    var h2 = c.top, P = c.bottom, q = c.iconHeight, K = y.render.area[1], te = [h2, P].findIndex(function(ie) {
      return ie !== "auto";
    }), ae = q / 2;
    if (te === -1) {
      var oe = y.gridArea, ve = oe.y, Q = oe.h;
      return ve + Q + 45 - ae;
    } else
      return te === 0 ? typeof h2 == "number" ? h2 - ae : parseInt(h2) / 100 * K - ae : (typeof P != "number" && (P = parseInt(P) / 100 * K), K - P - ae);
  }
  function $(c, y) {
    var h2 = (0, r.default)(c, 2), P = h2[0], q = h2[1], K = (0, r.default)(y, 2), te = K[0], ae = K[1];
    return [P + te, q + ae];
  }
  function f(c, y) {
    var h2 = _(c, y), P = (0, r.default)(h2, 2), q = P[0], K = P[1], te = O(c, y);
    m(c, q);
    var ae = {
      textAlign: "left",
      textBaseline: "middle"
    };
    c.data.forEach(function(oe) {
      var ve = oe.textPosition, Q = oe.iconPosition;
      oe.textPosition = $(ve, [K, te]), oe.iconPosition = $(Q, [K, te]), oe.align = ae;
    });
  }
  function _(c, y) {
    var h2 = c.left, P = c.right, q = y.render.area[0], K = [h2, P].findIndex(function(ae) {
      return ae !== "auto";
    });
    if (K === -1)
      return [true, q - 10];
    var te = [h2, P][K];
    return typeof te != "number" && (te = parseInt(te) / 100 * q), [!!K, te];
  }
  function O(c, y) {
    var h2 = c.iconHeight, P = c.itemGap, q = c.data, K = c.top, te = c.bottom, ae = y.render.area[1], oe = q.length, ve = oe * h2 + (oe - 1) * P, Q = [K, te].findIndex(function(ce) {
      return ce !== "auto";
    });
    if (Q === -1)
      return (ae - ve) / 2;
    var ie = [K, te][Q];
    return typeof ie != "number" && (ie = parseInt(ie) / 100 * ae), Q === 1 && (ie = ae - ie - ve), ie;
  }
  function m(c, y) {
    var h2 = c.data, P = c.iconWidth, q = c.iconHeight, K = c.itemGap, te = q / 2;
    h2.forEach(function(ae, oe) {
      var ve = ae.textWidth, Q = (q + K) * oe + te, ie = y ? 0 - P : 0, ce = y ? ie - 5 - ve : P + 5;
      ae.iconPosition = [ie, Q], ae.textPosition = [ce, Q];
    });
  }
  function C(c, y) {
    var h2 = c.data, P = c.selectAble, q = c.animationCurve, K = c.animationFrame, te = c.rLevel;
    return h2.map(function(ae, oe) {
      return (0, t.default)({
        name: ae.icon === "line" ? "lineIcon" : "rect",
        index: te,
        visible: c.show,
        hover: P,
        click: P,
        animationCurve: q,
        animationFrame: K,
        shape: d(c, oe),
        style: G(c, oe)
      }, "click", Z(c, oe, y));
    });
  }
  function d(c, y) {
    var h2 = c.data, P = c.iconWidth, q = c.iconHeight, K = (0, r.default)(h2[y].iconPosition, 2), te = K[0], ae = K[1], oe = q / 2;
    return {
      x: te,
      y: ae - oe,
      w: P,
      h: q
    };
  }
  function G(c, y) {
    var h2 = c.data, P = c.iconStyle, q = c.iconUnselectedStyle, K = h2[y], te = K.status, ae = K.color, oe = te ? P : q;
    return (0, s.deepMerge)({
      fill: ae
    }, oe);
  }
  function S(c, y) {
    var h2 = c.data, P = c.selectAble, q = c.animationCurve, K = c.animationFrame, te = c.rLevel;
    return h2.map(function(ae, oe) {
      return {
        name: "text",
        index: te,
        visible: c.show,
        hover: P,
        animationCurve: q,
        animationFrame: K,
        hoverRect: X(c, oe),
        shape: g(c, oe),
        style: V(c, oe),
        click: Z(c, oe, y)
      };
    });
  }
  function g(c, y) {
    var h2 = c.data[y], P = h2.textPosition, q = h2.name;
    return {
      content: q,
      position: P
    };
  }
  function V(c, y) {
    var h2 = c.textStyle, P = c.textUnselectedStyle, q = c.data[y], K = q.status, te = q.align, ae = K ? h2 : P;
    return (0, s.deepMerge)((0, o.deepClone)(ae, true), te);
  }
  function X(c, y) {
    var h2 = c.textStyle, P = c.textUnselectedStyle, q = c.data[y], K = q.status, te = (0, r.default)(q.textPosition, 2), ae = te[0], oe = te[1], ve = q.textWidth, Q = K ? h2 : P, ie = Q.fontSize;
    return [ae, oe - ie / 2, ve, ie];
  }
  function Z(c, y, h2) {
    var P = c.data[y].name;
    return function() {
      var q = h2.chart, K = q.legendStatus, te = q.option, ae = !K[y], oe = te.series.find(function(ve) {
        var Q = ve.name;
        return Q === P;
      });
      oe.show = ae, K[y] = ae, h2.chart.setOption(te);
    };
  }
  return Wt;
}
var Ba;
function lu() {
  return Ba || (Ba = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), Object.defineProperty(e, "mergeColor", {
      enumerable: true,
      get: function() {
        return t.mergeColor;
      }
    }), Object.defineProperty(e, "title", {
      enumerable: true,
      get: function() {
        return r.title;
      }
    }), Object.defineProperty(e, "grid", {
      enumerable: true,
      get: function() {
        return n.grid;
      }
    }), Object.defineProperty(e, "axis", {
      enumerable: true,
      get: function() {
        return a.axis;
      }
    }), Object.defineProperty(e, "line", {
      enumerable: true,
      get: function() {
        return o.line;
      }
    }), Object.defineProperty(e, "bar", {
      enumerable: true,
      get: function() {
        return l.bar;
      }
    }), Object.defineProperty(e, "pie", {
      enumerable: true,
      get: function() {
        return s.pie;
      }
    }), Object.defineProperty(e, "radarAxis", {
      enumerable: true,
      get: function() {
        return D.radarAxis;
      }
    }), Object.defineProperty(e, "radar", {
      enumerable: true,
      get: function() {
        return W.radar;
      }
    }), Object.defineProperty(e, "gauge", {
      enumerable: true,
      get: function() {
        return T.gauge;
      }
    }), Object.defineProperty(e, "legend", {
      enumerable: true,
      get: function() {
        return U.legend;
      }
    });
    var t = Ys(), r = Ks(), n = Js(), a = Zs(), o = eu(), l = tu(), s = ru(), D = nu(), W = au(), T = iu(), U = ou();
  }(jr)), jr;
}
var Na;
function su() {
  return Na || (Na = 1, function(e) {
    var t = Pe;
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    var r = t(ze()), n = t(wt()), a = t(fr), o = Be(), l = lu(), s = function D(W) {
      if ((0, n.default)(this, D), !W)
        return console.error("Charts Missing parameters!"), false;
      var T = W.clientWidth, U = W.clientHeight, B = document.createElement("canvas");
      B.setAttribute("width", T), B.setAttribute("height", U), W.appendChild(B);
      var A = {
        container: W,
        canvas: B,
        render: new a.default(B),
        option: null
      };
      Object.assign(this, A);
    };
    e.default = s, s.prototype.setOption = function(D) {
      var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!D || (0, r.default)(D) !== "object")
        return console.error("setOption Missing parameters!"), false;
      W && this.render.graphs.forEach(function(U) {
        return U.animationEnd();
      });
      var T = (0, o.deepClone)(D, true);
      (0, l.mergeColor)(this, T), (0, l.grid)(this, T), (0, l.axis)(this, T), (0, l.radarAxis)(this, T), (0, l.title)(this, T), (0, l.bar)(this, T), (0, l.line)(this, T), (0, l.pie)(this, T), (0, l.radar)(this, T), (0, l.gauge)(this, T), (0, l.legend)(this, T), this.option = D, this.render.launchAnimation();
    }, s.prototype.resize = function() {
      var D = this.container, W = this.canvas, T = this.render, U = this.option, B = D.clientWidth, A = D.clientHeight;
      W.setAttribute("width", B), W.setAttribute("height", A), T.area = [B, A], this.setOption(U);
    };
  }(Nr)), Nr;
}
(function(e) {
  var t = Pe;
  Object.defineProperty(e, "__esModule", {
    value: true
  }), Object.defineProperty(e, "changeDefaultConfig", {
    enumerable: true,
    get: function() {
      return n.changeDefaultConfig;
    }
  }), e.default = void 0;
  var r = t(su()), n = Xe(), a = r.default;
  e.default = a;
})(fi);
var pi = ti(fi);
var uu = {
  __name: "index",
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = ref(null);
    let a = reactive({});
    be(n, s, o), watch(() => t.option, () => {
      a && a.setOption(t.option, true);
    }, { deep: true });
    function o() {
      l();
    }
    function l() {
      a = new pi(n.value), t.option && a.setOption(t.option);
    }
    function s() {
      a && a.resize();
    }
    return (D, W) => (openBlock(), createElementBlock("div", {
      ref_key: "chartsContainerRef",
      ref: r,
      class: "dv-charts-container"
    }, [
      createBaseVNode("div", {
        ref_key: "chartRef",
        ref: n,
        class: "charts-canvas-container"
      }, null, 512)
    ], 512));
  }
};
var Wr = {
  install(e) {
    e.component("DvCharts", uu);
  }
};
var cu = { class: "dv-capsule-chart" };
var fu = { class: "label-column" };
var du = createBaseVNode("div", null, "\xA0", -1);
var hu = { class: "capsule-container" };
var vu = {
  key: 0,
  class: "capsule-item-value"
};
var pu = { class: "unit-label" };
var gu = {
  key: 0,
  class: "unit-text"
};
var mu = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    useCssVars((D) => ({
      "6be2ab5a": unref(a),
      "0accef4c": unref(n)
    }));
    const r = reactive({
      defaultConfig: {
        data: [],
        colors: [
          "#37a2da",
          "#32c5e9",
          "#67e0e3",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293"
        ],
        unit: "",
        showValue: false,
        textColor: "#fff",
        fontSize: 12
      },
      mergedConfig: null,
      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: []
    });
    watch(() => t.config, () => {
      o();
    }, {
      deep: true
    });
    const n = computed(() => `${t.config.fontSize ? t.config.fontSize : r.defaultConfig.fontSize}px`), a = computed(() => t.config.textColor ? t.config.textColor : r.defaultConfig.textColor);
    function o() {
      l(), s();
    }
    function l() {
      r.mergedConfig = xe(
        _e(r.defaultConfig, true),
        t.config || {}
      );
    }
    function s() {
      const { data: D } = r.mergedConfig;
      if (!D.length || D.length === 0) {
        r.labelData = [], r.capsuleLength = [];
        return;
      }
      const W = D.map(({ value: A }) => A), T = Math.max(...W);
      r.capsuleValue = W, r.capsuleLength = W.map((A) => T ? A / T : 0);
      const U = T / 5, B = Array.from(
        new Set(new Array(6).fill(0).map((A, v) => Math.ceil(v * U)))
      );
      r.labelData = B, r.labelDataLength = Array.from(B).map(
        (A) => T ? A / T : 0
      );
    }
    return onMounted(() => {
      o();
    }), (D, W) => (openBlock(), createElementBlock("div", cu, [
      unref(r).mergedConfig ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", fu, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(r).mergedConfig.data, (T) => (openBlock(), createElementBlock("div", {
            key: T.name
          }, toDisplayString(T.name), 1))), 128)),
          du
        ]),
        createBaseVNode("div", hu, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(r).capsuleLength, (T, U) => (openBlock(), createElementBlock("div", {
            key: U,
            class: "capsule-item"
          }, [
            createBaseVNode("div", {
              class: "capsule-item-column",
              style: normalizeStyle(`width: ${T * 100}%; background-color: ${unref(r).mergedConfig.colors[U % unref(r).mergedConfig.colors.length]};`)
            }, [
              unref(r).mergedConfig.showValue ? (openBlock(), createElementBlock("div", vu, toDisplayString(unref(r).capsuleValue[U]), 1)) : createCommentVNode("", true)
            ], 4)
          ]))), 128)),
          createBaseVNode("div", pu, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(r).labelData, (T, U) => (openBlock(), createElementBlock("div", {
              key: T + U
            }, toDisplayString(T), 1))), 128))
          ])
        ]),
        unref(r).mergedConfig.unit ? (openBlock(), createElementBlock("div", gu, toDisplayString(unref(r).mergedConfig.unit), 1)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ]));
  }
};
var zr = {
  install(e) {
    e.component("DvCapsuleChart", mu);
  }
};
var yu = { class: "dv-digital-flop" };
var gi = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      renderer: null,
      defaultConfig: {
        number: [],
        content: "",
        toFixed: 0,
        textAlign: "center",
        rowGap: 0,
        style: {
          fontSize: 30,
          fill: "#3de7c9"
        },
        formatter: void 0,
        animationCurve: "easeOutCubic",
        animationFrame: 50
      },
      mergedConfig: null,
      graph: null
    });
    watch(() => t.config, (B) => {
      T();
    }, { deep: true }), onMounted(() => {
      a();
    });
    function a() {
      o(), l(), s();
    }
    function o() {
      n.renderer = new ui(r.value);
    }
    function l() {
      n.mergedConfig = xe(_e(n.defaultConfig, true), t.config || {});
    }
    function s() {
      const B = D(), A = W();
      n.graph = n.renderer.add({
        name: "numberText",
        animationCurve: n.mergedConfig.animationCurve,
        animationFrame: n.mergedConfig.animationFrame,
        shape: B,
        style: A
      });
    }
    function D() {
      const { number: B, content: A, toFixed: v, textAlign: R, rowGap: N, formatter: I } = n.mergedConfig, [E, b] = n.renderer.area, $ = [E / 2, b / 2];
      return R === "left" && ($[0] = 0), R === "right" && ($[0] = E), {
        number: B,
        content: A,
        toFixed: v,
        position: $,
        rowGap: N,
        formatter: I
      };
    }
    function W() {
      const { style: B, textAlign: A } = n.mergedConfig;
      return xe(B, {
        textAlign: A,
        textBaseline: "middle"
      });
    }
    function T() {
      if (n.graph.animationEnd(), l(), !n.graph)
        return;
      const { animationCurve: B, animationFrame: A } = n.mergedConfig, v = D(), R = W();
      U(n.graph, v), n.graph.animationCurve = B, n.graph.animationFrame = A, n.graph.animation("style", R, true), n.graph.animation("shape", v);
    }
    function U(B, A) {
      const v = B.shape.number.length, R = A.number.length;
      v !== R && (B.shape.number = A.number);
    }
    return (B, A) => (openBlock(), createElementBlock("div", yu, [
      createBaseVNode("canvas", {
        ref_key: "digitalFlop",
        ref: r
      }, null, 512)
    ]));
  }
};
var bu = { class: "dv-active-ring-chart" };
var xu = { class: "active-ring-info" };
var Cu = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    useCssVars((R) => ({
      "2c9ee932": unref(s)
    }));
    const r = ref(null), n = reactive({
      defaultConfig: {
        radius: "50%",
        activeRadius: "55%",
        data: [{ name: "", value: 0 }],
        lineWidth: 20,
        activeTimeGap: 3e3,
        color: [],
        textColor: "#fff",
        digitalFlopStyle: {
          fontSize: 25,
          fill: "#fff"
        },
        digitalFlopToFixed: 0,
        digitalFlopUnit: "",
        animationCurve: "easeOutCubic",
        animationFrame: 50,
        showOriginValue: false
      },
      mergedConfig: null,
      chart: null,
      activeIndex: 0,
      animationHandler: ""
    }), a = computed(() => {
      if (!n.mergedConfig)
        return {};
      const {
        digitalFlopStyle: R,
        digitalFlopToFixed: N,
        data: I,
        showOriginValue: E,
        digitalFlopUnit: b
      } = n.mergedConfig, $ = I.map(({ value: _ }) => _);
      let f;
      if (E)
        f = $[n.activeIndex];
      else {
        const _ = $.reduce((m, C) => m + C, 0);
        f = parseFloat($[n.activeIndex] / _ * 100) || 0;
      }
      return {
        content: E ? `{nt}${b}` : `{nt}${b || "%"}`,
        number: [f],
        style: R,
        toFixed: N
      };
    }), o = computed(() => n.mergedConfig ? n.mergedConfig.data[n.activeIndex].name : ""), l = computed(() => n.mergedConfig ? `font-size: ${n.mergedConfig.digitalFlopStyle.fontSize}px;` : ""), s = computed(() => t.config.textColor ? t.config.textColor : n.defaultConfig.textColor);
    watch(() => t.config, () => {
      clearTimeout(n.animationHandler), n.activeIndex = 0, T(), U();
    }, {
      deep: true
    }), onMounted(() => {
      D();
    }), onUnmounted(() => {
      clearTimeout(n.animationHandler);
    });
    function D() {
      W(), T(), U();
    }
    function W() {
      n.chart = new pi(r.value);
    }
    function T() {
      n.mergedConfig = xe(
        _e(n.defaultConfig, true),
        t.config || {}
      );
    }
    function U() {
      const R = B();
      n.chart.setOption(R, true), v();
    }
    function B() {
      const R = A();
      return n.mergedConfig.data.forEach((N) => {
        N.radius = R;
      }), {
        series: [
          {
            type: "pie",
            ...n.mergedConfig,
            outsideLabel: {
              show: false
            }
          }
        ],
        color: n.mergedConfig.color
      };
    }
    function A(R = false) {
      const { radius: N, activeRadius: I, lineWidth: E } = n.mergedConfig, b = Math.min(...n.chart.render.area) / 2, $ = E / 2;
      let f = R ? I : N;
      typeof f != "number" && (f = parseInt(f) / 100 * b);
      const _ = f - $, O = f + $;
      return [_, O];
    }
    function v() {
      const R = A(), N = A(true), I = B(), { data: E } = I.series[0];
      E.forEach(($, f) => {
        f === n.activeIndex ? $.radius = N : $.radius = R;
      }), n.chart.setOption(I, true);
      const { activeTimeGap: b } = I.series[0];
      n.animationHandler = setTimeout(($) => {
        n.activeIndex += 1, n.activeIndex >= E.length && (n.activeIndex = 0), v();
      }, b);
    }
    return (R, N) => (openBlock(), createElementBlock("div", bu, [
      createBaseVNode("div", {
        ref_key: "activeRingChart",
        ref: r,
        class: "active-ring-chart-container"
      }, null, 512),
      createBaseVNode("div", xu, [
        createVNode(gi, { config: unref(a) }, null, 8, ["config"]),
        createBaseVNode("div", {
          class: "active-ring-name",
          style: normalizeStyle(unref(l))
        }, toDisplayString(unref(o)), 5)
      ])
    ]));
  }
};
var qr = {
  install(e) {
    e.component("DvActiveRingChart", Cu);
  }
};
var Ir = {
  install(e) {
    e.component("DvDigitalFlop", gi);
  }
};
var _u = defineComponent({
  __name: "index",
  setup(e) {
    const t = ref(null), r = reactive({
      allWidth: 0,
      scale: 0,
      datavRoot: "",
      ready: false
    }), n = () => {
      const { width: s, height: D } = screen;
      r.allWidth = s, t.value && (t.value.style.width = `${s}px`, t.value.style.height = `${D}px`);
    }, a = () => {
      const s = document.body.clientWidth;
      t.value && (t.value.style.transform = `scale(${s / r.allWidth})`);
    };
    return be(t, () => {
      a();
    }, () => {
      n(), a(), r.ready = true;
    }), (s, D) => (openBlock(), createElementBlock("div", {
      id: "dv-full-screen-container",
      ref_key: "fullScreenContainer",
      ref: t
    }, [
      unref(r).ready ? renderSlot(s.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ], 512));
  }
});
var Hr = {
  install(e) {
    e.component("DvFullScreenContainer", _u);
  }
};
var $u = ["width", "height"];
var Pu = ["fill", "x", "y", "width", "height"];
var wu = ["values", "begin"];
var ku = ["fill", "x", "y", "width", "height"];
var Au = ["values"];
var Su = ["values"];
var Lu = ["values"];
var Ou = ["values"];
var Gu = ["fill", "x", "y", "height"];
var Tu = createBaseVNode("animate", {
  attributeName: "width",
  values: "0;40;0",
  dur: "2s",
  repeatCount: "indefinite"
}, null, -1);
var Ru = ["values"];
var Mu = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive([200, 50]), a = ref(4), o = ref(20), l = ref(2.5), s = ref(l.value / 2), D = reactive(["#fff", "#0de7c2"]), W = reactive({
      mergedColor: [],
      rects: [],
      points: [],
      svgScale: [1, 1]
    }), T = () => {
      I();
    }, U = () => {
      I();
    }, { width: B, height: A } = be(r, T, U), v = () => {
      const [b, $] = n, f = b / (o.value + 1), _ = $ / (a.value + 1), O = new Array(a.value).fill(0).map((m, C) => new Array(o.value).fill(0).map((d, G) => [
        f * (G + 1),
        _ * (C + 1)
      ]));
      W.points = O.reduce((m, C) => [...m, ...C], []);
    }, R = () => {
      const b = W.points[o.value * 2 - 1], $ = W.points[o.value * 2 - 3];
      W.rects = [b, $];
    }, N = () => {
      const [b, $] = n;
      W.svgScale = [B.value / b, A.value / $];
    }, I = () => {
      v(), R(), N();
    }, E = () => {
      W.mergedColor = xe(_e(D, true), t.color || []);
    };
    return watch(() => t.color, () => {
      E();
    }), onMounted(() => {
      E();
    }), (b, $) => (openBlock(), createElementBlock("div", {
      ref_key: "dvDecoration1",
      ref: r,
      class: "dv-decoration-1"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: `${unref(n)[0]}px`,
        height: `${unref(n)[1]}px`,
        style: normalizeStyle(`transform:scale(${unref(W).svgScale[0]}, ${unref(W).svgScale[1]});`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(W).points, (f) => (openBlock(), createElementBlock(Fragment, { key: f }, [
          Math.random() > 0.6 ? (openBlock(), createElementBlock("rect", {
            key: 0,
            fill: unref(W).mergedColor[0],
            x: f[0] - unref(s),
            y: f[1] - unref(s),
            width: unref(l),
            height: unref(l)
          }, [
            Math.random() > 0.6 ? (openBlock(), createElementBlock("animate", {
              key: 0,
              attributeName: "fill",
              values: `${unref(W).mergedColor[0]};transparent`,
              dur: "1s",
              begin: Math.random() * 2,
              repeatCount: "indefinite"
            }, null, 8, wu)) : createCommentVNode("", true)
          ], 8, Pu)) : createCommentVNode("", true)
        ], 64))), 128)),
        unref(W).rects[0] ? (openBlock(), createElementBlock("rect", {
          key: 0,
          fill: unref(W).mergedColor[1],
          x: unref(W).rects[0][0] - unref(l),
          y: unref(W).rects[0][1] - unref(l),
          width: unref(l) * 2,
          height: unref(l) * 2
        }, [
          createBaseVNode("animate", {
            attributeName: "width",
            values: `0;${unref(l) * 2}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, Au),
          createBaseVNode("animate", {
            attributeName: "height",
            values: `0;${unref(l) * 2}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, Su),
          createBaseVNode("animate", {
            attributeName: "x",
            values: `${unref(W).rects[0][0]};${unref(W).rects[0][0] - unref(l)}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, Lu),
          createBaseVNode("animate", {
            attributeName: "y",
            values: `${unref(W).rects[0][1]};${unref(W).rects[0][1] - unref(l)}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, Ou)
        ], 8, ku)) : createCommentVNode("", true),
        unref(W).rects[1] ? (openBlock(), createElementBlock("rect", {
          key: 1,
          fill: unref(W).mergedColor[1],
          x: unref(W).rects[1][0] - 40,
          y: unref(W).rects[1][1] - unref(l),
          width: 40,
          height: unref(l) * 2
        }, [
          Tu,
          createBaseVNode("animate", {
            attributeName: "x",
            values: `${unref(W).rects[1][0]};${unref(W).rects[1][0] - 40};${unref(W).rects[1][0]}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, Ru)
        ], 8, Gu)) : createCommentVNode("", true)
      ], 12, $u))
    ], 512));
  }
});
var Vr = {
  install(e) {
    e.component("DvDecoration1", Mu);
  }
};
var Du = ["width", "height"];
var Fu = ["x", "y", "width", "height", "fill"];
var Bu = ["attributeName", "to", "dur"];
var Nu = ["x", "y", "fill"];
var ju = ["attributeName", "to", "dur"];
var Eu = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 6
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      defaultColor: ["#3faacb", "#fff"],
      mergedColor: []
    }), a = () => {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    }, o = () => {
      W();
    }, l = () => {
      W();
    }, { width: s, height: D } = be(r, o, l), W = () => {
      t.reverse ? (n.w = 1, n.h = D.value, n.x = s.value / 2, n.y = 0) : (n.w = s.value, n.h = 1, n.x = 0, n.y = D.value / 2);
    };
    return watch(() => t.color, () => {
      a();
    }), watch(() => t.reverse, () => {
      W();
    }), onMounted(() => {
      a();
    }), (T, U) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration2",
      ref: r,
      class: "dv-decoration-2"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: `${unref(s)}px`,
        height: `${unref(D)}px`
      }, [
        createBaseVNode("rect", {
          x: unref(n).x,
          y: unref(n).y,
          width: unref(n).w,
          height: unref(n).h,
          fill: unref(n).mergedColor[0]
        }, [
          createBaseVNode("animate", {
            attributeName: e.reverse ? "height" : "width",
            from: "0",
            to: e.reverse ? unref(D) : unref(s),
            dur: `${e.dur}s`,
            calcMode: "spline",
            keyTimes: "0;1",
            keySplines: ".42,0,.58,1",
            repeatCount: "indefinite"
          }, null, 8, Bu)
        ], 8, Fu),
        createBaseVNode("rect", {
          x: unref(n).x,
          y: unref(n).y,
          width: "1",
          height: "1",
          fill: unref(n).mergedColor[1]
        }, [
          createBaseVNode("animate", {
            attributeName: e.reverse ? "y" : "x",
            from: "0",
            to: e.reverse ? unref(D) : unref(s),
            dur: `${e.dur}s`,
            calcMode: "spline",
            keyTimes: "0;1",
            keySplines: "0.42,0,0.58,1",
            repeatCount: "indefinite"
          }, null, 8, ju)
        ], 8, Nu)
      ], 8, Du))
    ], 512));
  }
});
var Ur = {
  install(e) {
    e.component("DvDecoration2", Eu);
  }
};
var Wu = ["width", "height"];
var zu = ["fill", "x", "y"];
var qu = ["values", "dur", "begin"];
var zt = 7;
var Iu = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 2,
      rowPoints: 25,
      pointSideLength: zt,
      halfPointSideLength: zt / 2,
      points: [],
      defaultColor: ["#7acaec", "transparent"],
      mergedColor: []
    }), a = () => {
      const [B, A] = n.svgWH, v = B / (n.rowPoints + 1), R = A / (n.rowNum + 1), N = new Array(n.rowNum).fill(0).map((I, E) => new Array(n.rowPoints).fill(0).map((b, $) => [
        v * ($ + 1),
        R * (E + 1)
      ]));
      n.points = N.reduce((I, E) => [...I, ...E], []);
    }, o = () => {
      l();
    }, l = () => {
      a(), T();
    }, s = () => {
      l();
    }, { width: D, height: W } = be(r, s, o), T = () => {
      const [B, A] = n.svgWH;
      n.svgScale = [D.value / B, W.value / A];
    }, U = () => {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    };
    return watch(() => t.color, () => {
      U();
    }), onMounted(() => {
      U();
    }), (B, A) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration3",
      ref: r,
      class: "dv-decoration-3"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: `${unref(n).svgWH[0]}px`,
        height: `${unref(n).svgWH[1]}px`,
        style: normalizeStyle(`transform:scale(${unref(n).svgScale[0]},${unref(n).svgScale[1]});`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n).points, (v) => (openBlock(), createElementBlock("rect", {
          key: v,
          fill: unref(n).mergedColor[0],
          x: v[0] - unref(n).halfPointSideLength,
          y: v[1] - unref(n).halfPointSideLength,
          width: zt,
          height: zt
        }, [
          Math.random() > 0.6 ? (openBlock(), createElementBlock("animate", {
            key: 0,
            attributeName: "fill",
            values: `${unref(n).mergedColor.join(";")}`,
            dur: Math.random() + 1 + "s",
            begin: Math.random() * 2,
            repeatCount: "indefinite"
          }, null, 8, qu)) : createCommentVNode("", true)
        ], 8, zu))), 128))
      ], 12, Wu))
    ], 512));
  }
});
var Xr = {
  install(e) {
    e.component("DvDecoration3", Iu);
  }
};
var Hu = ["width", "height"];
var Vu = ["stroke", "points"];
var Uu = ["stroke", "points"];
var Xu = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      defaultColor: ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.3)"],
      mergedColor: []
    }), a = () => {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    }, { width: o, height: l } = be(r);
    return watch(() => t.color, () => {
      a();
    }), onMounted(() => {
      a();
    }), (s, D) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration3",
      ref: r,
      class: "dv-decoration-4"
    }, [
      createBaseVNode("div", {
        class: normalizeClass(`container ${e.reverse ? "reverse" : "normal"}`),
        style: normalizeStyle(e.reverse ? `width:${unref(o)}px;height:5px;animation-duration:${e.dur}s` : `width:5px;height:${unref(l)}px;animation-duration:${e.dur}s`)
      }, [
        (openBlock(), createElementBlock("svg", {
          width: e.reverse ? unref(o) : 5,
          height: e.reverse ? 5 : unref(l)
        }, [
          createBaseVNode("polyline", {
            stroke: unref(n).mergedColor[0],
            points: e.reverse ? `0, 2.5 ${unref(o)}, 2.5` : `2.5, 0 2.5, ${unref(l)}`
          }, null, 8, Vu),
          createBaseVNode("polyline", {
            class: "bold-line",
            stroke: unref(n).mergedColor[1],
            "stroke-width": "3",
            "stroke-dasharray": "20, 80",
            "stroke-dashoffset": "-30",
            points: e.reverse ? `0, 2.5 ${unref(o)}, 2.5` : `2.5, 0 2.5, ${unref(l)}`
          }, null, 8, Uu)
        ], 8, Hu))
      ], 6)
    ], 512));
  }
});
var Qr = {
  install(e) {
    e.component("DvDecoration4", Xu);
  }
};
var Qu = ["width", "height"];
var Yu = ["stroke", "points"];
var Ku = ["from", "to", "dur"];
var Ju = ["stroke", "points"];
var Zu = ["from", "to", "dur"];
var ec = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 1.2
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      line1Points: "",
      line2Points: "",
      line1Length: 0,
      line2Length: 0,
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    }), a = () => {
      D();
    }, o = () => {
      D();
    }, { width: l, height: s } = be(r, o, a), D = () => {
      const T = [
        { x: 0, y: s.value * 0.2 },
        { x: l.value * 0.18, y: s.value * 0.2 },
        { x: l.value * 0.2, y: s.value * 0.4 },
        { x: l.value * 0.25, y: s.value * 0.4 },
        { x: l.value * 0.27, y: s.value * 0.6 },
        { x: l.value * 0.72, y: s.value * 0.6 },
        { x: l.value * 0.75, y: s.value * 0.4 },
        { x: l.value * 0.8, y: s.value * 0.4 },
        { x: l.value * 0.82, y: s.value * 0.2 },
        { x: l.value, y: s.value * 0.2 }
      ], U = [
        { x: l.value * 0.3, y: s.value * 0.8 },
        { x: l.value * 0.7, y: s.value * 0.8 }
      ], B = Mn(T), A = Mn(U);
      n.line1Points = Dn(T), n.line2Points = Dn(U), n.line1Length = B, n.line2Length = A;
    }, W = () => {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    };
    return watch(() => t.color, () => {
      W();
    }), onMounted(() => {
      W();
    }), (T, U) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration5",
      ref: r,
      class: "dv-decoration-5"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(l),
        height: unref(s)
      }, [
        createBaseVNode("polyline", {
          fill: "transparent",
          stroke: unref(n).mergedColor[0],
          "stroke-width": "3",
          points: unref(n).line1Points
        }, [
          createBaseVNode("animate", {
            attributeName: "stroke-dasharray",
            attributeType: "XML",
            from: `0, ${unref(n).line1Length / 2}, 0, ${unref(n).line1Length / 2}`,
            to: `0, 0, ${unref(n).line1Length}, 0`,
            dur: `${e.dur}s`,
            begin: "0s",
            calcMode: "spline",
            keyTimes: "0;1",
            keySplines: "0.4,1,0.49,0.98",
            repeatCount: "indefinite"
          }, null, 8, Ku)
        ], 8, Yu),
        createBaseVNode("polyline", {
          fill: "transparent",
          stroke: unref(n).mergedColor[1],
          "stroke-width": "2",
          points: unref(n).line2Points
        }, [
          createBaseVNode("animate", {
            attributeName: "stroke-dasharray",
            attributeType: "XML",
            from: `0, ${unref(n).line2Length / 2}, 0, ${unref(n).line2Length / 2}`,
            to: `0, 0, ${unref(n).line2Length}, 0`,
            dur: `${e.dur}s`,
            begin: "0s",
            calcMode: "spline",
            keyTimes: "0;1",
            keySplines: ".4,1,.49,.98",
            repeatCount: "indefinite"
          }, null, 8, Zu)
        ], 8, Ju)
      ], 8, Qu))
    ], 512));
  }
});
var Yr = {
  install(e) {
    e.component("DvDecoration5", ec);
  }
};
var tc = ["width", "height"];
var rc = ["fill", "x", "y", "height"];
var nc = ["values", "dur"];
var ac = ["values", "dur"];
var Kr = 7;
var ic = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 1,
      rowPoints: 40,
      rectWidth: Kr,
      halfRectWidth: Kr / 2,
      points: [],
      heights: [],
      minHeights: [],
      randoms: [],
      defaultColor: ["#7acaec", "#7acaec"],
      mergedColor: []
    });
    watch(() => t.color, () => {
      U();
    }), onMounted(() => {
      U();
    });
    const { width: a, height: o } = be(r, T, l);
    function l() {
      s();
    }
    function s() {
      D(), W();
    }
    function D() {
      const [B, A] = n.svgWH, v = B / (n.rowPoints + 1), R = A / (n.rowNum + 1), N = new Array(n.rowNum).fill(0).map((E, b) => new Array(n.rowPoints).fill(0).map(($, f) => [
        v * (f + 1),
        R * (b + 1)
      ]));
      n.points = N.reduce((E, b) => [...E, ...b], []);
      const I = n.heights = new Array(n.rowNum * n.rowPoints).fill(0).map((E) => Math.random() > 0.8 ? Ct(0.7 * A, A) : Ct(0.2 * A, 0.5 * A));
      n.minHeights = new Array(n.rowNum * n.rowPoints).fill(0).map((E, b) => I[b] * Math.random()), n.randoms = new Array(n.rowNum * n.rowPoints).fill(0).map((E) => Math.random() + 1.5);
    }
    function W() {
      const [B, A] = n.svgWH;
      n.svgScale = [a.value / B, o.value / A];
    }
    function T() {
      s();
    }
    function U() {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    }
    return (B, A) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration6",
      ref: r,
      class: "dv-decoration-6"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: `${unref(n).svgWH[0]}px`,
        height: `${unref(n).svgWH[1]}px`,
        style: normalizeStyle(`transform:scale(${unref(n).svgScale[0]},${unref(n).svgScale[1]});`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n).points, (v, R) => (openBlock(), createElementBlock("rect", {
          key: R,
          fill: unref(n).mergedColor[Math.random() > 0.5 ? 0 : 1],
          x: v[0] - unref(n).halfRectWidth,
          y: v[1] - unref(n).heights[R] / 2,
          width: Kr,
          height: unref(n).heights[R]
        }, [
          createBaseVNode("animate", {
            attributeName: "y",
            values: `${v[1] - unref(n).minHeights[R] / 2};${v[1] - unref(n).heights[R] / 2};${v[1] - unref(n).minHeights[R] / 2}`,
            dur: `${unref(n).randoms[R]}s`,
            keyTimes: "0;0.5;1",
            calcMode: "spline",
            keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, 8, nc),
          createBaseVNode("animate", {
            attributeName: "height",
            values: `${unref(n).minHeights[R]};${unref(n).heights[R]};${unref(n).minHeights[R]}`,
            dur: `${unref(n).randoms[R]}s`,
            keyTimes: "0;0.5;1",
            calcMode: "spline",
            keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, 8, ac)
        ], 8, rc))), 128))
      ], 12, tc))
    ], 512));
  }
});
var Jr = {
  install(e) {
    e.component("DvDecoration6", ic);
  }
};
var oc = { class: "dv-decoration-7" };
var lc = {
  width: "21px",
  height: "20px"
};
var sc = ["stroke"];
var uc = ["stroke"];
var cc = {
  width: "21px",
  height: "20px"
};
var fc = ["stroke"];
var dc = ["stroke"];
var hc = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = reactive({
      defaultColor: ["#1dc1f5", "#1dc1f5"],
      mergedColor: []
    });
    watch(() => t.color, () => {
      n();
    }), onMounted(() => {
      n();
    });
    function n() {
      r.mergedColor = xe(_e(r.defaultColor, true), t.color || []);
    }
    return (a, o) => (openBlock(), createElementBlock("div", oc, [
      (openBlock(), createElementBlock("svg", lc, [
        createBaseVNode("polyline", {
          "stroke-width": "4",
          fill: "transparent",
          stroke: unref(r).mergedColor[0],
          points: "10, 0 19, 10 10, 20"
        }, null, 8, sc),
        createBaseVNode("polyline", {
          "stroke-width": "2",
          fill: "transparent",
          stroke: unref(r).mergedColor[1],
          points: "2, 0 11, 10 2, 20"
        }, null, 8, uc)
      ])),
      renderSlot(a.$slots, "default"),
      (openBlock(), createElementBlock("svg", cc, [
        createBaseVNode("polyline", {
          "stroke-width": "4",
          fill: "transparent",
          stroke: unref(r).mergedColor[0],
          points: "11, 0 2, 10 11, 20"
        }, null, 8, fc),
        createBaseVNode("polyline", {
          "stroke-width": "2",
          fill: "transparent",
          stroke: unref(r).mergedColor[1],
          points: "19, 0 10, 10 19, 20"
        }, null, 8, dc)
      ]))
    ]));
  }
});
var Zr = {
  install(e) {
    e.component("DvDecoration7", hc);
  }
};
var vc = ["width", "height"];
var pc = ["stroke", "points"];
var gc = ["stroke", "points"];
var mc = ["stroke", "points"];
var yc = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    });
    watch(() => t.color, () => {
      s();
    }), onMounted(() => {
      s();
    });
    const { width: a, height: o } = be(r);
    function l(D) {
      return t.reverse ? a.value - D : D;
    }
    function s() {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    }
    return (D, W) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration8",
      ref: r,
      class: "dv-decoration-8"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(a),
        height: unref(o)
      }, [
        createBaseVNode("polyline", {
          stroke: unref(n).mergedColor[0],
          "stroke-width": "2",
          fill: "transparent",
          points: `${l(0)}, 0 ${l(30)}, ${unref(o) / 2}`
        }, null, 8, pc),
        createBaseVNode("polyline", {
          stroke: unref(n).mergedColor[0],
          "stroke-width": "2",
          fill: "transparent",
          points: `${l(20)}, 0 ${l(50)}, ${unref(o) / 2} ${l(unref(a))}, ${unref(o) / 2}`
        }, null, 8, gc),
        createBaseVNode("polyline", {
          stroke: unref(n).mergedColor[1],
          fill: "transparent",
          "stroke-width": "3",
          points: `${l(0)}, ${unref(o) - 3}, ${l(200)}, ${unref(o) - 3}`
        }, null, 8, mc)
      ], 8, vc))
    ], 512));
  }
});
var en = {
  install(e) {
    e.component("DvDecoration8", yc);
  }
};
var bc = ["width", "height"];
var xc = ["id"];
var Cc = ["stroke"];
var _c = ["dur"];
var $c = ["stroke"];
var Pc = ["dur"];
var wc = ["stroke"];
var kc = ["xlink:href", "stroke", "fill"];
var Ac = ["dur", "begin"];
var Sc = ["stroke"];
var Lc = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), a = reactive({
      polygonId: `decoration-9-polygon-${r}`,
      svgWH: [100, 100],
      svgScale: [1, 1],
      defaultColor: ["rgba(3, 166, 224, 0.8)", "rgba(3, 166, 224, 0.5)"],
      mergedColor: []
    });
    watch(() => t.color, () => {
      T();
    }), onMounted(() => {
      T();
    });
    const { width: o, height: l } = be(n, W, s);
    function s() {
      D();
    }
    function D() {
      const [U, B] = a.svgWH;
      a.svgScale = [o.value / U, l.value / B];
    }
    function W() {
      D();
    }
    function T() {
      a.mergedColor = xe(_e(a.defaultColor, true), t.color || []);
    }
    return (U, B) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration9",
      ref: n,
      class: "dv-decoration-9"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: `${unref(a).svgWH[0]}px`,
        height: `${unref(a).svgWH[1]}px`,
        style: normalizeStyle(`transform:scale(${unref(a).svgScale[0]},${unref(a).svgScale[1]});`)
      }, [
        createBaseVNode("defs", null, [
          createBaseVNode("polygon", {
            id: unref(a).polygonId,
            points: "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"
          }, null, 8, xc)
        ]),
        createBaseVNode("circle", {
          cx: "50",
          cy: "50",
          r: "45",
          fill: "transparent",
          stroke: unref(a).mergedColor[1],
          "stroke-width": "10",
          "stroke-dasharray": "80, 100, 30, 100"
        }, [
          createBaseVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;360 50 50",
            dur: `${e.dur}s`,
            repeatCount: "indefinite"
          }, null, 8, _c)
        ], 8, Cc),
        createBaseVNode("circle", {
          cx: "50",
          cy: "50",
          r: "45",
          fill: "transparent",
          stroke: unref(a).mergedColor[0],
          "stroke-width": "6",
          "stroke-dasharray": "50, 66, 100, 66"
        }, [
          createBaseVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;-360 50 50",
            dur: `${e.dur}s`,
            repeatCount: "indefinite"
          }, null, 8, Pc)
        ], 8, $c),
        createBaseVNode("circle", {
          cx: "50",
          cy: "50",
          r: "38",
          fill: "transparent",
          stroke: unref(De)(unref(a).mergedColor[1] || unref(a).defaultColor[1], 30),
          "stroke-width": "1",
          "stroke-dasharray": "5, 1"
        }, null, 8, wc),
        (openBlock(true), createElementBlock(Fragment, null, renderList(new Array(20).fill(0), (A, v) => (openBlock(), createElementBlock("use", {
          key: v,
          "xlink:href": `#${unref(a).polygonId}`,
          stroke: unref(a).mergedColor[1],
          fill: Math.random() > 0.4 ? "transparent" : unref(a).mergedColor[0]
        }, [
          createBaseVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 50 50;360 50 50",
            dur: `${e.dur}s`,
            begin: `${v * e.dur / 20}s`,
            repeatCount: "indefinite"
          }, null, 8, Ac)
        ], 8, kc))), 128)),
        createBaseVNode("circle", {
          cx: "50",
          cy: "50",
          r: "26",
          fill: "transparent",
          stroke: unref(De)(unref(a).mergedColor[1] || unref(a).defaultColor[1], 30),
          "stroke-width": "1",
          "stroke-dasharray": "5, 1"
        }, null, 8, Sc)
      ], 12, bc)),
      renderSlot(U.$slots, "default")
    ], 512));
  }
};
var tn = {
  install(e) {
    e.component("DvDecoration9", Lc);
  }
};
var Oc = ["width", "height"];
var Gc = ["stroke", "points"];
var Tc = ["stroke", "points", "stroke-dasharray"];
var Rc = ["id", "values", "begin"];
var Mc = ["values", "begin"];
var Dc = ["stroke", "points", "stroke-dasharray"];
var Fc = ["id", "values", "begin"];
var Bc = ["values", "begin"];
var Nc = ["stroke", "points", "stroke-dasharray"];
var jc = ["id", "values", "begin"];
var Ec = ["values", "begin"];
var Wc = ["cy", "fill"];
var zc = ["id", "values", "begin"];
var qc = ["cx", "cy", "fill"];
var Ic = ["id", "values", "begin"];
var Hc = ["values", "begin"];
var Vc = ["cx", "cy", "fill"];
var Uc = ["id", "values", "begin"];
var Xc = ["values", "begin"];
var Qc = ["cx", "cy", "fill"];
var Yc = ["id", "values", "begin"];
var Kc = ["values", "begin"];
var Jc = defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), a = reactive({
      animationId1: `d10ani1${r}`,
      animationId2: `d10ani2${r}`,
      animationId3: `d10ani3${r}`,
      animationId4: `d10ani4${r}`,
      animationId5: `d10ani5${r}`,
      animationId6: `d10ani6${r}`,
      animationId7: `d10ani7${r}`,
      defaultColor: ["#00c2ff", "rgba(0, 194, 255, 0.3)"],
      mergedColor: []
    }), { width: o, height: l } = be(n);
    watch(() => t.color, () => {
      s();
    }), onMounted(() => {
      s();
    });
    function s() {
      a.mergedColor = xe(_e(a.defaultColor, true), t.color || []);
    }
    return (D, W) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration10",
      ref: n,
      class: "dv-decoration-10"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(o),
        height: unref(l)
      }, [
        createBaseVNode("polyline", {
          stroke: unref(a).mergedColor[1],
          "stroke-width": "2",
          points: `0, ${unref(l) / 2} ${unref(o)}, ${unref(l) / 2}`
        }, null, 8, Gc),
        createBaseVNode("polyline", {
          stroke: unref(a).mergedColor[0],
          "stroke-width": "2",
          points: `5, ${unref(l) / 2} ${unref(o) * 0.2 - 3}, ${unref(l) / 2}`,
          "stroke-dasharray": `0, ${unref(o) * 0.2}`,
          fill: "freeze"
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId2,
            attributeName: "stroke-dasharray",
            values: `0, ${unref(o) * 0.2};${unref(o) * 0.2}, 0;`,
            dur: "3s",
            begin: `${unref(a).animationId1}.end`,
            fill: "freeze"
          }, null, 8, Rc),
          createBaseVNode("animate", {
            attributeName: "stroke-dasharray",
            values: `${unref(o) * 0.2}, 0;0, ${unref(o) * 0.2}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Mc)
        ], 8, Tc),
        createBaseVNode("polyline", {
          stroke: unref(a).mergedColor[0],
          "stroke-width": "2",
          points: `${unref(o) * 0.2 + 3}, ${unref(l) / 2} ${unref(o) * 0.8 - 3}, ${unref(l) / 2}`,
          "stroke-dasharray": `0, ${unref(o) * 0.6}`
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId4,
            attributeName: "stroke-dasharray",
            values: `0, ${unref(o) * 0.6};${unref(o) * 0.6}, 0`,
            dur: "3s",
            begin: `${unref(a).animationId3}.end + 1s`,
            fill: "freeze"
          }, null, 8, Fc),
          createBaseVNode("animate", {
            attributeName: "stroke-dasharray",
            values: `${unref(o) * 0.6}, 0;0, ${unref(o) * 0.6}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Bc)
        ], 8, Dc),
        createBaseVNode("polyline", {
          stroke: unref(a).mergedColor[0],
          "stroke-width": "2",
          points: `${unref(o) * 0.8 + 3}, ${unref(l) / 2} ${unref(o) - 5}, ${unref(l) / 2}`,
          "stroke-dasharray": `0, ${unref(o) * 0.2}`
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId6,
            attributeName: "stroke-dasharray",
            values: `0, ${unref(o) * 0.2};${unref(o) * 0.2}, 0`,
            dur: "3s",
            begin: `${unref(a).animationId5}.end + 1s`,
            fill: "freeze"
          }, null, 8, jc),
          createBaseVNode("animate", {
            attributeName: "stroke-dasharray",
            values: `${unref(o) * 0.2}, 0;0, ${unref(o) * 0.3}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Ec)
        ], 8, Nc),
        createBaseVNode("circle", {
          cx: "2",
          cy: unref(l) / 2,
          r: "2",
          fill: unref(a).mergedColor[1]
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId1,
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[0]}`,
            begin: `0s;${unref(a).animationId7}.end`,
            dur: "0.3s",
            fill: "freeze"
          }, null, 8, zc)
        ], 8, Wc),
        createBaseVNode("circle", {
          cx: unref(o) * 0.2,
          cy: unref(l) / 2,
          r: "2",
          fill: unref(a).mergedColor[1]
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId3,
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[0]}`,
            begin: `${unref(a).animationId2}.end`,
            dur: "0.3s",
            fill: "freeze"
          }, null, 8, Ic),
          createBaseVNode("animate", {
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[1]}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Hc)
        ], 8, qc),
        createBaseVNode("circle", {
          cx: unref(o) * 0.8,
          cy: unref(l) / 2,
          r: "2",
          fill: unref(a).mergedColor[1]
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId5,
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[0]}`,
            begin: `${unref(a).animationId4}.end`,
            dur: "0.3s",
            fill: "freeze"
          }, null, 8, Uc),
          createBaseVNode("animate", {
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[1]}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Xc)
        ], 8, Vc),
        createBaseVNode("circle", {
          cx: unref(o) - 2,
          cy: unref(l) / 2,
          r: "2",
          fill: unref(a).mergedColor[1]
        }, [
          createBaseVNode("animate", {
            id: unref(a).animationId7,
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[0]}`,
            begin: `${unref(a).animationId6}.end`,
            dur: "0.3s",
            fill: "freeze"
          }, null, 8, Yc),
          createBaseVNode("animate", {
            attributeName: "fill",
            values: `${unref(a).mergedColor[1]};${unref(a).mergedColor[1]}`,
            dur: "0.01s",
            begin: `${unref(a).animationId7}.end`,
            fill: "freeze"
          }, null, 8, Kc)
        ], 8, Qc)
      ], 8, Oc))
    ], 512));
  }
});
var rn = {
  install(e) {
    e.component("DvDecoration10", Jc);
  }
};
var Zc = ["width", "height"];
var ef = ["fill", "stroke"];
var tf = ["fill", "stroke", "points"];
var rf = ["fill", "stroke", "points"];
var nf = ["fill", "stroke", "points"];
var af = ["fill", "stroke", "points"];
var of = ["stroke", "points"];
var lf = ["stroke", "points"];
var sf = { class: "decoration-content" };
var uf = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = reactive({
      defaultColor: ["#1a98fc", "#2cf7fe"],
      mergedColor: []
    }), { width: a, height: o } = be(r);
    watch(() => t.color, () => {
      l();
    }), onMounted(() => {
      l();
    });
    function l() {
      n.mergedColor = xe(_e(n.defaultColor, true), t.color || []);
    }
    return (s, D) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration11",
      ref: r,
      class: "dv-decoration-11"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(a),
        height: unref(o)
      }, [
        createBaseVNode("polygon", {
          fill: unref(De)(unref(n).mergedColor[1] || unref(n).defaultColor[1], 10),
          stroke: unref(n).mergedColor[1],
          points: "20 10, 25 4, 55 4 60 10"
        }, null, 8, ef),
        createBaseVNode("polygon", {
          fill: unref(De)(unref(n).mergedColor[1] || unref(n).defaultColor[1], 10),
          stroke: unref(n).mergedColor[1],
          points: `20 ${unref(o) - 10}, 25 ${unref(o) - 4}, 55 ${unref(o) - 4} 60 ${unref(o) - 10}`
        }, null, 8, tf),
        createBaseVNode("polygon", {
          fill: unref(De)(unref(n).mergedColor[1] || unref(n).defaultColor[1], 10),
          stroke: unref(n).mergedColor[1],
          points: `${unref(a) - 20} 10, ${unref(a) - 25} 4, ${unref(a) - 55} 4 ${unref(a) - 60} 10`
        }, null, 8, rf),
        createBaseVNode("polygon", {
          fill: unref(De)(unref(n).mergedColor[1] || unref(n).defaultColor[1], 10),
          stroke: unref(n).mergedColor[1],
          points: `${unref(a) - 20} ${unref(o) - 10}, ${unref(a) - 25} ${unref(o) - 4}, ${unref(a) - 55} ${unref(o) - 4} ${unref(a) - 60} ${unref(o) - 10}`
        }, null, 8, nf),
        createBaseVNode("polygon", {
          fill: unref(De)(unref(n).mergedColor[0] || unref(n).defaultColor[0], 20),
          stroke: unref(n).mergedColor[0],
          points: `
          20 10, 5 ${unref(o) / 2} 20 ${unref(o) - 10}
          ${unref(a) - 20} ${unref(o) - 10} ${unref(a) - 5} ${unref(o) / 2} ${unref(a) - 20} 10
        `
        }, null, 8, af),
        createBaseVNode("polyline", {
          fill: "transparent",
          stroke: unref(De)(unref(n).mergedColor[0] || unref(n).defaultColor[0], 70),
          points: `25 18, 15 ${unref(o) / 2} 25 ${unref(o) - 18}`
        }, null, 8, of),
        createBaseVNode("polyline", {
          fill: "transparent",
          stroke: unref(De)(unref(n).mergedColor[0] || unref(n).defaultColor[0], 70),
          points: `${unref(a) - 25} 18, ${unref(a) - 15} ${unref(o) / 2} ${unref(a) - 25} ${unref(o) - 18}`
        }, null, 8, lf)
      ], 8, Zc)),
      createBaseVNode("div", sf, [
        renderSlot(s.$slots, "default")
      ])
    ], 512));
  }
};
var nn = {
  install(e) {
    e.component("DvDecoration11", uf);
  }
};
var cf = ["width", "height"];
var ff = ["id"];
var df = ["stroke", "stroke-width", "d"];
var hf = ["id"];
var vf = createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "transparent",
  "stop-opacity": "1"
}, null, -1);
var pf = ["stop-color"];
var gf = ["r", "cx", "cy", "stroke"];
var mf = ["cx", "cy", "fill"];
var yf = ["values", "dur"];
var bf = ["dur"];
var xf = ["cx", "cy", "fill"];
var Cf = { key: 0 };
var _f = ["points", "stroke"];
var $f = ["d", "stroke"];
var Pf = ["xlink:href"];
var wf = ["values", "dur"];
var kf = { class: "decoration-content" };
var Af = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    scanDur: {
      type: Number,
      default: 3
    },
    haloDur: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = e, r = Ve(), n = ref(null), { width: a, height: o } = be(n, () => {
    }, N), l = reactive({
      gId: `decoration-12-g-${r}`,
      gradientId: `decoration-12-gradient-${r}`,
      defaultColor: ["#2783ce", "#2cf7fe"],
      mergedColor: [],
      pathD: [],
      pathColor: [],
      circleR: [],
      splitLinePoints: [],
      arcD: [],
      segment: 30,
      sectorAngle: Math.PI / 3,
      ringNum: 3,
      ringWidth: 1,
      showSplitLine: true
    }), s = computed(() => a.value / 2), D = computed(() => o.value / 2);
    watch(() => t.color, () => {
      T(), B();
    });
    function W() {
      T(), U(), B(), A(), v(), R();
    }
    function T() {
      l.mergedColor = xe(_e(l.defaultColor, true), t.color || []);
    }
    function U() {
      const I = -Math.PI / 2, E = l.sectorAngle / l.segment, b = a.value / 4;
      let $ = nt(s.value, D.value, b, I);
      l.pathD = new Array(l.segment).fill("").map((f, _) => {
        const O = nt(s.value, D.value, b, I - (_ + 1) * E).map((C) => parseFloat(C.toFixed(5))), m = `M${$.join(",")} A${b}, ${b} 0 0 0 ${O.join(",")}`;
        return $ = O, m;
      });
    }
    function B() {
      const I = 100 / (l.segment - 1);
      l.pathColor = new Array(l.segment).fill(l.mergedColor[0]).map((E, b) => De(l.mergedColor[0], 100 - b * I));
    }
    function A() {
      const I = (a.value / 2 - l.ringWidth / 2) / l.ringNum;
      l.circleR = new Array(l.ringNum).fill(0).map((E, b) => I * (b + 1));
    }
    function v() {
      const I = Math.PI / 6, E = a.value / 2;
      l.splitLinePoints = new Array(6).fill("").map((b, $) => {
        const f = I * ($ + 1), _ = f + Math.PI, O = nt(s.value, D.value, E, f), m = nt(s.value, D.value, E, _);
        return `${O.join(",")} ${m.join(",")}`;
      });
    }
    function R() {
      const I = Math.PI / 6, E = a.value / 2 - 1;
      l.arcD = new Array(4).fill("").map((b, $) => {
        const f = I * (3 * $ + 1), _ = f + I, O = nt(s.value, D.value, E, f), m = nt(s.value, D.value, E, _);
        return `M${O.join(",")} A${s.value}, ${D.value} 0 0 1 ${m.join(",")}`;
      });
    }
    function N() {
      W();
    }
    return (I, E) => (openBlock(), createElementBlock("div", {
      ref_key: "decoration12",
      ref: n,
      class: "dv-decoration-12"
    }, [
      (openBlock(), createElementBlock("svg", {
        width: unref(a),
        height: unref(o)
      }, [
        createBaseVNode("defs", null, [
          createBaseVNode("g", {
            id: unref(l).gId
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).pathD, (b, $) => (openBlock(), createElementBlock("path", {
              key: b,
              stroke: unref(l).pathColor[$],
              "stroke-width": unref(a) / 2,
              fill: "transparent",
              d: b
            }, null, 8, df))), 128))
          ], 8, ff),
          createBaseVNode("radialGradient", {
            id: unref(l).gradientId,
            cx: "50%",
            cy: "50%",
            r: "50%"
          }, [
            vf,
            createBaseVNode("stop", {
              offset: "100%",
              "stop-color": unref(De)(unref(l).mergedColor[1] || unref(l).defaultColor[1], 30),
              "stop-opacity": "1"
            }, null, 8, pf)
          ], 8, hf)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).circleR, (b) => (openBlock(), createElementBlock("circle", {
          key: b,
          r: b,
          cx: unref(s),
          cy: unref(D),
          stroke: unref(l).mergedColor[1],
          "stroke-width": 0.8,
          fill: "transparent"
        }, null, 8, gf))), 128)),
        createBaseVNode("circle", {
          r: "1",
          cx: unref(s),
          cy: unref(D),
          stroke: "transparent",
          fill: `url(#${unref(l).gradientId})`
        }, [
          createBaseVNode("animate", {
            attributeName: "r",
            values: `1;${unref(a) / 2}`,
            dur: `${e.haloDur}s`,
            repeatCount: "indefinite"
          }, null, 8, yf),
          createBaseVNode("animate", {
            attributeName: "opacity",
            values: "1;0",
            dur: `${e.haloDur}s`,
            repeatCount: "indefinite"
          }, null, 8, bf)
        ], 8, mf),
        createBaseVNode("circle", {
          r: "2",
          cx: unref(s),
          cy: unref(D),
          fill: unref(l).mergedColor[1]
        }, null, 8, xf),
        unref(l).showSplitLine ? (openBlock(), createElementBlock("g", Cf, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).splitLinePoints, (b) => (openBlock(), createElementBlock("polyline", {
            key: b,
            points: b,
            stroke: unref(l).mergedColor[1],
            "stroke-width": 0.5,
            opacity: "50"
          }, null, 8, _f))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).arcD, (b) => (openBlock(), createElementBlock("path", {
          key: b,
          d: b,
          stroke: unref(l).mergedColor[1],
          "stroke-width": "2.3",
          fill: "transparent"
        }, null, 8, $f))), 128)),
        createBaseVNode("use", {
          "xlink:href": `#${unref(l).gId}`
        }, [
          createBaseVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: `0, ${unref(s)} ${unref(D)};360, ${unref(s)} ${unref(D)}`,
            dur: `${e.scanDur}s`,
            repeatCount: "indefinite"
          }, null, 8, wf)
        ], 8, Pf)
      ], 8, cf)),
      createBaseVNode("div", kf, [
        renderSlot(I.$slots, "default")
      ])
    ], 512));
  }
};
var an = {
  install(e) {
    e.component("DvDecoration12", Af);
  }
};
var Ie = {
  color: {
    type: Array,
    default: () => []
  },
  backgroundColor: {
    type: String,
    default: "transparent"
  }
};
var Sf = typeof global == "object" && global && global.Object === Object && global;
var mi = Sf;
var Lf = typeof self == "object" && self && self.Object === Object && self;
var Of = mi || Lf || Function("return this")();
var it = Of;
var Gf = it.Symbol;
var lr = Gf;
var yi = Object.prototype;
var Tf = yi.hasOwnProperty;
var Rf = yi.toString;
var yt = lr ? lr.toStringTag : void 0;
function Mf(e) {
  var t = Tf.call(e, yt), r = e[yt];
  try {
    e[yt] = void 0;
    var n = true;
  } catch {
  }
  var a = Rf.call(e);
  return n && (t ? e[yt] = r : delete e[yt]), a;
}
var Df = Object.prototype;
var Ff = Df.toString;
function Bf(e) {
  return Ff.call(e);
}
var Nf = "[object Null]";
var jf = "[object Undefined]";
var ja = lr ? lr.toStringTag : void 0;
function pr(e) {
  return e == null ? e === void 0 ? jf : Nf : ja && ja in Object(e) ? Mf(e) : Bf(e);
}
function St(e) {
  return e != null && typeof e == "object";
}
var Ef = Array.isArray;
var _n = Ef;
function rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function bi(e) {
  return e;
}
var Wf = "[object AsyncFunction]";
var zf = "[object Function]";
var qf = "[object GeneratorFunction]";
var If = "[object Proxy]";
function Ln(e) {
  if (!rt(e))
    return false;
  var t = pr(e);
  return t == zf || t == qf || t == Wf || t == If;
}
var Hf = it["__core-js_shared__"];
var on = Hf;
var Ea = function() {
  var e = /[^.]+$/.exec(on && on.keys && on.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vf(e) {
  return !!Ea && Ea in e;
}
var Uf = Function.prototype;
var Xf = Uf.toString;
function Qf(e) {
  if (e != null) {
    try {
      return Xf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yf = /[\\^$.*+?()[\]{}|]/g;
var Kf = /^\[object .+?Constructor\]$/;
var Jf = Function.prototype;
var Zf = Object.prototype;
var ed = Jf.toString;
var td = Zf.hasOwnProperty;
var rd = RegExp(
  "^" + ed.call(td).replace(Yf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nd(e) {
  if (!rt(e) || Vf(e))
    return false;
  var t = Ln(e) ? rd : Kf;
  return t.test(Qf(e));
}
function ad(e, t) {
  return e == null ? void 0 : e[t];
}
function On(e, t) {
  var r = ad(e, t);
  return nd(r) ? r : void 0;
}
var Wa = Object.create;
var id = function() {
  function e() {
  }
  return function(t) {
    if (!rt(t))
      return {};
    if (Wa)
      return Wa(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
var od = id;
function ld(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function sd(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var ud = 800;
var cd = 16;
var fd = Date.now;
function dd(e) {
  var t = 0, r = 0;
  return function() {
    var n = fd(), a = cd - (n - r);
    if (r = n, a > 0) {
      if (++t >= ud)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hd(e) {
  return function() {
    return e;
  };
}
var vd = function() {
  try {
    var e = On(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var sr = vd;
var pd = sr ? function(e, t) {
  return sr(e, "toString", {
    configurable: true,
    enumerable: false,
    value: hd(t),
    writable: true
  });
} : bi;
var gd = pd;
var md = dd(gd);
var yd = md;
var bd = 9007199254740991;
var xd = /^(?:0|[1-9]\d*)$/;
function xi(e, t) {
  var r = typeof e;
  return t = t != null ? t : bd, !!t && (r == "number" || r != "symbol" && xd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gn(e, t, r) {
  t == "__proto__" && sr ? sr(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
function gr(e, t) {
  return e === t || e !== e && t !== t;
}
var Cd = Object.prototype;
var _d = Cd.hasOwnProperty;
function $d(e, t, r) {
  var n = e[t];
  (!(_d.call(e, t) && gr(n, r)) || r === void 0 && !(t in e)) && Gn(e, t, r);
}
function Pd(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var s = t[o], D = n ? n(r[s], e[s], s, r, e) : void 0;
    D === void 0 && (D = e[s]), a ? Gn(r, s, D) : $d(r, s, D);
  }
  return r;
}
var za = Math.max;
function wd(e, t, r) {
  return t = za(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = za(n.length - t, 0), l = Array(o); ++a < o; )
      l[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = n[a];
    return s[t] = r(l), ld(e, this, s);
  };
}
function kd(e, t) {
  return yd(wd(e, t, bi), e + "");
}
var Ad = 9007199254740991;
function Ci(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ad;
}
function Tn(e) {
  return e != null && Ci(e.length) && !Ln(e);
}
function Sd(e, t, r) {
  if (!rt(r))
    return false;
  var n = typeof t;
  return (n == "number" ? Tn(r) && xi(t, r.length) : n == "string" && t in r) ? gr(r[t], e) : false;
}
function Ld(e) {
  return kd(function(t, r) {
    var n = -1, a = r.length, o = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && Sd(r[0], r[1], l) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a; ) {
      var s = r[n];
      s && e(t, s, n, o);
    }
    return t;
  });
}
var Od = Object.prototype;
function _i(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Od;
  return e === r;
}
function Gd(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Td = "[object Arguments]";
function qa(e) {
  return St(e) && pr(e) == Td;
}
var $i = Object.prototype;
var Rd = $i.hasOwnProperty;
var Md = $i.propertyIsEnumerable;
var Dd = qa(function() {
  return arguments;
}()) ? qa : function(e) {
  return St(e) && Rd.call(e, "callee") && !Md.call(e, "callee");
};
var $n = Dd;
function Fd() {
  return false;
}
var Pi = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ia = Pi && typeof module == "object" && module && !module.nodeType && module;
var Bd = Ia && Ia.exports === Pi;
var Ha = Bd ? it.Buffer : void 0;
var Nd = Ha ? Ha.isBuffer : void 0;
var jd = Nd || Fd;
var wi = jd;
var Ed = "[object Arguments]";
var Wd = "[object Array]";
var zd = "[object Boolean]";
var qd = "[object Date]";
var Id = "[object Error]";
var Hd = "[object Function]";
var Vd = "[object Map]";
var Ud = "[object Number]";
var Xd = "[object Object]";
var Qd = "[object RegExp]";
var Yd = "[object Set]";
var Kd = "[object String]";
var Jd = "[object WeakMap]";
var Zd = "[object ArrayBuffer]";
var eh = "[object DataView]";
var th = "[object Float32Array]";
var rh = "[object Float64Array]";
var nh = "[object Int8Array]";
var ah = "[object Int16Array]";
var ih = "[object Int32Array]";
var oh = "[object Uint8Array]";
var lh = "[object Uint8ClampedArray]";
var sh = "[object Uint16Array]";
var uh = "[object Uint32Array]";
var ke = {};
ke[th] = ke[rh] = ke[nh] = ke[ah] = ke[ih] = ke[oh] = ke[lh] = ke[sh] = ke[uh] = true;
ke[Ed] = ke[Wd] = ke[Zd] = ke[zd] = ke[eh] = ke[qd] = ke[Id] = ke[Hd] = ke[Vd] = ke[Ud] = ke[Xd] = ke[Qd] = ke[Yd] = ke[Kd] = ke[Jd] = false;
function ch(e) {
  return St(e) && Ci(e.length) && !!ke[pr(e)];
}
function fh(e) {
  return function(t) {
    return e(t);
  };
}
var ki = typeof exports == "object" && exports && !exports.nodeType && exports;
var xt = ki && typeof module == "object" && module && !module.nodeType && module;
var dh = xt && xt.exports === ki;
var ln = dh && mi.process;
var hh = function() {
  try {
    var e = xt && xt.require && xt.require("util").types;
    return e || ln && ln.binding && ln.binding("util");
  } catch {
  }
}();
var Va = hh;
var Ua = Va && Va.isTypedArray;
var vh = Ua ? fh(Ua) : ch;
var Ai = vh;
var ph = Object.prototype;
var gh = ph.hasOwnProperty;
function mh(e, t) {
  var r = _n(e), n = !r && $n(e), a = !r && !n && wi(e), o = !r && !n && !a && Ai(e), l = r || n || a || o, s = l ? Gd(e.length, String) : [], D = s.length;
  for (var W in e)
    (t || gh.call(e, W)) && !(l && (W == "length" || a && (W == "offset" || W == "parent") || o && (W == "buffer" || W == "byteLength" || W == "byteOffset") || xi(W, D))) && s.push(W);
  return s;
}
function yh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function bh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var xh = Object.prototype;
var Ch = xh.hasOwnProperty;
function _h(e) {
  if (!rt(e))
    return bh(e);
  var t = _i(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ch.call(e, n)) || r.push(n);
  return r;
}
function Si(e) {
  return Tn(e) ? mh(e, true) : _h(e);
}
var $h = On(Object, "create");
var $t = $h;
function Ph() {
  this.__data__ = $t ? $t(null) : {}, this.size = 0;
}
function wh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kh = "__lodash_hash_undefined__";
var Ah = Object.prototype;
var Sh = Ah.hasOwnProperty;
function Lh(e) {
  var t = this.__data__;
  if ($t) {
    var r = t[e];
    return r === kh ? void 0 : r;
  }
  return Sh.call(t, e) ? t[e] : void 0;
}
var Oh = Object.prototype;
var Gh = Oh.hasOwnProperty;
function Th(e) {
  var t = this.__data__;
  return $t ? t[e] !== void 0 : Gh.call(t, e);
}
var Rh = "__lodash_hash_undefined__";
function Mh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = $t && t === void 0 ? Rh : t, this;
}
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
tt.prototype.clear = Ph;
tt.prototype.delete = wh;
tt.prototype.get = Lh;
tt.prototype.has = Th;
tt.prototype.set = Mh;
function Dh() {
  this.__data__ = [], this.size = 0;
}
function mr(e, t) {
  for (var r = e.length; r--; )
    if (gr(e[r][0], t))
      return r;
  return -1;
}
var Fh = Array.prototype;
var Bh = Fh.splice;
function Nh(e) {
  var t = this.__data__, r = mr(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : Bh.call(t, r, 1), --this.size, true;
}
function jh(e) {
  var t = this.__data__, r = mr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Eh(e) {
  return mr(this.__data__, e) > -1;
}
function Wh(e, t) {
  var r = this.__data__, n = mr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ye.prototype.clear = Dh;
Ye.prototype.delete = Nh;
Ye.prototype.get = jh;
Ye.prototype.has = Eh;
Ye.prototype.set = Wh;
var zh = On(it, "Map");
var Li = zh;
function qh() {
  this.size = 0, this.__data__ = {
    hash: new tt(),
    map: new (Li || Ye)(),
    string: new tt()
  };
}
function Ih(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yr(e, t) {
  var r = e.__data__;
  return Ih(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Hh(e) {
  var t = yr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Vh(e) {
  return yr(this, e).get(e);
}
function Uh(e) {
  return yr(this, e).has(e);
}
function Xh(e, t) {
  var r = yr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ot(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ot.prototype.clear = qh;
ot.prototype.delete = Hh;
ot.prototype.get = Vh;
ot.prototype.has = Uh;
ot.prototype.set = Xh;
var Qh = yh(Object.getPrototypeOf, Object);
var Oi = Qh;
var Yh = "[object Object]";
var Kh = Function.prototype;
var Jh = Object.prototype;
var Gi = Kh.toString;
var Zh = Jh.hasOwnProperty;
var ev = Gi.call(Object);
function tv(e) {
  if (!St(e) || pr(e) != Yh)
    return false;
  var t = Oi(e);
  if (t === null)
    return true;
  var r = Zh.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Gi.call(r) == ev;
}
function rv() {
  this.__data__ = new Ye(), this.size = 0;
}
function nv(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function av(e) {
  return this.__data__.get(e);
}
function iv(e) {
  return this.__data__.has(e);
}
var ov = 200;
function lv(e, t) {
  var r = this.__data__;
  if (r instanceof Ye) {
    var n = r.__data__;
    if (!Li || n.length < ov - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ot(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function lt(e) {
  var t = this.__data__ = new Ye(e);
  this.size = t.size;
}
lt.prototype.clear = rv;
lt.prototype.delete = nv;
lt.prototype.get = av;
lt.prototype.has = iv;
lt.prototype.set = lv;
var Ti = typeof exports == "object" && exports && !exports.nodeType && exports;
var Xa = Ti && typeof module == "object" && module && !module.nodeType && module;
var sv = Xa && Xa.exports === Ti;
var Qa = sv ? it.Buffer : void 0;
var Ya = Qa ? Qa.allocUnsafe : void 0;
function uv(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Ya ? Ya(r) : new e.constructor(r);
  return e.copy(n), n;
}
var cv = it.Uint8Array;
var Ka = cv;
function fv(e) {
  var t = new e.constructor(e.byteLength);
  return new Ka(t).set(new Ka(e)), t;
}
function dv(e, t) {
  var r = t ? fv(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function hv(e) {
  return typeof e.constructor == "function" && !_i(e) ? od(Oi(e)) : {};
}
function vv(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), l = n(t), s = l.length; s--; ) {
      var D = l[e ? s : ++a];
      if (r(o[D], D, o) === false)
        break;
    }
    return t;
  };
}
var pv = vv();
var gv = pv;
function Pn(e, t, r) {
  (r !== void 0 && !gr(e[t], r) || r === void 0 && !(t in e)) && Gn(e, t, r);
}
function mv(e) {
  return St(e) && Tn(e);
}
function wn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function yv(e) {
  return Pd(e, Si(e));
}
function bv(e, t, r, n, a, o, l) {
  var s = wn(e, r), D = wn(t, r), W = l.get(D);
  if (W) {
    Pn(e, r, W);
    return;
  }
  var T = o ? o(s, D, r + "", e, t, l) : void 0, U = T === void 0;
  if (U) {
    var B = _n(D), A = !B && wi(D), v = !B && !A && Ai(D);
    T = D, B || A || v ? _n(s) ? T = s : mv(s) ? T = sd(s) : A ? (U = false, T = uv(D, true)) : v ? (U = false, T = dv(D, true)) : T = [] : tv(D) || $n(D) ? (T = s, $n(s) ? T = yv(s) : (!rt(s) || Ln(s)) && (T = hv(D))) : U = false;
  }
  U && (l.set(D, T), a(T, D, n, o, l), l.delete(D)), Pn(e, r, T);
}
function Ri(e, t, r, n, a) {
  e !== t && gv(t, function(o, l) {
    if (a || (a = new lt()), rt(o))
      bv(e, t, l, r, Ri, n, a);
    else {
      var s = n ? n(wn(e, l), o, l + "", e, t, a) : void 0;
      s === void 0 && (s = o), Pn(e, l, s);
    }
  }, Si);
}
var xv = Ld(function(e, t, r) {
  Ri(e, t, r);
});
var Ja = xv;
function He(e, t) {
  let r = Ja(e, t.value);
  const n = watchEffect(() => {
    r = Ja(e, t.value);
  });
  return onUnmounted(() => {
    n();
  }), r;
}
var Cv = ["left-top", "right-top", "left-bottom", "right-bottom"];
var _v = ["#4fd2dd", "#235fa7"];
var $v = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), r = He(_v, toRef(e, "color")), {
      width: n,
      height: a,
      initWH: o
    } = be(t);
    return {
      width: n,
      height: a,
      initWH: o,
      mergedColor: r,
      borderBox1: t
    };
  },
  render() {
    const {
      backgroundColor: e,
      width: t,
      height: r,
      mergedColor: n,
      $slots: a
    } = this;
    return createVNode("div", {
      ref: "borderBox1",
      class: "dv-border-box-1"
    }, [createVNode("svg", {
      class: "dv-border",
      width: t,
      height: r
    }, [createVNode("polygon", {
      fill: e,
      points: `10, 27 10, ${r - 27} 13, ${r - 24} 13, ${r - 21} 24, ${r - 11}
      38, ${r - 11} 41, ${r - 8} 73, ${r - 8} 75, ${r - 10} 81, ${r - 10}
      85, ${r - 6} ${t - 85}, ${r - 6} ${t - 81}, ${r - 10} ${t - 75}, ${r - 10}
      ${t - 73}, ${r - 8} ${t - 41}, ${r - 8} ${t - 38}, ${r - 11}
      ${t - 10}, ${r - 27} ${t - 10}, 27 ${t - 13}, 25 ${t - 13}, 21
      ${t - 24}, 11 ${t - 38}, 11 ${t - 41}, 8 ${t - 73}, 8 ${t - 75}, 10
      ${t - 81}, 10 ${t - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
    }, null)]), Cv.map((o) => createVNode("svg", {
      key: o,
      width: "150px",
      height: "150px",
      class: `${o} dv-border`
    }, [createVNode("polygon", {
      fill: n[0],
      points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
    }, [createVNode("animate", {
      attributeName: "fill",
      values: `${n[0]};${n[1]};${n[0]}`,
      dur: "0.5s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      fill: n[1],
      points: "27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
    }, [createVNode("animate", {
      attributeName: "fill",
      values: `${n[1]};${n[0]};${n[1]}`,
      dur: "0.5s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      fill: n[0],
      points: "9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
    }, [createVNode("animate", {
      attributeName: "fill",
      values: `${n[0]};${n[1]};transparent`,
      dur: "1s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)])])), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(a, "default")])]);
  }
});
var sn = {
  install(e) {
    e.component("DvBorderBox1", $v);
  }
};
var Pv = ["#fff", "rgba(255, 255, 255, 0.6)"];
var wv = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), r = He(Pv, toRef(e, "color")), {
      width: n,
      height: a,
      initWH: o
    } = be(t);
    return {
      width: n,
      height: a,
      initWH: o,
      mergedColor: r,
      borderBox2: t
    };
  },
  render() {
    const {
      $slots: e,
      backgroundColor: t,
      width: r,
      height: n,
      mergedColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox2",
      class: "dv-border-box-2"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: r,
      height: n
    }, [createVNode("polygon", {
      fill: t,
      points: `
        7, 7 ${r - 7}, 7 ${r - 7}, ${n - 7} 7, ${n - 7}
      `
    }, null), createVNode("polyline", {
      stroke: a[0],
      points: `2, 2 ${r - 2} ,2 ${r - 2}, ${n - 2} 2, ${n - 2} 2, 2`
    }, null), createVNode("polyline", {
      stroke: a[1],
      points: `6, 6 ${r - 6}, 6 ${r - 6}, ${n - 6} 6, ${n - 6} 6, 6`
    }, null), createVNode("circle", {
      fill: a[0],
      cx: "11",
      cy: "11",
      r: "1"
    }, null), createVNode("circle", {
      fill: a[0],
      cx: r - 11,
      cy: "11",
      r: "1"
    }, null), createVNode("circle", {
      fill: a[0],
      cx: r - 11,
      cy: n - 11,
      r: "1"
    }, null), createVNode("circle", {
      fill: a[0],
      cx: "11",
      cy: n - 11,
      r: "1"
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var un = {
  install(e) {
    e.component("DvBorderBox2", wv);
  }
};
var kv = ["#2862b7", "#2862b7"];
var Av = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(kv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      mergedColor: o,
      initWH: a,
      borderBox3: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      backgroundColor: n,
      mergedColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox3",
      class: "dv-border-box-3"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("polygon", {
      fill: n,
      points: `
              23, 23 ${t - 24}, 23 ${t - 24}, ${r - 24} 23, ${r - 24}
            `
    }, null), createVNode("polyline", {
      class: "dv-bb3-line1",
      stroke: a[0],
      points: `4, 4 ${t - 22} ,4 ${t - 22}, ${r - 22} 4, ${r - 22} 4, 4`
    }, null), createVNode("polyline", {
      class: "dv-bb3-line2",
      stroke: a[1],
      points: `10, 10 ${t - 16}, 10 ${t - 16}, ${r - 16} 10, ${r - 16} 10, 10`
    }, null), createVNode("polyline", {
      class: "dv-bb3-line2",
      stroke: a[1],
      points: `16, 16 ${t - 10}, 16 ${t - 10}, ${r - 10} 16, ${r - 10} 16, 16`
    }, null), createVNode("polyline", {
      class: "dv-bb3-line2",
      stroke: a[1],
      points: `22, 22 ${t - 4}, 22 ${t - 4}, ${r - 4} 22, ${r - 4} 22, 22`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var cn = {
  install(e) {
    e.component("DvBorderBox3", Av);
  }
};
var Sv = {
  ...Ie,
  reverse: {
    type: Boolean,
    default: false
  }
};
var Lv = ["red", "rgba(0,0,255,0.8)"];
var Ov = defineComponent({
  props: Sv,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Lv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      initWH: a,
      mergedColor: o,
      borderBox4: t
    };
  },
  render() {
    const {
      $slots: e,
      backgroundColor: t,
      reverse: r,
      width: n,
      height: a,
      mergedColor: o
    } = this;
    return createVNode("div", {
      ref: "borderBox4",
      class: "dv-border-box-4"
    }, [createVNode("svg", {
      class: `dv-border-svg-container ${r && "dv-reverse"}`,
      width: n,
      height: a
    }, [createVNode("polygon", {
      fill: t,
      points: `
        ${n - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${a - 32} 41, ${a - 7} ${n - 15}, ${a - 7}
      `
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-1",
      stroke: o[0],
      points: `145, ${a - 5} 40, ${a - 5} 10, ${a - 35}
          10, 40 40, 5 150, 5 170, 20 ${n - 15}, 20`
    }, null), createVNode("polyline", {
      stroke: o[1],
      class: "dv-bb4-line-2",
      points: `245, ${a - 1} 36, ${a - 1} 14, ${a - 23}
          14, ${a - 100}`
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-3",
      stroke: o[0],
      points: `7, ${a - 40} 7, ${a - 75}`
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-4",
      stroke: o[0],
      points: "28, 24 13, 41 13, 64"
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-5",
      stroke: o[0],
      points: "5, 45 5, 140"
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-6",
      stroke: o[1],
      points: "14, 75 14, 180"
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-7",
      stroke: o[1],
      points: "55, 11 147, 11 167, 26 250, 26"
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-8",
      stroke: o[1],
      points: "158, 5 173, 16"
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-9",
      stroke: o[0],
      points: `200, 17 ${n - 10}, 17`
    }, null), createVNode("polyline", {
      class: "dv-bb4-line-10",
      stroke: o[1],
      points: `385, 17 ${n - 10}, 17`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var fn = {
  install(e) {
    e.component("DvBorderBox4", Ov);
  }
};
var Gv = {
  ...Ie,
  reverse: {
    type: Boolean,
    default: false
  }
};
var Tv = ["rgba(255, 255, 255, 0.35)", "rgba(255, 255, 255, 0.20)"];
var Rv = defineComponent({
  props: Gv,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Tv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      initWH: a,
      mergedColor: o,
      borderBox5: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      mergedColor: n,
      backgroundColor: a,
      reverse: o
    } = this;
    return createVNode("div", {
      ref: "borderBox5",
      class: "dv-border-box-5"
    }, [createVNode("svg", {
      class: `dv-border-svg-container  ${o && "dv-reverse"}`,
      width: t,
      height: r
    }, [createVNode("polygon", {
      fill: a,
      points: `
            10, 22 ${t - 22}, 22 ${t - 22}, ${r - 86} ${t - 84}, ${r - 24} 10, ${r - 24}
          `
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-1",
      stroke: n[0],
      points: `8, 5 ${t - 5}, 5 ${t - 5}, ${r - 100}
          ${t - 100}, ${r - 5} 8, ${r - 5} 8, 5`
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-2",
      stroke: n[1],
      points: `3, 5 ${t - 20}, 5 ${t - 20}, ${r - 60}
          ${t - 74}, ${r - 5} 3, ${r - 5} 3, 5`
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-3",
      stroke: n[1],
      points: `50, 13 ${t - 35}, 13`
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-4",
      stroke: n[1],
      points: `15, 20 ${t - 35}, 20`
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-5",
      stroke: n[1],
      points: `15, ${r - 20} ${t - 110}, ${r - 20}`
    }, null), createVNode("polyline", {
      class: "dv-bb5-line-6",
      stroke: n[1],
      points: `15, ${r - 13} ${t - 110}, ${r - 13}`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var dn = {
  install(e) {
    e.component("DvBorderBox5", Rv);
  }
};
var Mv = ["rgba(255, 255, 255, 0.35)", "gray"];
var Dv = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Mv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      initWH: a,
      mergedColor: o,
      borderBox6: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      mergedColor: n,
      backgroundColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox6",
      class: "dv-border-box-6"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("polygon", {
      fill: a,
      points: `
            9, 7 ${t - 9}, 7 ${t - 9}, ${r - 7} 9, ${r - 7}
            `
    }, null), createVNode("circle", {
      fill: n[1],
      cx: "5",
      cy: "5",
      r: "2"
    }, null), createVNode("circle", {
      fill: n[1],
      cx: t - 5,
      cy: "5",
      r: "2"
    }, null), createVNode("circle", {
      fill: n[1],
      cx: t - 5,
      cy: r - 5,
      r: "2"
    }, null), createVNode("circle", {
      fill: n[1],
      cx: "5",
      cy: r - 5,
      r: "2"
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `10, 4 ${t - 10}, 4`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `10, ${r - 4} ${t - 10}, ${r - 4}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `5, 70 5, ${r - 70}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `${t - 5}, 70 ${t - 5}, ${r - 70}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: "3, 10, 3, 50"
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: "7, 30 7, 80"
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `${t - 3}, 10 ${t - 3}, 50`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `${t - 7}, 30 ${t - 7}, 80`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `3, ${r - 10} 3, ${r - 50}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `7, ${r - 30} 7, ${r - 80}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `${t - 3}, ${r - 10} ${t - 3}, ${r - 50}`
    }, null), createVNode("polyline", {
      stroke: n[0],
      points: `${t - 7}, ${r - 30} ${t - 7}, ${r - 80}`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var hn = {
  install(e) {
    e.component("DvBorderBox6", Dv);
  }
};
var Fv = ["rgba(128,128,128,0.3)", "rgba(128,128,128,0.5)"];
var Bv = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Fv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      initWH: a,
      mergedColor: o,
      borderBox7: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      mergedColor: n,
      backgroundColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox7",
      class: "dv-border-box-7",
      style: `box-shadow: inset 0 0 40px ${n[0]}; border: 1px solid ${n[0]}; background-color: ${a}`
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("polyline", {
      class: "dv-bb7-line-width-2",
      stroke: n[0],
      points: "0, 25 0, 0 25, 0"
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-2",
      stroke: n[0],
      points: `${t - 25}, 0 ${t}, 0 ${t}, 25`
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-2",
      stroke: n[0],
      points: `${t - 25}, ${r} ${t}, ${r} ${t}, ${r - 25}`
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-2",
      stroke: n[0],
      points: `0, ${r - 25} 0, ${r} 25, ${r}`
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-5",
      stroke: n[1],
      points: "0, 10 0, 0 10, 0"
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-5",
      stroke: n[1],
      points: `${t - 10}, 0 ${t}, 0 ${t}, 10`
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-5",
      stroke: n[1],
      points: `${t - 10}, ${r} ${t}, ${r} ${t}, ${r - 10}`
    }, null), createVNode("polyline", {
      class: "dv-bb7-line-width-5",
      stroke: n[1],
      points: `0, ${r - 10} 0, ${r} 10, ${r}`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var vn = {
  install(e) {
    e.component("DvBorderBox7", Bv);
  }
};
var Nv = {
  ...Ie,
  reverse: {
    type: Boolean,
    default: false
  },
  dur: {
    type: Number,
    default: 3
  }
};
var jv = ["#235fa7", "#4fd2dd"];
var Ev = defineComponent({
  props: Nv,
  setup(e) {
    const t = Ve(), r = ref(null), n = reactive({
      path: `border-box-8-path-${t}`,
      gradient: `border-box-8-gradient-${t}`,
      mask: `border-box-8-mask-${t}`
    }), {
      width: a,
      height: o,
      initWH: l
    } = be(r), s = computed(() => (a.value + o.value - 5) * 2), D = computed(() => e.reverse ? `M 2.5, 2.5 L 2.5, ${o.value - 2.5} L ${a.value - 2.5}, ${o.value - 2.5} L ${a.value - 2.5}, 2.5 L 2.5, 2.5` : `M2.5, 2.5 L${a.value - 2.5}, 2.5 L${a.value - 2.5}, ${o.value - 2.5} L2.5, ${o.value - 2.5} L2.5, 2.5`), W = He(jv, toRef(e, "color"));
    return {
      width: a,
      height: o,
      initWH: l,
      state: n,
      mergedColor: W,
      pathD: D,
      length: s,
      borderBox8: r
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      state: n,
      mergedColor: a,
      pathD: o,
      length: l,
      backgroundColor: s,
      dur: D
    } = this;
    return createVNode("div", {
      ref: "borderBox8",
      class: "dv-border-box-8"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("defs", null, [createVNode("path", {
      id: n.path,
      d: o,
      fill: "transparent"
    }, null), createVNode("radialGradient", {
      id: n.gradient,
      cx: "50%",
      cy: "50%",
      r: "50%"
    }, [createVNode("stop", {
      offset: "0%",
      "stop-color": "#fff",
      "stop-opacity": "1"
    }, null), createVNode("stop", {
      offset: "100%",
      "stop-color": "#fff",
      "stop-opacity": "0"
    }, null)]), createVNode("mask", {
      id: n.mask
    }, [createVNode("circle", {
      cx: "0",
      cy: "0",
      r: "150",
      fill: `url(#${n.gradient})`
    }, [h("animateMotion", {
      dur: `${D}s`,
      path: o,
      rotate: "auto",
      repeatCount: "indefinite"
    })])])]), createVNode("polygon", {
      fill: s,
      points: `5, 5 ${t - 5}, 5 ${t - 5} ${r - 5} 5, ${r - 5}`
    }, null), createVNode("use", {
      stroke: a[0],
      "stroke-width": "1",
      "xlink:href": `#${n.path}`
    }, null), createVNode("use", {
      stroke: a[1],
      "stroke-width": "3",
      "xlink:href": `#${n.path}`,
      mask: `url(#${n.mask})`
    }, [createVNode("animate", {
      attributeName: "stroke-dasharray",
      from: `0, ${l}`,
      to: `${l}, 0`,
      dur: `${D}s`,
      repeatCount: "indefinite"
    }, null)])]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var pn = {
  install(e) {
    e.component("DvBorderBox8", Ev);
  }
};
var Wv = ["#11eefd", "#0078d2"];
var zv = defineComponent({
  props: Ie,
  setup(e) {
    const t = Ve(), r = ref(null), {
      width: n,
      height: a,
      initWH: o
    } = be(r), l = reactive({
      gradientId: `border-box-9-gradient-${t}`,
      maskId: `border-box-9-mask-${t}`
    }), s = He(Wv, toRef(e, "color"));
    return {
      width: n,
      height: a,
      initWH: o,
      state: l,
      mergedColor: s,
      borderBox9: r
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      state: n,
      mergedColor: a,
      backgroundColor: o
    } = this;
    return createVNode("div", {
      ref: "borderBox9",
      class: "dv-border-box-9"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("defs", null, [createVNode("linearGradient", {
      id: n.gradientId,
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%"
    }, [createVNode("animate", {
      attributeName: "x1",
      values: "0%;100%;0%",
      dur: "10s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null), createVNode("animate", {
      attributeName: "x2",
      values: "100%;0%;100%",
      dur: "10s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null), createVNode("stop", {
      offset: "0%",
      "stop-color": a[0]
    }, [createVNode("animate", {
      attributeName: "stop-color",
      values: `${a[0]};${a[1]};${a[0]}`,
      dur: "10s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("stop", {
      offset: "100%",
      "stop-color": a[1]
    }, [createVNode("animate", {
      attributeName: "stop-color",
      values: `${a[1]};${a[0]};${a[1]}`,
      dur: "10s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)])]), createVNode("mask", {
      id: n.maskId
    }, [createVNode("polyline", {
      stroke: "#fff",
      "stroke-width": "3",
      fill: "transparent",
      points: `8, ${r * 0.4} 8, 3, ${t * 0.4 + 7}, 3`
    }, null), createVNode("polyline", {
      fill: "#fff",
      points: `8, ${r * 0.15} 8, 3, ${t * 0.1 + 7}, 3
              ${t * 0.1}, 8 14, 8 14, ${r * 0.15 - 7}
            `
    }, null), createVNode("polyline", {
      stroke: "#fff",
      "stroke-width": "3",
      fill: "transparent",
      points: `${t * 0.5}, 3 ${t - 3}, 3, ${t - 3}, ${r * 0.25}`
    }, null), createVNode("polyline", {
      fill: "#fff",
      points: `
              ${t * 0.52}, 3 ${t * 0.58}, 3
              ${t * 0.58 - 7}, 9 ${t * 0.52 + 7}, 9
            `
    }, null), createVNode("polyline", {
      fill: "#fff",
      points: `
              ${t * 0.9}, 3 ${t - 3}, 3 ${t - 3}, ${r * 0.1}
              ${t - 9}, ${r * 0.1 - 7} ${t - 9}, 9 ${t * 0.9 + 7}, 9
            `
    }, null), createVNode("polyline", {
      stroke: "#fff",
      "stroke-width": "3",
      fill: "transparent",
      points: `8, ${r * 0.5} 8, ${r - 3} ${t * 0.3 + 7}, ${r - 3}`
    }, null), createVNode("polyline", {
      fill: "#fff",
      points: `
              8, ${r * 0.55} 8, ${r * 0.7}
              2, ${r * 0.7 - 7} 2, ${r * 0.55 + 7}
            `
    }, null), createVNode("polyline", {
      stroke: "#fff",
      "stroke-width": "3",
      fill: "transparent",
      points: `${t * 0.35}, ${r - 3} ${t - 3}, ${r - 3} ${t - 3}, ${r * 0.35}`
    }, null), createVNode("polyline", {
      fill: "#fff",
      points: `
              ${t * 0.92}, ${r - 3} ${t - 3}, ${r - 3} ${t - 3}, ${r * 0.8}
              ${t - 9}, ${r * 0.8 + 7} ${t - 9}, ${r - 9} ${t * 0.92 + 7}, ${r - 9}
            `
    }, null)])]), createVNode("polygon", {
      fill: o,
      points: `
              15, 9 ${t * 0.1 + 1}, 9 ${t * 0.1 + 4}, 6 ${t * 0.52 + 2}, 6
              ${t * 0.52 + 6}, 10 ${t * 0.58 - 7}, 10 ${t * 0.58 - 2}, 6
              ${t * 0.9 + 2}, 6 ${t * 0.9 + 6}, 10 ${t - 10}, 10 ${t - 10}, ${r * 0.1 - 6}
              ${t - 6}, ${r * 0.1 - 1} ${t - 6}, ${r * 0.8 + 1} ${t - 10}, ${r * 0.8 + 6}
              ${t - 10}, ${r - 10} ${t * 0.92 + 7}, ${r - 10}  ${t * 0.92 + 2}, ${r - 6}
              11, ${r - 6} 11, ${r * 0.15 - 2} 15, ${r * 0.15 - 7}
            `
    }, null), createVNode("rect", {
      x: "0",
      y: "0",
      width: t,
      height: r,
      fill: `url(#${n.gradientId})`,
      mask: `url(#${n.maskId})`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var gn = {
  install(e) {
    e.component("DvBorderBox9", zv);
  }
};
var qv = ["left-top", "right-top", "left-bottom", "right-bottom"];
var Iv = ["#1d48c4", "#d3e1f8"];
var Hv = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Iv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      initWH: a,
      mergedColor: o,
      borderBox10: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      mergedColor: n,
      backgroundColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox10",
      class: "dv-border-box-10",
      style: `box-shadow: inset 0 0 25px 3px ${n[0]}`
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("polygon", {
      fill: a,
      points: `
              4, 0 ${t - 4}, 0 ${t}, 4 ${t}, ${r - 4} ${t - 4}, ${r}
              4, ${r} 0, ${r - 4} 0, 4
            `
    }, null)]), qv.map((o) => createVNode("svg", {
      width: "150px",
      height: "150px",
      class: `${o} dv-border-svg-container`
    }, [createVNode("polygon", {
      fill: n[1],
      points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
    }, null)])), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var mn = {
  install(e) {
    e.component("DvBorderBox10", Hv);
  }
};
var Vv = {
  ...Ie,
  title: {
    type: String,
    default: ""
  },
  titleWidth: {
    type: Number,
    default: 250
  },
  animate: {
    type: Boolean,
    default: true
  }
};
var Za = ["#8aaafb", "#1f33a2"];
var Uv = defineComponent({
  props: Vv,
  setup(e) {
    const t = Ve(), r = ref(null), {
      width: n,
      height: a,
      initWH: o
    } = be(r), l = ref(`border-box-11-filterId-${t}`), s = He(Za, toRef(e, "color"));
    return {
      width: n,
      height: a,
      initWH: o,
      filterId: l,
      mergedColor: s,
      borderBox11: r
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      filterId: n,
      mergedColor: a,
      backgroundColor: o,
      title: l,
      titleWidth: s,
      animate: D
    } = this;
    return createVNode("div", {
      ref: "borderBox11",
      class: "dv-border-box-11"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("defs", null, [createVNode("filter", {
      id: n,
      height: "150%",
      width: "150%",
      x: "-25%",
      y: "-25%"
    }, [createVNode("feMorphology", {
      operator: "dilate",
      radius: "2",
      in: "SourceAlpha",
      result: "thicken"
    }, null), createVNode("feGaussianBlur", {
      in: "thicken",
      stdDeviation: "3",
      result: "blurred"
    }, null), createVNode("feFlood", {
      "flood-color": a[1],
      result: "glowColor"
    }, null), createVNode("feComposite", {
      in: "glowColor",
      in2: "blurred",
      operator: "in",
      result: "softGlowColored"
    }, null), createVNode("feMerge", null, [createVNode("feMergeNode", {
      in: "softGlowColored"
    }, null), createVNode("feMergeNode", {
      in: "SourceGraphic"
    }, null)])])]), createVNode("polygon", {
      fill: o,
      points: `
        20, 32 ${t * 0.5 - s / 2}, 32 ${t * 0.5 - s / 2 + 20}, 53
        ${t * 0.5 + s / 2 - 20}, 53 ${t * 0.5 + s / 2}, 32
        ${t - 20}, 32 ${t - 8}, 48 ${t - 8}, ${r - 25} ${t - 20}, ${r - 8}
        20, ${r - 8} 8, ${r - 25} 8, 50
      `
    }, null), createVNode("polyline", {
      stroke: a[0],
      filter: `url(#${n})`,
      points: `
          ${(t - s) / 2}, 30
          20, 30 7, 50 7, ${50 + (r - 167) / 2}
          13, ${55 + (r - 167) / 2} 13, ${135 + (r - 167) / 2}
          7, ${140 + (r - 167) / 2} 7, ${r - 27}
          20, ${r - 7} ${t - 20}, ${r - 7} ${t - 7}, ${r - 27}
          ${t - 7}, ${140 + (r - 167) / 2} ${t - 13}, ${135 + (r - 167) / 2}
          ${t - 13}, ${55 + (r - 167) / 2} ${t - 7}, ${50 + (r - 167) / 2}
          ${t - 7}, 50 ${t - 20}, 30 ${(t + s) / 2}, 30
          ${(t + s) / 2 - 20}, 7 ${(t - s) / 2 + 20}, 7
          ${(t - s) / 2}, 30 ${(t - s) / 2 + 20}, 52
          ${(t + s) / 2 - 20}, 52 ${(t + s) / 2}, 30
        `
    }, null), createVNode("polygon", {
      stroke: a[0],
      fill: "transparent",
      points: `
          ${(t + s) / 2 - 5}, 30 ${(t + s) / 2 - 21}, 11
          ${(t + s) / 2 - 27}, 11 ${(t + s) / 2 - 8}, 34
        `
    }, null), createVNode("polygon", {
      stroke: a[0],
      fill: "transparent",
      points: `
          ${(t - s) / 2 + 5}, 30 ${(t - s) / 2 + 22}, 49
          ${(t - s) / 2 + 28}, 49 ${(t - s) / 2 + 8}, 26
        `
    }, null), createVNode("polygon", {
      stroke: a[0],
      fill: De(a[1] || Za[1], 30),
      filter: `url(#${n})`,
      points: `
          ${(t + s) / 2 - 11}, 37 ${(t + s) / 2 - 32}, 11
          ${(t - s) / 2 + 23}, 11 ${(t - s) / 2 + 11}, 23
          ${(t - s) / 2 + 33}, 49 ${(t + s) / 2 - 22}, 49
        `
    }, null), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "1",
      points: `
          ${(t - s) / 2 - 10}, 37 ${(t - s) / 2 - 31}, 37
          ${(t - s) / 2 - 25}, 46 ${(t - s) / 2 - 4}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "1;0.7;1",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "0.7",
      points: `
          ${(t - s) / 2 - 40}, 37 ${(t - s) / 2 - 61}, 37
          ${(t - s) / 2 - 55}, 46 ${(t - s) / 2 - 34}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "0.7;0.4;0.7",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "0.5",
      points: `
          ${(t - s) / 2 - 70}, 37 ${(t - s) / 2 - 91}, 37
          ${(t - s) / 2 - 85}, 46 ${(t - s) / 2 - 64}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "0.5;0.2;0.5",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "1",
      points: `
          ${(t + s) / 2 + 30}, 37 ${(t + s) / 2 + 9}, 37
          ${(t + s) / 2 + 3}, 46 ${(t + s) / 2 + 24}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "1;0.7;1",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "0.7",
      points: `
          ${(t + s) / 2 + 60}, 37 ${(t + s) / 2 + 39}, 37
          ${(t + s) / 2 + 33}, 46 ${(t + s) / 2 + 54}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "0.7;0.4;0.7",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("polygon", {
      filter: `url(#${n})`,
      fill: a[0],
      opacity: "0.5",
      points: `
          ${(t + s) / 2 + 90}, 37 ${(t + s) / 2 + 69}, 37
          ${(t + s) / 2 + 63}, 46 ${(t + s) / 2 + 84}, 46
        `
    }, [D && createVNode("animate", {
      attributeName: "opacity",
      values: "0.5;0.2;0.5",
      dur: "2s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("text", {
      class: "dv-border-box-11-title",
      x: `${t / 2}`,
      y: "32",
      fill: "#fff",
      "font-size": "18",
      "text-anchor": "middle",
      "dominant-baseline": "middle"
    }, [l]), createVNode("polygon", {
      fill: a[0],
      filter: `url(#${n})`,
      points: `
          7, ${53 + (r - 167) / 2} 11, ${57 + (r - 167) / 2}
          11, ${133 + (r - 167) / 2} 7, ${137 + (r - 167) / 2}
        `
    }, null), createVNode("polygon", {
      fill: a[0],
      filter: `url(#${n})`,
      points: `
          ${t - 7}, ${53 + (r - 167) / 2} ${t - 11}, ${57 + (r - 167) / 2}
          ${t - 11}, ${133 + (r - 167) / 2} ${t - 7}, ${137 + (r - 167) / 2}
        `
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var yn = {
  install(e) {
    e.component("DvBorderBox11", Uv);
  }
};
var bt = ["#2e6099", "#7ce7fd"];
var Xv = defineComponent({
  props: Ie,
  setup(e) {
    const t = Ve(), r = ref(null), {
      width: n,
      height: a,
      initWH: o
    } = be(r), l = ref(`borderr-box-12-filterId-${t}`), s = He(bt, toRef(e, "color"));
    return {
      width: n,
      height: a,
      filterId: l,
      mergedColor: s,
      initWH: o,
      borderBox12: r
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      filterId: n,
      mergedColor: a,
      backgroundColor: o
    } = this;
    return createVNode("div", {
      ref: "borderBox12",
      class: "dv-border-box-12"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("defs", null, [createVNode("filter", {
      id: n,
      height: "150%",
      width: "150%",
      x: "-25%",
      y: "-25%"
    }, [createVNode("feMorphology", {
      operator: "dilate",
      radius: "1",
      in: "SourceAlpha",
      result: "thicken"
    }, null), createVNode("feGaussianBlur", {
      in: "thicken",
      stdDeviation: "2",
      result: "blurred"
    }, null), createVNode("feFlood", {
      "flood-color": De(a[1] || bt[1], 70),
      result: "glowColor"
    }, [createVNode("animate", {
      attributeName: "flood-color",
      values: `
                ${De(a[1] || bt[1], 70)};
                ${De(a[1] || bt[1], 30)};
                ${De(a[1] || bt[1], 70)};
              `,
      dur: "3s",
      begin: "0s",
      repeatCount: "indefinite"
    }, null)]), createVNode("feComposite", {
      in: "glowColor",
      in2: "blurred",
      operator: "in",
      result: "softGlowColored"
    }, null), createVNode("feMerge", null, [createVNode("feMergeNode", {
      in: "softGlowColored"
    }, null), createVNode("feMergeNode", {
      in: "SourceGraphic"
    }, null)])])]), t && r && createVNode("path", {
      fill: o,
      "stroke-width": "2",
      stroke: a[0],
      d: `
          M15 5 L ${t - 15} 5 Q ${t - 5} 5, ${t - 5} 15
          L ${t - 5} ${r - 15} Q ${t - 5} ${r - 5}, ${t - 15} ${r - 5}
          L 15, ${r - 5} Q 5 ${r - 5} 5 ${r - 15} L 5 15
          Q 5 5 15 5
        `
    }, null), createVNode("path", {
      "stroke-width": "2",
      fill: "transparent",
      "stroke-linecap": "round",
      filter: `url(#${n})`,
      stroke: a[1],
      d: "M 20 5 L 15 5 Q 5 5 5 15 L 5 20"
    }, null), createVNode("path", {
      "stroke-width": "2",
      fill: "transparent",
      "stroke-linecap": "round",
      filter: `url(#${n})`,
      stroke: a[1],
      d: `M ${t - 20} 5 L ${t - 15} 5 Q ${t - 5} 5 ${t - 5} 15 L ${t - 5} 20`
    }, null), createVNode("path", {
      "stroke-width": "2",
      fill: "transparent",
      "stroke-linecap": "round",
      filter: `url(#${n})`,
      stroke: a[1],
      d: `
          M ${t - 20} ${r - 5} L ${t - 15} ${r - 5}
          Q ${t - 5} ${r - 5} ${t - 5} ${r - 15}
          L ${t - 5} ${r - 20}
          `
    }, null), createVNode("path", {
      "stroke-width": "2",
      fill: "transparent",
      "stroke-linecap": "round",
      filter: `url(#${n})`,
      stroke: a[1],
      d: `
          M 20 ${r - 5} L 15 ${r - 5}
          Q 5 ${r - 5} 5 ${r - 15}
          L 5 ${r - 20}
          `
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var bn = {
  install(e) {
    e.component("DvBorderBox12", Xv);
  }
};
var Qv = ["#6586ec", "#2cf7fe"];
var Yv = defineComponent({
  props: Ie,
  setup(e) {
    const t = ref(null), {
      width: r,
      height: n,
      initWH: a
    } = be(t), o = He(Qv, toRef(e, "color"));
    return {
      width: r,
      height: n,
      mergedColor: o,
      initWH: a,
      borderBox13: t
    };
  },
  render() {
    const {
      $slots: e,
      width: t,
      height: r,
      mergedColor: n,
      backgroundColor: a
    } = this;
    return createVNode("div", {
      ref: "borderBox13",
      class: "dv-border-box-13"
    }, [createVNode("svg", {
      class: "dv-border-svg-container",
      width: t,
      height: r
    }, [createVNode("path", {
      fill: a,
      stroke: n[0],
      d: `
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${t - 20} 10 L ${t - 5} 25
          L ${t - 5} ${r - 5} L 20 ${r - 5}
          L 5 ${r - 20} L 5 20
        `
    }, null), createVNode("path", {
      fill: "transparent",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-dasharray": "10, 5",
      stroke: n[0],
      d: "M 16 9 L 61 9"
    }, null), createVNode("path", {
      fill: "transparent",
      stroke: n[1],
      d: "M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"
    }, null), createVNode("path", {
      fill: "transparent",
      stroke: n[1],
      d: `M ${t - 5} ${r - 30} L ${t - 5} ${r - 5} L ${t - 30} ${r - 5}`
    }, null)]), createVNode("div", {
      class: "border-box-content"
    }, [renderSlot(e, "default")])]);
  }
});
var xn = {
  install(e) {
    e.component("DvBorderBox13", Yv);
  }
};
var Zv = {
  install(e) {
    var t, r, n, a, o, l, s, D, W, T, U, B, A, v, R, N, I, E, b, $, f, _, O, m, C, d, G, S, g, V, X, Z, c, y, h2, P, q, K;
    (t = br.install) == null || t.call(br, e), (r = xr.install) == null || r.call(xr, e), (n = Tr.install) == null || n.call(Tr, e), (a = Rr.install) == null || a.call(Rr, e), (o = Mr.install) == null || o.call(Mr, e), (l = Dr.install) == null || l.call(Dr, e), (s = Fr.install) == null || s.call(Fr, e), (D = Br.install) == null || D.call(Br, e), (W = Wr.install) == null || W.call(Wr, e), (T = zr.install) == null || T.call(zr, e), (U = qr.install) == null || U.call(qr, e), (B = Ir.install) == null || B.call(Ir, e), (A = Hr.install) == null || A.call(Hr, e), (v = Vr.install) == null || v.call(Vr, e), (R = Ur.install) == null || R.call(Ur, e), (N = Xr.install) == null || N.call(Xr, e), (I = Qr.install) == null || I.call(Qr, e), (E = Yr.install) == null || E.call(Yr, e), (b = Jr.install) == null || b.call(Jr, e), ($ = Zr.install) == null || $.call(Zr, e), (f = en.install) == null || f.call(en, e), (_ = tn.install) == null || _.call(tn, e), (O = rn.install) == null || O.call(rn, e), (m = nn.install) == null || m.call(nn, e), (C = an.install) == null || C.call(an, e), (d = sn.install) == null || d.call(sn, e), (G = un.install) == null || G.call(un, e), (S = cn.install) == null || S.call(cn, e), (g = fn.install) == null || g.call(fn, e), (V = dn.install) == null || V.call(dn, e), (X = hn.install) == null || X.call(hn, e), (Z = vn.install) == null || Z.call(vn, e), (c = pn.install) == null || c.call(pn, e), (y = gn.install) == null || y.call(gn, e), (h2 = mn.install) == null || h2.call(mn, e), (P = yn.install) == null || P.call(yn, e), (q = bn.install) == null || q.call(bn, e), (K = xn.install) == null || K.call(xn, e);
  }
};

// dep:@kjgl77_datav-vue3
var kjgl77_datav_vue3_default = Zv;
export {
  Cu as ActiveRingChart,
  qr as ActiveRingChartPlugin,
  $v as BorderBox1,
  Hv as BorderBox10,
  mn as BorderBox10Plugin,
  Uv as BorderBox11,
  yn as BorderBox11Plugin,
  Xv as BorderBox12,
  bn as BorderBox12Plugin,
  Yv as BorderBox13,
  xn as BorderBox13Plugin,
  sn as BorderBox1Plugin,
  wv as BorderBox2,
  un as BorderBox2Plugin,
  Av as BorderBox3,
  cn as BorderBox3Plugin,
  Ov as BorderBox4,
  fn as BorderBox4Plugin,
  Rv as BorderBox5,
  dn as BorderBox5Plugin,
  Dv as BorderBox6,
  hn as BorderBox6Plugin,
  Bv as BorderBox7,
  vn as BorderBox7Plugin,
  Ev as BorderBox8,
  pn as BorderBox8Plugin,
  zv as BorderBox9,
  gn as BorderBox9Plugin,
  mu as CapsuleChart,
  zr as CapsuleChartPlugin,
  uu as Charts,
  Wr as ChartsPlugin,
  uo as ConicalColumnChart,
  br as ConicalColumnChartPlugin,
  Mu as Decoration1,
  Jc as Decoration10,
  rn as Decoration10Plugin,
  uf as Decoration11,
  nn as Decoration11Plugin,
  Af as Decoration12,
  an as Decoration12Plugin,
  Vr as Decoration1Plugin,
  Eu as Decoration2,
  Ur as Decoration2Plugin,
  Iu as Decoration3,
  Xr as Decoration3Plugin,
  Xu as Decoration4,
  Qr as Decoration4Plugin,
  ec as Decoration5,
  Yr as Decoration5Plugin,
  ic as Decoration6,
  Jr as Decoration6Plugin,
  hc as Decoration7,
  Zr as Decoration7Plugin,
  yc as Decoration8,
  en as Decoration8Plugin,
  Lc as Decoration9,
  tn as Decoration9Plugin,
  gi as DigitalFlop,
  Ir as DigitalFlopPlugin,
  bs as FlylineChart,
  Ul as FlylineChartEnhanced,
  Mr as FlylineChartEnhancedPlugin,
  Dr as FlylineChartPlugin,
  _u as FullScreenContainer,
  Hr as FullScreenContainerPlugin,
  _l as Loading,
  Rr as LoadingPlugin,
  yo as PercentPond,
  xr as PercentPondPlugin,
  Ts as ScrollBoard,
  Br as ScrollBoardPlugin,
  Ls as ScrollRankingBoard,
  Fr as ScrollRankingBoardPlugin,
  gl as WaterLevelPond,
  Tr as WaterLevelPondPlugin,
  kjgl77_datav_vue3_default as default
};
//# sourceMappingURL=@kjgl77_datav-vue3.js.map
