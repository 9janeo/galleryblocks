<?php
  function r_enqueue_block_editor_assets(){
    wp_register_script( 
      'r_blocks_bundle', 
      plugins_url('build/blockbundle.js', CLEAR_BLOCKS_URL ),
      ['wp-i18n','wp-element','wp-blocks','wp-components','wp-editor', 'wp-api'],
      filemtime(plugin_dir_path(CLEAR_BLOCKS_URL ).'build/blockbundle.js')
    );

    wp_enqueue_script( 'r_blocks_bundle');
  }
  