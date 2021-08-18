-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 18 août 2021 à 12:59
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
-- Structure de la table `actualite`
--

DROP TABLE IF EXISTS `actualite`;
CREATE TABLE IF NOT EXISTS `actualite` (
  `id_news` int(11) NOT NULL AUTO_INCREMENT,
  `catch_phrase_news` varchar(255) NOT NULL,
  `title_news` varchar(255) NOT NULL,
  `article_news` text NOT NULL,
  PRIMARY KEY (`id_news`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id_news`, `catch_phrase_news`, `title_news`, `article_news`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Actu 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum'),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Actu 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum'),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Actu 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `login_admin` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `login_admin`, `mdp`) VALUES
(1, 'The boss', '1234');

-- --------------------------------------------------------

--
-- Structure de la table `cgu_cgv`
--

DROP TABLE IF EXISTS `cgu_cgv`;
CREATE TABLE IF NOT EXISTS `cgu_cgv` (
  `id_cgu_cgv` int(11) NOT NULL AUTO_INCREMENT,
  `CGU` text NOT NULL,
  `CGV` text NOT NULL,
  PRIMARY KEY (`id_cgu_cgv`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cgu_cgv`
--

INSERT INTO `cgu_cgv` (`id_cgu_cgv`, `CGU`, `CGV`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `prenom_client` varchar(255) NOT NULL,
  `nom_client` varchar(255) NOT NULL,
  `tel_client` int(11) NOT NULL,
  `address_client` varchar(255) NOT NULL,
  `mail_client` varchar(255) NOT NULL,
  `login_client` varchar(255) NOT NULL,
  `mdp_client` varchar(255) NOT NULL,
  `id_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_client`),
  KEY `client_ville_FK` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `prenom_client`, `nom_client`, `tel_client`, `address_client`, `mail_client`, `login_client`, `mdp_client`, `id_ville`) VALUES
(1, 'jane', 'doe', 434769012, '55 rue null part', 'janedoe@mail.com', 'jane', '1234', 2),
(2, 'alain', 'deloin', 409457231, '68 route des lunettes', 'alaindeloin@mail.com', 'deloin', '0000', 3),
(3, 'sophie', 'lagiraffe', 433265806, 'avenue du kenya', 'lagiraffe@mail.com', 'sophie', '9999', 5),
(4, 'pierre', 'pierre', 408973412, ' 21 chemin des cailloux', 'pierrep@mail.com', 'pierre', 'pier', 4);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_facture` int(11) NOT NULL AUTO_INCREMENT,
  `facture` text NOT NULL,
  `id_pro` int(11) NOT NULL,
  PRIMARY KEY (`id_facture`),
  KEY `facture_professionnel_FK` (`id_pro`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `facture`, `id_pro`) VALUES
(1, 'facture1', 1),
(2, 'facture2', 1),
(3, 'facture3', 1),
(4, 'facture1', 2),
(5, 'facture2', 2),
(6, 'facture1', 3);

-- --------------------------------------------------------

--
-- Structure de la table `mention_legale`
--

DROP TABLE IF EXISTS `mention_legale`;
CREATE TABLE IF NOT EXISTS `mention_legale` (
  `id_legal_notice` int(11) NOT NULL AUTO_INCREMENT,
  `article_legal_notice` text NOT NULL,
  PRIMARY KEY (`id_legal_notice`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `mention_legale`
--

INSERT INTO `mention_legale` (`id_legal_notice`, `article_legal_notice`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

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
  `id_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_pro`),
  KEY `professionnel_ville_FK` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `professionnel`
--

INSERT INTO `professionnel` (`id_pro`, `societe_pro`, `tel_pro`, `address_pro`, `mail_pro`, `siret_pro`, `login_pro`, `mdp_pro`, `id_ville`) VALUES
(1, 'superboulon', '456784345', 'rue des rondelles', 'boulons@mail.fr', '56896654345670', 'boulons', '3254', 4),
(2, 'tailleandco', '643659832', '98 avenue des haie', 'coupcoup@mail.com', '36805431568904', 'gazon', '0987', 5),
(3, 'tuyaux et fuite', '412659834', '01 route de l\'eau', 'tandf@mail.com', '54987903421574', 'clef', '0724', 2);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_projet` int(11) NOT NULL AUTO_INCREMENT,
  `size_work` varchar(255) NOT NULL,
  `type_work` varchar(255) NOT NULL,
  `area` int(11) NOT NULL,
  `duration` time NOT NULL,
  `price` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_pro` int(11) NOT NULL,
  PRIMARY KEY (`id_projet`),
  KEY `projet_client_FK` (`id_client`),
  KEY `projet_professionnel0_FK` (`id_pro`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `size_work`, `type_work`, `area`, `duration`, `price`, `id_client`, `id_pro`) VALUES
(9, 'gros oeuvre', 'placo', 15, '20:00:00', 300, 2, 3),
(11, 'gros oeuvre', 'carrelage', 100, '36:00:00', 1000, 4, 2),
(15, 'petits travaux', 'jardinage', 0, '05:00:00', 100, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `societe`
--

DROP TABLE IF EXISTS `societe`;
CREATE TABLE IF NOT EXISTS `societe` (
  `id_societe` int(11) NOT NULL AUTO_INCREMENT,
  `name_societe` varchar(255) NOT NULL,
  `address_societe` varchar(255) NOT NULL,
  `mail_societe` varchar(255) NOT NULL,
  `tel_societe` varchar(255) NOT NULL,
  PRIMARY KEY (`id_societe`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `societe`
--

INSERT INTO `societe` (`id_societe`, `name_societe`, `address_societe`, `mail_societe`, `tel_societe`) VALUES
(1, 'HWCOM', '6 bis Rue du Pont Vieux\r\n34820 Teyran', 'contact@hwcom.fr', '0');

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `id_ville` int(11) NOT NULL AUTO_INCREMENT,
  `code_ville` int(11) NOT NULL,
  `ville` varchar(255) NOT NULL,
  PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id_ville`, `code_ville`, `ville`) VALUES
(2, 34678, 'bouloncity'),
(3, 98321, 'inconnueville'),
(4, 12543, 'fleurcity'),
(5, 67654, 'workville');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ville_FK` FOREIGN KEY (`id_ville`) REFERENCES `ville` (`id_ville`);

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `facture_professionnel_FK` FOREIGN KEY (`id_pro`) REFERENCES `professionnel` (`id_pro`);

--
-- Contraintes pour la table `professionnel`
--
ALTER TABLE `professionnel`
  ADD CONSTRAINT `professionnel_ville_FK` FOREIGN KEY (`id_ville`) REFERENCES `ville` (`id_ville`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `projet_client_FK` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`),
  ADD CONSTRAINT `projet_professionnel0_FK` FOREIGN KEY (`id_pro`) REFERENCES `professionnel` (`id_pro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
