function middleLetter(word) {
  const wordLength = word.length;

  if (wordLength % 2 != 0) {
    return word[(wordLength - 1) / 2];
  } else {
    return word;
  }
}
