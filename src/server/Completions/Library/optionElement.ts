import { BindableAttribute, MozDocElement } from './_elementStructure';

export default class optionElement extends MozDocElement {

  public documentation = `The HTML <option> element is used to create a control representing an item within a <select>,
  an <optgroup> or a <datalist> HTML5 element.`;

  constructor() {
    super();
    this.url = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option';
    this.attributes.set('disabled',
      new BindableAttribute(` this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one its ancestors is a disabled <optgroup> element.`));
    this.attributes.set('label',
      new BindableAttribute(`This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.`));
    this.attributes.set('selected',
      new BindableAttribute(`If present, this Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one single <option> of this <select> element may have the selected attribute.`));
    this.attributes.set('value',
      new BindableAttribute(`The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.`));
  }
}
