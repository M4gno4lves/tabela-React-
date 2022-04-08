import React from "react";

const TabelaHead = ()=>{

    return(

            <thead>
                <tr>
                    <th colSpan={"4"}>
                        Tabela Livros
                    </th>
                </tr>
                <tr>
                    <th>ISBM</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th></th>
                </tr>
            </thead>

    )
}

export default TabelaHead;