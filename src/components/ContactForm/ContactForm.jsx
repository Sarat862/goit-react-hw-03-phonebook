import { Component } from "react";
import css from './ContactForm.module.css'

import PropTypes from 'prop-types';

export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    } 

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        const { name, number } = this.state;
        return (
            <form className={css.contactForm} onSubmit={this.handleSubmit}>
                <label className={css.contactForm__field}> Name
                    <input className={css.contactForm__input}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                
                <label className={css.contactForm__field}> Number
                    <input className={css.contactForm__input}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                
                <button className={css.contactForm__btn}type="submit">Add contact</button>
            </form>
        )
    } 
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}