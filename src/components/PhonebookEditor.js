import React, { Component } from "react";
import style from "../styles/PhoneBook.module.css";
import { v4 as uuidv4 } from "uuid";
class PhonebookEditor extends Component {
  static defaultProps = {
    name: "no name",
    number: "no number",
  };
  state = { name: "", number: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      ...this.state,
    };
    this.props.addContacts(contact);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <label>
              name
              <input
                className={style.inputField}
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
              />
            </label>
            <label>
              number
              <input
                className={style.inputField}
                type="text"
                value={number}
                onChange={this.handleChange}
                name="number"
              />
            </label>

            <button className={style.buttonAdd} type="submit">
              add
            </button>
          </form>
          <div></div>
        </div>
      </>
    );
  }
}
export default PhonebookEditor;
