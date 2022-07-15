-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_warehouseapp
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_name` varchar(140) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `weight` float NOT NULL,
  `detail_product` varchar(140) NOT NULL,
  `picture` varchar(140) NOT NULL,
  `gender` varchar(45) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Fordive 1970 EDP',279000.00,100,'Top Notes : Pink Pepper, Juniper, Violet, Grapefruit','https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/030b31bd-a014-4ec3-acba-3c3906fafd1a.jpg','male'),(2,'Versace Eros Flame EDP',1200000.00,100,'Versace Eros Flame the new men’s','https://images.tokopedia.net/img/cache/900/product-1/2019/12/26/64214427/64214427_f10a0b99-2b19-489c-bb05-c35191f4b09e_1459_1459','male'),(3,'Versace Eros EDT',799000.00,50,'It’s a fragrance designed for a strong, passionate man,','https://images.tokopedia.net/img/cache/900/product-1/2019/12/31/64214427/64214427_f78912f3-f2c7-4a7e-9a2e-f3cef535f3c0_700_700','male'),(4,'John Varvatos Classic EDT',920000.00,125,'Modern. Bold. Sophisticated.','https://images.tokopedia.net/img/cache/900/product-1/2020/1/31/64214427/64214427_4c651f8f-a63b-422d-9e41-9d49bc373e60_567_567','male'),(5,'Hermes Terre D\'Hermes EDT',1899000.00,200,'Woody Spicy fragrance for men','https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/13fa7339-2d49-4252-a839-a2ee37fdd108.jpg','male'),(6,'Rasasi Daarej EDP',420000.00,100,'Daarej is a spicy, flirty and romantic concoction that opens on strong spicy notes and meanders through the floral middle notes laced ','https://images.tokopedia.net/img/cache/900/product-1/2019/11/28/485377062/485377062_e3d679fb-b41b-4fdb-9dc3-0d02e696fa6c.jpg','male'),(7,'Coach Women EDP',679000.00,90,'Coach is a Floral fragrance for women.','https://images.tokopedia.net/img/cache/900/VqbcmM/2022/1/11/21563627-97ff-4079-8f4a-c3ccf817df61.png','women'),(8,'Gucci Bloom For Women EDP',1100000.00,100,'Gucci is a Floral fragrance for women','https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/6/4fe85c20-9c45-4e17-a49b-33e7705085b2.png','women'),(9,'Salvatore Ferragamo Signorina EDP',540000.00,100,'Salvatore Ferragamo is a Floral Fruity fragrance for women','https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/2/789cdf1a-ad10-4aa8-ba59-f702c41960b2.png','women'),(10,'Marc Jacobs Perfect Intense EDP',990000.00,100,'Perfect Intense by Marc Jacobs is a Amber Floral fragrance for women','https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/12/c836b087-6bce-4435-b242-8274a4c2cd97.png','women');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-15 23:18:12
