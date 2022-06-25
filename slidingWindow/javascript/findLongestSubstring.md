Hi, here's your problem today. This problem was recently asked by Microsoft:

[✅✅✅] Given a string, find the length of the longest substring without repeating characters.

Here is an example solution in Python language. (Any language is OK to use in an interview, though we'd recommend Python as a generalist language utilized by companies like Google, Facebook, Netflix, Dropbox, Pinterest, Uber, etc.,)

class Solution:
def lengthOfLongestSubstring(self, s): # Fill this in.

print Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx')

# 10

Can you find a solution in linear time?

<!-- PSUEDOCODE -->
<!-- declare variables like tmp, firstOccurrencePos, maxLength -->
<!-- loop through the string and concatenate into the tmp variable -->
<!-- IF current char is already in temp -> then cut out every string before it,using substr -->
<!-- also compare every new length of tmp using Math.max -->
