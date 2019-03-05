import React from 'react';
import '../index.css'


class BusModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    returnURL(stopName) {
        console.log("HEERERERERE", this)

    }




    render() {

        return (
            <div >
                <div className="col">

                    <div style={{ fontSize: '25px', fontStyle: 'italic', width: '100%', backgroundColor: "grey" }}></div>
                    <div className="border row align-items-center justify-content-between ">
                        <p className="" style={{ fontSize: '25px', fontStyle: 'bold', marginTop: '10px' }}>Loop Bus # {this.props.selectedStop.id} 75</p>
                    </div>
                    <div className="row">
                        <div style={{fontSize:'20px'}} className="col">ETA:</div>
                        <div style={{fontSize:'20px'}} className="col">{this.props.eta}min</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BusModal;


