import React, { Fragment } from 'react';

export default class Leaves extends React.Component{
    render(){
        return(
            <Fragment>
                <table>
                    <thead>
                        <th>Applied Date</th>
                        <th>Applied From</th>
                        <th>Applied Till</th>
                        <th>Reason</th>
                    </thead>
                    <tbody>
                    {this.props.leaves.map((item, index) => (
                    <tr key={index}>
                    <td>{item.AppliedDate}</td>
                    <td><input type="text" value={item.AppliedFrom}/></td>
                    <td><input type="text" value={item.AppliedTill}/></td>
                    <td><input type="text" value={item.Reason}/></td>
                </tr>
                 ))}
                    </tbody>
                </table>
            <input type="Button" onClick={this.props.closeLeaves} value="Close" />
            </Fragment>            
        )
    }
} 