webpackHotUpdate_N_E("pages/form",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Bienes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Bienes */ "./Bienes.js");




var _jsxFileName = "C:\\Users\\Janyel\\Desktop\\proyect\\pages\\form.js",
    _this = undefined,
    _s2 = $RefreshSig$();





var Form = function Form() {
  _s2();

  var _s = $RefreshSig$();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var date = new Date();
  var el = _Bienes__WEBPACK_IMPORTED_MODULE_5__["houses"].find(function (el) {
    return el.id === router.query.id;
  });
  var selected;
  var radioSelected;
  var hour = 9;
  var radioValues = ["Video Chat", "Presencial"];

  var regisAppointment = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, result;
      return C_Users_Janyel_Desktop_proyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/register", {
                body: JSON.stringify({
                  id: el.id,
                  date: selected,
                  type: radioSelected,
                  hour: hour
                }),
                headers: {
                  ContentType: "application/json"
                },
                method: "POST"
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              result = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function regisAppointment(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var groupDays = function groupDays(date, numberOfDays) {
    _s();

    var days = [];

    var useDate = function useDate(date) {
      var str = date.toUTCString();
      var weekDay = str.split(",")[0],
          day = str.split(" ")[1],
          mounth = str.split(" ")[2],
          year = str.split(" ")[3],
          id = new Date(day + mounth + year).valueOf();
      return {
        weekDay: weekDay,
        day: day,
        mounth: mounth,
        year: year,
        id: id
      };
    };

    for (var day = 0; day < numberOfDays; day++) {
      days.push(useDate(new Date(date.valueOf() + day * 86.4 * Math.pow(10, 6))));
    }

    return days;
  };

  _s(groupDays, "7RuHMJrKLZdC5RQHFLghGMbz5eI=", true);

  var calendarClick = function calendarClick(e) {
    var el = e.target;

    var apparence = function apparence() {
      var obj = document.getElementById("".concat(selected));
      var props = ["bg-light", "bg-primary", "text-light"];
      props.forEach(function (prop) {
        obj.firstChild.classList.toggle(prop);
      });
    };

    selected && apparence();

    while (true) {
      if (el.id) {
        break;
      }

      el = el.parentNode;
    }

    selected = el.id;
    apparence();
  };

  var changeRadio = function changeRadio(e) {
    if (radioSelected) {
      radioValues.forEach(function (value) {
        document.querySelector("[value='".concat(value, "']")).parentNode.classList.toggle("active");
      });
    } else {
      e.target.parentNode.classList.toggle("active");
    }

    radioSelected = e.target.value;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    footer: false,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container p-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: regisAppointment,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "p-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Select a Tour Style"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group-toggle row",
          children: radioValues.map(function (el, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "form-label btn btn-outline-primary col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-check-input",
                onChange: changeRadio,
                type: "radio",
                name: "options",
                id: "option".concat(i),
                value: el,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this), el]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Select a Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row row-cols-md-4 row-cols-lg-5",
          children: groupDays(date, 10).map(function (_ref2, i) {
            var day = _ref2.day,
                mounth = _ref2.mounth,
                weekDay = _ref2.weekDay,
                year = _ref2.year,
                id = _ref2.id;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: id,
              className: "btn-group-toggle text-center col my-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                onClick: calendarClick,
                className: "form-label btn card bg-light user-select-none",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-check=input",
                  type: "radio",
                  name: "days",
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-header h5",
                    children: [mounth, " ", day]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-body h3",
                    children: weekDay
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-footer h5",
                    children: year
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "col-12 col-lg-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              onChange: function onChange(e) {
                return hour = e.target.value;
              },
              className: "form-control text-center",
              name: "Hour",
              id: "hour",
              children: [9, 10, 11, 1, 2, 3, 4, 5].map(function (hour, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: hour,
                  children: "".concat(hour, ":00 ").concat(hour > 5 ? "am" : "pm")
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary my-2 col-md-12",
          children: "Request this time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, _this);
};

_s2(Form, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGF0ZSIsIkRhdGUiLCJlbCIsImhvdXNlcyIsImZpbmQiLCJpZCIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJyYWRpb1NlbGVjdGVkIiwiaG91ciIsInJhZGlvVmFsdWVzIiwicmVnaXNBcHBvaW50bWVudCIsImUiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsImhlYWRlcnMiLCJDb250ZW50VHlwZSIsIm1ldGhvZCIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJncm91cERheXMiLCJudW1iZXJPZkRheXMiLCJkYXlzIiwidXNlRGF0ZSIsInN0ciIsInRvVVRDU3RyaW5nIiwid2Vla0RheSIsInNwbGl0IiwiZGF5IiwibW91bnRoIiwieWVhciIsInZhbHVlT2YiLCJwdXNoIiwiY2FsZW5kYXJDbGljayIsInRhcmdldCIsImFwcGFyZW5jZSIsIm9iaiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImZvckVhY2giLCJwcm9wIiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhcmVudE5vZGUiLCJjaGFuZ2VSYWRpbyIsInZhbHVlIiwicXVlcnlTZWxlY3RvciIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsOENBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQUNGLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNHLEVBQUgsS0FBVVAsTUFBTSxDQUFDUSxLQUFQLENBQWFELEVBQS9CO0FBQUEsR0FBWixDQUFYO0FBRUEsTUFBSUUsUUFBSjtBQUNBLE1BQUlDLGFBQUo7QUFDQSxNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQXBCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLHNSQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0xDLEtBQUssQ0FBQyxlQUFELEVBQWtCO0FBQ3ZDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlgsb0JBQUUsRUFBRUgsRUFBRSxDQUFDRyxFQURZO0FBRW5CTCxzQkFBSSxFQUFFTyxRQUZhO0FBR25CVSxzQkFBSSxFQUFFVCxhQUhhO0FBSW5CQyxzQkFBSSxFQUFFQTtBQUphLGlCQUFmLENBRGlDO0FBT3ZDUyx1QkFBTyxFQUFFO0FBQ1BDLDZCQUFXLEVBQUU7QUFETixpQkFQOEI7QUFVdkNDLHNCQUFNLEVBQUU7QUFWK0IsZUFBbEIsQ0FIQTs7QUFBQTtBQUdqQkMsaUJBSGlCO0FBQUE7QUFBQSxxQkFnQkZBLEdBQUcsQ0FBQ0MsSUFBSixFQWhCRTs7QUFBQTtBQWdCakJDLG9CQWhCaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJaLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFtQkEsTUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3hCLElBQUQsRUFBT3lCLFlBQVAsRUFBd0I7QUFBQTs7QUFDeEMsUUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsUUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzNCLElBQUQsRUFBVTtBQUN4QixVQUFNNEIsR0FBRyxHQUFHNUIsSUFBSSxDQUFDNkIsV0FBTCxFQUFaO0FBRUEsVUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFoQjtBQUFBLFVBQ0VDLEdBQUcsR0FBR0osR0FBRyxDQUFDRyxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FEUjtBQUFBLFVBRUVFLE1BQU0sR0FBR0wsR0FBRyxDQUFDRyxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FGWDtBQUFBLFVBR0VHLElBQUksR0FBR04sR0FBRyxDQUFDRyxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FIVDtBQUFBLFVBSUUxQixFQUFFLEdBQUcsSUFBSUosSUFBSixDQUFTK0IsR0FBRyxHQUFHQyxNQUFOLEdBQWVDLElBQXhCLEVBQThCQyxPQUE5QixFQUpQO0FBTUEsYUFBTztBQUNMTCxlQUFPLEVBQVBBLE9BREs7QUFFTEUsV0FBRyxFQUFIQSxHQUZLO0FBR0xDLGNBQU0sRUFBTkEsTUFISztBQUlMQyxZQUFJLEVBQUpBLElBSks7QUFLTDdCLFVBQUUsRUFBRkE7QUFMSyxPQUFQO0FBT0QsS0FoQkQ7O0FBa0JBLFNBQUssSUFBSTJCLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdQLFlBQXhCLEVBQXNDTyxHQUFHLEVBQXpDLEVBQTZDO0FBQzNDTixVQUFJLENBQUNVLElBQUwsQ0FBVVQsT0FBTyxDQUFDLElBQUkxQixJQUFKLENBQVNELElBQUksQ0FBQ21DLE9BQUwsS0FBaUJILEdBQUcsR0FBRyxJQUFOLFlBQWEsRUFBYixFQUFtQixDQUFuQixDQUExQixDQUFELENBQWpCO0FBQ0Q7O0FBQ0QsV0FBT04sSUFBUDtBQUNELEdBekJEOztBQTlCaUIsS0E4QlhGLFNBOUJXOztBQXlEakIsTUFBTWEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDekIsQ0FBRCxFQUFPO0FBQzNCLFFBQUlWLEVBQUUsR0FBR1UsQ0FBQyxDQUFDMEIsTUFBWDs7QUFFQSxRQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFVBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULFdBQTJCbkMsUUFBM0IsRUFBVjtBQUNBLFVBQUlvQyxLQUFLLEdBQUcsQ0FBQyxVQUFELEVBQWEsWUFBYixFQUEyQixZQUEzQixDQUFaO0FBQ0FBLFdBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QkwsV0FBRyxDQUFDTSxVQUFKLENBQWVDLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDSCxJQUFoQztBQUNELE9BRkQ7QUFHRCxLQU5EOztBQVFBdEMsWUFBUSxJQUFJZ0MsU0FBUyxFQUFyQjs7QUFFQSxXQUFPLElBQVAsRUFBYTtBQUNYLFVBQUlyQyxFQUFFLENBQUNHLEVBQVAsRUFBVztBQUNUO0FBQ0Q7O0FBQ0RILFFBQUUsR0FBR0EsRUFBRSxDQUFDK0MsVUFBUjtBQUNEOztBQUNEMUMsWUFBUSxHQUFHTCxFQUFFLENBQUNHLEVBQWQ7QUFDQWtDLGFBQVM7QUFDVixHQXJCRDs7QUF1QkEsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3RDLENBQUQsRUFBTztBQUN6QixRQUFJSixhQUFKLEVBQW1CO0FBQ2pCRSxpQkFBVyxDQUFDa0MsT0FBWixDQUFvQixVQUFDTyxLQUFELEVBQVc7QUFDN0JWLGdCQUFRLENBQ0xXLGFBREgsbUJBQzRCRCxLQUQ1QixTQUVHRixVQUZILENBRWNGLFNBRmQsQ0FFd0JDLE1BRnhCLENBRStCLFFBRi9CO0FBR0QsT0FKRDtBQUtELEtBTkQsTUFNTztBQUNMcEMsT0FBQyxDQUFDMEIsTUFBRixDQUFTVyxVQUFULENBQW9CRixTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsUUFBckM7QUFDRDs7QUFDRHhDLGlCQUFhLEdBQUdJLENBQUMsQ0FBQzBCLE1BQUYsQ0FBU2EsS0FBekI7QUFDRCxHQVhEOztBQWFBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFFLEtBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNFO0FBQU0sZ0JBQVEsRUFBRXhDLGdCQUFoQjtBQUFBLGdDQUVFO0FBQUksbUJBQVMsRUFBQyxLQUFkO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsb0JBQ0dELFdBQVcsQ0FBQzJDLEdBQVosQ0FBZ0IsVUFBQ25ELEVBQUQsRUFBS29ELENBQUw7QUFBQSxnQ0FDZjtBQUFlLHVCQUFTLEVBQUMsd0NBQXpCO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLGtCQURaO0FBRUUsd0JBQVEsRUFBRUosV0FGWjtBQUdFLG9CQUFJLEVBQUMsT0FIUDtBQUlFLG9CQUFJLEVBQUMsU0FKUDtBQUtFLGtCQUFFLGtCQUFXSSxDQUFYLENBTEo7QUFNRSxxQkFBSyxFQUFFcEQsRUFOVDtBQU9FLHdCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQVVHQSxFQVZIO0FBQUEsZUFBWW9ELENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZTtBQUFBLFdBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQXVCRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkYsZUEwQkU7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUEsb0JBQ0c5QixTQUFTLENBQUN4QixJQUFELEVBQU8sRUFBUCxDQUFULENBQW9CcUQsR0FBcEIsQ0FDQyxpQkFBcUNDLENBQXJDO0FBQUEsZ0JBQUd0QixHQUFILFNBQUdBLEdBQUg7QUFBQSxnQkFBUUMsTUFBUixTQUFRQSxNQUFSO0FBQUEsZ0JBQWdCSCxPQUFoQixTQUFnQkEsT0FBaEI7QUFBQSxnQkFBeUJJLElBQXpCLFNBQXlCQSxJQUF6QjtBQUFBLGdCQUErQjdCLEVBQS9CLFNBQStCQSxFQUEvQjtBQUFBLGdDQUNFO0FBQWEsZ0JBQUUsRUFBRUEsRUFBakI7QUFBcUIsdUJBQVMsRUFBQyx1Q0FBL0I7QUFBQSxxQ0FDRTtBQUNFLHVCQUFPLEVBQUVnQyxhQURYO0FBRUUseUJBQVMsRUFBQywrQ0FGWjtBQUFBLHdDQUlFO0FBQU8sMkJBQVMsRUFBQyxrQkFBakI7QUFBb0Msc0JBQUksRUFBQyxPQUF6QztBQUFpRCxzQkFBSSxFQUFDLE1BQXREO0FBQTZELDBCQUFRO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUNHSixNQURILE9BQ1lELEdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUU7QUFBSyw2QkFBUyxFQUFDLGNBQWY7QUFBQSw4QkFBK0JGO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFLRTtBQUFLLDZCQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFBaUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVVvQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFBQSxXQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUFpREU7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0U7QUFBTyxxQkFBUyxFQUFDLGlCQUFqQjtBQUFBLG1DQUNFO0FBQ0Usc0JBQVEsRUFBRSxrQkFBQzFDLENBQUQ7QUFBQSx1QkFBUUgsSUFBSSxHQUFHRyxDQUFDLENBQUMwQixNQUFGLENBQVNhLEtBQXhCO0FBQUEsZUFEWjtBQUVFLHVCQUFTLEVBQUMsMEJBRlo7QUFHRSxrQkFBSSxFQUFDLE1BSFA7QUFJRSxnQkFBRSxFQUFDLE1BSkw7QUFBQSx3QkFNRyxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCRSxHQUEzQixDQUErQixVQUFDNUMsSUFBRCxFQUFPNkMsQ0FBUDtBQUFBLG9DQUM5QjtBQUFnQix1QkFBSyxFQUFFN0MsSUFBdkI7QUFBQSxzQ0FBaUNBLElBQWpDLGlCQUNFQSxJQUFJLEdBQUcsQ0FBUCxHQUFXLElBQVgsR0FBa0IsSUFEcEI7QUFBQSxtQkFBYTZDLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEOEI7QUFBQSxlQUEvQjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREYsZUFrRUU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGdDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRFRCxDQXpLRDs7SUFBTXpELEk7VUFDV0UscUQ7OztLQURYRixJO0FBMktTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtLmVjMWVkNDExODQ1YWYyZGE2MGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgaG91c2VzIH0gZnJvbSBcIi4uL0JpZW5lc1wiO1xyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBlbCA9IGhvdXNlcy5maW5kKChlbCkgPT4gZWwuaWQgPT09IHJvdXRlci5xdWVyeS5pZCk7XHJcblxyXG4gIGxldCBzZWxlY3RlZDtcclxuICBsZXQgcmFkaW9TZWxlY3RlZDtcclxuICBsZXQgaG91ciA9IDk7XHJcblxyXG4gIGNvbnN0IHJhZGlvVmFsdWVzID0gW1wiVmlkZW8gQ2hhdFwiLCBcIlByZXNlbmNpYWxcIl07XHJcblxyXG4gIGNvbnN0IHJlZ2lzQXBwb2ludG1lbnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yZWdpc3RlclwiLCB7XHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgZGF0ZTogc2VsZWN0ZWQsXHJcbiAgICAgICAgdHlwZTogcmFkaW9TZWxlY3RlZCxcclxuICAgICAgICBob3VyOiBob3VyLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIENvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ3JvdXBEYXlzID0gKGRhdGUsIG51bWJlck9mRGF5cykgPT4ge1xyXG4gICAgbGV0IGRheXMgPSBbXTtcclxuXHJcbiAgICBjb25zdCB1c2VEYXRlID0gKGRhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc3RyID0gZGF0ZS50b1VUQ1N0cmluZygpO1xyXG5cclxuICAgICAgY29uc3Qgd2Vla0RheSA9IHN0ci5zcGxpdChcIixcIilbMF0sXHJcbiAgICAgICAgZGF5ID0gc3RyLnNwbGl0KFwiIFwiKVsxXSxcclxuICAgICAgICBtb3VudGggPSBzdHIuc3BsaXQoXCIgXCIpWzJdLFxyXG4gICAgICAgIHllYXIgPSBzdHIuc3BsaXQoXCIgXCIpWzNdLFxyXG4gICAgICAgIGlkID0gbmV3IERhdGUoZGF5ICsgbW91bnRoICsgeWVhcikudmFsdWVPZigpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3ZWVrRGF5LFxyXG4gICAgICAgIGRheSxcclxuICAgICAgICBtb3VudGgsXHJcbiAgICAgICAgeWVhcixcclxuICAgICAgICBpZCxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgbnVtYmVyT2ZEYXlzOyBkYXkrKykge1xyXG4gICAgICBkYXlzLnB1c2godXNlRGF0ZShuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSArIGRheSAqIDg2LjQgKiAxMCAqKiA2KSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRheXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJDbGljayA9IChlKSA9PiB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuXHJcbiAgICBjb25zdCBhcHBhcmVuY2UgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzZWxlY3RlZH1gKTtcclxuICAgICAgbGV0IHByb3BzID0gW1wiYmctbGlnaHRcIiwgXCJiZy1wcmltYXJ5XCIsIFwidGV4dC1saWdodFwiXTtcclxuICAgICAgcHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xyXG4gICAgICAgIG9iai5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUocHJvcCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxlY3RlZCAmJiBhcHBhcmVuY2UoKTtcclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBpZiAoZWwuaWQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZCA9IGVsLmlkO1xyXG4gICAgYXBwYXJlbmNlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUmFkaW8gPSAoZSkgPT4ge1xyXG4gICAgaWYgKHJhZGlvU2VsZWN0ZWQpIHtcclxuICAgICAgcmFkaW9WYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFt2YWx1ZT0nJHt2YWx1ZX0nXWApXHJcbiAgICAgICAgICAucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIHJhZGlvU2VsZWN0ZWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBmb290ZXI9e2ZhbHNlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0yXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzQXBwb2ludG1lbnR9PlxyXG4gICAgICAgICAgey8qIFRvdXIgU3R5bGUgKi99XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+U2VsZWN0IGEgVG91ciBTdHlsZTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwLXRvZ2dsZSByb3dcIj5cclxuICAgICAgICAgICAge3JhZGlvVmFsdWVzLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtpfSBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlUmFkaW99XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9e2BvcHRpb24ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBXZWVrIERheSAqL31cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+U2VsZWN0IGEgRGF0ZTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLW1kLTQgcm93LWNvbHMtbGctNVwiPlxyXG4gICAgICAgICAgICB7Z3JvdXBEYXlzKGRhdGUsIDEwKS5tYXAoXHJcbiAgICAgICAgICAgICAgKHsgZGF5LCBtb3VudGgsIHdlZWtEYXksIHllYXIsIGlkIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBpZD17aWR9IGNsYXNzTmFtZT1cImJ0bi1ncm91cC10b2dnbGUgdGV4dC1jZW50ZXIgY29sIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsZW5kYXJDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIGJ0biBjYXJkIGJnLWxpZ2h0IHVzZXItc2VsZWN0LW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2s9aW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZGF5c1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdW50aH0ge2RheX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaDNcIj57d2Vla0RheX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgaDVcIj57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBIb3VyIHNlbGVjdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gKGhvdXIgPSBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkhvdXJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJob3VyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7WzksIDEwLCAxMSwgMSwgMiwgMywgNCwgNV0ubWFwKChob3VyLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aG91cn0+e2Ake2hvdXJ9OjAwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciA+IDUgPyBcImFtXCIgOiBcInBtXCJcclxuICAgICAgICAgICAgICAgICAgfWB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteS0yIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICBSZXF1ZXN0IHRoaXMgdGltZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9