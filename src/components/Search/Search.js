//Компонент создает блок поиска

function Search({titleBtn, placeholder}) {
  return (
    <form className="form">
      <input
        type='text'
        className='input'
        placeholder={placeholder}
      />
      <button type='submit' className='btn'>
        {titleBtn}
      </button>
    </form>
  );
}
export default Search;
