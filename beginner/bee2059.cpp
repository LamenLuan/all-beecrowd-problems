#include <iostream>
#include <bits/stdc++.h>

int main(int argc, char const *argv[])
{
	std::ios_base::sync_with_stdio(false);
	std::cin.tie(NULL);

	bool p1ChoseEven, p1Cheated, p2AccusedP1, p1Wins;
	short p1Num, p2Num;

	std::cin >> p1ChoseEven >> p1Num >> p2Num >> p1Cheated >> p2AccusedP1;

	if (p1Cheated)
		p1Wins = !p2AccusedP1;
	else if (p2AccusedP1)
		p1Wins = true;
	else
	{
		bool totalIsEven = (p1Num + p2Num) % 2 == 0;
		p1Wins = totalIsEven == p1ChoseEven;
	}

	std::cout << "Jogador " << (p1Wins ? "1" : "2") << " ganha!"
						<< "\n";

	return 0;
}