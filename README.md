**RF** => Requisitos Funcionais
**RNF** => Requisitos não funcionais
**RN** => Regra de negócio

# Cadastro de carro

**RF**
 [] - Deve ser possível cadastrar um novo carro.
 [] - Deve ser possivel listar todas as categorias.

**RN**
 [] - Não deve ser possivel cadastrar um carro com uma placa já existente.
 [] - Não deve ser possível alterar uma placa de um carro já cadastrado.
 [] - O carro deve ser cadastrado com disponibilidade por padrão, com disponibilidade.
 [] - O usuario responsavel pelo cadastro deve ser um usuario admnistrador.
 
# Listagem de carros

**RF**
 [] - Deve ser possivel listar todos os carros disponiveis.
 [] - Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
 [] - Deve ser possivel listar todos os carros disponiveis pel nome da nome da marca.
 [] - Deve ser possivel listar todos os carros disponiveis pel nome da nome do carro.

**RN**
 [] - O usuario não precisa estar logado no sistema.
 
# Cadastro de Especificação no carro

**RF**
 [] - Deve ser possivel cadastrar uma especificação para um carro.
 [] - Deve ser possivel listar todas as especificações.
 [] - Deve ser possivel listar todos os carros.

**RN**
 [] - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
 [] - Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
 [] - O usuario responsavel pelo cadastro deve ser um usuario admnistrador.

# Cadastro de imagens do carro

**RF**
 [] - Deve ser possivel cadastrar a imagem do carro.
 [] - Deve ser possivel listar todos os carros.

**RNF**
 [] - Utilizar o multer para upload dos arquivos.

**RN**
 [] - O usuario deve poder cadastrar maus de uma imagem para o mesmo carro.
 [] - O usuario responsavel pelo cadastro deve ser um usuario admnistrador.


# Aluguel de carro

**RF**
 [] - Deve ser possivel cadastrar um aluguel.
 
**RN**
 [] - O aluguel deve ter duração minima de 24 horas.
 [] - Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
