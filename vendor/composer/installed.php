<?php return array(
    'root' => array(
        'name' => 'cardanopress/cardanopress',
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'reference' => 'edd9fa6035cb05e361e2260bb8d96ff61762eeae',
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'automattic/jetpack-autoloader' => array(
            'pretty_version' => 'v2.11.15',
            'version' => '2.11.15.0',
            'reference' => '10819bc78006a701e7d1af1ce7b36bd699b942f2',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/../automattic/jetpack-autoloader',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'cardanopress/cardanopress' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'reference' => 'edd9fa6035cb05e361e2260bb8d96ff61762eeae',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'cardanopress/framework' => array(
            'pretty_version' => 'v2.0.0',
            'version' => '2.0.0.0',
            'reference' => 'fdf0f75ba39267048bcbd2396616f1338339c909',
            'type' => 'library',
            'install_path' => __DIR__ . '/../cardanopress/framework',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
