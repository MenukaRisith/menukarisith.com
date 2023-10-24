import {
  Footer_default
} from "/build/_shared/chunk-AZPVFX7M.js";
import {
  Navbar_default
} from "/build/_shared/chunk-7HPVL64J.js";
import "/build/_shared/chunk-EXEBQYJK.js";
import {
  createHotContext
} from "/build/_shared/chunk-6A52KGT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/projects.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\projects.tsx"
  );
  import.meta.hot.lastModified = "1698163762028.8933";
}
var projectList = [{
  id: 1,
  title: "Fauxica Landing Page",
  description: "Description for Project 1.",
  imageUrl: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697732143/fauxica_xr77d5.png"
  // Replace with your image URL
}];
var Projects = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto my-10 mt-20 mb-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-800 mb-4", children: "Projects" }, void 0, false, {
      fileName: "app/components/projects.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10", children: projectList.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded shadow p-4", children: [
      project.imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: project.imageUrl, alt: project.title, className: "w-full h-48 object-cover mb-2" }, void 0, false, {
        fileName: "app/components/projects.tsx",
        lineNumber: 34,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: project.title }, void 0, false, {
        fileName: "app/components/projects.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: project.description }, void 0, false, {
        fileName: "app/components/projects.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, project.id, true, {
      fileName: "app/components/projects.tsx",
      lineNumber: 33,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/components/projects.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = Projects;
var projects_default = Projects;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_projects.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_projects.tsx"
  );
  import.meta.hot.lastModified = "1697508751619.5083";
}
var Services = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Projects" }, void 0, false, {
      fileName: "app/routes/_projects.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/_projects.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(projects_default, {}, void 0, false, {
      fileName: "app/routes/_projects.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/_projects.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_projects.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = Services;
var projects_default2 = Services;
var _c2;
$RefreshReg$(_c2, "Services");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  projects_default2 as default
};
//# sourceMappingURL=/build/routes/_projects-ANIBSVST.js.map
