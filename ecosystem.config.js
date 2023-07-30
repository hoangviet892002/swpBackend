module.exports = {
    apps: [
        {
            name: "toothfairy be",
            script: "index.js",
            max_memory_restart: "200M",
            restart_delay: 20000,
            exp_backoff_restart_delay: 100,
            max_restarts: 16,
            min_uptime: 5000,
            NODE_ENV: "production",
            ...require("dotenv").config({ path: ".env.production" }).parsed,
        },
    ],
};