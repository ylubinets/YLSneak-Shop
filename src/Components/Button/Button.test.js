import Button from "./Button";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("testing Buttons", () => {

    test('button test', () => {
        render(<Button/>);
    })

    test('button test with props', () => {
        const {getByTestId} = render(<Button onClick={jest.fn()} text="button"/>);
        expect(getByTestId("button-test")).toBeInTheDocument();
    })

    test('should call function from props', () => {
        const mockFn = jest.fn();
        const {getByTestId} = render(<Button onClick={mockFn} text="button"/>);
        userEvent.click(getByTestId('button-test'));
        expect(mockFn).toBeCalled();
    })

})
