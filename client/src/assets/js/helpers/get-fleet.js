"use strict";

const _fleet = {
    boatData : [],
    ships : []
};

function getCorrectBoatSize(shipName) {
    const boat = _fleet.boatData.ships.find(ship => ship.name === shipName);
    return boat.size;
}


function calculateCoordinate(key, value, i) {
    return convertCoordinateAlphabetic({
        row: key === 'row' ? value : i,
        column: key === 'column' ? value : i
    });
}

function calculatePositions(key, from, to, value) {
    const positions = [];
    if (to > from) {
        for (let i = from; i <= to; i++) {
            positions.push(calculateCoordinate(key, value, i));
        }
    } else {
        for (let i = from; i >= to; i--) {
            positions.push(calculateCoordinate(key, value, i));
        }
    }
    return positions;
}

function getFullBoatPosition(head, tail) {
    if (head.row === tail.row) {
        return calculatePositions('row', tail.column, head.column, tail.row);
    } else if (head.column === tail.column) {
        return calculatePositions('column', tail.row, head.row, tail.column);
    }
    return null;
}

function storePositions(shipName, boatPositions) {
    _fleet.ships.push({name:shipName,
                location: boatPositions});
}
