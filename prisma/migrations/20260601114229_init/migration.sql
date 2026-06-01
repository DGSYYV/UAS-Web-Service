-- CreateTable
CREATE TABLE `Merek` (
    `id_merek` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_merek` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_merek`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShoesType` (
    `id_type` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shoes` (
    `id_shoes` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `id_type` INTEGER NOT NULL,
    `id_merek` INTEGER NOT NULL,

    PRIMARY KEY (`id_shoes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Size` (
    `id_size` INTEGER NOT NULL AUTO_INCREMENT,
    `id_shoes` INTEGER NOT NULL,
    `stock_qty` INTEGER NOT NULL,

    PRIMARY KEY (`id_size`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Price` (
    `id_price` INTEGER NOT NULL AUTO_INCREMENT,
    `id_shoes` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id_price`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Shoes` ADD CONSTRAINT `Shoes_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `ShoesType`(`id_type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shoes` ADD CONSTRAINT `Shoes_id_merek_fkey` FOREIGN KEY (`id_merek`) REFERENCES `Merek`(`id_merek`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Size` ADD CONSTRAINT `Size_id_shoes_fkey` FOREIGN KEY (`id_shoes`) REFERENCES `Shoes`(`id_shoes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Price` ADD CONSTRAINT `Price_id_shoes_fkey` FOREIGN KEY (`id_shoes`) REFERENCES `Shoes`(`id_shoes`) ON DELETE RESTRICT ON UPDATE CASCADE;
