import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'
import { withRouter } from 'react-router-dom';


class ViewGardenDecorByName extends Component {
    constructor(props) {
        super(props)

        this.productName = React.createRef()
    }

    search() {
        this.props.onViewGardenDecorByName(this.productName.current.value)

    }

    componentDidMount() {
        this.props.clearState()
    }

    render() {
        let gardendecorsList = this.props.gardendecorsList.map((gardendecor, index) => {
            return (
                <tr key={index}>
                    <th>{gardendecor.productId}</th>
                    <td>{gardendecor.productName}</td>
                    <td>{gardendecor.cost}</td>
                    <td>{gardendecor.stock}</td>
                    <td>{gardendecor.description}</td>
                    <td>{gardendecor.productMaterial}</td>
                </tr>
            )
        })

        return (
            <div className="container">
                <div className="mb-3 input-search-name ">
                    <h3>Enter Product Name to Get Details</h3>


                    <input type="text" ref={this.productName} className="form-control" id="productName" placeholder="GardenDecor Product Name" />

                </div>

                <div>
                    {/* <a href="/viewGardenDecorByName"> */}
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                    {/* </a> */}
                </div>


                <hr />

                <div className="emp-table-div">

                    <table className="table table-info gardendecor-table">
                        <thead>
                            <tr>
                                <th scope="col">Product Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Description</th>
                                <th scope="col">Product Material</th>

                            </tr>
                        </thead>
                        <tbody>
                            {gardendecorsList}
                        </tbody>
                    </table>

                </div>

            </div>



        )
    }
}
const mapStateToProps = (state) => {
    return {
        gardendecorsList: state.gardendecorsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onViewGardenDecorByName: (productName) => dispatch(actionCreators.getGardenDecorByProductName(productName)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewGardenDecorByName))


