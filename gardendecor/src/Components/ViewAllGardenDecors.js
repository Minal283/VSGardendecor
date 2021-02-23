import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/actions'
import { withRouter } from 'react-router-dom';


class ViewAllGardenDecors extends Component {
    componentDidMount() {
        this.props.onGetGardenDecors()
    }


    delete(id) {
        this.props.onDeleteGardenDecor(id);
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

                    <td>
                        <a href="/listgardendecors">
                            <button onClick={this.delete.bind(this, gardendecor.productId)} className="btn btn-primary">DELETE</button>
                        </a>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">
                <hr></hr>
                <h4><em>RECIEVED ALL GARDENDECOR LIST</em></h4>
                <hr></hr>


                <h2>{this.props.returnedMessage}</h2>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col"> Cost</th>
                            <th scope="col"> Stock</th>
                            <th scope="col">Description</th>
                            <th scope="col">Product Material</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody class="table-primary">
                        {gardendecorsList}
                    </tbody>
                </table>

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
        onGetGardenDecors: () => {
            return dispatch(actionCreated.getAllGardenDecors())
        },
        onDeleteGardenDecor: (id) => {
            return dispatch(actionCreated.deleteGardenDecor(id))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewAllGardenDecors))

