def no_canto(idx, tamanho):
	return idx == 0 or idx == (tamanho - 1)

def verifica_padrao(mapeamento, x, y, qtd_linhas, qtd_colunas):

	if no_canto(x, qtd_linhas) or no_canto(y, qtd_colunas): return False
	x_sup = x - 1
	x_inf = x + 1
	y_esq = y - 1

	if mapeamento[x][y_esq] != 7 or mapeamento[x][y + 1] != 7: return False 

	for i in range(3):
		y_atual = y_esq + i
		if mapeamento[x_sup][y_atual] != 7 or mapeamento[x_inf][y_atual] != 7: return False

	return True

def main():
	mapeamento : list[list] = []
	qtd_linhas, qtd_colunas = map(int, input().split(maxsplit=2))
	
	for _ in range(qtd_linhas):
		mapeamento.append([*map(int, input().split(maxsplit=qtd_colunas))])

	for i in range(qtd_linhas):
		for j in range(qtd_colunas):
			if mapeamento[i][j] == 42:
				if verifica_padrao(mapeamento, i, j, qtd_linhas, qtd_colunas):
					print(f"{i + 1} {j + 1}")
					return

	print("0 0")

if __name__ == '__main__':
	main()