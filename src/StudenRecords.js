import React, { useState } from "react";

import { Table, Column, DataCell } from 'fixed-data-table-2';
import Button from "@material-ui/core/Button";

class StudentRecords extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        return Object.keys(this.props.data[0]);
        }
    
    getHeader = function(){
            var keys = this.getKeys();
            return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
            })
    }
    
    RenderRow = (props) =>{
        return props.keys.map((key, index)=>{
            
        return(<td key={props.data[key]}>{props.data[key]}</td>)
        })
    }

    getRowsData = function() {
        var items = this.props.data;
        var keys = this.getKeys();
        console.log("keys --> " + keys);
        console.log("items --> " + items);
        return items.map((row, index)=>{
            console.log("row --> " + row.status);
            let student = "";

            let paymentPending = false;
            if(row.status === "Payment pending") {
                console.log("toggling Payment pending");
                paymentPending = true;
            }
            return( 
                <tr key={index}>
                    <RenderRow key={index} data={row} keys={keys}>
                    {paymentPending 
                    && <td>
                        <p>Button</p>
                    </td>
                    } 
                    </RenderRow>
                </tr>)
        })
    }
    
    render() {
    return (
    <div>
    <table>
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    
    );
    }
   }

   const handlePay = (data) => {
        console.log("Update payment for student --> " + data)
   }

   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        
    return(

            
            <td key={props.data[key]}>{props.data[key]}</td> 
        
        )
        })
    
   }
   

export default StudentRecords