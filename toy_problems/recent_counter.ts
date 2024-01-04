
// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.


class RecentCounter {
    counter : Array<number>
    constructor() {
        this.counter = []; 
    }

    // returns total requests in last 3000 milliseconds including most recent
    ping(t: number): number {
        // adds new request at time t (time in milliseconds)
        // t could be --> 1, 2, 3000, 3001, 3002, etc. ascending
        this.counter.push(t);

        // unshift numbers that are out of range
        let i = 0
        let floor = t - 3000; 
        while (this.counter[i] < floor) {
            this.counter.shift(); // removes left most element
        }
    
        // return length of counter
        return this.counter.length; 
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */