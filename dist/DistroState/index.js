function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Manages distrubted state using bound setter/getter methods:
var DistroState = /*#__PURE__*/function () {
  // CONSTRUCTOR :: {STRING:*}|VOID, {STRING:{get:VOID->*, set:*->VOID}}|VOID -> this
  function DistroState(shared, states) {
    _classCallCheck(this, DistroState);
    this.shared = shared !== null && shared !== void 0 ? shared : {}; // Stores state shared between all registered binding
    this.states = states !== null && states !== void 0 ? states : {}; // Stores all bindings that manage shared state
  }

  /**
   * 
   *  Instance Methods 
   * 
   */

  // :: STRING, [* -> VOID|*, VOID -> *] -> this
  // Binds setter/getter methods to shared state using given ID
  return _createClass(DistroState, [{
    key: "register",
    value: function register(id, _ref) {
      var _this = this;
      var _ref2 = _slicedToArray(_ref, 2),
        get = _ref2[0],
        set = _ref2[1];
      this.shared[id] = get instanceof Function ? get() : get;
      this.states[id] = function (value) {
        _this.shared[id] = value;
        set(value);
      };
      return this;
    }

    // :: STRING -> this
    // Removes setter/getter methods by bound ID
    // NOTE: Since shared state is intended to be indepenent of any binding, shared state is not mutated when unregistering bound methods
  }, {
    key: "unregister",
    value: function unregister(id) {
      if (this.states[id]) {
        delete this.states[id];
      }
      return this;
    }

    // :: STRING, * -> this
    // Sets value of bound setter:
    // NOTE: Setting value also update shared state as well:
    // NOTE: If no setter is bound to the given property of state - we update shared state directly
  }, {
    key: "set",
    value: function set(id, value) {
      if (this.states[id] !== undefined) {
        this.states[id](value);
      } else {
        this.shared[id] = value;
      }
      return this;
    }

    // :: STIRNG -> *|VOID
    // Returns value of bound getter:
  }, {
    key: "get",
    value: function get(id) {
      return this.shared[id];
    }

    /**
     * 
     *  Static Methods 
     * 
     */

    // Static Factory Method ::  {STRING:*}|VOID, {STRING:{get:VOID->*, set:*->VOID}}|VOID -> distroState
  }], [{
    key: "init",
    value: function init(shared, states) {
      return new DistroState(shared, states);
    }
  }]);
}();
export { DistroState as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEaXN0cm9TdGF0ZSIsInNoYXJlZCIsInN0YXRlcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVnaXN0ZXIiLCJpZCIsIl9yZWYiLCJfdGhpcyIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJnZXQiLCJzZXQiLCJGdW5jdGlvbiIsInVucmVnaXN0ZXIiLCJ1bmRlZmluZWQiLCJpbml0IiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaXN0cm9TdGF0ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYW5hZ2VzIGRpc3RydWJ0ZWQgc3RhdGUgdXNpbmcgYm91bmQgc2V0dGVyL2dldHRlciBtZXRob2RzOlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzdHJvU3RhdGUge1xuXG4gICAgLy8gQ09OU1RSVUNUT1IgOjoge1NUUklORzoqfXxWT0lELCB7U1RSSU5HOntnZXQ6Vk9JRC0+Kiwgc2V0OiotPlZPSUR9fXxWT0lEIC0+IHRoaXNcbiAgICBjb25zdHJ1Y3RvcihzaGFyZWQsIHN0YXRlcykge1xuICAgICAgICB0aGlzLnNoYXJlZCA9IHNoYXJlZCA/PyB7fTsgLy8gU3RvcmVzIHN0YXRlIHNoYXJlZCBiZXR3ZWVuIGFsbCByZWdpc3RlcmVkIGJpbmRpbmdcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBzdGF0ZXMgPz8ge307IC8vIFN0b3JlcyBhbGwgYmluZGluZ3MgdGhhdCBtYW5hZ2Ugc2hhcmVkIHN0YXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIEluc3RhbmNlIE1ldGhvZHMgXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyA6OiBTVFJJTkcsIFsqIC0+IFZPSUR8KiwgVk9JRCAtPiAqXSAtPiB0aGlzXG4gICAgLy8gQmluZHMgc2V0dGVyL2dldHRlciBtZXRob2RzIHRvIHNoYXJlZCBzdGF0ZSB1c2luZyBnaXZlbiBJRFxuICAgIHJlZ2lzdGVyKGlkLCBbZ2V0LCBzZXRdKSB7XG4gICAgICAgIHRoaXMuc2hhcmVkW2lkXSA9IGdldCBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gZ2V0KCkgOiBnZXRcbiAgICAgICAgdGhpcy5zdGF0ZXNbaWRdID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNoYXJlZFtpZF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gOjogU1RSSU5HIC0+IHRoaXNcbiAgICAvLyBSZW1vdmVzIHNldHRlci9nZXR0ZXIgbWV0aG9kcyBieSBib3VuZCBJRFxuICAgIC8vIE5PVEU6IFNpbmNlIHNoYXJlZCBzdGF0ZSBpcyBpbnRlbmRlZCB0byBiZSBpbmRlcGVuZW50IG9mIGFueSBiaW5kaW5nLCBzaGFyZWQgc3RhdGUgaXMgbm90IG11dGF0ZWQgd2hlbiB1bnJlZ2lzdGVyaW5nIGJvdW5kIG1ldGhvZHNcbiAgICB1bnJlZ2lzdGVyKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlc1tpZF0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlc1tpZF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gOjogU1RSSU5HLCAqIC0+IHRoaXNcbiAgICAvLyBTZXRzIHZhbHVlIG9mIGJvdW5kIHNldHRlcjpcbiAgICAvLyBOT1RFOiBTZXR0aW5nIHZhbHVlIGFsc28gdXBkYXRlIHNoYXJlZCBzdGF0ZSBhcyB3ZWxsOlxuICAgIC8vIE5PVEU6IElmIG5vIHNldHRlciBpcyBib3VuZCB0byB0aGUgZ2l2ZW4gcHJvcGVydHkgb2Ygc3RhdGUgLSB3ZSB1cGRhdGUgc2hhcmVkIHN0YXRlIGRpcmVjdGx5XG4gICAgc2V0KGlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZXNbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW2lkXSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNoYXJlZFtpZF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyA6OiBTVElSTkcgLT4gKnxWT0lEXG4gICAgLy8gUmV0dXJucyB2YWx1ZSBvZiBib3VuZCBnZXR0ZXI6XG4gICAgZ2V0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYXJlZFtpZF07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBTdGF0aWMgTWV0aG9kcyBcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vIFN0YXRpYyBGYWN0b3J5IE1ldGhvZCA6OiAge1NUUklORzoqfXxWT0lELCB7U1RSSU5HOntnZXQ6Vk9JRC0+Kiwgc2V0OiotPlZPSUR9fXxWT0lEIC0+IGRpc3Ryb1N0YXRlXG4gICAgc3RhdGljIGluaXQoc2hhcmVkLCBzdGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaXN0cm9TdGF0ZShzaGFyZWQsIHN0YXRlcyk7XG4gICAgfVxuXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQ3FCQSxXQUFXO0VBRTVCO0VBQ0EsU0FBQUEsWUFBWUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxXQUFBO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLGFBQU5BLE1BQU0sY0FBTkEsTUFBTSxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU0sYUFBTkEsTUFBTSxjQUFOQSxNQUFNLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQzs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztFQUVJO0VBQ0E7RUFBQSxPQUFBRSxZQUFBLENBQUFKLFdBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQUMsU0FBU0MsRUFBRSxFQUFBQyxJQUFBLEVBQWM7TUFBQSxJQUFBQyxLQUFBO01BQUEsSUFBQUMsS0FBQSxHQUFBQyxjQUFBLENBQUFILElBQUE7UUFBWEksR0FBRyxHQUFBRixLQUFBO1FBQUVHLEdBQUcsR0FBQUgsS0FBQTtNQUNsQixJQUFJLENBQUNWLE1BQU0sQ0FBQ08sRUFBRSxDQUFDLEdBQUdLLEdBQUcsWUFBWUUsUUFBUSxHQUFHRixHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFHO01BQ3ZELElBQUksQ0FBQ1gsTUFBTSxDQUFDTSxFQUFFLENBQUMsR0FBRyxVQUFDRixLQUFLLEVBQUs7UUFDekJJLEtBQUksQ0FBQ1QsTUFBTSxDQUFDTyxFQUFFLENBQUMsR0FBR0YsS0FBSztRQUN2QlEsR0FBRyxDQUFDUixLQUFLLENBQUM7TUFDZCxDQUFDO01BQ0QsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7SUFDQTtJQUNBO0VBQUE7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQVUsV0FBV1IsRUFBRSxFQUFFO01BQ1gsSUFBSSxJQUFJLENBQUNOLE1BQU0sQ0FBQ00sRUFBRSxDQUFDLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUNOLE1BQU0sQ0FBQ00sRUFBRSxDQUFDO01BQzFCO01BQ0EsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7RUFBQTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBUSxJQUFJTixFQUFFLEVBQUVGLEtBQUssRUFBRTtNQUNYLElBQUksSUFBSSxDQUFDSixNQUFNLENBQUNNLEVBQUUsQ0FBQyxLQUFLUyxTQUFTLEVBQUU7UUFDL0IsSUFBSSxDQUFDZixNQUFNLENBQUNNLEVBQUUsQ0FBQyxDQUFDRixLQUFLLENBQUM7TUFDMUIsQ0FBQyxNQUFNO1FBQ0gsSUFBSSxDQUFDTCxNQUFNLENBQUNPLEVBQUUsQ0FBQyxHQUFHRixLQUFLO01BQzNCO01BQ0EsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7SUFDQTtFQUFBO0lBQUFELEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFPLElBQUlMLEVBQUUsRUFBRTtNQUNKLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNPLEVBQUUsQ0FBQztJQUMxQjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztJQUVJO0VBQUE7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQVksS0FBWWpCLE1BQU0sRUFBRUMsTUFBTSxFQUFFO01BQ3hCLE9BQU8sSUFBSUYsV0FBVyxDQUFDQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQztJQUMxQztFQUFDO0FBQUE7QUFBQSxTQS9EZ0JGLFdBQVcsSUFBQW1CLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=