// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = e => console.log('O evento ocorreu!');
// Perceba que não somos obrigados a declarar o evento. Por isso o parâmetro não foi colocado dentro da arrow.