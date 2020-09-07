class Connect4 {
  constructor(selector) {
    this.ROWS = 7;
    this.COLS = 6;
    this.selector = selector;
    this.createGrid();
  }
  createGrid() {
    const board = this.selector;
    for (let row = 0; row < this.ROWS; row++) {
      const row = document.createElement("div");
      // row.classList.add("row");
      row.classList.add("grid");
      for (let coli = 0; coli < this.COLS; coli++) {
        var col = document.createElement("div");
        col.classList.add("grid");

        row.append(col);
      }

      board.append(row);
    }
    document.body.append(board);
    console.log(board);
  }
}
