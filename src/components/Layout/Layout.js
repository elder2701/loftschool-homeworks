import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    let classNameMain = `main ${header ? 'main--with-header' : ''} ${
      footer ? 'main--with-footer' : ''
    }`;

    return (
      <Fragment>
        {header && this.renderHeader(header)}
        <main className={classNameMain}>
          <SectionTitle className="main__title">MAIN</SectionTitle>
          {children}
        </main>
        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">HEADER</SectionTitle>
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title">FOOTER</SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
