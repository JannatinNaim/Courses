# i = 1
# while i <= 10:
#     print(i)
#     i += 1

# for i in range(1, 11):
#     print(i)

# num_a = 24
# num_b = 15

# num_a = int(input("A: "))
# num_b = int(input("B: "))

# dividend = num_a
# divisor = num_b

# while dividend % divisor != 0:
#     quotient = dividend % divisor
#     dividend = divisor
#     divisor = quotient

# print(divisor)

# print((num_a * num_b) / divisor)

# a * b = lcm(a, b) * gcd(a, b)

# x = [1, 2, 5.6, 'string', [1, 2, 3]]
# y = x.copy()
# print(x == y)
# y.pop()
# print(x == y)

# [] => subscript operator

# x.append("damn")
# y = x.pop()
# x.clear()

# a = [1, 2, [4]]
# b = [1, 2, [4]]
# print(a == b)

# x = [1, 2, 3, 4, 5, 2, 6, 1]
# print(x.count(1))

# y = "string"
# x.extend(y)
# print(x)

# x = [2, 3, 4, 1, 6, 1, 1, 3, 5, 7]
# y = x[::-1]
# z = y.index(1)
# print(len(x) - z - 1)

# x = ['This', 'is', 'a', 'sentence']
# y = '#'.join(x)
# print(y)

# x = 'This is a sentence'
# y = x.split(' ')
# print(y)

# x, y = 'Hello World'.split()
# print(x, y)

# x, y, z = input("enter 3 numbers: ").split()
# x, y, z = int(x), int(y), int(z)

# # TODO: list comprehension

# # TODO: index based sorting algorithm
# x = [
#     [0, 1],
#     [7, 0],
#     [2, 3],
#     [8, 9]
# ]

# a = [2, 3, -1, -1, 8, -9, 10]

# sorted_a = []
# for i in range(len(a)):
#     x = min(a)

#     a.remove(x)
#     sorted_a.append(x)

# print(sorted_a)

# x = [[0, 1], [7, 0], [2, 3],  [8, 9]]
# y = input('Enter the sorting index: ')
# # [[0, 1], [2, 3], [7, 0], [8, 9]] if input is 0
# # [[7, 0], [0, 1], [2, 3], [8, 9]] if input is 1
