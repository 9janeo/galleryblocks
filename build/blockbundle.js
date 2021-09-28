(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const {
    registerBlockType: registerBlockType$3
  } = wp.blocks;
  const {
    __: __$2
  } = wp.i18n;
  registerBlockType$3("cgb/two-blocks", {
    title: wp.i18n.__('Niyi Block', 'cgb'),
    description: __$2('Provides form fields for basic biometric data', 'cgb'),
    icon: "businessperson",
    category: "common",
    attributes: {
      eyeColor: {
        type: "string"
      },
      hairColor: {
        type: "string"
      }
    },
    edit: EditComponent$1,
    save: displayBio
  });

  function EditComponent$1(props) {
    function updateEyeColor(e) {
      props.setAttributes({
        eyeColor: e.target.value
      });
    }

    function updateHairColor(e) {
      props.setAttributes({
        hairColor: e.target.value
      });
    }

    return wp.element.createElement("div", {
      className: "niyiPluginBlock"
    }, wp.element.createElement("h6", null, "From plugin"), wp.element.createElement("input", {
      type: "text",
      value: props.attributes.eyeColor,
      onChange: updateEyeColor,
      placeholder: "eye color..."
    }), wp.element.createElement("input", {
      type: "text",
      value: props.attributes.hairColor,
      onChange: updateHairColor,
      placeholder: "hair color..."
    }));
  }

  function displayBio(props) {
    return wp.element.createElement("div", null, wp.element.createElement("p", null, wp.element.createElement("b", null, "Biometric Baby!!!(Rick Voice)"), ", and I will not be silenced!"), wp.element.createElement("p", null, "Eye Color: ", wp.element.createElement("span", null, props.attributes.eyeColor)), wp.element.createElement("p", null, "Hair Color: ", wp.element.createElement("span", null, props.attributes.hairColor)));
  }

  const {
    __: __$1
  } = wp.i18n;
  wp.blocks.registerBlockType("cgb/plugin-block", {
    title: __$1('Enviro', 'enviro'),
    description: __$1('Provides a brief description of the current environment', 'enviro'),
    icon: "welcome-learn-more",
    category: "common",
    attributes: {
      skyColor: {
        type: "string"
      },
      grassColor: {
        type: "string"
      }
    },
    edit: EditComponent,
    save: function () {
      return null;
    }
  });

  function EditComponent(props) {
    function updateSkyColor(e) {
      props.setAttributes({
        skyColor: e.target.value
      });
    }

    function updateGrassColor(e) {
      props.setAttributes({
        grassColor: e.target.value
      });
    }

    return wp.element.createElement("div", {
      className: "plugin-block"
    }, wp.element.createElement("input", {
      type: "text",
      value: props.attributes.skyColor,
      onChange: updateSkyColor,
      placeholder: "sky color..."
    }), wp.element.createElement("input", {
      type: "text",
      value: props.attributes.grassColor,
      onChange: updateGrassColor,
      placeholder: "grass color..."
    }));
  }

  const {
    registerBlockType: registerBlockType$2
  } = wp.blocks;
  wp.i18n;
  registerBlockType$2('ccg/border-box', {
    title: 'My Cool Border Box',
    icon: 'smiley',
    category: 'common',
    attributes: {
      content: {
        type: 'string'
      },
      color: {
        type: 'string'
      }
    },
    edit: function (props) {
      function updateContent(event) {
        props.setAttributes({
          content: event.target.value
        });
      }

      function updateColor(value) {
        props.setAttributes({
          color: value.hex
        });
      }

      return wp.element.createElement("div", null, wp.element.createElement("input", {
        type: "text",
        value: props.attributes.content,
        onChange: updateContent
      }), wp.element.createElement(wp.components.ColorPicker, {
        color: props.attributes.color,
        onChangeComplete: updateColor
      }), wp.element.createElement("h3", {
        style: {
          border: `5px solid ${props.attributes.color}`
        }
      }, `Preview: ${props.attributes.content}`));
    },
    save: function (props) {
      return wp.element.createElement("div", null, wp.element.createElement("h3", {
        style: {
          border: `5px solid ${props.attributes.color}`
        }
      }, props.attributes.content));
    }
  });

  const {
    registerBlockType: registerBlockType$1
  } = wp.blocks;
  wp.i18n;
  const {
    InspectorControls
  } = wp.blockEditor;
  registerBlockType$1('ccg/carousel', {
    title: 'Carousel',
    icon: 'update',
    category: 'media',
    attributes: {
      content: {
        type: 'string'
      },
      color: {
        type: 'string'
      }
    },
    edit: props => {
      function updateContent(event) {
        props.setAttributes({
          content: event.target.value
        });
      }

      function updateColor(event) {
        props.setAttributes({
          color: event.target.value
        });
      }

      return [wp.element.createElement(InspectorControls, null, "Hello From Inspector"), wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement("ul", {
        className: "list-unstyled"
      }, wp.element.createElement("li", null, "First one"), wp.element.createElement("li", null, wp.element.createElement("label", null, "Content:", wp.element.createElement("input", {
        type: "text",
        value: props.attributes.content,
        onChange: updateContent
      }))), wp.element.createElement("li", null, wp.element.createElement("label", null, "Color: ", wp.element.createElement("input", {
        type: "text",
        value: props.attributes.color,
        onChange: updateColor
      })))))];
    },
    save: props => {
      return wp.element.createElement("div", {
        className: props.className,
        style: `border: 5px dashed #333`
      }, wp.element.createElement("p", null, "First One"), wp.element.createElement("h3", {
        style: `color: ${props.attributes.color}`
      }, props.attributes.content));
    }
  });

  const block_icons = {
    wapuu: wp.element.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 17.89 19.77",
      width: "20",
      height: "20"
    }, wp.element.createElement("defs", null, wp.element.createElement("linearGradient", {
      id: "New_Gradient_Swatch_1",
      x1: "8.79",
      x2: "9.04",
      y1: "1.67",
      y2: "2.32",
      gradientUnits: "userSpaceOnUse"
    }, wp.element.createElement("stop", {
      offset: "0",
      stopColor: "#fff"
    }), wp.element.createElement("stop", {
      offset: "1",
      stopColor: "#231f20",
      stopOpacity: "0"
    })), wp.element.createElement("linearGradient", {
      id: "New_Gradient_Swatch_1-2",
      x1: "6.51",
      x2: "7.12",
      y1: "4.08",
      y2: "2.81",
      xlinkHref: "#New_Gradient_Swatch_1"
    }), wp.element.createElement("linearGradient", {
      id: "New_Gradient_Swatch_1-3",
      x1: "6.84",
      x2: "6.85",
      y1: "2.16",
      y2: "2.62",
      xlinkHref: "#New_Gradient_Swatch_1"
    }), wp.element.createElement("linearGradient", {
      id: "New_Gradient_Swatch_1-4",
      x1: "10.36",
      x2: "10.79",
      y1: "3.45",
      y2: "2.26",
      xlinkHref: "#New_Gradient_Swatch_1"
    }), wp.element.createElement("linearGradient", {
      id: "New_Gradient_Swatch_1-5",
      x1: "10.18",
      x2: "9.88",
      y1: "3.71",
      y2: "2.45",
      xlinkHref: "#New_Gradient_Swatch_1"
    }), wp.element.createElement("linearGradient", {
      id: "linear-gradient",
      x1: "6.69",
      x2: "6.39",
      y1: "4.33",
      y2: "3.07",
      xlinkHref: "#New_Gradient_Swatch_1"
    })), wp.element.createElement("g", {
      fillRule: "evenodd",
      "data-name": "Layer 1"
    }, wp.element.createElement("path", {
      d: "M18.5 1.2a5.09 5.09 0 00-1 0h-3.66a5.25 5.25 0 00-3-1 6.43 6.43 0 00-5.71 2.69 4.71 4.71 0 01-1.33.83.63.63 0 00-.51.69.76.76 0 00.57.59l-.13.13a1.22 1.22 0 00-.3 1v.19a6.11 6.11 0 00-.84 3.1 5.66 5.66 0 00.06.82 1.14 1.14 0 00-.26 0 1.39 1.39 0 00-1.07.49 1.58 1.58 0 00-.28 1.32 5.1 5.1 0 003 3 1.4 1.4 0 00.34.05.9.9 0 00.77-.39.85.85 0 00.11-.26 6.13 6.13 0 002.84 1 1.16 1.16 0 001.19.84 1.74 1.74 0 001.4-.65h.09a6 6 0 00.88-.06 5.61 5.61 0 01-3.8 1.91 1.64 1.64 0 01-1.49-.71 2.38 2.38 0 00-1.94-1.27 1.3 1.3 0 00-1.33 1.35 2 2 0 00.66 1.38 5.6 5.6 0 003.79 1.56 4.71 4.71 0 001-.11 8.44 8.44 0 006-5.32c2.65-2 2.44-7.59 1.56-10.07-.06-.17-.13-.34-.2-.51a1.72 1.72 0 00.32 0 2.32 2.32 0 00.7-.1 2.51 2.51 0 002-2 .61.61 0 00-.43-.49z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#00709b",
      d: "M7 4.6a2.7 2.7 0 01-1.22.47.53.53 0 01-.35-.17l-.21.1A6.56 6.56 0 004.1 6.27a5.33 5.33 0 00-.73 1.52 5.74 5.74 0 00-.25 1.65 5.66 5.66 0 00.72 2.75 4.36 4.36 0 007.39-3.14A4.36 4.36 0 007 4.6z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#005682",
      d: "M14.12 7.65a6.51 6.51 0 00-4.56-3.44c-1.11.11-1.57-.1-1.75-.32h-.14a2.56 2.56 0 01-1.89 1.18.54.54 0 01-.37-.19 5.75 5.75 0 00-2.29 4.56 5.64 5.64 0 005.4 5.63 10.18 10.18 0 002.14-2.64 2.78 2.78 0 013.52-1.38 5.7 5.7 0 00.23-1.61 3.66 3.66 0 00-.29-1.79z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#003e5f",
      d: "M4.19 12.73a5.58 5.58 0 004.33 2.34 2.23 2.23 0 00.21-.19l-.05-.66a3.47 3.47 0 01-2-.15 8.13 8.13 0 01-2.19-1.42h-.27zM14.12 7.65a6.51 6.51 0 00-4.56-3.44c-1.11.11-1.57-.1-1.75-.32h-.14a1.64 1.64 0 01-.67.7l.08.13a2.24 2.24 0 01.65-.22c.21 0 .26.12.94.24s1.76 1.58 1.76 1.58 2.29.32 3 1.77a3.29 3.29 0 01.11 2.77 2.91 2.91 0 01.56.15 5.7 5.7 0 00.23-1.61 3.66 3.66 0 00-.21-1.75z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M6.62 5.28C3.82 5.51 2 9.74 4.48 12s5.62-.7 5.52-3.39a3.38 3.38 0 00-3.38-3.33zM4 7.23c.9-1.32 2.53-2.39 4.32-1.08 0 0-1.14.06-.32 1.28a2.2 2.2 0 01.12 2.27c-.12.53-.16.69-.28 1.24A25.61 25.61 0 016.5 7.1c.31 0 .66-.09.48-.29 0 0-1.65.14-1.67.14s-.14.17-.14.17 0 .11.36.09a9.18 9.18 0 00.36 1.46 11.35 11.35 0 00-.36 2.51A8.53 8.53 0 014.44 7.4c.1-.07.24 0 .34-.14s.09-.21 0-.23c-.28-.06-.49.14-.75.2zm3.9 4.6C8.24 10.54 8.74 9.3 9 8a2.68 2.68 0 000-1.07 3.61 3.61 0 01-1.11 4.9zm-2.56.38a3.34 3.34 0 01-1.6-4.46 7.6 7.6 0 001.6 4.46zm1.11.19a2.6 2.6 0 01-.68-.05 8.9 8.9 0 01.25-3.2 23.31 23.31 0 001.39 3 2.77 2.77 0 01-.92.25z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ff8700",
      d: "M12.81 14.9c-1.52 2.81-5.62 4.21-6.81 2.2-.78-1.31-2.34-1.38-2.38-.14s2.54 2.89 4.86 2.34a7.89 7.89 0 005.68-5.14l-1.35.74zm.78-13.31c-.63-.05-.14.43.07.61s1.74 1.56 3.16 1.13 1.85-1.6 1.56-1.67-3.47 0-4.79-.07zM5.11 4.5c-1.38.39-1.53-.25-1.21-.32a4.65 4.65 0 001.6-1z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d36300",
      d: "M5.11 16.24c-.72-.37-1.46-.13-1.49.72 0 1.1 2.54 2.89 4.86 2.34A8.11 8.11 0 0014 14.79l-.07-.26c-.53.87-2.07 4.19-6.08 4.44-1.86.11-3.81-1.24-3.68-2a.72.72 0 01.83-.59z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ce6e00",
      d: "M17.64 1.64v.16s-.81 2.26-4.18-.05l-.16-.11c-.11.13.21.42.36.56s1.74 1.56 3.16 1.13 1.85-1.6 1.56-1.67a5.72 5.72 0 00-.74-.02z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ffd100",
      d: "M15.69 4.54A8.08 8.08 0 0015 3.09a6.45 6.45 0 01-1.34-.89c-.21-.18-.7-.66-.07-.61h.07a4.76 4.76 0 00-2.83-1 5.94 5.94 0 00-5.33 2.6c-.69 1.1-.18 1.7.14 1.85A2.64 2.64 0 007.7 3.93a2.89 2.89 0 002.65.1l1.26.25H11.32a5.25 5.25 0 00-.56 0c1.25.27 4.35 1.26 3.34 3.44v.09a11.67 11.67 0 01.25 1.54v.61a4.26 4.26 0 01-.23 1.09 2.69 2.69 0 011.1 1.95c1.44-2.36 1.15-6.53.47-8.46z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d69300",
      d: "M14.25 8.16a10.7 10.7 0 01.16 1.12v.68a4.26 4.26 0 01-.23 1.09.31.31 0 01.11.09l.51.34a10.1 10.1 0 00-.14-3.17c-.05-.18.3 0 .26-.05s-.23-.33-.23-.33l-.22-.08z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d69300",
      d: "M15.69 4.54A8.08 8.08 0 0015 3.09a3.66 3.66 0 01-.52-.28l-.4-.21h-.19c.43-.09 2.73 3.94 1.72 9.17.05.18-.41 1-.39 1.24 1.44-2.37 1.15-6.54.47-8.47z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ffd100",
      d: "M3.19 11a1 1 0 00-1.63 1 4.79 4.79 0 002.63 2.66c.89.21.71-.75.57-1.07A10.1 10.1 0 003.19 11z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d69300",
      d: "M1.93 10.87A1 1 0 001.56 12a4.79 4.79 0 002.63 2.66c.89.21.71-.75.57-1.07 0-.07-.08-.17-.13-.28h-.17s.34.95-.26.92a4.26 4.26 0 01-2.22-2 1.52 1.52 0 010-1.14z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ffd100",
      d: "M14.11 11a2.81 2.81 0 00-3.45 1.39c-.28-.72-1.22-2.09-2-1.56s-.28 1.77-.14 2.69-.36 2.35.81 2.35a1.27 1.27 0 001.16-.67 5.77 5.77 0 003.67-1.07 4.19 4.19 0 001.39-1.8A6.2 6.2 0 0014.11 11z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d69300",
      d: "M8.21 11.94a16.37 16.37 0 00.31 1.61c.14.93-.36 2.35.81 2.35a1.3 1.3 0 001.15-.65v-.66s-.4.78-1.1.64-.51-.52-.52-1.4a5.88 5.88 0 00-.48-2h-.1zM12.75 10.88a3.38 3.38 0 00-.86.3 4.76 4.76 0 00-1.1 1v.57l.32.47c-.06-1.6 2.31-2.54 3.43-1.66v-.19l-.17-.18a4.92 4.92 0 00-1.46-.31z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#ffd100",
      d: "M5 5c-.35-.15-1.24.46-1.14 1s.75.57 1.18.15S5.38 5.17 5 5zM11.61 4.28a4.06 4.06 0 00-3.3.72c-.89.78-.29 1.34.39 1.41s2-.53 3-.31 1.35.59 2.45 1.58c1.58-2.03-1.01-3.01-2.54-3.4z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#d69300",
      d: "M9.07 4.56a2.9 2.9 0 00-.76.44c-.89.78-.29 1.34.39 1.41s2-.53 3-.31a3.47 3.47 0 011.87 1.05.59.59 0 00-.14-.36A3.44 3.44 0 009.7 6c-1.24.4-2.1-.13-1.08-1l.66-.47z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M15.25 3.2a3.36 3.36 0 01-.54-.26 7.08 7.08 0 01.83 1.65c.81 2.3 1 7.71-1.47 9.43a5.57 5.57 0 01-3.62 1.05.15.15 0 00-.17.15.16.16 0 00.14.17h.4a6.06 6.06 0 003.43-1.12c1.51-1 2-3.15 2.11-4.73a13.47 13.47 0 00-.52-5.08 7.91 7.91 0 00-.59-1.28zm-4.66.92a3.59 3.59 0 01-2.84 0 2.66 2.66 0 01-2.17 1 1 1 0 01-.53-.63 1.71 1.71 0 01.32-1.39A6.08 6.08 0 0110.83.44a5 5 0 013.11 1.17h-.55a4.66 4.66 0 00-2.57-.85 5.76 5.76 0 00-5.18 2.51 1.51 1.51 0 00-.29 1.19.73.73 0 00.36.43 2.6 2.6 0 001.85-1 .16.16 0 01.1-.08.2.2 0 01.13 0 3.15 3.15 0 002.7 0 .16.16 0 11.1.3z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M7.6 19.56a5.38 5.38 0 01-3.24-1.16 2.07 2.07 0 01-.9-1.4 1 1 0 01.73-1 1.91 1.91 0 011.95 1 2 2 0 001.86.89 6 6 0 004.71-3.06.16.16 0 01.22-.07.15.15 0 01.07.24 6.37 6.37 0 01-5 3.23 2.28 2.28 0 01-2.11-1 1.58 1.58 0 00-1.59-.92.67.67 0 00-.49.71 1.75 1.75 0 00.79 1.18 4.79 4.79 0 003.88 1 7.7 7.7 0 005.56-5 .16.16 0 01.16-.2.16.16 0 01.12.2 8 8 0 01-5.8 5.26 4.18 4.18 0 01-.92.1zM14.52 8.14a.15.15 0 01-.11 0L14.28 8a5.68 5.68 0 00-2.6-1.69 4.54 4.54 0 00-1.85.17 3.73 3.73 0 01-1.15.15A1.06 1.06 0 017.73 6c-.07-.23-.05-.61.47-1.06a4.3 4.3 0 014.1-.6.15.15 0 01.09.21.16.16 0 01-.2.09 4 4 0 00-3.78.53c-.31.27-.44.53-.37.74a.75.75 0 00.67.41 4.24 4.24 0 001-.15 4.94 4.94 0 012-.17 5.9 5.9 0 012.79 1.75l.12.11a.16.16 0 01-.1.28zM13.46 1.75a1.23 1.23 0 00.31.32 3.91 3.91 0 002.45 1.14 1.81 1.81 0 00.52-.07 2.36 2.36 0 001.44-1.09.69.69 0 00.09-.28h-2.58c-.63 0-1.54 0-2.11-.05zm2.8 1.82a4.19 4.19 0 01-2.66-1.22c-.52-.44-.45-.64-.43-.7s.17-.19.37-.19h.11c.55.05 1.45.05 2.08.05h1.8a5.64 5.64 0 01.93 0 .29.29 0 01.21.29 2.25 2.25 0 01-1.76 1.68 2.1 2.1 0 01-.65.09z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M9 11a.46.46 0 00-.25.08c-.5.34-.4.94-.19 1.83.05.22.11.45.14.66a5.13 5.13 0 010 .88c0 .46 0 .94.17 1.15a.55.55 0 00.41.13 1.26 1.26 0 001.18-1.06 2.92 2.92 0 000-1.94C10.36 12.08 9.6 11 9 11zm.3 5.16a.94.94 0 01-.72-.27 2 2 0 01-.28-1.45 6.82 6.82 0 000-.8c0-.2-.08-.41-.13-.63-.2-.82-.43-1.76.36-2.28a.88.88 0 01.47-.2c.92 0 1.74 1.45 1.89 2a3.31 3.31 0 010 2.16 1.66 1.66 0 01-1.56 1.42z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M12.79 10.74a2.7 2.7 0 00-2.21 1.54.15.15 0 00.07.21h.07a.17.17 0 00.14-.09 2.39 2.39 0 012-1.36 2 2 0 011.68.5.16.16 0 00.22 0 .17.17 0 000-.23 1.31 1.31 0 00-.4-.33 6.1 6.1 0 00.22-1.59 5.72 5.72 0 00-.3-1.84.16.16 0 00-.2-.1.16.16 0 00-.1.2 5.37 5.37 0 01.28 1.74 5.46 5.46 0 01-.2 1.45 3 3 0 00-1.27-.1zM2.44 10.88a.72.72 0 00-.57.26.9.9 0 00-.15.78 4.62 4.62 0 002.51 2.54h.19a.25.25 0 00.23-.1 1 1 0 000-.77 10.32 10.32 0 00-1.51-2.5 1.1 1.1 0 00-.66-.24zm2 3.93a.93.93 0 01-.27 0A4.86 4.86 0 011.41 12a1.21 1.21 0 01.21-1.05 1 1 0 01.82-.38 1.37 1.37 0 01.85.31 10.37 10.37 0 011.61 2.61 1.3 1.3 0 010 1.07.56.56 0 01-.48.25zM4.92 5.17a1.14 1.14 0 00-.7.41.63.63 0 00-.16.42.34.34 0 00.36.32.81.81 0 00.58-.23.71.71 0 00.22-.63.38.38 0 00-.22-.28zm-.5 1.5a.65.65 0 01-.67-.58.88.88 0 01.25-.72 1.39 1.39 0 01.94-.52.53.53 0 01.18 0 .67.67 0 01.39.51 1 1 0 01-.3.92 1.12 1.12 0 01-.79.39zM4.94 2.61a1.07 1.07 0 01-.06-.32s0-.06.13-.11A5.47 5.47 0 016.26 2a13.73 13.73 0 001.52-.11c.28-.07 1.22-.36 1.69-.48A17 17 0 0111.23 1a2 2 0 00.63-.15s0 .17.06.27 0 .25 0 .25-.29.12-.32.24 0 .71-.08 1.05a1.18 1.18 0 01-.84.83 2.69 2.69 0 01-1.61.2 1.6 1.6 0 01-.73-.63c.1-.12.05-.28-.16-.26-.11-.2-.2-.34-.33-.36s-.22 0-.23.06 0 .14 0 .3v.08c-.27.11-.53.38-.15.54a.93.93 0 01-.15.33 1.09 1.09 0 01-.7.42 1.52 1.52 0 01-1-.21 1.48 1.48 0 01-.44-.77c-.11-.29-.12-.46-.16-.51l-.09-.1zm1.89-.48a6.93 6.93 0 00-1.32.13c-.1 0-.23.1-.25.19s0 .14.07.53a1.75 1.75 0 00.41.83 1.25 1.25 0 001 .14.72.72 0 00.49-.59 2.66 2.66 0 000-1c-.08-.16-.18-.17-.43-.19zm2.28 1.32a1.49 1.49 0 001.07 0 3 3 0 00.65-.24.72.72 0 00.46-.52 2.33 2.33 0 000-1 .46.46 0 00-.34-.31 2.69 2.69 0 00-.92.08 14.33 14.33 0 00-1.63.44.23.23 0 00-.11.31c.06.15.22.14.36.24a.72.72 0 01.18.47.77.77 0 00.28.53z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M8.67 11.34a.41.41 0 01.46-.21c.34.07.41.2.42.28s-.37-.08-.53 0-.24.2-.33.16-.02-.23-.02-.23zM2 11.22a.34.34 0 01.35-.22c.3 0 .38.1.41.17s-.33 0-.46.07-.17.2-.25.18-.05-.2-.05-.2z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M4.34 4.79a.85.85 0 01-.63-.2.36.36 0 01-.1-.34.35.35 0 01.26-.25 4.7 4.7 0 001.52-1 .16.16 0 01.22.22 4.9 4.9 0 01-1.67 1h.05c.06 0 .34.17 1.1 0a.15.15 0 01.19.11.16.16 0 01-.11.2 3.24 3.24 0 01-.83.26zM8.16 2.83c.32 0 .26.34-.05.53a.55.55 0 01-.58.09c-.27-.06-.33-.31-.06-.47a1.24 1.24 0 01.69-.15z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#1a1a1a",
      d: "M7.84 3.49a1 1 0 01-.31 0c-.27-.06-.33-.31-.06-.47l.16-.08s-.21.13-.23.3.32.24.44.25z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M5 2.26a.66.66 0 000 .13.24.24 0 00.08.15L5 2.53a.23.23 0 010-.1.76.76 0 010-.14.06.06 0 010-.03z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M10 2a.32.32 0 00-.32.32.33.33 0 00.32.32.32.32 0 00.32-.32A.32.32 0 0010 2z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "url(#New_Gradient_Swatch_1)",
      d: "M8.5 2.09a.2.2 0 01.15-.17 2.91 2.91 0 01.64-.13c.11 0 0 .24-.13.3a2.27 2.27 0 01-.59.13c-.11-.01-.07-.13-.07-.13z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M9.39 3.62A.71.71 0 019 3.45l-.09-.08-.08-.08.17.17a.61.61 0 00.39.16zM8.63 1.79a1.13 1.13 0 00-.38.21.1.1 0 000 .08.53.53 0 000 .12c0 .2.13.24.21.27s.11 0 .13.08a.46.46 0 00-.13-.08c-.09 0-.18-.06-.23-.27A.57.57 0 018.2 2a.25.25 0 010-.09 1.13 1.13 0 01.43-.12z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#666",
      d: "M7.67 3h.23s.17 0 .15-.08-.69.08-.38.08z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      d: "M6.35 2.83a.33.33 0 00-.35.32.32.32 0 00.32.32.32.32 0 00.32-.32.32.32 0 00-.29-.32z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "url(#New_Gradient_Swatch_1-2)",
      d: "M7.24 2.28a1.71 1.71 0 010 .51L6.73 4h-.27l.74-1.71z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    }), wp.element.createElement("path", {
      fill: "url(#New_Gradient_Swatch_1-3)",
      d: "M6.53 2.36a.12.12 0 01.12-.1 2.27 2.27 0 01.47 0c.08 0 0 .19-.09.2a1.51 1.51 0 01-.44 0 .09.09 0 01-.06-.1z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M6 4a.54.54 0 01-.33-.17l-.06-.08-.05-.06a.57.57 0 00.11.14A.48.48 0 006 4zM7.2 3.55a.48.48 0 01-.2.32l-.08.06-.09.07.17-.12a.45.45 0 00.2-.33zM7.34 2.39a.33.33 0 00-.29-.3.29.29 0 01.29.3z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "url(#New_Gradient_Swatch_1-4)",
      d: "M10.88 1.4a.49.49 0 01.32.25l-.73 1.75-.29.08h-.06z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    }), wp.element.createElement("path", {
      d: "M11.86.88l1.71-.32c.27 0 .41 0 .5.16a2.53 2.53 0 01.21.59c.05.22 0 .28 0 .32s-.15 0-.19 0-.09-.21-.09-.37a1.25 1.25 0 00-.14-.42s-.15 0-.22.1-.07.1-.22.14-.67.11-1 .19l-.51.13v-.23c0-.11-.05-.29-.05-.29z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "#fff",
      d: "M10.29 1.38a1.57 1.57 0 01.76 0c.26.1.3.62.3.62 0-.22-.08-.55-.29-.64a1.41 1.41 0 00-.77.02zM12.08 1a3.39 3.39 0 01.67-.13zM14 .77a.38.38 0 00-.34-.16.28.28 0 01.34.16zM11.32 2.77a.6.6 0 01-.24.37L11 3.2h-.08l.19-.1a.54.54 0 00.21-.33z",
      transform: "translate(-1.05 -.12)"
    }), wp.element.createElement("path", {
      fill: "url(#New_Gradient_Swatch_1-5)",
      d: "M9.11 3.45a1.88 1.88 0 01-.82-1.24.23.23 0 01.11-.31 14.33 14.33 0 011.6-.41 2.69 2.69 0 01.92-.08.46.46 0 01.34.31 2.33 2.33 0 010 1 .72.72 0 01-.46.52 3 3 0 01-.65.24 1.49 1.49 0 01-1.04-.03z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    }), wp.element.createElement("path", {
      fill: "url(#linear-gradient)",
      d: "M6.83 2.13c.25 0 .35 0 .43.19a2.66 2.66 0 010 1 .72.72 0 01-.52.68 1.25 1.25 0 01-1-.14A1.75 1.75 0 015.33 3c-.1-.39-.09-.44-.07-.53s.15-.16.25-.19a6.93 6.93 0 011.32-.15z",
      transform: "translate(-1.05 -.12)",
      style: {
        mixBlendMode: "screen"
      }
    })))
  };

  // Main File
  const {
    registerBlockType
  } = wp.blocks;
  const {
    __
  } = wp.i18n;
  registerBlockType('udemy/recipe', {
    title: __('Recipe', 'recipe'),
    description: __('provides a short summary pf a recipe.', 'recipe'),
    // Common, formatting, layouts, widgets, embed
    category: 'common',
    icon: block_icons.wapuu,
    keywords: [__('Food', 'recipe'), __('Ingredients', 'recipe'), __('Meal Type', 'recipe')],
    supports: {
      html: false
    },
    edit: props => {
      return wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement("ul", {
        className: "list-unstyled"
      }, wp.element.createElement("li", null, wp.element.createElement("strong", null, __('First one', 'recipe'), ": "), "INGREDIENTS_PH"), wp.element.createElement("li", null, wp.element.createElement("strong", null, __('Cooking Time', 'recipe'), ": "), "COOKING_TIME_PH"), wp.element.createElement("li", null, wp.element.createElement("strong", null, __('Utensils', 'recipe'), ": "), "UTENSILS_PH"), wp.element.createElement("li", null, wp.element.createElement("strong", null, __('Cooking Experience', 'recipe'), ": "), "LEVEL_PH"), wp.element.createElement("li", null, wp.element.createElement("strong", null, __('Meal Type', 'recipe'), ": "), "TYPE_PH")));
    },
    save: props => {
      return wp.element.createElement("p", null, "Hello World!");
    }
  });

  // Main File

  console.log("Hello from your main index");

}));
