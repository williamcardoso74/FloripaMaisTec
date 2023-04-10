function log(request, response, next) {
    console.log(request)
    console.log('Método ', request.method)
    console.log('PATH ', request.path)
    console.log('BODY ', request.body)
    console.log('PARAMS ', request.params)
   
    next()
};

module.exports = log;