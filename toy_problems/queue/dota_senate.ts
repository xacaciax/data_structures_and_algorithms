
// Single Queue Solution
function predictPartyVictory(senate: string): string {
    if(senate.length < 2) return senate[0] == 'R' ? 'Radiant' : 'Dire';

    // Keeps track of total eligable to vote senetors on each side
    let dCount = 0,rCount = 0;

    // Keeps track of whether the previous senetor set a ban on the next senetor of opposite side
    let dFloatingBan = 0, rFloatingBan = 0;

    // data structure that allows us to handle senetor votes one at a time while maintaining the voting order
    let q: string[] = [];

    // account for number of senetors in each party
    // add all senetors to the queue to get ready to vote
    for(let i = 0; i < senate.length; i++) {
        if(senate[i] == 'D') {
            dCount++;
        } else {
            rCount++;
        }
        q.push(senate[i]);
    }


    // while there are still eligible senetors left to vote, handle voting
    // exit condition: no more eligible to vote senetors for D or R parties
    while(dCount > 0 && rCount > 0) {
        console.log(q, dFloatingBan,  rFloatingBan);
        let votingMember = q.shift();

        if (votingMember === 'D') {
            // previous iteration floated a ban on next D
            if(dFloatingBan > 0) {
                dFloatingBan--; // remove floating ban 
                dCount--; // this senetor does not get to vote, "remove" senetor from eligible voting pool
            } else {
                rFloatingBan++; // current senetor floats a ban on next opposing senetor in line
                q.push('D'); // this senetor gets to vote again in the next round
            }
        } else {
            // previous iteration floated a ban on nextR
            if(rFloatingBan > 0) {
                rFloatingBan--; // remove floating ban to account for next step
                rCount--; // this senetor does not get to vote, "remove" senetor from eligible voting pool
            } else {
                dFloatingBan++; // current senetor floats ban on next opposing senetor in line
                q.push('R'); // this senetor gets to vote again in the next round
            }
        }
    }

    return rCount > 0 ? 'Radiant' : 'Dire';
};

// Double Queue Solution
function predictPartyVictory2(senate: string): string {
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