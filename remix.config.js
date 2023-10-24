/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",

  future: {
    unstable_tailwind: true,
  },
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/_index.tsx", { index: true });
      route("about", "routes/_about.tsx"),
      route("projects", "routes/_projects.tsx"),
      route("contact", "routes/_contact.tsx");
    });
  },

};
