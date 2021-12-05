const { registerBlockType } = wp.blocks;
const { Button, Dashicon }          =   wp.components;
const { __ } = wp.i18n;
const { InspectorControls, 
  MediaUpload, 
  MediaUploadCheck } = wp.blockEditor;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faSearchPlus, faSearchMinus, faIcons, faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'

import './editor.scss';
import './frontend.scss';

function MyMediaUploader( {mediaIDs, onSelect } ) {
	return (
    <div className={`d-block w-100`}>
      {<MediaUploadCheck>
        <MediaUpload
          allowedType={[ 'image' ]}
          value={mediaIDs}                    
          onSelect={ onSelect }
          render={ ({open}) => (
              <Button 
                className={ "button button-large"} onClick={ open }
              >{ mediaIDs.length < 1 ? __('Upload Item(s)', 'Upload/Select Images') : __('Edit Item(s)', 'Edit') }
              </Button>
          ) }
          gallery
          multiple
        ></MediaUpload>
      </MediaUploadCheck>
      }
    </div>
	);
}

registerBlockType('ccg/carousel', {
  title: __('Carousel', 'bef'),
  icon: __('update', 'bef'),
  category: 'media',
  attributes: {
    images: {
      type: "array",
      selector: "ul",
      default: [],
      query: {
        mediaID: {
          type: 'number',
          source: 'attribute',
          attribute: 'data-id',
          selector: 'img',
        },
        mediaURL: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
          selector: 'img',
        },
        thumbnail: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
          selector: 'img',
        },
        img_alt: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
          selector: 'img'
        }
      },
    },
    display: {
      type: 'string',
      default: 'normal'
    },
    content: {type: 'string'},
    color: {type: 'string'},
  },
  edit: (props) => {
    const onSelect = ( items ) => {
			props.setAttributes( {
				images: items.map( item => {
					return {
						mediaID: parseInt( item.id, 10 ),
						mediaURL: item.url,
						thumbnail: item.sizes.thumbnail.url,
					};
				} ),
			} );
		};

    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    
    function updateColor(event) {
      props.setAttributes({color: event.target.value})
    }

    const select_img = (img) => {
      props.setAttributes({
          img_ID: img.id,
          img_URL: img.url,
          img_alt: img.alt
      })
    }

    const remove_img = (img) => {
      props.setAttributes({
          img_ID: null,
          img_URL: null,
          img_alt: null
      })
    }

    return [
      <InspectorControls>Hello From Inspector</InspectorControls>,
      <div className={props.className}>
        <p>{(props.attributes.images.length < 1)? 'Empty' : 'Has Slides'}</p>
        <ul className="edit list-unstyled">
          {props.attributes.images.map ( (item, index) => (
            <div className={`slider-item` } key={'image-' + item.mediaID }>
              <img class={`d-block w-100 ${index}`} src={item.mediaURL} data-id={item.mediaID} data-thumb={item.thumbnail} />
            </div>
          ))}
        </ul>
          { props.attributes.img_ID ? 
            (
            <div className="image-ctr">
                <img src={props.attributes.img_URL}
                    alt={props.attributes.img_alt} />
                {/* { props.isSelected ? (
                    <Button className="btn-remove" onClick={remove_img}>
                        <Dashicon icon='no' size='20'/>
                    </Button>
                ) : null } */}
            </div>
            ) : (
              <MyMediaUploader
                mediaIDs={ props.attributes.images.map( item => item.mediaID ) }
                onSelect={ onSelect }
              />
            )
          }
      </div>
    ]
  },

  save: (props) => {
    return (
      <div id="block-carousel" className={`frontend slider carousel slide ${props.className}`} data-interval="false">
        <div className="custom-control">
        <div className='overlay'></div>
        <span className="fullscreen">
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
          <FontAwesomeIcon icon={faCompressArrowsAlt} />
        </span>
        </div>
        <div className={" carousel-inner"} >{props.attributes.images}
          { props.attributes.images.map ( (item, index) => (
            <div className={`carousel-item slider-item ${(index == 0)? "active" : ""} ` } key={'image-' + item.mediaID }>
              <img className={`d-block w-100 ${index}`} src={item.mediaURL} data-id={item.mediaID} data-thumb={item.thumbnail} />
            </div>
          ))}          
        </div>
        <a class="carousel-control-prev" href="#block-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#block-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  },
})
