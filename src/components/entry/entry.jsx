import React from 'react';

export default function Entry(props) {
  return (
    <div className="entry">
      <h3 className="entry__title">{props.title}, <a href={props.linkUrl}>{props.linkText}</a></h3>
      <span class="entry__date">{props.dates}</span>
      {props.children}
    </div>
  )
}
