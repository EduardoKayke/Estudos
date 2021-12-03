# Ler um número e identificar se ele é par ou ímpar. Se for par armazenar em "p", ímpar em "i". Exibir os dados no final do processamento.

# Entrada de dados e variáveis.
p = 0
i = 0

n = int(input("Informe um número: "))

# Processamento e saída de dados.
if n % 2 == 0:
    p = n

else:
    i = n

print(p)
print(i)