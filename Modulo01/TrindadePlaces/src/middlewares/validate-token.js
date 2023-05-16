const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  // validar se tem token no Header da requisição
  console.log(req.headers.authorization);
  const token = req.headers.authorization;

  console.log(token);

  // verificar se token pelo menos está presente
  if (!token || token === "Bearer") {
    return res.status(403).json({ message: "Token não presente" });
  }

  const tokenJwt = token.slice(7);

  jwt.verify(
    tokenJwt,
    //"MINHA_CHAVE_SECRETA"
    process.env.CHAVE_DO_TOKEN,
    function (error, conteudoDescodificado) {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token expired" });
        } else if (error.name === "JsonWebTokenError") {
          return res.status(401).json({ error: "Invalid token" });
        } else {
          return res.status(500).json({ error: "Internal server error" });
        }
      } else {
        console.log(conteudoDescodificado);
        req.body.userId = conteudoDescodificado.id;
        return next();
      }
    }
  );
}

module.exports = validateToken;
