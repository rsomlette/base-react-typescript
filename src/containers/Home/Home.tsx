import * as _ from "lodash";
import * as React from "react";
import { AddItem } from "../AddItem/AddItem";

import styled from "styled-components";
import { Attribution } from "../../Components/Attribution";
import { ProjectItem } from "../../Components/ProjectItem";

const ContentWrapper = styled.div`
  display: flex;
`;
const ProjectsListContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IState {
  employees: string[];
  projects: string[];
  currentProject: string;
  currentEmployee: string;
  selectedEmployee?: string;
  selectedProject?: string;
}

export class Home extends React.Component<{}, IState> {
  public state: IState = {
    currentEmployee: "",
    currentProject: "",
    employees: ["robin"],
    projects: []
  };

  public onSubmit = (event: any) => {
    event.preventDefault();
  };

  public addProject = () => {
    this.setState(prevState => ({
      currentProject: "",
      projects: [...prevState.projects, prevState.currentProject]
    }));
  };

  public onCurrentProjectChange = (value: string) => {
    this.setState({ currentProject: value });
  };
  public onSelectProject = (value: string) => {
    this.setState({ selectedProject: value });
  };
  public onSelectEmployee = (value: string) => {
    this.setState({ selectedEmployee: value });
  };

  public renderProject = (projects: string[]) =>
    _.map(projects, (project: string, index: number) => (
      <ProjectItem title={project} key={index} />
    ));

  public render() {
    const {
      projects,
      employees,
      currentProject,
      selectedEmployee,
      selectedProject
    } = this.state;
    return (
      <ContentWrapper>
        <ProjectsListContainer>
          <h2>Project List</h2>
          <ProjectList>{this.renderProject(projects)}</ProjectList>
        </ProjectsListContainer>

        <FormItems>
          <AddItem
            label="Project:"
            value={currentProject}
            onChange={this.onCurrentProjectChange}
            onClick={this.addProject}
          />
          <img
            src="https://zippy.gfycat.com/ImpassionedWeepyAmericangoldfinch.gif"
            alt="img"
            width={100}
            draggable={true}
          />
          <Attribution
            projects={projects}
            employees={employees}
            selectedEmployee={selectedEmployee}
            selectedProject={selectedProject}
            selectProject={this.onSelectProject}
            selectEmployee={this.onSelectEmployee}
            onClick={emptyFunction}
          />
        </FormItems>
      </ContentWrapper>
    );
  }
}

const emptyFunction = () => {
  // tslint:disable-next-line no-console
};
