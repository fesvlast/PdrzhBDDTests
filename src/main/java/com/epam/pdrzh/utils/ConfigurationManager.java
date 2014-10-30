package com.epam.pdrzh.utils;

import java.util.ResourceBundle;

/**
 * Created by Tim on 28.10.2014.
 */
public class ConfigurationManager {

    private static ConfigurationManager instance;
    private ResourceBundle resourceBundle;

    private static  final String BUNDLE_NAME="conf.config";

    public static final String SITE_FOR_TEST_URL="SITE_FOR_TEST_URL";
    public static final String BROWSER_NAME="BROWSER_NAME";
    public static final String DELAY_FOR_WEBDRIVER="DELAY_FOR_WEBDRIVER";
    public static final String CREATE_SCREENSHOT="CREATE_SCREENSHOT";
    public static final String DATABASE_URL="DATABASE_URL";
    public static final String DATABASE_DRIVEN_NAME="DATABASE_DRIVEN_NAME";
    public static final String DATABASE_LOGIN="DATABASE_LOGIN";
    public static final String DATABASE_PASSWORD="DATABASE_PASSWORD";
    public static final String DATABASE_NAME="DATABASE_NAME";

    public static ConfigurationManager getInstance(){
        if(instance ==null){
            instance =new ConfigurationManager();
            instance.resourceBundle=ResourceBundle.getBundle(BUNDLE_NAME);
        }
        return instance;
    }
    public String getProperty(String key){
        return  (String) resourceBundle.getObject(key);
    }


}
