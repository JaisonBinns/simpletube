import React from "react";
import { TextField, Container } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Container component="header" maxWidth="xs">
        <form
          onSubmit={this.onFormSubmit}
          className="classes.root"
          noValidate
          autoComplete="off"
        >
          <div className="Textfield">
            <TextField
              id="standard-basic"
              label="Search"
              fullWidth
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </Container>
    );
  }
}

export default SearchBar;
