import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'


class AddGardenDecor extends Component {
    constructor(props) {
        super(props)

        this.productId = React.createRef();
        this.productName = React.createRef();
        this.cost = React.createRef();
        this.stock = React.createRef();
        this.description = React.createRef();
        this.productMaterial = React.createRef();

    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {

        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/')
            }, 2000)
        }
    }
    add() {

        let newGardenDecor = {
            productId: this.productId.current.value,
            productName: this.productName.current.value,
            cost: this.cost.current.value,
            stock: this.stock.current.value,
            description: this.description.current.value,
            productMaterial: this.productMaterial.current.value
        }
        this.props.onAddGardenDecor(newGardenDecor)
    }


    update() {
        let gardendecor = {
            productId: this.productId.current.value,
            productName: this.productName.current.value,
            cost: this.cost.current.value,
            stock: this.stock.current.value,
            description: this.description.current.value,
            productMaterial: this.productMaterial.current.value

        }

        this.props.onUpdateGardenDecor(gardendecor.productId, gardendecor)

    }


    render() {
        return (
            <div>
                <h1>Enter The Details</h1>

                <div className="container">

                    <div className="root-div">
                        <div className="mb-3 add-gardendecor">

                            <input type="number" ref={this.productId} pattern="[0-9]+" className="form-control" id="productId" placeholder="GardenDecor ID" />
                        </div>

                        <div className="mb-3 add-gardendecor">
                            <input type="text" ref={this.productName} className="form-control" id="productName" placeholder="GardenDecor Name" />
                        </div>

                        <div className="mb-3 add-gardendecor">
                            <input type="number" ref={this.cost} className="form-control" id="cost" placeholder="GardenDecor Cost" />
                        </div>

                        <div className="mb-3 add-gardendecor">
                            <input type="number" ref={this.stock} className="form-control" id="stock" placeholder="GardenDecor Stock " />
                        </div>

                        <div className="mb-3 add-employee">
                            <input type="description" ref={this.description} className="form-control" id="description" placeholder="GardenDecor Description" />
                        </div>

                        <div className="mb-3 add-employee">
                            <input type="productMaterial" ref={this.productMaterial} className="form-control" id="productMaterial" placeholder="GardenDecor Material" />
                        </div>



                        <button type="button" onClick={this.add.bind(this)} className="btn btn-success add-button">Add</button>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update</button>

                    </div>

                    <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                        {this.props.returnedMessage}
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddGardenDecor: (gardendecor) => {
            dispatch(actionCreators.AddGardenDecor(gardendecor))
        },
        onUpdateGardenDecor: (id, newGardenDecorObject) => {
            dispatch(actionCreators.updateGardendecor(id, newGardenDecorObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddGardenDecor))


