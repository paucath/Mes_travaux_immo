-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 01 sep. 2021 à 10:07
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
-- Structure de la table `professionnel`
--

DROP TABLE IF EXISTS `professionnel`;
CREATE TABLE IF NOT EXISTS `professionnel` (
  `id_pro` int(11) NOT NULL AUTO_INCREMENT,
  `societe_pro` varchar(255) NOT NULL,
  `tel_pro` varchar(11) NOT NULL,
  `address_pro` varchar(255) NOT NULL,
  `mail_pro` varchar(255) NOT NULL,
  `siret_pro` varchar(20) NOT NULL,
  `login_pro` varchar(255) NOT NULL,
  `mdp_pro` varchar(255) NOT NULL,
  `date_inscription` date NOT NULL,
  `statut_ab` tinyint(1) NOT NULL,
  `id_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_pro`),
  KEY `professionnel_ville_FK` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `professionnel`
--

INSERT INTO `professionnel` (`id_pro`, `societe_pro`, `tel_pro`, `address_pro`, `mail_pro`, `siret_pro`, `login_pro`, `mdp_pro`, `date_inscription`, `statut_ab`, `id_ville`) VALUES
(1, 'super établis', '456784345', '68 rue des rondelles', 'tournevis@gmail.com', '56896654345670', 'boulons', '3254', '2021-03-25', 1, 4),
(2, 'tailleandco', '643659832', '98 avenue des haie', 'coupcoup@mail.com', '36805431568904', 'gazon', '0987', '2021-05-17', 1, 5),
(3, 'tuyaux et fuite', '412659834', '01 route de l\'eau', 'tandf@mail.com', '54987903421574', 'clef', '0724', '2021-04-07', 1, 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `professionnel`
--
ALTER TABLE `professionnel`
  ADD CONSTRAINT `professionnel_ville_FK` FOREIGN KEY (`id_ville`) REFERENCES `ville` (`id_ville`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
