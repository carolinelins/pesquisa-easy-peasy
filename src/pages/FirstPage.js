/* eslint-disable eqeqeq */
import React from "react"
import { Card, FormControl, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy'

function FirstPage() {
    const history = useHistory()
    const name = useStoreState(state => state.name)
    const consumedContent = useStoreState(state => state.consumedContent)
    const setName = useStoreActions(actions => actions.setName)
    const setConsumedContent = useStoreActions(actions => actions.setConsumedContent)

    function secondPage() {
        if (name == "" || consumedContent == "") {
            return alert("Você deve responder às duas perguntas para ir à próxima página!")
        }
        history.push("/secondPage")
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>Pesquisa sobre redes sociais</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label>Digite seu nome</Form.Label>
                    <FormControl type="text" placeholder="ex: Fulano da Silva" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Que tipo de conteúdo você consome nas redes sociais?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={consumedContent} onChange={(e) => setConsumedContent(e.target.value)} />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={() => secondPage()}>Próxima</Button>
            </Card.Body>
        </Card>
    )
}

export default FirstPage
