<?php

/*
  Plugin Name: Clearcut Gallery Blocks Plugin
  Description: A simple plugin to load content design modules as custom Gutenberg blocks in WordPress
  Version: 1.0
  Author: Niyi Adewole
  Author URI: https://clearcutcomms.ca
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// Setup
define( 'CLEAR_BLOCKS_URL', __FILE__ );

// Includes
include('src/clear-blocks/enqueue.php');
include( dirname(CLEAR_BLOCKS_URL) . '/includes/widgets.php' );
include( dirname(CLEAR_BLOCKS_URL) . '/includes/widgets/daily-recipe.php' );

// Hooks
// register_activation_hook( __FILE__, $callback:callable )
add_action( 'enqueue_block_editor_assets', 'r_enqueue_block_editor_assets');
add_action( 'enqueue_block_assets', 'r_enqueue_block_assets');
add_action( 'widgets_init', 'r_widgets_init');


class BradsBoilerplate {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('makeUpANameHereScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('makeUpANameHereStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('cgb/plugin-block', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'makeUpANameHereScript',
      'editor_style' => 'makeUpANameHereStyle'
    ));

    register_block_type('cgb/two-blocks', array(
      'editor_script' => 'biometricblock',
      'render_callback' => array($this, 'bioHTML')
    ));
  }

  function bioHTML($attributes){
    ob_start(); ?>
    <p>
      Still Rick, I mean... biometric baby!!!. 
      Being handled by php with my eye color as :- <?php echo esc_html( $attributes['eyeColor']) ?> 
      and hair color is :- <?php echo esc_html( $attributes['hairColor']) ?>
    </p>

    <?php
    return ob_get_clean();
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
  }
}

// $bradsBoilerplate = new BradsBoilerplate();
// $clearBlocks = new ClearBlocks();