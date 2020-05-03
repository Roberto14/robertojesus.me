import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import ReactDisqusComments from "react-disqus-comments";

require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

const onNewComment = comment => {
  if (comment) {
    console.log(comment);
  }
};

const PostComments = props => {
  const { classes, slug, post } = props;
  const { frontmatter: { title }} = post;
  const url = `${config.siteUrl}${slug}`; //config.protocol + "://" + config.domain + path;

  return (
    <div id="post-comments" className={classes.postComments}>
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={slug}
        title={title}
        url={url}
        onNewComment={onNewComment}
      />
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
