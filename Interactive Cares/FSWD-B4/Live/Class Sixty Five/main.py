# try:
#     file = open("sample.txt", "x")
# except:
#     print("File is already present.")

# file = open("sample.txt", "w")

# file = open("./data.txt", "r")
# print(file.read(5))
# # file.seek(0)
# print(file.read(5))

# lines = file.readlines()
# no_newlines = []

# for line in lines:
#     no_whitespace = line.strip()
#     if len(no_whitespace) > 0:
#         no_newlines.append(no_whitespace)

# print(no_newlines)

# with open("./data.txt", "a") as file:
#     file.write("\nSheesh!")

file = open("data.txt", "r")
lines = file.readlines()

data = {}

for i in range(len(lines)):
    if i == 0 or i == len(lines) - 1:
        continue

    line = lines[i]

    country_start = line.index("'", 0)
    country_end = line.index("'", country_start + 1)

    country = line[country_start + 1:country_end]

    capital_start = line.index("'", country_end + 1)
    capital_end = line.index("'", capital_start + 1)

    capital = line[capital_start + 1:capital_end]

    data[country] = capital

print(data)
