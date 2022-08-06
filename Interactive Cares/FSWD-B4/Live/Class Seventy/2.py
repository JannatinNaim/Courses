"""Fibonacci Sum Up To N"""
n = 1000

numbers = [0, 1]

for i in range(n - 2):
    x = numbers[-1]
    y = numbers[-2]
    numbers.append(x + y)

print(sum(numbers))
