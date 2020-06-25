class Sprite {
    constructor(imagePath, width, height, nRow, nColumn, totalFrames = nRow * nColumn) {

        this.image = loadImage(imagePath);
        this.nRow = nRow;
        this.nColumn = nColumn;
        this.totalFrames = totalFrames;
        this.width = width;
        this.height = height;
        this.cell = {
            width: width / nColumn,
            height: height / nRow
        }
    }
}