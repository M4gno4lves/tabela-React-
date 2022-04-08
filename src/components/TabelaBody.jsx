import React from "react";

const TabelaBody = (props)=>{
    return(
        <tbody>
            {props.livros.map((livro)=>(
                <tr key={livro.id}>
                    <td>{livro.id}</td>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td className="btRemover">
                        <button onClick={() => props.removerLinha(livro.id)}id={livro.id}>Remover</button>
                    </td>
                </tr>
            ))}
    </tbody>
    )
}

export default TabelaBody;