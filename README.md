## Middle Letters

This was an exercise to practice my TDD using Jasmine and Javascript

## Brief

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

Acceptance Criteria
get_middle("test") # => "es"
get_middle("testing") # => "t"
get_middle("middle") # => "dd"
get_middle("A") # => "A"
get_middle("of") # => "of"

## Planning

Thoughts-

- Will need to determine if length of word is odd or even
- Will need an if statement, 2 parts one for odd length words and one for even length words
- To get middle letter or letters- Odd length words + 1 to length and divide by 2, Even length, divide by 2, that character and the next
- To get characters in a string can use indices, remember 1st character is 0

Input | Output

"A" "A"
"of" "of"
"testing" "t"
"test" "es"
