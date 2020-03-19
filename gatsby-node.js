const path = require(`path`);
const slugify = require('slugify');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const singleProduct = path.resolve(`src/components/Modal/Product.js`)
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
    result.data.allDatoCmsProduct.nodes.forEach(product => {
        const slugifiedTitle = slugify(product.productname, { lower: true });
        createPage({
            path: `offer/${slugifiedTitle}`,
            component: singleProduct,
            context: {
                id: product.id,
            },
        })
    })
}