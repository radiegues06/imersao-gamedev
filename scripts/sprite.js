class Sprite {
    constructor(imagePath, width, height, nRow, nColumn) {

        this.image = loadImage(imagePath);
        this.nRow = nRow;
        this.nColumn = nColumn;
        this.totalFrames = nRow * nColumn;
        this.width = width;
        this.height = height;
        this.cell = {
            width: width / nColumn,
            height: height / nRow
        }
    }
}