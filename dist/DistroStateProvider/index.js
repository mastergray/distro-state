function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { createContext, useContext, useEffect, useState } from 'react';
import DistroState from '../DistroState';

// Create a context for the DistroState
var DistroStateContext = /*#__PURE__*/createContext(null);

// Provider in your app's component tree
export default function DistroStateProvider(props) {
  var distroState = new DistroState(props.state);
  return /*#__PURE__*/React.createElement(DistroStateContext.Provider, {
    value: distroState
  }, props.children);
}
;

// HOOK :: VOID -> distroState
// Custom hook for accessing shared distroState instance:
export var useDistroState = function useDistroState() {
  return useContext(DistroStateContext);
};

// HOOK :: STRING -> distroState
// Handlers registering and unregistering state handlers bound to shared distroState instance:
export var useDistroStateRegistry = function useDistroStateRegistry(id) {
  // Get shared distoState from context and initialize state handlers using shared state
  var distroState = useContext(DistroStateContext);
  var initValue = distroState.get(id);
  var _useState = useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    get = _useState2[0],
    set = _useState2[1];

  // This manages when to register/ungister state bindings whenever component is mounted/unmounted:
  useEffect(function () {
    // Regiseter state handlers once component is rendered:
    distroState.register(id, [get, set]);

    // Unreigster handler when component is unmounted:
    return function () {
      return distroState.unregister(id);
    };
  }, [distroState, id, get, set]);

  // Return distroState instance in case we need it for something after we register state handlers:
  return distroState;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEaXN0cm9TdGF0ZSIsIkRpc3Ryb1N0YXRlQ29udGV4dCIsIkRpc3Ryb1N0YXRlUHJvdmlkZXIiLCJwcm9wcyIsImRpc3Ryb1N0YXRlIiwic3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwidXNlRGlzdHJvU3RhdGUiLCJ1c2VEaXN0cm9TdGF0ZVJlZ2lzdHJ5IiwiaWQiLCJpbml0VmFsdWUiLCJnZXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXQiLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvRGlzdHJvU3RhdGVQcm92aWRlci9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlzdHJvU3RhdGUgZnJvbSAnLi4vRGlzdHJvU3RhdGUnO1xuXG4vLyBDcmVhdGUgYSBjb250ZXh0IGZvciB0aGUgRGlzdHJvU3RhdGVcbmNvbnN0IERpc3Ryb1N0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIFByb3ZpZGVyIGluIHlvdXIgYXBwJ3MgY29tcG9uZW50IHRyZWVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc3Ryb1N0YXRlUHJvdmlkZXIgKHByb3BzKSB7XG4gIFxuICAgIGNvbnN0IGRpc3Ryb1N0YXRlID0gbmV3IERpc3Ryb1N0YXRlKHByb3BzLnN0YXRlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEaXN0cm9TdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3Ryb1N0YXRlfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9EaXN0cm9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbi8vIEhPT0sgOjogVk9JRCAtPiBkaXN0cm9TdGF0ZVxuLy8gQ3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyBzaGFyZWQgZGlzdHJvU3RhdGUgaW5zdGFuY2U6XG5leHBvcnQgY29uc3QgdXNlRGlzdHJvU3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoRGlzdHJvU3RhdGVDb250ZXh0KTtcbn1cblxuLy8gSE9PSyA6OiBTVFJJTkcgLT4gZGlzdHJvU3RhdGVcbi8vIEhhbmRsZXJzIHJlZ2lzdGVyaW5nIGFuZCB1bnJlZ2lzdGVyaW5nIHN0YXRlIGhhbmRsZXJzIGJvdW5kIHRvIHNoYXJlZCBkaXN0cm9TdGF0ZSBpbnN0YW5jZTpcbmV4cG9ydCBjb25zdCB1c2VEaXN0cm9TdGF0ZVJlZ2lzdHJ5ID0gKGlkKSA9PiB7XG5cbiAgICAvLyBHZXQgc2hhcmVkIGRpc3RvU3RhdGUgZnJvbSBjb250ZXh0IGFuZCBpbml0aWFsaXplIHN0YXRlIGhhbmRsZXJzIHVzaW5nIHNoYXJlZCBzdGF0ZVxuICAgIGNvbnN0IGRpc3Ryb1N0YXRlID0gIHVzZUNvbnRleHQoRGlzdHJvU3RhdGVDb250ZXh0KTtcbiAgICBjb25zdCBpbml0VmFsdWUgPSBkaXN0cm9TdGF0ZS5nZXQoaWQpO1xuICAgIGNvbnN0IFtnZXQsIHNldF0gPSB1c2VTdGF0ZShpbml0VmFsdWUpXG5cbiAgICAvLyBUaGlzIG1hbmFnZXMgd2hlbiB0byByZWdpc3Rlci91bmdpc3RlciBzdGF0ZSBiaW5kaW5ncyB3aGVuZXZlciBjb21wb25lbnQgaXMgbW91bnRlZC91bm1vdW50ZWQ6XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICAvLyBSZWdpc2V0ZXIgc3RhdGUgaGFuZGxlcnMgb25jZSBjb21wb25lbnQgaXMgcmVuZGVyZWQ6XG4gICAgICAgIGRpc3Ryb1N0YXRlLnJlZ2lzdGVyKGlkLFtnZXQsc2V0XSk7XG4gICAgICAgIFxuICAgICAgICAvLyBVbnJlaWdzdGVyIGhhbmRsZXIgd2hlbiBjb21wb25lbnQgaXMgdW5tb3VudGVkOlxuICAgICAgICByZXR1cm4gKCkgPT4gZGlzdHJvU3RhdGUudW5yZWdpc3RlcihpZCk7XG5cbiAgICB9LCBbZGlzdHJvU3RhdGUsIGlkLCBnZXQsIHNldF0pO1xuXG4gICAgLy8gUmV0dXJuIGRpc3Ryb1N0YXRlIGluc3RhbmNlIGluIGNhc2Ugd2UgbmVlZCBpdCBmb3Igc29tZXRoaW5nIGFmdGVyIHdlIHJlZ2lzdGVyIHN0YXRlIGhhbmRsZXJzOlxuICAgIHJldHVybiBkaXN0cm9TdGF0ZTtcblxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFLLElBQUlDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxPQUFPO0FBQzdFLE9BQU9DLFdBQVcsTUFBTSxnQkFBZ0I7O0FBRXhDO0FBQ0EsSUFBTUMsa0JBQWtCLGdCQUFHTCxhQUFhLENBQUMsSUFBSSxDQUFDOztBQUU5QztBQUNBLGVBQWUsU0FBU00sbUJBQW1CQSxDQUFFQyxLQUFLLEVBQUU7RUFFaEQsSUFBTUMsV0FBVyxHQUFHLElBQUlKLFdBQVcsQ0FBQ0csS0FBSyxDQUFDRSxLQUFLLENBQUM7RUFFaEQsb0JBQ0lWLEtBQUEsQ0FBQVcsYUFBQSxDQUFDTCxrQkFBa0IsQ0FBQ00sUUFBUTtJQUFDQyxLQUFLLEVBQUVKO0VBQVksR0FDM0NELEtBQUssQ0FBQ00sUUFDa0IsQ0FBQztBQUV0QztBQUFDOztBQUVEO0FBQ0E7QUFDQSxPQUFPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLE9BQU9iLFVBQVUsQ0FBQ0ksa0JBQWtCLENBQUM7QUFDekMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsT0FBTyxJQUFNVSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFJQyxFQUFFLEVBQUs7RUFFMUM7RUFDQSxJQUFNUixXQUFXLEdBQUlQLFVBQVUsQ0FBQ0ksa0JBQWtCLENBQUM7RUFDbkQsSUFBTVksU0FBUyxHQUFHVCxXQUFXLENBQUNVLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDO0VBQ3JDLElBQUFHLFNBQUEsR0FBbUJoQixRQUFRLENBQUNjLFNBQVMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkQsR0FBRyxHQUFBRSxVQUFBO0lBQUVFLEdBQUcsR0FBQUYsVUFBQTs7RUFFZjtFQUNBbEIsU0FBUyxDQUFDLFlBQU07SUFFWjtJQUNBTSxXQUFXLENBQUNlLFFBQVEsQ0FBQ1AsRUFBRSxFQUFDLENBQUNFLEdBQUcsRUFBQ0ksR0FBRyxDQUFDLENBQUM7O0lBRWxDO0lBQ0EsT0FBTztNQUFBLE9BQU1kLFdBQVcsQ0FBQ2dCLFVBQVUsQ0FBQ1IsRUFBRSxDQUFDO0lBQUE7RUFFM0MsQ0FBQyxFQUFFLENBQUNSLFdBQVcsRUFBRVEsRUFBRSxFQUFFRSxHQUFHLEVBQUVJLEdBQUcsQ0FBQyxDQUFDOztFQUUvQjtFQUNBLE9BQU9kLFdBQVc7QUFFdEIsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==