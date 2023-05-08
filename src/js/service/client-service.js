//productList(): faz uma requisição GET ao endpoint /produtos no servidor, retorna uma Promise que é resolvida com a lista de produtos em formato JSON.
const productList = () => {
  return fetch(`https://alurageekdb-mblg.onrender.com/produtos/`)
    .then(resposta => {
      return resposta.json()
    })
}

//createProduct(url, section, name, price, description): faz uma requisição POST ao endpoint /produtos, enviando os dados do produto no corpo da requisição em formato JSON. Os dados do produto incluem a URL de imagem, a seção a que ele pertence, o nome, o preço, uma descrição, e os caminhos para as imagens de edição e exclusão do produto.
const createProduct = (url, section, name, price, description) => {
  fetch(`https://alurageekdb-mblg.onrender.com/produtos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      alt: "imagem do produto",
      name: name,
      price: price,
      section: section,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  })

}

// productDelete(id): faz uma requisição DELETE ao endpoint /produtos/:id, onde :id é o ID do produto a ser excluído.
const productDelete = (id) => {
  return fetch(`https://alurageekdb-mblg.onrender.com/produtos/${id}`, {
    method: 'DELETE'
  })
}

// ProductDetails(id): faz uma requisição GET ao endpoint /produtos/:id, onde :id é o ID do produto a ser visualizado, retornando uma Promise que é resolvida com os detalhes do produto em formato JSON.
const productDetails = (id) => {
  return fetch(`https://alurageekdb-mblg.onrender.com/produtos/${id}`)
    .then(resposta => {
      return resposta.json()
    })
}

// updateProduct(url, section, name, price, description, id): faz uma requisição PUT ao endpoint /produtos/:id, onde :id é o ID do produto a ser atualizado, enviando os dados do produto no corpo da requisição em formato JSON. Os dados do produto incluem a URL de imagem, a seção a que ele pertence, o nome, o preço e uma descrição, e os caminhos para as imagens de edição e exclusão do produto.
const updateProduct = (url, section, name, price, description, id) => {
  fetch(`https://alurageekdb-mblg.onrender.com/produtos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      section: section,
      name: name,
      price: price,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  })
    .then(resposta => {
      return resposta.json()
    })

}

// As funções createProduct, productDelete, e updateProduct utilizam o método fetch para realizar as requisições HTTP.
export const clienteService = {
  productList,
  createProduct,
  productDelete,
  productDetails,
  updateProduct
}
