def valor_pokemon(ataque, defesa, nivel, bonus):
	if nivel % 2 != 0: bonus = 0
	return ((ataque + defesa) / 2) + bonus

def main():
	quant_iteracoes = int(input())

	for _ in range(quant_iteracoes):
		bonus = int(input())

		ataque, defesa, nivel = map(int, input().split())
		poke_valor_dabriel = valor_pokemon(ataque, defesa, nivel, bonus)

		ataque, defesa, nivel = map(int, input().split())
		poke_valor_guarte = valor_pokemon(ataque, defesa, nivel, bonus)

		resultado = "Empate"
		if poke_valor_guarte > poke_valor_dabriel: resultado = "Guarte"
		elif poke_valor_dabriel > poke_valor_guarte: resultado = "Dabriel"

		print(resultado)

if __name__ == '__main__':
	main()