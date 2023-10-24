var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZNK7JPHK.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { name: "author", content: "Menuka Risith" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "description", content: "" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => projects_default2
});

// app/components/Footer.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV3("footer", { className: "bg-gray-200 p-4", children: /* @__PURE__ */ jsxDEV3("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxDEV3("p", { className: "text-center text-gray-600", children: [
  "\xA9 ",
  (/* @__PURE__ */ new Date()).getFullYear(),
  " menukarisith.com"
] }, void 0, !0, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Footer_default = Footer;

// app/components/Navbar.tsx
import { Link, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Navbar = () => {
  let route = useLocation();
  return /* @__PURE__ */ jsxDEV4("nav", { className: "p-4 mx-auto", children: /* @__PURE__ */ jsxDEV4("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsxDEV4("style", { children: `
              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
              .font-roboto {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
              }
            ` }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "text-2xl font-semibold text-gray-800 font-roboto text-center", children: "menukarisith.com" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { className: "flex space-x-8", children: [
      /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link, { to: "/", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/" ? "bg-gray-300" : ""}`, children: "Home" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link, { to: "/about", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/about" ? "bg-gray-300" : ""}`, children: "About" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link, { to: "/projects", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/projects" ? "bg-gray-300" : ""}`, children: "Projects" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link, { to: "/contact", className: `text-gray-800 font-roboto p-2 rounded ${route.pathname === "/contact" ? "bg-gray-300" : ""}`, children: "Contact" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, Navbar_default = Navbar;

// app/components/projects.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var projectList = [
  {
    id: 1,
    title: "Fauxica Landing Page",
    description: "Description for Project 1.",
    imageUrl: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697732143/fauxica_xr77d5.png"
    // Replace with your image URL
  }
], Projects = () => /* @__PURE__ */ jsxDEV5("div", { className: "container mx-auto my-10 mt-20 mb-40", children: [
  /* @__PURE__ */ jsxDEV5("h2", { className: "text-3xl font-bold text-gray-800 mb-4", children: "Projects" }, void 0, !1, {
    fileName: "app/components/projects.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10", children: projectList.map((project) => /* @__PURE__ */ jsxDEV5("div", { className: "bg-white rounded shadow p-4", children: [
    project.imageUrl && /* @__PURE__ */ jsxDEV5("img", { src: project.imageUrl, alt: project.title, className: "w-full h-48 object-cover mb-2" }, void 0, !1, {
      fileName: "app/components/projects.tsx",
      lineNumber: 28,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV5("h3", { className: "text-xl font-semibold text-gray-900", children: project.title }, void 0, !1, {
      fileName: "app/components/projects.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "text-gray-600", children: project.description }, void 0, !1, {
      fileName: "app/components/projects.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, project.id, !0, {
    fileName: "app/components/projects.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/projects.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/projects.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), projects_default = Projects;

// app/routes/_projects.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Services = () => /* @__PURE__ */ jsxDEV6("div", { children: [
  /* @__PURE__ */ jsxDEV6("title", { children: "Projects" }, void 0, !1, {
    fileName: "app/routes/_projects.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV6(Navbar_default, {}, void 0, !1, {
    fileName: "app/routes/_projects.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV6(projects_default, {}, void 0, !1, {
    fileName: "app/routes/_projects.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV6(Footer_default, {}, void 0, !1, {
    fileName: "app/routes/_projects.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_projects.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), projects_default2 = Services;

// app/routes/_contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});

// app/components/Contact.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var ContactFr = () => /* @__PURE__ */ jsxDEV7("div", { className: "bg-white py-16", children: /* @__PURE__ */ jsxDEV7("div", { className: "container mx-auto text-center", children: [
  /* @__PURE__ */ jsxDEV7("h2", { className: "text-3xl font-semibold text-gray-800 mb-8", children: "Contact Me" }, void 0, !1, {
    fileName: "app/components/Contact.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV7("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxDEV7("form", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
      "input",
      {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Your Name",
        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 11,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Contact.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
      "input",
      {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Your Email",
        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 20,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Contact.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
      "textarea",
      {
        id: "message",
        name: "message",
        rows: 4,
        placeholder: "Your Message",
        className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 29,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Contact.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV7(
      "button",
      {
        className: "bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-3 px-6 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-200",
        children: "Send Message"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 38,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Contact.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Contact.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Contact.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Contact.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Contact.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Contact_default = ContactFr;

// app/routes/_contact.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var About = () => /* @__PURE__ */ jsxDEV8("div", { children: [
  /* @__PURE__ */ jsxDEV8("title", { children: "Contact" }, void 0, !1, {
    fileName: "app/routes/_contact.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV8(Navbar_default, {}, void 0, !1, {
    fileName: "app/routes/_contact.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV8(Contact_default, {}, void 0, !1, {
    fileName: "app/routes/_contact.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_contact.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), contact_default = About;

// app/routes/_about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2
});

// app/components/about.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Aboutt = () => /* @__PURE__ */ jsxDEV9("div", { className: "p-6", children: [
  /* @__PURE__ */ jsxDEV9("h2", { className: "text-4xl font-semibold text-black-800 mb-4 ml-40 mt-20", children: "About" }, void 0, !1, {
    fileName: "app/components/about.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV9("p", { className: "text-lg text-gray-800 ml-40 mt-10 mr-40", children: 'Menuka Risith is a 15-year-old boy from Habarana, Sri Lanka. He is an Entrepreneur, Flutter developer, Programmer, Cloud Developer, and a Student. Mainly, he works in Flutter development, RemixJs, and has extensive experience in other computer programming-related fields such as software development, web development, cloud computing, bot development, game development, Linux, and many more. He started his first YouTube channel, "Menuka Tec," in 2020 at the age of 12 and has done a lot of content about programming. Additionally, he initiated his first company, "Eleventastic Solutions," in 2023 at the age of 14.' }, void 0, !1, {
    fileName: "app/components/about.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/about.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), about_default = Aboutt;

// app/components/field.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Timeline = () => /* @__PURE__ */ jsxDEV10("div", { className: "ml-60 mt-10 mb-20", children: /* @__PURE__ */ jsxDEV10("ol", { className: "relative border-l border-gray-300 dark:border-gray-700 list-none list-inside", children: [
  /* @__PURE__ */ jsxDEV10("li", { className: "mb-10 ml-4", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("time", { className: "mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400", children: "2019" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started learning Web Designing using the youtube & W3School" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/field.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV10("li", { className: "mb-10 ml-4", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("time", { className: "mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400", children: "2020" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started First Youtube Channel" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started learning NodeJs using the online playground" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started Experiments with VPS(Azure/AWS/ORACLE)" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/field.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV10("li", { className: "mb-10 ml-4", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("time", { className: "mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400", children: "2021" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started Learning Python using the online playground" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/field.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV10("li", { className: "mb-10 ml-4", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("time", { className: "mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400", children: "2022" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started Part-time job as a Developer in GenixPlay Studio" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started Part-time job as a Web Developer in AxeFlame Records" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started writting artiles in TheSriCom" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-lg font-semibold text-gray-900 dark:text-gray-800", children: "Started Learning Flutter & Firebase" }, void 0, !1, {
      fileName: "app/components/field.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/field.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/field.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/field.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), field_default = Timeline;

// app/routes/_about.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var About2 = () => /* @__PURE__ */ jsxDEV11("div", { children: [
  /* @__PURE__ */ jsxDEV11("title", { children: "About" }, void 0, !1, {
    fileName: "app/routes/_about.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(Navbar_default, {}, void 0, !1, {
    fileName: "app/routes/_about.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(about_default, {}, void 0, !1, {
    fileName: "app/routes/_about.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(field_default, {}, void 0, !1, {
    fileName: "app/routes/_about.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(Footer_default, {}, void 0, !1, {
    fileName: "app/routes/_about.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_about.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), about_default2 = About2;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});

// app/components/Head.tsx
import { Link as Link2 } from "react-router-dom";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Head = () => /* @__PURE__ */ jsxDEV12("div", { className: "min-h-screen flex justify-center", children: /* @__PURE__ */ jsxDEV12("div", { className: "text-center mt-20 pb-0", children: [
  /* @__PURE__ */ jsxDEV12("div", { className: "relative inline-block", children: /* @__PURE__ */ jsxDEV12("div", { className: "w-48 h-48 rounded-full overflow-hidden border-4 border-white", children: /* @__PURE__ */ jsxDEV12(
    "img",
    {
      src: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383449/menukarisith.compro_uhsawa.jpg",
      alt: "MenukaRisith",
      className: "object-cover w-full h-full"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Head.tsx",
      lineNumber: 10,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Head.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Head.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV12("div", { className: "mt-2 pt-5", children: [
    /* @__PURE__ */ jsxDEV12("p", { className: "text-3xl font-bold text-gray-800 font-roboto-condensed", children: "Hello, I'm Menuka Risith." }, void 0, !1, {
      fileName: "app/components/Head.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { className: "text-lg font-medium text-gray-600 font-roboto pt-5", children: "Entrepreneur, Programmer, and Student in Sri Lanka" }, void 0, !1, {
      fileName: "app/components/Head.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { className: "text-base text-gray-600 font-roboto", children: "Founder of Eleventastic Solutions || trying to expand the IT industry in Sri Lanka" }, void 0, !1, {
      fileName: "app/components/Head.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxDEV12(Link2, { to: "/about", children: /* @__PURE__ */ jsxDEV12("button", { className: "bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-2 px-4 rounded mr-4", children: "About Menuka" }, void 0, !1, {
        fileName: "app/components/Head.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Head.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Link2, { to: "/projects", children: /* @__PURE__ */ jsxDEV12("button", { className: "bg-white text-black font-medium py-2 px-4 rounded border border-gray-400 mb-0", children: "Projects" }, void 0, !1, {
        fileName: "app/components/Head.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Head.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Head.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Head.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Head.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Head.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Head_default = Head;

// app/components/HighLights.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Highlights = () => /* @__PURE__ */ jsxDEV13("div", { className: "py-10", children: /* @__PURE__ */ jsxDEV13("div", { className: "container mx-auto mb-1", children: [
  /* @__PURE__ */ jsxDEV13("h2", { className: "text-3xl font-semibold text-center text-gray-800 font-varela-round mb-4 ml-4", children: "Highlights" }, void 0, !1, {
    fileName: "app/components/HighLights.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: /* @__PURE__ */ jsxDEV13("div", { className: "bg-white p-4 rounded shadow-md pt-10", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV13(
      "img",
      {
        src: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/eleventasticsolutions_dmqqte.png",
        alt: "Highlight 2",
        className: "w-full h-40 object-cover rounded"
      },
      void 0,
      !1,
      {
        fileName: "app/components/HighLights.tsx",
        lineNumber: 11,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/HighLights.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold text-gray-800 font-roboto pt-2", children: "First Startup Company when I was 14" }, void 0, !1, {
      fileName: "app/components/HighLights.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600 font-varela-round pt-2", children: "Guiding brands to digital success! I lead a talented team of creators, tech enthusiasts, and strategic minds at Eleventastic Solutions. We're passionate about crafting unforgettable digital experiences, from eye-catching graphics to cutting-edge web development, broadcasting, and innovative campaigns that bridge the digital and physical worlds. Let's redefine your brand's online presence and make it unforgettable. \u{1F310}\u{1F4A1}" }, void 0, !1, {
      fileName: "app/components/HighLights.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HighLights.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/HighLights.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HighLights.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/HighLights.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), HighLights_default = Highlights;

// app/components/CompanySlider.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var CompanyWorkedWith = () => /* @__PURE__ */ jsxDEV14("div", { className: "company-worked-with mt-10 text-center", children: [
  /* @__PURE__ */ jsxDEV14("h2", { className: "text-3xl font-semibold text-gray-800 mb-4", children: "Trusted" }, void 0, !1, {
    fileName: "app/components/CompanySlider.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV14("div", { className: "slider-content mx-auto inline-block mt-20 mb-20", children: [
    {
      url: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/eleventasticsolutions-transparent_nlmp4y.png",
      alt: "ElevenTasticSolutions"
    },
    {
      url: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/genixplay-transparent_z8o9od.png",
      alt: "GenixPlay"
    },
    {
      url: "",
      alt: "TheSriCom"
    },
    {
      url: "https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383592/Asset_1_3x_cgjav8.png",
      alt: "EcloudEsports"
    }
  ].map((logo, index) => /* @__PURE__ */ jsxDEV14(
    "img",
    {
      src: logo.url,
      alt: logo.alt,
      className: "logo inline-block w-100 h-10 mr-10"
    },
    index,
    !1,
    {
      fileName: "app/components/CompanySlider.tsx",
      lineNumber: 28,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/CompanySlider.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/CompanySlider.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this), CompanySlider_default = CompanyWorkedWith;

// app/components/socialmedia.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var SocialMediaComponent = () => /* @__PURE__ */ jsxDEV15("div", { className: "text-center", children: [
  /* @__PURE__ */ jsxDEV15("h2", { className: "text-3xl font-semibold text-gray-800 mb-20", children: "Touch With Me" }, void 0, !1, {
    fileName: "app/components/socialmedia.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-center items-center space-x-4 mb-20", children: [
    /* @__PURE__ */ jsxDEV15(
      "a",
      {
        href: "https://www.facebook.com/menukar.dev",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300",
        children: /* @__PURE__ */ jsxDEV15(FontAwesomeIcon, { icon: faFacebook, className: "text-white text-2xl" }, void 0, !1, {
          fileName: "app/components/socialmedia.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/socialmedia.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15(
      "a",
      {
        href: "https://www.linkedin.com/in/MenukaRisith",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition duration-300",
        children: /* @__PURE__ */ jsxDEV15(FontAwesomeIcon, { icon: faLinkedin, className: "text-white text-2xl" }, void 0, !1, {
          fileName: "app/components/socialmedia.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/socialmedia.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15(
      "a",
      {
        href: "https://www.instagram.com/menuka_risith",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition duration-300",
        children: /* @__PURE__ */ jsxDEV15(FontAwesomeIcon, { icon: faInstagram, className: "text-white text-2xl" }, void 0, !1, {
          fileName: "app/components/socialmedia.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/socialmedia.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15(
      "a",
      {
        href: "https://github.com/MenukaRisith",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-gray-800 p-3 rounded-full hover:bg-gray-900 transition duration-300",
        children: /* @__PURE__ */ jsxDEV15(FontAwesomeIcon, { icon: faGithub, className: "text-white text-2xl" }, void 0, !1, {
          fileName: "app/components/socialmedia.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/socialmedia.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15(
      "a",
      {
        href: "https://www.youtube.com/@MenukaRisith",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-red-600 p-3 rounded-full hover:bg-red-700 transition duration-300",
        children: /* @__PURE__ */ jsxDEV15(FontAwesomeIcon, { icon: faYoutube, className: "text-white text-2xl" }, void 0, !1, {
          fileName: "app/components/socialmedia.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/socialmedia.tsx",
        lineNumber: 42,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/socialmedia.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/socialmedia.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), socialmedia_default = SocialMediaComponent;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var HomePage = () => /* @__PURE__ */ jsxDEV16("div", { children: [
  /* @__PURE__ */ jsxDEV16("title", { children: "Menuka Risith" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(Navbar_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(Head_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(HighLights_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(CompanySlider_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(socialmedia_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV16(Footer_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), index_default = HomePage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-R3A527ZS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-EXEBQYJK.js", "/build/_shared/chunk-6A52KGT2.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XBT6HVNT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_about": { id: "routes/_about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_about-ZTXCC4KC.js", imports: ["/build/_shared/chunk-AZPVFX7M.js", "/build/_shared/chunk-7HPVL64J.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_contact": { id: "routes/_contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/_contact-V6YHJKIU.js", imports: ["/build/_shared/chunk-7HPVL64J.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "/", index: !0, caseSensitive: void 0, module: "/build/routes/_index-VMVRXL3X.js", imports: ["/build/_shared/chunk-AZPVFX7M.js", "/build/_shared/chunk-7HPVL64J.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_projects": { id: "routes/_projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/_projects-ANIBSVST.js", imports: ["/build/_shared/chunk-AZPVFX7M.js", "/build/_shared/chunk-7HPVL64J.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4f599f0a", hmr: { runtime: "/build/_shared\\chunk-6A52KGT2.js", timestamp: 1698165481789 }, url: "/build/manifest-4F599F0A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_projects": {
    id: "routes/_projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_contact": {
    id: "routes/_contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_about": {
    id: "routes/_about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "/",
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
