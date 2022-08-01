"""Valid Bracket Pairs"""
sequence = "{[{()()}{}]}"

if sequence.count("(") != sequence.count(")"):
    print("Incorrect")
    quit()
if sequence.count("{") != sequence.count("}"):
    print("Incorrect")
    quit()
if sequence.count("[") != sequence.count("]"):
    print("Incorrect")
    quit()

print("Correct")
