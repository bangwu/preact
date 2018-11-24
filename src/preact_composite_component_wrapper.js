import PreactDOMComponent from './preact_dom_component';
class PreactCompositeComponentWrapper {
  constructor(element) {
    this._currentElement = element;
  }

  mountComponent(container) {
    const Component = this._currentElement.type;
    const componentInstance = new Component(this._currentElement.props);
    const element = componentInstance.render();
    if (element === null) {
      return null;
    }
    const domComponentInstance = new PreactDOMComponent(element);
    return domComponentInstance.mountComponent(container);
  }
}

export default PreactCompositeComponentWrapper;
