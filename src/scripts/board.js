export function ShipFactory(id, length) {
  let health = length;
  const hit = () => {
    health -= 1;
  };

  const getHealth = () => health;

  let vertical = false;
  const changeVertical = () => {
    vertical = !vertical;
  };
  const isVertical = () => vertical;

  const isAfloat = () => health >= 1;
  return {
    getID: () => id,
    length,
    getHealth,
    hit,
    isAfloat,
    changeVertical,
    isVertical,
  };
}

export const Square = () => {
  let attacked = 0;
  const wasAttacked = () => attacked;

  let ship = null;
  const isTaken = () => !!ship;
  const addShip = (newShip) => {
    ship = newShip;
  };

  const attack = () => {
    if (ship) {
      attacked = 2;
      ship.hit();
      const sunk = !ship.isAfloat();
      return { hit: true, sunk };
    }
    attacked = 1;
    return false;
  };

  const checkShipAfloat = () => ship?.isAfloat();

  const getShipId = () => ship?.getID();

  return {
    wasAttacked,
    isTaken,
    addShip,
    attack,
    checkShipAfloat,
    getShipId,
  };
};

export const BoardFactory = () => {
  const grid = [];
  for (let i = 0; i < 100; i += 1) {
    grid.push(Square());
  }
  const getGrid = () => [...grid];
  const getGridAttacks = () => grid.map((square) => square.wasAttacked());
  const getGridShips = () => grid.map((square) => +square.isTaken());
  const getGridIllegal = () =>
    grid.map((square, i) => {
      const testBase = [0, 10, -10];
      if (!(i % 10)) testBase.push(-9, 1, 11);
      else if (!((i + 1) % 10)) testBase.push(-11, -1, 9);
      else testBase.push(-9, 1, 11, -11, -1, 9);
      const adjacent = testBase
        .map((num) => grid[i + num]?.isTaken())
        .filter(Boolean).length;
      return +!!adjacent;
    });

  const shipsAfloat = new Set();
  const updateShipsAfloat = () => {
    shipsAfloat.clear();
    const ships = grid.filter((sq) => sq.checkShipAfloat());
    ships.forEach((item) => {
      shipsAfloat.add(item.getShipId());
    });
  };
  const getShipsAfloat = () => [...shipsAfloat];

  const placeShip = (ship, start) => {
    const spots = [];
    const { length, isVertical } = ship;
    const multiplier = isVertical() ? 10 : 1;
    const end = start + multiplier * length;
    for (let i = start; i < end; i += multiplier) {
      const vertBool = i >= 100;
      const horizBool = !(i % 10) || vertBool;
      if (
        (isVertical() ? vertBool : horizBool && i !== start) ||
        getGridIllegal()[i]
      ) {
        return false;
      }
      spots.push(i);
    }
    spots.forEach((i) => {
      grid[i].addShip(ship);
    });
    updateShipsAfloat();
    return true;
  };

  const findShip = (id) => {
    const coords = [];
    grid.forEach((square, index) => {
      if (square.getShipId() === id) {
        coords.push(index);
      }
    });
    return coords;
  };

  const findAdjacent = (sunkCoords, noDiagonals = false) => {
    const freeAttacks = new Set();
    sunkCoords.forEach((spot) => {
      const testBase = [10, -10];
      if (!(spot % 10)) testBase.push(-9, 1, 11);
      else if (!((spot + 1) % 10)) testBase.push(-11, -1, 9);
      else testBase.push(-9, 1, 11, -11, -1, 9);

      if (noDiagonals) {
        [9, -9, 11, -11].forEach((num) => {
          if (testBase.includes(num)) {
            const i = testBase.indexOf(num);
            testBase.splice(i, 1);
          }
        });
      }

      testBase.forEach((num) => {
        const coord = spot + num;
        if (grid[coord]?.wasAttacked() === 0) {
          freeAttacks.add(coord);
        }
      });
    });
    return [...freeAttacks].sort((a, b) => a - b);
  };

  const receiveAttack = (coord) => {
    const result = grid[coord].attack();
    if (result.sunk) {
      result.sunkCoords = findShip(grid[coord].getShipId());
      findAdjacent(result.sunkCoords).forEach((freeAttack) => {
        grid[freeAttack].attack();
      });
    }
    updateShipsAfloat();
    return result;
  };

  return {
    getGrid,
    getGridAttacks,
    getGridShips,
    getGridIllegal,
    placeShip,
    getShipsAfloat,
    findAdjacent,
    receiveAttack,
  };
};

export const boards = {
  p: {},
  c: {},
  reset: (target = false) => {
    if (target) {
      boards[target] = BoardFactory();
    } else {
      boards.p = BoardFactory();
      boards.c = BoardFactory();
    }
  },
};

export const ships = {
  p: {},
  c: {},
  reset: () => {
    [
      ['carrier', 5],
      ['battleship', 4],
      ['cruiser', 4],
      ['destroyer', 3],
      ['submarine', 3],
      ['patrol1', 2],
      ['patrol2', 2],
    ].forEach(([name, len]) => {
      ships.p[name] = ShipFactory(name, len);
      ships.c[name] = ShipFactory(name, len);
    });
  },
};

// function gridify(grid) {
//     return grid.reduce(
//         (acc, curr, index) => {
//             if (!(index % 10) && index > 0) acc.push([]);
//             acc[acc.length - 1].push(curr);
//             return acc;
//         },
//         [[]]
//     );
// }
