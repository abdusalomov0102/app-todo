import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getProjectTask, addProjectTask} from "../../actions/projectTaskActions";

class UpdateProjectTask extends Component {

    constructor() {
        super();

        this.state = {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        const {id, summary, acceptanceCriteria, status} = nextProps.project_task;

        this.setState({
            id, summary, acceptanceCriteria, status
        });
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProjectTask(id);
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedTask = {
            id: this.state.id,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        };

        this.props.addProjectTask(updatedTask, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        const {errors} = this.state;

        return (
            <>

                <div className="updateProjectTask">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to="/" className="btn btn-outline-secondary">
                                    Back To Board
                                </Link>
                                <h4 className="display-4 text-center">Add / Update Project Task</h4>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.summary
                                               })}
                                               name="summary"
                                               placeholder="Project Task Summary!"
                                               value={this.state.summary}
                                               onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control form-control-lg"
                                            name="acceptanceCriteria"
                                            placeholder="Acceptance Criteria: "
                                            value={this.state.acceptanceCriteria}
                                            onChange={this.onChange}
                                        >
                                        </textarea>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

UpdateProjectTask.propTypes = {
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    project_task: state.project_task.project_task,
    errors: state.errors
});

export default connect(mapStateToProps, {getProjectTask, addProjectTask})(UpdateProjectTask);