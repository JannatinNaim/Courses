"""Intersection List"""

x = [1, 1, 2, 3, 6, 5, 4, 7]
y = [2, 4, 5, 6, 9, 8, 7, 7]

z = []
for item in x:
    if item in y and item not in z:
        z.append(item)
for item in y:
    if item in x and item not in z:
        z.append(item)

z.sort()
print(z)
