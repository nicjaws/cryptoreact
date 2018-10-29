import React, { Component } from 'react'
import OptionSelect from './OptionSelect';

class Formulario extends Component {

    monedaRef = React.createRef(); 
    criptoRef = React.createRef();

    cotizarMonedas = (e) => {
        e.preventDefault();
        // crear el objeto
        const cotizacion = {
            moneda: this.monedaRef.current.value,
            crypto: this.criptoRef.current.value
        }
        // console.log(cotizacion);

        // enviar por props
        this.props.obtenerValoresCrypto(cotizacion);
    }
    render() { 
        return ( 
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                    <label>
                      Moneda:  
                    </label>
                    <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">DOLAR ESTADOUNIDENSE</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="EUR">EURO</option>
                        <option value="GBP">LIBRAS</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Criptomoneda</label>
                    <select ref={this.criptoRef} className="form-control">
                        {Object.keys(this.props.monedas).map(key => (
                            <OptionSelect
                                key={key}
                                moneda={this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="cotizar"/>
                </div>
            </form>
         );
    }
}
 
export default Formulario;