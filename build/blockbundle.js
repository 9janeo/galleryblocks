(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const {
    registerBlockType: registerBlockType$7
  } = wp.blocks;
  const {
    __: __$7
  } = wp.i18n;
  registerBlockType$7("cgb/two-blocks", {
    title: wp.i18n.__('Niyi Block', 'cgb'),
    description: __$7('Provides form fields for basic biometric data', 'cgb'),
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
    __: __$6
  } = wp.i18n;
  wp.blocks.registerBlockType("cgb/plugin-block", {
    title: __$6('Enviro', 'enviro'),
    description: __$6('Provides a brief description of the current environment', 'enviro'),
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
    registerBlockType: registerBlockType$6
  } = wp.blocks;
  wp.i18n;
  registerBlockType$6('ccg/border-box', {
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

  const {
    registerBlockType: registerBlockType$5
  } = wp.blocks;
  const {
    __: __$5
  } = wp.i18n;
  const {
    InspectorControls: InspectorControls$4,
    BlockControls: BlockControls$1,
    AlignmentToolbar,
    BlockAlignmentToolbar
  } = wp.blockEditor;
  const {
    PanelBody: PanelBody$3,
    PanelRow: PanelRow$1,
    TextControl,
    SelectControl
  } = wp.components;
  registerBlockType$5('udemy/recipe', {
    title: __$5('Recipe', 'recipe'),
    description: __$5('provides a short summary of a recipe.', 'recipe'),
    // Common, formatting, layouts, widgets, embed
    category: 'common',
    icon: block_icons.wapuu,
    keywords: [__$5('Food', 'recipe'), __$5('Ingredients', 'recipe'), __$5('Meal Type', 'recipe')],
    supports: {
      html: false
    },
    attributes: {
      ingredients: {
        type: 'string',
        source: 'text',
        selector: '.ingredients-ph'
      },
      cooking_time: {
        type: 'string',
        source: 'text',
        selector: '.cooking-time-ph'
      },
      utensils: {
        type: 'string',
        source: 'text',
        selector: '.utensils-ph'
      },
      cooking_experience: {
        type: 'string',
        source: 'text',
        default: 'Beginner',
        selector: '.cooking-experience-ph'
      },
      meal_type: {
        type: 'string',
        source: 'text',
        default: 'Breakfast',
        selector: '.meal-type-ph'
      },
      text_alignment: {
        type: 'string'
      },
      block_alignment: {
        type: 'string',
        default: 'wide'
      }
    },
    getEditWrapperProps: ({
      block_alignment
    }) => {
      if ('left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment) {
        return {
          'data-align': block_alignment
        };
      }
    },
    edit: props => {
      // const updateIngredients = (new_val) => {
      //   props.setAttributes({ ingredients: new_val} )
      // }
      return [wp.element.createElement(InspectorControls$4, null, wp.element.createElement(PanelBody$3, {
        title: __$5('Basics', 'recipe')
      }, wp.element.createElement(PanelRow$1, null, wp.element.createElement("p", null, __$5('Configure the contents of your block here.', 'recipe'))), wp.element.createElement(TextControl, {
        label: __$5('Ingredients', 'recipe'),
        help: __$5('Ex: tomatoes, lettuce, olive oil, etc.', 'recipe'),
        value: props.attributes.ingredients,
        onChange: new_val => {
          props.setAttributes({
            ingredients: new_val
          });
        }
      }), wp.element.createElement(TextControl, {
        label: __$5('Cooking Time', 'recipe'),
        help: __$5('How long will this take to cook?', 'recipe'),
        value: props.attributes.cooking_time,
        onChange: new_val => {
          props.setAttributes({
            cooking_time: new_val
          });
        }
      }), wp.element.createElement(TextControl, {
        label: __$5('Utensils', 'recipe'),
        help: __$5('Ex: spoon, knife, pots, pans, etc.', 'recipe'),
        value: props.attributes.utensils,
        onChange: new_val => {
          props.setAttributes({
            utensils: new_val
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: __$5('Cooking Experience', 'recipe'),
        help: __$5('How skilled should the reader be?', 'recipe'),
        value: props.attributes.cooking_experience,
        options: [{
          value: 'Beginner',
          label: 'Beginner'
        }, {
          value: 'Intermediate',
          label: 'Intermediate'
        }, {
          value: 'Expert',
          label: 'Expert'
        }],
        onChange: new_val => {
          props.setAttributes({
            cooking_experience: new_val
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: __$5('Meal Type', 'recipe'),
        help: __$5('How skilled should the reader be?', 'recipe'),
        value: props.attributes.meal_type,
        options: [{
          value: 'Breakfast',
          label: 'Breakfast'
        }, {
          value: 'Lunch',
          label: 'Lunch'
        }, {
          value: 'Dinner',
          label: 'Dinner'
        }],
        onChange: new_val => {
          props.setAttributes({
            meal_type: new_val
          });
        }
      }))), wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement(BlockControls$1, null, wp.element.createElement(BlockAlignmentToolbar, {
        value: props.attributes.block_alignment,
        onChange: new_val => {
          props.setAttributes({
            block_alignment: new_val
          });
        }
      }), wp.element.createElement(AlignmentToolbar, {
        value: props.attributes.text_alignment,
        onChange: new_val => {
          props.setAttributes({
            text_alignment: new_val
          });
        }
      })), wp.element.createElement("ul", {
        className: "list-unstyled",
        style: {
          textAlign: props.attributes.text_alignment
        }
      }, wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Ingredients', 'recipe'), ": "), wp.element.createElement("span", {
        className: "ingredients-ph"
      }, props.attributes.ingredients)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Cooking Time', 'recipe'), ": "), wp.element.createElement("span", {
        className: "cooking-time-ph"
      }, props.attributes.cooking_time)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Utensils', 'recipe'), ": "), wp.element.createElement("span", {
        className: "utensils-ph"
      }, props.attributes.utensils)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Cooking Experience', 'recipe'), ": "), wp.element.createElement("span", {
        className: "cooking-experience-ph"
      }, props.attributes.cooking_experience)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Meal Type', 'recipe'), ": "), wp.element.createElement("span", {
        className: "meal-type-ph"
      }, props.attributes.meal_type))))];
    },
    save: props => {
      return wp.element.createElement("div", {
        className: `align${props.attributes.block_alignment}`
      }, wp.element.createElement("ul", {
        className: "list-unstyled",
        style: {
          textAlign: props.attributes.text_alignment
        }
      }, wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Ingredients', 'recipe'), ": "), wp.element.createElement("span", {
        className: "ingredients-ph"
      }, props.attributes.ingredients)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Cooking Time', 'recipe'), ": "), wp.element.createElement("span", {
        className: "cooking-time-ph"
      }, props.attributes.cooking_time)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Utensils', 'recipe'), ": "), wp.element.createElement("span", {
        className: "utensils-ph"
      }, props.attributes.utensils)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Cooking Experience', 'recipe'), ": "), wp.element.createElement("span", {
        className: "cooking-experience-ph"
      }, props.attributes.cooking_experience)), wp.element.createElement("li", null, wp.element.createElement("strong", null, __$5('Meal Type', 'recipe'), ": "), wp.element.createElement("span", {
        className: "meal-type-ph"
      }, props.attributes.meal_type))));
    }
  });

  const {
    registerBlockType: registerBlockType$4
  } = wp.blocks;
  const {
    RichText
  } = wp.blockEditor;
  const {
    __: __$4
  } = wp.i18n;
  registerBlockType$4('udemy/rich-text', {
    title: __$4('Rich Text Example', 'recipe'),
    description: __$4('Rich text example', 'recipe'),
    category: 'common',
    icon: block_icons.wapuu,
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-ctr'
      }
    },
    edit: props => {
      return wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement("h3", null, "Rich Text Example Block"), wp.element.createElement(RichText, {
        tagName: "div",
        multiline: "p",
        placeholder: __$4('Add your content here.', 'recipe'),
        onChange: new_val => {
          props.setAttributes({
            message: new_val
          });
        },
        value: props.attributes.message
      }));
    },
    save: props => {
      return wp.element.createElement("div", null, wp.element.createElement("h3", null, "Rich Text Example Block"), wp.element.createElement("div", {
        className: `message-ctr`
      }, props.attributes.message));
    }
  });

  var classnames$1 = {exports: {}};

  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  (function (module) {
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString === Object.prototype.toString) {
  					for (var key in arg) {
  						if (hasOwn.call(arg, key) && arg[key]) {
  							classes.push(key);
  						}
  					}
  				} else {
  					classes.push(arg.toString());
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  }(classnames$1));

  var classnames = classnames$1.exports;

  var btn_icon = wp.element.createElement("svg", {
    width: "20",
    height: "20",
    id: "Capa_1",
    "data-name": "Capa 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19.96 19.96"
  }, wp.element.createElement("circle", {
    cx: "9.98",
    cy: "9.98",
    r: "9.98",
    fill: "#415870"
  }), wp.element.createElement("path", {
    d: "M13.83,11.87a4.34,4.34,0,0,1-3.9-7.75l.08,0a.22.22,0,0,0-.07-.41,5.59,5.59,0,0,0-5.61,8,5.59,5.59,0,0,0,7.49,2.59,5.5,5.5,0,0,0,2.29-2.08.21.21,0,0,0-.28-.3Z",
    transform: "translate(-.02 -.02)",
    fill: "#feaf62"
  }), wp.element.createElement("path", {
    d: "M8.63,4.17A1.32,1.32,0,0,1,7.31,5.49l-3.93,0a1.32,1.32,0,0,0-.94.39,1.31,1.31,0,0,0-.38.93A1.33,1.33,0,0,0,3.38,8.1H4.89a1.31,1.31,0,0,1,.93.38,1.32,1.32,0,0,1-.93,2.26H.28a.86.86,0,0,1-.23,0q0-.36,0-.72A9.94,9.94,0,0,1,3.07,2.82l4.24,0A1.32,1.32,0,0,1,8.63,4.17Z",
    transform: "translate(-.02 -.02)",
    fill: "#62788e"
  }), wp.element.createElement("path", {
    d: "M20,10A10,10,0,0,1,19,14.24a1.24,1.24,0,0,1-.83-.38,1.32,1.32,0,0,1-.39-.94A1.32,1.32,0,0,0,16.5,11.6H15a1.32,1.32,0,0,1-.94-.39,1.31,1.31,0,0,1-.38-.93A1.32,1.32,0,0,1,15,9H16.5a1.33,1.33,0,0,0,1.32-1.32A1.33,1.33,0,0,1,19.15,6.3h.12A9.91,9.91,0,0,1,20,10Z",
    transform: "translate(-.02 -.02)",
    fill: "#62788e"
  }), wp.element.createElement("circle", {
    cx: "13.88",
    cy: "3.93",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "12.35",
    cy: "7.13",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "15",
    cy: "16.15",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "9.84",
    cy: "1.55",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "9.05",
    cy: "13.89",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "4.06",
    cy: "14.61",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "6.21",
    cy: "17.45",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "12.34",
    cy: "13.12",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("circle", {
    cx: "6.87",
    cy: "7.44",
    r: "0.35",
    fill: "#e8e4db"
  }), wp.element.createElement("path", {
    d: "M16.46,5.6a3.6,3.6,0,0,0,1.09-.24,3.61,3.61,0,0,0-1.09-.25A3.6,3.6,0,0,0,16.22,4,3.61,3.61,0,0,0,16,5.11a3.61,3.61,0,0,0-1.09.25A3.6,3.6,0,0,0,16,5.6a3.54,3.54,0,0,0,.25,1.09A3.53,3.53,0,0,0,16.46,5.6Z",
    transform: "translate(-.02 -.02)",
    fill: "#feaf62"
  }));

  const {
    registerBlockType: registerBlockType$3
  } = wp.blocks;
  const {
    __: __$3
  } = wp.i18n;
  const {
    BlockControls,
    InspectorControls: InspectorControls$3
  } = wp.editor;
  const {
    Toolbar,
    Button: Button$2,
    Tooltip,
    PanelBody: PanelBody$2,
    PanelRow,
    FormToggle
  } = wp.components;
  registerBlockType$3('udemy/night-mode', {
    title: __$3('Night Mode', 'recipe'),
    description: __$3('Content with night mode.', 'recipe'),
    category: 'common',
    icon: block_icons.wapuu,
    attributes: {
      night_mode: {
        type: 'boolean',
        default: false
      }
    },
    edit: props => {
      const toggle_night_mode = () => {
        props.setAttributes({
          night_mode: !props.attributes.night_mode
        });
      };

      return [wp.element.createElement(InspectorControls$3, null, wp.element.createElement(PanelBody$2, {
        title: __$3('Night Mode', 'recipe')
      }, wp.element.createElement(PanelRow, null, wp.element.createElement("label", {
        htmlFor: "udemy-recipe-night-mode-toggle"
      }, __$3('Night Mode', 'recipe')), wp.element.createElement(FormToggle, {
        id: "udemy-recipe-night-mode-toggle",
        checked: props.attributes.night_mode,
        onChange: toggle_night_mode
      })))), wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement(BlockControls, null, wp.element.createElement(Toolbar, null, wp.element.createElement(Tooltip, {
        text: __$3('Night mode', 'recipe')
      }, wp.element.createElement(Button$2, {
        className: classnames('components-icon-button', 'components-toolbar__control', {
          'is-active': props.attributes.night_mode
        }),
        onClick: toggle_night_mode
      }, btn_icon)))), wp.element.createElement("div", {
        className: classnames('content-example', {
          'night': props.attributes.night_mode
        })
      }, "This is an example of a block with night mode."))];
    },
    save: props => {
      return wp.element.createElement("div", null, wp.element.createElement("div", {
        className: classnames('content-example', {
          'night': props.attributes.night_mode
        })
      }, "This is an example of a block with night mode."));
    }
  });

  const {
    registerBlockType: registerBlockType$2
  } = wp.blocks;
  const {
    InspectorControls: InspectorControls$2
  } = wp.blockEditor;
  const {
    __: __$2
  } = wp.i18n;
  const {
    PanelBody: PanelBody$1,
    TextareaControl: TextareaControl$1,
    CheckboxControl: CheckboxControl$1,
    RadioControl: RadioControl$1,
    RangeControl: RangeControl$1
  } = wp.components;
  registerBlockType$2('udemy/inspector-controls-example', {
    title: __$2('Inspector Controls', 'recipe'),
    description: __$2('Inspector Controls.', 'recipe'),
    category: 'common',
    icon: block_icons.wapuu,
    attributes: {
      textarea_input: {
        type: 'text'
      },
      checkbox_input: {
        type: 'boolean',
        default: true
      },
      radio_input: {
        type: 'string',
        default: 'foo'
      },
      range_input: {
        type: 'number',
        default: '5'
      }
    },
    edit: props => {
      return [wp.element.createElement(InspectorControls$2, null, wp.element.createElement(PanelBody$1, {
        title: __$2('Input Examples', 'recipe')
      }, wp.element.createElement(TextareaControl$1, {
        label: __$2('Text Area Control', 'recipe'),
        help: __$2('Help Text', 'recipe'),
        value: props.attributes.textarea_input,
        onChange: new_val => {
          props.setAttributes({
            textarea_input: new_val
          });
        }
      }), wp.element.createElement(CheckboxControl$1, {
        heading: __$2('Checkbox Control', 'recipe'),
        label: __$2('Click me!', 'recipe'),
        help: __$2('Help Text', 'recipe'),
        checked: props.attributes.checkbox_input,
        onChange: new_val => {
          props.setAttributes({
            checkbox_input: new_val
          });
        }
      }), wp.element.createElement(RadioControl$1, {
        label: __$2('Radio Control', 'recipe'),
        selected: props.attributes.radio_input,
        options: [{
          label: 'Foo',
          value: 'foo'
        }, {
          label: 'Bar',
          value: 'bar'
        }],
        onChange: new_val => {
          props.setAttributes({
            radio_input: new_val
          });
        }
      }), wp.element.createElement(RangeControl$1, {
        beforeIcon: "arrow-left-alt2",
        afterIcon: "arrow-right-alt2",
        label: __$2('Range Control', 'recipe'),
        min: 1,
        max: 10,
        value: props.attributes.range_input,
        onChange: new_val => {
          props.setAttributes({
            range_input: new_val
          });
        }
      }))), wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("strong", null, "Textarea Input"), " - ", props.attributes.textarea_input), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Checkbox Input"), " - ", props.attributes.checkbox_input.toString()), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Radio Input"), " - ", props.attributes.radio_input), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Range Input"), " - ", props.attributes.range_input)), wp.element.createElement(TextareaControl$1, {
        label: __$2('Text Area Control', 'recipe'),
        help: __$2('Help Text', 'recipe'),
        value: props.attributes.textarea_input,
        onChange: new_val => {
          props.setAttributes({
            textarea_input: new_val
          });
        }
      }), wp.element.createElement(CheckboxControl$1, {
        heading: __$2('Checkbox Control', 'recipe'),
        label: __$2('Click me!', 'recipe'),
        help: __$2('Help Text', 'recipe'),
        checked: props.attributes.checkbox_input,
        onChange: new_val => {
          props.setAttributes({
            checkbox_input: new_val
          });
        }
      }), wp.element.createElement(RadioControl$1, {
        label: __$2('Radio Control', 'recipe'),
        selected: props.attributes.radio_input,
        options: [{
          label: 'Foo',
          value: 'foo'
        }, {
          label: 'Bar',
          value: 'bar'
        }],
        onChange: new_val => {
          props.setAttributes({
            radio_input: new_val
          });
        }
      }), wp.element.createElement(RangeControl$1, {
        beforeIcon: "arrow-left-alt2",
        afterIcon: "arrow-right-alt2",
        label: __$2('Range Control', 'recipe'),
        min: 1,
        max: 10,
        value: props.attributes.range_input,
        onChange: new_val => {
          props.setAttributes({
            range_input: new_val
          });
        }
      }))];
    },
    save: props => {
      return wp.element.createElement("div", null, wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("strong", null, "Textarea Input"), " - ", props.attributes.textarea_input), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Checkbox Input"), " - ", props.attributes.checkbox_input.toString()), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Radio Input"), " - ", props.attributes.radio_input), wp.element.createElement("li", null, wp.element.createElement("strong", null, "Range Input"), " - ", props.attributes.range_input)));
    }
  });

  // import { importDeclaration } from '@babel/types';

  const {
    registerBlockType: registerBlockType$1
  } = wp.blocks;
  const {
    Button: Button$1,
    Dashicon: Dashicon$1,
    PanelBody,
    TextareaControl,
    CheckboxControl,
    RadioControl,
    RangeControl
  } = wp.components;
  const {
    __: __$1
  } = wp.i18n;
  const {
    MediaUpload: MediaUpload$1,
    MediaUploadCheck: MediaUploadCheck$1,
    InspectorControls: InspectorControls$1
  } = wp.blockEditor;
  registerBlockType$1("udemy/media-upload", {
    title: __$1("Image Media Upload", "recipe"),
    description: __$1("Image Media Upload", "recipe"),
    category: "common",
    icon: block_icons.wapuu,
    attributes: {
      message: {
        type: "array",
        source: "children",
        selector: ".message-ctr"
      },
      img_ID: {
        type: "number"
      },
      img_URL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: "img"
      },
      img_alt: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: "img"
      }
    },
    edit: props => {
      const select_img = img => {
        props.setAttributes({
          img_ID: img.id,
          img_URL: img.url,
          img_alt: img.alt
        });
        console.log("Updated attributes.");
      };

      const remove_img = img => {
        props.setAttributes({
          img_ID: null,
          img_URL: null,
          img_alt: null
        });
      };

      return [wp.element.createElement("div", {
        className: props.className
      }, props.attributes.img_ID ? wp.element.createElement("div", {
        className: "image-ctr"
      }, wp.element.createElement("ul", {
        className: "list"
      }, wp.element.createElement("img", {
        src: props.attributes.img_URL,
        alt: props.attributes.img_alt
      })), props.isSelected ? wp.element.createElement(Button$1, {
        className: "btn-remove",
        onClick: remove_img
      }, wp.element.createElement(Dashicon$1, {
        icon: "no",
        size: "20"
      })) : null) : wp.element.createElement(MediaUploadCheck$1, null, wp.element.createElement(MediaUpload$1, {
        allowedType: ["image"],
        value: props.attributes.img_ID,
        onSelect: select_img,
        render: ({
          open
        }) => wp.element.createElement(Button$1, {
          className: "button button-large",
          onClick: open
        }, __$1("Upload Image", "recipe"))
      }))), wp.element.createElement(InspectorControls$1, null, wp.element.createElement(PanelBody, {
        title: __$1("Input Examples", "recipe")
      }, wp.element.createElement(TextareaControl, {
        label: __$1("Text Area Control", "recipe"),
        help: __$1("Help Text", "recipe"),
        value: props.attributes.message,
        onChange: new_val => {
          props.setAttributes({
            message: new_val
          });
        }
      })))];
    },
    save: props => {
      return wp.element.createElement("div", null, wp.element.createElement("p", null, props.attributes.message), wp.element.createElement("ul", {
        className: props.attributes
      }, wp.element.createElement("img", {
        src: props.attributes.img_URL,
        alt: props.attributes.img_alt
      })));
    }
  });

  /*!
   * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var PERFORMANCE = _PERFORMANCE;
  !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  (function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  })();
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;

  var w$1 = WINDOW || {};
  if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
  if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$1[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  function makeIconMasking (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        explicitMaskId = _ref.maskId,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
    var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: deGroup(maskPath)
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard (_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }

  var noop$1 = function noop() {};

  config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = 'far' in styles;
    reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };
  build();

  namespace.styles;
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;

          case 'shrink':
            acc.size = acc.size - rest;
            break;

          case 'left':
            acc.x = acc.x - rest;
            break;

          case 'right':
            acc.x = acc.x + rest;
            break;

          case 'up':
            acc.y = acc.y - rest;
            break;

          case 'down':
            acc.y = acc.y + rest;
            break;

          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }
  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  });

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  ({
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  });
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  });
  ({
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  });

  namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }

  namespace.styles;

  var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

  function css () {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library =
  /*#__PURE__*/
  function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();
  var _cssInserted = false;
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });

  var propTypes = {exports: {}};

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes.exports;

  var react = {exports: {}};

  var react_production_min = {};

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /** @license React v17.0.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l=objectAssign,n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
  if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
  function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
  function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
  function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
  function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
  function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
  0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
  function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
  react_production_min.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
  react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
  key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
  react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S().useCallback(a,b)};react_production_min.useContext=function(a,b){return S().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
  react_production_min.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S().useReducer(a,b,c)};react_production_min.useRef=function(a){return S().useRef(a)};react_production_min.useState=function(a){return S().useState(a)};react_production_min.version="17.0.2";

  {
    react.exports = react_production_min;
  }

  var React = react.exports;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  // Get CSS class list from a props object
  function classList(props) {
    var _classes;

    var spin = props.spin,
        pulse = props.pulse,
        fixedWidth = props.fixedWidth,
        inverse = props.inverse,
        border = props.border,
        listItem = props.listItem,
        flip = props.flip,
        size = props.size,
        rotation = props.rotation,
        pull = props.pull; // map of CSS class names to properties

    var classes = (_classes = {
      'fa-spin': spin,
      'fa-pulse': pulse,
      'fa-fw': fixedWidth,
      'fa-inverse': inverse,
      'fa-border': border,
      'fa-li': listItem,
      'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
      'fa-flip-vertical': flip === 'vertical' || flip === 'both'
    }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
    // return an array of the keys where the value for the key is not null

    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }

  // Camelize taken from humps
  // humps is copyright © 2012+ Dom Christie
  // Released under the MIT license.
  // Performant way to determine if object coerces to a number
  function _isNumerical(obj) {
    obj = obj - 0; // eslint-disable-next-line no-self-compare

    return obj === obj;
  }

  function camelize(string) {
    if (_isNumerical(string)) {
      return string;
    } // eslint-disable-next-line no-useless-escape


    string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
      return chr ? chr.toUpperCase() : '';
    }); // Ensure 1st char is always lowercase

    return string.substr(0, 1).toLowerCase() + string.substr(1);
  }

  function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  function styleToObject(style) {
    return style.split(';').map(function (s) {
      return s.trim();
    }).filter(function (s) {
      return s;
    }).reduce(function (acc, pair) {
      var i = pair.indexOf(':');
      var prop = camelize(pair.slice(0, i));
      var value = pair.slice(i + 1).trim();
      prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
      return acc;
    }, {});
  }

  function convert(createElement, element) {
    var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof element === 'string') {
      return element;
    }

    var children = (element.children || []).map(function (child) {
      return convert(createElement, child);
    });
    /* eslint-disable dot-notation */

    var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
      var val = element.attributes[key];

      switch (key) {
        case 'class':
          acc.attrs['className'] = val;
          delete element.attributes['class'];
          break;

        case 'style':
          acc.attrs['style'] = styleToObject(val);
          break;

        default:
          if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
            acc.attrs[key.toLowerCase()] = val;
          } else {
            acc.attrs[camelize(key)] = val;
          }

      }

      return acc;
    }, {
      attrs: {}
    });

    var _extraProps$style = extraProps.style,
        existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
        remaining = _objectWithoutProperties(extraProps, ["style"]);

    mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
    /* eslint-enable */

    return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
  }

  var PRODUCTION = false;

  try {
    PRODUCTION = "production" === 'production';
  } catch (e) {}

  function log () {
    if (!PRODUCTION && console && typeof console.error === 'function') {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }

  function normalizeIconArgs(icon) {
    // this has everything that it needs to be rendered which means it was probably imported
    // directly from an icon svg package
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
      return icon;
    }


    if (icon === null) {
      return null;
    } // if the icon is an object and has a prefix and an icon name, return it


    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
      return icon;
    } // if it's an array with length of two


    if (Array.isArray(icon) && icon.length === 2) {
      // use the first item as prefix, second as icon name
      return {
        prefix: icon[0],
        iconName: icon[1]
      };
    } // if it's a string, use it as the icon name


    if (typeof icon === 'string') {
      return {
        prefix: 'fas',
        iconName: icon
      };
    }
  }

  // creates an object with a key of key
  // and a value of value
  // if certain conditions are met
  function objectWithKey(key, value) {
    // if the value is a non-empty array
    // or it's not an array but it is truthy
    // then create the object with the key and the value
    // if not, return an empty array
    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
  }

  function FontAwesomeIcon(_ref) {
    var forwardedRef = _ref.forwardedRef,
        props = _objectWithoutProperties(_ref, ["forwardedRef"]);

    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        className = props.className,
        title = props.title,
        titleId = props.titleId;
    var iconLookup = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
    var renderedIcon = icon(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
      symbol: symbol,
      title: title,
      titleId: titleId
    }));

    if (!renderedIcon) {
      log('Could not find icon', iconLookup);
      return null;
    }

    var abstract = renderedIcon.abstract;
    var extraProps = {
      ref: forwardedRef
    };
    Object.keys(props).forEach(function (key) {
      // eslint-disable-next-line no-prototype-builtins
      if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
        extraProps[key] = props[key];
      }
    });
    return convertCurry(abstract[0], extraProps);
  }
  FontAwesomeIcon.displayName = 'FontAwesomeIcon';
  FontAwesomeIcon.propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string,
    mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    fixedWidth: PropTypes.bool,
    inverse: PropTypes.bool,
    flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    listItem: PropTypes.bool,
    pull: PropTypes.oneOf(['right', 'left']),
    pulse: PropTypes.bool,
    rotation: PropTypes.oneOf([0, 90, 180, 270]),
    size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
    spin: PropTypes.bool,
    symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    title: PropTypes.string,
    transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    swapOpacity: PropTypes.bool
  };
  FontAwesomeIcon.defaultProps = {
    border: false,
    className: '',
    mask: null,
    fixedWidth: false,
    inverse: false,
    flip: null,
    icon: null,
    listItem: false,
    pull: null,
    pulse: false,
    rotation: null,
    size: null,
    spin: false,
    symbol: false,
    title: '',
    transform: null,
    swapOpacity: false
  };
  var convertCurry = convert.bind(null, React.createElement);

  /*!
   * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */
  var faExpandArrowsAlt = {
    prefix: 'fas',
    iconName: 'expand-arrows-alt',
    icon: [448, 512, [], "f31e", "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"]
  };

  const {
    registerBlockType
  } = wp.blocks;
  const {
    Button,
    Dashicon
  } = wp.components;
  const {
    __
  } = wp.i18n;
  const {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
  } = wp.blockEditor;

  function MyMediaUploader({
    mediaIDs,
    onSelect
  }) {
    return wp.element.createElement("div", {
      className: `d-block w-100`
    }, wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {
      allowedType: ['image'],
      value: mediaIDs,
      onSelect: onSelect,
      render: ({
        open
      }) => wp.element.createElement(Button, {
        className: "button button-large",
        onClick: open
      }, mediaIDs.length < 1 ? __('Upload Item(s)', 'Upload/Select Images') : __('Edit Item(s)', 'Edit')),
      gallery: true,
      multiple: true
    })));
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
            selector: 'img'
          },
          mediaURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img'
          },
          thumbnail: {
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
        }
      },
      display: {
        type: 'string',
        default: 'normal'
      },
      content: {
        type: 'string'
      },
      color: {
        type: 'string'
      }
    },
    edit: props => {
      const onSelect = items => {
        props.setAttributes({
          images: items.map(item => {
            return {
              mediaID: parseInt(item.id, 10),
              mediaURL: item.url,
              thumbnail: item.sizes.thumbnail.url
            };
          })
        });
      };

      return [wp.element.createElement(InspectorControls, null, "Hello From Inspector"), wp.element.createElement("div", {
        className: props.className
      }, wp.element.createElement("p", null, props.attributes.images.length < 1 ? 'Empty' : 'Has Slides'), wp.element.createElement("ul", {
        className: "edit list-unstyled"
      }, props.attributes.images.map((item, index) => wp.element.createElement("div", {
        className: `slider-item`,
        key: 'image-' + item.mediaID
      }, wp.element.createElement("img", {
        class: `d-block w-100 ${index}`,
        src: item.mediaURL,
        "data-id": item.mediaID,
        "data-thumb": item.thumbnail
      })))), props.attributes.img_ID ? wp.element.createElement("div", {
        className: "image-ctr"
      }, wp.element.createElement("img", {
        src: props.attributes.img_URL,
        alt: props.attributes.img_alt
      })) : wp.element.createElement(MyMediaUploader, {
        mediaIDs: props.attributes.images.map(item => item.mediaID),
        onSelect: onSelect
      }))];
    },
    save: props => {
      return wp.element.createElement("div", {
        id: "block-carousel",
        className: `frontend slider carousel slide ${props.className}`,
        "data-interval": "false"
      }, wp.element.createElement("div", {
        className: "display-controls"
      }, wp.element.createElement("span", {
        className: "fullscreen"
      }, wp.element.createElement("a", {
        href: "#"
      }, wp.element.createElement(FontAwesomeIcon, {
        icon: faExpandArrowsAlt
      })))), wp.element.createElement("div", {
        className: " carousel-inner"
      }, props.attributes.images, props.attributes.images.map((item, index) => wp.element.createElement("div", {
        className: `carousel-item slider-item ${index == 0 ? "active" : ""} `,
        key: 'image-' + item.mediaID
      }, wp.element.createElement("img", {
        className: `d-block w-100 ${index}`,
        src: item.mediaURL,
        "data-id": item.mediaID,
        "data-thumb": item.thumbnail
      })))), wp.element.createElement("a", {
        class: "carousel-control-prev",
        href: "#block-carousel",
        role: "button",
        "data-slide": "prev"
      }, wp.element.createElement("span", {
        class: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), wp.element.createElement("span", {
        class: "sr-only"
      }, "Previous")), wp.element.createElement("a", {
        class: "carousel-control-next",
        href: "#block-carousel",
        role: "button",
        "data-slide": "next"
      }, wp.element.createElement("span", {
        class: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), wp.element.createElement("span", {
        class: "sr-only"
      }, "Next")));
    }
  });

  // Main File

  console.log("Hello from your main index");

}));
