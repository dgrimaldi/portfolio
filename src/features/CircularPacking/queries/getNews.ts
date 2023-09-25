// npx apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --tagName=gql
import {gql, TypedDocumentNode} from "@apollo/client";

export interface NewsInventoryData{
    totalResults: number,
    articles: NewsInventoryVars[]
}

interface NewsInventoryVars {
    source: string,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

const GET_NEWS: TypedDocumentNode<NewsInventoryData, NewsInventoryVars> = gql`
   query news {
       totalResults,
       articles {
          source,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content
      }
    }
`;

export default GET_NEWS