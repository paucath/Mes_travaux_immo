-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 01 sep. 2021 à 10:03
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mestravauximmo`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id_message` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `objet` varchar(255) NOT NULL,
  `texte` text NOT NULL,
  PRIMARY KEY (`id_message`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id_message`, `email`, `nom`, `prenom`, `objet`, `texte`) VALUES
(1, 'client1@gmail.com', 'client', '1', ' blabla1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin tristique risus vitae tempus. Sed augue nisl, egestas et hendrerit in, faucibus eget magna. Quisque elementum luctus dapibus. Curabitur finibus, ipsum nec posuere elementum, justo metus commodo sem, nec tempus odio tellus at dui. Mauris auctor turpis eget libero porta tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pellentesque augue ut magna bibendum dignissim. Fusce non ligula vel risus ultrices ultricies. Nulla sit amet enim sit amet ipsum rhoncus sodales eget sit amet felis. Ut nec consequat lorem, sed accumsan nisl. Curabitur massa enim, viverra vel eleifend sit amet, euismod nec dui. Cras at pharetra massa, elementum fermentum lectus.'),
(2, 'client2@gmail.com', 'client', '2', ' blabla2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin tristique risus vitae tempus. Sed augue nisl, egestas et hendrerit in, faucibus eget magna. Quisque elementum luctus dapibus. Curabitur finibus, ipsum nec posuere elementum, justo metus commodo sem, nec tempus odio tellus at dui. Mauris auctor turpis eget libero porta tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pellentesque augue ut magna bibendum dignissim. Fusce non ligula vel risus ultrices ultricies. Nulla sit amet enim sit amet ipsum rhoncus sodales eget sit amet felis. Ut nec consequat lorem, sed accumsan nisl. Curabitur massa enim, viverra vel eleifend sit amet, euismod nec dui. Cras at pharetra massa, elementum fermentum lectus.'),
(3, 'client3@gmail.com', 'client', '3', ' blabla3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin tristique risus vitae tempus. Sed augue nisl, egestas et hendrerit in, faucibus eget magna. Quisque elementum luctus dapibus. Curabitur finibus, ipsum nec posuere elementum, justo metus commodo sem, nec tempus odio tellus at dui. Mauris auctor turpis eget libero porta tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pellentesque augue ut magna bibendum dignissim. Fusce non ligula vel risus ultrices ultricies. Nulla sit amet enim sit amet ipsum rhoncus sodales eget sit amet felis. Ut nec consequat lorem, sed accumsan nisl. Curabitur massa enim, viverra vel eleifend sit amet, euismod nec dui. Cras at pharetra massa, elementum fermentum lectus.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
