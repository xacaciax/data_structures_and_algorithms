/**
 * Determines if it is possible to attend all meetings with the given intervals.
 * @param intervals - An array of intervals, where each interval is represented as a 2-element array [start, end]
 * @returns 1 if it is possible to attend all meetings, 0 otherwise.
 */
function can_attend_all_meetings(intervals: number[][]): number {
    // presort input by first value (start time)
    intervals.sort((a, b) => a[0] - b[0]);
  
    // scan sorted array and compare the current end time with the next meeting start time
    for (let i = 0; i <= intervals.length - 2; i++) {
      let currentMeetingEnd = intervals[i][1];
      let nextMeetingStart = intervals[i + 1][0];
      // if the next meeting start time is less than the current end time
      if (currentMeetingEnd > nextMeetingStart) {
        return 0;
      }
    }
    return 1;
  }
  