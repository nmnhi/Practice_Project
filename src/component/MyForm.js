import React from "react";
import PracticeProps from "./PracticeProps";


class AddForm extends React.Component {

    state = {
        firstname: "",
        lastname: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Click Me")
        console.log("Result: ", this.state)
        console.log("Result: ", this.state.firstname)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="firstname">First Name</label> <br />
                    <input
                        type="text"
                        value={this.state.firstname}
                        onChange={(event) => this.handleChangeFirstName(event)}

                    />
                    <br />
                    <label htmlFor="lastname">Last Name</label><br />
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br></br>
                    {/* <input type="submit" value="Submit" */}
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                {/* Truyen data tu component cha sang component con(props) */}
                {/* <PracticeProps name={"Practice One"} />
                <PracticeProps name={"Practice Two"} /> */}
                <PracticeProps
                    name={"Minh Nhi"}
                    age={"28"}
                />
            </>
        )
    }
}
export default AddForm;