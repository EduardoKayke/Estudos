# Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do úsuario, mostrando uma mensagem de erro e voltando a pedir informações.

nome = input("Informe um nome: ")
senha = input("Informe a senha: ")

while nome == senha:
    print("Nome de usuário e senhas devem ser diferentes. ")
    nome = input("Informe um nome: ")
    senha = input("Informe a senha: ")
