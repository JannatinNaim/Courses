import pandas as pd
from math import *


# with open("./sample.txt", "r") as file:
#     lines = file.readlines()

#     statements = []
#     for line in lines:
#         statements.append(line.strip())

#     variables = []

#     for statement in statements:
#         if "=" in statement:
#             variable = statement[0:statement.index("=")].strip()
#             variables.append(variable)

#     unique_variables = []
#     for variable in variables:
#         if variable not in unique_variables:
#             unique_variables.append(variable)

#     variables = unique_variables

#     values = {}
#     for variable in variables:
#         values[variable] = None

#     for statement in statements:
#         if "=" in statement:
#             expression = statement[statement.index("=") + 1:].strip()

with open("./sample.txt", "r") as file:
    lines = file.readlines()

statements = []
for line in lines:
    statements.append(line.strip())

variables = []

for statement in statements:
    if "=" in statement:
        variable = statement[0:statement.index("=")].strip()

        if variable not in variables:
            variables.append(variable)

for variable in variables:
    globals()[variable] = None

# METHOD: A
# for statement in statements:
#     exec(statement)

# METHOD: B
for statement in statements:
    if "=" in statement:
        variable = statement[0:statement.index("=")].strip()
        expression = statement[statement.index("=") + 1:].strip()

        result = eval(expression)
        exec(variable + "=" + str(result))

# for variable in variables:
#     print(f"name: {variable} value: {globals()[variable]}")


# data_frame = pd.read_csv()
df = pd.read_csv("sample.csv")

# print(df.head())

# for element in df:
#     print(element, end=" ")

# print(df['ID'])
# print(df['Name'])
# print(df['Class'])
# print(df['Roll'])
# print(df['Blood Group'])

print(df['ID'] + 10)

# df.to_json("sample.json")
