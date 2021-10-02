import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addProjectTask} from "../../actions/projectTaskActions";
import classnames from "classnames";

class AddProjectTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        };
        console.log(newProjectTask);
        this.props.addProjectTask(newProjectTask, this.props.history);
    }

    // submitButton = () => {
    //     var v1 = document.getElementById("summary").value;
    //     var v2 = document.getElementById("acceptanceCriteria").value;
    //     if (v1 !== "" || v2 !== "") {
    //         document.getElementById("submitButtons").type = 'submit';
    //     } else {
    //         alert("Summary or AcceptanceCriteria is empty!!!")
    //     }
    // }


    render() {

        const {errors} = this.state;

        return (
            <>

                <div className="addProjectTask">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to="/" className="btn btn-outline-secondary">
                                    Back To Board
                                </Link>
                                <h4 className="display-4 text-center">Add / Update Project Task</h4>
                                <form onSubmit={this.onSubmit} action="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="summary"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.summary
                                            })}
                                            name="summary"
                                            value={this.state.summary}
                                            placeholder="Project Task Summary: "
                                            onChange={this.onChange}
                                        />
                                        {errors.summary && (
                                            <div className="invalid-feedback">{errors.summary}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control form-control-lg"
                                            id="acceptanceCriteria"
                                            name="acceptanceCriteria"
                                            placeholder="Acceptance Criteria: "
                                            value={this.state.acceptanceCriteria}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            name="status"
                                            className="form-control form-control-lg"
                                            value={this.state.status}
                                            onChange={this.onChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="TO_DO">TO DO</option>
                                            <option value="IN_PROGRESS">IN PROGRESS</option>
                                            <option value="DONE">DONE</option>
                                        </select>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                    {/*<button*/}
                                    {/*    type="button"*/}
                                    {/*    id="submitButtons"*/}
                                    {/*    className="btn btn-primary btn-block mt-4"*/}
                                    {/*    onClick={this.submitButton}*/}
                                    {/*>*/}
                                    {/*    Submit*/}
                                    {/*</button>*/}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

AddProjectTask.proptype = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {addProjectTask})(AddProjectTask);