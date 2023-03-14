function getUserById {
    console.log(req.params.id);
    res.send('Funcionou');
};

module.exports = getUserById;