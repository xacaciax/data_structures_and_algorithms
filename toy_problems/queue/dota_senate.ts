function predictPartyVictory(senate: string): string {
    const n = senate.length;
    const rQ: number[] = [];
    const dQ: number[] = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") {
            rQ.push(i);
        } else {
            dQ.push(i);
        }

    }

    while (rQ.length > 0 && dQ.length > 0) {
        let rTurn = rQ.shift()!;
        let dTurn = dQ.shift()!;

        // Seneter with the lesser index is to the left and therefore can ban the Senetor to the right
        if (rTurn > dTurn) {
            dQ.push(dTurn + n);
        } else {
            rQ.push(rTurn + n);
        }

    }

    if (rQ.length === 0) {
        return 'Dire';
    } else if (dQ.length === 0) {
        return 'Radiant';
    }
    return '';
};