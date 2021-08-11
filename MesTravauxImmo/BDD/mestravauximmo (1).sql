-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 11 août 2021 à 10:18
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
  `title_news` varchar(255) NOT NULL,
  `catch_phrase_news` varchar(255) NOT NULL,
  `article_news` text NOT NULL,
  PRIMARY KEY (`id_news`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id_news`, `title_news`, `catch_phrase_news`, `article_news`) VALUES
(1, 'Actu 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum'),
(2, 'Actu 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum'),
(3, 'Actu 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `cgu_cgv`
--

DROP TABLE IF EXISTS `cgu_cgv`;
CREATE TABLE IF NOT EXISTS `cgu_cgv` (
  `id_cgu_cgv` int(11) NOT NULL AUTO_INCREMENT,
  `CGU` text NOT NULL,
  `cgv` text NOT NULL,
  PRIMARY KEY (`id_cgu_cgv`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cgu_cgv`
--

INSERT INTO `cgu_cgv` (`id_cgu_cgv`, `CGU`, `cgv`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `devis`
--

DROP TABLE IF EXISTS `devis`;
CREATE TABLE IF NOT EXISTS `devis` (
  `id_devis` int(11) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) NOT NULL,
  `size_work` varchar(255) NOT NULL,
  `type_work` varchar(255) NOT NULL,
  `area` int(11) DEFAULT NULL,
  `duration` time NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id_devis`),
  KEY `devis_membre_FK` (`id_member`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `devis`
--

INSERT INTO `devis` (`id_devis`, `id_member`, `size_work`, `type_work`, `area`, `duration`, `price`) VALUES
(1, 2, 'Gros oeuvre', 'béton', 12, '72:00:00', 1500),
(2, 2, 'petit travaux', 'peinture', 100, '72:00:00', 500);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_facture` int(11) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) NOT NULL,
  `facture` text NOT NULL,
  PRIMARY KEY (`id_facture`),
  KEY `facture_membre_FK` (`id_member`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `id_member`, `facture`) VALUES
(1, 1, 'facture 1'),
(2, 1, 'facture 2'),
(3, 1, 'facture 3');

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

DROP TABLE IF EXISTS `membre`;
CREATE TABLE IF NOT EXISTS `membre` (
  `id_member` int(11) NOT NULL AUTO_INCREMENT,
  `id_type_user` int(11) NOT NULL,
  `name_member` varchar(255) DEFAULT NULL,
  `first_name_member` varchar(255) DEFAULT NULL,
  `society_member` varchar(255) DEFAULT NULL,
  `address_member` varchar(255) NOT NULL,
  `phone_member` int(11) NOT NULL,
  `mail_member` varchar(255) NOT NULL,
  `siret_member` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id_member`),
  KEY `membre_type_user_FK` (`id_type_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`id_member`, `id_type_user`, `name_member`, `first_name_member`, `society_member`, `address_member`, `phone_member`, `mail_member`, `siret_member`) VALUES
(1, 2, 'plombier', 'jean', 'debouche tout ', '34 rue du tuyaux ', 634568743, 'plombier@debouchetout.com', '14742367956784'),
(2, 3, 'inconnue', 'sophie', NULL, '12 rue jane doe ', 634568743, 'sophieinconnu@hotmail.fr', NULL),
(3, 1, 'GRAND', 'patron', NULL, '001 rue au top', 634568743, 'grandpatron@hotmail.fr', NULL);

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
-- Structure de la table `societe`
--

DROP TABLE IF EXISTS `societe`;
CREATE TABLE IF NOT EXISTS `societe` (
  `id_society` int(11) NOT NULL AUTO_INCREMENT,
  `name_society` varchar(255) NOT NULL,
  `address_society` varchar(255) NOT NULL,
  `mail_society` varchar(255) NOT NULL,
  `phone_society` int(11) NOT NULL,
  PRIMARY KEY (`id_society`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `societe`
--

INSERT INTO `societe` (`id_society`, `name_society`, `address_society`, `mail_society`, `phone_society`) VALUES
(1, 'HWCOM', '6 bis Rue du Pont Vieux\r\n34820 Teyran', 'contact@hwcom.fr', 0);

-- --------------------------------------------------------

--
-- Structure de la table `type_user`
--

DROP TABLE IF EXISTS `type_user`;
CREATE TABLE IF NOT EXISTS `type_user` (
  `id_type_user` int(11) NOT NULL AUTO_INCREMENT,
  `type_user` varchar(255) NOT NULL,
  PRIMARY KEY (`id_type_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `type_user`
--

INSERT INTO `type_user` (`id_type_user`, `type_user`) VALUES
(1, 'Super Admin'),
(2, 'Professionnel'),
(3, 'CLient');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `devis`
--
ALTER TABLE `devis`
  ADD CONSTRAINT `devis_membre_FK` FOREIGN KEY (`id_member`) REFERENCES `membre` (`id_member`);

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `facture_membre_FK` FOREIGN KEY (`id_member`) REFERENCES `membre` (`id_member`);

--
-- Contraintes pour la table `membre`
--
ALTER TABLE `membre`
  ADD CONSTRAINT `membre_type_user_FK` FOREIGN KEY (`id_type_user`) REFERENCES `type_user` (`id_type_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
