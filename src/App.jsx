import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectIsLoading, selectIsError } from "./redux/selectors";

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="componentsContainer">
        <div>
          <ContactForm />
        </div>
        <div className="searchContainer">
          <SearchBox />
          <ContactList />
          {isLoading && <h1>Loading...</h1>}
          {isError && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
}
