import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '274sqpdx',
  dataset: 'production',
  apiVersion: '2022-02-13',
  token:
    'sk9PP12GGiH1vhvGKWgPeMboUdPf7k54UOQLwKThuUujmTmragiPViEqlJPQBqIdxE2prVsxGInMB61s3nJoWtrYsR4LAFlj6fXYBAuWmjLucYn0u5YGsvysUlB6VbdyoALZlmhw4gpdb7pb75AjafNRcAGHXumACbMSfZv6GiKxG4XYkpKG',
  useCdn: false,
})
