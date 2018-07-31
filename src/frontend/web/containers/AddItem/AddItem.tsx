import * as React from "react";
import styled from "styled-components";

const CustomForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

interface IProps {
  label: string;
  value: string;
  onClick: () => void;
  onChange: (value: string) => void;
}

export class AddItem extends React.Component<IProps> {
  public onSubmit = (event: any) => {
    event.preventDefault();
  };

  public onCurrentProjectChange = (event: any) => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  public render() {
    const { value, onClick, label } = this.props;
    return (
      <CustomForm onSubmit={this.onSubmit}>
        <label>{label}</label>
        <input onChange={this.onCurrentProjectChange} value={value} />
        <button onClick={onClick}>Add Project</button>
      </CustomForm>
    );
  }
}
