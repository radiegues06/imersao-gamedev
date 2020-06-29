class Sprite {
    constructor(imagePath, width, height, nRow, nColumn,
        totalFrames = nRow * nColumn, horizontalCrop = 0, verticalCrop = 0) {

        this.image = loadImage(imagePath);
        this.nRow = nRow;
        this.nColumn = nColumn;
        this.totalFrames = totalFrames;
        this.width = width;
        this.height = height;
        this.column = 0;
        this.row = 0;
        this.horizontalCrop = horizontalCrop;
        this.verticalCrop = verticalCrop;
        this.cell = {
            width: width / nColumn,
            height: height / nRow
        }
        this.crop = {
            width: this.cell.width - 2 * this.horizontalCrop,
            height: this.cell.height - 2 * this.verticalCrop
        }
    }
}