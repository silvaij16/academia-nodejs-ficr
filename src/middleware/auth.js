const auth = (req, res, next) => {
    const headerAuth = req.headers.authorization

    if(!!headerAuth.length) {
        return res.send({error: 'N]ao autenticado'})
    }
    const [, token] = headerAuth
}

module.exports = auth