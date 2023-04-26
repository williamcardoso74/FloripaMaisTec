<h1>API de Gestão Clínica e Hospitalar</h1>
<h2>Solução para rotinas de Consultas e Atendimentos</h2>

<p>Esta API foi elaborada para atender as necessidades na rotina de gestão de atendimentos
e consultas em clinicas e hospitais. Ela permite o cadastro, consulta, atualização e exclusão das informações dos profissionais médicos e dos pacientes.  Outra funcionalidade é o sistema automatizado de atendimentos, com informações sobre o médico e o paciente que participaram da consulta e o dia do atendimento.</p>

<h3>TECNOLOGIAS UTILIZADAS: </h3>
<h4> Projeto foi desenvolvido com a linguagem JAVASCRIPT com base
em NODE.Js framework, utilizando as seguintes tecnologias: </h4><p>

- Visual Studio Code - (VS Code) editor de código aberto. - https://code.visualstudio.com/ - Versão 1.77.3 (user setup).

- Node.Js - framework back-end utilizado para esta API. - https://nodejs.org/pt-br/docs - Versão 18.15.0.

- PostgresSql - é um SGBD (Sistema de Gestão de Banco de Dados relacionados).  Os modelos foram criados neste sistema. - https://www.postgresql.org/docs/ - Versão 6.19.

- Git - é um software para controle e atualização de versão de códigos comerciais ou abertos - Version 2.40.0.windows.1

- GitHub - é uma plataforma de armazenamento e compartilhamento de arquivos e código-fonte com controle de versão utilizando o Git. 
- Postman - é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. https://learning.postman.com/docs/introduction/overview/

<h4>DEPENDÊNCIAS UTILIZADAS NO NODE.JS:</h4>

- Express.JS - framework utilizado em conjunto com o Node.JS para o desenvolvimento de aplicações back-end e rotas. - https://expressjs.com/pt-br/

- Sequelize - é o ORM (Object/Relational Mapper) utilizado para abstrair os comandos de SQL, permitindo o uso de liguaguem de programação para conectar e operar o banco de dados. - https://sequelize.org/docs/v6/getting-started/ 

- pg e pg-hstore - módulos responsáveis por criar e permitir a comunicação com o banco de dados PostgresSql - https://www.npmjs.com/package/pg-hstore

- dotenv - módulo para criar variáveis de ambientes, e proporcionar mais segurança no compartilhamento de informações sensíveis.

- Bcrypt - módulo que torna possível a criptografia das senhas dos usuários desta API. - https://www.npmjs.com/package/bcrypt

- Yup - módulo para análise e validação de dados. - https://www.npmjs.com/package/yup

<h4>DEPENDÊNCIAS DE DESENVOLVEDOR:</h4>

Nodemon.Js - utilitário usado para monitorar as mudanças nos arquivos durante o desenvolvimento do projeto, responsável por reinicializar automaticamente o servidor Node.Js; - https://www.npmjs.com/package/nodemon </p>


<h3>COMO EXECUTAR A API: </h3><p>

- Instalar o Node.Js;
- Instalar o Visual Studio Code ou outro editor de código. Preferencialmente use o VSCode, a partir da versão 1.77.3.
- Instalar o Git no seu sistema operacional.
- Criar uma pasta para baixar o repositório do Github.
- Clonar o repositório API_Gestao_Hospitalar com o seguinte comando no terminal do VS Code: gh repo clone williamcardoso74/API-final-mod01
- No terminal do VS Code, dentro da pasta da API, instalar todas as dependências citadas acima: Express, Sequelize, pg, pg-hstore, dotenv, bcrypt, yup e nodemon.  (Ex.: npm install express)
- Instalar a API Postman para testar as rotas http.
- Instalar o SGBD Postgres e criar um banco de Dados com o nome: labmedicinebd.
- No terminal do VS Code, inicialize a API com o comando: NPM START.
- Abrir o POSTMAN para executar cada rota http de sua preferência: cadastro, consulta, atualização e exclusão de médicos, enfermeiros, pacientes e atendimentos.</p>


<h3>MÉTODOS, ROTAS E ENTRADAS DA API: </h3><p>

<h4>ROTAS DE USUÁRIO:</h4>

* createUser.js - POST  : '/api/users'
    - cria um usuário com senha para acessar todas as rotas da API.

    Exemplo de Entradas:

    {<br>
        "name" : "José",        //string, campo obrigatório<br>
        "cpf": "99977755533",   //string, campo obrigatório<br>
        "password": "12341234"  //string, campo obrigatório<br>
    }

* createLogin.js - POST  : '/api/users/login'
    - login de um usuário cadastrado com autenticação TOKEN.

    Exemplo de Entradas:

    {<br>
        "name" : "José",        // string, campo obrigatório<br>
        "cpf": "99977755533",   // string, unique, campo obrigatório<br>
        "password": "12341234"  // string, length(8), campo obrigatório<br>
    }


<h4>ROTAS PACIENTE:</h4>

* createPaciente.js - POST  : '/api/pacientes'
    - cadastra o paciente.
    
    Exemplo de Entradas:

    {<br>
        "nomeCompleto" : "Glaucia Carlos Bragança",     // string<br>
        "genero": "F",                                  // string<br>
        "dataNascimento": "2002-01-01",                 // date, campo obrigatório<br>
        "cpf": "99988877762",                           // string, unique<br>
        "telefone": "048988887776",                     // string<br>
        "contatoEmergencia": "João",                    // string, campo obrigatório<br>
        "listaAlergias": "lactose",                     // string, campo obrigatório<br>
        "listaCuidados": "idosa",                       // string<br>
        "convenio": "Sul-America",                      // string<br>
        "statusAtendimento": "AGUARDANDO_ATENDIMENTO"   // string<br>
    }

    * observação:   statusAtendimento permitidos:
                    - AGUARDANDO_ATENDIMENTO
                    - EM_ATENDIMENTO
                    - ATENDIDO
                    - NAO_ATENDIDO

* updatePaciente.js - PUT : '/api/pacientes/:id'
    - atualiza os dados do paciente.

    * atenção aos campos obrigatórios: dataNascimento, contatoEmergencia e listaAlergias
    * atualiza todos os campos exceto: statusAtendimento


* updateStatusPaciente.js - PUT : '/api/pacientes/:id/status'
    - atualiza o Status de Atendimento do Paciente.

    * forneça o id do paciente pela URI e o statusAtendento pelo request.body:
    
    Exemplo:
    http://localhost:3333/api/pacientes/8/status
    
    {<br>
        "statusAtendimento": "ATENDIDO"<br>
    }

* listPaciente.js - GET : '/api/pacientes'
    - lista todos os pacientes no cadastro.

* listPacienteID.js - GET : '/api/pacientes/:id'
    - lista os dados do paciente identificado pelo ID.

* deletePaciente.js - DELETE: '/api/pacientes/:id'
    - deleta o cadastro do paciente pelo ID.


<h4>ROTAS MÉDICO:</h4>

* createMedico.js - POST : '/api/medicos'
    - cadastra o profissional médico.

    Exemplo de Entradas:

    {<br>
        "nome_completo": "Beto",                      //string<br>
        "genero": "M",                                //string<br>
        "data_nascimento": "2002-02-01",              //date, campo obrigatório<br>
        "cpf": "99988877762",                         //string<br>
        "telefone": "048988887777",                   //string<br>
        "instituicao_ensino_formacao": "UFSC",        //string, campo obrigatório<br>
        "cadastro_crm_uf": "888/SC",                  //string, campo obrigatório<br>
        "especializacao_clinica": "CLINICO_GERAL",    //string, campo obrigatório<br>
        "estado_no_sistema": "INATIVO"                //string<br>
    }

* updateMedico.js - PUT   : '/api/medicos/:id'
    - atualiza os dados do profisional médico.

    * atenção aos campos obrigatórios: 
        data_nascimento, instituicao_ensino_formacao, cadastro_crm_uf e especializacao_clinica
    
    * observação:   
    
        especializacao_clinica válidas:
        - CLINICO_GERAL
        - ANESTESISTA
        - DERMATOLOGIA
        - GINECOLOGIA
        - NEUROLOGIA
        - PEDIATRIA
        - PSIQUIATRIA
        - ORTOPEDIA
        
        estado_no_sistema válidos:
        - ATIVO
        - INATIVO


* updateMedicoStatus.js - PUT : '/api/medicos/:id/status'
    - atualiza o status do médico no sistema.

    * forneça o id do médico pela URI e o estado_no_sistema pelo request.body:
        
        Exemplo:
        http://localhost:3333/api/medicos/8/status
        
        {<br>
            "estado_no_sistema": "ATIVO"<br>
        }


* listMedico.js - GET : '/api/medicos'
    - lista todos os médicos no cadastro.

* listMedicoID.js - GET : '/api/medicos/:id'
    - lista os dados do médico identificado pelo ID.

* deleteMedico.js - DELETE: '/api/medicos/:id'
    - deleta o cadastro do médico pelo ID.


<h4>ROTAS ENFERMEIRO:</h4>

* createEnfermeiro.js - POST : '/api/enfermeiros'
    - cadastra o profissional enfermeiro.

    Exemplo de Entradas:
    
    {<br>
        "nome_completo" : "Leandra Cardoso Mendonça",   //string<br>
        "genero": "F",                                  //string<br>
        "data_nascimento": "2013-09-08",                //string, campo obrigatório<br>
        "cpf": "99988877763",                           //string<br>
        "telefone": "048988887775",                     //string<br>
        "instituicao_ensino_formacao" : "UNIDOS",       //string, campo obrigatório<br>
        "cadastro_cofen_uf": "799/SC"                   //string, campo obrigatório<br>
    }


* updateEnfermeiro.js - PUT : '/api/enfermeiros/:id'
    - atualiza os dados do profissional enfermeiro.

    * atenção aos campos obrigatórios: 
            data_nascimento, instituicao_ensino_formacao, cadastro_cofen_uf

* listEnfermeiro.js - GET : '/api/enfermeiros'
    - lista todos os enfermeiros no cadastro.

* listEnfermeiroID.js - GET : '/api/enfermeiros/:id'
    - lista os dados do enfermeiro identificado pelo ID.

* deleteEnfermeiro.js - DELETE: '/api/enfermeiros/:id'
    - deleta o cadastro do enfermeiro pelo ID.


<h4>ROTA DE ATENDIMENTO:</h4>

* atendimento.js - POST  : '/api/atendimentos'
    - armazena a data, o ID do médico e do paciente que participaram da consulta.

    Exemplo de Entradas:

    {<br>
        "data_atendimento" : "2023-04-15",  //date, campo obrigatório<br>
        "id_paciente": "4",                 //integer, campo obrigatório<br>
        "id_medico": "2"                    //integer, campo obrigatório<br>
    }
</p>

<h3>MELHORIAS: </h3>
<h4>A API apresenta as seguintes possibilidades de incremento: </h4><p>

- Opções de consulta que permitam a pesquisa dos atendimentos por dia, paciente,
médicos ou especialidade médica. Consultas mais específicas para cada necessidade.
- A criação de uma documentação SWAGGER;
- A API ainda tem potencial para atender várias outras necessidades da rotina de uma clínica/hospital:
exemplos: marcação de exames laboratoriais.
</p>