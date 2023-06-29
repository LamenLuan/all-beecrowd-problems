#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
	double n = 3.14159, A, R;
	std::cin >> R;
	A = R * R * n;
	std::cout << std::fixed << std::setprecision(4) << "A=" << A << endl;
	return 0;
}
