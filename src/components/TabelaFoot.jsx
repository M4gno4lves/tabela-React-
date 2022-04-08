import React from "react";

const TabelaFoot = (props)=>{
    return(
        <tfoot>
        <tr>
            <td colSpan={"4"}>A quantidade de livros na tabela é: {props.qtdDeLivros}</td>
        </tr>
        </tfoot>
    )
}
export default TabelaFoot;