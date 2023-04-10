function log(req, res, next) {
    console.log(req)
    console.log('Método ', req.method)
    console.log('PATH ', req.path)
    console.log('BODY ', req.body)
    console.log('PARAMS ', req.params)
   
    next()
};

module.exports = log;