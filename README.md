# API Rest - Projeto Starters

## O que é:

API Rest desenvolvida como parte do treinamento de Starters do Grupo GFT, baseada no próprio projeto, disponibilizando recursos de acesso, envio, atualização e remoção de starters (estagiários), entregas de desafios e atribuição de notas.

Recursos disponíveis para acesso via API:

* Starters
* Desafios
* Submissão de Desafios
* Notas de Desafios

## Requisições

Método HTTP | Descrição
------------ | -------------
GET | Retorna e lista informações dos registros
POST | Cria um novo registro
PUT | Altera/atualiza um registro existente
DELETE | Remove completamente um registro existente

## Respostas

Códigp | Descrição
------------ | -------------
200 | Requisição executada com sucesso
201 | Registro criado com sucesso
204 | Inexistência de registros na base do recurso 
400 | Ao criar registro, erros de validação ou o recurso informado não existe
403 | Acesso/recurso não autorizado ao usuário
404 | Registro pesquisado não encontrado


