function middleLetter(word) {
  const wordLength = word.length;

  const oddMiddleLetter = (wordLength - 1) / 2;

  const evenMiddleLetter = wordLength / 2;

  if (wordLength % 2 != 0) {
    return word[oddMiddleLetter];
  } else if (wordLength % 2 === 0 && wordLength > 2) {
    return word.substring(evenMiddleLetter - 1, evenMiddleLetter + 1);
  } else {
    return word;
  }
}
