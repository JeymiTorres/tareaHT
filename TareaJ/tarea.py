#Calcular el perimetro de un cuadrado
def perimetro_cuadrado(lado):
  return lado * 4

lado = float(input("Ingrese la longitud del lado del cuadrado: "))

perimetro = perimetro_cuadrado(lado)

print("El perímetro del cuadrado es: ", perimetro)

# Orden ascendente de una lista de números

lista = [10, 5, 2, 7, 8, 3]

lista_ordenada = sorted(lista)

print(lista_ordenada)

# Cálculo del producto de dos matrices

matriz_a = [[1, 2], [3, 4]]
matriz_b = [[5, 6], [7, 8]]

matriz_producto = [[0, 0], [0, 0]]

for i in range(len(matriz_a)):
  for j in range(len(matriz_b[0])):
    for k in range(len(matriz_b)):
      matriz_producto[i][j] += matriz_a[i][k] * matriz_b[k][j]

print(matriz_producto)

# Inversión de una lista

lista = [1, 2, 3, 4, 5]

lista_invertida = lista[::-1]

print(lista_invertida)

