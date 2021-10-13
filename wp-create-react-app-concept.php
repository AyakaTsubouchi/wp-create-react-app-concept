<?php
/**
 * Plugin Name:     WordPress React Create App
 * Description:     Load React app in WorePress Admin concept
 * Author:          Ben Broide
 * Text Domain:     react-plugin
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         React_Plugin
 */


//  create wp menu and end point
function wpb_custom_new_menu() {
	register_nav_menu('menu',__( 'Menu' ));
}
add_action( 'init', 'wpb_custom_new_menu' );

  function get_my_menu() {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items('menu');
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_my_menu',
    ) );
} );

//  create wp footer menu and end point
function wpb_custom_new_footer_menu() {
	register_nav_menu('footer',__( 'Footer' ));
}
add_action( 'init', 'wpb_custom_new_footer_menu' );

  function get_my_footer_menu() {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items('footer');
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', '/footer', array(
        'methods' => 'GET',
        'callback' => 'get_my_footer_menu',
    ) );
} );
//  create wp footer2 menu and end point
function wpb_custom_new_footer2_menu() {
	register_nav_menu('footer2',__( 'Footer2' ));
}
add_action( 'init', 'wpb_custom_new_footer2_menu' );

  function get_my_footer2_menu() {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items('footer2');
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', '/footer2', array(
        'methods' => 'GET',
        'callback' => 'get_my_footer2_menu',
    ) );
} );



// Setting hook to load files.
add_action('wp_enqueue_scripts','rp_load_react_app');

/**
 * Load react app files in WordPress admin.
 *
 * @return bool|void
 */
function rp_load_react_app($hook){
	// Only load react app scripts in site front end home page.
	// if( !is_front_page())
	// 	return;

	// Setting path variables.
	$plugin_app_dir_url =plugin_dir_url( __FILE__ ) . 'react-app/';
	$react_app_build = $plugin_app_dir_url .'build/';
	$manifest_url = $react_app_build. 'asset-manifest.json';

	// Request manifest file.
	$request = file_get_contents( $manifest_url );

	// If the remote request fails, return.
	if( !$request )
		return false;

	// Convert json to php array.
	$files_data = json_decode($request);
	if($files_data === null)
		return ;

	if(!property_exists($files_data,'entrypoints'))
		return false;

	// Get assets links.
	$assets_files = $files_data->entrypoints;

	$js_files = array_filter($assets_files,'rp_filter_js_files');
	$css_files = array_filter($assets_files,'rp_filter_css_files');

	// Load css files.
	foreach ($css_files as $index => $css_file){
		wp_enqueue_style('react-plugin-'.$index, $react_app_build . $css_file);
	}

	// Load js files.
	foreach ($js_files as $index => $js_file){
		wp_enqueue_script('react-plugin-'.$index, $react_app_build . $js_file, array(), 1, true);
	}

	// Variables for app use.
	wp_localize_script('react-plugin-0', 'rpReactPlugin',
		// array('appSelector' => 'body')
		array('appSelector' => '#page')
	);
}

/**
 * Get js files from assets array.
 *
 * @param array $file_string
 *
 * @return bool
 */
function rp_filter_js_files ($file_string){
  return pathinfo($file_string, PATHINFO_EXTENSION) === 'js';
}

/**
 * Get css files from assets array.
 *
 * @param array $file_string
 *
 * @return bool
 */
function rp_filter_css_files ($file_string) {
	return pathinfo( $file_string, PATHINFO_EXTENSION ) === 'css';
}
