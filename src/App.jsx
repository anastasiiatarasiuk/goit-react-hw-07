import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

export default function App() {
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
        </div>
      </div>
    </>
  );
}
