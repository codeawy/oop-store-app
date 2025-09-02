import { Product } from "./Product";

export class DigitalProduct extends Product {
  private readonly _downloadLink: string;
  private readonly _fileSize: number; // in MB

  private static readonly UNLIMITED_STOCK = Number.MAX_SAFE_INTEGER;

  constructor(
    name: string,
    price: number,
    downloadLink: string,
    fileSize: number
  ) {
    super(name, price, DigitalProduct.UNLIMITED_STOCK, "Digital");

    this._downloadLink = downloadLink;
    this._fileSize = fileSize;
  }

  // Getters for private properties
  get downloadLink(): string {
    return this._downloadLink;
  }

  get fileSize(): number {
    return this._fileSize;
  }

  get fileSizeFormatted(): string {
    return `${this._fileSize}MB`;
  }

  // Override parent method - demonstrates polymorphism
  public displayInfo(): string {
    return `${this.name} (Digital) - $${this.price} (${this._fileSize}MB)`;
  }

  public getDownloadInfo(): string {
    return `Download: ${this._downloadLink} (${this._fileSize}MB)`;
  }

  /**
   * Check if the file size is within acceptable limits
   * @param maxSize - Maximum allowed file size in MB
   * @returns true if file size is acceptable
   */
  public isFileSizeAcceptable(maxSize: number = 1000): boolean {
    return this._fileSize <= maxSize;
  }
}
