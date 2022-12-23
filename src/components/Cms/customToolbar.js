import React from "react";
import formats from './toolbarOptions.js'

const renderOptions = (formatData)=>{
    const {className,options} = formatData;
    return (
        <select className = {className}>
            <option defaultValue="selected"></option>
            {
                options.map(value =>{
                    return (
                        <option value={value} key={value}></option>
                    )
                })
            }
        </select>
    )
}
const renderSingle = (formatData)=>{
    const {className,value} = formatData;
    return (
        <button className = {className} value = {value}></button>
    )
}
const CustomToolbar = () => (
    <div id="toolbar" className='w-3/5'>
        {
            formats.map(classes => {
                return (
                    <span className = "ql-formats">
                        {
                            classes.map(formatData => {
                                return formatData.options?renderOptions(formatData):renderSingle(formatData)
                            })
                        }
                    </span>
                )
            })
        }
    </div>
)
export default CustomToolbar;