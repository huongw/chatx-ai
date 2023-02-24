function Form({ handleSubmit, onChange, input }) {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="prompt"
        cols="1"
        rows="1"
        placeholder="Ask ChatX AI..."
        value={input}
        onChange={onChange}
      ></textarea>
      <button type="submit">
        <img src="assets/send.svg" />
      </button>
    </form>
  );
}

export default Form;
