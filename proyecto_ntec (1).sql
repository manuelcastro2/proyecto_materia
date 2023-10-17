-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2023 a las 02:16:32
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_ntec`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `nro_factura` varchar(255) DEFAULT NULL,
  `total_operation` float DEFAULT NULL,
  `type_bill` varchar(255) DEFAULT NULL,
  `tercero_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`id`, `date`, `nro_factura`, `total_operation`, `type_bill`, `tercero_id`) VALUES
(1, '12-10-2022', 'FV-1', 8000, 'FacturaVenta', 1),
(9, '12-10-2022', 'FV-2', 8000, 'Factura Venta', 5),
(15, '12-10-2022', 'FV-3', 8000, 'Factura Venta', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `itemsfactura`
--

CREATE TABLE `itemsfactura` (
  `id` bigint(20) NOT NULL,
  `count` int(11) DEFAULT NULL,
  `total_value_product` float DEFAULT NULL,
  `factura_id` bigint(20) NOT NULL,
  `productos_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `itemsfactura`
--

INSERT INTO `itemsfactura` (`id`, `count`, `total_value_product`, `factura_id`, `productos_id`) VALUES
(2, 2, 4000, 1, 1),
(3, 2, 4000, 1, 2),
(7, 2, 4000, 9, 1),
(8, 2, 4000, 9, 2),
(13, 2, 4000, 15, 1),
(14, 2, 4000, 15, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `code_product` varchar(255) DEFAULT NULL,
  `percentageiva` float DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `type_product` varchar(255) DEFAULT NULL,
  `unit_extent` varchar(255) DEFAULT NULL,
  `value_unitary` float DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `description`, `code_product`, `percentageiva`, `product`, `type_product`, `unit_extent`, `value_unitary`) VALUES
(1, 'a', 'p01', 19, 'pliego azul', 'cartulina', 'unidad', 2000),
(2, 'b', 'p02', 19, 'pliego amarillo', 'cartulina', 'unidad', 2000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terceros`
--

CREATE TABLE `terceros` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `document` varchar(255) DEFAULT NULL,
  `iphone` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type_document` varchar(255) DEFAULT NULL,
  `typethird` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `terceros`
--

INSERT INTO `terceros` (`id`, `address`, `document`, `iphone`, `name`, `type_document`, `typethird`) VALUES
(1, 'calle 69 #6-18', '1005259101', '3208946678', 'manuel castro', 'c.c.', 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `document` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `document`, `lastname`, `name`, `password`, `role`) VALUES
(5, '123456789', 'castro', 'juan', '12345678', 'ventas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_dlp8vjbe2huen8yugtr9qev2w` (`nro_factura`) USING HASH,
  ADD KEY `FK6xok5hdy5y0vgi28ej9hdfqno` (`tercero_id`);

--
-- Indices de la tabla `itemsfactura`
--
ALTER TABLE `itemsfactura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6pdsxsgrp0uct0i05q9kmup9h` (`factura_id`),
  ADD KEY `FKrflpe33kqle7m1yoi2frdqur2` (`productos_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_ikyrv633ewnu3b71qox76lhtu` (`code_product`) USING HASH;

--
-- Indices de la tabla `terceros`
--
ALTER TABLE `terceros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_mpx7tjs3ss888q3vkrwkokkt4` (`document`) USING HASH;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_bnx89q31ewoksugbf0ksw9bh0` (`document`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
