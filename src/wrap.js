import React from 'react'

const WithSpinner = WrappedComponent => {
    class WithData extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                data: []
            }
        }

        componentDidMount(){
            setTimeout( () => {
                fetch(this.props.dataSource)
                .then(response => response.json())
                .then(data => this.setState({ data: data.slice(0,10)}))
            },1500)
        }

        render(){
            const {dataSource, ...otherProps} = this.props
            return this.state.data.length < 1 ?
                (<div> LOADING...</div>)
                :
                (
                    <div className = "spinner">
                        <WrappedComponent data={this.state.data} {...otherProps}/>
                    </div>
                )
        }
    }
    return WithData
}

export default WithSpinner