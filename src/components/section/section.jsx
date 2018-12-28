import React from 'react';

export default function Section(props) {
  return (
    <section className="section" aria-label={props.title}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </section>
  )
}
