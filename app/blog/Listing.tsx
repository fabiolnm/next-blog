'use client'

import {
  Card, CardActionArea, CardContent, Divider, Pagination, Typography
} from "@mui/material"
import { usePathname, useRouter } from "next/navigation"

export function Listing(
  { pages, searchParams }: { pages: any[], searchParams?: any }
) {
  const router = useRouter()
  const { k, p } = searchParams ?? { k: '', p: '1' }

  const currentPage = +(p ?? 1)
  const pageSize = 2
  const endIndex = currentPage * pageSize
  const startIndex = endIndex - pageSize

  const filteredPages = !k ? pages :
    pages.filter(({ metadata }) => metadata.keywords?.includes(k))

  const pathname = usePathname()

  function paginate (pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set('p', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  };

  return (
    <>
      <Typography variant="h6" component="h1" gutterBottom>
        Posts
      </Typography>
      {
        filteredPages.slice(startIndex, endIndex).map(({ date, path, metadata }) => (
          <CardActionArea key={path} href={`/en/${path}`}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  { metadata.title }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="em">
                  { date.toDateString() }
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1">
                  { metadata.description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ') }
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))
      }
      { filteredPages.length > pageSize && (
        <Pagination count={Math.ceil(filteredPages.length / pageSize)}
          variant="outlined"
          shape="rounded"
          defaultPage={Number(p || 1)}
          onChange={(_, p) => router.push(paginate(p), { scroll: false })}
        />
      )}
    </>
  )
}
