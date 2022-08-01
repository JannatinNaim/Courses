"""Amicable Numbers"""
a = 220
b = 284

a_factors = []
for i in range(1, a):
    if a % i == 0:
        a_factors.append(i)
a_factors_sum = sum(a_factors)

b_factors = []
for i in range(1, b):
    if b % i == 0:
        b_factors.append(i)
b_factors_sum = sum(b_factors)

amicable = a_factors_sum == b and b_factors_sum == a
print(amicable and "Yes" or "No")
