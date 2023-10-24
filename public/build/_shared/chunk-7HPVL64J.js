import {
  Link2 as Link,
  useLocation
} from "/build/_shared/chunk-EXEBQYJK.js";
import {
  createHotContext
} from "/build/_shared/chunk-6A52KGT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navbar.tsx"
  );
  import.meta.hot.lastModified = "1697391696326.8188";
}
var Navbar = () => {
  _s();
  const route = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "p-4 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
              .font-roboto {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
              }
            ` }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-semibold text-gray-800 font-roboto text-center", children: "menukarisith.com" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/" ? "bg-gray-300" : ""}`, children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/about" ? "bg-gray-300" : ""}`, children: "About" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/projects" ? "bg-gray-300" : ""}`, children: "Projects" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/contact" ? "bg-gray-300" : ""}`, children: "Contact" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_s(Navbar, "m415chYVzacwHfzySwl71Y8Ar1M=", false, function() {
  return [useLocation];
});
_c = Navbar;
var Navbar_default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Navbar_default
};
//# sourceMappingURL=/build/_shared/chunk-7HPVL64J.js.map
