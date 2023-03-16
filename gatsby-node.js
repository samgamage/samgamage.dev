const path = require("path");
const _ = require("lodash");

const PAGINATION_OFFSET = 7;

const createPages = (createPage, createRedirect, edges, type) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;
    const pagePath = node.fields.slug;

    if (node.fields.redirects) {
      node.fields.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
    }

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/${type}.jsx`),
      context: {
        id: node.id,
        prev,
        next,
      },
    });
  });
};

const createPaginatedPages = (createPage, edges, pathPrefix, context, type) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET);

    if (!acc[pageIndex]) {
      acc[pageIndex] = [];
    }

    acc[pageIndex].push(value.node.id);

    return acc;
  }, []);

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`;
    const nextPagePath =
      index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`;

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: path.resolve(`src/templates/${type}.jsx`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    fragment PostFields on Mdx {
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      fields {
        title
        slug
        date
        description
        type
      }
    }

    {
      allMdx(
        filter: { frontmatter: { published: { ne: false } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          next {
            ...PostFields
          }
          node {
            ...PostFields
          }
          previous {
            ...PostFields
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    if (_.isEmpty(data.allMdx)) {
      return Promise.reject("There are no posts!");
    }

    const { edges } = data.allMdx;
    const { createRedirect, createPage } = actions;

    const projectEdges = edges.filter(
      (edge) => edge.node.fields.type === "project"
    );
    const postEdges = edges.filter((edge) => edge.node.fields.type === "post");
    const pageEdges = edges.filter((edge) => edge.node.fields.type === "page");

    createPages(createPage, createRedirect, postEdges, "post");
    createPages(createPage, createRedirect, projectEdges, "project");
    createPages(createPage, createRedirect, pageEdges, "page");
    createPaginatedPages(
      actions.createPage,
      edges,
      "/blog",
      {
        categories: [],
      },
      "blog"
    );
    createPaginatedPages(
      actions.createPage,
      edges,
      "/projects",
      {
        categories: [],
      },
      "projects"
    );
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: [
      {
        canvas: "canvas",
      },
    ],
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const { sourceInstanceName } = parent;
    let slug;
    const titleSlugged = _.join(_.drop(parent.name.split("-"), 3), "-");

    if (sourceInstanceName === "posts") {
      slug = `/blog/${node.frontmatter.slug}` || titleSlugged;
    } else if (sourceInstanceName === "projects") {
      slug = `/projects/${node.frontmatter.slug}` || titleSlugged;
    } else {
      slug = node.frontmatter.slug || titleSlugged;
    }

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "published",
      node,
      value: node.frontmatter.published,
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    });

    createNodeField({
      name: "description",
      node,
      value: node.frontmatter.description,
    });

    createNodeField({
      name: "source",
      node,
      value: node.frontmatter.source,
    });

    createNodeField({
      name: "url",
      node,
      value: node.frontmatter.url,
    });

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });

    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(" ")[0] : "",
    });

    createNodeField({
      name: "type",
      node,
      value:
        typeof sourceInstanceName === "string"
          ? sourceInstanceName.substring(0, sourceInstanceName.length - 1)
          : sourceInstanceName,
    });

    createNodeField({
      name: "tags",
      node,
      value: node.frontmatter.tags || [],
    });

    createNodeField({
      name: "keywords",
      node,
      value: node.frontmatter.keywords || [],
    });

    createNodeField({
      name: "redirects",
      node,
      value: node.frontmatter.redirects,
    });
  }
};
