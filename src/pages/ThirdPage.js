/* eslint-disable eqeqeq */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { useStoreState, useStoreActions } from 'easy-peasy'

function ThirdPage() {
    let history = useHistory()
    const usedSocialNetworks = useStoreState(state => state.usedSocialNetworks)
    const setUsedSocialNetworks = useStoreActions(actions => actions.setUsedSocialNetworks)

    function backToSecondPage() {
        history.push("/secondPage")
    }

    function resultPage() {
        history.push("/resultPage")
    }

    function addOrRemoveSocialNetwork(isChecked, value) {
        if (isChecked) {
            setUsedSocialNetworks([ "add", value ])
        } else {
            setUsedSocialNetworks([ "remove", value ])
        }
    }

    function checkCheckBox(value) {
        for (let i = 0; i < usedSocialNetworks.length; i++) {
            if (usedSocialNetworks[i] == value) {
                return true
            }
        }
        return false
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>
                    Marque as redes sociais que você utiliza:
                </Card.Title>
                <Form>
                    <Form.Check type="checkbox" name="socialNetworks" label="Facebook" value="Facebook" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("Facebook")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="Instagram" value="Instagram" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("Instagram")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="LinkedIn" value="LinkedIn" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("LinkedIn")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="WhatsApp" value="WhatsApp" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("WhatsApp")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="YouTube" value="YouTube" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("YouTube")} />
                </Form>
                <Button variant="secondary" className="mr-5" onClick={() => backToSecondPage()}>Anterior</Button>
                <Button variant="primary" className="ml-5" onClick={() => resultPage()}>Enviar</Button>
            </Card.Body>
        </Card>
    )
}

export default ThirdPage