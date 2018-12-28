import React from 'react';
import Section from '../section/section';
import Entry from '../entry/entry';

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="intro">The personal resume of <a href="https://nickrigby.uk"><strong>Nick Rigby</strong></a>, a web developer based in Baltimore MD.</h1>
      <Section title="Experience">
        <Entry title="Director of Web Development" dates="August 2015&mdash;Present" linkText="idfive" linkUrl="https://idfive.com">
          <ul class="entry__list">
						<li>Lead a team of 10+ developers, to produce industry leading digital products.</li>
						<li>Implement development best practices and documentation.</li>
            <li>Maintain in-house component library that allows rapid assembly of complex web pages.</li>
            <li>Work with technologies such as VueJs, GraphQL and Node to build flexible web applications.</li>
					</ul>
        </Entry>
        <Entry title="Senior UX/UI Developer" dates="September 2013&mdash;August 2015" linkText="idfive" linkUrl="https://idfive.com">
          <ul class="entry__list">
						<li>Integrate front-end builds into CMS platforms such as <a href="https://www.drupal.org/">Drupal</a> and <a href="https://wordpress.org/">WordPress</a>.</li> 
						<li>Build pixel-perfect, accessible and responsive websites using a mobile-first approach.</li>
						<li>Provide UX strategy, wireframing and interaction design.</li>
					</ul>
        </Entry>
        <Entry title="Senior UX Developer" dates="May 2011&mdash;September 2013" linkText="The Economist / CQ Roll Call" linkUrl="http://cqrollcall.com">
          <ul class="entry__list">
						<li>Planned and conducted research to understand user needs.</li>
						<li>Designed Information Architecture and workflows to build intuitive interfaces.</li>
						<li>Produced sketches, wireframes and prototypes to articulate ideas.</li>
						<li>Developed complex web interfaces, utilising HTML, CSS and JavaScript.</li>
						<li>Used responsive web design techniques to build sites that work across many screen sizes.</li>
					</ul>
        </Entry>
        <Entry title="Web Developer" dates="May 2006&mdash;Present" linkText="Nick Rigby" linkUrl="https://nickrigby.uk">
          <ul class="entry__list">
						<li>Development of accessible, user-focused websites, using <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript.</li>
						<li>Development of enterprise-level ecommerce websites, using <a href="http://magentocommerce.com/">Magento</a> and <a href="https://woocommerce.com">WooCommerce</a>.</li>
						<li>Development of custom CMS platforms, using open-source PHP frameworks <a href="http://codeigniter.com/">CodeIgniter</a> and <a href="http://laravel.com/">Laravel</a>.</li>
						<li>Production of pixel-perfect <abbr title="Hypertext Markup Language">HTML</abbr> layouts from <abbr title="PhotoShop Document">PSD</abbr> and Sketch files.</li>
					</ul>
        </Entry>
        <Entry title="Web Technologist" dates="January 2005&mdash;June 2006" linkText="Cimex Media" linkUrl="#">
          <ul class="entry__list"> 
						<li>Client-side development for <abbr title="United Kingdom">UK</abbr> government departments and blue-chip clients, such as <a href="http://yahoo.com/">Yahoo!</a>.</li> 
						<li>Worked to <abbr title="Web Accessibility Initiative">WAI</abbr>, <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>, <abbr title="World Wide Web Consortium">W3C</abbr> and <abbr title="United Kingdom">UK</abbr> government accessibility guidelines.</li> 
						<li>Implemented advanced JavaScript techniques to enhance the user experience.</li> 
						<li>Usability testing, and user-centered design approach to ensure products met user needs.</li> 
						<li>Introduction of guidelines and templates for use by all web technologists.</li> 
					</ul>
        </Entry>
      </Section>
      <Section title="Education">
        <Entry title="BSc Computer Science" dates="1997&mdash;2001" linkText="University of Sunderland" linkUrl="https://sunderland.ac.uk">
          <ul class="entry__list">
						<li>Achieved degree class of 2.1 (second class, upper division) with honours.</li>
						<li>Extensive object-oriented programming using C++ and JAVA.</li> 
						<li>Solid understanding of software engineering principles.</li> 
						<li>Firm foundation in systems analysis and design.</li> 
					</ul>
        </Entry>
      </Section>
      <Section title="Skills Reel">
        <ul>
          <li>VueJs</li>
          <li>React</li>
          <li>AngularJs</li>
          <li>JavaScript/ES6/Typescript</li>
          <li>PHP</li>
          <li>WordPress</li>
          <li>Drupal</li>
          <li>Laravel</li>
          <li>Webpack/Gulp</li>
          <li>CSS/SASS</li>
          <li>HTML</li>
          <li>GraphQL</li>
          <li>Git/Gitflow </li>
          <li>Node/NPM</li>
        </ul>
      </Section>
    </div>
  )
}
