/* eslint-disable eqeqeq */
import { action } from "easy-peasy";

export const model = {
    name: '',
    consumedContent: '',
    mostUsedDevice: '',
    page2Question2: '',
    usedSocialNetworks: [],
    setName: action((state, payload) => {
        state.name = payload
    }),
    setConsumedContent: action((state, payload) => {
        state.consumedContent = payload
    }),
    setMostUsedDevice: action((state, payload) => {
        state.mostUsedDevice = payload
        state.page2Question2 = ""
    }),
    setPage2Question2: action((state, payload) => {
        state.page2Question2 = payload
    }),
    setUsedSocialNetworks: action((state, payload) => {
        if (payload[0] == "add") {
            state.usedSocialNetworks.push(payload[1])
        } else if (payload[0] == "remove") {
            for (let i = 0; i < state.usedSocialNetworks.length; i++) {
                if (state.usedSocialNetworks[i] == payload[1]) {
                    state.usedSocialNetworks.splice(i, 1)
                }
            }
        } else if (payload == "clear") {
            state.usedSocialNetworks = []
        }
    })
}