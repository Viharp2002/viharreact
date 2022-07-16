import React from 'react'

function Alert(props){
    const capitalize = (word)=>{ //alert na first letter ne capitalize karva
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        // props.alert && karyu kemke apde initial value null aapi che ane props.alert.type kariye 6ie to null.type to hoy nai kasu etle props.alert && ... karyu jethi 1 value null hase to 'and' condition ma jase j nai
       props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>! {props.alert.msg}
        </div>
    )
}

export default Alert