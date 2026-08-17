"use client";

import { bookingFormOptions, defaultBookingValues } from "@/lib/data/constants";

export function BookingForm() {
  return (
    <div className="booking-card" id="booking-form">
      <h3>
        Book a Priest
        <br />
        for Your Puja Today
      </h3>
      <p className="booking-card-badge">Connecting Devotion with Tradition</p>

      <div className="form-group">
        <label>Select Puja Type</label>
        <div className="form-group-row">
          <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
            <path d="M0 0h2048v2048H0z" fill="none" />
            <path
              fill="currentColor"
              d="M1920 128v1792H0V128h384V0h128v128h896V0h128v128zM128 256v256h1664V256h-256v128h-128V256H512v128H384V256zm1664 1536V640H128v1152zm-440-768l-241 189l101 315l-252-197l-252 197l101-315l-241-189h302l90-280l90 280z"
            />
          </svg>
          <select defaultValue={defaultBookingValues.pujaType}>
            {bookingFormOptions.pujaTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Select Date</label>
        <div className="form-group-row">
          <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path d="M0 0h20v20H0z" fill="none" />
            <path
              fill="currentColor"
              d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"
            />
          </svg>
          <input type="date" defaultValue={defaultBookingValues.date} />
        </div>
      </div>

      <div className="form-group">
        <label>Select Time</label>
        <div className="form-group-row">
          <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m1-17.5h-2v6.914l4 4L16.414 15L13 11.586z"
            />
          </svg>
          <select defaultValue={defaultBookingValues.time}>
            {bookingFormOptions.timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Select Location</label>
        <div className="form-group-row">
          <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M12 2c-4.41 0-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82c0-4.41-3.59-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
            />
          </svg>
          <select defaultValue={defaultBookingValues.location}>
            {bookingFormOptions.locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn-find" onClick={() => alert("Finding best priests for you…")}>
        Find Priest
      </button>
    </div>
  );
}
