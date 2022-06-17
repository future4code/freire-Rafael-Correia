import React from 'react';
import './App.css';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import UltimaEtapa from './componentes/UltimaEtapa';

class App extends React.Component {
  state = {
    escolaridade: "",
    etapa: "Etapa1"
  }

  handleNextStep = (event) => {
    event.preventDefault()
    let select = document.getElementById("escolaridade")
    let escolaridadeValor = select.options[select.selectedIndex].value

    this.setState({
      escolaridade: escolaridadeValor
    })

    if(this.state.escolaridade === "Ensino médio incompleto" || this.state.escolaridade === "Ensino médio completo") {
      this.setState({
        etapa: "Etapa3"
      })
    } else if(this.state.escolaridade === "Ensino superior incompleto" || this.state.escolaridade === "Ensino superior completo"){
      this.setState({
        etapa: "Etapa2"
      })
    }
  }

  handleLastStep = () => {
    this.setState({
      etapa: "ultima"
    })
  }
  
  render() {

    let renderizarEtapa

    if(this.state.etapa === "Etapa1") {
      renderizarEtapa = <Etapa1
          aoEnviar={this.handleNextStep}
        />
    } 
    else if(this.state.etapa === "Etapa2") {
      renderizarEtapa = <Etapa2
        aoEnviar={this.handleLastStep}
      />
    }
    else if(this.state.etapa === "Etapa3") {
      renderizarEtapa = <Etapa3
        aoEnviar={this.handleLastStep}
      />
    }
    else if(this.state.etapa === "ultima") {
      renderizarEtapa = <UltimaEtapa />
    }

    return (
      <div className="App">
        {renderizarEtapa}
      </div>
    );
  }
}

export default App
