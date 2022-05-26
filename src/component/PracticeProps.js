import React from "react";

class PracticeProps extends React.Component {


    render() {
        console.log(">>>Check props:", this.props)
        // let name = this.props.name
        // let age = this.props.age
        // Su dung khai bao nhu ben khi va chi khi ten bien trung vs key cua props
        // <PracticeProps
        //             name={"Minh Nhi"}
        //             age={"28"}
        //         />

        let { name, age } = this.props;
        return (
            <>
                {/* Nhan data tu component cha */}
                {/* <div>{this.props.name} - {this.props.age}</div> */}
                <div>{name} - {age}</div>
            </>
        )
    }
}

export default PracticeProps;