module.exports = {
    database: {
        host: 'us-cdbr-east-06.cleardb.net',
        dialect: 'mysql',
        database: 'heroku_3871d6b35b07610',
        username: 'b287c247c406cf',
        password: 'f73d7a06'
    },
    mailer: {
        host: 'smtp.gmail.com',
        port: 587,
        username: "cotienrangfpt@gmail.com",
        password: "iyvchsfhpwwjequo"
    },
    google: {
        clientId: '476754856783-bt3di8n3u5c9ket6sagaaht75k451b57.apps.googleusercontent.com',
        clientSecret: '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',
        redirectUri: 'http://localhost:3000/api/auth/google/callback'
    }
}