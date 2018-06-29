import * as _ from "lodash";
import * as React from "react";
// import styled from "styled-components";

interface IProps {
  projects: string[];
  employees: string[];
  selectedProject?: string | null;
  selectedEmployee?: string | null;
  selectProject: (value: string) => void;
  selectEmployee: (value: string) => void;
  onClick: () => void;
}

export class Attribution extends React.Component<IProps> {
  public onSubmit = (e: any) => {
    e.preventDefault();
  };

  public renderProjects = (
    projects: string[],
    selectedProject?: string | null
  ) => {
    return (
      <select onChange={this.selectProject} value={selectedProject || ""}>
        {_.map(projects, (project, index) => (
          <option value={project} key={index}>
            {project}
          </option>
        ))}
      </select>
    );
  };
  public renderEmployees = (
    projects: string[],
    selectedEmployee?: string | null
  ) => {
    return (
      <select onChange={this.selectEmployee} value={selectedEmployee || ""}>
        {_.map(projects, (project, index) => (
          <option value={project} key={index}>
            {project}
          </option>
        ))}
      </select>
    );
  };

  public selectProject = (e: any) => {
    this.props.selectProject(e.target.value);
  };

  public selectEmployee = (e: any) => {
    this.props.selectEmployee(e.target.value);
  };

  public handleAssign = () => {
    // tslint:disable-next-line no-console
    // this.setState({ currentProject: value });
  };

  public render() {
    const {
      projects,
      employees,
      selectedProject,
      selectedEmployee,
      onClick
    } = this.props;
    if (_.isEmpty(projects)) {
      return null;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.renderProjects(projects, selectedProject)}
          {this.renderEmployees(employees, selectedEmployee)}
          <button onClick={onClick}>Assign</button>
        </form>
      </div>
    );
  }
}
