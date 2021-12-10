import React from 'react'; // Jest need React reference
import { mount } from "enzyme"
import { FlightDuration } from '../../components/flights/Flight';

describe('<FlightDuration />', () => {
    const component = mount(<FlightDuration duration='08 h' />);

    test('Render del componente', () => {
        expect(component.length).toEqual(1)
    })

    test('Render del título mandado por props', () => {
        expect(component.find('.duration').text()).toEqual('08 h')
    })
})
