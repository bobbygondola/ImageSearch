import React from 'react'


// React REFS are a system to give you direct access to a DOM element that is rendered by a component.
//      Use Case - Dynamically finding height of a dom element to adjust css or classNames accordingly.


//Callbacks have to be BOUND. Set the function calling the CallBack in Arrow Function Syntax. => {} comment


class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {spans:0}

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans) // Calling Callback <-
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight           // Callback <-
        const spans = Math.ceil(height/10);
        this.setState({spans:spans})
    }

    render(){
        const {alt_description, urls} = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                 ref={this.imageRef} 
                 alt={alt_description}
                 src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
