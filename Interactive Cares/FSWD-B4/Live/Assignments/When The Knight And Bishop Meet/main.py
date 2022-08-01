user_input = input("moves: ")
# Trim preceding and trailing whitespace and split moves separated with spaces.
moves = user_input.strip().split(" ")

# Valid pieces.
pieces = ['K', 'Q', 'B', 'N', 'R']
# Valid ranks.
ranks = ['1', '2', '3', '4', '5', '6', '7', '8']
# Valid flies.
files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

# Special characters.
check = '+'
mate = '#'
castle = '-'
capture = 'x'

is_move_valid = True
mate_count = 0

for move in moves:
    move_characters = [x for x in move]
    move_length = len(move_characters)

    has_check = check in move_characters
    has_mate = mate in move_characters
    has_castle = castle in move_characters
    has_capture = capture in move_characters

    if has_mate:
        mate_count += 1

    # Quit if has more than one mate.
    if mate_count > 1:
        is_move_valid = False
        break

    if move_length == 2:
        # 0 index is a valid file.
        has_file = move_characters[0] in files

        if not has_file:
            is_move_valid = False
            break

        # 1 index is a valid rank.
        has_rank = move_characters[1] in ranks

        if not has_rank:
            is_move_valid = False
            break

    elif move_length == 3:
        if has_check or has_mate:
            # Same as length 2 moves without the 3rd character.
            has_file = move_characters[0] in files

            if not has_file:
                is_move_valid = False
                break

            has_rank = move_characters[1] in ranks

            if not has_rank:
                is_move_valid = False
                break

        elif has_castle:
            # Special move.
            is_castle = "".join(move_characters) == "O-O"

            if not is_castle:
                is_move_valid = False
                break

        else:
            # 0 index is a valid piece.
            has_piece = move_characters[0] in pieces

            if not has_piece:
                is_move_valid = False
                break

            # Later is a valid length 2 move.
            has_file = move_characters[1] in files

            if not has_file:
                is_move_valid = False
                break

            has_rank = move_characters[2] in ranks

            if not has_rank:
                is_move_valid = False
                break

    elif move_length == 4:
        if has_check or has_mate:
            # Same as length 3 moves without the 4th character.
            has_piece = move_characters[0] in pieces

            if not has_piece:
                is_move_valid = False
                break

            has_file = move_characters[1] in files

            if not has_file:
                is_move_valid = False
                break

            has_rank = move_characters[2] in ranks

            if not has_rank:
                is_move_valid = False
                break

        elif has_capture:
            # 0 index is valid file or rank.
            has_init_file = move_characters[0] in files
            has_init_rank = move_characters[0] in ranks

            if not has_init_file and not has_init_rank:
                is_move_valid = False
                break

            # 1 index is capture keyword.
            is_capture = move_characters[1] == capture

            if not is_capture:
                is_move_valid = False
                break

            # Same as length 2 moves.
            has_file = move_characters[2] in files

            if not has_file:
                is_move_valid = False
                break

            has_rank = move_characters[3] in ranks

            if not has_rank:
                is_move_valid = False
                break

        else:
            # 0 index is a valid piece.
            has_piece = move_characters[0] in pieces

            if not has_piece:
                is_move_valid = False
                break

            # Conflicting pieces have a file or rank specified.
            has_init_file = move_characters[1] in files
            has_init_rank = move_characters[1] in ranks

            if not has_init_file and not has_init_rank:
                is_move_valid = False
                break

            # Same as length 2 moves.
            has_file = move_characters[2] in files

            if not has_file:
                is_move_valid = False
                break

            has_rank = move_characters[3] in ranks

            if not has_rank:
                is_move_valid = False
                break

    else:
        # All moves outside the range of the validator.
        is_move_valid = False
        break

if not is_move_valid:
    print("Invalid")
else:
    print("Valid")
