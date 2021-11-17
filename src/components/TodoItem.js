import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import { pink600 } from "material-ui/styles/colors";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      checked: false
    };
  }

  remove() {
    this.props.removeItem(this.props.objectId);
  }

  update() {
    this.props.updateItem(this.props.objectId);
  }
  render() {
    return (
      <div className="todo-item">
        <ListItem
          primaryText={
            <span
              className={
                this.state.checked || this.props.checked ? "cross-out" : ""
              }
            >
              {this.props.itemText}
            </span>
          }
          leftCheckbox={
            <Checkbox
              checked={this.state.checked || this.props.checked}
              onClick={this.update}
            />
          }
          rightIconButton={
            <IconButton
              tooltip="remove"
              tooltipPosition="bottom-right"
              onClick={this.onClick}
              iconStyle={{ color: pink600 }}
            >
              <DeleteIcon onClick={this.remove} />
            </IconButton>
          }
        />
      </div>
    );
  }
}
TodoItem.propTypes = {
  itemText: PropTypes.string,
  objectId: PropTypes.string,
  checked: PropTypes.bool,
  removeItem: PropTypes.func,
  updateItem: PropTypes.func
};
export default TodoItem;
