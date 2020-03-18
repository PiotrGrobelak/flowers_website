const path = require(`path`);
const slugify = require('slugify');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/components/Modal/Product.js`)
    const result = await graphql(`
    query MyQuery {
        allDatoCmsProduct {
          nodes {
            id
            productname
            }
          }
        }
    `);

    // console.log(result.data.allDatoCmsProduct.nodes)

    result.data.allDatoCmsProduct.nodes.forEach(product => {

        const slugifiedTitle = slugify(product.productname, { lower: true });
        // console.log(slugifiedTitle)
        // console.log(product.id);
        // console.log(product)
        createPage({
            // Path for this page — required
            path: `offer/${slugifiedTitle}`,
            component: blogPostTemplate,
            context: {
                id: product.id
            },
        })
    })
}