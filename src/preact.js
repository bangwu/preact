import PreactDOMComponent from './preact_dom_component';
import PreactCompositeComponentWrapper from './preact_composite_component_wrapper';
const Preact = {
  render: function(element, container) {
    const componentInstance = new PreactCompositeComponentWrapper(element);
    return componentInstance.mountComponent(container);
  },
  createElement: function(type, props, children) {
    const element = {
      type,
      props: props || {}
    };

    if (children) {
      element.props.children = children;
    }
    return element;
  },

  createClass(spec) {
    function Constructor(props) {
      this.props = props;
    }
    Constructor.prototype.render = spec.render;
    return Constructor;
  }
};

export default Preact;
