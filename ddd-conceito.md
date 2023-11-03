# DDD (Domain-driven Desing) | Design Dirigido à Domínio 

DDD -> Métodologia para design de software <- 

Idealizado por Eric Evans 
    -> Forma de a gente conseguir manter uma comnicação muito clara e padronizada entre todas as partes
    do desenvolvimento de uma aplicação. 

Design: Como vai ser desenhada a aplicação. !== Diferente da forma de implementar a aplicação; 
    -> Como converter o problema em algo palpável, em um software que de fato resolve o problema. 

Domínio: No DDD tudo vai girar em volta de Domínio 
    -> Aréa de entendimento, onde todas as pessoas envolvidas na construlção do software, tenha conhecimentos 
    muitos semelhantes. 

        -> Domain Experts: Entender o problema do cliente; São pessoas que entendem a fundo o problema que está sendo resolvido com o software; Geralmente os experts de domínio são pessoas que estão no dia a dia, lidando com situações a quais o software iram auxiliar. 
            -> Conversa: É o mais importante para ter conhecimento do Domínio; Várias Conversar com vários expertes 

        -> Linguagem Ubíqua:  A partir dessas conversas se cria uma liguagem Ubíqua -> É uma liguagem universal onde todas as pessoas que estão envolvidas na construção do software conseguem conversar por igual. 
            -> ex: Usuário
                    - Cliente 
                    - Fornecedor 
                    - Atendente 
                    - Barman 

O objeto princípal é conseguir desenvolver um software que qualquer pessoa do negócio consiga entender. 
É necessário pensar no softaware como algo totalmente desconectado de camandas externas. 

    - Entidades -> É tudo que é factível dentro da aplicação, algo que vai ser mantido pela aplicação ou usuário 
        -> É identificada a partir das conversas com os experts 
        Ex: Dúvida, aluno, eu e etc. 
            - Muita dificuldade em saber as dúvidas dos alunos
            - Eu tenho que reponder os alunos e eu me perco em quais dúvidas já foram respondidas



    - Casos de uso -> É como as entidades conversam entre si. Eu <-> Responder <-> alunos, no caso, responder é o caso de uso,  eu e alunos são entidades;  Basicamente é os verbos de conexão entre várias entidades. 

    - Code -> Começar a traduzir essas informações da meneira mais pura possível; 