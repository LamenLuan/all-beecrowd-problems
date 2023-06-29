VITAMIN_C_AMOUNT = {
	"suco de laranja": 120,
	"morango fresco": 85,
	"mamao": 85,
	"goiaba vermelha": 70,
	"manga": 56,
	"laranja": 50,
	"brocolis": 34
}

VIT_C_MAX_AMOUNT = 130
VIT_C_MIN_AMOUNT = 110

def get_vitamin_c_amount(item):
	name, quantity = item
	if quantity < 1: raise ValueError(f"Amounts of {name} must be greater than 0")
	return VITAMIN_C_AMOUNT[name] * quantity

def get_vitamin_c_total(daily_intake: 'dict[str, int]'):
	prefix = ""
	total = sum(map(get_vitamin_c_amount, daily_intake.items()))
	
	if total > VIT_C_MAX_AMOUNT:
		prefix = "Menos "
		total -= VIT_C_MAX_AMOUNT

	elif total < VIT_C_MIN_AMOUNT:
		prefix = "Mais "
		total = VIT_C_MIN_AMOUNT - total
	
	return f"{prefix}{total} mg"

def main():
	while True:
		items_amount = int(input())
		if items_amount == 0: return

		daily_intake = {}
		for _ in range(items_amount):
			amount, _, item = input().partition(' ')
			amount = int(amount)
			daily_intake[item] = amount
		
		print(get_vitamin_c_total(daily_intake))

if __name__ == '__main__':
	main()