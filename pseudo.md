Logical flow:
A few sentences on general functionality and the steps necessary to do all those things.

Player arranges ships on board. Player selects an empty square to drop a bomb. If there's a ship there, it takes damage and Player gets to guess again. Otherwise, Computer gets a turn. Game goes until one side is out of ships.

- Create ships, players, and a game board
- Place ships
  - Cannot be overlapping or adjacent.
- Player clicks a square: playRound(...coords)
  - IF square has been clicked already, do nothing
  - IF a square has a ship
    - ship takes damage
    - mark as hit
    - IF sunk
      - mark all squares around it as clicked
      - Check game over
  - ELSE
    - mark square clicked
    - change players
    - IF Computer turn
      - delay 1 sec
      - Computer selects an open square: playRound(...coords)
  - IF game over
    - End game
