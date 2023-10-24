import {
  createHotContext
} from "/build/_shared/chunk-6A52KGT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1697467287062.5308";
}
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gray-200 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-600", children: [
    "\xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " menukarisith.com"
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Footer;
var Footer_default = Footer;
var _c;
$RefreshReg$(_c, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Footer_default
};
//# sourceMappingURL=/build/_shared/chunk-AZPVFX7M.js.map
