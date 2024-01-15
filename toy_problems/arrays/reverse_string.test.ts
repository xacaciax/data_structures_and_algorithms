// write tests for the reverseString function in reverse_string.ts

import reverseWords from './reverse_strings.ts';

describe('reverseWords', () => {
    it('should reverse the words in a string', () => {
        expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
        expect(reverseWords('  hello world  ')).toEqual('world hello');
        expect(reverseWords('a good   example')).toEqual('example good a');
    });
    it('should return an empty string if the input string is empty', () => {
        expect(reverseWords('')).toEqual('');
    });
    it('should return the input string if the input string is a single word', () => {
        expect(reverseWords('hello')).toEqual('hello');
    });
};