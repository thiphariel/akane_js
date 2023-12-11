import { type BlocksContent } from '@strapi/blocks-react-renderer'

export interface MenuItems {
  data?: MenuItem[]
}

type MenuItem = {
  id: number
  title: string
  url?: string
}

export type Screenshot = {
  id: string
  name: string
  width: number
  height: number
  url: string
}

export type Project = {
  id: string
  name: string
  description: BlocksContent
  active: boolean
  open: boolean
  createdAt: string
  updatedAt: string
  type: string
  screenshots: Screenshot[]
}
