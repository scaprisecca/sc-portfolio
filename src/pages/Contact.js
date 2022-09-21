
const Contact = () => {

  return (
   <section>
      <form>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" value=""/>

        <label htmlFor="email">Email:</label>
        <input name="email" type="email" value=""/>

        <label htmlFor="message">Message:</label>
        <textarea cols="30" name="message" rows="10" placeholder="Please enter your message here."></textarea>

        <button type="submit">Send</button>
      </form>
   </section>
  );
}

export default Contact;
