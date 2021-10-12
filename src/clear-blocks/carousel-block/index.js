const { registerBlockType } = wp.blocks;
const { Button, Dashicon }          =   wp.components;
const { __ } = wp.i18n;
const { InspectorControls, 
  MediaUpload, 
  MediaUploadCheck } = wp.blockEditor;

registerBlockType('ccg/carousel', {
  title: __('Carousel', 'bef'),
  icon: __('update', 'bef'),
  category: 'media',
  attributes: {
    content: {type: 'string'},
    color: {type: 'string'},
    img_ID : {
      type: 'number'
    },
    img_URL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img'
    },
    img_alt: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img'
    }
  },
  edit: (props) => {
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
        <ul className="list-unstyled">
          { props.attributes.img_ID ? (
              <div className="image-ctr">
                  <img src={props.attributes.img_URL}
                      alt={props.attributes.img_alt} />
                  { props.isSelected ? (
                      <Button className="btn-remove" onClick={remove_img}>
                          <Dashicon icon='no' size='20'/>
                      </Button>
                  ) : null }
              </div>
          ) : (
              <MediaUploadCheck>
                  <MediaUpload
                  allowedType={[ 'image' ]}
                  value={props.attributes.img_ID}
                  onSelect={ select_img }
                  render={ ({open}) => (
                      <Button className={ "button button-large"} onClick={ open }>
                          { __('Upload Image', 'recipe')}
                      </Button>
                  ) }></MediaUpload>
              </MediaUploadCheck>
          )}
          <li>First one</li>
          <li>
            <label>
            Content:
              <input type="text" value={props.attributes.content} onChange={updateContent} />
            </label>
          </li>
          <li>
            <label>
              Color: <input type="text" value={props.attributes.color} onChange={updateColor} />
            </label>
          </li>
        </ul>
      </div>
    ]
  },
  save: (props) => {
    return (
      <div className={props.className} style={`border: 5px dashed #333`}>
        <p>First One</p>
        <h3 style={`color: ${props.attributes.color}`}>{props.attributes.content}</h3>
        <div>
          <img src={props.attributes.img_URL}
              alt={props.attributes.img_alt} />
        </div>
      </div>
    )
  },
})
