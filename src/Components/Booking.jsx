import "./Booking.css";

const Booking = () => {
  return (
    <section className="section-booking">
      <form>
        <div>
          <select className="departure-city">
            <option>Pick a Departure..</option>
            <option>Hämeenlinna</option>
            <option>Helsinki</option>
            <option>Joensuu</option>
            <option>Jyväskylä</option>
            <option>Kouvola</option>
            <option>Kuopio</option>
            <option>Lahti</option>
            <option>Lappeenranta</option>
            <option>Oulu</option>
            <option>Pori</option>
            <option>Rovaniemi</option>
            <option>Seinäjoki</option>
            <option>Tampere</option>
            <option>Turku</option>
            <option>Vaasa</option>
          </select>
        </div>
        <div>
          <select className="destination-city">
            <option>Pick a Destination..</option>
            <option>Hämeenlinna</option>
            <option>Helsinki</option>
            <option>Joensuu</option>
            <option>Jyväskylä</option>
            <option>Kouvola</option>
            <option>Kuopio</option>
            <option>Lahti</option>
            <option>Lappeenranta</option>
            <option>Oulu</option>
            <option>Pori</option>
            <option>Rovaniemi</option>
            <option>Seinäjoki</option>
            <option>Tampere</option>
            <option>Turku</option>
            <option>Vaasa</option>
          </select>
        </div>
        <div>
          <select className="no-of-people">
            <option>No. of People</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <input className="booking-date" type="date"></input>
        </div>
        <button type="submit" className="primary-btn" id="btn-ticket">
          Order a Ticket
        </button>
      </form>
    </section>
  );
};

export default Booking;
