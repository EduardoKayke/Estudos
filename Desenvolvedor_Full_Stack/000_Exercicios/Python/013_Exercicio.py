# Elabore um algoritmo que leia um número. Se positivo armazene-o em a. Se negativo em b. Print o resultado.

# Entrada de dados e variáveis.
n = int(input("Me diga um número: "))

# Processamento e saída.
if n > 0:
    a = n
    print("Seu valor é {0}, positivo.".format(a))

else:
    b = n
    print("Seu valor é {0}, negativo.".format(b))