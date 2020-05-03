import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";

const styles = theme => ({});

const SocialLink = ({ url, name }) => (
  <a href={url} key={name} target="_blank" rel="noopener noreferrer" title={name}>
    {name}
  </a>
);

SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const twitter = config.authorSocialLinks.find(item => item.name == "twitter")
const linkedin = config.authorSocialLinks.find(item => item.name == "linkedin")

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        <Content>
          Feel free to contact me through social media <SocialLink {...twitter} />
          , <SocialLink {...linkedin} /> or by email: <Obfuscate email={config.contactEmail} />
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
