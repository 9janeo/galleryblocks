const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;

registerBlockType('ccg/carousel', {
  title: 'Carousel',
  icon: 'update',
  category: 'media',
  attributes: {
    content: {type: 'string'},
    color: {type: 'string'}
  },
  edit: (props) => {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    
    function updateColor(event) {
      props.setAttributes({color: event.target.value})
    }

    return [
      <InspectorControls>Hello From Inspector</InspectorControls>,
      <div className={props.className}>
        <ul className="list-unstyled">
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
      </div>
    )
  },
})
