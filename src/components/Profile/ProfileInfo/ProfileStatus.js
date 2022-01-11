import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status} )
        }
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                { !this.state.editMode ?
                    <div>
                        <span onDoubleClick={ this.onEditMode }>{this.props.status || "Status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.offEditMode } value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;