import { getTextContent, getDateValue } from 'notion-utils'
import { NotionAPI } from 'notion-client'

async function getPageProperties (id: string, block: any, schema: any, authToken?: string) {
  const api = new NotionAPI({ authToken })
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const excludeProperties = ['date', 'select', 'multi_select', 'person']
  const properties: {
    id: string,
    date: { start_date: string },
    type: string[],
    slug: string,
    summary: string,
    title: string,
    status: string[]
  } = {} as any
  type TPropertiesKey =  keyof typeof properties;
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i]
    properties.id = id
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name as TPropertiesKey] = getTextContent(val as any) as any
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val as any)
          // @ts-ignore
          delete dateProperty.type
          // @ts-ignore
          properties[schema[key].name] = dateProperty
          break
        }
        case 'select':
        case 'multi_select': {
          const selects = getTextContent(val as any)
          if (selects[0]?.length) {
            // @ts-ignore
            properties[schema[key].name] = selects.split(',')
          }
          break
        }
        case 'person': {
          // @ts-ignore
          const rawUsers = val.flat()
          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res = await api.getUsers(userId)
              const resValue =
              // @ts-ignore
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo
              }
              users.push(user)
            }
          }
          // @ts-ignore
          properties[schema[key].name] = users
          break
        }
        default:
          break
      }
    }
  }
  return properties
}

export { getPageProperties as default }
