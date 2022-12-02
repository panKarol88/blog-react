export type ArticleType = 'personal' | 'public' | 'all'

export enum ArticleTypeLabels {
  personal = 'Chaotyczne przemyślenia',
  public = 'Warte przeczytania',
  all = 'Wszystkie'
}

export type ArticlePayload = {
  id: number,
  article_type: ArticleType,
  bg_image_url: string
  content: string,
  created_at: string,
  description: string,
  label: string,
  updated_at: string
}

export type BlogStoreParams = {}
