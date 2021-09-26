const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType("cgb/two-blocks", {
  title: wp.i18n.__('Niyi Block', 'cgb'),
  description: __(
    'Provides form fields for basic biometric data',
    'cgb'
  ),
  icon: "businessperson",
  category: "common",
  attributes: {
    eyeColor: { type: "string" },
    hairColor: { type: "string" }
  },
  edit: EditComponent,
  save: function (props) {
    return null
  }
})

function EditComponent(props) {
  function updateEyeColor(e) {
    props.setAttributes({ eyeColor: e.target.value })
  }

  function updateHairColor(e) {
    props.setAttributes({ hairColor: e.target.value })
  }

  return (
    <div className="niyiPluginBlock">
      <h6>From plugin</h6>
      <input type="text" value={props.attributes.eyeColor} onChange={updateEyeColor} placeholder="eye color..." />
      <input type="text" value={props.attributes.hairColor} onChange={updateHairColor} placeholder="hair color..." />
    </div>
  )
}

function displayBio(props){
  return (
    <div>
      <p><b>Biometric Baby!!!(Rick Voice)</b>, and I will not be silenced!</p>
      <p>Eye Color: <span>{props.attributes.eyeColor}</span></p>
      <p>Hair Color: <span>{props.attributes.hairColor}</span></p>
    </div>
  )
}
