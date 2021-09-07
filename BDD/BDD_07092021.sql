-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 07 sep. 2021 à 13:15
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
  `img_actu` varchar(255) NOT NULL,
  PRIMARY KEY (`id_news`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id_news`, `title_news`, `catch_phrase_news`, `article_news`, `img_actu`) VALUES
(1, 'Actu 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum', 'arosage.jpg'),
(2, 'Actu 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum', 'bricolage.jpg'),
(3, 'Actu 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis rhoncus diam lobortis dignissim. Duis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum', 'jardinage.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `login_admin` varchar(255) NOT NULL,
  `mdp` int(11) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `nom`, `prenom`, `email`, `login_admin`, `mdp`) VALUES
(1, 'the', 'boss', 'theboss@gmail.fr', 'The boss', 1234);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `categorie` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `categorie`) VALUES
(5, 'peinture'),
(6, 'carrelage'),
(7, 'aménagement paysagé'),
(8, 'isolation');

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
  `id_ville` int(11) NOT NULL,
  `prenom_client` varchar(255) NOT NULL,
  `nom_client` varchar(255) NOT NULL,
  `tel_client` int(11) NOT NULL,
  `address_client` varchar(255) NOT NULL,
  `mail_client` varchar(255) NOT NULL,
  `login_client` varchar(255) DEFAULT NULL,
  `mdp_client` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  KEY `client_ville_FK` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `id_ville`, `prenom_client`, `nom_client`, `tel_client`, `address_client`, `mail_client`, `login_client`, `mdp_client`) VALUES
(1, 2, 'jane', 'doe', 434769012, '55 rue null part', 'janedoe@mail.com', 'jane', '1234'),
(2, 3, 'alain', 'deloin', 409457231, '68 route des lunettes', 'alaindeloin@mail.com', 'deloin', '0000'),
(3, 2, 'sophie', 'lagiraffe', 433265806, 'avenue du kenya', 'lagiraffe@mail.com', 'sophie', '9999'),
(4, 4, 'pierre', 'pierre', 408973412, ' 21 chemin des cailloux', 'pierrep@mail.com', 'pierre', 'pier');

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_facture` int(11) NOT NULL AUTO_INCREMENT,
  `id_pro` int(11) NOT NULL,
  `facture` text NOT NULL,
  PRIMARY KEY (`id_facture`),
  KEY `facture_professionnel_FK` (`id_pro`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `id_pro`, `facture`) VALUES
(1, 1, 'facture1'),
(2, 1, 'facture2'),
(3, 1, 'facture3'),
(4, 2, 'facture1'),
(5, 2, 'facture2'),
(6, 3, 'facture1');

-- --------------------------------------------------------

--
-- Structure de la table `mention_legale`
--

DROP TABLE IF EXISTS `mention_legale`;
CREATE TABLE IF NOT EXISTS `mention_legale` (
  `id_mention_legale` int(11) NOT NULL AUTO_INCREMENT,
  `article_l_m` text NOT NULL,
  PRIMARY KEY (`id_mention_legale`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `mention_legale`
--

INSERT INTO `mention_legale` (`id_mention_legale`, `article_l_m`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis feugiat, pellentesque erat in, congue dolor. Cras vitae lacus efficitur, maximus massa in, molestie nisl. Proin dictum pellentesque tellus vel tempor. Aenean id odio id quam luctus scelerisque et vitae magna. Nulla ipsum augue, auctor a volutpat eget, congue viverra nisi. Pellentesque mattis felis ligula, ac facilisis velit vestibulum id. Vestibulum egestas facilisis lectus a rhoncus. Nam ut malesuada justo. Curabitur posuere tincidunt pulvinar. Donec vitae felis nec nisi dignissim pellentesque. Sed mattis urna in mi finibus, molestie elementum turpis maximus. Nam cursus vel massa at imperdiet. Vestibulum non mauris vitae ipsum faucibus condimentum. Nunc sit amet scelerisque nisl, sed tempus felis.\r\n\r\nEtiam sollicitudin, tellus vitae efficitur efficitur, erat mi bibendum metus, vitae scelerisque lectus ex nec quam. Etiam egestas commodo est vel tristique. Duis aliquet elit nec lacus lobortis, quis pretium risus porta. Suspendisse ullamcorper fringilla arcu. Morbi mollis, mauris at convallis porttitor, est ligula feugiat leo, cursus semper ante ipsum at felis. Cras aliquam metus eget dolor suscipit, sit amet blandit lacus feugiat. Integer aliquam a turpis vel sagittis. Morbi justo est, mattis ut placerat nec, lacinia eu nisi. Fusce semper ornare lectus, a vehicula turpis porta ac. Nunc euismod dui vitae condimentum elementum.\r\n\r\nSed volutpat augue molestie fringilla rhoncus. Pellentesque ex quam, venenatis a vulputate gravida, ornare a elit. Suspendisse sed consectetur nisl. Vivamus maximus auctor lacus, id gravida turpis porttitor sed. Quisque laoreet vulputate lobortis. Vivamus pulvinar dapibus felis, eget vestibulum ligula congue vitae. Nunc feugiat purus massa, non pharetra nibh euismod eu. Etiam molestie justo vel sem finibus feugiat. Proin mauris nisi, cursus at velit sit amet, consequat condimentum ligula. Nunc nec tortor odio.\r\n\r\nGenerated 3 paragraphs, 280 words, 1934 bytes of Lorem Ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id_messages` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `objet` varchar(255) NOT NULL,
  `texte` text NOT NULL,
  PRIMARY KEY (`id_messages`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id_messages`, `nom`, `prenom`, `email`, `objet`, `texte`) VALUES
(1, 'lagiraffe', 'sophie', 'sophielagiraffe@gmail.com', 'blabla1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit interdum vulputate. Fusce egestas sapien lacus. Pellentesque ultricies nec massa finibus molestie. In et pharetra mauris. Quisque volutpat ipsum at ex cursus, accumsan accumsan sem gravida. Cras vel dignissim velit, sed iaculis elit. Nullam at nunc eget quam semper elementum. Suspendisse potenti. Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.'),
(2, 'pierre', 'pierre', 'pierre@gmail.com', 'blabla2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit interdum vulputate. Fusce egestas sapien lacus. Pellentesque ultricies nec massa finibus molestie. In et pharetra mauris. Quisque volutpat ipsum at ex cursus, accumsan accumsan sem gravida. Cras vel dignissim velit, sed iaculis elit. Nullam at nunc eget quam semper elementum. Suspendisse potenti. Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.');

-- --------------------------------------------------------

--
-- Structure de la table `professionnel`
--

DROP TABLE IF EXISTS `professionnel`;
CREATE TABLE IF NOT EXISTS `professionnel` (
  `id_pro` int(11) NOT NULL AUTO_INCREMENT,
  `id_ville` int(11) NOT NULL,
  `societe_pro` varchar(255) NOT NULL,
  `tel_pro` int(11) NOT NULL,
  `address_pro` varchar(255) NOT NULL,
  `mail_pro` varchar(255) NOT NULL,
  `siret_pro` varchar(20) NOT NULL,
  `login_pro` varchar(255) NOT NULL,
  `mdp_pro` varchar(255) NOT NULL,
  `date_inscription` date NOT NULL,
  `statut_ab` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_pro`),
  KEY `professionnel_ville_FK` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `professionnel`
--

INSERT INTO `professionnel` (`id_pro`, `id_ville`, `societe_pro`, `tel_pro`, `address_pro`, `mail_pro`, `siret_pro`, `login_pro`, `mdp_pro`, `date_inscription`, `statut_ab`) VALUES
(1, 4, 'superboulon', 456784345, 'rue des rondelles', 'boulons@mail.fr', '56896654345670', 'boulons', '3254', '2020-10-11', 1),
(2, 3, 'tailleandco', 643659832, '98 avenue des haie', 'coupcoup@mail.com', '36805431568904', 'gazon', '0987', '2020-02-09', 1),
(3, 2, 'tuyaux et fuite', 412659834, '01 route de l\'eau', 'tandf@mail.com', '54987903421574', 'clef', '0724', '2020-02-05', 1);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_projet` int(11) NOT NULL AUTO_INCREMENT,
  `id_pro` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  `id_sous_categorie` int(11) DEFAULT NULL,
  `surface` int(20) NOT NULL,
  `details` text NOT NULL,
  `statut` varchar(255) NOT NULL,
  PRIMARY KEY (`id_projet`),
  KEY `projet_professionnel_FK` (`id_pro`),
  KEY `projet_client0_FK` (`id_client`),
  KEY `projet_categorie1_FK` (`id_categorie`),
  KEY `projet_sous_categorie2_FK` (`id_sous_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `id_pro`, `id_client`, `id_categorie`, `id_sous_categorie`, `surface`, `details`, `statut`) VALUES
(1, 1, 3, 6, 2, 1, 'Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.', 'en ligne'),
(2, 2, 4, 7, 4, 150, 'Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.', 'en cours'),
(3, 3, 2, 8, 5, 250, 'Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.', 'en cours'),
(4, 2, 1, 5, NULL, 50, 'Curabitur luctus quis arcu eu semper. Etiam interdum vestibulum tortor et accumsan. Aenean ac quam sed enim mattis commodo. Nullam aliquet ligula vitae blandit hendrerit. Praesent sodales, lacus a congue ultricies, quam quam placerat mi, sed tristique ante dolor vitae elit.', 'Terminé');

-- --------------------------------------------------------

--
-- Structure de la table `societe`
--

DROP TABLE IF EXISTS `societe`;
CREATE TABLE IF NOT EXISTS `societe` (
  `id_societe` int(11) NOT NULL AUTO_INCREMENT,
  `nom_societe` varchar(255) NOT NULL,
  `adresse_societe` varchar(255) NOT NULL,
  `mail_societe` varchar(255) NOT NULL,
  `tel_societe` int(11) NOT NULL,
  PRIMARY KEY (`id_societe`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `societe`
--

INSERT INTO `societe` (`id_societe`, `nom_societe`, `adresse_societe`, `mail_societe`, `tel_societe`) VALUES
(1, 'HWCOM', '6 bis Rue du Pont Vieux\r\n34820 Teyran', 'contact@hwcom.fr', 0);

-- --------------------------------------------------------

--
-- Structure de la table `sous_categorie`
--

DROP TABLE IF EXISTS `sous_categorie`;
CREATE TABLE IF NOT EXISTS `sous_categorie` (
  `id_sous_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `id_categorie` int(11) NOT NULL,
  `sous_categorie` varchar(255) NOT NULL,
  `ndr_piece` tinyint(1) NOT NULL,
  `m_carre` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_sous_categorie`),
  KEY `sous_categorie_categorie_FK` (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sous_categorie`
--

INSERT INTO `sous_categorie` (`id_sous_categorie`, `id_categorie`, `sous_categorie`, `ndr_piece`, `m_carre`) VALUES
(1, 6, 'sol', 0, 1),
(2, 6, 'faience', 1, 0),
(3, 7, 'taille haie', 0, 0),
(4, 7, 'tonte gazon', 0, 1),
(5, 8, 'comble', 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `id_ville` int(11) NOT NULL AUTO_INCREMENT,
  `ville` varchar(255) NOT NULL,
  `code_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id_ville`, `ville`, `code_ville`) VALUES
(1, 'bouloncity', 34678),
(2, 'inconnueville', 98321),
(3, 'fleurcity', 12543),
(4, 'workville', 67654);

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
  ADD CONSTRAINT `projet_categorie1_FK` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`),
  ADD CONSTRAINT `projet_client0_FK` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`),
  ADD CONSTRAINT `projet_professionnel_FK` FOREIGN KEY (`id_pro`) REFERENCES `professionnel` (`id_pro`),
  ADD CONSTRAINT `projet_sous_categorie2_FK` FOREIGN KEY (`id_sous_categorie`) REFERENCES `sous_categorie` (`id_sous_categorie`);

--
-- Contraintes pour la table `sous_categorie`
--
ALTER TABLE `sous_categorie`
  ADD CONSTRAINT `sous_categorie_categorie_FK` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
