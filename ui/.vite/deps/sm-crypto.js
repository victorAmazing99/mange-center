import {
  __commonJS
} from "./chunk-HUBM7RA2.js";

// node_modules/jsbn/index.js
var require_jsbn = __commonJS({
  "node_modules/jsbn/index.js"(exports, module) {
    (function() {
      var dbits;
      var canary = 244837814094590;
      var j_lm = (canary & 16777215) == 15715070;
      function BigInteger(a, b, c) {
        if (a != null)
          if ("number" == typeof a)
            this.fromNumber(a, b, c);
          else if (b == null && "string" != typeof a)
            this.fromString(a, 256);
          else
            this.fromString(a, b);
      }
      function nbi() {
        return new BigInteger(null);
      }
      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 67108864);
          w[j++] = v & 67108863;
        }
        return c;
      }
      function am2(i, x, w, j, c, n) {
        var xl = x & 32767, xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 32767;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 1073741823;
        }
        return c;
      }
      function am3(i, x, w, j, c, n) {
        var xl = x & 16383, xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 16383;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 16383) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 268435455;
        }
        return c;
      }
      var inBrowser = typeof navigator !== "undefined";
      if (inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer") {
        BigInteger.prototype.am = am2;
        dbits = 30;
      } else if (inBrowser && j_lm && navigator.appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26;
      } else {
        BigInteger.prototype.am = am3;
        dbits = 28;
      }
      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      BigInteger.prototype.DV = 1 << dbits;
      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;
      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv)
        BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
      function int2char(n) {
        return BI_RM.charAt(n);
      }
      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }
      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i)
          r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }
      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0)
          this[0] = x;
        else if (x < -1)
          this[0] = x + this.DV;
        else
          this.t = 0;
      }
      function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r;
      }
      function bnpFromString(s, b) {
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 256)
          k = 8;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else {
          this.fromRadix(s, b);
          return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length, mi = false, sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 255 : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-")
              mi = true;
            continue;
          }
          mi = false;
          if (sh == 0)
            this[this.t++] = x;
          else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
          } else
            this[this.t - 1] |= x << sh;
          sh += k;
          if (sh >= this.DB)
            sh -= this.DB;
        }
        if (k == 8 && (s[0] & 128) != 0) {
          this.s = -1;
          if (sh > 0)
            this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
        this.clamp();
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c)
          --this.t;
      }
      function bnToString(b) {
        if (this.s < 0)
          return "-" + this.negate().toString(b);
        var k;
        if (b == 16)
          k = 4;
        else if (b == 8)
          k = 3;
        else if (b == 2)
          k = 1;
        else if (b == 32)
          k = 5;
        else if (b == 4)
          k = 2;
        else
          return this.toRadix(b);
        var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
        var p = this.DB - i * this.DB % k;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (this[i] & (1 << p) - 1) << k - p;
              d |= this[--i] >> (p += this.DB - k);
            } else {
              d = this[i] >> (p -= k) & km;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if (d > 0)
              m = true;
            if (m)
              r += int2char(d);
          }
        }
        return m ? r : "0";
      }
      function bnNegate() {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }
      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0)
          return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0)
          return this.s < 0 ? -r : r;
        while (--i >= 0)
          if ((r = this[i] - a[i]) != 0)
            return r;
        return 0;
      }
      function nbits(x) {
        var r = 1, t2;
        if ((t2 = x >>> 16) != 0) {
          x = t2;
          r += 16;
        }
        if ((t2 = x >> 8) != 0) {
          x = t2;
          r += 8;
        }
        if ((t2 = x >> 4) != 0) {
          x = t2;
          r += 4;
        }
        if ((t2 = x >> 2) != 0) {
          x = t2;
          r += 2;
        }
        if ((t2 = x >> 1) != 0) {
          x = t2;
          r += 1;
        }
        return r;
      }
      function bnBitLength() {
        if (this.t <= 0)
          return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }
      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
          r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i)
          r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }
      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i)
          r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }
      function bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
        for (i = this.t - 1; i >= 0; --i) {
          r[i + ds + 1] = this[i] >> cbs | c;
          c = (this[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i)
          r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
      }
      function bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
          r.t = 0;
          return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
          r[i - ds - 1] |= (this[i] & bm) << cbs;
          r[i - ds] = this[i] >> bs;
        }
        if (bs > 0)
          r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.clamp();
      }
      function bnpSubTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] - a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c -= a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1)
          r[i++] = this.DV + c;
        else if (c > 0)
          r[i++] = c;
        r.t = i;
        r.clamp();
      }
      function bnpMultiplyTo(a, r) {
        var x = this.abs(), y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < y.t; ++i)
          r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0)
          r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0)
          r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }
      function bnpDivRemTo(m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0)
          return;
        var pt = this.abs();
        if (pt.t < pm.t) {
          if (q != null)
            q.fromInt(0);
          if (r != null)
            this.copyTo(r);
          return;
        }
        if (r == null)
          r = nbi();
        var y = nbi(), ts = this.s, ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0)
          return;
        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
        var i = r.t, j = i - ys, t2 = q == null ? nbi() : q;
        y.dlShiftTo(j, t2);
        if (r.compareTo(t2) >= 0) {
          r[r.t++] = 1;
          r.subTo(t2, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t2);
        t2.subTo(y, y);
        while (y.t < ys)
          y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t2);
            r.subTo(t2, r);
            while (r[i] < --qd)
              r.subTo(t2, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms)
            BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0)
          r.rShiftTo(nsh, r);
        if (ts < 0)
          BigInteger.ZERO.subTo(r, r);
      }
      function bnMod(a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          a.subTo(r, r);
        return r;
      }
      function Classic(m) {
        this.m = m;
      }
      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0)
          return x.mod(this.m);
        else
          return x;
      }
      function cRevert(x) {
        return x;
      }
      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }
      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;
      function bnpInvDigit() {
        if (this.t < 1)
          return 0;
        var x = this[0];
        if ((x & 1) == 0)
          return 0;
        var y = x & 3;
        y = y * (2 - (x & 15) * y) & 15;
        y = y * (2 - (x & 255) * y) & 255;
        y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }
      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }
      function montConvert(x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
          this.m.subTo(r, r);
        return r;
      }
      function montRevert(x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
      function montReduce(x) {
        while (x.t <= this.mt2)
          x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 32767;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;
      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }
      function bnpExp(e, z2) {
        if (e > 4294967295 || e < 1)
          return BigInteger.ONE;
        var r = nbi(), r2 = nbi(), g = z2.convert(this), i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z2.sqrTo(r, r2);
          if ((e & 1 << i) > 0)
            z2.mulTo(r2, g, r);
          else {
            var t2 = r;
            r = r2;
            r2 = t2;
          }
        }
        return z2.revert(r);
      }
      function bnModPowInt(e, m) {
        var z2;
        if (e < 256 || m.isEven())
          z2 = new Classic(m);
        else
          z2 = new Montgomery(m);
        return this.exp(e, z2);
      }
      BigInteger.prototype.copyTo = bnpCopyTo;
      BigInteger.prototype.fromInt = bnpFromInt;
      BigInteger.prototype.fromString = bnpFromString;
      BigInteger.prototype.clamp = bnpClamp;
      BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
      BigInteger.prototype.drShiftTo = bnpDRShiftTo;
      BigInteger.prototype.lShiftTo = bnpLShiftTo;
      BigInteger.prototype.rShiftTo = bnpRShiftTo;
      BigInteger.prototype.subTo = bnpSubTo;
      BigInteger.prototype.multiplyTo = bnpMultiplyTo;
      BigInteger.prototype.squareTo = bnpSquareTo;
      BigInteger.prototype.divRemTo = bnpDivRemTo;
      BigInteger.prototype.invDigit = bnpInvDigit;
      BigInteger.prototype.isEven = bnpIsEven;
      BigInteger.prototype.exp = bnpExp;
      BigInteger.prototype.toString = bnToString;
      BigInteger.prototype.negate = bnNegate;
      BigInteger.prototype.abs = bnAbs;
      BigInteger.prototype.compareTo = bnCompareTo;
      BigInteger.prototype.bitLength = bnBitLength;
      BigInteger.prototype.mod = bnMod;
      BigInteger.prototype.modPowInt = bnModPowInt;
      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      function bnClone() {
        var r = nbi();
        this.copyTo(r);
        return r;
      }
      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1)
            return this[0] - this.DV;
          else if (this.t == 0)
            return -1;
        } else if (this.t == 1)
          return this[0];
        else if (this.t == 0)
          return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }
      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }
      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }
      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }
      function bnSigNum() {
        if (this.s < 0)
          return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
          return 0;
        else
          return 1;
      }
      function bnpToRadix(b) {
        if (b == null)
          b = 10;
        if (this.signum() == 0 || b < 2 || b > 36)
          return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a), y = nbi(), z2 = nbi(), r = "";
        this.divRemTo(d, y, z2);
        while (y.signum() > 0) {
          r = (a + z2.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z2);
        }
        return z2.intValue().toString(b) + r;
      }
      function bnpFromRadix(s, b) {
        this.fromInt(0);
        if (b == null)
          b = 10;
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0)
              mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          this.dMultiply(Math.pow(b, j));
          this.dAddOffset(w, 0);
        }
        if (mi)
          BigInteger.ZERO.subTo(this, this);
      }
      function bnpFromNumber(a, b, c) {
        if ("number" == typeof b) {
          if (a < 2)
            this.fromInt(1);
          else {
            this.fromNumber(a, c);
            if (!this.testBit(a - 1))
              this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            if (this.isEven())
              this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
              this.dAddOffset(2, 0);
              if (this.bitLength() > a)
                this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
          }
        } else {
          var x = new Array(), t2 = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t2 > 0)
            x[0] &= (1 << t2) - 1;
          else
            x[0] = 0;
          this.fromString(x, 256);
        }
      }
      function bnToByteArray() {
        var i = this.t, r = new Array();
        r[0] = this.s;
        var p = this.DB - i * this.DB % 8, d, k = 0;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
            r[k++] = d | this.s << this.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (this[i] & (1 << p) - 1) << 8 - p;
              d |= this[--i] >> (p += this.DB - 8);
            } else {
              d = this[i] >> (p -= 8) & 255;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if ((d & 128) != 0)
              d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128))
              ++k;
            if (k > 0 || d != this.s)
              r[k++] = d;
          }
        }
        return r;
      }
      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }
      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }
      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }
      function bnpBitwiseTo(a, op, r) {
        var i, f, m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i)
          r[i] = op(this[i], a[i]);
        if (a.t < this.t) {
          f = a.s & this.DM;
          for (i = m; i < this.t; ++i)
            r[i] = op(this[i], f);
          r.t = this.t;
        } else {
          f = this.s & this.DM;
          for (i = m; i < a.t; ++i)
            r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(this.s, a.s);
        r.clamp();
      }
      function op_and(x, y) {
        return x & y;
      }
      function bnAnd(a) {
        var r = nbi();
        this.bitwiseTo(a, op_and, r);
        return r;
      }
      function op_or(x, y) {
        return x | y;
      }
      function bnOr(a) {
        var r = nbi();
        this.bitwiseTo(a, op_or, r);
        return r;
      }
      function op_xor(x, y) {
        return x ^ y;
      }
      function bnXor(a) {
        var r = nbi();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }
      function op_andnot(x, y) {
        return x & ~y;
      }
      function bnAndNot(a) {
        var r = nbi();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }
      function bnNot() {
        var r = nbi();
        for (var i = 0; i < this.t; ++i)
          r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }
      function bnShiftLeft(n) {
        var r = nbi();
        if (n < 0)
          this.rShiftTo(-n, r);
        else
          this.lShiftTo(n, r);
        return r;
      }
      function bnShiftRight(n) {
        var r = nbi();
        if (n < 0)
          this.lShiftTo(-n, r);
        else
          this.rShiftTo(n, r);
        return r;
      }
      function lbit(x) {
        if (x == 0)
          return -1;
        var r = 0;
        if ((x & 65535) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 255) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 15) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0)
          ++r;
        return r;
      }
      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
          if (this[i] != 0)
            return i * this.DB + lbit(this[i]);
        if (this.s < 0)
          return this.t * this.DB;
        return -1;
      }
      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }
      function bnBitCount() {
        var r = 0, x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i)
          r += cbit(this[i] ^ x);
        return r;
      }
      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t)
          return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }
      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }
      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }
      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }
      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }
      function bnpAddTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
          c += this[i] + a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a.t < this.t) {
          c += a.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0)
          r[i++] = c;
        else if (c < -1)
          r[i++] = this.DV + c;
        r.t = i;
        r.clamp();
      }
      function bnAdd(a) {
        var r = nbi();
        this.addTo(a, r);
        return r;
      }
      function bnSubtract(a) {
        var r = nbi();
        this.subTo(a, r);
        return r;
      }
      function bnMultiply(a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r;
      }
      function bnSquare() {
        var r = nbi();
        this.squareTo(r);
        return r;
      }
      function bnDivide(a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r;
      }
      function bnRemainder(a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r;
      }
      function bnDivideAndRemainder(a) {
        var q = nbi(), r = nbi();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }
      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }
      function bnpDAddOffset(n, w) {
        if (n == 0)
          return;
        while (this.t <= w)
          this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t)
            this[this.t++] = 0;
          ++this[w];
        }
      }
      function NullExp() {
      }
      function nNop(x) {
        return x;
      }
      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }
      function nSqrTo(x, r) {
        x.squareTo(r);
      }
      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;
      function bnPow(e) {
        return this.exp(e, new NullExp());
      }
      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0)
          r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i)
          r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i)
          this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }
      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0)
          r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i)
          r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }
      function Barrett(m) {
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }
      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t)
          return x.mod(this.m);
        else if (x.compareTo(this.m) < 0)
          return x;
        else {
          var r = nbi();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }
      function barrettRevert(x) {
        return x;
      }
      function barrettReduce(x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
          x.t = this.m.t + 1;
          x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0)
          x.dAddOffset(1, this.m.t + 1);
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0)
          x.subTo(this.m, x);
      }
      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;
      function bnModPow(e, m) {
        var i = e.bitLength(), k, r = nbv(1), z2;
        if (i <= 0)
          return r;
        else if (i < 18)
          k = 1;
        else if (i < 48)
          k = 3;
        else if (i < 144)
          k = 4;
        else if (i < 768)
          k = 5;
        else
          k = 6;
        if (i < 8)
          z2 = new Classic(m);
        else if (m.isEven())
          z2 = new Barrett(m);
        else
          z2 = new Montgomery(m);
        var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
        g[1] = z2.convert(this);
        if (k > 1) {
          var g2 = nbi();
          z2.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = nbi();
            z2.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }
        var j = e.t - 1, w, is1 = true, r2 = nbi(), t2;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1)
            w = e[j] >> i - k1 & km;
          else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0)
              w |= e[j - 1] >> this.DB + i - k1;
          }
          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z2.sqrTo(r, r2);
              z2.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0)
              z2.sqrTo(r, r2);
            else {
              t2 = r;
              r = r2;
              r2 = t2;
            }
            z2.mulTo(r2, g[w], r);
          }
          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z2.sqrTo(r, r2);
            t2 = r;
            r = r2;
            r2 = t2;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z2.revert(r);
      }
      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t2 = x;
          x = y;
          y = t2;
        }
        var i = x.getLowestSetBit(), g = y.getLowestSetBit();
        if (g < 0)
          return x;
        if (i < g)
          g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0)
            x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0)
            y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0)
          y.lShiftTo(g, y);
        return y;
      }
      function bnpModInt(n) {
        if (n <= 0)
          return 0;
        var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0)
          if (d == 0)
            r = this[0] % n;
          else
            for (var i = this.t - 1; i >= 0; --i)
              r = (d * r + this[i]) % n;
        return r;
      }
      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.isEven() && ac || m.signum() == 0)
          return BigInteger.ZERO;
        var u = m.clone(), v = this.clone();
        var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven())
              b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven())
              d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac)
              a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac)
              c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0)
          return BigInteger.ZERO;
        if (d.compareTo(m) >= 0)
          return d.subtract(m);
        if (d.signum() < 0)
          d.addTo(m, d);
        else
          return d;
        if (d.signum() < 0)
          return d.add(m);
        else
          return d;
      }
      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
      function bnIsProbablePrime(t2) {
        var i, x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i)
            if (x[0] == lowprimes[i])
              return true;
          return false;
        }
        if (x.isEven())
          return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i], j = i + 1;
          while (j < lowprimes.length && m < lplim)
            m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j)
            if (m % lowprimes[i++] == 0)
              return false;
        }
        return x.millerRabin(t2);
      }
      function bnpMillerRabin(t2) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0)
          return false;
        var r = n1.shiftRight(k);
        t2 = t2 + 1 >> 1;
        if (t2 > lowprimes.length)
          t2 = lowprimes.length;
        var a = nbi();
        for (var i = 0; i < t2; ++i) {
          a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0)
                return false;
            }
            if (y.compareTo(n1) != 0)
              return false;
          }
        }
        return true;
      }
      BigInteger.prototype.chunkSize = bnpChunkSize;
      BigInteger.prototype.toRadix = bnpToRadix;
      BigInteger.prototype.fromRadix = bnpFromRadix;
      BigInteger.prototype.fromNumber = bnpFromNumber;
      BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
      BigInteger.prototype.changeBit = bnpChangeBit;
      BigInteger.prototype.addTo = bnpAddTo;
      BigInteger.prototype.dMultiply = bnpDMultiply;
      BigInteger.prototype.dAddOffset = bnpDAddOffset;
      BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
      BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
      BigInteger.prototype.modInt = bnpModInt;
      BigInteger.prototype.millerRabin = bnpMillerRabin;
      BigInteger.prototype.clone = bnClone;
      BigInteger.prototype.intValue = bnIntValue;
      BigInteger.prototype.byteValue = bnByteValue;
      BigInteger.prototype.shortValue = bnShortValue;
      BigInteger.prototype.signum = bnSigNum;
      BigInteger.prototype.toByteArray = bnToByteArray;
      BigInteger.prototype.equals = bnEquals;
      BigInteger.prototype.min = bnMin;
      BigInteger.prototype.max = bnMax;
      BigInteger.prototype.and = bnAnd;
      BigInteger.prototype.or = bnOr;
      BigInteger.prototype.xor = bnXor;
      BigInteger.prototype.andNot = bnAndNot;
      BigInteger.prototype.not = bnNot;
      BigInteger.prototype.shiftLeft = bnShiftLeft;
      BigInteger.prototype.shiftRight = bnShiftRight;
      BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
      BigInteger.prototype.bitCount = bnBitCount;
      BigInteger.prototype.testBit = bnTestBit;
      BigInteger.prototype.setBit = bnSetBit;
      BigInteger.prototype.clearBit = bnClearBit;
      BigInteger.prototype.flipBit = bnFlipBit;
      BigInteger.prototype.add = bnAdd;
      BigInteger.prototype.subtract = bnSubtract;
      BigInteger.prototype.multiply = bnMultiply;
      BigInteger.prototype.divide = bnDivide;
      BigInteger.prototype.remainder = bnRemainder;
      BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
      BigInteger.prototype.modPow = bnModPow;
      BigInteger.prototype.modInverse = bnModInverse;
      BigInteger.prototype.pow = bnPow;
      BigInteger.prototype.gcd = bnGCD;
      BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
      BigInteger.prototype.square = bnSquare;
      BigInteger.prototype.Barrett = Barrett;
      var rng_state;
      var rng_pool;
      var rng_pptr;
      function rng_seed_int(x) {
        rng_pool[rng_pptr++] ^= x & 255;
        rng_pool[rng_pptr++] ^= x >> 8 & 255;
        rng_pool[rng_pptr++] ^= x >> 16 & 255;
        rng_pool[rng_pptr++] ^= x >> 24 & 255;
        if (rng_pptr >= rng_psize)
          rng_pptr -= rng_psize;
      }
      function rng_seed_time() {
        rng_seed_int(new Date().getTime());
      }
      if (rng_pool == null) {
        rng_pool = new Array();
        rng_pptr = 0;
        var t;
        if (typeof window !== "undefined" && window.crypto) {
          if (window.crypto.getRandomValues) {
            var ua = new Uint8Array(32);
            window.crypto.getRandomValues(ua);
            for (t = 0; t < 32; ++t)
              rng_pool[rng_pptr++] = ua[t];
          } else if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
            var z = window.crypto.random(32);
            for (t = 0; t < z.length; ++t)
              rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
          }
        }
        while (rng_pptr < rng_psize) {
          t = Math.floor(65536 * Math.random());
          rng_pool[rng_pptr++] = t >>> 8;
          rng_pool[rng_pptr++] = t & 255;
        }
        rng_pptr = 0;
        rng_seed_time();
      }
      function rng_get_byte() {
        if (rng_state == null) {
          rng_seed_time();
          rng_state = prng_newstate();
          rng_state.init(rng_pool);
          for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
          rng_pptr = 0;
        }
        return rng_state.next();
      }
      function rng_get_bytes(ba) {
        var i;
        for (i = 0; i < ba.length; ++i)
          ba[i] = rng_get_byte();
      }
      function SecureRandom() {
      }
      SecureRandom.prototype.nextBytes = rng_get_bytes;
      function Arcfour() {
        this.i = 0;
        this.j = 0;
        this.S = new Array();
      }
      function ARC4init(key) {
        var i, j, t2;
        for (i = 0; i < 256; ++i)
          this.S[i] = i;
        j = 0;
        for (i = 0; i < 256; ++i) {
          j = j + this.S[i] + key[i % key.length] & 255;
          t2 = this.S[i];
          this.S[i] = this.S[j];
          this.S[j] = t2;
        }
        this.i = 0;
        this.j = 0;
      }
      function ARC4next() {
        var t2;
        this.i = this.i + 1 & 255;
        this.j = this.j + this.S[this.i] & 255;
        t2 = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t2;
        return this.S[t2 + this.S[this.i] & 255];
      }
      Arcfour.prototype.init = ARC4init;
      Arcfour.prototype.next = ARC4next;
      function prng_newstate() {
        return new Arcfour();
      }
      var rng_psize = 256;
      if (typeof exports !== "undefined") {
        exports = module.exports = {
          default: BigInteger,
          BigInteger,
          SecureRandom
        };
      } else {
        this.jsbn = {
          BigInteger,
          SecureRandom
        };
      }
    }).call(exports);
  }
});

// node_modules/sm-crypto/src/sm2/asn1.js
var require_asn1 = __commonJS({
  "node_modules/sm-crypto/src/sm2/asn1.js"(exports, module) {
    var { BigInteger } = require_jsbn();
    function bigintToValue(bigint) {
      let h = bigint.toString(16);
      if (h[0] !== "-") {
        if (h.length % 2 === 1)
          h = "0" + h;
        else if (!h.match(/^[0-7]/))
          h = "00" + h;
      } else {
        h = h.substr(1);
        let len = h.length;
        if (len % 2 === 1)
          len += 1;
        else if (!h.match(/^[0-7]/))
          len += 2;
        let mask = "";
        for (let i = 0; i < len; i++)
          mask += "f";
        mask = new BigInteger(mask, 16);
        h = mask.xor(bigint).add(BigInteger.ONE);
        h = h.toString(16).replace(/^-/, "");
      }
      return h;
    }
    var ASN1Object = class {
      constructor() {
        this.tlv = null;
        this.t = "00";
        this.l = "00";
        this.v = "";
      }
      getEncodedHex() {
        if (!this.tlv) {
          this.v = this.getValue();
          this.l = this.getLength();
          this.tlv = this.t + this.l + this.v;
        }
        return this.tlv;
      }
      getLength() {
        const n = this.v.length / 2;
        let nHex = n.toString(16);
        if (nHex.length % 2 === 1)
          nHex = "0" + nHex;
        if (n < 128) {
          return nHex;
        } else {
          const head = 128 + nHex.length / 2;
          return head.toString(16) + nHex;
        }
      }
      getValue() {
        return "";
      }
    };
    var DERInteger = class extends ASN1Object {
      constructor(bigint) {
        super();
        this.t = "02";
        if (bigint)
          this.v = bigintToValue(bigint);
      }
      getValue() {
        return this.v;
      }
    };
    var DERSequence = class extends ASN1Object {
      constructor(asn1Array) {
        super();
        this.t = "30";
        this.asn1Array = asn1Array;
      }
      getValue() {
        this.v = this.asn1Array.map((asn1Object) => asn1Object.getEncodedHex()).join("");
        return this.v;
      }
    };
    function getLenOfL(str, start) {
      if (+str[start + 2] < 8)
        return 1;
      return +str.substr(start + 2, 2) & 127 + 1;
    }
    function getL(str, start) {
      const len = getLenOfL(str, start);
      const l = str.substr(start + 2, len * 2);
      if (!l)
        return -1;
      const bigint = +l[0] < 8 ? new BigInteger(l, 16) : new BigInteger(l.substr(2), 16);
      return bigint.intValue();
    }
    function getStartOfV(str, start) {
      const len = getLenOfL(str, start);
      return start + (len + 1) * 2;
    }
    module.exports = {
      encodeDer(r, s) {
        const derR = new DERInteger(r);
        const derS = new DERInteger(s);
        const derSeq = new DERSequence([derR, derS]);
        return derSeq.getEncodedHex();
      },
      decodeDer(input) {
        const start = getStartOfV(input, 0);
        const vIndexR = getStartOfV(input, start);
        const lR = getL(input, start);
        const vR = input.substr(vIndexR, lR * 2);
        const nextStart = vIndexR + vR.length;
        const vIndexS = getStartOfV(input, nextStart);
        const lS = getL(input, nextStart);
        const vS = input.substr(vIndexS, lS * 2);
        const r = new BigInteger(vR, 16);
        const s = new BigInteger(vS, 16);
        return { r, s };
      }
    };
  }
});

// node_modules/sm-crypto/src/sm2/ec.js
var require_ec = __commonJS({
  "node_modules/sm-crypto/src/sm2/ec.js"(exports, module) {
    var { BigInteger } = require_jsbn();
    var TWO = new BigInteger("2");
    var THREE = new BigInteger("3");
    var ECFieldElementFp = class {
      constructor(q, x) {
        this.x = x;
        this.q = q;
      }
      equals(other) {
        if (other === this)
          return true;
        return this.q.equals(other.q) && this.x.equals(other.x);
      }
      toBigInteger() {
        return this.x;
      }
      negate() {
        return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
      }
      add(b) {
        return new ECFieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
      }
      subtract(b) {
        return new ECFieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q));
      }
      multiply(b) {
        return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q));
      }
      divide(b) {
        return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q));
      }
      square() {
        return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
      }
    };
    var ECPointFp = class {
      constructor(curve, x, y, z) {
        this.curve = curve;
        this.x = x;
        this.y = y;
        this.z = z == null ? BigInteger.ONE : z;
        this.zinv = null;
      }
      getX() {
        if (this.zinv === null)
          this.zinv = this.z.modInverse(this.curve.q);
        return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
      }
      getY() {
        if (this.zinv === null)
          this.zinv = this.z.modInverse(this.curve.q);
        return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
      }
      equals(other) {
        if (other === this)
          return true;
        if (this.isInfinity())
          return other.isInfinity();
        if (other.isInfinity())
          return this.isInfinity();
        const u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q);
        if (!u.equals(BigInteger.ZERO))
          return false;
        const v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q);
        return v.equals(BigInteger.ZERO);
      }
      isInfinity() {
        if (this.x === null && this.y === null)
          return true;
        return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
      }
      negate() {
        return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
      }
      add(b) {
        if (this.isInfinity())
          return b;
        if (b.isInfinity())
          return this;
        const x1 = this.x.toBigInteger();
        const y1 = this.y.toBigInteger();
        const z1 = this.z;
        const x2 = b.x.toBigInteger();
        const y2 = b.y.toBigInteger();
        const z2 = b.z;
        const q = this.curve.q;
        const w1 = x1.multiply(z2).mod(q);
        const w2 = x2.multiply(z1).mod(q);
        const w3 = w1.subtract(w2);
        const w4 = y1.multiply(z2).mod(q);
        const w5 = y2.multiply(z1).mod(q);
        const w6 = w4.subtract(w5);
        if (BigInteger.ZERO.equals(w3)) {
          if (BigInteger.ZERO.equals(w6)) {
            return this.twice();
          }
          return this.curve.infinity;
        }
        const w7 = w1.add(w2);
        const w8 = z1.multiply(z2).mod(q);
        const w9 = w3.square().mod(q);
        const w10 = w3.multiply(w9).mod(q);
        const w11 = w8.multiply(w6.square()).subtract(w7.multiply(w9)).mod(q);
        const x3 = w3.multiply(w11).mod(q);
        const y3 = w6.multiply(w9.multiply(w1).subtract(w11)).subtract(w4.multiply(w10)).mod(q);
        const z3 = w10.multiply(w8).mod(q);
        return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
      }
      twice() {
        if (this.isInfinity())
          return this;
        if (!this.y.toBigInteger().signum())
          return this.curve.infinity;
        const x1 = this.x.toBigInteger();
        const y1 = this.y.toBigInteger();
        const z1 = this.z;
        const q = this.curve.q;
        const a = this.curve.a.toBigInteger();
        const w1 = x1.square().multiply(THREE).add(a.multiply(z1.square())).mod(q);
        const w2 = y1.shiftLeft(1).multiply(z1).mod(q);
        const w3 = y1.square().mod(q);
        const w4 = w3.multiply(x1).multiply(z1).mod(q);
        const w5 = w2.square().mod(q);
        const w6 = w1.square().subtract(w4.shiftLeft(3)).mod(q);
        const x3 = w2.multiply(w6).mod(q);
        const y3 = w1.multiply(w4.shiftLeft(2).subtract(w6)).subtract(w5.shiftLeft(1).multiply(w3)).mod(q);
        const z3 = w2.multiply(w5).mod(q);
        return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
      }
      multiply(k) {
        if (this.isInfinity())
          return this;
        if (!k.signum())
          return this.curve.infinity;
        const k3 = k.multiply(THREE);
        const neg = this.negate();
        let Q = this;
        for (let i = k3.bitLength() - 2; i > 0; i--) {
          Q = Q.twice();
          const k3Bit = k3.testBit(i);
          const kBit = k.testBit(i);
          if (k3Bit !== kBit) {
            Q = Q.add(k3Bit ? this : neg);
          }
        }
        return Q;
      }
    };
    var ECCurveFp = class {
      constructor(q, a, b) {
        this.q = q;
        this.a = this.fromBigInteger(a);
        this.b = this.fromBigInteger(b);
        this.infinity = new ECPointFp(this, null, null);
      }
      equals(other) {
        if (other === this)
          return true;
        return this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b);
      }
      fromBigInteger(x) {
        return new ECFieldElementFp(this.q, x);
      }
      decodePointHex(s) {
        switch (parseInt(s.substr(0, 2), 16)) {
          case 0:
            return this.infinity;
          case 2:
          case 3:
            const x = this.fromBigInteger(new BigInteger(s.substr(2), 16));
            let y = this.fromBigInteger(x.multiply(x.square()).add(
              x.multiply(this.a)
            ).add(this.b).toBigInteger().modPow(
              this.q.divide(new BigInteger("4")).add(BigInteger.ONE),
              this.q
            ));
            if (!y.toBigInteger().mod(TWO).equals(new BigInteger(s.substr(0, 2), 16).subtract(TWO))) {
              y = y.negate();
            }
            return new ECPointFp(this, x, y);
          case 4:
          case 6:
          case 7:
            const len = (s.length - 2) / 2;
            const xHex = s.substr(2, len);
            const yHex = s.substr(len + 2, len);
            return new ECPointFp(this, this.fromBigInteger(new BigInteger(xHex, 16)), this.fromBigInteger(new BigInteger(yHex, 16)));
          default:
            return null;
        }
      }
    };
    module.exports = {
      ECPointFp,
      ECCurveFp
    };
  }
});

// node_modules/sm-crypto/src/sm2/utils.js
var require_utils = __commonJS({
  "node_modules/sm-crypto/src/sm2/utils.js"(exports, module) {
    var { BigInteger, SecureRandom } = require_jsbn();
    var { ECCurveFp } = require_ec();
    var rng = new SecureRandom();
    var { curve, G, n } = generateEcparam();
    function getGlobalCurve() {
      return curve;
    }
    function generateEcparam() {
      const p = new BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16);
      const a = new BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16);
      const b = new BigInteger("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16);
      const curve2 = new ECCurveFp(p, a, b);
      const gxHex = "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7";
      const gyHex = "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0";
      const G2 = curve2.decodePointHex("04" + gxHex + gyHex);
      const n2 = new BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16);
      return { curve: curve2, G: G2, n: n2 };
    }
    function generateKeyPairHex(a, b, c) {
      const random = a ? new BigInteger(a, b, c) : new BigInteger(n.bitLength(), rng);
      const d = random.mod(n.subtract(BigInteger.ONE)).add(BigInteger.ONE);
      const privateKey = leftPad(d.toString(16), 64);
      const P = G.multiply(d);
      const Px = leftPad(P.getX().toBigInteger().toString(16), 64);
      const Py = leftPad(P.getY().toBigInteger().toString(16), 64);
      const publicKey = "04" + Px + Py;
      return { privateKey, publicKey };
    }
    function compressPublicKeyHex(s) {
      if (s.length !== 130)
        throw new Error("Invalid public key to compress");
      const len = (s.length - 2) / 2;
      const xHex = s.substr(2, len);
      const y = new BigInteger(s.substr(len + 2, len), 16);
      let prefix = "03";
      if (y.mod(new BigInteger("2")).equals(BigInteger.ZERO))
        prefix = "02";
      return prefix + xHex;
    }
    function utf8ToHex(input) {
      input = unescape(encodeURIComponent(input));
      const length = input.length;
      const words = [];
      for (let i = 0; i < length; i++) {
        words[i >>> 2] |= (input.charCodeAt(i) & 255) << 24 - i % 4 * 8;
      }
      const hexChars = [];
      for (let i = 0; i < length; i++) {
        const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        hexChars.push((bite >>> 4).toString(16));
        hexChars.push((bite & 15).toString(16));
      }
      return hexChars.join("");
    }
    function leftPad(input, num) {
      if (input.length >= num)
        return input;
      return new Array(num - input.length + 1).join("0") + input;
    }
    function arrayToHex(arr) {
      return arr.map((item) => {
        item = item.toString(16);
        return item.length === 1 ? "0" + item : item;
      }).join("");
    }
    function arrayToUtf8(arr) {
      const words = [];
      let j = 0;
      for (let i = 0; i < arr.length * 2; i += 2) {
        words[i >>> 3] |= parseInt(arr[j], 10) << 24 - i % 8 * 4;
        j++;
      }
      try {
        const latin1Chars = [];
        for (let i = 0; i < arr.length; i++) {
          const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          latin1Chars.push(String.fromCharCode(bite));
        }
        return decodeURIComponent(escape(latin1Chars.join("")));
      } catch (e) {
        throw new Error("Malformed UTF-8 data");
      }
    }
    function hexToArray(hexStr) {
      const words = [];
      let hexStrLength = hexStr.length;
      if (hexStrLength % 2 !== 0) {
        hexStr = leftPad(hexStr, hexStrLength + 1);
      }
      hexStrLength = hexStr.length;
      for (let i = 0; i < hexStrLength; i += 2) {
        words.push(parseInt(hexStr.substr(i, 2), 16));
      }
      return words;
    }
    function verifyPublicKey(publicKey) {
      const point = curve.decodePointHex(publicKey);
      if (!point)
        return false;
      const x = point.getX();
      const y = point.getY();
      return y.square().equals(x.multiply(x.square()).add(x.multiply(curve.a)).add(curve.b));
    }
    function comparePublicKeyHex(publicKey1, publicKey2) {
      const point1 = curve.decodePointHex(publicKey1);
      if (!point1)
        return false;
      const point2 = curve.decodePointHex(publicKey2);
      if (!point2)
        return false;
      return point1.equals(point2);
    }
    module.exports = {
      getGlobalCurve,
      generateEcparam,
      generateKeyPairHex,
      compressPublicKeyHex,
      utf8ToHex,
      leftPad,
      arrayToHex,
      arrayToUtf8,
      hexToArray,
      verifyPublicKey,
      comparePublicKeyHex
    };
  }
});

// node_modules/sm-crypto/src/sm2/sm3.js
var require_sm3 = __commonJS({
  "node_modules/sm-crypto/src/sm2/sm3.js"(exports, module) {
    var W = new Uint32Array(68);
    var M = new Uint32Array(64);
    function rotl(x, n) {
      const s = n & 31;
      return x << s | x >>> 32 - s;
    }
    function xor(x, y) {
      const result = [];
      for (let i = x.length - 1; i >= 0; i--)
        result[i] = (x[i] ^ y[i]) & 255;
      return result;
    }
    function P0(X) {
      return X ^ rotl(X, 9) ^ rotl(X, 17);
    }
    function P1(X) {
      return X ^ rotl(X, 15) ^ rotl(X, 23);
    }
    function sm3(array) {
      let len = array.length * 8;
      let k = len % 512;
      k = k >= 448 ? 512 - k % 448 - 1 : 448 - k - 1;
      const kArr = new Array((k - 7) / 8);
      const lenArr = new Array(8);
      for (let i = 0, len2 = kArr.length; i < len2; i++)
        kArr[i] = 0;
      for (let i = 0, len2 = lenArr.length; i < len2; i++)
        lenArr[i] = 0;
      len = len.toString(2);
      for (let i = 7; i >= 0; i--) {
        if (len.length > 8) {
          const start = len.length - 8;
          lenArr[i] = parseInt(len.substr(start), 2);
          len = len.substr(0, start);
        } else if (len.length > 0) {
          lenArr[i] = parseInt(len, 2);
          len = "";
        }
      }
      const m = new Uint8Array([...array, 128, ...kArr, ...lenArr]);
      const dataView = new DataView(m.buffer, 0);
      const n = m.length / 64;
      const V = new Uint32Array([1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214]);
      for (let i = 0; i < n; i++) {
        W.fill(0);
        M.fill(0);
        const start = 16 * i;
        for (let j = 0; j < 16; j++) {
          W[j] = dataView.getUint32((start + j) * 4, false);
        }
        for (let j = 16; j < 68; j++) {
          W[j] = P1(W[j - 16] ^ W[j - 9] ^ rotl(W[j - 3], 15)) ^ rotl(W[j - 13], 7) ^ W[j - 6];
        }
        for (let j = 0; j < 64; j++) {
          M[j] = W[j] ^ W[j + 4];
        }
        const T1 = 2043430169;
        const T2 = 2055708042;
        let A = V[0];
        let B = V[1];
        let C = V[2];
        let D = V[3];
        let E = V[4];
        let F = V[5];
        let G = V[6];
        let H = V[7];
        let SS1;
        let SS2;
        let TT1;
        let TT2;
        let T;
        for (let j = 0; j < 64; j++) {
          T = j >= 0 && j <= 15 ? T1 : T2;
          SS1 = rotl(rotl(A, 12) + E + rotl(T, j), 7);
          SS2 = SS1 ^ rotl(A, 12);
          TT1 = (j >= 0 && j <= 15 ? A ^ B ^ C : A & B | A & C | B & C) + D + SS2 + M[j];
          TT2 = (j >= 0 && j <= 15 ? E ^ F ^ G : E & F | ~E & G) + H + SS1 + W[j];
          D = C;
          C = rotl(B, 9);
          B = A;
          A = TT1;
          H = G;
          G = rotl(F, 19);
          F = E;
          E = P0(TT2);
        }
        V[0] ^= A;
        V[1] ^= B;
        V[2] ^= C;
        V[3] ^= D;
        V[4] ^= E;
        V[5] ^= F;
        V[6] ^= G;
        V[7] ^= H;
      }
      const result = [];
      for (let i = 0, len2 = V.length; i < len2; i++) {
        const word = V[i];
        result.push((word & 4278190080) >>> 24, (word & 16711680) >>> 16, (word & 65280) >>> 8, word & 255);
      }
      return result;
    }
    var blockLen = 64;
    var iPad = new Uint8Array(blockLen);
    var oPad = new Uint8Array(blockLen);
    for (let i = 0; i < blockLen; i++) {
      iPad[i] = 54;
      oPad[i] = 92;
    }
    function hmac(input, key) {
      if (key.length > blockLen)
        key = sm3(key);
      while (key.length < blockLen)
        key.push(0);
      const iPadKey = xor(key, iPad);
      const oPadKey = xor(key, oPad);
      const hash = sm3([...iPadKey, ...input]);
      return sm3([...oPadKey, ...hash]);
    }
    module.exports = {
      sm3,
      hmac
    };
  }
});

// node_modules/sm-crypto/src/sm2/index.js
var require_sm2 = __commonJS({
  "node_modules/sm-crypto/src/sm2/index.js"(exports, module) {
    var { BigInteger } = require_jsbn();
    var { encodeDer, decodeDer } = require_asn1();
    var _ = require_utils();
    var sm3 = require_sm3().sm3;
    var { G, curve, n } = _.generateEcparam();
    var C1C2C3 = 0;
    function doEncrypt(msg, publicKey, cipherMode = 1) {
      msg = typeof msg === "string" ? _.hexToArray(_.utf8ToHex(msg)) : Array.prototype.slice.call(msg);
      publicKey = _.getGlobalCurve().decodePointHex(publicKey);
      const keypair = _.generateKeyPairHex();
      const k = new BigInteger(keypair.privateKey, 16);
      let c1 = keypair.publicKey;
      if (c1.length > 128)
        c1 = c1.substr(c1.length - 128);
      const p = publicKey.multiply(k);
      const x2 = _.hexToArray(_.leftPad(p.getX().toBigInteger().toRadix(16), 64));
      const y2 = _.hexToArray(_.leftPad(p.getY().toBigInteger().toRadix(16), 64));
      const c3 = _.arrayToHex(sm3([].concat(x2, msg, y2)));
      let ct = 1;
      let offset = 0;
      let t = [];
      const z = [].concat(x2, y2);
      const nextT = () => {
        t = sm3([...z, ct >> 24 & 255, ct >> 16 & 255, ct >> 8 & 255, ct & 255]);
        ct++;
        offset = 0;
      };
      nextT();
      for (let i = 0, len = msg.length; i < len; i++) {
        if (offset === t.length)
          nextT();
        msg[i] ^= t[offset++] & 255;
      }
      const c2 = _.arrayToHex(msg);
      return cipherMode === C1C2C3 ? c1 + c2 + c3 : c1 + c3 + c2;
    }
    function doDecrypt(encryptData, privateKey, cipherMode = 1, {
      output = "string"
    } = {}) {
      privateKey = new BigInteger(privateKey, 16);
      let c3 = encryptData.substr(128, 64);
      let c2 = encryptData.substr(128 + 64);
      if (cipherMode === C1C2C3) {
        c3 = encryptData.substr(encryptData.length - 64);
        c2 = encryptData.substr(128, encryptData.length - 128 - 64);
      }
      const msg = _.hexToArray(c2);
      const c1 = _.getGlobalCurve().decodePointHex("04" + encryptData.substr(0, 128));
      const p = c1.multiply(privateKey);
      const x2 = _.hexToArray(_.leftPad(p.getX().toBigInteger().toRadix(16), 64));
      const y2 = _.hexToArray(_.leftPad(p.getY().toBigInteger().toRadix(16), 64));
      let ct = 1;
      let offset = 0;
      let t = [];
      const z = [].concat(x2, y2);
      const nextT = () => {
        t = sm3([...z, ct >> 24 & 255, ct >> 16 & 255, ct >> 8 & 255, ct & 255]);
        ct++;
        offset = 0;
      };
      nextT();
      for (let i = 0, len = msg.length; i < len; i++) {
        if (offset === t.length)
          nextT();
        msg[i] ^= t[offset++] & 255;
      }
      const checkC3 = _.arrayToHex(sm3([].concat(x2, msg, y2)));
      if (checkC3 === c3.toLowerCase()) {
        return output === "array" ? msg : _.arrayToUtf8(msg);
      } else {
        return output === "array" ? [] : "";
      }
    }
    function doSignature(msg, privateKey, {
      pointPool,
      der,
      hash,
      publicKey,
      userId
    } = {}) {
      let hashHex = typeof msg === "string" ? _.utf8ToHex(msg) : _.arrayToHex(msg);
      if (hash) {
        publicKey = publicKey || getPublicKeyFromPrivateKey(privateKey);
        hashHex = getHash(hashHex, publicKey, userId);
      }
      const dA = new BigInteger(privateKey, 16);
      const e = new BigInteger(hashHex, 16);
      let k = null;
      let r = null;
      let s = null;
      do {
        do {
          let point;
          if (pointPool && pointPool.length) {
            point = pointPool.pop();
          } else {
            point = getPoint();
          }
          k = point.k;
          r = e.add(point.x1).mod(n);
        } while (r.equals(BigInteger.ZERO) || r.add(k).equals(n));
        s = dA.add(BigInteger.ONE).modInverse(n).multiply(k.subtract(r.multiply(dA))).mod(n);
      } while (s.equals(BigInteger.ZERO));
      if (der)
        return encodeDer(r, s);
      return _.leftPad(r.toString(16), 64) + _.leftPad(s.toString(16), 64);
    }
    function doVerifySignature(msg, signHex, publicKey, { der, hash, userId } = {}) {
      let hashHex = typeof msg === "string" ? _.utf8ToHex(msg) : _.arrayToHex(msg);
      if (hash) {
        hashHex = getHash(hashHex, publicKey, userId);
      }
      let r;
      let s;
      if (der) {
        const decodeDerObj = decodeDer(signHex);
        r = decodeDerObj.r;
        s = decodeDerObj.s;
      } else {
        r = new BigInteger(signHex.substring(0, 64), 16);
        s = new BigInteger(signHex.substring(64), 16);
      }
      const PA = curve.decodePointHex(publicKey);
      const e = new BigInteger(hashHex, 16);
      const t = r.add(s).mod(n);
      if (t.equals(BigInteger.ZERO))
        return false;
      const x1y1 = G.multiply(s).add(PA.multiply(t));
      const R = e.add(x1y1.getX().toBigInteger()).mod(n);
      return r.equals(R);
    }
    function getHash(hashHex, publicKey, userId = "1234567812345678") {
      userId = _.utf8ToHex(userId);
      const a = _.leftPad(G.curve.a.toBigInteger().toRadix(16), 64);
      const b = _.leftPad(G.curve.b.toBigInteger().toRadix(16), 64);
      const gx = _.leftPad(G.getX().toBigInteger().toRadix(16), 64);
      const gy = _.leftPad(G.getY().toBigInteger().toRadix(16), 64);
      let px;
      let py;
      if (publicKey.length === 128) {
        px = publicKey.substr(0, 64);
        py = publicKey.substr(64, 64);
      } else {
        const point = G.curve.decodePointHex(publicKey);
        px = _.leftPad(point.getX().toBigInteger().toRadix(16), 64);
        py = _.leftPad(point.getY().toBigInteger().toRadix(16), 64);
      }
      const data = _.hexToArray(userId + a + b + gx + gy + px + py);
      const entl = userId.length * 4;
      data.unshift(entl & 255);
      data.unshift(entl >> 8 & 255);
      const z = sm3(data);
      return _.arrayToHex(sm3(z.concat(_.hexToArray(hashHex))));
    }
    function getPublicKeyFromPrivateKey(privateKey) {
      const PA = G.multiply(new BigInteger(privateKey, 16));
      const x = _.leftPad(PA.getX().toBigInteger().toString(16), 64);
      const y = _.leftPad(PA.getY().toBigInteger().toString(16), 64);
      return "04" + x + y;
    }
    function getPoint() {
      const keypair = _.generateKeyPairHex();
      const PA = curve.decodePointHex(keypair.publicKey);
      keypair.k = new BigInteger(keypair.privateKey, 16);
      keypair.x1 = PA.getX().toBigInteger();
      return keypair;
    }
    module.exports = {
      generateKeyPairHex: _.generateKeyPairHex,
      compressPublicKeyHex: _.compressPublicKeyHex,
      comparePublicKeyHex: _.comparePublicKeyHex,
      doEncrypt,
      doDecrypt,
      doSignature,
      doVerifySignature,
      getPoint,
      verifyPublicKey: _.verifyPublicKey
    };
  }
});

// node_modules/sm-crypto/src/sm3/index.js
var require_sm32 = __commonJS({
  "node_modules/sm-crypto/src/sm3/index.js"(exports, module) {
    var { sm3, hmac } = require_sm3();
    function leftPad(input, num) {
      if (input.length >= num)
        return input;
      return new Array(num - input.length + 1).join("0") + input;
    }
    function ArrayToHex(arr) {
      return arr.map((item) => {
        item = item.toString(16);
        return item.length === 1 ? "0" + item : item;
      }).join("");
    }
    function hexToArray(hexStr) {
      const words = [];
      let hexStrLength = hexStr.length;
      if (hexStrLength % 2 !== 0) {
        hexStr = leftPad(hexStr, hexStrLength + 1);
      }
      hexStrLength = hexStr.length;
      for (let i = 0; i < hexStrLength; i += 2) {
        words.push(parseInt(hexStr.substr(i, 2), 16));
      }
      return words;
    }
    function utf8ToArray(str) {
      const arr = [];
      for (let i = 0, len = str.length; i < len; i++) {
        const point = str.codePointAt(i);
        if (point <= 127) {
          arr.push(point);
        } else if (point <= 2047) {
          arr.push(192 | point >>> 6);
          arr.push(128 | point & 63);
        } else if (point <= 55295 || point >= 57344 && point <= 65535) {
          arr.push(224 | point >>> 12);
          arr.push(128 | point >>> 6 & 63);
          arr.push(128 | point & 63);
        } else if (point >= 65536 && point <= 1114111) {
          i++;
          arr.push(240 | point >>> 18 & 28);
          arr.push(128 | point >>> 12 & 63);
          arr.push(128 | point >>> 6 & 63);
          arr.push(128 | point & 63);
        } else {
          arr.push(point);
          throw new Error("input is not supported");
        }
      }
      return arr;
    }
    module.exports = function(input, options) {
      input = typeof input === "string" ? utf8ToArray(input) : Array.prototype.slice.call(input);
      if (options) {
        const mode = options.mode || "hmac";
        if (mode !== "hmac")
          throw new Error("invalid mode");
        let key = options.key;
        if (!key)
          throw new Error("invalid key");
        key = typeof key === "string" ? hexToArray(key) : Array.prototype.slice.call(key);
        return ArrayToHex(hmac(input, key));
      }
      return ArrayToHex(sm3(input));
    };
  }
});

// node_modules/sm-crypto/src/sm4/index.js
var require_sm4 = __commonJS({
  "node_modules/sm-crypto/src/sm4/index.js"(exports, module) {
    var DECRYPT = 0;
    var ROUND = 32;
    var BLOCK = 16;
    var Sbox = [
      214,
      144,
      233,
      254,
      204,
      225,
      61,
      183,
      22,
      182,
      20,
      194,
      40,
      251,
      44,
      5,
      43,
      103,
      154,
      118,
      42,
      190,
      4,
      195,
      170,
      68,
      19,
      38,
      73,
      134,
      6,
      153,
      156,
      66,
      80,
      244,
      145,
      239,
      152,
      122,
      51,
      84,
      11,
      67,
      237,
      207,
      172,
      98,
      228,
      179,
      28,
      169,
      201,
      8,
      232,
      149,
      128,
      223,
      148,
      250,
      117,
      143,
      63,
      166,
      71,
      7,
      167,
      252,
      243,
      115,
      23,
      186,
      131,
      89,
      60,
      25,
      230,
      133,
      79,
      168,
      104,
      107,
      129,
      178,
      113,
      100,
      218,
      139,
      248,
      235,
      15,
      75,
      112,
      86,
      157,
      53,
      30,
      36,
      14,
      94,
      99,
      88,
      209,
      162,
      37,
      34,
      124,
      59,
      1,
      33,
      120,
      135,
      212,
      0,
      70,
      87,
      159,
      211,
      39,
      82,
      76,
      54,
      2,
      231,
      160,
      196,
      200,
      158,
      234,
      191,
      138,
      210,
      64,
      199,
      56,
      181,
      163,
      247,
      242,
      206,
      249,
      97,
      21,
      161,
      224,
      174,
      93,
      164,
      155,
      52,
      26,
      85,
      173,
      147,
      50,
      48,
      245,
      140,
      177,
      227,
      29,
      246,
      226,
      46,
      130,
      102,
      202,
      96,
      192,
      41,
      35,
      171,
      13,
      83,
      78,
      111,
      213,
      219,
      55,
      69,
      222,
      253,
      142,
      47,
      3,
      255,
      106,
      114,
      109,
      108,
      91,
      81,
      141,
      27,
      175,
      146,
      187,
      221,
      188,
      127,
      17,
      217,
      92,
      65,
      31,
      16,
      90,
      216,
      10,
      193,
      49,
      136,
      165,
      205,
      123,
      189,
      45,
      116,
      208,
      18,
      184,
      229,
      180,
      176,
      137,
      105,
      151,
      74,
      12,
      150,
      119,
      126,
      101,
      185,
      241,
      9,
      197,
      110,
      198,
      132,
      24,
      240,
      125,
      236,
      58,
      220,
      77,
      32,
      121,
      238,
      95,
      62,
      215,
      203,
      57,
      72
    ];
    var CK = [
      462357,
      472066609,
      943670861,
      1415275113,
      1886879365,
      2358483617,
      2830087869,
      3301692121,
      3773296373,
      4228057617,
      404694573,
      876298825,
      1347903077,
      1819507329,
      2291111581,
      2762715833,
      3234320085,
      3705924337,
      4177462797,
      337322537,
      808926789,
      1280531041,
      1752135293,
      2223739545,
      2695343797,
      3166948049,
      3638552301,
      4110090761,
      269950501,
      741554753,
      1213159005,
      1684763257
    ];
    function hexToArray(str) {
      const arr = [];
      for (let i = 0, len = str.length; i < len; i += 2) {
        arr.push(parseInt(str.substr(i, 2), 16));
      }
      return arr;
    }
    function ArrayToHex(arr) {
      return arr.map((item) => {
        item = item.toString(16);
        return item.length === 1 ? "0" + item : item;
      }).join("");
    }
    function utf8ToArray(str) {
      const arr = [];
      for (let i = 0, len = str.length; i < len; i++) {
        const point = str.codePointAt(i);
        if (point <= 127) {
          arr.push(point);
        } else if (point <= 2047) {
          arr.push(192 | point >>> 6);
          arr.push(128 | point & 63);
        } else if (point <= 55295 || point >= 57344 && point <= 65535) {
          arr.push(224 | point >>> 12);
          arr.push(128 | point >>> 6 & 63);
          arr.push(128 | point & 63);
        } else if (point >= 65536 && point <= 1114111) {
          i++;
          arr.push(240 | point >>> 18 & 28);
          arr.push(128 | point >>> 12 & 63);
          arr.push(128 | point >>> 6 & 63);
          arr.push(128 | point & 63);
        } else {
          arr.push(point);
          throw new Error("input is not supported");
        }
      }
      return arr;
    }
    function arrayToUtf8(arr) {
      const str = [];
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] >= 240 && arr[i] <= 247) {
          str.push(String.fromCodePoint(((arr[i] & 7) << 18) + ((arr[i + 1] & 63) << 12) + ((arr[i + 2] & 63) << 6) + (arr[i + 3] & 63)));
          i += 3;
        } else if (arr[i] >= 224 && arr[i] <= 239) {
          str.push(String.fromCodePoint(((arr[i] & 15) << 12) + ((arr[i + 1] & 63) << 6) + (arr[i + 2] & 63)));
          i += 2;
        } else if (arr[i] >= 192 && arr[i] <= 223) {
          str.push(String.fromCodePoint(((arr[i] & 31) << 6) + (arr[i + 1] & 63)));
          i++;
        } else {
          str.push(String.fromCodePoint(arr[i]));
        }
      }
      return str.join("");
    }
    function rotl(x, y) {
      return x << y | x >>> 32 - y;
    }
    function byteSub(a) {
      return (Sbox[a >>> 24 & 255] & 255) << 24 | (Sbox[a >>> 16 & 255] & 255) << 16 | (Sbox[a >>> 8 & 255] & 255) << 8 | Sbox[a & 255] & 255;
    }
    function l1(b) {
      return b ^ rotl(b, 2) ^ rotl(b, 10) ^ rotl(b, 18) ^ rotl(b, 24);
    }
    function l2(b) {
      return b ^ rotl(b, 13) ^ rotl(b, 23);
    }
    function sms4Crypt(input, output, roundKey) {
      const x = new Array(4);
      const tmp = new Array(4);
      for (let i = 0; i < 4; i++) {
        tmp[0] = input[4 * i] & 255;
        tmp[1] = input[4 * i + 1] & 255;
        tmp[2] = input[4 * i + 2] & 255;
        tmp[3] = input[4 * i + 3] & 255;
        x[i] = tmp[0] << 24 | tmp[1] << 16 | tmp[2] << 8 | tmp[3];
      }
      for (let r = 0, mid; r < 32; r += 4) {
        mid = x[1] ^ x[2] ^ x[3] ^ roundKey[r + 0];
        x[0] ^= l1(byteSub(mid));
        mid = x[2] ^ x[3] ^ x[0] ^ roundKey[r + 1];
        x[1] ^= l1(byteSub(mid));
        mid = x[3] ^ x[0] ^ x[1] ^ roundKey[r + 2];
        x[2] ^= l1(byteSub(mid));
        mid = x[0] ^ x[1] ^ x[2] ^ roundKey[r + 3];
        x[3] ^= l1(byteSub(mid));
      }
      for (let j = 0; j < 16; j += 4) {
        output[j] = x[3 - j / 4] >>> 24 & 255;
        output[j + 1] = x[3 - j / 4] >>> 16 & 255;
        output[j + 2] = x[3 - j / 4] >>> 8 & 255;
        output[j + 3] = x[3 - j / 4] & 255;
      }
    }
    function sms4KeyExt(key, roundKey, cryptFlag) {
      const x = new Array(4);
      const tmp = new Array(4);
      for (let i = 0; i < 4; i++) {
        tmp[0] = key[0 + 4 * i] & 255;
        tmp[1] = key[1 + 4 * i] & 255;
        tmp[2] = key[2 + 4 * i] & 255;
        tmp[3] = key[3 + 4 * i] & 255;
        x[i] = tmp[0] << 24 | tmp[1] << 16 | tmp[2] << 8 | tmp[3];
      }
      x[0] ^= 2746333894;
      x[1] ^= 1453994832;
      x[2] ^= 1736282519;
      x[3] ^= 2993693404;
      for (let r = 0, mid; r < 32; r += 4) {
        mid = x[1] ^ x[2] ^ x[3] ^ CK[r + 0];
        roundKey[r + 0] = x[0] ^= l2(byteSub(mid));
        mid = x[2] ^ x[3] ^ x[0] ^ CK[r + 1];
        roundKey[r + 1] = x[1] ^= l2(byteSub(mid));
        mid = x[3] ^ x[0] ^ x[1] ^ CK[r + 2];
        roundKey[r + 2] = x[2] ^= l2(byteSub(mid));
        mid = x[0] ^ x[1] ^ x[2] ^ CK[r + 3];
        roundKey[r + 3] = x[3] ^= l2(byteSub(mid));
      }
      if (cryptFlag === DECRYPT) {
        for (let r = 0, mid; r < 16; r++) {
          mid = roundKey[r];
          roundKey[r] = roundKey[31 - r];
          roundKey[31 - r] = mid;
        }
      }
    }
    function sm4(inArray, key, cryptFlag, {
      padding = "pkcs#7",
      mode,
      iv = [],
      output = "string"
    } = {}) {
      if (mode === "cbc") {
        if (typeof iv === "string")
          iv = hexToArray(iv);
        if (iv.length !== 128 / 8) {
          throw new Error("iv is invalid");
        }
      }
      if (typeof key === "string")
        key = hexToArray(key);
      if (key.length !== 128 / 8) {
        throw new Error("key is invalid");
      }
      if (typeof inArray === "string") {
        if (cryptFlag !== DECRYPT) {
          inArray = utf8ToArray(inArray);
        } else {
          inArray = hexToArray(inArray);
        }
      } else {
        inArray = [...inArray];
      }
      if ((padding === "pkcs#5" || padding === "pkcs#7") && cryptFlag !== DECRYPT) {
        const paddingCount = BLOCK - inArray.length % BLOCK;
        for (let i = 0; i < paddingCount; i++)
          inArray.push(paddingCount);
      }
      const roundKey = new Array(ROUND);
      sms4KeyExt(key, roundKey, cryptFlag);
      const outArray = [];
      let lastVector = iv;
      let restLen = inArray.length;
      let point = 0;
      while (restLen >= BLOCK) {
        const input = inArray.slice(point, point + 16);
        const output2 = new Array(16);
        if (mode === "cbc") {
          for (let i = 0; i < BLOCK; i++) {
            if (cryptFlag !== DECRYPT) {
              input[i] ^= lastVector[i];
            }
          }
        }
        sms4Crypt(input, output2, roundKey);
        for (let i = 0; i < BLOCK; i++) {
          if (mode === "cbc") {
            if (cryptFlag === DECRYPT) {
              output2[i] ^= lastVector[i];
            }
          }
          outArray[point + i] = output2[i];
        }
        if (mode === "cbc") {
          if (cryptFlag !== DECRYPT) {
            lastVector = output2;
          } else {
            lastVector = input;
          }
        }
        restLen -= BLOCK;
        point += BLOCK;
      }
      if ((padding === "pkcs#5" || padding === "pkcs#7") && cryptFlag === DECRYPT) {
        const len = outArray.length;
        const paddingCount = outArray[len - 1];
        for (let i = 1; i <= paddingCount; i++) {
          if (outArray[len - i] !== paddingCount)
            throw new Error("padding is invalid");
        }
        outArray.splice(len - paddingCount, paddingCount);
      }
      if (output !== "array") {
        if (cryptFlag !== DECRYPT) {
          return ArrayToHex(outArray);
        } else {
          return arrayToUtf8(outArray);
        }
      } else {
        return outArray;
      }
    }
    module.exports = {
      encrypt(inArray, key, options) {
        return sm4(inArray, key, 1, options);
      },
      decrypt(inArray, key, options) {
        return sm4(inArray, key, 0, options);
      }
    };
  }
});

// node_modules/sm-crypto/src/index.js
var require_src = __commonJS({
  "node_modules/sm-crypto/src/index.js"(exports, module) {
    module.exports = {
      sm2: require_sm2(),
      sm3: require_sm32(),
      sm4: require_sm4()
    };
  }
});

// dep:sm-crypto
var sm_crypto_default = require_src();
export {
  sm_crypto_default as default
};
//# sourceMappingURL=sm-crypto.js.map
