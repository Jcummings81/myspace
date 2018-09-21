import React from 'react';
import {
  List,
  Button,
  Input,
} from 'semantic-ui-react';
import { deletePage, updatePage } from '../reducers/pages';
import { connect } from 'react-redux';

class Page extends React.Component {
  state = { editing: false, name: this.props.page.name }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  cancelEdit = () => {
    this.setState({ editing: false, name: this.props.page.name})
  }

  editPage = () => {
    const { dispatch } = this.props
    let id = this.props.page.id
    let page = { name: this.state.name }
    dispatch(updateCharacter(page, id));
    this.toggleEdit();

  }

  deleteCharacter = () => {
    const { dispatch } = this.props;
    let id = this.props.page.id
    dispatch(deletePage(id))
    this.toggleEdit();
  }

  render() {
    if(this.state.editing)
      return(
        <List.Item as='h3'>
          <Input type='text' defaultValue={this.state.name} onChange={this.handleChange} />
          <Button onClick={this.cancelEdit}>Cancel</Button>
          <Button primary onClick={this.editPage}>Save</Button>
          <Button color="red" onClick={this.deletePage}>Delete</Button>
        </List.Item>
      )
    return(
      <List.Item as='h3' onClick={this.toggleEdit}>
        {this.state.name}
      </List.Item>
    )
  }
}

export default connect()(Page);
