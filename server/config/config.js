const config = {
    production: {
        SECRET: process.env.SECRET,
        DATEBASE: process.env.MONGODB_URI,
        PORT: process.env.PORT
    },
    default: {
        SECRET: 'S3CR3TP@SSW0RD',
        DATEBASE: 'mongodb://localhost:27017/books_shelf',
        PORT: 3001
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 