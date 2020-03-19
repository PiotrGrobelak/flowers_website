import { graphql } from 'gatsby'


export const queryProducts = graphql`
{
    allDatoCmsProduct {
        nodes {
            id
            originalId
        }
    }
}
`