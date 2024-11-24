import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe("Latihan Component", ()=> {
    test("Counter Default Value must be 0", ()=> {
        render(<Counter />);
        const countValue = screen.getByTestId("counter-value");
        expect(countValue).toHaveTextContent("0");
    });
    test("increment works when button clicked", ()=> {
        render(<Counter />);
        const countValue = screen.getByTestId("counter-value");
        const incrementButton = screen.getByTestId("increment-button");
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent("1");
    });
    test("decrement works when button clicked", ()=> {
        render(<Counter />);
        const countValue = screen.getByTestId("counter-value");
        const decrementButton = screen.getByTestId("decrement-button");
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent("-1");
    });
    test("reset the count using reset button", ()=> {
        render(<Counter />);
        const countValue = screen.getByTestId("counter-value");
        const resetButton = screen.getByTestId("reset-button");
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent("0");
    });
    test("greeting component {nama kalian}", ()=> {
        const nama = "Fajar Teguh Permana";
        render(<Greeting name={nama} />);
        const greetingText = screen.getByTestId("greeting");
        expect(greetingText).toHaveTextContent(`Hello, ${nama}`);
    });
    test("greeting component {nama dosen kalian}", ()=> {
        const nama = "Farid Suryanto";
        render(<Greeting name={nama} />);
        const greetingText = screen.getByTestId("greeting");
        expect(greetingText).toHaveTextContent(`Hello, ${nama}`);
    });
    test("triggers alert with correct message when clicked", ()=> {
        window.alert = jest.fn();
        const pesan = "Ini Alert"
        render(<AlertButton message={pesan}/>);
        const button = screen.getByTestId("alert-button");
        fireEvent.click(button);
        expect(window.alert).toHaveBeenCalledWith(pesan);
    });
})


