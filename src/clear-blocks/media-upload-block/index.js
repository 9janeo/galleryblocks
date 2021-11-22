// import { importDeclaration } from '@babel/types';
import block_icons from "../../icons/index";
import "./editor.scss";
// import OwlCarousel from "react-owl-carousel";

const { registerBlockType } = wp.blocks;
const {
  Button,
  Dashicon,
  PanelBody,
  TextareaControl,
  CheckboxControl,
  RadioControl,
  RangeControl,
} = wp.components;
const { __ } = wp.i18n;
const { MediaUpload, MediaUploadCheck, InspectorControls } = wp.blockEditor;

registerBlockType("udemy/media-upload", {
  title: __("Image Media Upload", "recipe"),
  description: __("Image Media Upload", "recipe"),
  category: "common",
  icon: block_icons.wapuu,
  attributes: {
    message: {
      type: "array",
      source: "children",
      selector: ".message-ctr",
    },
    img_ID: {
      type: "number",
    },
    img_URL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
    },
    img_alt: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
    },
  },
  edit: (props) => {
    const select_img = (img) => {
      props.setAttributes({
        img_ID: img.id,
        img_URL: img.url,
        img_alt: img.alt,
      });
      console.log("Updated attributes.");
    };

    const remove_img = (img) => {
      props.setAttributes({
        img_ID: null,
        img_URL: null,
        img_alt: null,
      });
    };

    return [
      <div className={props.className}>
        {props.attributes.img_ID ? (
          <div className="image-ctr">
            <ul className="list">
              <img
                src={props.attributes.img_URL}
                alt={props.attributes.img_alt}
              />
            </ul>
            {props.isSelected ? (
              <Button className="btn-remove" onClick={remove_img}>
                <Dashicon icon="no" size="20" />
              </Button>
            ) : null}
          </div>
        ) : (
          <MediaUploadCheck>
            <MediaUpload
              allowedType={["image"]}
              value={props.attributes.img_ID}
              onSelect={select_img}
              render={({ open }) => (
                <Button className={"button button-large"} onClick={open}>
                  {__("Upload Image", "recipe")}
                </Button>
              )}
            ></MediaUpload>
          </MediaUploadCheck>
        )}
      </div>,
      <InspectorControls>
        <PanelBody title={__("Input Examples", "recipe")}>
          <TextareaControl
            label={__("Text Area Control", "recipe")}
            help={__("Help Text", "recipe")}
            value={props.attributes.message}
            onChange={(new_val) => {
              props.setAttributes({ message: new_val });
            }}
          />
        </PanelBody>
      </InspectorControls>,
    ];
  },
  save: (props) => {
    return (
      <div>
        <p>{props.attributes.message}</p>
        <ul className={props.attributes}>
          <img src={props.attributes.img_URL} alt={props.attributes.img_alt} />
        </ul>
      </div>
    );
  },
});
