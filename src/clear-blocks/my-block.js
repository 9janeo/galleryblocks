const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('ccg/border-box', {
  title: 'My Cool Border Box',
  icon: 'smiley',
  category: 'common',
  attributes: {
    content: {type: 'string'},
    color: {type: 'string'}
  },
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    
    function updateColor(value) {
      props.setAttributes({color: value.hex})
    }

    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("input", {type: "text", value: props.attributes.content, onChange: updateContent }),
      wp.element.createElement(wp.components.ColorPicker, {color: props.attributes.color, onChangeComplete: updateColor }),
      wp.element.createElement("h3",
        {style: {border: `5px solid ${props.attributes.color}`}},
        `Preview: ${props.attributes.content}`
      )
    );
  },
  save: function(props){
    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("h3", {
        style: {
          border: `5px solid ${props.attributes.color}`
        }
      }, props.attributes.content)
    );
  }
})
