import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class TelaListaDePlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegaPlaylists()
        console.log("componente carregou")
    }

    pegaPlaylists = () =>{
        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao = {
            headers: {
                authorization: "shirley-almeida-joy"
            }
        }
        axios.get(URL, autorizacao)
        .then((response)=>{ this.setState({playlists: response.data.result.list})})
        .catch((error)=>{console.log(error)})
    }

    deletePlay = (id) => {

        axios.delete(
          'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}',
          {
            headers:{
              Authorization: "heber-souza-joy"
            }
          }
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.pegaPlaylists();
        })
        .catch((err) => {
          console.log(err.response.data)
        })
      }


    render() {

        let playListsMap = this.state.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} <button onClick={() => this.deletePlay(playlist.id)}>x</button><br /> 
                <strong>ID:</strong> {playlist.id}
            </p>
        })

        return(
            <div key={playListsMap.id}>
                <h2>Quantidade de playlists: {playListsMap.length}</h2>

                <p> {playListsMap} </p>
            </div>
        )
    }

}
export default  TelaListaDePlaylists