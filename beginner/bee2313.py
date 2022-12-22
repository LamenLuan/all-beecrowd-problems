import enum

QTD_NOTAS = 3

class TiposTriangulo(enum.Enum):
	Equilatero = 1
	Isoceles = 2
	Escaleno = 3

def triangulo_valido(a, b, c):
	return a + b > c and b + c > a and a + c > b

def classificar_triangulo(a, b, c):
	if a == b and b == c: return TiposTriangulo.Equilatero
	elif a == b or a == c or b == c: return TiposTriangulo.Isoceles
	else: return TiposTriangulo.Escaleno

def triangulo_retangulo(a, b, c, tipo):
	if tipo == TiposTriangulo.Equilatero: return False
	lados = [a, b, c]
	hipotenusa = max(lados)
	lados.remove(hipotenusa)
	return (hipotenusa ** 2) == (lados[0] ** 2) + (lados[1] ** 2)

def analisar_triangulo(a, b, c):
	if not triangulo_valido(a, b, c): return "Invalido"

	tipo = classificar_triangulo(a, b, c)
	classificacao = f"Valido-{tipo.name}"
	retangulo = f"Retangulo: {'S' if triangulo_retangulo(a, b, c, tipo) else 'N'}"

	return f"{classificacao}\n{retangulo}"

def main():
	a, b, c = map(int, input().split(maxsplit=QTD_NOTAS))
	print(analisar_triangulo(a, b, c))

if __name__ == '__main__':
	main()