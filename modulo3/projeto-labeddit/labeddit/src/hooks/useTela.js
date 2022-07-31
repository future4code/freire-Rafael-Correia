import {useContext, useEffect} from "react"
import GlobalStateContext from "../context/context"

const useTela = (telaAtual) => {
    const { setTelaAtual } = useContext(GlobalStateContext)

    useEffect(() => {
        setTelaAtual(telaAtual)
    }, [setTelaAtual, telaAtual])
}

export default useTela