import {
  __commonJS
} from "./chunk-HUBM7RA2.js";

// node_modules/jsencrypt/bin/jsencrypt.min.js
var require_jsencrypt_min = __commonJS({
  "node_modules/jsencrypt/bin/jsencrypt.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.JSEncrypt = e() : t.JSEncrypt = e();
    }(window, function() {
      return (() => {
        "use strict";
        var t = [, (t2, e2, i2) => {
          function r(t3) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t3);
          }
          function n(t3, e3) {
            return t3 & e3;
          }
          function s(t3, e3) {
            return t3 | e3;
          }
          function o(t3, e3) {
            return t3 ^ e3;
          }
          function h(t3, e3) {
            return t3 & ~e3;
          }
          function a(t3) {
            if (0 == t3)
              return -1;
            var e3 = 0;
            return 0 == (65535 & t3) && (t3 >>= 16, e3 += 16), 0 == (255 & t3) && (t3 >>= 8, e3 += 8), 0 == (15 & t3) && (t3 >>= 4, e3 += 4), 0 == (3 & t3) && (t3 >>= 2, e3 += 2), 0 == (1 & t3) && ++e3, e3;
          }
          function u(t3) {
            for (var e3 = 0; 0 != t3; )
              t3 &= t3 - 1, ++e3;
            return e3;
          }
          i2.d(e2, { default: () => nt });
          var c, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          function l(t3) {
            var e3, i3, r2 = "";
            for (e3 = 0; e3 + 3 <= t3.length; e3 += 3)
              i3 = parseInt(t3.substring(e3, e3 + 3), 16), r2 += f.charAt(i3 >> 6) + f.charAt(63 & i3);
            for (e3 + 1 == t3.length ? (i3 = parseInt(t3.substring(e3, e3 + 1), 16), r2 += f.charAt(i3 << 2)) : e3 + 2 == t3.length && (i3 = parseInt(t3.substring(e3, e3 + 2), 16), r2 += f.charAt(i3 >> 2) + f.charAt((3 & i3) << 4)); (3 & r2.length) > 0; )
              r2 += "=";
            return r2;
          }
          function p(t3) {
            var e3, i3 = "", n2 = 0, s2 = 0;
            for (e3 = 0; e3 < t3.length && "=" != t3.charAt(e3); ++e3) {
              var o2 = f.indexOf(t3.charAt(e3));
              o2 < 0 || (0 == n2 ? (i3 += r(o2 >> 2), s2 = 3 & o2, n2 = 1) : 1 == n2 ? (i3 += r(s2 << 2 | o2 >> 4), s2 = 15 & o2, n2 = 2) : 2 == n2 ? (i3 += r(s2), i3 += r(o2 >> 2), s2 = 3 & o2, n2 = 3) : (i3 += r(s2 << 2 | o2 >> 4), i3 += r(15 & o2), n2 = 0));
            }
            return 1 == n2 && (i3 += r(s2 << 2)), i3;
          }
          var g, d = { decode: function(t3) {
            var e3;
            if (void 0 === g) {
              var i3 = "= \f\n\r	\xA0\u2028\u2029";
              for (g = /* @__PURE__ */ Object.create(null), e3 = 0; e3 < 64; ++e3)
                g["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e3)] = e3;
              for (g["-"] = 62, g._ = 63, e3 = 0; e3 < i3.length; ++e3)
                g[i3.charAt(e3)] = -1;
            }
            var r2 = [], n2 = 0, s2 = 0;
            for (e3 = 0; e3 < t3.length; ++e3) {
              var o2 = t3.charAt(e3);
              if ("=" == o2)
                break;
              if (-1 != (o2 = g[o2])) {
                if (void 0 === o2)
                  throw new Error("Illegal character at offset " + e3);
                n2 |= o2, ++s2 >= 4 ? (r2[r2.length] = n2 >> 16, r2[r2.length] = n2 >> 8 & 255, r2[r2.length] = 255 & n2, n2 = 0, s2 = 0) : n2 <<= 6;
              }
            }
            switch (s2) {
              case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
              case 2:
                r2[r2.length] = n2 >> 10;
                break;
              case 3:
                r2[r2.length] = n2 >> 16, r2[r2.length] = n2 >> 8 & 255;
            }
            return r2;
          }, re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, unarmor: function(t3) {
            var e3 = d.re.exec(t3);
            if (e3)
              if (e3[1])
                t3 = e3[1];
              else {
                if (!e3[2])
                  throw new Error("RegExp out of sync");
                t3 = e3[2];
              }
            return d.decode(t3);
          } }, v = 1e13, m = function() {
            function t3(t4) {
              this.buf = [+t4 || 0];
            }
            return t3.prototype.mulAdd = function(t4, e3) {
              var i3, r2, n2 = this.buf, s2 = n2.length;
              for (i3 = 0; i3 < s2; ++i3)
                (r2 = n2[i3] * t4 + e3) < v ? e3 = 0 : r2 -= (e3 = 0 | r2 / v) * v, n2[i3] = r2;
              e3 > 0 && (n2[i3] = e3);
            }, t3.prototype.sub = function(t4) {
              var e3, i3, r2 = this.buf, n2 = r2.length;
              for (e3 = 0; e3 < n2; ++e3)
                (i3 = r2[e3] - t4) < 0 ? (i3 += v, t4 = 1) : t4 = 0, r2[e3] = i3;
              for (; 0 === r2[r2.length - 1]; )
                r2.pop();
            }, t3.prototype.toString = function(t4) {
              if (10 != (t4 || 10))
                throw new Error("only base 10 is supported");
              for (var e3 = this.buf, i3 = e3[e3.length - 1].toString(), r2 = e3.length - 2; r2 >= 0; --r2)
                i3 += (v + e3[r2]).toString().substring(1);
              return i3;
            }, t3.prototype.valueOf = function() {
              for (var t4 = this.buf, e3 = 0, i3 = t4.length - 1; i3 >= 0; --i3)
                e3 = e3 * v + t4[i3];
              return e3;
            }, t3.prototype.simplify = function() {
              var t4 = this.buf;
              return 1 == t4.length ? t4[0] : this;
            }, t3;
          }(), y = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, b = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
          function T(t3, e3) {
            return t3.length > e3 && (t3 = t3.substring(0, e3) + "\u2026"), t3;
          }
          var S, E = function() {
            function t3(e3, i3) {
              this.hexDigits = "0123456789ABCDEF", e3 instanceof t3 ? (this.enc = e3.enc, this.pos = e3.pos) : (this.enc = e3, this.pos = i3);
            }
            return t3.prototype.get = function(t4) {
              if (void 0 === t4 && (t4 = this.pos++), t4 >= this.enc.length)
                throw new Error("Requesting byte offset " + t4 + " on a stream of length " + this.enc.length);
              return "string" == typeof this.enc ? this.enc.charCodeAt(t4) : this.enc[t4];
            }, t3.prototype.hexByte = function(t4) {
              return this.hexDigits.charAt(t4 >> 4 & 15) + this.hexDigits.charAt(15 & t4);
            }, t3.prototype.hexDump = function(t4, e3, i3) {
              for (var r2 = "", n2 = t4; n2 < e3; ++n2)
                if (r2 += this.hexByte(this.get(n2)), true !== i3)
                  switch (15 & n2) {
                    case 7:
                      r2 += "  ";
                      break;
                    case 15:
                      r2 += "\n";
                      break;
                    default:
                      r2 += " ";
                  }
              return r2;
            }, t3.prototype.isASCII = function(t4, e3) {
              for (var i3 = t4; i3 < e3; ++i3) {
                var r2 = this.get(i3);
                if (r2 < 32 || r2 > 176)
                  return false;
              }
              return true;
            }, t3.prototype.parseStringISO = function(t4, e3) {
              for (var i3 = "", r2 = t4; r2 < e3; ++r2)
                i3 += String.fromCharCode(this.get(r2));
              return i3;
            }, t3.prototype.parseStringUTF = function(t4, e3) {
              for (var i3 = "", r2 = t4; r2 < e3; ) {
                var n2 = this.get(r2++);
                i3 += n2 < 128 ? String.fromCharCode(n2) : n2 > 191 && n2 < 224 ? String.fromCharCode((31 & n2) << 6 | 63 & this.get(r2++)) : String.fromCharCode((15 & n2) << 12 | (63 & this.get(r2++)) << 6 | 63 & this.get(r2++));
              }
              return i3;
            }, t3.prototype.parseStringBMP = function(t4, e3) {
              for (var i3, r2, n2 = "", s2 = t4; s2 < e3; )
                i3 = this.get(s2++), r2 = this.get(s2++), n2 += String.fromCharCode(i3 << 8 | r2);
              return n2;
            }, t3.prototype.parseTime = function(t4, e3, i3) {
              var r2 = this.parseStringISO(t4, e3), n2 = (i3 ? y : b).exec(r2);
              return n2 ? (i3 && (n2[1] = +n2[1], n2[1] += +n2[1] < 70 ? 2e3 : 1900), r2 = n2[1] + "-" + n2[2] + "-" + n2[3] + " " + n2[4], n2[5] && (r2 += ":" + n2[5], n2[6] && (r2 += ":" + n2[6], n2[7] && (r2 += "." + n2[7]))), n2[8] && (r2 += " UTC", "Z" != n2[8] && (r2 += n2[8], n2[9] && (r2 += ":" + n2[9]))), r2) : "Unrecognized time: " + r2;
            }, t3.prototype.parseInteger = function(t4, e3) {
              for (var i3, r2 = this.get(t4), n2 = r2 > 127, s2 = n2 ? 255 : 0, o2 = ""; r2 == s2 && ++t4 < e3; )
                r2 = this.get(t4);
              if (0 == (i3 = e3 - t4))
                return n2 ? -1 : 0;
              if (i3 > 4) {
                for (o2 = r2, i3 <<= 3; 0 == (128 & (+o2 ^ s2)); )
                  o2 = +o2 << 1, --i3;
                o2 = "(" + i3 + " bit)\n";
              }
              n2 && (r2 -= 256);
              for (var h2 = new m(r2), a2 = t4 + 1; a2 < e3; ++a2)
                h2.mulAdd(256, this.get(a2));
              return o2 + h2.toString();
            }, t3.prototype.parseBitString = function(t4, e3, i3) {
              for (var r2 = this.get(t4), n2 = "(" + ((e3 - t4 - 1 << 3) - r2) + " bit)\n", s2 = "", o2 = t4 + 1; o2 < e3; ++o2) {
                for (var h2 = this.get(o2), a2 = o2 == e3 - 1 ? r2 : 0, u2 = 7; u2 >= a2; --u2)
                  s2 += h2 >> u2 & 1 ? "1" : "0";
                if (s2.length > i3)
                  return n2 + T(s2, i3);
              }
              return n2 + s2;
            }, t3.prototype.parseOctetString = function(t4, e3, i3) {
              if (this.isASCII(t4, e3))
                return T(this.parseStringISO(t4, e3), i3);
              var r2 = e3 - t4, n2 = "(" + r2 + " byte)\n";
              r2 > (i3 /= 2) && (e3 = t4 + i3);
              for (var s2 = t4; s2 < e3; ++s2)
                n2 += this.hexByte(this.get(s2));
              return r2 > i3 && (n2 += "\u2026"), n2;
            }, t3.prototype.parseOID = function(t4, e3, i3) {
              for (var r2 = "", n2 = new m(), s2 = 0, o2 = t4; o2 < e3; ++o2) {
                var h2 = this.get(o2);
                if (n2.mulAdd(128, 127 & h2), s2 += 7, !(128 & h2)) {
                  if ("" === r2)
                    if ((n2 = n2.simplify()) instanceof m)
                      n2.sub(80), r2 = "2." + n2.toString();
                    else {
                      var a2 = n2 < 80 ? n2 < 40 ? 0 : 1 : 2;
                      r2 = a2 + "." + (n2 - 40 * a2);
                    }
                  else
                    r2 += "." + n2.toString();
                  if (r2.length > i3)
                    return T(r2, i3);
                  n2 = new m(), s2 = 0;
                }
              }
              return s2 > 0 && (r2 += ".incomplete"), r2;
            }, t3;
          }(), w = function() {
            function t3(t4, e3, i3, r2, n2) {
              if (!(r2 instanceof D))
                throw new Error("Invalid tag value.");
              this.stream = t4, this.header = e3, this.length = i3, this.tag = r2, this.sub = n2;
            }
            return t3.prototype.typeName = function() {
              switch (this.tag.tagClass) {
                case 0:
                  switch (this.tag.tagNumber) {
                    case 0:
                      return "EOC";
                    case 1:
                      return "BOOLEAN";
                    case 2:
                      return "INTEGER";
                    case 3:
                      return "BIT_STRING";
                    case 4:
                      return "OCTET_STRING";
                    case 5:
                      return "NULL";
                    case 6:
                      return "OBJECT_IDENTIFIER";
                    case 7:
                      return "ObjectDescriptor";
                    case 8:
                      return "EXTERNAL";
                    case 9:
                      return "REAL";
                    case 10:
                      return "ENUMERATED";
                    case 11:
                      return "EMBEDDED_PDV";
                    case 12:
                      return "UTF8String";
                    case 16:
                      return "SEQUENCE";
                    case 17:
                      return "SET";
                    case 18:
                      return "NumericString";
                    case 19:
                      return "PrintableString";
                    case 20:
                      return "TeletexString";
                    case 21:
                      return "VideotexString";
                    case 22:
                      return "IA5String";
                    case 23:
                      return "UTCTime";
                    case 24:
                      return "GeneralizedTime";
                    case 25:
                      return "GraphicString";
                    case 26:
                      return "VisibleString";
                    case 27:
                      return "GeneralString";
                    case 28:
                      return "UniversalString";
                    case 30:
                      return "BMPString";
                  }
                  return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                  return "Application_" + this.tag.tagNumber.toString();
                case 2:
                  return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                  return "Private_" + this.tag.tagNumber.toString();
              }
            }, t3.prototype.content = function(t4) {
              if (void 0 === this.tag)
                return null;
              void 0 === t4 && (t4 = 1 / 0);
              var e3 = this.posContent(), i3 = Math.abs(this.length);
              if (!this.tag.isUniversal())
                return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e3, e3 + i3, t4);
              switch (this.tag.tagNumber) {
                case 1:
                  return 0 === this.stream.get(e3) ? "false" : "true";
                case 2:
                  return this.stream.parseInteger(e3, e3 + i3);
                case 3:
                  return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e3, e3 + i3, t4);
                case 4:
                  return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e3, e3 + i3, t4);
                case 6:
                  return this.stream.parseOID(e3, e3 + i3, t4);
                case 16:
                case 17:
                  return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                case 12:
                  return T(this.stream.parseStringUTF(e3, e3 + i3), t4);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                  return T(this.stream.parseStringISO(e3, e3 + i3), t4);
                case 30:
                  return T(this.stream.parseStringBMP(e3, e3 + i3), t4);
                case 23:
                case 24:
                  return this.stream.parseTime(e3, e3 + i3, 23 == this.tag.tagNumber);
              }
              return null;
            }, t3.prototype.toString = function() {
              return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
            }, t3.prototype.toPrettyString = function(t4) {
              void 0 === t4 && (t4 = "");
              var e3 = t4 + this.typeName() + " @" + this.stream.pos;
              if (this.length >= 0 && (e3 += "+"), e3 += this.length, this.tag.tagConstructed ? e3 += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e3 += " (encapsulates)"), e3 += "\n", null !== this.sub) {
                t4 += "  ";
                for (var i3 = 0, r2 = this.sub.length; i3 < r2; ++i3)
                  e3 += this.sub[i3].toPrettyString(t4);
              }
              return e3;
            }, t3.prototype.posStart = function() {
              return this.stream.pos;
            }, t3.prototype.posContent = function() {
              return this.stream.pos + this.header;
            }, t3.prototype.posEnd = function() {
              return this.stream.pos + this.header + Math.abs(this.length);
            }, t3.prototype.toHexString = function() {
              return this.stream.hexDump(this.posStart(), this.posEnd(), true);
            }, t3.decodeLength = function(t4) {
              var e3 = t4.get(), i3 = 127 & e3;
              if (i3 == e3)
                return i3;
              if (i3 > 6)
                throw new Error("Length over 48 bits not supported at position " + (t4.pos - 1));
              if (0 === i3)
                return null;
              e3 = 0;
              for (var r2 = 0; r2 < i3; ++r2)
                e3 = 256 * e3 + t4.get();
              return e3;
            }, t3.prototype.getHexStringValue = function() {
              var t4 = this.toHexString(), e3 = 2 * this.header, i3 = 2 * this.length;
              return t4.substr(e3, i3);
            }, t3.decode = function(e3) {
              var i3;
              i3 = e3 instanceof E ? e3 : new E(e3, 0);
              var r2 = new E(i3), n2 = new D(i3), s2 = t3.decodeLength(i3), o2 = i3.pos, h2 = o2 - r2.pos, a2 = null, u2 = function() {
                var e4 = [];
                if (null !== s2) {
                  for (var r3 = o2 + s2; i3.pos < r3; )
                    e4[e4.length] = t3.decode(i3);
                  if (i3.pos != r3)
                    throw new Error("Content size is not correct for container starting at offset " + o2);
                } else
                  try {
                    for (; ; ) {
                      var n3 = t3.decode(i3);
                      if (n3.tag.isEOC())
                        break;
                      e4[e4.length] = n3;
                    }
                    s2 = o2 - i3.pos;
                  } catch (t4) {
                    throw new Error("Exception while decoding undefined length content: " + t4);
                  }
                return e4;
              };
              if (n2.tagConstructed)
                a2 = u2();
              else if (n2.isUniversal() && (3 == n2.tagNumber || 4 == n2.tagNumber))
                try {
                  if (3 == n2.tagNumber && 0 != i3.get())
                    throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                  a2 = u2();
                  for (var c2 = 0; c2 < a2.length; ++c2)
                    if (a2[c2].tag.isEOC())
                      throw new Error("EOC is not supposed to be actual content.");
                } catch (t4) {
                  a2 = null;
                }
              if (null === a2) {
                if (null === s2)
                  throw new Error("We can't skip over an invalid tag with undefined length at offset " + o2);
                i3.pos = o2 + Math.abs(s2);
              }
              return new t3(r2, h2, s2, n2, a2);
            }, t3;
          }(), D = function() {
            function t3(t4) {
              var e3 = t4.get();
              if (this.tagClass = e3 >> 6, this.tagConstructed = 0 != (32 & e3), this.tagNumber = 31 & e3, 31 == this.tagNumber) {
                var i3 = new m();
                do {
                  e3 = t4.get(), i3.mulAdd(128, 127 & e3);
                } while (128 & e3);
                this.tagNumber = i3.simplify();
              }
            }
            return t3.prototype.isUniversal = function() {
              return 0 === this.tagClass;
            }, t3.prototype.isEOC = function() {
              return 0 === this.tagClass && 0 === this.tagNumber;
            }, t3;
          }(), x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], R = (1 << 26) / x[x.length - 1], B = function() {
            function t3(t4, e3, i3) {
              null != t4 && ("number" == typeof t4 ? this.fromNumber(t4, e3, i3) : null == e3 && "string" != typeof t4 ? this.fromString(t4, 256) : this.fromString(t4, e3));
            }
            return t3.prototype.toString = function(t4) {
              if (this.s < 0)
                return "-" + this.negate().toString(t4);
              var e3;
              if (16 == t4)
                e3 = 4;
              else if (8 == t4)
                e3 = 3;
              else if (2 == t4)
                e3 = 1;
              else if (32 == t4)
                e3 = 5;
              else {
                if (4 != t4)
                  return this.toRadix(t4);
                e3 = 2;
              }
              var i3, n2 = (1 << e3) - 1, s2 = false, o2 = "", h2 = this.t, a2 = this.DB - h2 * this.DB % e3;
              if (h2-- > 0)
                for (a2 < this.DB && (i3 = this[h2] >> a2) > 0 && (s2 = true, o2 = r(i3)); h2 >= 0; )
                  a2 < e3 ? (i3 = (this[h2] & (1 << a2) - 1) << e3 - a2, i3 |= this[--h2] >> (a2 += this.DB - e3)) : (i3 = this[h2] >> (a2 -= e3) & n2, a2 <= 0 && (a2 += this.DB, --h2)), i3 > 0 && (s2 = true), s2 && (o2 += r(i3));
              return s2 ? o2 : "0";
            }, t3.prototype.negate = function() {
              var e3 = N();
              return t3.ZERO.subTo(this, e3), e3;
            }, t3.prototype.abs = function() {
              return this.s < 0 ? this.negate() : this;
            }, t3.prototype.compareTo = function(t4) {
              var e3 = this.s - t4.s;
              if (0 != e3)
                return e3;
              var i3 = this.t;
              if (0 != (e3 = i3 - t4.t))
                return this.s < 0 ? -e3 : e3;
              for (; --i3 >= 0; )
                if (0 != (e3 = this[i3] - t4[i3]))
                  return e3;
              return 0;
            }, t3.prototype.bitLength = function() {
              return this.t <= 0 ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM);
            }, t3.prototype.mod = function(e3) {
              var i3 = N();
              return this.abs().divRemTo(e3, null, i3), this.s < 0 && i3.compareTo(t3.ZERO) > 0 && e3.subTo(i3, i3), i3;
            }, t3.prototype.modPowInt = function(t4, e3) {
              var i3;
              return i3 = t4 < 256 || e3.isEven() ? new A(e3) : new V(e3), this.exp(t4, i3);
            }, t3.prototype.clone = function() {
              var t4 = N();
              return this.copyTo(t4), t4;
            }, t3.prototype.intValue = function() {
              if (this.s < 0) {
                if (1 == this.t)
                  return this[0] - this.DV;
                if (0 == this.t)
                  return -1;
              } else {
                if (1 == this.t)
                  return this[0];
                if (0 == this.t)
                  return 0;
              }
              return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
            }, t3.prototype.byteValue = function() {
              return 0 == this.t ? this.s : this[0] << 24 >> 24;
            }, t3.prototype.shortValue = function() {
              return 0 == this.t ? this.s : this[0] << 16 >> 16;
            }, t3.prototype.signum = function() {
              return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
            }, t3.prototype.toByteArray = function() {
              var t4 = this.t, e3 = [];
              e3[0] = this.s;
              var i3, r2 = this.DB - t4 * this.DB % 8, n2 = 0;
              if (t4-- > 0)
                for (r2 < this.DB && (i3 = this[t4] >> r2) != (this.s & this.DM) >> r2 && (e3[n2++] = i3 | this.s << this.DB - r2); t4 >= 0; )
                  r2 < 8 ? (i3 = (this[t4] & (1 << r2) - 1) << 8 - r2, i3 |= this[--t4] >> (r2 += this.DB - 8)) : (i3 = this[t4] >> (r2 -= 8) & 255, r2 <= 0 && (r2 += this.DB, --t4)), 0 != (128 & i3) && (i3 |= -256), 0 == n2 && (128 & this.s) != (128 & i3) && ++n2, (n2 > 0 || i3 != this.s) && (e3[n2++] = i3);
              return e3;
            }, t3.prototype.equals = function(t4) {
              return 0 == this.compareTo(t4);
            }, t3.prototype.min = function(t4) {
              return this.compareTo(t4) < 0 ? this : t4;
            }, t3.prototype.max = function(t4) {
              return this.compareTo(t4) > 0 ? this : t4;
            }, t3.prototype.and = function(t4) {
              var e3 = N();
              return this.bitwiseTo(t4, n, e3), e3;
            }, t3.prototype.or = function(t4) {
              var e3 = N();
              return this.bitwiseTo(t4, s, e3), e3;
            }, t3.prototype.xor = function(t4) {
              var e3 = N();
              return this.bitwiseTo(t4, o, e3), e3;
            }, t3.prototype.andNot = function(t4) {
              var e3 = N();
              return this.bitwiseTo(t4, h, e3), e3;
            }, t3.prototype.not = function() {
              for (var t4 = N(), e3 = 0; e3 < this.t; ++e3)
                t4[e3] = this.DM & ~this[e3];
              return t4.t = this.t, t4.s = ~this.s, t4;
            }, t3.prototype.shiftLeft = function(t4) {
              var e3 = N();
              return t4 < 0 ? this.rShiftTo(-t4, e3) : this.lShiftTo(t4, e3), e3;
            }, t3.prototype.shiftRight = function(t4) {
              var e3 = N();
              return t4 < 0 ? this.lShiftTo(-t4, e3) : this.rShiftTo(t4, e3), e3;
            }, t3.prototype.getLowestSetBit = function() {
              for (var t4 = 0; t4 < this.t; ++t4)
                if (0 != this[t4])
                  return t4 * this.DB + a(this[t4]);
              return this.s < 0 ? this.t * this.DB : -1;
            }, t3.prototype.bitCount = function() {
              for (var t4 = 0, e3 = this.s & this.DM, i3 = 0; i3 < this.t; ++i3)
                t4 += u(this[i3] ^ e3);
              return t4;
            }, t3.prototype.testBit = function(t4) {
              var e3 = Math.floor(t4 / this.DB);
              return e3 >= this.t ? 0 != this.s : 0 != (this[e3] & 1 << t4 % this.DB);
            }, t3.prototype.setBit = function(t4) {
              return this.changeBit(t4, s);
            }, t3.prototype.clearBit = function(t4) {
              return this.changeBit(t4, h);
            }, t3.prototype.flipBit = function(t4) {
              return this.changeBit(t4, o);
            }, t3.prototype.add = function(t4) {
              var e3 = N();
              return this.addTo(t4, e3), e3;
            }, t3.prototype.subtract = function(t4) {
              var e3 = N();
              return this.subTo(t4, e3), e3;
            }, t3.prototype.multiply = function(t4) {
              var e3 = N();
              return this.multiplyTo(t4, e3), e3;
            }, t3.prototype.divide = function(t4) {
              var e3 = N();
              return this.divRemTo(t4, e3, null), e3;
            }, t3.prototype.remainder = function(t4) {
              var e3 = N();
              return this.divRemTo(t4, null, e3), e3;
            }, t3.prototype.divideAndRemainder = function(t4) {
              var e3 = N(), i3 = N();
              return this.divRemTo(t4, e3, i3), [e3, i3];
            }, t3.prototype.modPow = function(t4, e3) {
              var i3, r2, n2 = t4.bitLength(), s2 = C(1);
              if (n2 <= 0)
                return s2;
              i3 = n2 < 18 ? 1 : n2 < 48 ? 3 : n2 < 144 ? 4 : n2 < 768 ? 5 : 6, r2 = n2 < 8 ? new A(e3) : e3.isEven() ? new I(e3) : new V(e3);
              var o2 = [], h2 = 3, a2 = i3 - 1, u2 = (1 << i3) - 1;
              if (o2[1] = r2.convert(this), i3 > 1) {
                var c2 = N();
                for (r2.sqrTo(o2[1], c2); h2 <= u2; )
                  o2[h2] = N(), r2.mulTo(c2, o2[h2 - 2], o2[h2]), h2 += 2;
              }
              var f2, l2, p2 = t4.t - 1, g2 = true, d2 = N();
              for (n2 = F(t4[p2]) - 1; p2 >= 0; ) {
                for (n2 >= a2 ? f2 = t4[p2] >> n2 - a2 & u2 : (f2 = (t4[p2] & (1 << n2 + 1) - 1) << a2 - n2, p2 > 0 && (f2 |= t4[p2 - 1] >> this.DB + n2 - a2)), h2 = i3; 0 == (1 & f2); )
                  f2 >>= 1, --h2;
                if ((n2 -= h2) < 0 && (n2 += this.DB, --p2), g2)
                  o2[f2].copyTo(s2), g2 = false;
                else {
                  for (; h2 > 1; )
                    r2.sqrTo(s2, d2), r2.sqrTo(d2, s2), h2 -= 2;
                  h2 > 0 ? r2.sqrTo(s2, d2) : (l2 = s2, s2 = d2, d2 = l2), r2.mulTo(d2, o2[f2], s2);
                }
                for (; p2 >= 0 && 0 == (t4[p2] & 1 << n2); )
                  r2.sqrTo(s2, d2), l2 = s2, s2 = d2, d2 = l2, --n2 < 0 && (n2 = this.DB - 1, --p2);
              }
              return r2.revert(s2);
            }, t3.prototype.modInverse = function(e3) {
              var i3 = e3.isEven();
              if (this.isEven() && i3 || 0 == e3.signum())
                return t3.ZERO;
              for (var r2 = e3.clone(), n2 = this.clone(), s2 = C(1), o2 = C(0), h2 = C(0), a2 = C(1); 0 != r2.signum(); ) {
                for (; r2.isEven(); )
                  r2.rShiftTo(1, r2), i3 ? (s2.isEven() && o2.isEven() || (s2.addTo(this, s2), o2.subTo(e3, o2)), s2.rShiftTo(1, s2)) : o2.isEven() || o2.subTo(e3, o2), o2.rShiftTo(1, o2);
                for (; n2.isEven(); )
                  n2.rShiftTo(1, n2), i3 ? (h2.isEven() && a2.isEven() || (h2.addTo(this, h2), a2.subTo(e3, a2)), h2.rShiftTo(1, h2)) : a2.isEven() || a2.subTo(e3, a2), a2.rShiftTo(1, a2);
                r2.compareTo(n2) >= 0 ? (r2.subTo(n2, r2), i3 && s2.subTo(h2, s2), o2.subTo(a2, o2)) : (n2.subTo(r2, n2), i3 && h2.subTo(s2, h2), a2.subTo(o2, a2));
              }
              return 0 != n2.compareTo(t3.ONE) ? t3.ZERO : a2.compareTo(e3) >= 0 ? a2.subtract(e3) : a2.signum() < 0 ? (a2.addTo(e3, a2), a2.signum() < 0 ? a2.add(e3) : a2) : a2;
            }, t3.prototype.pow = function(t4) {
              return this.exp(t4, new O());
            }, t3.prototype.gcd = function(t4) {
              var e3 = this.s < 0 ? this.negate() : this.clone(), i3 = t4.s < 0 ? t4.negate() : t4.clone();
              if (e3.compareTo(i3) < 0) {
                var r2 = e3;
                e3 = i3, i3 = r2;
              }
              var n2 = e3.getLowestSetBit(), s2 = i3.getLowestSetBit();
              if (s2 < 0)
                return e3;
              for (n2 < s2 && (s2 = n2), s2 > 0 && (e3.rShiftTo(s2, e3), i3.rShiftTo(s2, i3)); e3.signum() > 0; )
                (n2 = e3.getLowestSetBit()) > 0 && e3.rShiftTo(n2, e3), (n2 = i3.getLowestSetBit()) > 0 && i3.rShiftTo(n2, i3), e3.compareTo(i3) >= 0 ? (e3.subTo(i3, e3), e3.rShiftTo(1, e3)) : (i3.subTo(e3, i3), i3.rShiftTo(1, i3));
              return s2 > 0 && i3.lShiftTo(s2, i3), i3;
            }, t3.prototype.isProbablePrime = function(t4) {
              var e3, i3 = this.abs();
              if (1 == i3.t && i3[0] <= x[x.length - 1]) {
                for (e3 = 0; e3 < x.length; ++e3)
                  if (i3[0] == x[e3])
                    return true;
                return false;
              }
              if (i3.isEven())
                return false;
              for (e3 = 1; e3 < x.length; ) {
                for (var r2 = x[e3], n2 = e3 + 1; n2 < x.length && r2 < R; )
                  r2 *= x[n2++];
                for (r2 = i3.modInt(r2); e3 < n2; )
                  if (r2 % x[e3++] == 0)
                    return false;
              }
              return i3.millerRabin(t4);
            }, t3.prototype.copyTo = function(t4) {
              for (var e3 = this.t - 1; e3 >= 0; --e3)
                t4[e3] = this[e3];
              t4.t = this.t, t4.s = this.s;
            }, t3.prototype.fromInt = function(t4) {
              this.t = 1, this.s = t4 < 0 ? -1 : 0, t4 > 0 ? this[0] = t4 : t4 < -1 ? this[0] = t4 + this.DV : this.t = 0;
            }, t3.prototype.fromString = function(e3, i3) {
              var r2;
              if (16 == i3)
                r2 = 4;
              else if (8 == i3)
                r2 = 3;
              else if (256 == i3)
                r2 = 8;
              else if (2 == i3)
                r2 = 1;
              else if (32 == i3)
                r2 = 5;
              else {
                if (4 != i3)
                  return void this.fromRadix(e3, i3);
                r2 = 2;
              }
              this.t = 0, this.s = 0;
              for (var n2 = e3.length, s2 = false, o2 = 0; --n2 >= 0; ) {
                var h2 = 8 == r2 ? 255 & +e3[n2] : H(e3, n2);
                h2 < 0 ? "-" == e3.charAt(n2) && (s2 = true) : (s2 = false, 0 == o2 ? this[this.t++] = h2 : o2 + r2 > this.DB ? (this[this.t - 1] |= (h2 & (1 << this.DB - o2) - 1) << o2, this[this.t++] = h2 >> this.DB - o2) : this[this.t - 1] |= h2 << o2, (o2 += r2) >= this.DB && (o2 -= this.DB));
              }
              8 == r2 && 0 != (128 & +e3[0]) && (this.s = -1, o2 > 0 && (this[this.t - 1] |= (1 << this.DB - o2) - 1 << o2)), this.clamp(), s2 && t3.ZERO.subTo(this, this);
            }, t3.prototype.clamp = function() {
              for (var t4 = this.s & this.DM; this.t > 0 && this[this.t - 1] == t4; )
                --this.t;
            }, t3.prototype.dlShiftTo = function(t4, e3) {
              var i3;
              for (i3 = this.t - 1; i3 >= 0; --i3)
                e3[i3 + t4] = this[i3];
              for (i3 = t4 - 1; i3 >= 0; --i3)
                e3[i3] = 0;
              e3.t = this.t + t4, e3.s = this.s;
            }, t3.prototype.drShiftTo = function(t4, e3) {
              for (var i3 = t4; i3 < this.t; ++i3)
                e3[i3 - t4] = this[i3];
              e3.t = Math.max(this.t - t4, 0), e3.s = this.s;
            }, t3.prototype.lShiftTo = function(t4, e3) {
              for (var i3 = t4 % this.DB, r2 = this.DB - i3, n2 = (1 << r2) - 1, s2 = Math.floor(t4 / this.DB), o2 = this.s << i3 & this.DM, h2 = this.t - 1; h2 >= 0; --h2)
                e3[h2 + s2 + 1] = this[h2] >> r2 | o2, o2 = (this[h2] & n2) << i3;
              for (h2 = s2 - 1; h2 >= 0; --h2)
                e3[h2] = 0;
              e3[s2] = o2, e3.t = this.t + s2 + 1, e3.s = this.s, e3.clamp();
            }, t3.prototype.rShiftTo = function(t4, e3) {
              e3.s = this.s;
              var i3 = Math.floor(t4 / this.DB);
              if (i3 >= this.t)
                e3.t = 0;
              else {
                var r2 = t4 % this.DB, n2 = this.DB - r2, s2 = (1 << r2) - 1;
                e3[0] = this[i3] >> r2;
                for (var o2 = i3 + 1; o2 < this.t; ++o2)
                  e3[o2 - i3 - 1] |= (this[o2] & s2) << n2, e3[o2 - i3] = this[o2] >> r2;
                r2 > 0 && (e3[this.t - i3 - 1] |= (this.s & s2) << n2), e3.t = this.t - i3, e3.clamp();
              }
            }, t3.prototype.subTo = function(t4, e3) {
              for (var i3 = 0, r2 = 0, n2 = Math.min(t4.t, this.t); i3 < n2; )
                r2 += this[i3] - t4[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
              if (t4.t < this.t) {
                for (r2 -= t4.s; i3 < this.t; )
                  r2 += this[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
                r2 += this.s;
              } else {
                for (r2 += this.s; i3 < t4.t; )
                  r2 -= t4[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
                r2 -= t4.s;
              }
              e3.s = r2 < 0 ? -1 : 0, r2 < -1 ? e3[i3++] = this.DV + r2 : r2 > 0 && (e3[i3++] = r2), e3.t = i3, e3.clamp();
            }, t3.prototype.multiplyTo = function(e3, i3) {
              var r2 = this.abs(), n2 = e3.abs(), s2 = r2.t;
              for (i3.t = s2 + n2.t; --s2 >= 0; )
                i3[s2] = 0;
              for (s2 = 0; s2 < n2.t; ++s2)
                i3[s2 + r2.t] = r2.am(0, n2[s2], i3, s2, 0, r2.t);
              i3.s = 0, i3.clamp(), this.s != e3.s && t3.ZERO.subTo(i3, i3);
            }, t3.prototype.squareTo = function(t4) {
              for (var e3 = this.abs(), i3 = t4.t = 2 * e3.t; --i3 >= 0; )
                t4[i3] = 0;
              for (i3 = 0; i3 < e3.t - 1; ++i3) {
                var r2 = e3.am(i3, e3[i3], t4, 2 * i3, 0, 1);
                (t4[i3 + e3.t] += e3.am(i3 + 1, 2 * e3[i3], t4, 2 * i3 + 1, r2, e3.t - i3 - 1)) >= e3.DV && (t4[i3 + e3.t] -= e3.DV, t4[i3 + e3.t + 1] = 1);
              }
              t4.t > 0 && (t4[t4.t - 1] += e3.am(i3, e3[i3], t4, 2 * i3, 0, 1)), t4.s = 0, t4.clamp();
            }, t3.prototype.divRemTo = function(e3, i3, r2) {
              var n2 = e3.abs();
              if (!(n2.t <= 0)) {
                var s2 = this.abs();
                if (s2.t < n2.t)
                  return null != i3 && i3.fromInt(0), void (null != r2 && this.copyTo(r2));
                null == r2 && (r2 = N());
                var o2 = N(), h2 = this.s, a2 = e3.s, u2 = this.DB - F(n2[n2.t - 1]);
                u2 > 0 ? (n2.lShiftTo(u2, o2), s2.lShiftTo(u2, r2)) : (n2.copyTo(o2), s2.copyTo(r2));
                var c2 = o2.t, f2 = o2[c2 - 1];
                if (0 != f2) {
                  var l2 = f2 * (1 << this.F1) + (c2 > 1 ? o2[c2 - 2] >> this.F2 : 0), p2 = this.FV / l2, g2 = (1 << this.F1) / l2, d2 = 1 << this.F2, v2 = r2.t, m2 = v2 - c2, y2 = null == i3 ? N() : i3;
                  for (o2.dlShiftTo(m2, y2), r2.compareTo(y2) >= 0 && (r2[r2.t++] = 1, r2.subTo(y2, r2)), t3.ONE.dlShiftTo(c2, y2), y2.subTo(o2, o2); o2.t < c2; )
                    o2[o2.t++] = 0;
                  for (; --m2 >= 0; ) {
                    var b2 = r2[--v2] == f2 ? this.DM : Math.floor(r2[v2] * p2 + (r2[v2 - 1] + d2) * g2);
                    if ((r2[v2] += o2.am(0, b2, r2, m2, 0, c2)) < b2)
                      for (o2.dlShiftTo(m2, y2), r2.subTo(y2, r2); r2[v2] < --b2; )
                        r2.subTo(y2, r2);
                  }
                  null != i3 && (r2.drShiftTo(c2, i3), h2 != a2 && t3.ZERO.subTo(i3, i3)), r2.t = c2, r2.clamp(), u2 > 0 && r2.rShiftTo(u2, r2), h2 < 0 && t3.ZERO.subTo(r2, r2);
                }
              }
            }, t3.prototype.invDigit = function() {
              if (this.t < 1)
                return 0;
              var t4 = this[0];
              if (0 == (1 & t4))
                return 0;
              var e3 = 3 & t4;
              return (e3 = (e3 = (e3 = (e3 = e3 * (2 - (15 & t4) * e3) & 15) * (2 - (255 & t4) * e3) & 255) * (2 - ((65535 & t4) * e3 & 65535)) & 65535) * (2 - t4 * e3 % this.DV) % this.DV) > 0 ? this.DV - e3 : -e3;
            }, t3.prototype.isEven = function() {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s);
            }, t3.prototype.exp = function(e3, i3) {
              if (e3 > 4294967295 || e3 < 1)
                return t3.ONE;
              var r2 = N(), n2 = N(), s2 = i3.convert(this), o2 = F(e3) - 1;
              for (s2.copyTo(r2); --o2 >= 0; )
                if (i3.sqrTo(r2, n2), (e3 & 1 << o2) > 0)
                  i3.mulTo(n2, s2, r2);
                else {
                  var h2 = r2;
                  r2 = n2, n2 = h2;
                }
              return i3.revert(r2);
            }, t3.prototype.chunkSize = function(t4) {
              return Math.floor(Math.LN2 * this.DB / Math.log(t4));
            }, t3.prototype.toRadix = function(t4) {
              if (null == t4 && (t4 = 10), 0 == this.signum() || t4 < 2 || t4 > 36)
                return "0";
              var e3 = this.chunkSize(t4), i3 = Math.pow(t4, e3), r2 = C(i3), n2 = N(), s2 = N(), o2 = "";
              for (this.divRemTo(r2, n2, s2); n2.signum() > 0; )
                o2 = (i3 + s2.intValue()).toString(t4).substr(1) + o2, n2.divRemTo(r2, n2, s2);
              return s2.intValue().toString(t4) + o2;
            }, t3.prototype.fromRadix = function(e3, i3) {
              this.fromInt(0), null == i3 && (i3 = 10);
              for (var r2 = this.chunkSize(i3), n2 = Math.pow(i3, r2), s2 = false, o2 = 0, h2 = 0, a2 = 0; a2 < e3.length; ++a2) {
                var u2 = H(e3, a2);
                u2 < 0 ? "-" == e3.charAt(a2) && 0 == this.signum() && (s2 = true) : (h2 = i3 * h2 + u2, ++o2 >= r2 && (this.dMultiply(n2), this.dAddOffset(h2, 0), o2 = 0, h2 = 0));
              }
              o2 > 0 && (this.dMultiply(Math.pow(i3, o2)), this.dAddOffset(h2, 0)), s2 && t3.ZERO.subTo(this, this);
            }, t3.prototype.fromNumber = function(e3, i3, r2) {
              if ("number" == typeof i3)
                if (e3 < 2)
                  this.fromInt(1);
                else
                  for (this.fromNumber(e3, r2), this.testBit(e3 - 1) || this.bitwiseTo(t3.ONE.shiftLeft(e3 - 1), s, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i3); )
                    this.dAddOffset(2, 0), this.bitLength() > e3 && this.subTo(t3.ONE.shiftLeft(e3 - 1), this);
              else {
                var n2 = [], o2 = 7 & e3;
                n2.length = 1 + (e3 >> 3), i3.nextBytes(n2), o2 > 0 ? n2[0] &= (1 << o2) - 1 : n2[0] = 0, this.fromString(n2, 256);
              }
            }, t3.prototype.bitwiseTo = function(t4, e3, i3) {
              var r2, n2, s2 = Math.min(t4.t, this.t);
              for (r2 = 0; r2 < s2; ++r2)
                i3[r2] = e3(this[r2], t4[r2]);
              if (t4.t < this.t) {
                for (n2 = t4.s & this.DM, r2 = s2; r2 < this.t; ++r2)
                  i3[r2] = e3(this[r2], n2);
                i3.t = this.t;
              } else {
                for (n2 = this.s & this.DM, r2 = s2; r2 < t4.t; ++r2)
                  i3[r2] = e3(n2, t4[r2]);
                i3.t = t4.t;
              }
              i3.s = e3(this.s, t4.s), i3.clamp();
            }, t3.prototype.changeBit = function(e3, i3) {
              var r2 = t3.ONE.shiftLeft(e3);
              return this.bitwiseTo(r2, i3, r2), r2;
            }, t3.prototype.addTo = function(t4, e3) {
              for (var i3 = 0, r2 = 0, n2 = Math.min(t4.t, this.t); i3 < n2; )
                r2 += this[i3] + t4[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
              if (t4.t < this.t) {
                for (r2 += t4.s; i3 < this.t; )
                  r2 += this[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
                r2 += this.s;
              } else {
                for (r2 += this.s; i3 < t4.t; )
                  r2 += t4[i3], e3[i3++] = r2 & this.DM, r2 >>= this.DB;
                r2 += t4.s;
              }
              e3.s = r2 < 0 ? -1 : 0, r2 > 0 ? e3[i3++] = r2 : r2 < -1 && (e3[i3++] = this.DV + r2), e3.t = i3, e3.clamp();
            }, t3.prototype.dMultiply = function(t4) {
              this[this.t] = this.am(0, t4 - 1, this, 0, 0, this.t), ++this.t, this.clamp();
            }, t3.prototype.dAddOffset = function(t4, e3) {
              if (0 != t4) {
                for (; this.t <= e3; )
                  this[this.t++] = 0;
                for (this[e3] += t4; this[e3] >= this.DV; )
                  this[e3] -= this.DV, ++e3 >= this.t && (this[this.t++] = 0), ++this[e3];
              }
            }, t3.prototype.multiplyLowerTo = function(t4, e3, i3) {
              var r2 = Math.min(this.t + t4.t, e3);
              for (i3.s = 0, i3.t = r2; r2 > 0; )
                i3[--r2] = 0;
              for (var n2 = i3.t - this.t; r2 < n2; ++r2)
                i3[r2 + this.t] = this.am(0, t4[r2], i3, r2, 0, this.t);
              for (n2 = Math.min(t4.t, e3); r2 < n2; ++r2)
                this.am(0, t4[r2], i3, r2, 0, e3 - r2);
              i3.clamp();
            }, t3.prototype.multiplyUpperTo = function(t4, e3, i3) {
              --e3;
              var r2 = i3.t = this.t + t4.t - e3;
              for (i3.s = 0; --r2 >= 0; )
                i3[r2] = 0;
              for (r2 = Math.max(e3 - this.t, 0); r2 < t4.t; ++r2)
                i3[this.t + r2 - e3] = this.am(e3 - r2, t4[r2], i3, 0, 0, this.t + r2 - e3);
              i3.clamp(), i3.drShiftTo(1, i3);
            }, t3.prototype.modInt = function(t4) {
              if (t4 <= 0)
                return 0;
              var e3 = this.DV % t4, i3 = this.s < 0 ? t4 - 1 : 0;
              if (this.t > 0)
                if (0 == e3)
                  i3 = this[0] % t4;
                else
                  for (var r2 = this.t - 1; r2 >= 0; --r2)
                    i3 = (e3 * i3 + this[r2]) % t4;
              return i3;
            }, t3.prototype.millerRabin = function(e3) {
              var i3 = this.subtract(t3.ONE), r2 = i3.getLowestSetBit();
              if (r2 <= 0)
                return false;
              var n2 = i3.shiftRight(r2);
              (e3 = e3 + 1 >> 1) > x.length && (e3 = x.length);
              for (var s2 = N(), o2 = 0; o2 < e3; ++o2) {
                s2.fromInt(x[Math.floor(Math.random() * x.length)]);
                var h2 = s2.modPow(n2, this);
                if (0 != h2.compareTo(t3.ONE) && 0 != h2.compareTo(i3)) {
                  for (var a2 = 1; a2++ < r2 && 0 != h2.compareTo(i3); )
                    if (0 == (h2 = h2.modPowInt(2, this)).compareTo(t3.ONE))
                      return false;
                  if (0 != h2.compareTo(i3))
                    return false;
                }
              }
              return true;
            }, t3.prototype.square = function() {
              var t4 = N();
              return this.squareTo(t4), t4;
            }, t3.prototype.gcda = function(t4, e3) {
              var i3 = this.s < 0 ? this.negate() : this.clone(), r2 = t4.s < 0 ? t4.negate() : t4.clone();
              if (i3.compareTo(r2) < 0) {
                var n2 = i3;
                i3 = r2, r2 = n2;
              }
              var s2 = i3.getLowestSetBit(), o2 = r2.getLowestSetBit();
              if (o2 < 0)
                e3(i3);
              else {
                s2 < o2 && (o2 = s2), o2 > 0 && (i3.rShiftTo(o2, i3), r2.rShiftTo(o2, r2));
                var h2 = function() {
                  (s2 = i3.getLowestSetBit()) > 0 && i3.rShiftTo(s2, i3), (s2 = r2.getLowestSetBit()) > 0 && r2.rShiftTo(s2, r2), i3.compareTo(r2) >= 0 ? (i3.subTo(r2, i3), i3.rShiftTo(1, i3)) : (r2.subTo(i3, r2), r2.rShiftTo(1, r2)), i3.signum() > 0 ? setTimeout(h2, 0) : (o2 > 0 && r2.lShiftTo(o2, r2), setTimeout(function() {
                    e3(r2);
                  }, 0));
                };
                setTimeout(h2, 10);
              }
            }, t3.prototype.fromNumberAsync = function(e3, i3, r2, n2) {
              if ("number" == typeof i3)
                if (e3 < 2)
                  this.fromInt(1);
                else {
                  this.fromNumber(e3, r2), this.testBit(e3 - 1) || this.bitwiseTo(t3.ONE.shiftLeft(e3 - 1), s, this), this.isEven() && this.dAddOffset(1, 0);
                  var o2 = this, h2 = function() {
                    o2.dAddOffset(2, 0), o2.bitLength() > e3 && o2.subTo(t3.ONE.shiftLeft(e3 - 1), o2), o2.isProbablePrime(i3) ? setTimeout(function() {
                      n2();
                    }, 0) : setTimeout(h2, 0);
                  };
                  setTimeout(h2, 0);
                }
              else {
                var a2 = [], u2 = 7 & e3;
                a2.length = 1 + (e3 >> 3), i3.nextBytes(a2), u2 > 0 ? a2[0] &= (1 << u2) - 1 : a2[0] = 0, this.fromString(a2, 256);
              }
            }, t3;
          }(), O = function() {
            function t3() {
            }
            return t3.prototype.convert = function(t4) {
              return t4;
            }, t3.prototype.revert = function(t4) {
              return t4;
            }, t3.prototype.mulTo = function(t4, e3, i3) {
              t4.multiplyTo(e3, i3);
            }, t3.prototype.sqrTo = function(t4, e3) {
              t4.squareTo(e3);
            }, t3;
          }(), A = function() {
            function t3(t4) {
              this.m = t4;
            }
            return t3.prototype.convert = function(t4) {
              return t4.s < 0 || t4.compareTo(this.m) >= 0 ? t4.mod(this.m) : t4;
            }, t3.prototype.revert = function(t4) {
              return t4;
            }, t3.prototype.reduce = function(t4) {
              t4.divRemTo(this.m, null, t4);
            }, t3.prototype.mulTo = function(t4, e3, i3) {
              t4.multiplyTo(e3, i3), this.reduce(i3);
            }, t3.prototype.sqrTo = function(t4, e3) {
              t4.squareTo(e3), this.reduce(e3);
            }, t3;
          }(), V = function() {
            function t3(t4) {
              this.m = t4, this.mp = t4.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t4.DB - 15) - 1, this.mt2 = 2 * t4.t;
            }
            return t3.prototype.convert = function(t4) {
              var e3 = N();
              return t4.abs().dlShiftTo(this.m.t, e3), e3.divRemTo(this.m, null, e3), t4.s < 0 && e3.compareTo(B.ZERO) > 0 && this.m.subTo(e3, e3), e3;
            }, t3.prototype.revert = function(t4) {
              var e3 = N();
              return t4.copyTo(e3), this.reduce(e3), e3;
            }, t3.prototype.reduce = function(t4) {
              for (; t4.t <= this.mt2; )
                t4[t4.t++] = 0;
              for (var e3 = 0; e3 < this.m.t; ++e3) {
                var i3 = 32767 & t4[e3], r2 = i3 * this.mpl + ((i3 * this.mph + (t4[e3] >> 15) * this.mpl & this.um) << 15) & t4.DM;
                for (t4[i3 = e3 + this.m.t] += this.m.am(0, r2, t4, e3, 0, this.m.t); t4[i3] >= t4.DV; )
                  t4[i3] -= t4.DV, t4[++i3]++;
              }
              t4.clamp(), t4.drShiftTo(this.m.t, t4), t4.compareTo(this.m) >= 0 && t4.subTo(this.m, t4);
            }, t3.prototype.mulTo = function(t4, e3, i3) {
              t4.multiplyTo(e3, i3), this.reduce(i3);
            }, t3.prototype.sqrTo = function(t4, e3) {
              t4.squareTo(e3), this.reduce(e3);
            }, t3;
          }(), I = function() {
            function t3(t4) {
              this.m = t4, this.r2 = N(), this.q3 = N(), B.ONE.dlShiftTo(2 * t4.t, this.r2), this.mu = this.r2.divide(t4);
            }
            return t3.prototype.convert = function(t4) {
              if (t4.s < 0 || t4.t > 2 * this.m.t)
                return t4.mod(this.m);
              if (t4.compareTo(this.m) < 0)
                return t4;
              var e3 = N();
              return t4.copyTo(e3), this.reduce(e3), e3;
            }, t3.prototype.revert = function(t4) {
              return t4;
            }, t3.prototype.reduce = function(t4) {
              for (t4.drShiftTo(this.m.t - 1, this.r2), t4.t > this.m.t + 1 && (t4.t = this.m.t + 1, t4.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t4.compareTo(this.r2) < 0; )
                t4.dAddOffset(1, this.m.t + 1);
              for (t4.subTo(this.r2, t4); t4.compareTo(this.m) >= 0; )
                t4.subTo(this.m, t4);
            }, t3.prototype.mulTo = function(t4, e3, i3) {
              t4.multiplyTo(e3, i3), this.reduce(i3);
            }, t3.prototype.sqrTo = function(t4, e3) {
              t4.squareTo(e3), this.reduce(e3);
            }, t3;
          }();
          function N() {
            return new B(null);
          }
          function P(t3, e3) {
            return new B(t3, e3);
          }
          var M = "undefined" != typeof navigator;
          M && "Microsoft Internet Explorer" == navigator.appName ? (B.prototype.am = function(t3, e3, i3, r2, n2, s2) {
            for (var o2 = 32767 & e3, h2 = e3 >> 15; --s2 >= 0; ) {
              var a2 = 32767 & this[t3], u2 = this[t3++] >> 15, c2 = h2 * a2 + u2 * o2;
              n2 = ((a2 = o2 * a2 + ((32767 & c2) << 15) + i3[r2] + (1073741823 & n2)) >>> 30) + (c2 >>> 15) + h2 * u2 + (n2 >>> 30), i3[r2++] = 1073741823 & a2;
            }
            return n2;
          }, S = 30) : M && "Netscape" != navigator.appName ? (B.prototype.am = function(t3, e3, i3, r2, n2, s2) {
            for (; --s2 >= 0; ) {
              var o2 = e3 * this[t3++] + i3[r2] + n2;
              n2 = Math.floor(o2 / 67108864), i3[r2++] = 67108863 & o2;
            }
            return n2;
          }, S = 26) : (B.prototype.am = function(t3, e3, i3, r2, n2, s2) {
            for (var o2 = 16383 & e3, h2 = e3 >> 14; --s2 >= 0; ) {
              var a2 = 16383 & this[t3], u2 = this[t3++] >> 14, c2 = h2 * a2 + u2 * o2;
              n2 = ((a2 = o2 * a2 + ((16383 & c2) << 14) + i3[r2] + n2) >> 28) + (c2 >> 14) + h2 * u2, i3[r2++] = 268435455 & a2;
            }
            return n2;
          }, S = 28), B.prototype.DB = S, B.prototype.DM = (1 << S) - 1, B.prototype.DV = 1 << S, B.prototype.FV = Math.pow(2, 52), B.prototype.F1 = 52 - S, B.prototype.F2 = 2 * S - 52;
          var j, q, L = [];
          for (j = "0".charCodeAt(0), q = 0; q <= 9; ++q)
            L[j++] = q;
          for (j = "a".charCodeAt(0), q = 10; q < 36; ++q)
            L[j++] = q;
          for (j = "A".charCodeAt(0), q = 10; q < 36; ++q)
            L[j++] = q;
          function H(t3, e3) {
            var i3 = L[t3.charCodeAt(e3)];
            return null == i3 ? -1 : i3;
          }
          function C(t3) {
            var e3 = N();
            return e3.fromInt(t3), e3;
          }
          function F(t3) {
            var e3, i3 = 1;
            return 0 != (e3 = t3 >>> 16) && (t3 = e3, i3 += 16), 0 != (e3 = t3 >> 8) && (t3 = e3, i3 += 8), 0 != (e3 = t3 >> 4) && (t3 = e3, i3 += 4), 0 != (e3 = t3 >> 2) && (t3 = e3, i3 += 2), 0 != (e3 = t3 >> 1) && (t3 = e3, i3 += 1), i3;
          }
          B.ZERO = C(0), B.ONE = C(1);
          var U, K, k = function() {
            function t3() {
              this.i = 0, this.j = 0, this.S = [];
            }
            return t3.prototype.init = function(t4) {
              var e3, i3, r2;
              for (e3 = 0; e3 < 256; ++e3)
                this.S[e3] = e3;
              for (i3 = 0, e3 = 0; e3 < 256; ++e3)
                i3 = i3 + this.S[e3] + t4[e3 % t4.length] & 255, r2 = this.S[e3], this.S[e3] = this.S[i3], this.S[i3] = r2;
              this.i = 0, this.j = 0;
            }, t3.prototype.next = function() {
              var t4;
              return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t4 = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t4, this.S[t4 + this.S[this.i] & 255];
            }, t3;
          }(), _ = null;
          if (null == _) {
            _ = [], K = 0;
            var z = void 0;
            if (window.crypto && window.crypto.getRandomValues) {
              var Z = new Uint32Array(256);
              for (window.crypto.getRandomValues(Z), z = 0; z < Z.length; ++z)
                _[K++] = 255 & Z[z];
            }
            var G = 0, $ = function(t3) {
              if ((G = G || 0) >= 256 || K >= 256)
                window.removeEventListener ? window.removeEventListener("mousemove", $, false) : window.detachEvent && window.detachEvent("onmousemove", $);
              else
                try {
                  var e3 = t3.x + t3.y;
                  _[K++] = 255 & e3, G += 1;
                } catch (t4) {
                }
            };
            window.addEventListener ? window.addEventListener("mousemove", $, false) : window.attachEvent && window.attachEvent("onmousemove", $);
          }
          function Y() {
            if (null == U) {
              for (U = new k(); K < 256; ) {
                var t3 = Math.floor(65536 * Math.random());
                _[K++] = 255 & t3;
              }
              for (U.init(_), K = 0; K < _.length; ++K)
                _[K] = 0;
              K = 0;
            }
            return U.next();
          }
          var J = function() {
            function t3() {
            }
            return t3.prototype.nextBytes = function(t4) {
              for (var e3 = 0; e3 < t4.length; ++e3)
                t4[e3] = Y();
            }, t3;
          }(), X = function() {
            function t3() {
              this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
            }
            return t3.prototype.doPublic = function(t4) {
              return t4.modPowInt(this.e, this.n);
            }, t3.prototype.doPrivate = function(t4) {
              if (null == this.p || null == this.q)
                return t4.modPow(this.d, this.n);
              for (var e3 = t4.mod(this.p).modPow(this.dmp1, this.p), i3 = t4.mod(this.q).modPow(this.dmq1, this.q); e3.compareTo(i3) < 0; )
                e3 = e3.add(this.p);
              return e3.subtract(i3).multiply(this.coeff).mod(this.p).multiply(this.q).add(i3);
            }, t3.prototype.setPublic = function(t4, e3) {
              null != t4 && null != e3 && t4.length > 0 && e3.length > 0 ? (this.n = P(t4, 16), this.e = parseInt(e3, 16)) : console.error("Invalid RSA public key");
            }, t3.prototype.encrypt = function(t4) {
              var e3 = this.n.bitLength() + 7 >> 3, i3 = function(t5, e4) {
                if (e4 < t5.length + 11)
                  return console.error("Message too long for RSA"), null;
                for (var i4 = [], r3 = t5.length - 1; r3 >= 0 && e4 > 0; ) {
                  var n3 = t5.charCodeAt(r3--);
                  n3 < 128 ? i4[--e4] = n3 : n3 > 127 && n3 < 2048 ? (i4[--e4] = 63 & n3 | 128, i4[--e4] = n3 >> 6 | 192) : (i4[--e4] = 63 & n3 | 128, i4[--e4] = n3 >> 6 & 63 | 128, i4[--e4] = n3 >> 12 | 224);
                }
                i4[--e4] = 0;
                for (var s3 = new J(), o3 = []; e4 > 2; ) {
                  for (o3[0] = 0; 0 == o3[0]; )
                    s3.nextBytes(o3);
                  i4[--e4] = o3[0];
                }
                return i4[--e4] = 2, i4[--e4] = 0, new B(i4);
              }(t4, e3);
              if (null == i3)
                return null;
              var r2 = this.doPublic(i3);
              if (null == r2)
                return null;
              for (var n2 = r2.toString(16), s2 = n2.length, o2 = 0; o2 < 2 * e3 - s2; o2++)
                n2 = "0" + n2;
              return n2;
            }, t3.prototype.setPrivate = function(t4, e3, i3) {
              null != t4 && null != e3 && t4.length > 0 && e3.length > 0 ? (this.n = P(t4, 16), this.e = parseInt(e3, 16), this.d = P(i3, 16)) : console.error("Invalid RSA private key");
            }, t3.prototype.setPrivateEx = function(t4, e3, i3, r2, n2, s2, o2, h2) {
              null != t4 && null != e3 && t4.length > 0 && e3.length > 0 ? (this.n = P(t4, 16), this.e = parseInt(e3, 16), this.d = P(i3, 16), this.p = P(r2, 16), this.q = P(n2, 16), this.dmp1 = P(s2, 16), this.dmq1 = P(o2, 16), this.coeff = P(h2, 16)) : console.error("Invalid RSA private key");
            }, t3.prototype.generate = function(t4, e3) {
              var i3 = new J(), r2 = t4 >> 1;
              this.e = parseInt(e3, 16);
              for (var n2 = new B(e3, 16); ; ) {
                for (; this.p = new B(t4 - r2, 1, i3), 0 != this.p.subtract(B.ONE).gcd(n2).compareTo(B.ONE) || !this.p.isProbablePrime(10); )
                  ;
                for (; this.q = new B(r2, 1, i3), 0 != this.q.subtract(B.ONE).gcd(n2).compareTo(B.ONE) || !this.q.isProbablePrime(10); )
                  ;
                if (this.p.compareTo(this.q) <= 0) {
                  var s2 = this.p;
                  this.p = this.q, this.q = s2;
                }
                var o2 = this.p.subtract(B.ONE), h2 = this.q.subtract(B.ONE), a2 = o2.multiply(h2);
                if (0 == a2.gcd(n2).compareTo(B.ONE)) {
                  this.n = this.p.multiply(this.q), this.d = n2.modInverse(a2), this.dmp1 = this.d.mod(o2), this.dmq1 = this.d.mod(h2), this.coeff = this.q.modInverse(this.p);
                  break;
                }
              }
            }, t3.prototype.decrypt = function(t4) {
              var e3 = P(t4, 16), i3 = this.doPrivate(e3);
              return null == i3 ? null : function(t5, e4) {
                for (var i4 = t5.toByteArray(), r2 = 0; r2 < i4.length && 0 == i4[r2]; )
                  ++r2;
                if (i4.length - r2 != e4 - 1 || 2 != i4[r2])
                  return null;
                for (++r2; 0 != i4[r2]; )
                  if (++r2 >= i4.length)
                    return null;
                for (var n2 = ""; ++r2 < i4.length; ) {
                  var s2 = 255 & i4[r2];
                  s2 < 128 ? n2 += String.fromCharCode(s2) : s2 > 191 && s2 < 224 ? (n2 += String.fromCharCode((31 & s2) << 6 | 63 & i4[r2 + 1]), ++r2) : (n2 += String.fromCharCode((15 & s2) << 12 | (63 & i4[r2 + 1]) << 6 | 63 & i4[r2 + 2]), r2 += 2);
                }
                return n2;
              }(i3, this.n.bitLength() + 7 >> 3);
            }, t3.prototype.generateAsync = function(t4, e3, i3) {
              var r2 = new J(), n2 = t4 >> 1;
              this.e = parseInt(e3, 16);
              var s2 = new B(e3, 16), o2 = this, h2 = function() {
                var e4 = function() {
                  if (o2.p.compareTo(o2.q) <= 0) {
                    var t5 = o2.p;
                    o2.p = o2.q, o2.q = t5;
                  }
                  var e5 = o2.p.subtract(B.ONE), r3 = o2.q.subtract(B.ONE), n3 = e5.multiply(r3);
                  0 == n3.gcd(s2).compareTo(B.ONE) ? (o2.n = o2.p.multiply(o2.q), o2.d = s2.modInverse(n3), o2.dmp1 = o2.d.mod(e5), o2.dmq1 = o2.d.mod(r3), o2.coeff = o2.q.modInverse(o2.p), setTimeout(function() {
                    i3();
                  }, 0)) : setTimeout(h2, 0);
                }, a2 = function() {
                  o2.q = N(), o2.q.fromNumberAsync(n2, 1, r2, function() {
                    o2.q.subtract(B.ONE).gcda(s2, function(t5) {
                      0 == t5.compareTo(B.ONE) && o2.q.isProbablePrime(10) ? setTimeout(e4, 0) : setTimeout(a2, 0);
                    });
                  });
                }, u2 = function() {
                  o2.p = N(), o2.p.fromNumberAsync(t4 - n2, 1, r2, function() {
                    o2.p.subtract(B.ONE).gcda(s2, function(t5) {
                      0 == t5.compareTo(B.ONE) && o2.p.isProbablePrime(10) ? setTimeout(a2, 0) : setTimeout(u2, 0);
                    });
                  });
                };
                setTimeout(u2, 0);
              };
              setTimeout(h2, 0);
            }, t3.prototype.sign = function(t4, e3, i3) {
              var r2 = function(t5, e4) {
                if (e4 < t5.length + 22)
                  return console.error("Message too long for RSA"), null;
                for (var i4 = e4 - t5.length - 6, r3 = "", n3 = 0; n3 < i4; n3 += 2)
                  r3 += "ff";
                return P("0001" + r3 + "00" + t5, 16);
              }((Q[i3] || "") + e3(t4).toString(), this.n.bitLength() / 4);
              if (null == r2)
                return null;
              var n2 = this.doPrivate(r2);
              if (null == n2)
                return null;
              var s2 = n2.toString(16);
              return 0 == (1 & s2.length) ? s2 : "0" + s2;
            }, t3.prototype.verify = function(t4, e3, i3) {
              var r2 = P(e3, 16), n2 = this.doPublic(r2);
              return null == n2 ? null : function(t5) {
                for (var e4 in Q)
                  if (Q.hasOwnProperty(e4)) {
                    var i4 = Q[e4], r3 = i4.length;
                    if (t5.substr(0, r3) == i4)
                      return t5.substr(r3);
                  }
                return t5;
              }(n2.toString(16).replace(/^1f+00/, "")) == i3(t4).toString();
            }, t3;
          }(), Q = { md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", ripemd160: "3021300906052b2403020105000414" }, W = {};
          W.lang = { extend: function(t3, e3, i3) {
            if (!e3 || !t3)
              throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var r2 = function() {
            };
            if (r2.prototype = e3.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3, t3.superclass = e3.prototype, e3.prototype.constructor == Object.prototype.constructor && (e3.prototype.constructor = e3), i3) {
              var n2;
              for (n2 in i3)
                t3.prototype[n2] = i3[n2];
              var s2 = function() {
              }, o2 = ["toString", "valueOf"];
              try {
                /MSIE/.test(navigator.userAgent) && (s2 = function(t4, e4) {
                  for (n2 = 0; n2 < o2.length; n2 += 1) {
                    var i4 = o2[n2], r3 = e4[i4];
                    "function" == typeof r3 && r3 != Object.prototype[i4] && (t4[i4] = r3);
                  }
                });
              } catch (t4) {
              }
              s2(t3.prototype, i3);
            }
          } };
          var tt = {};
          void 0 !== tt.asn1 && tt.asn1 || (tt.asn1 = {}), tt.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(t3) {
              var e3 = t3.toString(16);
              return e3.length % 2 == 1 && (e3 = "0" + e3), e3;
            }, this.bigIntToMinTwosComplementsHex = function(t3) {
              var e3 = t3.toString(16);
              if ("-" != e3.substr(0, 1))
                e3.length % 2 == 1 ? e3 = "0" + e3 : e3.match(/^[0-7]/) || (e3 = "00" + e3);
              else {
                var i3 = e3.substr(1).length;
                i3 % 2 == 1 ? i3 += 1 : e3.match(/^[0-7]/) || (i3 += 2);
                for (var r2 = "", n2 = 0; n2 < i3; n2++)
                  r2 += "f";
                e3 = new B(r2, 16).xor(t3).add(B.ONE).toString(16).replace(/^-/, "");
              }
              return e3;
            }, this.getPEMStringFromHex = function(t3, e3) {
              return hextopem(t3, e3);
            }, this.newObject = function(t3) {
              var e3 = tt.asn1, i3 = e3.DERBoolean, r2 = e3.DERInteger, n2 = e3.DERBitString, s2 = e3.DEROctetString, o2 = e3.DERNull, h2 = e3.DERObjectIdentifier, a2 = e3.DEREnumerated, u2 = e3.DERUTF8String, c2 = e3.DERNumericString, f2 = e3.DERPrintableString, l2 = e3.DERTeletexString, p2 = e3.DERIA5String, g2 = e3.DERUTCTime, d2 = e3.DERGeneralizedTime, v2 = e3.DERSequence, m2 = e3.DERSet, y2 = e3.DERTaggedObject, b2 = e3.ASN1Util.newObject, T2 = Object.keys(t3);
              if (1 != T2.length)
                throw "key of param shall be only one.";
              var S2 = T2[0];
              if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + S2 + ":"))
                throw "undefined key: " + S2;
              if ("bool" == S2)
                return new i3(t3[S2]);
              if ("int" == S2)
                return new r2(t3[S2]);
              if ("bitstr" == S2)
                return new n2(t3[S2]);
              if ("octstr" == S2)
                return new s2(t3[S2]);
              if ("null" == S2)
                return new o2(t3[S2]);
              if ("oid" == S2)
                return new h2(t3[S2]);
              if ("enum" == S2)
                return new a2(t3[S2]);
              if ("utf8str" == S2)
                return new u2(t3[S2]);
              if ("numstr" == S2)
                return new c2(t3[S2]);
              if ("prnstr" == S2)
                return new f2(t3[S2]);
              if ("telstr" == S2)
                return new l2(t3[S2]);
              if ("ia5str" == S2)
                return new p2(t3[S2]);
              if ("utctime" == S2)
                return new g2(t3[S2]);
              if ("gentime" == S2)
                return new d2(t3[S2]);
              if ("seq" == S2) {
                for (var E2 = t3[S2], w2 = [], D2 = 0; D2 < E2.length; D2++) {
                  var x2 = b2(E2[D2]);
                  w2.push(x2);
                }
                return new v2({ array: w2 });
              }
              if ("set" == S2) {
                for (E2 = t3[S2], w2 = [], D2 = 0; D2 < E2.length; D2++)
                  x2 = b2(E2[D2]), w2.push(x2);
                return new m2({ array: w2 });
              }
              if ("tag" == S2) {
                var R2 = t3[S2];
                if ("[object Array]" === Object.prototype.toString.call(R2) && 3 == R2.length) {
                  var B2 = b2(R2[2]);
                  return new y2({ tag: R2[0], explicit: R2[1], obj: B2 });
                }
                var O2 = {};
                if (void 0 !== R2.explicit && (O2.explicit = R2.explicit), void 0 !== R2.tag && (O2.tag = R2.tag), void 0 === R2.obj)
                  throw "obj shall be specified for 'tag'.";
                return O2.obj = b2(R2.obj), new y2(O2);
              }
            }, this.jsonToASN1HEX = function(t3) {
              return this.newObject(t3).getEncodedHex();
            };
          }(), tt.asn1.ASN1Util.oidHexToInt = function(t3) {
            for (var e3 = "", i3 = parseInt(t3.substr(0, 2), 16), r2 = (e3 = Math.floor(i3 / 40) + "." + i3 % 40, ""), n2 = 2; n2 < t3.length; n2 += 2) {
              var s2 = ("00000000" + parseInt(t3.substr(n2, 2), 16).toString(2)).slice(-8);
              r2 += s2.substr(1, 7), "0" == s2.substr(0, 1) && (e3 = e3 + "." + new B(r2, 2).toString(10), r2 = "");
            }
            return e3;
          }, tt.asn1.ASN1Util.oidIntToHex = function(t3) {
            var e3 = function(t4) {
              var e4 = t4.toString(16);
              return 1 == e4.length && (e4 = "0" + e4), e4;
            }, i3 = function(t4) {
              var i4 = "", r3 = new B(t4, 10).toString(2), n3 = 7 - r3.length % 7;
              7 == n3 && (n3 = 0);
              for (var s3 = "", o3 = 0; o3 < n3; o3++)
                s3 += "0";
              for (r3 = s3 + r3, o3 = 0; o3 < r3.length - 1; o3 += 7) {
                var h2 = r3.substr(o3, 7);
                o3 != r3.length - 7 && (h2 = "1" + h2), i4 += e3(parseInt(h2, 2));
              }
              return i4;
            };
            if (!t3.match(/^[0-9.]+$/))
              throw "malformed oid string: " + t3;
            var r2 = "", n2 = t3.split("."), s2 = 40 * parseInt(n2[0]) + parseInt(n2[1]);
            r2 += e3(s2), n2.splice(0, 2);
            for (var o2 = 0; o2 < n2.length; o2++)
              r2 += i3(n2[o2]);
            return r2;
          }, tt.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
              if (void 0 === this.hV || null == this.hV)
                throw "this.hV is null or undefined.";
              if (this.hV.length % 2 == 1)
                throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
              var t3 = this.hV.length / 2, e3 = t3.toString(16);
              if (e3.length % 2 == 1 && (e3 = "0" + e3), t3 < 128)
                return e3;
              var i3 = e3.length / 2;
              if (i3 > 15)
                throw "ASN.1 length too long to represent by 8x: n = " + t3.toString(16);
              return (128 + i3).toString(16) + e3;
            }, this.getEncodedHex = function() {
              return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = false), this.hTLV;
            }, this.getValueHex = function() {
              return this.getEncodedHex(), this.hV;
            }, this.getFreshValueHex = function() {
              return "";
            };
          }, tt.asn1.DERAbstractString = function(t3) {
            tt.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
              return this.s;
            }, this.setString = function(t4) {
              this.hTLV = null, this.isModified = true, this.s = t4, this.hV = stohex(this.s);
            }, this.setStringHex = function(t4) {
              this.hTLV = null, this.isModified = true, this.s = null, this.hV = t4;
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && ("string" == typeof t3 ? this.setString(t3) : void 0 !== t3.str ? this.setString(t3.str) : void 0 !== t3.hex && this.setStringHex(t3.hex));
          }, W.lang.extend(tt.asn1.DERAbstractString, tt.asn1.ASN1Object), tt.asn1.DERAbstractTime = function(t3) {
            tt.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t4) {
              return utc = t4.getTime() + 6e4 * t4.getTimezoneOffset(), new Date(utc);
            }, this.formatDate = function(t4, e3, i3) {
              var r2 = this.zeroPadding, n2 = this.localDateToUTC(t4), s2 = String(n2.getFullYear());
              "utc" == e3 && (s2 = s2.substr(2, 2));
              var o2 = s2 + r2(String(n2.getMonth() + 1), 2) + r2(String(n2.getDate()), 2) + r2(String(n2.getHours()), 2) + r2(String(n2.getMinutes()), 2) + r2(String(n2.getSeconds()), 2);
              if (true === i3) {
                var h2 = n2.getMilliseconds();
                if (0 != h2) {
                  var a2 = r2(String(h2), 3);
                  o2 = o2 + "." + (a2 = a2.replace(/[0]+$/, ""));
                }
              }
              return o2 + "Z";
            }, this.zeroPadding = function(t4, e3) {
              return t4.length >= e3 ? t4 : new Array(e3 - t4.length + 1).join("0") + t4;
            }, this.getString = function() {
              return this.s;
            }, this.setString = function(t4) {
              this.hTLV = null, this.isModified = true, this.s = t4, this.hV = stohex(t4);
            }, this.setByDateValue = function(t4, e3, i3, r2, n2, s2) {
              var o2 = new Date(Date.UTC(t4, e3 - 1, i3, r2, n2, s2, 0));
              this.setByDate(o2);
            }, this.getFreshValueHex = function() {
              return this.hV;
            };
          }, W.lang.extend(tt.asn1.DERAbstractTime, tt.asn1.ASN1Object), tt.asn1.DERAbstractStructured = function(t3) {
            tt.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t4) {
              this.hTLV = null, this.isModified = true, this.asn1Array = t4;
            }, this.appendASN1Object = function(t4) {
              this.hTLV = null, this.isModified = true, this.asn1Array.push(t4);
            }, this.asn1Array = new Array(), void 0 !== t3 && void 0 !== t3.array && (this.asn1Array = t3.array);
          }, W.lang.extend(tt.asn1.DERAbstractStructured, tt.asn1.ASN1Object), tt.asn1.DERBoolean = function() {
            tt.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
          }, W.lang.extend(tt.asn1.DERBoolean, tt.asn1.ASN1Object), tt.asn1.DERInteger = function(t3) {
            tt.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t4) {
              this.hTLV = null, this.isModified = true, this.hV = tt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t4);
            }, this.setByInteger = function(t4) {
              var e3 = new B(String(t4), 10);
              this.setByBigInteger(e3);
            }, this.setValueHex = function(t4) {
              this.hV = t4;
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && (void 0 !== t3.bigint ? this.setByBigInteger(t3.bigint) : void 0 !== t3.int ? this.setByInteger(t3.int) : "number" == typeof t3 ? this.setByInteger(t3) : void 0 !== t3.hex && this.setValueHex(t3.hex));
          }, W.lang.extend(tt.asn1.DERInteger, tt.asn1.ASN1Object), tt.asn1.DERBitString = function(t3) {
            if (void 0 !== t3 && void 0 !== t3.obj) {
              var e3 = tt.asn1.ASN1Util.newObject(t3.obj);
              t3.hex = "00" + e3.getEncodedHex();
            }
            tt.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t4) {
              this.hTLV = null, this.isModified = true, this.hV = t4;
            }, this.setUnusedBitsAndHexValue = function(t4, e4) {
              if (t4 < 0 || 7 < t4)
                throw "unused bits shall be from 0 to 7: u = " + t4;
              var i3 = "0" + t4;
              this.hTLV = null, this.isModified = true, this.hV = i3 + e4;
            }, this.setByBinaryString = function(t4) {
              var e4 = 8 - (t4 = t4.replace(/0+$/, "")).length % 8;
              8 == e4 && (e4 = 0);
              for (var i3 = 0; i3 <= e4; i3++)
                t4 += "0";
              var r2 = "";
              for (i3 = 0; i3 < t4.length - 1; i3 += 8) {
                var n2 = t4.substr(i3, 8), s2 = parseInt(n2, 2).toString(16);
                1 == s2.length && (s2 = "0" + s2), r2 += s2;
              }
              this.hTLV = null, this.isModified = true, this.hV = "0" + e4 + r2;
            }, this.setByBooleanArray = function(t4) {
              for (var e4 = "", i3 = 0; i3 < t4.length; i3++)
                1 == t4[i3] ? e4 += "1" : e4 += "0";
              this.setByBinaryString(e4);
            }, this.newFalseArray = function(t4) {
              for (var e4 = new Array(t4), i3 = 0; i3 < t4; i3++)
                e4[i3] = false;
              return e4;
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && ("string" == typeof t3 && t3.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t3) : void 0 !== t3.hex ? this.setHexValueIncludingUnusedBits(t3.hex) : void 0 !== t3.bin ? this.setByBinaryString(t3.bin) : void 0 !== t3.array && this.setByBooleanArray(t3.array));
          }, W.lang.extend(tt.asn1.DERBitString, tt.asn1.ASN1Object), tt.asn1.DEROctetString = function(t3) {
            if (void 0 !== t3 && void 0 !== t3.obj) {
              var e3 = tt.asn1.ASN1Util.newObject(t3.obj);
              t3.hex = e3.getEncodedHex();
            }
            tt.asn1.DEROctetString.superclass.constructor.call(this, t3), this.hT = "04";
          }, W.lang.extend(tt.asn1.DEROctetString, tt.asn1.DERAbstractString), tt.asn1.DERNull = function() {
            tt.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
          }, W.lang.extend(tt.asn1.DERNull, tt.asn1.ASN1Object), tt.asn1.DERObjectIdentifier = function(t3) {
            var e3 = function(t4) {
              var e4 = t4.toString(16);
              return 1 == e4.length && (e4 = "0" + e4), e4;
            }, i3 = function(t4) {
              var i4 = "", r2 = new B(t4, 10).toString(2), n2 = 7 - r2.length % 7;
              7 == n2 && (n2 = 0);
              for (var s2 = "", o2 = 0; o2 < n2; o2++)
                s2 += "0";
              for (r2 = s2 + r2, o2 = 0; o2 < r2.length - 1; o2 += 7) {
                var h2 = r2.substr(o2, 7);
                o2 != r2.length - 7 && (h2 = "1" + h2), i4 += e3(parseInt(h2, 2));
              }
              return i4;
            };
            tt.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t4) {
              this.hTLV = null, this.isModified = true, this.s = null, this.hV = t4;
            }, this.setValueOidString = function(t4) {
              if (!t4.match(/^[0-9.]+$/))
                throw "malformed oid string: " + t4;
              var r2 = "", n2 = t4.split("."), s2 = 40 * parseInt(n2[0]) + parseInt(n2[1]);
              r2 += e3(s2), n2.splice(0, 2);
              for (var o2 = 0; o2 < n2.length; o2++)
                r2 += i3(n2[o2]);
              this.hTLV = null, this.isModified = true, this.s = null, this.hV = r2;
            }, this.setValueName = function(t4) {
              var e4 = tt.asn1.x509.OID.name2oid(t4);
              if ("" === e4)
                throw "DERObjectIdentifier oidName undefined: " + t4;
              this.setValueOidString(e4);
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && ("string" == typeof t3 ? t3.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t3) : this.setValueName(t3) : void 0 !== t3.oid ? this.setValueOidString(t3.oid) : void 0 !== t3.hex ? this.setValueHex(t3.hex) : void 0 !== t3.name && this.setValueName(t3.name));
          }, W.lang.extend(tt.asn1.DERObjectIdentifier, tt.asn1.ASN1Object), tt.asn1.DEREnumerated = function(t3) {
            tt.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t4) {
              this.hTLV = null, this.isModified = true, this.hV = tt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t4);
            }, this.setByInteger = function(t4) {
              var e3 = new B(String(t4), 10);
              this.setByBigInteger(e3);
            }, this.setValueHex = function(t4) {
              this.hV = t4;
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && (void 0 !== t3.int ? this.setByInteger(t3.int) : "number" == typeof t3 ? this.setByInteger(t3) : void 0 !== t3.hex && this.setValueHex(t3.hex));
          }, W.lang.extend(tt.asn1.DEREnumerated, tt.asn1.ASN1Object), tt.asn1.DERUTF8String = function(t3) {
            tt.asn1.DERUTF8String.superclass.constructor.call(this, t3), this.hT = "0c";
          }, W.lang.extend(tt.asn1.DERUTF8String, tt.asn1.DERAbstractString), tt.asn1.DERNumericString = function(t3) {
            tt.asn1.DERNumericString.superclass.constructor.call(this, t3), this.hT = "12";
          }, W.lang.extend(tt.asn1.DERNumericString, tt.asn1.DERAbstractString), tt.asn1.DERPrintableString = function(t3) {
            tt.asn1.DERPrintableString.superclass.constructor.call(this, t3), this.hT = "13";
          }, W.lang.extend(tt.asn1.DERPrintableString, tt.asn1.DERAbstractString), tt.asn1.DERTeletexString = function(t3) {
            tt.asn1.DERTeletexString.superclass.constructor.call(this, t3), this.hT = "14";
          }, W.lang.extend(tt.asn1.DERTeletexString, tt.asn1.DERAbstractString), tt.asn1.DERIA5String = function(t3) {
            tt.asn1.DERIA5String.superclass.constructor.call(this, t3), this.hT = "16";
          }, W.lang.extend(tt.asn1.DERIA5String, tt.asn1.DERAbstractString), tt.asn1.DERUTCTime = function(t3) {
            tt.asn1.DERUTCTime.superclass.constructor.call(this, t3), this.hT = "17", this.setByDate = function(t4) {
              this.hTLV = null, this.isModified = true, this.date = t4, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
            }, this.getFreshValueHex = function() {
              return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
            }, void 0 !== t3 && (void 0 !== t3.str ? this.setString(t3.str) : "string" == typeof t3 && t3.match(/^[0-9]{12}Z$/) ? this.setString(t3) : void 0 !== t3.hex ? this.setStringHex(t3.hex) : void 0 !== t3.date && this.setByDate(t3.date));
          }, W.lang.extend(tt.asn1.DERUTCTime, tt.asn1.DERAbstractTime), tt.asn1.DERGeneralizedTime = function(t3) {
            tt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t3), this.hT = "18", this.withMillis = false, this.setByDate = function(t4) {
              this.hTLV = null, this.isModified = true, this.date = t4, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
            }, this.getFreshValueHex = function() {
              return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
            }, void 0 !== t3 && (void 0 !== t3.str ? this.setString(t3.str) : "string" == typeof t3 && t3.match(/^[0-9]{14}Z$/) ? this.setString(t3) : void 0 !== t3.hex ? this.setStringHex(t3.hex) : void 0 !== t3.date && this.setByDate(t3.date), true === t3.millis && (this.withMillis = true));
          }, W.lang.extend(tt.asn1.DERGeneralizedTime, tt.asn1.DERAbstractTime), tt.asn1.DERSequence = function(t3) {
            tt.asn1.DERSequence.superclass.constructor.call(this, t3), this.hT = "30", this.getFreshValueHex = function() {
              for (var t4 = "", e3 = 0; e3 < this.asn1Array.length; e3++)
                t4 += this.asn1Array[e3].getEncodedHex();
              return this.hV = t4, this.hV;
            };
          }, W.lang.extend(tt.asn1.DERSequence, tt.asn1.DERAbstractStructured), tt.asn1.DERSet = function(t3) {
            tt.asn1.DERSet.superclass.constructor.call(this, t3), this.hT = "31", this.sortFlag = true, this.getFreshValueHex = function() {
              for (var t4 = new Array(), e3 = 0; e3 < this.asn1Array.length; e3++) {
                var i3 = this.asn1Array[e3];
                t4.push(i3.getEncodedHex());
              }
              return 1 == this.sortFlag && t4.sort(), this.hV = t4.join(""), this.hV;
            }, void 0 !== t3 && void 0 !== t3.sortflag && 0 == t3.sortflag && (this.sortFlag = false);
          }, W.lang.extend(tt.asn1.DERSet, tt.asn1.DERAbstractStructured), tt.asn1.DERTaggedObject = function(t3) {
            tt.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = true, this.asn1Object = null, this.setASN1Object = function(t4, e3, i3) {
              this.hT = e3, this.isExplicit = t4, this.asn1Object = i3, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = true) : (this.hV = null, this.hTLV = i3.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e3), this.isModified = false);
            }, this.getFreshValueHex = function() {
              return this.hV;
            }, void 0 !== t3 && (void 0 !== t3.tag && (this.hT = t3.tag), void 0 !== t3.explicit && (this.isExplicit = t3.explicit), void 0 !== t3.obj && (this.asn1Object = t3.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
          }, W.lang.extend(tt.asn1.DERTaggedObject, tt.asn1.ASN1Object);
          var et, it = (et = function(t3, e3) {
            return (et = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
              t4.__proto__ = e4;
            } || function(t4, e4) {
              for (var i3 in e4)
                Object.prototype.hasOwnProperty.call(e4, i3) && (t4[i3] = e4[i3]);
            })(t3, e3);
          }, function(t3, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
            function i3() {
              this.constructor = t3;
            }
            et(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (i3.prototype = e3.prototype, new i3());
          }), rt = function(t3) {
            function e3(i3) {
              var r2 = t3.call(this) || this;
              return i3 && ("string" == typeof i3 ? r2.parseKey(i3) : (e3.hasPrivateKeyProperty(i3) || e3.hasPublicKeyProperty(i3)) && r2.parsePropertiesFrom(i3)), r2;
            }
            return it(e3, t3), e3.prototype.parseKey = function(t4) {
              try {
                var e4 = 0, i3 = 0, r2 = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t4) ? function(t5) {
                  var e5;
                  if (void 0 === c) {
                    var i4 = "0123456789ABCDEF", r3 = " \f\n\r	\xA0\u2028\u2029";
                    for (c = {}, e5 = 0; e5 < 16; ++e5)
                      c[i4.charAt(e5)] = e5;
                    for (i4 = i4.toLowerCase(), e5 = 10; e5 < 16; ++e5)
                      c[i4.charAt(e5)] = e5;
                    for (e5 = 0; e5 < r3.length; ++e5)
                      c[r3.charAt(e5)] = -1;
                  }
                  var n3 = [], s3 = 0, o3 = 0;
                  for (e5 = 0; e5 < t5.length; ++e5) {
                    var h3 = t5.charAt(e5);
                    if ("=" == h3)
                      break;
                    if (-1 != (h3 = c[h3])) {
                      if (void 0 === h3)
                        throw new Error("Illegal character at offset " + e5);
                      s3 |= h3, ++o3 >= 2 ? (n3[n3.length] = s3, s3 = 0, o3 = 0) : s3 <<= 4;
                    }
                  }
                  if (o3)
                    throw new Error("Hex encoding incomplete: 4 bits missing");
                  return n3;
                }(t4) : d.unarmor(t4), n2 = w.decode(r2);
                if (3 === n2.sub.length && (n2 = n2.sub[2].sub[0]), 9 === n2.sub.length) {
                  e4 = n2.sub[1].getHexStringValue(), this.n = P(e4, 16), i3 = n2.sub[2].getHexStringValue(), this.e = parseInt(i3, 16);
                  var s2 = n2.sub[3].getHexStringValue();
                  this.d = P(s2, 16);
                  var o2 = n2.sub[4].getHexStringValue();
                  this.p = P(o2, 16);
                  var h2 = n2.sub[5].getHexStringValue();
                  this.q = P(h2, 16);
                  var a2 = n2.sub[6].getHexStringValue();
                  this.dmp1 = P(a2, 16);
                  var u2 = n2.sub[7].getHexStringValue();
                  this.dmq1 = P(u2, 16);
                  var f2 = n2.sub[8].getHexStringValue();
                  this.coeff = P(f2, 16);
                } else {
                  if (2 !== n2.sub.length)
                    return false;
                  var l2 = n2.sub[1].sub[0];
                  e4 = l2.sub[0].getHexStringValue(), this.n = P(e4, 16), i3 = l2.sub[1].getHexStringValue(), this.e = parseInt(i3, 16);
                }
                return true;
              } catch (t5) {
                return false;
              }
            }, e3.prototype.getPrivateBaseKey = function() {
              var t4 = { array: [new tt.asn1.DERInteger({ int: 0 }), new tt.asn1.DERInteger({ bigint: this.n }), new tt.asn1.DERInteger({ int: this.e }), new tt.asn1.DERInteger({ bigint: this.d }), new tt.asn1.DERInteger({ bigint: this.p }), new tt.asn1.DERInteger({ bigint: this.q }), new tt.asn1.DERInteger({ bigint: this.dmp1 }), new tt.asn1.DERInteger({ bigint: this.dmq1 }), new tt.asn1.DERInteger({ bigint: this.coeff })] };
              return new tt.asn1.DERSequence(t4).getEncodedHex();
            }, e3.prototype.getPrivateBaseKeyB64 = function() {
              return l(this.getPrivateBaseKey());
            }, e3.prototype.getPublicBaseKey = function() {
              var t4 = new tt.asn1.DERSequence({ array: [new tt.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new tt.asn1.DERNull()] }), e4 = new tt.asn1.DERSequence({ array: [new tt.asn1.DERInteger({ bigint: this.n }), new tt.asn1.DERInteger({ int: this.e })] }), i3 = new tt.asn1.DERBitString({ hex: "00" + e4.getEncodedHex() });
              return new tt.asn1.DERSequence({ array: [t4, i3] }).getEncodedHex();
            }, e3.prototype.getPublicBaseKeyB64 = function() {
              return l(this.getPublicBaseKey());
            }, e3.wordwrap = function(t4, e4) {
              if (!t4)
                return t4;
              var i3 = "(.{1," + (e4 = e4 || 64) + "})( +|$\n?)|(.{1," + e4 + "})";
              return t4.match(RegExp(i3, "g")).join("\n");
            }, e3.prototype.getPrivateKey = function() {
              var t4 = "-----BEGIN RSA PRIVATE KEY-----\n";
              return (t4 += e3.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----";
            }, e3.prototype.getPublicKey = function() {
              var t4 = "-----BEGIN PUBLIC KEY-----\n";
              return (t4 += e3.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----";
            }, e3.hasPublicKeyProperty = function(t4) {
              return (t4 = t4 || {}).hasOwnProperty("n") && t4.hasOwnProperty("e");
            }, e3.hasPrivateKeyProperty = function(t4) {
              return (t4 = t4 || {}).hasOwnProperty("n") && t4.hasOwnProperty("e") && t4.hasOwnProperty("d") && t4.hasOwnProperty("p") && t4.hasOwnProperty("q") && t4.hasOwnProperty("dmp1") && t4.hasOwnProperty("dmq1") && t4.hasOwnProperty("coeff");
            }, e3.prototype.parsePropertiesFrom = function(t4) {
              this.n = t4.n, this.e = t4.e, t4.hasOwnProperty("d") && (this.d = t4.d, this.p = t4.p, this.q = t4.q, this.dmp1 = t4.dmp1, this.dmq1 = t4.dmq1, this.coeff = t4.coeff);
            }, e3;
          }(X);
          const nt = function() {
            function t3(t4) {
              void 0 === t4 && (t4 = {}), t4 = t4 || {}, this.default_key_size = t4.default_key_size ? parseInt(t4.default_key_size, 10) : 1024, this.default_public_exponent = t4.default_public_exponent || "010001", this.log = t4.log || false, this.key = null;
            }
            return t3.prototype.setKey = function(t4) {
              this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new rt(t4);
            }, t3.prototype.setPrivateKey = function(t4) {
              this.setKey(t4);
            }, t3.prototype.setPublicKey = function(t4) {
              this.setKey(t4);
            }, t3.prototype.decrypt = function(t4) {
              try {
                return this.getKey().decrypt(p(t4));
              } catch (t5) {
                return false;
              }
            }, t3.prototype.encrypt = function(t4) {
              try {
                return l(this.getKey().encrypt(t4));
              } catch (t5) {
                return false;
              }
            }, t3.prototype.sign = function(t4, e3, i3) {
              try {
                return l(this.getKey().sign(t4, e3, i3));
              } catch (t5) {
                return false;
              }
            }, t3.prototype.verify = function(t4, e3, i3) {
              try {
                return this.getKey().verify(t4, p(e3), i3);
              } catch (t5) {
                return false;
              }
            }, t3.prototype.getKey = function(t4) {
              if (!this.key) {
                if (this.key = new rt(), t4 && "[object Function]" === {}.toString.call(t4))
                  return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t4);
                this.key.generate(this.default_key_size, this.default_public_exponent);
              }
              return this.key;
            }, t3.prototype.getPrivateKey = function() {
              return this.getKey().getPrivateKey();
            }, t3.prototype.getPrivateKeyB64 = function() {
              return this.getKey().getPrivateBaseKeyB64();
            }, t3.prototype.getPublicKey = function() {
              return this.getKey().getPublicKey();
            }, t3.prototype.getPublicKeyB64 = function() {
              return this.getKey().getPublicBaseKeyB64();
            }, t3.version = "3.2.1", t3;
          }();
        }], e = { d: (t2, i2) => {
          for (var r in i2)
            e.o(i2, r) && !e.o(t2, r) && Object.defineProperty(t2, r, { enumerable: true, get: i2[r] });
        }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2) }, i = {};
        return t[1](0, i, e), i.default;
      })();
    });
  }
});

// dep:jsencrypt_bin_jsencrypt_min
var jsencrypt_bin_jsencrypt_min_default = require_jsencrypt_min();
export {
  jsencrypt_bin_jsencrypt_min_default as default
};
/*! For license information please see jsencrypt.min.js.LICENSE.txt */
//# sourceMappingURL=jsencrypt_bin_jsencrypt_min.js.map
