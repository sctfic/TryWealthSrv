module.exports = {
  apps: [{
    name: "finance",
    script: "index.js",
    watch: true,
    ignore_watch: ["node_modules", "public"],
    watch_options: {
      followSymlinks: false
    },
    env: {
      NODE_ENV: "development",
    }
  }]
}
