print("Jannatin Naim")

# The print funciton is used to print the output to the screen.

print("Hello, world!", end=" ")
print("Goodbye, world!")

print("He said, \"Sorry\".")
print("He said, \"That's not fair\".")

x = 10
y = 20
z = x // y
print(x, "//", y, "=", z)

print(type(x))
print(type(y))
print(type(z))

# PROBLEMS

# find area of circle

# find sum of square of three numbers

# print sum, difference, product, ration, quotient and remainder of 2 int

# a farmer wants to buy some food for his cows but, he has very unique cows.
# He buys one bag for the first cow. Then he buys two for the second one, three
# for the third and so on. You are given the number of cows and the price of
# one bag. Calculate the money he needs.
# find the volume of a cube from it's diagonal

# print area of circle
x = 5
area = 3.14 * x ** 2
print("The area of the circle with radius", x, "is", area)

# find sum of square of three numbers
x = 3
y = 4
z = 5
print("The sum of the squares of", x, ",", y,
      "and", z, "is", x ** 2 + y ** 2 + z ** 2)

# print sum, difference, product, ration, quotient and remainder of 2 int
x = 10
y = 5

print("The sum of", x, "and", y, "is", x + y)
print("The difference of", x, "and", y, "is", x - y)
print("The product of", x, "and", y, "is", x * y)
print("The ratio of", x, "and", y, "is", x / y)
print("The quotient of", x, "and", y, "is", x // y)
print("The remainder of", x, "and", y, "is", x % y)

# a farmer wants to buy some food for his cows but, he has very unique cows.
# He buys one bag for the first cow. Then he buys two for the second one, three
# for the third and so on. You are given the number of cows and the price of
# one bag. Calculate the money he needs.
# find the volume of a cube from it's diagonal
n = 2
price = 5
# total_bags = n + (n - 1) * 1
total_bags = n * (n + 1) // 2
print('total bags', total_bags)
total_price = price * total_bags

print("To buy", n, "bags of food the farmer needs", total_price)

# find volume of a cube from it's diagonal
# diagonal = 9
# volume = (math.sqrt(3) * diagonal * 3) / 9
# print("The volume of cube with diagonal", diagonal, "is", volume)

d = 9
a = d / 3 ** 0.5
volume = a ** 3
print("The volume of cube with diagonal", d, "is", volume)
