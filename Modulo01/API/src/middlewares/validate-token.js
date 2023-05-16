const jwt = require('jsonwebtoken');

function validateToken(request, response, next) {
    // primeira coisa:
    // validar se tem token no header
    console.log(request.headers.authorization)
    const token = request.headers.authorization

    // verificar se o token pelo menos existe
    if(!token || token === 'Bearer') {
        return response
            .status(403)
            .json({message: 'Token não existe'})
    };

    // tirando a palavra 'Bearer' do Token, para ficar somente o token
    const tokenJwt = token.slice(7);

    jwt.verify(tokenJwt, 'MINHA_CHAVE_SECRETA', (error, conteudoDescodificado) => {

        if (error) {

            if (error.name === "TokenExpiredError") {
                return response.status(401).json({ message: 'Token Expirado' })
            } else if (error.name === "JsonWebTokenError") {
                return response.status(401).json({ message: 'Token inválido' })
            } else {
                return response.status(500).json({message: 'Internal server error'});
            }

        } else {
            request.body.userId = conteudoDescodificado.id
            next()
        }
    })
 
}

module.exports = validateToken;