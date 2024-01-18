function issueCard(name, age) {
  return {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: age < 18
  };
};

function searchByAuthor(collection, authorName) {
  let results = []

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].author === authorName) {
      results.push(collection[i]);
    }
  };

  if (results.length === 0) {
    return 'No book found for search criteria';
  } else {
    return results;
  };
}

module.exports = {
  issueCard,
  searchByAuthor,
};