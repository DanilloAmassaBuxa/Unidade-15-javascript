let produto = prompt("qual produto você quer procurar?")
let preco = prompt("qual o preço do produto?")
let desconto = prompt("qual o desconto do produto?")

let preco_final = preco - desconto
console.log("Produto: " + produto)
console.log("Preço: " + preco)
console.log("Desconto: " + desconto)
console.log("Preço Final: " + preco_final)

console.log(alert("O preço final do produto " + produto + " com desconto é: " + preco_final))

