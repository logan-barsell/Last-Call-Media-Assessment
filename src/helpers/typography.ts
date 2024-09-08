// TYPOGRAPHY Helper Functions

// truncates the given string at the given max length with the ending provided
export const textTruncate = (str: string, length = 50, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
