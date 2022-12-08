#include <iostream>
#include <bits/stdc++.h>

bool atribui_pico_ou_vale(bool &pico, short pico_anterior, short pico_atual)
{
	if (pico_anterior == pico_atual)
		return false;

	pico = pico_atual > pico_anterior;

	return true;
}

bool respeita_padrao_nlogony(size_t quant_iteracoes)
{
	bool foi_pico = false, eh_pico = false;

	short val_anterior, val_atual;
	std::cin >> val_anterior >> val_atual;

	if (!atribui_pico_ou_vale(foi_pico, val_anterior, val_atual))
		return false;

	for (size_t i = 2; i < quant_iteracoes; i++)
	{
		val_anterior = val_atual;
		std::cin >> val_atual;

		if (!atribui_pico_ou_vale(eh_pico, val_anterior, val_atual) || foi_pico == eh_pico)
			return false;

		foi_pico = eh_pico;
	}

	return true;
}

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	size_t quant_iteracoes;
	std::cin >> quant_iteracoes;

	std::cout << respeita_padrao_nlogony(quant_iteracoes) << "\n";

	return 0;
}