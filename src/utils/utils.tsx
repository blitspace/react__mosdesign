const utils = {
  htmlEntities: function(input: string) {
    return input
      .replace('&#8217;', '\'')
      .replace('&#038;', '—')
      .replace('&amp;', '&');
  }
}


export default utils;
