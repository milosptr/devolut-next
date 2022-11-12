import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.HY_CONTENT_API_ENDPOINT

export const getHomepage = async () => {
  const query = gql`
    query Homepages {
      homepages(last: 1) {
        aboutUsDescription {
          html
        }
        aboutUsTitle
        createdAt
        heroDescription
        heroTitle
        id
        midCtaDescription
        midCtaTitle
        ourProcessTitle
        publishedAt
        servicesTitle
        updatedAt
        midCtaButton {
          url
          openInNewTab
          name
        }
        heroButton {
          name
          openInNewTab
          url
        }
        seo {
          description
          title
        }
        ourProcessCards {
          title
          id
          description
          icon {
            url
            id
            fileName
          }
          bigIcon
        }
        services {
          title
          id
          description
          icon {
            url
            id
            fileName
          }
          bigIcon
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.homepages[0]
}

export const getFooter = async () => {
  const query = gql`
    query Footer {
      footers(last: 1) {
        description
        email
        id
        phoneNumber
        firstColumnTitle
        first_column_links {
          url
          label
          id
        }
        secondColumnTitle
        second_column_links {
          url
          label
          id
        }
        thirdColumnTitle
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.footers[0]
}
