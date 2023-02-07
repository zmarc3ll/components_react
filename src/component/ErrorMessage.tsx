import { Component, ReactNode } from "react";

interface Props{
    szoveg: string;
}

export default class ErrorMessage extends Component {
    render(): ReactNode {
        return <div> 
            {
                this.props.szoveg=''? '<p style={{color: "red"}}>this.props.szoveg<p/>' : '<p style={{color: "green"}}>Minden OK</p>';
            }

        </div>
    }
}