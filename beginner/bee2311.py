QTD_NOTAS = 7

def nota_final(nome: str, dificuldade: float, notas: 'list[float]'):
	notas.remove(max(notas))
	notas.remove(min(notas))
	nota = sum(notas) * dificuldade
	return f"{nome} {nota:.2f}"

def main():
	qtd_leituras = int(input())

	for _ in range(qtd_leituras):
		nome = input()
		dificuldade = float(input())
		notas = [float(i) for i in input().split(maxsplit=QTD_NOTAS)]
		print(nota_final(nome, dificuldade, notas))

if __name__ == '__main__':
	main()