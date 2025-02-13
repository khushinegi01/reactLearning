function customRender(customElements, root) {
    let domElement = document.createElement(customElements.type)
    domElement.innerHTML = customElements.children
    // domElement.setAttribute('href', customElements.props.href)
    // domElement.setAttribute('style', customElements.props.style)
    // domElement.setAttribute('target', customElements.props.target)


    // short method for setting the attributes
    for(let prop in customElements.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,customElements.props[prop])
    }
    root.appendChild(domElement)
}
const customElements = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        style : 'color: red',
        target : '_blank' 
    },
    children : ['Click me'] 
}
let root = document.getElementById('root');
customRender(customElements, root);
