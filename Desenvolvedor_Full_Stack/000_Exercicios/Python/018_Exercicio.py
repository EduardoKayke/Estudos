# Desenvolva um algoritmo que: 
# Leia 4 números. 
# Calcule o quadrado de cada um.
# Se o valor resultante do quadrado do terceiro for maior que 1000, imprima e finalize.
# Caso contrário imprima os valores lidos e seus respectivos quadrados.

# Entrada dos dados. 
n1 = int(input("\nDigite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))
n3 = int(input("Digite o terceiro número: "))
n4 = int(input("Digite o quarto número: "))

# Processamento e saída. 
q1 = n1 ** 2
q2 = n2 ** 2
q3 = n3 ** 2
q4 = n4 ** 2

if q3 >= 1000:
    print("\nO número {0} deu um valor ao quadrado de {1}.\n".format(n3, q3))

else:
    print("\nO número {0} deu um valor ao quadrado de {1}.".format(n1, q1))
    print("O número {0} deu um valor ao quadrado de {1}.".format(n2, q2))
    print("O número {0} deu um valor ao quadrado de {1}.".format(n3, q3))
    print("O número {0} deu um valor ao quadrado de {1}.".format(n4, q4))
    print("\nAté mais!\n")