"""Values For X and Y"""

string = "2x + y = 3 , x + 4y = 5 "
exp_a, exp_b = string.split(",")

v = {
    "a": '',
    "b": '',
    "c": '',
    "d": '',
    "e": '',
    "f": '',
}
a, b, c, d, e, f = 1, 1, 1, 1, 1, 1

v["a"] = exp_a[:exp_a.index("x")]
exp_a = exp_a[exp_a.index("x") + 1:-1]
v["b"] = exp_a[exp_a.index("+") + 1:exp_a.index("y")]
v["c"] = exp_a[exp_a.index("=") + 1:]

v["d"] = exp_b[:exp_b.index("x")]
exp_b = exp_b[exp_b.index("x") + 1:-1]
v["e"] = exp_b[exp_b.index("+") + 1:exp_b.index("y")]
v["f"] = exp_b[exp_b.index("=") + 1:]

for key, value in v.items():
    try:
        v[key] = int(value.strip())
    except ValueError:
        v[key] = 1

x = (v["c"] * v["e"] - v["b"] * v["f"]) // (v["a"] * v["e"] - v["b"] * v["d"])
y = (v["c"] * v["d"] - v["a"] * v["f"]) // (v["b"] * v["d"] - v["a"] * v["e"])

print(x, y)
