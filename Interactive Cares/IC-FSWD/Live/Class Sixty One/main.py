# x = {
#     'a': 2,
#     'b': 3,
#     'c': 4,
#     'd': 5,
# }

# print(x.get('a'))
# print(x['a'])

# print(list(x.items()))

# for key in x.keys():
#     print(key, x[key])

# x = {
#     'a': 1,
#     'b': 1,
#     'c': 3,
#     'd': 4,
#     'e': 3
# }

# result = {}

# for key in list(x.keys()):
#     values = list(result.values())

#     value = x[key]
#     if values.count(value) == 0:
#         result[key] = value

# print(result)

# x = {
#     '1': 'abc',
#     '2': 'def',
#     '3': 'ghi',
# }

# # x_keys = list(x.values())
# keys = list(x.values())

# result = []

# # for a in range(len(x[x_keys[0]])):
# #     for b in range(len(x[x_keys[1]])):
# #         for c in range(len(x[x_keys[2]])):
# for item_a in keys[0]:
#     for item_b in keys[1]:
#         for item_c in keys[2]:
#             result.append(item_a + item_b + item_c)

# print(result)

# can the word be constructed
# 'dae'
x = ['a', 'b', 'c', 'd', 'e']
