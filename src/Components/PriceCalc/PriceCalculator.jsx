import React from 'react'
import "./PriceCalculator.css"

function PriceCalculator({price, unit}) {
  return (
    <div className='calculator-wrapper'>
        <h2>Total Ticket Price</h2>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Units</th>
                    <th>Final Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adult</td>
                    <td>{price}</td>
                    <td>{unit}</td>
                    <th>{price * unit}</th>
                </tr>
                <tr>
                    <td>Students & Kids</td>
                    <td>{price}</td>
                    <td>{unit}</td>
                    <th>{price * unit * 0.45}</th>
                </tr>
                <tr>
                    <td>Elderly</td>
                    <td>{price}</td>
                    <td>{unit}</td>
                    <th>{price * unit * 0.45}</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>100</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PriceCalculator