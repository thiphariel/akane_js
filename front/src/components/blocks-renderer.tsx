'use client'

import {
  BlocksRenderer as Blocks,
  type BlocksContent,
} from '@strapi/blocks-react-renderer'

export default function BlocksRenderer({
  content,
}: {
  content: BlocksContent
}) {
  return <Blocks content={content} />
}
