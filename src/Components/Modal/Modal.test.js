import Modal from "./Modal"
import Button from "../Button/Button"
import { render } from "@testing-library/react"


describe('testing Modal', () => {

    test("modal test",()=>{
        render(<Modal actions={actionsMock}/>)
    })

    const actionsMock = [<Button text="test1" onClick={jest.fn()}/>, <Button text="hello now" onClick={jest.fn()}/>]

    test("should render modal with props",()=>{
        const { getByTestId } = render(<Modal headerText="modal" closeButton text="modal text" actions={actionsMock} hide={jest.fn()}/>)
        const modalHeading = (getByTestId("modal-heading")).textContent
        const modalText = (getByTestId("modal-text")).textContent
        expect(modalHeading).toBe("modal")
        expect(modalText).toBe("modal text")
        expect(getByTestId("modal-cross")).toBeInTheDocument()
        // debug()
    })

    test("should render specific buttons",()=>{
        const { getByText } = render(<Modal actions={actionsMock} />)
        expect(getByText("test1")).toBeInTheDocument()
        expect(getByText("hello now")).toBeInTheDocument()
        // debug()
    })
})
