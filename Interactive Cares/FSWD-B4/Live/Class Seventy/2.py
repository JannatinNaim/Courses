"""Fibonacci Sum Up To N"""
n = 5

numbers = [1, 1]

while True:
    x = numbers[-1]
    y = numbers[-2]

    if x == n:
        numbers.pop()
        break

    numbers.append(x + y)

print(sum(numbers))
