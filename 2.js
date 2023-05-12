function showCategory(category) {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      if (square.classList.contains(category)) {
        square.classList.remove('hidden');
      } else {
        square.classList.add('hidden');
      }
    });
}