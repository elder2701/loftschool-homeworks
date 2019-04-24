import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;

    const HeaderLayout = this.renderHeader(header);
    const FooterLayout = this.renderFooter(footer);
    return (
      <Fragment>
        <HeaderLayout />
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title">MAIN</SectionTitle>
          {children}
        </main>
        <FooterLayout />
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return () => (
      <HeaderChild>
        <SectionTitle className="header__title">HEADER</SectionTitle>
      </HeaderChild>
    );
  }

  renderFooter(FooterChild) {
    return () => (
      <FooterChild>
        <SectionTitle className="footer__title">FOOTER</SectionTitle>
      </FooterChild>
    );
  }
}

export default Layout;
