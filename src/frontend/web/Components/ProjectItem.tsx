import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: palegreen;
  height: 5em;
`;

interface IProps {
  title: string;
}

export class ProjectItem extends React.Component<IProps> {
  public onDrop = (event: any) => {
    event.preventDefault();
    // tslint:disable-next-line no-console
    console.info("❤️ drop", event);

    try {
      // tslint:disable-next-line no-console
      console.info("🧡", event.dataTransfer);
    } catch (e) {
      // If the text data isn't parsable we'll just ignore it.
      // tslint:disable-next-line no-console
      console.info("💛 catch");
      return;
    }
  };
  public onDragOver = (event: any) => {
    event.preventDefault();
    // tslint:disable-next-line no-console
    console.warn("dragOver", event);
  };

  public render() {
    const { title } = this.props;
    return (
      <Container onDrop={this.onDrop} onDragOver={this.onDragOver}>
        {title}
      </Container>
    );
  }
}
