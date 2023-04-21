import React, { Component } from 'react';
import Title from './Title';
import {FaBusinessTime, FaMugHot, FaBirthdayCake } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaMugHot />,
        title: 'Detailed information',
        info: 'offer a variety of new and creative designs, with detailed information, specifications, and pricing.',
      },

      {
        icon: <FaBusinessTime />,
        title: 'Customer History Saved!',
        info: 'Provide customers with access to order history reports, which can help them make informed purchasing decisions.',
      },
      {
        icon: <FaBirthdayCake />,
        title: 'Customized Orders',
        info: 'Allow customers to schedule test drives of vehicles they are interested in purchasing.',
      },
    ],
  };

  render() {
    let { services } = this.state;

    const servicesList = services.map((service, index) => {
      let { icon, title, info } = service;

      return (
        <article key={index} className="service">
          <span>{icon}</span>
          <h6>{title}</h6>
          <p>{info}</p>
        </article>
      );
    });

    return (
      <section className="services">
        <Title title="Our Services" />
        <div className="services-center">{servicesList}</div>
      </section>
    );
  }
}