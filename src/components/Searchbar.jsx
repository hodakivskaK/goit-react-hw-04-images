import PropTypes from 'prop-types';
import { useState } from 'react'
import c from './Searchbar.module.css'
import { toast } from 'react-toastify';
import { FaSearch } from "react-icons/fa";

export const Searchbar = ({onSubmit}) => {
    const [nameSearch, UseNameSearch] = useState("");

    const handleInput = (e) => {
        UseNameSearch(e.currentTarget.value.toLowerCase())
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameSearch.trim() === '') {
            return toast.warn("Please write something")
        }

        onSubmit(nameSearch);
        UseNameSearch("");
        e.currentTarget.reset();
    }


     return (<header className={c.Searchbar}>
    <form className={c.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={c.SearchFormButton}>
                <span className="button-label">
                <h3>
     <FaSearch />
    </h3>

                </span> 
    </button>

    <input
      className={c.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    onChange={handleInput}
    />
        </form>
    
    </header>)
    }

Searchbar.propTypes = {
    onSubmit: PropTypes.func
};
