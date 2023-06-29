def can_go_and_get_back():
	credits = [int(i) for i in input().split(maxsplit=3)]

	for idx, cr in enumerate(credits):
		other_credits = credits.copy()
		other_credits.pop(idx)
		for i in other_credits:
			if cr - i == 0: return True
		if cr - sum(other_credits) == 0: return True
	
	return False

def main():
	print("S" if can_go_and_get_back() else "N")

if __name__ == '__main__':
	main()