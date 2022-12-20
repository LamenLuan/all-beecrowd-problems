class DadosVolei:

	def __init__(self, saques = 0, ataques = 0, bloqueios = 0):
		self.saques = saques
		self.ataques = ataques
		self.bloqueios = bloqueios
	
	def __add__(self, other):
		return DadosVolei(
			self.saques + other.saques,
			self.ataques + other.ataques,
			self.bloqueios + other.bloqueios
		)

def pega_dados_volei():
	saques, ataques, defesas = map(int, input().split(maxsplit=3))
	return DadosVolei(saques, defesas, ataques)

def mostra_pctg_acerto(acao: str, total: int, acerto: int):
	return print(f"Pontos de {acao}: {(acerto / total * 100):.2f} %.")

def main():
	dados_acerto = DadosVolei()
	dados_total = DadosVolei()

	qtd_jogadores = int(input())

	for i in range(qtd_jogadores):
		_ = input()
		dados_total += pega_dados_volei()
		dados_acerto += pega_dados_volei()

	mostra_pctg_acerto("Saque", dados_total.saques, dados_acerto.saques)
	mostra_pctg_acerto("Bloqueio", dados_total.bloqueios, dados_acerto.bloqueios)
	mostra_pctg_acerto("Ataque", dados_total.ataques, dados_acerto.ataques)
		

if __name__ == '__main__':
	main()