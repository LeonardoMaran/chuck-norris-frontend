import React, { Component } from 'react'
import axios from 'axios'

class Piadas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            piada: '',
            traducao: ''
        }

        this.proximaPiada()
    }

    proximaPiada() {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(piada => {
                console.log(piada.data)
                this.setState({ piada: piada.data })
                this.traduzPiada(piada.data.value)
            })
            .catch(err => console.log(err))
    }

    traduzPiada(piada) {
        const minhaurl = `http://127.0.0.1:3000/traduz?piada=${piada}`
        console.log(minhaurl)
        axios 
            .get(minhaurl)
            .then(traduzido => {
                console.log(traduzido.data.translations[0])
                this.setState({traducao: traduzido.data.translations[0]})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.piada.category && <h3>Categoria: {this.state.piada.category}</h3>}
                {!this.state.piada.category && <h3>Sem categoria registrada</h3>}


                <p>{this.state.piada.value}</p>
                <hr />
                <p>{this.state.traducao.translation}</p>
                <button onClick={() => this.proximaPiada()}>Próxima Piada</button>
            </div>
        )
    }
}

export default Piadas