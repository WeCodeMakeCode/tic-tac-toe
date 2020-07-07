namespace SpriteKind {
    export const Place_kind = SpriteKind.create()
    export const Win = SpriteKind.create()
    export const Message = SpriteKind.create()
    export const Other = SpriteKind.create()
}
function init_game_types () {
    game_types = ["000", "010", "100", "101", "110", "111"]
    game_type_names = ["BEST", "RANDOM", "AUTO BEST BEST", "AUTO BEST RAND", "AUTO RAND BEST", "AUTO RAND RAND"]
}
function place_position_sprites () {
    Empty_image = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    X_image = img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d f d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d f f d d d d d d d d d d d d d f f d d d d d d d d d 
d d d d d d d f d d d d d d d d d d d d d f d d d d d d d d d d 
d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d 
d d d d d d d d d f d d d d d d d d d f f d d d d d d d d d d d 
d d d d d d d d d f f d d d d d d d f f d d d d d d d d d d d d 
d d d d d d d d d d f f d d d d d d f d d d d d d d d d d d d d 
d d d d d d d d d d d f f d d d d f d d d d d d d d d d d d d d 
d d d d d d d d d d d d f f d d f f d d d d d d d d d d d d d d 
d d d d d d d d d d d d d f f f f d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d f f d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d f d f d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d f d d f f d d d d d d d d d d d d d d 
d d d d d d d d d d d d f f d d d f f d d d d d d d d d d d d d 
d d d d d d d d d d d d f d d d d d f f d d d d d d d d d d d d 
d d d d d d d d d d d f d d d d d d d f f d d d d d d d d d d d 
d d d d d d d d d d f f d d d d d d d d f f d d d d d d d d d d 
d d d d d d d d d f f d d d d d d d d d d f f d d d d d d d d d 
d d d d d d d d d f d d d d d d d d d d d d f f d d d d d d d d 
d d d d d d d d d f d d d d d d d d d d d d d f d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`
    X_image.replace(13, 1)
    X_image.replace(15, 8)
    O_image = img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d f f f f f f d d d d d d d d d d d d 
d d d d d d d d d d d d f f f d d f f f f d d d d d d d d d d d 
d d d d d d d d d d f f d d d d d d d d d f f f d d d d d d d d 
d d d d d d d d d f d d d d d d d d d d d d d f f d d d d d d d 
d d d d d d d d f d d d d d d d d d d d d d d d f f d d d d d d 
d d d d d d d f d d d d d d d d d d d d d d d d d f d d d d d d 
d d d d d d f d d d d d d d d d d d d d d d d d d f f d d d d d 
d d d d d f f d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d d f d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d d f d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d d f d d d d d 
d d d f d d d d d d d d d d d d d d d d d d d d d f d d d d d d 
d d d d f d d d d d d d d d d d d d d d d d d d d f d d d d d d 
d d d d d f d d d d d d d d d d d d d d d d d d f d d d d d d d 
d d d d d d f d d d d d d d d d d d d d d d d f f d d d d d d d 
d d d d d d f f d d d d d d d d d d d d d d f d d d d d d d d d 
d d d d d d d d f d d d d d d d d d d d f f d d d d d d d d d d 
d d d d d d d d d f f f d d d d d d d f f d d d d d d d d d d d 
d d d d d d d d d d d f f f f f f f f d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`
    O_image.replace(13, 1)
    O_image.replace(15, 8)
    Marks = [O_image, X_image, Empty_image]
    Selected_image = img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`
    Selected_image.drawRect(0, 0, 31, 31, 6)
    selected_outline = sprites.create(Selected_image, SpriteKind.Other)
    selected_outline.z = -1
    T = 5
    for (let I = 0; I <= 2; I++) {
        L = board_left_margin + 25
        for (let J = 0; J <= 2; J++) {
            Place = sprites.create(Empty_image, SpriteKind.Place_kind)
            Place.left = L
            Place.top = T
            Place.image.fill(1)
            Place.z = 1
            L += 40
        }
        T += 40
    }
    Places = sprites.allOfKind(SpriteKind.Place_kind)
}
function init_next () {
    next_right = [1, 2, 0, 4, 5, 3, 7, 8, 6]
    next_left = [2, 0, 1, 5, 3, 4, 8, 6, 7]
    next_up = [6, 7, 8, 0, 1, 2, 3, 4, 5]
    next_down = [3, 4, 5, 6, 7, 8, 0, 1, 2]
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (b_choosing_game_type) {
        game_type_index = (game_type_index + 1) % game_types.length
        game_type = game_types[game_type_index]
        display_game_type(game_type)
    } else {
        g_selected_position_n = next_up[g_selected_position_n]
        selected_outline.y = Places[g_selected_position_n].y
    }
})
function clear_board () {
    for (let value3 of Places) {
        value3.setImage(Empty_image)
    }
    // empty
    for (let index2 = 0; index2 < 9; index2++) {
        status_array.push(BLANK)
    }
    for (let value of winners) {
        value.destroy()
    }
}
function Mark_and_check_for_win_or_draw (player2: number, choice: number) {
    mark_choice(player2, choice)
    a_win = is_winner()
    if (!(a_win.isEmpty())) {
        do_winner(player2, a_win)
        Next_player = BLANK
    } else {
        if (all_positions_full()) {
            display_messages("DRAW", 4, 7)
            Next_player = BLANK
        } else {
            Next_player = other_player(player2)
        }
    }
}
function display_game_type (game_type: string) {
    S = game_type_names[game_types.indexOf(game_type)]
    display_messages(S, 0, 2)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (b_choosing_game_type) {
        b_choosing_game_type = false
        start_New_game()
    } else {
        b_choosing_game_type = true
        clear_board()
        display_messages("", 4, 7)
        display_messages("PICK GAME TYPE", 5, 7)
    }
})
function display_messages (lines: string, start_index: number, end_index: number) {
    if (lines.isEmpty()) {
        index = start_index
        while (index <= end_index) {
            message_sprites[index].say("")
            index += 1
        }
    } else {
        lines_split = lines.split(" ")
        while (lines_split.length < end_index - start_index + 1) {
            lines_split.push("")
        }
        max_len = 0
        for (let value of lines_split) {
            if (value.length > max_len) {
                max_len = value.length
            }
        }
        for (let index = 0; index <= lines_split.length - 1; index++) {
            message_sprites[start_index + index].x = 5 + 3 * max_len
            message_sprites[start_index + index].say(lines_split[index])
        }
    }
}
function one_char_n (string: string, position: number) {
    return parseFloat(string.substr(position, 1))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(b_auto) && Next_player == HUMAN) {
        display_messages("", 4, 7)
        if (status_array[g_selected_position_n] == BLANK) {
            Mark_and_check_for_win_or_draw(HUMAN, g_selected_position_n)
        }
    }
})
function do_winner (Player: number, a_win: string) {
    console.log("enter do winner")
    display_messages("WIN", 4, 7)
    Win_image = Selected_image.clone()
    Win_image.replace(6, 2)
    for (let Pos = 0; Pos <= 2; Pos++) {
        Place = Places[one_char_n(a_win, Pos)]
        new_win_sprite = sprites.create(Win_image, SpriteKind.Win)
        new_win_sprite.x = Place.x
        new_win_sprite.y = Place.y
        new_win_sprite.z = 3
    }
    winners = sprites.allOfKind(SpriteKind.Win)
    for (let value of winners) {
        value.setImage(Win_image)
    }
}
function all_positions_full () {
    if (status_array.indexOf(BLANK) == -1) {
        return true
    } else {
        return false
    }
}
function move_for (player2: number) {
    console.log("enter move for ")
    if (player2 == COMPUTER) {
        if (b_computer_random) {
            Choice = random_choice()
        } else {
            Choice = best_choice(player2)
        }
    } else {
        if (b_human_random) {
            Choice = random_choice()
        } else {
            Choice = best_choice(player2)
        }
    }
    if (Choice > -1) {
        Mark_and_check_for_win_or_draw(player2, Choice)
    }
}
function init_wins () {
    Wins = ["012", "345", "678", "036", "147", "258", "048", "246"]
}
function starting_selection () {
    g_selected_position_n = randint(0, 8)
    selected_place = Places[g_selected_position_n]
    selected_outline.x = selected_place.x
    selected_outline.y = selected_place.y
    selected_outline.z = 2
}
function create_message_sprites () {
    Image1x1 = image.create(1, 1)
    for (let index = 0; index <= 7; index++) {
        Msg1 = sprites.create(Image1x1, SpriteKind.Message)
        Msg1.z = 10
        Msg1.top = 15 + index * 15
    }
    message_sprites = sprites.allOfKind(SpriteKind.Message)
}
function best_choice (Player: number) {
    console.log("enter best choice")
    if (Choice > -1) {
        Choice = win_in_one(Player)
        return Choice
    } else {
        Choice = win_in_one(other_player(Player))
        if (Choice > -1) {
            display_messages("BLOCK", 4, 7)
            return Choice
        } else {
            Choice = most_possible_wins(Player)
            if (Choice > -1) {
                return Choice
            }
        }
    }
    Choice = random_choice()
    return Choice
}
function draw_lines () {
    Board_image = image.create(scene.screenHeight(), scene.screenHeight())
    Board_image.fill(1)
    Board_image.drawLine(4, 39, 116, 39, 15)
    Board_image.drawLine(4, 80, 116, 80, 15)
    Board_image.drawLine(39, 4, 39, 116, 15)
    Board_image.drawLine(80, 4, 80, 116, 15)
    Board = sprites.create(Board_image, SpriteKind.Player)
    Board.x = Board.x + board_left_margin
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    g_selected_position_n = next_left[g_selected_position_n]
    selected_outline.x = Places[g_selected_position_n].x
})
function other_player (this_player: number) {
    if (this_player == HUMAN) {
        return COMPUTER
    } else {
        return HUMAN
    }
}
function most_possible_wins (Player: number) {
    max_count = 0
    pos_win_count = 0
    Choice = -1
    for (let Pos = 0; Pos <= 8; Pos++) {
        pos_win_count = count_possible_wins(Pos, Player)
        if (pos_win_count > max_count) {
            max_count = pos_win_count
            Choice = Pos
        }
    }
    return Choice
}
function random_choice () {
    if (status_array.indexOf(BLANK) > -1) {
        tmp_array = []
        for (let Pos = 0; Pos <= 8; Pos++) {
            if (status_array[Pos] == BLANK) {
                tmp_array.push(Pos)
            }
        }
        return tmp_array[randint(0, tmp_array.length - 1)]
    } else {
        return -1
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    g_selected_position_n = next_right[g_selected_position_n]
    selected_outline.x = Places[g_selected_position_n].x
})
function start_New_game () {
    display_game_type(game_type)
    set_booleans_for_game_type(game_type)
    b_choosing_game_type = false
    display_messages("", 4, 7)
    status_array = []
    clear_board()
    starting_selection()
    if (randint(0, 1) == 0) {
        Next_player = COMPUTER
    } else {
        Next_player = HUMAN
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (b_choosing_game_type) {
        if (game_type_index - 1 < 0) {
            game_type_index = game_types.length - 1
        }
        game_type_index = game_type_index - 1
        game_type = game_types[game_type_index]
        display_game_type(game_type)
    } else {
        g_selected_position_n = next_down[g_selected_position_n]
        selected_outline.y = Places[g_selected_position_n].y
    }
})
function count_0_1_2s (Win: string) {
    Cmt = "Returns status string N_Xs & N_O & N_blanks s for positions in win"
    sss = "" + status_array[one_char_n(Win, 0)]
    sss = "" + sss + status_array[one_char_n(Win, 1)]
    sss = "" + sss + status_array[one_char_n(Win, 2)]
    N_Os = count_char(sss, "0")
    n_1s = count_char(sss, "1")
    n_2s = count_char(sss, "2")
    status_counts = "" + N_Os + n_1s + n_2s
    return status_counts
}
function set_booleans_for_game_type (game_type: string) {
    b_auto = one_char_n(game_type, 0) == 1
    b_human_random = one_char_n(game_type, 1) == 1
    b_computer_random = one_char_n(game_type, 2) == 1
}
function is_winner () {
    console.log("enter is winner")
    for (let a_win of Wins) {
        status_s = count_0_1_2s(a_win)
        N_Os = one_char_n(status_s, 0)
        n_1s = one_char_n(status_s, 1)
        n_2s = one_char_n(status_s, 2)
        if (N_Os == 3 || n_1s == 3) {
            return a_win
        }
    }
    return ""
}
function clear_messages () {
    for (let value of message_sprites) {
        value.say("")
    }
}
function win_in_one (player2: number) {
    for (let Pos = 0; Pos <= 8; Pos++) {
        for (let a_win of Wins) {
            // is this position in win?
            if (a_win.indexOf("" + Pos) > -1) {
                // is this position empty?
                if (status_array[Pos] == BLANK) {
                    // get status of each position in win
                    status_s = count_0_1_2s(a_win)
                    // number_of_empty_spaces
                    n_2s = one_char_n(status_s, BLANK)
                    // number of positions the player already has
                    N_player = one_char_n(status_s, player2)
                    // if one position empty and one is player then this position is win in one move
                    if (n_2s == 1 && N_player == 2) {
                        return Pos
                    }
                }
            }
        }
    }
    return -1
}
function count_possible_wins (Position: number, Player: number) {
    count_of_possible_wins_for_position = 0
    for (let a_win of Wins) {
        // is this position in this win
        if (a_win.indexOf("" + Position) > -1) {
            // is this position blank
            if (status_array[Position] == BLANK) {
                status_s = count_0_1_2s(a_win)
                // does other player have one or more markers in this win
                if (one_char_n(status_s, other_player(Player))) {
                    Cmt = "Blocked"
                } else {
                    count_of_possible_wins_for_position += 1
                }
            }
        }
    }
    return count_of_possible_wins_for_position
}
function mark_choice (Player: number, choice: number) {
    console.log("enter mark choice")
    g_selected_position_n = choice
    Place = Places[choice]
    Place.setImage(Marks[Player])
    status_array[choice] = Player
    selected_outline.x = Place.x
    selected_outline.y = Place.y
}
function count_char (string: string, char: string) {
    Count = 0
    for (let index = 0; index <= string.length - 1; index++) {
        if (string.substr(index, 1) == char) {
            Count += 1
        }
    }
    return Count
}
let Count = 0
let count_of_possible_wins_for_position = 0
let N_player = 0
let status_s = ""
let status_counts = ""
let n_2s = 0
let n_1s = 0
let N_Os = 0
let sss = ""
let Cmt = ""
let tmp_array: number[] = []
let pos_win_count = 0
let max_count = 0
let Board: Sprite = null
let Board_image: Image = null
let Msg1: Sprite = null
let Image1x1: Image = null
let selected_place: Sprite = null
let Wins: string[] = []
let b_human_random = false
let Choice = 0
let b_computer_random = false
let new_win_sprite: Sprite = null
let Win_image: Image = null
let b_auto = false
let max_len = 0
let lines_split: string[] = []
let message_sprites: Sprite[] = []
let index = 0
let S = ""
let a_win = ""
let winners: Sprite[] = []
let status_array: number[] = []
let g_selected_position_n = 0
let game_type_index = 0
let b_choosing_game_type = false
let next_down: number[] = []
let next_up: number[] = []
let next_left: number[] = []
let next_right: number[] = []
let Places: Sprite[] = []
let Place: Sprite = null
let L = 0
let T = 0
let selected_outline: Sprite = null
let Selected_image: Image = null
let Marks: Image[] = []
let O_image: Image = null
let X_image: Image = null
let Empty_image: Image = null
let game_type_names: string[] = []
let game_types: string[] = []
let board_left_margin = 0
let game_type = ""
let Next_player = 0
let BLANK = 0
let COMPUTER = 0
let HUMAN = 0
let ms_delay_between_moves = 0
HUMAN = 0
COMPUTER = 1
BLANK = 2
Next_player = BLANK
scene.setBackgroundColor(1)
game_type = "000"
set_booleans_for_game_type(game_type)
init_wins()
init_next()
init_game_types()
board_left_margin = 16
draw_lines()
place_position_sprites()
create_message_sprites()
start_New_game()
game.onUpdate(function () {
    if (Next_player != BLANK && !(b_choosing_game_type)) {
        pause(ms_delay_between_moves)
        display_messages("", 4, 7)
        if (Next_player == COMPUTER) {
            move_for(COMPUTER)
        } else {
            if (b_auto) {
                move_for(HUMAN)
            } else {
                display_messages("YOUR MOVE", 6, 7)
            }
        }
    }
})
