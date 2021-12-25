function capitalize(str) {
    const upperCaseFirstLetter = str.charAt(0).toUpperCase();
    const restOfTheWord = str.substring(1);
    return upperCaseFirstLetter + restOfTheWord;
}