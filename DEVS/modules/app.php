<?php

/**
 * PROJECT METHODS :
 * 
 * This class has methods allowing you to customize which content will be
 * loaded according to the type of person connected, in particular...
 */
abstract class App
{
    
    /**
     * Clear all session data :  $_SESSION = []
     */
    static function clearSession()
    {
        $_SESSION = [];
    }
    
    /**
     * Disable the user mode.
     * The user mode permite to an admin to navigate like a simple user.
     */
    static function disableUserMode()
    {
        $_SESSION['userMode'] = false;
    }

    /**
     * Log out the user (clear the session data).
     * 
     * @return bool True on success, or false on failure
     */
    static function disconnectUser()
    {
        App::clearSession();
        return ( count($_SESSION) === 0 );
    }

    /**
     * Enable the user mode.
     * The user mode permite to an admin to navigate like a simple user.
     */
    static function enableUserMode()
    {
        $_SESSION['userMode'] = true;
    }

    /**
     * Returns the header file name (without extension)
     * 
     * @return string
     */
    static function getHeaderFileName() : string
    {
        // if the user role is undefined
        if ( !isset($_SESSION["userRole"]) ) {
            return "header_nc";
        } else {
            if (
                ($_SESSION["userRole"] == 0) ||
                ( isset($_SESSION["userMode"]) && $_SESSION["userMode"] )
            ) {
                // user OR admin in 'user mode' :
                return "header_user";
            } else {
                switch ($_SESSION["userRole"]) {
                    case 1: // 'Administrateur Informatique' role
                    case 2: // 'Administrateur CRCD' role
                    case 3: // 'Administrateur Compta' role
                    case 4: // 'Administrateur SuperAdmin' role
                        return "header_admin";
                    default:
                        return "header_user";
                }
            }
        }
    }

    /**
     * Returns the home page file name (without extension)
     * 
     * @param string $desiredPage The desired page, among :
     *  - 'auto':   Automatically determines which page should be displayed.
     *  - 'nc':     Page displayed when nobody is connected.
     *  - 'admin':  Page displayed when an admin is connected.
     *  - 'user':   Page displayed when a user is connected.
     * 
     * @return string
     */
    static function getHomePageFileName(string $desiredPage = 'auto') : string
    {
        // auto detection
        if ($desiredPage === 'auto') {
            // page if no user is connected
            $desiredPage = 'nc';
            if ( App::isAdminConnected() && !App::isUserMode() ) {
                $desiredPage = 'admin';
            } elseif ( App::isUserConnected() ) {
                $desiredPage = 'user';
            }
        }
        // returns the desired home page
        switch ($desiredPage) {
            case 'admin':
                return 'adm_home';
            case 'user':
                return 'index_user';
            case 'nc':
            default:
                return 'index_nc';
        }
    }

    /**
     * Returns whether the connected user is an admin
     * 
     * @return bool
     */
    static function isAdminConnected() : bool
    {
        return !empty($_SESSION['userRole']);
    }

    /**
     * Returns whether the desired page is an admin page
     * 
     * @return bool
     */
    static function isAdminPage() : bool
    {
        global $myPHP;
        return (
            (substr($myPHP, 0, 4) === 'adm_')
        );
    }

    /**
     * Returns whether the connected user is an Afpanier developper
     * 
     * @return bool
     */
    static function isDevelopperConnected() : bool
    {
        return (
            isset($_SESSION['isUserDevelopper']) &&
            $_SESSION['isUserDevelopper']
        );
    }

    /**
     * Returns whether the desired page is a developper page
     * 
     * @return bool
     */
    static function isDevelopperPage() : bool
    {
        global $myPHP;
        $aDevelopperPages = [
            'app_components',
            'app_style',
            'app_dev'
        ];
        return in_array($myPHP, $aDevelopperPages);
    }

    /**
     * Returns whether the desired page is a page which can be SEEN BY EVERYBODY
     * or a class which can be called by connected/unconnected user
     * 
     * @return bool
     */
    static function isFreeAccessPage() : bool
    {
        global $myPHP;
        $pagesAllowedForEverybody = [
            'app_temp_login',
            'faq',
            'user_actu',
            'logout'
        ];
        return in_array($myPHP, $pagesAllowedForEverybody);
    }

    /**
     * Returns whether the desired page is an home page
     * 
     * @return bool
     */
    static function isHomePage() : bool
    {
        global $myPHP;
        return (
            ($myPHP === 'index') ||
            ($myPHP === App::getHomePageFileName('nc')) ||
            ($myPHP === App::getHomePageFileName('user')) ||
            ($myPHP === App::getHomePageFileName('admin'))
        );
    }

    /**
     * Returns whether the site is running in localhost
     * 
     * @return bool
     */
    static function isLocalhost() : bool
    {
        $aLocalHostAddr = [
            '127.0.0.1',
            '::1'
        ];
        return (
            ( in_array($_SERVER['SERVER_ADDR'], $aLocalHostAddr) ) &&
            ( $_SERVER['SERVER_NAME'] === 'localhost' )
        );
    }

    /**
     * Returns whether the requested page is accessible by an unconnected user
     * 
     * @return bool
     */
    static function isNotConnectedPage() : bool
    {
        global $myPHP;
        // If an unconnected user wants to access a page that
        // is not in the list, they will be redirected to the home page
        $notConnectedAllowedClasses = [
            'accueil',
            'profil_pro',
            'mentionslegales',
            'user_actu'
        ];
        return in_array($myPHP, $notConnectedAllowedClasses);
    }

    /**
     * Returns whether the user is connected
     * 
     * @return bool
     */
    static function isUserConnected() : bool
    {
        return !empty($_SESSION['userId']);
    }

    /**
     * Returns whether user mode is enabled
     * 
     * @return bool
     */
    static function isUserMode() : bool
    {
        if ( App::isAdminConnected() && !isset($_SESSION['userMode']) ) {
            $_SESSION['userMode'] = false;
        }
        return (
            ( App::isAdminConnected() ) &&
            ( $_SESSION['userMode'] == true )
        );
    }

    /**
     * Returns whether the desired page is a NON-ADMIN USER page
     * 
     * @return bool
     */
    static function isUserPage() : bool
    {
        global $myPHP;
        // list of pages which can be seen by a connected user (non-admin)
        $aNonAdminConnectedUserPages = [
            'index_user',
            'news_user',
            'cart_booking',
            'cart_booking_list',
            'cart_booking_add'
        ];
        return in_array($myPHP, $aNonAdminConnectedUserPages);
    }
}
