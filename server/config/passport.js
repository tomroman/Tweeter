const JwtStrategy = require('passport-jwt')
const ExtractJwt = require('passport-jwt')
const User = require('../models/User')


let opts = {}
opts.jwtFronRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET

module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done){
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user)

                } else {
                    return done{null, false}
                }

                
            })
            .catch(err => {
                return done(err, false)
            })
    }))
}


