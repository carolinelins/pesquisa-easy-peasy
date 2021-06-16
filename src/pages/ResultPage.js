/* eslint-disable eqeqeq */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useStoreActions, useStoreState } from 'easy-peasy'

function ResultPage() {
    let history = useHistory()
    const state = useStoreState(state => state)
    const actions = useStoreActions(actions => actions)

    function Page2Question2() {
        if (state.mostUsedDevice == "Celular/Tablet") {
            return (
                <p>Sistema operacional: {state.page2Question2}</p>
            )
        } else if (state.mostUsedDevice == "Computador/Notebook") {
            return (
                <p>Por onde acessa: {state.page2Question2}</p>
            )
        }
    }

    function newSurvey() {
        actions.setName('')
        actions.setConsumedContent('')
        actions.setMostUsedDevice('')
        actions.setPage2Question2('')
        actions.setUsedSocialNetworks("clear")
        history.push("/")
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>
                    Pesquisa finalizada! Suas respostas: 
                </Card.Title>
                <br/>
                <p>Nome: {state.name}</p>
                <p>Conteúdo consumido nas redes sociais: {state.consumedContent}</p>
                <p>Dispositivo mais utilizado: {state.mostUsedDevice}</p>
                <Page2Question2 />
                <p>Redes sociais utilizadas: {state.usedSocialNetworks.join(", ")}</p> <br /> <br/>
                <Button variant="primary" className="mt-5" onClick={() => newSurvey()}>Nova pesquisa</Button>
            </Card.Body>
        </Card>
    )
}

export default ResultPage