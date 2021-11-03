# Elaboore um algoritmo que dada a idade do nadador clissifique-o e uma das seguinter categorias. 
# Infantil A = 5 a 7 anos.
# Infantil B = 8 a 11 anos.
# Juvenil A = 12 a 13 anos.
# Juvenil B = 14 a 17 anos. 
# Adultos = Maiores de 18 anos.

# Entrada de dados e variávei.
idade = int(input("Idade do nadador: "))

# Processamento.
if idade < 5:
    print("Não aceitamos alunos abaixo de 5 anos de idade.")

elif idade >= 5 and idade <=7:
    print("Nadador da categoria - Infantil A")

elif idade >= 8 and idade <=11:
    print("Nadador da categoria - Infantil B")

elif idade >= 12 and idade <=13:
    print("Nadador da categoria - Juvenil A")

elif idade >= 14 and idade <=17:
    print("Nadador da categoria - Juvenil B")

elif idade >= 18:
    print("Nadador da categoria - Adulto")