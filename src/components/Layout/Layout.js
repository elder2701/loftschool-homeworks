import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer } = this.props;
    console.log(this.props);
    const HeaderLayout = this.renderHeader(header);
    const FooterLayout = this.renderFooter(footer);
    return (
      <Fragment>
        <HeaderLayout />
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title">MAIN</SectionTitle>
        </main>
        <FooterLayout />
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return () => (
      <header className="header">
        <SectionTitle className="header__title">HEADER</SectionTitle>
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return () => (
      <footer className="footer">
        <SectionTitle className="footer__title">FOTTER</SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
