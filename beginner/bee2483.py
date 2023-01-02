def get_merry_christmas(intensity: int):
	if intensity < 1: 
		raise ValueError("Param intensity must be greater than 0")

	return f"Feliz nat{'a'*intensity}l!"

def main():
	intensity = int(input())
	print(get_merry_christmas(intensity))

if __name__ == '__main__':
	main()