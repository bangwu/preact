class PreactDOMComponent {
  constructor(element) {
    this._currentElement = element;
  }

  mountComponent(container) {
    const domElement = document.createElement(this._currentElement.type);
    if (typeof this._currentElement.props.children === 'string') {
      const text = this._currentElement.props.children;
      const textNode = document.createTextNode(text);
      domElement.appendChild(textNode);
    } else if (this._currentElement.props.children instanceof Array) {
      this._currentElement.props.children.forEach(element => {
        this.render(element, domElement);
      });
    } else {
      this.render(this._currentElement.props.children, domElement);
    }
    container.appendChild(domElement);
    this._hostNode = domElement;
    return domElement;
  }

  render(element, domElement) {
    const domInstance = new PreactDOMComponent(element);
    domInstance.mountComponent(domElement);
  }
}

export default PreactDOMComponent;
